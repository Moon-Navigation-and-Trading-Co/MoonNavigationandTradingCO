"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function DockingPage() {
    const t = useTranslations("docking");

    return (
        <main className="flex flex-col items-center w-full px-4 py-12 max-w-7xl mx-auto">
            {/* Our Docking Services Header */}
            <section className="w-full max-w-7xl mb-12">
                <h1 className="text-2xl md:text-3xl  text-[#3b5c8c] mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Our Docking Services
                </h1>
                <p className="text-muted-foreground max-w-7xl text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    At Moon Navigation and Trading Co., we specialize in delivering secure, efficient, and professionally coordinated docking services for all port terminals. We handle berthing, major arrivals, emergency situations, and operations from various safe handling, terminal situations, and complete assistance with short and medium-term berthing. <br /><br />
                    We tailor our docking solutions to meet the needs of each vessel, ensuring smooth operations from arrival to departure.
                </p>
            </section>

            {/* Port Docking and Berthing Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                        <Image
                            src="/lm-docking-1.jpg"
                            alt="Docking and berthing of ships at port"
                            width={400}
                            height={250}
                            className="object-cover rounded-[60px]"
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl  text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        1. Port Docking and Berthing
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        We manage all aspects of vessel berthing at port terminals, ensuring precise coordination with port authorities and terminal operators. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Advance berth reservation and scheduling</li>
                        <li>Tug and pilot coordination for safe maneuvering</li>
                        <li>Mooring and unmooring operations</li>
                        <li>Onshore support services during berthing periods</li>
                    </ul>
                </div>
            </section>

            {/* Dry Docking Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col gap-2 order-2 md:order-1">
                    <h2 className="text-xl md:text-2xl  text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        2. Dry Docking (Scheduled Repairs and Overhauls)
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        We coordinate full scale dry docking operations for vessels requiring scheduled inspection, structural maintenance, or major repairs.
                        <br />
                        <span className="font-semibold">Our Services Include:</span>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Hull inspections, steel renewal, and surface treatment</li>
                        <li>Propeller and rudder repairs</li>
                        <li>Ballast tank maintenance and refitting supervision</li>
                        <li>Class survey preparation and technical supervision</li>
                        <li>Close collaboration with certified dry dock facilities</li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                        <Image
                            src="/lm-docking-2.jpg"
                            alt="Dry docking of ship for repairs"
                            width={400}
                            height={250}
                            className="object-cover rounded-[60px]"
                        />
                    </div>
                </div>
            </section>

            {/* Wet Docking Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                        <Image
                            src="/lm-docking-3.jpg"
                            alt="Wet docking and afloat repairs"
                            width={400}
                            height={250}
                            className="object-cover rounded-[60px]"
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl  text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        3. Wet Docking (Afloat Repairs and Onboard Servicing)
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        For vessels that don&#39;t require full dry docking, we offer wet docking (afloat repairs) to reduce operational disruption and cost.
                        <br />
                        <span className="font-semibold">Our Services Include:</span>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Onboard mechanical and electrical system repairs</li>
                        <li>Hull cleaning, painting, and coating without dry docking</li>
                        <li>Tank cleaning, painting, and coating without dry docking</li>
                        <li>Supply of spares, tools, and consumables directly onboard</li>
                    </ul>
                </div>
            </section>

            {/* Anchorage Services Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col gap-2 order-2 md:order-1">
                    <h2 className="text-xl md:text-2xl  text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        4. Anchorage Services (Offshore Support and Repairs)
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        We provide anchorage support for vessels requiring offshore services or awaiting port entry. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Core charge arrangements and launch boat support</li>
                        <li>Offshore delivery of spares, parts, provisions, and support</li>
                        <li>In situ inspections and afloat maintenance operations</li>
                        <li>Emergency supplies and medical support coordination</li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                        <Image
                            src="/lm-docking-4.jpg"
                            alt="Anchorage support and offshore repairs"
                            width={400}
                            height={250}
                            className="object-cover rounded-[60px]"
                        />
                    </div>
                </div>
            </section>

            {/* Emergency Docking & Salvage Operations Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden p-2 max-w-7xl">
                        <Image
                            src="/lm-docking-5.jpg"
                            alt="Emergency docking and salvage operations"
                            width={400}
                            height={250}
                            className="object-cover rounded-[60px]"
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl  text-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        5. Emergency Docking and Salvage Operations
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Our team is equipped to respond swiftly to emergency situations requiring immediate docking or vessel recovery. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Rapid coordination for emergency, berthing, and repair access</li>
                        <li>Support for salvage operations and accident investigation</li>
                        <li>Technical assistance for grounding, collision, or machinery failure incidents</li>
                        <li>Mobilization of specialized service providers and emergency response teams</li>
                    </ul>
                </div>
            </section>
            <GetQuoteComponent topic = "Docking and Maintenance" link = "/ship-maintenance-forms"/> 
            <FAQSearch category="docking-maintenance" />    
        </main>
    );
}
