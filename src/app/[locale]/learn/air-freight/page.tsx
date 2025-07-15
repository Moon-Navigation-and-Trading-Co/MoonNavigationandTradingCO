"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";


function overview(){
    const t = useTranslations("learn-air-freight");
    return(
        <>
                    <div className="w-full">
                <div className="relative h-[350px] rounded-[60px] overflow-hidden mb-8 mt-10">
                    <Image src="/air-1.jpg" alt="Air Freight Services" fill className="object-cover object-[90%_10%]" priority />
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
        </>
    )
}
function services(){
    const t = useTranslations("learn-air-freight");
    return(
        <>
         <div className="w-full bg-background py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl mb-12">{t("principles.title")}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="border-0 bg-card">
                            <CardHeader className="items-center text-center">
                                <img src="/icons/invest/6.png" alt="Speed and Efficiency" className="h-16 w-16 mb-6 object-contain mx-auto" />
                                <CardTitle className="font-normal">{t("principles.speed.title")}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">{t("principles.speed.description")}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="items-center text-center">
                                <img src="/icons/ocean freight/21.png" alt="Reliability" className="h-16 w-16 mb-6 object-contain mx-auto" />
                                <CardTitle className="font-normal">{t("principles.reliability.title")}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground">{t("principles.reliability.description")}</p>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-card">
                            <CardHeader className="items-center text-center">
                                <img src="/icons/ocean freight/23.png" alt="Security" className="h-16 w-16 mb-6 object-contain mx-auto" />
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
                    <div className="relative overflow-hidden mb-12 rounded-[60px] ">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/ to-blue-800/70 z-10"></div>
                        <Image src="/air-2.jpg" alt="Air Freight Services" width={1200} height={800} className="w-full h-[700px] object-cover object-[90%_10%]" />
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
                            <Image src="/air-3.jpg" alt="Supply Chain Management" width={500} height={300} className="rounded-[60px] shadow-lg" />
                        </div>
                    </div>

                    {/* Second paragraph with excellence badge and image to the left */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
                            <Image
                                src="/icons/other services/6.png"
                                alt="Excellence Badge"
                                width={200}
                                height={200}
                                className=""
                            />
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
                            <div className="relative rounded-[60px] overflow-hidden h-[400px]">
                                <div className="absolute inset-0 bg-primary/20"></div>
                                <Image src="/air-5.jpg" alt="Sea-Air Solutions" fill className="object-cover" />
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
                        <div className="relative w-full h-[300px] rounded-[60px] overflow-hidden mb-8">
                            <Image src="/air-6.jpg" alt="Sea and Air Freight Combined Service" fill className="object-cover object-top" />
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
                        <div className="relative rounded-[60px] overflow-hidden h-[400px]">
                            <Image src="/air-7.jpg" alt="Specialized Air Freight Services" fill className="object-cover" />
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
                    <ReasonsGridUniversal
                        title={
                            <>Reasons to Choose Moon Navigation and Trading Co. For Air Freight Shipping</>
                        }
                        reasons={[
                            {
                                icon: <img src="/icons/air-freight/10.png" alt="Expert Handling" className="h-16 w-16 mb-6 object-contain mx-auto mt-20" />,
                                title: "Our Expert Handling of Specialized Cargo",
                                description: "Dangerous goods, perishables, and oversized shipments."
                            },
                            {
                                icon: <img src="/icons/air-freight/11.png" alt="Competitive Rates" className="h-16 w-16 mb-6 object-contain mx-auto mt-20" />,
                                title: "Our Competitive Rates with Reliable Airline Networks",
                                description: "We offer a cost-effective pricings for global routes."
                            },
                            {
                                icon: <img src="/icons/air-freight/12.png" alt="Customized Solutions" className="h-16 w-16 mb-6 object-contain mx-auto" />,
                                title: "Customized Solutions for Every Industry",
                                description: "We offer tailored logistics for manufacturing, healthcare, technology, and retail."
                            },
                            {
                                icon: <img src="/icons/air-freight/13.png" alt="24/7 Support" className="h-16 w-16 mb-6 object-contain mx-auto" />,
                                title: "24/7 Support and Dedicated Account Management",
                                description: "We offer personalized service for urgent and high-value shipments."
                            }
                        ]}
                    />
                </div>
            </div>
            <GetQuoteComponent topic="air-freight" link="/air-freight-forms"/>
            <FAQSearch category="air-freight" />
        </>
    )
}

export default function AirFreightInfo() {


    return (
        <main className="flex flex-col items-center w-full max-w-7xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <OverviewServicesTabs renderOverview={overview} renderServices={services}/>
        </main>
    );
}
