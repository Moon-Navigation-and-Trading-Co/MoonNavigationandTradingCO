import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";

const ContainerCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('containerDetails')}</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-3 gap-5 p-4 bg-[#ffffff] rounded-3xl'>

                {/* From Field */}
                <FormItem>
                    <FormLabel>{t('containerType')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="container.type"
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
                            name="container.number"
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
                            name="container.weight"
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
    );
};

export default ContainerCard;
