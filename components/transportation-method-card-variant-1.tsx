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
            <h1 className="text-lg px-4 font-semibold">Shipping Method:</h1>
            <div className=" pb-10 flex flex-col gap-5 p-4 rounded-3xl">
                {/* Radio Group with three items */}
                <FormItem className="space-y-3">
                    <Controller
                        control={control}
                        name="transportation.method" // Use the correct form field name
                        defaultValue="sea" // Set a default value
                        render={({ field, fieldState: { error } }) => (
                            <RadioGroup
                                onValueChange={field.onChange} // Update form state
                                value={field.value || ""} // The selected value
                                className="flex flex-col space-y-1"
                            >
                                {/* Sea Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="sea" />
                                    <FormLabel className="font-normal">By Sea</FormLabel>
                                </div>

                                {/* Land Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="land" />
                                    <FormLabel className="font-normal">Land</FormLabel>
                                </div>

                                {/* Air Transportation Method */}
                                <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="air" />
                                    <FormLabel className="font-normal">Air Freight</FormLabel>
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
