"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export type Vessel = {
  id: number;
  name: string;
  type: string;
  capacity: string;
  image: string;
  description: string;
};

const vessels: Vessel[] = [
  {
    id: 1,
    name: "MV Moon Star",
    type: "Container Vessel",
    capacity: "8,000 TEU",
    image: "/vessel-1.jpg",
    description: "Modern container vessel with advanced navigation systems",
  },
  {
    id: 2,
    name: "MV Ocean Pioneer",
    type: "Bulk Carrier",
    capacity: "50,000 DWT",
    image: "/vessel-2.jpg",
    description: "Efficient bulk carrier for various cargo types",
  },
  {
    id: 3,
    name: "MV Trade Wind",
    type: "General Cargo",
    capacity: "15,000 DWT",
    image: "/vessel-3.jpg",
    description: "Versatile vessel for project cargo and heavy lifts",
  },
];

export default function VesselCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {vessels.map((vessel, index) => (
            <div key={vessel.id} className="embla__slide flex-[0_0_auto] min-w-0">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-2">
                <div className="w-16 h-16 mb-3">
                  <Image
                    src={vessel.image}
                    alt={vessel.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 text-center">
                  {vessel.name}
                </h3>
                <p className="text-xs text-gray-600 text-center mt-1">
                  {vessel.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
