import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const TransportationMethodCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Air-Freight');
    const tt = useTranslations('Inland-forms');

    return (
        <div className="">
            <h1 className="text-lg px-4 font-semibold">{t('transportation')}</h1>
            <div className=" pb-10 flex flex-col gap-5 p-4 rounded-3xl">
                {/* Radio Group with two items */}
                <FormItem className="space-y-3">
                    <Controller
                        control={control}
                        name="transportation.method" // Use the correct form field name
                        defaultValue="sea" // Set a default value
                        render={({ field, fieldState: { error } }) => (
                            <RadioGroup
                                onValueChange={field.onChange} // Update form state
                                value={field.value} // The selected value
                                className="flex flex-col space-y-1"
                            >
                                {/* sea Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="sea" />
                                    <FormLabel className="font-normal">{tt("sea")}</FormLabel>
                                </div>

                                {/* ULD Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="land" />
                                    <FormLabel className="font-normal">{tt("land")}</FormLabel>
                                </div>

                                {/* ULD Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="air" />
                                    <FormLabel className="font-normal">{tt("air")}</FormLabel>
                                </div>
                            </RadioGroup>
                        )}
                    />
                    <FormMessage />
                </FormItem>

                <FormItem>
                    <FormLabel>{t('insert-details')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name={"transportation.details"}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="w-[300px] border-2 rounded-xl"
                                        placeholder="Please declare"
                                        {...field}
                                        value={typeof field.value === 'string' ? field.value : ''}
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

export default TransportationMethodCard;
