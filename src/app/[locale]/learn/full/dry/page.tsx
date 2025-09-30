"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import dynamic from "next/dynamic";

const ExamplesCarousel = dynamic(() => import("@/components/examples-carousel"), { ssr: false });
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";
 
export default function DryContainerPage() {
  // Industry data for the carousel
  const industries = [
    {
      id: 1,
      title: "Furniture & Home Appliances",
      description: "Safe and secure transportation of furniture, home appliances, and household goods with proper packaging and handling.",
      image: "/industry-furniture.jpg",
      alt: "Furniture and home appliances shipping"
    },
    {
      id: 2,
      title: "Retail & Consumer Goods",
      description: "Efficient shipping solutions for retail products, consumer electronics, and general merchandise.",
      image: "/industry-retail.jpg",
      alt: "Retail and consumer goods shipping"
    },
    {
      id: 3,
      title: "Industrial & Manufacturing",
      description: "Reliable transport for industrial equipment, machinery parts, and manufacturing components.",
      image: "/industry-industrial.jpg",
      alt: "Industrial and manufacturing shipping"
    },
    {
      id: 4,
      title: "Textiles & Garments",
      description: "Specialized handling for textile products, clothing, and fashion merchandise with proper protection.",
      image: "/industry-textiles.jpg",
      alt: "Textiles and garments shipping"
    },
    {
      id: 5,
      title: "Automotive & Spare Parts",
      description: "Secure transportation of automotive components, spare parts, and vehicle accessories.",
      image: "/industry-automotive.jpg",
      alt: "Automotive and spare parts shipping"
    },
    {
      id: 6,
      title: "Construction & Building Materials",
      description: "Heavy-duty shipping for construction materials, building supplies, and construction equipment.",
      image: "/industry-construction.jpg",
      alt: "Construction and building materials shipping"
    },
    {
      id: 7,
      title: "Food & Beverage (Non-Perishable)",
      description: "Safe transport for packaged food products, beverages, and non-perishable consumables.",
      image: "/industry-food.jpg",
      alt: "Food and beverage shipping"
    },
    {
      id: 8,
      title: "Office Supplies & Stationery",
      description: "Efficient shipping for office equipment, stationery, and business supplies.",
      image: "/industry-office.jpg",
      alt: "Office supplies and stationery shipping"
    }
  ];

  function renderOverview() {
    return (
      <>
        {/* Main Content Section: Match "What is International Trading?" layout */}
        <section className="px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="order-1 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Standard Dry</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Standard Dry Container Shipment
                </h2>

                <p className="text-base text-gray-600 leading-relaxed">
                  Efficient, Secure, and Cost-Effective Shipping Solutions
                </p>

                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    A Standard Dry Container is a fully enclosed, weatherproof container commonly used for transporting a wide variety of cargo. It offers strong protection from external elements and is the most widely used container type in global trade.
                  </p>
                  <p>
                    At Moon Navigation and Trading Co., we offer reliable Standard Dry Container (FCL) services tailored to meet your cargo needs. Ideal for transporting general goods that do not require temperature control, our dry container solutions ensure safe, secure, and seamless delivery from origin to destination.
                  </p>
                </div>
              </div>

              {/* Right: Empty space (no image) to mirror reference layout */}
              <div className="order-2 lg:order-2 hidden lg:block"></div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const tabData = [
    {
      id: "overview",
      title: "Standard Containers",
      content: renderOverview(),
    },
    {
      id: "our-solutions",
      title: "Our Solutions",
      content: <LearnMore />,
    },
  ];

  return (
    <div className="w-full">
      <FormTabs tabData={tabData} />
      {/* --- RESTORED CONTENT BELOW TAB SWITCHER --- */}
      {/* Key Industries Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Key Industries</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
              Key Industries We Serve
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Our Standard Dry Shipment solutions are tailored for a wide range of industries, including:
            </p>
          </div>
          <div className="relative px-2">
            <ExamplesCarousel 
              items={industries}
              title=""
              subtitle=""
            />
          </div>
        </div>
      </section>
      {/* Comparison Table Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Container Comparison</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Standard Dry Containers vs. Specialized Container Types
        </h2>
          </div>
          
          <div className="relative">
            {/* Mobile Arrow Navigation */}
            <button 
              className="absolute left-1 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 md:opacity-0 group-hover:opacity-100 md:left-2"
              onClick={() => {
                const container = document.querySelector('.table-scroll-container');
                if (container) {
                  container.scrollLeft -= 200;
                }
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 md:opacity-0 group-hover:opacity-100 md:right-2"
              onClick={() => {
                const container = document.querySelector('.table-scroll-container');
                if (container) {
                  container.scrollLeft += 200;
                }
              }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Mobile scroll indicator */}
            <div className="md:hidden text-center text-xs text-gray-500 mb-3 px-4">
              ← Swipe to compare container types →
            </div>
            
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border border-gray-100 group">
              <div className="overflow-x-auto table-scroll-container scrollbar-hide -mx-2 md:mx-0">
                <div className="min-w-[800px] px-2 md:px-0 md:min-w-0">
                  <table className="w-full">
            <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-blue-100/50">
                      <th className="px-3 py-3 md:px-8 md:py-6 text-left text-blue-600 font-medium text-sm md:text-lg border-b border-gray-200 min-w-[120px]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                          <span>Feature</span>
                        </div>
                      </th>
                      <th className="px-3 py-3 md:px-8 md:py-6 text-center text-blue-600 font-medium text-sm md:text-lg border-b border-gray-200 border-l min-w-[120px]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                          <span>Standard</span>
                        </div>
                      </th>
                      <th className="px-3 py-3 md:px-8 md:py-6 text-center text-blue-600 font-medium text-sm md:text-lg border-b border-gray-200 border-l min-w-[100px]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                          <span>Reefer</span>
                        </div>
                      </th>
                      <th className="px-3 py-3 md:px-8 md:py-6 text-center text-blue-600 font-medium text-sm md:text-lg border-b border-gray-200 border-l min-w-[120px]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                          <span>Dangerous Goods</span>
                        </div>
                      </th>
                      <th className="px-3 py-3 md:px-8 md:py-6 text-center text-blue-600 font-medium text-sm md:text-lg border-b border-gray-200 border-l min-w-[100px]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                          <span>Open Top</span>
                        </div>
                      </th>
                      <th className="px-3 py-3 md:px-8 md:py-6 text-center text-blue-600 font-medium text-sm md:text-lg border-b border-gray-200 border-l min-w-[100px]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <div className="flex items-center justify-center gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                          <span>Flat Rack</span>
                        </div>
                      </th>
              </tr>
            </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-3 py-3 md:px-8 md:py-6 text-gray-900 font-medium text-sm md:text-base border-r border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Purpose</span>
                        </div>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="whitespace-nowrap">General cargo transport</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Temperature-controlled</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Hazardous materials</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Oversized cargo</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Heavy cargo</span>
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-3 py-3 md:px-8 md:py-6 text-gray-900 font-medium text-sm md:text-base border-r border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Cargo Suitability</span>
                        </div>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="whitespace-nowrap">Dry goods, pallets</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Food, pharma</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Chemicals, hazmat</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Machinery, pipes</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Vehicles, boats</span>
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-3 py-3 md:px-8 md:py-6 text-gray-900 font-medium text-sm md:text-base border-r border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Temperature Control</span>
                        </div>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="whitespace-nowrap">No</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">-20°C to +25°C</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">As required</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">No</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">No</span>
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-3 py-3 md:px-8 md:py-6 text-gray-900 font-medium text-sm md:text-base border-r border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Size Availability</span>
                        </div>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="whitespace-nowrap">20ft / 40ft</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">20ft / 40ft</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">20ft / 40ft</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">20ft / 40ft</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">20ft / 40ft</span>
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-3 py-3 md:px-8 md:py-6 text-gray-900 font-medium text-sm md:text-base border-r border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Special Features</span>
                        </div>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="whitespace-nowrap">Weatherproof</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Cooling unit</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Special sealing</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Open roof</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">No side walls</span>
                        </span>
                      </td>
              </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors duration-200">
                      <td className="px-3 py-3 md:px-8 md:py-6 text-gray-900 font-medium text-sm md:text-base border-r border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-400 rounded-full"></div>
                          <span>Typical Use Cases</span>
                        </div>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="whitespace-nowrap">Consumer goods</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Frozen goods</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Hazmat, chemicals</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center border-r border-gray-100">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Construction</span>
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6 text-gray-700 text-center">
                        <span className="inline-flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gray-50 text-gray-600 rounded-full text-xs md:text-sm font-medium">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gray-400 rounded-full"></div>
                          <span className="whitespace-nowrap">Heavy loads</span>
                        </span>
                      </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Cargo Handling Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Containers Services (23) (1).png" 
                  alt="Container terminal with gantry crane and trucks" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Cargo Handling</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                End-to-End Cargo Handling
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                We manage the entire logistics chain—right from cargo pickup at the origin location to final delivery at the consignee's doorstep. Our team ensures:
              </p>

              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Careful coordination of inland transportation (trucking or rail)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Efficient scheduling with minimal downtime</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Door-to-door or port-to-port services depending on client needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Continuous monitoring of every shipping stage to maintain efficiency and minimize disruptions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Container Stuffing & Cargo Securing Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="order-1 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Container Loading</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Container Stuffing & Cargo Securing
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                Proper container loading is critical for safe transit. We provide:
              </p>

              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Professional stuffing operations supervised by trained personnel</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Strategic cargo arrangement and weight distribution to optimize space and reduce movement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Application of lashing, blocking, bracing, and dunnage materials to prevent cargo shifting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Specialized handling for fragile or irregular-shaped goods</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Compliance with international cargo securing standards to ensure cargo integrity during long-haul transportation</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="order-2 lg:order-2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Containers Services (24) (1).png" 
                  alt="Workers with forklift at container terminal" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customs Documentation & Clearance Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Containers Services (25) (1).png" 
                  alt="Person signing documents with global logistics interface" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Customs Services</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Customs Documentation & Clearance
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                Our experienced team simplifies the complex world of import/export formalities. We offer:
              </p>

              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Complete preparation and verification of commercial documents (invoice, packing list, bill of lading, certificate of origin, etc.)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Assistance with customs clearance procedures at both origin and destination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Harmonized tariff code classification for accurate duty assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Compliance with all relevant government regulations and trade agreements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Close coordination with customs authorities to prevent shipment delays</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Port & Inland Transport Coordination Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="order-1 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Transport Coordination</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Port & Inland Transport Coordination
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                We ensure smooth cargo flow by coordinating:
              </p>

              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Inland transport from the shipper's warehouse to the container stuffing yard or port terminal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Timely delivery of containers for vessel loading</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Port handling arrangements including terminal entry, container staging, and loading onto the vessel</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Post-arrival inland haulage and final delivery at the receiver's location</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Flexibility to work with multimodal transport routes (road, rail, barge)</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="order-2 lg:order-2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Containers Services (26) (1).png" 
                  alt="Aerial view of busy container port with gantry cranes" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Inspection & Container Condition Checks Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Containers Services (27) (1).png" 
                  alt="Worker inspecting container interior with clipboard" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Quality Control</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Cargo Inspection & Container Condition Checks
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                To safeguard cargo and comply with quality standards, we implement:
              </p>

              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Thorough pre-shipment inspection of cargo condition and packaging</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Container integrity checks before loading (checking floor, walls, seals, and cleanliness)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Monitoring for potential hazards like moisture, odor, or contamination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Verifying container identification numbers and seal placement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Optional third-party inspection and certification upon request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Value-Added Solutions Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="order-1 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Value-Added Services</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Additional Value-Added Solutions
              </h2>

              <ul className="space-y-3 text-base text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cargo insurance assistance to mitigate transit risks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Palletization, shrink-wrapping, and labeling services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Flexible storage and warehousing options before or after shipment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cargo consolidation or segregation based on customer requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>24/7 customer support to keep you informed at every stage</span>
                </li>
              </ul>

              {/* Learn More Button */}
              <div className="pt-6">
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
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Learn more about our Standard Dry Container shipment Solutions</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-2 lg:order-2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Containers Services.jpg" 
                  alt="Business team discussing logistics solutions" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Dry Container Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your Dry Standard Container Shipments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Decades of freight forwarding expertise with personalized logistics planning and competitive pricing for reliable container shipping solutions.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* First Row: 3 items */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/75.png" alt="Freight Forwarding Expertise Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Decades of freight forwarding expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced team brings years of industry knowledge to ensure your cargo is handled with the highest level of professionalism and care.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/110.png" alt="Logistics Planning Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Personalized logistics planning and container management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Customized shipping solutions tailored to your specific cargo requirements and delivery timelines for optimal efficiency.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/107.png" alt="Competitive Pricing Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Competitive pricing and flexible schedules
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cost-effective shipping rates with flexible departure schedules to meet your budget and timeline requirements.
              </p>
            </div>
          </div>

          {/* Second Row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/108.png" alt="Global Network Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global partner network and port coverage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Extensive worldwide network of trusted partners and comprehensive port coverage ensuring seamless cargo delivery to any destination.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/109.png" alt="Reliable Service Icon" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Reliable service, responsive support, and professional handling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated customer support team providing real-time updates and professional cargo handling throughout the entire shipping process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GetQuoteComponent topic="Dry Container" link="/container-services-forms" />
      <FAQSearch category="standard-dry-container" />
    </div>
  );
}
