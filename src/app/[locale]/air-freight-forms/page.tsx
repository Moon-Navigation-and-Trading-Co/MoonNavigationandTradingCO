"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import AirFreightForm from '@/components/air-freight-services';

const Page: React.FC = () => {
    // const t = useTranslations('HomePage');
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
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        flattenedData = {
            user_id: user.id,

            from: formData.routing.from,
            to: formData.routing.to,

            service_mode: formData.service.service_mode,
            service_from: formData.service.from,
            service_to: formData.service.to,

            transportation_method: formData.transportation.transportation_method,

            temperature: formData.commodities.temperature,
            dangerous: formData.commodities.dangerous,
            length: formData.commodities.length,
            width: formData.commodities.width,
            height: formData.commodities.height,
            weight: formData.commodities.weight,
            file: formData.commodities.file,
            additional_information: formData.commodities.additional_information,

            import: formData.recommended.import,
            export: formData.recommended.export,

            inland_container: formData.vad.inland_container,

            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            phone: formData.company_details.phone_number
        };



        console.log(flattenedData)

        const { data, error } = await supabase
            .from("air_freight_services")  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
            console.log(flattenedData)
            console.log(error)
            toast({
                title: "Error",
                description: "Something went wrong",
                variant: "destructive"
            })
        } else {
            //green toast
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
        <div className='w-full'>
            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;