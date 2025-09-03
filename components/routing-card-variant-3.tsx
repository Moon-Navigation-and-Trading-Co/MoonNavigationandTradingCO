import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Minus, RemoveFormatting } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "./ui/checkbox";
import { SearchableCountrySelect } from "./searchable-country-select";

const RoutingCard = ({ control }: { control: any }) => {
    const t = useTranslations('Inland-forms');

    // Use useFieldArray to manage an array of routing pairs
    const { fields, append, remove } = useFieldArray({
        control,
        name: "routing",
    });

    // Ensure there's at least one routing pair in defaultValues
    const defaultValues = {
        routing: [{ fromCountry: '', fromPort: '', toCountry: '', toPort: '', services_mode_from: 'cy', services_mode_to: 'cy' }],
    };


    return (
        <div className="">
            <h1 className='text-xl font-raleway font-medium'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>

                {/* Render each {fromCountry, fromPort, toCountry, toPort} field pair */}
                {fields.map((field, index) => (
                    <div key={field.id} className="space-y-8">
                        {/* From section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">From</h3>
                            <div className="space-y-4">
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.fromCountry`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <SearchableCountrySelect
                                                        value={field.value}
                                                        onValueChange={field.onChange}
                                                        placeholder="Select country"
                                                        className="max-w-[300px]"
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <FormItem>
                                    <FormLabel>Port/Area</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.fromPort`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[300px] border-2 rounded-xl"
                                                        placeholder="e.g., Shanghai Port, Pudong"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <div className="flex gap-5 w-full items-center">
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.pick_up`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    id={`routing.${index}.pick_up`}
                                                />
                                                <label
                                                    htmlFor={`routing.${index}.pick_up`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {t('pick-up')}
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* To section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">To</h3>
                            <div className="space-y-4">
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.toCountry`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <SearchableCountrySelect
                                                        value={field.value}
                                                        onValueChange={field.onChange}
                                                        placeholder="Select country"
                                                        className="max-w-[300px]"
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <FormItem>
                                    <FormLabel>Port/Area</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.toPort`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[300px] border-2 rounded-xl"
                                                        placeholder="e.g., Shanghai Port, Pudong"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <div className="flex gap-5 w-full items-center">
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.delivery`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    id={`routing.${index}.delivery`}
                                                />
                                                <label
                                                    htmlFor={`routing.${index}.delivery`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {t('delivery')}
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <FormItem>
                                <FormLabel>{t('location-info')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`routing.${index}.location_information`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="max-w-[300px] border-2 rounded-xl"
                                                    placeholder="Address, Post Code"
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
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
                    onClick={() => append({ fromCountry: '', fromPort: '', toCountry: '', toPort: '', services_mode_from: 'cy', services_mode_to: 'cy' })}
                >
                    {t('addRoute')}
                </Button>
            </div>
        </div>
    );
};

export default RoutingCard;
