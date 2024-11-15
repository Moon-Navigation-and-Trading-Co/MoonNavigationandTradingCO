import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Separator } from "./ui/separator";


const CommoditiesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    const { watch } = useFormContext();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "commodities",
    });

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-semibold">{t('commodities')}</h1>

            {fields.map((field, index) => {
                const Watchdangerous = watch(`commodities.${index}.dangerous`);
                const Watchtemperature = watch(`commodities.${index}.temperature`);

                return (


                    <div key={field.id} className="flex flex-col gap-4 mt-2">

                        <div className="flex flex-col gap-4 mt-2">

                            <FormItem className="px-4 py-4">
                                <FormLabel>{t('containerType')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.container_type`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="w-[300px] border-2 rounded-xl"
                                                    placeholder="Type the Commodity"
                                                    {...field}
                                                    value={field.value || ''}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            {/* Checkboxes */}
                            <div className=" flex flex-col gap-3 px-4 justify-center pb-4">
                                {/* Temperature Checkbox */}
                                <div className="flex gap-5 w-full items-center">
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.temperature`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    id={`commodities.${index}.temperature`}
                                                />
                                                <label
                                                    htmlFor={`commodities.${index}.temperature`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {t('temperature')}
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {/* Dangerous Checkbox */}
                                <div className="flex gap-5 w-full items-center">
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.dangerous`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    id={`commodities.${index}.dangerous`}
                                                />
                                                <label
                                                    htmlFor={`commodities.${index}.dangerous`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {t('dangerous')}
                                                </label>
                                            </>
                                        )}
                                    />
                                </div>

                                {(Watchdangerous || Watchtemperature) && (
                                    <>
                                        <FormItem>
                                            <FormLabel>{t('insert-details')}</FormLabel>
                                            <FormControl>
                                                <Controller
                                                    control={control}
                                                    name={`commodities.${index}.details`}
                                                    render={({ field, fieldState: { error } }) => (
                                                        <>
                                                            <Input
                                                                className="w-[300px] border-2 rounded-xl"
                                                                placeholder="Please insert details"
                                                                {...field}
                                                                value={typeof field.value === 'string' ? field.value : ''}
                                                            />
                                                            {error && <p className="text-red-500">{error.message}</p>}
                                                        </>
                                                    )}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    </>
                                )}

                            </div>

                            {/* Cargo Details { length, weight, height, width } */}
                            <div className="grid gap-5 grid-cols-2 px-4 pb-6 col-span-2 md:col-span-1">
                                <div>
                                    <FormLabel htmlFor="length">{t('length')}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.length`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[200px] border-2 rounded-xl"
                                                        type="number"
                                                        placeholder="Length in cm"
                                                        {...field}
                                                        value={field.value || ''}
                                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </div>

                                <div>
                                    <FormLabel htmlFor="width">{t('width')}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.width`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[200px] border-2 rounded-xl"
                                                        type="number"
                                                        placeholder="Width in cm"
                                                        {...field}
                                                        value={field.value || ''}
                                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>

                                            )}
                                        />
                                    </FormControl>
                                </div>

                                <div>
                                    <FormLabel htmlFor="height">{t('height')}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.height`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[200px] border-2 rounded-xl"
                                                        type="number"
                                                        placeholder="Height in cm"
                                                        {...field}
                                                        value={field.value || ''}
                                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </div>

                                <div>
                                    <FormLabel htmlFor="weight">{t('weight')}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.weight`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[200px] border-2 rounded-xl"
                                                        type="number"
                                                        placeholder="Weight in kg"
                                                        {...field}
                                                        value={field.value || ''}
                                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </div>
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
                                            <>
                                                <Input
                                                    className="max-w-[240px] border-2 rounded-xl"
                                                    id="docs"
                                                    type="file"
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                                <p className="text-sm text-gray-500">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
                            </div>
                            {fields.length > 1 && <button
                                type="button"
                                onClick={() => remove(index)}
                                className="flex w-fit justify-center items-center gap-2 px-4 py-2 bg-destructive text-white rounded-lg"
                            >
                                {t('Remove')}
                            </button>}
                        </div>

                        {/* Remove Button */}

                        <Separator className="my-4" />

                    </div>
                )
            })}

            {/* Add More Button */}
            <div className="flex justify-start items-center mt-3 mb-6">
                <button
                    type="button"
                    onClick={() => append({
                        container_type: '',
                        temperature: false,
                        dangerous: false,
                        details: '',
                        length: '',
                        width: '',
                        height: '',
                        weight: '',
                        weight_unit: 'kg',
                        file: '',
                    })}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg"
                >
                    <span>{t('addCargo')}</span>
                </button>

            </div>

            {/* Additional Info */}
            <div className="px-4 w-full max-w-sm items-center gap-1.5 mt-1 col-span-2 mb-10">
                <FormLabel htmlFor="commodities-message">
                    {t('additionalInformation')} <span className="text-sm text-gray-500">({t('optional')})</span>
                </FormLabel>
                <FormControl>
                    <Controller
                        control={control}
                        name="additional_information"
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Textarea
                                    className="max-w-[300px] border-2 rounded-xl"
                                    id="commodities-message"
                                    placeholder="Add any additional information"
                                    {...field}
                                />
                                {error && <p className="text-red-500">{error.message}</p>}
                            </>
                        )}
                    />
                </FormControl>
            </div>
        </div>
    );
};

export default CommoditiesCard;
