import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
    const t = useTranslations("learn-lcl");

    return (
        <Card className="w-full mt-10 mb-20 max-w-7xl mx-auto p-0 sm:p-5">
            <CardHeader>
                <CardTitle className="text-3xl font-bold mb-2">{t('lcl-title')}</CardTitle>
                <CardContent className="p-0">
                    {t('lcl-description')}
                </CardContent>
            </CardHeader>
            <CardContent className="space-y-3">

                <h2 className="">
                    {t('standard-container-title')}
                </h2>
                <ol className="ml-12 list-disc pb-4">
                    <li>
                        <h2 className="">{t('in-gauge-title')}</h2>
                    </li>
                    <li>
                        <h2 className="">{t('break-bulk-title')}</h2>
                    </li>
                </ol>

                {/* 1. Standard Container */}
                <ol className="list-decimal ml-6 space-y-6 marker:font-semibold marker:text-primary">
                    <li>
                        <h2 className="mb-4 text-lg text-primary font-semibold">{t('standard-container-title')}</h2>
                        <p>{t('standard-container-description')}</p>
                        <h3 className="font-semibold my-4">{t('standard-container-dimensions')}:</h3>
                        <ul className="list-disc pl-6 space-y-2 marker:text-foreground">
                            <li><strong>{t('20')}</strong> {t('standard-container-20ft')}</li>
                            <li><strong>{t('40')}</strong> {t('standard-container-40ft')}</li>
                        </ul>

                        <h3 className="font-semibold my-4">{t('container-types-title')}:</h3>
                        <ul className="list-disc pl-6 space-y-2 marker:text-foreground">
                            <li><strong>{t('dry-van-title')}:</strong> {t('dry-van-description')}</li>
                            <li><strong>{t('high-cube-title')}:</strong> {t('high-cube-description')}</li>
                            <li><strong>{t('open-top-title')}:</strong> {t('open-top-description')}</li>
                            <li><strong>{t('flat-rack-title')}:</strong> {t('flat-rack-description')}</li>
                        </ul>
                    </li>

                    {/* 2. In Gauge */}
                    <li>
                        <h2 className="mb-4 text-lg text-primary font-semibold">{t('in-gauge-title')}</h2>
                        <p>{t('in-gauge-description')}</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-foreground my-4">
                            <li> <strong>{t('in-gauge-for-containers-t')}</strong> {t('in-gauge-for-containers')}</li>
                            <li><strong>{t('in-gauge-for-rail-truck-t')}</strong> {t('in-gauge-for-rail-truck')}</li>
                        </ul>
                        <h2>
                            {t('in-gauge-sub-t')}
                        </h2>
                    </li>

                    {/* Break Bulk */}
                    <li>
                        <h2 className="my-4 text-lg text-primary font-semibold ">{t('break-bulk-title')}</h2>
                        <p className="mb-4">{t('break-bulk-description')}</p>
                        <ol className="list-disc marker:text-foreground">
                            <li>
                                <h3 className="font-semibold my-4">{t('char')}</h3>
                                <ul className="list-alphabet pl-6 space-y-2">
                                    <li><strong>{t('non')}:</strong> {t('break-bulk-container')}</li>
                                    <li><strong>{t('loaded')}:</strong> {t('break-bulk-loaded')}</li>
                                    <li><strong>{t('handling')}:</strong> {t('break-bulk-handling')}</li>
                                </ul>
                            </li>

                            <li>
                                <h3 className="font-semibold my-4">{t('break-bulk-types-title')}</h3>
                                <ul className="list-alphabet pb-6 pl-6 space-y-2">
                                    <li><strong>{t('heavy-lift-title')}:</strong> {t('heavy-lift-description')}</li>
                                    <li><strong>{t('project-cargo-title')}:</strong> {t('project-cargo-description')}</li>
                                    <li><strong>{t('standard-breakbulk-title')}:</strong> {t('standard-breakbulk-description')}</li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                </ol>


                <Button className="p-0">
                    <Link href={'/container-services-forms'} className="w-full h-full px-4 py-2">
                        {t('button')}
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
