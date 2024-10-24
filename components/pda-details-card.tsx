import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const PDAdetails = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-2 gap-5 p-4  rounded-3xl'>

                {/* From Field */}
                <FormItem>
                    <FormLabel htmlFor="port.name" id="port.name" >{t('port-name')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="port.name"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="port.name" className="max-w-[300px]  border-2 rounded-xl" placeholder="Port Name" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* To Field */}
                <FormItem>
                    <FormLabel id="vessel.name">{t('vessel-name')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.name"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.name" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Name" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Imo field */}
                <FormItem>
                    <FormLabel id="vessel.imo">{t('vessel-imo')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.imo"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[200px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in cm"
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

                {/* ETA field */}
                <FormItem>
                    <FormLabel id="vessel.eta">{t('vessel-eta')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.eta"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.eta" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel ETA" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Type field */}
                <FormItem>
                    <FormLabel id="vessel.type">{t('vessel-type')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.type"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.type" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Type" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* flag field */}
                <FormItem>
                    <FormLabel id="vessel.flag">{t('vessel-flag')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.flag"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.flag" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Flag" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Ship_gross_tonnage */}
                <FormItem>
                    <FormLabel id="vessel.ship_gross_tonnage">{t('ship-gross-tonnage')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.ship_gross_tonnage"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.ship_gross_tonnage" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Gross Tonnage" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* ship net tonnage */}
                <FormItem>
                    <FormLabel id="vessel.ship_net_tonnage">{t('ship-net-tonnage')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.ship_net_tonnage"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.ship_net_tonnage" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Net Tonnage" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* deadweight */}
                <FormItem>
                    <FormLabel id="vessel.deadweight">{t('vessel-deadweight')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.deadweight"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.deadweight" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Deadweight" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Draft field */}
                <FormItem>
                    <FormLabel id="vessel.draft">{t('vessel-draft')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.draft"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.draft" className="max-w-[300px]  border-2 rounded-xl" placeholder="Vessel Draft" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Length field */}
                <FormItem>
                    <FormLabel id="vessel.length">{t('vessel-length')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.length"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in m"
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

            {/* radio buttons from shadcn label: 'Call For' options: ['commercial', 'maintenance'] use form control */}
            <FormItem className="px-4">
                <h1 className="text-sm font- pb-2">Call For:</h1>
                <div className="flex gap-5 w-full items-center">
                    <Controller
                        control={control}
                        name="vessel.call_for_commercial"
                        render={({ field }) => (
                            <>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    id="vessel.call_for_commercial"
                                    name="commercial"
                                />
                                <label
                                    htmlFor="vessel.call_for_commercial"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {t('vessel-commercial')}
                                </label>
                            </>
                        )}
                    />
                </div>
                <div className="flex gap-5 w-full items-center">
                    <Controller
                        control={control}
                        name="vessel.call_for_maintenance"
                        render={({ field }) => (
                            <>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    id="vessel.call_for_maintenance"
                                    name="maintenance"
                                />
                                <label
                                    htmlFor="vessel.call_for_maintenance"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {t('vessel-maintenance')}
                                </label>
                            </>
                        )}
                    />
                </div>
            </FormItem>

            <div className='pt-8 pb-10 grid grid-cols-2 gap-5 p-4 rounded-3xl'>

                {/* Total Discharged Cargo field */}
                <FormItem>
                    <FormLabel id="vessel.total_discharged_cargo">{t('total-discharged-cargo')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.total_discharged_cargo"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in cm"
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

                {/* Total Loaded Cargo field */}
                <FormItem>
                    <FormLabel id="vessel.total_loaded_cargo">{t('total-loaded-cargo')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.total_loaded_cargo"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in cm"
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

                {/* Total expected Berthing Days */}
                <FormItem>
                    <FormLabel id="vessel.total_expected_berthing_days">{t('total-expected-berthing-days')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.total_expected_berthing_days"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in cm"
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

                {/* Total Expected Anchor Days */}
                <FormItem>
                    <FormLabel id="vessel.total_expected_anchor_days">{t('total-expected-anchor-days')}</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.total_expected_anchor_days"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in cm"
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


        </div>
    );
};

export default PDAdetails;
