"use client"

import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";
import Link from "next/link";

export default function ContainerStoragePage() {
    return (
        <main className="flex flex-col items-center w-full">
            {/* What is Container Storage Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Warehousing Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Container Storage?
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Container storage involves placing containers in secure yards or warehouses, allowing for inventory management, flexible supply chain planning, monitoring, and protection against loss or damage.
                            </p>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                At Moon Navigation and Trading Co., we provide comprehensive storage solutions that ensure your cargo remains safe, secure, and easily accessible while optimizing your supply chain operations.
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
                            <span>Warehousing Solutions</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Secure Storage and Warehousing Services (Warehousing Solutions)
                        </h2>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                We provide short-term and long-term storage solutions to meet diverse cargo requirements, including:
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Container Yard & Open Storage Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Container Yard</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Container Yard and Open Storage
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Full and Empty Container Storage:</span> Secure areas for both import/export cargo.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Bonded Warehousing:</span> Duty-free storage for transshipment and customs clearance facilitation.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Reefer Plug-In Points:</span> Refrigerated storage for perishable goods with constant temperature monitoring.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/w-hss-1.jpg"
                                    alt="Container yard with reach stacker and containers"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialized Warehousing Solutions Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/w-hss-2.jpg"
                                    alt="Warehouse interior with racking and worker"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Specialized Solutions</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Specialized Warehousing Solutions
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Temperature-Controlled Warehouses:</span> Ideal for pharmaceuticals, perishables, and sensitive goods.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Hazardous Goods Storage:</span> Secure and compliant storage for flammable and dangerous materials.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Breakbulk and Heavy Lift Cargo Storage:</span> Custom storage areas for oversized shipments.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inventory & Cargo Management Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Inventory Management</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                Inventory and Cargo Management
                            </h2>
                            
                            <div className="space-y-4">
                                <ul className="space-y-3 text-base text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Systematic Inventory Tracking:</span> Efficient cargo handling and stock management.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Packing and Consolidation Services:</span> Repacking, crating, and cargo preparation for final shipment.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span><span className="font-medium">Customized Storage Plans:</span> Flexible solutions tailored to client needs.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/w-hss-3.jpg"
                                    alt="Warehouse inventory management with worker and racking"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Container Storage" link="/container-services-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" />
        </main>
    );
}