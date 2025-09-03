"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import OceanFreightQuotationForm from '@/components/ocean-freight-quotation-form';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FAQSearch from '@/components/faq';

const OceanFreightQuotationPage: React.FC = () => {
    const t = useTranslations('forms');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const { toast } = useToast();
    const router = useRouter();

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
    }, [supabase.auth]); // Include supabase.auth in dependency array

    if (isLoading) {
        return (
            <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
                <Spinner />
            </div>
        );
    }

    const submitForm = async (formData: any) => {
        try {
            // Flatten the formData for database insertion
            const flattenedData = {
                user_id: user?.id || null,
                form_type: 'ocean_freight_quotation',
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

            // Insert into database
            const { error } = await supabase
                .from('ocean_freight_quotations')
                .insert([flattenedData]);

            if (error) {
                console.error('Database error:', error);
                toast({
                    title: "Error",
                    description: "Failed to save form data",
                    variant: "destructive"
                });
                return;
            }

            // Send email notification
            try {
                await sendFormEmail(formData, 'ocean_freight_quotation', [formData.companyDetails.email]);
            } catch (emailError) {
                console.error('Email error:', emailError);
            }

            toast({
                title: "Success",
                description: "Your ocean freight quotation request has been submitted successfully",
            });

            // Redirect to confirmation page or home
            router.push('/');

        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Error",
                description: "Failed to submit form. Please try again.",
                variant: "destructive"
            });
        }
    };

    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>Ocean Freight Quotation Request</h1>
                <p className=''>
                    Please fill out the form below to request a quote for ocean freight services. 
                    You can choose between itemized entry (for detailed cargo information) or consolidated entry (for bulk shipments).
                </p>
            </div>
            
            <div className='px-4'>
            <OceanFreightQuotationForm onSubmit={submitForm} />
            </div>
            
            <FAQSearch category="ocean-freight" />
        </div>
    );
};

export default OceanFreightQuotationPage; 