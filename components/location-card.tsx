import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

const LocationCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('location')}</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-2 gap-5 p-4 bg-[#ffffff] rounded-3xl'>

                {/* From Field */}
                <FormItem>
                    <FormLabel htmlFor="location.location" id="routing.from" >{t('loco')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="location.location"
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
                            name="location.detailed"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="location.detailed" className="max-w-[300px]  border-2 rounded-xl" placeholder="Address" {...field} />
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

export default LocationCard;
