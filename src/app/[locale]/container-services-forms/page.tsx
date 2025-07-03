"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import FormTabs from "@/components/form-tabs-variant-1";
import OversizedContainerCard from "@/components/oversized-container-form";
import LessThanContainerForm from "@/components/less-than-container-form";
import StandardContainerCard from "@/components/standard-container-form";
import ContainerInlandServicesForm from "@/components/container-inland-services-form";
import HSSCard from "@/components/hss-form";
import { createClient } from "@/utils/supabase/client"; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Spinner from "@/components/spinner";
import { sendFormEmail } from '@/utils/email-helper';

const Page: React.FC = () => {
  const t = useTranslations("forms");
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [user, setUser] = useState<any>(null); // State to hold the user
  const { toast } = useToast();
  const router = useRouter();

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
  }, [router, supabase]); // Only run once when the component mounts

  if (isLoading) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <Spinner />
      </div>
    ); // Display loading state while checking
  }


  const submitForm = async (formData: any, formType: any) => {
    // Flatten the formData before inserting into Supabase
    let flattenedData;

    if (formType === "less_than_container_load") {
      flattenedData = {
        user_id: user?.id || null,
        routing: formData.routing,

        type_of_commodity: formData.commodities.type_of_commodity,
        validity: formData.commodities.validity,
        gross_volume: formData.commodities.gross_volume,
        cargo_weight: formData.commodities.gross_weight,
        package_type: formData.commodities.package_type,
        additional_information: formData.commodities.additional_information,

        import_service: formData.recommended.import,
        export_service: formData.recommended.export,

        vad: formData.vad.inland_container,

        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number:
          formData.company_details.additional_phone_number,
      };
    } else if (formType === "standard_container") {
      flattenedData = {
        user_id: user?.id || null,

        routing: formData.routing,

        commodities: formData.commodities,

        value_added_services: formData.vad.inland_container,

        service_contract: formData.service_contract || null,

        effective_date: formData.dates.effective_date,
        expiry_date: formData.dates.expiry_date,

        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number:
          formData.company_details.additional_phone_number,
      };
    } else if (formType === "oversized_container") {
      flattenedData = {
        user_id: user?.id || null,

        routing: formData.routing,

        commodities: formData.commodities,

        shipment_type: formData.shipment_type,

        value_added_services: formData.vad.inland_container,

        service_contract: formData.service_contract,

        effective_date: formData.dates.effective_date,
        expiry_date: formData.dates.expiry_date,

        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number:
          formData.company_details.additional_phone_number,
      };
    } else if (formType === "handling_stevedoring_storage") {
      flattenedData = {
        user_id: user?.id || null,

        location: formData.location,

        commodities: formData.commodities,

        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number:
          formData.company_details.additional_phone_number,
      };
    } else if (formType === "container_inland_services") {
      flattenedData = {
        user_id: user?.id || null,
        routing: formData.routing,
        additional_information: formData.additional_information,
        commodities: formData.commodities,
        inland_container: formData.vad.inland_container,
        service_contract: formData.service_contract.container,
        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number:
          formData.company_details.additional_phone_number,
      };
    }

    console.log(flattenedData)

    // Send email notification FIRST
    try {
        await sendFormEmail(formData, formType);
        console.log('Email sent successfully');
    } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with form submission even if email fails
    }

    const { data, error } = await supabase
        .from(formType)  // Your Supabase table
        .insert([flattenedData]);  // Insert the flattened data

    if (error) {
        console.log(flattenedData)
        console.log(error)
        toast({
            title: "Error",
            description: "Database insert failed, but email was sent",
            variant: "destructive"
        })
    } else {
        //green toast
        toast({
            title: "Success",
            description: "Form Added Successfully",
        })
        router.push('/container-services-forms')

    }
  };

  const tabData = [
    {
      id: "international",
      title: "Less than Container Load",
      description:
        "Less than Container Load is a shipping method that allows you to ship goods without the need to fill an entire container.",
      content: (
        <>
          <LessThanContainerForm
            onSubmit={(formData: any) =>
              submitForm(formData, "less_than_container_load")
            }
          />
        </>
      ),
    },
    {
      id: "standard",
      title: "Standard Container",
      description:
        "Standard Container is a shipping method that allows you to ship goods in a standard container.",
      content: (
        <>
          <StandardContainerCard
            onSubmit={(formData: any) =>
              submitForm(formData, "standard_container")
            }
          />
        </>
      ),
    },
    {
      id: "oversized",
      title: "Oversized Container",
      description:
        "Oversized Container is a shipping method that allows you to ship goods in an oversized container.",
      content: (
        <>
          <OversizedContainerCard
            onSubmit={(formData: any) =>
              submitForm(formData, "oversized_container")
            }
          />
        </>
      ),
    },
    {
      id: "hss",
      title: "Container H.S.S.",
      description:
        "Container Handling, Stevedoring & Storage is a shipping method that allows you to handle, stevedore and store goods in a container.",
      content: (
        <>
          <HSSCard
            onSubmit={(formData: any) =>
              submitForm(formData, "handling_stevedoring_storage")
            }
          />
        </>
      ),
    },
    {
      id: "inland",
      title: "Inland Container Transportation",
      description:
        "Inland Container Transportation is a shipping method that allows you to transport goods in a container.",
      content: (
        <>
          <ContainerInlandServicesForm
            onSubmit={(formData: any) =>
              submitForm(formData, "container_inland_services")
            }
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
