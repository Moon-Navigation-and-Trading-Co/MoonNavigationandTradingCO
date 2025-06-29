"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function InlandFreightInfo() {
    const t = useTranslations("learn-inland-freight");

    const freightTypes = [
        {
            title: t("types.intermodal.title"),
            description: t("types.intermodal.description"),
            image: "/intermodal-freight.jpg",
        },
        {
            title: t("types.rail.title"),
            description: t("types.rail.description"),
            image: "/rail-freight.jpg",
        },
        {
            title: t("types.truck.title"),
            description: t("types.truck.description"),
            image: "/truck-freight.jpg",
        },
        {
            title: t("types.waterways.title"),
            description: t("types.waterways.description"),
            image: "/inland-waterways.jpg",
        },
    ];

    const solutions = [
        {
            title: t("solutions.breakbulk.title"),
            description: t("solutions.breakbulk.description"),
        },
        {
            title: t("solutions.containers.title"),
            description: t("solutions.containers.description"),
        },
        {
            title: t("solutions.general.title"),
            description: t("solutions.general.description"),
        },
        {
            title: t("solutions.dangerous.title"),
            description: t("solutions.dangerous.description"),
        },
        {
            title: t("solutions.bulk.title"),
            description: t("solutions.bulk.description"),
        },
    ];

    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="w-full h-[400px] relative rounded-3xl overflow-hidden">
                <Image src="/inland-freight-hero.jpg" alt={t("title")} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="w-full max-w-7xl px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Title and Button */}
                    <div className="flex flex-col">
                        <h1 className="text-4xl md:text-5xl mb-6">{t("title")}</h1>
                        <Link href="/inland-services-forms">
                            <Button className="w-fit bg-primary hover:bg-primary/90">{t("requestQuote")}</Button>
                        </Link>
                    </div>

                    {/* Right Column - What is Section */}
                    <div>
                        <h2 className="text-3xl mb-6 text-primary">{t("whatIsTitle")}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>{t("description1")}</p>
                            <p>{t("description2")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types of Inland Freight */}
            <div className="w-full bg-muted/30 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-semibold text-center mb-12">{t("typesTitle")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {freightTypes.map((type, index) => (
                            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
                                <div className="h-48 relative">
                                    <Image src={type.image} alt={type.title} fill className="object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                                    <p className="text-sm text-muted-foreground">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Diverse Inland Freight Solutions */}
            <div className="w-full relative py-16">
                <div className="absolute inset-0 bg-primary/90">
                    <Image src="/freight-bg.jpg" alt="Background" fill className="object-cover mix-blend-overlay" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-white">
                    <h2 className="text-3xl font-semibold mb-8">{t("solutionsTitle")}</h2>
                    <p className="mb-12">{t("solutionsDescription")}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="space-y-2">
                                <h3 className="text-xl font-semibold">{solution.title}</h3>
                                <p className="text-sm opacity-90">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Road Freight Services Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("roadFreight.title")}</h2>
                            <p className="text-muted-foreground">{t("roadFreight.description")}</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("roadFreight.services.ftl.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("roadFreight.services.ftl.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("roadFreight.services.ltl.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("roadFreight.services.ltl.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("roadFreight.services.heavy.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("roadFreight.services.heavy.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("roadFreight.services.reefer.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("roadFreight.services.reefer.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-semibold mb-4">{t("roadFreight.advantages.title")}</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>{t("roadFreight.advantages.flexible")}</li>
                                    <li>{t("roadFreight.advantages.ideal")}</li>
                                    <li>{t("roadFreight.advantages.suitable")}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <Image src="/road-freight-trucks.jpg" alt="Road Freight Trucks" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Rail Freight Services Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <Image src="/rail-freight-hero.jpg" alt="Rail Freight Transport" fill className="object-cover" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("railFreight.title")}</h2>
                            <p className="text-muted-foreground">{t("railFreight.description")}</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("railFreight.services.bulk.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("railFreight.services.bulk.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("railFreight.services.containerized.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("railFreight.services.containerized.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("railFreight.services.heavy.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("railFreight.services.heavy.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-semibold mb-4">{t("railFreight.advantages.title")}</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>{t("railFreight.advantages.cost")}</li>
                                    <li>{t("railFreight.advantages.environmental")}</li>
                                    <li>{t("railFreight.advantages.capacity")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inland Waterway Transport Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("waterway.title")}</h2>
                            <p className="text-muted-foreground">{t("waterway.description")}</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("waterway.services.bulk.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("waterway.services.bulk.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("waterway.services.port.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("waterway.services.port.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("waterway.services.eco.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("waterway.services.eco.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-semibold mb-4">{t("waterway.advantages.title")}</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>{t("waterway.advantages.cost")}</li>
                                    <li>{t("waterway.advantages.safe")}</li>
                                    <li>{t("waterway.advantages.capacity")}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <Image src="/inland-waterway-hero.jpg" alt="Inland Waterway Transport" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Intermodal Freight Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <Image src="/intermodal-freight-hero.jpg" alt="Intermodal Freight Transport" fill className="object-cover" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("intermodal.title")}</h2>
                            <p className="text-muted-foreground">{t("intermodal.description")}</p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("intermodal.services.oceanRailTruck.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("intermodal.services.oceanRailTruck.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <div>
                                            <h3 className="font-semibold">{t("intermodal.services.oceanBargeTruck.title")}</h3>
                                            <p className="text-sm text-muted-foreground">{t("intermodal.services.oceanBargeTruck.description")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="font-semibold mb-4">{t("intermodal.advantages.title")}</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>{t("intermodal.advantages.costEfficient")}</li>
                                    <li>{t("intermodal.advantages.environmental")}</li>
                                    <li>{t("intermodal.advantages.secure")}</li>
                                    <li>{t("intermodal.advantages.scalable")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Supply Chain Enhancement Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("supplyChain.title")}</h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="font-semibold">{t("supplyChain.flexibility.title")}</h3>
                                    <p className="text-muted-foreground">{t("supplyChain.flexibility.description")}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-semibold">{t("supplyChain.costEffective.title")}</h3>
                                    <p className="text-muted-foreground">{t("supplyChain.costEffective.description")}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-semibold">{t("supplyChain.accessibility.title")}</h3>
                                    <p className="text-muted-foreground">{t("supplyChain.accessibility.description")}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-semibold">{t("supplyChain.efficient.title")}</h3>
                                    <p className="text-muted-foreground">{t("supplyChain.efficient.description")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <Image src="/supply-chain-trucks.jpg" alt="Supply Chain Enhancement" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialized Services Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-3xl overflow-hidden">
                            <Image src="/inland-freight-workers.jpg" alt="Inland Freight Workers" fill className="object-cover" />
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("specializedServices.title")}</h2>
                            <p className="text-muted-foreground">{t("specializedServices.description")}</p>

                            <div className="space-y-4">
                                <p className="text-muted-foreground">{t("specializedServices.dangerousGoods")}</p>
                                <p className="text-muted-foreground">{t("specializedServices.customs")}</p>
                                <p className="text-muted-foreground">{t("specializedServices.tracking")}</p>
                                <p className="text-muted-foreground">{t("specializedServices.intermodal")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Request Section */}
            <div className="w-full py-16 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold">{t("quoteRequest.title")}</h2>
                            <p className="text-muted-foreground">{t("quoteRequest.description")}</p>
                            <Link href="/inland-services-forms">
                                <Button className="bg-primary hover:bg-primary/90">{t("quoteRequest.button")}</Button>
                            </Link>
                        </div>

                        <div className="relative h-[400px]">
                            <Image src="/quote-illustration.png" alt="Quote Request" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Reasons to Choose Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-semibold mb-12">{t("reasons.title")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <div className="flex justify-center mb-6">
                            </div>
                            <h3 className="text-lg font-semibold text-center">{t("reasons.network.title")}</h3>
                            <p className="text-muted-foreground text-center">{t("reasons.network.description")}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-center mb-6">
                            </div>
                            <h3 className="text-lg font-semibold text-center">{t("reasons.handling.title")}</h3>
                            <p className="text-muted-foreground text-center">{t("reasons.handling.description")}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-center mb-6">
                            </div>
                            <h3 className="text-lg font-semibold text-center">{t("reasons.solutions.title")}</h3>
                            <p className="text-muted-foreground text-center">{t("reasons.solutions.description")}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-center mb-6">
                            </div>
                            <h3 className="text-lg font-semibold text-center">{t("reasons.safety.title")}</h3>
                            <p className="text-muted-foreground text-center">{t("reasons.safety.description")}</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-4">
                        <p className="text-muted-foreground">
                            {t("reasons.contact.prefix")}
                            <Link href="/contact" className="text-primary hover:underline">
                                {t("reasons.contact.link")}
                            </Link>
                            {t("reasons.contact.suffix")}
                        </p>
                        <p className="text-muted-foreground italic">{t("reasons.trust")}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
