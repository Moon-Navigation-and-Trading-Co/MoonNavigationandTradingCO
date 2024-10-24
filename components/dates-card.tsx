import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

const DatesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('dates')}</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-3 gap-5 p-4 rounded-3xl'>


                {/* Expiry Date Field */}
                <FormItem>
                    <FormLabel htmlFor="dates.effective_date">{t('eff_date')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="dates.effective_date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[180px]  border-2 rounded-xl" type="date" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Expiry Date Field */}
                <FormItem>
                    <FormLabel htmlFor="dates.expiry_date">{t('exp_date')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="dates.expiry_date"
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

export default DatesCard;
