"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function AirFreightInfo() {
    const t = useTranslations("learn-air-freight");

    return (
        <main className="flex flex-col items-center w-full max-w-7xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {/* Hero Section */}
            <div className="w-full">
                <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 mt-10">
                    <Image src="/air-freight-hero.jpg" alt="Air Freight Services" fill className="object-cover" priority />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h1 className="text-4xl mb-6">{t("hero.title")}</h1>
                            <Link href="/air-freight-forms">
                                <RequestQuoteButton>{t("hero.requestQuote")}</RequestQuoteButton>
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <p className="text-muted-foreground">{t("hero.description1")}</p>
                            <p className="text-muted-foreground">{t("hero.description2")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Principles Section */}
            <div className="w-full bg-background py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-12">{t("principles.title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-0 bg-card">
                            <CardHeader className="items-center text-center">
                                <CardTitle className="font-normal">{t("principles.speed.title")}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">{t("principles.speed.description")}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="items-center text-center">
                                <CardTitle className="font-normal">{t("principles.reliability.title")}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">{t("principles.reliability.description")}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="items-center text-center">
                                <CardTitle className="font-normal">{t("principles.security.title")}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">{t("principles.security.description")}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Specialized Services Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="relative rounded-3xl overflow-hidden mb-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70 z-10"></div>
                        <Image src="/images/air-freight-banner.jpg" alt="Air Freight Services" width={1200} height={400} className="w-full h-[400px] object-cover" />
                        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16">
                            <h3 className="text-white text-2xl md:text-3xl font-light mb-4">{t("services.title")}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <h4 className="text-white text-lg mb-2">{t("services.highValue.title")}</h4>
                                    <p className="text-white/80 text-sm">{t("services.highValue.description")}</p>
                                </div>

                                <div className="text-center">
                                    <h4 className="text-white text-lg mb-2">{t("services.dangerous.title")}</h4>
                                    <p className="text-white/80 text-sm">{t("services.dangerous.description")}</p>
                                </div>

                                <div className="text-center">
                                    <h4 className="text-white text-lg mb-2">{t("services.oversized.title")}</h4>
                                    <p className="text-white/80 text-sm">{t("services.oversized.description")}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="text-center">
                                    <h4 className="text-white text-lg mb-2">{t("services.timeSensitive.title")}</h4>
                                    <p className="text-white/80 text-sm">{t("services.timeSensitive.description")}</p>
                                </div>

                                <div className="text-center">
                                    <h4 className="text-white text-lg mb-2">{t("services.perishable.title")}</h4>
                                    <p className="text-white/80 text-sm">{t("services.perishable.description")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cost Management and Compliance Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl  text-center mb-12">{t("costManagement.title")}</h2>

                    {/* First paragraph with image */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                        <div className="md:w-1/2">
                            <p className="text-muted-foreground leading-relaxed mb-4">{t("costManagement.firstParagraph1")}</p>
                            <p className="text-muted-foreground leading-relaxed">{t("costManagement.firstParagraph2")}</p>
                        </div>
                        <div className="md:w-1/2">
                            <Image src="/images/supply-chain.jpg" alt="Supply Chain Management" width={500} height={300} className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Second paragraph with excellence badge */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/4">
                            <Image src="/images/excellence-badge.svg" alt="Excellence Badge" width={200} height={200} className="mx-auto" />
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-muted-foreground leading-relaxed">{t("costManagement.secondParagraph")}</p>
                            <p className="text-muted-foreground/70 text-sm mt-4">{t("costManagement.comment1")}</p>
                            <p className="text-muted-foreground/70 text-sm mt-2">{t("costManagement.comment2")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shipping Options Section */}
            <div className="w-full py-16 bg-card">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-8">{t("shippingOptions.title")}</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border border-border">
                                    <th className="p-4 text-left border border-border">{t("shippingOptions.serviceType")}</th>
                                    <th className="p-4 text-left border border-border">{t("shippingOptions.transitTime")}</th>
                                    <th className="p-4 text-left border border-border">{t("shippingOptions.cargoType")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-border">
                                    <td className="p-4 border border-border">{t("shippingOptions.express")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.sameDay")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.highValue")}</td>
                                </tr>
                                <tr className="border border-border">
                                    <td className="p-4 border border-border">{t("shippingOptions.standard")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.days1")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.generalCargo")}</td>
                                </tr>
                                <tr className="border border-border">
                                    <td className="p-4 border border-border">{t("shippingOptions.economy")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.days2")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.nonUrgent")}</td>
                                </tr>
                                <tr className="border border-border">
                                    <td className="p-4 border border-border">{t("shippingOptions.charter")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.custom")}</td>
                                    <td className="p-4 border border-border">{t("shippingOptions.oversized")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8">
                        <Link href="/learn/air-freight-special-cargo">
                            <RequestQuoteButton>
                                {t("shippingOptions.learnMore")}
                            </RequestQuoteButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sea-Air Solutions Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="relative rounded-3xl overflow-hidden h-[400px]">
                                <div className="absolute inset-0 bg-primary/20"></div>
                                <Image src="/images/sea-air-solutions.jpg" alt="Sea-Air Solutions" fill className="object-cover" />
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 text-center">{t("seaAir.caption")}</p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-4xl">{t("seaAir.title")}</h2>
                            <p className="text-muted-foreground">{t("seaAir.subtitle")}</p>
                            <p className="text-muted-foreground">{t("seaAir.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Information Section */}
            <div className="w-full py-16 bg-card">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="space-y-8">
                        <div className="relative w-full h-[300px] rounded-lg overflow-hidden mb-8">
                            <Image src="/images/sea-air-combined.jpg" alt="Sea and Air Freight Combined Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{t("seaAir.singleSource")}</p>

                        <p className="text-muted-foreground leading-relaxed">{t("seaAir.expertise")}</p>

                        <p className="text-muted-foreground leading-relaxed">{t("seaAir.caption2")}</p>

                        <div className="flex justify-end mt-8">
                            <Link href="/?scroll=contact">
                                <RequestQuoteButton>
                                    {t("seaAir.contactUs")}
                                </RequestQuoteButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialized Services Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-3xl overflow-hidden h-[400px]">
                            <Image src="/images/specialized-services.jpg" alt="Specialized Air Freight Services" fill className="object-cover" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-4xl">{t("specializedServices.title")}</h2>

                            <p className="text-muted-foreground">
                                {t("specializedServices.intro")}
                                <span className="font-medium">{t("specializedServices.network")}</span>
                                {t("specializedServices.partnerships")}
                            </p>

                            <p className="text-muted-foreground">
                                {t("specializedServices.transparency")}
                                <span className="font-medium">{t("specializedServices.updates")}</span>
                                {t("specializedServices.customs")}
                                <span className="font-medium">{t("specializedServices.documentation")}</span>
                                {t("specializedServices.support")}
                            </p>

                            <p className="text-muted-foreground">{t("specializedServices.expertise")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reasons to Choose Section */}
            <div className="w-full py-16 bg-card">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-12">{t("reasons.title")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0">
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">{t("reasons.expertHandling")}</h3>
                                <p className="text-muted-foreground">{t("reasons.expertHandlingDesc")}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0">
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">{t("reasons.competitiveRates")}</h3>
                                <p className="text-muted-foreground">{t("reasons.competitiveRatesDesc")}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0">
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">{t("reasons.customizedSolutions")}</h3>
                                <p className="text-muted-foreground">{t("reasons.customizedSolutionsDesc")}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex-shrink-0">
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">{t("reasons.support")}</h3>
                                <p className="text-muted-foreground">{t("reasons.supportDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GetQuoteComponent topic="air-freight" link="/air-freight-forms"/> 
        </main>
    );
}
