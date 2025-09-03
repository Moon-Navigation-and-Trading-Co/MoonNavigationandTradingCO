"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Industry sectors data with real images
const industrySectors = [
  {
    name: "Chemicals",
    image: "/i1.jpg",
    description: "Chemical logistics expertise"
  },
  {
    name: "Pharma and Healthcare",
    image: "/i2.jpg",
    description: "Temperature-controlled healthcare logistics"
  },
  {
    name: "FMCG",
    image: "/i3.jpg",
    description: "Fast-moving consumer goods"
  },
  {
    name: "Automotive and Machinery",
    image: "/i4.jpg",
    description: "Automotive and machinery logistics"
  },
  {
    name: "Dangerous Materials",
    image: "/i5.jpg",
    description: "Hazardous materials handling"
  },
  {
    name: "Aerospace and Aviation",
    image: "/i6.jpg",
    description: "Aerospace logistics solutions"
  },
  {
    name: "Construction and Building Materials",
    image: "/i7.jpg",
    description: "Construction materials logistics"
  },
  {
    name: "Energy and Utilities",
    image: "/i8.jpg",
    description: "Energy sector logistics"
  },
  {
    name: "Retail",
    image: "/i9.jpg",
    description: "Retail supply chain solutions"
  },
  {
    name: "Fashion and Lifestyle",
    image: "/i10.jpg",
    description: "Fashion and lifestyle logistics"
  },
  {
    name: "Perishables and Fresh Products",
    image: "/i11.jpg",
    description: "Fresh produce logistics"
  },
  {
    name: "Technology and Electronics",
    image: "/i12.jpg",
    description: "Tech and electronics logistics"
  }
];

export default function IndustrySectorsNew() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSector, setHoveredSector] = useState<number | null>(null);

  // Auto-rotate sectors
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(industrySectors.length / 4));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 lg:py-28 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Specialized Solutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-raleway font-light text-gray-900 mb-6 leading-tight">
            Industry <span className="text-blue-600 font-light">Sectors</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Across industries, cargo types, and destinations, Moon Navigation and Trading Co. provides tailored global and local shipping and logistics solutions that propel business growth.
          </p>
        </div>

        {/* Industry Sectors Carousel */}
        <div className="mb-12">
          <div className="relative max-w-6xl mx-auto">


            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl p-6 lg:p-8">
              {/* Mobile: Horizontal scroll with 1 item at a time */}
              <div className="md:hidden relative overflow-x-auto no-scrollbar">
                {/* Mobile Navigation Arrows */}
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 group"
                  onClick={() => {
                    const container = document.querySelector('.mobile-scroll-container');
                    if (container) {
                      container.scrollBy({ left: -280, behavior: 'smooth' });
                    }
                  }}
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 group"
                  onClick={() => {
                    const container = document.querySelector('.mobile-scroll-container');
                    if (container) {
                      container.scrollBy({ left: 280, behavior: 'smooth' });
                    }
                  }}
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div className="flex gap-6 w-max mobile-scroll-container">
                  {industrySectors.map((sector, index) => (
                    <div 
                      key={index} 
                      className="group text-center w-64 flex-shrink-0"
                      onMouseEnter={() => setHoveredSector(index)}
                      onMouseLeave={() => setHoveredSector(null)}
                    >
                      {/* Image Section - Fixed Position */}
                      <div className="w-64 h-64 mb-4">
                        <div className="relative w-full h-full">
                          {/* Square Rounded Image Container with Blue Border */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md">
                            <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                              <Image 
                                src={sector.image} 
                                alt={sector.name}
                                width={256}
                                height={256}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                          
                          {/* Hover Overlay with Blue Gradient */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-15 transition-all duration-300"></div>
                          
                          {/* Blue Glow Effect */}
                          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-25 blur-lg transition-all duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Text Section - Fixed Height */}
                      <div className="h-16 flex flex-col justify-start">
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                          {sector.name}
                        </h3>
                        <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              

              
              {/* Desktop: Carousel with 4 items per slide */}
              <div className="hidden md:block">
                <div 
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(industrySectors.length / 4) }, (_, slideIndex) => (
                    <div key={slideIndex} className="flex-shrink-0 w-full grid grid-cols-4 gap-6">
                      {industrySectors.slice(slideIndex * 4, slideIndex * 4 + 4).map((sector, index) => (
                        <div 
                          key={index} 
                          className="group text-center"
                          onMouseEnter={() => setHoveredSector(slideIndex * 4 + index)}
                          onMouseLeave={() => setHoveredSector(null)}
                        >
                          {/* Image Section - Fixed Position */}
                          <div className="w-64 h-64 mb-4 mx-auto">
                            <div className="relative w-full h-full">
                              {/* Square Rounded Image Container with Blue Border */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md">
                                <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                                  <Image 
                                    src={sector.image} 
                                    alt={sector.name}
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                              </div>
                              
                              {/* Hover Overlay with Blue Gradient */}
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-15 transition-all duration-300"></div>
                              
                              {/* Blue Glow Effect */}
                              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-25 blur-lg transition-all duration-300"></div>
                            </div>
                          </div>
                          
                          {/* Text Section - Fixed Height */}
                          <div className="h-16 flex flex-col justify-start items-center">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                              {sector.name}
                            </h3>
                            <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              {sector.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Pagination Dots and Navigation - Desktop Only */}
            <div className="hidden md:flex justify-center items-center mt-6 space-x-4">
              {/* Left Arrow */}
              <button 
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(industrySectors.length / 4) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => setCurrentSlide(Math.min(Math.ceil(industrySectors.length / 4) - 1, currentSlide + 1))}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
} 