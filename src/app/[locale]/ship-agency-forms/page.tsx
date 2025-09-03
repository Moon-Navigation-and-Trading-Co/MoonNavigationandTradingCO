"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import FormTabs from "@/components/form-tabs-variant-1";
import ProjectCargoServicesForm from "@/components/project-cargo-services-form";
import SignCrewMembersForm from "@/components/sign-crew-members-form";
import TransitSparePartsForm from "@/components/transit-spare-parts-form";
import RequestForPdaForm from "@/components/request-for-pda-form";
import BunkeringOilSupplyForm from "@/components/bunkering-oil-supply-form";
import SpecialServicesForm from "@/components/special-services-form";
import SuezCanalTransitForm from "@/components/suez-canal-transit-form";
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
    }, [supabase.auth]); // Include supabase.auth in dependency array

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center rounded-3xl">
        <Spinner />
      </div>
    ); // Display loading state while checking
  }

  const submitForm = async (formData: any, formType: any) => {
    // eslint-disable-next-line no-console
    console.log("=== SUBMIT FORM START ===");
    // eslint-disable-next-line no-console
    console.log("Form type:", formType);
    // eslint-disable-next-line no-console
    console.log("Form data received:", formData);
    
    // Flatten the formData before inserting into Supabase
    let flattenedData;

    if (formType === "request_for_pda") {
      // eslint-disable-next-line no-console
      console.log("Processing request_for_pda form...");
      flattenedData = {
        user_id: user?.id || null,
        port_name: formData.port.name,
        vessel_name: formData.vessel.name,
        vessel_imo: formData.vessel.imo,
        eta: formData.vessel.eta_expected_date,
        vessel_type: formData.vessel.type,
        flag: formData.vessel.flag,
        ship_gross_tonnage: formData.vessel.ship_gross_tonnage,
        ship_net_tonnage: formData.vessel.ship_net_tonnage,
        ship_dead_weight: formData.vessel.deadweight,
        ship_draft: formData.vessel.draft,
        vessel_length: formData.vessel.length,
        call_for_commercial: formData.vessel.call_for_commercial,
        call_for_maintenance: formData.vessel.call_for_maintenance,
        call_for_other: formData.vessel.call_for_other,
        other_purpose_details: formData.vessel.other_purpose_details,
        total_discharged_cargo: formData.vessel.total_discharged_cargo,
        discharged_cargo_type: formData.vessel.discharged_cargo_type,
        discharged_dangerous_cargo: formData.vessel.discharged_dangerous_cargo,
        total_days_needed_for_discharging: formData.vessel.total_days_needed_for_discharging,
        total_loaded_cargo: formData.vessel.total_loaded_cargo,
        loaded_cargo_type: formData.vessel.loaded_cargo_type,
        loaded_dangerous_cargo: formData.vessel.loaded_dangerous_cargo,
        total_days_needed_for_loading: formData.vessel.total_days_needed_for_loading,
        total_expected_berthing_days: formData.vessel.total_expected_berthing_days,
        total_waiting_anchor: formData.vessel.total_expected_anchor_days,
        services: formData.services,
        additional_information: formData.additional_information,
        supporting_files: formData.supporting_files,
        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number: formData.company_details.additional_phone_number,
      };
      // eslint-disable-next-line no-console
      console.log("Flattened data for request_for_pda:", flattenedData);
    } else if (formType === "sign_crew_members") {
      flattenedData = {
        user_id: user?.id || null,
        port_name: formData.port.name,
        vessel_name: formData.vessel.name,
        vessel_imo: formData.vessel.imo,
        at_anchor: formData.vessel.anchor,
        at_berth: formData.vessel.berth,

        sign_on: formData.crew.on,
        sign_off: formData.crew.off,
        crew_nationalities_sign_on: formData.crew.members_on,
        crew_nationalities_sign_off: formData.crew.members_off,
        hotel_sign_on: formData.crew.hotel_on,
        hotel_sign_off: formData.crew.hotel_off,
        hotel_special_req_sign_on: formData.crew.hotel_req_on,
        hotel_special_req_sign_off: formData.crew.hotel_req_off,
        transport_sign_on: formData.crew.transportation_on,
        transport_sign_off: formData.crew.transportation_off,
        transport_special_req_sign_on: formData.crew.transportation_req_on,
        transport_special_req_sign_off: formData.crew.transportation_req_off,

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
    } else if (formType === "transfer_spare_parts") {
      flattenedData = {
        user_id: user?.id || null,
        port_name: formData.port.name,
        vessel_name: formData.vessel.name,
        vessel_imo: formData.vessel.imo,
        at_anchor: formData.vessel.anchor,
        at_berth: formData.vessel.berth,
        special_request: formData.vessel.request,

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
    } else if (formType === "bunkering_oil_supply") {
      flattenedData = {
        user_id: user?.id || null,
        vessel_name: formData.vessel.name,
        vessel_imo: formData.vessel.imo,
        port_name: formData.vessel.port_name,
        flag: formData.vessel.flag,
        eta: formData.vessel.eta,
        etd: formData.vessel.etd,
        location: formData.vessel.location,
        expected_delivery_date: formData.vessel.expected_delivery_date,
        bunkering_services: formData.services.bunkering,
        lubricant_oil_services: formData.services.lubricant_oil,
        ship_chandlery_services: formData.services.ship_chandlery,
        additional_information: formData.additional_information,
        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number: formData.company_details.additional_phone_number,
      };
    } else if (formType === "special_services") {
      flattenedData = {
        user_id: user?.id || null,
        vessel_name: formData.vessel.name,
        vessel_imo: formData.vessel.imo,
        port_name: formData.vessel.port_name,
        flag: formData.vessel.flag,
        eta: formData.vessel.eta,
        etd: formData.vessel.etd,
        location: formData.vessel.location,
        requested_services: formData.requested_services,
        additional_information: formData.additional_information,
        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number: formData.company_details.additional_phone_number,
      };
    } else if (formType === "suez_canal_transit") {
      flattenedData = {
        user_id: user?.id || null,
        vessel_name: formData.vessel.name,
        vessel_imo: formData.vessel.imo,
        flag: formData.vessel.flag,
        vessel_type: formData.vessel.type,
        call_sign: formData.vessel.call_sign,
        gross_tonnage: formData.vessel.gross_tonnage,
        net_tonnage: formData.vessel.net_tonnage,
        length_overall: formData.vessel.length_overall,
        beam: formData.vessel.beam,
        draft: formData.vessel.draft,
        air_draft: formData.vessel.air_draft,
        deadweight: formData.vessel.deadweight,
        cargo_description: formData.vessel.cargo_description,
        cargo_quantity: formData.vessel.cargo_quantity,
        cargo_unit: formData.vessel.cargo_unit,
        eta: formData.vessel.eta,
        etd: formData.vessel.etd,
        transit_type: formData.transit_details.transit_type,
        convoy_number: formData.transit_details.convoy_number,
        convoy_date: formData.transit_details.convoy_date,
        convoy_time: formData.transit_details.convoy_time,
        transit_route: formData.transit_details.transit_route,
        transit_direction: formData.transit_details.transit_direction,
        transit_purpose: formData.transit_details.transit_purpose,
        additional_transit_info: formData.transit_details.additional_info,
        agent_name: formData.agent_details.agent_name,
        agent_contact: formData.agent_details.agent_contact,
        agent_phone: formData.agent_details.agent_phone,
        agent_email: formData.agent_details.agent_email,
        agent_address: formData.agent_details.agent_address,
        agent_license: formData.agent_details.agent_license,
        agent_license_expiry: formData.agent_details.agent_license_expiry,
        agent_authorization: formData.agent_details.agent_authorization,
        agent_authorization_expiry: formData.agent_details.agent_authorization_expiry,
        agent_services: formData.agent_details.services,
        agent_additional_services: formData.agent_details.additional_services,
        agent_notes: formData.agent_details.notes,
        company_name: formData.company_details.company_name,
        contact_person_name: formData.company_details.contact_person_name,
        title: formData.company_details.title,
        country_of_origin: formData.company_details.country_of_origin,
        company_email: formData.company_details.company_email,
        additional_email: formData.company_details.additional_email,
        phone_number: formData.company_details.phone_number,
        additional_phone_number: formData.company_details.additional_phone_number,
        additional_notes: formData.additional_notes,
      };
    }

    // eslint-disable-next-line no-console
    console.log(flattenedData);

    // Send email notification FIRST
    try {
        // eslint-disable-next-line no-console
        console.log("Attempting to send email...");
        await sendFormEmail(formData, formType);
        // eslint-disable-next-line no-console
        console.log('Email sent successfully');
    } catch (emailError) {
        // eslint-disable-next-line no-console
        console.error('Email sending failed:', emailError);
        // Continue with form submission even if email fails
    }

    // eslint-disable-next-line no-console
    console.log("Attempting to insert into database...");
    const { data, error } = await supabase
      .from(formType) // Your Supabase table
      .insert([flattenedData]); // Insert the flattened data

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Database error:", error);
      toast({
        title: "Error",
        description: "Database insert failed, but email was sent",
        variant: "destructive",
      });
    } else {
      // eslint-disable-next-line no-console
      console.log("Database insert successful:", data);
      //green toast
      toast({
        title: "Success",
        description: "Form Added Successfully",
      });
      router.push("/ship-agency-forms");
    }
    // eslint-disable-next-line no-console
    console.log("=== SUBMIT FORM END ===");
  };

  const tabData = [
    {
      id: "pda",
      title: "Request For PDA",
      description: "Request for Port Disbursement Account",
      content: (
        <>
          <RequestForPdaForm
            onSubmit={(formData: any) =>
              submitForm(formData, "request_for_pda")
            }
          />
        </>
      ),
    },
    {
      id: "crew",
      title: "Sign On/Off Crew Members",
      description: "Sign on/off crew members",
      content: (
        <>
          <SignCrewMembersForm
            onSubmit={(formData: any) =>
              submitForm(formData, "sign_crew_members")
            }
          />
        </>
      ),
    },
    {
      id: "suez-canal",
      title: "Suez Canal Transit",
      description: "Suez Canal transit services",
      content: (
        <>
          <SuezCanalTransitForm
            onSubmit={(formData: any) =>
              submitForm(formData, "suez_canal_transit")
            }
          />
        </>
      ),
    },
    {
      id: "transit",
      title: "Transit Spare Parts",
      description: "Transit spare parts",
      content: (
        <>
          <TransitSparePartsForm
            onSubmit={(formData: any) =>
              submitForm(formData, "transfer_spare_parts")
            }
          />
        </>
      ),
    },
    {
      id: "bunkering",
      title: "Bunkering | Oil Supply | Ship Chandlery",
      description: "Bunkering, oil supply, and ship chandlery services",
      content: (
        <>
          <BunkeringOilSupplyForm
            onSubmit={(formData: any) =>
              submitForm(formData, "bunkering_oil_supply")
            }
          />
        </>
      ),
    },
    {
      id: "special",
      title: "Special Services",
      description: "Special services and custom requests",
      content: (
        <>
          <SpecialServicesForm
            onSubmit={(formData: any) =>
              submitForm(formData, "special_services")
            }
          />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="mt-20 flex flex-col gap-5 px-4">
        <h1 className="text-3xl font-raleway font-medium">Ship Agency Services</h1>
        <p className="text-muted-foreground">
          All our ship agency services are exclusively available at all Egyptian ports.*
        </p>
      </div>
                  <FormTabs tabData={tabData} />
    </div>
  );
};

export default Page;
