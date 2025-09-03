"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export type OversizedCargo = {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
};

const oversizedCargo: OversizedCargo[] = [
  {
    id: 1,
    name: "Prefabricated Construction Materials",
    type: "Construction",
    image: "/oversized-cargo-prefab-materials.jpg",
    description: "Pre-built building components and modular structures",
  },
  {
    id: 2,
    name: "Heavy Machinery",
    type: "Industrial Equipment",
    image: "/oversized-cargo-heavy-machinery.jpg",
    description: "Large-scale industrial machinery and equipment",
  },
  {
    id: 3,
    name: "Large Industrial Equipment",
    type: "Construction Equipment",
    image: "/oog-construction-equipment.jpg",
    description: "Bulldozers, forklifts, and heavy construction equipment",
  },
  {
    id: 4,
    name: "Wind Turbine Blades",
    type: "Energy Equipment",
    image: "/oversized-cargo-wind-turbine.jpg",
    description: "Wind turbine components within container dimensions",
  },
  {
    id: 5,
    name: "Large Pipes and Metal Structures",
    type: "Infrastructure",
    image: "/oversized-cargo-pipes.jpg",
    description: "Large diameter pipes and structural metal components",
  },
];

export default function VesselCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Arrow Navigation */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollPrev}
          className="group bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
        >
          <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollNext}
          className="group bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
        >
          <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Carousel Container */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {oversizedCargo.map((cargo, index) => (
            <div key={cargo.id} className="embla__slide flex-[0_0_auto] min-w-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                {/* Image */}
                <div className="h-48 relative">
                  <Image 
                    src={cargo.image} 
                    alt={cargo.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-medium text-base mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {cargo.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cargo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
