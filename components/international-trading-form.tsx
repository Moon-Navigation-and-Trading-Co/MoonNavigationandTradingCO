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
            from: z.string().min(1, { message: t("From") }),
            to: z.string().min(1, { message: t("To") }),
            incoterm: z.string().min(1, { message: t("Incoterm") }),
        }),
        transportation: z.object({
            method: z.enum(["sea", "land", "air"], {
                required_error: "You need to select a transportation method.",
            }),
            details: z.string().min(1, { message: t("Required") }),
        }),
        commodities: z.object({
            type: z.string().min(1, { message: t("Type") }),
            quantity: z.number().min(1, { message: t("Quantity") }),
            length: z.number().min(1, { message: t("Length") }),
            width: z.number().min(1, { message: t("Width") }),
            height: z.number().min(1, { message: t("Height") }),
            weight: z.number().min(1, { message: t("Weight") }),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
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

                <FormItem className='mx-4 pb-8 '>
                    <FormLabel htmlFor="routing.incoterm" >{tt('incoterm')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="routing.incoterm"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="max-w-[300px] border-2 rounded-xl">
                                            <SelectValue placeholder="Select Incoterm" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="EXW">EXW – Ex Works</SelectItem>
                                            <SelectItem value="FOB">FOB – Free on Board</SelectItem>
                                            <SelectItem value="CFR">CFR – Cost and Freight</SelectItem>
                                            <SelectItem value="CIF">CIF – Cost, Insurance and Freight</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />


                <TransportationMethodCard control={form.control} />

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
