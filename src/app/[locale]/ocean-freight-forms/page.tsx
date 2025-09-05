"use client";

import { generateQuotationNumber } from "@/utils/quotation/generator";
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

        // Reverted to original structure with simple routing
        flattenedData = {
            user_id: user?.id || null,
            routing: formData.routing,
            entry_mode: formData.entry_mode,
            itemized_data: formData.itemized_data,
            consolidated_data: formData.consolidated_data,
            supporting_files: formData.supportingFiles,
            additional_information: formData.additionalInformation,
            effective_date: formData.effectiveDate,
            expiry_date: formData.expiryDate,
            service_contract_number: formData.serviceContractNumber,
            additional_services: formData.additionalServices,
            company_name: formData.companyDetails.company_name,
            contact_person_name: formData.companyDetails.contact_person_name,
            title: formData.companyDetails.title,
            country_of_origin: formData.companyDetails.country_of_origin,
            company_email: formData.companyDetails.company_email,
            additional_email: formData.companyDetails.additional_email,
            phone_number: formData.companyDetails.phone_number,
            additional_phone_number: formData.companyDetails.additional_phone_number,
            form_type: formType,
            quotation_number: await generateQuotationNumber(formType)
        };

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
            id: "ocean-freight",
            title: "Ocean Freight",
            description: "Comprehensive quotation form with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "ocean_freight_quotation")} />
            )
        },
        {
            id: "project-cargo",
            title: "Project Cargo",
            description: "Comprehensive quotation form for project cargo with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "project_cargo_quotation")} />
            )
        },
        {
            id: "roll-on-off",
            title: "Roll On/Off (RoRo) Ships",
            description: "Comprehensive quotation form for Roll On/Off services with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "roll_on_off_quotation")} />
            )
        },
        {
            id: "heavy-lift",
            title: "Heavy Lift",
            description: "Comprehensive quotation form for heavy lift services with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "heavy_lift_quotation")} />
            )
        },
        {
            id: "dangerous-cargo",
            title: "Dangerous Cargo",
            description: "Comprehensive quotation form for dangerous cargo with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "dangerous_cargo_quotation")} />
            )
        },
        {
            id: "break-bulk",
            title: "Break Bulk Cargo",
            description: "Comprehensive quotation form for break bulk cargo with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm onSubmit={(formData: any) => submitForm(formData, "break_bulk_quotation")} />
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
                <h1 className='text-3xl font-raleway font-medium'>{t('ocean')}</h1>
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