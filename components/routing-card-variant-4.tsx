import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Minus, RemoveFormatting } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RoutingCard = ({ control }: { control: any }) => {
    const t = useTranslations('Inland-forms');

    // Use useFieldArray to manage an array of routing pairs
    const { fields, append, remove } = useFieldArray({
        control,
        name: "routing",
    });


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>Origin and Destination Information</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>

                {/* Horizontal Layout for Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Origin Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Origin:</h3>
                        
                        <FormItem>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="routing.origin_type"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="flex flex-col space-y-2"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="egypt" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Egypt</FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="other" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">Other (Please Specify):</FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>

                        {/* Other Country Dropdown */}
                        {(() => {
                            const originType = control._formValues?.routing?.origin_type;
                            if (originType === "other") {
                                return (
                                    <FormItem>
                                        <FormLabel>Select Country</FormLabel>
                                        <FormControl>
                                            <Controller
                                                control={control}
                                                name="routing.origin_other"
                                                render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="w-full border-2 rounded-xl">
                                                                <SelectValue placeholder="Select country" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="usa">United States</SelectItem>
                                                                <SelectItem value="uk">United Kingdom</SelectItem>
                                                                <SelectItem value="germany">Germany</SelectItem>
                                                                <SelectItem value="france">France</SelectItem>
                                                                <SelectItem value="china">China</SelectItem>
                                                                <SelectItem value="japan">Japan</SelectItem>
                                                                <SelectItem value="india">India</SelectItem>
                                                                <SelectItem value="brazil">Brazil</SelectItem>
                                                                <SelectItem value="canada">Canada</SelectItem>
                                                                <SelectItem value="australia">Australia</SelectItem>
                                                                <SelectItem value="south_africa">South Africa</SelectItem>
                                                                <SelectItem value="mexico">Mexico</SelectItem>
                                                                <SelectItem value="italy">Italy</SelectItem>
                                                                <SelectItem value="spain">Spain</SelectItem>
                                                                <SelectItem value="netherlands">Netherlands</SelectItem>
                                                                <SelectItem value="belgium">Belgium</SelectItem>
                                                                <SelectItem value="switzerland">Switzerland</SelectItem>
                                                                <SelectItem value="austria">Austria</SelectItem>
                                                                <SelectItem value="sweden">Sweden</SelectItem>
                                                                <SelectItem value="norway">Norway</SelectItem>
                                                                <SelectItem value="denmark">Denmark</SelectItem>
                                                                <SelectItem value="finland">Finland</SelectItem>
                                                                <SelectItem value="poland">Poland</SelectItem>
                                                                <SelectItem value="czech_republic">Czech Republic</SelectItem>
                                                                <SelectItem value="hungary">Hungary</SelectItem>
                                                                <SelectItem value="romania">Romania</SelectItem>
                                                                <SelectItem value="bulgaria">Bulgaria</SelectItem>
                                                                <SelectItem value="greece">Greece</SelectItem>
                                                                <SelectItem value="turkey">Turkey</SelectItem>
                                                                <SelectItem value="russia">Russia</SelectItem>
                                                                <SelectItem value="ukraine">Ukraine</SelectItem>
                                                                <SelectItem value="belarus">Belarus</SelectItem>
                                                                <SelectItem value="moldova">Moldova</SelectItem>
                                                                <SelectItem value="latvia">Latvia</SelectItem>
                                                                <SelectItem value="lithuania">Lithuania</SelectItem>
                                                                <SelectItem value="estonia">Estonia</SelectItem>
                                                                <SelectItem value="slovakia">Slovakia</SelectItem>
                                                                <SelectItem value="slovenia">Slovenia</SelectItem>
                                                                <SelectItem value="croatia">Croatia</SelectItem>
                                                                <SelectItem value="serbia">Serbia</SelectItem>
                                                                <SelectItem value="bosnia">Bosnia and Herzegovina</SelectItem>
                                                                <SelectItem value="montenegro">Montenegro</SelectItem>
                                                                <SelectItem value="macedonia">North Macedonia</SelectItem>
                                                                <SelectItem value="albania">Albania</SelectItem>
                                                                <SelectItem value="kosovo">Kosovo</SelectItem>
                                                                <SelectItem value="portugal">Portugal</SelectItem>
                                                                <SelectItem value="ireland">Ireland</SelectItem>
                                                                <SelectItem value="iceland">Iceland</SelectItem>
                                                                <SelectItem value="malta">Malta</SelectItem>
                                                                <SelectItem value="cyprus">Cyprus</SelectItem>
                                                                <SelectItem value="luxembourg">Luxembourg</SelectItem>
                                                                <SelectItem value="monaco">Monaco</SelectItem>
                                                                <SelectItem value="liechtenstein">Liechtenstein</SelectItem>
                                                                <SelectItem value="andorra">Andorra</SelectItem>
                                                                <SelectItem value="san_marino">San Marino</SelectItem>
                                                                <SelectItem value="vatican">Vatican City</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        {error && <p className="text-red-500">{error.message}</p>}
                                                    </>
                                                )}
                                            />
                                        </FormControl>
                                    </FormItem>
                                );
                            }
                            return null;
                        })()}
                    </div>

                    {/* Destination Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Destination:</h3>
                        
                        <FormItem>
                            <FormLabel>City, Country/Region</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="routing.destination"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input
                                                className="w-full border-2 rounded-xl"
                                                placeholder="City, Country/Region"
                                                {...field}
                                            />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>

                    {/* Incoterm Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Incoterm:</h3>
                        
                        <FormItem>
                            <FormLabel>Select Incoterm</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="routing.incoterm"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-full border-2 rounded-xl">
                                                    <SelectValue placeholder="Select Incoterm" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="EXW">EXW – Ex Works</SelectItem>
                                                    <SelectItem value="FOB">FOB – Free on Board</SelectItem>
                                                    <SelectItem value="CFR">CFR – Cost and Freight</SelectItem>
                                                    <SelectItem value="CIF">CIF – Cost, Insurance and Freight</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>
                                    )}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoutingCard;
