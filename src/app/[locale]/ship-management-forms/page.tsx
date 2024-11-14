"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import ShipMaintenanceForm from '@/components/ship-maintenance-form';
import Spinner from '@/components/spinner';

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
            } else {
                router.push('/sign-in');
                return;
            }
            setIsLoading(false); // Stop loading after checking user
        };

        fetchUser();
    }, [router, supabase]); // Only run once when the component mounts

    if (isLoading) {
        return <div className='w-full h-[500px] flex items-center justify-center'>
            <Spinner />
        </div>;
    }

    const submitForm = async (formData: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        flattenedData = {
            user_id: user.id,

            request: formData.request,

            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            phone_number: formData.company_details.phone_number
        };

        console.log(flattenedData)

        const { data, error } = await supabase
            .from("ship_maintenance")  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Something went wrong",
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
            id: "international",
            title: "Ship Management Service",
            content:
                <>
                    <ShipMaintenanceForm onSubmit={submitForm} />
                </>
        }
    ]

    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>{t('ship-management')}</h1>
                <p className=''>{t('ship-management-p')}</p>
            </div>
            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;