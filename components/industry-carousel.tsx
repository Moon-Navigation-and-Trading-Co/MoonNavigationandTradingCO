"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const industryItems = [
  {
    img: "/icons/container/10.png",
    title: "Container Shipping",
  },
  {
    img: "/icons/container/106.png",
    title: "Bulk Cargo",
  },
  {
    img: "/icons/container/107.png",
    title: "Project Cargo",
  },
  {
    img: "/icons/container/108.png",
    title: "Heavy Lift",
  },
  {
    img: "/icons/container/109.png",
    title: "Specialized Transport",
  },
  {
    img: "/icons/container/110.png",
    title: "Logistics Solutions",
  },
];

export default function IndustryCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {industryItems.map((item, index) => (
            <div key={index} className="embla__slide flex-[0_0_auto] min-w-0">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-2">
                <div className="w-16 h-16 mb-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
