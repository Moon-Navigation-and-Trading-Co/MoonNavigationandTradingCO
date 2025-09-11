"use client";

import React, { useState } from 'react';
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useTranslations } from 'next-intl';
import { Plus, Upload, Trash2, Mail, Phone } from 'lucide-react';
import { PhoneInput } from '@/components/phone-input';
import { SearchableCountrySelect } from './searchable-country-select';
import CompanyDetailsCard from './company-details-card';
import RoutingCard0 from './routing-card-0';

// Define the form schema
const formSchema = z.object({
  routing: z.array(z.object({
    from_country: z.string().min(1, { message: "From country is required" }),
    from_port: z.string().min(1, { message: "From port/area is required" }),
    to_country: z.string().min(1, { message: "To country is required" }),
    to_port: z.string().min(1, { message: "To port/area is required" }),
  })),
  dates: z.object({
    effective_date: z.string().min(1, { message: "Effective date is required" }),
    expiry_date: z.string().min(1, { message: "Expiry date is required" }),
  }),
  livestock_details: z.array(z.object({
    type: z.string().min(1, { message: "Type of livestock is required" }),
    quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
    weight_per_animal: z.number().min(0.1, { message: "Weight per animal is required" }),
  })),
  special_handling: z.string().optional(),
  additional_information: z.string().optional(),
  service_contract: z.string().optional(),
  transport_modes: z.object({
    ocean_freight: z.boolean().default(false),
    land_transportation: z.boolean().default(false),
    air_freight: z.boolean().default(false),
  }),
  additional_services: z.object({
    port_handling: z.boolean().default(false),
    customs_clearance: z.boolean().default(false),
    storage_warehousing: z.boolean().default(false),
    inland_freight: z.boolean().default(false),
    inspection_quality: z.boolean().default(false),
    escort_permits: z.boolean().default(false),
    other: z.boolean().default(false),
    other_specify: z.string().optional(),
    additional_requirements: z.string().optional(),
  }),
  insurance: z.object({
    required: z.enum(["yes", "no"]).optional(),
    coverage_details: z.string().optional(),
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
  supporting_files: z.array(z.any()).optional(),
  cargo_lifting_points: z.boolean().optional(),
  show_additional_email: z.boolean().default(false),
  show_additional_phone: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

interface LivestockTransportationFormProps {
  onSubmit?: (formData: FormData) => void;
}

export default function LivestockTransportationForm({ onSubmit }: LivestockTransportationFormProps) {
  const t = useTranslations('Inland-forms');
    const [is_submitting, set_is_submitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
      supporting_files: [],
      cargo_lifting_points: false,
      show_additional_email: false,
      show_additional_phone: false,
    },
  });

  // Field arrays

  const { fields: livestockFields, append: appendLivestock, remove: removeLivestock } = useFieldArray({
    control: form.control,
    name: "livestock_details",
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const maxSize = 20 * 1024 * 1024; // 20MB
      const validTypes = ['application/pdf', 'image/jpeg', 'image/gif', 'image/png', 
        'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
      
      return file.size <= maxSize && validTypes.includes(file.type);
    });
    
    set_uploaded_files([...uploaded_files, ...validFiles]);
  };

  const removeFile = (index: number) => {
    set_uploaded_files(uploaded_files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (values: FormData) => {
    const [is_submitting, set_is_submitting] = useState(false);      };
      
      if (onSubmit) {
        await onSubmit(formDataWithFiles);
      } else {
        console.log('Form data:', formDataWithFiles);
      }
    } finally {
    const [is_submitting, set_is_submitting] = useState(false);    }
  };

  const handleError = (errors: unknown) => {
    // Log validation errors for debugging
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error("Validation errors:", errors);
    }
  };

  const calculateTotalWeight = (quantity: number, weightPerAnimal: number) => {
    if (quantity > 0 && weightPerAnimal > 0) {
      return quantity * weightPerAnimal;
    }
    return 0;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">
        
        {/* Routing Section */}
        <RoutingCard0 control={form.control} />

        {/* Dates Section */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>{t('dates')}</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="grid md:grid-cols-2 gap-5">
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
                          className="max-w-[300px] border-2 rounded-xl"
                          {...field}
                        />
                        {error && <p className="text-red-500">{error.message}</p>}
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
                          className="max-w-[300px] border-2 rounded-xl"
                          {...field}
                        />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
          </div>
        </div>

        {/* Livestock Details Table */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Livestock Details</h1>
          <div className='pt-8 pb-10 p-4 rounded-3xl'>
            <div className="mb-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Total Rows: {livestockFields.length}
              </div>
              <div className="text-sm font-raleway font-medium text-gray-800">
                Total Weight of All Livestock: {(() => {
                  const totalWeight = livestockFields.reduce((sum, _, index) => {
                    const quantity = form.watch(`livestock_details.${index}.quantity`) || 0;
                    const weight = form.watch(`livestock_details.${index}.weight_per_animal`) || 0;
                    return sum + (quantity * weight);
                  }, 0);
                  return totalWeight > 0 ? `${totalWeight.toFixed(1)} kg` : '0 kg';
                })()}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Row #</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Type of Livestock</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Quantity</th>
                    <th className="border border-gray-300 p-3 text-left font-raleway font-medium">Weight per Animal (kg)</th>
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
                                className="border-2 rounded-xl"
                                {...field}
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
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
                                className="text-center border-2 rounded-xl"
                                placeholder="Quantity"
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
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
                                min="0"
                                step="0.1"
                                placeholder="Weight in kg"
                                className="border-2 rounded-xl"
                                {...field}
                                onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
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
                            className="rounded-xl"
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
              className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg"
              onClick={() => appendLivestock({ type: '', quantity: 1, weight_per_animal: 0 })}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Row
            </Button>
          </div>
        </div>

        {/* Special Handling Requirements */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium mb-4'>Special Handling Requirements</h1>
          <div className='px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-10'>
            <FormItem>
              <FormLabel>Special Handling Requirements (e.g., temperature control, specific crates, etc.)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="special_handling"
                  render={({ field }) => (
                    <Textarea
                      className="max-w-[400px] border-2 rounded-xl"
                      placeholder="Describe any special handling requirements for the livestock..."
                      rows={4}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </FormItem>
          </div>
        </div>

        {/* Supporting Files */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium mb-4'>Supporting Files (Optional)</h1>
          <div className='px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-10'>
            <FormItem>
              <FormLabel>
                {t('file')} <span className="text-sm text-gray-500">({t('optional')})</span>
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="supporting_files"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        className="max-w-[240px] border-2 rounded-xl"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                        onChange={(e) => {
                          handleFileUpload(e);
                          field.onChange(e.target.files);
                        }}
                      />
                      {error && <p className="text-red-500">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
              <p className="px-2 text-xs text-gray-500">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
            </FormItem>

            {/* Cargo Picture with Lifting Points Checkbox */}
            <div className="mt-4">
              <Controller
                control={form.control}
                name="cargo_lifting_points"
                render={({ field }) => (
                  <div className="flex gap-2 items-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="cargo_lifting_points"
                    />
                    <label
                      htmlFor="cargo_lifting_points"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I wish to upload cargo picture with lifting points
                    </label>
                  </div>
                )}
              />
            </div>

            {uploaded_files.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Uploaded Files:</h4>
                <ul className="space-y-2">
                  {uploaded_files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-xl">
                      <span className="text-sm">{file.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => removeFile(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="">
          <h1 className='text-xl font-semibold mb-4'>Additional Information</h1>
          <div className='px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-10'>
            <FormItem>
              <FormLabel>Please advise other relevant commercial terms such as loading/discharging rates and Incoterms.</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additional_information"
                  render={({ field }) => (
                    <Textarea
                      className="max-w-[400px] border-2 rounded-xl"
                      placeholder="Enter additional commercial terms and requirements..."
                      rows={4}
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </FormItem>
          </div>
        </div>

        {/* Service Contract */}
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
                      render={({ field }) => (
                        <Input
                          className="w-[300px] border-2 rounded-xl"
                          placeholder="Enter service contract number"
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>
          </FormControl>
        </FormItem>

        {/* Transport Mode */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Transport Mode</h1>
              <div className='p-4'>
                <FormLabel className="text-base font-medium mb-4 block">
                  Preferred Mode of Transport (Check all that apply):
                </FormLabel>
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

        {/* Additional Required Services */}
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
                      render={({ field }) => (
                        <Input
                          placeholder="Please specify other services..."
                          className="ml-6 border-2 rounded-xl max-w-[400px]"
                          {...field}
                        />
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
                      render={({ field }) => (
                        <Textarea
                          placeholder="Describe any additional requirements..."
                          className="max-w-[400px] border-2 rounded-xl"
                          rows={3}
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>
          </FormControl>
        </FormItem>

        {/* Insurance & Liability Coverage */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-semibold mb-4'>Insurance & Liability Coverage</h1>
              <div className='p-4 space-y-4'>
                <FormLabel className="text-base font-medium">Do you require transport insurance?</FormLabel>
                <Controller
                  control={form.control}
                  name="insurance.required"
                  render={({ field }) => (
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
                  )}
                />
                
                {form.watch("insurance.required") === 'yes' && (
                  <div className="mt-4">
                    <FormItem>
                      <FormLabel>Please specify the coverage type and value:</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="insurance.coverage_details"
                          render={({ field }) => (
                            <Textarea
                              placeholder="Describe coverage type and value requirements..."
                              className="max-w-[400px] border-2 rounded-xl"
                              rows={3}
                              {...field}
                            />
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

        <CompanyDetailsCard control={form.control} />

        {/* Submit Button */}
        <div className="text-center">
    const [is_submitting, set_is_submitting] = useState(false);              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : "Submit"}
          </Button>        </div>
      </form>
    </Form>
  );
} 