"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function DockingPage() {
    const t = useTranslations("docking");

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
                            src="/images/docking-berthing.jpg"
                            alt="Docking and Berthing Hero"
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
                            <span className="text-white/90 text-sm font-medium">Docking Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Our Docking<br />Services
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Secure, efficient, and professionally coordinated docking services for all port terminals, ensuring smooth operations from arrival to departure
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/docking-forms">
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

            {/* Content Section */}
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <p className="text-muted-foreground max-w-7xl mb-12">
                        At Moon Navigation and Trading Co., we specialize in delivering secure, efficient, and professionally coordinated docking services for all port terminals. We handle berthing, major arrivals, emergency situations, and operations from various safe handling, terminal situations, and complete assistance with short and medium-term berthing. <br /><br />
                        We tailor our docking solutions to meet the needs of each vessel, ensuring smooth operations from arrival to departure.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2">
                                <Image
                                    src="/images/docking-berthing.jpg"
                                    alt="Docking and berthing of ships at port"
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        {/* Service Details */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">
                                1. Port Docking &amp; Berthing
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                We manage all aspects of vessel berthing at port terminals, ensuring precise coordination with port authorities and terminal operators. Our services include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Advance berth reservation and scheduling</li>
                                <li>Tug and pilot coordination for safe maneuvering</li>
                                <li>Mooring and unmooring operations</li>
                                <li>Onshore support services during berthing periods</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dry Docking & Wet Docking Section */}
            <div className="w-full py-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Dry Docking */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-foreground">
                                2. Dry Docking (Scheduled Repairs &amp; Overhauls)
                            </h2>
                            <p className="text-muted-foreground">
                                We coordinate industry dry docking operations for vessels requiring scheduled inspection, structural maintenance, or major repairs.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-7xl">
                                <Image
                                    src="/images/dry-docking-1.jpg"
                                    alt="Dry docking of ship for repairs"
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Hull inspections, steel renewal, and surface treatment</li>
                                <li>Propeller and rudder repairs</li>
                                <li>Ballast tank maintenance and refitting supervision</li>
                                <li>Class survey preparation and technical supervision</li>
                                <li>Close collaboration with certified dry dock facilities</li>
                            </ul>
                        </div>
                        {/* Wet Docking */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-foreground">
                                3. Wet Docking (Afloat Repairs &amp; Onboard Servicing)
                            </h2>
                            <p className="text-muted-foreground">
                                For vessels that do not require full dry docking, we offer wet docking (afloat repairs) to reduce operational disruption and cost. Our services include:
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-7xl">
                                <Image
                                    src="/images/wet-docking-1.jpg"
                                    alt="Wet docking and afloat repairs"
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Onboard mechanical and electrical system repairs</li>
                                <li>Hull cleaning and underwater antifouling</li>
                                <li>Tank cleaning, painting, and coating without dry docking</li>
                                <li>Supply of spares, tools, and consumables directly onboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Anchorage Services (Offshore Support & Repairs) */}
            <div className="flex flex-col md:flex-row gap-12 items-center my-16">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-foreground">
                        4. Anchorage Services <span className="font-normal text-lg">(Offshore Support &amp; Repairs)</span>
                    </h2>
                    <p className="text-muted-foreground">
                        We provide anchorage support for vessels requiring offshore services or awaiting port entry. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Core charge arrangements and launch boat support</li>
                        <li>Offshore delivery of spares, parts, provisions, and support</li>
                        <li>In situ inspections and afloat maintenance operations</li>
                        <li>Emergency supplies and medical support coordination</li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-7xl">
                        <Image
                            src="/images/anchorage-services.jpg"
                            alt="Anchorage support and offshore repairs"
                            width={400}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Emergency Docking & Salvage Operations */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center my-16">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-foreground">
                        5. Emergency Docking &amp; Salvage Operations
                    </h2>
                    <p className="text-muted-foreground">
                        Our team is equipped to respond swiftly to emergency situations requiring immediate docking or vessel recovery. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Rapid coordination for emergency, berthing, and repair access</li>
                        <li>Support for salvage operations and accident investigation</li>
                        <li>Technical assistance for grounding, collision, or machinery failure incidents</li>
                        <li>Mobilization of specialized service providers and emergency response teams</li>
                    </ul>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-7xl">
                        <Image
                            src="/images/emergency-docking-salvage.jpg"
                            alt="Emergency docking and salvage operations"
                            width={400}
                            height={250}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <GetQuoteComponent topic="Docking and Maintenance" link="/docking-forms" />
        </main>
    );
}
