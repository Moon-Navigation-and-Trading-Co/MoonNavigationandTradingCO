"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs';
import ProjectCargoServicesForm from '@/components/project-cargo-services-form';
import SignCrewMembersForm from '@/components/sign-crew-members-form';
import TransitSparePartsForm from '@/components/transit-spare-parts-form';
import RequestForPdaForm from '@/components/request-for-pda-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';


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
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>; // Display loading state while checking
    }





    const submitForm = async (formData: any, formType: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;
        if (formType === "special_services") {

            flattenedData = {
                user_id: user?.id || null,
                port_name: formData.port.name,
                vessel_name: formData.vessel.name,
                vessel_imo: formData.vessel.imo,
                at_anchor: formData.vessel.anchor,
                at_berth: formData.vessel.berth,
                special_request: formData.vessel.request,

                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number
            };
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
            router.push('/special-services-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: "Special Services",
            content:
                <>
                    <TransitSparePartsForm onSubmit={(formData: any) => submitForm(formData, "special_services")} />
                </>
        },
    ]


    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-raleway font-medium'>{t('special-services')}</h1>
                <p className=''>{t('special-services')}</p>
            </div>
            <FormTabs tabData={tabData} />
        </div>
    );
};

export default Page;