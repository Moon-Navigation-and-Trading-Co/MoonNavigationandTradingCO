"use client";

import React from "react";
import Image from "next/image";

export interface ExampleItem {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

interface ExamplesCarouselProps {
  items: ExampleItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ExamplesCarousel({ 
  items, 
  title, 
  subtitle, 
  className = "" 
}: ExamplesCarouselProps) {
  const scrollAmount = 400;

  const scrollLeft = () => {
    const container = document.getElementById('examples-carousel');
    if (container) {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('examples-carousel');
    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center space-y-6 mb-16">
          {title && (
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          onClick={scrollLeft}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          onClick={scrollRight}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Content */}
        <div 
          id="examples-carousel"
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-8 min-w-max">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-80 flex-shrink-0"
              >
                <div className="h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-base mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}
