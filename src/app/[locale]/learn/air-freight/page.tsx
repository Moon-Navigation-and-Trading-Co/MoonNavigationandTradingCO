"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Award, Plane, Clock, Shield, Package, Truck, Ship } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function AirFreightInfo() {
    const t = useTranslations("learn-air-freight");
    
    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
                            src="/Air Freight.jpeg"
                            alt="Air Freight Services Hero"
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
                            <span className="text-white/90 text-sm font-medium">Air Freight Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                {t("hero.title")}
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Comprehensive air freight solutions for rapid global delivery with dedicated cargo aircraft and commercial flight options.
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/air-freight-forms">
                                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {t("hero.requestQuote")}
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

            {/* What is Air Freight Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Air Freight Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Air Freight?
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    From urgent shipments to time-sensitive goods, our extensive global air freight network ensures that your cargo reaches its destination efficiently and securely. As it is a critical logistics solution for businesses that require rapid delivery of goods across the globe. Using dedicated cargo aircraft or space on commercial flights, we ensure your shipments arrive on time, no matter the destination.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    At Moon Navigation and Trading Co., we specialize in providing seamless air cargo solutions meticulously tailored to meet your specific needs, delivering the highest level of service, ensuring your shipments are handled with precision and care.
                                </p>
                            </div>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Air Freight Principles</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                            Our Core Principles of Our Air Freight Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Speed, efficiency, reliability, and security are the foundation of our air freight services.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/air-freight/3.png" alt="Speed and Efficiency" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("principles.speed.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("principles.speed.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/air-freight/4.png" alt="Reliability" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("principles.reliability.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("principles.reliability.description")}
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/air-freight/5.png" alt="Security" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {t("principles.security.title")}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t("principles.security.description")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Specialized Solutions</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                            Precision in Motion—Tailored Air Freight Solutions For Every Cargo Type
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">{t("services.highValue.title")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("services.highValue.description")}</p>
                                </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">{t("services.dangerous.title")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("services.dangerous.description")}</p>
                                </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">{t("services.oversized.title")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("services.oversized.description")}</p>
                                </div>
                            </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">{t("services.timeSensitive.title")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("services.timeSensitive.description")}</p>
                                </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">{t("services.perishable.title")}</h3>
                            <p className="text-gray-600 leading-relaxed">{t("services.perishable.description")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cost Management and Compliance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Cost Management</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                            {t("costManagement.title")}
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("costManagement.firstParagraph1")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("costManagement.firstParagraph2")}</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/Air Freight 1.jpeg" alt="Supply Chain Management" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">{t("costManagement.secondParagraph")}</p>
                            <p className="text-sm text-gray-500">{t("costManagement.comment1")}</p>
                            <p className="text-sm text-gray-500">{t("costManagement.comment2")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shipping Options Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Shipping Options</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                            {t("shippingOptions.title")}
                        </h2>
                    </div>

                    <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 relative group">
                        {/* Mobile Swipe Arrows */}
                        <div className="hidden md:block">
                            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100" 
                                    onClick={() => {
                                        const tableContainer = document.querySelector('.table-scroll-container');
                                        if (tableContainer) {
                                            tableContainer.scrollLeft -= 300;
                                        }
                                    }}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                                    onClick={() => {
                                        const tableContainer = document.querySelector('.table-scroll-container');
                                        if (tableContainer) {
                                            tableContainer.scrollLeft += 300;
                                        }
                                    }}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        {/* Mobile Swipe Indicator */}
                        <div className="md:hidden flex justify-center items-center gap-2 py-4 text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            <span className="text-sm">Swipe to view more</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                        <table className="min-w-full bg-white text-sm md:text-base">
                            <thead>
                                <tr className="bg-blue-50 text-gray-900">
                                    <th className="py-4 px-6 border-b border-gray-200 font-medium text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>{t("shippingOptions.serviceType")}</th>
                                    <th className="py-4 px-6 border-b border-gray-200 font-medium text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>{t("shippingOptions.transitTime")}</th>
                                    <th className="py-4 px-6 border-b border-gray-200 font-medium text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>{t("shippingOptions.cargoType")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">{t("shippingOptions.express")}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-600">{t("shippingOptions.sameDay")}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-600">{t("shippingOptions.highValue")}</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">{t("shippingOptions.standard")}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-600">{t("shippingOptions.days1")}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-600">{t("shippingOptions.generalCargo")}</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">{t("shippingOptions.economy")}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-600">{t("shippingOptions.days2")}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 text-gray-600">{t("shippingOptions.nonUrgent")}</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                    <td className="py-4 px-6 text-gray-900 font-medium">{t("shippingOptions.charter")}</td>
                                    <td className="py-4 px-6 text-gray-600">{t("shippingOptions.custom")}</td>
                                    <td className="py-4 px-6 text-gray-600">{t("shippingOptions.oversized")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/learn/air-freight-special-cargo">
                            <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                {t("shippingOptions.learnMore")}
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sea-Air Solutions Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/air-5.jpg" alt="Sea-Air Solutions" fill className="object-cover" />
                            </div>
                            <p className="text-sm text-gray-600 mt-4 text-center">{t("seaAir.caption")}</p>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Sea-Air Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("seaAir.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("seaAir.subtitle")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("seaAir.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Combined Services</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Sea and Air Freight Combined Service
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">{t("seaAir.singleSource")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("seaAir.expertise")}</p>
                                <p className="text-base text-gray-600 leading-relaxed">{t("seaAir.caption2")}</p>
                            </div>

                            <div className="pt-4">
                                <Link href="/contact">
                                    <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            {t("seaAir.contactUs")}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/Air Freight 4.png" alt="Sea and Air Freight Combined Service" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image src="/air-7.jpg" alt="Specialized Air Freight Services" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Specialized Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("specializedServices.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                {t("specializedServices.intro")}
                                <span className="font-medium">{t("specializedServices.network")}</span>
                                {t("specializedServices.partnerships")}
                            </p>

                                <p className="text-base text-gray-600 leading-relaxed">
                                {t("specializedServices.transparency")}
                                <span className="font-medium">{t("specializedServices.updates")}</span>
                                {t("specializedServices.customs")}
                                <span className="font-medium">{t("specializedServices.documentation")}</span>
                                {t("specializedServices.support")}
                            </p>

                                <p className="text-base text-gray-600 leading-relaxed">{t("specializedServices.expertise")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Air Freight Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Reasons to Choose Moon Navigation and Trading Co. For Air Freight Shipping
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Expert handling with competitive rates and customized solutions for all your air freight needs.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/air-freight/10.png" alt="Specialized Cargo" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                                        {t("reasons.expertHandling")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t("reasons.expertHandlingDesc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/air-freight/11.png" alt="Competitive Rates" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                                        {t("reasons.competitiveRates")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t("reasons.competitiveRatesDesc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/air-freight/12.png" alt="Solutions" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                                        {t("reasons.customizedSolutions")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t("reasons.customizedSolutionsDesc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/air-freight/13.png" alt="Support" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                                        {t("reasons.support")}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t("reasons.supportDesc")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Air Freight" link="/air-freight-forms" />
        </main>
    );
}
