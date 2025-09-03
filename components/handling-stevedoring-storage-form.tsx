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
  // Basic Information
  importExport: z.enum(['import', 'export']),
  portAirport: z.string().min(1, { message: "Port/Airport is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  
  // Entry Mode
  entry_mode: z.enum(["itemized", "consolidated"], {
    required_error: "Please select an entry mode.",
  }),
  
  // Itemized Entry (same as air freight)
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
  
  // Consolidated Entry (same as air freight)
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
  
  // Additional Information
  additionalInfo: z.string().optional(),
  commercialTerms: z.string().optional(),
  
  // Dates
  effectiveDate: z.string().min(1, { message: "Effective date is required" }),
  expiryDate: z.string().min(1, { message: "Expiry date is required" }),
  serviceContract: z.string().optional(),
  
  // Required Services
  handlingStevedoring: z.boolean(),
  loadingCargo: z.boolean(),
  dischargingCargo: z.boolean(),
  lashingCargo: z.boolean(),
  unlashingCargo: z.boolean(),
  portHandlingStevedoring: z.boolean(),
  cargoReceptionDelivery: z.boolean(),
  receptionBeforeShipment: z.boolean(),
  receptionAfterDischarge: z.boolean(),
  storageWarehousing: z.boolean(),
  temporaryStorage: z.boolean(),
  handlingRequirements: z.string().optional(),
  
  // Additional Services
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
  
  // Supporting Files
  supporting_files: z.array(z.any()).optional(),
  
  // Company Details (standard pattern)
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
  const [entryMode, setEntryMode] = useState<'itemized' | 'consolidated'>('itemized');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      importExport: 'import',
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
      handlingStevedoring: false,
      loadingCargo: false,
      dischargingCargo: false,
      lashingCargo: false,
      unlashingCargo: false,
      portHandlingStevedoring: false,
      cargoReceptionDelivery: false,
      receptionBeforeShipment: false,
      receptionAfterDischarge: false,
      storageWarehousing: false,
      temporaryStorage: false,
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
    }
  });

  const handleSubmit = (values: FormData) => {
    console.log(values);
    onSubmit(values);
  };

  const handleModeChange = (mode: 'itemized' | 'consolidated') => {
    setEntryMode(mode);
    form.setValue('entry_mode', mode);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-10">
        {/* Basic Information */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>HANDLING, STEVEDORING AND STORAGE</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {/* Import/Export Selection */}
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="import"
                  value="import"
                  {...form.register('importExport')}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="import" className="text-lg font-raleway font-medium">Import</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="export"
                  value="export"
                  {...form.register('importExport')}
                  className="w-4 h-4 text-primary"
                />
                <Label htmlFor="export" className="text-lg font-raleway font-medium">Export</Label>
              </div>
            </div>

            {/* Port/Airport and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormItem>
                <FormLabel className="text-lg font-raleway font-medium">Port / Airport:</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="portAirport"
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
                <FormLabel className="text-lg font-raleway font-medium">Location:</FormLabel>
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
            <h1 className='text-xl font-raleway font-medium'>Cargo Entry Mode</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={entryMode === 'itemized' ? 'default' : 'outline'}
                  onClick={() => handleModeChange('itemized')}
                  className="flex-1"
                >
                  Itemized Entry by Commodity
                </Button>
                <Button
                  type="button"
                  variant={entryMode === 'consolidated' ? 'default' : 'outline'}
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
        {entryMode === 'itemized' ? (
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
                      name="additionalInfo"
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
                      name="commercialTerms"
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
                      name="additionalInfo"
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
                      name="commercialTerms"
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
                    name="effectiveDate"
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
                    name="expiryDate"
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
                  name="serviceContract"
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
                    name="handlingStevedoring"
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
                    name="loadingCargo"
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
                    name="dischargingCargo"
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
                    name="lashingCargo"
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
                    name="unlashingCargo"
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
                    name="portHandlingStevedoring"
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
                    name="cargoReceptionDelivery"
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
                    name="receptionBeforeShipment"
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
                    name="receptionAfterDischarge"
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
                    name="storageWarehousing"
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
                    name="temporaryStorage"
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
                  name="handlingRequirements"
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
          <Button type="submit" className="mt-8 w-[200px]">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
} 