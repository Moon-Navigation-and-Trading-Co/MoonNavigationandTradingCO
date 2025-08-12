"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import BuyContainerForm from '@/components/buy-container-form';
import SellContainerForm from '@/components/sell-container-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
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
    }, [router, supabase]); // Only run once when the component mounts


    if (isLoading) {
        return <div className='w-full h-[500px] flex items-center justify-center'>
            <Spinner />
        </div>; // Display loading state while checking
    }



    const submitForm = async (formData: any, formType: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        console.log(formType)

        if (formType === "buy_container") {
            flattenedData = {
                user_id: user?.id || null,
                container_type: formData.container.type,
                container_number: formData.container.number,
                container_condition: formData.container.condition,
                pick_up_date: formData.date,
                pick_up_location: formData.pick_up_location,
                budget: formData.budget,
                additional_information: formData.additional_information,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number
            };

        } else if (formType === "rent_container") {

            flattenedData = {
                user_id: user?.id || null,
                container_type: formData.container.type,
                container_number: formData.container.number,
                container_condition: formData.container.condition,
                pick_up_date: formData.date,
                pick_up_location: formData.pick_up_location,
                drop_off_location: formData.drop_off_location,
                rental_duration: formData.rental_duration,
                budget: formData.budget,
                additional_information: formData.additional_information,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number
            };
        } else {
            return console.log("form type is missing");
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
            router.push('/buy-sell-container-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "Container Purchases",
            description: "Purchase containers for your shipping and storage needs",
            content:
                <>
                    <BuyContainerForm onSubmit={(formData: any) => submitForm(formData, "buy_container")} />
                </>
        },
        {
            id: "sell",
            title: "Container Rentals",
            description: "Rent containers for temporary or short-term requirements",
            content: <>
                <SellContainerForm onSubmit={(formData: any) => submitForm(formData, "rent_container")} />
            </>
        },
    ]


    return (
        <div className='flex flex-col w-full'>
            <FormTabs tabData={tabData} />
            <FAQSearch category="container-purchases-rentals" />
        </div>
    );
};

export default Page;