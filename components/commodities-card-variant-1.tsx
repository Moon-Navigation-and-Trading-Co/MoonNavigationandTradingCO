import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";


const CommoditiesCard = ({ control }: { control: any }) => {
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
            <h1 className="text-xl font-semibold">{t('commodities')}</h1>

            {fields.map((field, index) => {
                const Watchdangerous = watch(`commodities.${index}.dangerous`);
                const Watchtemperature = watch(`commodities.${index}.temperature`);
                const Watchoversized = watch(`commodities.${index}.oversized`);
                return (
                    <div key={field.id} className="flex flex-col mt-4">

                        <div className="px-4 w-full">
                            <FormItem>
                                <FormLabel>{t('containerType')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.container_type`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input className="max-w-[300px]  border-2 rounded-xl" placeholder="Type" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </FormItem>

                            {/* To Field */}
                            <FormItem>
                                <FormLabel>{t('containerNo')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.container_no`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input type="number"
                                                    className="max-w-[300px]  border-2 rounded-xl"
                                                    placeholder="No. of Containers"
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            {/* Date Field */}
                            <FormItem>
                                <FormLabel>{t('containerWeight')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.container_weight`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input

                                                    type="number"
                                                    className="max-w-[300px]  border-2 rounded-xl"
                                                    placeholder="Avg. Weight"
                                                    {...field}
                                                    value={field.value || ''}
                                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                                />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>

                        {/* Checkboxes */}
                        <div className="pt-8 pb-10 flex flex-col gap-5 p-4 col-span-2 md:col-span-1">

                            <FormItem>
                                <FormLabel>{t('type')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.type`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input className="max-w-[300px]  border-2 rounded-xl" placeholder="Type of Commodity" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
                                    />
                                </FormControl>
                            </FormItem>

                            {/* Temperature Checkbox */}
                            <Controller
                                control={control}
                                name={`commodities.${index}.dangerous`}
                                render={({ field }) => (
                                    <div className="flex gap-2 items-center">
                                        <Checkbox
                                            checked={field.value}
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
                            <Controller
                                control={control}
                                name={`commodities.${index}.temperature`}
                                render={({ field }) => (
                                    <div className="flex gap-2 items-center">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            id={`commodities.${index}.temperature`}
                                            name="temp"
                                        />
                                        <label
                                            htmlFor={`commodities.${index}.temperature`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {t('temperature')}
                                        </label>
                                    </div>
                                )}
                            />
                            <Controller
                                control={control}
                                name={`commodities.${index}.oversized`}
                                render={({ field }) => (
                                    <div className="flex gap-2 items-center">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            id={`commodities.${index}.oversized`}
                                            name="over"
                                        />
                                        <label
                                            htmlFor={`commodities.${index}.oversized`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {t('oversized')}
                                        </label>
                                    </div>
                                )}
                            />

                            {(Watchdangerous || Watchtemperature || Watchoversized) && (
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
