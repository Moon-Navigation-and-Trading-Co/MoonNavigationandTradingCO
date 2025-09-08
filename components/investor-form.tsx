"use client"
import React, { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from 'next-intl';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import RequestQuoteButton from './RequestQuoteButton';
import { Mail, Phone } from 'lucide-react';
import { SearchableCountrySelect } from './searchable-country-select';

// 1. Define a type-safe form handler using z.infer
const InvestorForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')
    
    // State for additional contact fields
    const [showAdditionalEmail, setShowAdditionalEmail] = useState(false);
    const [showAdditionalPhone, setShowAdditionalPhone] = useState(false);

    // Define your Zod schema
    const formSchema = z.object({
        // Personal / Company Information
        full_name: z.string().min(1, { message: t("Required") }),
        company_name: z.string().optional(),
        position_title: z.string().min(1, { message: t("Required") }),
        nationality: z.string().min(1, { message: t("Required") }),
        email: z.string().email({ message: t("Email") }),
        additional_email: z.string().email().optional().or(z.literal('')),
        phone_number: z.string().min(1, { message: t("PhoneNumber") }),
        additional_phone_number: z.string().optional(),
        city_country_residence: z.string().min(1, { message: t("Required") }),

        // Investment Interest
        investor_type: z.string().min(1, { message: t("Required") }),
        investor_type_other: z.string().optional(),
        investment_range: z.string().min(1, { message: t("Required") }),
        average_check_size: z.string().optional(),
        preferred_investment_type: z.array(z.string()).min(1, { message: t("Required") }),
        preferred_investment_type_other: z.string().optional(),

        // Area of Interest
        areas_of_interest: z.array(z.string()).min(1, { message: t("Required") }),
        areas_of_interest_other: z.string().optional(),

        // Preferred Interest Rate
        interest_rate_type: z.string().optional(),
        fixed_interest_rate: z.string().optional(),

        // Background & Intent
        background_linkedin: z.string().optional(),
        investment_interest_reason: z.string().optional(),
        require_nda: z.string().min(1, { message: t("Required") }),

        // Additional Notes
        additional_notes: z.string().optional(),
    });

    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: '',
            company_name: '',
            position_title: '',
            nationality: '',
            email: '',
            additional_email: '',
            phone_number: '',
            additional_phone_number: '',
            city_country_residence: '',
            investor_type: '',
            investor_type_other: '',
            investment_range: '',
            average_check_size: '',
            preferred_investment_type: [],
            preferred_investment_type_other: '',
            areas_of_interest: [],
            areas_of_interest_other: '',
            interest_rate_type: '',
            fixed_interest_rate: '',
            background_linkedin: '',
            investment_interest_reason: '',
            require_nda: '',
            additional_notes: '',
        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    const areasOfInterest = [
        "Maritime Logistics",
        "Ship Management", 
        "International Trade",
        "Freight & Transit",
        "Oil & Bunkering Services",
        "Infrastructure / Ports",
        "Expansion Projects"
    ];

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <p className="text-muted-foreground">
                        Thank you for your interest in investing in Moon Navigation and Trading Co. Please complete the form below and our team will get in touch.
                    </p>
                </div>

                {/* Personal / Company Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Personal / Company Information</h3>
                    
                    {/* First Row: Full Name, Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">Full Name *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="full_name"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[280px] h-10 border-2 rounded-xl" placeholder="Insert Full Name" {...field} />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">Company Name (if applicable)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="company_name"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[280px] h-10 border-2 rounded-xl" placeholder="Insert Company Name" {...field} />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </div>
                    </div>

                    {/* Second Row: Position/Title, Nationality */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">Position / Title *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="position_title"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[280px] h-10 border-2 rounded-xl" placeholder="Insert Job Title" {...field} />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">Nationality *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="nationality"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <SearchableCountrySelect
                                              value={field.value || ""}
                                              onValueChange={field.onChange}
                                              placeholder="Select country"
                                              className="w-full max-w-[280px]"
                                            />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </div>
                    </div>

                    {/* Third Row: Email Address, Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">Email Address *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="email"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[280px] h-10 border-2 rounded-xl" placeholder="Insert Email Address" {...field} />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                            
                            {/* Add Additional Email Button - Under Email Field */}
                            <div className="mt-2">
                                {!showAdditionalEmail && (
                                    <RequestQuoteButton
                                        variant="outline"
                                        onClick={() => setShowAdditionalEmail(true)}
                                        className="w-fit text-sm"
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        Add Additional Email
                                    </RequestQuoteButton>
                                )}
                            </div>
                        </div>

                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">Phone Number *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="phone_number"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[280px] h-10 border-2 rounded-xl" placeholder="Insert Number" {...field} />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                            
                            {/* Add Additional Phone Button - Under Phone Field */}
                            <div className="mt-2">
                                {!showAdditionalPhone && (
                                    <RequestQuoteButton
                                        variant="outline"
                                        onClick={() => setShowAdditionalPhone(true)}
                                        className="w-fit text-sm"
                                    >
                                        <Phone className="h-4 w-4 mr-2" />
                                        Add Additional Phone
                                    </RequestQuoteButton>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional Email Expanded Section */}
                    {showAdditionalEmail && (
                        <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <FormItem>
                                <FormLabel>Additional Email Address</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="additional_email"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input className="max-w-[280px] border-2 rounded-xl" placeholder="Insert Email Address" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </FormItem>
                            
                            <RequestQuoteButton
                                variant="secondary"
                                onClick={() => setShowAdditionalEmail(false)}
                                className="w-fit"
                            >
                                Remove Additional Email
                            </RequestQuoteButton>
                        </div>
                    )}

                    {/* Fourth Row: City & Country of Residence */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">City & Country of Residence *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="city_country_residence"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[280px] h-10 border-2 rounded-xl" placeholder="Insert Location" {...field} />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </div>
                    </div>

                    {/* Additional Phone Expanded Section */}
                    {showAdditionalPhone && (
                        <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                            <FormItem>
                                <FormLabel>Additional Phone Number</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="additional_phone_number"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input className="max-w-[280px] border-2 rounded-xl" placeholder="Insert Number" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </FormItem>
                            
                            <RequestQuoteButton
                                variant="secondary"
                                onClick={() => setShowAdditionalPhone(false)}
                                className="w-fit"
                            >
                                Remove Additional Phone
                            </RequestQuoteButton>
                        </div>
                    )}
                </div>

                {/* Investment Interest */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Investment Interest</h3>
                    
                    <FormItem className="space-y-3">
                        <FormLabel>Type of Investor *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="investor_type"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="individual" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Individual</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="angel" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Angel Investor</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="venture_capital" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Venture Capital</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="strategic_partner" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Strategic Partner</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="corporate" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Corporate Investor</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="other" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Other (Specify)</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {field.value === 'other' && (
                                            <Input 
                                                className="max-w-[400px] border-2 rounded-xl mt-2" 
                                                placeholder="Please specify" 
                                                {...form.register('investor_type_other')} 
                                            />
                                        )}
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem className="space-y-3">
                        <FormLabel>Investment Range (USD) *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="investment_range"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="100k-500k" />
                                                </FormControl>
                                                <FormLabel className="font-normal">$100K–$500K</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="500k-1m" />
                                                </FormControl>
                                                <FormLabel className="font-normal">$500K-$1M</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="1m-5m" />
                                                </FormControl>
                                                <FormLabel className="font-normal">$1M- $5M</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="5m+" />
                                                </FormControl>
                                                <FormLabel className="font-normal">$5M and above</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="undecided" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Undecided – open for discussion</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Type your average check size (Optional)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="average_check_size"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[400px] border-2 rounded-xl" placeholder="$" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem className="space-y-3">
                        <FormLabel>Preferred Investment Type *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="preferred_investment_type"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <div className="flex flex-col space-y-2">
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes("equity")}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                field.onChange([...field.value, "equity"]);
                                                            } else {
                                                                field.onChange(field.value?.filter((value: string) => value !== "equity"));
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">Equity</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes("partnership")}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                field.onChange([...field.value, "partnership"]);
                                                            } else {
                                                                field.onChange(field.value?.filter((value: string) => value !== "partnership"));
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">Partnership</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes("project_based")}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                field.onChange([...field.value, "project_based"]);
                                                            } else {
                                                                field.onChange(field.value?.filter((value: string) => value !== "project_based"));
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">Project-Based</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes("undecided")}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                field.onChange([...field.value, "undecided"]);
                                                            } else {
                                                                field.onChange(field.value?.filter((value: string) => value !== "undecided"));
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">Undecided / Seeking Advice</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes("other")}
                                                        onCheckedChange={(checked) => {
                                                            if (checked) {
                                                                field.onChange([...field.value, "other"]);
                                                            } else {
                                                                field.onChange(field.value?.filter((value: string) => value !== "other"));
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">Other (Specify)</FormLabel>
                                            </FormItem>
                                        </div>
                                        {field.value?.includes('other') && (
                                            <Input 
                                                className="max-w-[400px] border-2 rounded-xl mt-2" 
                                                placeholder="Please specify" 
                                                {...form.register('preferred_investment_type_other')} 
                                            />
                                        )}
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Area of Interest */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Area of Interest</h3>
                    <p className="text-muted-foreground">(Which sectors or services are you most interested in?)</p>
                    
                    <FormItem className="space-y-3">
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="areas_of_interest"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <div className="space-y-2">
                                            {areasOfInterest.map((area) => (
                                                <FormItem key={area} className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(area)}
                                                            onCheckedChange={(checked) => {
                                                                const currentValues = field.value || [];
                                                                if (checked) {
                                                                    field.onChange([...currentValues, area]);
                                                                } else {
                                                                    field.onChange(currentValues.filter((value: string) => value !== area));
                                                                }
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">{area}</FormLabel>
                                                </FormItem>
                                            ))}
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes('other')}
                                                        onCheckedChange={(checked) => {
                                                            const currentValues = field.value || [];
                                                            if (checked) {
                                                                field.onChange([...currentValues, 'other']);
                                                            } else {
                                                                field.onChange(currentValues.filter((value: string) => value !== 'other'));
                                                            }
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">Other (Specify)</FormLabel>
                                            </FormItem>
                                        </div>
                                        {field.value?.includes('other') && (
                                            <Input 
                                                className="max-w-[400px] border-2 rounded-xl mt-2" 
                                                placeholder="Please specify" 
                                                {...form.register('areas_of_interest_other')} 
                                            />
                                        )}
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Preferred Interest Rate */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Preferred Interest Rate (for Financial Investment Structures) (Optional)</h3>
                    <p className="text-muted-foreground">Please indicate your preference regarding the investment return structure:</p>
                    
                    <FormItem className="space-y-3">
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="interest_rate_type"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="fixed" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Fixed Interest Rate</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="floating" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Floating Interest Rate</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {field.value === 'fixed' && (
                                            <div className="mt-2">
                                                <p className="text-sm text-muted-foreground mb-2">If selected, kindly specify your target annual rate (%):</p>
                                                <Input 
                                                    className="max-w-[200px] border-2 rounded-xl" 
                                                    placeholder="Insert %" 
                                                    {...form.register('fixed_interest_rate')} 
                                                />
                                            </div>
                                        )}
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Background & Intent */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Background & Intent</h3>
                    
                    <FormItem>
                        <FormLabel>Brief Background or LinkedIn Profile (Optional)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="background_linkedin"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="w-full max-w-[600px] min-h-[120px] border-2 rounded-xl" placeholder="Please provide your background information or LinkedIn profile link" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Why are you interested in investing in Moon Navigation and Trading Co.? (Optional)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="investment_interest_reason"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[400px] border-2 rounded-xl" placeholder="Please share your interest..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    <FormItem className="space-y-3">
                        <FormLabel>Do you require an NDA (Non-Disclosure Agreement) before discussions? *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="require_nda"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Yes</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="no" />
                                                </FormControl>
                                                <FormLabel className="font-normal">No</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="not_sure" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Not Sure</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Additional Notes */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Additional Notes or Inquiries</h3>
                    <p className="text-muted-foreground">Please include any specific comments, questions, or areas of clarification you would like us to address:</p>
                    
                    <FormItem>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="additional_notes"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Additional notes..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Important Information */}
                <div className="space-y-4 p-4 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold">Important Information</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• All investment-related communications and submissions are treated with strict confidentiality.</li>
                        <li>• Completion and submission of this form does not constitute a legally binding commitment from either party.</li>
                        <li>• A representative from Moon Navigation and Trading Co. may contact you to arrange a follow-up discussion or provide official investment documentation and materials.</li>
                    </ul>
                </div>

                <Button type="submit" className="mt-8 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default InvestorForm;
