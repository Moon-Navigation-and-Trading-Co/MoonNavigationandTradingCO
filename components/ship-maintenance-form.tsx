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
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';

const ShipMaintenanceForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors')

    const formSchema = z.object({
        vessel: z.object({
            name: z.string().min(1, { message: t("Required") }),
            imo: z.string().min(1, { message: t("Required") }),
            flag: z.string().min(1, { message: t("Required") }),
            type: z.string().min(1, { message: t("Required") }),
            gross_tonnage: z.string().min(1, { message: t("Required") }),
            light_weight: z.string().optional(),
            dead_weight: z.string().min(1, { message: t("Required") }),
            max_draft: z.string().min(1, { message: t("Required") }),
            length: z.string().min(1, { message: t("Required") }),
            current_location: z.string().min(1, { message: t("Required") }),
        }),
        required_services: z.object({
            docking: z.boolean().default(false),
            docking_date: z.string().optional(),
            docking_location: z.string().optional(),
            maintenance: z.boolean().default(false),
            maintenance_at_current_location: z.string().optional(),
            maintenance_date: z.string().optional(),
            maintenance_location: z.string().optional(),
            emergency_assistance: z.boolean().default(false),
            emergency_description: z.string().optional(),
        }),
        dry_docking_repairs: z.object({
            dry_docking: z.boolean().default(false),
            afloat_repairs: z.boolean().default(false),
            hull_cleaning: z.boolean().default(false),
            underwater_inspection: z.boolean().default(false),
            propeller_polishing: z.boolean().default(false),
            ballast_tank_cleaning: z.boolean().default(false),
            hydroblasting_sandblasting: z.boolean().default(false),
            painting_coating: z.boolean().default(false),
            rudder_tail_shaft_repairs: z.boolean().default(false),
            anchor_chain_calibration: z.boolean().default(false),
            other_dry_docking: z.boolean().default(false),
            other_dry_docking_details: z.string().optional(),
        }),
        mechanical_services: z.object({
            main_engine_overhaul: z.boolean().default(false),
            generator_maintenance: z.boolean().default(false),
            electrical_systems_check: z.boolean().default(false),
            pumps_valves_repair: z.boolean().default(false),
            pipework_fabrication: z.boolean().default(false),
            welding_steelwork: z.boolean().default(false),
            navigation_equipment_testing: z.boolean().default(false),
            safety_equipment_service: z.boolean().default(false),
            other_mechanical: z.boolean().default(false),
            other_mechanical_details: z.string().optional(),
        }),
        requested_services_details: z.string().min(1, { message: t("Required") }),
        supporting_files: z.string().optional(),
        additional_information: z.string().optional(),
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
            vessel: {
                name: '',
                imo: '',
                flag: '',
                type: '',
                gross_tonnage: '',
                light_weight: '',
                dead_weight: '',
                max_draft: '',
                length: '',
                current_location: '',
            },
            required_services: {
                docking: false,
                docking_date: '',
                docking_location: '',
                maintenance: false,
                maintenance_at_current_location: '',
                maintenance_date: '',
                maintenance_location: '',
                emergency_assistance: false,
                emergency_description: '',
            },
            dry_docking_repairs: {
                dry_docking: false,
                afloat_repairs: false,
                hull_cleaning: false,
                underwater_inspection: false,
                propeller_polishing: false,
                ballast_tank_cleaning: false,
                hydroblasting_sandblasting: false,
                painting_coating: false,
                rudder_tail_shaft_repairs: false,
                anchor_chain_calibration: false,
                other_dry_docking: false,
                other_dry_docking_details: '',
            },
            mechanical_services: {
                main_engine_overhaul: false,
                generator_maintenance: false,
                electrical_systems_check: false,
                pumps_valves_repair: false,
                pipework_fabrication: false,
                welding_steelwork: false,
                navigation_equipment_testing: false,
                safety_equipment_service: false,
                other_mechanical: false,
                other_mechanical_details: '',
            },
            requested_services_details: '',
            supporting_files: '',
            additional_information: '',
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

    const watchedDocking = useWatch({ control: form.control, name: "required_services.docking" });
    const watchedMaintenance = useWatch({ control: form.control, name: "required_services.maintenance" });
    const watchedEmergency = useWatch({ control: form.control, name: "required_services.emergency_assistance" });
    const watchedOtherDryDocking = useWatch({ control: form.control, name: "dry_docking_repairs.other_dry_docking" });
    const watchedOtherMechanical = useWatch({ control: form.control, name: "mechanical_services.other_mechanical" });
    const watchedMaintenanceAtCurrentLocation = useWatch({ control: form.control, name: "required_services.maintenance_at_current_location" });

    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">


                {/* Vessel Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Vessel Information</h3>
                    
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
                            <FormLabel>Vessel IMO Number *</FormLabel>
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
                            <FormLabel>Vessel Type *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.type"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Vessel Type" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Ship Gross Tonnage *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.gross_tonnage"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Gross Tonnage" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Ship Light Weight (If available)</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.light_weight"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Ship Light Weight" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Ship Dead Weight *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.dead_weight"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Ship Dead Weight" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Max. Draft in meters *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.max_draft"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Draft" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        <FormItem>
                            <FormLabel>Length in meters *</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="vessel.length"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Insert Length" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    <FormItem>
                        <FormLabel>Current Vessel Location *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="vessel.current_location"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[600px] border-2 rounded-xl" placeholder="Insert Current Port / Anchorage / Coordinates" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Required Service */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Required Service</h3>
                    <p className="text-sm text-muted-foreground">(Please check all that apply and provide related details.)</p>
                    
                    <div className="space-y-6">
                        {/* Docking */}
                        <div className="space-y-4">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="required_services.docking"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Docking</FormLabel>
                            </FormItem>

                            {watchedDocking && (
                                <div className="ml-6 space-y-4">
                                    <FormItem>
                                        <FormLabel>Preferred Docking Date</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="required_services.docking_date"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                                        {error && <p className="text-red-500">{error.message}</p>}
                                                    </>)}
                                            />
                                        </FormControl>
                                    </FormItem>

                                    <FormItem>
                                        <FormLabel>Preferred Docking Area (Port/Location)</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="required_services.docking_location"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Input className="max-w-[400px] border-2 rounded-xl" placeholder="Insert Location" {...field} />
                                                        {error && <p className="text-red-500">{error.message}</p>}
                                                    </>)}
                                            />
                                        </FormControl>
                                    </FormItem>
                                </div>
                            )}
                        </div>

                        {/* Maintenance */}
                        <div className="space-y-4">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="required_services.maintenance"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Maintenance</FormLabel>
                            </FormItem>

                            {watchedMaintenance && (
                                <div className="ml-6 space-y-4">
                                    <FormItem>
                                        <FormLabel>Will the maintenance be done at the current vessel location? *</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="required_services.maintenance_at_current_location"
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

                                    {watchedMaintenanceAtCurrentLocation === 'no' && (
                                        <div className="space-y-4">
                                            <FormItem>
                                                <FormLabel>Preferred Maintenance Date</FormLabel>
                                                <FormControl>
                                                    <Controller
                                                        control={form.control}
                                                        name="required_services.maintenance_date"
                                                        render={({ field, fieldState: { error } }) => (
                                                            <>
                                                                <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                                                {error && <p className="text-red-500">{error.message}</p>}
                                                            </>)}
                                                    />
                                                </FormControl>
                                            </FormItem>

                                            <FormItem>
                                                <FormLabel>Preferred Maintenance Area (Port/Location)</FormLabel>
                                                <FormControl>
                                                    <Controller
                                                        control={form.control}
                                                        name="required_services.maintenance_location"
                                                        render={({ field, fieldState: { error } }) => (
                                                            <>
                                                                <Input className="max-w-[400px] border-2 rounded-xl" placeholder="Insert Location" {...field} />
                                                                {error && <p className="text-red-500">{error.message}</p>}
                                                            </>)}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Emergency Assistance */}
                        <div className="space-y-4">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="required_services.emergency_assistance"
                                        render={({ field }) => (
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        )}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">Emergency Assistance</FormLabel>
                            </FormItem>

                            {watchedEmergency && (
                                <div className="ml-6">
                                    <FormItem>
                                        <FormLabel>Briefly describe the emergency and required immediate actions</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={form.control}
                                                name="required_services.emergency_description"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Textarea 
                                                            className="max-w-[600px] border-2 rounded-xl min-h-[100px]" 
                                                            placeholder="Insert Description" 
                                                            {...field} 
                                                        />
                                                        {error && <p className="text-red-500">{error.message}</p>}
                                                    </>)}
                                            />
                                        </FormControl>
                                    </FormItem>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Dry Docking / Afloat Repairs */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Dry Docking / Afloat Repairs</h3>
                    
                    <div className="space-y-3">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.dry_docking"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Dry Docking</FormLabel>
                        </FormItem>
                        <p className="text-sm text-muted-foreground ml-6">Note: Docking may be performed via floating dock depending on the vessel&apos;s specifications and dock availability.</p>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.afloat_repairs"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Afloat Repairs</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.hull_cleaning"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Hull Cleaning</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.underwater_inspection"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Underwater Inspection</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.propeller_polishing"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Propeller Polishing</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.ballast_tank_cleaning"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Ballast Tank Cleaning</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.hydroblasting_sandblasting"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Hydro-blasting / Sandblasting</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.painting_coating"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Painting & Coating</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.rudder_tail_shaft_repairs"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Rudder / Tail Shaft Repairs</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.anchor_chain_calibration"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Anchor & Chain Calibration</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="dry_docking_repairs.other_dry_docking"
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

                        {watchedOtherDryDocking && (
                            <Input 
                                className="max-w-[400px] border-2 rounded-xl mt-2 ml-6" 
                                placeholder="Please specify" 
                                {...form.register('dry_docking_repairs.other_dry_docking_details')} 
                            />
                        )}
                    </div>
                </div>

                {/* Mechanical / Technical Services */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Mechanical / Technical Services</h3>
                    
                    <div className="space-y-3">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.main_engine_overhaul"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Main Engine Overhaul</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.generator_maintenance"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Generator Maintenance</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.electrical_systems_check"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Electrical Systems Check</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.pumps_valves_repair"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Pumps & Valves Repair</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.pipework_fabrication"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Pipework Fabrication</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.welding_steelwork"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Welding / Steelwork</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.navigation_equipment_testing"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Navigation Equipment Testing</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.safety_equipment_service"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Safety Equipment Service (lifeboats, fire systems, etc.)</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="mechanical_services.other_mechanical"
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

                        {watchedOtherMechanical && (
                            <Input 
                                className="max-w-[400px] border-2 rounded-xl mt-2 ml-6" 
                                placeholder="Please specify" 
                                {...form.register('mechanical_services.other_mechanical_details')} 
                            />
                        )}
                    </div>
                </div>

                {/* Declare the Requested Services in Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Declare the Requested Services in Details</h3>
                    <p className="text-sm text-muted-foreground">Please declare a detailed description of the services you require, including the nature of the work, any known issues, specific technical tasks, urgency, and special instructions.</p>
                    <FormItem>
                        <FormLabel>Detailed Description *</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="requested_services_details"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[150px]" placeholder="Please provide detailed description of services required..." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Supporting files */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Supporting files (Optional)</h3>
                    <p className="text-sm text-muted-foreground">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
                    <FormItem>
                        <FormLabel>Upload Files</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="supporting_files"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="max-w-[400px] border-2 rounded-xl" type="file" multiple accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Additional Information</h3>
                    <FormItem>
                        <FormLabel>Special Requests / Notes</FormLabel>
                        <FormControl>
                            <Controller
                                control={form.control}
                                name="additional_information"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Additional information..." {...field} />
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

export default ShipMaintenanceForm;
