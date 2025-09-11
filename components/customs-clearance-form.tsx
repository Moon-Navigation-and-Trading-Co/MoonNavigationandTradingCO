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
import { Plus, Upload, Trash2, Mail, Phone, Calendar, Minus } from 'lucide-react';
import { SearchableCountrySelect } from './searchable-country-select';
import { PhoneInput } from '@/components/phone-input';
import CompanyDetailsCard from './company-details-card';

// Define the form schema
const formSchema = z.object({
  // Basic Information
  import_export: z.enum(["import", "export"], {
    required_error: "Please select import or export"
  }),
  port_airport: z.string().min(1, { message: "Port/Airport is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  expected_date: z.string().min(1, { message: "Expected date is required" }),
  
  // Commodity Details
  commodity: z.string().min(1, { message: "Commodity is required" }),
  commodity_description: z.string().min(1, { message: "Commodity description is required" }),
  hs_code: z.string().min(1, { message: "HS Code is required" }),
  is_dangerous: z.boolean().default(false),
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
  number_of_containers: z.number().min(1, { message: "Number of containers is required" }),
  total_weight: z.number().min(0.1, { message: "Total weight is required" }),
  weight_unit: z.enum(["kg", "ton"]).default("kg"),
  total_volume: z.number().optional(),
  number_of_trucks: z.number().optional(),
  country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
  final_destination: z.string().min(1, { message: "Final destination is required" }),
  supporting_files: z.array(z.any()).optional(),
  additional_services: z.string().optional(),
  company_details: z.object({
    company_name: z.string().min(1, { message: "Company name is required" }),
    contact_person: z.string().min(1, { message: "Contact person is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    city_country: z.string().min(1, { message: "City/Country is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    additional_email: z.string().email({ message: "Valid email format" }).optional(),
    phone: z.string().min(1, { message: "Phone number is required" }),
    additional_phone: z.string().optional(),
  }),
  show_additional_email: z.boolean().default(false),
  show_additional_phone: z.boolean().default(false),
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
    defaultValues: {
      import_export: 'import',
      port_airport: '',
      location: '',
      expected_date: '',
      commodity: '',
      commodity_description: '',
      hs_code: '',
      is_dangerous: false,
      un_number_class: '',
      shipment_mode: 'sea',
      container_type: "fcl",
      container_size: '20-dry',
      number_of_containers: 1,
      total_weight: 0,
      weight_unit: 'kg',
      total_volume: 0,
      number_of_trucks: 0,
      country_of_origin: '',
      final_destination: '',
      supporting_files: [],
      additional_services: '',
      company_details: {
        company_name: '',
        contact_person: '',
        title: '',
        city_country: '',
        email: '',
        additional_email: '',
        phone: '',
        additional_phone: '',
      },
      show_additional_email: false,
      show_additional_phone: false,
    },
  });

    const [is_submitting, set_is_submitting] = useState(false);    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      console.log("Customs Clearance Form Data:", values);
    } finally {
    const [is_submitting, set_is_submitting] = useState(false);    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    set_uploaded_files(prev => [...prev, ...files]);
    form.setValue("supporting_files", [...(form.getValues("supporting_files") || []), ...files]);
  };

  const removeFile = (index: number) => {
    const newFiles = uploaded_files.filter((_, i) => i !== index);
    set_uploaded_files(newFiles);
    form.setValue("supporting_files", newFiles);
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
                  </RadioGroup>
                )}
              />
            </FormControl>
          </div>

          {/* Port/Airport - Show only if NOT transit */}
          {watchClearanceType !== "export" && (
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
          {watchClearanceType === "export" && (
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
          
          {/* Commodity */}
          <div className="mb-6">
            <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
              Commodity:
            </FormLabel>
            <FormControl>
              <Controller
                control={form.control}
                name="commodity"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      placeholder="Type the commodity"
                      className="max-w-[300px] border-2 rounded-xl"
                      {...field}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                  </>
                )}
              />
            </FormControl>
          </div>

          {/* Commodity Description - ADD THIS MISSING FIELD */}
          <div className="mb-6">
            <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
              Commodity Description:
            </FormLabel>
            <FormControl>
              <Controller
                control={form.control}
                name="commodity_description"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      placeholder="Enter commodity description"
                      className="max-w-[300px] border-2 rounded-xl"
                      {...field}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                  </>
                )}
              />
            </FormControl>
          </div>

          {/* HS Code - ADD THIS MISSING FIELD */}
          <div className="mb-6">
            <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
              HS Code:
            </FormLabel>
            <FormControl>
              <Controller
                control={form.control}
                name="hs_code"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      placeholder="Enter HS Code"
                      className="max-w-[300px] border-2 rounded-xl"
                      {...field}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                  </>
                )}
              />
            </FormControl>
          </div>

          {/* Dangerous Cargo */}
          <div className="mb-6">
            <FormControl>
              <Controller
                control={form.control}
                name="is_dangerous"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="is_dangerous" // CHANGE FROM "isDangerous"
                    />
                    <label htmlFor="is_dangerous" className="text-sm font-medium"> {/* CHANGE FROM "isDangerous" */}
                      This cargo is considered dangerous.
                    </label>
                  </div>
                )}
              />
            </FormControl>
          </div>

          {/* UN Number & Class - Show only if dangerous is checked */}
          {watchIsDangerous && (
            <div>
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                UN Number & Class:
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="un_number_class"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="Enter UN Number and Class"
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
          {watchShipmentMode === "sea" && (
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
              {watchContainerType === "fcl" && (
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
                                onClick={() => field.onChange(Math.max(1, field.value - 1))}
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
                                onClick={() => field.onChange(field.value + 1)}
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
                {(watchContainerType === "lcl" || watchContainerType === "non-containerized") && (
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
          {watchShipmentMode === "inland" && (
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
          {watchShipmentMode === "air" && (
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
          <div className='w-full max-w-sm items-center gap-1.5 mt-1'>
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