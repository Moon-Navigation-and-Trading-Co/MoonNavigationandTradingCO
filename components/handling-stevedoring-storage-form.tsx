"use client";

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import ItemizedTable from './itemized-table';
import ConsolidatedForm from './consolidated-form';
import CompanyDetailsCard from './company-details-card';
import FileUpload from './file-upload';

import EnhancedSupportingFiles from './enhanced-supporting-files';
// Define the form schema with conditional validation
const formSchema = z.object({
  import_export: z.enum(['import', 'export']),
  port_airport: z.string().min(1, { message: "Port/Airport is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  
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
  
  additional_info: z.string().optional(),
  commercial_terms: z.string().optional(),
  
  effective_date: z.string().min(1, { message: "Effective date is required" }),
  expiry_date: z.string().min(1, { message: "Expiry date is required" }),
  service_contract: z.string().optional(),
  
  handling_stevedoring: z.boolean(),
  loading_cargo: z.boolean(),
  discharging_cargo: z.boolean(),
  lashing_cargo: z.boolean(),
  unlashing_cargo: z.boolean(),
  port_handling_stevedoring: z.boolean(),
  cargo_reception_delivery: z.boolean(),
  reception_before_shipment: z.boolean(),
  reception_after_discharge: z.boolean(),
  storage_warehousing: z.boolean(),
  temporary_storage: z.boolean(),
  handling_requirements: z.string().optional(),
  
  additional_services: z.object({
    crane_heavy_lift: z.boolean(),
    customs_clearance: z.boolean(),
    transport_to_from_port: z.boolean(),
    inspection_quality_control: z.boolean(),
    escort_permits: z.boolean(),
    engineering_support: z.boolean(),
    other: z.boolean(),
    other_specify: z.string().optional(),
    additional_requirements: z.string().optional(),
  }),
  
  supporting_files: z.array(z.instanceof(File)).optional(),
  
  company_details: z.object({
    company_name: z.string().min(1, { message: "Company name is required" }),
    contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
    company_email: z.string().email({ message: "Valid email is required" }),
    additional_email: z.string().optional(),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    additional_phone_number: z.string().optional(),
  }),
}).refine((data) => {
  // Conditional validation: require supporting_files for consolidated mode
  if (data.entry_mode === 'consolidated') {
    return data.supporting_files && data.supporting_files.length > 0;
  }
  return true;
}, {
  message: "Supporting files are required for Consolidated Entry",
  path: ["supporting_files"]
}).refine((data) => {
  // Ensure itemized_data is required when entry_mode is itemized
  if (data.entry_mode === 'itemized') {
    return data.itemized_data && data.itemized_data.length > 0;
  }
  return true;
}, {
  message: "At least one item is required for Itemized Entry",
  path: ["itemized_data"]
}).refine((data) => {
  // Ensure consolidated_data is required when entry_mode is consolidated
  if (data.entry_mode === 'consolidated') {
    return data.consolidated_data;
  }
  return true;
}, {
  message: "Consolidated data is required for Consolidated Entry",
  path: ["consolidated_data"]
});

type FormData = z.infer<typeof formSchema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function HandlingStevedoringStorageForm({ onSubmit }: Props) {
    const [is_submitting, set_is_submitting] = useState(false);
    const [entry_mode, set_entry_mode] = useState<'itemized' | 'consolidated'>('itemized');
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      import_export: 'import',
      port_airport: '',
      location: '',
      
      entry_mode: 'itemized',
      itemized_data: [{
        commodity: '',
        packaging_type: 'pallets',
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
      }],
      consolidated_data: undefined,
      handling_stevedoring: false,
      loading_cargo: false,
      discharging_cargo: false,
      lashing_cargo: false,
      unlashing_cargo: false,
      port_handling_stevedoring: false,
      cargo_reception_delivery: false,
      reception_before_shipment: false,
      reception_after_discharge: false,
      storage_warehousing: false,
      temporary_storage: false,
      additional_services: {
        crane_heavy_lift: false,
        customs_clearance: false,
        transport_to_from_port: false,
        inspection_quality_control: false,
        escort_permits: false,
        engineering_support: false,
        other: false,
        other_specify: '',
        additional_requirements: '',
      },
      supporting_files: [],
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
      additional_info: '',
      commercial_terms: '',
      effective_date: '',
      expiry_date: '',
      service_contract: '',
    }
  });

  const handleSubmit = async (values: FormData) => {
    set_is_submitting(true);
    try {
      // Clean up data before submission - only send relevant data
      const cleanedData: FormData = {
        ...values,
        // Only include itemized_data if mode is itemized
        itemized_data: values.entry_mode === 'itemized' ? values.itemized_data : undefined,
        // Only include consolidated_data if mode is consolidated
        consolidated_data: values.entry_mode === 'consolidated' ? values.consolidated_data : undefined,
      };
      
      if (onSubmit) {
        await onSubmit(cleanedData);
      }
      console.log("Handling Stevedoring Storage Form Data:", cleanedData);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      set_is_submitting(false);
    }
  };

  const handleModeChange = (mode: 'itemized' | 'consolidated') => {
    set_entry_mode(mode);
    form.setValue('entry_mode', mode);
    
    // Clear the data for the mode that's not being used
    if (mode === 'itemized') {
      form.setValue('consolidated_data', undefined);
      // Clear supporting files requirement for itemized mode
      form.setValue('supporting_files', []);
      // Ensure itemized data has at least one blank row
      if (!form.getValues('itemized_data') || form.getValues('itemized_data')?.length === 0) {
        form.setValue('itemized_data', [{
          commodity: '',
          packaging_type: 'pallets',
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
        }]);
      }
    } else {
      // consolidated
      form.setValue('itemized_data', undefined);
      if (!form.getValues('consolidated_data')) {
        form.setValue('consolidated_data', {
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
          special_handling: '',
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-10">
        {/* Basic Information */}
        <div className="">
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {/* Import/Export Selection */}
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="import"
                  value="import"
                  {...form.register('import_export')}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="import" className="text-base font-raleway font-medium">Import</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="export"
                  value="export"
                  {...form.register('import_export')}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="export" className="text-base font-raleway font-medium">Export</Label>
              </div>
            </div>

            {/* Port/Airport and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormItem>
                <FormLabel className="text-sm font-raleway font-medium">Port / Airport:</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="port_airport"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="Enter port or airport"
                          className={`mt-2 max-w-[300px] ${error ? 'border-red-500' : ''}`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel className="text-sm font-raleway font-medium">Location:</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="location"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="Insert Location"
                          className={`mt-2 max-w-[300px] ${error ? 'border-red-500' : ''}`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
          </div>
        </div>

        {/* Entry Mode Selection */}
        <Card>
          <CardContent>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={entry_mode === 'itemized' ? 'default' : 'outline'}
                  onClick={() => handleModeChange('itemized')}
                  className="flex-1"
                >
                  Itemized Entry by Commodity
                </Button>
                <Button
                  type="button"
                  variant={entry_mode === 'consolidated' ? 'default' : 'outline'}
                  onClick={() => handleModeChange('consolidated')}
                  className="flex-1"
                >
                  Consolidated Entry for Multiple Commodities
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cargo Entry Section */}
        {entry_mode === 'itemized' ? (
          <>
            <ItemizedTable control={form.control} />
            
            {/* Additional Information */}
            <div className="">
              <h1 className='text-xl font-raleway font-medium'>Additional Information</h1>
              <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Additional Information:</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="additional_info"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Textarea
                            {...field}
                            placeholder="Please provide any additional information about your cargo..."
                            className={`mt-2 max-w-[400px] ${error ? 'border-red-500' : ''}`}
                            rows={4}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Commercial Terms:</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="commercial_terms"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Textarea
                            {...field}
                            placeholder="Please advise other relevant commercial terms such as loading/discharging rates and Incoterms."
                            className={`mt-2 max-w-[400px] ${error ? 'border-red-500' : ''}`}
                            rows={3}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>

            {/* Supporting Files Section - Optional for Itemized */}
            <EnhancedSupportingFiles 
                control={form.control} 
                name="supporting_files" 
                showCargoPicture={false} 
                title="Supporting Files (Optional)" 
            />          </>
        ) : (
          <>
            <ConsolidatedForm control={form.control} />
            
            {/* Supporting Files Section - Mandatory for Consolidated */}
            <EnhancedSupportingFiles 
                control={form.control} 
                name="supporting_files" 
                showCargoPicture={false} 
                title="Supporting Files *" 
                description="Max total size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint. * Supporting files are required for Consolidated Entry" 
                
            />            
            {/* Additional Information */}
            <div className="">
              <h1 className='text-xl font-raleway font-medium'>Additional Information</h1>
              <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Additional Information:</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="additional_info"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Textarea
                            {...field}
                            placeholder="Please provide any additional information about your cargo..."
                            className={`mt-2 max-w-[400px] ${error ? 'border-red-500' : ''}`}
                            rows={4}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Commercial Terms:</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="commercial_terms"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Textarea
                            {...field}
                            placeholder="Please advise other relevant commercial terms such as loading/discharging rates and Incoterms."
                            className={`mt-2 max-w-[400px] ${error ? 'border-red-500' : ''}`}
                            rows={3}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>
            </div>
          </>
        )}

        {/* Service Contract */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Service Contract</h2>
          <div className="space-y-4">
            <FormItem>
              <FormLabel>Effective Date <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="effective_date"
                  render={({ field, fieldState: { error } }) => (
                    <>
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
            </FormItem>
            
            <FormItem>
              <FormLabel>Expiry Date <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="expiry_date"
                  render={({ field, fieldState: { error } }) => (
                    <>
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
            </FormItem>
            
            <FormItem>
              <FormLabel>Service Contract Number (Optional)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="service_contract"
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
        </div>

        {/* Handling Services Section */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Handling Services</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="handling_stevedoring"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Handling & Stevedoring</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="loading_cargo"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Loading Cargo</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="discharging_cargo"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Discharging Cargo</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="lashing_cargo"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Lashing Cargo</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="unlashing_cargo"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Unlashing Cargo</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="port_handling_stevedoring"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Port Handling & Stevedoring</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="cargo_reception_delivery"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Cargo Reception & Delivery</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="reception_before_shipment"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Reception Before Shipment</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="reception_after_discharge"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Reception After Discharge</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="storage_warehousing"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Storage & Warehousing</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="temporary_storage"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Temporary Storage</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>

            <FormItem className="mt-4">
              <FormLabel>Handling Requirements (Optional)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="handling_requirements"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Textarea
                        {...field}
                        placeholder="Specify any special handling requirements..."
                        rows={3}
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
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Additional Services</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        />
                        <label className="text-sm">Crane / Heavy Lift</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

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
                        />
                        <label className="text-sm">Customs Clearance</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additional_services.transport_to_from_port"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Transport to/from Port</label>
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
                        />
                        <label className="text-sm">Inspection & Quality Control</label>
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
                        />
                        <label className="text-sm">Escort / Permits</label>
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
                        />
                        <label className="text-sm">Engineering Support</label>
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
                        />
                        <label className="text-sm">Other</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>

            {form.watch('additional_services.other') && (
              <FormItem className="mt-4">
                <FormLabel>Other Services (Specify)</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additional_services.other_specify"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Textarea
                          {...field}
                          placeholder="Please specify other services required..."
                          rows={3}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            )}

            <FormItem className="mt-4">
              <FormLabel>Additional Requirements (Optional)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additional_services.additional_requirements"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Textarea
                        {...field}
                        placeholder="Any additional service requirements..."
                        rows={3}
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

        <Button type="submit" className={`mt-4 w-[200px] ${is_submitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={is_submitting}>
          {is_submitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </div>
          ) : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
