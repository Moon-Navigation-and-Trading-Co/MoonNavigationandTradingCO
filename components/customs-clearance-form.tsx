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
  clearanceType: z.enum(["import", "export", "transit", "re-export"], {
    required_error: "Please select a clearance type"
  }),
  portAirport: z.string().optional(),
  originPort: z.string().optional(),
  destinationPort: z.string().optional(),
  expectedDate: z.string().min(1, { message: "Expected date is required" }),
  commodity: z.string().min(1, { message: "Commodity is required" }),
  isDangerous: z.boolean().default(false),
  unNumberClass: z.string().optional(),
  shipmentMode: z.enum(["sea", "air", "inland"], {
    required_error: "Please select shipment mode"
  }),
  containerType: z.enum([
    "fcl", "lcl", "non-containerized"
  ]).optional(),
  containerSize: z.enum([
    "20-dry", "40-dry", "40-high-cube-dry", "20-reefer", "40-reefer", 
    "40-high-cube-reefer", "20-tank", "40-tank", "20-open-top", 
    "40-open-top", "20-high-cube-open-top", "40-high-cube-open-top", 
    "20-flat-rack", "40-flat-rack"
  ]).optional(),
  numberOfContainers: z.number().min(1, { message: "Number of containers is required" }),
  totalWeight: z.number().min(0.1, { message: "Total weight is required" }),
  weightUnit: z.enum(["kg", "ton"]).default("kg"),
  totalVolume: z.number().optional(),
  numberOfTrucks: z.number().optional(),
  countryOfOrigin: z.string().min(1, { message: "Country of origin is required" }),
  finalDestination: z.string().min(1, { message: "Final destination is required" }),
  supportingFiles: z.array(z.any()).optional(),
  additionalServices: z.string().optional(),
  companyDetails: z.object({
    companyName: z.string().min(1, { message: "Company name is required" }),
    contactPerson: z.string().min(1, { message: "Contact person is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    cityCountry: z.string().min(1, { message: "City, Country is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    additionalEmail: z.string().email({ message: "Valid email format" }).optional(),
    phone: z.string().min(1, { message: "Phone number is required" }),
    additionalPhone: z.string().optional(),
  }),
  showAdditionalEmail: z.boolean().default(false),
  showAdditionalPhone: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

interface CustomsClearanceFormProps {
  onSubmit?: (formData: FormData) => void;
}

export default function CustomsClearanceForm({ onSubmit }: CustomsClearanceFormProps) {
  const t = useTranslations('Inland-forms');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clearanceType: "import",
      portAirport: '',
      originPort: '',
      destinationPort: '',
      expectedDate: '',
      commodity: '',
      isDangerous: false,
      unNumberClass: '',
      shipmentMode: "sea",
      containerType: "fcl",
      containerSize: "20-dry",
      numberOfContainers: 1,
      totalWeight: 0,
      weightUnit: "kg",
      totalVolume: 0,
      numberOfTrucks: 1,
      countryOfOrigin: '',
      finalDestination: '',
      supportingFiles: [],
      additionalServices: '',
      companyDetails: {
        companyName: '',
        contactPerson: '',
        title: '',
        cityCountry: '',
        email: '',
        additionalEmail: '',
        phone: '',
        additionalPhone: '',
      },
      showAdditionalEmail: false,
      showAdditionalPhone: false,
    }
  });

  const watchClearanceType = form.watch("clearanceType");
  const watchShipmentMode = form.watch("shipmentMode");
  const watchContainerType = form.watch("containerType");
  const watchIsDangerous = form.watch("isDangerous");

  const handleSubmit = (values: FormData) => {
    if (onSubmit) {
      onSubmit(values);
    }
    console.log("Customs Clearance Form Data:", values);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
    form.setValue("supportingFiles", [...(form.getValues("supportingFiles") || []), ...files]);
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    form.setValue("supportingFiles", newFiles);
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
                name="clearanceType"
                render={({ field, fieldState: { error } }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
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

          {/* Port/Airport - Show only if NOT transit */}
          {watchClearanceType !== "transit" && (
            <div className="mb-6">
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                Port / Airport:
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="portAirport"
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
          {watchClearanceType === "transit" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                  Origin Port / Airport:
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="originPort"
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
                    name="destinationPort"
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
                name="expectedDate"
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

          {/* Dangerous Cargo */}
          <div className="mb-6">
            <FormControl>
              <Controller
                control={form.control}
                name="isDangerous"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="isDangerous"
                    />
                    <label htmlFor="isDangerous" className="text-sm font-medium">
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
                  name="unNumberClass"
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
              name="shipmentMode"
              render={({ field, fieldState: { error } }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
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
                    name="containerType"
                    render={({ field, fieldState: { error } }) => (
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
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
                        name="containerSize"
                        render={({ field, fieldState: { error } }) => (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        name="numberOfContainers"
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
                        name="totalWeight"
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
                        name="weightUnit"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        name="totalVolume"
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
                    name="numberOfTrucks"
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
                      name="totalWeight"
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
                      name="weightUnit"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                      name="totalWeight"
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
                      name="weightUnit"
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                    name="totalVolume"
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
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-medium text-gray-700 whitespace-nowrap">Country of Origin</h3>
                <FormControl className="flex-1">
                  <Controller
                    control={form.control}
                    name="countryOfOrigin"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <SearchableCountrySelect
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Select country"
                          className="w-full"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>
            </div>

            <div>
              <FormLabel className="text-sm font-medium text-gray-700 mb-2 block">
                Final Destination:
              </FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="finalDestination"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        placeholder="[Insert Destination]"
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
                  name="supportingFiles"
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

            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Uploaded Files:</h4>
                <ul className="space-y-2">
                  {uploadedFiles.map((file, index) => (
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
                name="additionalServices"
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
          <Button type="submit" className="mt-4 w-[200px]">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
} 