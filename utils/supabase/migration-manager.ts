import { createClient } from '@supabase/supabase-js';
import { logError } from '../logError';

export interface Migration {
  id: string;
  name: string;
  version: string;
  description: string;
  up: string;
  down: string;
  executed: boolean;
  executedAt?: Date;
  checksum: string;
}

export class MigrationManager {
  private supabase: any;

  constructor() {
    this.supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }

  async initializeMigrationsTable(): Promise<boolean> {
    try {
      const { error } = await this.supabase.rpc('exec_sql', {
        sql: `
          CREATE TABLE IF NOT EXISTS schema_migrations (
            id SERIAL PRIMARY KEY,
            migration_id VARCHAR(255) UNIQUE NOT NULL,
            name VARCHAR(255) NOT NULL,
            version VARCHAR(50) NOT NULL,
            description TEXT,
            checksum VARCHAR(255) NOT NULL,
            executed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `
      });

      if (error) {
        logError('Failed to initialize migrations table', error);
        return false;
      }

      return true;
    } catch (error) {
      logError('Failed to initialize migrations table', error);
      return false;
    }
  }

  async getExecutedMigrations(): Promise<Migration[]> {
    try {
      const { data, error } = await this.supabase
        .from('schema_migrations')
        .select('*')
        .order('executed_at', { ascending: true });

      if (error) {
        logError('Failed to get executed migrations', error);
        return [];
      }

      return (data || []).map((migration: any) => ({
        id: migration.migration_id,
        name: migration.name,
        version: migration.version,
        description: migration.description,
        up: '', // Not stored in DB
        down: '', // Not stored in DB
        executed: true,
        executedAt: new Date(migration.executed_at),
        checksum: migration.checksum
      }));
    } catch (error) {
      logError('Failed to get executed migrations', error);
      return [];
    }
  }

  async executeMigration(migration: Migration): Promise<boolean> {
    try {
      // Execute the migration SQL
      const { error: execError } = await this.supabase.rpc('exec_sql', {
        sql: migration.up
      });

      if (execError) {
        logError(`Failed to execute migration ${migration.id}`, execError);
        return false;
      }

      // Record the migration as executed
      const { error: recordError } = await this.supabase
        .from('schema_migrations')
        .insert([{
          migration_id: migration.id,
          name: migration.name,
          version: migration.version,
          description: migration.description,
          checksum: migration.checksum
        }]);

      if (recordError) {
        logError(`Failed to record migration ${migration.id}`, recordError);
        return false;
      }

      logError(`Migration ${migration.id} executed successfully`, {});
      return true;
    } catch (error) {
      logError(`Failed to execute migration ${migration.id}`, error);
      return false;
    }
  }

  async rollbackMigration(migration: Migration): Promise<boolean> {
    try {
      // Execute the rollback SQL
      const { error: execError } = await this.supabase.rpc('exec_sql', {
        sql: migration.down
      });

      if (execError) {
        logError(`Failed to rollback migration ${migration.id}`, execError);
        return false;
      }

      // Remove the migration record
      const { error: deleteError } = await this.supabase
        .from('schema_migrations')
        .delete()
        .eq('migration_id', migration.id);

      if (deleteError) {
        logError(`Failed to remove migration record ${migration.id}`, deleteError);
        return false;
      }

      logError(`Migration ${migration.id} rolled back successfully`, {});
      return true;
    } catch (error) {
      logError(`Failed to rollback migration ${migration.id}`, error);
      return false;
    }
  }

  async getMigrationStatus(): Promise<{
    total: number;
    executed: number;
    pending: number;
    lastExecuted?: Date;
  }> {
    try {
      const executed = await this.getExecutedMigrations();
      
      // This would need to be implemented to get all available migrations
      const total = executed.length; // Simplified for now
      
      return {
        total,
        executed: executed.length,
        pending: total - executed.length,
        lastExecuted: executed.length > 0 ? executed[executed.length - 1].executedAt : undefined
      };
    } catch (error) {
      logError('Failed to get migration status', error);
      return {
        total: 0,
        executed: 0,
        pending: 0
      };
    }
  }

  generateChecksum(content: string): string {
    // Simple checksum implementation
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }
}

export const migrationManager = new MigrationManager();
