"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGrid from "@/components/ReasonsGrid";
import { Award, Fuel, Droplets, Package, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import FormTabs from "@/components/form-tabs";
import LearnMoreBunkeringPage from "./learn-more-bunkering/page";
import LearnMoreOilPage from "./learn-more-oil/page";
import LearnMoreChandleryPage from "./learn-more-chandlery/page";

function overview(){
  return(
    <>
      {/* What is Bunkering Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Essential Maritime Services</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Essential Services for Efficient Vessel Operations
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                At Moon Navigation and Trading Co., we provide essential services to ensure vessels operate efficiently and without interruption. Our bunkering, oil supply, and ship chandlery solutions are designed to meet the demands of modern maritime operations with precision, reliability, and speed.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                We understand the critical nature of these services in maintaining vessel performance and crew welfare. Our comprehensive approach ensures that every aspect of your vessel&apos;s operational needs is met with the highest standards of quality and efficiency.
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
      {/* Bunkering Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Marine Fuel Supply</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Bunkering Services (Marine Fuel Supply)
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We offer comprehensive bunkering services designed to ensure a seamless fueling process for your maritime operations. We place importance on efficiency, providing solutions that minimize downtime while adhering to international regulations.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our expert team manages everything from fuel delivery to compliance with environmental and safety standards, allowing you to concentrate on your core business. We specialize in supplying high-quality marine fuels, including Heavy Fuel Oil (HFO), Marine Gas Oil (MGO), and Lubricants from top UAE, KSA, and global suppliers, with assurance of full documentation.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Heavy Fuel Oil (HFO)</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Marine Gas Oil (MGO)</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Lubricants</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Full Documentation</span>
              </div>

              <button 
                onClick={() => {
                  setActiveTab("bunkering");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0 mt-6"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Learn more on our bunkering services
                </span>
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/bunkering-2.jpg" alt="Bunkering Tank" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oil and Lubricants Supply Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/bunkering-3.jpg" alt="Oil & Lubricants Supply" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Premium Marine Oils</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Oil and Lubricants Supply
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We are dedicated to providing critical oil supply services that enhance the performance and longevity of vessels. Specializing in premium-grade marine oils and lubricants, we ensure reliable operation of your fleet with our comprehensive offerings, which include engine oil, lubricants, and related products tailored to meet the unique needs of each vessel.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our experienced team supplies and delivers high-quality oils to anywhere along your voyage. You can trust our services to be in compliance with environmental and safety standards. Leveraging our extensive network and expertise, we are committed to delivering the right oil and lubricants, on time, ensuring your vessels operate efficiently and reliably at all times.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Engine Oil</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Lubricants</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Global Delivery</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Safety Compliance</span>
              </div>

              <button 
                onClick={() => {
                  setActiveTab("oil");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0 mt-6"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Learn more on our Oil and Lubricants supply services
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ship Chandlery Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Onboard Supplies</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Ship Chandlery
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We offer extensive ship chandlery services dedicated to serving your vessel&apos;s every requirement with onboard supplies and equipment for smooth operations. Our global network enables seamless sourcing of top-tier products, including fresh provisions, deck and engine consumables, cleaning agents, and safety equipment.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  We take pride in providing high-quality food and beverages, technical stores, safety equipment, bonded items, and cleaning materials, all tailored to your specific needs. Our experienced team understands the unique challenges of the maritime industry, so you can trust that your supplies will always be delivered efficiently and in compliance with the highest standards.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Fresh Provisions</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Safety Equipment</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Technical Stores</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Global Network</span>
              </div>

              <button 
                onClick={() => {
                  setActiveTab("chandlery");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-raleway font-medium text-xs transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0 mt-6"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Learn more on our Ship Chandlery services
                </span>
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/bunkering-4.jpg" alt="Ship Chandlery" fill className="object-cover" />
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
              Your Reliable Partner in Maritime Support
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With Moon Navigation and Trading Co., you can count on reliable, timely and cost-effective bunkering solutions and support, and fully customizable solutions to your vessel&apos;s needs, ensuring uninterrupted service and operational efficiency—wherever and whenever you need to trust.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function OverviewTab({ setActiveTab }: { setActiveTab: (tabId: string) => void }) {
  return (
    <>
      {overview()}
      {services(setActiveTab)}
      
      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Bunkering Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. For Your Bunkering | Oil Supply | Ship Chandlery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive bunkering and ship chandlery services with round-the-clock availability and transparent pricing for all your maritime support needs.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/59.png" alt="24/7 Service Availability" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                24/7 Service Availability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting vessels at all times.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/58.png" alt="Cost-Effective & Transparent Pricing" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Cost-Effective & Transparent Pricing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ship agency/60.png" alt="Compliance with International Standards" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Compliance with International Standards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring regulatory adherence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <GetQuoteComponent topic="Bunkering, Oil Supply, Ship Chandlery" link="/ship-agency-forms" />
      <FAQSearch category="bunkering" />
    </>
  );
}

export default function BunkeringTabs() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <OverviewTab setActiveTab={setActiveTab} />,
    },
    {
      id: "bunkering",
      title: "Bunkering",
      content: <LearnMoreBunkeringPage />,
    },
    {
      id: "oil",
      title: "Oil",
      content: <LearnMoreOilPage />,
    },
    {
      id: "chandlery",
      title: "Chandlery",
      content: <LearnMoreChandleryPage />,
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
              src="/bunkering-1.jpg"
              alt="Bunkering Services Hero"
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
              <span className="text-white/90 text-sm font-medium">Maritime Support Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Bunkering | Oil Supply |<br />
                <span className="text-blue-300">Ship Chandlery</span>
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Essential services to ensure vessels operate efficiently and without interruption with precision, reliability, and speed
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
