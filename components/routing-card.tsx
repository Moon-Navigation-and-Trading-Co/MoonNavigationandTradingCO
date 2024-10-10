import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";

const RoutingCard = ({ control }: { control: any }) => {
    return (
        <div className="">
            <h1 className='text-2xl font-semibold'>Routing</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-3 gap-5 p-4 bg-[#ffffff] rounded-3xl'>
                {/* From Field */}
                <FormItem>
                    <FormLabel>From</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.from"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input placeholder="City, Country/Region" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>)}
                        />
                    </FormControl>
                </FormItem>

                {/* To Field */}
                <FormItem>
                    <FormLabel>To</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.to"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input placeholder="City, Country/Region" {...field} />
                                    {error && <p className="text-red-500">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Date Field */}
                <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="routing.date"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input type="date" {...field} />
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

export default RoutingCard;
