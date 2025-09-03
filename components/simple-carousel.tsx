"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  img: string;
  title: string;
}

interface SimpleCarouselProps {
  items: CarouselItem[];
}

export default function SimpleCarousel({ items }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const itemWidth = scrollContainerRef.current.scrollWidth / items.length;
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl w-12 h-12 p-0 rounded-full border-gray-200 hover:border-blue-300 transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </Button>
      
      <Button
        variant="outline"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl w-12 h-12 p-0 rounded-full border-gray-200 hover:border-blue-300 transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </Button>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-full min-w-[250px] max-w-[350px] mx-3"
            onClick={() => scrollToIndex(index)}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 overflow-hidden">
              <div className="relative w-full h-40 p-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 border-t border-gray-50">
                <h3 className="text-sm font-raleway font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-600 shadow-lg scale-110' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-blue-600 to-blue-700 h-1 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
} 