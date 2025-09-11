import * as Sentry from "@sentry/nextjs";

export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug'
}

export interface LogContext {
  [key: string]: any;
}

export class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public error(message: string, error?: Error | unknown, context?: LogContext): void {
    // Always log to console in development
    if (this.isDevelopment) {
      console.error(`[ERROR] ${message}`, error, context);
    }

    // Send to Sentry
    Sentry.captureException(error || new Error(message), {
      tags: {
        level: LogLevel.ERROR
      },
      extra: context
    });
  }

  public warn(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, context);
    }

    Sentry.captureMessage(message, {
      level: 'warning',
      extra: context
    });
  }

  public info(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, context);
    }

    Sentry.captureMessage(message, {
      level: 'info',
      extra: context
    });
  }

  public debug(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, context);
    }
  }
}

// Export singleton instance
export const logger = Logger.getInstance();

// Convenience functions
export const logError = (message: string, error?: Error | unknown, context?: LogContext) => {
  logger.error(message, error, context);
};

export const logWarn = (message: string, context?: LogContext) => {
  logger.warn(message, context);
};

export const logInfo = (message: string, context?: LogContext) => {
  logger.info(message, context);
};

export const logDebug = (message: string, context?: LogContext) => {
  logger.debug(message, context);
};
