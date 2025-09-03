"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'
import RequestQuoteButton from "@/components/RequestQuoteButton" 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from '@/components/faq'
import OverviewServicesTabs from '@/components/overview-services'
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award, Globe, Shield, Package, FileText, Heart, Truck, Anchor } from "lucide-react";

export default function ShippingMethodsInfo() {
  const t = useTranslations('livestock:');

  const reasonsToChoose = [
    {
      icon: <Image src="/icons/other services/30.png" alt="Global Network & Port Access" width={48} height={48} className="w-12 h-12" />,
      title: "Global Network & Port Access",
      description: "Our extensive shipping routes cover major livestock trade destinations, ensuring timely and efficient deliveries."
    },
    {
      icon: <Image src="/icons/other services/31.png" alt="Advanced Biosecurity Measures" width={48} height={48} className="w-12 h-12" />,
      title: "Advanced Biosecurity Measures",
      description: "We implement strict hygiene protocols, quarantine measures, and disease prevention practices."
    },
    {
      icon: <Image src="/icons/other services/32.png" alt="Custom-Tailored Transport Solutions" width={48} height={48} className="w-12 h-12" />,
      title: "Custom-Tailored Transport Solutions",
      description: "Whether you need short-haul regional shipping or long-haul transcontinental transport, we design solutions tailored to your needs."
    },
    {
      icon: <Image src="/icons/other services/33.png" alt="Seamless Logistics & Documentation Handling" width={48} height={48} className="w-12 h-12" />,
      title: "Seamless Logistics & Documentation Handling",
      description: "From permits and health certificates to customs clearance, we manage all necessary documentation."
    }
  ];

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
              src="/livestock-banner.jpg"
              alt="Livestock Transportation Hero"
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
              <span className="text-white/90 text-sm font-medium">Animal Welfare</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Live Stock<br />Transportation
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Safe, humane, and efficient shipment of livestock with strict welfare regulations ensuring the safety and comfort of animals during transit
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/ocean-freight-forms">
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

      {/* What is Livestock Transportation? Section - Updated to match project cargo design */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Livestock Transportation</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Livestock Transportation?
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Livestock transportation is the moving of domesticated animals from one location to another, typically for purposes such as breeding, feeding, or market sales. This specialized form of transport requires adherence to strict welfare regulations to ensure the safety and comfort of the animals during transit.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                At Moon Navigation and Trading Co., we specialize in the safe, humane, and efficient shipment of livestock, ensuring their well-being throughout the entire journey. Whether you need to transport cattle, sheep, horses, or other live animals, our state-of-the-art livestock carriers and expert handling services guarantee a stress-free and compliant shipping experience.
              </p>
            </div>
            
            {/* Right: Empty space (no image) */}
            <div className="hidden lg:block">
              {/* Empty right column to maintain layout */}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section - Updated to match tankers design with 3 columns */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Industry Solutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Industries We Serve
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We provide specialized livestock shipping solutions across multiple industries, ensuring each type of animal is transported safely and in compliance with international standards.
            </p>
          </div>

          <div className="relative w-full max-w-7xl mx-auto">
            <div className="flex gap-8 min-w-max md:grid md:grid-cols-3 md:min-w-0 md:gap-8">
              {/* Agriculture & Dairy Farming */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0 md:w-auto">
                <div className="h-48 relative">
                  <Image 
                    src="/industry-agriculture.jpg" 
                    alt="Agriculture & Dairy Farming" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-base mb-3 text-gray-900">Agriculture & Dairy Farming</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We support global farming operations by transporting cattle, sheep, goats, and other livestock.
                  </p>
                </div>
              </div>

              {/* Equestrian & Racing */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0 md:w-auto">
                <div className="h-48 relative">
                  <Image 
                    src="/industry-equestrian.jpg" 
                    alt="Equestrian & Racing" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-base mb-3 text-gray-900">Equestrian & Racing</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We securely ship elite horses for global competitions, training, and breeding.
                  </p>
                </div>
              </div>

              {/* Zoos & Wildlife Conservation */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0 md:w-auto">
                <div className="h-48 relative">
                  <Image 
                    src="/industry-zoo.jpg" 
                    alt="Zoos & Wildlife Conservation" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-base mb-3 text-gray-900">Zoos & Wildlife Conservation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our expertise extends to the careful relocation of exotic and endangered species, supporting conservation programs and global zoo networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Our Livestock Shipping Solutions
          </h2>
        </div>
        
        {/* Specialized Livestock Carriers */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Specialized Carriers</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Specialized Livestock Carriers
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vessels are specifically designed for the safe and efficient transport of livestock.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Multi-tiered Enclosures:</span>
                    <span className="text-gray-600"> Optimal ventilation ensuring a consistent flow of fresh air.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Temperature Control:</span>
                    <span className="text-gray-600"> Climate-controlled environments prioritizing animal comfort regardless of external conditions.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Anti-slip Flooring:</span>
                    <span className="text-gray-600"> Drainage systems that promote hygiene and minimize injury risks.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Automated Systems:</span>
                    <span className="text-gray-600"> Feeding and watering systems guaranteeing proper nourishment throughout the journey.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/livestock-ship.jpg"
                  alt="Livestock Carrier Ship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Animal Welfare & Veterinary Care */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/animal-welfare.jpg"
                  alt="Veterinarian with livestock"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Animal Welfare</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Animal Welfare & Veterinary Care
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At Moon Navigation and Trading Co., animal welfare is our top priority in every aspect of transportation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Onboard Veterinarians:</span>
                    <span className="text-gray-600"> Constant monitoring and emergency medical care when necessary.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Low-stress Handling:</span>
                    <span className="text-gray-600"> Specialized ramps facilitating smooth and injury-free loading and unloading.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Adequate Space Allocation:</span>
                    <span className="text-gray-600"> Each animal allocated comfortable space to move, minimizing stress and fatigue.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Regular Health Checks:</span>
                    <span className="text-gray-600"> Pre-departure inspections and ongoing monitoring throughout transit.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Compliance and Safety Standards */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Compliance & Safety</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Regulatory Compliance and Safety Standards
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We strictly adhere to global livestock transportation regulations to ensure the highest standards of welfare and compliance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">IMO Regulations:</span>
                    <span className="text-gray-600"> International Maritime Organization Animal Transport Regulations compliance.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">WOAH Guidelines:</span>
                    <span className="text-gray-600"> World Organization for Animal Health Welfare Guidelines adherence.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Local Requirements:</span>
                    <span className="text-gray-600"> Import/Export Animal Health Requirements for each destination.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-gray-900">Smooth Clearance:</span>
                    <span className="text-gray-600"> Ensuring smooth customs clearance process and preventing unnecessary delays at ports.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/compliance-safety.jpg"
                  alt="Compliance and Safety at Port"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Logos Row */}
        <div className="flex flex-row items-center justify-start gap-10 mt-12">
          <Image
            src="/logo-woah.png"
            alt="World Organisation for Animal Health"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
          <Image
            src="/logo-imo.png"
            alt="International Maritime Organization"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
          {/* Add more logos as needed */}
        </div>
      </section>

      {/* Reasons to Choose Section - Updated to match ship management design */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Livestock Transportation Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your Livestock Transportation Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with Moon Navigation and Trading Co. means more than just livestock transportation — it means becoming part of a comprehensive solution that prioritizes animal welfare and your business success.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* First Row: 2 items */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ocean freight/56.png" alt="Global Network & Port Access" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global Network & Port Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our extensive shipping routes cover major livestock trade destinations, ensuring timely and efficient deliveries.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ocean freight/57.png" alt="Advanced Biosecurity Measures" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Advanced Biosecurity Measures
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We implement strict hygiene protocols, quarantine measures, and disease prevention practices.
              </p>
            </div>
          </div>

          {/* Second Row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ocean freight/58.png" alt="Custom-Tailored Transport Solutions" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Custom-Tailored Transport Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you need short-haul regional shipping or long-haul transcontinental transport, we design solutions tailored to your needs.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/ocean freight/59.png" alt="Seamless Logistics & Documentation Handling" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Seamless Logistics & Documentation Handling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From permits and health certificates to customs clearance, we manage all necessary documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Livestock" link="/ocean-freight-forms" />
      <FAQSearch category="livestock-transportation" />
    </main>
  )
}