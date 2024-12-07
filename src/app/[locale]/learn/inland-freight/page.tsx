import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function InlandFreightInfo() {
    const t = useTranslations("learn-inland-freight")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
                <CardContent className="p-0">
                    {t('description')}
                </CardContent>
            </CardHeader>

            {/* Types of Inland Freight */}
            <CardContent className="space-y-6">
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-1')}:</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li><span className="font-bold">{t('list-1-title-1')}:</span> {t('list-1-description-1')}</li>
                        <li><span className="font-bold">{t('list-1-title-2')}:</span> {t('list-1-description-2')}</li>
                        <li><span className="font-bold">{t('list-1-title-3')}:</span> {t('list-1-description-3')}</li>
                        <li><span className="font-bold">{t('list-1-title-4')}:</span> {t('list-1-description-4')}</li>
                    </ol>
                </section>

                {/* What We Deliver */}
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-2')}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>{t('item-1')}</strong>: {t('item-1-description')}</li>
                        <li><strong>{t('item-2')}</strong>: {t('item-2-description')}</li>
                        <li><strong>{t('item-3')}</strong>: {t('item-3-description')}</li>
                        <li><strong>{t('item-4')}</strong>: {t('item-4-description')}</li>
                        <li><strong>{t('item-5')}</strong>: {t('item-5-description')}</li>
                    </ul>
                </section>

                {/* Benefits of Inland Freight */}
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-3')}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>{t('benefit-1')}</strong>: {t('benefit-1-description')}</li>
                        <li><strong>{t('benefit-2')}</strong>: {t('benefit-2-description')}</li>
                        <li><strong>{t('benefit-3')}</strong>: {t('benefit-3-description')}</li>
                        <li><strong>{t('benefit-4')}</strong>: {t('benefit-4-description')}</li>
                    </ul>
                </section>

                {/* Challenges of Inland Freight */}
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-4')}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>{t('challenge-1-title')}</strong>: {t('challenge-1-description')}</li>
                        <li><strong>{t('challenge-2-title')}</strong>: {t('challenge-2-description')}</li>
                        <li><strong>{t('challenge-3-title')}</strong>: {t('challenge-3-description')}</li>
                        <li><strong>{t('challenge-4-title')}</strong>: {t('challenge-4-description')}</li>
                        <li><strong>{t('challenge-5-title')}</strong>: {t('challenge-5-description')}</li>
                    </ul>
                </section>

                {/* How We Overcome Challenges */}
                <section>
                    <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-5')}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>{t('solution-1')}</strong>: {t('solution-1-description')}</li>
                        <li><strong>{t('solution-2')}</strong>: {t('solution-2-description')}</li>
                        <li><strong>{t('solution-3')}</strong>: {t('solution-3-description')}</li>
                        <li><strong>{t('solution-4')}</strong>: {t('solution-4-description')}</li>
                        <li><strong>{t('solution-5')}</strong>: {t('solution-5-description')}</li>
                    </ul>
                </section>

                {/* Get Quote Button */}
                <div className="mt-6">
                    <Link href="/inland-services-forms">
                        <Button className="w-full sm:w-auto">{t('button')}</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
