'use client';

import { useState, useEffect } from 'react';
import { dbOptimizer, connectionManager, queryCache } from '@/utils/supabase/performance-optimizer';
import { createClient } from '@/utils/supabase/client';
import { logError } from '@/utils/logError';

interface DatabaseStats {
  totalQueries: number;
  averageExecutionTime: number;
  slowQueries: number;
  errorRate: number;
  cacheHitRate: number;
}

export default function DatabaseMonitorPage() {
  const [stats, setStats] = useState<DatabaseStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [realTimeData, setRealTimeData] = useState<any[]>([]);

  useEffect(() => {
    updateStats();
    const interval = setInterval(updateStats, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const updateStats = () => {
    const metrics = dbOptimizer.getPerformanceMetrics();
    const slowQueries = dbOptimizer.getSlowQueries();
    const averageTime = dbOptimizer.getAverageExecutionTime();
    
    const totalQueries = metrics.length;
    const errorCount = metrics.filter(m => !m.success).length;
    const errorRate = totalQueries > 0 ? (errorCount / totalQueries) * 100 : 0;
    
    setStats({
      totalQueries,
      averageExecutionTime: averageTime,
      slowQueries: slowQueries.length,
      errorRate,
      cacheHitRate: 0 // Would need to implement cache hit tracking
    });

    setRealTimeData(metrics.slice(-10).reverse());
  };

  const testDatabasePerformance = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      
      // Test different types of queries
      await dbOptimizer.executeQuery(
        async () => {
          const { data, error } = await supabase.from('error_logs').select('*').limit(10);
          return { data, error };
        },
        'Select error logs'
      );

      await dbOptimizer.executeQuery(
        async () => {
          const { data, error } = await supabase.from('profiles').select('*').limit(5);
          return { data, error };
        },
        'Select profiles'
      );

      await dbOptimizer.executeQuery(
        async () => {
          const { data, error } = await supabase.auth.getUser();
          return { data: data?.user, error };
        },
        'Get current user'
      );

      updateStats();
    } catch (error) {
      logError('Database performance test failed', error);
    } finally {
      setLoading(false);
    }
  };

  const clearMetrics = () => {
    dbOptimizer.clearMetrics();
    queryCache.clear();
    updateStats();
  };

  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'text-green-600';
    if (time < 500) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getErrorColor = (success: boolean) => {
    return success ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Database Performance Monitor</h1>
        <div className="space-x-4">
          <button
            onClick={testDatabasePerformance}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Run Performance Test'}
          </button>
          <button
            onClick={clearMetrics}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Clear Metrics
          </button>
        </div>
      </div>

      {/* Performance Stats */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Queries</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalQueries}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Avg Execution Time</h3>
            <p className={`text-3xl font-bold ${getPerformanceColor(stats.averageExecutionTime)}`}>
              {stats.averageExecutionTime.toFixed(2)}ms
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Slow Queries</h3>
            <p className={`text-3xl font-bold ${stats.slowQueries > 0 ? 'text-red-600' : 'text-green-600'}`}>
              {stats.slowQueries}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Error Rate</h3>
            <p className={`text-3xl font-bold ${stats.errorRate > 5 ? 'text-red-600' : 'text-green-600'}`}>
              {stats.errorRate.toFixed(1)}%
            </p>
          </div>
        </div>
      )}

      {/* Real-time Query Log */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Real-time Query Log</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Query
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Execution Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rows
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {realTimeData.map((query, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {query.query}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${getPerformanceColor(query.executionTime)}`}>
                    {query.executionTime.toFixed(2)}ms
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {query.rowsReturned}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${getErrorColor(query.success)}`}>
                    {query.success ? '✅ Success' : '❌ Error'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(query.timestamp).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cache Statistics */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Cache Statistics</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Cache Size</h3>
              <p className="text-2xl font-bold text-blue-600">{queryCache.size()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Cache Hit Rate</h3>
              <p className="text-2xl font-bold text-green-600">N/A</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Memory Usage</h3>
              <p className="text-2xl font-bold text-gray-600">N/A</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
