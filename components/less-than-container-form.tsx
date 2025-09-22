"use client"
import React, { useState, useCallback, useMemo } from 'react';
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
import EnhancedSupportingFiles from './enhanced-supporting-files';
import DatesCard from './dates-card';
import { Plus, Minus } from 'lucide-react';

// Define form schema
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
        company_name: z.string().min(1, { message: "Company name is required" }),
        contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
        title: z.string().min(1, { message: "Title is required" }),
        country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
        company_email: z.string().email({ message: "Valid email is required" }),
        phone_number: z.string().min(1, { message: "Phone number is required" }),
    })
});

type FormData = z.infer<typeof formSchema>;

// Reusable form field components
const FormField = React.memo<{
    control: any;
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    min?: string;
    max?: string;
    step?: string;
    transform?: (value: string) => any;
    suffix?: string;
    className?: string;
    required?: boolean;
    as?: 'input' | 'textarea';
}>(({ control, name, label, placeholder, type = "text", min, max, step, transform, suffix, className, required, as = 'input' }) => (
    <FormItem>
        <FormLabel>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
        </FormLabel>
        <FormControl>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <div className={suffix ? "flex items-center space-x-2" : ""}>
                            {as === 'textarea' ? (
                                <textarea
                                    className={`border-2 rounded-xl p-3 ${className || 'w-full'}`}
                                    placeholder={placeholder}
                                    {...field}
                                />
                            ) : (
                                <Input
                                    type={type}
                                    min={min}
                                    max={max}
                                    step={step}
                                    className={`border-2 rounded-xl ${className || 'w-full'}`}
                                    placeholder={placeholder}
                                    {...field}
                                    onChange={(e) => {
                                        const value = transform ? transform(e.target.value) : e.target.value;
                                        field.onChange(value);
                                    }}
                                />
                            )}
                            {suffix && <span className="text-sm font-medium whitespace-nowrap">{suffix}</span>}
                        </div>
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                )}
            />
        </FormControl>
    </FormItem>
));

FormField.displayName = 'FormField';

const CheckboxField = React.memo<{
    control: any;
    name: string;
    label: string;
    id: string;
}>(({ control, name, label, id }) => (
    <FormItem>
        <FormControl>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id={id}
                        />
                        <label htmlFor={id} className="text-sm font-medium">
                            {label}
                        </label>
                    </div>
                )}
            />
        </FormControl>
    </FormItem>
));

CheckboxField.displayName = 'CheckboxField';

const ConditionalField = React.memo<{
    control: any;
    watchName: string;
    renderField: (isVisible: boolean) => React.ReactNode;
}>(({ control, watchName, renderField }) => {
    const watchValue = useWatch({ control, name: watchName });
    return <>{renderField(!!watchValue)}</>;
});

ConditionalField.displayName = 'ConditionalField';

const RadioGroupField = React.memo<{
    control: any;
    name: string;
    label: string;
    options: { value: string; label: string }[];
    groupName: string;
}>(({ control, name, label, options, groupName }) => (
    <FormItem>
        <FormLabel>
            {label} <span className="text-red-500 ml-1">*</span>
        </FormLabel>
        <FormControl>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <div className="space-y-2" role="radiogroup" aria-labelledby={`${groupName}-label`}>
                            {options.map((option) => (
                                <div key={option.value} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        id={`${groupName}_${option.value}`}
                                        name={groupName}
                                        value={option.value}
                                        checked={field.value === option.value}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <label htmlFor={`${groupName}_${option.value}`} className="text-sm font-medium">
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                )}
            />
        </FormControl>
    </FormItem>
));

RadioGroupField.displayName = 'RadioGroupField';

// Extracted commodity item component for better performance
const CommodityItem = React.memo<{ 
    control: any; 
    index: number; 
    onRemove?: () => void; 
}>(({ control, index, onRemove }) => (
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-raleway font-medium">Commodity {index + 1}</h3>
            {onRemove && (
                <Button
                    type="button"
                    variant="destructive"
                    onClick={onRemove}
                    className="h-8 px-3 text-sm"
                    aria-label={`Delete commodity ${index + 1}`}
                >
                    <Minus className="w-4 h-4 mr-1" />
                    Delete
                </Button>
            )}
        </div>

        <div className="space-y-6">
            {/* Commodity and Cargo Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={control}
                    name={`commodity_details.${index}.commodity`}
                    label="Commodity"
                    placeholder="Type the commodity"
                    required
                />

                <FormField
                    control={control}
                    name={`commodity_details.${index}.cargo_quantity`}
                    label="Cargo quantity"
                    placeholder="Enter the Quantity"
                    type="number"
                    min="1"
                    required
                    transform={(value) => parseInt(value) || 0}
                />
            </div>

            {/* Dangerous Cargo */}
            <CheckboxField
                control={control}
                name={`commodity_details.${index}.dangerous`}
                label="This cargo is considered dangerous"
                id={`dangerous_${index}`}
            />

            {/* Conditional Dangerous Details */}
            <ConditionalField
                control={control}
                watchName={`commodity_details.${index}.dangerous`}
                renderField={(isVisible) => isVisible && (
                    <div className="ml-6">
                        <FormField
                            control={control}
                            name={`commodity_details.${index}.dangerous_details`}
                            label="Please insert details."
                            placeholder="Enter dangerous cargo details"
                            className="max-w-[400px]"
                        />
                    </div>
                )}
            />

            {/* Temperature Control */}
            <CheckboxField
                control={control}
                name={`commodity_details.${index}.temperature_control`}
                label="This Cargo requires temperature control"
                id={`temperature_control_${index}`}
            />

            {/* Conditional Temperature Details */}
            <ConditionalField
                control={control}
                watchName={`commodity_details.${index}.temperature_control`}
                renderField={(isVisible) => isVisible && (
                    <div className="ml-6">
                        <FormField
                            control={control}
                            name={`commodity_details.${index}.temperature_details`}
                            label="Please insert details."
                            placeholder="Enter temperature control details"
                            className="max-w-[400px]"
                        />
                    </div>
                )}
            />

            {/* Volume and Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={control}
                    name={`commodity_details.${index}.gross_volume`}
                    label="Gross volume"
                    placeholder="Enter volume"
                    type="number"
                    min="0"
                    max="60"
                    step="0.01"
                    transform={(value) => parseFloat(value) || 0}
                    suffix="Cbm (max 60cbm)"
                    required
                />

                <FormField
                    control={control}
                    name={`commodity_details.${index}.cargo_weight`}
                    label="Cargo weight"
                    placeholder="Enter weight"
                    type="number"
                    min="0"
                    max="20000"
                    step="0.01"
                    transform={(value) => parseFloat(value) || 0}
                    suffix="Kg (max 20,000kg)"
                    required
                />
            </div>

            {/* Package Type */}
            <RadioGroupField
                control={control}
                name={`commodity_details.${index}.package_type`}
                label="Package Type"
                options={[
                    { value: 'box', label: 'Box' },
                    { value: 'pallet', label: 'Pallet' }
                ]}
                groupName={`package_type_${index}`}
            />

            {/* Additional Information */}
            <FormField
                control={control}
                name={`commodity_details.${index}.additional_information`}
                label="Additional Information"
                placeholder="Add any additional information"
                as="textarea"
                className="w-full min-h-[100px]"
            />
        </div>
    </div>
));

CommodityItem.displayName = 'CommodityItem';

// Optimized Commodity Details List Component
const CommodityDetailsList = React.memo<{ control: any }>(({ control }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "commodity_details",
    });

    // Watch all commodity details for calculations
    const commodityDetails = useWatch({
        control,
        name: "commodity_details",
    });

    // Memoized calculations to prevent unnecessary recalculations
    const { totalVolume, totalWeight } = useMemo(() => {
        if (!commodityDetails) return { totalVolume: 0, totalWeight: 0 };
        
        const volume = commodityDetails.reduce((sum: number, item: any) => 
            sum + (parseFloat(item?.gross_volume) || 0), 0
        );
        const weight = commodityDetails.reduce((sum: number, item: any) => 
            sum + (parseFloat(item?.cargo_weight) || 0), 0
        );
        
        return { totalVolume: volume, totalWeight: weight };
    }, [commodityDetails]);

    const addNewCommodity = useCallback(() => {
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
    }, [append]);

    // Memoized remove handler to prevent recreation
    const createRemoveHandler = useCallback((index: number) => () => {
        remove(index);
    }, [remove]);

    return (
        <div className="space-y-6">
            {fields.map((field, index) => (
                <CommodityItem 
                    key={field.id} 
                    control={control} 
                    index={index} 
                    onRemove={fields.length > 1 ? createRemoveHandler(index) : undefined}
                />
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
                    aria-label="Add new commodity details"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Additional Commodity / Cargo Details
                </Button>
            </div>
        </div>
    );
});

CommodityDetailsList.displayName = 'CommodityDetailsList';

// Main form component
const LessThanContainerForm: React.FC<{ onSubmit: (data: FormData) => Promise<void> }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormData>({
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

    const handleSubmit = useCallback(async (values: FormData) => {
        setIsSubmitting(true);
        try {
            await onSubmit(values);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    }, [onSubmit]);

    const handleError = useCallback((errors: any) => {
        if (process.env.NODE_ENV === 'development') {
            console.error("Validation errors:", errors);
        }
    }, []);

    // Additional services configuration
    const additionalServices = useMemo(() => [
        { name: 'customs_clearance', label: 'Customs Clearance' },
        { name: 'warehousing', label: 'Warehousing' },
        { name: 'cargo_insurance', label: 'Cargo Insurance' },
        { name: 'palletizing', label: 'Palletizing' },
        { name: 'packing', label: 'Packing' },
        { name: 'repacking', label: 'Repacking' },
        { name: 'trucking_delivery', label: 'Trucking / Inland Delivery' },
        { name: 'inspection_quality_control', label: 'Inspection & Quality Control' },
    ], []);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">
                {/* Routing Section */}
                <RoutingCard3 control={form.control} />

                {/* Commodity Details */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-6">Commodity Details</h2>
                    <CommodityDetailsList control={form.control} />
                </section>
                {/* Supporting Files */}
                <EnhancedSupportingFiles 
                    control={form.control} 
                    name="supporting_files.files"
                    cargoPictureName="supporting_files.cargo_picture"
                />
                {/* Validity */}
                <section className="bg-white rounded-lg shadow-md p-6">
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
                                            aria-label="Select validity period"
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
                </section>

                {/* Recommended Services */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Recommended services</h2>
                    <div className="space-y-3">
                        <CheckboxField
                            control={form.control}
                            name="recommended_services.export_customs"
                            label="Standard Export Customs clearance"
                            id="export_customs"
                        />
                        <CheckboxField
                            control={form.control}
                            name="recommended_services.import_customs"
                            label="Standard Import Customs clearance"
                            id="import_customs"
                        />
                    </div>
                </section>

                {/* Additional Required Services */}
                <section className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-raleway font-medium mb-4">Additional Required Services</h2>
                    <p className="text-sm text-gray-600 mb-6">(Please check any additional services you may require.)</p>
                    
                    <div className="space-y-4">
                        {additionalServices.map((service) => (
                            <CheckboxField
                                key={service.name}
                                control={form.control}
                                name={`additional_services.${service.name}`}
                                label={service.label}
                                id={service.name}
                            />
                        ))}

                        <CheckboxField
                            control={form.control}
                            name="additional_services.other"
                            label="Other (Specify):"
                            id="other"
                        />

                        <ConditionalField
                            control={form.control}
                            watchName="additional_services.other"
                            renderField={(isVisible) => isVisible && (
                                <div className="ml-6">
                                    <FormField
                                        control={form.control}
                                        name="additional_services.other_specify"
                                        label=""
                                        placeholder="Please specify other service"
                                        className="max-w-[400px]"
                                    />
                                </div>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="additional_services.additional_requirements"
                            label="Please describe any additional service or special requirement not listed above."
                            placeholder="Describe any additional services or special requirements..."
                            as="textarea"
                            className="w-full min-h-[100px]"
                        />
                    </div>
                </section>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="mt-4 w-[200px]"
                    aria-label={isSubmitting ? "Submitting form..." : "Submit form"}
                >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white" aria-hidden="true"></div>
                            <span>Submitting...</span>
                        </div>
                    ) : "Submit"}
                </Button>
            </form>
        </Form>
    );
};

export default LessThanContainerForm;
