"use client"
import React, { useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Upload, Trash2, Mail, Phone, Calendar, Minus } from 'lucide-react';
import CompanyDetailsCard from './company-details-card';
import RoutingCard0 from './routing-card-0';
import DatesCard from './dates-card';
import ContainerDetailsTable from './container-details-table';
import { useTranslations } from 'next-intl';

// 1. Define a type-safe form handler using z.infer
const ContainerInlandServicesForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')
<<<<<<< HEAD
    const [isSubmitting, setIsSubmitting] = useState(false);
=======
    const [is_submitting, set_is_submitting] = useState(false);
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7

    // Define your Zod schema (as before)
    const formSchema = z.object({
        routing: z.array(z.object({
            from_country: z.string().min(1, { message: "From country is required" }),
            from_port: z.string().min(1, { message: "From port/area is required" }),
            to_country: z.string().min(1, { message: "To country is required" }),
            to_port: z.string().min(1, { message: "To port/area is required" }),
        })),
        container_details: z.array(z.object({
            container_type: z.string().min(1, { message: "Container type is required" }),
            quantity: z.number().min(1, { message: "Quantity is required" }),
            commodity: z.string().optional(),
            weight_per_container: z.number().min(0, { message: "Weight per container is required" }),
            weight_unit: z.enum(["kg", "ton"], { required_error: "Weight unit is required" }),
            gross_weight: z.number(),
            dangerous: z.enum(["yes", "no"], { required_error: "Dangerous status is required" }),
            container_ownership: z.enum(["yes", "no"], { required_error: "Container ownership is required" }),
            notes: z.string().optional(),
            un_class_remarks: z.string().optional(),
        })),
        supporting_files: z.object({
            cargo_picture: z.boolean().optional(),
            files: z.array(z.any()).optional(),
        }).optional(),
        additional_information: z.string().optional(),
        dates: z.object({
            effective_date: z.string().optional(),
            expiry_date: z.string().optional(),
        }).optional(),
        service_contract: z.object({
            contract_number: z.string().optional(),
        }).optional(),
        additional_services: z.object({
            handling_stevedoring: z.boolean().optional(),
            crane_heavy_lift: z.boolean().optional(),
            storage_warehousing: z.boolean().optional(),
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
                from_country: '',
                from_port: '',
                to_country: '',
                to_port: '',
            }],
            container_details: [{
                container_type: '',
                quantity: 0,
                commodity: '',
                weight_per_container: 0,
                weight_unit: 'kg',
                gross_weight: 0,
                dangerous: 'no',
                container_ownership: 'no',
                notes: '',
                un_class_remarks: ''
            }],
            supporting_files: {
                cargo_picture: false,
                files: []
            },
            additional_information: '',
            dates: {
                effective_date: '',
                expiry_date: ''
            },
            service_contract: {
                contract_number: ''
            },
            additional_services: {
                handling_stevedoring: false,
                crane_heavy_lift: false,
                storage_warehousing: false,
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
                additional_phone_number: '',
            }
        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = async (values: any) => {
<<<<<<< HEAD
        setIsSubmitting(true);
=======
        set_is_submitting(true);
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7
        try {
            console.log(values)
            await onSubmit(values);
        } finally {
<<<<<<< HEAD
            setIsSubmitting(false);
=======
            set_is_submitting(false);
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard0 control={form.control} />

                {/* Container Details Table */}
                <ContainerDetailsTable control={form.control} />

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
                                        <Textarea
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

                {/* Dates */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Dates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem>
                            <FormLabel>Effective Date</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                                    name="dates.effective_date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                                type="date"
                                                className="w-full border-2 rounded-xl"
                                        {...field}
                                    />
                                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                        <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dates.expiry_date"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                type="date"
                                                className="w-full border-2 rounded-xl"
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

                {/* Service Contract */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Service Contract</h2>
                    <FormItem>
                        <FormLabel>Service contract <span className="text-gray-500 text-sm">(Optional)</span></FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="service_contract.contract_number"
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

                {/* Additional Required Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Required Services</h2>
                    
                    <div className="space-y-4">
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.handling_stevedoring"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="handling_stevedoring"
                                            />
                                            <label htmlFor="handling_stevedoring" className="text-sm font-medium">
                                                Handling & Stevedoring
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
                                    name="additional_services.crane_heavy_lift"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="crane_heavy_lift"
                                            />
                                            <label htmlFor="crane_heavy_lift" className="text-sm font-medium">
                                                Crane / Heavy Lift Equipment
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
                                    name="additional_services.storage_warehousing"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="storage_warehousing"
                                            />
                                            <label htmlFor="storage_warehousing" className="text-sm font-medium">
                                                Storage & Warehousing
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

<<<<<<< HEAD
                <Button type="submit" className={`mt-4 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
                    {isSubmitting ? (
=======
                <Button type="submit" className={`mt-4 w-[200px] ${is_submitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={is_submitting}>
                    {is_submitting ? (
>>>>>>> 05a2ef0da3174e92adbd6eacec14ae4f2819bab7
                        <div className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>            </form>
        </Form>
    );
};

export default ContainerInlandServicesForm;
