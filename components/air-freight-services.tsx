"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import RoutingCard from './routing-card-variant-1';
import TransportationMethodCard from './transportation-method-card';
import CommoditiesCard from './commodities-card-variant-2';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import DatesCard from './dates-card-variant-1.tsx';
// 1. Define a type-safe form handler using z.infer
const AirFreightForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from: z.string().min(1, { message: t("From") }),
            to: z.string().min(1, { message: t("To") }),
            services_mode_from: z.enum(["cy", "sd"], {
                required_error: "You need to select a type.",
            }),
            services_mode_to: z.enum(["cy", "sd"], {
                required_error: "You need to select a type.",
            }),
        })),
        ready_to_load: z.string().min(1, { message: t("Date") }),
        transportation: z.object({
            transportation_method: z.enum(["standard", "uld"], {
                required_error: "You need to select a transportation method.",
            }),
        }),
        commodities: z.array(z.object({
            container_type: z.string().min(1, { message: t("Required") }),
            temperature: z.boolean().optional(),
            dangerous: z.boolean().optional(),
            oversized: z.boolean().optional(),
            details: z.string().min(1, { message: t("Details") }),
            length: z.number({ message: t("Length") }).min(1, { message: t("Length") }),
            width: z.number({ message: t("Length") }).min(1, { message: t("Width") }),
            height: z.number({ message: t("Length") }).min(1, { message: t("Height") }),
            weight: z.number({ message: t("Length") }).min(1, { message: t("Weight") }),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
        })),
        additional_information: z.string().optional(),
        recommended: z.object({
            import: z.boolean().optional(),
            export: z.boolean().optional()
        }),
        value_added_service: z.object({
            service: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
            additional_email: z.string().email().optional().or(z.literal('')),
            additional_phone_number: z.string().optional(),
        })
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing:
                [{
                    from: '',
                    to: '',
                    services_mode_from: 'cy',
                    services_mode_to: 'cy'
                }]
            ,
            ready_to_load: '',
            transportation: {
                transportation_method: 'standard'
            },
            recommended: {
                import: false,
                export: false,
            },
            commodities:
                [{
                    container_type: '',
                    details: '',
                    temperature: false,
                    dangerous: false,
                    oversized: false,
                    length: 0,
                    width: 0,
                    height: 0,
                    weight: 0,
                    file: '',
                }]
            ,
            additional_information: '',
            value_added_service: {
                service: ''
            },
            company_details: {
                company_name: '',
                contact_person_name: '',
                title: '',
                country_of_origin: '',
                company_email: '',
                additional_email: '',
                phone_number: '',
                additional_phone_number: ''
            }
        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        console.log(values)
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard control={form.control} />

                {/* Ready to Load Section */}
                <DatesCard control={form.control} />

                {/* Transportation By */}
                <TransportationMethodCard control={form.control} />

                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />

                {/* Recommended Services */}
                <RecommendedServicesCard control={form.control} />

                {/* Value Added Service */}
                <FormItem className="px-4 py-4">
                    <FormLabel>{t('value-added-service')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="value_added_service.service"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px]  border-2 rounded-xl" placeholder="Type" {...field} value={String(field.value)} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>


                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default AirFreightForm;
