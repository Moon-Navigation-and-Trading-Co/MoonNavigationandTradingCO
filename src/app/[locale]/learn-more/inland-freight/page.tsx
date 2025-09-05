"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Award, Truck, Train, Ship, Package, Shield, CheckCircle } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function InlandFreightLearnMorePage() {
    const t = useTranslations("learn-inland-freight");

    const freightTypes = [
        {
            title: t("types.intermodal.title"),
            description: t("types.intermodal.description"),
            image: "/f-inland-2.jpg",
        },
            {
            title: t("types.rail.title"),
            description: t("types.rail.description"),
            image: "/f-inland-3.jpg",
        },
        {
            title: t("types.truck.title"),
            description: t("types.truck.description"),
            image: "/f-inland-4.jpg",
            },
            {
            title: t("types.waterways.title"),
            description: t("types.waterways.description"),
            image: "/f-inland-5.jpg",
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
                            src="/f-inland-4.jpg"
                            alt="Inland Freight Hero"
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
                            <span className="text-white/90 text-sm font-medium">Inland Freight Solutions</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                {t("title")}
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Comprehensive inland freight solutions across multiple transportation modes for optimal efficiency and cost-effectiveness.
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/inland-services-forms">
                                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {t("requestQuote")}
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

            {/* What is Inland Freight Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Inland Transportation</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("whatIsTitle")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Inland Freight is a vital component of the logistics framework, enabling the efficient movement of goods and containers from ports to inland locations, as well as facilitating the transfer of cargo and containers between, countries, and across borders. At Moon Navigation and Trading Co., we specialize in offering comprehensive land transportation solutions that encompass methods, including trucking, rail transport, and inland waterways such as rivers and canals.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Our commitment to ensuring timely and efficient delivery plays a crucial role in connecting supply chains and customer demands across diverse regions. We understand the importance of inland transportation, and our experienced team is dedicated to optimizing logistics operations to provide the best service to our clients.
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
            {/* Types of Inland Freight Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Transportation Modes</span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                            {t("typesTitle")}
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Comprehensive inland freight solutions across multiple transportation modes for optimal efficiency and cost-effectiveness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {freightTypes.map((type, index) => (
                            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className="h-48 relative">
                                    <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-medium text-base mb-3 text-gray-900">{type.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Diverse Inland Freight Solutions Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Our Solutions</span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                            {t("solutionsTitle")}
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            {t("solutionsDescription")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className="space-y-4">
                                    <h3 className="text-base font-medium text-gray-900">{solution.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Road Freight Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Road Transportation</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("roadFreight.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {t("roadFreight.description")}
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("roadFreight.services.ftl.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("roadFreight.services.ftl.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("roadFreight.services.ltl.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("roadFreight.services.ltl.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("roadFreight.services.heavy.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("roadFreight.services.heavy.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("roadFreight.services.reefer.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("roadFreight.services.reefer.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-medium text-base mb-4 text-gray-900">{t("roadFreight.advantages.title")}</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("roadFreight.advantages.flexible")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("roadFreight.advantages.ideal")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("roadFreight.advantages.suitable")}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image src="/f-inland-7.jpg" alt="Road Freight Trucks" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rail Freight Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image src="/f-inland-3.jpg" alt="Rail Freight Transport" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Rail Transportation</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("railFreight.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    We recognise the importance of efficient and sustainable logistics solutions for long-distance, high-volume shipments. Our rail freight services provide a cost-effective and environmentally friendly alternative to traditional trucking, ensuring your cargo is transported safely and efficiently.
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("railFreight.services.bulk.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("railFreight.services.bulk.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("railFreight.services.containerized.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("railFreight.services.containerized.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("railFreight.services.heavy.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("railFreight.services.heavy.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-medium text-base mb-4 text-gray-900">{t("railFreight.advantages.title")}</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("railFreight.advantages.cost")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("railFreight.advantages.environmental")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("railFreight.advantages.capacity")}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inland Waterway Transport Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Waterway Transportation</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("waterway.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {t("waterway.description")}
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("waterway.services.bulk.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("waterway.services.bulk.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("waterway.services.port.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("waterway.services.port.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("waterway.services.eco.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("waterway.services.eco.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-medium text-base mb-4 text-gray-900">{t("waterway.advantages.title")}</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("waterway.advantages.cost")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("waterway.advantages.safe")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("waterway.advantages.capacity")}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image src="/f-inland-9.jpg" alt="Inland Waterway Transport" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intermodal Freight Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image src="/f-inland-10.jpg" alt="Intermodal Freight Transport" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Intermodal Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("intermodal.title")}
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {t("intermodal.description")}
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("intermodal.services.oceanRailTruck.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("intermodal.services.oceanRailTruck.description")}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-medium text-base text-gray-900">{t("intermodal.services.oceanBargeTruck.title")}</h3>
                                                <p className="text-sm text-gray-600">{t("intermodal.services.oceanBargeTruck.description")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="font-medium text-base mb-4 text-gray-900">{t("intermodal.advantages.title")}</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("intermodal.advantages.costEfficient")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("intermodal.advantages.environmental")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("intermodal.advantages.secure")}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{t("intermodal.advantages.scalable")}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supply Chain Enhancement Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Supply Chain Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                {t("supplyChain.title")}
                            </h2>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="font-medium text-base text-gray-900">{t("supplyChain.flexibility.title")}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t("supplyChain.flexibility.description")}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-medium text-base text-gray-900">{t("supplyChain.costEffective.title")}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t("supplyChain.costEffective.description")}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-medium text-base text-gray-900">{t("supplyChain.accessibility.title")}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t("supplyChain.accessibility.description")}</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-medium text-base text-gray-900">{t("supplyChain.efficient.title")}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t("supplyChain.efficient.description")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image src="/f-inland-11.jpg" alt="Supply Chain Enhancement" fill className="object-cover" />
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
                            <div className="relative w-full aspect-[4/3] md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                                <Image src="/f-inland-12.jpg" alt="Inland Freight Workers" fill className="object-cover" />
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
                                    {t("specializedServices.description")}
                                </p>

                                <div className="space-y-4">
                                    <p className="text-gray-600 leading-relaxed">{t("specializedServices.dangerousGoods")}</p>
                                    <p className="text-gray-600 leading-relaxed">{t("specializedServices.customs")}</p>
                                    <p className="text-gray-600 leading-relaxed">{t("specializedServices.tracking")}</p>
                                    <p className="text-gray-600 leading-relaxed">{t("specializedServices.intermodal")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Moon Navigation and Trading Co. For Your Inland Transportation */}
            <section className="px-4 sm:px-6 lg:px-8 mb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Inland Transportation Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Reasons to Choose Moon Navigation and Trading Co. For Your Inland Transportation
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Extensive network with expert handling and tailored solutions for comprehensive inland transportation services.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/inland/12.png" alt="Extensive Network" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Extensive Network
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our comprehensive network spans across multiple transportation modes, ensuring seamless connectivity and efficient delivery solutions.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/inland/13.png" alt="Expert Handling" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Expert Handling
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our experienced team ensures professional handling of all cargo types with the highest standards of care and safety.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/inland/14.png" alt="Tailored Solutions" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Tailored Solutions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Customized transportation solutions designed to meet your specific requirements and optimize your supply chain.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/inland/15.png" alt="Safety & Compliance" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Safety & Compliance
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Strict adherence to safety protocols and regulatory compliance ensures secure and reliable transportation services.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/inland/12.png" alt="Cost-Effective Solutions" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Cost-Effective Solutions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Competitive pricing and optimized routes to provide cost-effective transportation solutions without compromising quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Request Section */}
            <GetQuoteComponent topic="Inland Freight" link="/inland-services-forms" />


        </main>
    );
}