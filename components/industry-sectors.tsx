"use client";

import React, { useState, useEffect } from "react";

// Industry sectors data
const industrySectors = [
  {
    name: "Container Shipping",
    icon: "/icons/container-shipping.svg",
    description: "Global container logistics solutions"
  },
  {
    name: "Bulk Cargo",
    icon: "/icons/bulk-cargo.svg", 
    description: "Specialized bulk cargo handling"
  },
  {
    name: "Project Cargo",
    icon: "/icons/project-cargo.svg",
    description: "Complex project logistics"
  },
  {
    name: "Heavy Lift",
    icon: "/icons/heavy-lift.svg",
    description: "Heavy machinery transportation"
  },
  {
    name: "Chemicals",
    icon: "/icons/chemicals.svg",
    description: "Chemical logistics expertise"
  },
  {
    name: "Pharma & Healthcare",
    icon: "/icons/pharma.svg",
    description: "Temperature-controlled healthcare logistics"
  },
  {
    name: "FMCG",
    icon: "/icons/fmcg.svg",
    description: "Fast-moving consumer goods"
  },
  {
    name: "Automotive & Machinery",
    icon: "/icons/automotive.svg",
    description: "Automotive and machinery logistics"
  },
  {
    name: "Dangerous Materials",
    icon: "/icons/dangerous.svg",
    description: "Hazardous materials handling"
  },
  {
    name: "Aerospace & Aviation",
    icon: "/icons/aerospace.svg",
    description: "Aerospace logistics solutions"
  },
  {
    name: "Construction & Building",
    icon: "/icons/construction.svg",
    description: "Construction materials logistics"
  },
  {
    name: "Energy & Utilities",
    icon: "/icons/energy.svg",
    description: "Energy sector logistics"
  },
  {
    name: "Retail",
    icon: "/icons/retail.svg",
    description: "Retail supply chain solutions"
  },
  {
    name: "Fashion & Lifestyle",
    icon: "/icons/fashion.svg",
    description: "Fashion and lifestyle logistics"
  },
  {
    name: "Perishables & Fresh",
    icon: "/icons/perishables.svg",
    description: "Fresh produce logistics"
  },
  {
    name: "Technology & Electronics",
    icon: "/icons/technology.svg",
    description: "Tech and electronics logistics"
  }
];

export default function IndustrySectors() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate sectors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(industrySectors.length / 4));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Specialized Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-6">
            Industry <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">Sectors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Across industries, cargo types, and destinations, Moon Navigation and Trading Co. provides tailored global and local shipping and logistics solutions that propel business growth.
          </p>
        </div>

        {/* Industry Sectors Carousel */}
        <div className="mb-16">
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentSlide(Math.min(Math.ceil(industrySectors.length / 4) - 1, currentSlide + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-8">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(industrySectors.length / 4) }, (_, slideIndex) => (
                  <div key={slideIndex} className="flex-shrink-0 w-full grid grid-cols-4 gap-6">
                    {industrySectors.slice(slideIndex * 4, slideIndex * 4 + 4).map((sector, index) => (
                      <div key={index} className="group text-center">
                        <div className="mb-4">
                          <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                            {/* Container Shipping Icon */}
                            {sector.name === "Container Shipping" && (
                              <svg className="w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            )}
                            {/* Bulk Cargo Icon */}
                            {sector.name === "Bulk Cargo" && (
                              <div className="relative">
                                <svg className="w-12 h-12 text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                  </svg>
                                </div>
                              </div>
                            )}
                            {/* Project Cargo Icon */}
                            {sector.name === "Project Cargo" && (
                              <div className="relative">
                                <svg className="w-12 h-12 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <svg className="absolute -top-2 -right-2 w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                              </div>
                            )}
                            {/* Heavy Lift Icon */}
                            {sector.name === "Heavy Lift" && (
                              <svg className="w-12 h-12 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            {/* Default Icon for other sectors */}
                            {!["Container Shipping", "Bulk Cargo", "Project Cargo", "Heavy Lift"].includes(sector.name) && (
                              <svg className="w-12 h-12 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {sector.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Active Indicator Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-500" 
                   style={{ width: '25%', transform: `translateX(${currentSlide * 100}%)` }}>
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(industrySectors.length / 4) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 