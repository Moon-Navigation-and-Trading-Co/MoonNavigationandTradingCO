import { createClient } from './client';
import { testDatabaseConnection } from './database-helper';

export interface ConnectionTestResult {
  success: boolean;
  message: string;
  details?: any;
}

export async function runConnectionTests(): Promise<ConnectionTestResult[]> {
  const results: ConnectionTestResult[] = [];

  // Test 1: Basic connection
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('error_logs')
      .select('count')
      .limit(1);
    
    if (error) {
      results.push({
        success: false,
        message: 'Basic connection test failed',
        details: error
      });
    } else {
      results.push({
        success: true,
        message: 'Basic connection test passed'
      });
    }
  } catch (error) {
    results.push({
      success: false,
      message: 'Basic connection test exception',
      details: error
    });
  }

  // Test 2: Authentication
  try {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      results.push({
        success: false,
        message: 'Authentication test failed',
        details: error
      });
    } else {
      results.push({
        success: true,
        message: `Authentication test passed (user: ${user ? 'authenticated' : 'anonymous'})`
      });
    }
  } catch (error) {
    results.push({
      success: false,
      message: 'Authentication test exception',
      details: error
    });
  }

  // Test 3: RLS Policies
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('error_logs')
      .select('*')
      .limit(1);
    
    if (error) {
      results.push({
        success: false,
        message: 'RLS policy test failed',
        details: error
      });
    } else {
      results.push({
        success: true,
        message: 'RLS policy test passed'
      });
    }
  } catch (error) {
    results.push({
      success: false,
      message: 'RLS policy test exception',
      details: error
    });
  }

  // Test 4: Insert test (if authenticated)
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { error } = await supabase
        .from('error_logs')
        .insert({
          message: 'Connection test',
          error_details: 'Test insert',
          user_id: user.id
        });
      
      if (error) {
        results.push({
          success: false,
          message: 'Insert test failed',
          details: error
        });
      } else {
        results.push({
          success: true,
          message: 'Insert test passed'
        });
      }
    } else {
      results.push({
        success: true,
        message: 'Insert test skipped (not authenticated)'
      });
    }
  } catch (error) {
    results.push({
      success: false,
      message: 'Insert test exception',
      details: error
    });
  }

  return results;
}

export async function testSpecificTable(tableName: string): Promise<ConnectionTestResult> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1);
    
    if (error) {
      return {
        success: false,
        message: `Table ${tableName} test failed`,
        details: error
      };
    } else {
      return {
        success: true,
        message: `Table ${tableName} test passed`
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Table ${tableName} test exception`,
      details: error
    };
  }
}
