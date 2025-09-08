"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';

const SpecialServicesForm: React.FC<{ onSubmit: (data: any) => void; isSubmitting?: boolean }> = ({ onSubmit, isSubmitting = false }) => {
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    const formSchema = z.object({
        vessel: z.object({
            name: z.string().min(1, { message: t("Required") }),
            imo: z.string().min(1, { message: t("Required") }),
            port_name: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            eta: z.string().min(1, { message: t("Required") }),
            etd: z.string().min(1, { message: t("Required") }),
            location: z.string().min(1, { message: t("Required") }),
        }),
        requested_services: z.string().min(1, { message: t("Required") }),
        supporting_files: z.array(z.instanceof(File)).optional(),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("Required") }),
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
            vessel: {
                name: '',
                imo: '',
                port_name: '',
                flag: '',
                eta: '',
                etd: '',
                location: '',
            },
            requested_services: '',
            supporting_files: [],
            company_details: {
                company_name: '',
                contact_person_name: '',
                title: '',
                country_of_origin: '',
                company_email: '',
                additional_email: '',
                phone_number: '',
                additional_phone_number: '',
            }
        }
    });

    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">


                {/* Vessel Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Vessel Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>Vessel Name *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.name"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Vessel Name" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Vessel IMO Number *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.imo"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert IMO Number" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Port Name *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.port_name"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Port Name" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Flag *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.flag"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Flag" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>ETA (Estimated Time of Arrival) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.eta"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>ETD (Estimated Time of Departure) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.etd"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel.location"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="at_anchor" />
                                                </FormControl>
                                                <FormLabel className="font-normal">At Anchor</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="at_berth" />
                                                </FormControl>
                                                <FormLabel className="font-normal">At Berth</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="suez_canal_passage" />
                                                </FormControl>
                                                <FormLabel className="font-normal">During Suez Canal Passage</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Requested Services */}
                <div className="space-y-4">
                    <h3 className="text-xl font-raleway font-medium">Please Declare the Requested Services</h3>
                    <FormItem>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="requested_services"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Please describe the requested services..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Supporting Files */}
                <div className="space-y-4">
                    <h3 className="text-xl font-raleway font-medium">Supporting files (Optional)</h3>
                    <p className="text-sm text-gray-600">
                        Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint
                    </p>
                    <FormItem>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="supporting_files"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            type="file"
                                            multiple
                                            accept=".pdf,.jpeg,.jpg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                            onChange={(e) => {
                                                const files = Array.from(e.target.files || []);
                                                field.onChange(files);
                                            }}
                                            className="max-w-md"
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />



                <Button type="submit" className={`mt-8 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : "Submit"}
                </Button>            </form>
        </Form>
    );
};

export default SpecialServicesForm;
