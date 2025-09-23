"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import RoutingCard0 from './routing-card-0';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import ItemizedTable from './itemized-table';
import ConsolidatedForm from './consolidated-form';
import EnhancedSupportingFiles from './enhanced-supporting-files';

// Define the form schema with conditional validation
const formSchema = z.object({
    routing: z.array(z.object({
        from_country: z.string().min(1, { message: "From country is required" }),
        from_port: z.string().min(1, { message: "From port/area is required" }),
        from_services_mode: z.enum(["cy", "sd"], {
            required_error: "From services mode is required",
        }),
        to_country: z.string().min(1, { message: "To country is required" }),
        to_port: z.string().min(1, { message: "To port/area is required" }),
        to_services_mode: z.enum(["cy", "sd"], {
            required_error: "To services mode is required",
        }),
    })),
    date: z.string().min(1, { message: "Date is required" }).refine(value => {
        return !isNaN(Date.parse(value)); // Ensure valid date
    }, { message: "Invalid date format" }),
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
    supporting_files: z.array(z.instanceof(File)).optional(),
    service_contract: z.string().optional(),
    additional_details: z.string().optional(),
    commercial_terms: z.string().optional(),
    company_details: z.object({
        company_name: z.string().min(1, { message: "Company name is required" }),
        contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
        title: z.string().min(1, { message: "Title is required" }),
        country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
        company_email: z.string().email({ message: "Valid email is required" }),
        additional_email: z.string().email().optional().or(z.literal('')),
        phone_number: z.string().min(1, { message: "Phone number is required" }),
        additional_phone_number: z.string().optional(),
    })
}).refine((data) => {
    // Conditional validation: require supporting_files for consolidated mode
    if (data.entry_mode === 'consolidated') {
        return data.supporting_files && data.supporting_files.length > 0;
    }
    return true;
}, {
    message: "Supporting files are required for Consolidated Entry",
    path: ["supporting_files"]
}).refine((data) => {
    // Ensure itemized_data is required when entry_mode is itemized
    if (data.entry_mode === 'itemized') {
        return data.itemized_data && data.itemized_data.length > 0;
    }
    return true;
}, {
    message: "At least one item is required for Itemized Entry",
    path: ["itemized_data"]
}).refine((data) => {
    // Ensure consolidated_data is required when entry_mode is consolidated
    if (data.entry_mode === 'consolidated') {
        return data.consolidated_data;
    }
    return true;
}, {
    message: "Consolidated data is required for Consolidated Entry",
    path: ["consolidated_data"]
});

type FormData = z.infer<typeof formSchema>;

const LocalInlandServicesForm: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors');
    const [is_submitting, set_is_submitting] = useState(false);
    const [entry_mode, set_entry_mode] = useState<'itemized' | 'consolidated'>('itemized');

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onBlur', // Add this line to enable validation on blur
        defaultValues: {
            routing: [{
                from_country: '',
                from_port: '',
                from_services_mode: 'cy',
                to_country: '',
                to_port: '',
                to_services_mode: 'cy'
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
            consolidated_data: undefined,
            supporting_files: [],
            service_contract: '',
            additional_details: '',
            commercial_terms: '',
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

    const handleSubmit = async (values: FormData) => {
        set_is_submitting(true);
        try {
            // Clean up data before submission - only send relevant data
            const cleanedData: FormData = {
                ...values,
                // Only include itemized_data if mode is itemized
                itemized_data: values.entry_mode === 'itemized' ? values.itemized_data : undefined,
                // Only include consolidated_data if mode is consolidated
                consolidated_data: values.entry_mode === 'consolidated' ? values.consolidated_data : undefined,
            };
            await onSubmit(cleanedData);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            set_is_submitting(false);
        }
    };

    const handleModeChange = (mode: 'itemized' | 'consolidated') => {
        set_entry_mode(mode);
        form.setValue('entry_mode', mode);
        
        // Clear the data for the mode that's not being used
        if (mode === 'itemized') {
            form.setValue('consolidated_data', undefined);
            // Clear supporting files requirement for itemized mode
            form.setValue('supporting_files', []);
            // Ensure itemized data has at least one blank row
            if (!form.getValues('itemized_data') || form.getValues('itemized_data')?.length === 0) {
                form.setValue('itemized_data', [{
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
                }]);
            }
        } else {
            // consolidated
            form.setValue('itemized_data', undefined);
            if (!form.getValues('consolidated_data')) {
                form.setValue('consolidated_data', {
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
                });
            }
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard0 control={form.control} />

                {/* Date Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Date</h2>
                    <FormItem>
                        <FormLabel>Date <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="date"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            type="date"
                                            className={`max-w-[300px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                            {...field}
                                        />
                                        {error && (
                                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3" />
                                                {error.message}
                                            </p>
                                        )}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Entry Mode Selection */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Cargo Entry Mode</h2>
                    <div className="flex gap-4">
                        <Button
                            type="button"
                            variant={entry_mode === 'itemized' ? 'default' : 'outline'}
                            onClick={() => handleModeChange('itemized')}
                            className="flex-1"
                        >
                            Itemized Entry by Commodity
                        </Button>
                        <Button
                            type="button"
                            variant={entry_mode === 'consolidated' ? 'default' : 'outline'}
                            onClick={() => handleModeChange('consolidated')}
                            className="flex-1"
                        >
                            Consolidated Entry for Multiple Commodities
                        </Button>
                    </div>
                </div>

                {/* Cargo Entry Section */}
                {entry_mode === 'itemized' ? (
                    <>
                        <ItemizedTable control={form.control} />
                        
                        {/* Display validation error for itemized_data array */}
                        {form.formState.errors.itemized_data?.message && (
                            <Alert variant="destructive" className="mb-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{form.formState.errors.itemized_data.message}</AlertDescription>
                            </Alert>
                        )}
                        
                        {/* Additional Information - Only for Itemized Entry */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold mb-4">Additional Information 
                                <span className="text-gray-500"> (Optional)</span>
                            </h3>
                            <FormItem>
                                <FormLabel>Additional Details</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="additional_details"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Please provide any additional information about your cargo..."
                                                    className={`mt-2 max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                                    rows={4}
                                                />
                                                {error && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-3 w-3" />
                                                        {error.message}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                            <FormItem className="mt-4">
                                <FormLabel>Commercial Terms</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="commercial_terms"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Please advise other relevant commercial terms..."
                                                    className={`mt-2 max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                                    rows={3}
                                                />
                                                {error && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-3 w-3" />
                                                        {error.message}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Supporting Files Section - Optional for Itemized */}
                        <EnhancedSupportingFiles 
                            control={form.control} 
                            name="supporting_files" 
                            showCargoPicture={false} 
                            title="Supporting Files (Optional)" 
                        />

                        {/* Service Contract Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold mb-4">Service Contract 
                                <span className="text-gray-500"> (Optional)</span>
                            </h3>
                            <FormItem>
                                <FormLabel>Service Contract</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="service_contract"
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="space-y-1">
                                                <Textarea
                                                    {...field}
                                                    placeholder="Please provide service contract details..."
                                                    className={`mt-2 max-w-[400px] border-2 rounded-xl ${
                                                        error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                                    }`}
                                                    rows={3}
                                                />
                                                {error && (
                                                    <p className="text-red-500 text-sm flex items-center gap-1">
                                                        <AlertCircle className="h-3 w-3" />
                                                        {error.message}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>
                    </>
                ) : (
                    <>
                        <ConsolidatedForm control={form.control} />
                        
                        {/* Display validation error for consolidated_data */}
                        {form.formState.errors.consolidated_data?.message && (
                            <Alert variant="destructive" className="mb-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>{form.formState.errors.consolidated_data.message}</AlertDescription>
                            </Alert>
                        )}
                        
                        {/* Supporting Files Section - Mandatory for Consolidated */}
                        <EnhancedSupportingFiles 
                            control={form.control} 
                            name="supporting_files" 
                            showCargoPicture={false} 
                            title="Supporting Files *" 
                            description="Max total size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint. * Supporting files are required for Consolidated Entry" 
                            error={form.formState.errors.supporting_files}
                        />

                        {/* Service Contract Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold mb-4">Service Contract 
                                <span className="text-gray-500"> (Optional)</span>
                            </h3>
                            <FormItem>
                                <FormLabel>Service Contract</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="service_contract"
                                        render={({ field, fieldState: { error } }) => (
                                            <div className="space-y-1">
                                                <Textarea
                                                    {...field}
                                                    placeholder="Please provide service contract details..."
                                                    className={`mt-2 max-w-[400px] border-2 rounded-xl ${
                                                        error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                                    }`}
                                                    rows={3}
                                                />
                                                {error && (
                                                    <p className="text-red-500 text-sm flex items-center gap-1">
                                                        <AlertCircle className="h-3 w-3" />
                                                        {error.message}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>
                        
                        {/* Additional Information */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold mb-4">Additional Information 
                                <span className="text-gray-500"> (Optional)</span>
                            </h3>
                            <FormItem>
                                <FormLabel>Additional Details</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="additional_details"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Please provide any additional information about your cargo..."
                                                    className={`mt-2 max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                                    rows={4}
                                                />
                                                {error && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-3 w-3" />
                                                        {error.message}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                            <FormItem className="mt-4">
                                <FormLabel>Commercial Terms</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="commercial_terms"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Please advise other relevant commercial terms..."
                                                    className={`mt-2 max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                                    rows={3}
                                                />
                                                {error && (
                                                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                        <AlertCircle className="h-3 w-3" />
                                                        {error.message}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>
                    </>
                )}

                {/* Display validation error for supporting_files */}
                {form.formState.errors.supporting_files?.message && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{form.formState.errors.supporting_files.message}</AlertDescription>
                    </Alert>
                )}



                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className={`mt-4 w-[200px] ${is_submitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={is_submitting}>
                    {is_submitting ? (
                        <div className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>
            </form>
        </Form>
    );
};

export default LocalInlandServicesForm;
