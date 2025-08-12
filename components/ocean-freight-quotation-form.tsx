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
import { Plus, Minus, Calculator, FileText, Package, Truck, Ship, Warehouse, Shield, Eye, Wrench, Route } from 'lucide-react';
import ItemizedTable from './itemized-table';
import ConsolidatedForm from './consolidated-form';
import FileUpload from './file-upload';

// Define the form schema
const formSchema = z.object({
  routing: z.array(z.object({
    from: z.string().min(1, { message: "From location is required" }),
    to: z.string().min(1, { message: "To location is required" }),
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
  }),
});

type FormData = z.infer<typeof formSchema>;

const OceanFreightQuotationForm: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
  const t = useTranslations('Inland-forms');
  const [cargoMode, setCargoMode] = useState<'itemized' | 'consolidated'>('itemized');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      routing: [{ from: '', to: '' }],
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-5 w-5" />
              {t('routing')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {routingFields.map((field, index) => (
              <div key={field.id} className="grid md:grid-cols-3 gap-4">
                <FormItem>
                  <FormLabel>{t('from')} ({t('city')}, {t('country')})</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name={`routing.${index}.from`}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            placeholder="e.g., Shanghai, China"
                            {...field}
                          />
                          {error && <p className="text-red-500 text-sm">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel>{t('to')} ({t('city')}, {t('country')})</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name={`routing.${index}.to`}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            placeholder="e.g., Los Angeles, USA"
                            {...field}
                          />
                          {error && <p className="text-red-500 text-sm">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

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
              onClick={() => appendRoute({ from: '', to: '' })}
              className="w-fit"
            >
              <Plus className="h-4 w-4 mr-2" />
              {t('addRoute')}
            </Button>
          </CardContent>
        </Card>

        {/* Cargo Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              {t('cargo-details')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Cargo Entry Mode Selection */}
            <div className="flex gap-4">
                              <Button
                  type="button"
                  variant={cargoMode === 'itemized' ? 'default' : 'outline'}
                  onClick={() => {
                    setCargoMode('itemized');
                  form.setValue('entry_mode', 'itemized');
                  }}
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
          </CardContent>
        </Card>

        {/* Supporting Files */}
        <FileUpload 
                  control={form.control}
          isRequired={cargoMode === 'consolidated'}
                />

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Dates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Dates
            </CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Additional Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Additional Services
            </CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Company/Personal Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ship className="h-5 w-5" />
              Company/Personal Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.companyName"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="Company name" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Contact Person</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.contactPerson"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="Contact person name" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.title"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="Mr, Ms, Dr, etc." {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.city"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="City" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Country/Region</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.country"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="Country/Region" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.email"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input type="email" placeholder="Email address" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Additional Email (Optional)</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.additionalEmail"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input type="email" placeholder="Additional email" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.phone"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="+123456789" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Additional Phone (Optional)</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="companyDetails.additionalPhone"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input placeholder="+123456789" {...field} />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• Do not include personal financial information such as credit card details or debit card details anywhere in your request.</p>
              <p>• When you submit your quote request, an automated confirmation email will be sent to you containing the details you entered in this form.</p>
              <p>• For quote requests with long-term validity, please contact us directly.</p>
            </div>
          </CardContent>
        </Card>

        <Button type="submit" className="w-full md:w-auto">
          Submit Quote Request
        </Button>
      </form>
    </Form>
  );
};

export default OceanFreightQuotationForm; 