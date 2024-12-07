import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function CustomsClearance() {
    const t = useTranslations("customs-clearance")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
            </CardHeader>

            {/* 1. Cargo Handling  */}
            <CardContent className="space-y-6 marker:font-semibold marker:text-primary ">
                <p className="mb-4">{t('sub-t-1-description')}</p>

                <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-2')}</h2>
                <p className="mb-4">{t('sub-t-2-description')}</p>


                <div className="">
                    <ol className="space-y-5">
                        <li>
                            <h3 className="text-base font-semibold text-primary mb-4">{t('docking-wet.title')}</h3>
                            <ul className="list-disc pl-6 marker:text-foreground">
                                <li><span className="font-semibold">{t('docking-wet.activities.item-1')}</span> {t('docking-wet.activities.item-1-p')}</li>
                                <li><span className="font-semibold">{t('docking-wet.activities.item-2')}</span> {t('docking-wet.activities.item-2-p')}</li>
                                <li><span className="font-semibold">{t('docking-wet.activities.item-3')}</span> {t('docking-wet.activities.item-3-p')}</li>
                                <li><span className="font-semibold">{t('docking-wet.activities.item-4')}</span> {t('docking-wet.activities.item-4-p')}</li>
                                <li><span className="font-semibold">{t('docking-wet.activities.item-5')}</span> {t('docking-wet.activities.item-5-p')}</li>
                                <li><span className="font-semibold">{t('docking-wet.activities.item-6')}</span> {t('docking-wet.activities.item-6-p')}</li>

                            </ul>
                        </li>
                    </ol>

                </div>


                <div>
                    <h2 className="text-lg font-semibold text-primary mb-4">{t('sub-t-5')}</h2>
                    <ol className="list-decimal text-foreground ml-6 marker:text-foreground space-y-3">
                        {/* Efficiency */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-1.title')}</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-1.description')}</li>
                            </ol>
                        </li>

                        {/* Safety */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-2.title')}</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-2.description')}</li>
                            </ol>
                        </li>

                        {/* Tailored */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-3.title')}</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-3.description-1')}</li>
                            </ol>
                        </li>

                        {/* Flexible */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-4.title')}</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-4.description')}</li>
                            </ol>
                        </li>

                    </ol>
                </div>

            </CardContent>

            {/* Button to get more information */}
            <Button className="p-0">
                <Link href={'/customs-clearance-forms'} className="w-full h-full px-4 py-2">
                    {t('button')}
                </Link>
            </Button>
        </Card>
    )
}
