"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function DockingPage() {
    const t = useTranslations("docking");

    return (
        <main className="flex flex-col items-center w-full">
            {/* Our Docking Services Section */}
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
                        Our Docking Services
                    </h1>
                    <p className="text-muted-foreground max-w-3xl mb-12">
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
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-md">
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
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-md">
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
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-md">
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
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 w-full max-w-md">
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
            <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Get your Quote with Us
                    </h2>
                    <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Getting a quote for our Docking and Maintenance Services at Moon
                        Navigation and Trading Co. is simple and hassle-free.

                        Just fill out our short form — our experts will assess your requirements and
                        send you a customized quotation directly to your email, offering clear
                        pricing and solutions tailored to your vessel.
                    </p>
                    <Link href="/docking-forms" className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors inline-block">
                        Request a Quote
                    </Link>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
                    <img
                        src="/quote-illustration.png"
                        alt="Quotation illustration"
                        className="w-[320px] h-auto object-contain"
                        style={{ maxWidth: 380 }}
                    />
                </div>
            </section>
        </main>
    );
}
