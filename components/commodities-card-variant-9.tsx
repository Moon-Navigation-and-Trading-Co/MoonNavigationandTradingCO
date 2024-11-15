import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import ContainerCard from "./container-details-card-variant-1";
import HSSCheckbox from "./hss-card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";


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
            <h1 className="text-xl font-semibold mb-10">{t('commodities')}</h1>

            {fields.map((field, index) => {
                const Watchdangerous = watch(`commodities.${index}.dangerous`);

                return (

                    <div key={field.id} className="px-4 flex flex-col">

                        <FormItem className="px-4">
                            <FormLabel>{t('type')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`commodities.${index}.type`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[300px] border-2 rounded-xl"
                                                placeholder="Type the commoditiy"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Checkboxes */}
                        <div className="pt-8 pb-10 flex flex-col gap-3 p-4 col-span-2 md:col-span-1">


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

                            {(Watchdangerous) && (
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
                        <div className=" gap-5 flex flex-col px-4 pb-10 col-span-2 md:col-span-1">
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
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </div>

                        </div>


                        <div className="flex flex-col pb-6">

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

                            <div className="flex flex-col px-4 gap-5 w-full justify-center">
                                <Controller
                                    control={control}
                                    name={`commodities.${index}.shippers`}
                                    render={({ field, fieldState: { error } }) => (
                                        <div className="flex items-center gap-3">
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
                                        </div>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name={`commodities.${index}.triangulation`}
                                    render={({ field, fieldState: { error } }) => (
                                        <div className="flex items-center gap-3">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                id={`commodities.${index}.triangulation`}
                                            />
                                            <label
                                                htmlFor={`commodities.${index}.triangulation`}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {t('triangulation')}
                                            </label>
                                        </div>
                                    )}
                                />
                            </div>
                            {/* <HSSCheckbox control={control} /> */}

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
                                    name={`commodities.${index}.additional_info`}
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
                onClick={() => append({})}
            >
                {t('addCargo')}
            </Button>

        </div>
    );


};

export default CommoditiesCard;
