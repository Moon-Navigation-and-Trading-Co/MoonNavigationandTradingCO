import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import ContainerCard from "./container-details-card";
import ShippersTriangulationCard from "./shippers-triangulation-card";


const CommoditiesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-semibold">{t('commodities')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Checkboxes */}
                <div className="pt-8 pb-10 flex flex-col gap-3 p-4 col-span-2">
                    {/* Temperature Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="commodities.temperature"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="temperature"
                                    />
                                    <label
                                        htmlFor="temperature"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('temperature')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Dangerous Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="commodities.dangerous"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="dangerous"
                                    />
                                    <label
                                        htmlFor="dangerous"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        {t('dangerous')}
                                    </label>
                                </>
                            )}
                        />
                    </div>

                </div>
                <div className="col-span-2">
                    <ContainerCard control={control} />

                </div>

                <ShippersTriangulationCard control={control} />

                {/* Upload File */}
                <div className="grid px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-6 col-span-2">
                    <FormLabel htmlFor="docs">
                        {t('file')} <span className="text-sm text-gray-500">({t('optional')})</span>
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="commodities.file"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[240px] border-2 rounded-xl"
                                        id="docs"
                                        type="file"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </div>

                {/* Additional Info */}
                <div className="px-4 w-full max-w-sm items-center gap-1.5 mt-1 col-span-2 mb-10">
                    <FormLabel htmlFor="commodities-message">
                        {t('additionalInformation')} <span className="text-sm text-gray-500">({t('optional')})</span>
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="commodities.additional_information"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className="max-w-[300px] border-2 rounded-xl"
                                        id="commodities-message"
                                        placeholder="Add any additional information"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default CommoditiesCard;
