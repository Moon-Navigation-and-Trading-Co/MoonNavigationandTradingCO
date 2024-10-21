import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Checkbox } from "./ui/checkbox";

const PortCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('vessel')}</h1>
            <div className='pt-8 grid md:grid-cols-3 gap-5 p-4 bg-[#ffffff] rounded-3xl'>

                {/* From Field */}
                <FormItem>
                    <FormLabel htmlFor="port.name" id="port.name" >{t('port-name')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="port.name"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="port.name" className="max-w-[300px]  border-2 rounded-xl" placeholder="Port Name" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* To Field */}
                <FormItem>
                    <FormLabel id="vessel.name">{t('vessel-name')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.name"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.name" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Name" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Imo field */}
                <FormItem>
                    <FormLabel id="vessel.imo">{t('vessel-imo')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.imo"
                            render={({ field, fieldState: { error } }) => (
                                <Input
                                    className="max-w-[200px] border-2 rounded-xl"
                                    type="number"
                                    placeholder="IMO Number"
                                    {...field}
                                    value={field.value || ''}
                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                />
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* checkbox fields */}
                <div className="flex flex-col gap-3 pt-5">
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="vessel.anchor"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="anchor"
                                    />
                                    <label
                                        htmlFor="anchor"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('at-anchor')}
                                    </label>
                                </>
                            )}
                        />
                    </div>
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="vessel.berth"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="berth"
                                    />
                                    <label
                                        htmlFor="berth"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('at-berth')}
                                    </label>
                                </>
                            )}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PortCard;
