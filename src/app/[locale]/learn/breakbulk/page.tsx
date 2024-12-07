import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function BreakBulkInfo() {
    const t = useTranslations("learn-breakbulk")

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
                    <ul className="list-disc pl-6 space-y-2">
                        <li><span className="font-bold">{t('list-1')}</span> {t('list-1-description')}</li>
                        <li><span className="font-bold">{t('list-2')}</span> {t('list-2-description')}</li>
                        <li><span className="font-bold">{t('list-3')}</span> {t('list-3-description')}</li>
                        <li><span className="font-bold">{t('list-4')}</span> {t('list-4-description')}</li>
                        <li><span className="font-bold">{t('list-5')}</span> {t('list-5-description')}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-2')}</h2>
                    <ul className="list-disc pl-6  space-y-2">
                        <li><span className="font-bold">{t('reason-1')}:</span> {t('reason-1-description')}</li>
                        <li><span className="font-bold">{t('reason-2')}:</span> {t('reason-2-description')}</li>
                        <li><span className="font-bold">{t('reason-3')}:</span> {t('reason-3-description')}</li>
                    </ul>
                    <p className="mt-4">
                        {t('description-bot')}
                    </p>
                </section>

                <Button className="p-0">
                    <Link href={'/ocean-freight-forms'} className="w-full h-full px-4 py-2">
                        {t('button')}
                    </Link>
                </Button>

            </CardContent>
        </Card>
    )
}
