"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';

const BunkeringOilSupplyForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    const formSchema = z.object({
        vessel: z.object({
            name: z.string().min(1, { message: t("Required") }),
            imo: z.string().optional(),
            port_name: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            eta: z.string().min(1, { message: t("Required") }),
            etd: z.string().min(1, { message: t("Required") }),
            location: z.string().min(1, { message: t("Required") }),
            expected_delivery_date: z.string().min(1, { message: t("Required") }),
        }),
        services: z.object({
            bunkering: z.object({
                mgo: z.boolean().default(false),
                vlsfo: z.boolean().default(false),
                hfo: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                other_bunkering_details: z.string().optional(),
                mgo_details: z.string().optional(),
                vlsfo_details: z.string().optional(),
                hfo_details: z.string().optional(),
            }),
            lubricant_oil: z.object({
                engine_oil: z.boolean().default(false),
                hydraulic_oil: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                other_lubricant_details: z.string().optional(),
                engine_oil_details: z.string().optional(),
                hydraulic_oil_details: z.string().optional(),
            }),
            ship_chandlery: z.object({
                fresh_dry_provisions: z.boolean().default(false),
                deck_engine_store: z.boolean().default(false),
                safety_equipment: z.boolean().default(false),
                spare_parts: z.boolean().default(false),
                other: z.boolean().default(false),
                other_details: z.string().optional(),
                other_chandlery_details: z.string().optional(),
                fresh_dry_provisions_details: z.string().optional(),
                deck_engine_store_details: z.string().optional(),
                safety_equipment_details: z.string().optional(),
                spare_parts_details: z.string().optional(),
            }),
        }).refine((data) => {
            const bunkeringSelected = data.bunkering.mgo || data.bunkering.vlsfo || data.bunkering.hfo || data.bunkering.other;
            const lubricantSelected = data.lubricant_oil.engine_oil || data.lubricant_oil.hydraulic_oil || data.lubricant_oil.other;
            const chandlerySelected = data.ship_chandlery.fresh_dry_provisions || data.ship_chandlery.deck_engine_store || data.ship_chandlery.safety_equipment || data.ship_chandlery.spare_parts || data.ship_chandlery.other;
            
            return bunkeringSelected || lubricantSelected || chandlerySelected;
        }, {
            message: "Please select at least one service from the available options",
            path: ["services"]
        }),
        additional_information: z.string().optional(),
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
                expected_delivery_date: '',
            },
            services: {
                bunkering: {
                    mgo: false,
                    vlsfo: false,
                    hfo: false,
                    other: false,
                    other_details: '',
                    other_bunkering_details: '',
                    mgo_details: '',
                    vlsfo_details: '',
                    hfo_details: '',
                },
                lubricant_oil: {
                    engine_oil: false,
                    hydraulic_oil: false,
                    other: false,
                    other_details: '',
                    other_lubricant_details: '',
                    engine_oil_details: '',
                    hydraulic_oil_details: '',
                },
                ship_chandlery: {
                    fresh_dry_provisions: false,
                    deck_engine_store: false,
                    safety_equipment: false,
                    spare_parts: false,
                    other: false,
                    other_details: '',
                    other_chandlery_details: '',
                    fresh_dry_provisions_details: '',
                    deck_engine_store_details: '',
                    safety_equipment_details: '',
                    spare_parts_details: '',
                },
            },
            additional_information: '',
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
                {/* Header */}
                <div className="space-y-4">
                </div>

                {/* Vessel Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Vessel Information</h3>
                    
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
                            <FormLabel>IMO Number (if applicable)</FormLabel>
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

                {/* Service Required */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Service Required (Select One or More)</h3>
                    
                    {/* Bunkering */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium">Bunkering (Fuel Supply)</h4>
                        <div className="space-y-2">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.bunkering.mgo"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Marine Gas Oil (MGO)</FormLabel>
                            </FormItem>

                            {form.watch("services.bunkering.mgo") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.bunkering.mgo_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.bunkering.vlsfo"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Very Low Sulfur Fuel Oil (VLSFO)</FormLabel>
                            </FormItem>

                            {form.watch("services.bunkering.vlsfo") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.bunkering.vlsfo_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.bunkering.hfo"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Heavy Fuel Oil (HFO)</FormLabel>
                            </FormItem>

                            {form.watch("services.bunkering.hfo") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.bunkering.hfo_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.bunkering.other"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Other (Specify)</FormLabel>
                            </FormItem>

                            {form.watch("services.bunkering.other") && (
                                <div className="ml-6 mt-2">
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mb-2" 
                                        placeholder="Please specify" 
                                        {...form.register('services.bunkering.other_details')} 
                                    />
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.bunkering.other_bunkering_details')} 
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Lubricant & Oil Supply */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium">Lubricant & Oil Supply</h4>
                        <div className="space-y-2">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.lubricant_oil.engine_oil"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Engine Oil</FormLabel>
                            </FormItem>

                            {form.watch("services.lubricant_oil.engine_oil") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.lubricant_oil.engine_oil_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.lubricant_oil.hydraulic_oil"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Hydraulic Oil</FormLabel>
                            </FormItem>

                            {form.watch("services.lubricant_oil.hydraulic_oil") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.lubricant_oil.hydraulic_oil_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.lubricant_oil.other"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Other (Specify)</FormLabel>
                            </FormItem>

                            {form.watch("services.lubricant_oil.other") && (
                                <div className="ml-6 mt-2">
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mb-2" 
                                        placeholder="Please specify" 
                                        {...form.register('services.lubricant_oil.other_details')} 
                                    />
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.lubricant_oil.other_lubricant_details')} 
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Ship Chandlery */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium">Ship Chandlery (Provisions & Supplies)</h4>
                        <div className="space-y-2">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.ship_chandlery.fresh_dry_provisions"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Fresh & Dry Provisions</FormLabel>
                            </FormItem>

                            {form.watch("services.ship_chandlery.fresh_dry_provisions") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.ship_chandlery.fresh_dry_provisions_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.ship_chandlery.deck_engine_store"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Deck & Engine Store</FormLabel>
                            </FormItem>

                            {form.watch("services.ship_chandlery.deck_engine_store") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.ship_chandlery.deck_engine_store_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.ship_chandlery.safety_equipment"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Safety Equipment</FormLabel>
                            </FormItem>

                            {form.watch("services.ship_chandlery.safety_equipment") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.ship_chandlery.safety_equipment_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.ship_chandlery.spare_parts"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Spare Parts</FormLabel>
                            </FormItem>

                            {form.watch("services.ship_chandlery.spare_parts") && (
                                <div className="ml-6 mt-2">
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.ship_chandlery.spare_parts_details')} 
                                    />
                                </div>
                            )}

                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="services.ship_chandlery.other"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Other (Specify)</FormLabel>
                            </FormItem>

                            {form.watch("services.ship_chandlery.other") && (
                                <div className="ml-6 mt-2">
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mb-2" 
                                        placeholder="Please specify" 
                                        {...form.register('services.ship_chandlery.other_details')} 
                                    />
                                    <FormLabel>Please provide the required details</FormLabel>
                                    <Textarea 
                                        className="max-w-[400px] border-2 rounded-xl mt-1" 
                                        placeholder="Please provide the required details" 
                                        {...form.register('services.ship_chandlery.other_chandlery_details')} 
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Service Selection Error */}
                    {form.formState.errors.services && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-600 text-sm font-medium">
                                {form.formState.errors.services.message}
                            </p>
                        </div>
                    )}
                </div>

                {/* Expected Delivery Date */}
                <div className="space-y-4">
                    <FormItem>
                        <FormLabel>Expected Delivery Date *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel.expected_delivery_date"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Additional Information</h3>
                    <FormItem>
                        <FormLabel>Special Requests / Notes</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="additional_information"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Special requests or notes..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Supporting files (Optional)</FormLabel>
                        <p className="text-sm text-gray-600 mb-2">
                            Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint
                        </p>
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



                <Button type="submit" className="mt-8 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default BunkeringOilSupplyForm;
