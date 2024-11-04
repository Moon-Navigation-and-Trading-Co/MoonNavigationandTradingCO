"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import ProjectCargoServicesForm from '@/components/project-cargo-services-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import RollOnOffForm from '@/components/roll-on-off-form';

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
        </div>; // Display loading state while checking
    }

    if (!user) {
        return redirect('/sign-in'); // Return null while waiting for the redirect
    }




    const submitForm = async (formData: any, formType: any) => {
        console.log("hi")
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        if (formType === "project_cargo_services") {

            flattenedData = {
                user_id: user.id,
                routing: formData.routing,
                effective_date: formData.dates.effective_date,
                expiry_date: formData.dates.expiry_date,
                commodity_type: formData.commodities.type,
                dangerous: formData.commodities.dangerous,
                commoditiy_details: formData.commodities.details,
                length: formData.commodities.length,
                width: formData.commodities.width,
                height: formData.commodities.height,
                weight: formData.commodities.weight,
                file: formData.commodities.file,
                additional_information: formData.commodities.additional_information,
                value_added_service: formData.value_added_service.request,
                service_contract: formData.service_contract.service_contract,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        } else if (formType === "roll_on_off" || formType === "heavy_lift" || formType === "dangerous_cargo_services") {
            flattenedData = {
                user_id: user.id,
                routing: formData.routing,
                effective_date: formData.dates.effective_date,
                expiry_date: formData.dates.expiry_date,
                commodities: formData.commodities,
                additional_information: formData.additional_information,
                value_added_service: formData.value_added_service.request,
                service_contract: formData.service_contract.service_contract,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        }


        console.log(flattenedData)

        const { data, error } = await supabase
            .from(formType)  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
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
            console.log(data)
            router.push('/ocean-freight-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "Project Cargo Services",
            content:
                <>
                    <ProjectCargoServicesForm onSubmit={(formData: any) => submitForm(formData, "project_cargo_services")} />
                </>
        },
        {
            id: "roll",
            title: "Roll On/Off",
            content:
                <>
                    <RollOnOffForm onSubmit={(formData: any) => submitForm(formData, "roll_on_off")} />
                </>
        },
        {
            id: "heavy",
            title: "Heavy Lift",
            content:
                <>
                    <RollOnOffForm onSubmit={(formData: any) => submitForm(formData, "heavy_lift")} />
                </>
        },
        {
            id: "dangerous",
            title: "Dangerous Cargo Services",
            content:
                <>
                    <RollOnOffForm dangerous_bool={true} onSubmit={(formData: any) => submitForm(formData, "dangerous_cargo_services")} />
                </>
        },


    ]


    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>{t('ocean')}</h1>
                <p className=''>{t('ocean-p')}</p>
            </div>
            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;