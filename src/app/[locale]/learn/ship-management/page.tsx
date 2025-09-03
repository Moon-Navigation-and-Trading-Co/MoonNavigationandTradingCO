"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGrid from "@/components/ReasonsGrid";
import { ArrowRight, Ship, Users, Wrench, Globe, Shield, DollarSign, Award, CheckCircle, TrendingUp, Anchor, Settings } from "lucide-react";

export default function ShipManagement() {
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
          src="/sm-1.jpg"
              alt="Ship Management Hero"
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
              <span className="text-white/90 text-sm font-medium">Professional Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Ship Management
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Comprehensive vessel operations, maintenance, and administration services for maximum efficiency and compliance
              </h2>
      </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link href="/ship-management-forms">
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

      {/* What is Ship Management Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Ship Management</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Ship Management?
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Ship management is the comprehensive process of overseeing the operation, maintenance, and administration of vessels, ensuring their maximum efficiency, safety, and compliance with international maritime regulations.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                At Moon Navigation and Trading Co., we excel in providing professional ship management services tailored to the needs of shipping companies, charterers, and owners. Our dedicated team is committed to upholding the highest standards in safety and regulatory compliance.
              </p>
      </div>
            
            {/* Right: Empty space (no image) */}
            <div className="hidden lg:block">
              {/* Empty right column to maintain layout */}
            </div>
      </div>
      </div>
    </section>



      {/* Detailed Service Sections */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technical Management */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-2.jpg"
              alt="Technical management team reviewing ship operations"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Technical Management</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Technical Management
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide full technical management services, ensuring vessels are maintained and operated to the highest standards.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Planned Maintenance:</span>
                      <span className="text-gray-600"> Regular monitoring and planned maintenance for vessel machinery and systems.</span>
      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Repairs and Troubleshooting:</span>
                      <span className="text-gray-600"> Fast response for technical problems onboard.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Dry Docking Supervision:</span>
                      <span className="text-gray-600"> Planning and execution of dry dock repairs and upgrades.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Spare Parts Management:</span>
                      <span className="text-gray-600"> Timely sourcing and delivery of critical spares and technical equipment.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Condition Monitoring:</span>
                      <span className="text-gray-600"> Ongoing performance tracking of onboard machinery and systems.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Regulatory Compliance:</span>
                      <span className="text-gray-600"> Ensuring full compliance of vessel with class requirements and international regulations (ISM, MARPOL, SOLAS, etc).</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Crew Management */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Crew Management</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Crew Management
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide experienced, trained, and qualified crew to operate your vessel smoothly.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Recruitment and Selection:</span>
                      <span className="text-gray-600"> Careful screening and hiring of competent officers and ratings.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Training and Certification:</span>
                      <span className="text-gray-600"> Ensuring all crew members are certified and trained to international standards (STCW, MLC 2006).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Crew Scheduling and Rotation:</span>
                      <span className="text-gray-600"> Managing schedules, rotations, and relief planning for smooth operations.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Medical and Welfare Support:</span>
                      <span className="text-gray-600"> Health checks, insurances, and ongoing crew welfare services.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Travel and Documentation:</span>
                      <span className="text-gray-600"> Handling visas, tickets, and all necessary seafarer paperwork.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Payroll and Administration:</span>
                      <span className="text-gray-600"> Salary management and crew documentation support.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-3.jpg"
              alt="Two crew members in uniform smiling on deck"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
      </div>
          </section>

          {/* Operational Management */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-4.jpg"
              alt="Ship operational management team at port"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Operational Management</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Operational Management
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We handle daily operations to ensure smooth, compliant, and efficient voyages.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Voyage Planning:</span>
                      <span className="text-gray-600"> Optimized routing and scheduling for cost and time efficiency.</span>
      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Port Call Coordination:</span>
                      <span className="text-gray-600"> Handling port clearances, agents, and berthing arrangements.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Cargo Operations Support:</span>
                      <span className="text-gray-600"> Ensuring safe and efficient cargo handling and documentation.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Charter Party Compliance Monitoring:</span>
                      <span className="text-gray-600"> Adherence to contractual obligations.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Reporting and Communication:</span>
                      <span className="text-gray-600"> Real-time updates and operational reporting to owners.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Procurement & Supply Chain Support */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Procurement & Supply Chain</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Procurement and Supply Chain Support
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We manage timely and cost-effective procurement to keep your vessel fully stocked.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Provisions and Stores:</span>
                      <span className="text-gray-600"> Sourcing food, safety gear, tools, and consumables.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Spare Parts Sourcing:</span>
                      <span className="text-gray-600"> Coordinating with trusted suppliers and OEMs.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Inventory Control:</span>
                      <span className="text-gray-600"> Stock level tracking to avoid shortages or overstocking.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Vendor Management:</span>
                      <span className="text-gray-600"> Evaluating suppliers to ensure quality and cost-efficiency.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Logistics Coordination:</span>
                      <span className="text-gray-600"> Global sourcing with end-to-end delivery management.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-5.jpg"
              alt="Warehouse worker in high-visibility vest standing in aisle of stocked shelves"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
      </div>
          </section>

          {/* Maintenance Planning & Condition Monitoring */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-6.jpg"
              alt="Engineers monitoring vessel maintenance and condition data on digital screens"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Maintenance Planning</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Maintenance Planning and Condition Monitoring
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We ensure vessel reliability through structured maintenance programs and continual equipment monitoring.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Planned Maintenance:</span>
                      <span className="text-gray-600"> Schedules based on manufacturer guidelines and vessel operating hours.</span>
      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Condition-Based Monitoring:</span>
                      <span className="text-gray-600"> Ongoing assessment of machinery performance to detect early signs of issues.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Fault Diagnostics:</span>
                      <span className="text-gray-600"> Predictive tools used to identify faults and reduce potential downtime.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Maintenance Optimization:</span>
                      <span className="text-gray-600"> Efficient planning to minimize costs and improve operational reliability.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">System Audit Routine:</span>
                      <span className="text-gray-600"> Checks to ensure compliance with industry and manufacturer standards.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Maintenance Records:</span>
                      <span className="text-gray-600"> Detailed documentation for performance tracking and regulatory transparency.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Safety & Quality Management */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Safety & Quality</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Safety and Quality Management
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We promote a strong safety culture onboard and ashore.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Safety Management System (SMS):</span>
                      <span className="text-gray-600"> Full implementation of ISM Codes and safety protocols.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Incident Reporting and Investigation:</span>
                      <span className="text-gray-600"> Proper analysis and follow-up to prevent recurrence, with risk assessments, reporting procedures, and continuous improvement.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Emergency Preparedness:</span>
                      <span className="text-gray-600"> Conducting drills and training for all onboard scenarios.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Audits and Inspections:</span>
                      <span className="text-gray-600"> Internal audits and port state inspection readiness.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Environmental Compliance:</span>
                      <span className="text-gray-600"> Monitoring pollution control measures and MARPOL adherence.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-7.jpg"
              alt="Engineer in safety gear inspecting control panels for quality management"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
        </div>
          </section>

          {/* Fuel & Provision Management */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-8.jpg"
              alt="Engineer in safety gear managing fuel and provisions on a ship"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Fuel & Provisions</span>
      </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Fuel and Provision Management
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We manage your vessel's fuel and supply needs with precision and reliability.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Bunker Procurement:</span>
                      <span className="text-gray-600"> Sourcing quality fuel at competitive rates from trusted suppliers.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Fuel Monitoring:</span>
                      <span className="text-gray-600"> Tracking consumption to optimize efficiency and reduce costs.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Provisions and Stores Supply:</span>
                      <span className="text-gray-600"> Timely delivery of food, consumables, and technical stores.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Inventory Management:</span>
                      <span className="text-gray-600"> Monitoring onboard stock levels and usage trends.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Regulatory Compliance:</span>
                      <span className="text-gray-600"> Adhering to fuel quality standards and IMO environmental rules.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Regulatory Compliance & Certification */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/ship-management-crew.jpg"
              alt="Ship management professionals reviewing compliance documents"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Regulatory Compliance</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Regulatory Compliance and Certification
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We ensure your vessel complies with all international and local regulations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Flag State Certification:</span>
                      <span className="text-gray-600"> Managing due renewals and approvals.</span>
      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Class Surveys and Insurance:</span>
                      <span className="text-gray-600"> Scheduling inspections with class societies.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">ISM and ISPS/MLC Management:</span>
                      <span className="text-gray-600"> Certification control of all required certificates and audits.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Maritime Law Advisory:</span>
                      <span className="text-gray-600"> Supporting owners in regulatory and legal matters.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">SIRE and MARPOL Compliance:</span>
                      <span className="text-gray-600"> SIRE implementation and monitoring.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Management & Budget Control */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Financial Management</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Financial Management and Budget Control
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We help owners maintain financial transparency and control.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Operating Budget Planning:</span>
                      <span className="text-gray-600"> Estimates costs for routine vessel operation.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Monthly Reporting:</span>
                      <span className="text-gray-600"> Detailed breakdown of expenditures, income, and cost.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Cost Control Monitoring:</span>
                      <span className="text-gray-600"> Usage and efficiency improvement assessment.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Owner Reports:</span>
                      <span className="text-gray-600"> Clear monthly updates on vessel financial performance.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Forecasting Strategy:</span>
                      <span className="text-gray-600"> Informed planning for future operations.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Audit Support:</span>
                      <span className="text-gray-600"> Assistance in internal and external financial audits.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-10.jpg"
              alt="Ship management financial expert reviewing budget documents"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
      </div>
          </section>

          {/* Insurance & Claims Handling */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-11.jpg"
              alt="Insurance and claims handling meeting"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Insurance & Claims</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Insurance and Claims Handling
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We assist in arranging the right insurance cover and managing claims on your behalf.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Insurance Arrangement:</span>
                      <span className="text-gray-600"> Hull and Machinery, PandI, War Risk, and more.</span>
      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Claims Handling:</span>
                      <span className="text-gray-600"> Full support in claim documentation and follow-up.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Incident Documentation:</span>
                      <span className="text-gray-600"> Preparing accurate and timely reports for insurers.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Risk Assessment:</span>
                      <span className="text-gray-600"> Proactive evaluation to minimize operational risks.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Certificate Management:</span>
                      <span className="text-gray-600"> Keeping all insurance and compliance documents up to date.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dry Docking & Project Management */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Dry Docking</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Dry Docking and Project Management
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We manage your vessel's repairs and upgrades from start to finish.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Pre-Docking Planning:</span>
                      <span className="text-gray-600"> Scope of work, budgeting, and yard selection.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Onsite Supervision:</span>
                      <span className="text-gray-600"> Close monitoring of dock work to ensure timeline and quality.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Post-Docking Reports:</span>
                      <span className="text-gray-600"> Full documentation and cost review for owners.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Project Execution:</span>
                      <span className="text-gray-600"> Support for major retrofits or new system installations.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Budget and Timeline Control:</span>
                      <span className="text-gray-600"> Managing projects with known time and cost.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Quality Assurance:</span>
                      <span className="text-gray-600"> Final testing and inspection before vessel delivery.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-12.jpg"
              alt="Shipyard team planning dry docking project"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
      </div>
          </section>

          {/* Performance Monitoring & Reporting */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-13.jpg"
              alt="Team analyzing ship performance data on screens"
                    fill
                    className="object-cover"
            />
          </div>
        </div>
              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Performance Monitoring</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Performance Monitoring and Reporting
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  We provide clear data and insights to help you optimize operations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Fuel and Energy Efficiency Monitoring:</span>
                      <span className="text-gray-600"> Consumption and bunkering assessments.</span>
      </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Voyage Reports:</span>
                      <span className="text-gray-600"> Operational data and benchmarking.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">KPI Analysis:</span>
                      <span className="text-gray-600"> Speed, fuel deviation, emissions, and other key metrics.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Preventive Actions:</span>
                      <span className="text-gray-600"> Identifying patterns and reducing risks early.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

                    {/* Customized Ship Management Solutions */}
          <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Customized Solutions</span>
        </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Customized Ship Management Solutions
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every ship and owner has unique operational preferences, fleet sizes, and business objectives. We design bespoke management solutions that align perfectly with your specific requirements and strategic goals.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Flexible Management Models:</span>
                      <span className="text-gray-600"> Choose from full management, partial management, or advisory services based on your operational needs and internal capabilities.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Modular Service Packages:</span>
                      <span className="text-gray-600"> Select specific service modules or comprehensive full-scope management tailored to your vessel type, trade routes, and operational complexity.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Strategic Consulting & Advisory:</span>
                      <span className="text-gray-600"> Expert guidance on fleet optimization, regulatory compliance, operational efficiency, and market positioning strategies.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Scalable Solutions:</span>
                      <span className="text-gray-600"> Services that grow with your fleet, from single vessel management to comprehensive multi-vessel operations.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Technology Integration:</span>
                      <span className="text-gray-600"> Custom digital solutions and reporting systems that integrate with your existing operational platforms and business processes.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-900">Performance Optimization:</span>
                      <span className="text-gray-600"> Data-driven insights and continuous improvement programs designed specifically for your operational profile and market conditions.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/sm-14.jpg"
              alt="Business meeting for customized ship management solutions with ships in background"
                    fill
                    className="object-cover"
            />
              </div>
            </div>
          </div>
          </section>
        </div>
      </section>

      {/* Crisis & Emergency Response Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-900"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                    <span>Emergency Response</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight">
                    Crisis & Emergency Response Management
                  </h2>
                  
                  <p className="text-lg text-red-100 leading-relaxed">
                    We implement comprehensive emergency preparedness solutions to ensure quick, effective action during critical situations.
                  </p>
                  
                  <ul className="space-y-3">
                    {['Emergency Response Planning', '24/7 Support and External Coordination', 'On-site and Remote Mitigation', 'Contingency Management', 'Crisis Incident Assistance', 'Post-Incident Reporting'].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-red-100">
                        <CheckCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
      </div>
                
                {/* Image */}
                <div className="relative">
                  <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative group">
                    <div className="relative w-full h-[400px]">
            <Image
              src="/sm-15.jpg"
                        alt="Crisis and Emergency Response"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                        sizes="(max-width: 768px) 100vw, 600px"
            />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Ship Management Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your Ship Management Needs:
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with Moon Navigation and Trading Co. means more than just ship management — it means becoming part of a comprehensive maritime solution that prioritizes your vessel's success.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* First Row: 3 items */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/other services/25.png" alt="360° ship management under one roof" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                360° ship management under one roof
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive management services under a single roof.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/other services/26.png" alt="Transparent communication and owner-first approach" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Transparent communication and owner-first approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clear communication with an owner-first approach to service.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/other services/27.png" alt="Strict adherence to international maritime standards" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Strict adherence to international maritime standards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compliance with all international maritime standards and regulations.
              </p>
            </div>
          </div>

          {/* Second Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/other services/28.png" alt="Proactive problem-solving and risk mitigation" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Proactive problem-solving and risk mitigation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Anticipating and addressing potential issues before they become problems.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/other services/29.png" alt="Scalable services for both small and large fleets" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Scalable services for both small and large fleets
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible services that scale with your fleet size and requirements.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/other services/30.png" alt="Competitive pricing with uncompromised service quality" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Competitive pricing with uncompromised service quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality services at competitive market rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Component */}
      <GetQuoteComponent topic="Ship Management" link="/ship-management-forms" />
      
      {/* FAQ Section */}
      <FAQSearch category="ship-management" />    
    </main>
  );
}
