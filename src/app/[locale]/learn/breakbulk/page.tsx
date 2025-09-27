"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Metadata } from "next"
import Head from "next/head"
import Image from "next/image"
import RequestQuoteButton from "@/components/RequestQuoteButton"
import FAQSearch from "@/components/faq"
import GetQuoteComponent from "@/components/getQuoteComponent"
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";

function overview(){
    return(
        <>
        <div className="w-full">
        </div>
        </>
    )
}

function services(){
    return(
        <>
         {/* Industries We Serve Section */}
         <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-6 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Industry Solutions</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                        Industries We Serve
                    </h2>
                    
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our breakbulk cargo services cater to a diverse range of industries, ensuring safe and efficient transportation solutions for non-containerized cargo across global markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Construction Industry */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/breakbulk-construction-machinery.jpg"
                                alt="Construction Industry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Construction</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                                Construction Industry
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Heavy machinery, steel structures, and construction materials that require specialized handling and transport solutions.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Heavy Machinery</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Steel Structures</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Construction Materials</span>
                            </div>
                        </div>
                    </div>

                    {/* Manufacturing Industry */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/breakbulk-steel-beams.jpg"
                                alt="Manufacturing Industry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Manufacturing</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                                Manufacturing Industry
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Industrial equipment, machinery components, and manufacturing systems that need careful handling and secure transport.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Industrial Equipment</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Machinery Components</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Manufacturing Systems</span>
                            </div>
                        </div>
                    </div>

                    {/* Energy Industry */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/breakbulk-project-cargo.jpg"
                                alt="Energy Industry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Energy</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                                Energy Industry
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Wind turbines, power generation equipment, and energy infrastructure components requiring specialized transport.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Wind Turbines</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Power Equipment</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Energy Infrastructure</span>
                            </div>
                        </div>
                    </div>

                    {/* Transportation Industry */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/breakbulk-railway-equipment.jpg"
                                alt="Transportation Industry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Transportation</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                                Transportation Industry
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Railway equipment, vehicles, and transportation infrastructure components that require specialized handling.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Railway Equipment</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Vehicles</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Infrastructure</span>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Industry */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/breakbulk-prefab-units.jpg"
                                alt="Infrastructure Industry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Infrastructure</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                                Infrastructure Industry
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Pre-fabricated units, infrastructure components, and large-scale project cargo for major development projects.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Pre-fabricated Units</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Infrastructure Components</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Project Cargo</span>
                            </div>
                        </div>
                    </div>

                    {/* Mining Industry */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/breakbulk-steel-beams.jpg"
                                alt="Mining Industry"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium">
                                <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Mining</span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-light text-gray-900 leading-tight">
                                Mining Industry
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Mining equipment, processing machinery, and heavy industrial components for mining operations worldwide.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Mining Equipment</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Processing Machinery</span>
                                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Industrial Components</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Key Characteristics Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
                    <div className="text-center space-y-4 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Key Characteristics</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Key Characteristics of Breakbulk Cargo At Moon Navigation and Trading Co.
                        </h2>
                    </div>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                            <div>
                                <span className="font-medium text-gray-900">Large but Manageable Weight and Size:</span> Our breakbulk cargo typically eclipses basic pallet and truck limits in both size and weight, allowing us to handle substantial sections with precision and care.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                            <div>
                                <span className="font-medium text-gray-900">Loaded and Unloaded Piece by Piece:</span> Each item is loaded and unloaded piece by piece using external cranes, forklifts, or vessel lifting equipment, ensuring the utmost support from ground arrival to on-board stowage.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                            <div>
                                <span className="font-medium text-gray-900">Transported on Breakbulk and Multi-Purpose Vessels (MPVs):</span> Our solutions utilize ships designed for specific cargo handling and flexible stowage configurations, accommodating various module and piece sizes.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                            <div>
                                <span className="font-medium text-gray-900">Ideal for Cargo That Can&apos;t Fit into Containers:</span> Our breakbulk shipments are secured individually for reliable, efficient loading and lashing, making them the best choice for items that defy unitization.
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                            <div>
                                <span className="font-medium text-gray-900">Essential for Construction, Manufacturing, and Infrastructure Projects:</span> Our breakbulk cargo plays a vital role in supporting industries that require large-scale imports and transshipment of machinery, steel structures, pre-fabricated units, and more.
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-600 text-center">
                            At Moon Navigation and Trading Co., we are committed to providing tailored breakbulk transportation solutions that meet the unique demands of every project, ensuring safety, efficiency, and reliability at every milestone.
                        </p>
                    </div>
                </div>
            </div>
        </section>
                
        {/* Our Breakbulk Cargo Services Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Our Services</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                        Our Breakbulk Cargo Services -At Moon Navigation and Trading Co.
                    </h2>
                </div>

                {/* Service 1: Specialized Vessel Chartering */}
                <section className="py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Vessel Chartering</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                            1. Specialized Vessel Chartering
                        </h3>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                Breakbulk cargo requires specific vessel types to accommodate large, irregularly shaped, and heavy loads. We provide access to:
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Breakbulk Vessels</span> – Designed to carry non-containerized cargo, allowing individual loading and securing.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Multi-Purpose Vessels (MPVs)</span> – Used for both containerized and breakbulk shipments, offering flexibility.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Heavy Lift Vessels</span> – Equipped with onboard cranes to handle oversized and heavy cargo without relying on port cranes.
                                    </div>
                                </li>
                            </ul>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Our chartering solutions ensure cost-effective and secure transport, whether for single shipments or long-term contracts.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/breakbulk-cargo-windmill.jpg"
                                alt="Breakbulk Windmill Cargo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    </div>
                </section>

                {/* Service 2: Custom Handling and Stowage */}
                <section className="py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1 lg:order-1 relative">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/breakbulk-handling-stowage.jpg"
                                alt="Breakbulk Handling and Stowage"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Custom Handling</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                            2. Custom Handling and Stowage
                        </h3>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                Breakbulk cargo handling requires careful planning to prevent damage and ensure stability. We provide:
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Custom Lashing and Securing</span> – Using steel chains, wooden bracing, and straps for stability.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Cargo Protection Measures</span> – Weatherproofing and shock-absorbing techniques.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Load Balancing and Stowage Optimization</span> – Preventing shifting and maintaining vessel stability.
                                    </div>
                                </li>
                            </ul>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We ensure that your cargo is fully secured and protected throughout the voyage.
                            </p>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Service 3: Crane and Port Handling */}
                <section className="py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Port Handling</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                            3. Crane and Port Handling
                        </h3>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                Efficient loading and unloading is critical for breakbulk cargo due to its size and complexity. We coordinate:
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">High-Capacity Port Cranes</span> – Utilizing gantry cranes, mobile cranes, and floating cranes for seamless lifting.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Reach Stackers and Forklifts</span> – For efficient handling of medium-weight breakbulk shipments.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Expert Stevedoring Services</span> – Ensuring smooth port-to-vessel cargo transfer.
                                    </div>
                                </li>
                            </ul>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                With our expert handling operations, we reduce risks and minimize delays during cargo transfer.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/breakbulk-inland-delivery.jpg"
                                alt="Breakbulk Inland Delivery"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    </div>
                </section>

                {/* Service 4: Customs Clearance and Documentation */}
                <section className="py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-1 lg:order-1 relative">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/breakbulk-customs-docs.jpg"
                                alt="Breakbulk Customs Clearance"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-2 lg:order-2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Customs & Documentation</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                            4. Customs Clearance and Documentation
                        </h3>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                Navigating customs regulations for breakbulk cargo can be complex due to varying international standards. We provide:
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Import and Export Compliance</span> – Ensuring cargo adheres to maritime and port regulations worldwide.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Cargo Documentation and Permits</span> – Managing bills of lading, packing lists, cargo manifests, and customs declarations.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Tax and Duty Management</span> – Handling tariff classifications, duty exemptions, and payment processing for smooth clearance.
                                    </div>
                                </li>
                            </ul>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                Our customs experts ensure that your cargo moves swiftly through regulatory processes, preventing unnecessary delays.
                            </p>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Service 5: Inland Transport and Final Delivery */}
                <section className="py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Inland Transport</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                            5. Inland Transport and Final Delivery
                        </h3>
                        
                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                We ensure seamless cargo transport from ports to final destinations, offering:
                            </p>
                            
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Port-to-Site Delivery</span> – Seamless movement from ports to project locations.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Specialized Trucks and Trailers</span> – Including low-bed trailers, modular hydraulic transporters, and extendable trailers.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <div>
                                        <span className="font-medium text-gray-900">Escort Vehicles and Road Permits</span> – Managing police escorts and special transport permits for oversized loads.
                                    </div>
                                </li>
                            </ul>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                We ensure a smooth, end-to-end logistics process, from port arrival to final delivery at project sites.
                            </p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/breakbulk-project-cargo.jpg"
                                alt="Breakbulk Project Cargo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </section>

        {/* Reasons to Choose Our Breakbulk Services */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                        <Award className="w-4 h-4" />
                        <span>Breakbulk Benefits</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                        Reasons to Choose Our Breakbulk Services
                    </h2>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Specialized expertise in handling non-containerized, oversized, and irregular cargo with precision and care.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Image src="/icons/ocean freight/98.png" alt="Specialized Expertise" width={48} height={48} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                            Specialized Expertise
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Years of experience handling non-containerized, oversized, and irregular cargo with precision.
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Image src="/icons/ocean freight/99.png" alt="End-to-End Logistics" width={48} height={48} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                            End-to-End Logistics
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            From custom stowage planning and port handling to compliance and documentation.
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Image src="/icons/ocean freight/100.png" alt="Advanced Handling Solutions" width={48} height={48} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                            Advanced Handling Solutions
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            State-of-the-art cranes, lifting gear, and securing techniques for safe transport.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Image src="/icons/ocean freight/101.png" alt="Global Shipping Network" width={48} height={48} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                            Global Shipping Network
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Strong partnerships with breakbulk carriers, ports, and specialized equipment providers worldwide.
                        </p>
                    </div>

                    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                            <Image src="/icons/ocean freight/102.png" alt="Regulatory Compliance & Dedicated Support" width={48} height={48} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-4">
                            Regulatory Compliance & Dedicated Support
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ensuring adherence to international shipping regulations with expert guidance at every stage.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Get Quote Component Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <GetQuoteComponent topic="Breakbulk Cargo" link="/ocean-freight-forms" />
            </div>
        </section>
        
        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FAQSearch category="breakbulk-cargo" />
            </div>
        </section>
        </>
    )
}

export default function BreakBulkInfo() {

    return (
        <>
            <Head>
                <title>BreakBulk Cargo Services | Moon Navigation and Trading Co.</title>
                <meta name="description" content="Learn about BreakBulk cargo, its characteristics, and why Moon Navigation and Trading Co. is your trusted partner for breakbulk shipping, handling, and logistics solutions." />
                <meta name="keywords" content="BreakBulk Cargo, BreakBulk Shipping, BreakBulk Logistics, Non-containerized Cargo, Project Cargo, Heavy Lift, Specialized Vessel Chartering, Custom Handling, Port Handling, Customs Clearance, Inland Transport, Moon Navigation and Trading Co., Freight Quote, Oversized Cargo, Industrial Shipping, Construction Materials Shipping" />
                <meta property="og:title" content="BreakBulk Cargo Services | Moon Navigation and Trading Co." />
                <meta property="og:description" content="Discover expert BreakBulk cargo solutions, including vessel chartering, custom handling, port operations, and end-to-end logistics with Moon Navigation and Trading Co." />
                <meta property="og:image" content="/breakbulk-banner.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.moonnavigation.com/learn/breakbulk" />
                <link rel="canonical" href="https://www.moonnavigation.com/learn/breakbulk" />
            </Head>
            
            <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {/* Hero Section */}
                <section className="relative w-full min-h-[600px] md:min-h-[700px]">
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
                                src="/breakbulk-banner.jpg"
                                alt="BreakBulk Cargo Hero"
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
                                <span className="text-white/90 text-sm font-medium">BreakBulk Cargo Services</span>
                            </div>

                            {/* Enhanced Heading */}
                            <div className="space-y-6">
                                <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                    BreakBulk Cargo
                                </h1>
                                <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                    Large, non-containerized shipments requiring individual loading and unloading with specialized logistics and careful handling
                                </h2>
                            </div>

                            {/* Classic Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 mt-12">
                                <Link href="/ocean-freight-forms">
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
                
                {/* What is BreakBulk Cargo Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>BreakBulk Cargo</span>
                                </div>
                                
                                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                    What is BreakBulk Cargo?
                                </h2>
                                
                                <div className="space-y-4">
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        Breakbulk cargo refers to large, non-containerized shipments that require individual loading and unloading. Too heavy or heavy in large blocks, breakbulk demands careful handling and specialized logistics. Typically managed using durable vessels, breakbulk cargo is comprised of miscellaneous vessels (MPP&apos;s) designed for modular cargo capabilities. Common examples of breakbulk cargo include steel, construction materials, and machinery.
                                    </p>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        At Moon Navigation and Trading Co., we excel in the transportation of breakbulk cargo, leveraging our expertise to manage the unique challenges associated with each shipment. Dedicated project teams provide safety and efficiency, ensuring every project proceeds smoothly. We deliver tailored logistics solutions that meet the specific needs of our clients, delivering reliable and timely transportation for all breakbulk shipments.
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
                
                {overview()}
                {services()}
            </main>
        </>
    )
}
