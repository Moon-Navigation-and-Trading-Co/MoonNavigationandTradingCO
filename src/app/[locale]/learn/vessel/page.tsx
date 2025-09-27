"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import FAQSearch from "@/components/faq";
import { Award, Ship, Settings, DollarSign, Calendar, Truck, Shield, Wrench } from "lucide-react";
import ExamplesCarousel, { ExampleItem } from "@/components/examples-carousel";




const industriesWeServe: ExampleItem[] = [
  {
    id: 1,
    image: "/iv-1.jpg",
    title: "International Shipping & Freight",
    description: "Cargo vessels and freight solutions for global trade and logistics operations.",
    alt: "International Shipping & Freight"
  },
  {
    id: 2,
    image: "/iv-2.jpg",
    title: "Offshore Oil & Gas Operations",
    description: "Specialized vessels for offshore drilling, production, and maintenance operations.",
    alt: "Offshore Oil & Gas Operations"
  },
  {
    id: 3,
    image: "/iv-3.jpg",
    title: "Marine Construction Projects",
    description: "Specialized vessels for offshore construction, dredging, and marine infrastructure development.",
    alt: "Marine Construction Projects"
  },
  {
    id: 4,
    image: "/iv-4.jpg",
    title: "Dredging & Port Development",
    description: "Dredging vessels and equipment for port maintenance and harbor development projects.",
    alt: "Dredging & Port Development"
  },
  {
    id: 5,
    image: "/iv-5.jpg",
    title: "Energy and Infrastructure Projects",
    description: "Vessels supporting renewable energy installations and major infrastructure developments.",
    alt: "Energy and Infrastructure Projects"
  },
  {
    id: 6,
    image: "/iv-6.jpg",
    title: "Ship Supply and Crew Change Operations",
    description: "Support vessels for offshore supply, crew transfers, and maritime logistics services.",
    alt: "Ship Supply and Crew Change Operations"
  }
];

const vesselTypes: ExampleItem[] = [
  {
    id: 1,
    image: "/vc-1.jpg",
    title: "General Cargo Vessels",
    description: "Versatile ships designed to carry various types of dry cargo in different packaging formats.",
    alt: "General Cargo Vessels"
  },
  {
    id: 2,
    image: "/vc-2.jpg",
    title: "Bulk Carriers",
    description: "Large vessels specifically designed to transport unpackaged bulk cargo like grain, coal, and ore.",
    alt: "Bulk Carriers"
  },
  {
    id: 3,
    image: "/vc-3.jpg",
    title: "Tankers",
    description: "Specialized vessels for transporting liquid cargo including oil, chemicals, and petroleum products.",
    alt: "Tankers"
  },
  {
    id: 4,
    image: "/vc-4.jpg",
    title: "Container Ships",
    description: "Modern vessels designed to carry standardized shipping containers for efficient cargo handling.",
    alt: "Container Ships"
  },
  {
    id: 5,
    image: "/vc-5.jpg",
    title: "Offshore Support Vessels (OSVs)",
    description: "Specialized vessels providing support services to offshore oil and gas operations.",
    alt: "Offshore Support Vessels"
  },
  {
    id: 6,
    image: "/vc-6.jpg",
    title: "Tugboats and Barges",
    description: "Essential vessels for harbor operations, towing, and inland waterway transportation.",
    alt: "Tugboats and Barges"
  },
  {
    id: 7,
    image: "/vc-7.jpg",
    title: "Landing Craft & Ro-Ro Vessels",
    description: "Vessels designed for roll-on/roll-off cargo operations and beach landings.",
    alt: "Landing Craft & Ro-Ro Vessels"
  },
  {
    id: 8,
    image: "/vc-8.jpg",
    title: "Crew Boats & Utility Boats",
    description: "Smaller vessels for crew transfers, supply operations, and utility services.",
    alt: "Crew Boats & Utility Boats"
    }
];

export default function VesselPage() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = document.getElementById('table-scroll-container');
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = document.getElementById('table-scroll-container');
    if (container) {
      updateScrollButtons();
      container.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      
      return () => {
        container.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      };
    }
  }, []);

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
              src="/vessel rentals and purchases 1.jpg"
              alt="Vessel Purchases and Rentals Hero"
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
              <span className="text-white/90 text-sm font-medium">Maritime Solutions</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Vessel Purchases<br />and Rentals
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Comprehensive selection of high-quality vessels for sale and rental, tailored to meet your specific maritime requirements
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/buy-rent-vessels-forms">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Get Quote
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

      {/* What is Vessel Solutions? Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Vessel Solutions</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-light text-gray-900 leading-tight">
                Looking to buy or rent a vessel?
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                We recognize the diverse needs of businesses and individuals in shipping and transport solutions. That is why we offer a comprehensive selection of high-quality vessels for sale and rental, tailored to meet your specific requirements.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Our services ensure a seamless experience, whether you are seeking to acquire a vessel or finalize perfect charters. Trust us to provide exceptional options and expert guidance to fulfill your maritime needs efficiently at Moon Marine and Sea Trading Company.
              </p>
            </div>
            
            {/* Right: Empty space (no image) */}
            <div className="hidden lg:block">
              {/* Empty right column to maintain layout */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between rounded-[40px] p-8 md:p-16">
          <div className="w-full md:w-[500px] flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
            <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/vessel rentals and purchases 2.jpg"
                alt="Vessel Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-12">
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-10" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Vessel Solutions for Every<br />Need
            </h2>
            <p className="text-foreground text-sm md:text-base mb-2 font-medium">
                At Moon Marine and Sea Trading Company, we are providing vessels that embody durability and reliability, engineered to withstand harsh weather conditions and ensure the smooth safe delivery of your cargo.
              </p>
            <p className="text-foreground text-sm md:text-base mb-2">
                Our offerings include customizable options, catering to a wide array of requirements—from specialized vessels designed for specific cargo types to versatile multipurpose vessels.
              </p>
            <p className="text-foreground text-sm md:text-base">
                With an extensive selection of vessels and leases, we enable you to select the ideal solution to meet your project&apos;s demands. Furthermore, our cost-effective and scalable services ensure the optimum fit for both economic and rental options, and our expert solutions are accessible to all without compromising on quality.
              </p>
          </div>
        </div>
      </section>

      {/* Types of Vessels Available for Sale Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Vessel Types</span>
            </div>
          </div>
        
          <ExamplesCarousel 
            items={vesselTypes}
            title="Types of Vessels Available for Sale"
            subtitle="We offer a comprehensive range of vessel types to meet diverse maritime needs:"
          />
        </div>
      </section>

      {/* Rental Services Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16 bg-white text-black shadow-lg border border-gray-200" style={{ fontFamily: 'Raleway, sans-serif' }}>
          {/* Left column: Renting Vessels */}
          <div className="flex-1 flex flex-col items-start md:pr-12 mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Rental Solutions</span>
            </div>
            <div className="text-black text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Renting<br />Vessels
            </div>
            <div className="text-gray-700 text-base md:text-lg mb-8 max-w-md leading-relaxed">
              Renting a vessel is an excellent solution for short-term or temporary maritime requirements.
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-[#256094] to-blue-400 rounded-full" />
          </div>
          {/* Right column: services */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h3 className="text-lg md:text-xl font-light text-black mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              We offer the following services to ensure a seamless rental experience:
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Flexible Rental Terms</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Quick Delivery</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Maintenance Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

              
              {/* Buying Vessels Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16 bg-white text-black shadow-lg border border-gray-200" style={{ fontFamily: 'Raleway, sans-serif' }}>
          {/* Left column: title and subtitle */}
          <div className="flex-1 flex flex-col items-start md:pr-12 mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Purchase Solutions</span>
            </div>
            <div className="text-black text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Buying<br />Vessels
            </div>
            <Link href="#" className="text-[#256094] text-lg font-normal mt-2 hover:underline transition-colors duration-200 inline-flex items-center gap-2 group">
              <span>Seeking a permanent solution?</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="w-full h-1 bg-gradient-to-r from-[#256094] to-blue-400 rounded-full" />
          </div>
          {/* Right column: benefits */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            <div className="text-black text-lg md:text-xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Our vessels offer the following benefits:
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Ready for Immediate Use</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Settings className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Customizable</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-200/50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Cost-Effective</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-6 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50">
              Choose us, Moon Navigation and Trading Co. for a dependable and versatile solution that meets your needs.
            </div>
          </div>
        </div>
      </section>



      {/* Purchase vs Charter Comparison */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center rounded-[40px] p-8 md:p-16">
          <div className="w-full max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Decision Guide</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Purchase or Charter – What is Best for You?
            </h2>
            <p className="text-foreground text-sm md:text-base mb-8 text-center">
              We help you decide the best approach based on your operations, timeline, and budget.
            </p>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative">
                <div 
                  id="table-scroll-container"
                  className="overflow-x-auto scrollbar-hide" 
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <table className="min-w-[800px] w-full">
                <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                      <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left min-w-[200px]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-raleway font-light text-gray-900 dark:text-white">Criteria</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Comparison Factors</p>
                          </div>
                        </div>
                      </th>
                      <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left min-w-[180px]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-200 dark:bg-blue-800/40 rounded-full flex items-center justify-center">
                            <Ship className="w-5 h-5 text-blue-700 dark:text-blue-300" />
                          </div>
                          <div>
                            <h3 className="text-base font-raleway font-light text-blue-700 dark:text-blue-300">Purchase</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Asset Ownership</p>
                          </div>
                        </div>
                      </th>
                      <th className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left min-w-[180px]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-base font-raleway font-light text-blue-600 dark:text-blue-300">Rental / Charter</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Flexible Solutions</p>
                          </div>
                        </div>
                      </th>
                  </tr>
                </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-base font-raleway font-light text-gray-900 dark:text-white">Duration</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Time commitment</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Long-term operations</p>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Short- or medium-term projects</p>
                        </div>
                      </td>
                  </tr>

                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-200 dark:bg-blue-800/40 rounded-full flex items-center justify-center">
                            <DollarSign className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                          </div>
                          <div>
                            <h4 className="text-base font-raleway font-light text-gray-900 dark:text-white">Capital Investment</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Financial commitment</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Higher (asset ownership)</p>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Lower operating expense</p>
                        </div>
                      </td>
                  </tr>

                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-300 dark:bg-blue-700/50 rounded-full flex items-center justify-center">
                            <Settings className="w-4 h-4 text-blue-800 dark:text-blue-200" />
                          </div>
                          <div>
                            <h4 className="text-base font-raleway font-light text-gray-900 dark:text-white">Flexibility</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Adaptability to changes</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Less flexible</p>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Highly flexible</p>
                        </div>
                      </td>
                  </tr>

                    <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-400 dark:bg-blue-600/60 rounded-full flex items-center justify-center">
                            <Wrench className="w-4 h-4 text-blue-900 dark:text-blue-100" />
                          </div>
                          <div>
                            <h4 className="text-base font-raleway font-light text-gray-900 dark:text-white">Maintenance Responsibility</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Upkeep and repairs</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Owner&apos;s responsibility</p>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                          <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Often included in charter terms</p>
                        </div>
                      </td>
                  </tr>
                </tbody>
              </table>
                </div>
                
                {/* Scroll Arrows */}
                <button 
                  id="scroll-left"
                  className="absolute top-1/2 -left-6 transform -translate-y-1/2 hidden md:flex w-10 h-10 bg-white rounded-full shadow-xl border-2 border-gray-200 items-center justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-blue-600 z-10"
                  disabled={!canScrollLeft}
                  onClick={() => {
                    const container = document.getElementById('table-scroll-container');
                    if (container) {
                      container.scrollBy({ left: -200, behavior: 'smooth' });
                    }
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  id="scroll-right"
                  className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden md:flex w-10 h-10 bg-white rounded-full shadow-xl border-2 border-gray-200 items-center justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-blue-600 z-10"
                  disabled={!canScrollRight}
                  onClick={() => {
                    const container = document.getElementById('table-scroll-container');
                    if (container) {
                      container.scrollBy({ left: 200, behavior: 'smooth' });
                    }
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Mobile Scroll Hint */}
                <div className="md:hidden flex items-center justify-center py-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>Swipe to view more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Types Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
            <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/ve-5.jpg" alt="Charter Types" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Charter Types</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Charter Types We Offer
            </h2>
            <p className="text-foreground text-sm md:text-base mb-4">
              We provide multiple flexible chartering arrangements:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm md:text-base text-foreground">
              <li>Time Charter – Rent a vessel for a fixed time (crew included)</li>
              <li>Voyage Charter – Rent for a specific voyage or cargo movement</li>
              <li>Bareboat Charter – Rent the vessel only, without crew</li>
              <li>Project Charter – Custom solutions for marine projects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/ve-6.jpg" alt="Our Process" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pr-12 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Our Process – Step by Step
            </h2>
            <p className="text-foreground text-sm md:text-base mb-4">
              Whether you are buying or renting, we simplify your experience:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-sm md:text-base text-foreground">
              <li>Requirement Consultation – We understand your operation goals</li>
              <li>Vessel Sourcing – We identify matching vessels from our global network</li>
              <li>Technical Review – Surveys, classification & inspections</li>
              <li>Commercial Negotiation – We handle pricing and terms</li>
              <li>Contract & Documentation – Transparent and compliant paperwork</li>
              <li>Delivery Coordination – Smooth handover or project start</li>
              <li>Ongoing Support – After-sales or rental management</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
            <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/ve-7.jpg" alt="Technical Support" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Technical Support</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Technical Support & Compliance
            </h2>
            <p className="text-foreground text-sm md:text-base mb-4">
              All vessels come with verified:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm md:text-base text-foreground">
              <li>Class Certification</li>
              <li>Flag Registration</li>
              <li>Insurance & Regulatory Compliance</li>
              <li>Pre-delivery inspection reports</li>
              <li>Crew availability (for chartered vessels)</li>
              <li>Maintenance records (for pre-owned units)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Customization Options Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/ve-8.jpg" alt="Customization Options" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pr-12 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Customization</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Customization Options
            </h2>
            <p className="text-foreground text-sm md:text-base mb-4">
              We can arrange vessel modifications or outfitting to match your project:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm md:text-base text-foreground">
              <li>Deck strength enhancements</li>
              <li>Cargo gear and crane additions</li>
              <li>Accommodation upgrades</li>
              <li>Communication & navigation systems</li>
              <li>Offshore safety equipment installation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Industries We Serve</span>
            </div>
          </div>
        
          <ExamplesCarousel 
            items={industriesWeServe}
            title="Industries We Serve"
            subtitle="Our vessel services support multiple sectors including:"
          />
        </div>
      </section>

      {/* Global Delivery Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
            <div className="relative w-full aspect-[4/3] min-h-[250px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/ve-9.jpg" alt="Global Delivery & Deployment" fill className="object-cover" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start md:pl-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-4">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Global Delivery</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Global Delivery & Deployment
            </h2>
            <p className="text-foreground text-sm md:text-base mb-4">
              We support delivery of vessels to major ports and terminals worldwide. Whether local or international deployment, we coordinate:
            </p>
            <ul className="list-disc pl-6 mb-4 text-sm md:text-base text-foreground">
              <li>Delivery voyage planning</li>
              <li>Crew change logistics</li>
              <li>Port handling & clearance</li>
              <li>Transit formalities</li>
            </ul>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Vessel Rental/Purchase" link="/buy-rent-vessels-forms" />
      <FAQSearch category="vessel-purchases-rentals"/>
    </main>
  );
}
