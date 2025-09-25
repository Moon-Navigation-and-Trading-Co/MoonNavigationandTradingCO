"use client"
import React from 'react'
import Link from 'next/link'
import ServiceSection from '@/components/ServiceSection'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Plane, Ship, Globe, Shield, Zap, Clock, Award, Users, CheckCircle } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'
import { useTranslations } from 'next-intl'
import CarouselAnimation from '@/components/carousel-animation-component'
import Image from 'next/image'
import GetQuoteComponent from '@/components/getQuoteComponent'

export default function OceanFreightPage() {
    const t = useTranslations("ocean-freight")

    const Data = [
        {
            title: "Project Cargo Services",
            description: t('project-p'),
            image: "/project-cargo-hero.jpg",
            link: "/learn/project-cargo",
            quote: "/ocean-freight-forms"
        },
        {
            title: "Roll On/Off (RoRo)",
            description: t('roll-p'),
            image: "/rorotitleimage.jpg",
            link: "/learn/roll",
            quote: "/ocean-freight-forms"
        },
        {
            title: "Dangerous Cargo",
            description: t('dangerous-p'),
            image: "/dangerous-cargo-banner.jpg",
            link: "/learn/dangerous",
            quote: "/ocean-freight-forms"
        },
        {
            title: "Heavy Lift",
            description: t('heavy-p'),
            image: "/heavy-lift-cargo-banner.jpg",
            link: "/learn/heavy",
            quote: "/ocean-freight-forms"
        },
        {
            title: "Break Bulk",
            description: t('breakbulk-p'),
            image: "/breakbulk-banner.jpg",
            link: "/learn/breakbulk",
            quote: "/ocean-freight-forms"
        },
        {
            title: "Livestock",
            description: "Specialized livestock transportation services ensuring the safe and humane transport of animals across international waters. Our experienced team provides climate-controlled environments, veterinary care coordination, and compliance with international animal welfare regulations.",
            image: "/livestock-banner.jpg",
            link: "/learn/livestock",
            quote: "/ocean-freight-forms"
        },
        {
            title: "Tankers",
            description: "Specialized tanker shipping services for liquid cargo including oil, chemicals, and liquefied gases. Our fleet of modern tankers ensures safe, efficient, and environmentally compliant transportation of liquid commodities across global trade routes.",
            image: "/tankers-header.jpg",
            link: "/learn/tankers",
            quote: "/ocean-freight-forms"
        }
    ]

    const benefits = [
        {
            icon: "/icons/ocean freight/105.png",
            title: "Comprehensive Freight Solutions",
            description: "We handle a wide range of cargo, including FCL, LCL, breakbulk, RoRo, heavy lift, oversized, and dangerous goods, ensuring tailored solutions for every shipment."
        },
        {
            icon: "/icons/ocean freight/106.png",
            title: "Expertise in Complex Shipments",
            description: "Our specialized team manages heavy lift, out-of-gauge, and hazardous cargo, ensuring compliance with international shipping regulations and the highest safety standards."
        },
        {
            icon: "/icons/ocean freight/107.png",
            title: "Optimized Routes & Cost-Effective Shipping",
            description: "Through our strategic vessel selection and route optimization, we reduce transit times while providing competitive pricing for global ocean freight."
        },
        {
            icon: "/icons/ocean freight/108.png",
            title: "Extensive Global Network",
            description: "With our strong partnerships with major shipping lines and access to all Egyptian ports, we ensure seamless international trade and cargo movement worldwide."
        },
        {
            icon: "/icons/ocean freight/109.png",
            title: "Customs Expertise & Secure Handling",
            description: "Our team ensures smooth customs clearance, proper documentation, and strict compliance with international regulations, guaranteeing safe and hassle-free cargo movement."
        },
        {
            icon: "/icons/ocean freight/110.png",
            title: "Customer-Focused Service",
            description: "We offer personalized support, real-time tracking, and transparent communication, keeping you informed every step of the way."
        }
    ]

    return (
        <div style={{ fontFamily: 'Raleway, sans-serif' }}>
            <main className="w-full flex flex-col gap-16 sm:gap-20 md:gap-24">
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
                            src="/icons/ocean freight/Ocean Freight.jpg"
                            alt="Ocean Freight Hero"
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
                            <span className="text-white/90 text-sm font-medium">Global Ocean Freight Solutions</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Ocean Freight Services
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Comprehensive ocean freight solutions that connect your business to global markets with reliability, efficiency, and expertise
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

            {/* What is Ocean Freight? Section - match International Trading design */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Ocean Freight</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Ocean Freight?
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Ocean freight is a vital link in global trade, providing businesses with a cost-effective and dependable way to transport goods across the world. At Moon Navigation and Trading Co., we specialize in creating smart, customized ocean freight solutions that meet the unique needs of every shipment.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Our expertise covers oversized, heavy-lift, livestock, hazardous cargo, and tankers. With access to global shipping routes, we ensure the smooth, secure, and efficient movement of goods from origin to destination.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Trust us to deliver logistics strategies built around your cargo—prioritizing performance, safety, and full compliance with international standards.
                            </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </section>

            {/* Ocean Freight Services Cards */}
            <ServiceSection
                id="ocean-freight-services"
                badgeLabel="Ocean Freight Services"
                description="Specialized solutions for project cargo, RoRo, dangerous goods, heavy lift, and more."
                items={Data.map((d) => ({
                    title: d.title,
                    description: d.description,
                    image: d.image,
                    learnLink: d.link,
                    quoteLink: d.quote,
                }))}
            />

			{/* Services Carousel Section removed per request */}

            {/* Benefits Section */}
            <section className="w-full max-w-6xl mx-auto px-4">
                <div className="text-center mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-4 leading-tight">
                        Reasons to Choose Moon Navigation and Trading Co.
                    </h2>
                    <p className="text-lg lg:text-xl font-raleway font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the difference with our comprehensive ocean freight solutions designed for reliability, efficiency, and excellence.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardHeader className="pb-4 text-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                                    <Image 
                                        src={benefit.icon} 
                                        alt={benefit.title}
                                        width={48}
                                        height={48}
                                        className="w-12 h-12"
                                    />
                                </div>
                                <CardTitle className="text-xl font-semibold text-primary text-center">
                                    {benefit.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <GetQuoteComponent topic="Ocean Freight Services" link="/ocean-freight-forms" />
            </main>
        </div>
    )
}