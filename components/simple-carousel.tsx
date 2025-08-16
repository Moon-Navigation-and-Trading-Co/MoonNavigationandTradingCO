"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  img: string;
  title: string;
}

interface SimpleCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function SimpleCarousel({ items, className = "" }: SimpleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden rounded-[2rem] w-full aspect-[4/3] bg-[#f7f7fa] relative">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items.length * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-full h-full flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all shadow-lg"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all shadow-lg"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Title */}
      <div className="mt-4 text-center">
        <span className="block text-base font-raleway font-light text-[#011f4b]">
          {items[currentIndex]?.title}
        </span>
      </div>
    </div>
  );
} 