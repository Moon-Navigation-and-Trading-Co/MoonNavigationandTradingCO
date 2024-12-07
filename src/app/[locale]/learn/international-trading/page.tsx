import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function InternationalTrading() {
    const t = useTranslations("learn-international-trading")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
                <CardContent className="p-0">
                    {t('description')}
                </CardContent>
            </CardHeader>

            {/* Key Components of International Trading */}
            <CardContent className="space-y-6">
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-1')}</h2>
                    <ol className="list-decimal pl-6 space-y-2 marker:font-semibold">

                        {/* 1. Imports and Exports */}
                        <li>
                            <div className="flex flex-col">
                                <span className="font-bold">{t('component-1-item-1')}:</span>
                            </div>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>
                                    <div>
                                        <span className="font-bold">{t('component-1-item-1-title')}:</span> {t('component-1-item-1-description')}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="font-bold">{t('component-1-item-2-title')}:</span> {t('component-1-item-2-description')}
                                    </div>
                                </li>
                            </ol>
                        </li>

                        {/* 2. Trade Agreements and Tariffs */}
                        <li>
                            <div className="flex flex-col">
                                <span className="font-bold">{t('component-2-item-1')}:</span>
                            </div>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>
                                    <div>
                                        <span className="font-bold">{t('component-2-item-1-title')}:</span> {t('component-2-item-1-description')}
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="font-bold">{t('component-2-item-2-title')}:</span> {t('component-2-item-2-description')}
                                    </div>
                                </li>
                            </ol>
                        </li>

                        {/* 3. Currency Exchange */}
                        <li>
                            <div className="flex flex-col">
                                <span className="font-bold">{t('component-3-item-1-title')}:</span>
                            </div>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>
                                    <div>
                                        {t('component-3-item-1-description')}
                                    </div>
                                </li>

                            </ol>
                        </li>

                        {/* 4.	Logistics and Transportation */}
                        <li>
                            <div className="flex flex-col">
                                <span className="font-bold">{t('component-4-item-1-title')}:</span>
                            </div>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>
                                    <div>
                                        {t('component-4-item-1-description')}
                                    </div>
                                </li>

                            </ol>
                        </li>

                        {/* 5.	Logistics and Transportation */}
                        <li>
                            <div className="flex flex-col">
                                <span className="font-bold">{t('component-5-item-1-title')}:</span>
                            </div>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>
                                    <div>
                                        {t('component-5-item-1-description')}
                                    </div>
                                </li>

                            </ol>
                        </li>
                    </ol>
                </section>

                {/* How Moon Navigation and Trading Co. Can Help */}
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-2')}</h2>
                    <p className="mb-4">{t('description-2')}</p>
                    <ol className="list-decimal pl-6 space-y-2 marker:font-semibold marker:text-primary">
                        {/* 1. Comprehensive Freight Solutions  */}
                        <li>
                            <span className="font-bold text-primary">{t('service-1-item-1')}:</span>
                            <ol className="list-disc ml-6 mt-2 marker:text-foreground">
                                <li>
                                    <span className="font-bold ">{t('service-1-item-1-title')}:</span> {t('service-1-item-1-description')}
                                </li>
                                <li>
                                    <span className="font-bold">{t('service-1-item-2-title')}:</span> {t('service-1-item-2-description')}
                                </li>
                                <li>
                                    <span className="font-bold">{t('service-1-item-3-title')}:</span> {t('service-1-item-3-description')}
                                </li>
                            </ol>
                        </li>

                        {/* 2. Comprehensive Freight Solutions  */}
                        <li>
                            <span className="font-bold text-primary">{t('service-2-item-1')}:</span>
                            <ol className="list-disc ml-6 mt-2 marker:text-foreground">
                                <li>
                                    <span className="font-bold ">{t('service-2-item-1-title')}:</span> {t('service-2-item-1-description')}
                                </li>
                                <li>
                                    <span className="font-bold">{t('service-2-item-2-title')}:</span> {t('service-2-item-2-description')}
                                </li>

                            </ol>
                        </li>

                        {/* 3. Global Network  */}
                        <li>
                            <span className="font-bold text-primary">{t('service-3-item-1-title')}:</span>
                            <ol className="list-disc ml-6 mt-2 marker:text-foreground">
                                <li>
                                    {t('service-3-item-1-description')}
                                </li>

                            </ol>
                        </li>

                        {/* 4. Consultancy Services  */}
                        <li>
                            <span className="font-bold text-primary">{t('service-4-item-1-title')}:</span>
                            <ol className="list-disc ml-6 mt-2 marker:text-foreground">
                                <li>
                                    {t('service-4-item-1-description')}
                                </li>

                            </ol>
                        </li>

                        {/* 5. Storage and Warehousing  */}
                        <li>
                            <span className="font-bold text-primary">{t('service-5-item-1-title')}:</span>
                            <ol className="list-disc ml-6 mt-2 marker:text-foreground">
                                <li>
                                    {t('service-5-item-1-description')}
                                </li>

                            </ol>
                        </li>

                        {/* 6. Seamless Handling of Dangerous Cargo  */}
                        <li>
                            <span className="font-bold text-primary">{t('service-6-item-1-title')}:</span>
                            <ol className="list-disc ml-6 mt-2 marker:text-foreground">
                                <li>
                                    {t('service-6-item-1-description')}
                                </li>

                            </ol>
                        </li>

                    </ol>
                </section>

                {/* Get Quote Button */}
                <div className="mt-6">
                    <Link href="/quote">
                        <Button className="w-full sm:w-auto">{t('button')}</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
