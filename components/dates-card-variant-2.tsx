import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";

const DatesCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    return (
        <div className="">
            <h1 className='text-xl font-semibold'>Dates</h1>
            <div className='pt-8 pb-10 grid md:grid-cols-2 gap-5 p-4 rounded-3xl'>

                {/* Effective Date Field */}
                <FormItem>
                    <FormLabel>
                        Effective Date <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="effective_date"
                            render={({ field, fieldState: { error } }) => (
                                <div className="space-y-1">
                                    <Input 
                                        className={`max-w-[180px] border-2 rounded-xl ${
                                            error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                        }`} 
                                        type="date" 
                                        placeholder="dd/mm/yyyy"
                                        {...field} 
                                    />
                                    {error && (
                                        <p className="text-red-500 text-sm flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Expiry Date Field */}
                <FormItem>
                    <FormLabel>
                        Expiry Date <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="expiry_date"
                            render={({ field, fieldState: { error } }) => (
                                <div className="space-y-1">
                                    <Input 
                                        className={`max-w-[180px] border-2 rounded-xl ${
                                            error ? 'border-red-500 bg-red-50' : 'border-gray-200'
                                        }`} 
                                        type="date" 
                                        placeholder="dd/mm/yyyy"
                                        {...field} 
                                    />
                                    {error && (
                                        <p className="text-red-500 text-sm flex items-center gap-1">
                                            <AlertCircle className="w-4 h-4" />
                                            {error.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </FormControl>
                </FormItem>

            </div>
        </div>
    );
};

export default DatesCard;
