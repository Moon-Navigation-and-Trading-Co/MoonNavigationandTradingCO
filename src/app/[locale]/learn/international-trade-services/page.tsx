import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function InternationalTradeServices() {
    const t = useTranslations("learn-international-trade-services");

    return (
        <main className="flex flex-col items-center w-full" style={{fontFamily: "Raleway"}}>
            {/* Hero Section */}
            <div className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-4xl  mb-4">{t("hero.title")}</h1>
                    <p className="text-xl mb-16">{t("hero.slogan")}</p>

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl ">{t("importExport.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("importExport.first")}</p>

                                <p>{t("importExport.second")}</p>

                                <p>{t("importExport.third")}</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <Image src="/lm-international-1.jpg" alt="Shipping containers with worker" width={600} height={350} className="rounded-[70px] w-full h-[350px] object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mt-16">
                        <div className="md:w-1/2 relative">
                            <Image src="/lm-international-2.jpg" alt="Customs worker checking shipments" width={600} height={400} className="rounded-lg w-full h-auto object-cover" />
                        </div>

                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl ">{t("customs.title")}</h2>

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
                            <h2 className="text-2xl ">{t("shipping.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("shipping.intro")}</p>
                                <p>{t("shipping.oceanFreight")}</p>

                                <p>{t("shipping.airFreight")}</p>

                                <p>{t("shipping.inlandFreight")}</p>

                                <p>{t("shipping.multimodal")}</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <Image src="/lm-international-3.jpg" alt="Airplane logistics" width={600} height={400} className="rounded-lg w-full h-auto object-cover" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 mt-16">
                        <div className="md:w-1/2 relative">
                            <Image src="/lm-international-4.jpg" alt="Cargo logistics" width={600} height={400} className="rounded-lg w-full h-auto object-cover" />
                        </div>

                        <div className="md:w-1/2 space-y-8">
                            <h2 className="text-2xl ">{t("finance.title")}</h2>

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
                            <h2 className="text-2xl ">{t("fta.title")}</h2>

                            <div className="space-y-6">
                                <p>{t("fta.intro")}</p>

                                <p>{t("fta.expertise")}</p>

                                <p>{t("fta.commitment")}</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <Image src="/lm-international-5.jpg" alt="Trade expansion and logistics" width={600} height={400} className="rounded-lg w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
            <GetQuoteComponent topic="International Trading" link="/international-trading-forms" />
        </main>
    );
}
