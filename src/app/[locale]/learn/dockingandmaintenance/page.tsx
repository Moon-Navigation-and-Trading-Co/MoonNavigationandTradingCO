"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

export default function DockingAndMaintenance() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <main className="flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="w-full py-10 bg-background rounded-b-3xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Hero Image */}
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden mb-10">
                        <img
                            src="/lm-docking-1.jpg"
                            alt="Docking and Maintenance - Ship at dock with workers"
                            className="object-cover w-full h-full"
                            style={{ objectPosition: "center" }}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Docking and Maintenance
                            </h1>
                            <Button asChild>
                                <Link href="/ship-maintenance-forms">
                                    Request a Quote
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-primary mb-2">
                                What is Docking and Maintenance?
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Docking is the process of bringing a ship into a dock for inspection, repairs, or maintenance. This includes dry docking, where the vessel is removed from the water to examine hulls and undertake repairs that would be hard to access in normal shipping and port operations.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                While maintenance involves the regular upkeep and repair of vessels to guarantee safety, efficiency, and compliance with maritime regulations. This encompasses scheduled work such as engine and hull inspections, painting, cleaning, and replacement or repair of worn-out components. All of which are crucial to maintaining safe operations and compliance.
                            </p>
                            <p className="text-muted-foreground">
                                At Moon Navigation and Trading Co., we uphold the highest safety standards throughout our docking and maintenance services. Our experienced team ensures that every vessel receives the best possible attention for effective results. We prevent accidents, extend the operating period of the fleet through our dedication to superior service and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Switcher */}
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
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
                                                <img
                                                    src="/images/docking-services-ship.jpg"
                                                    alt="Docked ship with cranes and workers"
                                                    className="object-cover w-full h-full"
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
                                                <img
                                                    src="/images/docking-services-ship.jpg"
                                                    alt="Docked ship with cranes and workers"
                                                    className="object-cover w-full h-full"
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
                                            <img
                                                src="/images/maintenance-crew.jpg"
                                                alt="Maintenance crew working on vessel"
                                                className="rounded-lg w-full object-cover"
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
                                            <img
                                                src="/images/maintenance-workers-tablet.jpg"
                                                alt="Two maintenance workers discussing with a tablet"
                                                className="rounded-lg w-full object-cover"
                                                style={{ minHeight: "250px", maxHeight: "340px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Quote Section */}
            <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
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
                        <Link href="/ship-maintenance-forms">
                            Request a Quote
                        </Link>
                    </Button>
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