import { createClient } from "@/utils/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default async function AdminTestPage() {
  const supabase = await createClient();

  // Test database connections
  const tests = [
    {
      name: "Database Connection",
      test: async () => {
        try {
          const { data, error } = await supabase.from('users').select('count', { count: 'exact', head: true });
          return { success: !error, message: error?.message || "Connected successfully" };
        } catch (err) {
          return { success: false, message: err instanceof Error ? err.message : "Unknown error" };
        }
      }
    },
    {
      name: "Admin Role Check",
      test: async () => {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user) return { success: false, message: "No authenticated user" };
          
          const { data: userProfile } = await supabase
            .from('users')
            .select('role, is_active')
            .eq('id', user.id)
            .single();
          
          if (!userProfile) return { success: false, message: "User profile not found" };
          
          const isAdmin = ['admin', 'super_admin'].includes(userProfile.role) && userProfile.is_active;
          return { 
            success: isAdmin, 
            message: isAdmin ? `Admin role: ${userProfile.role}` : "User is not admin" 
          };
        } catch (err) {
          return { success: false, message: err instanceof Error ? err.message : "Unknown error" };
        }
      }
    },
    {
      name: "Form Submissions Access",
      test: async () => {
        try {
          const { data, error } = await supabase.from('air_freight_services').select('count', { count: 'exact', head: true });
          return { success: !error, message: error?.message || "Can access form submissions" };
        } catch (err) {
          return { success: false, message: err instanceof Error ? err.message : "Unknown error" };
        }
      }
    },
    {
      name: "Contact Requests Access",
      test: async () => {
        try {
          const { data, error } = await supabase.from('ContactRequests').select('count', { count: 'exact', head: true });
          return { success: !error, message: error?.message || "Can access contact requests" };
        } catch (err) {
          return { success: false, message: err instanceof Error ? err.message : "Unknown error" };
        }
      }
    }
  ];

  // Run tests
  const testResults = await Promise.all(
    tests.map(async (test) => {
      const result = await test.test();
      return {
        name: test.name,
        ...result
      };
    })
  );

  const passedTests = testResults.filter(t => t.success).length;
  const totalTests = testResults.length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard Test</h2>
        <p className="text-gray-600 mt-2">
          Testing admin dashboard functionality and database connections
        </p>
      </div>

      {/* Test Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5" />
            <span>Test Results Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">
              {passedTests}/{totalTests} Tests Passed
            </div>
            <Badge variant={passedTests === totalTests ? "default" : "destructive"}>
              {passedTests === totalTests ? "All Tests Passed" : "Some Tests Failed"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Individual Test Results */}
      <div className="space-y-4">
        {testResults.map((result, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {result.success ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <h3 className="font-medium">{result.name}</h3>
                    <p className="text-sm text-gray-600">{result.message}</p>
                  </div>
                </div>
                <Badge variant={result.success ? "default" : "destructive"}>
                  {result.success ? "PASS" : "FAIL"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex space-x-4">
        <Button asChild>
          <a href="/admin">Go to Dashboard</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/admin/users">User Management</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/admin/submissions">Form Submissions</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/admin/analytics">Analytics</a>
        </Button>
      </div>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>✅ If all tests pass: Your admin dashboard is working correctly!</p>
            <p>❌ If any tests fail: Check the error messages above and fix the issues.</p>
            <p>🔧 Common fixes:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Run database migrations: <code>npx supabase db push</code></li>
              <li>Update user role: <code>UPDATE users SET role = 'super_admin' WHERE email = 'your-email@example.com';</code></li>
              <li>Check environment variables in <code>.env.local</code></li>
              <li>Verify Supabase connection settings</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 