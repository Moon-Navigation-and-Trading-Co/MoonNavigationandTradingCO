"use client";

import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";  
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Wrench, Settings, Zap, Fuel, Leaf, Shield, Award } from "lucide-react";

export default function MaintenancePage() {
    const maintenanceServices = [
        {
            icon: <Image src="/icons/other services/61.png" alt="Hull and Structural Maintenance" width={48} height={48} className="w-12 h-12" />,
            title: "Hull and Structural Maintenance",
            description: "Professional hull care and structural upkeep ensuring vessel integrity and seaworthiness through cleaning, coating, and steel renewal."
        },
        {
            icon: <Image src="/icons/other services/62.png" alt="Engine and Mechanical Repairs" width={48} height={48} className="w-12 h-12" />,
            title: "Engine and Mechanical Repairs",
            description: "Skilled engineering diagnostics and repairs for main engines, auxiliary systems, and propulsion equipment with vibration monitoring."
        },
        {
            icon: <Image src="/icons/other services/63.png" alt="Electrical and Automation Services" width={48} height={48} className="w-12 h-12" />,
            title: "Electrical and Automation Services",
            description: "Comprehensive electrical system maintenance including generators, navigation systems, automation, and monitoring equipment."
        },
        {
            icon: <Image src="/icons/other services/64.png" alt="Bunkering and Fuel System Maintenance" width={48} height={48} className="w-12 h-12" />,
            title: "Bunkering and Fuel System Maintenance",
            description: "Complete fuel system care including line inspection, filter maintenance, and leak detection for optimal efficiency."
        },
        {
            icon: <Image src="/icons/other services/65.png" alt="Waste Management and Environmental Compliance" width={48} height={48} className="w-12 h-12" />,
            title: "Waste Management and Environmental Compliance",
            description: "MARPOL-compliant waste handling solutions including sludge disposal, garbage management, and environmental reporting."
        },
        {
            icon: <Image src="/icons/other services/66.png" alt="Safety Equipment Servicing" width={48} height={48} className="w-12 h-12" />,
            title: "Safety Equipment Servicing",
            description: "Comprehensive safety equipment maintenance including lifeboats, fire systems, and personal protective equipment."
        }
    ];

    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Our Maintenance Services Header */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Maintenance Services</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Our Maintenance Services
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    At Moon Navigation and Trading Co., we deliver dependable vessel maintenance services to ensure ships operate at peak performance while maintaining full compliance with international safety and environmental standards. From preventive care to urgent repairs, our expert teams provide comprehensive support tailored to your vessel's operational requirements.
                                </p>
                                
                                <p className="text-base text-gray-600 leading-relaxed">
                                    We combine technical expertise with efficient service execution to minimize downtime and enhance vessel reliability.
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

            {/* Hull & Structural Maintenance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Hull & Structural</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                1. Hull and Structural Maintenance
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We ensure the integrity and seaworthiness of your vessel through professional hull care and structural upkeep. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Hull surface cleaning, blasting, and coating (anti-corrosion, anti-fouling)</li>
                                <li>Structural steel renewal and welding</li>
                                <li>Tank maintenance and recoating (ballast tanks, fuel tanks, sewage tanks)</li>
                                <li>Deck distortion rectification and hatch cover repairs</li>
                                <li>Superstructure touch-ups and weather deck coating</li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-1.jpg" alt="Hull maintenance on vessel" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engine & Mechanical Repairs Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-2.jpg" alt="Engine and mechanical repairs" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Engine & Mechanical</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                2. Engine and Mechanical Repairs
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Our skilled engineers perform thorough diagnostics and repairs for a wide range of engine and mechanical systems. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Main and auxiliary engine maintenance</li>
                                <li>Overhaul of pumps, compressors, and valves</li>
                                <li>Propulsion system repairs and shaft work</li>
                                <li>Fuel injection system and lubrication checks</li>
                                <li>Alignment, stabilization, and vibration monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Electrical & Automation Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Electrical & Automation</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                3. Electrical and Automation Services
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We maintain and troubleshoot your vessel's electrical and automation infrastructure for safe and efficient operation. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Generator and distribution board servicing</li>
                                <li>Navigation light systems wiring</li>
                                <li>Automation (PLC, ICS, systems, and sensors)</li>
                                <li>Alarm and monitoring systems</li>
                                <li>Electrical cable repairs and system testing</li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-3.jpg" alt="Electrical and automation services" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bunkering & Fuel System Maintenance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-4.jpg" alt="Bunkering and fuel system maintenance" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Fuel Systems</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                4. Bunkering and Fuel System Maintenance
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Proper fuel system maintenance is key to vessel efficiency and compliance. We ensure fuel delivery systems are operating smoothly. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Fuel line inspection and cleaning</li>
                                <li>Filters and separator maintenance</li>
                                <li>Piping and manifold maintenance</li>
                                <li>Tank air conditioning and testing</li>
                                <li>Leak detection and preventive maintenance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Waste Management & Environmental Compliance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Environmental</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                5. Waste Management and Environmental Compliance
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We help you meet international marine pollution (MARPOL) standards with effective waste handling solutions. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>On-site waste reception services</li>
                                <li>Sludge and bilge water disposal</li>
                                <li>Garbage and sewage management</li>
                                <li>Environmental waste reporting</li>
                                <li>Support for port state control inspections</li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-5.jpg" alt="Waste management and environmental compliance" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Equipment Servicing Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-6.jpg" alt="Safety equipment servicing" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Safety Equipment</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                6. Safety Equipment Servicing
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Your crew's safety is non-negotiable—we ensure all life-saving appliances and firefighting equipment are fully operational. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Lifeboat and life raft inspection and maintenance</li>
                                <li>Fire extinguisher refilling and servicing</li>
                                <li>Fire detection and suppression systems testing</li>
                                <li>Personal protective equipment (PPE) inventory checks</li>
                                <li>Certification support and compliance records</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Docking and Maintenance" link="/ship-maintenance-forms"/> 
            <FAQSearch category="docking-maintenance" />    
        </main>
    );
}
