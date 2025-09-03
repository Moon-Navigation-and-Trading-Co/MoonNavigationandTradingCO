"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import RequestQuoteButton from "@/components/RequestQuoteButton" 
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import Image from "next/image";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

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
                            src="/heavy-lift-cargo-banner.jpg"
                            alt="Heavy Lift Cargo Hero"
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
                            <span className="text-white/90 text-sm font-medium">Heavy Lift Cargo Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Heavy Lift<br />Cargo
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Ultra-heavy and oversized items requiring specialized lifting equipment and heavy lift vessels for safe transportation
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/container-services-forms">
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

            {/* What is Heavy Lift Cargo? Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Heavy Lift Cargo</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            What is Heavy Lift Cargo?
                        </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                            Heavy cargo consists of ultra-heavy and oversized items that often exceed 100 metric tons per unit. These loads require specialized lifting equipment, such as hydraulic cranes or floating cranes, to ensure safe and efficient handling. Heavy lift cargo is typically transported on heavy lift vessels (HLVs) designed specifically for this purpose. Common examples of heavy lift cargo include oil rigs, wind turbines, large machinery, and power transformers.
                        </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                            At Moon Navigation and Trading Co., we specialize in the transportation of heavy lift cargo, leveraging our extensive expertise and cutting-edge equipment to manage the complexities involved. Our dedicated team is committed to providing tailored solutions that prioritize safety, efficiency, and compliance with industry regulations, ensuring that your heavy cargo is delivered on time and in optimal condition. Trust us to be your reliable partner for all heavy lift transportation needs.
                        </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Features Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Common Features</span>
            </div>

                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                    Common Features of Heavy Lift Cargo
                </h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image */}
                    <div className="order-2 lg:order-1">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/heavy-lift-cargo-features.jpg"
                            alt="Common Features of Heavy Lift Cargo"
                                fill
                                className="object-cover"
                            priority
                        />
                        </div>
                    </div>
                    
                    {/* Right: Features Grid */}
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                <h3 className="text-lg font-light text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Weight</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                We specialize in the transportation of heavy lift cargo, managing items that typically weigh several tons, including industrial machinery, transformers, turbines, and construction equipment.
                            </p>
                        </div>
                            
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                <h3 className="text-lg font-light text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Dimensions</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                Our expertise encompasses handling oversized cargo that often exceeds standard container dimensions, utilizing flat racks, open-top containers, and breakbulk methods.
                            </p>
                        </div>
                            
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                <h3 className="text-lg font-light text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Special Handling</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                Our operations involve the use of cranes, lifting frames, and other heavy-duty machinery to ensure safe, precise, and efficient loading and unloading of cargo.
                            </p>
                        </div>
                            
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                <h3 className="text-lg font-light text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Custom Routing</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    We develop tailored routing solutions that account for the ship's capacity and port infrastructure, ensuring seamless transport of heavy lift cargo.
                            </p>
                        </div>
                            
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 md:col-span-2">
                                <h3 className="text-lg font-light text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Safety Compliance</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                The transportation of heavy lift cargo mandates strict adherence to safety and regulatory guidelines to ensure the security of the cargo and personnel involved.
                            </p>
                                </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Examples Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Heavy Lift Examples</span>
            </div>

                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                    Examples of Heavy Lift Cargo
                </h2>
                        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Our HeavyLift services handle various types of equipment, including specialized transportation for renewable energy infrastructure components, heavy machinery, and critical infrastructure.
                </p>
                    </div>
                
                    <div className="relative w-full max-w-7xl mx-auto">
                    {/* Left Arrow */}
                    <button 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        onClick={() => {
                            const container = document.getElementById('examples-carousel');
                            if (container) {
                                    container.scrollBy({ left: -400, behavior: 'smooth' });
                            }
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        onClick={() => {
                            const container = document.getElementById('examples-carousel');
                            if (container) {
                                    container.scrollBy({ left: 400, behavior: 'smooth' });
                            }
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div 
                        id="examples-carousel"
                            className="overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                            <div className="flex gap-8 min-w-max">
                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0">
                                    <div className="h-48 relative">
                            <Image
                                        src="/heavy-wind-turbine.jpg"
                                alt="Wind turbines and blades"
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                                </div>
                                    <div className="p-6">
                                        <h3 className="font-medium text-base mb-3 text-gray-900">Wind turbines and blades</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">Specialized transportation for renewable energy infrastructure components.</p>
                            </div>
                        </div>

                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0">
                                    <div className="h-48 relative">
                            <Image
                                        src="/heavy-industrial-press.jpg"
                                alt="Industrial presses"
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                                </div>
                                    <div className="p-6">
                                        <h3 className="font-medium text-base mb-3 text-gray-900">Industrial presses</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">Heavy machinery and manufacturing equipment transportation.</p>
                            </div>
                        </div>

                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0">
                                    <div className="h-48 relative">
                            <Image
                                        src="/heavy-power-plant.jpg"
                                alt="Power plant components"
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                                </div>
                                    <div className="p-6">
                                        <h3 className="font-medium text-base mb-3 text-gray-900">Power plant components</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">Critical infrastructure components for energy generation facilities.</p>
                            </div>
                        </div>

                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0">
                                    <div className="h-48 relative">
                            <Image
                                        src="/heavy-oil-gas.jpg"
                                alt="Oil and gas equipment"
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                                </div>
                                    <div className="p-6">
                                        <h3 className="font-medium text-base mb-3 text-gray-900">Oil and gas equipment</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">Specialized equipment for petroleum and natural gas operations.</p>
                            </div>
                        </div>

                                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0">
                                    <div className="h-48 relative">
                            <Image
                                        src="/heavy-yacht.jpg"
                                alt="Large yachts/ Vessels"
                                            fill 
                                            className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                                </div>
                                    <div className="p-6">
                                        <h3 className="font-medium text-base mb-3 text-gray-900">Large yachts/ Vessels</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">Luxury vessels and maritime transportation solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom scrollbar styles */}
                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Key Features</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Key Features of Our Heavy Lift Cargo at Moon Navigation and Trading Co.
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-blue-600 text-2xl font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Ultra-Heavy & Oversized</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Heavy lift cargo consists of units that are too heavy or large for conventional shipping methods, requiring specialized solutions and equipment.
                            </p>
                        </div>
                        
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-blue-600 text-2xl font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Specialized Lifting Equipment Required</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The handling of heavy lift cargo necessitates the use of cranes with extreme load capacities and hydraulic lifting systems for efficient and safe operations.
                            </p>
                        </div>
                        
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-blue-600 text-2xl font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Transported on Heavy Lift Vessels (HLVs)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Heavy lift vessels are equipped with integrated cranes capable of lifting hundreds to thousands of tons, ensuring safe and secure transport of oversized cargo.
                            </p>
                        </div>
                        
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-blue-600 text-2xl font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Complex Loading & Unloading Operations</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Heavy lift operations employ precise lifting techniques, often using floating, rolling, or modular transporters for seamless loading and unloading processes.
                            </p>
                        </div>
                        
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-blue-600 text-2xl font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Used in Large-Scale Industrial Projects</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Heavy lift cargo is commonly used in sectors such as oil and gas, energy, mining, and infrastructure, where Moon Navigation and Trading Co.'s expertise provides optimal logistics solutions.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <p className="text-gray-700 text-center text-lg leading-relaxed">
                            At Moon Navigation and Trading Co., we are dedicated to providing tailored heavy lift transportation solutions that meet the unique demands of each project, ensuring safety, efficiency, and reliability in every shipment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-right space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Our Services</span>
            </div>

                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                    Our Heavy Lift Cargo Services—At Moon Navigation and Trading Co.
                </h2>
                </div>
                
                {/* Heavy Lift Vessel Chartering */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Vessel Chartering</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Heavy Lift Vessel Chartering
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                            Heavy lift cargo requires specialized vessels designed to handle oversized and overweight shipments. We provide access to:
                        </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Semi-Submersible Vessels:</span>
                                        <span className="text-gray-600"> For extremely heavy and voluminous cargo such as oil rigs and large industrial components.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Heavy Lift Vessels:</span>
                                        <span className="text-gray-600"> Equipped with onboard cranes capable of lifting hundreds to thousands of metric tons.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Deck Barges & Ro-Ro Ships:</span>
                                        <span className="text-gray-600"> For heavy industrial equipment, machinery, and vehicles.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                            Our vessel chartering solutions are tailored to your cargo weight, dimensions, and destination requirements.
                        </p>
                    </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/heavy-lift-vessel-chartering.jpg"
                            alt="Heavy Lift Vessel Chartering"
                                    fill
                                    className="object-cover"
                        />
                            </div>
                    </div>
                </div>
                    </div>
                </section>

            {/* Engineering & Load Planning Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/heavy-lift-engineer.jpg"
                            alt="Engineering and Load Planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Engineering & Planning</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Engineering & Load Planning
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Precise engineering is crucial in heavy lift cargo transport to prevent damage and ensure safety. Our services include:
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Load Distribution Analysis:</span>
                                        <span className="text-gray-600"> Ensuring even weight distribution across the vessel deck.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Cargo Lifting Plans:</span>
                                        <span className="text-gray-600"> Customized rigging and lifting procedures for each shipment.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Risk Assessments & Feasibility Studies:</span>
                                        <span className="text-gray-600"> Identifying potential hazards, restrictions, and limitations.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our engineering team ensures maximum safety and efficiency for every heavy lift shipment.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>

            {/* High-Capacity Cranes & Lifting Equipment Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Cranes & Equipment</span>
                </div>

                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                High-Capacity Cranes & Lifting Equipment
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                            We provide access to specialized lifting solutions for heavy lift cargo:
                        </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Gantry Cranes & Tower Cranes:</span>
                                        <span className="text-gray-600"> For precise positioning and lifting of heavy components.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Hydraulic Jacking Systems:</span>
                                        <span className="text-gray-600"> For controlled lifting and lowering of massive loads.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">SPMTs (Self-Propelled Modular Transporters):</span>
                                        <span className="text-gray-600"> For transporting oversized cargo on land.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                            Our equipment ensures safe and efficient handling of the most challenging heavy lift cargo.
                        </p>
                    </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/heavy-lift-cranes.jpg"
                            alt="High-Capacity Cranes and Lifting Equipment"
                                    fill
                                    className="object-cover"
                        />
                            </div>
                    </div>
                </div>
                    </div>
                </section>

            {/* Regulatory Compliance & Safety Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/heavy-lift-compliance.jpg"
                            alt="Regulatory Compliance and Safety"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Compliance & Safety</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Regulatory Compliance & Safety
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We ensure full compliance with international regulations and safety standards:
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Oversized Cargo Permits & Authorizations:</span>
                                        <span className="text-gray-600"> Securing all necessary permits and clearances.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Safety Inspections & Certifications:</span>
                                        <span className="text-gray-600"> Regular inspections and certifications of equipment and procedures.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Insurance & Risk Management:</span>
                                        <span className="text-gray-600"> Comprehensive coverage and risk mitigation strategies.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our compliance expertise ensures smooth operations and regulatory adherence.
                            </p>
                        </div>
                        </div>
                    </div>
                </section>

            {/* Route Surveys & Feasibility Studies Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Route Surveys</span>
                </div>

                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Route Surveys & Feasibility Studies
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                            Heavy lift shipments often require careful route planning to avoid transport obstacles:
                        </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Pre-Route Infrastructure Assessments:</span>
                                        <span className="text-gray-600"> Checking bridge capacities, tunnel clearances, and road strength.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Port Facilities & Equipment Availability:</span>
                                        <span className="text-gray-600"> Ensuring safe cargo transfer at destination ports.</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="font-medium text-gray-900">Alternative Transport Solutions:</span>
                                        <span className="text-gray-600"> Identifying cost-effective transport routes.</span>
                                    </div>
                                </div>
                            </div>
                            
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <p className="text-gray-700 text-center">
                                Heavy lift cargo requires precision, expertise, and advanced equipment—trust us for seamless ocean freight transport.
                            </p>
                        </div>
                    </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/heavy-lift-route-survey.jpg"
                            alt="Route Surveys and Feasibility Studies"
                                    fill
                                    className="object-cover"
                        />
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
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Why Choose Us</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
                    Reasons to Choose Our Heavy Lift Services
                </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Specialized expertise with advanced equipment and customized solutions for comprehensive heavy lift services.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* First row: 3 items */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Proven Expertise */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                            <div className="mb-6 flex justify-center items-center w-full">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src="/icons/ocean freight/85.png" alt="Proven Expertise" width={48} height={48} className="w-12 h-12 object-contain" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Proven Expertise</div>
                            <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                Years of experience handling oversized and heavy cargo with precision and reliability.
                            </div>
                        </div>

                        {/* End-to-End Solutions */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                            <div className="mb-6 flex justify-center items-center w-full">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src="/icons/ocean freight/86.png" alt="End-to-End Solutions" width={48} height={48} className="w-12 h-12 object-contain" />
                                    </div>
                    </div>
                        </div>
                            <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>End-to-End Solutions</div>
                            <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                From route planning and compliance to emergency support, we ensure seamless logistics.
                    </div>
                        </div>

                        {/* Global Reach */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                            <div className="mb-6 flex justify-center items-center w-full">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image src="/icons/ocean freight/87.png" alt="Global Reach" width={48} height={48} className="w-12 h-12 object-contain" />
                                    </div>
                    </div>
                </div>
                            <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Global Reach</div>
                            <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                Strong partnerships grant access to specialized vessels, ports, and equipment worldwide.
                            </div>
                        </div>
                    </div>

                    {/* Second row: 2 items centered */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
                            {/* Regulatory Compliance & 24/7 Support */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                                <div className="mb-6 flex justify-center items-center w-full">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <Image src="/icons/ocean freight/88.png" alt="Regulatory Compliance" width={48} height={48} className="w-12 h-12 object-contain" />
                                        </div>
                                    </div>
                                </div>
                                <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Regulatory Compliance & 24/7 Support</div>
                                <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                    Ensuring strict adherence to international safety regulations and expert assistance at every stage.
                                </div>
                            </div>

                            {/* Advanced Equipment */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                                <div className="mb-6 flex justify-center items-center w-full">
                                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <Image src="/icons/ocean freight/89.png" alt="Advanced Equipment" width={48} height={48} className="w-12 h-12 object-contain" />
                                        </div>
                                    </div>
                                </div>
                                <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Advanced Equipment</div>
                                <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                    State-of-the-art cranes, heavy lift vessels, and custom lifting gear for secure transport.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <GetQuoteComponent topic="Heavy Lift Cargo" link="/container-services-forms" />
            <FAQSearch category="heavy-lift" />
        </main>
    );
}