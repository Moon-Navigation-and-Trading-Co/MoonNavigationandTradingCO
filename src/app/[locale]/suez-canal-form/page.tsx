"use client"
import React, { useEffect, useState } from 'react';
import SuezCanalTransitForm from '@/components/suez-canal-transit-form';
import { useTranslations } from 'next-intl';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FormTabs from '@/components/form-tabs-variant-1';
import FAQSearch from '@/components/faq';

const SuezCanalFormPage = () => {
    const t = useTranslations('Inland-errors');
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
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>;
    }

    const handleSubmit = async (formData: any) => {
        // Prepare data for the new JSON structure
        const suezCanalData = {
            user_id: user?.id || null,
            date: formData.date,
            vessel: formData.vessel,
            cargo: formData.cargo,
            unit_carriage: formData.unit_carriage,
            transit: formData.transit,
            additional_services: formData.additional_services,
            additional_notes: formData.additional_notes,
            company_details: formData.company_details
        };

        console.log(suezCanalData)

        // Send email notification FIRST
        try {
            await sendFormEmail(formData, 'suez_canal_transit');
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue with form submission even if email fails
        }

        const { data, error } = await supabase
            .from("suez_canal_transit")  // Your Supabase table
            .insert([suezCanalData]);  // Insert the data

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
                description: "Form Submitted Successfully",
            })
        }
    };

    const tabData = [
        {
            id: "suez-canal-transit",
            title: "Suez Canal Transit Services",
            description: "Comprehensive transit solutions through the Suez Canal",
            content:
                <>
                    <SuezCanalTransitForm onSubmit={handleSubmit} />
                </>
        }
    ]

    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>Suez Canal Transit</h1>
                <p className=''>Professional transit services through the Suez Canal</p>
            </div>
            <FormTabs tabData={tabData} />
            <FAQSearch category="suez-canal-transit" />
        </div>
    );
};

export default SuezCanalFormPage;
