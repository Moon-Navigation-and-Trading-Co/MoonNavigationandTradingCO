import { createBrowserClient } from "@supabase/ssr";

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

export const createClient = () => {
  try {
    const client = createBrowserClient(supabaseUrl, supabaseAnonKey);
    
    // Add connection error handling
    client.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
        // Handle auth state changes
        console.log('Auth state changed:', event);
      }
    });

    return client;
  } catch (error) {
    console.error('Failed to create Supabase client:', error);
    throw new Error('Database connection failed');
  }
};
