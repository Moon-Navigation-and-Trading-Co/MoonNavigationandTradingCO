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
            total_discharged_cargo: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            total_loaded_cargo: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            total_expected_berthing_days: z.number({ message: t("Number") }).min(0, { message: t("Number") }),
            total_expected_anchor_days: z.number({ message: t("Number") }).min(0, { message: t("Number") }),

        }),
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
            routing: {
                from: '',
                to: '',
            },
            dates: {
                effective_date: '',
                expiry_date: ''
            },
            commodities: {
                dangerous: false,
                length: null,
                width: null,
                height: null,
                weight: null,
                file: '',
                additional_information: ''
            },
            vad: {
                inland_container: false
            },
            service_contract: {
                service_contract: ''
            },
            company_details: {
                company_name: '',
                contact_person_name: '',
                title: '',
                country_of_origin: '',
                company_email: '',
                phone_number: ''
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
