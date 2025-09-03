"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import RoutingCard from './routing-card-variant-4';
import CommoditiesCard from './commodities-card-variant-10';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import TransportationMethodCard from '@/components/transportation-method-card-variant-1';



// 1. Define a type-safe form handler using z.infer
const InternationalTradingForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.object({
            origin_type: z.enum(["egypt", "other"]),
            origin_other: z.string().optional(),
            destination: z.string().min(1, { message: t("Required") }),
            incoterm: z.string().min(1, { message: t("Incoterm") }),
        }),
        transportation: z.object({
            method: z.enum(["sea", "land", "air"], {
                required_error: "You need to select a transportation method.",
            }),
        }),
        commodities: z.object({
            type: z.string().min(1, { message: t("Type") }),
            quantity: z.number().min(1, { message: t("Quantity") }),
            supporting_files: z.array(z.instanceof(File)).optional(),
            additional_commodities: z.array(z.object({
                type: z.string().optional(),
                quantity: z.number().optional(),
                supporting_files: z.array(z.instanceof(File)).optional(),
            })).optional(),
            additional_requirements: z.string().optional(),
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

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {


        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-">
                {/* Routing Section */}
                <RoutingCard control={form.control} />

                {/* Shipping Method Section */}
                <TransportationMethodCard control={form.control} />

                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />
                {/* <div className='mt-12 w-[200px]'> */}
                <Button type="submit" className="mt-8 w-[200px]">
                    Submit
                </Button>
                {/* </div> */}

            </form>
        </Form>
    );
};

export default InternationalTradingForm;
