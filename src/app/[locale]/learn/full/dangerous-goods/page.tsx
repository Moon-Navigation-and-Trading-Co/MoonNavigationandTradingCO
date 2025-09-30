"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";

const DangerousGoodsPage = () => {
    const [selectedClass, setSelectedClass] = useState(0)
    const [activeTab, setActiveTab] = useState("overview")
    const router = useRouter()
    const searchParams = useSearchParams()

    // Initialize active tab from URL on component mount
    useEffect(() => {
        const tabFromUrl = searchParams.get('tab')
        if (tabFromUrl && ['overview', 'our-solutions'].includes(tabFromUrl)) {
            setActiveTab(tabFromUrl)
        }
    }, [searchParams])

    // Handle tab change and update URL
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId)
        const currentUrl = new URL(window.location.href)
        currentUrl.searchParams.set('tab', tabId)
        router.replace(currentUrl.pathname + currentUrl.search, { scroll: false })
    }

    const hazardClasses = [
        {
            id: 1,
            name: "Explosives",
            description: "Substances that can rapidly release energy through detonation or intense combustion when exposed to heat, friction, or impact. These materials require strict storage controls and specialized transport measures to prevent accidental ignition.",
            examples: "Military-grade explosives, fireworks, blasting agents, ammunition, airbag inflators",
            color: "bg-red-100 text-red-800",
            icon: "/icons/hazmat/class-1.png"
        },
        {
            id: 2,
            name: "Gases",
            description: "Compressed, liquefied, or dissolved gases that pose flammability, toxicity, or pressure hazards. Improper handling can lead to asphyxiation, explosions, or chemical exposure. Safe transportation involves reinforced containment and continuous pressure monitoring.",
            examples: "Propane, oxygen, helium, chlorine gas, carbon dioxide, aerosol sprays",
            color: "bg-green-100 text-green-800",
            icon: "/icons/hazmat/class-2.png"
        },
        {
            id: 3,
            name: "Flammable Liquids",
            description: "Liquids that emit highly combustible vapors, creating fire or explosion risks, especially when exposed to open flames, static electricity, or heat sources. Specialized leak-proof containment and ventilation are required during transport.",
            examples: "Gasoline, diesel, aviation fuel, ethanol, acetone, paint thinners, alcohol-based solutions",
            color: "bg-orange-100 text-orange-800",
            icon: "/icons/hazmat/class-3.png"
        },
        {
            id: 4,
            name: "Flammable Solids & Reactive Substances",
            description: "Materials that can spontaneously ignite, react dangerously with water, or generate extreme heat when exposed to air or friction. These require dry storage, isolation from oxidizers, and non-sparking handling equipment.",
            examples: "Magnesium powder, sodium, phosphorus, sulfur, matches, metal powders",
            color: "bg-yellow-100 text-yellow-800",
            icon: "/icons/hazmat/class-4.png"
        },
        {
            id: 5,
            name: "Oxidizing Substances & Organic Peroxides",
            description: "Chemicals that enhance combustion by releasing oxygen or decompose violently under certain conditions. Strict segregation from flammables, heat sources, and impact risks is necessary.",
            examples: "Ammonium nitrate (fertilizers), hydrogen peroxide, potassium permanganate, peracetic acid, sodium chlorate",
            color: "bg-blue-100 text-blue-800",
            icon: "/icons/hazmat/class-5.png"
        },
        {
            id: 6,
            name: "Toxic & Infectious Substances",
            description: "Hazardous substances that cause poisoning, severe health effects, or spread infectious diseases. These materials require airtight containment, strict labeling, and biohazard control measures to prevent exposure.",
            examples: "Cyanide, pesticides, biological samples, virus cultures, medical waste, mercury compounds",
            color: "bg-purple-100 text-purple-800",
            icon: "/icons/hazmat/class-6.png"
        },
        {
            id: 7,
            name: "Radioactive Materials",
            description: "Materials emitting ionizing radiation, which can cause biological harm if exposure limits are exceeded. Transport regulations mandate lead shielding, radiation monitoring, and controlled access to these substances.",
            examples: "Uranium, plutonium, medical isotopes (iodine-131, cobalt-60), nuclear reactor fuel rods",
            color: "bg-gray-100 text-gray-800",
            icon: "/icons/hazmat/class-7.png"
        },
        {
            id: 8,
            name: "Corrosive Substances",
            description: "Chemicals that destroy organic tissue, metal, and other materials upon contact, causing severe burns and structural damage. Proper handling requires acid-resistant containers, ventilation, and protective gear.",
            examples: "Sulfuric acid (battery acid), hydrochloric acid, sodium hydroxide (caustic soda), ammonia solutions",
            color: "bg-indigo-100 text-indigo-800",
            icon: "/icons/hazmat/class-8.png"
        },
        {
            id: 9,
            name: "Miscellaneous Dangerous Goods",
            description: "Substances that present unique hazards not covered in other categories, such as environmental toxicity, magnetism, or combustion risk under certain conditions. These require customized handling and transport protocols.",
            examples: "Lithium-ion batteries, dry ice, airbags, asbestos, marine pollutants, environmentally hazardous chemicals",
            color: "bg-pink-100 text-pink-800",
            icon: "/icons/hazmat/class-9.png"
        }
    ]

    function renderOverview() {
        return (
            <>
                {/* Dangerous Goods Container Shipments Section */}
                <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Right column: heading and description */}
                        <div className="flex-1 rounded-2xl p-6">
                            <h2 className="text-lg mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Dangerous Goods Container Shipments
                            </h2>
                            <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Dangerous Goods is the substances that pose a risk to health, safety, property, or the environment during transport. These are classified under international regulatory frameworks such as IMDG Code (International Maritime Dangerous Goods), ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road), and IATA (International Air Transport Association – for air shipments).
                            </p>
                            <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Shipping hazardous materials demands precision, strict adherence to international regulations, and specialized logistics capabilities. At Moon Navigation and Trading Co., we offer expert handling of Dangerous Goods (DG) container shipments, ensuring your cargo is transported securely, compliantly, and efficiently across global routes.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header Section */}
                <div className="text-center mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Dangerous Goods</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Types of Dangerous Cargo We Handle
                    </h1>
                    <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        We provide specialized transportation services for all IMDG hazard classes with strict compliance and safety protocols.
                    </p>
                </div>

                {/* Responsive Layout: Desktop Two-Column, Mobile Single-Column */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar: Navigation - Hidden on mobile, shown on desktop */}
                    <aside className="hidden lg:block w-full lg:w-1/3">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                            <h3 className="text-lg font-semibold mb-6 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>IMO Hazard Classes</h3>
                            <div className="space-y-1">
                                {hazardClasses.map((hazardClass) => (
                                    <button
                                        key={hazardClass.id}
                                        onClick={() => setSelectedClass(hazardClass.id - 1)}
                                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                            selectedClass === hazardClass.id - 1
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                        style={{ fontFamily: 'Raleway, sans-serif' }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-1 h-8 rounded-full ${
                                                selectedClass === hazardClass.id - 1 ? 'bg-white' : 'bg-blue-600'
                                            }`}></div>
                                            <div className="flex-1">
                                                <div className="font-light text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    {hazardClass.id}. {hazardClass.name} (Class {hazardClass.id})
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            </div>
                        </aside>

                    {/* Mobile Navigation - Shown on mobile, hidden on desktop */}
                    <div className="lg:hidden space-y-3 px-2">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>IMO Hazard Classes</h3>
                        
                        {hazardClasses.map((hazardClass, index) => (
                            <div key={hazardClass.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                {/* Clickable Header */}
                                <button
                                    onClick={() => setSelectedClass(index)}
                                    className={`w-full text-left p-4 transition-all duration-300 ${
                                        selectedClass === index
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                    style={{ fontFamily: 'Raleway, sans-serif' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1 h-6 rounded-full flex-shrink-0 ${
                                            selectedClass === index ? 'bg-white' : 'bg-blue-600'
                                        }`}></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-light text-sm leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                {hazardClass.id}. {hazardClass.name} (Class {hazardClass.id})
                                            </div>
                                        </div>
                                        {/* Arrow Icon */}
                                        <div className={`transform transition-transform duration-300 flex-shrink-0 ${
                                            selectedClass === index ? 'rotate-180' : 'rotate-0'
                                        }`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>

                                {/* Expandable Content - Only on mobile */}
                                {selectedClass === index && (
                                    <div className="px-4 pb-4 border-t border-gray-200">
                                        <div className="pt-4 space-y-3">
                                            <div>
                                                <p className="text-gray-600 leading-relaxed text-sm mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    {hazardClass.description}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    These materials require strict storage controls and specialized transport measures to prevent accidents and ensure safety.
                                                </p>
                                            </div>
                                            
                                    <div>
                                                <h4 className="font-semibold text-gray-900 mb-2 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Examples:</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    {hazardClass.examples}
                                                </p>
                                            </div>
                                            
                                            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mt-4">
                                                <p className="text-blue-800 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                                    <strong>Important:</strong> All dangerous goods require proper documentation, packaging, labeling, and handling procedures in accordance with IMDG Code regulations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                                </div>

                    {/* Right Content: Selected Class Details - Desktop only */}
                    <main className="hidden lg:block w-full lg:w-2/3">
                        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    {hazardClasses[selectedClass].id}. {hazardClasses[selectedClass].name} (Class {hazardClasses[selectedClass].id})
                                </h2>
                                
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            {hazardClasses[selectedClass].description}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            These materials require strict storage controls and specialized transport measures to prevent accidents and ensure safety.
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Examples:</h4>
                                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            {hazardClasses[selectedClass].examples}
                                        </p>
                                    </div>
                                    
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                                        <p className="text-blue-800 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                            <strong>Important:</strong> All dangerous goods require proper documentation, packaging, labeling, and handling procedures in accordance with IMDG Code regulations.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                </div>

                {/* Specialized Container Options Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Content */}
                            <div className="order-1 lg:order-1 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Container Options</span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Specialized Container Options
                                </h2>

                                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    <p>
                                        We offer a comprehensive range of container types specifically designed for hazardous cargo transportation, ensuring optimal safety and compliance for your dangerous goods shipments.
                                    </p>
                                    
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Standard FCL Containers (20ft / 40ft)</li>
                                        <li>Reefer Containers for Temperature-Controlled Dangerous Goods</li>
                                        <li>Ventilated Containers for volatile materials</li>
                                        <li>Custom-packaged containers for specific classes</li>
                                    </ul>
                                    
                                    <p>
                                        All containers used are certified and prepared in compliance with cargo segregation rules, container cleaning protocols, and dangerous goods loading plans.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="order-2 lg:order-2 relative">
                                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/Safety and Compliance Procedures (1).png"
                                        alt="Worker inspecting dangerous goods containers in shipping yard"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety and Compliance Procedures Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Image */}
                            <div className="order-2 lg:order-1 relative">
                                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/Safety and Compliance Procedures.jpeg"
                                        alt="Worker reviewing dangerous goods documentation and safety procedures"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="order-1 lg:order-2 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Safety & Compliance</span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Safety and Compliance Procedures
                                </h2>

                                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    <p>
                                        At Moon Navigation and Trading Co., safety is at the core of every DG shipment we handle. Our services include:
                                    </p>
                                    
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Pre-shipment cargo classification and verification</li>
                                        <li>Correct UN number assignment and DG labeling/marking</li>
                                        <li>Proper packaging using certified materials</li>
                                        <li>Preparation of Dangerous Goods Declaration (DGD) and Material Safety Data Sheets (MSDS)</li>
                                        <li>Segregation plans in line with IMDG Code</li>
                                        <li>Safety checklists and container inspections before dispatch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Documentation and Regulatory Support Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Content */}
                            <div className="order-1 lg:order-1 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Documentation</span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Documentation and Regulatory Support
                                </h2>

                                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    <p>
                                        We ensure your dangerous goods cargo complies with all legal and port authority requirements through:
                                    </p>
                                    
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Export/import permits (as required)</li>
                                        <li>Verified DGD and supporting documents</li>
                                        <li>MSDS documentation assistance</li>
                                        <li>Port handling and customs compliance</li>
                                        <li>Coordination with shipping lines for DG acceptance and stowage planning</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right: Image */}
                            <div className="order-2 lg:order-2 relative">
                                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/Documentation and Regulatory Support.png"
                                        alt="Official documentation and regulatory compliance for dangerous goods"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Route Planning & Risk Assessment Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Image */}
                            <div className="order-2 lg:order-1 relative">
                                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/Route Planning & Risk Assessment.png"
                                        alt="Maritime professional planning dangerous goods route and risk assessment"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="order-1 lg:order-2 space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span>Route Planning</span>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Route Planning & Risk Assessment
                                </h2>

                                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    <p>
                                        Transporting hazardous materials demands detailed journey planning and hazard mitigation. We offer:
                                    </p>
                                    
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Route analysis for safe transit corridors</li>
                                        <li>Transit time optimization to reduce handling exposure</li>
                                        <li>Coordination with carriers, terminals, and authorities</li>
                                        <li>Emergency procedures and contingency planning</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Learn More Button Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    // Switch to Our Solutions tab
                                    handleTabChange('our-solutions');
                                    // Scroll to the top of the page
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="inline-flex items-center px-4 py-2 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-light text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                style={{ fontFamily: 'Raleway, sans-serif' }}
                            >
                                <span>Learn more about our Dangerous Container shipment Solutions</span>
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Reasons to Choose Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                                <Award className="w-4 h-4" />
                                <span>Dangerous Container Benefits</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Reasons to Choose Moon Navigation and Trading Co. for Your Dangerous Container Shipments
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Wide range of DG container options and equipment with end-to-end operational support and full compliance with international standards.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {/* First Row: 3 items */}
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/container/57.png" alt="Certified Team Expertise Icon" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Certified team with deep expertise in hazardous cargo handling
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Highly trained and certified professionals with extensive experience in handling hazardous cargo safely and efficiently.
                                </p>
                            </div>

                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/container/58.png" alt="Full Compliance Standards Icon" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Full compliance with IMDG, ADR, and IATA standards
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Complete adherence to international dangerous goods regulations including IMDG, ADR, and IATA standards.
                                </p>
                            </div>

                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/container/59.png" alt="Wide Range of DG Container Options Icon" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Wide range of DG container options and equipment
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Comprehensive selection of specialized containers and equipment designed specifically for hazardous materials transport.
                                </p>
                            </div>
                        </div>

                        {/* Second Row: 3 items */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/container/60.png" alt="End-to-End Operational Support Icon" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    End-to-end operational support and coordination
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Complete operational support from planning to delivery, ensuring seamless coordination throughout the entire shipping process.
                                </p>
                            </div>

                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/container/61.png" alt="Safety and Reliability Icon" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Commitment to safety, reliability, and regulatory excellence
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Unwavering commitment to maintaining the highest standards of safety, reliability, and regulatory compliance.
                                </p>
                            </div>

                            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/icons/container/62.png" alt="Transparent Documentation Icon" width={48} height={48} className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Transparent documentation, routing, and pricing process
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Clear and transparent documentation, routing options, and pricing with no hidden costs or surprises.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <GetQuoteComponent topic="Dangerous Goods Transport" link="/container-services-forms" />
                <FAQSearch category="dangerous-goods" />
            </div>
            </>
        );
    }

    const tabData = [
        {
            id: "overview",
            title: "Dangerous Goods Containers",
            content: renderOverview(),
        },
        {
            id: "our-solutions",
            title: "Our Solutions",
            content: <LearnMore />,
        },
    ];

    return (
        <div>
            <FormTabs 
                tabData={tabData} 
                activeTab={activeTab}
                setActiveTab={handleTabChange}
            />
        </div>
    );
}

export default DangerousGoodsPage;