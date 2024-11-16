"use client"
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';


// 1. Define a type-safe form handler using z.infer
const InvestorForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    // Get Content
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')


    // Define your Zod schema (as before)
    const formSchema = z.object({
        firstname: z.string().min(1, { message: t("Required") }),
        lastname: z.string().min(1, { message: t("Required") }),
        title: z.string().min(1, { message: t("Required") }),
        organization: z.string().min(1, { message: t("Required") }),
        email: z.string().email(),
        additional_email: z.string().optional(),
        phone_number: z.string().min(1, { message: t("PhoneNumber") }),
        additional_phone_number: z.string().optional(),
        check_size: z.string().min(1, { message: t("Required") }),
        average_check_size: z.string().min(1, { message: t("Required") }),
        accredited_investor: z.string().min(1, { message: t("Required") }),
        qualified_investor: z.string().min(1, { message: t("Required") }),
        // Add more sections as needed
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            title: '',
            organization: '',
            email: '',
            additional_email: '',
            phone_number: '',
            additional_phone_number: '',
            accredited_investor: '',
            qualified_investor: '',
            average_check_size: '',
            check_size: '',
        }
    });

    // 2. Type-safe submit handler
    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">

                {/* First Name */}
                <FormItem>
                    <FormLabel>{tt('firstname')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="firstname"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="First Name" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Last Name */}
                <FormItem>
                    <FormLabel>{tt('lastname')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="lastname"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Last Name" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Title */}
                <FormItem>
                    <FormLabel>{tt('title')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="title"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Title" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Organization Name */}
                <FormItem>
                    <FormLabel>{tt('organization')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="organization"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Organization" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Email */}
                <FormItem>
                    <FormLabel>{tt('email')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="email"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Email" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                <FormItem>
                    <FormLabel>{tt('additionalEmail')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_email"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Email" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                <FormItem>
                    <FormLabel>{tt('phoneNumber')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="phone_number"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="+123456789" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                <FormItem>
                    <FormLabel>{tt('additionalPhoneNumber')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="additional_phone_number"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="+123456789" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Avg Check Size */}
                <FormItem className="space-y-3">
                    <FormLabel>{t('avgCheck-t')} </FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`check_size`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={"cy"}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="500k-1M" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                $500k - $1M
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="$1M" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                $1M
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="$1M-$5M" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                $1M - $5M
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="$5M+" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Greater than $5M
                                            </FormLabel>
                                        </FormItem>

                                    </RadioGroup>
                                </>
                            )}
                        />

                    </FormControl>
                    <FormMessage />
                </FormItem>

                <FormItem>
                    <FormLabel>{t('avgCheck')} *</FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name="average_check_size"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" placeholder="$" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Accredited investor? */}
                <FormItem className="space-y-3">
                    <FormLabel>{t('accredited-inv')} <span className="text-muted-foreground">({tt('yes')}/{tt('no')})? *</span></FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`accredited_investor`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={"no"}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="yes" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {tt('yes')}
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="no" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {tt('no')}
                                            </FormLabel>
                                        </FormItem>



                                    </RadioGroup>
                                </>
                            )}
                        />

                    </FormControl>
                    <FormMessage />
                </FormItem>

                {/* Accredited investor? */}
                <FormItem className="space-y-3">
                    <FormLabel>{t('qualified-inv')} <span className="text-muted-foreground">({tt('yes')}/{tt('no')})? *</span></FormLabel>
                    <FormControl>
                        <Controller
                            control={form.control}
                            name={`qualified_investor`}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={"no"}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="yes" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {tt('yes')}
                                            </FormLabel>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="no" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {tt('no')}
                                            </FormLabel>
                                        </FormItem>



                                    </RadioGroup>
                                </>
                            )}
                        />

                    </FormControl>
                    <FormMessage />
                </FormItem>


                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default InvestorForm;
