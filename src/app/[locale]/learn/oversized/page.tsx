"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";

// Dynamic import for heavy carousel component
const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

function overview() {
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
              src="/ov-1.jpg"
              alt="Oversized Container Hero"
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
              <span className="text-white/90 text-sm font-medium">Specialized Transport</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Oversized Container
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Specialized transport solutions for cargo that exceeds standard container dimensions, ensuring safe and efficient delivery of large, heavy, or irregularly shaped shipments
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

      {/* What is Oversized Container Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Oversized Container</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              What is Oversized Container?
            </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
              An oversized container is cargo that exceeds the standard dimensions of a conventional shipping container, requiring specialized transport solutions. These shipments are often too tall, wide, or heavy to fit within standard 20-foot or 40-foot containers and must be transported using flat racks, open-top containers, or platform containers.
            </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
              At Moon Navigation and Trading Co., we specialize in handling oversized container shipments, offering expert cargo securing, route planning, and compliance management to ensure safe and efficient transport. With access to global shipping routes and specialized equipment, we provide tailored solutions for industries requiring the movement of large, heavy, or irregularly shaped cargo.
            </p>
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

function services() {
  return (
    <main className="flex-1 flex flex-col gap-8 sm:gap-12 md:gap-16" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Carousel Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Common Cargo Types</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
          Our Common Cargo for Oversized Containers
        </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our oversized container services are designed to handle a wide range of large and irregularly shaped shipments, including but not limited to:
        </p>
          </div>
        <VesselCarousel />
        </div>
      </section>

      {/* Engineered for Heavy & Large Cargo Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Specialized Equipment</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Engineered for Heavy & Large Cargo
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
            Our oversized container solutions are specifically designed to handle cargo that exceeds standard container dimensions. We utilize specialized equipment and containers including:
          </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Flat Rack Containers</span> – Open-sided containers for wide or tall cargo</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Open Top Containers</span> – Removable roof for top-loading access</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Platform Containers</span> – Flat platforms for extremely heavy loads</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Specialized Securing Equipment</span> – Custom lashing and bracing solutions</span>
            </li>
          </ul>
        </div>
      </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ov-2.jpg" alt="Crane loading oversized cargo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Planning & Compliance Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ov-3.jpg" alt="Route planning for oversized cargo transport" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Compliance Management</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Route Planning & Compliance Management
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
            Transporting oversized cargo requires meticulous planning and strict compliance with international regulations. Our expertise includes:
          </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Route Analysis</span> – Identifying safe transit corridors and clearance requirements</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Permit Coordination</span> – Managing all necessary transport and port permits</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Regulatory Compliance</span> – Ensuring adherence to IMO, SOLAS, and local regulations</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Insurance & Documentation</span> – Comprehensive coverage and proper documentation</span>
            </li>
          </ul>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network & Port Access Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Global Network</span>
      </div>

              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Global Network & Port Access
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
            Our extensive global network provides access to major ports and terminals equipped to handle oversized cargo. We offer:
          </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Major Port Access</span> – Connections to ports with heavy-lift capabilities</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Specialized Terminals</span> – Access to terminals equipped for oversized cargo</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Equipment Availability</span> – Guaranteed access to necessary handling equipment</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Local Expertise</span> – Knowledge of local regulations and procedures</span>
            </li>
          </ul>
        </div>
      </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ov-4.jpg" alt="Global port network for oversized cargo" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Securing & Safety Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ov-5.jpg" alt="Cargo securing and safety protocols" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Safety Protocols</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Cargo Securing & Safety Protocols
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
            The safety of oversized cargo during transport is our top priority. We implement comprehensive securing and safety measures:
          </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Custom Securing Solutions</span> – Tailored lashing and bracing for each cargo type</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Safety Inspections</span> – Regular checks throughout the transport journey</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Weather Protection</span> – Appropriate covering and protection measures</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Emergency Procedures</span> – Contingency plans for unexpected situations</span>
            </li>
          </ul>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Effective Solutions Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Cost Optimization</span>
      </div>

              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Cost-Effective Solutions
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
            We understand that oversized cargo transport can be expensive. Our solutions are designed to optimize costs while maintaining quality:
          </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Optimized Routing</span> – Efficient routes to minimize transport costs</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Equipment Optimization</span> – Right-sizing equipment for cost efficiency</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Consolidation Opportunities</span> – Combining shipments when possible</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Transparent Pricing</span> – Clear breakdown of all costs involved</span>
            </li>
          </ul>
        </div>
      </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ov-6.jpg" alt="Cost-effective oversized cargo solutions" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cargo Expertise Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/ov-7.jpg" alt="Project cargo expertise for oversized shipments" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Project Cargo</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Project Cargo Expertise
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
            Our experience extends to complex project cargo requirements, including industrial and construction projects:
          </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Industrial Equipment</span> – Machinery, turbines, and manufacturing equipment</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Construction Materials</span> – Prefabricated structures and building components</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Energy Sector</span> – Wind turbines, solar panels, and power generation equipment</span>
            </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Mining & Infrastructure</span> – Heavy equipment for mining and construction projects</span>
            </li>
          </ul>
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Container Comparison</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
          Oversized Containers vs. Standard Containers
        </h2>
          </div>
          
          <div className="relative">
            {/* Mobile Arrow Navigation */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100 md:hidden"
              onClick={() => {
                const container = document.querySelector('.table-scroll-container');
                if (container) {
                  container.scrollLeft -= 300;
                }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100 md:hidden"
              onClick={() => {
                const container = document.querySelector('.table-scroll-container');
                if (container) {
                  container.scrollLeft += 300;
                }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group">
              <div className="overflow-x-auto table-scroll-container">
                <table className="min-w-full">
            <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-blue-100/50">
                      <th className="px-8 py-6 text-left text-blue-600 font-medium text-lg border-b border-gray-200" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Feature</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center text-blue-600 font-medium text-lg border-b border-gray-200 border-l" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Oversized Containers</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-center text-blue-600 font-medium text-lg border-b border-gray-200 border-l" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Standard Containers</span>
                        </div>
                      </th>
              </tr>
            </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Size</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          Exceeds standard 20ft/40ft
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          20ft/40ft
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Cargo Type</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          Heavy, large, irregular
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          General, dry, palletized
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Loading Options</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          Top, side, end
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          End only
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Weather Protection</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          Custom tarps, reinforced
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          Standard roof, sealed
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Compliance</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          IMO, SOLAS, custom
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          Standard
                        </span>
                      </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Oversized Container Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Reasons to Choose Moon Navigation and Trading Co. for Your Oversized Container Needs
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Specialized expertise with advanced equipment and seamless port operations for oversized container handling.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/129.png" alt="Specialized Expertise Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Specialized Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A highly experienced team delivering efficient, safe, and precise cargo handling, securing, and transport for oversized shipments.
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
                We utilize state-of-the-art cranes, forklifts, and lashing gear for safe and efficient operations.
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
                Integrated with major ports and terminals for smooth logistics and fast turnaround.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/132.png" alt="Secure Storage Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Secure & Reliable Storage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Short- and long-term storage with 24/7 monitoring and protection from environmental factors.
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

      <GetQuoteComponent topic="Oversized Container" link="/container-services-forms" />
      <FAQSearch category="oversized-container" />
    </main>
  );
}

export default function ShippingMethodsInfo() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}
