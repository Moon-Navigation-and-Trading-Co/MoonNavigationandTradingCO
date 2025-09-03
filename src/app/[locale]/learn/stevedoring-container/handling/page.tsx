"use client"

import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Link from "next/link";

export default function ContainerHandlingPage() {
    return (
        <main className="flex flex-col items-center w-full">
            {/* What is Container Handling Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Container Operations</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Container Handling?
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Container handling refers to the transfer of containers between different transport modes, such as ships, trucks, and trains, using specialized equipment like marine cranes and straddle carriers. This critical process ensures the efficient movement of cargo through ports and terminals.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                At Moon Navigation and Trading Co., we specialize in delivering seamless container handling operations, supporting supply chains with reliable equipment, expert operators, and secure handling solutions that minimize delays and maximize efficiency.
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
                            <span>Container Operations</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Container Handling Services (Container Operations)
                        </h2>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                Efficient container handling is critical to port and supply chain operations. Our services include:
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Loading & Unloading Operations Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Loading & Unloading</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Loading and Unloading Operations
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Ship-to-Shore and Shore-to-Ship Handling:</span> Fast, secure loading and unloading of containers.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Rail and Truck Transfers:</span> Seamless movement between ocean, rail, and inland transport.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Direct Transshipment:</span> Quick transfer of containers between vessels without storage delays.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/h-hss-1.jpg"
                                    alt="Container loading and unloading operations"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Container Handling Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/h-hss-2.jpg"
                                    alt="Specialized container handling with crane"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Specialized Handling</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Specialized Container Handling
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Reefer Containers (Refrigerated Cargo):</span> Temperature-controlled handling with 24/7 monitoring.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Oversized and Out-of-Gauge Cargo:</span> Expert lifting solutions for heavy machinery, project cargo, and specialized shipments.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Dangerous Goods Containers (IMO Cargo):</span> Safe and regulation-compliant handling for hazardous materials.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secure Lashing & Cargo Protection Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Security & Protection</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Secure Lashing and Cargo Protection
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Lashing and Securing:</span> Proper securing of cargo to prevent movement during transit.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Container Inspection and Damage Assessment:</span> Routine checks to ensure cargo integrity.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Weighing and Compliance Checks:</span> VGM (Verified Gross Mass) certification for SOLAS compliance.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/h-hss-3.jpg"
                                    alt="Workers securing cargo inside a shipping container"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Container Handling" link="/container-services-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" />
        </main>
    );
}