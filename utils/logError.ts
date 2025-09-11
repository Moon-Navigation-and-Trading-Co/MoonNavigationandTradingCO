import { createClient } from '@/utils/supabase/client';

export function logError(message: string, error?: unknown) {
  // In development (your laptop) → show in console
  if (process.env.NODE_ENV === "development") {
    console.log(message, error);
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
      console.log('Failed to save error to Supabase:', insertError);
      console.log('Original error:', message, error);
    }
  } catch (supabaseError) {
    // If anything goes wrong with Supabase, fall back to console
    console.log('Error saving to Supabase:', supabaseError);
    console.log('Original error:', message, error);
  }
}
