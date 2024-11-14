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
import CommoditiesCard from './commodities-card-variant-8';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import DatesCard from './dates-card-variant-2.tsx';



// 1. Define a type-safe form handler using z.infer
const InternationalInlandServicesForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from: z.string().min(1, { message: t("From") }),
            to: z.string().min(1, { message: t("To") }),
        })),
        date: z.string().min(1, { message: t("Date") }).refine(value => {
            return !isNaN(Date.parse(value)); // Ensure valid date
        }, { message: t("InvalidDate") }),
        commodities: z.array(z.object({
            type: z.string().min(1, { message: t("Type") }),
            temperature: z.boolean().optional(),
            dangerous: z.boolean().optional(),
            oversized: z.boolean().optional(),
            details: z.string().optional(),
            length: z.number().min(1, { message: t("Length") }),
            width: z.number().min(1, { message: t("Width") }),
            height: z.number().min(1, { message: t("Height") }),
            weight: z.number().min(1, { message: t("Weight") }),
            weight_unit: z.string().optional(),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
        })),
        additional_information: z.string().optional(),
        vad: z.object({
            inland_container: z.boolean().optional(),
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
                to: '',
            }],
            date: '',
            commodities: [{
                temperature: false,
                dangerous: false,
                oversized: false,
                details: "",
                length: 0,
                width: 0,
                height: 0,
                weight: 0,
                weight_unit: 'kg',
                file: '',
            }],
            additional_information: '',
            vad: {
                inland_container: false
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

                {/* Dates Section */}
                <DatesCard control={form.control} />

                {/* Commodities Section */}
                <CommoditiesCard dangerous_bool={false} control={form.control} />

                {/* Value Added Service */}
                <FormItem className='pb-4'>
                    <FormControl>
                        <div>
                            <h1 className='text-xl font-semibold mb-4'>Value Added Service</h1>
                            <div className='flex gap-5 p-4 items-center'>
                                <Controller
                                    control={form.control}
                                    name="vad.inland_container"
                                    render={({ field }) => (
                                        <>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="vad.inland_container"
                                            />
                                            <label htmlFor='vad.inland_container'>
                                                Inland Container Transportation
                                            </label>
                                        </>

                                    )}
                                />
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

export default InternationalInlandServicesForm;
