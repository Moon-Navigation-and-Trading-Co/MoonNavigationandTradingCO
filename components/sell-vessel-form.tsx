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
import DatesCard from './dates-card-variant-4';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';



// 1. Define a type-safe form handler using z.infer
const SellVesselForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        container: z.object({
            type: z.string().min(1, { message: t("Type") }),
            number: z.number().min(1, { message: t("Required") }),
            condition: z.enum(["new", "one-trip", "used"]),
        }),
        date: z.string().min(1, { message: t("Date") }).refine(value => {
            return !isNaN(Date.parse(value)); // Ensure valid date
        }, { message: t("InvalidDate") }),
        pick_up_location: z.string().min(1, { message: t("Required") }),
        rental_duration: z.number().min(1, { message: t("Required") }),
        detailed_location: z.string().optional(),
        required_specification: z.string().min(1, { message: t("Required") }),
        budget: z.number().optional(),
        additional_information: z.string().optional(),
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
                <h1 className='text-2xl font-semibold'>{tt('rent-vessel')}</h1>
                <FormItem>
                    <h2 className='text-lg mb-2 font-semibold'>{tt('vesselDetails')}</h2>
                    <FormLabel>{t('vesselTypeandSize')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`container.type`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Type a container"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                <FormItem>
                    <FormLabel>{t('vesselNo')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="container.number"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        type="number"
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="No. of Vessels"
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


                {/* Container Condition */}
                <FormItem className="space-y-3">
                    <FormLabel className='text-lg'>{t('vesselCondition')}</FormLabel>
                    <Controller
                        control={form.control}
                        name="container.condition" // Use the correct form field name
                        defaultValue="new" // Set a default value
                        render={({ field, fieldState: { error } }) => (
                            <RadioGroup
                                onValueChange={field.onChange} // Update form state
                                value={field.value} // The selected value
                                className="flex flex-col space-y-1"
                            >
                                {/* sea Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="new" />
                                    <FormLabel className="font-normal">{t("new")}</FormLabel>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="one-trip" />
                                    <FormLabel className="font-normal">{t("one-trip")}</FormLabel>
                                </div>


                                {/* ULD Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="used" />
                                    <FormLabel className="font-normal">{t("used-v")}</FormLabel>
                                </div>


                            </RadioGroup>
                        )}
                    />
                    <FormMessage />
                </FormItem>

                {/* Rental Duration */}
                <FormItem>
                    <FormLabel>{t('rental-duration')} </FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="rental_duration"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        type="number"
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Rental Duration"
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

                {/* Dates Section */}
                <DatesCard control={form.control} />


                {/* Pick up location */}
                <FormItem>
                    <FormLabel>{tt('pick-up-loco')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`pick_up_location`}
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

                {/* Detailed Location */}

                <FormItem>
                    <FormLabel>{tt('detailed-location')}  <span className="text-sm text-gray-500">({tt('optional')})</span></FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`detailed_location`}
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
                                        className="max-w-[300px] border-2 rounded-xl"
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
                    <FormLabel>{tt('budget')} <span className="text-sm text-gray-500">({tt('optional')})</span></FormLabel>
                    <p className='text-sm text-muted-foreground'>{tt("budget-p")}</p>
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






                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <div>
                    <FormLabel htmlFor="additional_information">
                        {tt('addServ')}
                    </FormLabel>
                    <p className='text-sm text-muted-foreground mb-2'>{tt('addServ-p')}</p>

                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_information"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="max-w-[300px] border-2 rounded-xl"
                                        id="additional_information"
                                        placeholder="Add any additional information"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>

                </div>

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
