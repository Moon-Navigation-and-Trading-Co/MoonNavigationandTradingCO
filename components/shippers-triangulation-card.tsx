import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";


const ShippersTriangulationCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Air-Freight')

    return (
        <div className="flex flex-col w-full h-full">
            <div className="grid grid-cols-2">
                {/* Checkboxes */}
                <div className=" pb-10 flex flex-col gap-3 p-4 col-span-2">

                    {/* Temperature Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="container.shippers"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="shippers"
                                    />
                                    <label
                                        htmlFor="shippers"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('shippers')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Dangerous Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="container.triangulation"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="triangulation"
                                    />
                                    <label
                                        htmlFor="triangulation"
                                        className="text-sm leading-5 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('triangulation')}
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

export default ShippersTriangulationCard;
