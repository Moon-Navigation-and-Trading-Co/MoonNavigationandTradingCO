"use client"
import React from 'react';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import PortCard from './port-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import { CircleMinus, Plus } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import EnhancedSupportingFiles from './enhanced-supporting-files';

// Define spare part schema
const sparePartSchema = z.object({
    type: z.string().min(1, "Type is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    total_weight: z.number().min(0.1, "Weight must be greater than 0"),
    dimension_unit: z.enum(['meters', 'cm']).default('cm'),
    length: z.number().min(0.1, "Length must be greater than 0").optional(),
    width: z.number().min(0.1, "Width must be greater than 0").optional(),
    height: z.number().min(0.1, "Height must be greater than 0").optional(),
    total_cbm: z.number().min(0, "CBM must be greater than or equal to 0"),
    input_method: z.enum(['dimensions', 'cbm']).default('dimensions'),
    packing_type: z.enum(['crate', 'box', 'pallet', 'other']),
    packing_type_other: z.string().optional(),
    urgency: z.enum(['normal', 'urgent']),
});

interface TransitSparePartsFormProps {
    onSubmit: (data: any) => void;
    isSubmitting?: boolean;
}

const TransitSparePartsForm: React.FC<TransitSparePartsFormProps> = ({ 
    onSubmit, 
    isSubmitting = false 
}) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema
    const formSchema = z.object({
        port: z.object({
            name: z.string().min(1, { message: t("Required") }),
        }),
        vessel: z.object({
            name: z.string().min(1, { message: t("Required") }),
            imo: z.coerce.number().min(1000000, { message: "IMO must be 7 digits" }).max(9999999, { message: "IMO must be 7 digits" }),
            type: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            ship_gross_tonnage: z.string().min(1, { message: t("Required") }),
            ship_net_tonnage: z.string().min(1, { message: t("Required") }),
            deadweight: z.string().min(1, { message: t("Required") }),
            draft: z.string().min(1, { message: t("Required") }),
            length: z.coerce.number().min(1, { message: t("Required") }),
            location: z.enum(['at_anchor', 'at_berth', 'suez_canal_passage']).optional(),
            port_of_crew_change: z.string().optional(),
            eta: z.string().optional(),
            etd: z.string().optional(),
            airport_pickup: z.string().optional(),
            special_requests: z.string().optional(),
            supporting_files: z.any().optional(),
        }),
        spare_parts: z.array(sparePartSchema).min(1, "At least one spare part is required").optional(),
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

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            port: {
                name: '',
            },
            vessel: {
                name: '',
                imo: 0,
                type: '',
                flag: '',
                ship_gross_tonnage: '',
                ship_net_tonnage: '',
                deadweight: '',
                draft: '',
                length: 0,
                location: undefined,
                port_of_crew_change: '',
                eta: '',
                etd: '',
                airport_pickup: '',
                special_requests: '',
                supporting_files: [],
            },
            spare_parts: [{
                type: '',
                quantity: 1,
                total_weight: 0,
                dimension_unit: 'cm',
                length: 0,
                width: 0,
                height: 0,
                total_cbm: 0,
                input_method: 'dimensions',
                packing_type: 'crate',
                packing_type_other: '',
                urgency: 'normal',
            }],
            company_details: {
                company_name: '',
                contact_person_name: '',
                title: '',
                country_of_origin: '',
                company_email: '',
                additional_email: '',
                phone_number: '',
                additional_phone_number: '',
            },
        }
    });

    const { fields: sparePartsFields, append: appendSparePart, remove: removeSparePart } = useFieldArray({
        control: form.control,
        name: "spare_parts",
    });

    // Auto-calculate CBM function
    const calculateCBM = (index: number) => {
        const length = form.getValues(`spare_parts.${index}.length`) || 0;
        const width = form.getValues(`spare_parts.${index}.width`) || 0;
        const height = form.getValues(`spare_parts.${index}.height`) || 0;
        const unit = form.getValues(`spare_parts.${index}.dimension_unit`);
        const multiplier = unit === 'cm' ? 0.000001 : 1; // Convert cm to m³
        return length * width * height * multiplier;
    };

    // Type-safe submit handler
    const handleSubmit = (values: FormData) => {
        console.log("Form submitted successfully:", values);
        onSubmit(values);
    };

    const handleError = (errors: unknown) => {
        if (process.env.NODE_ENV === 'development') {
            console.error("Validation errors:", errors);
        }
    };

    // Calculate totals
    const totalCBM = sparePartsFields.reduce((total, field, index) => {
        const cbm = form.getValues(`spare_parts.${index}.total_cbm`) || 0;
        return total + cbm;
    }, 0);

    const totalWeight = sparePartsFields.reduce((total, field, index) => {
        const weight = form.getValues(`spare_parts.${index}.total_weight`) || 0;
        return total + weight;
    }, 0);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">

                {/* Vessel Details */}
                <div className="">
                    <h1 className='text-xl font-raleway font-medium'>{tt('vessel')}</h1>
                    <div className='pt-8 flex flex-col gap-5 p-4'>

                        {/* Port Name and Vessel Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormItem>
                                <FormLabel htmlFor="port.name">{tt('port-name')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="port.name"
                                        render={({ field }) => (
                                            <Input 
                                                id="port.name" 
                                                className="border-2 rounded-xl" 
                                                placeholder="Port Name" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>{tt('vessel-name')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.name"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="Vessel Name" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </div>

                        {/* Vessel Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <FormItem>
                                <FormLabel>{tt('vessel-imo')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.imo"
                                        render={({ field }) => (
                                            <Input
                                                className="border-2 rounded-xl no-spinner"
                                                type="number"
                                                placeholder="7-digit IMO Number"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Vessel Type</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.type"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="e.g., Bulk Carrier" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Flag</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.flag"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="Flag State" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Gross Tonnage</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.ship_gross_tonnage"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="Gross Tonnage" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Net Tonnage</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.ship_net_tonnage"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="Net Tonnage" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                {form.formState.errors?.vessel?.ship_net_tonnage && (
                                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.vessel?.ship_net_tonnage?.message as string}</p>
                                )}
                            </FormItem>

                            <FormItem>
                                <FormLabel>Deadweight</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.deadweight"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="Deadweight (MT)" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Draft</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.draft"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                placeholder="Draft (m)" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>

                            <FormItem>
                                <FormLabel>Length</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.length"
                                        render={({ field }) => (
                                            <Input
                                                className="border-2 rounded-xl"
                                                type="number"
                                                placeholder="Length (m)"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </div>

                        {/* Port of Crew Change */}
                        <FormItem>
                            <FormLabel>Port of Crew Change (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.port_of_crew_change"
                                    render={({ field }) => (
                                        <Input 
                                            className="max-w-[300px] border-2 rounded-xl" 
                                            placeholder="Port Name" 
                                            {...field} 
                                        />
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* ETA and ETD Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px]">
                            <FormItem>
                                <FormLabel>ETA (Estimated Time of Arrival)</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.eta"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                type="date" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            <FormItem>
                                <FormLabel>ETD (Estimated Time of Departure)</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.etd"
                                        render={({ field }) => (
                                            <Input 
                                                className="border-2 rounded-xl" 
                                                type="date" 
                                                {...field} 
                                            />
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Vessel Location Radio Buttons */}
                        <div className="pt-5">
                            <h3 className="text-lg font-raleway font-medium mb-3">Vessel Location</h3>
                            <FormItem>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="vessel.location"
                                        render={({ field }) => (
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value || ""}
                                                className="flex flex-col space-y-2"
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
                                        )}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </div>

                        {/* Airport/Seaport Pickup Name */}
                        <FormItem>
                            <FormLabel>Airport/Seaport Pickup Name (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.airport_pickup"
                                    render={({ field }) => (
                                        <Input 
                                            className="max-w-[400px] border-2 rounded-xl" 
                                            placeholder="Please insert airport/seaport pickup name" 
                                            {...field} 
                                        />
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Spare Parts Details Table */}
                <div className="space-y-6">
                    <h3 className="text-lg font-raleway font-medium">Spare Parts Details (Attach list if necessary)</h3>
                    
                    {/* Mobile Swipe Indicator */}
                    <div className="md:hidden flex items-center justify-center gap-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg border border-blue-200">
                        <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span>Swipe to see all columns</span>
                        <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <Table className="border rounded-lg min-w-[800px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[60px]">Row</TableHead>
                                <TableHead className="w-[150px]">Type</TableHead>
                                <TableHead className="w-[100px]">Quantity</TableHead>
                                <TableHead className="w-[120px]">Total Weight (kg)</TableHead>
                                <TableHead className="w-[250px]">Dimensions/CBM</TableHead>
                                <TableHead className="w-[100px]">Unit</TableHead>
                                <TableHead className="w-[150px]">Packing Type</TableHead>
                                <TableHead className="w-[100px]">Urgency</TableHead>
                                <TableHead className="w-[80px]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sparePartsFields.map((field, index) => (
                                <TableRow key={field.id}>
                                    <TableCell className="text-center font-medium">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            control={form.control}
                                            name={`spare_parts.${index}.type`}
                                            render={({ field }) => (
                                                <Input
                                                    placeholder="Enter type"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            control={form.control}
                                            name={`spare_parts.${index}.quantity`}
                                            render={({ field }) => (
                                                <Input
                                                    type="number"
                                                    min="1"
                                                    className="w-24"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            control={form.control}
                                            name={`spare_parts.${index}.total_weight`}
                                            render={({ field }) => (
                                                <Input
                                                    type="number"
                                                    min="0.1"
                                                    step="0.1"
                                                    className="w-24"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="space-y-2">
                                            {/* Input Method Selection */}
                                            <Controller
                                                control={form.control}
                                                name={`spare_parts.${index}.input_method`}
                                                render={({ field }) => (
                                                    <RadioGroup
                                                        value={field.value || ""}
                                                        onValueChange={field.onChange}
                                                        className="flex space-x-4"
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="dimensions" id={`input-dimensions-${index}`} />
                                                            <label htmlFor={`input-dimensions-${index}`} className="text-xs">Dimensions</label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="cbm" id={`input-cbm-${index}`} />
                                                            <label htmlFor={`input-cbm-${index}`} className="text-xs">CBM</label>
                                                        </div>
                                                    </RadioGroup>
                                                )}
                                            />
                                            
                                            {/* Dimensions Input */}
                                            {form.watch(`spare_parts.${index}.input_method`) === 'dimensions' && (
                                                <div className="space-y-1">
                                                    <div className="flex gap-1">
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-xs font-medium text-gray-600">(L)</span>
                                                            <Controller
                                                                control={form.control}
                                                                name={`spare_parts.${index}.length`}
                                                                render={({ field }) => (
                                                                    <Input
                                                                        type="number"
                                                                        min="0.1"
                                                                        step="0.1"
                                                                        className="w-24"
                                                                        placeholder="L"
                                                                        {...field}
                                                                        onChange={(e) => {
                                                                            const value = parseFloat(e.target.value) || 0;
                                                                            field.onChange(value);
                                                                            const cbm = calculateCBM(index);
                                                                            form.setValue(`spare_parts.${index}.total_cbm`, cbm);
                                                                        }}
                                                                    />
                                                                )}
                                                            />
                                                        </div>
                                                        <span className="text-gray-500 self-center">×</span>
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-xs font-medium text-gray-600">(W)</span>
                                                            <Controller
                                                                control={form.control}
                                                                name={`spare_parts.${index}.width`}
                                                                render={({ field }) => (
                                                                    <Input
                                                                        type="number"
                                                                        min="0.1"
                                                                        step="0.1"
                                                                        className="w-24"
                                                                        placeholder="W"
                                                                        {...field}
                                                                        onChange={(e) => {
                                                                            const value = parseFloat(e.target.value) || 0;
                                                                            field.onChange(value);
                                                                            const cbm = calculateCBM(index);
                                                                            form.setValue(`spare_parts.${index}.total_cbm`, cbm);
                                                                        }}
                                                                    />
                                                                )}
                                                            />
                                                        </div>
                                                        <span className="text-gray-500 self-center">×</span>
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-xs font-medium text-gray-600">(H)</span>
                                                            <Controller
                                                                control={form.control}
                                                                name={`spare_parts.${index}.height`}
                                                                render={({ field }) => (
                                                                    <Input
                                                                        type="number"
                                                                        min="0.1"
                                                                        step="0.1"
                                                                        className="w-24"
                                                                        placeholder="H"
                                                                        {...field}
                                                                        onChange={(e) => {
                                                                            const value = parseFloat(e.target.value) || 0;
                                                                            field.onChange(value);
                                                                            const cbm = calculateCBM(index);
                                                                            form.setValue(`spare_parts.${index}.total_cbm`, cbm);
                                                                        }}
                                                                    />
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* CBM Input */}
                                            {form.watch(`spare_parts.${index}.input_method`) === 'cbm' && (
                                                <Controller
                                                    control={form.control}
                                                    name={`spare_parts.${index}.total_cbm`}
                                                    render={({ field }) => (
                                                        <Input
                                                            type="number"
                                                            min="0"
                                                            step="0.01"
                                                            className="w-24"
                                                            placeholder="CBM"
                                                            {...field}
                                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        />
                                                    )}
                                                />
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            control={form.control}
                                            name={`spare_parts.${index}.dimension_unit`}
                                            render={({ field }) => (
                                                <RadioGroup
                                                    value={field.value || ""}
                                                    onValueChange={(value) => {
                                                        field.onChange(value);
                                                        form.setValue(`spare_parts.${index}.total_cbm`, calculateCBM(index));
                                                    }}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="cm" id={`unit-cm-${index}`} />
                                                        <label htmlFor={`unit-cm-${index}`} className="text-xs">cm</label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="meters" id={`unit-meters-${index}`} />
                                                        <label htmlFor={`unit-meters-${index}`} className="text-xs">m</label>
                                                    </div>
                                                </RadioGroup>
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className="space-y-2">
                                            <Controller
                                                control={form.control}
                                                name={`spare_parts.${index}.packing_type`}
                                                render={({ field }) => (
                                                    <RadioGroup
                                                        value={field.value || ""}
                                                        onValueChange={field.onChange}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="crate" id={`packing-crate-${index}`} />
                                                            <label htmlFor={`packing-crate-${index}`} className="text-xs">Crate</label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="box" id={`packing-box-${index}`} />
                                                            <label htmlFor={`packing-box-${index}`} className="text-xs">Box</label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="pallet" id={`packing-pallet-${index}`} />
                                                            <label htmlFor={`packing-pallet-${index}`} className="text-xs">Pallet</label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="other" id={`packing-other-${index}`} />
                                                            <label htmlFor={`packing-other-${index}`} className="text-xs">Other</label>
                                                        </div>
                                                    </RadioGroup>
                                                )}
                                            />
                                            {form.watch(`spare_parts.${index}.packing_type`) === 'other' && (
                                                <Controller
                                                    control={form.control}
                                                    name={`spare_parts.${index}.packing_type_other`}
                                                    render={({ field }) => (
                                                        <Input
                                                            placeholder="Please specify"
                                                            className="w-full text-xs"
                                                            {...field}
                                                        />
                                                    )}
                                                />
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Controller
                                            control={form.control}
                                            name={`spare_parts.${index}.urgency`}
                                            render={({ field }) => (
                                                <RadioGroup
                                                    value={field.value || ""}
                                                    onValueChange={field.onChange}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="normal" id={`urgency-normal-${index}`} />
                                                        <label htmlFor={`urgency-normal-${index}`} className="text-xs">Normal</label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <RadioGroupItem value="urgent" id={`urgency-urgent-${index}`} />
                                                        <label htmlFor={`urgency-urgent-${index}`} className="text-xs">Urgent</label>
                                                    </div>
                                                </RadioGroup>
                                            )}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => removeSparePart(index)}
                                            className="text-red-500 hover:text-red-700 p-2"
                                            disabled={sparePartsFields.length === 1}
                                        >
                                            <CircleMinus className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </div>

                    <div className="flex justify-between items-center">
                        <Button
                            type="button"
                            onClick={() => appendSparePart({
                                type: '',
                                quantity: 1,
                                total_weight: 0,
                                dimension_unit: 'cm',
                                length: 0,
                                width: 0,
                                height: 0,
                                total_cbm: 0,
                                input_method: 'dimensions',
                                packing_type: 'crate',
                                packing_type_other: '',
                                urgency: 'normal',
                            })}
                            className="flex items-center gap-2"
                        >
                            <Plus className="h-4 w-4" />
                            Add Row
                        </Button>
                        
                        <div className="text-right space-y-1">
                            <p className="text-sm font-medium text-gray-700">
                                Total CBM: {totalCBM.toFixed(3)} m³
                            </p>
                            <p className="text-sm font-medium text-gray-700">
                                Total Weight: {totalWeight.toFixed(2)} kg
                            </p>
                        </div>
                    </div>
                </div>

                {/* Supporting Files */}
                <EnhancedSupportingFiles 
                    control={form.control} 
                    name="vessel.supporting_files" 
                    showCargoPicture={false} 
                    title="Supporting Files (Optional)" 
                />                {/* Additional Information Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-raleway font-medium">Additional Information</h3>
                    
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <FormLabel>Special Requests / Notes:</FormLabel>
                            <Controller
                                control={form.control}
                                name="vessel.special_requests"
                                render={({ field }) => (
                                    <Textarea
                                        placeholder="Enter any special requests or notes..."
                                        className="min-h-[120px] max-w-[600px]"
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>                {/* Company Details */}
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

export default TransitSparePartsForm;