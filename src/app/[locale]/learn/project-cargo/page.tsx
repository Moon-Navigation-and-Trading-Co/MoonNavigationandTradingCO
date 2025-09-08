"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import dynamic from "next/dynamic";

import ReasonsGrid from "@/components/ReasonsGrid";
import { Award, Ruler, Settings, Truck, Clock, Building2, Shield, DollarSign, Anchor } from "lucide-react";

const ProjectCargoIndustryCarousel = dynamic(() => import("@/components/project-cargo-industry-carousel"), { ssr: false });

//seo

function Overview() {
  const t = useTranslations("learn-project-cargo");
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
              src="/project-cargo-hero.jpg"
              alt="Project Cargo Hero"
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
              <span className="text-white/90 text-sm font-medium">Project Cargo Solutions</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Project Cargo<br />Services
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Specialized transportation of large, heavy, high-value equipment and materials requiring meticulous handling and precise coordination
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/ocean-freight-forms">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Request a Quote
                  </span>
                </button>
              </Link>
              <Link href="#services">
                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
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

             {/* What is Project Cargo? Section */}
       <section className="px-4 sm:px-6 lg:px-8 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             {/* Left: Content */}
             <div className="space-y-6">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                 <span>Project Cargo</span>
               </div>
               
               <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                 What is Project Cargo?
               </h2>
               
               <p className="text-base text-gray-600 leading-relaxed">
              Project cargo in ocean freight entails the transportation of large, heavy, high-value or complex pieces of equipment and materials. At Moon Navigation and Trading Co., we specialize in managing these specialized shipments, which are intricately linked to specific projects and require meticulous handling, specialized equipment, and precise coordination.
            </p>
               
               <p className="text-base text-gray-600 leading-relaxed">
              We understand that ensuring the safe and timely delivery of project cargo is vital for the successful execution of industrial and infrastructure projects. Our dedicated team is committed to providing comprehensive solutions that address the unique challenges of project cargo logistics, making this a critical aspect of services in global trade.
            </p>
          </div>
             
             {/* Right: Empty space (no image) */}
             <div className="hidden lg:block">
               {/* Empty right column to maintain layout */}
        </div>
      </div>
         </div>
       </section>



       {/* Key Industries Section */}
       <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center space-y-6 mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
               <span>Industry Solutions</span>
             </div>
             
             <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
               Key Industries <span className="text-gray-900 font-light">Leveraging Our Project Cargo Solution</span>
             </h2>
             <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
               We serve diverse industries with specialized project cargo solutions, ensuring safe and efficient transportation of critical equipment and materials across global markets.
             </p>
           </div>

           <div className="relative w-full max-w-7xl mx-auto">
             <ProjectCargoIndustryCarousel />
             </div>
                         </div>
       </section>



       {/* Project Cargo vs Standard Cargo Comparison Table */}
       <section className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-20">
         <div className="text-center mb-8 md:mb-16 overflow-hidden">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
             <Award className="w-3 h-3 md:w-4 md:h-4" />
            <span>Project Cargo vs Standard Cargo</span>
          </div>
           <h2 className="text-xl md:text-3xl lg:text-4xl font-raleway font-light text-gray-900 dark:text-white mb-4 md:mb-6 break-words overflow-visible">
          Key Differences between Project Cargo and Standard Cargo
        </h2>
           <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed break-words overflow-visible">
            Understanding the fundamental differences helps you choose the right shipping solution for your specific needs.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden relative group">
          <div className="overflow-x-auto relative table-scroll-container">
            {/* Mobile Swipe Arrows */}
            <div className="hidden md:block">
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 opacity-0 group-hover:opacity-100" 
                      onClick={() => {
                        const tableContainer = document.querySelector('.table-scroll-container');
                        if (tableContainer) {
                          tableContainer.scrollLeft -= 300;
                        }
                      }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      onClick={() => {
                        const tableContainer = document.querySelector('.table-scroll-container');
                        if (tableContainer) {
                          tableContainer.scrollLeft += 300;
                        }
                      }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Mobile Swipe Indicator */}
            <div className="md:hidden flex justify-center items-center gap-2 py-4 text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-sm">Swipe to view more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <table className="w-full">
            <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                  <th className="px-8 py-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-raleway font-medium text-gray-900 dark:text-white">Feature</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Comparison Criteria</p>
                      </div>
                    </div>
                  </th>
                  <th className="px-8 py-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-200 dark:bg-blue-800/40 rounded-full flex items-center justify-center">
                        <Anchor className="w-5 h-5 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Project Cargo</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Specialized Solutions</p>
                      </div>
                    </div>
                  </th>
                  <th className="px-8 py-6 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">Standard Cargo</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Conventional Methods</p>
                      </div>
                    </div>
                  </th>
              </tr>
            </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <Ruler className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Size and Weight</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Physical dimensions and mass</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Oversized, heavy, and irregular-shaped items that exceed standard dimensions</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Standard-sized goods that fit in containers or pallets</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-200 dark:bg-blue-800/40 rounded-full flex items-center justify-center">
                        <Anchor className="w-4 h-4 text-blue-700 dark:text-blue-300" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Handling Requirements</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Equipment and methods needed</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Specialized handling with cranes, flat racks, heavy-lift vessels, RoRo, and breakbulk</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Conventional methods using pallets, boxes, and containers</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-300 dark:bg-blue-700/50 rounded-full flex items-center justify-center">
                        <Settings className="w-4 h-4 text-blue-800 dark:text-blue-200" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Logistics Complexity</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Planning and coordination level</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">High complexity with route surveys, permits, customs clearances, and infrastructure adjustments</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Low complexity following standard transportation procedures</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-400 dark:bg-blue-600/60 rounded-full flex items-center justify-center">
                        <Truck className="w-4 h-4 text-blue-900 dark:text-blue-100" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Transport Equipment</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Vessels and vehicles used</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Heavy-lift vessels, modular trailers, open-top containers, SPMTs</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Standard containers (20ft, 40ft), trucks, forklifts</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 dark:bg-blue-500/70 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white dark:text-blue-50" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Time Sensitivity</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Delivery urgency and flexibility</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Critical for large-scale projects, delays can be extremely costly</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">More flexible transit schedules with standard delivery times</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400/80 rounded-full flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-white dark:text-blue-50" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Industries Served</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Target business sectors</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Energy, construction, oil and gas, mining, infrastructure</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Retail, electronics, textiles, consumer goods</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-700 dark:bg-blue-300/90 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white dark:text-blue-50" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Risk and Insurance</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Liability and coverage requirements</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Higher risk due to size and complexity, requires specialized insurance coverage</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Lower risk, covered by standard cargo insurance policies</p>
                    </div>
                  </td>
              </tr>

                <tr className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-800 dark:bg-blue-200 rounded-full flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-white dark:text-blue-900" />
                      </div>
                      <div>
                        <h4 className="font-raleway font-medium text-gray-900 dark:text-white">Shipping Cost</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Pricing and expense factors</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Higher due to special handling, permits, and comprehensive logistics planning</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">Lower, based on weight, volume, and standard tariffs</p>
                    </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/learn/project-cargo/learn-more"> 
            <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-raleway font-light text-base transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              Learn More About Our Project Cargo Solutions 
              </span>
            </button>
          </Link> 
        </div>
      </section>

       

      {/* Why is project cargo unique? Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 mt-16 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/60 text-blue-700 rounded-full text-xs font-medium shadow-sm mb-6">
            <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Unique Characteristics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-raleway font-light text-gray-900 dark:text-white mb-6 leading-tight">
            Why is Project Cargo Unique?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-cyan-900/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1500"></div>
          </div>
          
          <div className="relative z-10">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-white/60 dark:border-gray-700/60 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="group text-center p-6 rounded-2xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-base font-raleway font-light text-gray-900 dark:text-white mb-2">Detailed Surveys</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Assessing dimensions, weight, and transport feasibility</p>
                </div>

                <div className="group text-center p-6 rounded-2xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-700 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-raleway font-light text-gray-900 dark:text-white mb-2">Permit Management</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Securing necessary documentation for oversized loads</p>
                </div>

                <div className="group text-center p-6 rounded-2xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-300 dark:bg-blue-700/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-800 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-raleway font-light text-gray-900 dark:text-white mb-2">Coordination</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Between ports, carriers, and local authorities</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-raleway font-light">Critical Segment</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-base">
            It is a critical segment of ocean freight that demands expertise in logistics and engineering to ensure the successful delivery of valuable assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Overcome Challenges Section */}
                  <section className="px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>Challenge Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-4">
            How are we overcoming challenges in project cargo transportation?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Strategic Planning Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Strategic Planning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            At Moon Navigation and Trading Co., we recognize that project cargo is unique, as each shipment is treated as a one-of-a-kind operation that requires a tailored approach to logistics. The process begins with detailed surveys, where we assess the dimensions, weight, and transport feasibility of your cargo to ensure optimal planning.
          </p>
                  </div>
                </div>
              </div>

              {/* Compliance & Coordination Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Compliance & Coordination</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We prioritize permit management, securing all necessary documentation for oversized loads to ensure compliance with regulations. Additionally, our team excels in coordination with ports, carriers, and local authorities to streamline the transportation process.
          </p>
                  </div>
                </div>
              </div>

          {/* Custom Handling Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Custom Handling & Packaging</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our team employs specialized handling techniques and tailored packaging solutions to guarantee the safety and stability of project cargo throughout the entire transport process.
                </p>
              </div>
            </div>
          </div>

          {/* Intermodal Transport Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Intermodal Transport Coordination</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We seamlessly integrate sea, road, and rail transport, facilitating smooth coordination across different modes of transportation to ensure efficient delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Safety & Security Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Enhanced Safety & Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our comprehensive security protocols and monitoring systems are designed to protect valuable and complex cargo throughout the entire transport process.
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Equipment Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Advanced Equipment & Technology</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We utilize state-of-the-art cranes, gantries, and hydraulic platforms to accurately lift and position exceptionally heavy items, ensuring secure transport with precision.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Project Cargo Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-raleway font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your Project Cargo Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Moon Navigation and Trading Co., we offer comprehensive end-to-end solutions for project cargo transportation, meticulously overseeing every logistical aspect from planning to delivery.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/9.png" alt="Dedicated Project Cargo Team" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Dedicated Project Cargo Team
                  </h3>
              <p className="text-gray-600 leading-relaxed">
                Our proficient team excels in managing the complexities of project logistics, delivering customized solutions tailored to your specific requirements.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/10.png" alt="Specialized Equipment & Vessels" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Specialized Equipment & Vessels
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From permits and health certificates to customs clearance, we manage all necessary documentation.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/11.png" alt="Global Reach & Local Expertise" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global Reach & Local Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With a strong global network, we offer seamless project cargo transport to any destination, supported by local expertise at each stage of the journey.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/8.png" alt="Risk Management & Compliance" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Risk Management & Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We proactively manage any risk factors associated with project cargo, ensuring all international shipping regulations, permits, and insurance requirements are met.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetQuoteComponent topic="Project Cargo" link="/ocean-freight-forms" />
      <FAQSearch category="project-cargo" />
    </>
  );
}

function Services() {
  const t = useTranslations("learn-project-cargo");
  return (
    <div className="space-y-32">
      {/* This function is intentionally empty as the content has been moved to the overview function */}
    </div>
  );
}

export default function ProjectCargoPage() {
  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
      <Overview />
      <Services />
    </main>
  );
}


