"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import AirFreightForm from '@/components/air-freight-services';
import InvestorForm from '@/components/investor-form';
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

            first_name: formData.firstname,
            last_name: formData.lastname,
            title: formData.title,
            organization_name: formData.organization,
            accredited: formData.accredited_investor,
            qualified: formData.qualified_investor,
            check_size: formData.check_size,
            average_check_size: formData.average_check_size,
            email: formData.email,
            additional_email: formData.additional_email,
            phone_number: formData.phone_number,
            additional_phone_number: formData.additional_phone_number
        };



        console.log(flattenedData)

        const { data, error } = await supabase
            .from("investor_form")  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Something went wrong",
                variant: "destructive"
            })
        } else {
            toast({
                title: "Success",
                description: "Form Added Successfully",
            })
            router.push('/investor-form')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "Investor Form",
            content:
                <>
                    <InvestorForm onSubmit={submitForm} />
                </>
        }
    ]


    return (
        <div className='flex flex-col w-full'>

            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>{t('inv-form')}</h1>
                <p className=''>{t('inv-form-p')}</p>
            </div>

            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;