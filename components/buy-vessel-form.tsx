"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import CompanyDetailsCard from './company-details-card';

const BuyVesselForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')
    const [is_submitting, set_is_submitting] = useState(false);
    
    // Updated schema with proper number transformations
    const formSchema = z.object({
        container: z.object({
            type: z.string().min(1, { message: t("Type") }),
            number: z.union([z.string(), z.number()]).transform((val) => {
                if (typeof val === 'string') {
                    const parsed = parseInt(val);
                    return isNaN(parsed) ? 0 : parsed;
                }
                return val;
            }).pipe(z.number().min(1, { message: t("Required") })),
            condition: z.enum(["new", "used"]),
        }),
        date: z.string().min(1, { message: t("Date") }).refine(value => {
            return !isNaN(Date.parse(value));
        }, { message: t("InvalidDate") }),
        pick_up_location: z.string().min(1, { message: t("Required") }),
        detailed_location: z.string().optional(),
        required_specification: z.string().optional(),
        budget: z.union([z.string(), z.number()]).transform((val) => {
            if (typeof val === 'string') {
                const parsed = parseFloat(val);
                return isNaN(parsed) ? 0 : parsed;
            }
            return val;
        }).pipe(z.number().optional()),
        additional_services: z.string().optional(),
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
            detailed_location: '',
            required_specification: '',
            budget: 0,
            additional_services: '',
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

    const handleSubmit = async (values: any) => {
        set_is_submitting(true);
        try {
            await onSubmit(values);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            set_is_submitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Vessel Details Section */}
                <div className="space-y-4">
                    <h2 className='text-lg mb-2 font-raleway font-medium'>{tt('vesselDetails')}</h2>
                    
                    {/* Vessel Type */}
                    <FormItem>
                        <FormLabel>{t('vesselTypeandSize')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="container.type"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="Type a vessel"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>

                    {/* Container/Vessel Number - ADDED MISSING FIELD */}
                    <FormItem>
                        <FormLabel>Number of Vessels</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="container.number"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            type="number"
                                            min="1"
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="Enter number of vessels"
                                            value={field.value || ''}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const numValue = value === '' ? 0 : parseInt(value) || 0;
                                                field.onChange(numValue);
                                            }}
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
                    <FormLabel className='text-lg'>{t('vesselCondition')}</FormLabel>
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
                                    <FormLabel className="font-normal">{t("new")}</FormLabel>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="used" />
                                    <FormLabel className="font-normal">{t("used-v")}</FormLabel>
                                </div>
                            </RadioGroup>
                        )}
                    />
                    <FormMessage />
                </FormItem>

                {/* Delivery Date, Pick up location, and Detailed Location */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormItem>
                        <FormLabel>Delivery Date</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="date"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            type="date"
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="dd/mm/yyyy"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Pick Up Location</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="pick_up_location"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="City, Country/Region"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Detailed Location (Optional)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="detailed_location"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="Address"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Required Specification */}
                <FormItem>
                    <FormLabel>{tt('required-specification')} <span className="text-sm text-gray-500">({tt('optional')})</span></FormLabel>
                    <p className='text-sm text-muted-foreground'>{tt('required-specification-p')}</p>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="required_specification"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="min-h-[150px] max-w-[800px] border-2 rounded-xl"
                                        placeholder="Add any additional information"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Budget - FIXED NUMERIC INPUT */}
                <FormItem>
                    <FormLabel>Budget (USD) <span className="text-sm text-gray-500">(optional)</span></FormLabel>
                    <p className='text-sm text-muted-foreground'>Share your budget in USD for purchasing the vessel, which can help determine the most suitable options.</p>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="budget"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        min="0"
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Budget in USD"
                                        value={field.value || ''}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            const numValue = value === '' ? 0 : parseFloat(value) || 0;
                                            field.onChange(numValue);
                                        }}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Additional Service or Amenities */}
                <FormItem>
                    <FormLabel>Additional Service or Amenities <span className="text-sm text-gray-500">(optional)</span></FormLabel>
                    <p className='text-sm text-muted-foreground'>If you require any additional services or amenities, such as crew management, insurance, specific equipment, or technical support be sure to mention them.</p>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_services"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="min-h-[150px] max-w-[800px] border-2 rounded-xl"
                                        placeholder="Enter any additional services or amenities required..."
                                        {...field}
                                        value={typeof field.value === 'string' ? field.value : ''}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                <CompanyDetailsCard control={form.control} />

                <Button type="submit" disabled={is_submitting} className="w-[200px]">
                    {is_submitting ? (
                        <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>
            </form>
        </Form>
    );
};

export default BuyVesselForm;
