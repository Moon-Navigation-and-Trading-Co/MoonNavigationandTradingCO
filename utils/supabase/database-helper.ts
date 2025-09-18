import { createClient } from './client';
import { logError } from '../logError';

export interface DatabaseOperationResult<T = any> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export class DatabaseError extends Error {
  constructor(
    message: string,
    public code?: string,
    public details?: string,
    public hint?: string
  ) {
    super(message);
    this.name = 'DatabaseError';
  }
}

export async function safeDatabaseOperation<T>(
  operation: () => Promise<{ data: T | null; error: any }>,
  operationName: string
): Promise<DatabaseOperationResult<T>> {
  try {
    const result = await operation();
    
    if (result.error) {
      const errorMessage = `Database operation failed: ${operationName}`;
      const dbError = new DatabaseError(
        errorMessage,
        result.error.code,
        result.error.details,
        result.error.hint
      );
      
      // Log the error
      logError(errorMessage, dbError);
      
      return {
        data: null,
        error: errorMessage,
        success: false
      };
    }
    
    return {
      data: result.data,
      error: null,
      success: true
    };
  } catch (error) {
    const errorMessage = `Database operation exception: ${operationName}`;
    logError(errorMessage, error);
    
    return {
      data: null,
      error: errorMessage,
      success: false
    };
  }
}

export async function testDatabaseConnection(): Promise<boolean> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('error_logs')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Database connection test failed:', error);
      return false;
    }
    
    console.log('Database connection test successful');
    return true;
  } catch (error) {
    console.error('Database connection test exception:', error);
    return false;
  }
}

export function handleDatabaseError(error: any, context: string): DatabaseError {
  let message = `Database error in ${context}`;
  let code = 'UNKNOWN_ERROR';
  let details = '';
  let hint = '';

  if (error?.code) {
    code = error.code;
  }

  if (error?.message) {
    message = error.message;
  }

  if (error?.details) {
    details = error.details;
  }

  if (error?.hint) {
    hint = error.hint;
  }

  // Handle specific error types
  switch (code) {
    case 'PGRST301':
      message = 'Row Level Security policy violation';
      hint = 'Check RLS policies for the table';
      break;
    case '23505':
      message = 'Duplicate key violation';
      hint = 'A record with this key already exists';
      break;
    case '23503':
      message = 'Foreign key violation';
      hint = 'Referenced record does not exist';
      break;
    case '23502':
      message = 'Not null violation';
      hint = 'Required field is missing';
      break;
    case '42P01':
      message = 'Table does not exist';
      hint = 'Check if the table has been created';
      break;
    case '42501':
      message = 'Insufficient privilege';
      hint = 'Check user permissions and RLS policies';
      break;
  }

  return new DatabaseError(message, code, details, hint);
}
