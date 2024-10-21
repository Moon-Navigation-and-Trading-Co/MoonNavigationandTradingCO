"use client"
import React from 'react';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import PortCard from './port-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import { CircleMinus } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';



// 1. Define a type-safe form handler using z.infer
const SignCrewMembersForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

    // Define your Zod schema (as before)
    const formSchema = z.object({
        port: z.object({
            name: z.string().min(1, { message: t("CompanyName") }),
        }),
        vessel: z.object({
            name: z.string().min(1, { message: t("CompanyName") }),
            imo: z.number().min(0, { message: t("CompanyName") }),
            anchor: z.boolean().optional().default(false),
            berth: z.boolean().optional().default(false),
        }),
        crew: z.object({
            on: z.boolean().optional().default(false),
            off: z.boolean().optional().default(false),
            members_on: z
                .array(
                    z.object({
                        number: z.string().optional().default(""),
                        nationality: z.string().optional().default(""),
                    })
                )
                .optional().default([]),
            members_off: z
                .array(
                    z.object({
                        number: z.string().optional().default(""),
                        nationality: z.string().optional().default(""),
                    })
                )
                .optional().default([]),
            hotel_on: z.string().optional(),
            hotel_off: z.string().optional(),
            hotel_req_on: z.string().optional(),
            hotel_req_off: z.string().optional(),
            transportation_on: z.string().optional(),
            transportation_off: z.string().optional(),
            transportation_req_on: z.string().optional(),
            transportation_req_off: z.string().optional(),
        }),
        company_details: z.object({
            company_name: z.string().min(1, { message: t("CompanyName") }),
            contact_person_name: z.string().min(1, { message: t("ContactPersonName") }),
            title: z.string().min(1, { message: t("Title") }),
            country_of_origin: z.string().min(1, { message: t("CountryOfOrigin") }),
            company_email: z.string().email({ message: t("CompanyEmail") }),
            phone_number: z.string().min(1, { message: t("PhoneNumber") }),
        })
        // Add more sections as needed
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            crew: {
                members_on: [{ number: "", nationality: "" }], // Initialize with one empty member
            },
        }
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "crew.members_on",
    });

    const watchSignOn = form.watch("crew.on");
    const watchSignOff = form.watch("crew.off");
    const watchTransportOn = form.watch("crew.transportation_on");
    const watchTransportOff = form.watch("crew.transportation_off");

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        console.log("Form submitted successfully:", values);
        onSubmit(values);
    };


    const handleError = (errors: any) => {
        console.error("Validation errors:", errors);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">

                {/* Details */}
                <PortCard control={form.control} />

                {/* Sign On/Off */}
                <div>
                    <h1 className='text-lg font-semibold pb-2'>Sign On/Off Crew Members</h1>
                    <div className="flex px-4 pb-3 gap-5 w-full items-center">
                        <Controller
                            control={form.control}
                            name="crew.on"
                            render={({ field }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="on"
                                        name="on"
                                    />
                                    <label
                                        htmlFor="on"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {tt('crew-on')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    <div className="flex px-4 gap-5 w-full items-center">
                        <Controller
                            control={form.control}
                            name="crew.off"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="off"
                                        name="off"
                                    />
                                    <label
                                        htmlFor="off"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {tt('crew-off')}
                                    </label>
                                </>
                            )}
                        />
                    </div>
                </div>

                {/* Sign on */}
                {/* Crew number + nationality dynamic field */}
                {watchSignOn &&
                    <div className="flex flex-col gap-4">
                        <h2 className='font-semibold'>Sign On Members</h2>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex gap-4">
                                {/* Crew Number Field */}
                                <FormItem>
                                    <FormLabel htmlFor={`crew.members_on.${index}.number`}>{tt("crew-number")}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name={`crew.members_on.${index}.number`}
                                            render={({ field }) => (
                                                <Input
                                                    className="max-w-[150px] border-2 rounded-xl"
                                                    placeholder="Crew Number"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                {/* Nationality Field */}
                                <FormItem>
                                    <FormLabel htmlFor={`crew.members_on.${index}.nationality`}>{tt("crew-nationality")}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name={`crew.members_on.${index}.nationality`}
                                            render={({ field, }) => (
                                                <Input
                                                    className="max-w-[300px] border-2 rounded-xl"
                                                    placeholder="Nationality"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                {/* Remove Button */}
                                <div className='flex items-end'>
                                    <Button className='bg-white hover:bg-white' type="button" onClick={() => remove(index)}>
                                        <CircleMinus color='black' />
                                    </Button>
                                </div>

                            </div>
                        ))}

                        {/* Add More Crew Button */}
                        <Button
                            type="button"
                            onClick={() => append({ number: "", nationality: "" })}
                            className="max-w-[200px] mt-2"
                        >
                            Add More Nationalities
                        </Button>

                        {/* radio buttons hotel for 1 night? field */}

                        <div className="pt-4">
                            <h1 className="text-sm font-semibold pb-4">{tt('hotel')}</h1>
                            <div className=" grid md:grid-cols-3 bg-[#ffffff] rounded-3xl">
                                {/* Radio Group with two items */}
                                <FormItem className="space-y-3">
                                    <Controller
                                        control={form.control}
                                        name="crew.hotel_on" // Use the correct form field name
                                        defaultValue="no" // Set a default value
                                        render={({ field, fieldState: { error } }) => (
                                            <RadioGroup
                                                onValueChange={field.onChange} // Update form state
                                                value={field.value} // The selected value
                                                className="flex flex-col space-y-0"
                                            >
                                                {/* Standard Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="yes" />
                                                    <FormLabel className="font-normal">{tt("yes")}</FormLabel>
                                                </div>

                                                {/* ULD Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="no" />
                                                    <FormLabel className="font-normal">{tt("no")}</FormLabel>
                                                </div>
                                            </RadioGroup>
                                        )}
                                    />
                                    <FormMessage />
                                </FormItem>
                            </div>
                        </div>

                        {/* From Field */}
                        <FormItem>
                            <FormLabel htmlFor="crew.hotel_req_on" id="crew.hotel_req_on" >{tt('hotel-req')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="crew.hotel_req_on"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input id="crew.hotel_req_on" className="max-w-[300px]  border-2 rounded-xl" placeholder="Hotel Request" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        {/* radio buttons transportation? field */}
                        <div className="pt-4">
                            <h1 className="text-sm font-semibold pb-4">{tt('transportation')}</h1>
                            <div className=" grid md:grid-cols-3 bg-[#ffffff] rounded-3xl">
                                {/* Radio Group with two items */}
                                <FormItem className="space-y-3">
                                    <Controller
                                        control={form.control}
                                        name="crew.transportation_on" // Use the correct form field name
                                        defaultValue="no" // Set a default value
                                        render={({ field }) => (
                                            <RadioGroup
                                                onValueChange={field.onChange} // Update form state
                                                value={field.value} // The selected value
                                                className="flex flex-col space-y-0"
                                            >
                                                {/* Standard Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="yes" />
                                                    <FormLabel className="font-normal">{tt("yes")}</FormLabel>
                                                </div>

                                                {/* ULD Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="no" />
                                                    <FormLabel className="font-normal">{tt("no")}</FormLabel>
                                                </div>
                                            </RadioGroup>
                                        )}
                                    />
                                    <FormMessage />
                                </FormItem>
                            </div>
                        </div>

                        {/* From Field */}
                        {watchTransportOn === "yes" &&
                            <FormItem>
                                <FormLabel htmlFor="crew.transportation_req_on" id="crew.transportation_req_on" >{tt('transportation-req')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="crew.transportation_req_on"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input id="crew.transportation_req_on" className="max-w-[300px]  border-2 rounded-xl" placeholder="Airport Name" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </FormItem>
                        }

                        <p className='text-sm text-red-500'>kindly note that for some nationalities the transportation is a must.</p>


                    </div>
                }

                {/* Crew number + nationality dynamic field */}
                {watchSignOff &&

                    <div className="flex flex-col gap-4">
                        <h2 className='font-semibold'>Sign Off Members</h2>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex gap-4">
                                {/* Crew Number Field */}
                                <FormItem>
                                    <FormLabel htmlFor={`crew.members_off.${index}.number`}>{tt("crew-number")}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name={`crew.members_off.${index}.number`}
                                            render={({ field }) => (
                                                <Input
                                                    className="max-w-[150px] border-2 rounded-xl"
                                                    placeholder="Crew Number"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                {/* Nationality Field */}
                                <FormItem>
                                    <FormLabel htmlFor={`crew.members_off.${index}.nationality`}>{tt("crew-nationality")}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={form.control}
                                            name={`crew.members_off.${index}.nationality`}
                                            render={({ field, }) => (
                                                <Input
                                                    className="max-w-[300px] border-2 rounded-xl"
                                                    placeholder="Nationality"
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                {/* Remove Button */}
                                <div className='flex items-end'>
                                    <Button className='bg-white hover:bg-white' type="button" onClick={() => remove(index)}>
                                        <CircleMinus color='black' />
                                    </Button>
                                </div>

                            </div>
                        ))}

                        {/* Add More Crew Button */}
                        <Button
                            type="button"
                            onClick={() => append({ number: "", nationality: "" })}
                            className="max-w-[200px] mt-2"
                        >
                            Add More Nationalities
                        </Button>

                        {/* radio buttons hotel for 1 night? field */}

                        <div className="pt-4">
                            <h1 className="text-sm font-semibold pb-4">{tt('hotel')}</h1>
                            <div className=" grid md:grid-cols-3 bg-[#ffffff] rounded-3xl">
                                {/* Radio Group with two items */}
                                <FormItem className="space-y-3">
                                    <Controller
                                        control={form.control}
                                        name="crew.hotel_off" // Use the correct form field name
                                        defaultValue="no" // Set a default value
                                        render={({ field, fieldState: { error } }) => (
                                            <RadioGroup
                                                onValueChange={field.onChange} // Update form state
                                                value={field.value} // The selected value
                                                className="flex flex-col space-y-0"
                                            >
                                                {/* Standard Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="yes" />
                                                    <FormLabel className="font-normal">{tt("yes")}</FormLabel>
                                                </div>

                                                {/* ULD Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="no" />
                                                    <FormLabel className="font-normal">{tt("no")}</FormLabel>
                                                </div>
                                            </RadioGroup>
                                        )}
                                    />
                                    <FormMessage />
                                </FormItem>
                            </div>
                        </div>

                        {/* From Field */}
                        <FormItem>
                            <FormLabel htmlFor="crew.hotel_req_off" id="crew.hotel_req_off" >{tt('hotel-req')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="crew.hotel_req_off"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input id="crew.hotel_req_off" className="max-w-[300px]  border-2 rounded-xl" placeholder="Hotel Request" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        {/* radio buttons transportation? field */}
                        <div className="pt-4">
                            <h1 className="text-sm font-semibold pb-4">{tt('transportation')}</h1>
                            <div className=" grid md:grid-cols-3 bg-[#ffffff] rounded-3xl">
                                {/* Radio Group with two items */}
                                <FormItem className="space-y-3">
                                    <Controller
                                        control={form.control}
                                        name="crew.transportation_off" // Use the correct form field name
                                        defaultValue="no" // Set a default value
                                        render={({ field, fieldState: { error } }) => (
                                            <RadioGroup
                                                onValueChange={field.onChange} // Update form state
                                                value={field.value} // The selected value
                                                className="flex flex-col space-y-0"
                                            >
                                                {/* Standard Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="yes" />
                                                    <FormLabel className="font-normal">{tt("yes")}</FormLabel>
                                                </div>

                                                {/* ULD Transportation Method */}
                                                <div className="flex items-center space-x-3">
                                                    <RadioGroupItem value="no" />
                                                    <FormLabel className="font-normal">{tt("no")}</FormLabel>
                                                </div>
                                            </RadioGroup>
                                        )}
                                    />
                                    <FormMessage />
                                </FormItem>
                            </div>
                        </div>

                        {/* From Field */}
                        {watchTransportOff === "yes" &&
                            <FormItem>
                                <FormLabel htmlFor="crew.transportation_req_off" id="crew.transportation_req_off" >{tt('transportation-req')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={form.control}
                                        name="crew.transportation_req_off"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input id="crew.transportation_req_off" className="max-w-[300px]  border-2 rounded-xl" placeholder="Airport Name" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </FormItem>
                        }
                        <p className='text-sm text-red-500'>kindly note that for some nationalities the transportation is a must.</p>


                    </div>
                }



















                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />



                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default SignCrewMembersForm;
