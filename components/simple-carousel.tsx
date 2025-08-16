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
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md w-10 h-10 p-0"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md w-10 h-10 p-0"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-full min-w-[200px] max-w-[300px] mx-2"
            onClick={() => scrollToIndex(index)}
          >
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative w-full h-32 mb-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 