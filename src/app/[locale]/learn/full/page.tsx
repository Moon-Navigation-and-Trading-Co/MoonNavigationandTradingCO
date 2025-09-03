"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";
import { useState } from "react";
import FormTabs from "@/components/form-tabs";
import DryContainerPage from "./dry/page";
import ReeferPage from "./reefer/page";
import DangerousCargoInfo from "../dangerous-goods/page";

function OverviewTab() {
  const fclBenefits = [
    {
      icon: <Image src="/icons/container/24.png" alt="Shipment Management Icon" width={48} height={48} className="w-12 h-12" />,
      title: "Complex Shipment Management",
      description: "We handle every stage of your FCL shipment—from booking and documentation to delivery—ensuring a smooth and hassle-free process."
    },
    {
      icon: <Image src="/icons/container/27.png" alt="Carrier Partnerships Icon" width={48} height={48} className="w-12 h-12" />,
      title: "Global Carrier Partnerships",
      description: "Our strong relationships with leading carriers guarantee competitive rates, priority space, and wide geographic coverage."
    },
    {
      icon: <Image src="/icons/container/28.png" alt="Secure Deliveries Icon" width={48} height={48} className="w-12 h-12" />,
      title: "Secure & Timely Deliveries",
      description: "With proper cargo handling, sealed containers, and optimized transit times, your goods reach their destination safely and on schedule."
    },
    {
      icon: <Image src="/icons/container/26.png" alt="Routing Solutions Icon" width={48} height={48} className="w-12 h-12" />,
      title: "Flexible Routing Solutions",
      description: "We offer tailored routing and scheduling options to meet your cargo requirements and delivery timelines."
    },
    {
      icon: <Image src="/icons/container/37.png" alt="Support & Compliance Icon" width={48} height={48} className="w-12 h-12" />,
      title: "Expert Support & Compliance Handling",
      description: "Our team provides timely updates, manages documentation, and ensures full customs and regulatory compliance throughout the journey."
    }
  ];

  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>FCL Services</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Full Container Load
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            (Standard, Reefer, and Dangerous)
          </p>
        </div>

        {/* What is FCL Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Overview</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            What is Full Container Load?
          </h2>
            
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
            Full Container Load (FCL) is a shipping method designed for businesses that require the
            exclusive use of an entire shipping container. This service ensures maximum security, faster
            transit times, and reduced handling risks, making it the ideal choice for bulk shipments. With
            FCL, your cargo remains sealed from origin to destination, minimizing the chances of damage,
                loss, or delays.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
            At Moon Navigation and Trading Co., we specialize in providing efficient and cost-effective FCL
            shipping solutions tailored to meet your logistics needs. With years of industry experience, our
            dedicated team ensures seamless container management, proper documentation, and global
            coordination for smooth and hassle-free transportation. Trust us to handle your shipments with
            expertise, reliability, and precision, ensuring timely and secure deliveries that support your
            business growth.
          </p>
        </div>
      </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/container-banner.jpg"
                alt="Full Container Load Services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FCL vs LCL Comparison Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Comparison</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            What is the difference between FCL and LCL?
          </h2>
        </div>
        
        <div className="relative">
          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="flex items-center gap-2 text-blue-600 text-sm">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to view full table</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-left">Feature</th>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-center">FCL (Full Container Load)</th>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-center">LCL (Less Than Container Load)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Cost</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Higher (pay for full container)</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Lower (pay for used space)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Volume</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Large shipments</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Small to medium shipments</td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Transit Time</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Faster (direct shipping)</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Slightly longer (due to consolidation)</td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Flexibility</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Requires full container utilization</td>
                    <td className="px-6 py-4 text-gray-700 text-center">More frequent shipments</td>
                  </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Security</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Higher security (dedicated container)</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Handled with care but shared space</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use FCL Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>FCL Usage</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              When to use FCL?
            </h2>
            
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
            FCL shipping is the best choice when you have enough cargo to fill an entire or close to 20- or 40-foot container. This method ensures that your goods remain secure and untouched throughout the journey, reducing handling risks and transit time.
          </p>
              <p className="text-base text-gray-600 leading-relaxed">
            FCL is particularly beneficial for businesses shipping large volumes, high-value cargo, or goods that require strict control over loading and unloading. It is also the preferred option for industries dealing with bulk commodities, machinery, and time-sensitive shipments, as it minimizes delays and provides a more predictable transit schedule. By choosing FCL, you can optimize your supply chain, streamline operations, and ensure cost efficiency for your large-scale shipping needs.
          </p>
        </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/fcl-when-to-use.jpg"
            alt="FCL container being lifted"
                fill
                className="object-cover"
          />
        </div>
      </div>
        </div>
      </section>

      {/* Container Types Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Container Types</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
          Our Container Types for FCL
        </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We offer a wide range of container types to suit different cargo requirements, ensuring your shipment is transported safely, efficiently, and in full compliance with global standards.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Containers */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
            <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/container-standard.jpg"
                alt="Standard Containers"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Standard Containers</h3>
            <p className="text-sm text-gray-600">General Cargo</p>
          </div>
          
          {/* Reefer Containers */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
            <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/container-reefer.jpg"
                alt="Reefer Containers"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Reefer Containers</h3>
            <p className="text-sm text-gray-600">Temperature Controlled</p>
          </div>
          
          {/* Dangerous Cargo Containers */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
            <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/container-dangerous.jpg"
                alt="Dangerous Cargo Containers"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Dangerous Cargo</h3>
            <p className="text-sm text-gray-600">Hazardous Materials</p>
          </div>
        </div>
      </section>

      {/* Container Type Navigation Buttons */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            onClick={() => {
              const section = document.querySelector('#standard-dry');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
          >
            Standard Dry Containers
          </Button>
          <Button 
            onClick={() => {
              const section = document.querySelector('#reefer-containers');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
          >
            Reefer Containers (Refrigerated)
          </Button>
          <Button 
            onClick={() => {
              const section = document.querySelector('#dangerous-goods');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto cursor-pointer"
          >
            Containers for Dangerous Goods
          </Button>
        </div>
      </section>

      {/* Container Solutions Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 rounded-3xl p-8 md:p-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Expertise</span>
      </div>
          
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
          Our Comprehensive Container Solutions includes Reefer<br className="hidden md:inline" /> and Dangerous Cargo Expertise
        </h3>
          
          <div className="space-y-4 text-base text-gray-600 leading-relaxed">
            <p>
              At Moon Navigation and Trading Co., we specialize in providing comprehensive container transportation solutions, ensuring the safe and efficient handling of a wide range of cargo, including refrigerated (reefer) and dangerous goods.
            </p>
            <p>
              Our expertise spans across managing and transporting temperature-sensitive shipments, ensuring the integrity of perishable goods through reliable reefer container services. We also prioritize the safety of hazardous materials, offering strict adherence to regulations, accurate classification, and proper packaging to meet global compliance standards.
            </p>
            <p>
          With a focus on precision, reliability, and risk management, we provide end-to-end solutions for shipping containers, delivering your cargo securely and efficiently to its destination.
        </p>
      </div>
        </div>
      </section>

      {/* Standard Dry Containers Section */}
      <section id="standard-dry" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Standard Cargo</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Standard Cargo (Dry Containers)
            </h2>
            
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                Our standard dry containers are ideal for transporting a wide range of general cargo that does not require temperature control. These containers offer a secure and cost-effective solution for your everyday shipping needs, such as:
              </p>
              <ul className="space-y-2 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Industrial Equipment & Machinery — Heavy machinery, spare parts, and mechanical tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consumer Goods — Electronics, appliances, textiles, and packaged products.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Raw Materials & Construction Supplies — Palletized goods, paper products, packaging materials, and more.</span>
                </li>
              </ul>
            </div>
            
                        <div className="pt-4">
              <Link href="/learn/full/dry">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/container-standard-s.jpg"
                alt="Standard dry containers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reefer Containers Section */}
      <section id="reefer-containers" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/reefer-header.jpg"
                alt="Reefer containers"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-2 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Temperature Control</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Reefer Cargo (Temperature-Sensitive Shipments)
            </h2>
            
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                Our reefer (refrigerated) containers are perfect for transporting goods that require temperature control during transit, such as:
              </p>
              <ul className="space-y-2 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Perishable Food Items—Fresh produce, dairy, and frozen foods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Pharmaceuticals—medicines and vaccines that need strict temperature control.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Flowers & Plants—Goods that require constant climate monitoring.</span>
                </li>
              </ul>
              <p className="text-base text-gray-600 leading-relaxed">
                We ensure that your reefer cargo is transported at the right temperature, with real-time monitoring and 24/7 temperature control to maintain product quality and prevent spoilage.
              </p>
            </div>
            
                        <div className="pt-4">
              <Link href="/learn/full/reefer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dangerous Goods Section */}
      <section id="dangerous-goods" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Dangerous Goods</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Dangerous Goods in FCL
            </h2>
            
            <div className="space-y-4">
              <p className="text-base text-gray-600 leading-relaxed">
                When it comes to shipping dangerous goods (DG), such as chemicals, flammable items, or toxic substances, we ensure full compliance with international safety standards like IMO (International Maritime Organization) and ADR (European Agreement on Dangerous Goods).
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our services for dangerous goods include:
              </p>
              <ul className="space-y-2 text-base text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proper Classification & Labeling - Correct packaging, labeling, and documentation for hazardous materials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Specialized Equipment - Containers and equipment designed for safe transport of dangerous goods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Risk Management & Emergency Response - Adhering to protocols to manage risks and ensure quick action in case of emergencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Regulatory Compliance - Ensuring full compliance with international shipping regulations to avoid delays and ensure safe delivery.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <Link href="/learn/dangerous-goods">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dangerous-container-hero.jpg"
                alt="Dangerous goods containers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Container Types</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
          Standard, Reefer & Dangerous Goods Containers vs. Special Equipment Containers
        </h2>
        </div>
        
        <div className="relative">
          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="flex items-center gap-2 text-blue-600 text-sm">
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to view full table</span>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-left">Feature</th>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-center">Standard Containers</th>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-center">Reefer Containers</th>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-center">Dangerous Goods Containers</th>
                    <th className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200 text-center">Open Top Containers</th>
              </tr>
            </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Best For</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Dry cargo, consumer goods, machinery</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Perishable goods, pharmaceuticals</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Hazardous and regulated cargo (IMDG compliant)</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Tall cargo, oversized equipment</td>
              </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Weatherproof</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Yes</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Yes</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Yes (DG-certified)</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No (requires tarpaulin cover)</td>
              </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Temperature Control</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Yes (-30°C to +30°C)</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
              </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Top Loading</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">Yes</td>
              </tr>
                  <tr className="hover:bg-blue-50/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900 text-left">Side Loading</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
                    <td className="px-6 py-4 text-gray-700 text-center">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
      </section>

      {/* FCL Benefits Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>FCL Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your FCL Shipments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complex shipment management with global carrier partnerships and secure, timely deliveries for full container loads.
            </p>
          </div>
        <ReasonsGridUniversal
          title=""
          subheading=""
          reasons={fclBenefits}
          layout="3-2"
        />
      </section>

      <GetQuoteComponent topic="FCL" link="/container-services-forms" />
      <FAQSearch category="fcl" />
    </main>
  );
}

export default function FullContainerLoadPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <OverviewTab />,
    },
    {
      id: "dry",
      title: "Standard Dry",
      content: <DryContainerPage />,
    },
    {
      id: "reefer",
      title: "Refrigerated",
      content: <ReeferPage />,
    },
    {
      id: "dangerous-goods",
      title: "Dangerous",
      content: <DangerousCargoInfo />,
    },
  ];

  const heroImages = {
    overview: "/container-banner.jpg",
    dry: "/container-standard-s.jpg",
    reefer: "/reefer-header.jpg",
    "dangerous-goods": "/dangerous-container-hero.jpg",
  };

  const heroTexts = {
    overview: {
      title: "Full Container Load",
      subtitle: "(FCL)",
      description: "Exclusive use of entire shipping containers ensuring maximum security, faster transit times, and reduced handling risks for bulk shipments"
    },
    dry: {
      title: "Standard Dry Container",
      subtitle: "Shipment",
      description: "Reliable and cost-effective shipping solution for dry goods, machinery, and general cargo with maximum protection and security"
    },
    reefer: {
      title: "Refrigerated Container",
      subtitle: "Shipment",
      description: "Temperature-controlled shipping for perishable goods, pharmaceuticals, and sensitive products with precise climate management"
    },
    "dangerous-goods": {
      title: "Dangerous Goods Container",
      subtitle: "Shipment",
      description: "Specialized handling and transportation of hazardous materials with strict compliance and safety protocols"
    }
  };

  return (
    <div className="w-full">
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

          {/* Hero Image - Dynamic based on active tab */}
          <div className="absolute inset-0 z-10">
            <Image
              src={heroImages[activeTab as keyof typeof heroImages]}
              alt={`Full Container Load - ${activeTab}`}
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
              <span className="text-white/90 text-sm font-medium">{heroTexts[activeTab as keyof typeof heroTexts].title} Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                {heroTexts[activeTab as keyof typeof heroTexts].title}<br />
                <span className="text-blue-300">{heroTexts[activeTab as keyof typeof heroTexts].subtitle}</span>
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                {heroTexts[activeTab as keyof typeof heroTexts].description}
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
      <FormTabs
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
