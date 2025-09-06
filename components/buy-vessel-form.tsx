"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import CompanyDetailsCard from './company-details-card';


// 1. Define a type-safe form handler using z.infer
const BuyVesselForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

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
        detailed_location: z.string().optional(),
        required_specification: z.string().min(1, { message: t("Required") }),
        budget: z.number().optional(),
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

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                {/* <RoutingCard control={form.control} /> */}
                <FormItem>
                    <h2 className='text-lg mb-2 font-raleway font-medium'>{tt('vesselDetails')}</h2>
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

                {/* Delivery Date, Pick up location, and Detailed Location on same line */}
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
                                        className="max-w-[300px] border-2 rounded-xl"
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

                {/* Additional Service or Amenities */}
                <FormItem>
                    <FormLabel>Additional Service or Amenities</FormLabel>
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
                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default BuyVesselForm;
