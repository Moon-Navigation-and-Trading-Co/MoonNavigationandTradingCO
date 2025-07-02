"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import RoutingCard from './routing-card-variant-2';
import CommoditiesCard from './commodities-card-variant-7';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import DatesCard from './dates-card';
import { userInfo } from 'os';
import { Textarea } from './ui/textarea';

interface RollOnOffFormProps {
    onSubmit: (data: any) => void;
    dangerous_bool?: boolean | null;
    breakbulk_bool?: boolean | null; // Optional prop that can be boolean or null
}

// 1. Define a type-safe form handler using z.infer
const RollOnOffForm: React.FC<RollOnOffFormProps> = ({ onSubmit, dangerous_bool = false, breakbulk_bool = false }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from: z.string().min(1, { message: t("From") }),
            to: z.string().min(1, { message: t("To") }),
        })),
        commodities: z.array(z.object({
            type: z.string().min(1, { message: t("Required") }),
            dangerous: z.boolean().optional(),
            details: z.string().optional(),
            length: z.number().min(1, { message: t("Length") }),
            width: z.number().min(1, { message: t("Width") }),
            height: z.number().min(1, { message: t("Height") }),
            weight: z.number().min(1, { message: t("Weight") }),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
        })),
        dates: z.object({
            effective_date: z.string().min(1, { message: t("Date") }).refine(value => {
                return !isNaN(Date.parse(value)); // Ensure valid date
            }, { message: t("InvalidDate") }),
            expiry_date: z.string().min(1, { message: t("Date") }).refine(value => {
                return !isNaN(Date.parse(value)); // Ensure valid date
            }, { message: t("InvalidDate") })
        }),
        service_contract: z.object({
            service_contract: z.string().optional()
        }),
        value_added_service: z.object({
            request: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            additional_email: z.string().email({ message: t("AdditionalEmail") }).optional(),
            phone_number: z.string().min(9, { message: t("PhoneNumber") }),
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
            }],
            dates: {
                effective_date: '',
                expiry_date: ''
            },
            commodities: [{
                type: '',
                dangerous: dangerous_bool,
                details: '',
                length: null,
                width: null,
                height: null,
                weight: null,
                file: '',
                additional_information: ''
            }],
            value_added_service: {
                request: ""
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
                additional_email: '',
                phone_number: '',
                additional_phone_number: ''
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
                {/* Routing Section */}
                <RoutingCard control={form.control} />

                <CommoditiesCard control={form.control} dangerous_bool={dangerous_bool || false} />

                {/* Dates */}
                <DatesCard control={form.control} />

                {/* Value Added Service */}
                <FormItem className='pb-4'>
                    <FormControl>
                        <div>
                            <h1 className='text-xl font-semibold mb-4'>{t("Service-contract")}</h1>
                            <div className='flex gap-5 p-4 items-center'>
                                <FormItem>
                                    <FormLabel>{t('Service-contract')} <span className='text-muted-foreground text-xs'>({t("Optional")})</span></FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name={"service_contract.service_contract"}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="w-[300px] border-2 rounded-xl"
                                                        placeholder="Service Contract No."
                                                        {...field}
                                                        value={typeof field.value === 'string' ? field.value : ''}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>
                        </div>
                    </FormControl>
                </FormItem>

                {/* Service Contract (optional) */}
                <FormItem className='pb-4'>
                    <FormControl>
                        <div>
                            <h1 className='text-xl font-semibold mb-4'>Value Added Service</h1>
                            <div className='flex gap-5 p-4 items-center'>
                                <FormItem>
                                    <FormLabel>{t('request')}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name={"value_added_service.request"}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Textarea
                                                        className="w-[300px] border-2 rounded-xl"
                                                        placeholder="Insert any additional services needed"
                                                        {...field}
                                                        value={typeof field.value === 'string' ? field.value : ''}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>
                        </div>
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

export default RollOnOffForm;
