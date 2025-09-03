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

// Define the form schema
const formSchema = z.object({
  routing: z.array(z.object({
    fromCountry: z.string().min(1, { message: "From country is required" }),
    fromPort: z.string().min(1, { message: "From port/area is required" }),
    toCountry: z.string().min(1, { message: "To country is required" }),
    toPort: z.string().min(1, { message: "To port/area is required" }),
  })),
  dates: z.object({
    effectiveDate: z.string().min(1, { message: "Effective date is required" }),
    expiryDate: z.string().min(1, { message: "Expiry date is required" }),
  }),
  livestockDetails: z.array(z.object({
    type: z.string().min(1, { message: "Type of livestock is required" }),
    quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
    weightPerAnimal: z.number().min(0.1, { message: "Weight per animal is required" }),
  })),
  specialHandling: z.string().optional(),
  additionalInformation: z.string().optional(),
  serviceContract: z.string().optional(),
  transportModes: z.object({
    oceanFreight: z.boolean().default(false),
    landTransportation: z.boolean().default(false),
    airFreight: z.boolean().default(false),
  }),
  additionalServices: z.object({
    portHandling: z.boolean().default(false),
    customsClearance: z.boolean().default(false),
    storageWarehousing: z.boolean().default(false),
    inlandFreight: z.boolean().default(false),
    inspectionQuality: z.boolean().default(false),
    escortPermits: z.boolean().default(false),
    other: z.boolean().default(false),
    otherSpecify: z.string().optional(),
    additionalRequirements: z.string().optional(),
  }),
  insurance: z.object({
    required: z.enum(["yes", "no"]).optional(),
    coverageDetails: z.string().optional(),
  }),
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
  supportingFiles: z.array(z.any()).optional(),
  cargoLiftingPoints: z.boolean().optional(),
  showAdditionalEmail: z.boolean().default(false),
  showAdditionalPhone: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

interface LivestockTransportationFormProps {
  onSubmit?: (formData: FormData) => void;
}

export default function LivestockTransportationForm({ onSubmit }: LivestockTransportationFormProps) {
  const t = useTranslations('Inland-forms');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      routing: [{ fromCountry: '', fromPort: '', toCountry: '', toPort: '' }],
      dates: {
        effectiveDate: '',
        expiryDate: '',
      },
      livestockDetails: [{ type: '', quantity: 1, weightPerAnimal: 0 }],
      specialHandling: '',
      additionalInformation: '',
      serviceContract: '',
      transportModes: {
        oceanFreight: false,
        landTransportation: false,
        airFreight: false,
      },
      additionalServices: {
        portHandling: false,
        customsClearance: false,
        storageWarehousing: false,
        inlandFreight: false,
        inspectionQuality: false,
        escortPermits: false,
        other: false,
        otherSpecify: '',
        additionalRequirements: '',
      },
      insurance: {
        required: undefined,
        coverageDetails: '',
      },
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
      supportingFiles: [],
      cargoLiftingPoints: false,
      showAdditionalEmail: false,
      showAdditionalPhone: false,
    },
  });

  // Field arrays
  const { fields: routingFields, append: appendRoute, remove: removeRoute } = useFieldArray({
    control: form.control,
    name: "routing",
  });

  const { fields: livestockFields, append: appendLivestock, remove: removeLivestock } = useFieldArray({
    control: form.control,
    name: "livestockDetails",
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
    
    setUploadedFiles([...uploadedFiles, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (values: FormData) => {
    const formDataWithFiles = {
      ...values,
      uploadedFiles
    };
    
    if (onSubmit) {
      onSubmit(formDataWithFiles);
    } else {
      console.log('Form data:', formDataWithFiles);
    }
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
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>{t('routing')}</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {routingFields.map((field, index) => (
              <div key={field.id} className="space-y-6">
                {/* Country selection boxes first */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">From</h3>
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name={`routing.${index}.fromCountry`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <SearchableCountrySelect
                                value={field.value}
                                onValueChange={field.onChange}
                                placeholder="Select country"
                                className="w-full"
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">To</h3>
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name={`routing.${index}.toCountry`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <SearchableCountrySelect
                                value={field.value}
                                onValueChange={field.onChange}
                                placeholder="Select country"
                                className="w-full"
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>

                {/* From and To Port/Area sections below */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* From */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">From</h3>
                    <FormItem>
                      <FormLabel>Port/Area</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name={`routing.${index}.fromPort`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input
                                placeholder="e.g., Shanghai Port, Pudong"
                                {...field}
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  </div>

                  {/* To */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-700">To</h3>
                    <FormItem>
                      <FormLabel>Port/Area</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name={`routing.${index}.toPort`}
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input
                                placeholder="e.g., Los Angeles Port, Long Beach"
                                {...field}
                              />
                              {error && <p className="text-red-500 text-sm">{error.message}</p>}
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>

                <div className="flex items-end">
                  {routingFields.length > 1 && (
                    <Button
                      type="button"
                      className="rounded-md flex items-center justify-center bg-red-500 mb-[6px] hover:bg-red-600"
                      onClick={() => removeRoute(index)}
                    >
                      {t("Remove")}
                    </Button>
                  )}
                </div>
              </div>
            ))}

            <Button
              type="button"
              className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg"
              onClick={() => appendRoute({ fromCountry: '', fromPort: '', toCountry: '', toPort: '' })}
            >
              {t('addRoute')}
            </Button>
          </div>
        </div>

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
                    name="dates.effectiveDate"
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
                    name="dates.expiryDate"
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
                    const quantity = form.watch(`livestockDetails.${index}.quantity`) || 0;
                    const weight = form.watch(`livestockDetails.${index}.weightPerAnimal`) || 0;
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
                          name={`livestockDetails.${index}.type`}
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
                          name={`livestockDetails.${index}.quantity`}
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
                          name={`livestockDetails.${index}.weightPerAnimal`}
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
                            const quantity = form.watch(`livestockDetails.${index}.quantity`) || 0;
                            const weight = form.watch(`livestockDetails.${index}.weightPerAnimal`) || 0;
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
              onClick={() => appendLivestock({ type: '', quantity: 1, weightPerAnimal: 0 })}
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
                  name="specialHandling"
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

            {/* Cargo Picture with Lifting Points Checkbox */}
            <div className="mt-4">
              <Controller
                control={form.control}
                name="cargoLiftingPoints"
                render={({ field }) => (
                  <div className="flex gap-2 items-center">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="cargoLiftingPoints"
                    />
                    <label
                      htmlFor="cargoLiftingPoints"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I wish to upload cargo picture with lifting points
                    </label>
                  </div>
                )}
              />
            </div>

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

        {/* Additional Information */}
        <div className="">
          <h1 className='text-xl font-semibold mb-4'>Additional Information</h1>
          <div className='px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-10'>
            <FormItem>
              <FormLabel>Please advise other relevant commercial terms such as loading/discharging rates and Incoterms.</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additionalInformation"
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
                      name="serviceContract"
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
                      name="transportModes.oceanFreight"
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
                      name="transportModes.landTransportation"
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
                      name="transportModes.airFreight"
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
                      name="additionalServices.portHandling"
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
                      name="additionalServices.customsClearance"
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
                      name="additionalServices.storageWarehousing"
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
                      name="additionalServices.inlandFreight"
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
                      name="additionalServices.inspectionQuality"
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
                      name="additionalServices.escortPermits"
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
                      name="additionalServices.other"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <FormLabel>Other (Specify):</FormLabel>
                  </div>
                  {form.watch("additionalServices.other") && (
                    <Controller
                      control={form.control}
                      name="additionalServices.otherSpecify"
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
                      name="additionalServices.additionalRequirements"
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
                          name="insurance.coverageDetails"
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

        {/* Company Details */}
        <div className="company-details-card">
          <h1 className='text-xl font-raleway font-medium my-6'>{t('companyDetails')}</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4'>
            <div>
              <FormItem>
                <FormLabel>{t('companyName')}</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.companyName"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Company Name" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>{t('contactPersonName')}</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.contactPerson"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Contact Name" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>{t('title')}</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.title"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Mr, Ms.. etc." {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <div className="col-span-1 md:col-span-2">
              <FormItem>
                <FormLabel>{t('countryOfOrigin')}</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.cityCountry"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <SearchableCountrySelect
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Select country"
                          className="w-full max-w-[300px]"
                        />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>{t('companyEmail')}</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.email"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Email" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>{t('phoneNumber')}</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.phone"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <PhoneInput
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                          defaultCountry="EG"
                          international
                          countryCallingCodeEditable={false}
                          placeholder="Enter phone number"
                          className="w-full max-w-[300px] border-2 rounded-xl"
                        />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
          </div>

          {/* Additional Contact Fields */}
          <div className="px-4 mt-6">
            <div className="space-y-4">
              {/* Additional Email Section */}
              <div className="space-y-3">
                {!form.watch("showAdditionalEmail") && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.setValue("showAdditionalEmail", true)}
                    className="w-fit"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Add Additional Email
                  </Button>
                )}
                
                {form.watch("showAdditionalEmail") && (
                  <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <FormItem>
                      <FormLabel>{t('additionalEmail')}</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="companyDetails.additionalEmail"
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input 
                                className="max-w-[300px] border-2 rounded-xl" 
                                placeholder="Email" 
                                {...field} 
                              />
                              {error && <p className="text-red-500">{error.message}</p>}
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                    
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        form.setValue("showAdditionalEmail", false);
                        form.setValue("companyDetails.additionalEmail", "");
                      }}
                      className="w-fit"
                    >
                      Remove Additional Email
                    </Button>
                  </div>
                )}
              </div>

              {/* Additional Phone Section */}
              <div className="space-y-3">
                {!form.watch("showAdditionalPhone") && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.setValue("showAdditionalPhone", true)}
                    className="w-fit"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Add Additional Phone
                  </Button>
                )}
                
                {form.watch("showAdditionalPhone") && (
                  <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <FormItem>
                      <FormLabel>{t('additionalPhoneNumber')}</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="companyDetails.additionalPhone"
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <PhoneInput
                                value={field.value}
                                onChange={(value) => field.onChange(value)}
                                defaultCountry="EG"
                                international
                                countryCallingCodeEditable={false}
                                placeholder="Enter additional phone number"
                                className="max-w-[300px] border-2 rounded-xl"
                              />
                              {error && <p className="text-red-500">{error.message}</p>}
                            </>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                    
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        form.setValue("showAdditionalPhone", false);
                        form.setValue("companyDetails.additionalPhone", "");
                      }}
                      className="w-fit"
                    >
                      Remove Additional Phone
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='mt-24'>
            <h1 className='font-semibold text-xl mb-6'>Important Information</h1>
            <div className='flex flex-col gap-3 text-sm text-muted-foreground'>
              <p>• For quote requests with long-term validity, please contact us.</p>
              <p>• Please do not enter personal or financial information, such as credit card details, or debit card details anywhere in your request.</p>
              <p>• Please note that when you submit your quote request, an automated confirmation e-mail will be sent to you containing the details you entered in this form.</p>
            </div>
          </div>
        </div>

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