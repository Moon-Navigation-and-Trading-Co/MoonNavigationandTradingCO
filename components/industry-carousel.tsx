"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const industryItems = [
  { img: "/i1.jpg", title: "Chemicals" },
  { img: "/i2.jpg", title: "Pharma and Healthcare" },
  { img: "/i3.jpg", title: "FMCG" },
  { img: "/i4.jpg", title: "Automotive and machinery" },
  { img: "/i5.jpg", title: "Dangerous materials" },
  { img: "/i6.jpg", title: "Aerospace and Aviation" },
  { img: "/i7.jpg", title: "Construction and Building Materials" },
  { img: "/i8.jpg", title: "Energy and Utilities" },
  { img: "/i9.jpg", title: "Food and Beverage" },
  { img: "/i10.jpg", title: "Retail and E-commerce" },
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

export default function IndustryCarousel() {
  const sliderRef = React.useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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
    appendDots: (dots: React.ReactNode) => (
      <div style={{ marginTop: 24 }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: 8 }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-300" />
    ),
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 font-raleway">
      <h2 className="text-4xl font-raleway font-regular text-primary text-left mb-2 w-full">Industry sectors</h2>
      <div className="text-subheading font-raleway font-regular text-primary text-left mb-14 leading-snug w-full">
        Across industries, cargo types, and destinations, Moon Navigation and Trading Co. provides tailored global and local shipping and logistics solutions that propel business growth.
      </div>
      <div className="relative w-full max-w-7xl mx-auto pt-2">
        <Slider ref={sliderRef} {...settings}>
          {industryItems.map((item, idx) => (
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
                <span className="block text-base font-raleway font-light text-[#011f4b]">{item.title}</span>
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
