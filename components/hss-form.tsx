"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import LocationCard from './location-card';
import CommoditiesCard from './commodities-card-variant-6';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import ServiceModeCard from './service-mode-card';
import DatesCard from './dates-card';

// 1. Define a type-safe form handler using z.infer
const HSSCard: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        location: z.object({
            location: z.string().min(1, { message: t("Location") }),
            detailed: z.string().min(1, { message: t("Detailed") }),
        }),
        commodities: z.object({
            dangerous: z.boolean().optional(),
            length: z.number().min(1, { message: t("Length") }),
            width: z.number().min(1, { message: t("Width") }),
            height: z.number().min(1, { message: t("Height") }),
            weight: z.number().min(1, { message: t("Weight") }),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
        }),
        container: z.object({
            container_type: z.string().min(1, { message: t("ContainerType") }),
            container_number: z.number().min(1, { message: t("ContainerNo") }),
            container_weight: z.number().min(1, { message: t("ContainerWeight") }),
            triangulation: z.boolean().optional(),
            shippers: z.boolean().optional(),
        }),
        //hss
        hss: z.object({
            handling: z.boolean().optional(),
            loading: z.boolean().optional(),
            discharging: z.boolean().optional(),
            lashing: z.boolean().optional(),
            unlashing: z.boolean().optional(),
            before: z.boolean().optional(),
            after: z.boolean().optional(),
            temporary: z.boolean().optional(),
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
            service: {
                service_mode: 'cy',
                from: '',
                to: ''
            },
            transportation: {
                transportation_method: 'standard'
            },
            recommended: {
                import: false,
                export: false,
            },
            commodities: {
                temperature: false,
                dangerous: false,
                oversized: false,
                length: 0,
                width: 0,
                height: 0,
                weight: 0,
                file: '',
                additional_information: ''
            },
            container: {
                container_type: '',
                container_number: 0,
                container_weight: 0
            },
            vad: {
                inland_container: false
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
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <LocationCard control={form.control} />

                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default HSSCard;
