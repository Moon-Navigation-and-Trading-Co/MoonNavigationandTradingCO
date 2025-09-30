"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";

import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";
import dynamic from "next/dynamic";

const ExamplesCarousel = dynamic(() => import("@/components/examples-carousel"), { ssr: false });
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";

const ReeferPage = () => {
  const router = useRouter();

  // Cargo types data for the carousel
  const cargoTypes = [
    {
      id: 1,
      title: "Chemical Products",
      description: "Temperature-controlled transportation of industrial chemicals, specialty liquids, and temperature-sensitive chemical compounds with strict safety protocols.",
      image: "/reefer-chemicals.jpg",
      alt: "Chemical products refrigerated shipping"
    },
    {
      id: 2,
      title: "Fresh Produce & Perishable Foods",
      description: "Specialized cold chain logistics for fruits, vegetables, meat, seafood, and dairy products ensuring optimal freshness and quality.",
      image: "/reefer-fresh-produce.jpg",
      alt: "Fresh produce and perishable foods shipping"
    },
    {
      id: 3,
      title: "Pharmaceuticals & Medical Supplies",
      description: "Precision temperature control for vaccines, biologics, and temperature-sensitive drugs with full regulatory compliance.",
      image: "/reefer-pharma.jpg",
      alt: "Pharmaceuticals and medical supplies shipping"
    },
    {
      id: 4,
      title: "Floral Products",
      description: "Delicate handling and temperature management for flowers, plants, and horticultural cargo to maintain freshness.",
      image: "/reefer-flowers.jpg",
      alt: "Floral products shipping"
    },
    {
      id: 5,
      title: "Frozen Goods & Ice Cream",
      description: "Deep freeze transportation for frozen foods, desserts, ready meals, and ice cream products.",
      image: "/reefer-frozen.jpg",
      alt: "Frozen goods and ice cream shipping"
    },
    {
      id: 6,
      title: "Beverages & Dairy Products",
      description: "Controlled temperature shipping for milk, juices, soft drinks, yogurt, and other dairy beverages.",
      image: "/reefer-beverages.jpg",
      alt: "Beverages and dairy products shipping"
    }
  ];

  function renderOverview() {
    return (
      <>
        {/* Top image and company name removed to prevent duplication */}
        {/* Main Content Section: Match "What is International Trading?" layout */}
        <section className="px-4 sm:px-6 lg:px-8 mt-16" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Reefer Containers</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Reefer Containers (Refrigerated Shipping Solutions)
                </h2>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <p>
                    When it comes to transporting temperature-sensitive cargo, precision and reliability are critical. Our Reefer Containers (refrigerated containers) provide the ideal solution for maintaining product integrity throughout the shipping process. Whether you are moving perishable food, pharmaceuticals, chemicals, or other temperature-controlled goods, we ensure optimal conditions from origin to destination.
                  </p>
                  <p>
                    At Moon Navigation and Trading Co., we offer state-of-the-art reefer containers equipped with advanced temperature monitoring and control systems. Our team is experienced in handling cold chain logistics, ensuring compliance with international standards, and delivering your cargo in perfect condition.
                  </p>
                </div>
              </div>

              {/* Right: Empty space (no image) to mirror reference layout */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>
        
        {/* Cargo Types Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Cargo Types</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Cargo Types We Handle
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Our reefer solutions are tailored for a wide range of industries, including:
              </p>
            </div>
            <div className="relative px-2 ml-8">
              <ExamplesCarousel 
                items={cargoTypes}
                title=""
                subtitle=""
              />
            </div>
          </div>
        </section>

        {/* Advanced Temperature Control Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="order-2 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Temperature Control.jpg"
                    alt="Advanced Temperature Control"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Temperature Control</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Advanced Temperature Control
                </h2>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <p>
                    Refrigerated containers are equipped with precise climate control systems to maintain internal temperatures ranging from -30°C to +30°C, with adjustable humidity levels where required. This ensures product stability and quality during transit.
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Multi-temperature zone containers available</li>
                    <li>Humidity control and air ventilation systems</li>
                    <li>Continuous temperature monitoring and data logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Monitoring & Technical Support Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="order-1 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Technical Support</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  24/7 Monitoring & Technical Support
                </h2>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <p>
                    We offer round-the-clock monitoring to ensure your cargo remains within the required temperature thresholds. Our technical support team is available 24/7 to address any operational issues promptly, minimizing any risk to your cargo.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="order-2 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/24_7 Monitoring & Technical Support.png"
                    alt="Technical support worker monitoring refrigerated container"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cold Chain Compliance & Documentation Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="order-2 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Cold Chain Compliance & Documentation.png"
                    alt="Workers reviewing cold chain compliance documentation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Compliance</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Cold Chain Compliance & Documentation
                </h2>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <p>
                    Maintaining a consistent cold chain is critical in reefer logistics. Our team ensures:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full compliance with international cold chain standards</li>
                    <li>Accurate documentation and temperature logs</li>
                    <li>Customs and regulatory support for specialized cargo</li>
                    <li>Pre-trip inspections (PTI) to verify container readiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach, Reliable Transit Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="order-1 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Global Network</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Global Reach, Reliable Transit
                </h2>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <p>
                    Whether it is a short-haul or long-haul shipment, our global network allows us to offer fast, secure, and reliable reefer transport solutions. With strong partnerships across key ports and shipping lines, we ensure timely deliveries and end-to-end coordination.
                  </p>
                </div>
              </div>

              {/* Right: Image */}
              <div className="order-2 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Global Reach, Reliable Transit.png"
                    alt="Container ship at port with cranes loading refrigerated containers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Container Comparison</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Comparison: Reefer Containers vs. Standard Containers
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Reefer Containers (Refrigerated)
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Standard Containers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Purpose
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Temperature-sensitive cargo transport
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        General cargo transport
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Temperature Control
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Adjustable temperature control (typically -30°C to +30°C)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        No temperature control
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Cargo Types
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Perishable food, pharmaceuticals, chemicals, etc.
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Dry goods, machinery, textiles, packaged goods
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Ventilation & Humidity Control
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Equipped with air circulation and humidity regulation
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Not available
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Insulation
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Insulated walls, floor, and ceiling
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Not insulated
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Container Cost
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Higher cost due to refrigeration equipment
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Lower cost
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Power Supply
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Requires power source during transit and storage
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Not required
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Monitoring Options
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Cargo condition monitored throughout transportation
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Basic handling only
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Common Sizes
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        20ft / 40ft reefer and high cube
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        20ft / 40ft standard and high cube
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Applications
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Cold chain logistics, food supply, medical shipments
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Industrial, commercial, and general cargo
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Purpose</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Temperature-sensitive cargo transport</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>General cargo transport</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Temperature Control</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Adjustable temperature control (-30°C to +30°C)</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>No temperature control</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Cargo Types</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Perishable food, pharmaceuticals, chemicals</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Dry goods, machinery, textiles</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Ventilation & Humidity</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Air circulation and humidity regulation</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Not available</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Insulation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Insulated walls, floor, and ceiling</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Not insulated</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Container Cost</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Higher cost due to refrigeration</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Lower cost</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Power Supply</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Requires power source</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Not required</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Monitoring</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Continuous cargo monitoring</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Basic handling only</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Common Sizes</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>20ft / 40ft reefer and high cube</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>20ft / 40ft standard and high cube</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>Applications</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-blue-600" style={{ fontFamily: 'Raleway, sans-serif' }}>Reefer:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Cold chain logistics, food supply</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Raleway, sans-serif' }}>Standard:</span>
                    <span className="text-xs text-gray-600 text-right flex-1 ml-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Industrial, commercial cargo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  // Switch to Our Solutions tab
                  const tabButtons = document.querySelectorAll('button');
                  const ourSolutionsTab = Array.from(tabButtons).find(button => 
                    button.textContent?.includes('Our Solutions')
                  );
                  if (ourSolutionsTab) {
                    ourSolutionsTab.click();
                    // Scroll to the top of the page
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-4 py-2 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-light text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                <span>Learn more about our Reefer Container shipment Solutions</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Reasons to Choose Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Reefer Container Benefits</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Reasons to Choose Moon Navigation and Trading Co. for Your Reefer Container Shipments
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Modern reefer container fleet with advanced technology and transparent communication for optimal temperature-controlled cargo protection.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* First Row: 3 items */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Image src="/icons/container/37.png" alt="Cold Chain Expertise" width={48} height={48} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Expertise in cold chain logistics
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized knowledge and experience in handling perishable goods and maintaining cold chain integrity.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Image src="/icons/container/38.png" alt="Custom Solutions" width={48} height={48} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Custom solutions tailored to your cargo's needs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Personalized shipping solutions designed specifically for your temperature-sensitive cargo requirements.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Image src="/icons/container/39.png" alt="Modern Fleet" width={48} height={48} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Modern reefer container fleet with advanced technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art refrigerated containers equipped with the latest temperature control and monitoring systems for optimal cargo protection.
                </p>
              </div>
            </div>

            {/* Second Row: 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Image src="/icons/container/40.png" alt="Communication" width={48} height={48} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Transparent communication and timely shipment updates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time tracking and regular updates throughout your shipment's journey, keeping you informed at every stage.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Image src="/icons/container/41.png" alt="Competitive Rates" width={48} height={48} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Competitive rates and efficient routing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cost-effective solutions with optimized routes to minimize transit time and reduce overall shipping costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <GetQuoteComponent topic="Reefer Container" link="/container-services-forms" />
      </>
    );
  }

  const tabData = [
    {
      id: "overview",
      title: "Reefer Containers",
      content: renderOverview(),
    },
    {
      id: "our-solutions",
      title: "Our Solutions",
      content: <LearnMore />,
    },
  ];

  function renderServices() {
    return (
      <>
      </>
    );
  }

  return (
    <div className="w-full">
      <FormTabs tabData={tabData} />
      {/* --- RESTORED CONTENT BELOW TAB SWITCHER --- */}
      {renderServices()}
    </div>
  );
};

export default ReeferPage;
