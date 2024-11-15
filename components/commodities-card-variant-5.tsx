import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import ContainerCard from "./container-details-card-variant-1";
import ShippersTriangulationCard from "./shippers-triangulation-card";
import { Button } from "./ui/button";


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
            <p className="text-sm text-gray-600 pt-4">**{t("commoditity-notes")}</p>

            {fields.map((field, index) => {
                const Watchoversized = watch(`commodities.${index}.oversized`);
                const Watchtemperature = watch(`commodities.${index}.temperature`);
                const Watchdangerous = watch(`commodities.${index}.dangerous`);



                return (

                    <div key={field.id} className="flex flex-col">
                        {/* Checkboxes */}
                        <div className="pt-8 pb-10 flex flex-col gap-5 p-4 col-span-2">

                            <FormItem>
                                <FormLabel>{t('type')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.type`}
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

                            {/* Oversized Checkbox */}
                            <div className="flex gap-5 w-full items-center">
                                <Controller
                                    control={control}
                                    name={`commodities.${index}.oversized`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id={`commodities.${index}.oversized`}
                                            />
                                            <label
                                                htmlFor={`commodities.${index}.oversized`}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {t('oversized')}
                                            </label>
                                        </>
                                    )}
                                />
                            </div>

                            {(Watchoversized || Watchdangerous || Watchtemperature) && (
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
                                                            placeholder="Please insert cargo details"
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
                        <div className="col-span-2">
                            <h1 className='text-lg px-4 font-semibold'>{t('containerDetails')}</h1>
                            <div className='pt-8 pb-10 flex flex-col gap-5 p-4 rounded-3xl'>

                                {/* From Field */}
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
                                                        placeholder="Avg. Weight Kg"
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

                        </div>

                        <div className="flex flex-col w-full h-full">
                            <div className="grid grid-cols-2">
                                {/* Checkboxes */}
                                <div className=" pb-10 flex flex-col gap-3 p-4 col-span-2">

                                    {/* Temperature Checkbox */}
                                    <div className="flex gap-5 w-full items-center">
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.shippers`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        id={`commodities.${index}.shippers`}
                                                    />
                                                    <label
                                                        htmlFor={`commodities.${index}.shippers`}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {t('shippers')}
                                                    </label>
                                                </>
                                            )}
                                        />
                                    </div>

                                    {/* Dangerous Checkbox */}
                                    <div className="flex gap-5 w-full items-center">
                                        <Controller
                                            control={control}
                                            name={`commodities.${index}.triangulation`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        id={`commodities.${index}.triangulation`}
                                                    />
                                                    <label
                                                        htmlFor={`commodities.${index}.triangulation`}
                                                        className="text-sm leading-5 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {t('triangulation')}
                                                    </label>
                                                </>
                                            )}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full">
                            <h1 className="text-lg px-4 font-semibold">{t('recommednedServices')}</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Checkboxes */}
                                <div className="pt-8 pb-6 flex flex-col gap-3 p-4 col-span-2 md:col-span-1">

                                    {/* Temperature Checkbox */}
                                    <div className="flex gap-5 w-full items-center">
                                        <Controller
                                            control={control}
                                            name={`recommended.${index}.import`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        id={`recommended.${index}.import`}
                                                    />
                                                    <label
                                                        htmlFor={`recommended.${index}.import`}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {t('recommended-1')}
                                                    </label>
                                                </>
                                            )}
                                        />
                                    </div>

                                    {/* Dangerous Checkbox */}
                                    <div className="flex gap-5 w-full items-center">
                                        <Controller
                                            control={control}
                                            name={`recommended.${index}.export`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        id={`recommended.${index}.export`}
                                                    />
                                                    <label
                                                        htmlFor={`recommended.${index}.export`}
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        {t('recommended-2')}
                                                    </label>
                                                </>
                                            )}
                                        />
                                    </div>

                                </div>
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

                        {/* Additional Info */}
                        <div className="px-4 w-full max-w-sm items-center gap-1.5 mt-1 col-span-2 mb-10">
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
                        {/* Remove Button */}
                        <div className="flex items-end px-4 border-b mb-4">
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
                    </div>)
            })}

            <Button
                type="button"
                className=" mb-8 w-[210px] p-2 bg-primary text-white rounded-lg"
                onClick={() => append({})}
            >
                {t('addCargo')}
            </Button>
        </div>
    );
};

export default CommoditiesCard;
