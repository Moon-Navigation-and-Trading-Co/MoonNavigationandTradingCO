"use client";

import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form';
import { Trash2, Plus, Mail, Phone } from 'lucide-react';
import { PhoneInput } from '@/components/phone-input';
import { SearchableCountrySelect } from './searchable-country-select';
import CompanyDetailsCard from './company-details-card';
import RoutingCard0 from './routing-card-0';

// Complete form schema definition
const tankersFormSchema = z.object({
  routing: z.array(z.object({
    from_country: z.string().min(1, { message: "From country is required" }),
    from_port: z.string().min(1, { message: "From port/area is required" }),
    to_country: z.string().min(1, { message: "To country is required" }),
    to_port: z.string().min(1, { message: "To port/area is required" }),
  })).min(1, "At least one route is required"),
  effective_date: z.string().min(1, "Effective date is required"),
  expiry_date: z.string().min(1, "Expiry date is required"),
  cargo_type: z.array(z.string()).min(1, "At least one cargo type is required"),
  other_cargo_type: z.string().optional(),
  total_quantity: z.number().min(0, "Quantity must be positive"),
  quantity_unit: z.string().min(1, "Unit is required"),
  temperature_requirement: z.string(),
  temperature_range: z.string().optional(),
  flashpoint: z.string().optional(),
  tanker_type: z.array(z.string()).min(1, "At least one tanker type is required"),
  charter_type: z.string().min(1, "Charter type is required"),
  cargo_handling: z.array(z.string()).optional(),
  supporting_files: z.array(z.any()).optional(),
  cargo_lifting_points: z.boolean().default(false),
  additional_information: z.string().optional(),
  service_contract: z.string().optional(),
  safety_compliance: z.array(z.string()).optional(),
  other_safety_compliance: z.string().optional(),
  marine_insurance: z.string().min(1, "Marine insurance requirement is required"),
  insurance_details: z.string().optional(),
  additional_services: z.array(z.string()).optional(),
  other_additional_service: z.string().optional(),
  additional_requirements: z.string().optional(),
  company_name: z.string().min(1, "Company name is required"),
  contact_person_name: z.string().min(1, "Contact person name is required"),
  title: z.string().min(1, "Title is required"),
  city_country: z.string().min(1, "City/Country is required"),
  company_email: z.string().email("Valid email is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  show_additional_email: z.boolean().default(false),
  additional_email: z.string().optional(),
  show_additional_phone: z.boolean().default(false),
  additional_phone: z.string().optional()
});

type TankersFormData = z.infer<typeof tankersFormSchema>;

interface TankersQuotationFormProps {
  onSubmit: (data: TankersFormData) => void;
  isSubmitting?: boolean; // Add this line
}

export default function TankersQuotationForm({ onSubmit, isSubmitting = false }: TankersQuotationFormProps) {
  const form = useForm<TankersFormData>({
    resolver: zodResolver(tankersFormSchema),
    defaultValues: {
      routing: [{ from_country: '', from_port: '', to_country: '', to_port: '' }],
      effective_date: '',
      expiry_date: '',
      cargo_type: [],
      other_cargo_type: '',
      total_quantity: 0,
      quantity_unit: '',
      temperature_requirement: 'standard',
      temperature_range: '',
      flashpoint: '',
      tanker_type: [],
      charter_type: '',
      cargo_handling: [],
      supporting_files: [],
      cargo_lifting_points: false,
      additional_information: '',
      service_contract: '',
      safety_compliance: [],
      other_safety_compliance: '',
      marine_insurance: '',
      insurance_details: '',
      additional_services: [],
      other_additional_service: '',
      additional_requirements: '',
      company_name: '',
      contact_person_name: '',
      title: '',
      city_country: '',
      company_email: '',
      phone_number: '',
      show_additional_email: false,
      additional_email: '',
      show_additional_phone: false,
      additional_phone: ''
    }
  });


  const handleFormSubmit = (data: TankersFormData) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
        
        {/* Routing Section */}
        <RoutingCard0 control={form.control} />

        {/* Cargo Details */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Cargo Details</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {/* Type of Cargo */}
            <div>
              <FormLabel className="text-base font-medium">Type of Cargo (Select one or more):</FormLabel>
              <div className="mt-3 space-y-3">
                {['Crude Oil', 'Refined Petroleum Products (Gasoline, Diesel, Jet Fuel, etc.)', 'Chemical Liquids (Hazardous/Non-Hazardous)', 'Liquefied Gases (LNG/LPG)'].map((cargo) => (
                  <div key={cargo} className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="cargo_type"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value?.includes(cargo)}
                          onCheckedChange={(checked) => {
                            const currentValues = field.value || [];
                            if (checked) {
                              field.onChange([...currentValues, cargo]);
                            } else {
                              field.onChange(currentValues.filter((value: string) => value !== cargo));
                            }
                          }}
                        />
                      )}
                    />
                    <label className="text-sm">{cargo}</label>
                  </div>
                ))}
                
                {/* Other option with specify field */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="cargo_type"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value?.includes('Other')}
                          onCheckedChange={(checked) => {
                            const currentValues = field.value || [];
                            if (checked) {
                              field.onChange([...currentValues, 'Other']);
                            } else {
                              field.onChange(currentValues.filter((value: string) => value !== 'Other'));
                            }
                          }}
                        />
                      )}
                    />
                    <label className="text-sm">Other (Please specify)</label>
                  </div>
                  {form.watch('cargo_type')?.includes('Other') && (
                    <Controller
                      control={form.control}
                      name="other_cargo_type"
                      render={({ field }) => (
                        <Input
                          placeholder="Specify other cargo type"
                          className="w-[300px] border-2 rounded-xl ml-6"
                          {...field}
                        />
                      )}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Total Quantity */}
            <FormItem>
              <FormLabel>Total Quantity (Metric Tons or Barrels)</FormLabel>
              <div className="grid md:grid-cols-2 gap-5">
                <FormControl>
                  <Controller
                    control={form.control}
                    name="total_quantity"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          type="number"
                          min="0"
                          step="0.01"
                          className="w-[300px] border-2 rounded-xl"
                          placeholder="Enter quantity"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                        />
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>

                <FormControl>
                  <Controller
                    control={form.control}
                    name="quantity_unit"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <SelectTrigger className="w-[300px] border-2 rounded-xl">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="metric_tons">Metric Tons</SelectItem>
                            <SelectItem value="barrels">Barrels</SelectItem>
                          </SelectContent>
                        </Select>
                        {error && <p className="text-red-500">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </div>
            </FormItem>

            {/* Temperature Requirements */}
            <div>
              <FormLabel className="text-base font-medium">Temperature Requirements:</FormLabel>
              <Controller
                control={form.control}
                name="temperature_requirement"
                render={({ field }) => (
                  <RadioGroup 
                    value={field.value || ""} 
                    onValueChange={field.onChange} 
                    className="mt-3 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="standard" id="temp_standard" />
                      <label htmlFor="temp_standard" className="text-sm font-medium">Standard Temperature</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="temperature_controlled" id="temp_controlled" />
                      <label htmlFor="temp_controlled" className="text-sm font-medium">Temperature-Controlled</label>
                    </div>
                  </RadioGroup>
                )}
              />
              
              {form.watch('temperature_requirement') === 'temperature_controlled' && (
                <FormItem className="mt-3">
                  <FormLabel>Specify Range</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="temperature_range"
                      render={({ field }) => (
                        <Input
                          placeholder="e.g., -20°C to +5°C"
                          className="w-[300px] border-2 rounded-xl"
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                </FormItem>
              )}
            </div>

            {/* Flashpoint */}
            <FormItem>
              <FormLabel>Flashpoint (if applicable)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="flashpoint"
                  render={({ field }) => (
                    <Input
                      placeholder="e.g., 60°C, N/A if not applicable"
                      className="w-[300px] border-2 rounded-xl"
                      {...field}
                    />
                  )}
                />
              </FormControl>
            </FormItem>
          </div>
        </div>

        {/* Vessel & Transport Specifications */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Vessel & Transport Specifications</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {/* Preferred Tanker Type */}
            <div>
              <FormLabel className="text-base font-medium">Preferred Tanker Type (Select one or more):</FormLabel>
              <div className="mt-3 space-y-3">
                {[
                  'Crude Oil Tanker (VLCC, Suezmax, Aframax, etc.)',
                  'Product Tanker (MR, LR1, LR2)',
                  'Chemical Tanker (IMO Class 1, 2, 3)',
                  'LNG/LPG Carrier'
                ].map((tanker) => (
                  <div key={tanker} className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="tanker_type"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value?.includes(tanker)}
                          onCheckedChange={(checked) => {
                            const currentValues = field.value || [];
                            if (checked) {
                              field.onChange([...currentValues, tanker]);
                            } else {
                              field.onChange(currentValues.filter((value: string) => value !== tanker));
                            }
                          }}
                        />
                      )}
                    />
                    <label className="text-sm">{tanker}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Charter Type */}
            <FormItem>
              <FormLabel>Charter Type (Select one)</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="charter_type"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select onValueChange={field.onChange} value={field.value || ""}>
                        <SelectTrigger className="w-[300px] border-2 rounded-xl">
                          <SelectValue placeholder="Select charter type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="voyage_charter">Voyage Charter</SelectItem>
                          <SelectItem value="time_charter">Time Charter</SelectItem>
                          <SelectItem value="spot_shipment">Spot Shipment</SelectItem>
                        </SelectContent>
                      </Select>
                      {error && <p className="text-red-500">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </FormItem>

            {/* Cargo Handling & Storage Requirements */}
            <div>
              <FormLabel className="text-base font-medium">Cargo Handling & Storage Requirements (Check all that apply):</FormLabel>
              <div className="mt-3 space-y-3">
                {[
                  'Dedicated Segregated Tanks',
                  'Inert Gas System',
                  'Nitrogen Blanketing',
                  'Closed Loading/Discharging System'
                ].map((requirement) => (
                  <div key={requirement} className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="cargo_handling"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value?.includes(requirement)}
                          onCheckedChange={(checked) => {
                            const currentValues = field.value || [];
                            if (checked) {
                              field.onChange([...currentValues, requirement]);
                            } else {
                              field.onChange(currentValues.filter((value: string) => value !== requirement));
                            }
                          }}
                        />
                      )}
                    />
                    <label className="text-sm">{requirement}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Files */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Supporting files (optional)</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <div>
              <FormLabel>Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="supporting_files"
                  render={({ field }) => (
                    <Input
                      type="file"
                      multiple
                      accept=".pdf,.jpeg,.jpg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                      className="w-[300px] border-2 rounded-xl"
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        field.onChange(files);
                      }}
                    />
                  )}
                />
              </FormControl>
            </div>

            <div className="flex items-center space-x-2">
              <Controller
                control={form.control}
                name="cargo_lifting_points"
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="cargo_lifting_points"
                  />
                )}
              />
              <label htmlFor="cargo_lifting_points" className="text-sm font-medium">
                I wish to upload cargo picture with lifting points
              </label>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Additional Information</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            <FormItem>
              <FormLabel>Please advise other relevant commercial terms</FormLabel>
              <FormControl>
                <Controller
                  control={form.control}
                  name="additional_information"
                  render={({ field }) => (
                    <Textarea
                      placeholder="Please provide any additional details about loading/discharging rates and Incoterms..."
                      className="w-[300px] border-2 rounded-xl"
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
              <h1 className='text-xl font-raleway font-medium mb-4'>Service Contract</h1>
              <div className='flex gap-5 p-4 items-center'>
                <FormItem>
                  <FormLabel>Service contract <span className='text-muted-foreground text-xs'>(Optional)</span></FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="service_contract"
                      render={({ field }) => (
                        <Input
                          className="w-[300px] border-2 rounded-xl"
                          placeholder="Service Contract No."
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

        {/* Safety, Compliance & Documentation */}
        <div className="">
          <h1 className='text-xl font-raleway font-medium'>Safety, Compliance & Documentation</h1>
          <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
            {/* Regulatory & Safety Compliance */}
            <div>
              <FormLabel className="text-base font-medium">Regulatory & Safety Compliance Required (Check all that apply):</FormLabel>
              <div className="mt-3 space-y-3">
                {[
                  'Material Safety Data Sheet (MSDS)',
                  'International Maritime Dangerous Goods (IMDG) Code Compliance',
                  'Certificate of Analysis (COA)',
                  'Tanker Cleaning Certificate'
                ].map((compliance) => (
                  <div key={compliance} className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="safety_compliance"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value?.includes(compliance)}
                          onCheckedChange={(checked) => {
                            const currentValues = field.value || [];
                            if (checked) {
                              field.onChange([...currentValues, compliance]);
                            } else {
                              field.onChange(currentValues.filter((value: string) => value !== compliance));
                            }
                          }}
                        />
                      )}
                    />
                    <label className="text-sm">{compliance}</label>
                  </div>
                ))}
                
                {/* Other Specify Option */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Controller
                      control={form.control}
                      name="safety_compliance"
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value?.includes('Other')}
                          onCheckedChange={(checked) => {
                            const currentValues = field.value || [];
                            if (checked) {
                              field.onChange([...currentValues, 'Other']);
                            } else {
                              field.onChange(currentValues.filter((value: string) => value !== 'Other'));
                            }
                          }}
                        />
                      )}
                    />
                    <label className="text-sm">Other (Specify)</label>
                  </div>
                  {form.watch('safety_compliance')?.includes('Other') && (
                    <Controller
                      control={form.control}
                      name="other_safety_compliance"
                      render={({ field }) => (
                        <Input
                          placeholder="Specify other compliance"
                          className="w-[300px] border-2 rounded-xl ml-6"
                          {...field}
                        />
                      )}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Marine Insurance */}
            <div>
              <FormLabel className="text-base font-medium">Do You Require Marine Insurance?</FormLabel>
              <Controller
                control={form.control}
                name="marine_insurance"
                render={({ field }) => (
                  <RadioGroup onValueChange={field.onChange} value={field.value || ""} className="mt-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="insurance_yes" />
                      <label htmlFor="insurance_yes" className="text-sm font-medium">Yes</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="insurance_no" />
                      <label htmlFor="insurance_no" className="text-sm font-medium">No</label>
                    </div>
                  </RadioGroup>
                )}
              />
              
              {form.watch('marine_insurance') === 'yes' && (
                <FormItem className="mt-3">
                  <FormLabel>If yes, specify coverage type & value:</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="insurance_details"
                      render={({ field }) => (
                        <Textarea
                          placeholder="Please specify the coverage type and value required"
                          className="w-[300px] border-2 rounded-xl"
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
        </div>

        {/* Additional Required Services */}
        <FormItem className='pb-4'>
          <FormControl>
            <div>
              <h1 className='text-xl font-raleway font-medium mb-4'>Additional Required Services</h1>
              <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                <div>
                  <FormLabel className="text-base font-medium">(Select any required services.)</FormLabel>
                  <div className="mt-3 space-y-3">
                    {[
                      'Port Handling & Stevedoring',
                      'Customs Clearance',
                      'Storage & Warehousing',
                      'Transport to/from Port (Inland Freight)',
                      'Inspection & Quality Control',
                      'Escort or Permits (if applicable)'
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Controller
                          control={form.control}
                          name="additional_services"
                          render={({ field }) => (
                            <Checkbox
                              checked={field.value?.includes(service)}
                              onCheckedChange={(checked) => {
                                const currentValues = field.value || [];
                                if (checked) {
                                  field.onChange([...currentValues, service]);
                                } else {
                                  field.onChange(currentValues.filter((value: string) => value !== service));
                                }
                              }}
                            />
                          )}
                        />
                        <label className="text-sm">{service}</label>
                      </div>
                    ))}
                    
                    {/* Other Specify Option */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Controller
                          control={form.control}
                          name="additional_services"
                          render={({ field }) => (
                            <Checkbox
                              checked={field.value?.includes('Other')}
                              onCheckedChange={(checked) => {
                                const currentValues = field.value || [];
                                if (checked) {
                                  field.onChange([...currentValues, 'Other']);
                                } else {
                                  field.onChange(currentValues.filter((value: string) => value !== 'Other'));
                                }
                              }}
                            />
                          )}
                        />
                        <label className="text-sm">Other (Specify)</label>
                      </div>
                      {form.watch('additional_services')?.includes('Other') && (
                        <Controller
                          control={form.control}
                          name="other_additional_service"
                          render={({ field }) => (
                            <Input
                              placeholder="Specify other service"
                              className="w-[300px] border-2 rounded-xl ml-6"
                              {...field}
                            />
                          )}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <FormItem>
                  <FormLabel>Please describe any additional service or special requirement not listed above.</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="additional_requirements"
                      render={({ field }) => (
                        <Textarea
                          placeholder="Please describe any additional requirements..."
                          className="w-[300px] border-2 rounded-xl"
                          rows={4}
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

        {/* Company Details */}
        <CompanyDetailsCard control={form.control} />

        {/* Submit Button */}
        <Button type="submit" className={`mt-4 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
          {isSubmitting ? (
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