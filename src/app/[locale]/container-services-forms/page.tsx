"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import OversizedContainerCard from '@/components/oversized-container-form';
import LessThanContainerForm from '@/components/less-than-container-form';
import StandardContainerCard from '@/components/standard-container-form';
import HSSCard from '@/components/hss-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';


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
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        if (formType === "less_than_container_load") {

            flattenedData = {
                user_id: user.id,
                from: formData.routing.from,
                to: formData.routing.to,
                pick_up: formData.routing.pickup,
                delivery: formData.routing.delivery,
                location_information: formData.routing.location_information,

                type_of_commodity: formData.commodities.type_of_commodity,
                validity: formData.commodities.validity,
                gross_volume: formData.commodities.gross_volume,
                cargo_weight: formData.commodities.gross_weight,
                package_type: formData.commodities.package_type,
                additional_information: formData.commodities.additional_information,

                import_service: formData.recommended.import,
                export_service: formData.recommended.export,

                vad: formData.vad.vad,

                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        } else if (formType === "standard_container") {

            flattenedData = {
                user_id: user.id,

                from: formData.routing.from,
                to: formData.routing.to,

                service_mode: formData.service.service_mode,
                service_from: formData.service.from,
                service_to: formData.service.to,

                temperature: formData.commodities.temperature,
                dangerous: formData.commodities.dangerous,
                file: formData.commodities.file,
                additional_information: formData.commodities.additional_information,

                container_type: formData.container.container_type,
                container_number: formData.container.container_number,
                container_weight: formData.container.container_weight,

                import_return_or_triangulation: formData.container.triangulation,
                own_container: formData.container.shippers,


                import_service: formData.recommended.import,
                export_service: formData.recommended.export,

                value_added_services: formData.vad.inland_container,

                service_contract: formData.service.service_contract || null,

                effective_date: formData.dates.effective_date,
                expiry_date: formData.dates.expiry_date,

                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        } else if (formType === "oversized_container") {

            flattenedData = {
                user_id: user.id,

                from: formData.routing.from,
                to: formData.routing.to,

                service_mode: formData.service.service_mode,
                service_from: formData.service.from,
                service_to: formData.service.to,

                dangerous: formData.commodities.dangerous,
                length: formData.commodities.length,
                width: formData.commodities.width,
                height: formData.commodities.height,
                weight: formData.commodities.weight,
                file: formData.commodities.file,
                additional_information: formData.commodities.additional_information,

                container_type: formData.container.container_type,
                container_number: formData.container.container_number,
                container_weight: formData.container.container_weight,

                import_return_or_triangulation: formData.container.triangulation,
                own_container: formData.container.shippers,

                value_added_services: formData.vad.inland_container,

                service_contract: formData.service.service_contract || null,

                effective_date: formData.dates.effective_date,
                expiry_date: formData.dates.expiry_date,

                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        } else if (formType === "handling_stevedoring_storage") {

            flattenedData = {
                user_id: user.id,

                location: formData.location.location,
                detailed: formData.location.detailed,

                dangerous: formData.commodities.dangerous,
                temperature: formData.commodities.temperature,
                oversized: formData.commodities.oversized,

                length: formData.commodities.length,
                width: formData.commodities.width,
                height: formData.commodities.height,
                weight: formData.commodities.weight,
                file: formData.commodities.file,
                additional_information: formData.commodities.additional_information,

                handling: formData.hss.handling,
                loading: formData.hss.loading,
                discharging: formData.hss.discharging,
                lashing: formData.hss.lashing,
                unlashing: formData.hss.unlashing,
                safekeeping_before: formData.hss.before,
                safekeeping_after: formData.hss.after,
                temporary_storage: formData.hss.temporary,

                container_type: formData.container.container_type,
                container_number: formData.container.container_number,
                container_weight: formData.container.container_weight,

                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                phone_number: formData.company_details.phone_number
            };
        }

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
            router.push('/container-services-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "Less than Container Load",
            content:
                <>
                    <LessThanContainerForm onSubmit={(formData: any) => submitForm(formData, "less_than_container_load")} />
                </>
        },
        {
            id: "standard",
            title: "Standard Container",
            content:
                <>
                    <StandardContainerCard onSubmit={(formData: any) => submitForm(formData, "standard_container")} />
                </>
        },
        {
            id: "oversized",
            title: "Oversized Container",
            content:
                <>
                    <OversizedContainerCard onSubmit={(formData: any) => submitForm(formData, "oversized_container")} />
                </>
        },
        {
            id: "hss",
            title: "Container H.S.S.",
            content:
                <>
                    <HSSCard onSubmit={(formData: any) => submitForm(formData, "handling_stevedoring_storage")} />
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