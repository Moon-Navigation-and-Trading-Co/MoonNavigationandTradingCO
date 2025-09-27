"use client";
import Image from "next/image";
import { Metadata } from "next";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import dynamic from "next/dynamic";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award, Ship, Shield, Globe, Leaf, HeadphonesIcon } from "lucide-react";

const TankersIndustryCarousel = dynamic(() => import("@/components/tankers-industry-carousel"), { ssr: false });

function overview() {
    return (
        <>
            {/* What is Tankers Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Liquid Cargo Transport</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Tankers?
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Tankers in ocean freight and transportation are specialized vessels designed for the bulk transport of liquids, including crude oil, refined petroleum products, chemicals, and liquefied gases. Engineered with advanced safety features and adhering to stringent industry regulations, these ships ensure the secure and efficient handling of hazardous cargo.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    At Moon Navigation and Trading Co., we specialize in comprehensive tanker transportation services. Our state-of-the-art fleet and experienced team provide scalable, reliable, and efficient solutions to support your liquid cargo needs. We prioritize safety, compliance, and environmental sustainability, ensuring every project meets the highest industry standards while delivering cost-effective and timely transportation across major global trade routes.
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
        </>
    );
}

export default function TankersPage() {
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
                            src="/tankers-header.jpg"
                            alt="Tankers Hero"
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
                            <span className="text-white/90 text-sm font-medium">Liquid Cargo Transport</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Tankers
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Specialized vessels for bulk transport of liquids, including crude oil, petroleum products, chemicals, and liquefied gases with advanced safety features
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

            {/* Overview Section */}
            {overview()}

            {/* Specialized Tanker Types Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Specialized Fleet</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                    Our Specialized Tanker Types
                </h2>
                        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    At Moon Navigation and Trading Co., we specialize in all types of tankers, ensuring safe and efficient transportation solutions tailored to meet diverse industry needs.
                </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                                            {/* Crude Oil Tankers */}
                        <div className="space-y-4">
                            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/tankers-crude-oil.jpg"
                            alt="Crude Oil Tanker"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Crude Oil Transport</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                            Crude Oil Tankers
                        </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                            These are designed for transporting crude oil in bulk with large capacity and robust safety features, ensuring secure delivery from extraction sites to refineries.
                        </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Large Capacity</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Robust Safety</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Secure Delivery</span>
                                </div>
                            </div>
                    </div>

                                            {/* Liquefied Gas Tankers */}
                        <div className="space-y-4">
                            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/tankers-liquefied-gas.jpg"
                            alt="Liquefied Gas Tanker"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Gas Transport</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                            Liquefied Gas Tankers
                        </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                            These vessels transport LNG and LPG under high pressure and low temperature, equipped with advanced containment systems for maximum safety.
                        </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">LNG Transport</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">LPG Transport</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Advanced Containment</span>
                                </div>
                            </div>
                    </div>

                                            {/* Product Tankers */}
                        <div className="space-y-4">
                            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/tankers-product.jpg"
                            alt="Product Tanker"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Refined Products</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                            Product Tankers
                        </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                            Specialized for refined petroleum products like gasoline, diesel, and jet fuel, these tankers offer compartmentalized storage for safe, contamination-free transport.
                        </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Gasoline</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Diesel</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Jet Fuel</span>
                                </div>
                            </div>
                    </div>

                                            {/* Chemical Tankers */}
                        <div className="space-y-4">
                            <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/tankers-chemical.jpg"
                            alt="Chemical Tanker"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Hazardous Chemicals</span>
                                </div>
                                <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                            Chemical Tankers
                        </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                            Engineered to carry hazardous chemicals, these tankers feature stainless steel tanks, advanced coatings, and specialized safety systems for secure handling.
                        </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Stainless Steel Tanks</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Advanced Coatings</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Safety Systems</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Industry Solutions</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                    Industries We Serve
                </h2>
                        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Our tanker ocean freight services cater to a diverse range of industries, ensuring safe and efficient transportation solutions for liquid cargo across global markets.
                </p>
                    </div>

                    <div className="relative w-full max-w-7xl mx-auto">
                    <TankersIndustryCarousel />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="services" className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Specialized Fleet</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Key Features of Our Tankers Transportation
                        </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Our specialized tanker fleet is designed to meet the highest industry standards, ensuring safe and efficient transportation of liquid cargo across global trade routes.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Crude Oil Tankers:</span> Designed for the large-scale transportation of unrefined crude oil. These tankers feature high-capacity, double-hull designs for added safety, ensuring the secure shipment across global trade routes.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Product Tankers:</span> Our product tankers are specifically engineered for the transport of refined petroleum products such as gasoline, diesel, and jet fuel. Multiple segregated compartments allow for the safe and efficient delivery of various cargoes in a single voyage.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Chemical Tankers:</span> Built to meet the stringent requirements of chemical cargoes, our chemical tankers are outfitted with specialized corrosion-resistant materials, multiple tanks, and advanced safety systems to guarantee the secure conveyance of hazardous chemicals.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Liquefied Gas Carriers:</span> Our LNG and LPG carriers utilize cutting-edge cryogenic technology to maintain the transport of liquefied gases under atmospheric and controlled temperatures throughout the journey.
                                    </div>
                                </div>
                            </div>
                    </div>

                        {/* Right: Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/tankers-features.jpg"
                            alt="Specialized Tanker Fleet"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Safety and Compliance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Image */}
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/tankers-safety.jpg"
                            alt="Tanker Safety Compliance"
                                    fill
                                    className="object-cover"
                        />
                    </div>
                        </div>

                        {/* Right: Text Content */}
                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Safety Standards</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Advanced Safety and Compliance
                        </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., our tankers are engineered to meet the highest safety standards in the maritime industry.
                        </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Regulatory Compliance:</span> We strictly adhere to international regulations, including IMO, SOLAS, MARPOL, and ISGOTT, ensuring the safe handling and transportation of hazardous goods.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Double Hull:</span> Our tankers feature a double-hull construction that adds enhanced protection against leaks, spills, and environmental hazards, significantly reducing the risk of accidental damage.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Cargo Integrity Monitoring:</span> Utilizing advanced sensor technologies, we monitor all shipments in real-time for continuous tracking of cargo conditions and temperature control at sea.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Emergency Response Protocols:</span> Our vessels are equipped with state-of-the-art fire suppression systems, emergency shutdown mechanisms, and trained response teams, enabling immediate action in any emergency situation involving hazardous cargo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Logistics Network Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Global Network</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Global Logistics Network with Moon Navigation and Trading Co.
                        </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we specialize in a comprehensive global logistics network, ensuring timely, dependable tankers that reach every major oil, chemical, and gas port worldwide.
                        </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Global Trade Routes:</span> Our extensive shipping routes and partnerships ensure your liquid cargo is routed via the safest, fastest international maritime lanes with streamlined coordination across the globe.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Optimized Scheduling & Routing:</span> We utilize advanced vessel scheduling and real-time optimization to minimize transit times, reduce costs, and maximize reliability.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Port Access & Integration:</span> Direct relationships with global ports allow seamless entry and exit, expedited customs clearance, and integrated logistics for efficient cargo handling and delivery.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Door-to-Door Logistics:</span> We provide end-to-end solutions, including inland and last-mile support, integrating tanker ocean freight with multimodal transport to deliver comprehensive and reliable service for every tanker cargo.
                                    </div>
                                </div>
                            </div>
                    </div>

                    {/* Right: Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/tankers-global-network.jpg"
                            alt="Moon Navigation and Trading Co. global logistics network"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Cargo Handling Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/tankers-cargo-handling.jpg"
                            alt="Advanced cargo handling and storage at Moon Navigation and Trading Co."
                                    fill
                                    className="object-cover"
                        />
                    </div>
                        </div>

                    {/* Right: Text Content */}
                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Cargo Handling</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Advanced Cargo Handling and Storage
                        </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., our tankers are equipped with cutting-edge technology to ensure safe and efficient cargo transfers:
                        </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Temperature Controlled Cargo Holds:</span> Our tankers are equipped with advanced temperature regulation systems, allowing for the transport of sensitive cargoes like chemicals, edible oils, and liquefied gases while maintaining full required temperature control throughout the journey.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Segregated Cargo Tanks:</span> For multi-cargo shipments, we employ strategically divided tanks segregated by robust barriers to prevent cross-contamination, ensuring the integrity of each cargo.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Automated Loading & Unloading:</span> Our automation technology and safety systems maximize fuel efficiency, minimize emissions, and support safe, quick, labor-optimized port access.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk Management and Environmental Protection Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Environmental Protection</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Risk Management and Environmental Protection
                        </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we prioritize safety, sustainability, and environmental responsibility in every aspect of our operations.
                        </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Assurance and Mitigation:</span> We use audit programs, crew training, and robust vessel maintenance to identify hazards and mitigate all shipping risks, ensuring safe and secure tanker transportation through industry-leading protocols and emergency response drills.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Ballast Water Management:</span> Our tankers are equipped with advanced ballast water treatment systems that comply with international standards, helping to protect marine biodiversity while preventing invasive species transfer.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Low-Emission Fuel Usage:</span> We utilize modern and eco-friendly fuels to minimize the environmental impact of our fleet, actively reducing CO<sub>2</sub> and sulfur emissions.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Sustainability Initiatives:</span> As part of our commitment to sustainability, we support technical solutions, efficient passage, and green operations to continually reduce our carbon footprint and enhance compliance.
                                    </div>
                                </div>
                            </div>
                    </div>

                    {/* Right: Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/tankers-environmental-protection.jpg"
                            alt="Tanker ship with environmental protection and dolphins"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexibility and Customized Solutions Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/tankers-flexibility.jpg"
                            alt="Businessmen shaking hands for flexible tanker solutions"
                                    fill
                                    className="object-cover"
                        />
                    </div>
                        </div>

                    {/* Right: Text Content */}
                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Customized Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Flexibility and Customized Solutions
                        </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we recognize that each cargo type has unique transportation needs, which is why we offer flexible and tailored tanker transportation solutions.
                        </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Spot and Long-Term Contracts:</span> We provide both spot shipments for one-off transport and long-term contract options for recurring needs. This flexible approach helps maximize flexibility to meet your requirements.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Specialized Services:</span> Our team can cater to specific requirements, including temperature-controlled cargo, chemical segregation, or sensitive on-time deliveries, ensuring you stay competitive in global markets.
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Dedicated Account Management:</span> Clients benefit from a dedicated account manager who delivers personalized service, seamless support, and timely updates throughout the shipment process.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <Award className="w-4 h-4" />
                            <span>Tanker Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Reasons to Choose Moon Navigation and Trading Co. For Your Tanker Ocean Freight
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Extensive tanker expertise with advanced fleet capabilities and global reach for liquid cargo transport.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ocean freight/100.png" alt="Tanker Expertise" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Tanker Expertise
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Extensive experience in liquid cargo transport, ensuring safe and efficient shipping solutions.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ocean freight/101.png" alt="Advanced Fleet" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Advanced Fleet
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Modern, high-performance tankers built to meet strict industry and safety standards.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ocean freight/102.png" alt="Global Reach" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Global Reach
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Seamless logistics coordination for timely deliveries across international markets.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ocean freight/105.png" alt="Sustainability Focus" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Sustainability Focus
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Committed to eco-friendly operations, reducing environmental impact.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ocean freight/106.png" alt="Dedicated Support" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Dedicated Support
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                24/7 customer assistance and expert guidance throughout the shipping process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Tankers" link="/ocean-freight-forms" />
            <FAQSearch category="tankers-in-ocean-freight" />
        </main>
    );
}
