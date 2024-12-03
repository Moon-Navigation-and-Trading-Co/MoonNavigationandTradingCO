import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Minus } from "lucide-react";
import { Button } from "./ui/button";


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
            <h1 className="text-xl font-semibold">{t('cargo-details')}</h1>

            {fields.map((field, index) => {
                const Watchdangerous = watch(`commodities.${index}.dangerous`);

                return (

                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-2">
                        {/* Checkboxes */}
                        <div className="pt-8 pb-10 flex flex-col justify-center gap-3 p-4 col-span-2 ">

                            {/* Dangerous Checkbox */}
                            <div className="flex flex-col gap-5 w-full justify-center">

                                <FormItem>
                                    <FormLabel>{t('commodity')}</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.type`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="w-[300px] border-2 rounded-xl"
                                                        placeholder="Type the Commoditiy"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>

                                <Controller
                                    control={control}
                                    name={`commodities.${index}.dangerous`}
                                    render={({ field }) => (
                                        <div className="flex gap-2 items-center">
                                            <Checkbox
                                                checked={field.value}
                                                defaultChecked={dangerous_bool}
                                                disabled={dangerous_bool}
                                                onCheckedChange={field.onChange}
                                                id={`commodities.${index}.dangerous`}
                                                name="dang"
                                            />
                                            <label
                                                htmlFor={`commodities.${index}.dangerous`}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {t('dangerous')}
                                            </label>
                                        </div>
                                    )}
                                />
                            </div>
                            {Watchdangerous && (
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
                            <h1 className="-mb-7 mt-4 text-lg font-semibold">{t("unit-of-measure")}</h1>

                        </div>

                        {/* Cargo Details { length, weight, height, width } */}


                        <div className="grid gap-5 grid-cols-1 px-4 pb-6 col-span-2 md:col-span-1">
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

                            <div className="flex items-end gap-2">
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
                                                        placeholder="Weight"
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

                                <FormControl className="">
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.weight-unit`}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value || 'kg'}>
                                                <SelectTrigger className="w-[100px] h-[40px]">
                                                    <SelectValue placeholder="Unit" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="kg">kg</SelectItem>
                                                    <SelectItem value="ton">ton</SelectItem>
                                                    <SelectItem value="dwt">dwt</SelectItem>
                                                </SelectContent>
                                            </Select>
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
                            <p className="px-2 text-xs text-gray-500">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>

                        </div>
                        {/* Additional Message */}
                        <div className="px-4 w-full items-center gap-1.5 mt-1 col-span-2 mb-10">
                            <FormLabel htmlFor="commodities-message">
                                {t('additionalInformation')} <span className="text-sm text-gray-500">({t('optional')})</span>
                            </FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodities.${index}.additional_information`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Textarea
                                                className="max-w-[300px] border-2 rounded-xl"
                                                id={`commodities.${index}.additional_information`}
                                                placeholder="Add any additional information"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
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

