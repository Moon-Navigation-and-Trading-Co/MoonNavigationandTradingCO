"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslations } from 'next-intl';
import DatesCard from './dates-card-variant-3';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import CompanyDetailsCard from './company-details-card';

// 1. Define a type-safe form handler using z.infer
const BuyContainerForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')
    const [is_submitting, set_is_submitting] = useState(false);
    const [is_submitting, set_is_submitting] = useState(false);    // Standard container types and sizes (14 most commonly used)
    const containerTypes = [
        "20' Dry Container",
        "40' Dry Container", 
        "40' High Cube Dry Container",
        "20' Reefer Container",
        "40' Reefer Container",
        "40' High Cube Reefer Container",
        "20' Open Top Container",
        "40' Open Top Container",
        "40' High Cube Open Top Container",
        "20' Flat Rack Container",
        "40' Flat Rack Container",
        "20' Tank Container",
        "40' Tank Container",
        "40' Platform Container"
    ];

    // Define your Zod schema (as before)
    const formSchema = z.object({
        container: z.object({
            type: z.string().min(1, { message: t("Type") }),
            number: z.number().min(1, { message: t("Required") }),
            condition: z.enum(["new", "used"]),
        }),
        date: z.string().min(1, { message: t("Date") }).refine(value => {
            return !isNaN(Date.parse(value)); // Ensure valid date
        }, { message: t("InvalidDate") }),
        pick_up_location: z.string().min(1, { message: t("Required") }),
        budget: z.number().optional(),
        additional_information: z.string().optional(),
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
            container: {
                type: '',
                number: 0,
                condition: 'new'
            },
            date: '',
            pick_up_location: '',
            budget: 0,
            additional_information: '',
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
    const handleSubmit = async (values: any) => {
    const [is_submitting, set_is_submitting] = useState(false);    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                
                {/* Container Details Section */}
                <div className="">
                    <h1 className='text-xl font-raleway font-medium'>Container Details</h1>
                    <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                        {/* Container Type and Number on same line */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormItem>
                                <FormLabel>Container Type and Size</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name={`container.type`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Select onValueChange={field.onChange} value={field.value || ""}>
                                                    <SelectTrigger className="w-full max-w-[300px] border-2 rounded-xl">
                                                        <SelectValue placeholder="Select container type" />
                                                    </SelectTrigger>
                                                    <SelectContent className="max-h-[300px]">
                                                        {containerTypes.map((type) => (
                                                            <SelectItem key={type} value={type}>
                                                                {type}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            <FormItem>
                                <FormLabel>Number of Containers</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="container.number"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    type="number"
                                                    className="w-full max-w-[300px] border-2 rounded-xl"
                                                    placeholder="No. of Containers"
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Container Condition */}
                        <FormItem className="space-y-3">
                            <FormLabel className='text-base font-medium'>Container Condition</FormLabel>
                            <Controller
                                control={form.control}
                                name="container.condition"
                                defaultValue="new"
                                render={({ field, fieldState: { error } }) => (
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value || ""}
                                        className="flex flex-col space-y-1"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="new" />
                                            <FormLabel className="font-normal">New</FormLabel>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="used" />
                                            <FormLabel className="font-normal">Used</FormLabel>
                                        </div>
                                    </RadioGroup>
                                )}
                            />
                            <FormMessage />
                        </FormItem>
                    </div>
                </div>

                {/* Dates and Location Details on same line */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dates Section */}
                    <div className="">
                        <h1 className='text-xl font-raleway font-medium'>Dates</h1>
                        <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                            <FormItem>
                                <FormLabel>Pick-up Date</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="date"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    type="date"
                                                    className="w-full max-w-[300px] border-2 rounded-xl"
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="">
                        <h1 className='text-xl font-raleway font-medium'>Location Details</h1>
                        <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                            <FormItem>
                                <FormLabel>Pick-up Location</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name={`pick_up_location`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="w-full max-w-[300px] border-2 rounded-xl"
                                                    placeholder="City, Country/Region"
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>
                    </div>
                </div>

                {/* Budget & Additional Information */}
                <FormItem className='pb-4'>
                    <FormControl>
                        <div>
                            <h1 className='text-xl font-raleway font-medium mb-4'>Budget & Additional Information</h1>
                            <div className='flex gap-5 p-4 items-center'>
                                <FormItem>
                                    <FormLabel>Share your budget in USD for purchasing the container, which can help determine the most suitable options. (optional)</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="budget"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        type="number"
                                                        className="w-full max-w-[300px] border-2 rounded-xl"
                                                        placeholder="Budget in USD"
                                                        {...field}
                                                        value={field.value || ''}
                                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
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

                {/* Additional Information */}
                <FormItem className='pb-4'>
                    <FormControl>
                        <div>
                            <h1 className='text-xl font-raleway font-medium mb-4'>Additional Information</h1>
                            <div className='flex gap-5 p-4 items-center'>
                                <FormItem>
                                    <FormLabel>Additional requirements or specifications</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="additional_information"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Textarea
                                                        className="w-full max-w-[1200px] border-2 rounded-xl"
                                                        placeholder="Please provide any additional information about your container requirements..."
                                                        rows={6}
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
                <CompanyDetailsCard control={form.control} />

    const [is_submitting, set_is_submitting] = useState(false);                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>            </form>
        </Form>
    );
};

export default BuyContainerForm;
