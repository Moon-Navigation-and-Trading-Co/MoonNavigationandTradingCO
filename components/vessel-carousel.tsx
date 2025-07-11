"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type Vessel = {
  img: string;
  title: string;
  subtitle?: string;
};

interface VesselCarouselProps {
  vessels: Vessel[];
  className?: string;
}

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

export default function VesselCarousel({ vessels, className = "" }: VesselCarouselProps) {
  let sliderRef: Slider | null = null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={`relative w-full flex flex-col items-center ${className}`}
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <div className="relative w-full flex flex-row justify-center items-center min-h-[260px] mb-8">
        <Slider ref={(ref) => (sliderRef = ref)} {...settings} className="w-full">
          {vessels.map((item, idx) => (
            <div key={idx}>
              <div className="flex flex-col items-center justify-center px-2">
                <div className="w-[240px] h-[180px] rounded-[48px] overflow-hidden mb-4 bg-[#f3f3f3] flex items-center justify-center mx-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={240}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="block text-base md:text-lg text-[#232B50] text-center font-semibold mt-1">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="block text-sm text-gray-500 text-center mt-0.5">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </Slider>

        <ArrowGroup
          onPrev={() => sliderRef?.slickPrev()}
          onNext={() => sliderRef?.slickNext()}
        />
      </div>
    </div>
  );
}
