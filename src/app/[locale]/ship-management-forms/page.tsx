"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import ShipManagementForm from '@/components/ship-management-form';
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
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>;
    }

    const submitForm = async (formData: any) => {
        // Flatten the formData before inserting into Supabase
        const flattenedData = {
            user_id: user?.id || null,
            vessel_name: formData.vessel.name,
            vessel_imo: formData.vessel.imo,
            vessel_flag: formData.vessel.flag,
            vessel_type: formData.vessel.type,
            vessel_grt: formData.vessel.grt,
            vessel_nrt: formData.vessel.nrt,
            vessel_loa: formData.vessel.loa,
            vessel_dwt: formData.vessel.dwt,
            current_port: formData.vessel.current_port,
            owner_company: formData.vessel.owner_company,
            services: formData.services,
            vessel_condition: formData.vessel_condition,
            contract_duration: formData.contract_duration,
            additional_information: formData.additional_information,
            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            additional_email: formData.company_details.additional_email,
            phone_number: formData.company_details.phone_number,
            additional_phone_number: formData.company_details.additional_phone_number,
        };

        console.log(flattenedData)

        // Send email notification FIRST
        try {
            await sendFormEmail(formData, 'ship_management');
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue with form submission even if email fails
        }

        const { data, error } = await supabase
            .from("ship_management")  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

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
            router.push("/ship-management-forms");
        }
    };

    const tabData = [
        {
            id: "ship-management",
            title: "Ship Management Service",
            description: "Complete ship management and operation services",
            content: <ShipManagementForm onSubmit={submitForm} />
        }
    ]

    return (
        <div className='flex flex-col w-full'>
            <FormTabs tabData={tabData} />
            <FAQSearch category="ship-management" />
        </div>
    );
};

export default Page;