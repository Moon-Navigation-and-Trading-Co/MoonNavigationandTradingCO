import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useWatch } from "react-hook-form";
import { useTranslations } from "next-intl";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";

const PDAdetails = ({ control, formState }: { control: any; formState?: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    // Use useWatch to watch form values
    const bunkeringMgo = useWatch({ control, name: "services.bunkering.mgo" });
    const bunkeringVlsfo = useWatch({ control, name: "services.bunkering.vlsfo" });
    const bunkeringHfo = useWatch({ control, name: "services.bunkering.hfo" });
    const bunkeringOther = useWatch({ control, name: "services.bunkering.other" });
    
    const chandleryFreshDry = useWatch({ control, name: "services.chandlery.fresh_dry_provisions" });
    const chandlerySpareParts = useWatch({ control, name: "services.chandlery.spare_parts_tools" });
    const chandleryDeckEngine = useWatch({ control, name: "services.chandlery.deck_engine_stores" });
    
    const crewChange = useWatch({ control, name: "services.crew.crew_change_assistance" });
    const crewTransport = useWatch({ control, name: "services.crew.transport_accommodation" });
    const crewMedical = useWatch({ control, name: "services.crew.medical_assistance" });
    const crewOther = useWatch({ control, name: "services.crew.other" });
    
    const cargoStevedoring = useWatch({ control, name: "services.cargo.stevedoring" });
    const cargoSurveys = useWatch({ control, name: "services.cargo.cargo_surveys" });
    const cargoLashing = useWatch({ control, name: "services.cargo.lashing_securing" });
    const cargoOther = useWatch({ control, name: "services.cargo.other" });
    
    const otherWaste = useWatch({ control, name: "services.other.waste_disposal" });
    const otherWater = useWatch({ control, name: "services.other.fresh_water" });
    const otherOther = useWatch({ control, name: "services.other.other" });

    return (
        <div className="">
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
                                        className="max-w-[300px] border-2 rounded-xl no-spinner"
                                        type="number"
                                        id="vessel.imo"
                                        placeholder="IMO Number"
                                        {...field}
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    />
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
                                    <Input id="vessel.flag" className="max-w-[300px]  border-2 rounded-xl" placeholder="Flag" {...field} />
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
                                    <Input id="vessel.ship_gross_tonnage" className="max-w-[300px]  border-2 rounded-xl" placeholder="Gross Tonnage" {...field} />
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
                                    <Input id="vessel.ship_net_tonnage" className="max-w-[300px]  border-2 rounded-xl" placeholder="Net Tonnage" {...field} />
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
                                    <Input id="vessel.deadweight" className="max-w-[300px]  border-2 rounded-xl" placeholder="Deadweight" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Draft field */}
                <FormItem>
                    <FormLabel id="vessel.draft">Draft in meters</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.draft"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input id="vessel.draft" className="max-w-[300px]  border-2 rounded-xl" placeholder="Draft in meters" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Length field */}
                <FormItem>
                    <FormLabel id="vessel.length">Length in meters</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.length"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Length in meters"
                                        {...field}
                                        value={field.value || ''}
                                        onChange={(e) => field.onChange(e.target.value)}
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

            </div>

            {/* Call For radio buttons */}
            <FormItem className="px-4">
                <h1 className="text-sm font-semibold pb-2">Call For:</h1>
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
                <div className="flex gap-5 w-full items-center">
                    <Controller
                        control={control}
                        name="vessel.call_for_other"
                        render={({ field }) => (
                            <>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    id="vessel.call_for_other"
                                    name="other"
                                />
                                <label
                                    htmlFor="vessel.call_for_other"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Other purpose
                                </label>
                            </>
                        )}
                    />
                </div>
                
                {/* Other purpose details */}
                <Controller
                    control={control}
                    name="vessel.call_for_other"
                    render={({ field }) => (
                        field.value && (
                            <div className="mt-2">
                                <Input 
                                    className="max-w-[400px] border-2 rounded-xl" 
                                    placeholder="If Other purpose, please insert details" 
                                    {...control.register('vessel.other_purpose_details')} 
                                />
                            </div>
                        )
                    )}
                />
            </FormItem>

            <div className='pt-8 pb-10 grid grid-cols-1 gap-5 p-4 rounded-3xl'>

                {/* Total Discharged Cargo section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Total Discharged Cargo:</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="vessel.total_discharged_cargo"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[300px] border-2 rounded-xl"
                                                type="number"
                                                placeholder="Enter Quantity"
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

                        <FormItem>
                            <FormLabel>Specify Type</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="vessel.discharged_cargo_type"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input 
                                                className="max-w-[300px] border-2 rounded-xl" 
                                                placeholder="Insert the type (e.g., bulk grain, containers, fuel, etc.)" 
                                                {...field} 
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                            <Controller
                                control={control}
                                name="vessel.discharged_dangerous_cargo"
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="vessel.discharged_dangerous_cargo"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormLabel className="font-normal">Dangerous cargo</FormLabel>
                    </FormItem>

                    {/* Total Days Needed for Discharging */}
                    <FormItem>
                        <FormLabel>Total Days Needed for Discharging</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="vessel.total_days_needed_for_discharging"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[300px] border-2 rounded-xl"
                                            type="number"
                                            placeholder="Enter number of days"
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

                {/* Total Loaded Cargo section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Total Loaded Cargo:</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormItem>
                            <FormLabel>Quantity</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="vessel.total_loaded_cargo"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="max-w-[300px] border-2 rounded-xl"
                                                type="number"
                                                placeholder="Enter Quantity"
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

                        <FormItem>
                            <FormLabel>Specify Type</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="vessel.loaded_cargo_type"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input 
                                                className="max-w-[300px] border-2 rounded-xl" 
                                                placeholder="Insert Type (e.g., crude oil, equipment, chemicals, etc.)" 
                                                {...field} 
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                            <Controller
                                control={control}
                                name="vessel.loaded_dangerous_cargo"
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="vessel.loaded_dangerous_cargo"
                                    />
                                )}
                            />
                        </FormControl>
                        <FormLabel className="font-normal">Dangerous cargo</FormLabel>
                    </FormItem>
                </div>

                {/* Total Days Needed for Loading */}
                <FormItem>
                    <FormLabel>Total Days Needed for Loading</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.total_days_needed_for_loading"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="number"
                                        placeholder="Enter number of days"
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

                {/* ETA (Expected Date of Arrival) */}
                <FormItem>
                    <FormLabel>ETA (Expected Date of Arrival)</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="vessel.eta_expected_date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input 
                                        className="max-w-[300px] border-2 rounded-xl" 
                                        type="date" 
                                        placeholder="Select date"
                                        {...field} 
                                    />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Total Expected Berthing Days */}
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
                                        placeholder="No. of Days"
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
                                        placeholder="No. of Days"
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

            {/* Service Required Section */}
            <div className="space-y-6 p-4">
                <h3 className="text-xl font-semibold">Service Required (Select applicable services)</h3>
                
                {/* Bunkering & Fuel Supply */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">Bunkering & Fuel Supply</h4>
                    <div className="space-y-2">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.bunkering.mgo"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Marine Gas Oil (MGO)</FormLabel>
                        </FormItem>
                        {bunkeringMgo && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.bunkering.mgo_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.bunkering.vlsfo"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Very Low Sulfur Fuel Oil (VLSFO)</FormLabel>
                        </FormItem>
                        {bunkeringVlsfo && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.bunkering.vlsfo_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.bunkering.hfo"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Heavy Fuel Oil (HFO)</FormLabel>
                        </FormItem>
                        {bunkeringHfo && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.bunkering.hfo_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.bunkering.other"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Other (Specify)</FormLabel>
                        </FormItem>

                        <Controller
                            control={control}
                            name="services.bunkering.other"
                            render={({ field }) => (
                                field.value && (
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mt-2" 
                                        placeholder="Please specify" 
                                        {...control.register('services.bunkering.other_details')} 
                                    />
                                )
                            )}
                        />

                        {(bunkeringMgo || bunkeringVlsfo || bunkeringHfo || bunkeringOther) && (
                            <div className="mt-2">
                                <FormLabel>Please provide the required details</FormLabel>
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl mt-1" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.bunkering.details')} 
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Ship Chandlery & Provisions */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">Ship Chandlery & Provisions</h4>
                    <div className="space-y-2">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.chandlery.fresh_dry_provisions"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Fresh & Dry Provisions</FormLabel>
                        </FormItem>
                        {chandleryFreshDry && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.chandlery.fresh_dry_provisions_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.chandlery.spare_parts_tools"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Spare Parts & Tools</FormLabel>
                        </FormItem>
                        {chandlerySpareParts && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.chandlery.spare_parts_tools_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.chandlery.deck_engine_stores"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Deck & Engine Stores</FormLabel>
                        </FormItem>
                        {chandleryDeckEngine && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.chandlery.deck_engine_stores_details')} 
                                />
                            </div>
                        )}

                        {(chandleryFreshDry || chandlerySpareParts || chandleryDeckEngine) && (
                            <div className="mt-2">
                                <FormLabel>Please provide the required details</FormLabel>
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl mt-1" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.chandlery.details')} 
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Crew & Logistics Services */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">Crew & Logistics Services</h4>
                    <div className="space-y-2">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.crew.crew_change_assistance"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Crew Change Assistance</FormLabel>
                        </FormItem>
                        {crewChange && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.crew.crew_change_assistance_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.crew.transport_accommodation"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Transport & Accommodation</FormLabel>
                        </FormItem>
                        {crewTransport && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.crew.transport_accommodation_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.crew.medical_assistance"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Medical Assistance</FormLabel>
                        </FormItem>
                        {crewMedical && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.crew.medical_assistance_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.crew.other"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Other (Specify)</FormLabel>
                        </FormItem>

                        <Controller
                            control={control}
                            name="services.crew.other"
                            render={({ field }) => (
                                field.value && (
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mt-2" 
                                        placeholder="Please specify" 
                                        {...control.register('services.crew.other_details')} 
                                    />
                                )
                            )}
                        />

                        {(crewChange || crewTransport || crewMedical || crewOther) && (
                            <div className="mt-2">
                                <FormLabel>Please provide the required details</FormLabel>
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl mt-1" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.crew.details')} 
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Cargo Handling & Operations */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">Cargo Handling & Operations</h4>
                    <div className="space-y-2">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.cargo.stevedoring"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Stevedoring</FormLabel>
                        </FormItem>
                        {cargoStevedoring && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.cargo.stevedoring_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.cargo.cargo_surveys"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Cargo Surveys</FormLabel>
                        </FormItem>
                        {cargoSurveys && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.cargo.cargo_surveys_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.cargo.lashing_securing"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Lashing & Securing</FormLabel>
                        </FormItem>
                        {cargoLashing && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.cargo.lashing_securing_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.cargo.other"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Other (Specify)</FormLabel>
                        </FormItem>

                        <Controller
                            control={control}
                            name="services.cargo.other"
                            render={({ field }) => (
                                field.value && (
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mt-2" 
                                        placeholder="Please specify" 
                                        {...control.register('services.cargo.other_details')} 
                                    />
                                )
                            )}
                        />

                        {(cargoStevedoring || cargoSurveys || cargoLashing || cargoOther) && (
                            <div className="mt-2">
                                <FormLabel>Please provide the required details</FormLabel>
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl mt-1" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.cargo.details')} 
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Other Services */}
                <div className="space-y-4">
                    <h4 className="text-lg font-medium">Other Services</h4>
                    <div className="space-y-2">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.other.waste_disposal"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Waste Disposal & Sludge Removal</FormLabel>
                        </FormItem>
                        {otherWaste && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.other.waste_disposal_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.other.fresh_water"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Fresh Water Supply</FormLabel>
                        </FormItem>
                        {otherWater && (
                            <div className="ml-6 mt-2">
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl min-h-[80px] resize-none" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.other.fresh_water_details')} 
                                />
                            </div>
                        )}

                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="services.other.other"
                                    render={({ field }) => (
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormLabel className="font-normal">Other (Specify)</FormLabel>
                        </FormItem>

                        <Controller
                            control={control}
                            name="services.other.other"
                            render={({ field }) => (
                                field.value && (
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl mt-2" 
                                        placeholder="Please specify" 
                                        {...control.register('services.other.other_details')} 
                                    />
                                )
                            )}
                        />

                        {(otherWaste || otherWater || otherOther) && (
                            <div className="mt-2">
                                <FormLabel>Please provide the required details</FormLabel>
                                <Textarea 
                                    className="max-w-[400px] border-2 rounded-xl mt-1" 
                                    placeholder="Please provide the required details" 
                                    {...control.register('services.other.details')} 
                                />
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Service Selection Error */}
                {formState?.errors?.services && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm font-medium">
                            {formState.errors.services.message}
                        </p>
                    </div>
                )}
            </div>

            {/* Additional Information */}
            <div className="space-y-4 p-4">
                <h3 className="text-xl font-semibold">Additional Information</h3>
                <FormItem>
                    <FormLabel>Special Requests / Notes</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="additional_information"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea className="max-w-[600px] border-2 rounded-xl min-h-[100px]" placeholder="Special requests or notes..." {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>
            </div>

            {/* Supporting Files */}
            <div className="space-y-4 p-4">
                <h3 className="text-xl font-semibold">Supporting Files (Optional)</h3>
                <p className="text-sm text-muted-foreground">Attach any relevant documents (Charter Party, Voyage Order, etc.)</p>
                <p className="text-sm text-muted-foreground">Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint</p>
                <FormItem>
                    <FormLabel>Upload Files</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="supporting_files"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input 
                                        className="max-w-[400px] border-2 rounded-xl" 
                                        type="file" 
                                        multiple 
                                        accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx" 
                                        {...field} 
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
