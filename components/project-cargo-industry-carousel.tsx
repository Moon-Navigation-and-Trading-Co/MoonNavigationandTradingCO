"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const projectCargoIndustries = [
  {
    title: "Marine and Shipbuilding",
    img: "/industry-marine.jpg"
  },
  {
    title: "Construction and Infrastructure",
    img: "/industry-construction.jpg"
  },
  {
    title: "Mining",
    img: "/industry-mining.jpg"
  },
  {
    title: "Aerospace",
    img: "/industry-aerospace.jpg"
  },
  {
    title: "Energy and Power",
    img: "/industry-energy.jpg"
  }
];

export default function ProjectCargoIndustryCarousel() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        setShowScrollIndicator(container.scrollWidth > container.clientWidth);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const handleScrollClick = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-8 min-w-max">
          {projectCargoIndustries.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-64 flex-shrink-0">
              <div className="h-32 relative">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-medium text-base text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop and Mobile Scroll Arrows */}
      {showScrollIndicator && (
        <>
          {/* Left Arrow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-full">
            <div className="bg-gradient-to-r from-white via-white to-transparent w-full h-full flex items-center justify-start pl-2">
              <button
                onClick={() => handleScrollClick('left')}
                className="group bg-blue-500/20 backdrop-blur-sm rounded-full p-2 border border-blue-200/50 hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <svg
                  className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full">
            <div className="bg-gradient-to-l from-white via-white to-transparent w-full h-full flex items-center justify-end pr-2">
              <button
                onClick={() => handleScrollClick('right')}
                className="group bg-blue-500/20 backdrop-blur-sm rounded-full p-2 border border-blue-200/50 hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <svg
                  className="w-5 h-5 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 