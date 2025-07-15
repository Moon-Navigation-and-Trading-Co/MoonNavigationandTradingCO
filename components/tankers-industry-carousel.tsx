"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const tankersIndustries = [
  {
    img: "/industries-oil-gas.jpg",
    title: "Oil & Gas",
    description: "Transportation of crude, refined petroleum, and natural gas with precision and safety.",
  },
  {
    img: "/industries-chemical.jpg",
    title: "Chemical Manufacturing",
    description: "Providing safe and reliable transport for bulk chemicals and hazardous chemicals.",
  },
  {
    img: "/industries-agriculture.jpg",
    title: "Agriculture & Food Industry",
    description: "Bulk liquid transportation solutions for edible and agricultural oils.",
  },
  {
    img: "/industries-industrial.jpg",
    title: "Industrial & Energy Sectors",
    description: "Supplying essential fuels and raw materials to support operational needs.",
  },
];

function ArrowGroup(props: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="absolute flex flex-row gap-2 right-0 -bottom-10 pr-4 z-20">
      <button
        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-100 transition"
        onClick={props.onPrev}
        aria-label="Previous"
        type="button"
      >
        &#8592;
      </button>
      <button
        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-100 transition"
        onClick={props.onNext}
        aria-label="Next"
        type="button"
      >
        &#8594;
      </button>
    </div>
  );
}

export default function TankersIndustryCarousel() {
  const sliderRef = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    swipeToSlide: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto pt-2">
      <Slider ref={sliderRef} {...settings}>
        {tankersIndustries.map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="overflow-hidden rounded-[2rem] w-full aspect-[4/3] bg-[#f7f7fa] relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="mt-4 text-center">
              <span
                className="block text-lg md:text-xl text-primary mb-1"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}
              >
                {item.title}
              </span>
              <span
                className="block text-xs md:text-sm text-foreground"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}
              >
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </Slider>
      <ArrowGroup
        onPrev={() => sliderRef.current?.slickPrev()}
        onNext={() => sliderRef.current?.slickNext()}
      />
    </div>
  );
} 