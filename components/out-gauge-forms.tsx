"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import RoutingCard from './routing-card-variant-1';
import CommoditiesCard from './commodities-card-variant-9';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import ServiceModeCard from './service-mode-card';
import DatesCard from './dates-card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

// 1. Define a type-safe form handler using z.infer
const OutGaugeCard: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
<<<<<<< HEAD
    const [isSubmitting, setIsSubmitting] = useState(false);
=======
    const [is_submitting, set_is_submitting] = useState(false);
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from: z.string().min(1, { message: t("From") }),
            services_mode_from: z.enum(["cy", "sd"], {
                required_error: t("Required"),
            }).default("cy"),
            to: z.string().min(1, { message: t("To") }),
            services_mode_to: z.enum(["cy", "sd"], {
                required_error: t("Required"),
            }).default("cy"),

        })),
        shipment_type: z.enum(["in-gauge", "break-bulk"]).default("in-gauge"),
        commodities: z.array(z.object({
            type: z.string().min(1, { message: t("Type") }),
            dangerous: z.boolean().optional(),
            details: z.string().optional(),
            length: z.number().min(1, { message: t("Length") }),
            width: z.number().min(1, { message: t("Width") }),
            height: z.number().min(1, { message: t("Height") }),
            weight: z.number().min(1, { message: t("Weight") }),
            weight_unit: z.enum(["kg", "ton"], {
                required_error: t("Required"),
            }).default("kg"),
            container_type: z.string().min(1, { message: t("ContainerType") }),
            container_number: z.number().min(1, { message: t("ContainerNo") }),
            container_weight: z.number().min(1, { message: t("ContainerWeight") }),
            triangulation: z.boolean().optional(),
            shippers: z.boolean().optional(),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
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
            additional_email: z.string().email().optional().or(z.literal('')),
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
                to: '',
                services_mode_from: 'cy',
                services_mode_to: 'cy'
            }],
            shipment_type: 'in-gauge',
            commodities: [{
                type: '',
                oversized: false,
                details: '',
                length: 0,
                width: 0,
                height: 0,
                weight: 0,
                weight_unit: 'kg',
                shippers: false,
                triangulation: false,
                file: '',
                additional_information: ''
            }],
            container: {
                container_type: '',
                container_number: 0,
                container_weight: 0
            },
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
                company_phone_number: '',
                phone_number: '',
                additional_phone_number: ''
            }
        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = async (values: any) => {
<<<<<<< HEAD
        setIsSubmitting(true);
=======
        set_is_submitting(true);
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7
        try {
            console.log(values);
            await onSubmit(values);
        } finally {
<<<<<<< HEAD
            setIsSubmitting(false);
=======
            set_is_submitting(false);
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7
        }
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
                            name="service_contract"
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
                            name="vad.inland_container"
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

<<<<<<< HEAD
                <Button type="submit" className={`mt-4 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
                    {isSubmitting ? (
=======
                <Button type="submit" className={`mt-4 w-[200px] ${is_submitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={is_submitting}>
                    {is_submitting ? (
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7
                        <div className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>            </form>
        </Form>
    );
};

export default OutGaugeCard;
