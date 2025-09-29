"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, Settings, Package, Clock, Shield, Anchor, Wrench, Ship, MapPin, AlertTriangle } from "lucide-react";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import FormTabs from "@/components/form-tabs";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

function OverviewTab() {
    return (
        <>
            {/* What is Docking and Maintenance Section */}
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

            {/* Overview Content */}
            <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-20 sm:mt-28 md:mt-36">
                <div className="space-y-8">
                    {/* Vessel Types Section */}
                    <div className="w-full">
                        <div className="flex justify-start mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Vessel Types</span>
                            </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-light text-primary mb-6 text-center">
                            <span>We serve a wide range of vessels, including:</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                <Ship className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Cargo Ships & Container Vessels</span>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                <Ship className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Bulk Carriers & Tankers</span>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                <Ship className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Offshore Support Vessels (OSVs)</span>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                <Ship className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Fishing Vessels & Research Ships</span>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                <Ship className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Passenger & Cruise Ships</span>
                            </div>
                            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                <Ship className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">Tugboats & Barges</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 sm:mt-28 md:mt-36">
                        {/* Docking Services Card */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl border border-blue-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                        <Anchor className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-light text-gray-900">Docking Services</h3>
                                </div>
                                
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Comprehensive docking solutions including berth reservation, dry docking, wet docking, anchorage services, and emergency docking support.
                                </p>
                                
                                <div className="space-y-3">
                                    {[
                                        "Port Docking & Berthing",
                                        "Dry Docking (Scheduled Repairs)",
                                        "Wet Docking (Afloat Repairs)",
                                        "Anchorage Services",
                                        "Emergency Docking & Salvage"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center group/item">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium group-hover/item:text-blue-700 transition-colors duration-200">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Maintenance Services Card */}
                        <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl border border-blue-200/50 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative p-8">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                        <Wrench className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-light text-gray-900">Maintenance Services</h3>
                                </div>
                                
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Complete vessel maintenance services ensuring operational efficiency, compliance, and extended asset life.
                                </p>
                                
                                <div className="space-y-3">
                                    {[
                                        "Hull & Structural Maintenance",
                                        "Engine & Mechanical Repairs",
                                        "Electrical & Automation Services",
                                        "Bunkering & Fuel System Maintenance",
                                        "Waste Management & Environmental Compliance",
                                        "Safety Equipment Servicing"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center group/item">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium group-hover/item:text-blue-700 transition-colors duration-200">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function DockingTab() {
    return (
        <>
            {/* What are Docking Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Docking Services</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What are Docking Services?
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                At Moon Navigation and Trading Co., we specialize in delivering secure, efficient, and professionally coordinated docking services at key ports and terminals. Whether for routine berthing, major overhauls, or emergency situations, our operations team ensures safe handling, minimal downtime, and complete compliance with port and maritime regulations.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We tailor our docking solutions to meet the needs of each vessel, ensuring smooth operations from arrival to departure.
                            </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Port Docking and Berthing Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-docking-1.jpg" alt="Docking and berthing of ships at port" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Port Operations</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Port Docking and Berthing
                            </h2>
                            
                            <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                    We manage all aspects of vessel berthing at port terminals, ensuring precise coordination with port authorities and terminal operators. Our Services Include:
                                </p>
                                <ul className="space-y-2 text-base text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Advance berth reservations and scheduling</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Tug and pilot coordination for safe maneuvering</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Mooring and unmooring operations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Onshore support services during berthing periods</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dry Docking Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-docking-2.jpg" alt="Dry docking of ship for repairs" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Scheduled Repairs</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Dry Docking (Scheduled Repairs and Overhauls)
                            </h2>
                            
                            <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                    We coordinate full-scale dry docking operations for vessels requiring scheduled inspections, structural maintenance, or major repairs. Our Services Include:
                                </p>
                                <ul className="space-y-2 text-base text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Hull inspections, steel renewal, and surface treatment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Propeller and rudder repairs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Ballast tank maintenance and coating</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Class survey preparation and technical supervision</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Close collaboration with certified dry dock facilities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wet Docking Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-docking-3.jpg" alt="Wet docking and afloat repairs" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Afloat Repairs</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Wet Docking (Afloat Repairs and Onboard Servicing)
                            </h2>
                            
                            <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                    For vessels that do not require full dry docking, we offer wet docking (afloat repairs) to reduce operational disruption and cost. Our Services Include:
                                </p>
                                <ul className="space-y-2 text-base text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Onboard mechanical and electrical system repairs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Minor hull and structure maintenance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Tank cleaning, painting, and coating without dry docking</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Supply of spares, tools, and consumables directly at berth</span>
                                    </li>
                                </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Anchorage Services Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-docking-4.jpg" alt="Anchorage support and offshore repairs" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Offshore Support</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Anchorage Services (Offshore Support and Repairs)
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    We provide anchorage support for vessels requiring offshore services or awaiting port entry. Our Services Include:
                                </p>
                                <ul className="space-y-2 text-base text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Crew change arrangements and launch boat support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Offshore delivery of spare parts, provisions, and equipment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>In-situ inspections and afloat maintenance operations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Emergency supplies and medical support coordination</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Docking & Salvage Operations Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/lm-docking-5.jpg" alt="Emergency docking and salvage operations" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Emergency Response</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Emergency Docking and Salvage Operations
                            </h2>
                            
                            <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                    Our team is equipped to respond swiftly to emergency situations requiring immediate docking or vessel recovery. Our Services Include:
                                </p>
                                <ul className="space-y-2 text-base text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Rapid coordination for emergency berthing and repair access</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Support for salvage operations and vessel refloating</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Technical assistance for grounding, collision, or machinery failure incidents</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Mobilization of specialized service providers and emergency response teams</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function MaintenanceTab() {
    return (
        <>
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
                                    At Moon Navigation and Trading Co., we deliver dependable vessel maintenance services to ensure ships operate at peak performance while maintaining full compliance with international safety and environmental standards. From preventive care to urgent repairs, our expert teams provide comprehensive support tailored to your vessel&apos;s operational requirements.
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
                        <div className="order-2 lg:order-1 space-y-6">
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

                        <div className="order-1 lg:order-2 relative">
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
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-2.jpg" alt="Engine and mechanical repairs" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
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
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Electrical & Automation</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                3. Electrical and Automation Services
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We maintain and troubleshoot your vessel&apos;s electrical and automation infrastructure for safe and efficient operation. Our services include:
                            </p>
                            
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Generator and distribution board servicing</li>
                                <li>Navigation light systems wiring</li>
                                <li>Automation (PLC, ICS, systems, and sensors)</li>
                                <li>Alarm and monitoring systems</li>
                                <li>Electrical cable repairs and system testing</li>
                            </ul>
                        </div>

                        <div className="order-1 lg:order-2 relative">
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
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-4.jpg" alt="Bunkering and fuel system maintenance" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
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
                        <div className="order-2 lg:order-1 space-y-6">
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

                        <div className="order-1 lg:order-2 relative">
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
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/m-6.jpg" alt="Safety equipment servicing" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Safety Equipment</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                6. Safety Equipment Servicing
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Your crew&apos;s safety is non-negotiable—we ensure all life-saving appliances and firefighting equipment are fully operational. Our services include:
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
        </>
    );
}

export default function DockingAndMaintenance() {
    const tabData = [
        {
            id: "overview",
            title: "Overview",
            content: <OverviewTab />,
        },
        {
            id: "docking",
            title: "Docking",
            content: <DockingTab />,
        },
        {
            id: "maintenance",
            title: "Maintenance",
            content: <MaintenanceTab />,
        },
    ];

    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12 mb-16">
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

            <div className="-mt-20 sm:-mt-28 md:-mt-36">
                <FormTabs tabData={tabData} />
            </div>

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

            <GetQuoteComponent topic="Docking and Maintenance" link="/vessel-support-maintenance-forms" />
        </main>
    );
} 