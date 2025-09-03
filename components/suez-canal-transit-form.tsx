"use client"
import React from 'react';
import { Controller, useForm, useWatch } from "react-hook-form";
import { Textarea } from './ui/textarea';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';

const SuezCanalTransitForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors')

    const formSchema = z.object({
        date: z.string().min(1, { message: t("Required") }),
        vessel: z.object({
            name: z.string().min(1, { message: t("Required") }),
            imo: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            type: z.string().min(1, { message: t("Required") }),
            grt: z.string().min(1, { message: t("Required") }),
            scgt: z.string().min(1, { message: t("Required") }),
            nrt: z.string().min(1, { message: t("Required") }),
            scnt: z.string().min(1, { message: t("Required") }),
            loa: z.string().min(1, { message: t("Required") }),
            beam: z.string().min(1, { message: t("Required") }),
            draft: z.string().min(1, { message: t("Required") }),
            dwt: z.string().min(1, { message: t("Required") }),
            status: z.string().min(1, { message: t("Required") }),
            floating_units: z.number().min(0, { message: t("Required") }),
            passed_canal_before: z.string().min(1, { message: t("Required") }),
            last_passage_date: z.string().optional(),
        }),
        cargo: z.object({
            commodity: z.string().min(1, { message: t("Required") }),
            quantity: z.number().min(0, { message: t("Required") }),
            total_cargo: z.string().min(1, { message: t("Required") }),
            cargo_unit: z.string().min(1, { message: t("Required") }),
            gas_free_ammonia: z.string().min(1, { message: t("Required") }),
            military_navy_cargo: z.string().min(1, { message: t("Required") }),
            additional_details: z.string().optional(),
            manifest: z.string().optional(),
        }),
        unit_carriage: z.object({
            large_units: z.string().optional(),
            unit_size: z.string().optional(),
            floating_units_carried: z.string().optional(),
            container_tiers: z.string().optional(),
        }),
        transit: z.object({
            eta: z.string().min(1, { message: t("Required") }),
            direction: z.string().min(1, { message: t("Required") }),
            round_trip: z.string().optional(),
            origin_destination: z.string().optional(),
            gulf_caribbean: z.string().optional(),
            destination_port: z.string().optional(),
        }),
        additional_services: z.object({
            tug_assistance: z.boolean().default(false),
            crew_change: z.boolean().default(false),
            bunkering: z.boolean().default(false),
            freshwater: z.boolean().default(false),
            spare_parts: z.boolean().default(false),
            other: z.boolean().default(false),
            other_details: z.string().optional(),
        }),
        additional_notes: z.string().optional(),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("Required") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            additional_email: z.string().email().optional().or(z.literal('')),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
            additional_phone_number: z.string().optional(),
        })
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            date: '',
            vessel: {
                name: '',
                imo: '',
                flag: '',
                type: '',
                grt: '',
                scgt: '',
                nrt: '',
                scnt: '',
                loa: '',
                beam: '',
                draft: '',
                dwt: '',
                status: '',
                floating_units: 0,
                passed_canal_before: '',
                last_passage_date: '',
            },
            cargo: {
                commodity: '',
                quantity: 0,
                total_cargo: '',
                cargo_unit: '',
                gas_free_ammonia: '',
                military_navy_cargo: '',
                additional_details: '',
                manifest: '',
            },
            unit_carriage: {
                large_units: '',
                unit_size: '',
                floating_units_carried: '',
                container_tiers: '',
            },
            transit: {
                eta: '',
                direction: '',
                round_trip: '',
                origin_destination: '',
                gulf_caribbean: '',
                destination_port: '',
            },
            additional_services: {
                tug_assistance: false,
                crew_change: false,
                bunkering: false,
                freshwater: false,
                spare_parts: false,
                other: false,
                other_details: '',
            },
            additional_notes: '',
            supporting_files: '',
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

    const watchedPassedCanalBefore = useWatch({ control: form.control, name: "vessel.passed_canal_before" });
    const watchedOtherServices = useWatch({ control: form.control, name: "additional_services.other" });

    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                </div>

                {/* Date */}
                <div className="space-y-4">
                    <FormItem>
                        <FormLabel>Date *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="date"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Vessel Details */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Vessel Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>Vessel Name *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.name"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Vessel Name" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>IMO Number *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.imo"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert IMO Number" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Flag *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.flag"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Flag" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Vessel Type Classification *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.type"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Vessel Type [General Cargo, Heavy Lift, etc.]" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>GRT (Gross Registered Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.grt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert GRT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>SCGT (Suez Canal Gross Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.scgt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert SCGT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>NRT (Net Registered Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.nrt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert NRT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>SCNT (Suez Canal Net Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.scnt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert SCNT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>LOA (Length Overall in meters) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.loa"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert LOA" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Beam in feet *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.beam"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Beam" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Draft in feet *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.draft"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Draft" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>DWT (Deadweight Tonnage) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.dwt"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert DWT" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    {/* Vessel Status */}
                    <FormItem>
                        <FormLabel>Vessel Status *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel.status"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="laden" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Laden</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="ballast" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Ballast</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    {/* Number of Floating Units */}
                    <FormItem>
                        <FormLabel>Number of Floating Units Carried</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel.floating_units"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input 
                                            className="max-w-[200px] border-2 rounded-xl" 
                                            type="number" 
                                            min="0"
                                            placeholder="0"
                                            {...field}
                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    {/* Vessel Passed Canal Before */}
                    <FormItem>
                        <FormLabel>Vessel Passed Canal Before *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel.passed_canal_before"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
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
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    {watchedPassedCanalBefore === 'yes' && (
                        <FormItem>
                            <FormLabel>If yes, please advise the date (if available)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.last_passage_date"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                </div>

                {/* Cargo Details */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Cargo Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>Commodity *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="cargo.commodity"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Type the commodity" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Cargo Quantity *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="cargo.quantity"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input 
                                                className="max-w-[200px] border-2 rounded-xl" 
                                                type="number" 
                                                min="0"
                                                placeholder="0"
                                                {...field}
                                                onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Total Cargo (Barrels or Metric Tons) *</FormLabel>
                            <div className="flex gap-2">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="cargo.total_cargo"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input className="max-w-[200px] border-2 rounded-xl" placeholder="Insert Total" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="cargo.cargo_unit"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-[120px] border-2 rounded-xl">
                                                        <SelectValue placeholder="Unit" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="barrels">Barrels</SelectItem>
                                                        <SelectItem value="metric_tons">Metric Tons</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </div>
                        </FormItem>
                    </div>

                    {/* Gas-Free / Ammonia Cargo */}
                    <FormItem>
                        <FormLabel>Gas-Free / Ammonia Cargo? *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="cargo.gas_free_ammonia"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
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
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    {/* Military or Navy Cargo */}
                    <FormItem>
                        <FormLabel>Military or Navy Cargo &gt; 50%? *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="cargo.military_navy_cargo"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
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
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    {/* Additional Cargo Details */}
                    <FormItem>
                        <FormLabel>Add Additional Cargo Details</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="cargo.additional_details"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Additional cargo details..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                    {/* Cargo Manifest */}
                    <FormItem>
                        <FormLabel>Cargo Manifest (if available)</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="cargo.manifest"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[400px] border-2 rounded-xl" type="file" accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Unit Carriage Details */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Unit Carriage Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>Number of Large Units Carried</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="unit_carriage.large_units"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[200px] border-2 rounded-xl" placeholder="Insert Number" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Size of Each Unit (tonnes)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="unit_carriage.unit_size"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[200px] border-2 rounded-xl" placeholder="Insert Size" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Number of Floating Units Carried</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="unit_carriage.floating_units_carried"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[200px] border-2 rounded-xl" placeholder="Insert Number" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Number of Container Tiers on Deck (if applicable)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="unit_carriage.container_tiers"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[200px] border-2 rounded-xl" placeholder="Insert Number" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Transit Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Transit Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>ETA (Estimated Time of Arrival at Suez Canal) *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="transit.eta"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" type="time" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Transit Direction *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="transit.direction"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="northbound" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Northbound (Port Said → Suez)</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="southbound" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Southbound (Suez → Port Said)</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Is this a Round Trip? (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="transit.round_trip"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
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
                                            </RadioGroup>
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Region of Origin/Destination (e.g., Arabian Gulf, Caribbean, etc.) (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="transit.origin_destination"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[400px] border-2 rounded-xl" placeholder="Insert Location" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Coming from/Going to Arabian Gulf via the Gulf of Oman or the Caribbean Zone? (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="transit.gulf_caribbean"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
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
                                            </RadioGroup>
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Destination Port or Region (Optional)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="transit.destination_port"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[400px] border-2 rounded-xl" placeholder="Insert Destination" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                {/* Additional Required Services */}
                <div className="space-y-6">
                    <h3 className="text-xl font-raleway font-medium">Additional Required Services (Optional)</h3>
                    
                    <div className="space-y-3">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.tug_assistance"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Tug Assistance</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.crew_change"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Crew Change Assistance</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.bunkering"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Bunkering Services</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.freshwater"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Freshwater Supply</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.spare_parts"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Spare Parts Delivery</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="additional_services.other"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Other (Specify)</FormLabel>
                        </FormItem>

                        {watchedOtherServices && (
                            <Input 
                                className="max-w-[400px] border-2 rounded-xl mt-2 ml-6" 
                                placeholder="Insert Other Services" 
                                {...form.register('additional_services.other_details')} 
                            />
                        )}
                    </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-4">
                    <h3 className="text-xl font-raleway font-medium">Additional Notes or Special Request</h3>
                    <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="additional_notes"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Insert any additional notes or requests" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>



                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />



                <Button type="submit" className="mt-8 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default SuezCanalTransitForm;
