"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompanyDetailsCard from './company-details-card-variant-1';
import { useTranslations } from 'next-intl';

import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';



// 1. Define a type-safe form handler using z.infer
const SellVesselForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        container: z.object({
            type: z.string().min(1, { message: t("Type") }),
        }),
        date: z.string().min(1, { message: t("Date") }).refine(value => {
            return !isNaN(Date.parse(value)); // Ensure valid date
        }, { message: t("InvalidDate") }),
        pick_up_location: z.string().min(1, { message: t("Required") }),
        drop_off_location: z.string().min(1, { message: t("Required") }),
        rental_duration: z.number().min(1, { message: t("Required") }),
        duration_unit: z.enum(["days", "weeks", "months"]),
        detailed_location: z.string().optional(),
        trading_area: z.string().optional(),
        required_specification: z.string().min(1, { message: t("Required") }),
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
                type: ''
            },
            date: '',
            pick_up_location: '',
            drop_off_location: '',
            detailed_location: '',
            trading_area: '',
            required_specification: '',
            rental_duration: 0,
            duration_unit: 'days',
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
    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                {/* <RoutingCard control={form.control} /> */}
                {/* Vessel Details Section */}
                <div>
                    <h2 className='text-lg mb-2 font-semibold'>{tt('vesselDetails')}</h2>
                    
                    {/* Vessel Type and Size */}
                    <FormItem>
                        <FormLabel>{t('vesselTypeandSize')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name={`container.type`}
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

                    {/* Rental Duration and Delivery Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <FormItem>
                            <FormLabel>Rental Duration</FormLabel>
                            <div className="flex gap-2 items-start">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="rental_duration"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    type="number"
                                                    className="w-[200px] border-2 rounded-xl"
                                                    placeholder="Duration"
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                                {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="duration_unit"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-[120px]">
                                                        <SelectValue placeholder="Unit" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="days">Days</SelectItem>
                                                        <SelectItem value="weeks">Weeks</SelectItem>
                                                        <SelectItem value="months">Months</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>

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
                                                className="w-[300px] border-2 rounded-xl"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    {/* Pick-up and Drop-off Locations Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Pick-up and Drop-off Locations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormItem>
                                <FormLabel>Pick up location</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="pick_up_location"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="w-[300px] border-2 rounded-xl"
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
                                <FormLabel>Drop-off Location</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="drop_off_location"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="w-[300px] border-2 rounded-xl"
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

                {/* Detailed Location */}
                <FormItem>
                    <FormLabel>Detailed Location (optional)</FormLabel>
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

                {/* Trading Area */}
                <FormItem>
                    <FormLabel>Trading Area:</FormLabel>
                    <p className='text-sm text-muted-foreground'>Please insert the trading area of the operation during rental period</p>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="trading_area"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="min-h-[100px] max-w-[600px] border-2 rounded-xl"
                                        placeholder="Enter trading area details..."
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Required Specification */}
                <FormItem>
                    <FormLabel>Required Specification <span className="text-sm text-gray-500">(optional)</span></FormLabel>
                    <p className='text-sm text-muted-foreground'>Share your required specifications for renting the vessel.</p>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="required_specification"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="min-h-[150px] max-w-[800px] border-2 rounded-xl"
                                        id="required_specification"
                                        placeholder="Add any additional information"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>


                <FormItem>
                    <FormLabel>Budget <span className="text-sm text-gray-500">(optional)</span></FormLabel>
                    <p className='text-sm text-muted-foreground'>Share your budget for renting the vessel, which can help determine the most suitable options.</p>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="budget"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        type="number"
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Budget"
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






                {/* Additional Service or Amenities */}
                <div>
                    <FormLabel htmlFor="additional_information">
                        Additional Service or Amenities
                    </FormLabel>
                    <p className='text-sm text-muted-foreground mb-2'>If you require any additional services or amenities, such as crew management, insurance, specific equipment, or technical support be sure to mention them.</p>

                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_information"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="min-h-[150px] max-w-[800px] border-2 rounded-xl"
                                        id="additional_information"
                                        placeholder="Enter any additional services or amenities required..."
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />



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

export default SellVesselForm;
