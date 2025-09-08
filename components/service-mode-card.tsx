import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";

const ServiceModeCard = ({ control }: { control: any }) => {
    const t = useTranslations('Air-Freight');

    return (
        <div className="">
            <h1 className="text-xl font-semibold">{t('serviceMode')}</h1>
            <div className="pt-8 pb-10 grid md:grid-cols-3 gap-5 p-4  rounded-3xl">
                {/* Radio Group */}
                <FormItem className="space-y-3 flex items-center">
                    <FormControl>
                        <Controller
                            control={control}
                            name="service.service_mode"
                            defaultValue="cy" // Default value as a string
                            render={({ field, fieldState: { error } }) => (
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value || ""}
                                    className="flex flex-col space-y-1"
                                >
                                    {/* Container yard (CY) */}
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="cy" />
                                        </FormControl>
                                        <FormLabel className="font-normal">{t('cy')}</FormLabel>
                                    </FormItem>

                                    {/* Store door (SD) */}
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="sd" />
                                        </FormControl>
                                        <FormLabel className="font-normal">{t('sd')}</FormLabel>
                                    </FormItem>
                                    {error && <p className="text-red-500">{error.message}</p>}

                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>

                {/* From Field */}
                <FormItem>
                    <FormLabel htmlFor="service.from">{t('from')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="service.from"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* To Field */}
                <FormItem>
                    <FormLabel htmlFor="service.to">{t('to')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="service.to"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
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

export default ServiceModeCard;
