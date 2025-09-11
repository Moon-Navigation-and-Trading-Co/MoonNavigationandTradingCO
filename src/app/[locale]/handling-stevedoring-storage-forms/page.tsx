"use client";

import { generate_quotation_number } from "@/utils/quotation/generator";

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import HandlingStevedoringStorageForm from '@/components/handling-stevedoring-storage-form';
import FormTabs from '@/components/form-tabs-variant-1';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FAQSearch from '@/components/faq';

export default function HandlingStevedoringStorageFormsPage() {
  const t = useTranslations('forms');
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast()
  const router = useRouter()

  // Fetch the authenticated user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user); // User is logged in, set the state
      }
      setIsLoading(false); // Stop loading after checking user
    };

    fetchUser();
  }, [supabase.auth]); // Include supabase.auth in dependency array

  if (isLoading) {
    return <div className='w-full h-[500px] flex items-center justify-center'>
      <Spinner />
    </div>;
  }

  const handleSubmit = async (formData: any) => {
    // Flatten the formData before inserting into Supabase
    const flattenedData = {
      user_id: user?.id || null,
      import_export: formData.importExport,
      port_airport: formData.portAirport,
      location: formData.location,
      entry_mode: formData.entry_mode,
      itemized_data: formData.itemized_data,
      consolidated_data: formData.consolidated_data,
      additional_info: formData.additionalInfo,
      commercial_terms: formData.commercialTerms,
      effective_date: formData.effectiveDate,
      expiry_date: formData.expiryDate,
      service_contract: formData.serviceContract,
      handling_stevedoring: formData.handlingStevedoring,
      loading_cargo: formData.loadingCargo,
      discharging_cargo: formData.dischargingCargo,
      lashing_cargo: formData.lashingCargo,
      unlashing_cargo: formData.unlashingCargo,
      port_handling_stevedoring: formData.portHandlingStevedoring,
      cargo_reception_delivery: formData.cargoReceptionDelivery,
      reception_before_shipment: formData.receptionBeforeShipment,
      reception_after_discharge: formData.receptionAfterDischarge,
      storage_warehousing: formData.storageWarehousing,
      temporary_storage: formData.temporaryStorage,
      handling_requirements: formData.handlingRequirements,
      crane_heavy_lift: formData.additional_services?.crane_heavy_lift,
      customs_clearance: formData.additional_services?.customs_clearance,
      transport_to_from_port: formData.additional_services?.transport_to_from_port,
      inspection_quality_control: formData.additional_services?.inspection_quality_control,
      escort_permits: formData.additional_services?.escort_permits,
      engineering_support: formData.additional_services?.engineering_support,
      other: formData.additional_services?.other,
      other_specify: formData.additional_services?.other_specify,
      additional_requirements: formData.additional_services?.additional_requirements,
      supporting_files: formData.supporting_files ? JSON.stringify(formData.supporting_files) : null,
      company_name: formData.company_details?.company_name,
      contact_person_name: formData.company_details?.contact_person_name,
      title: formData.company_details?.title,
      country_of_origin: formData.company_details?.country_of_origin,
      company_email: formData.company_details?.company_email,
      additional_email: formData.company_details?.additional_email,
      phone_number: formData.company_details?.phone_number,
      quotation_number: await generate_quotation_number("handling_stevedoring_storage"),
      additional_phone_number: formData.company_details?.additional_phone_number,
    };

    console.log(flattenedData)

    // Send email notification FIRST
    try {
      await sendFormEmail(formData, 'handling_stevedoring_storage');
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with form submission even if email fails
    }

    const { data, error } = await supabase
      .from("handling_stevedoring_storage")  // Your Supabase table
      .insert([flattenedData]);  // Insert the data

    if (error) {
      console.log(error)
      toast({
        title: "Error",
        description: "Database insert failed, but email was sent",
        variant: "destructive"
      })
    } else {
      toast({
        title: "Success",
        description: "Form Added Successfully",
      })
      router.push('/handling-stevedoring-storage-forms')
    }
  };

  const tabData = [
    {
      id: "handling-stevedoring-storage",
      title: "Handling, Stevedoring and Storage",
      description: "Comprehensive port operations and warehousing solutions",
      content:
        <>
          <HandlingStevedoringStorageForm onSubmit={handleSubmit} />
        </>
    }
  ]

  return (
    <div className='flex flex-col w-full'>
      <div className='mt-20 flex flex-col gap-5 px-4'>
        <h1 className='text-3xl font-raleway font-medium'>Handling, Stevedoring and Storage</h1>
        <p className=''>Professional handling, stevedoring, and storage services for your cargo needs</p>
      </div>
      <FormTabs tabData={tabData} />
      <FAQSearch category="handling-stevedoring-storage" />
    </div>
  );
} 