"use client"
import React, { useEffect, useState, useMemo, useCallback, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import { Button } from '@/components/ui/button';
import FormTabs from '@/components/form-tabs-variant-1';
import ProjectCargoServicesForm from '@/components/project-cargo-services-form';
import RollOnOffForm from '@/components/roll-on-off-form';
import OceanFreightQuotationForm from '@/components/ocean-freight-quotation-form';
import LivestockTransportationForm from '@/components/livestock-transportation-form';
import TankersQuotationForm from '@/components/tankers-quotation-form';
import dynamic from 'next/dynamic';

// Only lazy load the FAQ component as it's not immediately visible
const FAQSearch = dynamic(() => import('@/components/faq'), {
    loading: () => <div className="flex justify-center p-4"><Spinner /></div>,
    ssr: false
});

const Page: React.FC = () => {
    const t = useTranslations('forms');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const { toast } = useToast()
    const router = useRouter()

    // Memoize the submit function to prevent unnecessary re-renders
    const submitForm = useCallback(async (formData: any, formType: any) => {
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
        } else if (formType === "livestock_transportation") {
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
        } else if (formType === "tankers_quotation") {
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
        } else if (formType === "breakbulk") {
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
        }

        try {
            const { data, error } = await supabase
                .from('ocean_freight_forms')
                .insert([flattenedData]);

            if (error) {
                console.error('Error inserting data:', error);
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Failed to submit form. Please try again.",
                })
                return;
            }

            // Send email notification
            await sendFormEmail(formData, formType, ['ocean_freight_forms']);

            toast({
                title: "Success",
                description: "Form Added Successfully",
            })
            router.push('/ocean-freight-forms')

        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to submit form. Please try again.",
            })
        }
    }, [user?.id, supabase, toast, router]);

    // Fetch the authenticated user on component mount
    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        };

        fetchUser();
    }, [supabase.auth]);

    // Memoize tab data to prevent unnecessary re-renders
    const tabData = useMemo(() => [
        {
            id: "international",
            title: t('project-cargo'),
            description: t('project-cargo-p'),
            content: (
                <ProjectCargoServicesForm onSubmit={(formData: any) => submitForm(formData, "project_cargo_services")} />
            )
        },
        {
            id: "roll",
            title: t('roll-on-off'),
            description: t('roll-on-off-p'),
            content: (
                <RollOnOffForm onSubmit={(formData: any) => submitForm(formData, "roll_on_off")} />
            )
        },
        {
            id: "heavy",
            title: t('heavy-lift'),
            description: t('heavy-lift-p'),
            content: (
                <RollOnOffForm onSubmit={(formData: any) => submitForm(formData, "heavy_lift")} />
            )
        },
        {
            id: "dangerous",
            title: t('dangerous-cargo'),
            description: t('dangerous-cargo-p'),
            content: (
                <RollOnOffForm dangerous_bool={true} onSubmit={(formData: any) => submitForm(formData, "dangerous_cargo_services")} />
            )
        },
        {
            id: "breakbulk",
            title: t('breakbulk'),
            description: t('breakbulk-p'),
            content: (
                <RollOnOffForm breakbulk_bool={true} onSubmit={(formData: any) => submitForm(formData, "breakbulk")} />
            )
        },
        {
            id: "quotation",
            title: "Ocean Freight Quotation",
            description: "Comprehensive quotation form with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "ocean_freight_quotation")} />
            )
        },
        {
            id: "livestock",
            title: "Live Stock Transportation",
            description: "Specialized quotation form for livestock transportation with detailed animal information and special handling requirements",
            content: (
                <LivestockTransportationForm onSubmit={(formData: any) => submitForm(formData, "livestock_transportation")} />
            )
        },
        {
            id: "tankers",
            title: "Tankers",
            description: "Quotation form for tanker services including crude oil, refined petroleum, chemicals, and liquefied gases transportation",
            content: (
                <TankersQuotationForm onSubmit={(formData: any) => submitForm(formData, "tankers_quotation")} />
            )
        }
    ], [t, submitForm]);

    if (isLoading) {
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>;
    }

    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>{t('ocean')}</h1>
                <p className=''>{t('ocean-p')}</p>
            </div>
            <FormTabs tabData={tabData} />
            <Suspense fallback={<div className="flex justify-center p-4"><Spinner /></div>}>
                <FAQSearch category="ocean-freight" />
            </Suspense>
        </div>
    );
};

export default Page;