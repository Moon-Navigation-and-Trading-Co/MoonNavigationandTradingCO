"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Award, Shield, Truck, Package, Warehouse, HeadphonesIcon } from "lucide-react";

export default function HandlingStevedoringStorageLearnMore() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
              src="/H,S (7).jpg"
              alt="Handling, Stevedoring and Storage Hero"
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
              <span className="text-white/90 text-sm font-medium">Port Logistics Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Handling, Stevedoring<br />and Storage Services
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Critical port logistics components including cargo movement, specialized ship loading/discharging, and secure warehousing solutions
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/other-logistics-services-forms">
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
              onClick={() => scrollToSection('services')}
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

      {/* What is Handling, Stevedoring and Storage Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Port Logistics</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              What is Handling, Stevedoring and Storage Services?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Handling, stevedoring, and storage are critical components in port logistics. Handling involves the movement and coordination of cargo during loading, unloading, and transfers between transport modes. Stevedoring is the specialized service of loading and discharging cargo from ships, requiring skill, precision, and the right equipment. Storage refers to the safe, short- or long-term warehousing of cargo until it&apos;s ready for further transport.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Moon Navigation and Trading Co., we combine these essential services into one seamless solution. With expert crews, efficient equipment, and secure storage facilities across key Egyptian ports, we ensure your cargo is moved, managed, and stored with maximum care and efficiency—minimizing downtime and maximizing peace of mind.
            </p>
          </div>
          
          {/* Right: Empty space (no image) */}
          <div className="hidden lg:block">
            {/* Empty right column to maintain layout */}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
          Our Cargo Handling, Stevedoring, and Storage Services
        </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive port logistics solutions designed for efficiency, safety, and reliability
          </p>
        </div>
        
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            onClick={() => scrollToSection('cargo-handling')}
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0"
          >
            Cargo Handling
          </button>
          <button 
            onClick={() => scrollToSection('stevedoring-services')}
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0"
          >
            Stevedoring Services
          </button>
          <button 
            onClick={() => scrollToSection('secure-storage')}
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0"
          >
            Secure Storage & Warehousing
          </button>
        </div>

        {/* 1. Cargo Handling Services */}
        <section id="cargo-handling" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/H1.jpeg"
                alt="Cargo Handling Services - Busy port with cargo ships and cranes"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
          
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Cargo Handling</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Cargo Handling Services
            </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
              Our cargo handling division ensures smooth and safe transfer of all types of cargo during loading, unloading, transshipment, and internal port movements. We handle containerized, bulk, breakbulk, or project cargo using mechanized equipment and skilled manpower.
            </p>
            
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Core Handling Capabilities:</h4>
            <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Vessel loading and discharging:</span>
                      <span className="text-gray-600"> Containerized, breakbulk, and heavy cargo operations</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Terminal and yard operations:</span>
                      <span className="text-gray-600"> Efficient cargo movement and storage management</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Inland cargo handling:</span>
                      <span className="text-gray-600"> Via truck and rail transportation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Crane and forklift operations:</span>
                      <span className="text-gray-600"> Assisted cargo movement with precision</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Customs support:</span>
                      <span className="text-gray-600"> Inspection coordination and documentation</span>
                    </div>
                  </div>
                </div>
            </div>
            
              <p className="text-lg text-gray-600 leading-relaxed">
              We maintain continuous coordination with terminal operators, customs officials, and inland transporters to minimize bottlenecks and accelerate cargo throughput.
            </p>
          </div>
        </div>
        </section>

        {/* 2. Professional Stevedoring Services */}
        <section id="stevedoring-services" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Stevedoring</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Professional Stevedoring Services
            </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
              Our experienced stevedoring teams specialize in safely executing loading and unloading operations for all types of vessels, including general cargo ships, bulk carriers, Ro-Ro vessels, container ships, and project cargo vessels. We ensure optimal vessel turnaround, maximum crane utilization, and cargo safety throughout each operation.
            </p>
            
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Scope of Stevedoring Services:</h4>
            <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Cargo discharge and loading:</span>
                      <span className="text-gray-600"> Breakbulk, bulk, heavy lift, OOG cargo</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Lashing and securing:</span>
                      <span className="text-gray-600"> Cargo securing and unlashing operations</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Project cargo lifting:</span>
                      <span className="text-gray-600"> Planning and execution of complex lifts</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">On-board stowage planning:</span>
                      <span className="text-gray-600"> Supervision and optimization</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Safety compliance:</span>
                      <span className="text-gray-600"> IMO, ISPS Code, and port authority regulations</span>
                    </div>
                  </div>
                </div>
            </div>
            
              <p className="text-lg text-gray-600 leading-relaxed">
              We operate in full compliance with IMO, ISPS Code, port authority regulations, and international cargo handling standards.
            </p>
          </div>
          
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/H2.png"
                alt="Professional Stevedoring Services - Stevedoring operations with cranes and containers"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
        </div>
        </section>

        {/* 3. Secure Storage and Warehousing */}
        <section id="secure-storage" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/H3.png"
                alt="Secure Storage and Warehousing - Warehouse with stacked shipping containers"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
          
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Storage Solutions</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Secure Storage and Warehousing
            </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
              Our storage facilities provide comprehensive warehousing solutions for all types of cargo, ensuring your goods are protected and easily accessible when needed.
            </p>
            
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Storage Solutions:</h4>
            <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Container yard storage:</span>
                      <span className="text-gray-600"> FCL, LCL, reefer containers</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Bonded warehousing:</span>
                      <span className="text-gray-600"> Customs-controlled facilities</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Temperature-controlled storage:</span>
                      <span className="text-gray-600"> For perishable goods</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Heavy equipment storage:</span>
                      <span className="text-gray-600"> Machinery and project cargo</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">24/7 security monitoring:</span>
                      <span className="text-gray-600"> Access control and surveillance</span>
                    </div>
                  </div>
                </div>
            </div>
            
              <p className="text-lg text-gray-600 leading-relaxed">
              Our facilities are strategically located near major ports and transportation hubs, providing quick access and efficient logistics coordination.
            </p>
          </div>
        </div>
        </section>
      </section>

      {/* Cargo Sectors */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Industry Sectors</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
          Serving Diverse Cargo Sectors
        </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services are trusted across multiple industries for reliable and efficient cargo handling
        </p>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-200 hover:scale-110 border border-gray-200"
            onClick={() => {
              const container = document.getElementById('cargo-sectors-scroll');
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10 transition-all duration-200 hover:scale-110 border border-gray-200"
            onClick={() => {
              const container = document.getElementById('cargo-sectors-scroll');
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div id="cargo-sectors-scroll" className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide px-16">
            {/* Maritime & Shipping Lines */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S.jpg"
                  alt="Maritime & Shipping Lines"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Maritime & Shipping Lines</h3>
              <p className="text-sm text-gray-600 text-center">Comprehensive port services for shipping companies</p>
            </div>
            
            {/* Construction & Heavy Machinery */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S (1).jpg"
                  alt="Construction & Heavy Machinery"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Construction & Heavy Machinery</h3>
              <p className="text-sm text-gray-600 text-center">Specialized handling for heavy equipment and machinery</p>
            </div>
            
            {/* Energy, Oil & Gas */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S (2).jpg"
                  alt="Energy, Oil & Gas"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Energy, Oil & Gas</h3>
              <p className="text-sm text-gray-600 text-center">Expert handling for energy sector equipment</p>
            </div>
            
            {/* Steel & Metal Products */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S (3).jpg"
                  alt="Steel & Metal Products"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Steel & Metal Products</h3>
              <p className="text-sm text-gray-600 text-center">Precision handling for metal and steel products</p>
            </div>
            
            {/* Industrial Manufacturing */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S (4).jpg"
                  alt="Industrial Manufacturing"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Industrial Manufacturing</h3>
              <p className="text-sm text-gray-600 text-center">Efficient handling for manufacturing components</p>
            </div>
            
            {/* Automotive & Ro-Ro */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S (5).jpg"
                  alt="Automotive & Ro-Ro"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Automotive & Ro-Ro</h3>
              <p className="text-sm text-gray-600 text-center">Specialized roll-on/roll-off vehicle handling</p>
            </div>
            
            {/* Agricultural & Food Commodities */}
            <div className="group flex flex-col items-center justify-center flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-xl">
                <Image
                  src="/H,S (6).jpg"
                  alt="Agricultural & Food Commodities"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Agricultural & Food Commodities</h3>
              <p className="text-sm text-gray-600 text-center">Safe handling for agricultural and food products</p>
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Section - Reverted to Original */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Why Choose Us</span>
            </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your Handling, Stevedoring and Storage Needs
            </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized expertise with advanced equipment and customized solutions for comprehensive handling and storage services.
            </p>
          </div>

        <div className="space-y-16">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Specialized Expertise */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
              <div className="mb-6 flex justify-center items-center w-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image src="/icons/other services/61.png" alt="Specialized Expertise" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>
              <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Specialized Expertise</div>
              <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                A highly experienced team delivering efficient, safe, and precise cargo handling and stevedoring operations across all vessel types.
              </div>
            </div>

            {/* Advanced Equipment & Technology */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
              <div className="mb-6 flex justify-center items-center w-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image src="/icons/other services/62.png" alt="Advanced Equipment & Technology" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>
              <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Advanced Equipment & Technology</div>
              <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                State-of-the-art cranes, forklifts, and lifting gear ensure smooth operations, reduced turnaround times, and maximum cargo safety.
              </div>
            </div>

            {/* Customized, Scalable Solutions */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
              <div className="mb-6 flex justify-center items-center w-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image src="/icons/other services/63.png" alt="Customized, Scalable Solutions" width={48} height={48} className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>
              <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Customized, Scalable Solutions</div>
              <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Flexible service packages tailored to cargo type, volume, and operational requirements — from routine shipments to complex project cargo.
              </div>
            </div>
          </div>

          {/* Second row: 2 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl">
              {/* Secure & Strategic Storage Facilities */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                <div className="mb-6 flex justify-center items-center w-full">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image src="/icons/other services/64.png" alt="Secure & Strategic Storage Facilities" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Secure & Strategic Storage Facilities</div>
                <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                  Well-equipped warehouses and open storage yards near key ports, offering safe and accessible space for all cargo types.
                </div>
              </div>

              {/* Reliable Coordination & Transparent Service */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
                <div className="mb-6 flex justify-center items-center w-full">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image src="/icons/other services/65.png" alt="Reliable Coordination & Transparent Service" width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-xl mb-4 text-gray-900 dark:text-white text-center" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Reliable Coordination & Transparent Service</div>
                <div className="text-base text-gray-600 dark:text-gray-300 max-w-xs font-light leading-relaxed mx-auto" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                  Dedicated coordination teams ensure seamless communication, real-time updates, and transparent pricing throughout your project.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <GetQuoteComponent topic="Handling, Stevedoring and Storage Services" link="/other-logistics-services-forms" />
      <FAQSearch category="handling-stevedoring-storage" />
    </main>
  );
} 