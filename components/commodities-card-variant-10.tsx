import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFormContext, useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp, X, Plus } from "lucide-react";
import EnhancedSupportingFiles from "./enhanced-supporting-files";


const CommoditiesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    // add dangerous watcher
    const { watch } = useFormContext();
    const Watchdangerous = watch("commodities.dangerous");

    // Use useFieldArray for dynamic additional commodities
    const { fields, append, remove } = useFieldArray({
        control,
        name: "commodities.additional_commodities",
    });

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-semibold">Commodity Details</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Main Commodity Fields - Horizontal Layout */}
                <div className="pt-8 pb-10 p-4 col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Commodity Type */}
                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">{t('commodity')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={"commodities.type"}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="w-full border-2 rounded-xl"
                                                placeholder="Type the Commoditiy"
                                                {...field}
                                                value={typeof field.value === 'string' ? field.value : ''}
                                            />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </div>

                        {/* Quantity */}
                        <div>
                            <FormLabel className="text-sm font-medium mb-2 block">{t('quantity')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="commodities.quantity"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="w-full border-2 rounded-xl"
                                                type="number"
                                                placeholder="Etner the Quantity"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </div>
                    </div>
                </div>

                {/* Dynamic Additional Commodities - Stacked Vertically */}
                {fields.map((field, index) => (
                    <div key={field.id} className="px-4 w-full col-span-2 mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-lg">
                            {/* Additional Commodity Type */}
                            <div>
                                <FormLabel className="text-sm font-medium mb-2 block">Commodity Type {index + 2}</FormLabel>
                                <Controller
                                    control={control}
                                    name={`commodities.additional_commodities.${index}.type`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="w-full border-2 rounded-xl"
                                                placeholder="Type the Commodity"
                                                {...field}
                                                value={typeof field.value === 'string' ? field.value : ''}
                                            />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </div>

                            {/* Additional Quantity */}
                            <div>
                                <FormLabel className="text-sm font-medium mb-2 block">Quantity {index + 2}</FormLabel>
                                <Controller
                                    control={control}
                                    name={`commodities.additional_commodities.${index}.quantity`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="w-full border-2 rounded-xl"
                                                type="number"
                                                placeholder="Enter the Quantity"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </div>
                        </div>
                        
                        {/* Remove Button */}
                        <div className="flex justify-start mt-2">
                            <Button
                                type="button"
                                onClick={() => remove(index)}
                                className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded border-none"
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}

                {/* Add Additional Commodity Button - At Bottom */}
                <div className="px-4 w-full col-span-2 mb-6">
                    <Button
                        type="button"
                        onClick={() => append({
                            type: '',
                            quantity: 0
                        })}
                        className="bg-gray-800 text-white hover:bg-gray-900 px-6 py-2 rounded"
                    >
                        Add Additional Commodity {fields.length > 0 && `(${fields.length} added)`}
                    </Button>
                </div>
            </div>

            {/* Enhanced Supporting Files Section - Outside of Commodity Details Card */}
            <div className="w-full mt-8 mb-6">
                <EnhancedSupportingFiles
                    control={control}
                    name="commodities.supporting_files"
                    cargoPictureName="commodities.cargo_picture"
                    showCargoPicture={true}
                    title="Supporting Files"
                    description="Upload supporting documents for your international trading request. Max total size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint"
                />
            </div>

            {/* Additional Requirements Section */}
            <div className="px-4 w-full items-center gap-1.5 mt-1 col-span-2 mb-10">
                <h3 className="text-lg font-medium mb-4">Additional Requirements</h3>
                <FormItem>
                    <FormLabel htmlFor="additional-requirements">
                        Declare Any Additional Requirements or Trade Notes
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="commodities.additional_requirements"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="w-full max-w-[800px] min-h-[180px] border-2 rounded-xl"
                                        id="additional-requirements"
                                        placeholder="Please specify any special trading instructions, delivery conditions, documentation needs, or regulatory concerns relevant to your request."
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
    );
};

export default CommoditiesCard;
