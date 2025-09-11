// Simple test script to check quotation number generation
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testQuotationNumbers() {
  try {
    console.log('Testing quotation_numbers table access...');
    
    // Test reading from quotation_numbers table
    const { data, error } = await supabase
      .from('quotation_numbers')
      .select('*')
      .eq('form_type', 'ocean_freight_quotation')
      .single();
    
    if (error) {
      console.log('Error reading quotation_numbers:', error);
    } else {
      console.log('Successfully read quotation_numbers:', data);
    }
    
    // Test updating quotation_numbers table
    const { error: updateError } = await supabase
      .from('quotation_numbers')
      .update({ current_count: 1 })
      .eq('form_type', 'ocean_freight_quotation');
    
    if (updateError) {
      console.log('Error updating quotation_numbers:', updateError);
    } else {
      console.log('Successfully updated quotation_numbers');
    }
    
  } catch (error) {
    console.log('Test failed:', error);
  }
}

testQuotationNumbers();
