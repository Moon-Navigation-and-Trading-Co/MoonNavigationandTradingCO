import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Minus, RemoveFormatting } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const RoutingCard = ({ control }: { control: any }) => {
    const t = useTranslations('Inland-forms');

    // Use useFieldArray to manage an array of routing pairs
    const { fields, append, remove } = useFieldArray({
        control,
        name: "routing",
    });


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>

                {/* Render each {from, to} field pair */}
                <div className="grid md:grid-cols-3 gap-5">
                    {/* From Field */}
                    <div className="flex flex-col gap-3">
                        <FormItem>
                            <FormLabel>{t('from')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`routing.from`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[300px] border-2 rounded-xl"
                                                placeholder="City, Country/Region"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>



                    </div>


                    {/* To Field */}
                    <div className="flex flex-col gap-3">
                        <FormItem>
                            <FormLabel>{t('to')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`routing.to`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[300px] border-2 rounded-xl"
                                                placeholder="City, Country/Region"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>


                    </div>



                </div>

                {/* Add New Pair Button */}

            </div>
        </div>
    );
};

export default RoutingCard;
