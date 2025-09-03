import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";
import AdditionalContactFields from './additional-contact-fields';
import { SearchableCountrySelect } from './searchable-country-select';

const CompanyDetailsCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    return (
        <div className="company-details-card">
            <h1 className='text-xl font-medium my-6 font-raleway'>{t('companyDetails')}</h1>

            <div className='grid grid-cols-2 gap-5 px-4'>
                <div>
                    <FormItem>
                        <FormLabel>{t('companyName')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.company_name"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Company Name" {...field} />
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
                                        <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Contact Name" {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>
                <div>
                    <FormItem>
                        <FormLabel>{t('title')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.title"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Mr, Ms.. etc." {...field} />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
                </div>
                <div className="col-span-2">
                    <FormItem>
                        <FormLabel>{t('countryOfOrigin')}</FormLabel>
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
                          className="w-full max-w-[300px]"
                        />
                                        {error && <p className="text-red-500">{error.message}</p>}
                                    </>)}
                            />
                        </FormControl>
                    </FormItem>
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
                                        <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="Email" {...field} />
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
                                        <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="+123456789" {...field} />
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



        </div>
    );
};

export default CompanyDetailsCard;