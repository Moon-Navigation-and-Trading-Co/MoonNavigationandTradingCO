"use client"
import FAQSearch from "@/components/faq";
import GetQuoteComponent from "@/components/getQuoteComponent";
import OverviewServicesTabs from "@/components/overview-services";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import ReasonsGrid from "@/components/ReasonsGrid";
import FormTabs from "@/components/form-tabs";
import CrewLearnMorePage from "./learn-more/page";
import { Award } from "lucide-react";
import { useState } from "react";


function overview(setActiveTab: (tabId: string) => void){
  return (
    <>
      {/* What is Crew Management? Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Crew Management</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Crew Management?
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Crew management in ship agency involves the comprehensive oversight and coordination of maritime personnel to ensure smooth operations. This process includes recruiting crew members, providing necessary training, and managing their deployment and schedule. Effective crew management is essential for maintaining compliance with maritime regulations and fostering a cohesive working environment. Ultimately, it contributes to the overall efficiency and success of shipping operations.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                At Moon Navigation and Trading Co., we provide comprehensive management services, facilitating both the onboarding (sign-on) and disembarkation (sign-off) of crew members in compliance with maritime regulations and local port requirements.
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
  )
}

function services(setActiveTab: (tabId: string) => void){
  return(
    <>
      {/* Crew Sign-On Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Crew Onboarding</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Our sign-on onboarding authorities to secure necessary port entry passes
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Travel Arrangements</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We coordinate flights, transfers, and accommodation, securing a seamless travel experience. Additionally, we liaise with port authorities to secure vital entry passes, facilitating smooth access for your crew.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Port and Immigration Formalities</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We ensure the submission of all required documentation for immigration and customs authorities, working with relevant bodies to provide official IDs or clearances.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-900">Transportation to Vessel</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Reliable transportation is organized from the airport or hotel directly to the vessel, assuring a smooth transition for crew members.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Port Entry Passes</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Travel Coordination</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Immigration Support</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Vessel Access</span>
              </div>

              <button 
                onClick={() => {
                  setActiveTab("services");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0 mt-6"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Learn more on our crew change services
                </span>
              </button>
            </div>

            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/crew-2.jpg"
                  alt="Ship agent assisting crew member with onboarding paperwork"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crew Sign-Off Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Crew Disembarkation</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Crew Sign-Off (Disembarkation and Repatriation)
              </h2>
              
              <div className="space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  We facilitate the comprehensive review of crew members' documents to ensure full compliance with exit formalities and smooth disembarkation processes. Our sign-off procedures are designed to handle all aspects of crew departure with precision and efficiency.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Our sign-off process includes exit visa assistance, medical assessments, travel arrangements, and final documentation. We work closely with customs authorities, immigration services, and port officials to ensure an efficient and hassle-free transition for outgoing crew members.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  We provide emergency repatriation support and medical assistance when needed, ensuring the well-being of all crew members. Our expertise in maritime exit procedures guarantees that all regulatory requirements are met and crew members depart safely and legally.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Document Review</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Exit Procedures</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Medical Assessment</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Travel Coordination</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Emergency Support</span>
              </div>

              <button 
                onClick={() => {
                  setActiveTab("services");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0 mt-6"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Learn more on our crew change services
                </span>
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/crew-3.jpg"
                  alt="Crew member disembarking from vessel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Crew Management Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. For Your Crew Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive crew management services with 24/7 support, strict compliance standards, and cost-effective solutions to ensure smooth crew changes and operational continuity.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/36.png" alt="24/7 Crew Change Support" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                24/7 Crew Change Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Available around the clock for emergency crew changes.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/34.png" alt="Strict Compliance and Safety Standards" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Strict Compliance and Safety Standards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring all procedures meet international maritime regulations.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/35.png" alt="Cost-Effective and Efficient Solutions" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Cost-Effective and Efficient Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing crew change processes to minimize costs and delays.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/37.png" alt="Emergency Crew Change Capability" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Emergency Crew Change Capability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid response for urgent crew replacement needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function OverviewTab({ setActiveTab }: { setActiveTab: (tabId: string) => void }) {
  return (
    <>
      {overview(setActiveTab)}
      {services(setActiveTab)}
      <GetQuoteComponent topic="Crew Management" link="/ship-agency-forms" />
      <FAQSearch category="crew-management" />
    </>
  );
}

export default function CrewTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <OverviewTab setActiveTab={setActiveTab} />,
    },
    {
      id: "services",
      title: "Services",
      content: <CrewLearnMorePage />,
    },
  ];

  return (
    <div className="w-full mt-10 mb-16">
      {/* --- NEW HERO DESIGN --- */}
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

          {/* Hero Image - Using the original image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/crew-1.jpg"
              alt="Crew Management Hero"
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
              <span className="text-white/90 text-sm font-medium">Crew Management Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Crew Management:<br />
                <span className="text-blue-300">Sign on/off</span>
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Comprehensive oversight and coordination of maritime personnel ensuring smooth operations and regulatory compliance
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
      <FormTabs tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
