'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { logError } from '@/utils/logError';

interface ErrorLog {
  id: string;
  message: string;
  error_details: string | null;
  error_stack: string | null;
  user_id: string | null;
  page_url: string | null;
  user_agent: string | null;
  created_at: string;
}

export default function ErrorLogsPage() {
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchErrorLogs();
  }, []);

  const fetchErrorLogs = async () => {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('error_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) {
        logError('Failed to fetch error logs:', error);
        setError('Failed to load error logs');
        return;
      }

      setErrors(data || []);
    } catch (err) {
      logError('Error fetching error logs:', err);
      setError('Failed to load error logs');
    } finally {
      setLoading(false);
    }
  };

  const clearOldErrors = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('error_logs')
        .delete()
        .lt('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

      if (error) {
        logError('Failed to clear old errors:', error);
        return;
      }

      fetchErrorLogs();
    } catch (err) {
      logError('Error clearing old errors:', err);
    }
  };

  if (loading) {
    return <div className="p-8">Loading error logs...</div>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Error Logs</h1>
        <div className="space-x-4">
          <button
            onClick={fetchErrorLogs}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Refresh
          </button>
          <button
            onClick={clearOldErrors}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Old Errors (7+ days)
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {errors.length === 0 ? (
            <li className="px-6 py-4 text-gray-500">No errors found</li>
          ) : (
            errors.map((error) => (
              <li key={error.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium text-gray-900">
                        {error.message}
                      </h3>
                      <span className="ml-2 text-xs text-gray-500">
                        {new Date(error.created_at).toLocaleString()}
                      </span>
                    </div>
                    {error.error_details && (
                      <p className="mt-1 text-sm text-gray-600">
                        {error.error_details}
                      </p>
                    )}
                    {error.page_url && (
                      <p className="mt-1 text-xs text-gray-500">
                        Page: {error.page_url}
                      </p>
                    )}
                    {error.user_id && (
                      <p className="mt-1 text-xs text-gray-500">
                        User: {error.user_id}
                      </p>
                    )}
                  </div>
                </div>
                {error.error_stack && (
                  <details className="mt-2">
                    <summary className="text-xs text-gray-500 cursor-pointer">
                      Show Stack Trace
                    </summary>
                    <pre className="mt-2 text-xs text-gray-600 bg-gray-100 p-2 rounded overflow-auto">
                      {error.error_stack}
                    </pre>
                  </details>
                )}
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        Showing {errors.length} most recent errors
      </div>
    </div>
  );
}
