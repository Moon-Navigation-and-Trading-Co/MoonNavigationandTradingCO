"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const projectCargoIndustries = [
  { img: "/industry-marine.jpg", title: "Marine and Shipbuilding" },
  { img: "/industry-construction.jpg", title: "Construction and Infrastructure" },
  { img: "/industry-mining.jpg", title: "Mining" },
  { img: "/industry-aerospace.jpg", title: "Aerospace" },
  { img: "/industry-energy.jpg", title: "Energy" },
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

export default function ProjectCargoCarousel() {
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
    <section className="w-full flex flex-col items-start justify-center py-16 px-4 font-raleway">
      <h2 className="text-4xl font-raleway font-normal text-primary mb-14 pl-2 md:pl-6" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
        Key Industries Leveraging Our Project Cargo Solution
      </h2>
      <div className="relative w-full max-w-7xl mx-auto pt-2 pl-2 md:pl-6">
        <Slider ref={sliderRef} {...settings}>
          {projectCargoIndustries.map((item, idx) => (
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
              <div className="mt-4 text-left pl-1">
                <span className="block text-base" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300, color: '#011f4b' }}>{item.title}</span>
              </div>
            </div>
          ))}
        </Slider>
        <ArrowGroup
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
        />
      </div>
    </section>
  );
} 