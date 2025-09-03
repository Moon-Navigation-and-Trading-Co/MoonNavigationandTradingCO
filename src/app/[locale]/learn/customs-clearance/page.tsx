"use client"

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function CustomsClearance() {
    const t = useTranslations("customs-clearance");

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
                            src="/Custom 1.jpg"
                            alt="Customs Clearance Hero"
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
                            <span className="text-white/90 text-sm font-medium">Customs Clearance Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                {t("hero.title")}
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                {t("hero.description")}
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/customs-clearance-forms">
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

            {/* What is Customs Clearance Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Customs Clearance</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("what-is.title")}
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                {t("what-is.description")}
                            </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Critical Role of Customs Clearance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Customs Clearance Role</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            The Critical Role of Customs Clearance in International Trade
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Regulatory compliance, delay prevention, and cost management are essential for successful international trade operations.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/69.png" alt="Regulatory Compliance" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("critical-role.regulatory.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("critical-role.regulatory.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/70.png" alt="Avoiding Delays" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("critical-role.delays.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("critical-role.delays.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/71.png" alt="Cost Management" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("critical-role.cost.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("critical-role.cost.description")}
                            </p>
                        </div>
                    </div>

                    {/* Security and Transparency */}
                    <div className="max-w-4xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/72.png" alt="Security and Transparency" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("critical-role.security.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("critical-role.security.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Customs Clearance Activities Section */}
            <section className="px-2 sm:px-6 lg:px-8 py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4 md:mb-6">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Core Activities</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-black mb-4 md:mb-6 leading-tight">
                            {t("key-activities.title")}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our comprehensive customs clearance services cover all essential activities to ensure smooth and compliant trade operations.
                        </p>
                    </div>

                    {/* Activities Grid with Wrapped Layout */}
                    <div className="relative mb-8 md:mb-12">
                        {/* Central Image Container */}
                        <div className="flex justify-center mb-6 md:mb-12">
                            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg aspect-[4/3] rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image 
                                    src="/Custom 2.jpg" 
                                    alt="Customs clearance officer" 
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                {/* Floating Badge */}
                                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 md:px-4 md:py-2 shadow-lg">
                                    <span className="text-blue-600 font-semibold text-xs md:text-sm">Core Services</span>
                                </div>
                            </div>
                        </div>

                        {/* Activities Grid Wrapping Around Image */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                            {/* Import and Export Documentation */}
                            <div className="group bg-white rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-bl-full opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">1</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-1.5 md:mb-3">
                                        {t("key-activities.documentation.title")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t("key-activities.documentation.description")}
                                    </p>
                                </div>
                            </div>

                            {/* Customs Inspections */}
                            <div className="group bg-white rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-bl-full opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">2</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-1.5 md:mb-3">
                                        {t("key-activities.inspections.title")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t("key-activities.inspections.description")}
                                    </p>
                                </div>
                            </div>

                            {/* Clearing Goods through Customs */}
                            <div className="group bg-white rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-bl-full opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">3</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-1.5 md:mb-3">
                                        {t("key-activities.clearing.title")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t("key-activities.clearing.description")}
                                    </p>
                                </div>
                            </div>

                            {/* Customs Tariffs and Duty Calculation */}
                            <div className="group bg-white rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-bl-full opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">4</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-1.5 md:mb-3">
                                        {t("key-activities.tariffs.title")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t("key-activities.tariffs.description")}
                                    </p>
                                </div>
                            </div>

                            {/* Adherence to Import/Export Restrictions */}
                            <div className="group bg-white rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-bl-full opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">5</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-1.5 md:mb-3">
                                        {t("key-activities.restrictions.title")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t("key-activities.restrictions.description")}
                                    </p>
                                </div>
                            </div>

                            {/* HS Code Classification */}
                            <div className="group bg-white rounded-lg md:rounded-2xl p-2.5 md:p-6 shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-blue-50 rounded-bl-full opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">6</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-medium text-black mb-1.5 md:mb-3">
                                        {t("key-activities.hs-code.title")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {t("key-activities.hs-code.description")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex justify-start mt-8 md:mt-12">
                        <Button asChild className="px-6 py-2.5 md:px-8 md:py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <Link href="/learn/customs-clearance/learn-more">
                                Learn more about our Custom Clearance Services
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Moon Navigation Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Customs Clearance Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Reasons to Choose Moon Navigation and Trading Co. For Your Custom and Clearance Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Licensed customs brokers with strong government partnerships and global network solutions for seamless customs clearance.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/75.png" alt="Licensed Customs Brokers" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("reasons.licensed.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("reasons.licensed.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/76.png" alt="Government Partnerships" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("reasons.partnerships.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("reasons.partnerships.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/77.png" alt="Global Network" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("reasons.network.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("reasons.network.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/78.png" alt="24/7 Support" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("reasons.support.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("reasons.support.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Customs Clearance" link="/customs-clearance-forms" />
        </main>
    );
}
