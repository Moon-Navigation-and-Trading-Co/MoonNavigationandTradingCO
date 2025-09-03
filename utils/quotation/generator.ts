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
export async function generateQuotationNumber(formType: string): Promise<string> {
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
      // If quotation_numbers table doesn't exist or has no data, fallback to counting existing records
      console.log(`Quotation numbers table not available, using fallback for ${formType}`);
      
      // Get count from the actual form table
      const { count, error: countError2 } = await supabase
        .from(formType)
        .select('*', { count: 'exact', head: true });
      
      if (countError2) {
        console.warn(`Could not count existing records for ${formType}, starting from 0`);
        currentCount = 0;
      } else {
        currentCount = count || 0;
      }
    } else if (countData) {
      currentCount = countData.current_count;
    }
    
    // Increment the count
    const newCount = currentCount + 1;
    
    // Generate the quotation number
    const quotationNumber = `${abbreviation}${11900 + newCount}`;
    
    // Try to update the quotation_numbers table (if it exists)
    try {
      await supabase
        .from('quotation_numbers')
        .upsert({
          form_type: formType,
          current_count: newCount,
          last_updated: new Date().toISOString()
        });
    } catch (updateError) {
      // If updating fails (table doesn't exist), that's okay - we'll just use the generated number
      console.log(`Could not update quotation_numbers table for ${formType}, but number generated successfully`);
    }
    
    return quotationNumber;
    
  } catch (error) {
    console.error('Error generating quotation number:', error);
    // Fallback: generate a timestamp-based number
    const timestamp = Date.now().toString().slice(-6);
    return `${abbreviation}${11900}${timestamp}`;
  }
}

/**
 * Gets the current count for a form type (for display purposes)
 */
export async function getCurrentQuotationCount(formType: string): Promise<number> {
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
