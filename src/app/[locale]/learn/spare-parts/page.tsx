"use client";
import FAQSearch from "@/components/faq";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import Image from "next/image";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGrid from "@/components/ReasonsGrid";
import { Award, Package, Clock, Shield, CheckCircle } from "lucide-react";

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
              src="/spare-1.jpg"
              alt="Transit Spare Parts Hero"
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
              <span className="text-white/90 text-sm font-medium">Maritime Logistics</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Transit Spare<br />
                <span className="text-blue-300">Parts</span>
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Critical replacement components for vessels and machinery ensuring minimal downtime and operational continuity
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/ship-agency-forms">
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

      {/* What is Transit Spare Parts Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Critical Components</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Transit Spare Parts?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Transit spare parts involve the translocation of critical replacement components for vessels or machinery, dispatched while transiting to ports or enroute to unanticipated maintenance locations.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  These parts are essential for repairs, upgrades, or replacement of malfunctioning components. Whether during a planned visit or while afloat, at Moon Navigation Trading Company, we understand the critical importance of fast service in the maritime industry, and help ensure that spare parts can be minimizing downtime and preventing operational delays. We coordinate the clearance, logistics, and documentation structures that transit parts are in absolute compliance with local governmental mandates and overall port requirements. We provide regulatory management and traceability to streamline the process, ensuring that the necessary parts are available when needed.
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

function services() {
  return (
    <>
      {/* Services Overview Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Process</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Our Transit Spare Parts <span className="text-blue-600 font-light">Process</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Moon Navigation and Trading Co., we coordinate the clearance, logistics, and documentation structures that transit parts are in absolute compliance with local governmental mandates and overall port requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Spare Parts Reception Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Step 1</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Spare Parts Reception
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We coordinate with airports, ports, courier services, or local suppliers to receive the spare parts upon arrival.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We handle air imports, ports, or designated warehouses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We coordinate with airlines, shipping lines and freight forwarders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regular updates and tracking for inbound shipments.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">
                  <span className="font-semibold">Benefit:</span> We minimize delays by ensuring efficient collection.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/spare-2.jpg" alt="Spare parts reception at port with agent and delivery vehicle" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Clearance Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/spare-3.jpg" alt="Customs officer inspecting documents for spare parts at port" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Step 2</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Customs Clearance
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  For shipments requiring customs clearance, we manage the process to ensure fast and hassle-free processing.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><span className="font-medium">Custom documentation verification</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><span className="font-medium">Duty waivers and formalities</span> as required for ship spares-in-transit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><span className="font-medium">Liaison with port and airport authorities</span> for smooth release</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">
                  <span className="font-semibold">Benefit:</span> No unnecessary hold-ups, ensuring fast delivery to the vessel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Delivery Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Step 3</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Direct Delivery to Ship
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Once cleared, we transport the spare parts directly to the vessel, whether at port or offshore.
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>On-time portside delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ship-to-ship or offshore transfer if required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Secure handling and damage prevention measures</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">
                  <span className="font-semibold">Benefit:</span> Ensures spare parts reach the ship without detour or delay.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/spare-4.jpg" alt="Spare parts being delivered directly to ship at port" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
              Your Reliable Partner in Spare Parts Logistics
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trust Moon Navigation and Trading Co. to be your reliable partner in navigating the complexities of spare parts logistics, ensuring a seamless and efficient operation for your business—whenever and wherever you need to trust.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Spare Parts Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. For Your Transit Spare Parts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast and reliable spare parts delivery with expert customs clearance and 24/7 support.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/49.png" alt="Fast and Reliable Service" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Fast and Reliable Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No delays in spare parts delivery.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/50.png" alt="Customs Clearance Expertise" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Customs Clearance Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Smooth handling of all regulatory procedures.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/48.png" alt="24/7 Support" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Available for urgent and emergency deliveries.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/51.png" alt="End-to-End Coordination" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                End-to-End Coordination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From reception to final ship delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <GetQuoteComponent topic="Transit Spare Parts" link="/ship-agency-forms"/> 
      <FAQSearch category="spare-parts" />
    </>
  );
}

export default function SparePartsPage() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}
