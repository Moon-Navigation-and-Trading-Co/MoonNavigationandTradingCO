// Simple Example: Direct Form Submission Pattern
// This shows how the livestock form could be simplified to match your pattern

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClient } from '@/utils/supabase/client';

const SimpleLivestockForm = () => {
  const supabase = createClient();
  
  // Simple form setup
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // ... your default values
    }
  });

  // Simplified submission - matches your pattern exactly
  const onSubmit = async (values: FormData) => {
    try {
      // Generate quotation number
      const quotationNumber = await generate_quotation_number('livestock_transportation');
      
      // Map form data to database schema
      const submissionData = {
        user_id: user?.id || '00000000-0000-0000-0000-000000000000',
        form_type: 'livestock_transportation',
        routing: values.routing,
        cargo_mode: 'livestock',
        itemized_cargo: values.livestock_details,
        consolidated_cargo: null,
        supporting_files: values.uploaded_files ? JSON.stringify(values.uploaded_files) : null,
        additional_information: values.additional_information || null,
        effective_date: values.dates.effective_date,
        expiry_date: values.dates.expiry_date,
        service_contract_number: values.service_contract || null,
        additional_services: {
          ...values.additional_services,
          transport_modes: values.transport_modes,
          insurance: values.insurance,
          special_handling: values.special_handling,
          cargo_lifting_points: values.cargo_lifting_points
        },
        company_name: values.company_details.company_name,
        contact_person: values.company_details.contact_person_name,
        title: values.company_details.title,
        city: '', // Not available in livestock form
        country: values.company_details.country_of_origin,
        email: values.company_details.company_email,
        additional_email: values.company_details.additional_email || null,
        phone: values.company_details.phone_number,
        additional_phone: values.company_details.additional_phone_number || null,
        quotation_number: quotationNumber,
      };

      // Direct database insertion - exactly like your example
      const { data, error } = await supabase
        .from('ocean_freight_quotation')
        .insert([submissionData]);

      if (error) throw error;
      
      console.log('Form submitted successfully!', data);
      // Handle success (toast, redirect, etc.)
      
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error (toast, etc.)
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Your form fields */}
    </form>
  );
};

export default SimpleLivestockForm;