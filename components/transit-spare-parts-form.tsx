"use client"
import React from 'react';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import PortCard from './port-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import { CircleMinus } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';



// 1. Define a type-safe form handler using z.infer
const TransitSparePartsForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        port: z.object({
            name: z.string().min(1, { message: t("CompanyName") }),
        }),
        vessel: z.object({
            name: z.string().min(1, { message: t("CompanyName") }),
            imo: z.number().min(0, { message: t("CompanyName") }),
            anchor: z.boolean().optional().default(false),
            berth: z.boolean().optional().default(false),
            request: z.string().min(1, { message: t("CompanyName") }),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            additional_email: z.string().email({ message: t("CompanyEmail") }).optional(),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
            additional_phone_number: z.string().min(1, { message: t("PhoneNumber") }).optional(),
        })
        // Add more sections as needed
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {

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

                {/* Details */}
                <PortCard control={form.control} />

                {/* From Field */}
                <FormItem>
                    <FormLabel id="vessel.request">{tt('vessel-request')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="vessel.request"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea id="vessel.request" className="max-w-[300px]  border-2 rounded-xl" placeholder="Please Declare the Requested Services" {...field} />
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

export default TransitSparePartsForm;
