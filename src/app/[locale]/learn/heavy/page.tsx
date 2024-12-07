import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

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
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-1')}:</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><span className="font-bold">{t('list-1-title-1')}:</span> {t('list-1-description-1')} </li>
                        <li><span className="font-bold">{t('list-1-title-2')}:</span> {t('list-1-description-2')} </li>
                        <li><span className="font-bold">{t('list-1-title-3')}:</span> {t('list-1-description-3')} </li>
                        <li><span className="font-bold">{t('list-1-title-4')}:</span> {t('list-1-description-4')} </li>
                        <li><span className="font-bold">{t('list-1-title-5')}:</span> {t('list-1-description-5')} </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-2')}:</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t('example-1')}</li>
                        <li>{t('example-2')}</li>
                        <li>{t('example-3')}</li>
                        <li>{t('example-4')}</li>
                        <li>{t('example-5')}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-3')}:</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><span className="font-bold">{t('vessel-1')}:</span> {t('vessel-1-description')} </li>
                        <li><span className="font-bold">{t('vessel-2')}:</span> {t('vessel-2-description')} </li>
                        <li><span className="font-bold">{t('vessel-3')}:</span> {t('vessel-3-description')} </li>
                        <li><span className="font-bold">{t('vessel-4')}:</span> {t('vessel-4-description')} </li>

                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-4')}:</h2>
                    <ul className="list-decimal pl-6 space-y-2">
                        <li><span className="font-bold">{t('challenge-1-title')}:</span> {t('challenge-1-description')} </li>
                        <li><span className="font-bold">{t('challenge-2-title')}:</span> {t('challenge-2-description')} </li>
                        <li><span className="font-bold">{t('challenge-3-title')}:</span> {t('challenge-3-description')} </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-5')}</h2>
                    <ul className="list-decimal pl-6 space-y-1">
                        <li><span className="font-bold">{t('reason-1')}:</span> {t('reason-1-description')} </li>
                        <li><span className="font-bold">{t('reason-2')}:</span> {t('reason-2-description')} </li>
                        <li><span className="font-bold">{t('reason-3')}:</span> {t('reason-3-description')} </li>
                        <li><span className="font-bold">{t('reason-4')}:</span> {t('reason-4-description')} </li>
                        <li><span className="font-bold">{t('reason-5')}:</span> {t('reason-5-description')} </li>
                        <li><span className="font-bold">{t('reason-6')}:</span> {t('reason-6-description')} </li>
                        <li><span className="font-bold">{t('reason-7')}:</span> {t('reason-7-description')} </li>

                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-6')}</h2>
                    <p className="mb-5">
                        {t('description-6')}
                    </p>

                    <Button className="p-0">
                        <Link href={'/ocean-freight-forms'} className="w-full h-full px-4 py-2">
                            {t('button')}
                        </Link>
                    </Button>

                </section>
            </CardContent>
        </Card>
    )
}
