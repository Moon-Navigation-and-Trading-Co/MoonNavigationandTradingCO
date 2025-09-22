"use client"
import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import FormTabs from '@/components/form-tabs-variant-1';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import AirFreightForm from '@/components/air-freight-services';
import InvestorForm from '@/components/investor-form';
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FAQSearch from '@/components/faq';

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
        </div>;
    }

    const submitForm = async (formData: any) => {
        // Map form data to database schema - using the actual form field names
        const flattenedData = {
            user_id: user?.id || null, // Make user_id optional - null if user is not logged in

            // Personal/Company Information
            full_name: formData.full_name,
            company_name: formData.company_name,
            position_title: formData.position_title,
            nationality: formData.nationality,
            email: formData.email,
            additional_email: formData.additional_email,
            phone_number: formData.phone_number,
            additional_phone_number: formData.additional_phone_number,
            city_country_residence: formData.city_country_residence,

            // Investment Interest
            investor_type: formData.investor_type,
            investor_type_other: formData.investor_type_other,
            investment_range: formData.investment_range,
            average_check_size: formData.average_check_size,
            preferred_investment_type: formData.preferred_investment_type,
            preferred_investment_type_other: formData.preferred_investment_type_other,

            // Areas of Interest
            areas_of_interest: formData.areas_of_interest,
            areas_of_interest_other: formData.areas_of_interest_other,

            // Interest Rate
            interest_rate_type: formData.interest_rate_type,
            fixed_interest_rate: formData.fixed_interest_rate,

            // Background & Intent
            background_linkedin: formData.background_linkedin,
            investment_interest_reason: formData.investment_interest_reason,
            require_nda: formData.require_nda,
            additional_notes: formData.additional_notes,
        };

        console.log(flattenedData)

        // Send email notification FIRST
        try {
            await sendFormEmail(formData, 'investor_form');
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue with form submission even if email fails
        }

        // Then try to insert into database
        const { data, error } = await supabase
            .from("investor_form")  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Database insert failed, but email was sent",
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
            id: "investor",
            title: "Investor Interest Submission",
            description: "Submit your investment inquiry and connect with our investment opportunities team.",
            content:
                <>
                    <InvestorForm onSubmit={submitForm} />
                </>
        }
    ]


    return (
        <div className='flex flex-col w-full'>
            <FormTabs tabData={tabData} />
            <FAQSearch category="investment-opportunities" />
        </div>
    );
};

export default Page;