"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";

export default function InlandFreightInfo() {
    const t = useTranslations("learn-inland-freight");

    const freightTypes = [
        {
            title: t("types.intermodal.title"),
            description: t("types.intermodal.description"),
            image: "/f-inland-1.jpg",
        },
        {
            title: t("types.rail.title"),
            description: t("types.rail.description"),
            image: "/f-inland-2.jpg",
        },
        {
            title: t("types.truck.title"),
            description: t("types.truck.description"),
            image: "/f-inland-3.jpg",
        },
        {
            title: t("types.waterways.title"),
            description: t("types.waterways.description"),
            image: "/f-inland-4.jpg",
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
        <OverviewServicesTabs
            renderOverview={() => (
                <main className="flex flex-col items-center w-full max-w-7xl place-self-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {/* Hero Section */}
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden mt-10">
                        <Image src="/icons/inland/inland.jpg" alt={t("title")} fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="w-full max-w-7xl px-4 md:px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Title and Button */}
                            <div className="flex flex-col">
                                <h1 className="text-4xl md:text-5xl mb-6">{t("title")}</h1>
                                <Link href="/inland-services-forms">
                                <RequestQuoteButton> {t("requestQuote")} </RequestQuoteButton>
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
                </main>
            )}
            renderServices={() => (
                <main className="flex flex-col items-center w-full max-w-7xl place-self-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {/* Types of Inland Freight */}
                    <div className="w-full bg-transparent py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <h2 className="text-3xl font-raleway font-regular text-foreground text-left mb-12">{t("typesTitle")}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {freightTypes.map((type, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md border border-border flex flex-col overflow-hidden">
                                        <div className="h-48 w-full relative">
                                            <Image src={type.image} alt={type.title} fill className="object-cover" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3 className="text-lg font-raleway font-regular mb-2 text-foreground">{type.title}</h3>
                                            <p className="text-sm text-muted-foreground font-raleway font-light">{type.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Our Diverse Inland Freight Solutions */}
                    <div className="w-full relative py-16">
                        <div className="absolute inset-0 bg-primary/90">
                            <Image src="/f-inland-6.jpg" alt="Background" fill className="object-cover mix-blend-overlay" />
                        </div>
                        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-white">
                            <h2 className="text-3xl  mb-8">{t("solutionsTitle")}</h2>
                            <p className="mb-12">{t("solutionsDescription")}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {solutions.map((solution, index) => (
                                    <div key={index} className="space-y-2">
                                        <h3 className="text-xl ">{solution.title}</h3>
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
                                    <h2 className="text-3xl ">{t("roadFreight.title")}</h2>
                                    <p className="text-muted-foreground">{t("roadFreight.description")}</p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("roadFreight.services.ftl.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("roadFreight.services.ftl.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("roadFreight.services.ltl.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("roadFreight.services.ltl.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("roadFreight.services.heavy.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("roadFreight.services.heavy.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("roadFreight.services.reefer.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("roadFreight.services.reefer.description")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className=" mb-4">{t("roadFreight.advantages.title")}</h3>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                            <li>{t("roadFreight.advantages.flexible")}</li>
                                            <li>{t("roadFreight.advantages.ideal")}</li>
                                            <li>{t("roadFreight.advantages.suitable")}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                    <Image src="/f-inland-7.jpg" alt="Road Freight Trucks" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rail Freight Services Section */}
                    <div className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                    <Image src="/f-inland-8.jpg" alt="Rail Freight Transport" fill className="object-cover" />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl ">{t("railFreight.title")}</h2>
                                    <p className="text-muted-foreground">{t("railFreight.description")}</p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("railFreight.services.bulk.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("railFreight.services.bulk.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("railFreight.services.containerized.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("railFreight.services.containerized.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("railFreight.services.heavy.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("railFreight.services.heavy.description")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className=" mb-4">{t("railFreight.advantages.title")}</h3>
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
                                    <h2 className="text-3xl ">{t("waterway.title")}</h2>
                                    <p className="text-muted-foreground">{t("waterway.description")}</p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("waterway.services.bulk.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("waterway.services.bulk.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("waterway.services.port.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("waterway.services.port.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("waterway.services.eco.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("waterway.services.eco.description")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className=" mb-4">{t("waterway.advantages.title")}</h3>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                            <li>{t("waterway.advantages.cost")}</li>
                                            <li>{t("waterway.advantages.safe")}</li>
                                            <li>{t("waterway.advantages.capacity")}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                    <Image src="/f-inland-9.jpg" alt="Inland Waterway Transport" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Intermodal Freight Section */}
                    <div className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                    <Image src="/f-inland-10.jpg" alt="Intermodal Freight Transport" fill className="object-cover" />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl ">{t("intermodal.title")}</h2>
                                    <p className="text-muted-foreground">{t("intermodal.description")}</p>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("intermodal.services.oceanRailTruck.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("intermodal.services.oceanRailTruck.description")}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2">
                                                <span className="text-primary">✓</span>
                                                <div>
                                                    <h3 className="">{t("intermodal.services.oceanBargeTruck.title")}</h3>
                                                    <p className="text-sm text-muted-foreground">{t("intermodal.services.oceanBargeTruck.description")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className=" mb-4">{t("intermodal.advantages.title")}</h3>
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
                                    <h2 className="text-3xl ">{t("supplyChain.title")}</h2>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <h3 className="">{t("supplyChain.flexibility.title")}</h3>
                                            <p className="text-muted-foreground">{t("supplyChain.flexibility.description")}</p>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="">{t("supplyChain.costEffective.title")}</h3>
                                            <p className="text-muted-foreground">{t("supplyChain.costEffective.description")}</p>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="">{t("supplyChain.accessibility.title")}</h3>
                                            <p className="text-muted-foreground">{t("supplyChain.accessibility.description")}</p>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="">{t("supplyChain.efficient.title")}</h3>
                                            <p className="text-muted-foreground">{t("supplyChain.efficient.description")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                    <Image src="/f-inland-11.jpg" alt="Supply Chain Enhancement" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Specialized Services Section */}
                    <div className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden">
                                    <Image src="/f-inland-12.jpg" alt="Inland Freight Workers" fill className="object-cover" />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl ">{t("specializedServices.title")}</h2>
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
                    <GetQuoteComponent topic="inland-freight" link="/inland-services-forms"/>
                    <FAQSearch category="inland-freight" />
                    {/* Reasons to Choose Section */}
                    <div className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <h2 className="text-3xl  mb-12">{t("reasons.title")}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <div className="flex justify-center mb-6">
                                    </div>
                                    <h3 className="text-lg  text-center">{t("reasons.network.title")}</h3>
                                    <p className="text-muted-foreground text-center">{t("reasons.network.description")}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-center mb-6">
                                    </div>
                                    <h3 className="text-lg  text-center">{t("reasons.handling.title")}</h3>
                                    <p className="text-muted-foreground text-center">{t("reasons.handling.description")}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-center mb-6">
                                    </div>
                                    <h3 className="text-lg  text-center">{t("reasons.solutions.title")}</h3>
                                    <p className="text-muted-foreground text-center">{t("reasons.solutions.description")}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-center mb-6">
                                    </div>
                                    <h3 className="text-lg  text-center">{t("reasons.safety.title")}</h3>
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
            )}
        />
    );
}
