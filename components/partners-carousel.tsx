"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Featured partners with their logos
const featuredPartners = [
  {
    name: "ElSewedy Cables",
    logo: "/logos/3.png",
    category: "Manufacturing",
    description: "Leading cable manufacturing solutions"
  },
  {
    name: "Petrojet",
    logo: "/logos/4.png",
    category: "Oil & Gas",
    description: "Engineering excellence in energy"
  },
  {
    name: "Satorp",
    logo: "/logos/6.png",
    category: "Petrochemicals",
    description: "Advanced petrochemical solutions"
  },
  {
    name: "NCMP",
    logo: "/logos/9.png",
    category: "Mining",
    description: "Sustainable mining operations"
  },
  {
    name: "New Partner",
    logo: "/logos/1.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 14",
    logo: "/logos/14.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Premium",
    logo: "/logos/12.png",
    category: "Trading",
    description: "International trade expertise"
  },
  {
    name: "Arab Potash",
    logo: "/logos/13.png",
    category: "Mining",
    description: "Potash mining and processing"
  },
  {
    name: "Partner 17",
    logo: "/logos/17.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 26",
    logo: "/logos/26.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 28",
    logo: "/logos/28.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 23",
    logo: "/logos/23.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Bavaria",
    logo: "/logos/7.png",
    category: "Beverages",
    description: "Premium beverage manufacturing"
  },
  {
    name: "Jordan Steel Group",
    logo: "/logos/10.png",
    category: "Steel Manufacturing",
    description: "Quality steel production"
  },
  {
    name: "Partner 19",
    logo: "/logos/19.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 20",
    logo: "/logos/20.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 21",
    logo: "/logos/21.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 22",
    logo: "/logos/22.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 24",
    logo: "/logos/24.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 25",
    logo: "/logos/25.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 27",
    logo: "/logos/27.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "WesternGeco",
    logo: "/logos/8.png",
    category: "Energy Services",
    description: "Geophysical exploration services"
  },
  {
    name: "Partner 16",
    logo: "/logos/16.png",
    category: "Partner",
    description: "Strategic partner"
  },
  {
    name: "Partner 18",
    logo: "/logos/18.png",
    category: "Partner",
    description: "Strategic partner"
  }
];

export default function PartnerLogoCarousel() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Observe when the partners section is in view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const nowInView = entry.isIntersecting;
        setIsInView(nowInView);
        if (nowInView && scrollContainerRef.current) {
          // Reset to the first logo when entering view
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
        }
      },
      { root: null, threshold: 0.25 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll only when section is in view
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
          setTimeout(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }
          }, 1000);
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50/30 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Global Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">Partners</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading companies across industries to deliver exceptional maritime, logistics, and trading solutions worldwide.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 lg:gap-6 pb-4 md:pb-0 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:overflow-visible scroll-smooth"
          >
            {featuredPartners.map((partner, index) => (
              <div key={index} className="group flex-shrink-0 md:flex-shrink">
                <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-indigo-50 w-48 md:w-auto">
                  <div className="relative h-24 md:h-20 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={140}
                      height={140}
                      className="object-contain transition-all duration-300 group-hover:scale-110 max-w-full max-h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots and Navigation */}
          <div className="md:hidden flex justify-center items-center mt-6 space-x-4">
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(featuredPartners.length / 3) }, (_, index) => (
                <button
                  key={index}
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
              onClick={scrollRight}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-transparent to-blue-800/20"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            

          </div>
        </div>
      </div>
    </section>
  );
}
