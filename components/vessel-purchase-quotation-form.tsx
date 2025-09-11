"use client"
import React, { useState } from 'react';
import { Controller, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Ship, Calendar, MapPin, FileText, DollarSign, Package } from 'lucide-react';
import CompanyDetailsCard from './company-details-card';

interface VesselPurchaseQuotationFormProps {
  onSubmit: (data: any) => void;
  isSubmitting?: boolean;
}

const VesselPurchaseQuotationForm: React.FC<VesselPurchaseQuotationFormProps> = ({ 
  onSubmit, 
  isSubmitting = false 
}) => {
  const t = useTranslations('Inland-errors');
  const tt = useTranslations('Inland-forms');
  const [is_submitting, set_is_submitting] = useState(false);

  // Define form schema for vessel purchases
  const formSchema = z.object({
    vessel: z.object({
      type: z.string().min(1, { message: "Vessel type is required" }),
      condition: z.enum(["new", "used"], { required_error: "Vessel condition is required" }),
      number: z.number().min(1, { message: "Number of vessels is required" }),
    }),
    delivery_date: z.string().min(1, { message: "Delivery date is required" }).refine(value => {
      return !isNaN(Date.parse(value));
    }, { message: "Invalid date format" }),
    pick_up_location: z.string().min(1, { message: "Pick up location is required" }),
    detailed_location: z.string().optional(),
    required_specifications: z.string().optional(), // Made optional as per user request
    budget: z.number().optional(),
    additional_information: z.string().optional(),
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

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vessel: {
        type: '',
        condition: 'new' as const,
        number: 1,
      },
      delivery_date: '',
      pick_up_location: '',
      detailed_location: '',
      required_specifications: '',
      budget: undefined,
      additional_information: '',
      company_details: {
        company_name: '',
        contact_person_name: '',
        title: '',
        country_of_origin: '',
        company_email: '',
        additional_email: '',
        phone_number: '',
        additional_phone_number: ''
      }
    }
  });

  // Type-safe submit handler
  const handleSubmit = async (values: any) => {
    set_is_submitting(true);
    try {
      await onSubmit(values);
    } finally {
      set_is_submitting(false);
    }
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          
          {/* Vessel Details Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ship className="h-5 w-5 text-blue-600" />
                Vessel Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Vessel Type */}
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Vessel Type & Specifications
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="vessel.type"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          className="max-w-[400px] border-2 rounded-xl"
                          placeholder="e.g., Cargo Ship, Tanker, Container Ship, Bulk Carrier"
                          {...field}
                        />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

              {/* Vessel Condition */}
              <FormItem className="space-y-3">
                <FormLabel className="text-base font-medium">Vessel Condition</FormLabel>
                <Controller
                  control={form.control}
                  name="vessel.condition"
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value || ""}
                        className="flex flex-row space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="new" />
                          <FormLabel className="font-normal">New Vessel</FormLabel>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="used" />
                          <FormLabel className="font-normal">Used Vessel</FormLabel>
                        </div>
                      </RadioGroup>
                      {error && <p className="text-red-500 text-sm">{error.message}</p>}
                    </>
                  )}
                />
              </FormItem>

              {/* Number of Vessels */}
              <FormItem>
                <FormLabel>Number of Vessels</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="vessel.number"
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <Input
                          type="number"
                          min="1"
                          className="max-w-[200px] border-2 rounded-xl"
                          placeholder="1"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                        />
                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                      </>
                    )}
                  />
                </FormControl>
              </FormItem>

            </CardContent>
          </Card>

          {/* Delivery & Location Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Delivery & Location Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Delivery Date */}
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Required Delivery Date
                  </FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="delivery_date"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            type="date"
                            className="border-2 rounded-xl"
                            {...field}
                          />
                          {error && <p className="text-red-500 text-sm">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

                {/* Pick Up Location */}
                <FormItem>
                  <FormLabel>Pick Up Location</FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="pick_up_location"
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            className="border-2 rounded-xl"
                            placeholder="Port or location for vessel pickup"
                            {...field}
                          />
                          {error && <p className="text-red-500 text-sm">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>

              {/* Detailed Location */}
              <FormItem>
                <FormLabel>Detailed Location (Optional)</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="detailed_location"
                    render={({ field }) => (
                      <Textarea
                        className="border-2 rounded-xl"
                        placeholder="Provide specific location details, coordinates, or additional location information"
                        rows={3}
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </FormItem>

            </CardContent>
          </Card>

          {/* Specifications & Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Specifications & Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Required Specifications - Made Optional */}
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  Required Specifications 
                  <Badge variant="secondary" className="ml-2 text-xs">Optional</Badge>
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="required_specifications"
                    render={({ field }) => (
                      <Textarea
                        className="border-2 rounded-xl"
                        placeholder="Specify vessel specifications such as: tonnage capacity, engine specifications, cargo hold dimensions, equipment requirements, classification society requirements, etc."
                        rows={4}
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </FormItem>

              {/* Budget */}
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Budget (Optional)
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <Input
                        type="number"
                        className="max-w-[300px] border-2 rounded-xl"
                        placeholder="Budget in USD"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                      />
                    )}
                  />
                </FormControl>
              </FormItem>

              {/* Additional Information */}
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="additional_information"
                    render={({ field }) => (
                      <Textarea
                        className="border-2 rounded-xl"
                        placeholder="Any additional requirements, special conditions, or information relevant to the vessel purchase"
                        rows={3}
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </FormItem>

            </CardContent>
          </Card>

          {/* Company Details */}
          <CompanyDetailsCard control={form.control} />

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <Button 
              type="submit" 
              
              disabled={is_submitting || isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              {(is_submitting || isSubmitting) ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Vessel Purchase Quotation'
              )}
            </Button>
          </div>

        </form>
      </Form>
    </FormProvider>
  );
};

export default VesselPurchaseQuotationForm;
