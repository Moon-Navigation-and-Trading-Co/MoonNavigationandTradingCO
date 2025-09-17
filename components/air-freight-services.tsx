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
import RoutingCard1 from './routing-card-1';
import TransportationMethodCard from './transportation-method-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import DatesCard from './dates-card-variant-1';
import ItemizedTable from './itemized-table';
import ConsolidatedForm from './consolidated-form';

// Define the form schema
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
    ready_to_load: z.string().min(1, { message: "Date is required" }),
    transportation: z.object({
        transportation_method: z.enum(["standard", "uld"], {
            required_error: "You need to select a transportation method.",
        }),
    }),
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
        total_volume: z.number().min(1, { message: "Total volume is required" }),
        dangerous_goods: z.boolean(),
        un_number: z.string().optional(),
        class: z.string().optional(),
        special_instructions: z.string().optional(),
        packaging_type: z.enum(["pallets", "crates", "boxes", "other"], {
            required_error: "Packaging type is required",
        }),
        stackable: z.boolean(),
        temperature_control: z.boolean(),
        temperature_min: z.number().optional(),
        temperature_max: z.number().optional(),
        special_handling: z.string().optional(),
    }).optional(),
    
    supporting_files: z.string().optional(),
    additional_information: z.string().optional(),
    effective_date: z.string().min(1, { message: "Effective date is required" }),
    expiry_date: z.string().min(1, { message: "Expiry date is required" }),
    service_contract_number: z.string().optional(),
    
    additional_services: z.object({
        port_handling: z.boolean().default(false),
        crane_heavy_lift: z.boolean().default(false),
        customs_clearance: z.boolean().default(false),
        storage_warehousing: z.boolean().default(false),
        inland_freight: z.boolean().default(false),
        inspection_quality_control: z.boolean().default(false),
        escort_permits: z.boolean().default(false),
        engineering_support: z.boolean().default(false),
        other: z.boolean().default(false),
        other_details: z.string().optional(),
    }),
    
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
});

// Add the missing type definition
type FormData = z.infer<typeof formSchema>;

const AirFreightForm: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors');
    const [entryMode, setEntryMode] = useState<'itemized' | 'consolidated'>('itemized');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: [{
                from_country: '',
                from_port: '',
                from_services_mode: 'cy',
                to_country: '',
                to_port: '',
                to_services_mode: 'cy'
            }],
            ready_to_load: '',
            transportation: {
                transportation_method: 'standard'
            },
            entry_mode: 'itemized',
            itemized_data: [{
                commodity: '',
                packaging_type: 'pallets',
                packaging_type_other: '',
                stackable: false,
                quantity: 1,
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
                total_volume: 0,
                dangerous_goods: false,
                un_number: '',
                class: '',
                special_instructions: '',
                packaging_type: 'pallets',
                stackable: false,
                temperature_control: false,
                temperature_min: 0,
                temperature_max: 0,
                special_handling: '',
            },
            supporting_files: '',
            additional_information: '',
            effective_date: '',
            expiry_date: '',
            service_contract_number: '',
            additional_services: {
                port_handling: false,
                crane_heavy_lift: false,
                customs_clearance: false,
                storage_warehousing: false,
                inland_freight: false,
                inspection_quality_control: false,
                escort_permits: false,
                engineering_support: false,
                other: false,
                other_details: '',
            },
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
        setIsSubmitting(true);
        try {
            console.log(values);
            await onSubmit(values);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleModeChange = (mode: 'itemized' | 'consolidated') => {
        setEntryMode(mode);
        form.setValue('entry_mode', mode);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard1 control={form.control} />

                {/* Ready to Load Section */}
                <DatesCard control={form.control} />

                {/* Transportation By */}
                <TransportationMethodCard control={form.control} />

                {/* Entry Mode Selection */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Cargo Entry Mode</h2>
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
                                    name="additional_information"
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
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Supporting Files</h2>
                    <FormItem>
                        <FormLabel>Upload Files {entryMode === 'consolidated' && <span className="text-red-500">*</span>}</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="supporting_files"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            type="file"
                                            multiple
                                            accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                            className="max-w-[300px] border-2 rounded-xl"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                        <p className="text-xs text-gray-500 mt-1">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
                    </FormItem>
                </div>

                {/* Commercial Terms */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <FormItem>
                        <FormLabel>Commercial Terms (Optional)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="service_contract_number"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="Enter service contract number"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Recommended Services */}
                <RecommendedServicesCard control={form.control} />

                {/* Door-to-Door Delivery */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Door-to-Door Delivery</h2>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_services.port_handling"
                            render={({ field }) => (
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked)}
                                            id="port_handling_yes"
                                        />
                                        <label htmlFor="port_handling_yes" className="text-sm font-medium">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={!field.value}
                                            onCheckedChange={(checked) => field.onChange(!checked)}
                                            id="port_handling_no"
                                        />
                                        <label htmlFor="port_handling_no" className="text-sm font-medium">
                                            No
                                        </label>
                                    </div>
                                </div>
                            )}
                        />
                    </FormControl>
                </div>

                {/* Insurance */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Insurance</h2>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_services.customs_clearance"
                            render={({ field }) => (
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked)}
                                            id="customs_clearance_yes"
                                        />
                                        <label htmlFor="customs_clearance_yes" className="text-sm font-medium">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={!field.value}
                                            onCheckedChange={(checked) => field.onChange(!checked)}
                                            id="customs_clearance_no"
                                        />
                                        <label htmlFor="customs_clearance_no" className="text-sm font-medium">
                                            No
                                        </label>
                                    </div>
                                </div>
                            )}
                        />
                    </FormControl>
                </div>

                {/* Special Handling Instructions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Special Handling Instructions</h2>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_services.inland_freight"
                            render={({ field }) => (
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked)}
                                            id="inland_freight_yes"
                                        />
                                        <label htmlFor="inland_freight_yes" className="text-sm font-medium">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={!field.value}
                                            onCheckedChange={(checked) => field.onChange(!checked)}
                                            id="inland_freight_no"
                                        />
                                        <label htmlFor="inland_freight_no" className="text-sm font-medium">
                                            No
                                        </label>
                                    </div>
                                </div>
                            )}
                        />
                    </FormControl>

                    {/* Conditional Details Section */}
                    <Controller
                        control={form.control}
                        name="additional_services.inland_freight"
                        render={({ field: { value } }) => (
                            <div>
                                {value && (
                                    <div className="mt-4 p-4 border border-blue-200 bg-blue-50 rounded-lg">
                                        <h3 className="font-medium text-blue-800 mb-3">Please provide the required details</h3>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="additional_services.other_details"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Textarea
                                                            className="min-h-[100px] border-2 rounded-xl"
                                                            placeholder="Describe special handling requirements..."
                                                            {...field}
                                                        />
                                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                                    </>
                                                )}
                                            />
                                        </FormControl>
                                    </div>
                                )}
                            </div>
                        )}
                    />
                </div>

                {/* Service Contract */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Service Contract</h2>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="effective_date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <FormLabel>Effective Date <span className="text-muted-foreground text-xs">(Required)</span></FormLabel>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="date"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                    <FormControl className="mt-4">
                        <Controller
                            control={form.control}
                            name="expiry_date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <FormLabel>Expiry Date <span className="text-muted-foreground text-xs">(Required)</span></FormLabel>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="date"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className={`mt-4 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
                    {isSubmitting ? (
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

export default AirFreightForm;