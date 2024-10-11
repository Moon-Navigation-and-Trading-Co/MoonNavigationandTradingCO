import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";


const RecommendedServicesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Air-Freight')

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-semibold">{t('recommednedServices')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Checkboxes */}
                <div className="pt-8 pb-6 flex flex-col gap-3 p-4 col-span-2 md:col-span-1">

                    {/* Temperature Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="recommended.import"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="import"
                                    />
                                    <label
                                        htmlFor="import"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('recommended-1')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Dangerous Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="recommended.export"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="export"
                                    />
                                    <label
                                        htmlFor="export"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('recommended-2')}
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

export default RecommendedServicesCard;
