"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from './ui/textarea';
import RoutingCard1 from './routing-card-1';
import CommoditiesCard from './commodities-card-variant-5';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import RecommendedServicesCard from './recommended-card';
import ServiceModeCard from './service-mode-card';
import DatesCard from './dates-card';
import CargoSpecificationTable from './cargo-specification-table';

// 1. Define a type-safe form handler using z.infer
const ContainerServicesCard: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const [is_submitting, set_is_submitting] = useState(false);
    const formSchema = z.object({
        routing: z.array(z.object({
            from_country: z.string().min(1, { message: "From country is required" }),
            from_port: z.string().min(1, { message: "From port/area is required" }),
            from_services_mode: z.enum(["cy", "sd"], {
                required_error: "From services mode is required",
            }),
            pickup_required: z.boolean().optional(),
            pickup_location: z.string().optional(),
            to_country: z.string().min(1, { message: "To country is required" }),
            to_port: z.string().min(1, { message: "To port/area is required" }),
            to_services_mode: z.enum(["cy", "sd"], {
                required_error: "To services mode is required",
            }),
            delivery_required: z.boolean().optional(),
            delivery_location: z.string().optional(),
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
        })),
        commodities: z.array(z.object({
            type: z.string().optional(),
            triangulation: z.boolean().default(false),
            shippers: z.boolean().default(false),
            import: z.boolean().default(false),
            export: z.boolean().default(false),
            container_type: z.string().optional(),
            container_number: z.string().optional(),
            container_weight: z.string().optional(),
            details: z.string().optional(),
            temperature: z.boolean().default(false),
            dangerous: z.boolean().default(false),
            oversized: z.boolean().default(false),
            length: z.string().optional(),
            width: z.string().optional(),
            height: z.string().optional(),
            weight: z.string().optional(),
            file: z.string().optional(),
            additional_information: z.string().optional(),
        })),
        dates: z.object({
            effective_date: z.string().min(1, { message: "Effective date is required" }),
            expiry_date: z.string().min(1, { message: "Expiry date is required" }),
        }),
        service_contract: z.string().optional(),
        additional_services: z.object({
            container_loading_unloading: z.boolean().default(false),
            cargo_insurance: z.boolean().default(false),
            palletizing_repacking: z.boolean().default(false),
            warehousing_storage: z.boolean().default(false),
            trucking_delivery: z.boolean().default(false),
            inspection_quality_control: z.boolean().default(false),
            dangerous_goods_handling: z.boolean().default(false),
            flexi_tank_arrangement: z.boolean().default(false),
            other: z.boolean().default(false),
            other_specify: z.string().optional(),
            additional_requirements: z.string().optional(),
        }),
        supporting_files: z.object({
            cargo_picture: z.boolean().default(false),
            files: z.array(z.any()).optional(),
        }),
        vad: z.object({
            inland_container: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: "Company name is required" }),
            contact_person_name: z.string().min(1, { message: "Contact person is required" }),
            title: z.string().min(1, { message: "Title is required" }),
            country_of_origin: z.string().min(1, { message: "Country is required" }),
            company_email: z.string().email({ message: "Valid email is required" }),
            additional_email: z.string().email({ message: "Valid email format" }).optional(),
            phone_number: z.string().min(1, { message: "Phone number is required" }),
            additional_phone_number: z.string().optional(),
        }),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: [{ 
                from_country: '', 
                from_port: '', 
                from_services_mode: 'cy',
                pickup_required: false,
                pickup_location: '',
                to_country: '', 
                to_port: '', 
                to_services_mode: 'cy',
                delivery_required: false,
                delivery_location: '',
            }],
            cargo_specifications: [{
                commodity: '',
                container_type: '',
                package_type: '',
                quantity: 1,
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
            }],
            commodities: [{
                type: '',
                triangulation: false,
                shippers: false,
                import: false,
                export: false,
                container_type: '',
                container_number: '',
                container_weight: '',
                details: '',
                temperature: false,
                dangerous: false,
                oversized: false,
                length: '',
                width: '',
                height: '',
                weight: '',
                file: '',
                additional_information: ''
            }],
            dates: {
                effective_date: '',
                expiry_date: ''
            },
            service_contract: '',
            additional_services: {
                container_loading_unloading: false,
                cargo_insurance: false,
                palletizing_repacking: false,
                warehousing_storage: false,
                trucking_delivery: false,
                inspection_quality_control: false,
                dangerous_goods_handling: false,
                flexi_tank_arrangement: false,
                other: false,
                other_specify: '',
                additional_requirements: '',
            },
            supporting_files: {
                cargo_picture: false,
                files: [],
            },
            vad: {
                inland_container: ''
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
                {/* Routing Section */}
                <RoutingCard1 control={form.control} />

                {/* Cargo Specification Table */}
                <CargoSpecificationTable control={form.control} />

                {/* Supporting Files */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Supporting Files (Optional)</h2>
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

                {/* Dates */}
                <DatesCard control={form.control} />

                {/* Service Contract */}
                <FormItem>
                    <FormLabel>{t('service-contract')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`service_contract`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        placeholder="Insert additional services needed"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Additional Required Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Required Services</h2>
                    <p className="text-sm text-gray-600 mb-6">Please select any extra services needed with your container shipment</p>
                    
                    <div className="space-y-4">
                        {/* Container Loading / Unloading Assistance */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.container_loading_unloading"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="container_loading_unloading"
                                            />
                                            <label htmlFor="container_loading_unloading" className="text-sm font-medium">
                                                Container Loading / Unloading Assistance
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Cargo Insurance */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.cargo_insurance"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="cargo_insurance"
                                            />
                                            <label htmlFor="cargo_insurance" className="text-sm font-medium">
                                                Cargo Insurance
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Palletizing / Repacking */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.palletizing_repacking"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="palletizing_repacking"
                                            />
                                            <label htmlFor="palletizing_repacking" className="text-sm font-medium">
                                                Palletizing / Repacking
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Warehousing / Temporary Storage */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.warehousing_storage"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="warehousing_storage"
                                            />
                                            <label htmlFor="warehousing_storage" className="text-sm font-medium">
                                                Warehousing / Temporary Storage
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Trucking / Inland Delivery */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.trucking_delivery"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="trucking_delivery"
                                            />
                                            <label htmlFor="trucking_delivery" className="text-sm font-medium">
                                                Trucking / Inland Delivery
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Inspection & Quality Control */}
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

                        {/* Dangerous Goods Handling */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.dangerous_goods_handling"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="dangerous_goods_handling"
                                            />
                                            <label htmlFor="dangerous_goods_handling" className="text-sm font-medium">
                                                Dangerous Goods Handling
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Flexi-tank / Tank Container Arrangement */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.flexi_tank_arrangement"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="flexi_tank_arrangement"
                                            />
                                            <label htmlFor="flexi_tank_arrangement" className="text-sm font-medium">
                                                Flexi-tank / Tank Container Arrangement
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Other (Please Specify) */}
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
                                                Other (Please Specify):
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

                        {/* Additional Requirements Textarea */}
                        <FormItem>
                            <FormLabel className="text-sm font-medium">Please describe any additional service or special requirement not listed above.</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.additional_requirements"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Textarea
                                                className="min-h-[100px] border-2 rounded-xl"
                                                placeholder="Describe any additional services or special requirements..."
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

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" disabled={is_submitting} className="mt-4 w-[200px]">
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

export default ContainerServicesCard; 