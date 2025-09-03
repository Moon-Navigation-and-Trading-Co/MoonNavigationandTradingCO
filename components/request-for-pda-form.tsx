"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import PortCard from './port-card';
import CommoditiesCard from './commodities-card-variant-3';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import PDAdetails from './pda-details-card';
import { userInfo } from 'os';
import { Separator } from '@radix-ui/react-dropdown-menu';


// 1. Define a type-safe form handler using z.infer
const RequestForPdaForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        port: z.object({
            name: z.string().min(1, { message: t("Required") }),
        }),
                    vessel: z.object({
                name: z.string().min(1, { message: t("Required") }),
                imo: z.coerce.number().min(1, { message: t("Required") }),
                type: z.string().min(1, { message: t("Required") }),
                flag: z.string().min(1, { message: t("Required") }),
                ship_gross_tonnage: z.string().min(1, { message: t("Required") }),
                ship_net_tonnage: z.string().min(1, { message: t("Required") }),
                deadweight: z.string().min(1, { message: t("Required") }),
                draft: z.string().min(1, { message: t("Required") }),
                length: z.coerce.number().min(1, { message: t("Required") }),
            call_for_commercial: z.boolean().optional().default(false),
            call_for_maintenance: z.boolean().optional().default(false),
            call_for_other: z.boolean().optional().default(false),
            other_purpose_details: z.string().optional(),
                            total_discharged_cargo: z.coerce.number().min(1, { message: t("Required") }),
                discharged_cargo_type: z.string().optional(),
                discharged_dangerous_cargo: z.boolean().optional().default(false),
                total_days_needed_for_discharging: z.coerce.number().min(1, { message: t("Required") }),
                total_loaded_cargo: z.coerce.number().min(1, { message: t("Required") }),
                loaded_cargo_type: z.string().optional(),
                loaded_dangerous_cargo: z.boolean().optional().default(false),
                total_days_needed_for_loading: z.coerce.number().min(1, { message: t("Required") }),
                eta_expected_date: z.string().optional(),
                total_expected_berthing_days: z.coerce.number().min(1, { message: t("Required") }),
                total_expected_anchor_days: z.coerce.number().min(1, { message: t("Required") }),
        }),
        services: z.object({
            bunkering: z.object({
                mgo: z.boolean().default(false),
                mgo_details: z.string().optional(),
                vlsfo: z.boolean().default(false),
                vlsfo_details: z.string().optional(),
                hfo: z.boolean().default(false),
                hfo_details: z.string().optional(),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
            chandlery: z.object({
                fresh_dry_provisions: z.boolean().default(false),
                fresh_dry_provisions_details: z.string().optional(),
                spare_parts_tools: z.boolean().default(false),
                spare_parts_tools_details: z.string().optional(),
                deck_engine_stores: z.boolean().default(false),
                deck_engine_stores_details: z.string().optional(),
                details: z.string().optional(),
            }),
            crew: z.object({
                crew_change_assistance: z.boolean().default(false),
                crew_change_assistance_details: z.string().optional(),
                transport_accommodation: z.boolean().default(false),
                transport_accommodation_details: z.string().optional(),
                medical_assistance: z.boolean().default(false),
                medical_assistance_details: z.string().optional(),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
            cargo: z.object({
                stevedoring: z.boolean().default(false),
                stevedoring_details: z.string().optional(),
                cargo_surveys: z.boolean().default(false),
                cargo_surveys_details: z.string().optional(),
                lashing_securing: z.boolean().default(false),
                lashing_securing_details: z.string().optional(),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
            other: z.object({
                waste_disposal: z.boolean().default(false),
                waste_disposal_details: z.string().optional(),
                fresh_water: z.boolean().default(false),
                fresh_water_details: z.string().optional(),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
        }).refine((data) => {
            const bunkeringSelected = data.bunkering.mgo || data.bunkering.vlsfo || data.bunkering.hfo || data.bunkering.other;
            const chandlerySelected = data.chandlery.fresh_dry_provisions || data.chandlery.spare_parts_tools || data.chandlery.deck_engine_stores;
            const crewSelected = data.crew.crew_change_assistance || data.crew.transport_accommodation || data.crew.medical_assistance || data.crew.other;
            const cargoSelected = data.cargo.stevedoring || data.cargo.cargo_surveys || data.cargo.lashing_securing || data.cargo.other;
            const otherSelected = data.other.waste_disposal || data.other.fresh_water || data.other.other;
            
            return bunkeringSelected || chandlerySelected || crewSelected || cargoSelected || otherSelected;
        }, {
            message: "Please select at least one service from the available options",
            path: ["services"]
        }),
        additional_information: z.string().optional(),
        supporting_files: z.string().optional(),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("Required") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            additional_email: z.string().email({ message: t("CompanyEmail") }).optional(),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
            additional_phone_number: z.string().min(1, { message: t("PhoneNumber") }).optional(),
        })
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            port: {
                name: '',
            },
            vessel: {
                name: '',
                imo: 0,
                type: '',
                flag: '',
                ship_gross_tonnage: '',
                ship_net_tonnage: '',
                deadweight: '',
                draft: '',
                length: 0,
                call_for_commercial: false,
                call_for_maintenance: false,
                call_for_other: false,
                other_purpose_details: '',
                total_discharged_cargo: 0,
                discharged_cargo_type: '',
                discharged_dangerous_cargo: false,
                total_days_needed_for_discharging: 0,
                total_loaded_cargo: 0,
                loaded_cargo_type: '',
                loaded_dangerous_cargo: false,
                total_days_needed_for_loading: 0,
                eta_expected_date: '',
                total_expected_berthing_days: 0,
                total_expected_anchor_days: 0,
            },
            services: {
                bunkering: {
                    mgo: false,
                    mgo_details: '',
                    vlsfo: false,
                    vlsfo_details: '',
                    hfo: false,
                    hfo_details: '',
                    other: false,
                    other_details: '',
                    details: '',
                },
                chandlery: {
                    fresh_dry_provisions: false,
                    fresh_dry_provisions_details: '',
                    spare_parts_tools: false,
                    spare_parts_tools_details: '',
                    deck_engine_stores: false,
                    deck_engine_stores_details: '',
                    details: '',
                },
                crew: {
                    crew_change_assistance: false,
                    crew_change_assistance_details: '',
                    transport_accommodation: false,
                    transport_accommodation_details: '',
                    medical_assistance: false,
                    medical_assistance_details: '',
                    other: false,
                    other_details: '',
                    details: '',
                },
                cargo: {
                    stevedoring: false,
                    stevedoring_details: '',
                    cargo_surveys: false,
                    cargo_surveys_details: '',
                    lashing_securing: false,
                    lashing_securing_details: '',
                    other: false,
                    other_details: '',
                    details: '',
                },
                other: {
                    waste_disposal: false,
                    waste_disposal_details: '',
                    fresh_water: false,
                    fresh_water_details: '',
                    other: false,
                    other_details: '',
                    details: '',
                },
            },
            additional_information: '',
            supporting_files: '',
            company_details: {
                company_name: '',
                contact_person_name: '',
                title: '',
                country_of_origin: '',
                company_email: '',
                additional_email: '',
                phone_number: '',
                additional_phone_number: '',
            }
        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        // eslint-disable-next-line no-console
        console.log("=== FORM SUBMISSION START ===");
        // eslint-disable-next-line no-console
        console.log("Form values:", values);
        // eslint-disable-next-line no-console
        console.log("Form is valid:", form.formState.isValid);
        // eslint-disable-next-line no-console
        console.log("Form errors:", form.formState.errors);
        try {
            // eslint-disable-next-line no-console
            console.log("Calling onSubmit function...");
            onSubmit(values);
            // eslint-disable-next-line no-console
            console.log("onSubmit completed successfully");
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error("Error in onSubmit:", error);
        }
        // eslint-disable-next-line no-console
        console.log("=== FORM SUBMISSION END ===");
    };


    const handleError = (errors: unknown) => {
        // Log validation errors for debugging
        if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.log("Validation errors:", errors);
            // eslint-disable-next-line no-console
            console.log("Form values:", form.getValues());
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">

                {/* Details */}
                <PDAdetails control={form.control} formState={form.formState} />

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
                
                {/* Debug button */}
                <Button 
                    type="button" 
                    onClick={() => {
                        // eslint-disable-next-line no-console
                        console.log("Debug: Form values:", form.getValues());
                        // eslint-disable-next-line no-console
                        console.log("Debug: Form errors:", form.formState.errors);
                        // eslint-disable-next-line no-console
                        console.log("Debug: Form is valid:", form.formState.isValid);
                    }}
                    className="mt-4 w-[200px] ml-4"
                    variant="outline"
                >
                    Debug Form
                </Button>
            </form>
        </Form>
    );
};

export default RequestForPdaForm;
