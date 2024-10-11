"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import InternationalInlandServicesForm from '@/components/international-inland-services-form';
import LocalInlandServicesForm from '@/components/local-inland-services-form';
import ContainerInlandServicesForm from '@/components/container-inland-services-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'

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
                router.push('/sign-in');
                return;
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


    const submitForm = async (formData: any, formType: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        console.log(formType)

        if (formType === "international_inland_services" || formType === "local_inland_services") {
            console.log("BBB")

            flattenedData = {
                user_id: user.id,
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
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone: formData.company_details.phone_number
            };
        } else if (formType === "container_inland_services") {

            console.log("AAA")

            flattenedData = {
                user_id: user.id,
                from: formData.routing.from,
                to: formData.routing.to,
                date: formData.routing.date,
                container_type: formData.container.type,
                number_of_containers: formData.container.number,
                containers_weights: formData.container.weight,
                temperature: formData.commodities.temperature,
                dangerous: formData.commodities.dangerous,
                oversized: formData.commodities.oversized,
                file: formData.commodities.file,
                additional_information: formData.commodities.additional_information,
                service_contract: formData.service_contract.container,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        } else {
            return console.log("form type is missing");
        }



        console.log(flattenedData)

        const { data, error } = await supabase
            .from(formType)  // Your Supabase table
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
            router.push('/inland-services-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "International Inland Services",
            content:
                <>
                    <InternationalInlandServicesForm onSubmit={(formData: any) => submitForm(formData, "international_inland_services")} />
                </>
        },
        {
            id: "local",
            title: "Local Inland Services",
            content: <>
                <LocalInlandServicesForm onSubmit={(formData: any) => submitForm(formData, "local_inland_services")} />
            </>
        },
        {
            id: "container",
            title: "Inland Container Transportation",
            content: <>
                <ContainerInlandServicesForm onSubmit={(formData: any) => submitForm(formData, "container_inland_services")} />
            </>
        },
    ]


    return (
        <div className='w-full'>
            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;