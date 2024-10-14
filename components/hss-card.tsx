import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";


const HSSCheckbox = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className=" text-xl font-semibold">{t("hss-title")}</h1>
            <div className="grid grid-cols-2">
                {/* Checkboxes */}
                <div className="pt-8 pb-6 flex flex-col gap-3 p-4 col-span-2">

                    {/* Handling Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.handling"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="handling"
                                    />
                                    <label
                                        htmlFor="handling"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('Handling')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Loading Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.loading"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="loading"
                                    />
                                    <label
                                        htmlFor="loading"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('Loading')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Discharging Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.discharging"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="discharging"
                                    />
                                    <label
                                        htmlFor="discharging"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('Discharging')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Lashing Checkbox*/}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.lashing"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="lashing"
                                    />
                                    <label
                                        htmlFor="lashing"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('Lashing')}
                                    </label>
                                </>
                            )}
                        />
                    </div>


                    {/* Unlashing Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.unlashing"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="unlashing"
                                    />
                                    <label
                                        htmlFor="unlashing"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('Unlashing')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* before Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.before"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="before"
                                    />
                                    <label
                                        htmlFor="before"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('before')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* after Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.after"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="after"
                                    />
                                    <label
                                        htmlFor="after"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('after')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* temporary Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="hss.temporary"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="temporary"
                                    />
                                    <label
                                        htmlFor="temporary"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('temporary')}
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

export default HSSCheckbox;
