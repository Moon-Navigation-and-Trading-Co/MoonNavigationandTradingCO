import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";
import AdditionalContactFields from './additional-contact-fields';
import { PhoneInput } from '@/components/phone-input';
import { SearchableCountrySelect } from './searchable-country-select';

const CompanyDetailsCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    // Comprehensive list of all countries
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

    return (
        <div className="company-details-card">
            <h1 className='text-xl font-medium my-6 font-raleway'>{t('companyDetails')}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4'>
                <div>
                    <FormItem>
                        <FormLabel>{t('companyName')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.company_name"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Company Name" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>
                <div>
                    <FormItem>
                        <FormLabel>{t('contactPersonName')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.contact_person_name"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Contact Name" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>
                
                {/* Title and Country of Origin in the same row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:col-span-2">
                    <div>
                        <FormItem>
                            <FormLabel>{t('title')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="company_details.title"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Mr, Ms.. etc." {...field} />
                                            {error && <p className="text-red-500">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem>
                            <FormLabel className="block mb-2">{t('countryOfOrigin')}</FormLabel>
                            <FormControl>
                                <Controller
                                    control={control}
                                    name="company_details.country_of_origin"
                                    render={({ field, fieldState: { error } }) => (
                                        <>
                                            <SearchableCountrySelect
                                              value={field.value}
                                              onValueChange={field.onChange}
                                              placeholder="Select country"
                                              className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                                            />
                                            {error && <p className="text-red-500 mt-1">{error.message}</p>}
                                        </>)}
                                />
                            </FormControl>
                        </FormItem>
                    </div>
                </div>

                <div>
                    <FormItem>
                        <FormLabel>{t('companyEmail')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.company_email"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className="w-full max-w-[300px] border-2 rounded-xl" placeholder="Email" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>
                <div>
                    <FormItem>
                        <FormLabel>{t('phoneNumber')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.phone_number"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <PhoneInput
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                            defaultCountry="EG"
                                            international
                                            countryCallingCodeEditable={false}
                                            placeholder="Enter phone number"
                                            className="w-full max-w-[300px] border-2 rounded-xl"
                                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>
            </div>

            {/* Additional Contact Fields */}
            <div className="px-4 mt-6">
                <AdditionalContactFields control={control} />
            </div>

            <div className='mt-24'>
                <h1 className='font-medium text-xl mb-6 font-raleway'>Important Information</h1>
                <div className='flex flex-col gap-3 text-sm text-muted-foreground'>
                    <p>• For quote requests with long-term validity, please contact us.</p>
                    <p>• Please do not enter personal or financial information, such as credit card details, or debit card details anywhere in your request.</p>
                    <p>• Please note that when you submit your quote request, an automated confirmation e-mail will be sent to you containing the details you entered in this form.</p>
                </div>
            </div>

        </div>
    );
};

export default CompanyDetailsCard;