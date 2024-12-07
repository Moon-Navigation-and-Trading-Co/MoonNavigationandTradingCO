import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function HSS() {
    const t = useTranslations("learn-hss")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
            </CardHeader>

            {/* 1. Cargo Handling  */}
            <CardContent className="space-y-6 marker:font-semibold marker:text-primary ">
                <ol className="list-decimal ml-6 space-y-6">
                    <li className="">
                        <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-1')}:</h2>
                        <p className="mb-4">{t('sub-t-1-description')}</p>
                        <ol className=" ml-6 space-y-5">
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('docking-wet.title')}:</h3>
                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li><span className="font-semibold">{t('docking-wet.activities.item-1')}</span> {t('docking-wet.activities.item-1-p')}</li>
                                    <li><span className="font-semibold">{t('docking-wet.activities.item-2')}</span> {t('docking-wet.activities.item-2-p')}</li>
                                    <li><span className="font-semibold">{t('docking-wet.activities.item-3')}</span> {t('docking-wet.activities.item-3-p')}</li>
                                    <li><span className="font-semibold">{t('docking-wet.activities.item-4')}</span> {t('docking-wet.activities.item-4-p')}</li>

                                </ul>
                            </li>
                        </ol>

                    </li>

                    {/* 2. Stevedoring */}
                    <li className="">
                        <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-2')}:</h2>
                        <p className="mb-4">{t('sub-t-2-description')}</p>
                        <ol className=" space-y-5">
                            {/* Activities */}
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('maintenance-routine.title')}:</h3>

                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li><span className="font-semibold">{t('maintenance-routine.activities.item-1')}</span> {t('maintenance-routine.activities.item-1-p')}</li>
                                    <li><span className="font-semibold">{t('maintenance-routine.activities.item-2')}</span> {t('maintenance-routine.activities.item-2-p')}</li>
                                    <li><span className="font-semibold">{t('maintenance-routine.activities.item-3')}</span> {t('maintenance-routine.activities.item-3-p')}</li>
                                    <li><span className="font-semibold">{t('maintenance-routine.activities.item-4')}</span> {t('maintenance-routine.activities.item-4-p')}</li>

                                </ul>
                            </li>
                        </ol>
                    </li>

                    {/* 3. Storage */}
                    <li className="">
                        <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-3')}:</h2>
                        <p className="mb-4">{t('description-3')}</p>
                        <ol className=" space-y-5">
                            {/* Types */}
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('storage.title')}:</h3>

                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li><span className="font-semibold">{t('storage.activities.item-1')}</span> {t('storage.activities.item-1-p')}</li>
                                    <li><span className="font-semibold">{t('storage.activities.item-2')}</span> {t('storage.activities.item-2-p')}</li>
                                    <li><span className="font-semibold">{t('storage.activities.item-3')}</span> {t('storage.activities.item-3-p')}</li>
                                    <li><span className="font-semibold">{t('storage.activities.item-4')}</span> {t('storage.activities.item-4-p')}</li>

                                </ul>
                            </li>
                        </ol>
                    </li>

                </ol>

                <div>
                    <h2 className="text-lg font-semibold text-primary mb-4">{t('sub-t-4')}:</h2>
                    <ol className="list-disc text-foreground ml-6 marker:text-foreground space-y-3">
                        {/* Benefits */}
                        <li>
                            <h3 className="text-base"><span className="font-semibold">{t('solutions.item-1')}</span> {t('solutions.item-1-p')}</h3>
                        </li>
                        <li>
                            <h3 className="text-base"><span className="font-semibold">{t('solutions.item-2')}:</span> {t('solutions.item-2-p')}</h3>
                        </li>
                        <li>
                            <h3 className="text-base"><span className="font-semibold">{t('solutions.item-3')}:</span> {t('solutions.item-3-p')}</h3>
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

                <div>
                    <h2 className="text-2xl py-6 font-semibold text-primary">{t('sub-t-6')}:</h2>
                    <p>
                        {t('description-6')}
                    </p>

                    <h3 className="my-4 text-primary text-lg font-semibold">{t('services-t')}</h3>
                    <ol className="list-disc ml-8 marker:text-foreground space-y-2">
                        <li>
                            <h4><span className="font-semibold">{t('services.item-1')}:</span> {t('services.item-1-p')}</h4>
                        </li>
                        <li>
                            <h4><span className="font-semibold">{t('services.item-2')}:</span> {t('services.item-2-p')}</h4>
                        </li>
                        <li>
                            <h4><span className="font-semibold">{t('services.item-3')}:</span> {t('services.item-3-p')}</h4>
                        </li>
                    </ol>
                </div>

            </CardContent>

            {/* Button to get more information */}
            <Button className="p-0">
                <Link href={'/ship-maintenance-forms'} className="w-full h-full px-4 py-2">
                    {t('button')}
                </Link>
            </Button>
        </Card>
    )
}
