"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import ProjectCargoServicesForm from '@/components/project-cargo-services-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import RollOnOffForm from '@/components/roll-on-off-form';
import { sendFormEmail } from '@/utils/email-helper';
import { Button } from '@/components/ui/button';
import OceanFreightQuotationForm from '@/components/ocean-freight-quotation-form';
import LivestockTransportationForm from '@/components/livestock-transportation-form';
import TankersQuotationForm from '@/components/tankers-quotation-form';
import FAQSearch from '@/components/faq';

const Page: React.FC = () => {
    const t = useTranslations('forms');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [user, setUser] = useState<any>(null); // State to hold the user
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
    }, [router, supabase]); // Only run once when the component mounts


    if (isLoading) {
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>; // Display loading state while checking
    }
    const submitForm = async (formData: any, formType: any) => {
        console.log("hi")
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        if (formType === "project_cargo_services") {

            flattenedData = {
                user_id: user?.id || null,
                routing: formData.routing,
                effective_date: formData.dates.effective_date,
                expiry_date: formData.dates.expiry_date,
                commodity_type: formData.commodities.type,
                dangerous: formData.commodities.dangerous,
                commoditiy_details: formData.commodities.details,
                length: formData.commodities.length,
                width: formData.commodities.width,
                height: formData.commodities.height,
                weight: formData.commodities.weight,
                file: formData.commodities.file,
                additional_information: formData.commodities.additional_information,
                value_added_service: formData.value_added_service.request,
                service_contract: formData.service_contract.service_contract,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number
            };
        } else if (formType === "roll_on_off" || formType === "heavy_lift" || formType === "dangerous_cargo_services") {
            flattenedData = {
                user_id: user?.id || null,
                routing: formData.routing,
                effective_date: formData.dates.effective_date,
                expiry_date: formData.dates.expiry_date,
                commodities: formData.commodities,
                value_added_service: formData.value_added_service.request,
                service_contract: formData.service_contract.service_contract,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number
            };
        } else if (formType === "ocean_freight_quotation") {
            flattenedData = {
                user_id: user?.id || null,
                routing: JSON.stringify(formData.routing),
                cargo_mode: formData.cargoMode,
                itemized_cargo: formData.itemizedCargo ? JSON.stringify(formData.itemizedCargo) : null,
                consolidated_cargo: formData.consolidatedCargo ? JSON.stringify(formData.consolidatedCargo) : null,
                supporting_files: formData.supportingFiles,
                additional_information: formData.additionalInformation,
                effective_date: formData.effectiveDate,
                expiry_date: formData.expiryDate,
                service_contract_number: formData.serviceContractNumber,
                additional_services: JSON.stringify(formData.additionalServices),
                company_name: formData.companyDetails.companyName,
                contact_person: formData.companyDetails.contactPerson,
                title: formData.companyDetails.title,
                city: formData.companyDetails.city,
                country: formData.companyDetails.country,
                email: formData.companyDetails.email,
                additional_email: formData.companyDetails.additionalEmail,
                phone: formData.companyDetails.phone,
                additional_phone: formData.companyDetails.additionalPhone,
                created_at: new Date().toISOString(),
            };
        } else if (formType === "livestock_transportation") {
            flattenedData = {
                user_id: user?.id || null,
                routing: JSON.stringify(formData.routing),
                effective_date: formData.dates.effectiveDate,
                expiry_date: formData.dates.expiryDate,
                livestock_details: JSON.stringify(formData.livestockDetails),
                special_handling: formData.specialHandling,
                supporting_files: formData.supportingFiles ? JSON.stringify(formData.supportingFiles) : null,
                cargo_lifting_points: formData.cargoLiftingPoints || false,
                additional_information: formData.additionalInformation,
                service_contract: formData.serviceContract,
                transport_modes: JSON.stringify(formData.transportModes),
                additional_services: JSON.stringify(formData.additionalServices),
                insurance: JSON.stringify(formData.insurance),
                company_name: formData.companyDetails.companyName,
                contact_person_name: formData.companyDetails.contactPerson,
                title: formData.companyDetails.title,
                city_country: formData.companyDetails.cityCountry,
                company_email: formData.companyDetails.email,
                additional_email: formData.companyDetails.additionalEmail,
                phone_number: formData.companyDetails.phone,
                additional_phone: formData.companyDetails.additionalPhone,
            };
        } else if (formType === "tankers_quotation") {
            flattenedData = {
                user_id: user?.id || null,
                routing: JSON.stringify(formData.routing),
                effective_date: formData.dates.effectiveDate,
                expiry_date: formData.dates.expiryDate,
                cargo_details: JSON.stringify(formData.cargoDetails),
                vessel_specs: JSON.stringify(formData.vesselSpecs),
                supporting_files: formData.supportingFiles ? JSON.stringify(formData.supportingFiles) : null,
                cargo_lifting_points: formData.cargoLiftingPoints || false,
                additional_information: formData.additionalInformation,
                service_contract: formData.serviceContract,
                safety_compliance: JSON.stringify(formData.safetyCompliance),
                marine_insurance: JSON.stringify(formData.marineInsurance),
                additional_services: JSON.stringify(formData.additionalServices),
                company_name: formData.companyDetails.companyName,
                contact_person_name: formData.companyDetails.contactPerson,
                title: formData.companyDetails.title,
                city_country: formData.companyDetails.cityCountry,
                company_email: formData.companyDetails.email,
                additional_email: formData.companyDetails.additionalEmail,
                phone_number: formData.companyDetails.phone,
                additional_phone: formData.companyDetails.additionalPhone,
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
            router.push('/ocean-freight-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: t('project-cargo'),
            description: t('project-cargo-p'),
            content:
                <>
                    <ProjectCargoServicesForm onSubmit={(formData: any) => submitForm(formData, "project_cargo_services")} />
                </>
        },
        {
            id: "roll",
            title: t('roll-on-off'),
            description: t('roll-on-off-p'),
            content:
                <>
                    <RollOnOffForm onSubmit={(formData: any) => submitForm(formData, "roll_on_off")} />
                </>
        },
        {
            id: "heavy",
            title: t('heavy-lift'),
            description: t('heavy-lift-p'),
            content:
                <>
                    <RollOnOffForm onSubmit={(formData: any) => submitForm(formData, "heavy_lift")} />
                </>
        },
        {
            id: "dangerous",
            title: t('dangerous-cargo'),
            description: t('dangerous-cargo-p'),
            content:
                <>
                    <RollOnOffForm dangerous_bool={true} onSubmit={(formData: any) => submitForm(formData, "dangerous_cargo_services")} />
                </>
        },
        {
            id: "breakbulk",
            title: t('breakbulk'),
            description: t('breakbulk-p'),
            content:
                <>
                     <RollOnOffForm breakbulk_bool={true} onSubmit={(formData: any) => submitForm(formData, "breakbulk")} /> 
                </>
        },
        {
            id: "quotation",
            title: "Ocean Freight Quotation",
            description: "Comprehensive quotation form with itemized and consolidated cargo entry modes",
            content:
                <>
                    <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "ocean_freight_quotation")} />
                </>
        },
        {
            id: "livestock",
            title: "Live Stock Transportation",
            description: "Specialized quotation form for livestock transportation with detailed animal information and special handling requirements",
            content:
                <>
                    <LivestockTransportationForm onSubmit={(formData: any) => submitForm(formData, "livestock_transportation")} />
                </>
        },
                              {
                          id: "tankers",
                          title: "Tankers",
                          description: "Quotation form for tanker services including crude oil, refined petroleum, chemicals, and liquefied gases transportation",
            content:
                <>
                    <TankersQuotationForm onSubmit={(formData: any) => submitForm(formData, "tankers_quotation")} />
                </>
        }


    ]


    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>{t('ocean')}</h1>
                <p className=''>{t('ocean-p')}</p>
            </div>
            <FormTabs tabData={tabData} />
            <FAQSearch category="ocean-freight" />
        </div>
    );
};

export default Page;