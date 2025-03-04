"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function AirFreightSpecialCargoInfo() {
    const t = useTranslations("learn-air-freight-special-cargo");

    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="w-full pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-semibold mb-12">{t("hero.title")}</h1>

                    {/* Perishable & Temperature-Controlled Cargo Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">{t("hero.perishable.title")}</h2>
                            <p className="text-gray-600">{t("hero.perishable.description1")}</p>
                            <p className="text-gray-600">
                                {t("hero.perishable.description2-a")}
                                <span className="font-medium">{t("hero.perishable.description2-b")}</span>
                                {t("hero.perishable.description2-c")}
                            </p>
                        </div>
                        <div className="relative h-[300px] lg:h-[400px]">
                            <Image src="/temperature-controlled-cargo.jpg" alt="Temperature controlled cargo handling" fill className="object-cover rounded-lg" />
                        </div>
                    </div>

                    {/* Dangerous Goods Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="relative h-[300px] lg:h-[400px] lg:order-1 order-2">
                            <Image src="/dangerous-goods-cargo.jpg" alt="Dangerous goods handling" fill className="object-cover rounded-lg" />
                        </div>
                        <div className="space-y-6 lg:order-2 order-1">
                            <h2 className="text-2xl font-semibold">{t("hero.dangerous.title")}</h2>
                            <p className="text-gray-600">{t("hero.dangerous.description1")}</p>
                            <p className="text-gray-600">{t("hero.dangerous.description2")}</p>
                        </div>
                    </div>

                    {/* Oversized & Project Air Cargo Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">{t("hero.oversized.title")}</h2>
                            <p className="text-gray-600">{t("hero.oversized.description1")}</p>
                            <p className="text-gray-600">{t("hero.oversized.description2")}</p>
                        </div>
                        <div className="relative h-[300px] lg:h-[400px]">
                            <Image src="/oversized-cargo.jpg" alt="Oversized air cargo handling" fill className="object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Request Section */}
            <div className="w-full py-16 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("quoteRequest.title")}</h2>
                            <p className="text-muted-foreground">{t("quoteRequest.description")}</p>
                            <Button className="bg-[#3B4B8C] hover:bg-[#2d3a6d]">{t("quoteRequest.button")}</Button>
                        </div>

                        <div className="relative h-[400px]">
                            <Image src="/quote-request-illustration.jpg" alt="Quote Request" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full py-8 bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600">
                            {t("contact.description")}
                            <Link href="/contact" className="text-[#3B4B8C] hover:underline">
                                {t("contact.button")}
                            </Link>
                            {t("contact.trust")}
                        </p>
                        <p className="text-gray-600 italic">{t("contact.caption")}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
