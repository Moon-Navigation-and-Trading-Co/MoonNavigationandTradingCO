"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import RoutingCard from './routing-card';
import CommoditiesCard from './commodities-card-variant-1';
import ContainerCard from './container-details-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
useTranslations



// 1. Define a type-safe form handler using z.infer
const ContainerInlandServicesForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.object({
            from: z.string().min(1, { message: t("From") }),
            to: z.string().min(1, { message: t("To") }),
            date: z.string().min(1, { message: t("Date") }).refine(value => {
                return !isNaN(Date.parse(value)); // Ensure valid date
            }, { message: t("InvalidDate") })
        }),
        commodities: z.object({
            temperature: z.boolean().optional(),
            dangerous: z.boolean().optional(),
            oversized: z.boolean().optional(),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
        }),
        vad: z.object({
            inland_container: z.boolean().optional(),
        }),
        service_contract: z.object({
            container: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
        }),
        container:
            z.object({
                type: z.string().min(1, { message: t("ContainerType") }),
                number: z.number().min(1, { message: t("ContainerNo") }),
                weight: z.number().min(1, { message: t("ContainerWeight") }),

            })
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: {
                from: '',
                to: '',
                date: ''
            },
            container: {
                type: '',

            },
            commodities: {
                temperature: false,
                dangerous: false,
                oversized: false,
                file: '',
                additional_information: ''
            },
            vad: {
                inland_container: false
            },
            service_contract: {
                container: ''
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
                <RoutingCard control={form.control} />

                {/* Container Section */}
                <ContainerCard control={form.control} />

                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />

                {/* Value Added Service */}
                <FormItem>
                    <FormControl>
                        <div>
                            <h1 className='text-2xl font-semibold mb-4'>Value Added Service</h1>
                            <div className='flex gap-5 p-4 items-center'>
                                <Controller
                                    control={form.control}
                                    name="vad.inland_container"
                                    render={({ field }) => (
                                        <>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="inland_container"
                                            />
                                            <label>
                                                Inland Container Services

                                            </label>
                                        </>

                                    )}
                                />
                            </div>
                        </div>
                    </FormControl>
                </FormItem>

                <h1 className='text-2xl font-semibold'>{tt('serviceContract')}</h1>
                <FormItem className='pb-4'>
                    <FormLabel>{tt('serviceContract')} <span className='text-gray-500 text-sm'>({tt('optional')})</span></FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="service_contract.container"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input type="number" className="max-w-[300px]  border-2 rounded-xl" placeholder="Contract No." {...field} />
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

export default ContainerInlandServicesForm;
