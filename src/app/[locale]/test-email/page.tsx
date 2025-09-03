"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestEmailPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const testFormData = {
    port: {
      name: "Port Said"
    },
    vessel: {
      name: "Test Vessel",
      imo: 12345678,
      type: "Container Ship",
      flag: "Egypt",
      ship_gross_tonnage: "50000",
      ship_net_tonnage: "45000",
      deadweight: "60000",
      draft: "15.5",
      length: 300,
      call_for_commercial: true,
      call_for_maintenance: false,
      call_for_other: false,
      other_purpose_details: "",
      total_discharged_cargo: 1000,
      discharged_cargo_type: "Containers",
      discharged_dangerous_cargo: false,
      total_days_needed_for_discharging: 3,
      total_loaded_cargo: 800,
      loaded_cargo_type: "Containers",
      loaded_dangerous_cargo: false,
      total_days_needed_for_loading: 2,
      eta_expected_date: "2024-01-15",
      total_expected_berthing_days: 5,
      total_expected_anchor_days: 1
    },
    services: {
      bunkering: {
        mgo: true,
        mgo_details: "1000 MT MGO required",
        vlsfo: false,
        vlsfo_details: "",
        hfo: false,
        hfo_details: "",
        other: false,
        other_details: "",
        details: "Bunkering services requested"
      },
      chandlery: {
        fresh_dry_provisions: false,
        fresh_dry_provisions_details: "",
        spare_parts_tools: false,
        spare_parts_tools_details: "",
        deck_engine_stores: false,
        deck_engine_stores_details: "",
        details: ""
      },
      crew: {
        crew_change_assistance: false,
        crew_change_assistance_details: "",
        transport_accommodation: false,
        transport_accommodation_details: "",
        medical_assistance: false,
        medical_assistance_details: "",
        other: false,
        other_details: "",
        details: ""
      },
      cargo: {
        stevedoring: false,
        stevedoring_details: "",
        cargo_surveys: false,
        cargo_surveys_details: "",
        lashing_securing: false,
        lashing_securing_details: "",
        other: false,
        other_details: "",
        details: ""
      },
      other: {
        waste_disposal: false,
        waste_disposal_details: "",
        fresh_water: false,
        fresh_water_details: "",
        other: false,
        other_details: "",
        details: ""
      }
    },
    additional_information: "This is a test submission to verify email functionality.",
    supporting_files: "",
    company_details: {
      company_name: "Test Shipping Company",
      contact_person_name: "John Doe",
      title: "Operations Manager",
      country_of_origin: "Egypt",
      company_email: "test@example.com",
      additional_email: "",
      phone_number: "+201234567890",
      additional_phone_number: ""
    }
  };

  const testEmailSubmission = async () => {
    setIsLoading(true);
    setResult('');
    
    try {
      console.log("Testing email submission...");
      
      const response = await fetch('/api/supabase-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData: testFormData,
          formType: 'request_for_pda',
          recipientEmails: ['quotation@moon-navigation.com', 'quotes@moon-navigation.com']
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log("✅ Email test successful:", result);
        setResult(`✅ Email test successful! 
        
📧 Company Notification Email sent to:
        - quotation@moon-navigation.com
        - quotes@moon-navigation.com
        
📧 Customer Confirmation Email sent to:
        - test@example.com (${result.confirmationEmailSent ? 'SUCCESS' : 'FAILED'})
        
📋 Reference Number: ${result.referenceNumber}
        
Check both email addresses to see the different templates!`);
      } else {
        console.error("❌ Email test failed:", result);
        setResult(`❌ Email test failed: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("❌ Error testing email:", error);
      setResult(`❌ Error testing email: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Email Test Page</CardTitle>
            <CardDescription>
              Test the email functionality for form submissions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Test Data:</h3>
              <ul className="text-sm space-y-1">
                <li>• Vessel: Test Vessel (IMO: 12345678)</li>
                <li>• Port: Port Said</li>
                <li>• Service: Bunkering (MGO)</li>
                <li>• Company: Test Shipping Company</li>
                <li>• Contact: John Doe</li>
              </ul>
            </div>
            
            <Button 
              onClick={testEmailSubmission} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Sending Test Email..." : "Send Test Email"}
            </Button>
            
            {result && (
              <div className={`p-4 rounded-lg ${
                result.includes('✅') ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}>
                <pre className="whitespace-pre-wrap text-sm">{result}</pre>
              </div>
            )}
            
            <div className="text-sm text-gray-600">
              <p><strong>Note:</strong> This will send TWO emails:</p>
              <div className="mt-2 space-y-2">
                <div className="bg-blue-50 p-2 rounded">
                  <strong>📧 Company Notification (Blue Theme):</strong>
                  <ul className="list-disc list-inside mt-1 text-xs">
                    <li>quotation@moon-navigation.com</li>
                    <li>quotes@moon-navigation.com</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <strong>📧 Customer Confirmation (Blue Theme):</strong>
                  <ul className="list-disc list-inside mt-1 text-xs">
                    <li>test@example.com (from test form data)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 