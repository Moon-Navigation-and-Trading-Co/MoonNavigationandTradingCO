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
        <main className="flex flex-col items-center w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {/* Our Docking Services Section */}
            <div className="w-full py-16 ">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl text-primary mb-6">
                        Our Docking Services
                    </h1>
                    <p className="text-muted-foreground max-w-7xl mb-12">
                        At Moon Navigation and Trading Co., we specialize in delivering secure, efficient, and professionally coordinated docking services for all port terminals. We handle berthing, major arrivals, emergency situations, and operations from various safe handling, terminal situations, and complete assistance with short and medium-term berthing. <br /><br />
                        We tailor our docking solutions to meet the needs of each vessel, ensuring smooth operations from arrival to departure.
                    </p>


                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl">
                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="rounded-xl overflow-hidden p-2 w-full max-w-[400px] mx-auto mb-6">
                                <Image
                                    src="/lm-docking-1.jpg"
                                    alt="Docking and berthing of ships at port"
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-xl w-full h-[250px]"
                                />
                            </div>
                        </div>
                        {/* Service Details */}
                        <div>
                            <h2 className="text-2xl mb-4 text-foreground">
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
            {/* Dry Docking & Wet Docking Section - Styled to Match Slide */}
            <div className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Dry Docking */}
                        <div>
                            <h2 className="text-[1.5rem] md:text-[1.5rem] font-normal text-[#222] dark:text-white mb-2">
                                2. Dry Docking (Scheduled<br className="hidden md:block" /> Repairs &amp; Overhauls)
                            </h2>
                            <p className="text-[.95rem] text-[#444] dark:text-gray-300 mb-2 leading-snug">
                                We coordinate full scale dry docking operations for vessels requiring scheduled inspection, structural maintenance, or major repairs.<br />
                                <span className="font-semibold">Our Services Include:</span>
                            </p>
                            <ul className="list-disc pl-5 text-[.95rem] text-[#444] dark:text-gray-300 mb-6 space-y-1">
                                <li>Hull inspections, steel renewal, and surface treatment</li>
                                <li>Propeller and rudder repairs</li>
                                <li>Ballast tank maintenance and refitting supervision</li>
                                <li>Class survey preparation and technical supervision</li>
                                <li>Close collaboration with certified dry dock facilities</li>
                            </ul>
                            <div className="relative w-full max-w-[400px] mx-auto mb-6 rounded-xl overflow-hidden p-2">
                                <Image
                                    src="/lm-docking-2.jpg"
                                    alt="Dry docking of ship for repairs"
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-xl w-full h-[250px]"
                                />
                            </div>
                        </div>
                        {/* Wet Docking */}
                        <div>
                            <div className="relative w-full max-w-[400px] mx-auto mb-6 rounded-xl overflow-hidden p-2">
                                <Image
                                    src="/lm-docking-3.jpg"
                                    alt="Wet docking and afloat repairs"
                                    width={400}
                                    height={250}
                                    className="object-cover rounded-xl w-full h-[250px]"
                                />
                            </div>
                            <h2 className="text-[1.5rem] md:text-[1.5rem] font-normal text-[#222] dark:text-white mb-2">
                                3. Wet Docking (Afloat<br className="hidden md:block" /> Repairs &amp; Onboard Servicing)
                            </h2>
                            <p className="text-[.95rem] text-[#444] dark:text-gray-300 mb-2 leading-snug">
                                For vessels that don&#39;t require full dry docking, we offer wet docking (afloat repairs) to reduce operational disruption and cost.<br />
                                <span className="font-semibold">Our Services Include:</span>
                            </p>
                            <ul className="list-disc pl-5 text-[.95rem] text-[#444] dark:text-gray-300 space-y-1">
                                <li>Onboard mechanical and electrical system repairs</li>
                                <li>Hull cleaning, painting, and coating without dry docking</li>
                                <li>Tank cleaning, painting, and coating without dry docking</li>
                                <li>Supply of spares, tools, and consumables directly onboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Anchorage Services (Offshore Support & Repairs) */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-2xl text-foreground">
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
                    <div className="rounded-xl overflow-hidden p-2 w-full max-w-[400px] mx-auto mb-6">
                        <Image
                            src="/lm-docking-4.jpg"
                            alt="Anchorage support and offshore repairs"
                            width={400}
                            height={250}
                            className="object-cover rounded-xl w-full h-[250px]"
                        />
                    </div>
                </div>
            </div>

            {/* Emergency Docking & Salvage Operations */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center my-16">
                <div className="flex-1 flex flex-col gap-4">
                    <h2 className="text-2xl text-foreground">
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
                    <div className="rounded-xl overflow-hidden p-2 w-full max-w-[400px] mx-auto mb-6">
                        <Image
                            src="/lm-docking-5.jpg"
                            alt="Emergency docking and salvage operations"
                            width={400}
                            height={250}
                            className="object-cover rounded-xl w-full h-[250px]"
                        />
                    </div>
                </div>
            </div>
            <GetQuoteComponent topic = "Docking and Maintenance" link = "/ship-maintenance-forms"/> 
            <FAQSearch category="docking-maintenance" />    
        </main>
    );
}
