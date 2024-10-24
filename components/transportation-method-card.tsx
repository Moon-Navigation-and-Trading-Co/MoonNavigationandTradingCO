import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TransportationMethodCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Air-Freight');

    return (
        <div className="">
            <h1 className="text-xl font-semibold">{t('transportation')}</h1>
            <div className="pt-8 pb-10 grid md:grid-cols-3 gap-5 p-4 rounded-3xl">
                {/* Radio Group with two items */}
                <FormItem className="space-y-3">
                    <Controller
                        control={control}
                        name="transportation.method" // Use the correct form field name
                        defaultValue="standard" // Set a default value
                        render={({ field, fieldState: { error } }) => (
                            <RadioGroup
                                onValueChange={field.onChange} // Update form state
                                value={field.value} // The selected value
                                className="flex flex-col space-y-1"
                            >
                                {/* Standard Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="standard" />
                                    <FormLabel className="font-normal">{t("standard")}</FormLabel>
                                </div>

                                {/* ULD Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="uld" />
                                    <FormLabel className="font-normal">{t("ULD")}</FormLabel>
                                </div>
                            </RadioGroup>
                        )}
                    />
                    <FormMessage />
                </FormItem>
            </div>
        </div>
    );
};

export default TransportationMethodCard;
