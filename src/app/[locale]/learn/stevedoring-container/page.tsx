"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";
import FormTabs from "@/components/form-tabs";
import { useState } from "react";

// Dynamic imports for better performance
const ContainerHandlingPage = dynamic(() => import("./handling/page"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

const StevedoringPage = dynamic(() => import("./stevedoring/page"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

const ContainerStoragePage = dynamic(() => import("./storage/page"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

function overview() {
    return (
        <>
            {/* What is Container Handling, Stevedoring and Storage Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Container Logistics Services</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What is Container Handling, Stevedoring and Storage?
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Container handling, stevedoring, and storage are essential logistics services that ensure the efficient movement, loading, and safe storage of containers at ports and terminals. Container handling refers to the transfer of containers between different transport modes, such as ships, trucks, and trains, using specialized equipment like marine cranes and straddle carriers. Stevedoring is the loading and unloading of containers from vessels, carried out by skilled professionals who ensure optimal space utilization and cargo integrity. Container storage involves placing containers in secure yards or warehouses, allowing for inventory management, flexible supply chain planning, monitoring, and protection against loss or damage.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    At Moon Navigation and Trading Co., we specialize in delivering seamless container logistics, supporting supply chains with reliable handling, expert stevedoring, and secure storage solutions.
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
        </>
    );
}

function services(setActiveTab: (tabId: string) => void) {
    return (
        <>
            {/* Container Handling Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Our Services</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Our Container Handling, Stevedoring, and Storage Services
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left: Text Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Container Handling</span>
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                                Container Handling
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    We offer efficient container handling services at major ports and terminals, ensuring smooth cargo movement.
                                </p>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Loading and Unloading</span> – Fast and secure transfer of containers from vessels, trucks, and rail.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Custom Handling Solutions</span> – Expertise in handling standard, reefer, oversized, and hazardous cargo containers.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Secure Lashing and Securing</span> – Ensuring cargo stability and safety in every transit.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Container Inspection and Damage Assessment</span> – Quality checks to maintain cargo integrity.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4">
                                <button 
                                    onClick={() => {
                                        setActiveTab("handling");
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Learn More
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hss-2.jpg"
                                    alt="Container handling operations"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stevedoring Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left: Image */}
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hss-3.jpg"
                                    alt="Stevedoring operations"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right: Text Content */}
                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Stevedoring</span>
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                                Stevedoring
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Our stevedoring services ensure efficient and safe loading and unloading of vessels.
                                </p>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Vessel Loading and Unloading</span> – Expert handling of containers during ship operations.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Cargo Stowage Planning</span> – Optimal space utilization and weight distribution.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Safety and Compliance</span> – Adherence to international maritime safety standards.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">24/7 Port Operations</span> – Round-the-clock service to minimize vessel delays.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4">
                                <button 
                                    onClick={() => {
                                        setActiveTab("stevedoring");
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Learn More
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Container Storage Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Container Storage</span>
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                                Container Storage
                            </h3>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Secure and flexible storage solutions for containers at strategic locations.
                                </p>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Short-term and Long-term Storage</span> – Flexible storage periods to meet your needs.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">24/7 Security Monitoring</span> – Continuous surveillance and access control.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Inventory Management</span> – Real-time tracking and status updates.
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <div>
                                            <span className="font-medium text-gray-900">Weather Protection</span> – Covered storage areas to protect cargo from elements.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4">
                                <button 
                                    onClick={() => {
                                        setActiveTab("storage");
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Learn More
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/hss-4.jpg"
                                    alt="Container storage yard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Reasons Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                            <Award className="w-4 h-4" />
                            <span>Stevedoring Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                            Reasons to Choose Moon Navigation and Trading Co.
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Expertise and efficiency with advanced equipment and seamless port operations for comprehensive container services.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/129.png" alt="Expertise & Efficiency Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Expertise & Efficiency
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                With years of experience, we ensure seamless container handling, precise stevedoring, and secure storage solutions.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/130.png" alt="Advanced Equipment Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Advanced Equipment
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We utilize state-of-the-art cranes, forklifts, and stacking systems for safe and efficient cargo operations.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/131.png" alt="Seamless Port Operations Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Seamless Port Operations
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our services are integrated with major ports and terminals, ensuring smooth logistics and fast container turnaround.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/132.png" alt="Secure & Reliable Storage Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Secure & Reliable Storage
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Short-term and long-term container storage with 24/7 monitoring and protection from environmental factors.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/container/133.png" alt="Comprehensive Service Icon" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Comprehensive Service
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                From vessel unloading to final transport, we provide end-to-end solutions tailored to your logistics needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <GetQuoteComponent topic="Container Handling, Stevedoring and Storage" link="/container-services-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" /> 
        </>
    );
}

function OverviewTab({ setActiveTab }: { setActiveTab: (tabId: string) => void }) {
    return (
        <>
            {overview()}
            {services(setActiveTab)}
        </>
    );
}

export default function StevedoringContainerTabs() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <OverviewTab setActiveTab={setActiveTab} />,
    },
    {
      id: "handling",
      title: "Handling",
      content: <ContainerHandlingPage />,
    },
    {
      id: "stevedoring",
      title: "Stevedoring",
      content: <StevedoringPage />,
    },
    {
      id: "storage",
      title: "Storage",
      content: <ContainerStoragePage />,
    },
  ];

  return (
    <div className="w-full mt-10 mb-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mb-16">
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
              src="/hss-1.jpg"
              alt="Container Handling, Stevedoring and Storage Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Container Logistics Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Container Handling,<br />
                <span className="text-blue-300">Stevedoring & Storage</span>
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Essential logistics services ensuring efficient movement, loading, and safe storage of containers at ports and terminals
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/container-services-forms">
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
      <FormTabs tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
