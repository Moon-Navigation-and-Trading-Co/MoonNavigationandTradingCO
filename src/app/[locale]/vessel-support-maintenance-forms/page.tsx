"use client";

import { generate_quotation_number } from "@/utils/quotation/generator";

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FormTabs from '@/components/form-tabs-variant-1';
import ShipMaintenanceForm from '@/components/ship-maintenance-form';
import ShipManagementForm from '@/components/ship-management-form';
import FAQSearch from '@/components/faq';

const Page: React.FC = () => {
    const t = useTranslations('forms');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast()
    const router = useRouter()

    const submitForm = useCallback(async (formData: any, formType: any) => {
        setIsSubmitting(true);
        
        try {
            console.log("=== VESSEL SUPPORT AND MAINTENANCE FORMS SUBMIT START ===");
            console.log("Form Type:", formType);
            console.log("Form Data:", formData);

            // Handle different form types with their specific data structures
            let flattenedData: any = {
                user_id: user?.id || null,
                quotation_number: await generate_quotation_number(formType),
                company_name: formData.company_details?.company_name,
                contact_person_name: formData.company_details?.contact_person_name,
                title: formData.company_details?.title,
                country_of_origin: formData.company_details?.country_of_origin,
                company_email: formData.company_details?.company_email,
                additional_email: formData.company_details?.additional_email,
                phone_number: formData.company_details?.phone_number,
                additional_phone_number: formData.company_details?.additional_phone_number,
            };

            // Add form-specific fields based on form type
            if (formType === "ship_maintenance") {
                flattenedData = {
                    ...flattenedData,
                    request: formData.request,
                };
            } else if (formType === "ship_management") {
                flattenedData = {
                    ...flattenedData,
                    vessel_name: formData.vessel?.name,
                    vessel_imo: formData.vessel?.imo,
                    vessel_flag: formData.vessel?.flag,
                    vessel_type: formData.vessel?.type,
                    vessel_grt: formData.vessel?.grt,
                    vessel_nrt: formData.vessel?.nrt,
                    vessel_loa: formData.vessel?.loa,
                    vessel_dwt: formData.vessel?.dwt,
                    current_port: formData.vessel?.current_port,
                    owner_company: formData.vessel?.owner_company,
                    services: formData.services,
                    vessel_condition: formData.vessel_condition,
                    contract_duration: formData.contract_duration,
                    additional_information: formData.additional_information,
                };
            }

            console.log("Flattened Data:", flattenedData);

            // Send email notification FIRST
            try {
                await sendFormEmail(formData, formType);
                console.log('Email sent successfully');
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Continue with form submission even if email fails
            }

            // Determine the correct table based on form type
            const tableName = formType === "ship_maintenance" 
                ? "ship_maintenance" 
                : "ship_management";

            const { data, error } = await supabase
                .from(tableName)
                .insert([flattenedData]);

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
                    description: "Form Added Successfully",
                });
                router.push('/vessel-support-maintenance-forms');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Error",
                description: "Failed to submit form, please try again",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }

        console.log("=== VESSEL SUPPORT AND MAINTENANCE FORMS SUBMIT END ===");
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
            id: "docking-maintenance",
            title: "Docking and Maintenance Services",
            description: "Comprehensive vessel docking, maintenance, and repair services for optimal vessel performance",
            content: (
                <ShipMaintenanceForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "ship_maintenance")} 
                />
            )
        },
        {
            id: "ship-management",
            title: "Ship Management Services",
            description: "Complete ship management and operation services including technical management, crew management, and safety compliance",
            content: (
                <ShipManagementForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "ship_management")} 
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
                <h1 className='text-3xl font-raleway font-medium'>Vessel Support and Maintenance</h1>
                <p className=''>Comprehensive vessel support services including docking, maintenance, repair, and complete ship management solutions</p>
            </div>
            <FormTabs tabData={tabData} />
            <FAQSearch category="vessel-support-maintenance-forms" />
        </div>
    );
};

export default Page;
