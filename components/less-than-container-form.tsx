"use client"
import React, { useState } from 'react';
import { Controller, useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import RoutingCard3 from './routing-card-3';
import RecommendedServicesCard from './recommended-card';
import CommoditiesCard from './commodities-card-variant-4';
import CompanyDetailsCard from './company-details-card';
import PickupDeliveryCard from './pickup-delivery-card';
import { useTranslations } from 'next-intl';
import DatesCard from './dates-card';
import { Plus, Minus } from 'lucide-react';

// Commodity Details List Component
const CommodityDetailsList = ({ control }: { control: any }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "commodity_details",
    });

    // Watch all commodity details for calculations
    const commodityDetails = useWatch({
        control,
        name: "commodity_details",
    });

    // Calculate totals
    const totalVolume = commodityDetails?.reduce((sum: number, item: any) => sum + (item.gross_volume || 0), 0) || 0;
    const totalWeight = commodityDetails?.reduce((sum: number, item: any) => sum + (item.cargo_weight || 0), 0) || 0;

    const addNewCommodity = () => {
        append({
            commodity: '',
            dangerous: false,
            dangerous_details: '',
            temperature_control: false,
            temperature_details: '',
            cargo_quantity: 0,
            gross_volume: 0,
            gross_volume_unit: 'cbm',
            cargo_weight: 0,
            cargo_weight_unit: 'kg',
            package_type: 'box',
            additional_information: ''
        });
    };

    return (
        <div className="space-y-6">
            {fields.map((field, index) => (
                <div key={field.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-raleway font-medium">Commodity {index + 1}</h3>
                        {fields.length > 1 && (
                            <Button
                                type="button"
                                variant="destructive"
                                onClick={() => remove(index)}
                                className="h-8 px-3 text-sm"
                            >
                                Delete
                            </Button>
                        )}
                    </div>

                    <div className="space-y-6">
                        {/* Commodity and Cargo Quantity - Same Line */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormItem>
                                <FormLabel>Commodity</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodity_details.${index}.commodity`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="w-full border-2 rounded-xl"
                                                    placeholder="Type the commodity"
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            <FormItem>
                                <FormLabel>Cargo quantity</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodity_details.${index}.cargo_quantity`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    type="number"
                                                    min="1"
                                                    className="w-full border-2 rounded-xl"
                                                    placeholder="Enter the Quantity"
                                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                />
                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Dangerous Cargo */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodity_details.${index}.dangerous`}
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id={`dangerous_${index}`}
                                            />
                                            <label htmlFor={`dangerous_${index}`} className="text-sm font-medium">
                                                This cargo is considered dangerous
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Dangerous Details */}
                        <Controller
                            control={control}
                            name={`commodity_details.${index}.dangerous`}
                            render={({ field: { value } }) => (
                                <div>
                                    {value && (
                                        <div className="ml-6">
                                            <FormItem>
                                                <FormLabel className="text-sm font-medium">Please insert details.</FormLabel>
                                                <FormControl>
                                                    <Controller
                                                        control={control}
                                                        name={`commodity_details.${index}.dangerous_details`}
                                                        render={({ field, fieldState: { error } }) => (
                                                            <>
                                                                <Input
                                                                    className="max-w-[400px] border-2 rounded-xl"
                                                                    placeholder="Enter dangerous cargo details"
                                                                    {...field}
                                                                />
                                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                                            </>
                                                        )}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        </div>
                                    )}
                                </div>
                            )}
                        />

                        {/* Temperature Control */}
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodity_details.${index}.temperature_control`}
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id={`temperature_control_${index}`}
                                            />
                                            <label htmlFor={`temperature_control_${index}`} className="text-sm font-medium">
                                                This Cargo requires temperature control
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Temperature Details */}
                        <Controller
                            control={control}
                            name={`commodity_details.${index}.temperature_control`}
                            render={({ field: { value } }) => (
                                <div>
                                    {value && (
                                        <div className="ml-6">
                                            <FormItem>
                                                <FormLabel className="text-sm font-medium">Please insert details.</FormLabel>
                                                <FormControl>
                                                    <Controller
                                                        control={control}
                                                        name={`commodity_details.${index}.temperature_details`}
                                                        render={({ field, fieldState: { error } }) => (
                                                            <>
                                                                <Input
                                                                    className="max-w-[400px] border-2 rounded-xl"
                                                                    placeholder="Enter temperature control details"
                                                                    {...field}
                                                                />
                                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                                            </>
                                                        )}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        </div>
                                    )}
                                </div>
                            )}
                        />

                        {/* Gross Volume and Cargo Weight - Same Line */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormItem>
                                <FormLabel>Gross volume</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodity_details.${index}.gross_volume`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <div className="flex items-center space-x-2">
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        max="60"
                                                        step="0.01"
                                                        className="w-full border-2 rounded-xl"
                                                        placeholder="Enter volume"
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                    />
                                                    <span className="text-sm font-medium whitespace-nowrap">Cbm (max 60cbm)</span>
                                                </div>
                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            <FormItem>
                                <FormLabel>Cargo weight</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodity_details.${index}.cargo_weight`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <div className="flex items-center space-x-2">
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        max="20000"
                                                        step="0.01"
                                                        className="w-full border-2 rounded-xl"
                                                        placeholder="Enter weight"
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                    />
                                                    <span className="text-sm font-medium whitespace-nowrap">Kg (max 20,000kg)</span>
                                                </div>
                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Package Type */}
                        <FormItem>
                            <FormLabel>Package Type</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodity_details.${index}.package_type`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        id={`package_box_${index}`}
                                                        name={`package_type_${index}`}
                                                        value="box"
                                                        checked={field.value === 'box'}
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor={`package_box_${index}`} className="text-sm font-medium">
                                                        Box
                                                    </label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        id={`package_pallet_${index}`}
                                                        name={`package_type_${index}`}
                                                        value="pallet"
                                                        checked={field.value === 'pallet'}
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor={`package_pallet_${index}`} className="text-sm font-medium">
                                                        Pallet
                                                    </label>
                                                </div>
                                            </div>
                                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Additional Information */}
                        <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodity_details.${index}.additional_information`}
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
                </div>
            ))}

            {/* Totals */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-raleway font-medium text-blue-800 mb-2">Totals</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="font-medium">Total Volume:</span>
                        <span className="ml-2 text-lg font-raleway font-medium">{totalVolume.toFixed(2)} CBM</span>
                    </div>
                    <div>
                        <span className="font-medium">Total Weight:</span>
                        <span className="ml-2 text-lg font-raleway font-medium">{totalWeight.toFixed(2)} kg</span>
                    </div>
                </div>
            </div>

            {/* Add Additional Commodity Button */}
            <div className="flex justify-start">
                <Button
                    type="button"
                    onClick={addNewCommodity}
                    className="px-6 py-2"
                >
                    Add Additional Commodity / Cargo Details
                </Button>
            </div>
        </div>
    );
};

// 1. Define a type-safe form handler using z.infer
const LessThanContainerForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const [is_submitting, set_is_submitting] = useState(false);
    const formSchema = z.object({
        routing: z.array(z.object({
            from_country: z.string().min(1, { message: "From country is required" }),
            from_port: z.string().min(1, { message: "From port/area is required" }),
            pickup_required: z.boolean().optional(),
            pickup_location: z.string().optional(),
            to_country: z.string().min(1, { message: "To country is required" }),
            to_port: z.string().min(1, { message: "To port/area is required" }),
            delivery_required: z.boolean().optional(),
            delivery_location: z.string().optional(),
        })),
        commodity_details: z.array(z.object({
            commodity: z.string().min(1, { message: "Commodity is required" }),
            dangerous: z.boolean().optional(),
            dangerous_details: z.string().optional(),
            temperature_control: z.boolean().optional(),
            temperature_details: z.string().optional(),
            cargo_quantity: z.number().min(1, { message: "Cargo quantity is required" }),
            gross_volume: z.number().min(1, { message: "Gross volume is required" }).max(60, { message: "Maximum 60 CBM" }),
            gross_volume_unit: z.enum(["cbm"]).default("cbm"),
            cargo_weight: z.number().min(1, { message: "Cargo weight is required" }).max(20000, { message: "Maximum 20,000 kg" }),
            cargo_weight_unit: z.enum(["kg"]).default("kg"),
            package_type: z.enum(["box", "pallet"], { required_error: "Please select a package type" }),
            additional_information: z.string().optional(),
        })),
        supporting_files: z.object({
            cargo_picture: z.boolean().optional(),
            files: z.array(z.any()).optional(),
        }).optional(),
        validity: z.object({
            expires_within: z.enum(["30", "60", "90"], { required_error: "Please select validity period" }),
        }).optional(),
        recommended_services: z.object({
            export_customs: z.boolean().optional(),
            import_customs: z.boolean().optional(),
        }).optional(),
        additional_services: z.object({
            customs_clearance: z.boolean().optional(),
            warehousing: z.boolean().optional(),
            cargo_insurance: z.boolean().optional(),
            palletizing: z.boolean().optional(),
            packing: z.boolean().optional(),
            repacking: z.boolean().optional(),
            trucking_delivery: z.boolean().optional(),
            inspection_quality_control: z.boolean().optional(),
            other: z.boolean().optional(),
            other_specify: z.string().optional(),
            additional_requirements: z.string().optional(),
        }).optional(),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
        })
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            routing: [{
                from_country: '',
                from_port: '',
                pickup_required: false,
                pickup_location: '',
                to_country: '',
                to_port: '',
                delivery_required: false,
                delivery_location: '',
            }],
            commodity_details: [{
                commodity: '',
                dangerous: false,
                dangerous_details: '',
                temperature_control: false,
                temperature_details: '',
                cargo_quantity: 0,
                gross_volume: 0,
                gross_volume_unit: 'cbm',
                cargo_weight: 0,
                cargo_weight_unit: 'kg',
                package_type: 'box',
                additional_information: ''
            }],
            supporting_files: {
                cargo_picture: false,
                files: []
            },
            validity: {
                expires_within: '30'
            },
            recommended_services: {
                export_customs: false,
                import_customs: false
            },
            additional_services: {
                customs_clearance: false,
                warehousing: false,
                cargo_insurance: false,
                palletizing: false,
                packing: false,
                repacking: false,
                trucking_delivery: false,
                inspection_quality_control: false,
                other: false,
                other_specify: '',
                additional_requirements: ''
            },
            company_details: {
                company_name: '',
                contact_person_name: '',
                title: '',
                country_of_origin: '',
                company_email: '',
                phone_number: ''
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


    const handleError = (errors: unknown) => {
        // Log validation errors for debugging
        if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.error("Validation errors:", errors);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">
                {/* Routing Section - Using RoutingCard3 */}
                <RoutingCard3 control={form.control} />

                {/* Commodity Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-6">Commodity Details</h2>
                    
                    <CommodityDetailsList control={form.control} />
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

                {/* Validity */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Validity (optional)</h2>
                    <FormItem>
                        <FormLabel>Expires within</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="validity.expires_within"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <select
                                            className="max-w-[200px] border-2 rounded-xl p-2"
                                            onChange={field.onChange}
                                            value={field.value || ""}
                                        >
                                            <option value="30">30 days</option>
                                            <option value="60">60 days</option>
                                            <option value="90">90 days</option>
                                        </select>
                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Recommended Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Recommended services</h2>
                    <div className="space-y-3">
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="recommended_services.export_customs"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="export_customs"
                                            />
                                            <label htmlFor="export_customs" className="text-sm font-medium">
                                                Standard Export Customs clearance
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
                                    name="recommended_services.import_customs"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="import_customs"
                                            />
                                            <label htmlFor="import_customs" className="text-sm font-medium">
                                                Standard Import Customs clearance
                                            </label>
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Additional Required Services */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Required Services</h2>
                    <p className="text-sm text-gray-600 mb-6">(Please check any additional services you may require.)</p>
                    
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
                                    name="additional_services.warehousing"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="warehousing"
                                            />
                                            <label htmlFor="warehousing" className="text-sm font-medium">
                                                Warehousing
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

                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.palletizing"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="palletizing"
                                            />
                                            <label htmlFor="palletizing" className="text-sm font-medium">
                                                Palletizing
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
                                    name="additional_services.packing"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="packing"
                                            />
                                            <label htmlFor="packing" className="text-sm font-medium">
                                                Packing
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
                                    name="additional_services.repacking"
                                    render={({ field }) => (
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id="repacking"
                                            />
                                            <label htmlFor="repacking" className="text-sm font-medium">
                                                Repacking
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

                        {/* Additional Requirements */}
                        <FormItem>
                            <FormLabel className="text-sm font-medium">Please describe any additional service or special requirement not listed above.</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.additional_requirements"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <textarea
                                                className="w-full min-h-[100px] border-2 rounded-xl p-3"
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

export default LessThanContainerForm;
