import { createClient } from './client';
import { safeDatabaseOperation, handleDatabaseError } from './database-helper';
import { logFormError } from '../logError';

export interface FormSubmissionResult {
  success: boolean;
  data?: any;
  error?: string;
  referenceNumber?: string;
}

export async function submitFormToDatabase(
  tableName: string,
  formData: any,
  formType: string
): Promise<FormSubmissionResult> {
  try {
    const supabase = createClient();
    
    // Generate reference number
    const referenceNumber = `${formType.toUpperCase()}-${Date.now().toString().slice(-8)}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    
    // Add reference number to form data
    const dataWithReference = {
      ...formData,
      reference_number: referenceNumber,
      created_at: new Date().toISOString()
    };

    const result = await safeDatabaseOperation(
      async () => {
        const { data, error } = await supabase.from(tableName).insert([dataWithReference]);
        return { data, error };
      },
      `Form submission to ${tableName}`
    );

    if (result.success) {
      return {
        success: true,
        data: result.data,
        referenceNumber
      };
    } else {
      logFormError(formType, result.error, formData);
      return {
        success: false,
        error: result.error || 'Database submission failed'
      };
    }
  } catch (error) {
    const dbError = handleDatabaseError(error, `Form submission to ${tableName}`);
    logFormError(formType, dbError, formData);
    
    return {
      success: false,
      error: dbError.message
    };
  }
}

export async function getFormSubmissions(
  tableName: string,
  limit: number = 100
): Promise<FormSubmissionResult> {
  try {
    const supabase = createClient();
    
    const result = await safeDatabaseOperation(
      async () => {
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);
        return { data, error };
      },
      `Fetch submissions from ${tableName}`
    );

    if (result.success) {
      return {
        success: true,
        data: result.data
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to fetch submissions'
      };
    }
  } catch (error) {
    const dbError = handleDatabaseError(error, `Fetch submissions from ${tableName}`);
    
    return {
      success: false,
      error: dbError.message
    };
  }
}

export async function updateFormSubmission(
  tableName: string,
  id: string,
  updates: any
): Promise<FormSubmissionResult> {
  try {
    const supabase = createClient();
    
    const result = await safeDatabaseOperation(
      async () => {
        const { data, error } = await supabase
          .from(tableName)
          .update(updates)
          .eq('id', id);
        return { data, error };
      },
      `Update submission in ${tableName}`
    );

    if (result.success) {
      return {
        success: true,
        data: result.data
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to update submission'
      };
    }
  } catch (error) {
    const dbError = handleDatabaseError(error, `Update submission in ${tableName}`);
    
    return {
      success: false,
      error: dbError.message
    };
  }
}

export async function deleteFormSubmission(
  tableName: string,
  id: string
): Promise<FormSubmissionResult> {
  try {
    const supabase = createClient();
    
    const result = await safeDatabaseOperation(
      async () => {
        const { data, error } = await supabase
          .from(tableName)
          .delete()
          .eq('id', id);
        return { data, error };
      },
      `Delete submission from ${tableName}`
    );

    if (result.success) {
      return {
        success: true,
        data: result.data
      };
    } else {
      return {
        success: false,
        error: result.error || 'Failed to delete submission'
      };
    }
  } catch (error) {
    const dbError = handleDatabaseError(error, `Delete submission from ${tableName}`);
    
    return {
      success: false,
      error: dbError.message
    };
  }
}
