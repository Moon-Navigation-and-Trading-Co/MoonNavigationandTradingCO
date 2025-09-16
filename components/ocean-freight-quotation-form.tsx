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
import { PhoneInput } from '@/components/phone-input';
import { SearchableCountrySelect } from './searchable-country-select';
import CompanyDetailsCard from './company-details-card';
import RoutingCard0 from './routing-card-0';

// Complete form schema definition
const formSchema = z.object({
  routing: z.array(z.object({
    from_country: z.string().min(1, { message: "From country is required" }),
    from_port: z.string().min(1, { message: "From port/area is required" }),
    to_country: z.string().min(1, { message: "To country is required" }),
    to_port: z.string().min(1, { message: "To port/area is required" }),
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
  supporting_files: z.string().optional(),
  additional_information: z.string().optional(),
  effective_date: z.string().min(1, { message: "Effective date is required" }),
  expiry_date: z.string().min(1, { message: "Expiry date is required" }),
  service_contract_number: z.string().optional(),
  additional_services: z.object({
    port_handling: z.boolean().default(false),
    crane_heavy_lift: z.boolean().default(false),
    customs_clearance: z.boolean().default(false),
    storage_warehousing: z.boolean().default(false),
    inland_freight: z.boolean().default(false),
    inspection_quality_control: z.boolean().default(false),
    escort_permits: z.boolean().default(false),
    engineering_support: z.boolean().default(false),
    other: z.boolean().default(false),
    other_details: z.string().optional(),
  }),
  company_details: z.object({
    company_name: z.string().min(1, { message: "Company name is required" }),
    contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
    company_email: z.string().email({ message: "Valid email is required" }),
    additional_email: z.string().email().optional().or(z.literal('')),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    additional_phone_number: z.string().optional(),
  })
});

type FormData = z.infer<typeof formSchema>;

// Fix the component props interface
interface OceanFreightQuotationFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting?: boolean;
}

const OceanFreightQuotationForm: React.FC<OceanFreightQuotationFormProps> = ({ 
  onSubmit, 
  isSubmitting = false 
}) => {
  const t = useTranslations('Inland-forms');
  const [cargoMode, setCargoMode] = useState<'itemized' | 'consolidated'>('itemized');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      routing: [{
        from_country: '',
        from_port: '',
        to_country: '',
        to_port: '',
      }],
      entry_mode: 'itemized',
      itemized_data: [{
        commodity: '',
        packaging_type: 'pallets',
        packaging_type_other: '',
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
        temperature_min: undefined,
        temperature_max: undefined,
      }],
      consolidated_data: {
        commodity_types: '',
        total_quantity: 0,
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
        stackable: false,
        temperature_control: false,
        temperature_min: undefined,
        temperature_max: undefined,
        special_handling: '',
      },
      supporting_files: '',
      additional_information: '',
      effective_date: '',
      expiry_date: '',
      service_contract_number: '',
      additional_services: {
        port_handling: false,
        crane_heavy_lift: false,
        customs_clearance: false,
        storage_warehousing: false,
        inland_freight: false,
        inspection_quality_control: false,
        escort_permits: false,
        engineering_support: false,
        other: false,
        other_details: '',
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
      }
    }
  });

  const handleSubmit = (values: FormData) => {
    console.log("Form submitted:", values);
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* Route Selection */}
        <RoutingCard0 control={form.control} />
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
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Supporting Files</h2>
          <FormItem>
            <FormLabel>Upload Files {cargoMode === 'consolidated' && <span className="text-red-500">*</span>}</FormLabel>
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

        {/* Additional Information */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Additional Information</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additional_information"
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
                    name="effective_date"
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
                    name="expiry_date"
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
                    name="service_contract_number"
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
                    name="additional_services.port_handling"
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
                    name="additional_services.storage_warehousing"
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
                    name="additional_services.inland_freight"
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
            </div>

            <FormItem className="mt-4">
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

            {form.watch('additional_services.other') && (
              <FormItem className="mt-2">
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additional_services.other_details"
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
        <CompanyDetailsCard control={form.control} />

        <Button type="submit" className={`mt-4 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </div>
          ) : "Submit"}
        </Button>      </form>
    </Form>
  );
};

export default OceanFreightQuotationForm; 