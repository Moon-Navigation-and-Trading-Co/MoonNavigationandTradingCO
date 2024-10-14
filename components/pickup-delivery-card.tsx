import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";


const PickupDeliveryCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Air-Freight')

    return (
        <div className="flex flex-col w-full h-full">

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Checkboxes */}
                <div className="-mt-8 pb-6 flex flex-col gap-3 p-4 pt-0 col-span-2 md:col-span-1">

                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="routing.pick_up"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="pick_up"
                                    />
                                    <label
                                        htmlFor="pick_up"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('pick-up')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="routing.delivery"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="delivery"
                                    />
                                    <label
                                        htmlFor="delivery"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('delivery')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* additional location info as text input */}
                    <FormItem className="pt-4">
                        <FormLabel htmlFor="routing.location_information" id="routing.location_information" >{t('additional_location')} <span className="text-sm text-gray-500">({t('optional')})</span> </FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="routing.location_information"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input id="routing.location_information" className="max-w-[300px]  border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>

                </div>
            </div>
        </div>
    );
};

export default PickupDeliveryCard;
