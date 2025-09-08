import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const PortCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('vessel')}</h1>
            <div className='pt-8 grid gap-5 p-4 '>

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
                                        className="max-w-[300px] border-2 rounded-xl no-spinner"
                                        type="number"
                                        placeholder="IMO Number"
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

                {/* Vessel Location Radio Buttons */}
                <div className="pt-5">
                    <h3 className="text-lg font-semibold mb-3">Vessel Location</h3>
                    <FormItem>
                        <FormControl>
                            <Controller
                                control={control}
                                name="vessel.location"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="at_anchor" />
                                                </FormControl>
                                                <FormLabel className="font-normal">At Anchor</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="at_berth" />
                                                </FormControl>
                                                <FormLabel className="font-normal">At Berth</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="suez_canal_passage" />
                                                </FormControl>
                                                <FormLabel className="font-normal">During Suez Canal Passage</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>

                {/* Flag Field */}
                <FormItem>
                    <FormLabel>Flag</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.flag"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Flag" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* Port of Crew Change Field */}
                <FormItem>
                    <FormLabel>Port of Crew Change</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.port_of_crew_change"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" placeholder="Port of Crew Change" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* ETA Field */}
                <FormItem>
                    <FormLabel>ETA (Estimated Time of Arrival): (DD/MM/YYYY)</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.eta"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* ETD Field */}
                <FormItem>
                    <FormLabel>ETD (Estimated Time of Departure): (DD/MM/YYYY)</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.etd"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input className="max-w-[300px] border-2 rounded-xl" type="date" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

            </div>
        </div>
    );
};

export default PortCard;
