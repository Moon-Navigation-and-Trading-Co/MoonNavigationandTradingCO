import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function AirFreightInfo() {
    const t = useTranslations("learn-air-freight")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
                <CardContent className="p-0">
                    {t('description')}
                </CardContent>
            </CardHeader>
            <CardContent className="space-y-6">
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-1')}</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><span className="font-bold">{t('list-1-title-1')}:</span> {t('list-1-description-1')}</li>
                        <li><span className="font-bold">{t('list-1-title-2')}:</span> {t('list-1-description-2')}</li>
                        <li><span className="font-bold">{t('list-1-title-3')}:</span> {t('list-1-description-3')}</li>
                        <li><span className="font-bold">{t('list-1-title-4')}:</span> {t('list-1-description-4')}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-2')}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>{t('benefit-1')}</strong>: {t('benefit-1-description')}</li>
                        <li><strong>{t('benefit-2')}</strong>: {t('benefit-2-description')}</li>
                        <li><strong>{t('benefit-3')}</strong>: {t('benefit-3-description')}</li>
                        <li><strong>{t('benefit-4')}</strong>: {t('benefit-4-description')}</li>
                        <li><strong>{t('benefit-5')}</strong>: {t('benefit-5-description')}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-3')}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>{t('challenge-1-title')}</strong>: {t('challenge-1-description')}</li>
                        <li><strong>{t('challenge-2-title')}</strong>: {t('challenge-2-description')}</li>
                        <li><strong>{t('challenge-3-title')}</strong>: {t('challenge-3-description')}</li>
                        <li><strong>{t('challenge-4-title')}</strong>: {t('challenge-4-description')}</li>
                    </ul>
                </section>

                <Button className="p-0">
                    <Link href={'/air-freight-forms'} className="w-full h-full px-4 py-2">
                        {t('button')}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
