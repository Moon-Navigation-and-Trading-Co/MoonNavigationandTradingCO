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
import CommoditiesCard from './commodities-card-variant-5';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import ServiceModeCard from './service-mode-card';
import DatesCard from './dates-card';

// 1. Define a type-safe form handler using z.infer
const StandardContainerCard: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from: z.string().min(1, { message: t("From") }),
            services_mode_from: z.string().default('cy'),
            to: z.string().min(1, { message: t("To") }),
            services_mode_to: z.string().default('cy'),
        })),
        commodities: z.array(z.object({
            type: z.string().min(1, { message: t("Type") }),
            oversized: z.boolean().optional(),
            details: z.string().optional(),
            temperature: z.boolean().optional(),
            dangerous: z.boolean().optional(),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
            container_type: z.string().min(1, { message: t("ContainerType") }),
            container_no: z.number().min(1, { message: t("ContainerNo") }),
            container_weight: z.number().min(1, { message: t("ContainerWeight") }),
            triangulation: z.boolean().optional(),
            shippers: z.boolean().optional(),
            import: z.boolean().optional(),
            export: z.boolean().optional()
        })),
        //dates
        dates: z.object({
            effective_date: z.string().min(1, { message: t("Date") }),
            expiry_date: z.string().min(1, { message: t("Date") }),
        }),
        service_contract: z.string().optional(),
        vad: z.object({
            inland_container: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            additional_email: z.string().email().optional(),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
            additional_phone_number: z.string().optional(),
        })
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: [{
                from: '',
                services_mode_from: 'cy',
                to: '',
                services_mode_to: 'cy'
            }],
            commodities: [{
                type: '',
                triangulation: false,
                shippers: false,
                import: false,
                export: false,
                container_type: '',
                container_number: '',
                container_weight: '',
                details: '',
                temperature: false,
                dangerous: false,
                oversized: false,
                length: '',
                width: '',
                height: '',
                weight: '',
                file: '',
                additional_information: ''
            }],
            dates: {
                effective_date: '',
                expiry_date: ''
            },
            service_contract: '',
            vad: {
                inland_container: ''
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
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard control={form.control} />

                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />

                {/* Dates */}
                <DatesCard control={form.control} />

                {/* Service Contract */}
                <FormItem>
                    <FormLabel>{t('service-contract')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`service_contract`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Insert additional services needed"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Value Added Service */}
                <FormItem>
                    <FormLabel>{t('value-added-service')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`vad.inland_container`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Insert additional services needed"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
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

export default StandardContainerCard;
