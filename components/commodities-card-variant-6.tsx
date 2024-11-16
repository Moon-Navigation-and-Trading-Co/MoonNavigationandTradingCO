import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import ContainerCard from "./container-details-card";
import HSSCheckbox from "./hss-card";
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
                const Watchoversized = watch(`commodities.${index}.oversized`);
                const Watchtemperature = watch(`commodities.${index}.temperature`);

                return (
                    <div key={field.id} className="flex flex-col">
                        {/* Checkboxes */}
                        <div className="pt-8 pb-10 flex flex-col gap-5 p-4 col-span-2 md:col-span-1">

                            <FormItem>
                                <FormLabel htmlFor="location.location" id="routing.from" >{t('type')}</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name={`commodities.${index}.type`}
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input id="location.location" className="max-w-[300px]  border-2 rounded-xl" placeholder="Type the Commodity" {...field} />
                                                {error && <p className="text-red-500">{error.message}</p>}
                                            </>)}
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

                            {(Watchdangerous || Watchoversized || Watchtemperature) && (
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
                        <div className="grid gap-5 grid-cols-2 px-4 pb-10 col-span-2 md:col-span-1">
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


                        <div className="col-span-2 pb-6">
                            <div className="">
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
                                                name={`commodities.${index}.container_number`}
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
                            </div>


                            <div className="flex flex-col w-full h-full">
                                <h1 className=" text-lg px-4 font-semibold">{t("hss-title")}</h1>
                                <div className="grid grid-cols-2">
                                    {/* Checkboxes */}
                                    <div className="pt-8 pb-6 flex flex-col gap-3 p-4 col-span-2">

                                        {/* Handling Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.handling`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.handling`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.handling`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('Handling')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/* Loading Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.loading`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.loading`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.loading`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('Loading')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/* Discharging Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.discharging`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.discharging`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.discharging`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('Discharging')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/* Lashing Checkbox*/}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.lashing`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.lashing`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.lashing`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('Lashing')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>


                                        {/* Unlashing Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.unlashing`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.unlashing`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.unlashing`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('Unlashing')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/* before Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.before`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.before`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.before`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('before')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/* after Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.after`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.after`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.after`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('after')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        {/* temporary Checkbox */}
                                        <div className="flex gap-5 w-full items-center">
                                            <Controller
                                                control={control}
                                                name={`commodities.${index}.temporary`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                            id={`commodities.${index}.temporary`}
                                                        />
                                                        <label
                                                            htmlFor={`commodities.${index}.temporary`}
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {t('temporary')}
                                                        </label>
                                                    </>
                                                )}
                                            />
                                        </div>

                                        <FormItem>
                                            <FormLabel htmlFor="location.location" id="routing.from" >{t('other')}</FormLabel>
                                            <FormControl>
                                                <Controller
                                                    control={control}
                                                    name={`commodities.${index}.other`}
                                                    render={({ field, fieldState: { error } }) => (
                                                        <>
                                                            <Input id="location.location" className="max-w-[300px]  border-2 rounded-xl" placeholder="Other.." {...field} />
                                                            {error && <p className="text-red-500">{error.message}</p>}
                                                        </>)}
                                                />
                                            </FormControl>
                                        </FormItem>


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
                        <div className="flex mb-10 items-end px-4 border-b">
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
                onClick={() => append({})}
            >
                {t('addRoute')}
            </Button>

        </div>
    );
};

export default CommoditiesCard;
