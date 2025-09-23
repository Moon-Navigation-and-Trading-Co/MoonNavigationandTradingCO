"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import InternationalInlandServicesForm from '@/components/international-inland-services-form';
import LocalInlandServicesForm from '@/components/local-inland-services-form';
import ContainerInlandServicesForm from '@/components/container-inland-services-form';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FAQSearch from '@/components/faq';
import { generate_quotation_number } from '@/utils/quotation/generator';

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
        return <div className='w-full h-[500px] flex items-center justify-center'>
            <Spinner />
        </div>; // Display loading state while checking
    }



    const submitForm = async (formData: any, formType: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        console.log(formType)

        if (formType === "international_inland_services" || formType === "local_inland_services") {
            console.log("BBB")

            flattenedData = {
                user_id: user?.id || null,
                routing: formData.routing,
                date: formData.date,
                commodities: formData.commodities,
                inland_container: formData.vad?.inland_container || '',
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number,
                quotation_number: await generate_quotation_number(formType)
            };
        } else if (formType === "container_inland_services") {

            flattenedData = {
                user_id: user?.id || null,
                routing: formData.routing,
                commodities: formData.commodities,
                inland_container: formData.vad?.inland_container || '',
                service_contract: formData.service_contract.container,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number,
                quotation_number: await generate_quotation_number(formType)
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
            router.push('/inland-services-forms')

        }
    };


    const tabData = [
        {
            id: "international",
            title: t('int'),
            description: t('international-p'),
            content:
                <>
                    <InternationalInlandServicesForm onSubmit={(formData: any) => submitForm(formData, "international_inland_services")} />
                </>
        },
        {
            id: "local",
            title: t('local'),
            description: t('local-p'),
            content: <>
                <LocalInlandServicesForm onSubmit={(formData: any) => submitForm(formData, "local_inland_services")} />
            </>
        },
        {
            id: "container",
            title: t('cont'),
            description: t('container-p'),
            content: <>
                <ContainerInlandServicesForm onSubmit={(formData: any) => submitForm(formData, "container_inland_services")} />
            </>
        },
    ]


    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-raleway font-medium'>{t('inland')}</h1>
                <p className=''>{t('inland-p')}</p>
            </div>
            <FormTabs tabData={tabData} />
            <FAQSearch category="inland-freight" />
        </div>
    );
};

export default Page;