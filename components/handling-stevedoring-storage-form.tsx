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

// Define the form schema
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
  
  supporting_files: z.array(z.any()).optional(),
  
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
});

type FormData = z.infer<typeof formSchema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function HandlingStevedoringStorageForm({ onSubmit }: Props) {
    const [is_submitting, set_is_submitting] = useState(false);  const form = useForm<FormData>({
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
      consolidated_data: {
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
      },
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
    const [is_submitting, set_is_submitting] = useState(false);  };

  const handleModeChange = (mode: 'itemized' | 'consolidated') => {
    set_entry_mode(mode);
    form.setValue('entry_mode', mode);
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
                          className={`mt-2 ${error ? 'border-red-500' : ''}`}
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
                          className={`mt-2 ${error ? 'border-red-500' : ''}`}
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
                  Consolidated Entry
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
                            className={`mt-2 ${error ? 'border-red-500' : ''}`}
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
                            className={`mt-2 ${error ? 'border-red-500' : ''}`}
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
            <FileUpload 
              control={form.control} 
              isRequired={false}
            />
          </>
        ) : (
          <>
            <ConsolidatedForm control={form.control} />
            
            {/* Supporting Files Section - Mandatory for Consolidated */}
            <FileUpload 
              control={form.control} 
              isRequired={true}
            />
            
            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                            className={`mt-2 ${error ? 'border-red-500' : ''}`}
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
                            className={`mt-2 ${error ? 'border-red-500' : ''}`}
                            rows={3}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </CardContent>
            </Card>
          </>
        )}

        {/* Dates */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Dates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormItem>
                <FormLabel className="text-lg font-semibold">Effective Date:</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="effective_date"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          {...field}
                          type="date"
                          className={`mt-2 ${error ? 'border-red-500' : ''}`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
              <FormItem>
                <FormLabel className="text-lg font-semibold">Expiry Date:</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="expiry_date"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          {...field}
                          type="date"
                          className={`mt-2 ${error ? 'border-red-500' : ''}`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <FormItem>
              <FormLabel className="text-lg font-semibold">Service Contract (Optional):</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="service_contract"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        {...field}
                        placeholder="Enter service contract number"
                        className={`mt-2 ${error ? 'border-red-500' : ''}`}
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </FormItem>
          </CardContent>
        </Card>

        {/* Required Services */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Required Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Handling & Stevedoring */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Handling & Stevedoring</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="handling_stevedoring"
                    render={({ field }) => (
                      <Checkbox
                        id="handlingStevedoring"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="handlingStevedoring">Handling & Stevedoring</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="loading_cargo"
                    render={({ field }) => (
                      <Checkbox
                        id="loadingCargo"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="loadingCargo">Loading of cargo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="discharging_cargo"
                    render={({ field }) => (
                      <Checkbox
                        id="dischargingCargo"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="dischargingCargo">Discharging of cargo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="lashing_cargo"
                    render={({ field }) => (
                      <Checkbox
                        id="lashingCargo"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="lashingCargo">Lashing of cargo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="unlashing_cargo"
                    render={({ field }) => (
                      <Checkbox
                        id="unlashingCargo"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="unlashingCargo">Unlashing of cargo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="port_handling_stevedoring"
                    render={({ field }) => (
                      <Checkbox
                        id="portHandlingStevedoring"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="portHandlingStevedoring">Port Handling & Stevedoring (if required)</Label>
                </div>
              </div>
            </div>

            <Separator />

            {/* Cargo Reception & Delivery */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Cargo Reception & Delivery</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="cargo_reception_delivery"
                    render={({ field }) => (
                      <Checkbox
                        id="cargoReceptionDelivery"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="cargoReceptionDelivery">Cargo Reception & Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="reception_before_shipment"
                    render={({ field }) => (
                      <Checkbox
                        id="receptionBeforeShipment"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="receptionBeforeShipment">Reception, delivery, and safekeeping of cargo before shipment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="reception_after_discharge"
                    render={({ field }) => (
                      <Checkbox
                        id="receptionAfterDischarge"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="receptionAfterDischarge">Reception, delivery, and safekeeping of cargo after discharge</Label>
                </div>
              </div>
            </div>

            <Separator />

            {/* Storage & Warehousing */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Storage & Warehousing</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="storage_warehousing"
                    render={({ field }) => (
                      <Checkbox
                        id="storageWarehousing"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="storageWarehousing">Storage & Warehousing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Controller
                    control={form.control}
                    name="temporary_storage"
                    render={({ field }) => (
                      <Checkbox
                        id="temporaryStorage"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="temporaryStorage">Temporary storage</Label>
                </div>
              </div>
            </div>

            <FormItem>
              <FormLabel className="text-lg font-semibold">Additional Requirements:</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="handling_requirements"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Textarea
                        {...field}
                        placeholder="Note: Type the handling and stevedoring requirement needed if not listed."
                        className={`mt-2 ${error ? 'border-red-500' : ''}`}
                        rows={3}
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </FormItem>
          </CardContent>
        </Card>

        {/* Additional Services */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Additional Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="additional_services.crane_heavy_lift"
                  render={({ field }) => (
                    <Checkbox
                      id="crane_heavy_lift"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="crane_heavy_lift">Crane / Heavy Lift Equipment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="additional_services.customs_clearance"
                  render={({ field }) => (
                    <Checkbox
                      id="customs_clearance"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="customs_clearance">Customs Clearance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="additional_services.transport_to_from_port"
                  render={({ field }) => (
                    <Checkbox
                      id="transport_to_from_port"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="transport_to_from_port">Transport to/from Port (Inland Freight)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="additional_services.inspection_quality_control"
                  render={({ field }) => (
                    <Checkbox
                      id="inspection_quality_control"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="inspection_quality_control">Inspection & Quality Control</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="additional_services.escort_permits"
                  render={({ field }) => (
                    <Checkbox
                      id="escort_permits"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="escort_permits">Escort or Permits (if applicable)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  control={form.control}
                  name="additional_services.engineering_support"
                  render={({ field }) => (
                    <Checkbox
                      id="engineering_support"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="engineering_support">Engineering Support (Lashing/Surveying)</Label>
              </div>
            </div>
            
            {/* Other (Please Specify) */}
            <FormItem className="mt-8">
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
            <FormItem className="mt-8">
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
          </CardContent>
        </Card>
        {/* Company Details */}
        <CompanyDetailsCard control={form.control} />

        {/* Submit Button */}
        <div className="flex justify-start">
    const [is_submitting, set_is_submitting] = useState(false);                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : "Submit"}
          </Button>        </div>
      </form>
    </Form>
  );
} 