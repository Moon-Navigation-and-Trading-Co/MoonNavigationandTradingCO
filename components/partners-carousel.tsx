"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

// In a real-world scenario, replace these with actual partner logo URLs
const partnerLogos = [
  {
    img: "/logos/1.png",
    title: "Partner 1",
  },
  {
    img: "/logos/2.png",
    title: "Partner 2",
  },
  {
    img: "/logos/3.png",
    title: "Partner 3",
  },
  {
    img: "/logos/4.png",
    title: "Partner 4",
  },
  {
    img: "/logos/5.png",
    title: "Partner 5",
  },
  {
    img: "/logos/6.png",
    title: "Partner 6",
  },
];

export default function PartnerLogoCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {partnerLogos.map((item, index) => (
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
