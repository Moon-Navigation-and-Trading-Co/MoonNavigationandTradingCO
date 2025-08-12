"use client"
import React, { useEffect, useState } from 'react';
import SuezCanalTransitForm from '@/components/suez-canal-transit-form';
import { useTranslations } from 'next-intl';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';

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
    }, [router, supabase]);

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Suez Canal Transit Quotation Request
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Request a comprehensive quote for your vessel's transit through the Suez Canal. 
                        Our experienced team will provide you with detailed pricing and transit arrangements.
                    </p>
                </div>

                {/* Form Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <SuezCanalTransitForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default SuezCanalFormPage;
