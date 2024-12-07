import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function ShipManagement() {
    const t = useTranslations("learn-ship-management")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
                <CardContent className="p-0">
                    {t('description')}
                </CardContent>
            </CardHeader>

            {/* Key Aspects of Ship Management */}
            <CardContent className="space-y-6">
                <h2 className="text-xl font-semibold text-primary mb-4">{t('sub-t-1')}</h2>
                <ol className="ml-6 list-decimal marker:font-semibold space-y-6">

                    <li className="space-y-4 ">
                        <h3 className="text-lg font-semibold">{t('component-1-item-1')}</h3>
                        <ul className="list-alphabet pl-5  marker:font-normal">
                            <li><strong>{t('component-1-item-1-a')}:</strong> {t('component-1-item-1-description')}</li>
                            <li><strong>{t('component-1-item-1-b')}:</strong> {t('component-1-item-1-b-description')}</li>
                            <li><strong>{t('component-1-item-1-c')}:</strong> {t('component-1-item-1-c-description')}</li>
                        </ul>
                    </li>

                    <li className="space-y-4 ">
                        <h3 className="text-lg font-semibold">{t('component-2-item-1')}</h3>
                        <ul className="list-alphabet pl-5  marker:font-normal">
                            <li><strong>{t('component-2-item-1-a')}:</strong> {t('component-2-item-1-description')}</li>
                            <li><strong>{t('component-2-item-1-b')}:</strong> {t('component-2-item-1-b-description')}</li>
                            <li><strong>{t('component-2-item-1-c')}:</strong> {t('component-2-item-1-c-description')}</li>
                        </ul>
                    </li>

                    <li className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('component-3-item-1')}</h3>
                        <ul className="list-alphabet pl-5  marker:font-normal">
                            <li><strong>{t('component-3-item-1-a')}:</strong> {t('component-3-item-1-a-description')}</li>
                            <li><strong>{t('component-3-item-1-b')}:</strong> {t('component-3-item-1-b-description')}</li>
                            <li><strong>{t('component-3-item-1-c')}:</strong> {t('component-3-item-1-c-description')}</li>
                        </ul>
                    </li>

                    <li className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('component-4-item-1')}</h3>
                        <ul className="list-alphabet pl-5  marker:font-normal">
                            <li><strong>{t('component-4-item-1-a')}:</strong> {t('component-4-item-1-a-description')}</li>
                            <li><strong>{t('component-4-item-1-b')}:</strong> {t('component-4-item-1-b-description')}</li>
                        </ul>
                    </li>

                    <li className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('component-5-item-1')}</h3>
                        <ul className="list-alphabet pl-5  marker:font-normal">
                            <li><strong>{t('component-5-item-1-a')}:</strong> {t('component-5-item-1-a-description')}</li>
                            <li><strong>{t('component-5-item-1-b')}:</strong> {t('component-5-item-1-b-description')}</li>
                        </ul>
                    </li>

                    <li className="space-y-4">
                        <h3 className="text-lg font-semibold">{t('component-6-item-1')}</h3>
                        <ul className="list-alphabet pl-5  marker:font-normal">
                            <li><strong>{t('component-6-item-1-a')}:</strong> {t('component-6-item-1-a-description')}</li>
                            <li><strong>{t('component-6-item-1-b')}:</strong> {t('component-6-item-1-b-description')}</li>
                        </ul>
                    </li>
                </ol>
            </CardContent>

            {/* Why Ship Management Is Important */}
            <CardContent className="mt-8 space-y-4">
                <h2 className="text-xl font-semibold text-primary">{t('why-important-title')}</h2>
                <p>{t('why-important-1')}</p>
                <ul className="list-disc pl-5">
                    <li><span className="font-semibold">{t('why-important-item-1')}:</span> {t('why-important-item-1-p')}</li>
                    <li><span className="font-semibold">{t('why-important-item-2')}:</span> {t('why-important-item-2-p')}</li>
                    <li><span className="font-semibold">{t('why-important-item-3')}:</span> {t('why-important-item-3-p')}</li>
                    <li><span className="font-semibold">{t('why-important-item-4')}:</span> {t('why-important-item-4-p')}</li>
                </ul>
            </CardContent>

            {/* Company Description */}
            <CardContent className="mt-8">
                <h2 className="text-xl font-semibold text-primary mb-4">Ship Management at Moon Navigation and Trading Co.</h2>
                <p>{t('company-description')}</p>
            </CardContent>

            {/* Get Quote Button */}
            <div className="ml-6">
                <Link href="/ship-management-forms">
                    <Button className="w-full sm:w-auto">{t('button')}</Button>
                </Link>
            </div>
        </Card>
    )
}
