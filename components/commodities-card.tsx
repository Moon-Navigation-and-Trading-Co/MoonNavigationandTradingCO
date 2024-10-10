import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormLabel, FormControl } from "@/components/ui/form";
import { Controller } from "react-hook-form";

const CommoditiesCard = ({ control }: { control: any }) => {
    return (
        <div className="flex flex-col w-full h-full">
            <h1 className="text-xl font-semibold">Commodities</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Checkboxes */}
                <div className="pt-8 pb-10 flex flex-col justify-between gap-5 p-4 col-span-2 md:col-span-1">
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
                                        This Cargo requires temperature control
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
                                        This cargo is considered dangerous
                                    </label>
                                </>
                            )}
                        />
                    </div>

                    {/* Oversized Checkbox */}
                    <div className="flex gap-5 w-full items-center">
                        <Controller
                            control={control}
                            name="commodities.oversized"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="oversized"
                                    />
                                    <label
                                        htmlFor="oversized"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        This cargo is oversized
                                    </label>
                                </>
                            )}
                        />
                    </div>
                </div>

                {/* Cargo Details { length, weight, height, width } */}
                <div className="grid gap-5 grid-cols-2 px-4 pb-6 col-span-2 md:col-span-1">
                    <div>
                        <FormLabel htmlFor="length">Cargo Length</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="commodities.length"
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
                    </div>

                    <div>
                        <FormLabel htmlFor="width">Cargo Width</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="commodities.width"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[200px] border-2 rounded-xl"
                                            type="number"
                                            placeholder="Width in cm"
                                            {...field}
                                            value={field.value || ''}
                                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>

                                )}
                            />
                        </FormControl>
                    </div>

                    <div>
                        <FormLabel htmlFor="height">Cargo Height</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="commodities.height"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[200px] border-2 rounded-xl"
                                            type="number"
                                            placeholder="Height in cm"
                                            {...field}
                                            value={field.value || ''}
                                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </div>

                    <div>
                        <FormLabel htmlFor="weight">Cargo Weight</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="commodities.weight"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[200px] border-2 rounded-xl"
                                            type="number"
                                            placeholder="Weight in cm"
                                            {...field}
                                            value={field.value || ''}
                                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>
                                )}
                            />
                        </FormControl>
                    </div>
                </div>

                {/* Upload File */}
                <div className="grid px-4 w-full max-w-sm items-center gap-1.5 mt-1 mb-6 col-span-2">
                    <FormLabel htmlFor="docs">
                        Supporting Files <span className="text-sm text-gray-500">(Optional)</span>
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
                        Additional Notes <span className="text-sm text-gray-500">(Optional)</span>
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
