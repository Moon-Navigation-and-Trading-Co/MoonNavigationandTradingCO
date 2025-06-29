import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function InternationalTradeServices() {
    const t = useTranslations("learn-international-trade-services");

    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold mb-4">{t("hero.title")}</h1>
                    <p className="text-xl mb-16">{t("hero.slogan")}</p>

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl font-semibold">{t("importExport.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("importExport.first")}</p>

                                <p>{t("importExport.second")}</p>

                                <p>{t("importExport.third")}</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <img src="/images/shipping-containers.jpg" alt="Shipping containers with worker" className="rounded-lg w-full h-auto object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mt-16">
                        <div className="md:w-1/2 relative">
                            <img src="/images/customs-worker.jpg" alt="Customs worker checking shipments" className="rounded-lg w-full h-auto object-cover" />
                        </div>

                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl font-semibold">{t("customs.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("customs.first")}</p>

                                <p>{t("customs.second")}</p>

                                <p>{t("customs.third")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* International Shipping & Logistics Section */}
            <div className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl font-semibold">{t("shipping.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("shipping.intro")}</p>
                                <p>{t("shipping.oceanFreight")}</p>

                                <p>{t("shipping.airFreight")}</p>

                                <p>{t("shipping.inlandFreight")}</p>

                                <p>{t("shipping.multimodal")}</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <img src="/images/airplane-logistics.jpg" alt="Airplane logistics" className="rounded-lg w-full h-auto object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mt-16">
                        <div className="md:w-1/2 relative">
                            <img src="/images/cargo-logistics.jpg" alt="Cargo logistics" className="rounded-lg w-full h-auto object-cover" />
                        </div>

                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl font-semibold">{t("finance.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("finance.first")}</p>

                                <p>{t("finance.second")}</p>

                                <p>{t("finance.third")}</p>

                                <p>{t("finance.fourth")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Free Trade Agreements & Market Expansion Section */}
            <div className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl font-semibold">{t("fta.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("fta.intro")}</p>

                                <p>{t("fta.expertise")}</p>

                                <p>{t("fta.commitment")}</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <img src="/images/trade-expansion.jpg" alt="Trade expansion and logistics" className="rounded-lg w-full h-auto object-cover" />
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
                            <Link href="/international-trading-forms" className="bg-[#2B3990] hover:bg-[#232d73] text-white px-6 py-2 rounded-md inline-block transition-colors">
                                {t("quoteRequest.button")}
                            </Link>
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
                            {t("contact.prefix")}
                            <Link href="/contact" className="text-[#2B3990] hover:underline">
                                {t("contact.link")}
                            </Link>
                            {t("contact.suffix")}
                        </p>
                        <p className="text-gray-600 italic">{t("trust")}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
