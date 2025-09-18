'use client';

import { useState, useEffect } from 'react';
import { healthChecker, backupManager } from '@/utils/supabase/backup-recovery';
import { migrationManager } from '@/utils/supabase/migration-manager';
import { errorRecovery } from '@/utils/supabase/error-recovery';
import { logError } from '@/utils/logError';

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  checks: {
    connection: boolean;
    auth: boolean;
    rls: boolean;
    performance: boolean;
  };
  details: any;
}

export default function DatabaseHealthPage() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [backups, setBackups] = useState<any[]>([]);
  const [migrationStatus, setMigrationStatus] = useState<any>(null);

  useEffect(() => {
    loadHealthData();
    loadBackups();
    loadMigrationStatus();
  }, []);

  const loadHealthData = async () => {
    setLoading(true);
    try {
      const healthData = await healthChecker.checkHealth();
      setHealth(healthData);
    } catch (error) {
      logError('Failed to load health data', error);
    } finally {
      setLoading(false);
    }
  };

  const loadBackups = async () => {
    try {
      const backupData = await backupManager.listBackups();
      setBackups(backupData);
    } catch (error) {
      logError('Failed to load backups', error);
    }
  };

  const loadMigrationStatus = async () => {
    try {
      const status = await migrationManager.getMigrationStatus();
      setMigrationStatus(status);
    } catch (error) {
      logError('Failed to load migration status', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'degraded': return 'text-yellow-600 bg-yellow-100';
      case 'unhealthy': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCheckIcon = (check: boolean) => {
    return check ? '✅' : '❌';
  };

  const runRecovery = async (errorType: string) => {
    setLoading(true);
    try {
      const success = await errorRecovery.attemptRecovery(errorType);
      if (success) {
        await loadHealthData();
      }
    } catch (error) {
      logError('Recovery failed', error);
    } finally {
      setLoading(false);
    }
  };

  const createBackup = async () => {
    setLoading(true);
    try {
      const result = await backupManager.createBackup({
        tables: ['error_logs', 'profiles', 'users'],
        includeData: true,
        includeSchema: true,
        compression: false
      });
      
      if (result.success) {
        await loadBackups();
      }
    } catch (error) {
      logError('Backup creation failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Database Health Dashboard</h1>
        <div className="space-x-4">
          <button
            onClick={loadHealthData}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh Health'}
          </button>
          <button
            onClick={createBackup}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            Create Backup
          </button>
        </div>
      </div>

      {/* Health Status Overview */}
      {health && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Overall Health Status</h2>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(health.status)}`}>
              {health.status.toUpperCase()}
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span>Database Connection</span>
                <span className="text-lg">{getCheckIcon(health.checks.connection)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Authentication</span>
                <span className="text-lg">{getCheckIcon(health.checks.auth)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Row Level Security</span>
                <span className="text-lg">{getCheckIcon(health.checks.rls)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Performance</span>
                <span className="text-lg">{getCheckIcon(health.checks.performance)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recovery Actions</h2>
            <div className="space-y-2">
              {errorRecovery.getAvailableRecoveryActions().map((action) => (
                <div key={action.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <div className="font-medium">{action.name}</div>
                    <div className="text-sm text-gray-600">{action.description}</div>
                  </div>
                  <button
                    onClick={() => runRecovery(action.id)}
                    disabled={loading}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    Run
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Migration Status */}
      {migrationStatus && (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Database Migrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{migrationStatus.total}</div>
              <div className="text-sm text-gray-600">Total Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{migrationStatus.executed}</div>
              <div className="text-sm text-gray-600">Executed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{migrationStatus.pending}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {migrationStatus.lastExecuted ? 'Yes' : 'No'}
              </div>
              <div className="text-sm text-gray-600">Last Executed</div>
            </div>
          </div>
        </div>
      )}

      {/* Backups */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Database Backups</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Backup ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {backups.map((backup) => (
                <tr key={backup.backup_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {backup.backup_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(backup.created_at).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      backup.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {backup.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => backupManager.deleteBackup(backup.backup_id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
