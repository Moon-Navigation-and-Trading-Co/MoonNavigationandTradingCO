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
import CommoditiesCard from './commodities-card';
import CompanyDetailsCard from './company-details-card';

// Define your Zod schema (as before)
const formSchema = z.object({
    routing: z.object({
        from: z.string().min(1, { message: "From field is required" }),
        to: z.string().min(1, { message: "To field is required" }),
        date: z.string().min(1, { message: "Date field is required" }).refine(value => {
            return !isNaN(Date.parse(value)); // Ensure valid date
        }, { message: "Invalid date format" })
    }),
    commodities: z.object({
        temperature: z.boolean().optional(),
        dangerous: z.boolean().optional(),
        oversized: z.boolean().optional(),
        length: z.number().min(1, { message: "Length field is required" }),
        width: z.number().min(1, { message: "Width field is required" }),
        height: z.number().min(1, { message: "Height field is required" }),
        weight: z.number().min(1, { message: "Weight field is required" }),
        file: z.string().optional().refine(value => {
            return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
        }, { message: "Invalid file format" }),
        additional_information: z.string().optional(),
    }),
    vad: z.object({
        inland_container: z.boolean().optional(),
    }),
    company_details: z.object({
        company_name: z.string().min(1, { message: "Company Name field is required" }),
        contact_person_name: z.string().min(1, { message: "Contact Person Name field is required" }),
        title: z.string().min(1, { message: "Title field is required" }),
        country_of_origin: z.string().min(1, { message: "Country of Origin field is required" }),
        company_email: z.string().email({ message: "Invalid email format" }),
        phone_number: z.string().min(1, { message: "Phone Number field is required" }),
    })
    // Add more sections as needed
});

// 1. Define a type-safe form handler using z.infer
const InternationalInlandServicesForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: {
                from: '',
                to: '',
                date: ''
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
                <RoutingCard control={form.control} />

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
