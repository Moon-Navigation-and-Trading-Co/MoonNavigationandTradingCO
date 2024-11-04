import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";

const CompanyDetailsCard = ({ control }: { control: any }) => {
    // Get Content
    const t = useTranslations('Inland-forms')

    return (
        <div className="company-details-card">
            <h1 className='text-xl font-semibold my-6'>{t('companyDetails')}</h1>

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
                <div>
                    <FormItem>
                        <FormLabel>{t('countryOfOrigin')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.country_of_origin"
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input className=" max-w-[300px] border-2 rounded-xl" placeholder="City, Country/Region" {...field} />
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
                        <FormLabel>{t('additionalEmail')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.additional_email"
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
                <div>
                    <FormItem>
                        <FormLabel>{t('additionalPhoneNumber')}</FormLabel>
                        <FormControl>
                            <Controller
                                control={control}
                                name="company_details.additional_phone_number"
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

            <div className='mt-24'>
                <h1 className='font-semibold text-xl mb-6'>Important Information</h1>
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