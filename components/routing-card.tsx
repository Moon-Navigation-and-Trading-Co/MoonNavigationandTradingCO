import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

const RoutingCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-3 gap-5 p-4 rounded-3xl'>

                {/* From Field */}
                <FormItem>
                    <FormLabel htmlFor="routing.from" >{t('from')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.from"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px]  border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* To Field */}
                <FormItem>
                    <FormLabel htmlFor="routing.to">{t('to')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.to"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px]  border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Date Field */}
                <FormItem>
                    <FormLabel htmlFor="routing.date">{t('date')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[180px]  border-2 rounded-xl" type="date" {...field} />
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

export default RoutingCard;
