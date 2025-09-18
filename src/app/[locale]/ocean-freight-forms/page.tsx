"use client";

import { generate_quotation_number } from "@/utils/quotation/generator";
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
    const [isSubmitting, setIsSubmitting] = useState(false); // Add isSubmitting state
    const { toast } = useToast()
    const router = useRouter()

    // Memoize the submit function to prevent unnecessary re-renders
    const submitForm = useCallback(async (formData: any, formType: any) => {
        console.log("=== OCEAN FREIGHT SUBMIT START ===");
        console.log("Form type:", formType);
        console.log("Form data received:", formData);
        
        setIsSubmitting(true); // Set submitting state to true
        
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        // Convert date strings to proper date format
        const formatDate = (dateString: string) => {
            if (!dateString) return null;
            // Convert from YYYY-MM-DD string to Date object
            return new Date(dateString).toISOString().split('T')[0];
        };

        // Reverted to original structure with simple routing
        flattenedData = {
            user_id: user?.id || null, // Will be null for anonymous users
            routing: formData.routing,
            entry_mode: formData.entry_mode,
            itemized_data: formData.itemized_data,
            consolidated_data: formData.consolidated_data,
            supporting_files: formData.supportingFiles,
            additional_information: formData.additionalInformation,
            effective_date: formatDate(formData.effectiveDate),
            expiry_date: formatDate(formData.expiryDate),
            service_contract_number: formData.serviceContractNumber,
            additional_services: formData.additionalServices,
            // Flatten company_details object to individual fields
            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            additional_email: formData.company_details.additional_email,
            phone_number: formData.company_details.phone_number,
            additional_phone_number: formData.company_details.additional_phone_number,
            form_type: formType,
            quotation_number: await generate_quotation_number(formType)
        };

        console.log("Flattened data:", flattenedData);

        try {
            // Send email notification FIRST (like air freight)
            try {
                await sendFormEmail(formData, formType);
                console.log('Email sent successfully');
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Continue with form submission even if email fails (like air freight)
            }

            // Database insertion (like air freight)
            const { data, error } = await supabase
                .from('ocean_freight_quotation')
                .insert([flattenedData]);

            if (error) {
                console.log("Database error:", error);
                console.log("Flattened data that failed:", flattenedData);
                toast({
                    title: "Error",
                    description: "Database insert failed, but email was sent",
                    variant: "destructive"
                });
            } else {
                // Success feedback (like air freight)
                toast({
                    title: "Success",
                    description: "Form Added Successfully",
                });
                router.push('/ocean-freight-forms');
            }
        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to submit form. Please try again.",
            });
        } finally {
            setIsSubmitting(false); // Reset submitting state to false
        }

        console.log("=== OCEAN FREIGHT SUBMIT END ===");
    }, [user?.id, supabase, toast, router]);

    // Try to fetch the authenticated user on component mount (optional)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser();

                if (user) {
                    setUser(user);
                }
            } catch (error) {
                // Silently handle auth errors - form can work without authentication
                console.log('No authenticated user found, proceeding with anonymous submission');
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
                <OceanFreightQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "ocean_freight_quotation")} 
                />
            )
        },
        {
            id: "project-cargo",
            title: "Project Cargo",
            description: "Comprehensive quotation form for project cargo with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "project_cargo_quotation")} 
                />
            )
        },
        {
            id: "roll-on-off",
            title: "Roll On/Off (RoRo) Ships",
            description: "Comprehensive quotation form for Roll On/Off services with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "roll_on_off_quotation")} 
                />
            )
        },
        {
            id: "heavy-lift",
            title: "Heavy Lift",
            description: "Comprehensive quotation form for heavy lift services with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "heavy_lift_quotation")} 
                />
            )
        },
        {
            id: "dangerous-cargo",
            title: "Dangerous Cargo",
            description: "Comprehensive quotation form for dangerous cargo with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "dangerous_cargo_quotation")} 
                />
            )
        },
        {
            id: "break-bulk",
            title: "Break Bulk Cargo",
            description: "Comprehensive quotation form for break bulk cargo with itemized and consolidated cargo entry modes",
            content: (
                <OceanFreightQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "break_bulk_quotation")} 
                />
            )
        },
        {
            id: "livestock",
            title: "Live Stock Transportation",
            description: "Specialized quotation form for livestock transportation with detailed animal information and special handling requirements",
            content: (
                <LivestockTransportationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "livestock_transportation")} 
                />
            )
        },
        {
            id: "tankers",
            title: "Tankers",
            description: "Quotation form for tanker services including crude oil, refined petroleum, chemicals, and liquefied gases transportation",
            content: (
                <TankersQuotationForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "tankers_quotation")} 
                />
            )
        }
    ], [submitForm, isSubmitting]);

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