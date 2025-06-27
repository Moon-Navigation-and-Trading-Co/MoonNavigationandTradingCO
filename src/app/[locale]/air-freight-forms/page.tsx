"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import AirFreightForm from '@/components/air-freight-services';
import Spinner from '@/components/spinner';
import { Description } from '@radix-ui/react-toast';

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
        console.log("AAAA")

        flattenedData = {
            user_id: user.id,

            routing: formData.routing,

            ready_to_load: formData.ready_to_load,

            transportation_method: formData.transportation.transportation_method,

            commodities: formData.commodities,

            import_service: formData.recommended.import,
            export_service: formData.recommended.export,

            value_added_service: formData.value_added_service.service,

            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            additional_email: formData.company_details.additional_email,
            phone_number: formData.company_details.phone_number,
            additional_phone_number: formData.company_details.additional_phone_number
        };



        console.log(flattenedData)

        const { data, error } = await supabase
            .from("air_freight_services")  // Your Supabase table
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
            router.push('/air-freight-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "Air Freight Service",
            content:
                <>
                    <AirFreightForm onSubmit={submitForm} />
                </>
        }
    ]


    return (
        <div className='flex flex-col w-full'>

            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>{t('air')}</h1>
                <p className=''>{t('air-p')}</p>
            </div>

            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;