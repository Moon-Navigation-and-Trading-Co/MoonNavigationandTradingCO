"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Award, Users, Settings, Package, Clock, Shield } from "lucide-react";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function DockingAndMaintenance() {
    const [activeTab, setActiveTab] = useState("overview");

    const reasonsToChoose = [
        {
            icon: <Image src="/icons/other services/49.png" alt="Expert Technical Team" width={48} height={48} className="w-12 h-12" />,
            title: "Expert Technical Team",
            description: "Our certified engineers and marine technicians deliver high-quality maintenance and repair services aligned with international standards."
        },
        {
            icon: <Image src="/icons/other services/50.png" alt="Tailored Maintenance Solutions" width={48} height={48} className="w-12 h-12" />,
            title: "Tailored Maintenance Solutions",
            description: "Customized service plans based on vessel condition and voyage schedule to ensure optimal performance and cost-efficiency."
        },
        {
            icon: <Image src="/icons/other services/51.png" alt="Integrated Services" width={48} height={48} className="w-12 h-12" />,
            title: "Integrated Services",
            description: "From ship agency support to spare parts logistics, we handle everything needed during your vessel's stay in port."
        },
        {
            icon: <Image src="/icons/other services/52.png" alt="24/7 Availability" width={48} height={48} className="w-12 h-12" />,
            title: "24/7 Availability",
            description: "We offer around-the-clock support to minimize delays and keep your vessel on schedule."
        },
        {
            icon: <Image src="/icons/other services/53.png" alt="Reliable & Transparent" width={48} height={48} className="w-12 h-12" />,
            title: "Reliable & Transparent",
            description: "Clear communication, detailed reporting, and transparent pricing throughout the entire maintenance process."
        }
    ];

    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: "Raleway, sans-serif" }}>
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
                            src="/lm-docking-1.jpg"
                            alt="Docking and Maintenance Hero"
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
                            <span className="text-white/90 text-sm font-medium">Docking and Maintenance Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Docking and<br />Maintenance
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Professional vessel inspection, repairs, and maintenance services ensuring safety, efficiency, and maritime compliance
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/vessel-support-maintenance-forms">
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
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Docking and Maintenance</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Docking and Maintenance?
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Docking is the process of bringing a ship into a dock for inspection, repairs, or maintenance. This includes dry docking, where the vessel is removed from the water to examine hulls and undertake repairs that would be hard to access in normal shipping and port operations.
                                </p>
                                
                                <p className="text-base text-gray-600 leading-relaxed">
                                    While maintenance involves the regular upkeep and repair of vessels to guarantee safety, efficiency, and compliance with maritime regulations. This encompasses scheduled work such as engine and hull inspections, painting, cleaning, and replacement or repair of worn-out components. All of which are crucial to maintaining safe operations and compliance.
                                </p>
                                
                                <p className="text-base text-gray-600 leading-relaxed">
                                    At Moon Navigation and Trading Co., we uphold the highest safety standards throughout our docking and maintenance services. Our experienced team ensures that every vessel receives the best possible attention for effective results. We prevent accidents, extend the operating period of the fleet through our dedication to superior service and reliability.
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

            {/* Tab Switcher */}
            <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "overview"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab("docking")}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "docking"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        Docking
                    </button>
                    <button
                        onClick={() => setActiveTab("maintenance")}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeTab === "maintenance"
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        Maintenance
                    </button>
                </div>

                {/* Overview Tab */}
                {activeTab === "overview" && (
                    <div className="space-y-8">
                        {/* Vessel Types Section */}
                        <div className="w-full">
                            <h2 className="text-lg md:text-xl font-semibold text-primary mb-4">
                                We serve a wide range of vessels, including:
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Cargo Ships & Container Vessels</li>
                                <li>Bulk Carriers & Tankers</li>
                                <li>Offshore Support Vessels (OSVs)</li>
                                <li>Fishing Vessels & Research Ships</li>
                                <li>Passenger & Cruise Ships</li>
                                <li>Tugboats & Barges</li>
                            </ul>
                        </div>

                        {/* Services Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Docking Services</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Comprehensive docking solutions including berth reservation, dry docking, wet docking, anchorage services, and emergency docking support.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                                        <li>Port Docking & Berthing</li>
                                        <li>Dry Docking (Scheduled Repairs)</li>
                                        <li>Wet Docking (Afloat Repairs)</li>
                                        <li>Anchorage Services</li>
                                        <li>Emergency Docking & Salvage</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Maintenance Services</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Complete vessel maintenance services ensuring operational efficiency, compliance, and extended asset life.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                                        <li>Hull & Structural Maintenance</li>
                                        <li>Engine & Mechanical Repairs</li>
                                        <li>Electrical & Automation Services</li>
                                        <li>Bunkering & Fuel System Maintenance</li>
                                        <li>Waste Management & Environmental Compliance</li>
                                        <li>Safety Equipment Servicing</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Docking Tab */}
                {activeTab === "docking" && (
                    <div className="space-y-8">
                        {/* Docking Services Section */}
                        <div className="w-full py-8 bg-secondary rounded-lg">
                            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                                        Our Docking Services
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        At Moon Navigation and Trading Co., we specialize in delivering secure, efficient, and well-coordinated docking services at major ports. Our docking solutions include:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                                        <li>Berth Reservation & Port Entry</li>
                                        <li>Dry Docking (Technical Repairs & Overhauls)</li>
                                        <li>Wet Docking (Afloat Repairs & Onboard Servicing)</li>
                                        <li>Anchorage Services (Offshore Support & Bunkers)</li>
                                        <li>Emergency Docking & Salvage Operations</li>
                                    </ol>
                                </div>
                                {/* Image */}
                                <div className="flex justify-center md:justify-end">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ background: "#2D3A7B", padding: "24px" }}>
                                        <div className="relative w-[340px] h-[200px] md:w-[400px] md:h-[240px] rounded-xl overflow-hidden bg-background">
                                            <Image
                                                src="/D1.png"
                                                alt="Our Docking Services - Docked ship with cranes and workers"
                                                fill
                                                className="object-cover"
                                                style={{ borderRadius: "12px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Docking Solutions Section */}
                        <div className="w-full py-8 bg-background rounded-lg">
                            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Image */}
                                <div className="flex justify-center md:justify-start">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ background: "#3B4B8A", padding: "18px" }}>
                                        <div className="relative w-[320px] h-[180px] md:w-[400px] md:h-[220px] rounded-xl overflow-hidden bg-background">
                                            <Image
                                                src="/D2.png"
                                                alt="Our Docking Solutions - Docked ship with cranes and workers"
                                                fill
                                                className="object-cover"
                                                style={{ borderRadius: "12px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Text Content */}
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                                        Our Docking Solutions
                                    </h2>
                                    <p className="text-muted-foreground mb-4">
                                        We provide expert docking services to ensure vessel integrity, performance, and regulatory compliance during scheduled and emergency docking operations.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
                                        <li>
                                            <span className="font-semibold text-foreground">Dry Docking Planning:</span> Technical inspection, budgeting, and detailed pre-docking documentation for every vessel.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Dockyard Coordination:</span> Liaison with trusted worldwide shipyards to ensure smooth & efficient dockyard operations.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Repair & Maintenance Oversight:</span> Supervision of hull cleaning, painting, steel renewal, and equipment upgrades.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Regulatory Compliance:</span> Coordination for safety status, statutory inspections, and compliance with class & flag state regulations.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Project Management:</span> End-to-end planning to ensure deadlines, quality, costs, and safety standards are met.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Wet Docking (Afloat Repairs):</span> Onsite maintenance of essential work, inspections, and testing during port berths/anchorage.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Floating Docking Services:</span> Docking solutions for specific vessel needs or operational needs at select international ports.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Emergency Docking Support:</span> Rapid mobilization and support for unscheduled dockings to limit downtime such as grounding, collision, or system failure.
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <Button asChild>
                                            <Link href="/learn/docking/docking">
                                                Learn more
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Maintenance Tab */}
                {activeTab === "maintenance" && (
                    <div className="space-y-8">
                        {/* Maintenance Services Section */}
                        <div className="w-full py-8 bg-background rounded-lg">
                            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                                        Our Maintenance Services
                                    </h2>
                                    <p className="text-muted-foreground mb-4">
                                        At Moon Navigation and Trading Co., our vessel maintenance services ensure ships remain operational, compliant, and efficient. Our maintenance solutions include:
                                    </p>
                                    <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
                                        <li>
                                            <span className="font-semibold text-foreground">Hull & Structure Maintenance</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Engine and Mechanical Repairs</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Structural & Automation Services</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Plumbing & Fuel System Maintenance</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Waste Management & Environmental Compliance</span>
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Safety Equipment Servicing</span>
                                        </li>
                                    </ol>
                                </div>
                                {/* Image Content */}
                                <div className="flex justify-center items-center">
                                    <div className="relative w-full max-w-7xl">
                                        <div className="absolute top-4 left-0 w-full h-full bg-primary rounded-lg -z-10" style={{ height: "90%", width: "90%" }}></div>
                                        <Image
                                            src="/M1.png"
                                            alt="Our Maintenance Services - Maintenance crew working on vessel"
                                            fill
                                            className="rounded-lg object-cover"
                                            style={{ minHeight: "250px", maxHeight: "340px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Maintenance Solutions Section */}
                        <div className="w-full py-8 bg-secondary rounded-lg">
                            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Text Content */}
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                                        Our Maintenance Solutions
                                    </h2>
                                    <p className="text-muted-foreground mb-6">
                                        We deliver comprehensive maintenance solutions to ensure vessels operate at peak performance, reduce downtime, and extend asset life.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
                                        <li>
                                            <span className="font-semibold text-foreground">Preventive Maintenance:</span> Scheduled upkeep of machinery, systems, and onboard equipment to avoid breakdowns and optimize reliability.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Corrective Maintenance:</span> Rapid response to technical faults or malfunctions, minimizing operational disruption.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Condition-Based Monitoring:</span> Use of diagnostic tools and performance trackers to identify early signs of wear or system deterioration.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Machinery Overhauls:</span> Full servicing and overhaul of engines, pumps, generators, and other critical systems.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Hull & Structural Maintenance:</span> Regular inspections; coating renewal; and corrosion control for structural reliability.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Electrical & Automation Solutions:</span> Maintenance and calibration of power systems, navigation aids, and onboard electronics.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Maintenance Records & Reporting:</span> Detailed logs and documentation of maintenance activities to support audits, compliance, and long-term planning.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-foreground">Spare Parts Inventory Support:</span> Coordination for timely sourcing and supply of spare parts and consumables.
                                        </li>
                                    </ul>
                                    <div className="mt-8">
                                        <Button asChild>
                                            <Link href="/learn/docking/maintenance">
                                                Learn more
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                {/* Image Content */}
                                <div className="flex justify-center items-center">
                                    <div className="relative w-full max-w-7xl">
                                        <div className="absolute top-4 left-0 w-full h-full bg-primary rounded-lg -z-10" style={{ height: "90%", width: "90%" }}></div>
                                        <Image
                                            src="/M2.png"
                                            alt="Our Maintenance Solutions - Two maintenance workers discussing with a tablet"
                                            fill
                                            className="rounded-lg object-cover"
                                            style={{ minHeight: "250px", maxHeight: "340px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Reasons to Choose Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Docking and Maintenance Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Reasons to Choose Moon Navigation and Trading Co. for Your Docking and Maintenance
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Expert technical team with tailored maintenance solutions and integrated services for comprehensive vessel care.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* First Row: 3 items */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/49.png" alt="Expert Technical Team" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Expert Technical Team
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our certified engineers and marine technicians deliver high-quality maintenance and repair services aligned with international standards.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/50.png" alt="Tailored Maintenance Solutions" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Tailored Maintenance Solutions
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Customized service plans based on vessel condition and voyage schedule to ensure optimal performance and cost-efficiency.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/51.png" alt="Integrated Services" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Integrated Services
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                From ship agency support to spare parts logistics, we handle everything needed during your vessel&apos;s stay in port.
                            </p>
                        </div>
                    </div>

                    {/* Second Row: 2 items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/52.png" alt="24/7 Availability" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                24/7 Availability
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We offer around-the-clock support to minimize delays and keep your vessel on schedule.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/other services/53.png" alt="Reliable & Transparent" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Reliable & Transparent
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Clear communication, detailed reporting, and transparent pricing throughout the entire maintenance process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 relative">
                    {/* Left: Text Content */}
                    <div className="flex-1 min-w-[260px]">
                        <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Get your Quote with Us
                        </h2>
                        <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our Docking and Maintenance quotation process is designed for your convenience. At
                            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
                            Quotation by Request system. Simply fill out our short form to initiate your request. Once
                            submitted, our team promptly reviews the information and selects the best consolidation
                            options. You will receive a customized quotation directly in your email, ensuring accurate
                            pricing
                        </p>
                        <Button asChild>
                            <Link href="/vessel-support-maintenance-forms">
                                Request a Quote
                            </Link>
                        </Button>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
                        <Image
                            src="/quote-illustration.png"
                            alt="Quotation illustration"
                            width={380}
                            height={320}
                            className="w-[320px] h-auto object-contain"
                            style={{ maxWidth: 380 }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
} 