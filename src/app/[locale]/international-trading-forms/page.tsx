"use client";

import { generate_quotation_number } from "@/utils/quotation/generator";
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import InternationalTradingForm from '@/components/international-trading-form';
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
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
    }, [supabase.auth]); // Include supabase.auth in dependency array


    if (isLoading) {
        return <div className='w-full h-[500px] flex items-center justify-center'>
            <Spinner />
        </div>;
    }

    const submitForm = async (formData: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        flattenedData = {
            user_id: user?.id || null,
            from: formData.routing.from,
            to: formData.routing.to,
            incoterm: formData.routing.incoterm,
            shipping_method: formData.transportation.method,
            shipping_details: formData.transportation.details,

            type: formData.commodities.type,
            quantity: formData.commodities.quantity,

            length: formData.commodities.length,
            width: formData.commodities.width,
            height: formData.commodities.height,
            weight: formData.commodities.weight,
            file: formData.commodities.file,
            additional_information: formData.commodities.additional_information,



            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            phone_number: formData.company_details.phone_number,
            quotation_number: await generate_quotation_number("international_trading")
        };



        console.log(flattenedData)

        // Send email notification FIRST
        try {
            await sendFormEmail(formData, 'international_trading');
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue with form submission even if email fails
        }

        const { data, error } = await supabase
            .from("international_trading")  // Your Supabase table
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
            router.push('/international-trading-forms')

        }
    };


    const tabData = [
        {
            id: "international-trading",
            title: "International Trading Services",
            description: "Complete international trading and logistics services",
            content: <InternationalTradingForm onSubmit={submitForm} />
        }
    ]

    return (
        <div className='flex flex-col w-full'>
            <FormTabs tabData={tabData} />
            <FAQSearch category="international-trading" />
        </div>
    );
};

export default Page;