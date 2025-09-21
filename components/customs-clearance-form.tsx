"use client";

import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useTranslations } from 'next-intl';
import { Plus, Upload, Trash2, Mail, Phone, Calendar, Minus, AlertCircle } from 'lucide-react';
import { SearchableCountrySelect } from './searchable-country-select';
import { PhoneInput } from '@/components/phone-input';
import CompanyDetailsCard from './company-details-card';

// Define the form schema
const formSchema = z.object({
  // Basic Information
  import_export: z.enum(["import", "export", "transit", "re-export"], {
    required_error: "Please select import, export, transit, or re-export"
  }),
  port_airport: z.string().optional(),
  location: z.string().optional(), 
  expected_date: z.string().min(1, { message: "Expected date is required" }),
  
  // Commodity Details
  commodity: z.string().min(1, { message: "Commodity is required" }),
  is_dangerous: z.boolean().optional(),
  un_number_class: z.string().optional(),
  
  shipment_mode: z.enum(["sea", "air", "inland"], {
    required_error: "Please select shipment mode"
  }),
  container_type: z.enum([
    "fcl", "lcl", "non-containerized"
  ]).optional(),
  container_size: z.enum([
    "20-dry", "40-dry", "40-high-cube-dry", "20-reefer", "40-reefer", 
    "40-high-cube-reefer", "20-tank", "40-tank", "20-open-top", 
    "40-open-top", "20-high-cube-open-top", "40-high-cube-open-top", 
    "20-flat-rack", "40-flat-rack"
  ]).optional(),
  number_of_containers: z.number().min(1, { message: "Number of containers is required" }).optional(),
  total_weight: z.number().min(0.1, { message: "Total weight is required" }),
  weight_unit: z.enum(["kg", "ton"]).optional(),
  total_volume: z.number().optional(),
  number_of_trucks: z.number().optional(),
  country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
  final_destination: z.string().min(1, { message: "Final destination is required" }),
  supporting_files: z.array(z.any()).optional(),
  additional_services: z.string().optional(),
  
  // Company Details - Exact match to CompanyDetailsCard structure
  company_details: z.object({
    company_name: z.string().min(1, { message: "Company name is required" }),
    contact_person_name: z.string().min(1, { message: "Contact person is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
    company_email: z.string().email({ message: "Valid email is required" }),
    additional_email: z.string().email().optional().or(z.literal('')),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    additional_phone_number: z.string().optional(),
  }),
  show_additional_email: z.boolean().optional(),
  show_additional_phone: z.boolean().optional(),
}).refine((data) => {
  // Validate port_airport for import, export, and re-export
  if ((data.import_export === "import" || data.import_export === "export" || data.import_export === "re-export") && (!data.port_airport || data.port_airport.trim() === '')) {
    return false;
  }
  return true;
}, {
  message: "Port/Airport is required",
  path: ["port_airport"]
}).refine((data) => {
  // Validate location for transit
  if (data.import_export === "transit" && (!data.location || data.location.trim() === '')) {
    return false;
  }
  return true;
}, {
  message: "Origin location is required for transit",
  path: ["location"]
}).refine((data) => {
  // Validate UN number for dangerous goods
  if (data.is_dangerous && (!data.un_number_class || data.un_number_class.trim() === '')) {
    return false;
  }
  return true;
}, {
  message: "UN Number & Class is required for dangerous goods",
  path: ["un_number_class"]
}).refine((data) => {
  // Validate container type for sea shipments
  if (data.shipment_mode === "sea" && !data.container_type) {
    return false;
  }
  return true;
}, {
  message: "Container type is required for sea shipments",
  path: ["container_type"]
}).refine((data) => {
  // Validate container size for FCL
  if (data.shipment_mode === "sea" && data.container_type === "fcl" && !data.container_size) {
    return false;
  }
  return true;
}, {
  message: "Container size is required for FCL",
  path: ["container_size"]
}).refine((data) => {
  // Validate number of containers for FCL
  if (data.shipment_mode === "sea" && data.container_type === "fcl" && (!data.number_of_containers || data.number_of_containers < 1)) {
    return false;
  }
  return true;
}, {
  message: "Number of containers is required for FCL",
  path: ["number_of_containers"]
}).refine((data) => {
  // Validate number of trucks for inland
  if (data.shipment_mode === "inland" && (!data.number_of_trucks || data.number_of_trucks < 1)) {
    return false;
  }
  return true;
}, {
  message: "Number of trucks is required for inland shipment",
  path: ["number_of_trucks"]
});

type FormData = z.infer<typeof formSchema>;

interface CustomsClearanceFormProps {
  onSubmit?: (formData: FormData) => void;
}

export default function CustomsClearanceForm({ onSubmit }: CustomsClearanceFormProps) {
  const t = useTranslations('Inland-forms');
  const [is_submitting, set_is_submitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      import_export: 'import',
      port_airport: '',
      location: '',
      expected_date: '',
      commodity: '',
      is_dangerous: false,
      un_number_class: '',
      shipment_mode: 'sea',
      container_type: "fcl",
      container_size: '20-dry',
      number_of_containers: 1,
      total_weight: 1,
      weight_unit: 'kg',
      total_volume: 1,
      number_of_trucks: 1,
      country_of_origin: '',
      final_destination: '',
      supporting_files: [],
      additional_services: '',
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
      show_additional_email: false,
      show_additional_phone: false,
    },
  });

  const handleSubmit = async (values: FormData) => {
    set_is_submitting(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      console.log("Customs Clearance Form Data:", values);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      set_is_submitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        
        {/* Shipment Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-raleway font-medium mb-4">Shipment Information</h2>
          
          {/* Type of Clearance Required */}
          <div className="mb-6">
            <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
              Type of Clearance Required:
            </FormLabel>
            <FormControl>
              <Controller
                control={form.control}
                name="import_export"
                render={({ field, fieldState: { error } }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value || ""}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="import" id="import" />
                      <label htmlFor="import" className="text-sm font-medium">Import</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="export" id="export" />
                      <label htmlFor="export" className="text-sm font-medium">Export</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="transit" id="transit" />
                      <label htmlFor="transit" className="text-sm font-medium">Transit</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="re-export" id="re-export" />
                      <label htmlFor="re-export" className="text-sm font-medium">Re-Export</label>
                    </div>
                  </RadioGroup>
                )}
              />
            </FormControl>
          </div>

          {/* Port/Airport - Show for import, export, and re-export */}
          {(form.watch("import_export") === "import" || form.watch("import_export") === "export" || form.watch("import_export") === "re-export") && (
            <div className="mb-6">
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                Port / Airport:
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="port_airport"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Insert Location"
                        className="max-w-[300px] border-2 rounded-xl"
                        {...field}
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </div>
          )}

          {/* Transit Locations - Show only if transit is selected */}
          {form.watch("import_export") === "transit" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Origin Port / Airport:
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="location"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          placeholder="Insert Location"
                          className="max-w-[300px] border-2 rounded-xl"
                          {...field}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Destination Port / Airport:
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="final_destination"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          placeholder="Insert Location"
                          className="max-w-[300px] border-2 rounded-xl"
                          {...field}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>
            </div>
          )}

          {/* Expected Arrival/Departure Date */}
          <div>
            <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
              Expected Arrival / Departure Date:
            </FormLabel>
            <FormControl>
              <Controller
                control={form.control}
                name="expected_date"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <div className="relative max-w-[300px]">
                      <Input
                        type="date"
                        className="border-2 rounded-xl pr-10"
                        {...field}
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                  </>
                )}
              />
            </FormControl>
          </div>
        </div>

        {/* Commodity Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-raleway font-medium mb-4">Commodity Details</h2>
          
          <div className="space-y-6">
            {/* Commodity */}
            <div>
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                Commodity: <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="commodity"
                  render={({ field, fieldState: { error } }) => (
                    <div className="space-y-1">
                      <Input
                        placeholder="Type the commodity"
                        className={`max-w-[300px] border-2 rounded-xl ${
                          error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                        }`}
                        {...field}
                      />
                      {error && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </FormControl>
            </div>

            {/* Dangerous Cargo */}
            <div>
              <FormControl>
                <Controller
                  control={form.control}
                  name="is_dangerous"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="is_dangerous"
                      />
                      <label htmlFor="is_dangerous" className="text-sm font-medium">
                        This cargo is considered dangerous.
                      </label>
                    </div>
                  )}
                />
              </FormControl>
            </div>

            {/* UN Number & Class - Conditional */}
            {form.watch("is_dangerous") && (
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  UN Number & Class: <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="un_number_class"
                    render={({ field, fieldState: { error } }) => (
                      <div className="space-y-1">
                        <Input
                          placeholder="Enter UN Number and Class"
                          className={`max-w-[300px] border-2 rounded-xl ${
                            error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                          }`}
                          {...field}
                        />
                        {error && (
                          <p className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </FormControl>
              </div>
            )}
          </div>
        </div>

        {/* Shipment Mode */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-raleway font-medium mb-4">Shipment Mode</h2>
          
          <FormControl>
            <Controller
              control={form.control}
              name="shipment_mode"
              render={({ field, fieldState: { error } }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value || ""}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sea" id="sea" />
                    <label htmlFor="sea" className="text-sm font-medium">By Sea</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="air" id="air" />
                    <label htmlFor="air" className="text-sm font-medium">By Air</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="inland" id="inland" />
                    <label htmlFor="inland" className="text-sm font-medium">By Inland</label>
                  </div>
                </RadioGroup>
              )}
            />
          </FormControl>

          {/* Sea-specific options */}
          {form.watch("shipment_mode") === "sea" && (
            <div className="space-y-6 mt-6">
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Container Type:
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="container_type"
                    render={({ field, fieldState: { error } }) => (
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value || ""}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fcl" id="fcl" />
                          <label htmlFor="fcl" className="text-sm font-medium">Full Container Load (FCL)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="lcl" id="lcl" />
                          <label htmlFor="lcl" className="text-sm font-medium">Less than Container Load (LCL)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="non-containerized" id="non-containerized" />
                          <label htmlFor="non-containerized" className="text-sm font-medium">Non-Containerized / Bulk</label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </div>

              {/* FCL-specific options */}
              {form.watch("container_type") === "fcl" && (
                <div className="space-y-4">
                  <div>
                    <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                      Type of the Container and Size:
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="container_size"
                        render={({ field, fieldState: { error } }) => (
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger className="max-w-[300px] border-2 rounded-xl">
                              <SelectValue placeholder="Select container type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="20-dry">20&apos; Dry Container</SelectItem>
                              <SelectItem value="40-dry">40&apos; Dry Container</SelectItem>
                              <SelectItem value="40-high-cube-dry">40&apos; High Cube Dry Container</SelectItem>
                              <SelectItem value="20-reefer">20&apos; Standard Reefer Container</SelectItem>
                              <SelectItem value="40-reefer">40&apos; Standard Reefer Container</SelectItem>
                              <SelectItem value="40-high-cube-reefer">40&apos; High Cube Reefer Container</SelectItem>
                              <SelectItem value="20-tank">20&apos; Tank Container</SelectItem>
                              <SelectItem value="40-tank">40&apos; Tank Container</SelectItem>
                              <SelectItem value="20-open-top">20&apos; Open Top Container</SelectItem>
                              <SelectItem value="40-open-top">40&apos; Open Top Container</SelectItem>
                              <SelectItem value="20-high-cube-open-top">20&apos; High Cube Open Top Container</SelectItem>
                              <SelectItem value="40-high-cube-open-top">40&apos; High Cube Open Top Container</SelectItem>
                              <SelectItem value="20-flat-rack">20&apos; Flat Rack Container</SelectItem>
                              <SelectItem value="40-flat-rack">40&apos; Flat Rack Container</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </FormControl>
                  </div>

                  <div>
                    <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                      Number of Containers:
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="number_of_containers"
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <div className="flex items-center space-x-2 max-w-[200px]">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => field.onChange(Math.max(1, (field.value || 1) - 1))}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                className="text-center border-2 rounded-xl"
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => field.onChange((field.value || 1) + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                          </>
                        )}
                      />
                    </FormControl>
                  </div>
                </div>
              )}

              {/* Weight and Volume for all sea options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                    Total Weight:
                  </FormLabel>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="total_weight"
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Input
                              type="number"
                              step="0.01"
                              className="border-2 rounded-xl"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                            />
                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                          </>
                        )}
                      />
                    </FormControl>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="weight_unit"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger className="w-20 border-2 rounded-xl">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kg">Kg</SelectItem>
                              <SelectItem value="ton">Ton</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </FormControl>
                  </div>
                </div>

                {/* Volume for LCL, or non-containerized */}
                {(form.watch("container_type") === "lcl" || form.watch("container_type") === "non-containerized") && (
                  <div>
                    <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                      Total Volume (CBM):
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="total_volume"
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="CBM"
                              className="border-2 rounded-xl"
                              {...field}
                              onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                            />
                            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                          </>
                        )}
                      />
                    </FormControl>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Inland-specific options */}
          {form.watch("shipment_mode") === "inland" && (
            <div className="space-y-4 mt-6">
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Number of Trucks:
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="number_of_trucks"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <div className="flex items-center space-x-2 max-w-[200px]">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => field.onChange(Math.max(1, (field.value || 1) - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            className="text-center border-2 rounded-xl"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => field.onChange((field.value || 1) + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>

              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Total Weight:
                </FormLabel>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="total_weight"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            type="number"
                            step="0.01"
                            className="border-2 rounded-xl"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="weight_unit"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <SelectTrigger className="w-20 border-2 rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kg</SelectItem>
                            <SelectItem value="ton">Ton</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          )}

          {/* Air-specific options */}
          {form.watch("shipment_mode") === "air" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Total Weight:
                </FormLabel>
                <div className="flex items-center space-x-2">
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="total_weight"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            type="number"
                            step="0.01"
                            className="border-2 rounded-xl"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="weight_unit"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <SelectTrigger className="w-20 border-2 rounded-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kg</SelectItem>
                            <SelectItem value="ton">Ton</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                </div>
              </div>

              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Total Volume (CBM):
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="total_volume"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="CBM"
                          className="border-2 rounded-xl"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>
            </div>
          )}
        </div>

        {/* Origin and Destination */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-raleway font-medium mb-4">Origin and Destination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                Country of Origin
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="country_of_origin"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <SearchableCountrySelect
                        value={field.value || ""}
                        onValueChange={field.onChange}
                        placeholder="Select country"
                        className="w-[300px] !border-2 !rounded-xl !border-gray-200"
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </div>

            <div>
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                Final Destination:
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="final_destination"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        className="w-[300px] border-2 rounded-xl"
                        placeholder="Enter final destination"
                        {...field}
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </div>
          </div>
        </div>

        {/* Supporting Files */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-raleway font-medium mb-4">Supporting Files (Optional)</h2>
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
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      className="max-w-[300px] border-2 rounded-xl"
                      {...field}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                  </>
                )}
              />
            </FormControl>
            <p className="text-xs text-gray-500 mt-1">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
          </FormItem>
        </div>

        {/* Additional Required Services/Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-raleway font-medium mb-4">Additional Required Services/Information</h2>
          <FormItem>
            <FormLabel>Please specify any additional services or information required.</FormLabel>
            <FormControl>
              <Controller
                control={form.control}
                name="additional_services"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Textarea
                      className="max-w-[400px] border-2 rounded-xl"
                      placeholder="Please specify any additional services or information required..."
                      rows={4}
                      {...field}
                    />
                    {error && <p className="text-red-500">{error.message}</p>}
                  </>
                )}
              />
            </FormControl>
          </FormItem>
        </div>
        <CompanyDetailsCard control={form.control} />
        
        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" disabled={is_submitting} className="w-[200px]">
            {is_submitting ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}; 