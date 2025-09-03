import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Minus, RemoveFormatting } from "lucide-react";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SearchableCountrySelect } from './searchable-country-select';

// Countries list for routing
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
  "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

const RoutingCard = ({ control }: { control: any }) => {
    const t = useTranslations('Inland-forms');

    // Use useFieldArray to manage an array of routing pairs
    const { fields, append, remove } = useFieldArray({
        control,
        name: "routing",
    });

    // Ensure there's at least one routing pair in defaultValues
    const defaultValues = {
        routing: [{ fromCountry: '', fromPort: '', toCountry: '', toPort: '' }],
    };


    return (
        <div className="">
            <h1 className='text-xl font-semibold'>{t('routing')}</h1>
            <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>

                {/* Render each {from, to} field pair */}
                {fields.map((field, index) => (
                    <div key={field.id} className="space-y-8">
                        {/* From section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">From</h3>
                            <div className="space-y-4">
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.fromCountry`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <SearchableCountrySelect
                                                        value={field.value}
                                                        onValueChange={field.onChange}
                                                        placeholder="Select country"
                                                        className="max-w-[300px]"
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <FormItem>
                                    <FormLabel>Port/Area</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.fromPort`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[300px] border-2 rounded-xl"
                                                        placeholder="e.g., Shanghai Port, Pudong"
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

                        {/* To section */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-700">To</h3>
                            <div className="space-y-4">
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.toCountry`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <SearchableCountrySelect
                                                        value={field.value}
                                                        onValueChange={field.onChange}
                                                        placeholder="Select country"
                                                        className="max-w-[300px]"
                                                    />
                                                    {error && <p className="text-red-500">{error.message}</p>}
                                                </>
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                                <FormItem>
                                    <FormLabel>Port/Area</FormLabel>
                                    <FormControl>
                                        <Controller
                                            control={control}
                                            name={`routing.${index}.toPort`}
                                            render={({ field, fieldState: { error } }) => (
                                                <>
                                                    <Input
                                                        className="max-w-[300px] border-2 rounded-xl"
                                                        placeholder="e.g., Los Angeles Port, Long Beach"
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

                        {/* Remove Button */}
                        <div className="flex items-end">
                            {fields.length > 1 && (
                                <Button
                                    type="button"
                                    className=" rounded-md flex items-center justify-center bg-red-500 mb-[6px] hover:bg-red-600"
                                    onClick={() => remove(index)}
                                >
                                    {t("Remove")}
                                </Button>
                            )}
                        </div>

                    </div>
                ))}

                {/* Add New Pair Button */}
                <Button
                    type="button"
                    className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg"
                    onClick={() => append({ fromCountry: '', fromPort: '', toCountry: '', toPort: '' })}
                >
                    {t('addRoute')}
                </Button>
            </div>
        </div>
    );
};

export default RoutingCard;
