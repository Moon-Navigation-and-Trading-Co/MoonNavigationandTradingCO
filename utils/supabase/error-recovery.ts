import { createClient } from './client';
import { logError } from '../logError';

export interface RecoveryAction {
  id: string;
  name: string;
  description: string;
  action: () => Promise<boolean>;
  autoRetry: boolean;
  maxRetries: number;
}

export class ErrorRecoveryManager {
  private supabase: any;
  private recoveryActions: Map<string, RecoveryAction> = new Map();

  constructor() {
    this.supabase = createClient();
    this.initializeRecoveryActions();
  }

  private initializeRecoveryActions() {
    // Connection recovery
    this.recoveryActions.set('connection', {
      id: 'connection',
      name: 'Reconnect to Database',
      description: 'Attempts to re-establish database connection',
      action: async () => {
        try {
          const { data, error } = await this.supabase
            .from('error_logs')
            .select('count')
            .limit(1);
          return !error;
        } catch (err) {
          return false;
        }
      },
      autoRetry: true,
      maxRetries: 3
    });

    // RLS policy recovery
    this.recoveryActions.set('rls', {
      id: 'rls',
      name: 'Reset RLS Policies',
      description: 'Attempts to reset Row Level Security policies',
      action: async () => {
        try {
          // This would need to be implemented with actual RLS reset logic
          logError('RLS recovery not implemented', {});
          return false;
        } catch (err) {
          return false;
        }
      },
      autoRetry: false,
      maxRetries: 1
    });

    // Auth recovery
    this.recoveryActions.set('auth', {
      id: 'auth',
      name: 'Refresh Authentication',
      description: 'Attempts to refresh user authentication',
      action: async () => {
        try {
          const { data: { user }, error } = await this.supabase.auth.getUser();
          return !error;
        } catch (err) {
          return false;
        }
      },
      autoRetry: true,
      maxRetries: 2
    });
  }

  async attemptRecovery(errorType: string, context?: any): Promise<boolean> {
    const action = this.recoveryActions.get(errorType);
    
    if (!action) {
      logError(`No recovery action found for error type: ${errorType}`, context);
      return false;
    }

    logError(`Attempting recovery for: ${action.name}`, { errorType, context });

    let attempts = 0;
    while (attempts < action.maxRetries) {
      try {
        const success = await action.action();
        
        if (success) {
          logError(`Recovery successful for: ${action.name}`, { attempts: attempts + 1 });
          return true;
        }
        
        attempts++;
        
        if (attempts < action.maxRetries) {
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
        }
      } catch (error) {
        logError(`Recovery attempt ${attempts + 1} failed for: ${action.name}`, error);
        attempts++;
      }
    }

    logError(`Recovery failed after ${attempts} attempts for: ${action.name}`, { errorType, context });
    return false;
  }

  async autoRecover(error: any, context?: any): Promise<boolean> {
    const errorType = this.detectErrorType(error);
    
    if (!errorType) {
      return false;
    }

    const action = this.recoveryActions.get(errorType);
    
    if (!action || !action.autoRetry) {
      return false;
    }

    return await this.attemptRecovery(errorType, context);
  }

  private detectErrorType(error: any): string | null {
    if (!error) return null;

    const errorMessage = error.message || error.toString();
    const errorCode = error.code;

    // Connection errors
    if (errorMessage.includes('connection') || 
        errorMessage.includes('network') ||
        errorCode === 'ECONNREFUSED') {
      return 'connection';
    }

    // RLS errors
    if (errorMessage.includes('RLS') || 
        errorMessage.includes('policy') ||
        errorCode === 'PGRST301') {
      return 'rls';
    }

    // Auth errors
    if (errorMessage.includes('auth') || 
        errorMessage.includes('token') ||
        errorMessage.includes('unauthorized')) {
      return 'auth';
    }

    return null;
  }

  getAvailableRecoveryActions(): RecoveryAction[] {
    return Array.from(this.recoveryActions.values());
  }

  addRecoveryAction(action: RecoveryAction): void {
    this.recoveryActions.set(action.id, action);
  }
}

export const errorRecovery = new ErrorRecoveryManager();

// Circuit breaker pattern for database operations
export class CircuitBreaker {
  private failureCount = 0;
  private lastFailureTime = 0;
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  private readonly failureThreshold = 5;
  private readonly timeout = 60000; // 1 minute

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        this.state = 'HALF_OPEN';
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess(): void {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }

  private onFailure(): void {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }

  getState(): string {
    return this.state;
  }

  getFailureCount(): number {
    return this.failureCount;
  }
}

export const circuitBreaker = new CircuitBreaker();
