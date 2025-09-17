import { createClient } from '@/utils/supabase/client';
import { handleDatabaseError } from '@/utils/supabase/database-helper';

export function logError(message: string, error?: unknown) {
  // In development (your laptop) → show in console
  if (process.env.NODE_ENV === "development") {
    console.error(message, error);
  }

  // In production (live website) → save to Supabase
  if (process.env.NODE_ENV === "production") {
    saveErrorToSupabase(message, error);
  }
}

async function saveErrorToSupabase(message: string, error?: unknown) {
  try {
    const supabase = createClient();
    
    // Get current user if available
    const { data: { user } } = await supabase.auth.getUser();
    
    // Prepare error data
    const errorData = {
      message,
      error_details: error ? String(error) : null,
      error_stack: error instanceof Error ? error.stack : null,
      user_id: user?.id || null,
      page_url: typeof window !== 'undefined' ? window.location.href : null,
      user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
    };

    // Insert into error_logs table
    const { error: insertError } = await supabase
      .from('error_logs')
      .insert(errorData);

    if (insertError) {
      // If Supabase insert fails, fall back to console
      console.error('Failed to save error to Supabase:', insertError);
      console.error('Original error:', message, error);
    }
  } catch (supabaseError) {
    // If anything goes wrong with Supabase, fall back to console
    console.error('Error saving to Supabase:', supabaseError);
    console.error('Original error:', message, error);
  }
}

// Enhanced error logging with better error handling
export async function logErrorWithContext(
  message: string, 
  error?: unknown, 
  context?: Record<string, any>
) {
  const enhancedMessage = context 
    ? `${message} | Context: ${JSON.stringify(context)}`
    : message;

  logError(enhancedMessage, error);
}

// Log database errors specifically
export function logDatabaseError(
  operation: string,
  error: any,
  tableName?: string
) {
  const dbError = handleDatabaseError(error, operation);
  const message = `Database error in ${operation}${tableName ? ` on table ${tableName}` : ''}`;
  
  logError(message, dbError);
}

// Log form submission errors
export function logFormError(
  formType: string,
  error: any,
  formData?: any
) {
  const message = `Form submission error for ${formType}`;
  const context = {
    formType,
    formData: formData ? JSON.stringify(formData) : null,
    timestamp: new Date().toISOString()
  };
  
  logErrorWithContext(message, error, context);
}

// Log API errors
export function logApiError(
  endpoint: string,
  error: any,
  requestData?: any
) {
  const message = `API error in ${endpoint}`;
  const context = {
    endpoint,
    requestData: requestData ? JSON.stringify(requestData) : null,
    timestamp: new Date().toISOString()
  };
  
  logErrorWithContext(message, error, context);
}
