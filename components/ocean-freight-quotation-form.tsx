"use client"
import React, { useState, useEffect } from 'react';
import { Controller, useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useTranslations } from 'next-intl';
import { Plus, Minus, Calculator, FileText, Package, Truck, Ship, Warehouse, Shield, Eye, Wrench, Route, Mail, Phone } from 'lucide-react';
import ItemizedTable from './itemized-table';
import ConsolidatedForm from './consolidated-form';
import FileUpload from './file-upload';
import { PhoneInput } from '@/components/phone-input';
import { SearchableCountrySelect } from './searchable-country-select';

// Countries list for routing
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

// Define the form schema
const formSchema = z.object({
  routing: z.array(z.object({
    fromCountry: z.string().min(1, { message: "From country is required" }),
    fromPort: z.string().min(1, { message: "From port/area is required" }),
    toCountry: z.string().min(1, { message: "To country is required" }),
    toPort: z.string().min(1, { message: "To port/area is required" }),
  })),
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
    weight_unit: z.enum(["kg", "ton"], { required_error: "Weight unit is required" }),
    total_volume: z.number().min(1, { message: "Total volume is required" }),
    volume_unit: z.enum(["cbm", "m3"], { required_error: "Volume unit is required" }),
    dangerous_goods: z.boolean(),
    un_number: z.string().optional(),
    class: z.string().optional(),
    special_instructions: z.string().optional(),
    packaging_type: z.enum(["pallets", "crates", "boxes", "other"], {
      required_error: "Packaging type is required",
    }),
    packaging_type_other: z.string().optional(),
    stackable: z.boolean(),
    temperature_control: z.boolean(),
    temperature_min: z.number().optional(),
    temperature_max: z.number().optional(),
    special_handling: z.string().optional(),
  }).optional(),
  supportingFiles: z.string().optional(),
  additionalInformation: z.string().optional(),
  effectiveDate: z.string().min(1, { message: "Effective date is required" }),
  expiryDate: z.string().min(1, { message: "Expiry date is required" }),
  serviceContractNumber: z.string().optional(),
  additionalServices: z.object({
    portHandling: z.boolean().default(false),
    craneHeavyLift: z.boolean().default(false),
    customsClearance: z.boolean().default(false),
    storageWarehousing: z.boolean().default(false),
    inlandFreight: z.boolean().default(false),
    inspectionQualityControl: z.boolean().default(false),
    escortPermits: z.boolean().default(false),
    engineeringSupport: z.boolean().default(false),
    other: z.boolean().default(false),
    otherDetails: z.string().optional(),
  }),
  companyDetails: z.object({
    companyName: z.string().min(1, { message: "Company name is required" }),
    contactPerson: z.string().min(1, { message: "Contact person is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    city: z.string().min(1, { message: "City is required" }),
    country: z.string().min(1, { message: "Country is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    additionalEmail: z.string().email({ message: "Valid email format" }).optional(),
    phone: z.string().min(1, { message: "Phone number is required" }),
    additionalPhone: z.string().optional(),
    showAdditionalEmail: z.boolean().default(false),
    showAdditionalPhone: z.boolean().default(false),
  }),
});

type FormData = z.infer<typeof formSchema>;

const OceanFreightQuotationForm: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
  const t = useTranslations('Inland-forms');
  const [cargoMode, setCargoMode] = useState<'itemized' | 'consolidated'>('itemized');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      routing: [{ fromCountry: '', fromPort: '', toCountry: '', toPort: '' }],
      entry_mode: 'itemized',
      itemized_data: [{
        commodity: '',
        packaging_type: 'pallets',
        packaging_type_other: '',
        stackable: true,
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
        temperature_min: 0,
        temperature_max: 0,
      }],
      consolidated_data: {
        commodity_types: '',
        total_quantity: 1,
        total_weight: 0,
        weight_unit: 'kg',
        total_volume: 0,
        volume_unit: 'cbm',
        dangerous_goods: false,
        un_number: '',
        class: '',
        special_instructions: '',
        packaging_type: 'pallets',
        packaging_type_other: '',
        stackable: true,
        temperature_control: false,
        temperature_min: 0,
        temperature_max: 0,
        special_handling: '',
      },
      supportingFiles: '',
      additionalInformation: '',
      effectiveDate: '',
      expiryDate: '',
      serviceContractNumber: '',
      additionalServices: {
        portHandling: false,
        craneHeavyLift: false,
        customsClearance: false,
        storageWarehousing: false,
        inlandFreight: false,
        inspectionQualityControl: false,
        escortPermits: false,
        engineeringSupport: false,
        other: false,
        otherDetails: '',
      },
      companyDetails: {
        companyName: '',
        contactPerson: '',
        title: '',
        city: '',
        country: '',
        email: '',
        additionalEmail: '',
        phone: '',
        additionalPhone: '',
        showAdditionalEmail: false,
        showAdditionalPhone: false,
      },
    },
  });

  const { fields: routingFields, append: appendRoute, remove: removeRoute } = useFieldArray({
    control: form.control,
    name: "routing",
  });



  const handleSubmit = (values: FormData) => {
    console.log("Form submitted:", values);
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* Route Selection */}
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
                      variant="destructive"
                      onClick={() => removeRoute(index)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={() => appendRoute({ fromCountry: '', fromPort: '', toCountry: '', toPort: '' })}
              className="w-fit"
            >
              <Plus className="h-4 w-4 mr-2" />
              {t('addRoute')}
            </Button>
          </div>
        </div>

        {/* Cargo Details */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>{t('cargo-details')}</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {/* Cargo Entry Mode Selection */}
            <div className="flex flex-col sm:flex-row gap-4">
                              <Button
                  type="button"
                  variant={cargoMode === 'itemized' ? 'default' : 'outline'}
                  onClick={() => {
                    setCargoMode('itemized');
                  form.setValue('entry_mode', 'itemized');
                  }}
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                Itemized Entry by Commodity
                </Button>
                <Button
                  type="button"
                  variant={cargoMode === 'consolidated' ? 'default' : 'outline'}
                  onClick={() => {
                    setCargoMode('consolidated');
                  form.setValue('entry_mode', 'consolidated');
                  }}
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                Consolidated Entry for Multiple Commodities
                </Button>
            </div>

            {/* Cargo Entry Section */}
            {cargoMode === 'itemized' ? (
              <ItemizedTable control={form.control} />
            ) : (
              <ConsolidatedForm control={form.control} />
            )}
          </div>
        </div>

        {/* Supporting Files */}
        <FileUpload 
                  control={form.control}
          isRequired={cargoMode === 'consolidated'}
                />

        {/* Additional Information */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Additional Information</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additionalInformation"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Textarea
                        placeholder="Loading/discharging rates, Incoterms, special service notes..."
                        rows={4}
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

        {/* Dates */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Dates</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="grid md:grid-cols-3 gap-4">
              <FormItem>
                <FormLabel>Effective Date</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="effectiveDate"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input type="date" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
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
                    name="expiryDate"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input type="date" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
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
                    name="serviceContractNumber"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="Contract number if applicable" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Additional Services</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="grid md:grid-cols-2 gap-4">
              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additionalServices.portHandling"
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
                    name="additionalServices.craneHeavyLift"
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
                    name="additionalServices.customsClearance"
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
                    name="additionalServices.storageWarehousing"
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
                    name="additionalServices.inlandFreight"
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label className="text-sm">Inland Freight</label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additionalServices.inspectionQualityControl"
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
                    name="additionalServices.escortPermits"
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
                    name="additionalServices.engineeringSupport"
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
            </div>

            <FormItem className="mt-4">
              <FormControl>
                <Controller
                  control={form.control}
                  name="additionalServices.other"
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

            {form.watch('additionalServices.other') && (
              <FormItem className="mt-2">
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additionalServices.otherDetails"
                    render={({ field }) => (
                      <Textarea
                        placeholder="Please specify other services required"
                        rows={3}
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          </div>
        </div>

        {/* Company/Personal Details */}
        <div className="company-details-card">
          <h1 className='text-xl font-raleway font-medium my-6'>Company/Personal Details</h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4'>
            <div>
              <FormItem>
                <FormLabel>Company Name</FormLabel>
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
                <FormLabel>Contact Person Name</FormLabel>
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
                <FormLabel>Title</FormLabel>
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
              <div className="flex items-center gap-4">
                <h3 className="text-sm font-medium text-gray-700 whitespace-nowrap">Country of Origin</h3>
                <FormControl className="flex-1">
                  <Controller
                    control={form.control}
                    name="companyDetails.city"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <SearchableCountrySelect
                          value={field.value}
                          onValueChange={field.onChange}
                          placeholder="Select country"
                          className="w-full"
                        />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>
            </div>
            <div>
              <FormItem>
                <FormLabel>Company Email Address</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.email"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input type="email" className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Email" {...field} />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
            <div>
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
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
                {!form.watch("companyDetails.showAdditionalEmail") && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.setValue("companyDetails.showAdditionalEmail", true)}
                    className="w-fit"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Add Additional Email
                  </Button>
                )}
                
                {form.watch("companyDetails.showAdditionalEmail") && (
                  <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <FormItem>
                      <FormLabel>Add additional email address</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="companyDetails.additionalEmail"
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input 
                                type="email"
                                className="w-[300px] border-2 rounded-xl" 
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
                        form.setValue("companyDetails.showAdditionalEmail", false);
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
                {!form.watch("companyDetails.showAdditionalPhone") && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.setValue("companyDetails.showAdditionalPhone", true)}
                    className="w-fit"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Add Additional Phone
                  </Button>
                )}
                
                {form.watch("companyDetails.showAdditionalPhone") && (
                  <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <FormItem>
                      <FormLabel>Add additional mobile number</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="companyDetails.additionalPhone"
                          render={({ field, fieldState: { error } }) => (
                            <>
                              <Input 
                                type="tel"
                                className="w-[300px] border-2 rounded-xl" 
                                placeholder="+123456789" 
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
                        form.setValue("companyDetails.showAdditionalPhone", false);
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
        </div>

        {/* Important Notes */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Important Notes</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• Do not include personal financial information such as credit card details or debit card details anywhere in your request.</p>
              <p>• When you submit your quote request, an automated confirmation email will be sent to you containing the details you entered in this form.</p>
              <p>• For quote requests with long-term validity, please contact us directly.</p>
            </div>
          </div>
        </div>

        <Button type="submit" className="mt-4 w-[200px]">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default OceanFreightQuotationForm; 