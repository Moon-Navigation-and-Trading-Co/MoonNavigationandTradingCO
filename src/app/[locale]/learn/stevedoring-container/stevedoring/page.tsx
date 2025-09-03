"use client"

import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";
import Link from "next/link";

export default function StevedoringPage() {
    return (
        <main className="flex flex-col items-center w-full">
            {/* What is Stevedoring Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Vessel Operations</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Stevedoring?
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Stevedoring is the loading and unloading of containers from vessels, carried out by skilled professionals who ensure optimal space utilization and cargo integrity. This specialized service is essential for efficient port operations and vessel turnaround times.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                At Moon Navigation and Trading Co., we provide comprehensive stevedoring services that ensure safe, efficient, and compliant cargo operations at major ports and terminals worldwide.
                            </p>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview Header */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Vessel Operations</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Stevedoring Services (Vessel Operations)
                        </h2>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                Our stevedoring operations ensure the safe and efficient handling of cargo, whether containerized, bulk, or breakbulk.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cargo Handling & Vessel Operations Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Vessel Operations</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Cargo Handling and Vessel Operations
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Containerized Cargo Handling:</span> Efficient lifting, stacking, and stowing of containers.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Heavy Lift and Project Cargo Handling:</span> Custom solutions for oversized shipments, using high-capacity cranes and specialized lifting equipment.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Bulk and General Cargo Operations:</span> Handling of raw materials, grain, cement, and industrial goods.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/s-hss-1.jpg"
                                    alt="Stevedores operating cranes to load cargo onto a vessel"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipment & Technology Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/s-hss-2.jpg"
                                    alt="Modern container handling equipment at port"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Equipment & Technology</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Equipment and Technology
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Advanced Port Cranes and Spreaders:</span> High-speed operations with minimal turnaround time.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Forklifts, Reach Stackers and Terminal Tractors:</span> Efficient movement of containers and cargo within ports.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Cargo Identification and Monitoring:</span> Effective tracking and documentation for operational efficiency.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety & Compliance Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Safety & Compliance</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Safety and Compliance
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Trained Stevedoring Crews:</span> Experienced professionals for safe cargo handling.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">IMO and Port Authority Regulation Compliance:</span> Full adherence to international and local safety standards.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Risk Assessment and Emergency Response:</span> Proactive measures to prevent operations hazards.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/s-hss-3.jpg"
                                    alt="Stevedore in safety gear inspecting containers"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Stevedoring" link="/container-services-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" />
        </main>
    );
}