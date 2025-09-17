"use client";

import { useTranslations } from "next-intl";
import FAQSearch from "@/components/faq";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function InlandContainerPage() {
  const t = useTranslations("inland-freight");
  const [activeSection, setActiveSection] = useState("road");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
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
              src="/inland-container-banner.jpg"
              alt="Inland Container Transportation Hero"
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
              <span className="text-white/90 text-sm font-medium">Logistics Solutions</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Inland Container<br />Transportation
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Efficient movement of shipping containers from ports to inland destinations, connecting seaports with inland locations for seamless logistics operations
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/inland-services-forms">
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

      {/* What is Inland Container Transportation Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Inland Container Transportation</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Inland Container Transportation?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Inland container transportation is the movement of shipping containers from ports to inland destinations using trucks, trains, or barges. It plays a crucial role in the logistics chain, connecting seaports with inland destinations and ensuring the efficient movement of goods from origin to destination.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Moon Navigation and Trading Co. specializes in efficient and secure inland container transport, offering a comprehensive fleet of specialized trucks, extensive rail networks, and strategic logistics hubs. We are committed to timely deliveries, regulatory compliance, and cost-effective service that optimizes your supply chain.
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

      {/* Service Navigation Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Transportation Services</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Inland Container Transport Services
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We offer a full range of inland transportation solutions, ensuring your cargo reaches its destination safely, on time, and in optimal condition.
            </p>
          </div>

          {/* Service Navigation Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection("road")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeSection === "road" 
                  ? "bg-blue-600 text-white shadow-xl" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
              }`}
            >
              Road Transportation
            </button>
            <button 
              onClick={() => scrollToSection("rail")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeSection === "rail" 
                  ? "bg-blue-600 text-white shadow-xl" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
              }`}
            >
              Rail Transportation
            </button>
            <button 
              onClick={() => scrollToSection("multimodal")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeSection === "multimodal" 
                  ? "bg-blue-600 text-white shadow-xl" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
              }`}
            >
              Multimodal & Transshipment
            </button>
            <button 
              onClick={() => scrollToSection("specialized")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeSection === "specialized" 
                  ? "bg-blue-600 text-white shadow-xl" 
                  : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
              }`}
            >
              Specialized Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Road Transportation Section */}
      <section id="road" className="px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Road Transport</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Road Transportation
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We offer flexible, secure trucking solutions for all cargo types:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">FCL & LCL Trucking:</span> Dedicated or consolidated container transport.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Reefer Transport:</span> Temperature-controlled trucks for perishable and sensitive goods.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Heavy & Oversized Cargo:</span> Low-bed and multi-axle trailers for machinery, equipment, and project cargo.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Hazardous Cargo:</span> Certified dangerous goods transport compliant with IMO, ADR, and local regulations.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Intercity & Cross-Border:</span> Domestic and international routes with customs clearance support.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Container Drayage & Last-Mile:</span> Port, rail yard, and warehouse transfers with door-to-door delivery.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/inland-2.jpg" alt="Road Transportation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rail Transportation Section */}
      <section id="rail" className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/inland-3.jpg" alt="Rail Transportation" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Rail Transport</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Rail Transportation
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Rail transport is an economical, environmentally friendly, and efficient option for long-distance container movement. Our rail freight solutions include:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Long-Distance Container Rail Transport:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Reliable connections between ports, inland container depots (ICDs), and major industrial hubs.</li>
                        <li>• Cost-effective bulk movement of FCL and LCL shipments.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Double-Stacking Capabilities:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Increased capacity and reduced costs through efficient stacking.</li>
                        <li>• Suitable for standard, reefer, and dry cargo containers.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Intermodal Rail Solutions:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Seamless integration of rail and truck transport for optimized routing.</li>
                        <li>• Smooth coordination of cargo from ports to inland destinations.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Secure & Controlled Operations:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Minimized risk of theft and damage compared to road transport.</li>
                        <li>• Regular monitoring and tracking to maintain transport schedules.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multimodal Services Section */}
      <section id="multimodal" className="px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Multimodal Solutions</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Multimodal & Transshipment Services
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  For complex cargo routes, we offer multimodal solutions that combine road, rail, and sea transport to ensure efficient and cost-effective logistics.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Seamless Port-to-Door & Door-to-Port Transport:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• End-to-end logistics coordination from shipping lines to inland delivery points.</li>
                        <li>• Eliminating delays with optimized scheduling and cargo handling.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Intermodal Transport Solutions:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Flexibility in transport mode selection to optimize cost and efficiency.</li>
                        <li>• Reducing transit time and improving supply chain reliability.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Cross-Border Inland Transport:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Customs-cleared transport between countries with full regulatory compliance.</li>
                        <li>• Ensuring smooth operations through efficient border clearance processes.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/f-inland-4.jpg" alt="Multimodal Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Container Solutions Section */}
      <section id="specialized" className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Specialized Solutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Specialized Container Transport Solutions
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We handle all types of containers, ensuring proper transportation methods based on cargo requirements:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/inland-5.jpg"
                  alt="Standard & High Cube Containers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Standard & High Cube Containers
              </h3>
              <p className="text-gray-600 text-sm">
                20ft, 40ft, and 45ft container transport.
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/inland-6.jpg"
                  alt="Reefer & Temperature-Sensitive Cargo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Reefer & Temperature-Sensitive Cargo
              </h3>
              <p className="text-gray-600 text-sm">
                Ensuring controlled temperature levels throughout the journey.
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/inland-7.jpg"
                  alt="Dangerous Goods (DG) Containers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Dangerous Goods (DG) Containers
              </h3>
              <p className="text-gray-600 text-sm">
                Secure movement with strict safety compliance.
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/inland-8.jpg"
                  alt="Flat Rack & Open-Top Containers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Flat Rack & Open-Top Containers
              </h3>
              <p className="text-gray-600 text-sm">
                For out-of-gauge, heavy-lift, and industrial project cargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Inland Transportation Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Reasons to Choose Moon Navigation and Trading Co. for Your Inland Transportation
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive inland container transportation solutions with specialized equipment, regulatory compliance, and seamless logistics coordination.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/119.png" alt="Seamless Port-to-Door Delivery" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Seamless Port-to-Door Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure smooth and efficient transport from ports to warehouses, factories, and final destinations with optimized routing and continuous coordination.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/120.png" alt="Diverse Transport Options" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Diverse Transport Options
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our fleet includes specialized trucks, rail solutions, and inland waterways, offering flexibility for every cargo type and route requirements.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/121.png" alt="Timely & Reliable Service" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Timely & Reliable Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize on-time deliveries with optimized routing and continuous coordination to ensure your cargo reaches its destination as scheduled.
              </p>
            </div>
          </div>

          {/* Second Row - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/122.png" alt="Compliance & Security" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Compliance & Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strict adherence to local and international regulations, ensuring cargo safety and smooth customs clearance throughout the transport process.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/123.png" alt="Customized Logistics Solutions" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Customized Logistics Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored transport plans to meet the specific needs of your cargo, including out-of-gauge and specialized shipments with dedicated handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Inland Container Transportation" link="/inland-services-forms" />

      {/* FAQ Section */}
      <div className="mt-16">
        <FAQSearch category="inland-container" />
      </div>
    </>
  );
}
