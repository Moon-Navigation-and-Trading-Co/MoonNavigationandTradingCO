"use client"
import React, { useEffect, useState } from 'react';
import SuezCanalTransitForm from '@/components/suez-canal-transit-form';
import { useTranslations } from 'next-intl';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';

const SuezCanalFormPage = () => {
    const t = useTranslations('Inland-errors');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
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
    }, [router, supabase]);

    if (isLoading) {
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>;
    }

    const handleSubmit = async (formData: any) => {
        // Flatten the formData before inserting into Supabase
        let flattenedData;

        flattenedData = {
            user_id: user?.id || null,
            date: formData.date,
            
            // Vessel details
            vessel_name: formData.vessel.name,
            imo_number: formData.vessel.imo,
            flag: formData.vessel.flag,
            vessel_type: formData.vessel.type,
            grt: formData.vessel.grt,
            scgt: formData.vessel.scgt,
            nrt: formData.vessel.nrt,
            scnt: formData.vessel.scnt,
            loa: formData.vessel.loa,
            beam: formData.vessel.beam,
            draft: formData.vessel.draft,
            dwt: formData.vessel.dwt,
            vessel_status: formData.vessel.status,
            floating_units: formData.vessel.floating_units,
            passed_canal_before: formData.vessel.passed_canal_before,
            last_passage_date: formData.vessel.last_passage_date,

            // Cargo details
            commodity: formData.cargo.commodity,
            cargo_quantity: formData.cargo.quantity,
            total_cargo: formData.cargo.total_cargo,
            gas_free_ammonia: formData.cargo.gas_free_ammonia,
            military_navy_cargo: formData.cargo.military_navy_cargo,
            cargo_additional_details: formData.cargo.additional_details,
            cargo_manifest: formData.cargo.manifest,

            // Unit carriage details
            large_units: formData.unit_carriage.large_units,
            unit_size: formData.unit_carriage.unit_size,
            floating_units_carried: formData.unit_carriage.floating_units_carried,
            container_tiers: formData.unit_carriage.container_tiers,

            // Transit information
            eta: formData.transit.eta,
            direction: formData.transit.direction,
            round_trip: formData.transit.round_trip,
            origin_destination: formData.transit.origin_destination,
            gulf_caribbean: formData.transit.gulf_caribbean,
            destination_port: formData.transit.destination_port,

            // Additional services
            tug_assistance: formData.additional_services.tug_assistance,
            crew_change: formData.additional_services.crew_change,
            bunkering: formData.additional_services.bunkering,
            freshwater: formData.additional_services.freshwater,
            spare_parts: formData.additional_services.spare_parts,
            other_services: formData.additional_services.other,
            other_services_details: formData.additional_services.other_details,

            // Additional notes and files
            additional_notes: formData.additional_notes,
            supporting_files: formData.supporting_files,

            // Company details
            company_name: formData.company_details.company_name,
            contact_person_name: formData.company_details.contact_person_name,
            title: formData.company_details.title,
            country_of_origin: formData.company_details.country_of_origin,
            company_email: formData.company_details.company_email,
            phone_number: formData.company_details.phone_number
        };

        console.log(flattenedData)

        // Send email notification FIRST
        try {
            await sendFormEmail(formData, 'suez_canal_transit');
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Continue with form submission even if email fails
        }

        const { data, error } = await supabase
            .from("suez_canal_transit")  // Your Supabase table
            .insert([flattenedData]);  // Insert the flattened data

        if (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Database insert failed, but email was sent",
                variant: "destructive"
            })
        } else {
            toast({
                title: "Success",
                description: "Form Submitted Successfully",
            })
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Suez Canal Transit Quotation Request
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Request a comprehensive quote for your vessel's transit through the Suez Canal. 
                        Our experienced team will provide you with detailed pricing and transit arrangements.
                    </p>
                </div>

                {/* Form Section */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <SuezCanalTransitForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default SuezCanalFormPage;
