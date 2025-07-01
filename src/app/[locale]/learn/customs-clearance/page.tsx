
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";   
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function CustomsClearance() {
    const t = useTranslations("customs-clearance");

    return (
        <main className="flex flex-col items-center w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {/* Hero Section */}
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Hero Image */}
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden mb-16">
                        <Image src="/images/customs-worker-containers.jpg" alt="Customs clearance worker with shipping containers" fill className="object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h1 className="text-4xl  mb-8 text-foreground">{t("hero.title")}</h1>
                            <div className="mt-8">
                                <Link href="/ship-agency-forms">
                                    <RequestQuoteButton>
                                        {t("quoteRequest.button")}
                                    </RequestQuoteButton> 
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl  text-primary">{t("hero.subtitle")}</h2>
                            <p className="text-muted-foreground">{t("hero.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Critical Role of Customs Clearance Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl  mb-16 text-foreground">{t("critical-role.title")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* Regulatory Compliance */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/regulatory-compliance.svg" alt="Regulatory Compliance" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("critical-role.regulatory.title")}</h3>
                            <p className="text-muted-foreground">{t("critical-role.regulatory.description")}</p>
                        </div>

                        {/* Avoiding Delays */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/avoiding-delays.svg" alt="Avoiding Delays" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("critical-role.delays.title")}</h3>
                            <p className="text-muted-foreground">{t("critical-role.delays.description")}</p>
                        </div>

                        {/* Cost Management */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/cost-management.svg" alt="Cost Management" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("critical-role.cost.title")}</h3>
                            <p className="text-muted-foreground">{t("critical-role.cost.description")}</p>
                        </div>
                    </div>

                    {/* Security and Transparency */}
                    <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
                        <div className="w-16 h-16 mb-6">
                            <img src="/images/icons/security-transparency.svg" alt="Security and Transparency" className="w-full h-full" />
                        </div>
                        <h3 className="text-xl  mb-4 text-foreground">{t("critical-role.security.title")}</h3>
                        <p className="text-muted-foreground">{t("critical-role.security.description")}</p>
                    </div>
                </div>
            </div>

            {/* Key Customs Clearance Activities Section */}
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl  mb-16 text-foreground">{t("key-activities.title")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                        {/* Image Column */}
                        <div className="md:col-span-5">
                            <div className="rounded-lg overflow-hidden h-full">
                                <img src="/images/customs-officer.jpg" alt="Customs clearance officer" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* First Two Activities */}
                        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Import and Export Documentation */}
                            <div className="space-y-4">
                                <h3 className="text-xl  text-primary">{t("key-activities.documentation.title")}</h3>
                                <p className="text-muted-foreground">{t("key-activities.documentation.description")}</p>
                            </div>

                            {/* Customs Inspections */}
                            <div className="space-y-4">
                                <h3 className="text-xl  text-primary">{t("key-activities.inspections.title")}</h3>
                                <p className="text-muted-foreground">{t("key-activities.inspections.description")}</p>
                            </div>

                            {/* Clearing Goods through Customs */}
                            <div className="space-y-4">
                                <h3 className="text-xl  text-primary">{t("key-activities.clearing.title")}</h3>
                                <p className="text-muted-foreground">{t("key-activities.clearing.description")}</p>
                            </div>

                            {/* Customs Tariffs and Duty Calculation */}
                            <div className="space-y-4">
                                <h3 className="text-xl  text-primary">{t("key-activities.tariffs.title")}</h3>
                                <p className="text-muted-foreground">{t("key-activities.tariffs.description")}</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Two Activities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Adherence to Import/Export Restrictions */}
                        <div className="space-y-4">
                            <h3 className="text-xl  text-primary">{t("key-activities.restrictions.title")}</h3>
                            <p className="text-muted-foreground">{t("key-activities.restrictions.description")}</p>
                        </div>

                        {/* HS Code Classification */}
                        <div className="space-y-4">
                            <h3 className="text-xl  text-primary">{t("key-activities.hs-code.title")}</h3>
                            <p className="text-muted-foreground">{t("key-activities.hs-code.description")}</p>
                        </div>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex justify-end mt-8">
                        <Link href="/learn/customs-clearance/learn-more">
                            <RequestQuoteButton>
                                {t("key-activities.learn-more")}
                            </RequestQuoteButton>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Reasons to Choose Moon Navigation Section */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl  mb-16 text-foreground">{t("reasons.title")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {/* Licensed Customs Brokers & Trade Experts */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/licensed-brokers.svg" alt="Licensed Customs Brokers" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("reasons.licensed.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.licensed.description")}</p>
                        </div>

                        {/* Strong Government & Trade Partnerships */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/government-partnerships.svg" alt="Government Partnerships" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("reasons.partnerships.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.partnerships.description")}</p>
                        </div>

                        {/* Global Network & Digital Customs Solutions */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/global-network.svg" alt="Global Network" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("reasons.network.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.network.description")}</p>
                        </div>

                        {/* 24/7 Support & Real-Time Tracking */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6">
                                <img src="/images/icons/support-tracking.svg" alt="24/7 Support" className="w-full h-full" />
                            </div>
                            <h3 className="text-xl  mb-4 text-foreground">{t("reasons.support.title")}</h3>
                            <p className="text-muted-foreground">{t("reasons.support.description")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <GetQuoteComponent topic = "Customs Clearance" link = "/ship-agency-forms"/> 
        </main>
    );
}
