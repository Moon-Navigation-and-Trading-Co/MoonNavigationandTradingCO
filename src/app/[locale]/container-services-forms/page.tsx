"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import FormTabs from "@/components/form-tabs-variant-1";

import LessThanContainerForm from "@/components/less-than-container-form";
import ContainerServicesCard from "@/components/container-services-form";
import ContainerInlandServicesForm from "@/components/container-inland-services-form";
import HSSCard from "@/components/hss-form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { sendFormEmail } from '@/utils/email-helper';
import { createClient } from '@/utils/supabase/client';
import { generateQuotationNumber } from "@/utils/quotation/generator";
import Spinner from '@/components/spinner';
import FAQSearch from "@/components/faq";

const Page: React.FC = () => {
  const t = useTranslations("forms");
  const { toast } = useToast();
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  // Fetch the authenticated user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    };

    fetchUser();
  }, [supabase.auth]);

  if (isLoading) {
    return <div className='w-full h-[500px] flex items-center justify-center'>
      <Spinner />
    </div>;
  }

  const submitForm = async (formData: any, formType: any) => {
    try {
      // Flatten the formData before inserting into Supabase
      let flattenedData;

      if (formType === "less_than_container_load") {
        flattenedData = {
          user_id: user?.id || null,
          routing: formData.routing,
          entry_mode: formData.entry_mode,
          itemized_data: formData.itemized_data,
          consolidated_data: formData.consolidated_data,
          supporting_files: formData.supportingFiles ? JSON.stringify(formData.supportingFiles) : null,
          additional_information: formData.additionalInformation,
          effective_date: formData.effectiveDate,
          expiry_date: formData.expiryDate,
          service_contract_number: formData.serviceContractNumber,
          additional_services: formData.additionalServices,
          company_name: formData.companyDetails?.company_name,
          contact_person_name: formData.companyDetails?.contact_person_name,
          title: formData.companyDetails?.title,
          country_of_origin: formData.companyDetails?.country_of_origin,
          company_email: formData.companyDetails?.company_email,
          additional_email: formData.companyDetails?.additional_email,
          phone_number: formData.companyDetails?.phone_number,
          additional_phone_number: formData.companyDetails?.additional_phone_number,
          quotation_number: await generateQuotationNumber(formType)
        };
      } else if (formType === "container_services") {
        flattenedData = {
          user_id: user?.id || null,
          routing: formData.routing,
          entry_mode: formData.entry_mode,
          itemized_data: formData.itemized_data,
          consolidated_data: formData.consolidated_data,
          supporting_files: formData.supportingFiles ? JSON.stringify(formData.supportingFiles) : null,
          additional_information: formData.additionalInformation,
          effective_date: formData.effectiveDate,
          expiry_date: formData.expiryDate,
          service_contract_number: formData.serviceContractNumber,
          additional_services: formData.additionalServices,
          company_name: formData.companyDetails?.company_name,
          contact_person_name: formData.companyDetails?.contact_person_name,
          title: formData.companyDetails?.title,
          country_of_origin: formData.companyDetails?.country_of_origin,
          company_email: formData.companyDetails?.company_email,
          additional_email: formData.companyDetails?.additional_email,
          phone_number: formData.companyDetails?.phone_number,
          additional_phone_number: formData.companyDetails?.additional_phone_number,
          quotation_number: await generateQuotationNumber(formType)
        };
      } else if (formType === "handling_stevedoring_storage") {
        flattenedData = {
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
          quotation_number: await generateQuotationNumber(formType),
          additional_phone_number: formData.company_details?.additional_phone_number,
        };
      } else if (formType === "container_inland_services") {
        flattenedData = {
          user_id: user?.id || null,
          routing: formData.routing,
          entry_mode: formData.entry_mode,
          itemized_data: formData.itemized_data,
          consolidated_data: formData.consolidated_data,
          supporting_files: formData.supportingFiles ? JSON.stringify(formData.supportingFiles) : null,
          additional_information: formData.additionalInformation,
          effective_date: formData.effectiveDate,
          expiry_date: formData.expiryDate,
          service_contract_number: formData.serviceContractNumber,
          additional_services: formData.additionalServices,
          company_name: formData.companyDetails?.company_name,
          contact_person_name: formData.companyDetails?.contact_person_name,
          title: formData.companyDetails?.title,
          country_of_origin: formData.companyDetails?.country_of_origin,
          company_email: formData.companyDetails?.company_email,
          additional_email: formData.companyDetails?.additional_email,
          phone_number: formData.companyDetails?.phone_number,
          additional_phone_number: formData.companyDetails?.additional_phone_number,
          quotation_number: await generateQuotationNumber(formType)
        };
      }

      console.log("Container Services Form Data:", flattenedData);

      // Send email notification FIRST
      try {
        await sendFormEmail(formData, formType);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with form submission even if email fails
      }

      // Insert into database
      const { data, error } = await supabase
        .from(formType)  // Your Supabase table
        .insert([flattenedData]);  // Insert the data

      if (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Database insert failed, but email was sent",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Success",
          description: "Form submitted successfully",
        });
        router.push('/container-services-forms');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit form, please try again",
        variant: "destructive"
      });
    }
  };

  const tabData = [
    {
      id: "international",
      title: "Less than Container Load",
      description: "Less than Container Load is a shipping method that allows you to ship goods without the need to fill an entire container.",
      content: (
        <>
          <LessThanContainerForm
            onSubmit={(formData: any) => submitForm(formData, "less_than_container_load")}
          />
        </>
      ),
    },
    {
      id: "standard",
      title: "Container Service",
      description: "Container Service handles both standard and oversized containers for shipping goods efficiently.",
      content: (
        <>
          <ContainerServicesCard
            onSubmit={(formData: any) => submitForm(formData, "container_services")}
          />
        </>
      ),
    },
    {
      id: "hss",
      title: "Container H.S.S.",
      description: "Container Handling, Stevedoring & Storage is a shipping method that allows you to handle, stevedore and store goods in a container.",
      content: (
        <>
          <HSSCard
            onSubmit={(formData: any) => submitForm(formData, "handling_stevedoring_storage")}
          />
        </>
      ),
    },
    {
      id: "inland",
      title: "Inland Container Transportation",
      description: "Inland Container Transportation is a shipping method that allows you to transport goods in a container.",
      content: (
        <>
          <ContainerInlandServicesForm
            onSubmit={(formData: any) => submitForm(formData, "container_inland_services")}
          />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <FormTabs tabData={tabData} />
      <FAQSearch category="container" /> 
    </div>
  );
};

export default Page;
