import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";


const CommoditiesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    // add dangerous watcher
    const { watch } = useFormContext();
    const Watchdangerous = watch("commodities.dangerous");

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-medium font-raleway">{t('cargo-details')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Checkboxes */}
                <div className="pt-8 pb-10 flex flex-col justify-center gap-3 p-4 col-span-2 ">

                    {/* Dangerous Checkbox */}
                    <div className="flex flex-col gap-5 w-full justify-center">

                        <FormItem>
                            <FormLabel>{t('commodity')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={"commodities.type"}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="w-full max-w-[300px] border-2 rounded-xl"
                                                placeholder="Type the Commoditiy"
                                                {...field}
                                                value={typeof field.value === 'string' ? field.value : ''}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        <Controller

                            control={control}
                            name="commodities.dangerous"
                            render={({ field }) => (
                                <div className="flex gap-2 items-center">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="commodities.dangerous"
                                        name="dang"
                                    />
                                    <label
                                        htmlFor="commodities.dangerous"
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
                                        name={"commodities.details"}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className="w-full max-w-[300px] border-2 rounded-xl"
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
                    <h1 className="-mb-7 mt-4 text-lg font-medium font-raleway">{t("unit-of-measure")}</h1>

                </div>

                {/* Cargo Details { length, weight, height, width } */}


                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 px-4 pb-6 col-span-2 md:col-span-1">
                    <div>
                        <FormLabel htmlFor="length">{t('length')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="commodities.length"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="w-full max-w-[280px] border-2 rounded-xl"
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
                                name="commodities.width"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="w-full max-w-[280px] border-2 rounded-xl"
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
                                name="commodities.height"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="w-full max-w-[280px] border-2 rounded-xl"
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
                                name="commodities.weight"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="w-full max-w-[280px] border-2 rounded-xl"
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
                <div className="grid px-4 w-full items-center gap-1.5 mt-1 mb-6 col-span-2">
                    <FormLabel htmlFor="docs">
                        {t('file')} <span className="text-sm text-gray-500">({t('optional')})</span>
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="commodities.file"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="w-full max-w-[240px] border-2 rounded-xl"
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

                {/* Additional Info */}
                <div className="px-4 w-full items-center gap-1.5 mt-1 col-span-2 mb-10">
                    <FormLabel htmlFor="commodities-message">
                        {t('additionalInformation')} <span className="text-sm text-gray-500">({t('optional')})</span>
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="commodities.additional_information"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="w-full max-w-[300px] border-2 rounded-xl"
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
        </div>
    );
};

export default CommoditiesCard;
