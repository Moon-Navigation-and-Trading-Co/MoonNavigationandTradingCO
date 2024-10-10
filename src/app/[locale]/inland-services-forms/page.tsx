"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import InternationalInlandServicesForm from '@/components/international-inland-services-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { redirect, useRouter } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';

const Page: React.FC = () => {
    // const t = useTranslations('HomePage');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [user, setUser] = useState<any>(null); // State to hold the user



    // Fetch the authenticated user on component mount
    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                setUser(user); // User is logged in, set the state
            } else {
                return redirect('/sign-in'); // Return null while waiting for the redirect
            }
            setIsLoading(false); // Stop loading after checking user
        };

        fetchUser();
    }, []); // Only run once when the component mounts


    if (isLoading) {
        return <div className='w-full h-[500px] flex items-center justify-center'>Loading...</div>; // Display loading state while checking
    }

    if (!user) {
        return redirect('/sign-in'); // Return null while waiting for the redirect
    }


    const submitForm = async (formData: any) => {
        console.log("whaaaaa")
        // Flatten the formData before inserting into Supabase
        const flattenedData = {
            from: formData.routing.from,
            to: formData.routing.to,
            date: formData.routing.date,
            temperature: formData.commodities.temperature,
            dangerous: formData.commodities.dangerous,
            oversized: formData.commodities.oversized,
            length: formData.commodities.length,
            width: formData.commodities.width,
            height: formData.commodities.height,
            weight: formData.commodities.weight,
            file: formData.commodities.file,
            additional_information: formData.commodities.additional_information,
            inland_container: formData.vad.inland_container,
            user_id: user.id
        };

        console.log(flattenedData)

        const { data, error } = await supabase
            .from('InternationalInlandServices')  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
            console.error("Error submitting form:", error);
        } else {
            console.log("Form submitted successfully:", data);
        }
    };


    const tabData = [
        {
            id: "international",
            title: "International Inland Services",
            content:
                <>
                    <InternationalInlandServicesForm onSubmit={submitForm} />
                </>
        },
        {
            id: "container",
            title: "Inland Container Transportation",
            content: "Form details for Inland Container Transportation"
        },
        {
            id: "local",
            title: "Local Inland Services",
            content: "Form details for Local Inland Services"
        }
    ]


    return (
        <div className='w-full'>
            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;