"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Textarea } from './ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';

const ShipManagementForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors')
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formSchema = z.object({
        vessel: z.object({
            name: z.string().min(1, { message: t("Required") }),
            imo: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            type: z.string().min(1, { message: t("Required") }),
            grt: z.string().min(1, { message: t("Required") }),
            nrt: z.string().min(1, { message: t("Required") }),
            loa: z.string().min(1, { message: t("Required") }),
            dwt: z.string().min(1, { message: t("Required") }),
            current_port: z.string().min(1, { message: t("Required") }),
            owner_company: z.string().min(1, { message: t("Required") }),
        }),
        services: z.object({
            full_technical_management: z.boolean().default(false),
            crew_management_training: z.boolean().default(false),
            safety_compliance: z.boolean().default(false),
            procurement_supplies: z.boolean().default(false),
            budgeting_cost_control: z.boolean().default(false),
            insurance_claims: z.boolean().default(false),
            port_agency_coordination: z.boolean().default(false),
            regulatory_documentation: z.boolean().default(false),
            strategic_planning: z.boolean().default(false),
            it_systems_management: z.boolean().default(false),
            maintenance_planning: z.boolean().default(false),
            emergency_response: z.boolean().default(false),
            other: z.boolean().default(false),
            other_details: z.string().optional(),
        }),
        vessel_condition: z.object({
            is_operational: z.string().min(1, { message: t("Required") }),
            current_condition: z.string().optional(),
        }),
        contract_duration: z.object({
            duration_type: z.string().min(1, { message: t("Required") }),
            start_date: z.string().min(1, { message: t("Required") }),
        }),
        additional_information: z.string().optional(),
        supporting_files: z.object({
            ship_registration_class_certificates: z.boolean().refine((val) => val === true, {
                message: "Ship Registration & Class Certificates upload is mandatory"
            }),
            cargo_picture: z.boolean().optional(),
            files: z.array(z.any()).optional(),
        }),
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
                flag: '',
                type: '',
                grt: '',
                nrt: '',
                loa: '',
                dwt: '',
                current_port: '',
                owner_company: '',
            },
            services: {
                full_technical_management: false,
                crew_management_training: false,
                safety_compliance: false,
                procurement_supplies: false,
                budgeting_cost_control: false,
                insurance_claims: false,
                port_agency_coordination: false,
                regulatory_documentation: false,
                strategic_planning: false,
                it_systems_management: false,
                maintenance_planning: false,
                emergency_response: false,
                other: false,
                other_details: '',
            },
            vessel_condition: {
                is_operational: '',
                current_condition: '',
            },
            contract_duration: {
                duration_type: '',
                start_date: '',
            },
            additional_information: '',
            supporting_files: {
                ship_registration_class_certificates: false,
                cargo_picture: false,
                files: []
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

    const handleSubmit = async (values: any) => {
        setIsSubmitting(true);
        try {
            await onSubmit(values);
        } finally {
            setIsSubmitting(false);
        }
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
                            <FormLabel>IMO Number *</FormLabel>
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
                            <FormLabel>Vessel Type *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.type"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Type – Tanker, Bulk Carrier, etc." {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>GRT (Gross Registered Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.grt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert GRT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>NRT (Net Registered Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.nrt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert NRT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>LOA (Length Overall in meters) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.loa"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert LOA" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>DWT (Deadweight Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.dwt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert DWT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Current Port / Location *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.current_port"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Location" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Owner / Management Company *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.owner_company"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Owner / Management Company Name" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Required Management Services */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Required Management Services</h3>
                    <p className="text-sm text-muted-foreground">(Please check the services you wish to receive.)</p>
                    
                    <div className="space-y-3">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.full_technical_management"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Full Technical Management</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.crew_management_training"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Crew Management and Training</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.safety_compliance"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Safety & Compliance (ISM/ISPS/MLC)</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.procurement_supplies"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Procurement & Supplies</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.budgeting_cost_control"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Budgeting & Cost Control</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.insurance_claims"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Insurance Arrangement & Claims Handling</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.port_agency_coordination"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Port Agency Coordination</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.regulatory_documentation"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Regulatory Documentation</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.strategic_planning"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Strategic planning and decision-making support</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.it_systems_management"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">IT systems and software management</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.maintenance_planning"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Maintenance planning and execution</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.emergency_response"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Emergency response and crisis management</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="services.other"
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

                        <Controller
                            control={form.control}
                            name="services.other"
                            render={({ field }) => (
                                <>
                                    {field.value && (
                                        <Input 
                                            className="max-w-[400px] border-2 rounded-xl mt-2" 
                                            placeholder="Please specify" 
                                            {...form.register('services.other_details')} 
                                        />
                                    )}
                                </>
                            )}
                        />
                    </div>
                </div>

                {/* Current Vessel Condition & Operation */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Current Vessel Condition & Operation</h3>
                    
                    <FormItem>
                        <FormLabel>Is the vessel currently operational? *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel_condition.is_operational"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Yes</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="no" />
                                                </FormControl>
                                                <FormLabel className="font-normal">No</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <Controller
                        control={form.control}
                        name="vessel_condition.is_operational"
                        render={({ field }) => (
                            <>
                                {field.value === 'no' && (
                                    <FormItem>
                                        <FormLabel>If not, please describe its current condition or requirements</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="vessel_condition.current_condition"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Textarea 
                                                            className="max-w-[600px] border-2 rounded-xl min-h-[100px]" 
                                                            placeholder="Please describe the current condition or requirements..." 
                                                            {...field} 
                                                        />
                                                        {error && <p className="text-red-500">{error.message}</p>}
                                                    </>)}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            </>
                        )}
                    />
                </div>

                {/* Expected Duration of Management Contract */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Expected Duration of Management Contract</h3>
                    
                    <FormItem>
                        <FormLabel>Duration Type *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="contract_duration.duration_type"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="short_term" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Short-Term</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="long_term" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Long-Term</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="project_based" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Project-Based</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Preferred Start Date *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="contract_duration.start_date"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Supporting Files */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Supporting files</h2>
                    <p className="text-sm text-gray-600 mb-4">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
                    
                    <div className="space-y-4">
                        {/* Ship Registration & Class Certificates Checkbox */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="supporting_files.ship_registration_class_certificates"
                                    render={({ field, fieldState: { error } }) => (
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    id="ship_registration_class_certificates"
                                                />
                                                <label htmlFor="ship_registration_class_certificates" className="text-sm font-medium">
                                                    Ship Registration & Class Certificates <span className="text-red-500">*</span>
                                                </label>
                                            </div>
                                            {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

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
                <div className="space-y-4">
                    <h3 className="text-xl font-raleway font-medium">Additional Information</h3>
                    <FormItem>
                        <FormLabel>Special Requests / Notes</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="additional_information"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Additional information..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
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

export default ShipManagementForm; 