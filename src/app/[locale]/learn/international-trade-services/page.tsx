"use client"

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Award, Globe, Truck, Shield, DollarSign, FileText } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function InternationalTradeServices() {
    const t = useTranslations("learn-international-trade-services");

    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
                <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
                    {/* Enhanced Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
                    
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 z-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                    </div>

                    {/* Hero Image */}
                    <div className="absolute inset-0 z-10">
                        <Image
                            src="/lm-international-1.jpg"
                            alt="International Trade Services Hero"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm font-medium">International Trade Services</span>
                        </div>

                        {/* Enhanced Heading */}
                            <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                {t("hero.title")}
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                {t("hero.slogan")}
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/international-trading-forms">
                                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {t("quoteRequest.button")}
                                    </span>
                                </button>
                            </Link>
                            <Link href="#services">
                                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Learn More
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                        <button 
                            onClick={() => {
                                const servicesSection = document.querySelector('#services');
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
                        >
                            <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">Scroll to explore</span>
                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Overview Header */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Comprehensive Services</span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                            Our Complete <span className="text-blue-600 font-light">International Trade Solutions</span>
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            From import/export management to customs clearance, we provide end-to-end solutions for your global trade operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Import & Export Management Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Trade Management</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("importExport.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("importExport.first")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("importExport.second")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("importExport.third")}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Regulatory Compliance</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Supplier Coordination</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Market Entry</span>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-international-1.jpg" alt="Import Export Management" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customs Clearance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-international-2.jpg" alt="Customs Clearance" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Regulatory Compliance</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("customs.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("customs.first")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("customs.second")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("customs.third")}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Duty Optimization</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Permits & Licensing</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Documentation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shipping & Logistics Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Global Logistics</span>
            </div>

                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("shipping.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("shipping.intro")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("shipping.oceanFreight")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("shipping.airFreight")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("shipping.inlandFreight")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("shipping.multimodal")}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Ocean Freight</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Air Freight</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Multimodal</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-international-3.jpg" alt="Shipping & Logistics" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trade Finance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-international-4.jpg" alt="Trade Finance" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Financial Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("finance.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("finance.first")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("finance.second")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("finance.third")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("finance.fourth")}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Letters of Credit</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Cargo Insurance</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">FX Advisory</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Trade Agreements Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Market Expansion</span>
            </div>

                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("fta.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("fta.intro")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("fta.expertise")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("fta.commitment")}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Duty Exemptions</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Tariff Reductions</span>
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Market Access</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-international-5.jpg" alt="Free Trade Agreements" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section id="services" className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Services Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 font-['Raleway']">Import & Export</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Streamlined import/export processes with comprehensive regulatory compliance and documentation handling.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <DollarSign className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 font-['Raleway']">Trade Finance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Financial solutions including letters of credit, cargo insurance, and foreign exchange advisory.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 font-['Raleway']">Customs Clearance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Hassle-free customs clearance with expertise in regulatory compliance and duty optimization.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <FileText className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 font-['Raleway']">Free Trade Agreements</h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                Expert guidance on leveraging FTAs for cost advantages and market expansion opportunities.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Truck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 font-['Raleway']">Shipping & Logistics</h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                Comprehensive shipping solutions including ocean freight, air freight, and multimodal transport.
                            </p>
                    </div>
                </div>
            </div>
            </section>

            <GetQuoteComponent topic="International Trading" link="/international-trading-forms" />
        </main>
    );
}
