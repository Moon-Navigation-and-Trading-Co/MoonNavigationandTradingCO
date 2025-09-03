"use client";

import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";  
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Wrench, Settings, Zap, Fuel, Leaf, Shield } from "lucide-react";

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
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h1 className="text-2xl md:text-3xl text-[#3b5c8c] mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Our Maintenance Services
                </h1>
                <p className="text-muted-foreground max-w-7xl text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    At Moon Navigation and Trading Co., we deliver dependable vessel maintenance services to ensure ships operate at peak performance while maintaining full compliance with international safety and environmental standards. From preventive care to urgent repairs, our expert teams provide comprehensive support tailored to your vessel&apos;s operational requirements.<br /><br />
                    We combine technical expertise with efficient service execution to minimize downtime and enhance vessel reliability.
                </p>
            </section>

            {/* Hull & Structural Maintenance Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                            <Image
                                src="/m-1.jpg"
                                alt="Hull maintenance on vessel"
                                width={400}
                                height={250}
                                className="object-cover rounded-[60px]"
                            />
                        </div>
                    </div>
                    {/* Right: Text Content */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="text-xl md:text-2xl text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            1. Hull and Structural Maintenance
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We ensure the integrity and seaworthiness of your vessel through professional hull care and structural upkeep. Our services include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                            <li>Hull surface cleaning, blasting, and coating (anti-corrosion, anti-fouling)</li>
                            <li>Structural steel renewal and welding</li>
                            <li>Tank maintenance and recoating (ballast tanks, fuel tanks, sewage tanks)</li>
                            <li>Deck distortion rectification and hatch cover repairs</li>
                            <li>Superstructure touch-ups and weather deck coating</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Engine & Mechanical Repairs Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col gap-2 order-2 md:order-1">
                        <h2 className="text-xl md:text-2xl text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            2. Engine and Mechanical Repairs
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our skilled engineers perform thorough diagnostics and repairs for a wide range of engine and mechanical systems. Our services include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                            <li>Main and auxiliary engine maintenance</li>
                            <li>Overhaul of pumps, compressors, and valves</li>
                            <li>Propulsion system repairs and shaft work</li>
                            <li>Fuel injection system and lubrication checks</li>
                            <li>Alignment, stabilization, and vibration monitoring</li>
                        </ul>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                        <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                            <Image
                                src="/m-2.jpg"
                                alt="Engine and mechanical repairs"
                                width={400}
                                height={250}
                                className="object-cover rounded-[60px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Electrical & Automation Services Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                            <Image
                                src="/m-3.jpg"
                                alt="Electrical and automation services"
                                width={400}
                                height={250}
                                className="object-cover rounded-[60px]"
                            />
                        </div>
                    </div>
                    {/* Right: Text Content */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="text-xl md:text-2xl text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            3. Electrical and Automation Services
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We maintain and troubleshoot your vessel&apos;s electrical and automation infrastructure for safe and efficient operation. Our services include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                            <li>Generator and distribution board servicing</li>
                            <li>Navigation light systems wiring</li>
                            <li>Automation (PLC, ICS, systems, and sensors)</li>
                            <li>Alarm and monitoring systems</li>
                            <li>Electrical cable repairs and system testing</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Bunkering & Fuel System Maintenance Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col gap-2 order-2 md:order-1">
                        <h2 className="text-xl md:text-2xl text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            4. Bunkering and Fuel System Maintenance
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Proper fuel system maintenance is key to vessel efficiency and compliance. We ensure fuel delivery systems are operating smoothly.<br />
                            <span className="font-medium">Our services include:</span>
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                            <li>Fuel line inspection and cleaning</li>
                            <li>Filters and separator maintenance</li>
                            <li>Piping and manifold maintenance</li>
                            <li>Tank air conditioning and testing</li>
                            <li>Leak detection and preventive maintenance</li>
                        </ul>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                        <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                            <Image
                                src="/m-4.jpg"
                                alt="Bunkering and fuel system maintenance"
                                width={400}
                                height={250}
                                className="object-cover rounded-[60px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Waste Management & Environmental Compliance Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="flex-1 flex justify-center md:justify-start">
                        <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                            <Image
                                src="/m-5.jpg"
                                alt="Waste management and environmental compliance"
                                width={400}
                                height={250}
                                className="object-cover rounded-[60px]"
                            />
                        </div>
                    </div>
                    {/* Right: Text Content */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="text-xl md:text-2xl text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            5. Waste Management and Environmental Compliance
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We help you meet international marine pollution (MARPOL) standards with effective waste handling solutions.<br />
                            <span className="font-medium">Our services include:</span>
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                            <li>On-site waste reception services</li>
                            <li>Sludge and bilge water disposal</li>
                            <li>Garbage and sewage management</li>
                            <li>Environmental waste reporting</li>
                            <li>Support for port state control inspections</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Safety Equipment Servicing Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Text Content */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="text-xl md:text-2xl text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            6. Safety Equipment Servicing
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Your crew's safety is non-negotiable—we ensure all life-saving appliances and firefighting equipment are fully operational.
                            <br />
                            <span className="font-medium">Our services include:</span>
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                            <li>Lifeboat and life raft inspection and maintenance</li>
                            <li>Fire extinguisher refilling and servicing</li>
                            <li>Fire detection and suppression systems testing</li>
                            <li>Personal protective equipment (PPE) inventory checks</li>
                            <li>Certification support and compliance records</li>
                        </ul>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                            <Image
                                src="/m-6.jpg"
                                alt="Safety equipment servicing"
                                width={400}
                                height={250}
                                className="object-cover rounded-[60px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Maintenance Services Overview */}
            <ReasonsGridUniversal
                title="Comprehensive Maintenance Services Overview"
                subheading="Professional vessel maintenance solutions ensuring safety, efficiency, and regulatory compliance across all vessel systems."
                reasons={maintenanceServices}
                layout="3-3"
            />

            <GetQuoteComponent topic="Docking and Maintenance" link="/ship-maintenance-forms"/> 
            <FAQSearch category="docking-maintenance" />    
        </main>
    );
}
