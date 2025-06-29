"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import RoutingCard from './routing-card-variant-3';
import RecommendedServicesCard from './recommended-card';
import CommoditiesCard from './commodities-card-variant-4';
import CompanyDetailsCard from './company-details-card';
import PickupDeliveryCard from './pickup-delivery-card';
import { useTranslations } from 'next-intl';
import DatesCard from './dates-card';
import { userInfo } from 'os';


// 1. Define a type-safe form handler using z.infer
const LessThanContainerForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from: z.string().min(1, { message: t("From") }),
            to: z.string().min(1, { message: t("To") }),
            pick_up: z.boolean().optional(),
            delivery: z.boolean().optional(),
            location_information: z.string().optional()
        })),
        commodities: z.object({
            type_of_commodity: z.string().min(1, { message: t("Type") }),
            gross_volume: z.number().min(1, { message: t("gross_volume") }),
            gross_weight: z.number().min(1, { message: t("gross_weight") }),
            package_type: z.string().min(1, { message: t("package_type") }),
            validity: z.string().min(1),
            additional_information: z.string().optional(),
        }),
        recommended: z.object({
            import: z.boolean().optional(),
            export: z.boolean().optional(),
        }),
        vad: z.object({
            inland_container: z.string().optional(),
        }),
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
            routing: [{
                from: '',
                to: '',
                pick_up: false,
                delivery: false,
                location_information: ''
            }],
            commodities: {
                dangerous: false,
                file: '',
                additional_information: ''
            },
            vad: {
                inland_container: ''
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
                phone_number: ''
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


                {/* Commodities Section */}
                <CommoditiesCard control={form.control} />

                {/* Recommended Services */}
                <RecommendedServicesCard control={form.control} />

                {/* Value Added Service */}
                <FormItem>
                    <FormLabel>{t('value-added-service')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`vad.inland_container`}
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

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default LessThanContainerForm;
