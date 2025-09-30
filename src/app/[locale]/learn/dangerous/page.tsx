"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"
import RequestQuoteButton from "@/components/RequestQuoteButton"
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Award, ShieldCheck, Briefcase, TrendingUp, PackageCheck, AlertTriangle, Globe, FileText, Shield } from "lucide-react";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function DangerousCargoInfo() {
    const t = useTranslations("learn-dangerous-cargo")
    const [selectedClass, setSelectedClass] = useState(0)

    // Create an array of dangerous cargo classes for the accordion
    const dangerousClasses = [
        {
            id: "class-1",
            title: t('list-1-title-1'),
            description: t('list-1-description-1')
        },
        {
            id: "class-2",
            title: t('list-1-title-2'),
            description: t('list-1-description-2')
        },
        {
            id: "class-3",
            title: t('list-1-title-3'),
            description: t('list-1-description-3')
        },
        {
            id: "class-4",
            title: t('list-1-title-4'),
            description: t('list-1-description-4')
        },
        {
            id: "class-5",
            title: t('list-1-title-5'),
            description: t('list-1-description-5')
        },
        {
            id: "class-6",
            title: t('list-1-title-6'),
            description: t('list-1-description-6')
        },
        {
            id: "class-7",
            title: t('list-1-title-7'),
            description: t('list-1-description-7')
        },
        {
            id: "class-8",
            title: t('list-1-title-8'),
            description: t('list-1-description-8')
        },
        {
            id: "class-9",
            title: t('list-1-title-9'),
            description: t('list-1-description-9')
        }
    ]

    const businessBenefits = [
        {
            icon: <Image src="/icons/ocean freight/39.png" alt="Premium Service, Premium Returns" width={48} height={48} className="w-12 h-12" />,
            title: "Premium Service, Premium Returns",
            description: "Elevate business results with specialized handling, skill, and care. Our tailored solutions help you secure higher-value shipments while upholding top-level service every mile—maximizing your returns."
        },
        {
            icon: <Image src="/icons/ocean freight/40.png" alt="Trust Built on Compliance" width={48} height={48} className="w-12 h-12" />,
            title: "Trust Built on Compliance",
            description: "As certified experts in IMDG Code compliance, we manage all regulatory requirements on your behalf. This reliability ensures smooth operations and upholds your reputation in the industry."
        },
        {
            icon: <Image src="/icons/ocean freight/41.png" alt="End-to-End Expertise" width={48} height={48} className="w-12 h-12" />,
            title: "End-to-End Expertise",
            description: "From documentation and vessel selection to emergency response plans, Moon Navigation and Trading Co. provides comprehensive support, ensuring your dangerous cargo is handled with the utmost professionalism and care."
        },
        {
            icon: <Image src="/icons/ocean freight/42.png" alt="Unlock New Opportunities" width={48} height={48} className="w-12 h-12" />,
            title: "Unlock New Opportunities",
            description: "Expand what you ship with this elevated service. Risk thresholds, money, and effort are minimized as Moon Navigation and Trading Co. unlocks new commercial opportunities—allowing dangerous cargo to confidently enter viable, specialized trades."
        },
        {
            icon: <Image src="/icons/ocean freight/43.png" alt="Tailored Safety and Handling" width={48} height={48} className="w-12 h-12" />,
            title: "Tailored Safety and Handling",
            description: "Every shipment and packaging need is unique. Rely on solutions not available off the shelf or designed for broad categories. Our solutions are designed to mitigate risks while maintaining the integrity of your cargo."
        }
    ];

    const challengesAndSolutions = [
        {
            icon: <Image src="/icons/ocean freight/45.png" alt="Elevated Costs" width={48} height={48} className="w-12 h-12" />,
            title: "Elevated Costs",
            description: "Specialized handling, packaging, and insurance come with a premium. However, these investments are essential to ensure the safety and compliance of your shipments."
        },
        {
            icon: <Image src="/icons/ocean freight/46.png" alt="Intricate Regulations" width={48} height={48} className="w-12 h-12" />,
            title: "Intricate Regulations",
            description: "Dangerous cargo is governed by stringent regulations and route restrictions. Our team's expertise guarantees that these challenges are navigated efficiently and effectively."
        },
        {
            icon: <Image src="/icons/ocean freight/47.png" alt="Risk Management and Liability" width={48} height={48} className="w-12 h-12" />,
            title: "Risk Management and Liability",
            description: "The transportation of hazardous materials carries inherent risks. We proactively address these concerns through robust management systems and comprehensive training for our staff, ensuring your shipments are handled with the utmost care."
        }
    ];

    const internationalTradeBenefits = [
        {
            icon: <Image src="/icons/other services/42.png" alt="Expert Trade Knowledge" width={48} height={48} className="w-12 h-12" />,
            title: "Expert Trade Knowledge",
            description: "Our deep expertise in global commerce, logistics, and customs regulations."
        },
        {
            icon: <Image src="/icons/other services/43.png" alt="Strong Global Network" width={48} height={48} className="w-12 h-12" />,
            title: "Strong Global Network",
            description: "Our strong partnerships with airlines, shipping lines, and regulatory bodies worldwide."
        },
        {
            icon: <Image src="/icons/other services/44.png" alt="Custom-Tailored Trade Solutions" width={48} height={48} className="w-12 h-12" />,
            title: "Custom-Tailored Trade Solutions",
            description: "Our personalized strategies for importers, exporters, and traders."
        },
        {
            icon: <Image src="/icons/other services/45.png" alt="Reliable Compliance & Risk Management" width={48} height={48} className="w-12 h-12" />,
            title: "Reliable Compliance & Risk Management",
            description: "Our full compliance with international trade laws."
        }
    ];

    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <Head>
                <title>Dangerous Cargo Shipping and Handling | Moon Navigation and Trading Co.</title>
                <meta
                    name="description"
                    content="Learn about dangerous cargo shipping, IMDG Code, IATA DGR, ADR, and how Moon Navigation and Trading Co. ensures safe, compliant transport of hazardous materials worldwide."
                />
                <meta
                    name="keywords"
                    content="dangerous cargo, hazardous materials, IMDG Code, IATA DGR, ADR, shipping, transport, Moon Navigation and Trading Co., packaging, labeling, risk assessment, special equipment, safety protocols"
                />
                <meta property="og:title" content="Dangerous Cargo Shipping and Handling | Moon Navigation and Trading Co." />
                <meta property="og:description" content="Expert handling and transport of dangerous cargo and hazardous materials. Learn about our process, compliance, and safety standards." />
                <meta property="og:image" content="/dangerous-cargo-banner.jpg" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.moonnavigation.com/learn/dangerous" />
            </Head>
            
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
                            src="/dangerous-cargo-banner.jpg"
                            alt="Dangerous Cargo Hero"
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
                            <span className="text-white/90 text-sm font-medium">Dangerous Cargo Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Dangerous Cargo Shipping
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Expert handling and transport of dangerous cargo and hazardous materials with full compliance and safety standards
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/ocean-freight-forms">
                                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Request a Quote
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

            {/* What is Dangerous Cargo? Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Dangerous Cargo</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Dangerous Cargo?
                        </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Dangerous cargo includes materials that pose significant risks to health, safety, property, and the environment due to their hazardous nature. These materials, ranging from flammable and explosive substances to toxic, radioactive, and corrosive chemicals, require meticulous handling and adherence to strict international safety regulations such as the IMDG Code, IATA DGR, and ADR.
                        </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we specialize in the safe, secure, and fully compliant transportation of hazardous materials. With extensive industry expertise, we provide tailored solutions that guarantee the highest safety standards, regulatory compliance, and efficient logistics management. Trust us to handle your most challenging cargo needs with professionalism and precision.
                        </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Dangerous Cargo We Handle Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
                {/* Header Section */}
                <div className="text-center mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Dangerous Goods</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Types of Dangerous Cargo We Handle
                    </h1>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        We provide specialized transportation services for all IMDG hazard classes with strict compliance and safety protocols.
                    </p>
            </div>
            
                {/* Responsive Layout: Desktop Two-Column, Mobile Single-Column */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar: Navigation - Hidden on mobile, shown on desktop */}
                    <aside className="hidden lg:block w-full lg:w-1/3">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h3 className="text-lg font-semibold mb-6 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>IMO Hazard Classes</h3>
                            <div className="space-y-1">
                                {dangerousClasses.map((dangerousClass, idx) => (
                                        <button
                                        key={dangerousClass.id}
                                        onClick={() => setSelectedClass(idx)}
                                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                            selectedClass === idx
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                            style={{ fontFamily: 'Raleway, sans-serif' }}
                                        >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1 h-8 rounded-full ${
                                                selectedClass === idx ? 'bg-white' : 'bg-blue-600'
                                            }`}></div>
                                            <div className="flex-1">
                                                <div className="font-light text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            {dangerousClass.title}
                                                </div>
                                            </div>
                                        </div>
                                        </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Navigation - Shown on mobile, hidden on desktop */}
                    <div className="lg:hidden space-y-3 px-2">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>IMO Hazard Classes</h3>
                        
                        {dangerousClasses.map((dangerousClass, index) => (
                            <div key={dangerousClass.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                {/* Clickable Header */}
                                <button
                                    onClick={() => setSelectedClass(index)}
                                    className={`w-full text-left p-4 transition-all duration-300 ${
                                        selectedClass === index
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1 h-6 rounded-full flex-shrink-0 ${
                                            selectedClass === index ? 'bg-white' : 'bg-blue-600'
                                        }`}></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-light text-sm leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                {dangerousClass.title}
                                            </div>
                                        </div>
                                        {/* Arrow Icon */}
                                        <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                                            selectedClass === index ? 'rotate-180' : 'rotate-0'
                                        }`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>

                                {/* Expandable Content - Only on mobile */}
                                {selectedClass === index && (
                                    <div className="px-4 pb-4 border-t border-gray-200">
                                        <div className="pt-4 space-y-3">
                                            <div>
                                                <p className="text-gray-600 leading-relaxed text-sm mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    {dangerousClass.description}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    These materials require strict storage controls and specialized transport measures to prevent accidents and ensure safety.
                                                </p>
                                            </div>
                                            
                                            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mt-4">
                                                <p className="text-blue-800 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    <strong>Important:</strong> All dangerous goods require proper documentation, packaging, labeling, and handling procedures in accordance with IMDG Code regulations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Content: Selected Class Details - Desktop only */}
                    <main className="hidden lg:block w-full lg:w-2/3">
                        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {dangerousClasses[selectedClass]?.title}
                        </h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {dangerousClasses[selectedClass]?.description}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            These materials require strict storage controls and specialized transport measures to prevent accidents and ensure safety.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                                        <p className="text-blue-800 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            <strong>Important:</strong> All dangerous goods require proper documentation, packaging, labeling, and handling procedures in accordance with IMDG Code regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section>

            {/* Process Section */}
            <section id="services" className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Dangerous Cargo Process</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                    Our Dangerous Cargo Handling and Transport Process
                </h2>
                        
                        <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            At Moon Navigation and Trading Co., we follow a comprehensive, safety-first approach to handling and transporting dangerous cargo. Our process ensures full compliance with international regulations while maintaining the highest standards of safety and efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risk Assessment and Planning */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Risk Assessment</span>
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Risk Assessment and Planning
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    The initial phase in transporting hazardous cargo involves a thorough risk assessment to identify potential hazards and risks associated with the materials.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we meticulously evaluate the nature of the cargo, determine the most appropriate transport route, and identify any risks to the public, the environment, and the transport crew.
                        </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                            This proactive approach ensures that all safety measures are in place before transportation begins.
                        </p>
                    </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/risk-assessment.jpg"
                                    alt="Risk Assessment and Planning"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packaging and Labeling */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/packaging-labeling.jpg"
                                    alt="Packaging and Labeling"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Packaging & Labeling</span>
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Packaging and Labeling
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            Proper packaging and labeling are critical for the secure transport of dangerous goods.
                        </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                            Our dedicated team at Moon Navigation and Trading Co. ensures that each item is packed in accordance with its hazard classification, with all necessary markings, labels, and documentation meticulously prepared.
                        </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                            This includes UN numbers, hazardous labels, and warning signs, ensuring compliance with all regulations and the safety of all involved in the transport process.
                        </p>
                    </div>
                        </div>
                    </div>
                </div>
            </section>

                {/* Special Equipment Use */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Specialized Equipment</span>
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Special Equipment Use
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we employ specialized equipment designed specifically for the transport of dangerous cargo, including:
                        </p>
                                <ul className="space-y-2 text-base text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Explosion-Proof Vehicles and Containers:</strong> Engineered for the safe transport of flammable goods, ensuring maximum protection.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Cryogenic Tanks:</strong> Utilized for the secure transport of liquefied gases, maintaining optimal conditions throughout transit.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Double-Walled:</strong> Designed for corrosive materials, providing enhanced safety and containment during transport.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span><strong>Radiation Shield:</strong> Implemented for the secure transport of radioactive cargo, people, and the environment.</span>
                                    </li>
                        </ul>
                    </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/special-equipment.jpg"
                                    alt="Special Equipment Use"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                {/* Safety and Emergency Protocols */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/safety-protocols.jpg"
                                    alt="Safety and Emergency Protocols"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Safety & Emergency</span>
                            </div>
                            
                            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Safety and Emergency Protocols
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            Safety is a top priority when transporting dangerous goods. We ensure that all staff are thoroughly trained in hazmat handling and that our drivers and operators are well-versed in emergency response procedures.
                        </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                            Additionally, we equip our teams with emergency response kits containing containment materials, fire extinguishers, and first aid equipment, ensuring preparedness in any situation.
                        </p>
                    </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Benefits Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Business Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Elevate Your Business with Our Expert Dangerous Cargo Services
                </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Transporting dangerous cargo demands expertise, precision, and a steadfast commitment to safety. At Moon Navigation and Trading Co., we recognize the complexities involved in handling hazardous materials. Here's how partnering with us can benefit your business:
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="space-y-8">
                        {businessBenefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <div className="flex-1 text-center lg:text-left">
                                    <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges and Solutions Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Challenges & Solutions</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Mastering the Challenges of Dangerous Goods Transportation
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Transporting dangerous goods presents substantial business opportunities but requires a deep understanding of its complexities. At Moon Navigation and Trading Co., we specialize in offering comprehensive solutions to navigate the intricacies of this critical industry.
                        </p>
                    </div>

                    {/* Challenges Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challengesAndSolutions.map((challenge, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    {challenge.icon}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {challenge.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Text Content */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md p-6 md:p-10 flex flex-col justify-center h-full">
                        <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we transform challenges into opportunities. Our unwavering commitment to safety and efficiency guarantees that your dangerous cargo arrives securely and on time.
                        </p>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Partnering with us means you benefit from a team that prioritizes safety and environmental responsibility, adhering to the highest standards to protect both your cargo and the environment.
                        </p>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We provide expert guidance every step of the way, navigating the complexities of hazardous transport to ensure a seamless experience.
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Additionally, we deliver reliable, tailored solutions designed to meet your unique needs, ensuring optimal outcomes for your business—whenever and wherever you need to trust.
                        </p>
                    </div>
                    {/* Right: Image and Call to Action */}
                    <div className="flex flex-col items-center">
                        <div className="w-full rounded-3xl overflow-hidden shadow-md mb-4">
                            <Image
                                src="/dangerous-cargo-team.jpg"
                                alt="Moon Navigation and Trading Co. hazardous cargo team"
                                width={600}
                                height={350}
                                className="object-cover w-full h-[220px] md:h-[350px]"
                                priority={false}
                            />
                        </div>
                        <p className="text-muted-foreground text-center text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Let us elevate your hazardous goods transport experience. <Link href="/contact" className="text-primary underline">Contact us</Link> today to discuss your requirements and discover how we can support your success!
                        </p>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Dangerous Container Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Reasons to Choose Moon Navigation and Trading Co. for Your Dangerous Shipments
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Wide range of DG container options and equipment with end-to-end operational support and full compliance with international standards.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* First Row: 3 items */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/57.png" alt="Certified Team Expertise Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Certified team with deep expertise in hazardous cargo handling
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Highly trained and certified professionals with extensive experience in handling hazardous cargo safely and efficiently.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/58.png" alt="Full Compliance Standards Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Full compliance with IMDG, ADR, and IATA standards
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Complete adherence to international dangerous goods regulations including IMDG, ADR, and IATA standards.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/59.png" alt="Wide Range of DG Container Options Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Wide range of DG container options and equipment
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Comprehensive selection of specialized containers and equipment designed specifically for hazardous materials transport.
                            </p>
                        </div>
                    </div>

                    {/* Second Row: 3 items */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/60.png" alt="End-to-End Operational Support Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                End-to-end operational support and coordination
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Complete operational support from planning to delivery, ensuring seamless coordination throughout the entire shipping process.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/61.png" alt="Safety and Reliability Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Commitment to safety, reliability, and regulatory excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Unwavering commitment to maintaining the highest standards of safety, reliability, and regulatory compliance.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/62.png" alt="Transparent Documentation Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Transparent documentation, routing, and pricing process
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clear and transparent documentation, routing options, and pricing with no hidden costs or surprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Dangerous Cargo" link="/ocean-freight-forms" />
            <FAQSearch category="dangerous-cargo-transport" />
        </main>
    )
}
