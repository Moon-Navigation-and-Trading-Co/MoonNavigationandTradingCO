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
  'contact_form': 'CF',
  'international_inland_services': 'IIS',
  'local_inland_services': 'LIS',
  'container_inland_services': 'CIS'
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
      .maybeSingle();
    
    // Check if we got an RLS error (401 Unauthorized)
    if (countError && (countError.code === '42501' || countError.message?.includes('row-level security'))) {
      console.warn('RLS policy blocks access to quotation_numbers table; falling back to timestamp.');
      const timestamp = Date.now().toString().slice(-6);
      return `${abbreviation}11900${timestamp}`;
    }
    
    let currentCount = countData?.current_count ?? 0; // Start from 0 so first number is 11900
    
    if (!countData && !countError) {
      // No row exists; create one via upsert
      const { data: inserted, error: insertError } = await supabase
        .from('quotation_numbers')
        .upsert({
          form_type: formType,
          current_count: 0
        }, { onConflict: 'form_type' })
        .select('current_count')
        .single();
        
      // Check for RLS error on insert
      if (insertError && (insertError.code === '42501' || insertError.message?.includes('row-level security'))) {
        console.warn('RLS policy blocks insert to quotation_numbers table; falling back to timestamp.');
        const timestamp = Date.now().toString().slice(-6);
        return `${abbreviation}11900${timestamp}`;
      }
        
      if (insertError) {
        console.warn('Quotation counter upsert failed; falling back to timestamp.', {
          code: insertError?.code,
          message: insertError?.message,
          details: insertError?.details
        });
        const timestamp = Date.now().toString().slice(-6);
        return `${abbreviation}11900${timestamp}`;
      }
      currentCount = inserted?.current_count ?? 0;
    }
    
    // Increment the count
    const newCount = currentCount + 1;
    
    // Update the count in the database
    const { error: updateError } = await supabase
      .from('quotation_numbers')
      .update({ current_count: newCount })
      .eq('form_type', formType)
      .select('current_count')
      .single();
    
    // Check for RLS error on update
    if (updateError && (updateError.code === '42501' || updateError.message?.includes('row-level security'))) {
      console.warn('RLS policy blocks update to quotation_numbers table; falling back to timestamp.');
      const timestamp = Date.now().toString().slice(-6);
      return `${abbreviation}11900${timestamp}`;
    }
    
    if (updateError) {
      console.warn('Quotation counter update failed; falling back to timestamp.', {
        code: updateError?.code,
        message: updateError?.message,
        details: updateError?.details
      });
      const timestamp = Date.now().toString().slice(-6);
      return `${abbreviation}11900${timestamp}`;
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
