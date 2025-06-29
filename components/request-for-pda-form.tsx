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
            imo: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            eta: z.string().min(1, { message: t("Required") }),
            type: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            ship_gross_tonnage: z.string().min(1, { message: t("Required") }),
            ship_net_tonnage: z.string().min(1, { message: t("Required") }),
            deadweight: z.string().min(1, { message: t("Required") }),
            draft: z.string().min(1, { message: t("Required") }),
            length: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            call_for_commercial: z.boolean().optional().default(false),
            call_for_maintenance: z.boolean().optional().default(false),
            call_for_other: z.boolean().optional().default(false),
            other_purpose_details: z.string().optional(),
            total_discharged_cargo: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            discharged_cargo_type: z.string().optional(),
            discharged_dangerous_cargo: z.boolean().optional().default(false),
            total_loaded_cargo: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            loaded_cargo_type: z.string().optional(),
            loaded_dangerous_cargo: z.boolean().optional().default(false),
            total_expected_berthing_days: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            total_expected_anchor_days: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
        }),
        services: z.object({
            bunkering: z.object({
                mgo: z.boolean().default(false),
                vlsfo: z.boolean().default(false),
                hfo: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
            chandlery: z.object({
                fresh_dry_provisions: z.boolean().default(false),
                spare_parts_tools: z.boolean().default(false),
                deck_engine_stores: z.boolean().default(false),
                details: z.string().optional(),
            }),
            crew: z.object({
                crew_change_assistance: z.boolean().default(false),
                transport_accommodation: z.boolean().default(false),
                medical_assistance: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
            cargo: z.object({
                stevedoring: z.boolean().default(false),
                cargo_surveys: z.boolean().default(false),
                lashing_securing: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
            other: z.object({
                waste_disposal: z.boolean().default(false),
                fresh_water: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                details: z.string().optional(),
            }),
        }),
        additional_information: z.string().optional(),
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
                eta: '',
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
                total_loaded_cargo: 0,
                loaded_cargo_type: '',
                loaded_dangerous_cargo: false,
                total_expected_berthing_days: 0,
                total_expected_anchor_days: 0,
            },
            services: {
                bunkering: {
                    mgo: false,
                    vlsfo: false,
                    hfo: false,
                    other: false,
                    other_details: '',
                    details: '',
                },
                chandlery: {
                    fresh_dry_provisions: false,
                    spare_parts_tools: false,
                    deck_engine_stores: false,
                    details: '',
                },
                crew: {
                    crew_change_assistance: false,
                    transport_accommodation: false,
                    medical_assistance: false,
                    other: false,
                    other_details: '',
                    details: '',
                },
                cargo: {
                    stevedoring: false,
                    cargo_surveys: false,
                    lashing_securing: false,
                    other: false,
                    other_details: '',
                    details: '',
                },
                other: {
                    waste_disposal: false,
                    fresh_water: false,
                    other: false,
                    other_details: '',
                    details: '',
                },
            },
            additional_information: '',
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
        console.log("Form submitted successfully:", values);
        onSubmit(values);
    };


    const handleError = (errors: any) => {
        console.error("Validation errors:", errors);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">

                {/* Details */}
                <PDAdetails control={form.control} />

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default RequestForPdaForm;
