import { createClient } from '@/utils/supabase/client';

// Form type to abbreviation mapping
const FORM_ABBREVIATIONS: Record<string, string> = {
  'ocean_freight': 'OF',
  'air_freight': 'AF', 
  'inland_freight': 'IF',
  'international_trading': 'IT',
  'ship_agency': 'SA',
  'suez_canal_transit': 'SCT',
  'handling_stevedoring_storage': 'HSS',
  'customs_clearance': 'CC',
  'container_services': 'CS',
  'roll_on_off': 'RO',
  'special_services': 'SS',
  'ship_management': 'SM',
  'docking_maintenance': 'DM',
  'buy_rent_containers': 'BRC',
  'buy_rent_vessels': 'BRV',
  'out_gauge': 'OG',
  'livestock_transportation': 'LT',
  'tankers_quotation': 'TQ',
  'ocean_freight_quotation': 'OFQ',
  'investor_form': 'IF',
  'schedule_meeting': 'SM',
  'contact_form': 'CF'
};

/**
 * Generates a unique quotation number for a given form type
 * Format: [ABBREVIATION]11900[INCREMENTAL_NUMBER]
 * Example: OF11900, OF11901, OF11902, etc.
 */
export async function generate_quotation_number(formType: string): Promise<string> {
  const supabase = createClient();
  
  // Get abbreviation for the form type
  const abbreviation = FORM_ABBREVIATIONS[formType] || 'QT';
  
  try {
    // First, try to get count from quotation_numbers table
    const { data: countData, error: countError } = await supabase
      .from('quotation_numbers')
      .select('current_count')
      .eq('form_type', formType)
      .single();
    
    let currentCount = 0; // Start from 0 so first number is 11900
    
    if (countError) {
      // If no record exists, create one
      const { error: insertError } = await supabase
        .from('quotation_numbers')
        .insert({
          form_type: formType,
          current_count: 0
        });
      
      if (insertError) {
        console.error('Error creating quotation count record:', insertError);
      }
    } else {
      currentCount = countData?.current_count || 0;
    }
    
    // Increment the count
    const newCount = currentCount + 1;
    
    // Update the count in the database
    const { error: updateError } = await supabase
      .from('quotation_numbers')
      .update({ current_count: newCount })
      .eq('form_type', formType);
    
    if (updateError) {
      console.error('Error updating quotation count:', updateError);
    }
    
    // Generate the quotation number
    const quotationNumber = `${abbreviation}11900${newCount.toString().padStart(2, '0')}`;
    
    return quotationNumber;
  } catch (error) {
    console.error('Error generating quotation number:', error);
    // Fallback: generate a timestamp-based number
    const timestamp = Date.now().toString().slice(-6);
    return `${abbreviation}11900${timestamp}`;
  }
}

/**
 * Gets the current count for a form type (for display purposes)
 */
export async function get_current_quotation_count(formType: string): Promise<number> {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase
      .from('quotation_numbers')
      .select('current_count')
      .eq('form_type', formType)
      .single();
    
    if (error) {
      // Fallback to counting existing records
      const { count } = await supabase
        .from(formType)
        .select('*', { count: 'exact', head: true });
      
      return count || 0;
    }
    
    return data?.current_count || 0;
  } catch (error) {
    console.error('Error getting quotation count:', error);
    return 0;
  }
}
