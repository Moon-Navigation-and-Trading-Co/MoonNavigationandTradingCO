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
            <div className='pt-8 pb-10 grid md:grid-cols-2 gap-5 p-4 rounded-3xl'>

                {/* From Field */}
                <FormItem>
                    <FormLabel htmlFor="routing.from" id="routing.from" >{t('from')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.from"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="routing.from" className="max-w-[300px]  border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* To Field */}
                <FormItem>
                    <FormLabel id="routing.to">{t('to')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.to"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="routing.to" className="max-w-[300px]  border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
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
