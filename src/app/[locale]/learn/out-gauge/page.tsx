"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";
import { Award } from "lucide-react";

export default function OutGaugeCargoInfo() {
  const t = useTranslations("learn-out-gauge");

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
              src="/out-gauge-banner.jpg"
              alt="Out-of-Gauge Cargo Hero"
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
              <span className="text-white/90 text-sm font-medium">Oversized Solutions</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Out Gauge
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Specialized handling and transport solutions for cargo that exceeds standard container dimensions, ensuring safe and efficient delivery of oversized shipments
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/out-gauge-forms">
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

      {/* What is Out Gauge Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Out-of-Gauge Cargo</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Out Gauge?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Out-of-Gauge (OOG) cargo is the shipments that exceed the standard dimensions of a shipping container, making them unsuitable for transport in enclosed containers. These oversized or irregularly shaped goods require specialized handling, equipment, and transport solutions to ensure safe and efficient delivery.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  At Moon Navigation and Trading Co., we provide tailored OOG container solutions, utilizing flat racks, open-top containers, and specialized lifting equipment to accommodate large or heavy cargo. Our expertise in securing, routing, and transporting out-of-gauge shipments ensures seamless delivery across global trade routes while maintaining compliance with international shipping regulations.
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

      {/* What We Transport Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Transport Solutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              What We Transport
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our OOG cargo services are designed to accommodate a wide variety of oversized shipments, including but not limited to:
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Mobile Arrow Navigation */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 md:hidden"
              onClick={() => {
                const container = document.querySelector('.transport-carousel');
                if (container) {
                  container.scrollLeft -= 300;
                }
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 md:hidden"
              onClick={() => {
                const container = document.querySelector('.transport-carousel');
                if (container) {
                  container.scrollLeft += 300;
                }
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="flex gap-8 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 transport-carousel group justify-center md:justify-start">
              <div className="flex-shrink-0 w-64">
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="h-48 relative flex items-center justify-center">
                    <Image
                      src="/oog-2.jpg"
                      alt="Industrial Machinery"
                      fill
                      className="object-center object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Industrial Machinery</h3>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64">
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="h-48 relative flex items-center justify-center">
                    <Image
                      src="/oog-3.jpg"
                      alt="Construction Equipment"
                      fill
                      className="object-center object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Construction Equipment</h3>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64">
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="h-48 relative flex items-center justify-center">
                    <Image
                      src="/oog-4.jpg"
                      alt="Project Cargo"
                      fill
                      className="object-center object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Project Cargo</h3>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-64">
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="h-48 relative flex items-center justify-center">
                    <Image
                      src="/oog-5.jpg"
                      alt="Military and Aerospace Equipment"
                      fill
                      className="object-center object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Military and Aerospace Equipment</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Handling Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Specialized Handling</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Handling Out-of-Gauge Cargo
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Handling Out-of-Gauge cargo is a complex task that requires specialized equipment, custom handling techniques, and precise logistics management. Our team is highly experienced in coordinating the transportation of heavy, oversized, and project cargo, from industrial machinery to large-scale infrastructure components.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/oog-6.jpg" alt="Handling Out-of-Gauge cargo" fill className="object-center object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Equipment Table Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Specialized Equipment</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Specialized Equipment for OOG Transportation
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-blue-100/50">
                    <th className="px-8 py-6 text-left text-blue-600 font-medium text-lg border-b border-gray-200" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Equipment Type</span>
                      </div>
                    </th>
                    <th className="px-8 py-6 text-left text-blue-600 font-medium text-lg border-b border-gray-200 border-l" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Description</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Flat Rack Containers</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">
                      Ideal for wide and heavy cargo that exceeds standard width limits, providing open sides for easy loading and unloading.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Open-Top Containers</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">
                      Suitable for cargo that is too tall for a standard container, allowing top-loading with cranes.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Heavy-Lift Cranes & Lifting Gear</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">
                      Used for safe loading and unloading of massive structures, ensuring stability and security.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Modular & Hydraulic Trailers</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">
                      Designed for transporting extremely heavy and oversized loads over land, offering flexibility in weight distribution.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="px-8 py-6 text-gray-900 font-medium text-base border-r border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span>Roll-On/Roll-Off (RORO) Solutions</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-gray-700">
                      Best for self-propelled cargo such as heavy machinery, trucks, and large vehicles, ensuring efficient loading and unloading.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/oog-7.jpg" alt="What Sets Us Apart" fill className="object-center object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Our Expertise</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What Sets Us Apart
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Customized Solutions for Every Shipment</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We recognize that every OOG cargo shipment is unique. Whether it is an oversized turbine or a large construction vehicle, we design personalized transport solutions using the best equipment and methods to suit your cargo&apos;s needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Expert Handling and Securing</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We employ a team of skilled professionals who use the latest cargo securing techniques to ensure your OOG cargo is safe, stable, and properly loaded/unloaded. Our fleet includes heavy-lift cranes, lifting beams, and other specialized equipment for complex handling needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Access to Specialized Equipment</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Our fleet includes a wide range of flat racks, open-top containers, and platform containers, allowing us to accommodate cargo that exceeds standard container dimensions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Route Planning and Compliance</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Our logistics experts conduct route surveys and obtain all necessary permits to navigate height, width, and weight restrictions, ensuring your shipment moves smoothly without delays.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Global Logistics Network</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    With access to major transshipment hubs and leading shipping lines, we can ensure your cargo reaches its destination efficiently, no matter where in the world it&apos;s headed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Complete Solutions</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                End-to-End OOG Cargo Logistics Services
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We provide complete logistics solutions to handle OOG cargo from start to finish:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Port Handling & Stevedoring</span> - Safe loading, unloading, and storage at ports.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Customs Clearance & Documentation</span> - We handle all paperwork, ensuring smooth cross-border transport.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Inland Transportation</span> - Seamless delivery using heavy-duty trucks, modular trailers, and rail transport.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-medium text-gray-900">Final Delivery & Project Logistics</span> - We manage delivery to construction sites, industrial zones, and remote project locations.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/oog-8.jpg" alt="End-to-End OOG Cargo Logistics Services" fill className="object-center object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Out-of-Gauge Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Reasons to Choose Moon Navigation and Trading Co. For Your Out-Of-Gauge Transportation
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Expert route planning with specialized handling equipment and global network partnerships for out-of-gauge transportation.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/106.png" alt="Expert Route Planning" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Expert Route Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team conducts detailed route surveys and feasibility studies to ensure safe and efficient transport for your out-of-gauge shipments.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/107.png" alt="Specialized Handling & Equipment" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Specialized Handling & Equipment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We utilize flat racks, open-top containers, heavy-lift cranes, and modular trailers to accommodate oversized cargo securely.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/108.png" alt="Customs & Regulatory Compliance" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Customs & Regulatory Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We handle all necessary permits, clearances, and documentation to ensure a smooth shipping process.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/109.png" alt="Global Network & Reliable Partnerships" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global Network & Reliable Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strong connections with ports, carriers, and logistics providers enable seamless international and inland transportation.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/110.png" alt="Tailored Logistics Solutions" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Tailored Logistics Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every shipment is unique, and we provide customized transport plans to fit the size, weight, and special requirements of your cargo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Out-of-Gauge Cargo" link="/out-gauge-forms" />
      <FAQSearch category="out-gauge" />
    </>
  );
}
