"use client";

import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generateQuotationNumber } from "@/utils/quotation/generator";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from 'lucide-react';
import { useState } from "react";
import { PhoneInput } from "@/components/phone-input";

// Define the Zod schema
const scheduleMeetingSchema = z.object({
    company_name: z.string().min(1, { message: "Company name is required" }),
    contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    company_email: z.string().email({ message: "Valid email is required" }),
    additional_email: z.string().email().optional().or(z.literal('')),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    additional_phone_number: z.string().optional(),
    preferred_date_1: z.string().min(1, { message: "Preferred date 1 is required" }),
    preferred_date_2: z.string().optional(),
    preferred_time_1: z.string().min(1, { message: "Preferred time 1 is required" }),
    preferred_time_2: z.string().optional(),
    service_of_interest: z.array(z.string()).min(1, { message: "At least one service must be selected" }),
    service_other: z.string().optional(),
    meeting_preference: z.enum(["in-person", "virtual"], { required_error: "Meeting preference is required" }),
    message: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must consent to proceed"
    })
});

type ScheduleMeetingFormData = z.infer<typeof scheduleMeetingSchema>;

export default function ScheduleMeeting() {
    const [showAdditionalEmail, setShowAdditionalEmail] = useState(false);
    const [showAdditionalPhone, setShowAdditionalPhone] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ScheduleMeetingFormData>({
        resolver: zodResolver(scheduleMeetingSchema),
        defaultValues: {
            company_name: '',
            contact_person_name: '',
            title: '',
            company_email: '',
            additional_email: '',
            phone_number: '',
            additional_phone_number: '',
            preferred_date_1: '',
            preferred_date_2: '',
            preferred_time_1: '',
            preferred_time_2: '',
            service_of_interest: [],
            service_other: '',
            meeting_preference: 'in-person',
            message: '',
            consent: false
        }
    });

    const handleSubmit = async (values: ScheduleMeetingFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/schedule-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit meeting request');
            }

            alert("Meeting request submitted successfully! We'll get back to you soon.");
            
            // Reset form
            form.reset();
            setShowAdditionalEmail(false);
            setShowAdditionalPhone(false);
            
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white py-8">
            <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-left mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Meeting Scheduling</h1>
                    <p className="text-gray-600 max-w-3xl">
                        At Moon Navigation and Trading Co., we believe strong partnerships start with meaningful conversations. 
                        Scheduling a meeting with our experts is simple and designed to suit your needs, whether virtual or in person.
                    </p>
                    <p className="text-gray-600 max-w-3xl mt-4">
                        We take the time to understand your challenges, offer tailored freight, logistics and trade solutions, 
                        and build long-term collaborations that drive efficiency and growth.
                    </p>
                </div>

                {/* Blue Shadow Border Container */}
                <div className="relative bg-blue-100 rounded-t-3xl overflow-hidden">
                    <div className="flex relative z-10">
                        <button className="flex-1 px-1 py-3 text-xs sm:text-sm rounded-t-2xl font-medium text-primary bg-blue-100 dark:bg-accent flex items-center justify-center">
                            Schedule Meeting
                        </button>
                    </div>
                </div>
                
                <div className="p-1 rounded-3xl rounded-t-sm bg-blue-100 dark:bg-accent">
                    <div className="bg-background dark:bg-secondary rounded-3xl py-6 px-4 sm:px-6 shadow-sm">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        
                        {/* Personal Information Section */}
                        <div className="bg-transparent rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem>
                                    <FormLabel>Company Name *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="company_name"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        className="max-w-[400px] border-2 rounded-xl" 
                                                        placeholder="Company Name"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Contact Person Name *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="contact_person_name"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        className="max-w-[400px] border-2 rounded-xl" 
                                                        placeholder="Contact Person Name"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Title *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="title"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        className="max-w-[400px] border-2 rounded-xl" 
                                                        placeholder="Mr, Ms, etc."
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Company Email Address *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="company_email"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        type="email"
                                                        className="max-w-[400px] border-2 rounded-xl" 
                                                        placeholder="Email"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Phone Number *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="phone_number"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <PhoneInput
                                                        value={field.value}
                                                        onChange={(value) => field.onChange(value)}
                                                        defaultCountry="EG"
                                                        international
                                                        countryCallingCodeEditable={false}
                                                        placeholder="Enter phone number"
                                                        className="max-w-[400px] border-2 rounded-xl"
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>

                            {/* Additional Email */}
                            <div className="mt-4">
                                {!showAdditionalEmail && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setShowAdditionalEmail(true)}
                                        className="flex items-center gap-2"
                                    >
                                        <Mail className="h-4 w-4" />
                                        Add Additional Email
                                    </Button>
                                )}
                                
                                {showAdditionalEmail && (
                                    <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                                        <FormItem>
                                            <FormLabel>Additional Email</FormLabel>
                                            <FormControl>
                                                <Controller
                                                    control={form.control}
                                                    name="additional_email"
                                                    render={({ field, fieldState: { error } }) => (
                                                        <>
                                                            <Input 
                                                                type="email"
                                                                className="max-w-[400px] border-2 rounded-xl" 
                                                                placeholder="Additional Email"
                                                                {...field}
                                                            />
                                                            {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                        </>
                                                    )}
                                                />
                                            </FormControl>
                                        </FormItem>
                                        
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            onClick={() => {
                                                setShowAdditionalEmail(false);
                                                form.setValue("additional_email", "");
                                            }}
                                            className="mt-2"
                                        >
                                            Remove Additional Email
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Additional Phone */}
                            <div className="mt-4">
                                {!showAdditionalPhone && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setShowAdditionalPhone(true)}
                                        className="flex items-center gap-2"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Add Additional Phone
                                    </Button>
                                )}
                                
                                {showAdditionalPhone && (
                                    <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                                        <FormItem>
                                            <FormLabel>Additional Phone</FormLabel>
                                            <FormControl>
                                                <Controller
                                                    control={form.control}
                                                    name="additional_phone_number"
                                                    render={({ field, fieldState: { error } }) => (
                                                        <>
                                                            <Input 
                                                                type="tel"
                                                                className="max-w-[400px] border-2 rounded-xl" 
                                                                placeholder="Additional Phone"
                                                                {...field}
                                                            />
                                                            {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                        </>
                                                    )}
                                                />
                                            </FormControl>
                                        </FormItem>
                                        
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            onClick={() => {
                                                setShowAdditionalPhone(false);
                                                form.setValue("additional_phone_number", "");
                                            }}
                                            className="mt-2"
                                        >
                                            Remove Additional Phone
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Appointment Details Section */}
                        <div className="bg-transparent rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Appointment Details</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem>
                                    <FormLabel>Preferred Date 1 *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="preferred_date_1"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        type="date"
                                                        className="max-w-[400px] border-2 rounded-xl" 
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Preferred Date 2</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="preferred_date_2"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        type="date"
                                                        className="max-w-[400px] border-2 rounded-xl" 
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Preferred Time 1 *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="preferred_time_1"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger className="max-w-[400px] border-2 rounded-xl">
                                                            <SelectValue placeholder="Select time" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="09:00 UTC">9:00 AM UTC</SelectItem>
                                                            <SelectItem value="10:00 UTC">10:00 AM UTC</SelectItem>
                                                            <SelectItem value="11:00 UTC">11:00 AM UTC</SelectItem>
                                                            <SelectItem value="12:00 UTC">12:00 PM UTC</SelectItem>
                                                            <SelectItem value="13:00 UTC">1:00 PM UTC</SelectItem>
                                                            <SelectItem value="14:00 UTC">2:00 PM UTC</SelectItem>
                                                            <SelectItem value="15:00 UTC">3:00 PM UTC</SelectItem>
                                                            <SelectItem value="16:00 UTC">4:00 PM UTC</SelectItem>
                                                            <SelectItem value="17:00 UTC">5:00 PM UTC</SelectItem>
                                                            <SelectItem value="09:00 UTC-5">9:00 AM UTC-5</SelectItem>
                                                            <SelectItem value="10:00 UTC-5">10:00 AM UTC-5</SelectItem>
                                                            <SelectItem value="11:00 UTC-5">11:00 AM UTC-5</SelectItem>
                                                            <SelectItem value="12:00 UTC-5">12:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="13:00 UTC-5">1:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="14:00 UTC-5">2:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="15:00 UTC-5">3:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="16:00 UTC-5">4:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="17:00 UTC-5">5:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="09:00 UTC+1">9:00 AM UTC+1</SelectItem>
                                                            <SelectItem value="10:00 UTC+1">10:00 AM UTC+1</SelectItem>
                                                            <SelectItem value="11:00 UTC+1">11:00 AM UTC+1</SelectItem>
                                                            <SelectItem value="12:00 UTC+1">12:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="13:00 UTC+1">1:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="14:00 UTC+1">2:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="15:00 UTC+1">3:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="16:00 UTC+1">4:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="17:00 UTC+1">5:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="09:00 UTC+2">9:00 AM UTC+2</SelectItem>
                                                            <SelectItem value="10:00 UTC+2">10:00 AM UTC+2</SelectItem>
                                                            <SelectItem value="11:00 UTC+2">11:00 AM UTC+2</SelectItem>
                                                            <SelectItem value="12:00 UTC+2">12:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="13:00 UTC+2">1:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="14:00 UTC+2">2:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="15:00 UTC+2">3:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="16:00 UTC+2">4:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="17:00 UTC+2">5:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="09:00 UTC+8">9:00 AM UTC+8</SelectItem>
                                                            <SelectItem value="10:00 UTC+8">10:00 AM UTC+8</SelectItem>
                                                            <SelectItem value="11:00 UTC+8">11:00 AM UTC+8</SelectItem>
                                                            <SelectItem value="12:00 UTC+8">12:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="13:00 UTC+8">1:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="14:00 UTC+8">2:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="15:00 UTC+8">3:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="16:00 UTC+8">4:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="17:00 UTC+8">5:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="UTC">UTC (Coordinated Universal Time)</SelectItem>
                                                            <SelectItem value="UTC+1">UTC+1 (Central European Time)</SelectItem>
                                                            <SelectItem value="UTC+2">UTC+2 (Eastern European Time)</SelectItem>
                                                            <SelectItem value="UTC+3">UTC+3 (Moscow Time)</SelectItem>
                                                            <SelectItem value="UTC+4">UTC+4 (Gulf Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+5">UTC+5 (Pakistan Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+6">UTC+6 (Bangladesh Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+7">UTC+7 (Indochina Time)</SelectItem>
                                                            <SelectItem value="UTC+8">UTC+8 (China Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+9">UTC+9 (Japan Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+10">UTC+10 (Australian Eastern Time)</SelectItem>
                                                            <SelectItem value="UTC+11">UTC+11 (Solomon Islands Time)</SelectItem>
                                                            <SelectItem value="UTC+12">UTC+12 (New Zealand Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-1">UTC-1 (Azores Time)</SelectItem>
                                                            <SelectItem value="UTC-2">UTC-2 (South Georgia Time)</SelectItem>
                                                            <SelectItem value="UTC-3">UTC-3 (Argentina Time)</SelectItem>
                                                            <SelectItem value="UTC-4">UTC-4 (Atlantic Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-5">UTC-5 (Eastern Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-6">UTC-6 (Central Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-7">UTC-7 (Mountain Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-8">UTC-8 (Pacific Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-9">UTC-9 (Alaska Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-10">UTC-10 (Hawaii Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-11">UTC-11 (Samoa Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-12">UTC-12 (Baker Island Time)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem>
                                    <FormLabel>Preferred Time 2</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="preferred_time_2"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Select onValueChange={field.onChange} value={field.value}>
                                                        <SelectTrigger className="max-w-[400px] border-2 rounded-xl">
                                                            <SelectValue placeholder="Select time" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="09:00 UTC">9:00 AM UTC</SelectItem>
                                                            <SelectItem value="10:00 UTC">10:00 AM UTC</SelectItem>
                                                            <SelectItem value="11:00 UTC">11:00 AM UTC</SelectItem>
                                                            <SelectItem value="12:00 UTC">12:00 PM UTC</SelectItem>
                                                            <SelectItem value="13:00 UTC">1:00 PM UTC</SelectItem>
                                                            <SelectItem value="14:00 UTC">2:00 PM UTC</SelectItem>
                                                            <SelectItem value="15:00 UTC">3:00 PM UTC</SelectItem>
                                                            <SelectItem value="16:00 UTC">4:00 PM UTC</SelectItem>
                                                            <SelectItem value="17:00 UTC">5:00 PM UTC</SelectItem>
                                                            <SelectItem value="09:00 UTC-5">9:00 AM UTC-5</SelectItem>
                                                            <SelectItem value="10:00 UTC-5">10:00 AM UTC-5</SelectItem>
                                                            <SelectItem value="11:00 UTC-5">11:00 AM UTC-5</SelectItem>
                                                            <SelectItem value="12:00 UTC-5">12:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="13:00 UTC-5">1:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="14:00 UTC-5">2:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="15:00 UTC-5">3:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="16:00 UTC-5">4:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="17:00 UTC-5">5:00 PM UTC-5</SelectItem>
                                                            <SelectItem value="09:00 UTC+1">9:00 AM UTC+1</SelectItem>
                                                            <SelectItem value="10:00 UTC+1">10:00 AM UTC+1</SelectItem>
                                                            <SelectItem value="11:00 UTC+1">11:00 AM UTC+1</SelectItem>
                                                            <SelectItem value="12:00 UTC+1">12:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="13:00 UTC+1">1:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="14:00 UTC+1">2:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="15:00 UTC+1">3:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="16:00 UTC+1">4:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="17:00 UTC+1">5:00 PM UTC+1</SelectItem>
                                                            <SelectItem value="09:00 UTC+2">9:00 AM UTC+2</SelectItem>
                                                            <SelectItem value="10:00 UTC+2">10:00 AM UTC+2</SelectItem>
                                                            <SelectItem value="11:00 UTC+2">11:00 AM UTC+2</SelectItem>
                                                            <SelectItem value="12:00 UTC+2">12:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="13:00 UTC+2">1:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="14:00 UTC+2">2:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="15:00 UTC+2">3:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="16:00 UTC+2">4:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="17:00 UTC+2">5:00 PM UTC+2</SelectItem>
                                                            <SelectItem value="09:00 UTC+8">9:00 AM UTC+8</SelectItem>
                                                            <SelectItem value="10:00 UTC+8">10:00 AM UTC+8</SelectItem>
                                                            <SelectItem value="11:00 UTC+8">11:00 AM UTC+8</SelectItem>
                                                            <SelectItem value="12:00 UTC+8">12:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="13:00 UTC+8">1:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="14:00 UTC+8">2:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="15:00 UTC+8">3:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="16:00 UTC+8">4:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="17:00 UTC+8">5:00 PM UTC+8</SelectItem>
                                                            <SelectItem value="UTC">UTC (Coordinated Universal Time)</SelectItem>
                                                            <SelectItem value="UTC+1">UTC+1 (Central European Time)</SelectItem>
                                                            <SelectItem value="UTC+2">UTC+2 (Eastern European Time)</SelectItem>
                                                            <SelectItem value="UTC+3">UTC+3 (Moscow Time)</SelectItem>
                                                            <SelectItem value="UTC+4">UTC+4 (Gulf Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+5">UTC+5 (Pakistan Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+6">UTC+6 (Bangladesh Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+7">UTC+7 (Indochina Time)</SelectItem>
                                                            <SelectItem value="UTC+8">UTC+8 (China Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+9">UTC+9 (Japan Standard Time)</SelectItem>
                                                            <SelectItem value="UTC+10">UTC+10 (Australian Eastern Time)</SelectItem>
                                                            <SelectItem value="UTC+11">UTC+11 (Solomon Islands Time)</SelectItem>
                                                            <SelectItem value="UTC+12">UTC+12 (New Zealand Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-1">UTC-1 (Azores Time)</SelectItem>
                                                            <SelectItem value="UTC-2">UTC-2 (South Georgia Time)</SelectItem>
                                                            <SelectItem value="UTC-3">UTC-3 (Argentina Time)</SelectItem>
                                                            <SelectItem value="UTC-4">UTC-4 (Atlantic Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-5">UTC-5 (Eastern Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-6">UTC-6 (Central Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-7">UTC-7 (Mountain Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-8">UTC-8 (Pacific Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-9">UTC-9 (Alaska Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-10">UTC-10 (Hawaii Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-11">UTC-11 (Samoa Standard Time)</SelectItem>
                                                            <SelectItem value="UTC-12">UTC-12 (Baker Island Time)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <FormItem className="mt-8">
                                    <FormLabel>Service of Interest *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="service_of_interest"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <div className="space-y-3 max-w-[400px]">
                                                        {[
                                                            { value: "freight", label: "Freight Solutions (Ocean, Inland, Air)" },
                                                            { value: "containers", label: "Containers services" },
                                                            { value: "trade", label: "International Trade" },
                                                            { value: "agency", label: "Ship Agency" },
                                                            { value: "suez", label: "Suez Canal Transit" },
                                                            { value: "docking", label: "Docking and Maintenance" },
                                                            { value: "storage", label: "Storage and Warehousing" },
                                                            { value: "handling", label: "Cargo Handling and Stevedoring" },
                                                            { value: "customs", label: "Customs Clearance and Compliance" },
                                                            { value: "investing", label: "Investing with us" },
                                                            { value: "partnership", label: "Partnership" },
                                                            { value: "other", label: "Other" }
                                                        ].map((service) => (
                                                            <div key={service.value} className="flex items-center space-x-2">
                                                                <Checkbox
                                                                    id={service.value}
                                                                    checked={field.value?.includes(service.value) || false}
                                                                    onCheckedChange={(checked) => {
                                                                        const currentValues = field.value || [];
                                                                        if (checked) {
                                                                            field.onChange([...currentValues, service.value]);
                                                                        } else {
                                                                            field.onChange(currentValues.filter((v: string) => v !== service.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label
                                                                    htmlFor={service.value}
                                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-raleway"
                                                                >
                                                                    {service.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                {form.watch("service_of_interest")?.includes("other") && (
                                    <FormItem>
                                        <FormLabel>Please specify</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="service_other"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Input 
                                                            className="max-w-[400px] border-2 rounded-xl" 
                                                            placeholder="Please specify"
                                                            {...field}
                                                        />
                                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                    </>
                                                )}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            </div>

                            <div className="mt-8">
                                <FormItem>
                                    <FormLabel>Meeting Preference *</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name="meeting_preference"
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        className="flex flex-col space-y-2"
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="in-person" id="in-person" />
                                                            <FormLabel htmlFor="in-person" className="font-normal">In-Person Meeting</FormLabel>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="virtual" id="virtual" />
                                                            <FormLabel htmlFor="virtual" className="font-normal">Virtual Meeting (Video Call)</FormLabel>
                                                        </div>
                                                    </RadioGroup>
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>
                        </div>

                        {/* Additional Information Section */}
                        <div className="bg-transparent rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-6">Additional Information</h2>
                            
                            <FormItem>
                                <FormLabel>Message or Specific Requests</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="message"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Textarea 
                                                    className="min-h-[100px] border-2 rounded-xl" 
                                                    placeholder="Please share any specific details or requests..."
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            <FormItem className="mt-6">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="consent"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox 
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                    <FormLabel className="text-sm font-normal">
                                                        I consent to the collection and processing of my information as per the privacy policy. *
                                                    </FormLabel>
                                                </div>
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <p className="text-sm text-gray-600 mb-4">
                                For any assistance, feel free to contact us!
                            </p>
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-[200px]"
                            >
                                {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                            </Button>
                        </div>
                    </form>
                </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
