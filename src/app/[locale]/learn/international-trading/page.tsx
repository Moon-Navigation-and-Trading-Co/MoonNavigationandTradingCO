"use client"

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function InternationalTrading() {
    const t = useTranslations("learn-international-trading");

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
                            src="/international-1.jpg"
                            alt="International Trading Hero"
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
                            <span className="text-white/90 text-sm font-medium">International Trading Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                {t("title")}
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                {t("headerDescription1")}
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

            {/* What is International Trading? Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>International Trading</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is International Trading?
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                International trading is the exchange of goods and services across international borders, playing a vital role in the global economy. At Moon Navigation and Trading Co., we specialize in this essential trade, enabling businesses to access a diverse array of products and markets.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Our team expertly manages customs regulations, international payment, logistics, tariffs, and trade agreements to ensure smooth and efficient transactions. With our commitment to excellence, we empower our clients to thrive in the global marketplace.
                            </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>





            {/* Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Global Trade Solutions</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight text-right md:text-center">
                            Navigating Global Trade: <span className="text-blue-600 font-light">At Moon Navigation and Trading Co.</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {t("servicesHeaderDescription")}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
                        <div className="relative">
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/international-2.jpg" alt="Global Trade Services" fill className="object-cover" />
                            </div>
                            <div className="mt-6 text-center">
                                <Button variant="outline" className="bg-white hover:bg-gray-50 border-blue-200 hover:border-blue-300 text-blue-700 hover:text-blue-800 px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" asChild>
                                <Link href="/learn/international-trade-services">{t("learnMoreButton")}</Link>
                            </Button>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 font-['Raleway']">{t("services.imports.title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("services.imports.description")}</p>
                            </div>

                            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 font-['Raleway']">{t("services.agreements.title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("services.agreements.description")}</p>
                            </div>

                            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 font-['Raleway']">{t("services.customs.title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("services.customs.description")}</p>
                            </div>

                            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 font-['Raleway']">{t("services.logistics.title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("services.logistics.description")}</p>
                            </div>

                            <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 font-['Raleway']">{t("services.currency.title")}</h3>
                                <p className="text-gray-600 leading-relaxed">{t("services.currency.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Global Trade Solutions</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                            Our Solutions for <span className="text-blue-600 font-light">Global Trade Success</span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive international trade solutions designed to streamline your global operations and maximize efficiency.
                        </p>
                    </div>

                    <div className="flex flex-col gap-24">
                        {/* Freight Services */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    1. Comprehensive Freight Services
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    We provide end-to-end freight solutions including ocean freight, air freight, breakbulk, and container services (FCL/LCL). Our global network ensures competitive rates and reliable delivery across all major trade routes.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-3.jpg"
                                    alt="Freight Services"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Expert Customs Clearance */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    2. Expert Customs Clearance
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Our customs experts handle all documentation, compliance requirements, and regulatory procedures. We ensure smooth clearance processes while minimizing delays and avoiding costly penalties.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-4.jpg"
                                    alt="Customs Clearance"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Global Network */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    3. Global Network & Partnerships
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Our extensive network of partners, agents, and carriers spans across continents, providing seamless service delivery and competitive rates. We maintain strong relationships with major shipping lines, airlines, and logistics providers.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-5.jpg"
                                    alt="Global Network"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Strategic Storage and Warehousing */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    4. Strategic Storage & Warehousing
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    We offer secure storage facilities in strategic locations worldwide. Our warehousing services include inventory management, order fulfillment, and distribution support to optimize your supply chain operations.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-6.jpg"
                                    alt="Strategic Storage and Warehousing"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Consultancy Services */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    5. Trade Consultancy Services
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Our expert consultants provide strategic advice on trade routes, cost optimization, supply chain design, and market entry strategies. We help you make informed decisions to maximize your international trade success.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-7.jpg"
                                    alt="Consultancy Services"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Safe Handling of Dangerous Cargo */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    6. Safe Handling of Dangerous Cargo
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    We specialize in the safe transportation of hazardous materials with full compliance to international safety standards. Our certified team ensures proper classification, packaging, and handling of dangerous goods.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-8.jpg"
                                    alt="Safe Handling of Dangerous Cargo"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Financial Services */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    7. Financial Services & Currency Management
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    We provide comprehensive financial services including trade finance, currency exchange, payment processing, and risk management solutions. Our financial expertise helps optimize your cash flow and minimize currency risks.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-9.jpg"
                                    alt="Financial Services"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>

                        {/* Technology Solutions */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="text-lg md:text-xl mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    8. Technology & Tracking Solutions
                                </h2>
                                <div className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Our advanced tracking systems provide real-time visibility of your shipments. We offer digital documentation, automated reporting, and integrated logistics platforms to streamline your operations and enhance transparency.
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-full md:w-[400px]">
                                <Image
                                    src="/international-10.jpg"
                                    alt="Technology Solutions"
                                    width={400}
                                    height={280}
                                    className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>International Trade Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Reasons to Choose Moon Navigation and Trading Co. For Your International Trade
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Expert trade knowledge with strong global networks and custom-tailored solutions for international commerce.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/57.png" alt="Expert Trade Knowledge" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                                {t("reasons.customs.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {t("reasons.customs.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/58.png" alt="Strong Global Network" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                                {t("reasons.network.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {t("reasons.network.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/59.png" alt="Custom-Tailored Trade Solutions" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                                {t("reasons.freight.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {t("reasons.freight.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/60.png" alt="Reliable Compliance & Risk Management" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                                {t("reasons.consultancy.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {t("reasons.consultancy.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="International Trading" link="/international-trading-forms" />
        </main>
    );
}