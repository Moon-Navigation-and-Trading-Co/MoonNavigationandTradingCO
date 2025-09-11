"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import BuyVesselForm from '@/components/buy-vessel-form';
import RentVesselForm from '@/components/rent-vessel-form';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FAQSearch from '@/components/faq';

import { logError } from "@/utils/logError";
const Page: React.FC = () => {
    const t = useTranslations('forms');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const { toast } = useToast()
    const router = useRouter()

    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        };

        fetchUser();
    }, [supabase.auth]);

    if (isLoading) {
        return (
            <div className='w-full h-[500px] flex items-center justify-center'>
                <Spinner />
            </div>
        );
    }

    const submitForm = async (formData: any, formType: any) => {
        let flattenedData;

        if (formType === "buy_vessel") {
            flattenedData = {
                user_id: user?.id || null,
                container_type: formData.container.type,
                container_number: formData.container.number,
                container_condition: formData.container.condition,
                pick_up_date: formData.date,
                pick_up_location: formData.pick_up_location,
                detailed_location: formData.detailed_location,
                required_specifications: formData.required_specification,
                budget: formData.budget,
                additional_information: formData.additional_services,
                company_name: formData.company_details.company_name,
                contact_person_name: formData.company_details.contact_person_name,
                title: formData.company_details.title,
                country_of_origin: formData.company_details.country_of_origin,
                company_email: formData.company_details.company_email,
                additional_email: formData.company_details.additional_email,
                phone_number: formData.company_details.phone_number,
                additional_phone_number: formData.company_details.additional_phone_number
            };

        } else if (formType === "rent_vessel") {
            flattenedData = {
                user_id: user?.id || null,
                container_type: formData.container.type,
                container_number: formData.container.number,
                container_condition: formData.container.condition,
                rental_duration: formData.rental_duration,
                duration_unit: formData.duration_unit,
                pick_up_date: formData.date,
                pick_up_location: formData.pick_up_location,
                drop_off_location: formData.drop_off_location,
                detailed_location: formData.detailed_location,
                trading_area: formData.trading_area,
                required_specifications: formData.required_specification,
                budget: formData.budget,
                additional_information: formData.additional_information,
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

        try {
            await sendFormEmail(formData, formType);
        } catch (emailError) {
            logError("Email sending failed:", emailError);
        }

        const { data, error } = await supabase
            .from(formType)
            .insert([flattenedData]);

        if (error) {
            console.error('Database error:', error);
            toast({
                title: "Error",
                description: `Database insert failed: ${error.message}`,
                variant: "destructive"
            })
        } else {
            toast({
                title: "Success",
                description: "Form Added Successfully",
            })
            router.push('/buy-rent-vessels-forms')
        }
    };

    const tabData = [
        {
            id: "international",
            title: "Vessel Purchases",
            description: "Purchase vessels for your shipping and maritime operations",
            content:
                <>
                    <BuyVesselForm onSubmit={(formData: any) => submitForm(formData, "buy_vessel")} />
                </>
        },
        {
            id: "sell",
            title: "Vessel Rentals",
            description: "Rent vessels for temporary or short-term maritime requirements",
            content: <>
                <RentVesselForm onSubmit={(formData: any) => submitForm(formData, "rent_vessel")} />
            </>
        },
    ]

    return (
        <div className='flex flex-col w-full'>
            <FormTabs tabData={tabData} />
            <FAQSearch category="vessel-purchases-rentals" />
        </div>
    );
};

export default Page;
