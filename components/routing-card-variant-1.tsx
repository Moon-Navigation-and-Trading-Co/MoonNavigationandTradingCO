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

    // Ensure there's at least one routing pair in defaultValues
    const defaultValues = {
        routing: [{ from: '', to: '', services_mode_from: 'cy', services_mode_to: 'cy' }],
    };


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>

                {/* Render each {from, to} field pair */}
                {fields.map((field, index) => (
                    <div key={field.id} className="grid md:grid-cols-3 gap-5">
                        {/* From Field */}
                        <div className="flex flex-col gap-3">
                            <FormItem>
                                <FormLabel>{t('from')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.from`}
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

                            <FormItem className="space-y-3">
                                <FormLabel>Services mode <span className="text-muted-foreground">(from)</span></FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.services_mode_from`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={"cy"}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="cy" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Container yard (CY)
                                                        </FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="sd" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Store door (SD)
                                                        </FormLabel>
                                                    </FormItem>

                                                </RadioGroup>
                                            </>
                                        )}
                                    />

                                </FormControl>
                                <FormMessage />
                            </FormItem>

                        </div>


                        {/* To Field */}
                        <div className="flex flex-col gap-3">
                            <FormItem>
                                <FormLabel>{t('to')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.to`}
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

                            <FormItem className="space-y-3">
                                <FormLabel>Services mode <span className="text-muted-foreground">(to)</span></FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.services_mode_to`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={"cy"}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="cy" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Container yard (CY)
                                                        </FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="sd" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Store door (SD)
                                                        </FormLabel>
                                                    </FormItem>

                                                </RadioGroup>
                                            </>
                                        )}
                                    />

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </div>


                        {/* Remove Button */}
                        <div className="flex items-end">
                            {fields.length > 1 && (
                                <Button
                                    type="button"
                                    className=" rounded-md flex items-center justify-center bg-red-500 mb-[6px] hover:bg-red-600"
                                    onClick={() => remove(index)}
                                >
                                    {t("Remove")}
                                </Button>
                            )}
                        </div>

                    </div>
                ))}

                {/* Add New Pair Button */}
                <Button
                    type="button"
                    className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg"
                    onClick={() => append({ from: '', to: '', services_mode_from: 'cy', services_mode_to: 'cy' })}
                >
                    {t('addRoute')}
                </Button>
            </div>
        </div>
    );
};

export default RoutingCard;
