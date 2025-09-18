'use client';

import { useState } from 'react';
import { runConnectionTests, testSpecificTable } from '@/utils/supabase/connection-test';
import { testDatabaseConnection } from '@/utils/supabase/database-helper';

interface TestResult {
  success: boolean;
  message: string;
  details?: any;
}

export default function DatabaseTestPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [basicTest, setBasicTest] = useState<boolean | null>(null);

  const runAllTests = async () => {
    setLoading(true);
    try {
      const results = await runConnectionTests();
      setTestResults(results);
    } catch (error) {
      console.error('Test execution failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const runBasicTest = async () => {
    setLoading(true);
    try {
      const result = await testDatabaseConnection();
      setBasicTest(result);
    } catch (error) {
      console.error('Basic test failed:', error);
      setBasicTest(false);
    } finally {
      setLoading(false);
    }
  };

  const testTable = async (tableName: string) => {
    setLoading(true);
    try {
      const result = await testSpecificTable(tableName);
      setTestResults(prev => [...prev, result]);
    } catch (error) {
      console.error('Table test failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const formTables = [
    'air_freight_forms',
    'buy_rent_container_forms',
    'buy_rent_vessels_forms',
    'container_services_forms',
    'customs_clearance_forms',
    'handling_stevedoring_storage_forms',
    'inland_services_forms',
    'international_trading_forms',
    'ocean_freight_forms',
    'out_gauge_forms',
    'ship_agency_forms',
    'ship_maintenance_forms',
    'ship_management_forms',
    'special_services_forms',
    'suez_canal_forms',
    'request_for_pda'
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Database Connection Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Basic Connection Test</h2>
          <button
            onClick={runBasicTest}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Testing...' : 'Run Basic Test'}
          </button>
          {basicTest !== null && (
            <div className={`mt-4 p-3 rounded ${basicTest ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {basicTest ? '✅ Connection successful' : '❌ Connection failed'}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Comprehensive Tests</h2>
          <button
            onClick={runAllTests}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? 'Running...' : 'Run All Tests'}
          </button>
        </div>
      </div>

      {testResults.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          <div className="space-y-2">
            {testResults.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded ${
                  result.success 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    {result.success ? '✅' : '❌'}
                  </span>
                  <span className="font-medium">{result.message}</span>
                </div>
                {result.details && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm">Show Details</summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(result.details, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Test Individual Tables</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {formTables.map((table) => (
            <button
              key={table}
              onClick={() => testTable(table)}
              disabled={loading}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
            >
              {table}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Instructions</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Run the basic connection test first to verify Supabase connectivity</li>
          <li>Run comprehensive tests to check authentication and RLS policies</li>
          <li>Test individual tables to identify specific table issues</li>
          <li>Check the browser console for detailed error information</li>
          <li>If tests fail, check your Supabase project settings and RLS policies</li>
        </ol>
      </div>
    </div>
  );
}
