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


// 1. Define a type-safe form handler using z.infer
const RequestForPdaForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        port: z.object({
            name: z.string().min(1, { message: t("CompanyName") }),
        }),
        vessel: z.object({
            name: z.string().min(1, { message: t("CompanyName") }),
            imo: z.number().min(0, { message: t("CompanyName") }),
            eta: z.string().min(1, { message: t("CompanyName") }),
            type: z.string().min(1, { message: t("CompanyName") }),
            flag: z.string().min(1, { message: t("CompanyName") }),
            ship_gross_tonnage: z.string().min(1, { message: t("CompanyName") }),
            ship_net_tonnage: z.string().min(1, { message: t("CompanyName") }),
            deadweight: z.string().min(1, { message: t("CompanyName") }),
            draft: z.string().min(1, { message: t("CompanyName") }),
            length: z.number().min(0, { message: t("CompanyName") }),
            call_for_commercial: z.boolean().optional().default(false),
            call_for_maintenance: z.boolean().optional().default(false),
            total_discharged_cargo: z.number().min(0, { message: t("CompanyName") }),
            total_loaded_cargo: z.number().min(0, { message: t("CompanyName") }),
            total_expected_berthing_days: z.number().min(0, { message: t("CompanyName") }),
            total_expected_anchor_days: z.number().min(0, { message: t("CompanyName") }),

        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
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
