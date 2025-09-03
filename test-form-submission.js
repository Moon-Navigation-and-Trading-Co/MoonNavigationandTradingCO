// Test script to submit form data and test email functionality
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

// Function to test email submission
async function testEmailSubmission() {
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
      console.log("Check your email at quotation@moon-navigation.com and quotes@moon-navigation.com");
    } else {
      console.error("❌ Email test failed:", result);
    }
  } catch (error) {
    console.error("❌ Error testing email:", error);
  }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.testEmailSubmission = testEmailSubmission;
  window.testFormData = testFormData;
  console.log("Test functions available:");
  console.log("- testEmailSubmission() - Test email sending");
  console.log("- testFormData - View test data");
}

module.exports = { testEmailSubmission, testFormData }; 