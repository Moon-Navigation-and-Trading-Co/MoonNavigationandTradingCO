import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Minus } from "lucide-react";
import { Button } from "./ui/button";
import { AlertCircle } from "lucide-react";


const CommoditiesCard = ({ control, dangerous_bool = false }: { control: any, dangerous_bool: boolean }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    // add dangerous watcher
    const { watch } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "commodities",
    });

    return (
        <div className="flex flex-col w-full h-full">

            {fields.map((field, index) => {



                return (

                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-2">
                        {/* Checkboxes */}
                        <div className="pt-8 pb-10 flex flex-col justify-center gap-5 p-4 col-span-2 ">


                            

                        </div>



                        {/* Upload File */}
                        <div className="grid px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-6 col-span-2">
                            <FormLabel htmlFor="docs">
                                {t('file')} <span className="text-sm text-gray-500">({t('optional')})</span>
                            </FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodities.${index}.file`}
                                    render={({ field, fieldState: { error } }) => (
                                        <div className="space-y-1">
                                            <Input
                                                className={`max-w-[240px] border-2 rounded-xl ${
                                                    error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                                }`}
                                                id="docs"
                                                type="file"
                                                {...field}
                                            />
                                            {error && (
                                                <p className="text-red-500 text-sm flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {error.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                />
                            </FormControl>
                            <p className="px-2 text-xs text-gray-500">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>

                        </div>

                        <div className="px-4 w-full items-center gap-1.5 mt-1 col-span-2 mb-10">
                            <FormLabel htmlFor="additional_information">
                                {t('additionalInformation')} <span className="text-sm text-gray-500">({t('optional')})</span>
                            </FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodities.${index}.additional_information`}
                                    render={({ field, fieldState: { error } }) => (
                                        <div className="space-y-1">
                                            <Textarea
                                                className={`max-w-[300px] border-2 rounded-xl ${
                                                    error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                                }`}
                                                id="additional_information"
                                                placeholder="Add any additional information"
                                                {...field}
                                            />
                                            {error && (
                                                <p className="text-red-500 text-sm flex items-center gap-1">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {error.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </div>

                        {/* Remove Button */}
                        <div className="flex items-end px-4">
                            {fields.length > 1 && (
                                <Button
                                    type="button"
                                    className=" rounded-md flex items-center justify-center bg-red-500 hover:bg-red-600 mb-8"
                                    onClick={() => remove(index)}
                                >
                                    {t("Remove")}
                                </Button>
                            )}
                        </div>
                    </div>
                )
            })}

            <Button
                type="button"
                className=" mb-8 w-[210px] p-2 bg-primary text-white rounded-lg"
                onClick={() => append({
                    type: '',
                    dangerous: dangerous_bool || false,
                    details: '',
                    length: '',
                    width: '',
                    height: '',
                    weight: '',
                    weight_unit: 'kg',
                    file: '',
                })}
            >
                {t('addCargo')}
            </Button>




        </div>
    );
};

export default CommoditiesCard;

