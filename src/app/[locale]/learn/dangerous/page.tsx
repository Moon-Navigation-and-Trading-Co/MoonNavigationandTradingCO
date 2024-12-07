import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function DangerousCargoInfo() {
    const t = useTranslations("learn-dangerous-cargo")

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
                    <h2 className="mb-4">{t('sub-t-1')}:</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><span className="font-bold">{t('list-1-title-1')}:</span> {t('list-1-description-1')} </li>
                        <li><span className="font-bold">{t('list-1-title-2')}:</span> {t('list-1-description-2')} </li>
                        <li><span className="font-bold">{t('list-1-title-3')}:</span> {t('list-1-description-3')} </li>
                        <li><span className="font-bold">{t('list-1-title-4')}:</span> {t('list-1-description-4')} </li>
                        <li><span className="font-bold">{t('list-1-title-5')}:</span> {t('list-1-description-5')} </li>
                        <li><span className="font-bold">{t('list-1-title-6')}:</span> {t('list-1-description-6')} </li>
                        <li><span className="font-bold">{t('list-1-title-7')}:</span> {t('list-1-description-7')} </li>
                        <li><span className="font-bold">{t('list-1-title-8')}:</span> {t('list-1-description-8')} </li>
                        <li><span className="font-bold">{t('list-1-title-9')}:</span> {t('list-1-description-9')} </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-2')}</h2>
                    <p className="mb-3">{t('description-2')}</p>

                    <h2 className=" font-semibold mb-4 text-primary">{t('sub-t-2')}</h2>
                    <ul className="list-decimal pl-6 space-y-1">
                        <li><span className="font-bold">{t('benefit-1')}:</span> {t('benefit-1-description')} </li>
                        <li><span className="font-bold">{t('benefit-2')}:</span> {t('benefit-2-description')} </li>
                        <li><span className="font-bold">{t('benefit-3')}:</span> {t('benefit-3-description')} </li>
                        <li><span className="font-bold">{t('benefit-4')}:</span> {t('benefit-4-description')} </li>
                        <li><span className="font-bold">{t('benefit-5')}:</span> {t('benefit-5-description')} </li>

                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-3')}:</h2>
                    <p className="mb-3">{t('description-3')}</p>
                    <ul className="list-decimal pl-6 space-y-2">
                        <li><span className="font-bold">{t('challenge-1-title')}:</span> {t('challenge-1-description')} </li>
                        <li><span className="font-bold">{t('challenge-2-title')}:</span> {t('challenge-2-description')} </li>
                        <li><span className="font-bold">{t('challenge-3-title')}:</span> {t('challenge-3-description')} </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('why-choose-us')}</h2>
                    <p className="mb-3">{t('description-4')}</p>
                    <p className="mb-3">{t('description-4-4')}</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t('why-choose-us-1')}</li>
                        <li>{t('why-choose-us-2')}</li>
                        <li>{t('why-choose-us-3')}</li>
                    </ul>
                    <p className="mt-3">{t('why-choose-us-bot')}</p>
                </section>

                <Button className="p-0">
                    <Link href={'/ocean-freight-forms'} className="w-full h-full px-4 py-2">
                        {t('button')}
                    </Link>
                </Button>

            </CardContent>
        </Card >
    )
}
