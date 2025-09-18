import { createClient } from './client';
import { logError } from '../logError';

export interface QueryPerformanceMetrics {
  query: string;
  executionTime: number;
  rowsReturned: number;
  timestamp: Date;
  success: boolean;
  error?: string;
}

class DatabasePerformanceOptimizer {
  private metrics: QueryPerformanceMetrics[] = [];
  private slowQueryThreshold = 1000; // 1 second

  async executeQuery<T>(
    queryFn: () => Promise<{ data: T | null; error: any }>,
    queryName: string
  ): Promise<{ data: T | null; error: any; metrics: QueryPerformanceMetrics }> {
    const startTime = performance.now();
    
    try {
      const result = await queryFn();
      const executionTime = performance.now() - startTime;
      
      const metrics: QueryPerformanceMetrics = {
        query: queryName,
        executionTime,
        rowsReturned: Array.isArray(result.data) ? result.data.length : (result.data ? 1 : 0),
        timestamp: new Date(),
        success: !result.error,
        error: result.error?.message
      };

      this.metrics.push(metrics);

      // Log slow queries
      if (executionTime > this.slowQueryThreshold) {
        logError(`Slow query detected: ${queryName}`, {
          executionTime,
          query: queryName,
          threshold: this.slowQueryThreshold
        });
      }

      return { ...result, metrics };
    } catch (error) {
      const executionTime = performance.now() - startTime;
      const metrics: QueryPerformanceMetrics = {
        query: queryName,
        executionTime,
        rowsReturned: 0,
        timestamp: new Date(),
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };

      this.metrics.push(metrics);
      return { data: null, error, metrics };
    }
  }

  getPerformanceMetrics(): QueryPerformanceMetrics[] {
    return [...this.metrics];
  }

  getSlowQueries(): QueryPerformanceMetrics[] {
    return this.metrics.filter(m => m.executionTime > this.slowQueryThreshold);
  }

  getAverageExecutionTime(): number {
    if (this.metrics.length === 0) return 0;
    const totalTime = this.metrics.reduce((sum, m) => sum + m.executionTime, 0);
    return totalTime / this.metrics.length;
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export const dbOptimizer = new DatabasePerformanceOptimizer();

// Connection pooling and retry logic
export class ConnectionManager {
  private retryAttempts = 3;
  private retryDelay = 1000; // 1 second

  async executeWithRetry<T>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<T> {
    let lastError: any;

    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        if (attempt < this.retryAttempts) {
          logError(`Database operation failed (attempt ${attempt}/${this.retryAttempts}): ${operationName}`, error);
          await this.delay(this.retryDelay * attempt);
        }
      }
    }

    logError(`Database operation failed after ${this.retryAttempts} attempts: ${operationName}`, lastError);
    throw lastError;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const connectionManager = new ConnectionManager();

// Query caching
export class QueryCache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private defaultTTL = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: any, ttl: number = this.defaultTTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  get(key: string): any | null {
    const cached = this.cache.get(key);
    
    if (!cached) return null;
    
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}

export const queryCache = new QueryCache();
