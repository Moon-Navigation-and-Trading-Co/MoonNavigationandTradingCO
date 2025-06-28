import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function InternationalTrading() {
    const t = useTranslations("learn-international-trading");

    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="w-full">
                <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12">
                    <Image src="/images/international-trading-hero.jpg" alt="International Trading Network" fill className="object-cover" priority />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h1 className="text-4xl mb-6 text-foreground">{t("title")}</h1>
                            <Link href="/international-trading-forms">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">{t("quoteRequest.button")}</Button>
                            </Link>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-foreground">{t("header")}</h2>
                            <p className="text-muted-foreground">{t("headerDescription1")}</p>
                            <p className="text-muted-foreground">{t("headerDescription2")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-4 text-foreground">{t("servicesHeader")}</h2>
                    <h3 className="text-2xl mb-12 text-foreground">{t("servicesHeaderDescription")}</h3>

                    <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
                        <div className="relative">
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-primary">
                                <div className="absolute inset-4">
                                    <Image src="/images/globe-hand.jpg" alt="Global Trade Services" fill className="object-cover rounded-2xl" />
                                </div>
                            </div>
                            <Button variant="secondary" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                                <Link href="/learn/international-trade-services">{t("learnMoreButton")}</Link>
                            </Button>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">{t("services.imports.title")}</h3>
                                <p className="text-muted-foreground">{t("services.imports.description")}</p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">{t("services.agreements.title")}</h3>
                                <p className="text-muted-foreground">{t("services.agreements.description")}</p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">{t("services.customs.title")}</h3>
                                <p className="text-muted-foreground">{t("services.customs.description")}</p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-foreground">{t("services.logistics.title")}</h3>
                                <p className="text-muted-foreground">{t("services.logistics.description")}</p>
                            </div>

                            <div className="space-y-3 sm:col-span-2">
                                <h3 className="text-xl font-semibold text-foreground">{t("services.currency.title")}</h3>
                                <p className="text-muted-foreground">{t("services.currency.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="w-full py-16 bg-card">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-12 text-foreground">{t("solutions.title")}</h2>

                    <div className="space-y-16">
                        {/* Freight Services */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-xl font-bold mb-4 text-foreground">{t("solutions.freight.title")}</h3>
                                <p className="text-muted-foreground">{t("solutions.freight.description")}</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                                    <Image src="/images/freight-services.jpg" alt="Freight Services" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Expert Customs Clearance */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                                <Image src="/images/customs-clearance.jpg" alt="Customs Clearance" fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">{t("solutions.customs.title")}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t("solutions.customs.description")}</p>
                            </div>
                        </div>

                        {/* Global Network */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-xl font-bold mb-4 text-foreground">{t("solutions.network.title")}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t("solutions.network.description")}</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                                    <Image src="/images/global-network.jpg" alt="Global Network" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Strategic Storage and Warehousing */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                                <Image src="/images/warehousing.jpg" alt="Strategic Storage and Warehousing" fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">{t("solutions.warehousing.title")}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t("solutions.warehousing.description")}</p>
                            </div>
                        </div>

                        {/* Consultancy Services */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-xl font-bold mb-4 text-foreground">{t("solutions.consultancy.title")}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t("solutions.consultancy.description")}</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                                    <Image src="/images/consultancy.jpg" alt="Consultancy Services" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Safe Handling of Dangerous Cargo */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                                <Image src="/images/dangerous-cargo.jpg" alt="Safe Handling of Dangerous Cargo" fill className="object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">{t("solutions.dangerousCargo.title")}</h3>
                                <p className="text-muted-foreground leading-relaxed">{t("solutions.dangerousCargo.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reasons to Choose Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-12 text-foreground">{t("reasons.reasonsToChoose")}</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Expert Trade Knowledge */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">{t("reasons.customs.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.customs.description")}</p>
                        </div>

                        {/* Strong Global Network */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">{t("reasons.network.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.network.description")}</p>
                        </div>

                        {/* Custom-Tailored Trade Solutions */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">{t("reasons.freight.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.freight.description")}</p>
                        </div>

                        {/* Reliable Compliance & Risk Management */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">{t("reasons.consultancy.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.consultancy.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Request Section */}
            <div className="w-full py-16 bg-muted/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-semibold text-foreground">{t("quoteRequest.title")}</h2>
                            <p className="text-muted-foreground">{t("quoteRequest.description")}</p>
                            <Link href="/international-trading-forms">
                                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">{t("quoteRequest.button")}</Button>
                            </Link>
                        </div>

                        <div className="relative h-[400px]">
                            <Image src="/quote-illustration.png" alt="Quote Request" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="w-full py-8 bg-card border-t border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground">
                            {t("contact.prefix")}
                            <Link href="/contact" className="text-primary hover:underline">
                                {t("contact.link")}
                            </Link>
                            {t("contact.suffix")}
                        </p>
                        <p className="text-muted-foreground italic">{t("trust")}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
