"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { Textarea } from './ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompanyDetailsCard from './company-details-card-variant-1';
import { useTranslations } from 'next-intl';


// 1. Define a type-safe form handler using z.infer
const ShipMaintenanceForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        request: z.string().min(1, { message: t("CompanyName") }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
        })
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            request: '',
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

                {/* Special Request Field */}


                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <FormItem className='px-4'>
                    <FormLabel htmlFor="request" id="request" >{tt('vessel-request')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="request"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea id="request" className="max-w-[500px] border-2 rounded-xl" placeholder="Please Declare the Requested Services" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>


                <div className='mt-24'>
                    <h1 className='font-semibold text-xl mb-6'>Important Information</h1>
                    <div className='flex flex-col gap-3 text-sm text-muted-foreground'>
                        <p>• For quote requests with long-term validity, please contact us.</p>
                        <p>• Please do not enter personal or financial information, such as credit card details, or debit card details anywhere in your request.</p>
                        <p>• Please note that when you submit your quote request, an automated confirmation e-mail will be sent to you containing the details you entered in this form.</p>
                    </div>
                </div>

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default ShipMaintenanceForm;
