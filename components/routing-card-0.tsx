import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";
import { SearchableCountrySelect } from './searchable-country-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { z } from 'zod';

// Routing schema definition
export const routingSchema = z.object({
  routing: z.array(z.object({
    fromCountry: z.string().min(1, { message: "From country is required" }),
    fromPort: z.string().min(1, { message: "From port/area is required" }),
    toCountry: z.string().min(1, { message: "To country is required" }),
    toPort: z.string().min(1, { message: "To port/area is required" }),
  }))
});

const RoutingCard0 = ({ control }: { control: any }) => {
    const t = useTranslations('Inland-forms');

    // Use useFieldArray to manage an array of routing pairs
    const { fields, append, remove } = useFieldArray({
        control,
        name: "routing",
    });

    return (
        <div className="">
            <h1 className='text-xl font-raleway font-medium'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
                {/* Render each routing pair */}
                {fields.map((field, index) => (
                    <div key={field.id} className="space-y-6">
                        {/* From Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">From</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem>
                                    <FormLabel className="block mb-2">Country</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.fromCountry`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <SearchableCountrySelect
                                                        value={field.value || ""}
                                                        onValueChange={field.onChange}
                                                        placeholder="Select country"
                                                        className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                                                    />
                                                    {error && <p className="text-red-500 mt-1">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <FormItem>
                                    <FormLabel className="block mb-2">Port/Area</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.fromPort`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        className="w-full max-w-[300px] border-2 rounded-xl" 
                                                        placeholder="Enter port or area" 
                                                        {...field} 
                                                    />
                                                    {error && <p className="text-red-500 mt-1">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>
                        </div>

                        {/* To Section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">To</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormItem>
                                    <FormLabel className="block mb-2">Country</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.toCountry`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <SearchableCountrySelect
                                                        value={field.value || ""}
                                                        onValueChange={field.onChange}
                                                        placeholder="Select country"
                                                        className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                                                    />
                                                    {error && <p className="text-red-500 mt-1">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <FormItem>
                                    <FormLabel className="block mb-2">Port/Area</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.toPort`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input 
                                                        className="w-full max-w-[300px] border-2 rounded-xl" 
                                                        placeholder="Enter port or area" 
                                                        {...field} 
                                                    />
                                                    {error && <p className="text-red-500 mt-1">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            </div>
                        </div>

                        {/* Remove button for additional locations */}
                        {fields.length > 1 && (
                            <div className="flex justify-end">
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={() => remove(index)}
                                    className="max-w-[150px]"
                                >
                                    <Minus className="h-4 w-4 mr-2" />
                                    Remove
                                </Button>
                            </div>
                        )}
                    </div>
                ))}

                {/* Add Additional Location Button */}
                <Button
                    type="button"
                    className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg"
                    onClick={() => append({ 
                        fromCountry: '', 
                        fromPort: '', 
                        toCountry: '', 
                        toPort: ''
                    })}
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Route
                </Button>
            </div>
        </div>
    );
};

export default RoutingCard0;