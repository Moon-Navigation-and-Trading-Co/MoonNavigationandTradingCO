import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

const LocationCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    // add dangerous watcher
    const { watch } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "location",
    });

    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('location')}</h1>

            {fields.map((field, index) => {
                const Watchdangerous = watch(`commodities.${index}.dangerous`);

                return (
                    <div key={field.id} className='pt-8 grid md:grid-cols-2 gap-5 p-4 rounded-3xl'>

                        {/* From Field */}
                        <FormItem>
                            <FormLabel htmlFor="location.location" id="routing.from" >{t('loco')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`location.${index}.location`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input id="location.location" className="max-w-[300px]  border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>

                        {/* To Field */}
                        <FormItem>
                            <FormLabel id="location.detailed">{t('detailed')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name={`location.${index}.detailed`}
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input id="location.detailed" className="max-w-[300px]  border-2 rounded-xl" placeholder="Address" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

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
                onClick={() => append({})}
            >
                {t('addRoute')}
            </Button>
        </div>
    );
};

export default LocationCard;
