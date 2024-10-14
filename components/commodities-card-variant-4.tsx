import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl, FormItem } from "@/components/ui/form";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "./ui/radio-group";


const CommoditiesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-semibold ">{t('commodities')}</h1>
            <p className="text-sm px-3 py-5 text-gray-500">** Allowed criteria on commodity for this quote request</p>
            <p className="text-sm px-3 pb-3 text-gray-500">We accept stackable cargo only. Non-stackable cargo is not accepted for LCL quotes. <Link className=" underline" href={'/#contact'}>Contact us</Link> to know more</p>
            <p className="text-sm px-3 text-gray-500">
                Dangerous cargo is not accepted for LCL quotes. <br />
                Total shipment size: 60cbm <br />
                Total shipment weight: 20,000kg (about 44092.4 lb) <br />
                Max weight per package: 3,000kg (about 6613.86 lb) <br />
                Max length: 560cm (about 18.37 ft) <br />
                Max width: 230cm (about 7.55 ft) <br />
                Max height: 225cm (about 7.38 ft) <br />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2">



                {/* Cargo Details { length, weight, height, width } */}
                <div className="grid gap-5 grid-cols-2 px-4 pt-8 pb-6 col-span-2 md:col-span-1">
                    <div>
                        <FormItem>
                            <FormLabel id="commodities.type_of_commodity">{t('type')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="commodities.type_of_commodity"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input id="commodities.type_of_commodity" className="max-w-[200px]  border-2 rounded-xl" placeholder="Type" {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                    </div>

                    <div>
                        <FormItem>
                            <FormLabel id="commodities.gross_volume">{t('gross_volume')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="commodities.gross_volume"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[200px] border-2 rounded-xl"
                                                type="number"
                                                placeholder="(Max 60m³)"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                    </div>

                    <div>
                        <FormItem>
                            <FormLabel id="commodities.gross_weight">{t('gross_weight')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="commodities.gross_weight"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[200px] border-2 rounded-xl"
                                                type="number"
                                                placeholder="(Max 20,000Kg)"
                                                {...field}
                                                value={field.value || ''}
                                                onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                    </div>

                    <div>
                        <h1 className="pb-2"> {t("package_type")}</h1>

                        <FormControl>
                            <Controller
                                control={control}
                                name="commodities.package_type"
                                defaultValue="box" // Default value as a string
                                render={({ field, fieldState: { error } }) => (
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        className="flex flex-col space-y-2"
                                    >
                                        {/* Container yard (CY) */}
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="box" />
                                            </FormControl>
                                            <FormLabel className="font-normal">{t('box')}</FormLabel>
                                        </FormItem>

                                        {/* Store door (SD) */}
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="pallet" />
                                            </FormControl>
                                            <FormLabel className="font-normal">{t('pallet')}</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                )}
                            />
                        </FormControl>

                    </div>


                </div>

                <div className="grid px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-6 col-span-2">
                    <h1 className="pb-2"> {t("expires")}</h1>

                    <FormControl>
                        <Controller
                            control={control}
                            name="commodities.validity"
                            defaultValue="no" // Default value as a string
                            render={({ field, fieldState: { error } }) => (
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="space-y-2 grid grid-cols-2"
                                >
                                    {/* Container yard (CY) */}
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="30" />
                                        </FormControl>
                                        <FormLabel className="font-normal">30 {t('days')}</FormLabel>
                                    </FormItem>

                                    {/* Store door (SD) */}
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="60" />
                                        </FormControl>
                                        <FormLabel className="font-normal">60 {t('days')}</FormLabel>
                                    </FormItem>

                                    {/* Store door (SD) */}
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="90" />
                                        </FormControl>
                                        <FormLabel className="font-normal">90 {t('days')}</FormLabel>
                                    </FormItem>

                                    {/* Store door (SD) */}
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="no" />
                                        </FormControl>
                                        <FormLabel className="font-normal">{t("no_exp")}</FormLabel>
                                    </FormItem>
                                </RadioGroup>
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
