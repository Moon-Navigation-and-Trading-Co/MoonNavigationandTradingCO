"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import LocationCard from './location-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import ServiceModeCard from './service-mode-card';
import DatesCard from './dates-card';
import CargoSpecificationTable from './cargo-specification-table';

// 1. Define a type-safe form handler using z.infer
const HSSCard: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const [is_submitting, set_is_submitting] = useState(false);
    // Define your Zod schema (as before)
    const formSchema = z.object({
        location: z.array(z.object({
            locationCountry: z.string().min(1, { message: "Country is required" }),
            locationPort: z.string().min(1, { message: "Port/Area is required" }),
            detailed: z.string().min(1, { message: t("Detailed") }),
        })),

        cargo_specifications: z.array(z.object({
            commodity: z.string().min(1, { message: "Commodity is required" }),
            container_type: z.string().min(1, { message: "Container type is required" }),
            package_type: z.string().optional(),
            quantity: z.number().min(1, { message: "Quantity is required" }),
            length: z.number().min(0, { message: "Length is required" }),
            length_unit: z.enum(["cm", "m"], { required_error: "Length unit is required" }),
            width: z.number().min(0, { message: "Width is required" }),
            width_unit: z.enum(["cm", "m"], { required_error: "Width unit is required" }),
            height: z.number().min(0, { message: "Height is required" }),
            height_unit: z.enum(["cm", "m"], { required_error: "Height unit is required" }),
            weight: z.number().min(0, { message: "Weight is required" }),
            weight_unit: z.enum(["kg", "ton"], { required_error: "Weight unit is required" }),
            gross_weight: z.number(),
            dangerous: z.enum(["yes", "no"], { required_error: "Dangerous status is required" }),
            un_class_remarks: z.string().optional(),
            container_ownership: z.enum(["yes", "no"], { required_error: "Container ownership is required" }),
            notes: z.string().optional(),
            only_cm: z.boolean().optional(),
        })),
        additional_information: z.string().optional(),
        supporting_files: z.object({
            cargo_picture: z.boolean().optional(),
            files: z.array(z.any()).optional(),
        }).optional(),
        container_handling_services: z.object({
            loading_discharging: z.boolean().optional(),
            lashing_unlashing: z.boolean().optional(),
            port_handling: z.boolean().optional(),
            crane_heavy_lift: z.boolean().optional(),
            reception_delivery_before: z.boolean().optional(),
            reception_delivery_after: z.boolean().optional(),
            temporary_storage: z.boolean().optional(),
            long_term_warehousing: z.boolean().optional(),
            special_requirements: z.string().optional(),
        }).optional(),
        additional_services: z.object({
            customs_clearance: z.boolean().optional(),
            inland_freight: z.boolean().optional(),
            inspection_quality_control: z.boolean().optional(),
            escort_permits: z.boolean().optional(),
            engineering_support: z.boolean().optional(),
            other: z.boolean().optional(),
            other_specify: z.string().optional(),
        }).optional(),
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
            location: [{
                locationCountry: '',
                locationPort: '',
                detailed: '',
            }],

            cargo_specifications: [{
                commodity: '',
                container_type: '',
                package_type: '',
                quantity: 0,
                length: 0,
                length_unit: 'cm',
                width: 0,
                width_unit: 'cm',
                height: 0,
                height_unit: 'cm',
                weight: 0,
                weight_unit: 'kg',
                gross_weight: 0,
                dangerous: 'no',
                un_class_remarks: '',
                container_ownership: 'no',
                notes: '',
                only_cm: false
            }],
            additional_information: '',
            supporting_files: {
                cargo_picture: false,
                files: []
            },
            container_handling_services: {
                loading_discharging: false,
                lashing_unlashing: false,
                port_handling: false,
                crane_heavy_lift: false,
                reception_delivery_before: false,
                reception_delivery_after: false,
                temporary_storage: false,
                long_term_warehousing: false,
                special_requirements: ''
            },
            additional_services: {
                customs_clearance: false,
                inland_freight: false,
                inspection_quality_control: false,
                escort_permits: false,
                engineering_support: false,
                other: false,
                other_specify: ''
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
    const handleSubmit = async (values: any) => {
    const [is_submitting, set_is_submitting] = useState(false);        try {
            console.log(values);
            await onSubmit(values);
        } finally {
    const [is_submitting, set_is_submitting] = useState(false);        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <LocationCard control={form.control} />

                {/* Cargo Specification Table */}
                <CargoSpecificationTable control={form.control} />

                {/* Additional Information */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Information</h2>
                    <FormItem>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="additional_information"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <textarea
                                            className="w-full min-h-[100px] border-2 rounded-xl p-3"
                                            placeholder="Add any additional information"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Supporting Files */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Supporting files (Optional)</h2>
                    <p className="text-sm text-gray-600 mb-4">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
                    
                    <div className="space-y-4">
                        {/* Cargo Picture Checkbox */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="supporting_files.cargo_picture"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="cargo_picture"
                                            />
                                            <label htmlFor="cargo_picture" className="text-sm font-medium">
                                                I wish to upload cargo picture with lifting points
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* File Upload */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="supporting_files.files"
                                    render={({ field }) => (
                                        <div className="space-y-2">
                                            <Input
                                                type="file"
                                                multiple
                                                accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                                className="max-w-md"
                                                onChange={(e) => {
                                                    const files = Array.from(e.target.files || []);
                                                    field.onChange(files);
                                                }}
                                            />
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Container Handling & Stevedoring Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Container Handling & Stevedoring Services</h2>
                    
                    <div className="space-y-4">
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.loading_discharging"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="loading_discharging"
                                            />
                                            <label htmlFor="loading_discharging" className="text-sm font-medium">
                                                Loading and discharging of containers
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.lashing_unlashing"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="lashing_unlashing"
                                            />
                                            <label htmlFor="lashing_unlashing" className="text-sm font-medium">
                                                Lashing and unlashing of containers
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.port_handling"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="port_handling"
                                            />
                                            <label htmlFor="port_handling" className="text-sm font-medium">
                                                Port handling and stevedoring of containerized cargo
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.crane_heavy_lift"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="crane_heavy_lift"
                                            />
                                            <label htmlFor="crane_heavy_lift" className="text-sm font-medium">
                                                Crane / Heavy Lift Equipment services (if required)
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <h3 className="text-lg font-raleway font-medium mt-6 mb-3">Container Reception & Delivery</h3>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.reception_delivery_before"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="reception_delivery_before"
                                            />
                                            <label htmlFor="reception_delivery_before" className="text-sm font-medium">
                                                Reception, delivery, and safekeeping of containers before shipment
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.reception_delivery_after"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="reception_delivery_after"
                                            />
                                            <label htmlFor="reception_delivery_after" className="text-sm font-medium">
                                                Reception, delivery, and safekeeping of containers after discharge
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <h3 className="text-lg font-raleway font-medium mt-6 mb-3">Container Storage & Warehousing</h3>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.temporary_storage"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="temporary_storage"
                                            />
                                            <label htmlFor="temporary_storage" className="text-sm font-medium">
                                                Temporary container storage in yard
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.long_term_warehousing"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="long_term_warehousing"
                                            />
                                            <label htmlFor="long_term_warehousing" className="text-sm font-medium">
                                                Long-term container warehousing (if applicable)
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel className="text-sm font-medium">Note: Specify any special container handling, stevedoring, or storage requirements not listed.</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="container_handling_services.special_requirements"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <textarea
                                                className="w-full min-h-[100px] border-2 rounded-xl p-3"
                                                placeholder="Describe any special requirements..."
                                                {...field}
                                            />
                                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Additional Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Services</h2>
                    
                    <div className="space-y-4">
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.customs_clearance"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="customs_clearance"
                                            />
                                            <label htmlFor="customs_clearance" className="text-sm font-medium">
                                                Customs Clearance
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.inland_freight"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="inland_freight"
                                            />
                                            <label htmlFor="inland_freight" className="text-sm font-medium">
                                                Transport to/from Port (Inland Freight)
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.inspection_quality_control"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="inspection_quality_control"
                                            />
                                            <label htmlFor="inspection_quality_control" className="text-sm font-medium">
                                                Inspection & Quality Control
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.escort_permits"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="escort_permits"
                                            />
                                            <label htmlFor="escort_permits" className="text-sm font-medium">
                                                Escort or Permits (if applicable)
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.engineering_support"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="engineering_support"
                                            />
                                            <label htmlFor="engineering_support" className="text-sm font-medium">
                                                Engineering Support (Lashing/Surveying)
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.other"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="other"
                                            />
                                            <label htmlFor="other" className="text-sm font-medium">
                                                Other (Specify):
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Other Specify Input */}
                        <Controller
                            control={form.control}
                            name="additional_services.other"
                            render={({ field: { value } }) => (
                                <div>
                                    {value && (
                                        <div className="ml-6">
                                            <FormControl>
                                                <Controller
                                                    control={form.control}
                                                    name="additional_services.other_specify"
                                                    render={({ field, fieldState: { error } }) => (
                                                        <>
                                                            <Input
                                                                className="max-w-[400px] border-2 rounded-xl"
                                                                placeholder="Please specify other service"
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
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

    const [is_submitting, set_is_submitting] = useState(false);                        <div className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>            </form>
        </Form>
    );
};

export default HSSCard;
