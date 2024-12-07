import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function DockingAndMaintenance() {
    const t = useTranslations("learn-docking-and-maintenance")

    return (
        <Card className="w-full mt-10 mb-20 max-w-4xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
                <CardContent className="p-0">
                    {t('description')}
                </CardContent>
            </CardHeader>

            {/* Docking Section */}
            <CardContent className="space-y-6 marker:font-semibold marker:text-primary ">
                <ol className="list-decimal ml-6 space-y-6">
                    <li className="">
                        <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-1')}:</h2>
                        <p className="mb-4">{t('sub-t-1-description')}</p>
                        <ol className="list-alphabet ml-6 space-y-5">
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('docking-wet.title')}:</h3>
                                <p><span className="font-semibold">{t('what-it-is')}</span> {t('docking-wet.what-it-is')}</p>
                                <p><span className="font-semibold">{t('purpose')}</span> {t('docking-wet.purpose')}</p>
                                <p><span className="font-semibold">{t('activities')}</span></p>
                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li>{t('docking-wet.activities.item-1')}</li>
                                    <li>{t('docking-wet.activities.item-2')}</li>
                                    <li>{t('docking-wet.activities.item-3')}</li>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('docking-dry.title')}:</h3>
                                <p><span className="font-semibold">{t('what-it-is')}</span> {t('docking-dry.what-it-is')}</p>
                                <p><span className="font-semibold">{t('purpose')}</span> {t('docking-dry.purpose')}</p>
                                <p><span className="font-semibold">{t('activities')}</span></p>
                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li>{t('docking-dry.activities.item-1')}</li>
                                    <li>{t('docking-dry.activities.item-2')}</li>
                                    <li>{t('docking-dry.activities.item-3')}</li>
                                    <li>{t('docking-dry.activities.item-4')}</li>
                                    <li>{t('docking-dry.activities.item-5')}</li>
                                </ul>
                            </li>

                        </ol>

                    </li>

                    {/* Maintenance Section */}
                    <li className="">
                        <h2 className="mb-4 text-primary text-lg font-semibold">{t('sub-t-2')}:</h2>
                        <p className="mb-4">{t('sub-t-2-description')}</p>
                        <ol className="list-alphabet ml-6 space-y-5">
                            {/* Routine Maintenance */}
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('maintenance-routine.title')}:</h3>
                                <p><span className="font-semibold ">{t('what-it-is')}</span> {t('maintenance-routine.what-it-is')}</p>
                                <p><span className="font-semibold">{t('examples')}</span></p>
                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li>{t('maintenance-routine.examples.item-1')}</li>
                                    <li>{t('maintenance-routine.examples.item-2')}</li>
                                    <li>{t('maintenance-routine.examples.item-3')}</li>
                                    <li>{t('maintenance-routine.examples.item-4')}</li>

                                </ul>
                            </li>
                            {/* Corrective Maintenance */}
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('maintenance-corrective.title')}:</h3>
                                <p><span className="font-semibold">{t('what-it-is')}</span> {t('maintenance-corrective.what-it-is')}</p>
                                <p><span className="font-semibold">{t('examples')}</span></p>
                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li>{t('maintenance-corrective.examples.item-1')}</li>
                                    <li>{t('maintenance-corrective.examples.item-2')}</li>
                                    <li>{t('maintenance-corrective.examples.item-3')}</li>
                                </ul>
                            </li>
                            {/* Pridictive Maintenance */}
                            <li>
                                <h3 className="text-base font-semibold text-primary mb-4">{t('maintenance-predictive.title')}:</h3>
                                <p><span className="font-semibold">{t('what-it-is')}</span> {t('maintenance-predictive.what-it-is')}</p>
                                <p><span className="font-semibold">{t('examples')}</span></p>
                                <ul className="list-disc pl-6 marker:text-foreground">
                                    <li>{t('maintenance-predictive.examples.item-1')}</li>
                                    <li>{t('maintenance-predictive.examples.item-2')}</li>
                                </ul>
                            </li>

                        </ol>

                    </li>
                </ol>

                <div>
                    <h2 className="text-lg font-semibold text-primary mb-4">{t('sub-t-3')}:</h2>
                    <ol className="list-decimal text-foreground ml-6 marker:text-foreground space-y-3">
                        {/* Safety */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-1.title')}:</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-1.description')}</li>
                            </ol>
                        </li>

                        {/* Operational Efficiency */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-2.title')}:</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-2.description')}</li>
                            </ol>
                        </li>

                        {/* Damage adn Water */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-3.title')}:</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-3.description')}</li>
                            </ol>
                        </li>

                        {/* Longevity */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-4.title')}:</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-4.description')}</li>
                            </ol>
                        </li>

                        {/* Enviromental Protection */}
                        <li>
                            <h3 className="text-base  font-semibold">{t('reasons.item-5.title')}:</h3>
                            <ol className="list-alphabet ml-6 marker:font-normal">
                                <li>{t('reasons.item-5.description')}</li>
                            </ol>
                        </li>
                    </ol>
                </div>

                <div>
                    <h2 className="mb-4 text-primary text-xl font-semibold">
                        {t('sub-t-4')}
                    </h2>
                    <p>
                        {t('description-4')}
                    </p>
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
