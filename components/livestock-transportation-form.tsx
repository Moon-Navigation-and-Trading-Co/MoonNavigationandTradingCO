"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useTranslations } from 'next-intl';
import { Plus, Upload, Trash2, Mail, Phone, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PhoneInput } from '@/components/phone-input';
import { SearchableCountrySelect } from './searchable-country-select';
import CompanyDetailsCard from './company-details-card';
import RoutingCard0 from './routing-card-0';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';

import EnhancedSupportingFiles from './enhanced-supporting-files';
// Enhanced form schema with comprehensive validation (matching air freight standards)
const formSchema = z.object({
  routing: z.array(z.object({
    from_country: z.string().min(1, { message: "From country is required" }),
    from_port: z.string().min(1, { message: "From port/area is required" }),
    to_country: z.string().min(1, { message: "To country is required" }),
    to_port: z.string().min(1, { message: "To port/area is required" }),
  })).min(1, { message: "At least one routing entry is required" }),
  
  dates: z.object({
    effective_date: z.string().min(1, { message: "Effective date is required" })
      .refine((date) => {
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      }, { message: "Effective date cannot be in the past" }),
    expiry_date: z.string().min(1, { message: "Expiry date is required" }),
  }).refine((data) => {
    if (data.effective_date && data.expiry_date) {
      return new Date(data.expiry_date) > new Date(data.effective_date);
    }
    return true;
  }, {
    message: "Expiry date must be after effective date",
    path: ["expiry_date"],
  }),

  livestock_details: z.array(z.object({
    type: z.string()
      .min(1, { message: "Livestock type is required" })
      .max(100, { message: "Type description too long" }),
    quantity: z.number()
      .min(1, { message: "Quantity must be at least 1" })
      .max(10000, { message: "Quantity too high" }),
    weight_per_animal: z.number()
      .min(0.1, { message: "Weight must be at least 0.1 kg" })
      .max(5000, { message: "Weight too high" }),
  })).min(1, { message: "At least one livestock entry is required" }),

  special_handling: z.string()
    .max(1000, { message: "Description too long" })
    .optional(),

  additional_information: z.string()
    .max(2000, { message: "Information too long" })
    .optional(),

  service_contract: z.string()
    .max(50, { message: "Contract number too long" })
    .optional(),

  transport_modes: z.object({
    ocean_freight: z.boolean().default(false),
    land_transportation: z.boolean().default(false),
    air_freight: z.boolean().default(false),
  }).refine((data) => {
    return data.ocean_freight || data.land_transportation || data.air_freight;
  }, {
    message: "Please select at least one transport mode",
    path: ["ocean_freight"],
  }),

  additional_services: z.object({
    port_handling: z.boolean().default(false),
    customs_clearance: z.boolean().default(false),
    storage_warehousing: z.boolean().default(false),
    inland_freight: z.boolean().default(false),
    inspection_quality: z.boolean().default(false),
    escort_permits: z.boolean().default(false),
    other: z.boolean().default(false),
    other_specify: z.string()
      .max(200, { message: "Description too long" })
      .optional(),
    additional_requirements: z.string()
      .max(1000, { message: "Requirements too long" })
      .optional(),
  }).refine((data) => {
    if (data.other && !data.other_specify?.trim()) {
      return false;
    }
    return true;
  }, {
    message: "Please specify other services",
    path: ["other_specify"],
  }),

  insurance: z.object({
    required: z.enum(["yes", "no"], { 
      required_error: "Please specify if insurance is required" 
    }).optional(),
    coverage_details: z.string()
      .max(500, { message: "Coverage details too long" })
      .optional(),
  }).refine((data) => {
    if (data.required === "yes" && !data.coverage_details?.trim()) {
      return false;
    }
    return true;
  }, {
    message: "Please provide coverage details",
    path: ["coverage_details"],
  }),

  company_details: z.object({
    company_name: z.string()
      .min(1, { message: "Company name is required" })
      .max(200, { message: "Company name too long" }),
    contact_person_name: z.string()
      .min(1, { message: "Contact person name is required" })
      .max(100, { message: "Name too long" }),
    title: z.string()
      .min(1, { message: "Title is required" })
      .max(100, { message: "Title too long" }),
    country_of_origin: z.string()
      .min(1, { message: "Country is required" }),
    company_email: z.string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
    additional_email: z.string()
      .email({ message: "Please enter a valid email" })
      .optional()
      .or(z.literal("")),
    phone_number: z.string()
      .min(1, { message: "Phone number is required" })
      .max(20, { message: "Phone number too long" }),
    additional_phone_number: z.string()
      .max(20, { message: "Phone number too long" })
      .optional(),
  }),

  supporting_files: z.any().optional(),
  cargo_lifting_points: z.boolean().optional(),
  show_additional_email: z.boolean().default(false),
  show_additional_phone: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

interface LivestockTransportationFormProps {
  onSubmit?: (formData: FormData) => void;
  isSubmitting?: boolean;
}

export default function LivestockTransportationForm({ onSubmit, isSubmitting = false }: LivestockTransportationFormProps) {
  const t = useTranslations('Inland-forms');
  const [is_submitting, set_is_submitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      routing: [{ from_country: '', from_port: '', to_country: '', to_port: '' }],
      dates: {
        effective_date: '',
        expiry_date: '',
      },
      livestock_details: [{ type: '', quantity: 1, weight_per_animal: 0 }],
      special_handling: '',
      additional_information: '',
      service_contract: '',
      transport_modes: {
        ocean_freight: false,
        land_transportation: false,
        air_freight: false,
      },
      additional_services: {
        port_handling: false,
        customs_clearance: false,
        storage_warehousing: false,
        inland_freight: false,
        inspection_quality: false,
        escort_permits: false,
        other: false,
        other_specify: '',
        additional_requirements: '',
      },
      insurance: {
        required: undefined,
        coverage_details: '',
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
      },
      supporting_files: undefined,
      cargo_lifting_points: false,
      show_additional_email: false,
      show_additional_phone: false,
    },
  });

  const { fields: livestockFields, append: appendLivestock, remove: removeLivestock } = useFieldArray({
    control: form.control,
    name: "livestock_details",
  });

  // Enhanced error focusing function
  const focusFirstError = useCallback(() => {
    const errors = form.formState.errors;
    const firstErrorField = Object.keys(errors)[0];
    
    if (firstErrorField && formRef.current) {
      // Handle nested field paths
      let fieldName = firstErrorField;
      if (firstErrorField.includes('.')) {
        const parts = firstErrorField.split('.');
        if (parts[0] === 'livestock_details' && parts[2]) {
          fieldName = `livestock_details.0.${parts[2]}`;
        } else if (parts[0] === 'dates') {
          fieldName = `dates.${parts[1]}`;
        } else if (parts[0] === 'company_details') {
          fieldName = `company_details.${parts[1]}`;
        }
      }
      
      const firstErrorElement = formRef.current.querySelector(`[name="${fieldName}"]`) as HTMLElement;
      if (firstErrorElement) {
        firstErrorElement.focus();
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [form.formState.errors]);

  const handleSubmit = async (values: FormData) => {
    setSubmitError(null);
    setSubmitSuccess(false);
    set_is_submitting(true);
    
    try {
      // Validate total weight doesn't exceed reasonable limits
      const totalWeight = values.livestock_details.reduce(
        (sum, item) => sum + (item.quantity * item.weight_per_animal), 0
      );
      
      if (totalWeight > 50000) { // 50 tons
        throw new Error("Total livestock weight exceeds reasonable shipping limits (50 tons). Please review your entries.");
      }

      if (onSubmit) {
        await onSubmit(values);
        setSubmitSuccess(true);
        toast({
          title: "Form Submitted Successfully",
          description: "Your livestock transportation request has been submitted and will be processed shortly.",
          variant: "default",
        });
      } else {
        console.log('Form data:', values);
        setSubmitSuccess(true);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred while submitting the form. Please try again.';
      setSubmitError(errorMessage);
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      set_is_submitting(false);
    }
  };

  const handleError = useCallback((errors: any) => {
    console.error("Form validation errors:", errors);
    setSubmitError("Please correct the highlighted errors before submitting.");
    
    // Focus on first error field
    setTimeout(focusFirstError, 100);
    
    // Show error toast
    toast({
      title: "Validation Errors",
      description: "Please review and correct the highlighted fields.",
      variant: "destructive",
    });
  }, [focusFirstError]);

  const calculateTotalWeight = useCallback((quantity: number, weightPerAnimal: number) => {
    if (quantity > 0 && weightPerAnimal > 0) {
      return quantity * weightPerAnimal;
    }
    return 0;
  }, []);

  // Auto-save draft functionality (optional enhancement)
  useEffect(() => {
    const subscription = form.watch((data) => {
      // Could save draft to localStorage here
      localStorage.setItem('livestock_form_draft', JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Form {...form}>
      <form 
        ref={formRef}
        onSubmit={form.handleSubmit(handleSubmit, handleError)} 
        className="space-y-8"
        noValidate
      >
        {/* Error Alert */}
        {submitError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        {/* Success Alert */}
        {submitSuccess && (
          <Alert className="border-green-200 bg-green-50 text-green-800">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription>
              Form submitted successfully! You will receive a confirmation email shortly.
            </AlertDescription>
          </Alert>
        )}

        {/* Routing Section */}
        <RoutingCard0 control={form.control} />

        {/* Dates Section with Enhanced Validation */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>{t('dates')}</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="grid md:grid-cols-2 gap-5">
              <FormItem>
                <FormLabel>Effective Date *</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="dates.effective_date"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          type="date"
                          className={`max-w-[300px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                          {...field}
                          min={new Date().toISOString().split('T')[0]}
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
                <FormDescription>Select when you need the service to begin</FormDescription>
              </FormItem>

              <FormItem>
                <FormLabel>Expiry Date *</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="dates.expiry_date"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          type="date"
                          className={`max-w-[300px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                          {...field}
                          min={form.watch('dates.effective_date') || new Date().toISOString().split('T')[0]}
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
                <FormDescription>Select when the service agreement expires</FormDescription>
              </FormItem>
            </div>
          </div>
        </div>

        {/* Enhanced Livestock Details Table */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Livestock Details *</h1>
          <div className='pt-8 pb-10 p-4 rounded-3xl'>
            <div className="mb-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Total Rows: {livestockFields.length}
              </div>
              <div className="text-sm font-raleway font-medium text-gray-800">
                Total Weight: {(() => {
                  const totalWeight = livestockFields.reduce((sum, _, index) => {
                    const quantity = form.watch(`livestock_details.${index}.quantity`) || 0;
                    const weight = form.watch(`livestock_details.${index}.weight_per_animal`) || 0;
                    return sum + (quantity * weight);
                  }, 0);
                  return totalWeight > 0 ? `${totalWeight.toFixed(1)} kg` : '0 kg';
                })()}
              </div>
            </div>
            
            {/* Display validation error for livestock_details array */}
            {form.formState.errors.livestock_details?.message && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{form.formState.errors.livestock_details.message}</AlertDescription>
              </Alert>
            )}

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Row #</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Type of Livestock *</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Quantity *</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Weight per Animal (kg) *</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Total Weight (kg)</th>
                    <th className="border border-gray-300 p-3 text-center font-raleway font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {livestockFields.map((field, index) => (
                    <tr key={field.id}>
                      <td className="border border-gray-300 p-3 text-center font-medium">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 p-3">
                        <Controller
                          control={form.control}
                          name={`livestock_details.${index}.type`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input
                                placeholder="e.g., Cattle, Sheep, Goats"
                                className={`border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                {...field}
                                maxLength={100}
                              />
                              {error && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {error.message}
                                </p>
                              )}
                            </>
                          )}
                        />
                      </td>
                      <td className="border border-gray-300 p-3">
                        <Controller
                          control={form.control}
                          name={`livestock_details.${index}.quantity`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input
                                type="number"
                                min="1"
                                max="10000"
                                className={`text-center border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                placeholder="Quantity"
                                {...field}
                                onChange={(e) => {
                                  const value = parseInt(e.target.value) || 0;
                                  field.onChange(value > 0 ? value : 1);
                                }}
                              />
                              {error && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {error.message}
                                </p>
                              )}
                            </>
                          )}
                        />
                      </td>
                      <td className="border border-gray-300 p-3">
                        <Controller
                          control={form.control}
                          name={`livestock_details.${index}.weight_per_animal`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input
                                type="number"
                                min="0.1"
                                max="5000"
                                step="0.1"
                                placeholder="Weight in kg"
                                className={`border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                {...field}
                                onChange={(e) => {
                                  const value = parseFloat(e.target.value) || 0;
                                  field.onChange(value);
                                }}
                              />
                              {error && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {error.message}
                                </p>
                              )}
                            </>
                          )}
                        />
                      </td>
                      <td className="border border-gray-300 p-3">
                        <div className="font-semibold text-center">
                          {(() => {
                            const quantity = form.watch(`livestock_details.${index}.quantity`) || 0;
                            const weight = form.watch(`livestock_details.${index}.weight_per_animal`) || 0;
                            const total = calculateTotalWeight(quantity, weight);
                            return total > 0 ? total.toFixed(1) : '-';
                          })()}
                        </div>
                      </td>
                      <td className="border border-gray-300 p-3 text-center">
                        {livestockFields.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => removeLivestock(index)}
                            className="rounded-xl text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              type="button"
              className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg hover:bg-primary/90"
              onClick={() => appendLivestock({ type: '', quantity: 1, weight_per_animal: 0 })}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Livestock Row
            </Button>
          </div>
        </div>

        {/* Transport Mode with Enhanced Validation */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Transport Mode *</h1>
              <div className='p-4'>
                <FormLabel className="text-base font-medium mb-4 block">
                  Preferred Mode of Transport (Select at least one):
                </FormLabel>
                {form.formState.errors.transport_modes?.ocean_freight && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{form.formState.errors.transport_modes.ocean_freight.message}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="transport_modes.ocean_freight"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Ocean Freight</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="transport_modes.land_transportation"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Land Transportation (Truck/Trailer)</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="transport_modes.air_freight"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Air Freight</FormLabel>
                  </div>
                </div>
              </div>
            </div>
          </FormControl>
        </FormItem>

        {/* Enhanced Additional Services Section */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Additional Required Services</h1>
              <div className='p-4 space-y-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.port_handling"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Port Handling & Stevedoring</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.customs_clearance"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Customs Clearance</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.storage_warehousing"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Storage & Warehousing</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.inland_freight"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Transport to/from Port (Inland Freight)</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.inspection_quality"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Inspection & Quality Control</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.escort_permits"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Escort or Permits (if applicable)</FormLabel>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="additional_services.other"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Other (Specify):</FormLabel>
                  </div>
                  {form.watch("additional_services.other") && (
                    <Controller
                      control={form.control}
                      name="additional_services.other_specify"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            placeholder="Please specify other services..."
                            className={`ml-6 border-2 rounded-xl max-w-[400px] ${error ? 'border-red-500' : ''}`}
                            maxLength={200}
                            {...field}
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-1 ml-6 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {error.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  )}
                </div>
                <FormItem>
                  <FormLabel>
                    Please describe any additional service or special requirement not listed above.
                  </FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="additional_services.additional_requirements"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Textarea
                            placeholder="Describe any additional requirements..."
                            className={`max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                            rows={3}
                            maxLength={1000}
                            {...field}
                          />
                          {error && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {error.message}
                            </p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">
                            {field.value?.length || 0}/1000 characters
                          </p>
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>
          </FormControl>
        </FormItem>

        {/* Enhanced Insurance Section */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Insurance & Liability Coverage</h1>
              <div className='p-4 space-y-4'>
                <FormLabel className="text-base font-medium">Do you require transport insurance? *</FormLabel>
                <Controller
                  control={form.control}
                  name="insurance.required"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <RadioGroup
                        value={field.value || ""}
                        onValueChange={field.onChange}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" />
                          <FormLabel>Yes</FormLabel>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" />
                          <FormLabel>No</FormLabel>
                        </div>
                      </RadioGroup>
                      {error && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {error.message}
                        </p>
                      )}
                    </>
                  )}
                />
                
                {form.watch("insurance.required") === 'yes' && (
                  <div className="mt-4">
                    <FormItem>
                      <FormLabel>Please specify the coverage type and value: *</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="insurance.coverage_details"
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Textarea
                                placeholder="Describe coverage type and value requirements..."
                                className={`max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                                rows={3}
                                maxLength={500}
                                {...field}
                              />
                              {error && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                  <AlertCircle className="h-3 w-3" />
                                  {error.message}
                                </p>
                              )}
                              <p className="text-xs text-gray-500 mt-1">
                                {field.value?.length || 0}/500 characters
                              </p>
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                )}
              </div>
            </div>
          </FormControl>
        </FormItem>

        {/* Enhanced Special Handling Section */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium mb-4'>Special Handling Requirements</h1>
          <div className='px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-10'>
            <FormItem>
              <FormLabel>Special Handling Requirements (e.g., temperature control, specific crates, etc.)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="special_handling"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Textarea
                        className={`max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                        placeholder="Describe any special handling requirements for the livestock..."
                        rows={4}
                        maxLength={1000}
                        {...field}
                      />
                      {error && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {error.message}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {field.value?.length || 0}/1000 characters
                      </p>
                    </>
                  )}
                />
              </FormControl>
            </FormItem>
          </div>
        </div>
        {/* Enhanced Supporting Files Section */}
        <EnhancedSupportingFiles 
            control={form.control} 
            name="supporting_files" 
            cargoPictureName="cargo_lifting_points" 
            title="Supporting Files (Optional)" 
        />
        {/* Enhanced Additional Information Section */}
        <div className="">
          <h1 className='text-xl font-semibold mb-4'>Additional Information</h1>
          <div className='px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-10'>
            <FormItem>
              <FormLabel>Please advise other relevant commercial terms such as loading/discharging rates and Incoterms.</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additional_information"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Textarea
                        className={`max-w-[400px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                        placeholder="Enter additional commercial terms and requirements..."
                        rows={4}
                        maxLength={2000}
                        {...field}
                      />
                      {error && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {error.message}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        {field.value?.length || 0}/2000 characters
                      </p>
                    </>
                  )}
                />
              </FormControl>
            </FormItem>
          </div>
        </div>

        {/* Enhanced Service Contract Section */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Service Contract</h1>
              <div className='flex gap-5 p-4 items-center'>
                <FormItem>
                  <FormLabel>Service Contract <span className='text-muted-foreground text-xs'>(Optional)</span></FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="service_contract"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            className={`w-[300px] border-2 rounded-xl ${error ? 'border-red-500' : ''}`}
                            placeholder="Enter service contract number"
                            maxLength={50}
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
            </div>
          </FormControl>
        </FormItem>

        <CompanyDetailsCard control={form.control} />

        {/* Enhanced Submit Button */}
        <div className="text-center">
          <Button 
            type="submit" 
            className={`mt-4 w-[200px] ${(isSubmitting || is_submitting) ? "opacity-75 cursor-not-allowed" : ""}`} 
            disabled={isSubmitting || is_submitting}
          >
            {(isSubmitting || is_submitting) ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : "Submit"}
          </Button>
          <p className="text-xs text-gray-500 mt-2">
            By submitting this form, you agree to our terms of service and privacy policy.
          </p>
        </div>
      </form>
    </Form>
  );
} 