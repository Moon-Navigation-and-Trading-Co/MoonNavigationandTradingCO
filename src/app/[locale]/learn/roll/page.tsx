import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function RollOnOffInfo() {
    const t = useTranslations("learn-rollonoff")

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
                        <li>
                            <span className="font-bold">{t('list-1-title-3')}:</span>
                            <ol className="list-alphabet space-y-2 pl-6 mt-2 ">
                                <li><span className="font-bold">{t('sublist-1-title-1')}:</span> {t('sublist-1-description-1')} </li>
                                <li><span className="font-bold">{t('sublist-1-title-2')}:</span> {t('sublist-1-description-2')} </li>
                                <li><span className="font-bold">{t('sublist-1-title-3')}:</span> {t('sublist-1-description-3')} </li>
                                <li><span className="font-bold">{t('sublist-1-title-4')}:</span> {t('sublist-1-description-4')} </li>

                            </ol>
                        </li>
                        <li>
                            <span className="font-bold">{t('list-1-title-4')}:</span>
                            <ol className="list-alphabet space-y-2 pl-6 mt-2 ">
                                <li><span className="font-bold">{t('sublist-2-title-1')}:</span> {t('sublist-2-description-1')} </li>
                                <li><span className="font-bold">{t('sublist-2-title-2')}:</span> {t('sublist-2-description-2')} </li>
                                <li><span className="font-bold">{t('sublist-2-title-3')}:</span> {t('sublist-2-description-3')} </li>

                            </ol>
                        </li>
                        <li>
                            <span className="font-bold">{t('list-1-title-5')}:</span>
                            <ol className="list-alphabet space-y-2 pl-6 mt-2 ">
                                <li><span className="font-bold">{t('sublist-3-title-1')}:</span> {t('sublist-3-description-1')} </li>
                                <li><span className="font-bold">{t('sublist-3-title-2')}:</span> {t('sublist-3-description-2')} </li>
                                <li><span className="font-bold">{t('sublist-3-title-3')}:</span> {t('sublist-3-description-3')} </li>

                            </ol>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-primary">{t('sub-t-2')}:</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><span className="font-bold">{t('list-2-title-1')}:</span> {t('list-2-description-1')} </li>
                        <li><span className="font-bold">{t('list-2-title-2')}:</span> {t('list-2-description-2')} </li>
                        <li><span className="font-bold">{t('list-2-title-3')}:</span> {t('list-2-description-3')} </li>
                    </ul>
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
