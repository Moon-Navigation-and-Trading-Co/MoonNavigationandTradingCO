"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import RoutingCard0 from './routing-card-0';
import CommoditiesCard from './commodities-card-variant-8';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import DatesCard from './dates-card-variant-2';
import ItemizedTable from './itemized-table';
import ConsolidatedForm from './consolidated-form';
import FileUpload from './file-upload';



// 1. Define a type-safe form handler using z.infer
const InternationalInlandServicesForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const [entryMode, setEntryMode] = useState<'itemized' | 'consolidated'>('itemized');

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            fromCountry: z.string().min(1, { message: "From country is required" }),
            fromPort: z.string().min(1, { message: "From port/area is required" }),
            toCountry: z.string().min(1, { message: "To country is required" }),
            toPort: z.string().min(1, { message: "To port/area is required" }),
        })),
        date: z.string().min(1, { message: t("Date") }).refine(value => {
            return !isNaN(Date.parse(value)); // Ensure valid date
        }, { message: t("InvalidDate") }),
        entry_mode: z.enum(["itemized", "consolidated"], {
            required_error: "Please select an entry mode.",
        }),
        itemized_data: z.array(z.object({
            commodity: z.string().min(1, { message: "Commodity is required" }),
            packaging_type: z.enum(["pallets", "crates", "boxes", "other"], {
                required_error: "Packaging type is required",
            }),
            packaging_type_other: z.string().optional(),
            stackable: z.boolean(),
            quantity: z.number().min(1, { message: "Quantity is required" }),
            length: z.number().min(1, { message: "Length is required" }),
            length_unit: z.enum(["cm", "m"], { required_error: "Length unit is required" }),
            width: z.number().min(1, { message: "Width is required" }),
            width_unit: z.enum(["cm", "m"], { required_error: "Width unit is required" }),
            height: z.number().min(1, { message: "Height is required" }),
            height_unit: z.enum(["cm", "m"], { required_error: "Height unit is required" }),
            weight: z.number().min(1, { message: "Weight is required" }),
            cbm: z.number(),
            gross_cbm: z.number(),
            gross_weight: z.number(),
            dangerous_goods: z.boolean(),
            un_number: z.string().optional(),
            class: z.string().optional(),
            remarks: z.string().optional(),
            temperature_control: z.boolean(),
            temperature_min: z.number().optional(),
            temperature_max: z.number().optional(),
        })).optional(),
        consolidated_data: z.object({
            commodity_types: z.string().min(1, { message: "Commodity types are required" }),
            total_quantity: z.number().min(1, { message: "Total quantity is required" }),
            total_weight: z.number().min(1, { message: "Total weight is required" }),
            weight_unit: z.enum(["kg", "ton"], { required_error: "Weight unit is required" }),
            total_volume: z.number().min(1, { message: "Total volume is required" }),
            volume_unit: z.enum(["cbm", "m3"], { required_error: "Volume unit is required" }),
            dangerous_goods: z.boolean(),
            un_number: z.string().optional(),
            class: z.string().optional(),
            special_instructions: z.string().optional(),
            packaging_type: z.enum(["pallets", "crates", "boxes", "other"], {
                required_error: "Packaging type is required",
            }),
            packaging_type_other: z.string().optional(),
            stackable: z.boolean(),
            temperature_control: z.boolean(),
            temperature_min: z.number().optional(),
            temperature_max: z.number().optional(),
            special_handling: z.string().optional(),
        }).optional(),
        supporting_files: z.array(z.any()).optional(),
        additional_details: z.string().optional(),
        commercial_terms: z.string().optional(),
        commodities: z.array(z.object({
            type: z.string().min(1, { message: t("Type") }),
            temperature: z.boolean().optional(),
            dangerous: z.boolean().optional(),
            oversized: z.boolean().optional(),
            details: z.string().optional(),
            length: z.number().min(1, { message: t("Length") }),
            width: z.number().min(1, { message: t("Width") }),
            height: z.number().min(1, { message: t("Height") }),
            weight: z.number().min(1, { message: t("Weight") }),
            weight_unit: z.string().optional(),
            file: z.string().optional().refine(value => {
                return !value || value.match(/\.(pdf|jpe?g|gif|png|docx|doc|xls|xlsx|ppt|pptx)$/i);
            }, { message: t("File") }),
            additional_information: z.string().optional(),
        })),
        additional_services: z.object({
            inland_container_transportation: z.boolean().optional(),
            handling_stevedoring: z.boolean().optional(),
            crane_heavy_lift: z.boolean().optional(),
            storage_warehousing: z.boolean().optional(),
            escort_permits: z.boolean().optional(),
            engineering_support: z.boolean().optional(),
            other: z.boolean().optional(),
            other_specify: z.string().optional(),
            additional_requirements: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            additional_email: z.string().optional(),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
            additional_phone_number: z.string().optional(),
        })
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: [{
                fromCountry: '',
                fromPort: '',
                toCountry: '',
                toPort: '',
            }],
            date: '',
            entry_mode: 'itemized',
            itemized_data: [{
                commodity: '',
                packaging_type: 'pallets',
                packaging_type_other: '',
                stackable: true,
                quantity: 0,
                length: 0,
                length_unit: 'cm',
                width: 0,
                width_unit: 'cm',
                height: 0,
                height_unit: 'cm',
                weight: 0,
                cbm: 0,
                gross_cbm: 0,
                gross_weight: 0,
                dangerous_goods: false,
                un_number: '',
                class: '',
                remarks: '',
                temperature_control: false,
                temperature_min: 0,
                temperature_max: 0,
            }],
            consolidated_data: {
                commodity_types: '',
                total_quantity: 0,
                total_weight: 0,
                weight_unit: 'kg',
                total_volume: 0,
                volume_unit: 'cbm',
                dangerous_goods: false,
                un_number: '',
                class: '',
                special_instructions: '',
                packaging_type: 'pallets',
                packaging_type_other: '',
                stackable: true,
                temperature_control: false,
                temperature_min: 0,
                temperature_max: 0,
                special_handling: '',
            },
            supporting_files: [],
            additional_details: '',
            commercial_terms: '',
            commodities: [{
                temperature: false,
                dangerous: false,
                oversized: false,
                details: "",
                length: 0,
                width: 0,
                height: 0,
                weight: 0,
                weight_unit: 'kg',
                file: '',
                additional_information: '',
            }],
            additional_services: {
                inland_container_transportation: false,
                handling_stevedoring: false,
                crane_heavy_lift: false,
                storage_warehousing: false,
                escort_permits: false,
                engineering_support: false,
                other: false,
                other_specify: '',
                additional_requirements: '',
            },
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

    const handleModeChange = (mode: 'itemized' | 'consolidated') => {
        setEntryMode(mode);
        form.setValue('entry_mode', mode);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard0 control={form.control} />

                {/* Dates Section */}
                <DatesCard control={form.control} />

                {/* Entry Mode Selection */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Cargo Entry Mode</h2>
                    <div className="flex gap-4">
                        <Button
                            type="button"
                            variant={entryMode === 'itemized' ? 'default' : 'outline'}
                            onClick={() => handleModeChange('itemized')}
                            className="flex-1"
                        >
                            Itemized Entry by Commodity
                        </Button>
                        <Button
                            type="button"
                            variant={entryMode === 'consolidated' ? 'default' : 'outline'}
                            onClick={() => handleModeChange('consolidated')}
                            className="flex-1"
                        >
                            Consolidated Entry for Multiple Commodities
                        </Button>
                    </div>
                </div>

                {/* Cargo Entry Section */}
                {entryMode === 'itemized' ? (
                    <ItemizedTable control={form.control} />
                ) : (
                    <ConsolidatedForm control={form.control} />
                )}

                {/* Additional Details - Only for Itemized Entry */}
                {entryMode === 'itemized' && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <FormItem>
                            <FormLabel>Additional Details (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_details"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Textarea
                                                className="min-h-[100px] border-2 rounded-xl"
                                                placeholder="Add any additional information about your cargo"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                )}

                {/* Supporting Files Section */}
                <FileUpload 
                    control={form.control} 
                    isRequired={entryMode === 'consolidated'}
                />

                {/* Commercial Terms */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <FormItem>
                        <FormLabel>Commercial Terms (Optional)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="commercial_terms"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea
                                            className="min-h-[100px] border-2 rounded-xl"
                                            placeholder="Loading/discharging rates, Incoterms, etc."
                                            {...field}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Additional Required Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Required Services</h2>
                    <div className="space-y-4">
                        {/* Service Checkboxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.inland_container_transportation"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="inland_container_transportation"
                                        />
                                    )}
                                />
                                <label htmlFor="inland_container_transportation" className="text-sm font-medium">
                                    Inland Container Transportation
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.handling_stevedoring"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="handling_stevedoring"
                                        />
                                    )}
                                />
                                <label htmlFor="handling_stevedoring" className="text-sm font-medium">
                                    Handling & Stevedoring
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.crane_heavy_lift"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="crane_heavy_lift"
                                        />
                                    )}
                                />
                                <label htmlFor="crane_heavy_lift" className="text-sm font-medium">
                                    Crane / Heavy Lift Equipment
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.storage_warehousing"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="storage_warehousing"
                                        />
                                    )}
                                />
                                <label htmlFor="storage_warehousing" className="text-sm font-medium">
                                    Storage & Warehousing
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.escort_permits"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="escort_permits"
                                        />
                                    )}
                                />
                                <label htmlFor="escort_permits" className="text-sm font-medium">
                                    Escort or Permits (if applicable)
                                </label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.engineering_support"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="engineering_support"
                                        />
                                    )}
                                />
                                <label htmlFor="engineering_support" className="text-sm font-medium">
                                    Engineering Support (Lashing/Surveying)
                                </label>
                            </div>
                        </div>

                        {/* Other Service */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Controller
                                    control={form.control}
                                    name="additional_services.other"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            id="other_service"
                                        />
                                    )}
                                />
                                <label htmlFor="other_service" className="text-sm font-medium">
                                    Other (Specify)
                                </label>
                            </div>
                            
                            {/* Conditional Other Input */}
                            <Controller
                                control={form.control}
                                name="additional_services.other"
                                render={({ field: { value } }) => (
                                    <div>
                                        {value && (
                                        <div className="ml-6">
                                            <Controller
                                                control={form.control}
                                                name="additional_services.other_specify"
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Input
                                                            className={`w-full border-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="Please specify"
                                                            {...field}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        {/* Additional Requirements Text Area */}
                        <div className="mt-6">
                            <FormLabel className="text-sm font-medium">
                                Please describe any additional service or special requirement not listed above.
                            </FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.additional_requirements"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Textarea
                                                className="min-h-[100px] border-2 rounded-xl mt-2"
                                                placeholder="Describe additional services or special requirements..."
                                                {...field}
                                            />
                                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default InternationalInlandServicesForm;
