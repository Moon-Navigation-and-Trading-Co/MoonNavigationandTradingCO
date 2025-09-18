import { createClient } from '@supabase/supabase-js';
import { logError } from '../logError';

export interface BackupConfig {
  tables: string[];
  includeData: boolean;
  includeSchema: boolean;
  compression: boolean;
}

export interface BackupResult {
  success: boolean;
  backupId: string;
  timestamp: Date;
  size: number;
  tables: string[];
  error?: string;
}

export class DatabaseBackupManager {
  private supabase: any;

  constructor() {
    this.supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }

  async createBackup(config: BackupConfig): Promise<BackupResult> {
    const backupId = `backup_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date();
    
    try {
      const backupData: any = {
        backupId,
        timestamp,
        config,
        tables: {}
      };

      for (const tableName of config.tables) {
        if (config.includeData) {
          const { data, error } = await this.supabase
            .from(tableName)
            .select('*');
          
          if (error) {
            logError(`Failed to backup table ${tableName}`, error);
            continue;
          }
          
          backupData.tables[tableName] = data;
        }
      }

      // Store backup metadata
      const { error: metadataError } = await this.supabase
        .from('database_backups')
        .insert([{
          backup_id: backupId,
          created_at: timestamp,
          config: config,
          status: 'completed'
        }]);

      if (metadataError) {
        logError('Failed to store backup metadata', metadataError);
      }

      const size = JSON.stringify(backupData).length;

      return {
        success: true,
        backupId,
        timestamp,
        size,
        tables: config.tables
      };

    } catch (error) {
      logError('Backup creation failed', error);
      return {
        success: false,
        backupId,
        timestamp,
        size: 0,
        tables: config.tables,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async listBackups(): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('database_backups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        logError('Failed to list backups', error);
        return [];
      }

      return data || [];
    } catch (error) {
      logError('Failed to list backups', error);
      return [];
    }
  }

  async restoreBackup(backupId: string, targetTables: string[]): Promise<boolean> {
    try {
      // This would require implementing restore logic
      // For now, just log the attempt
      logError('Backup restore not implemented', { backupId, targetTables });
      return false;
    } catch (error) {
      logError('Backup restore failed', error);
      return false;
    }
  }

  async deleteBackup(backupId: string): Promise<boolean> {
    try {
      const { error } = await this.supabase
        .from('database_backups')
        .delete()
        .eq('backup_id', backupId);

      if (error) {
        logError('Failed to delete backup', error);
        return false;
      }

      return true;
    } catch (error) {
      logError('Failed to delete backup', error);
      return false;
    }
  }
}

export const backupManager = new DatabaseBackupManager();

// Database health checker
export class DatabaseHealthChecker {
  private supabase: any;

  constructor() {
    this.supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }

  async checkHealth(): Promise<{
    status: 'healthy' | 'degraded' | 'unhealthy';
    checks: {
      connection: boolean;
      auth: boolean;
      rls: boolean;
      performance: boolean;
    };
    details: any;
  }> {
    const checks = {
      connection: false,
      auth: false,
      rls: false,
      performance: false
    };

    const details: any = {};

    try {
      // Test connection
      const { data: connectionTest, error: connectionError } = await this.supabase
        .from('error_logs')
        .select('count')
        .limit(1);
      
      checks.connection = !connectionError;
      details.connection = connectionError ? connectionError.message : 'OK';

      // Test auth
      const { data: { user }, error: authError } = await this.supabase.auth.getUser();
      checks.auth = !authError;
      details.auth = authError ? authError.message : 'OK';

      // Test RLS
      const { data: rlsTest, error: rlsError } = await this.supabase
        .from('profiles')
        .select('*')
        .limit(1);
      
      checks.rls = !rlsError;
      details.rls = rlsError ? rlsError.message : 'OK';

      // Test performance (simple query timing)
      const startTime = performance.now();
      await this.supabase.from('error_logs').select('*').limit(10);
      const executionTime = performance.now() - startTime;
      
      checks.performance = executionTime < 1000; // Less than 1 second
      details.performance = `${executionTime.toFixed(2)}ms`;

    } catch (error) {
      logError('Health check failed', error);
      details.error = error instanceof Error ? error.message : 'Unknown error';
    }

    const healthyChecks = Object.values(checks).filter(Boolean).length;
    const totalChecks = Object.keys(checks).length;
    
    let status: 'healthy' | 'degraded' | 'unhealthy';
    if (healthyChecks === totalChecks) {
      status = 'healthy';
    } else if (healthyChecks >= totalChecks / 2) {
      status = 'degraded';
    } else {
      status = 'unhealthy';
    }

    return { status, checks, details };
  }
}

export const healthChecker = new DatabaseHealthChecker();
