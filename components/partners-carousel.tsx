"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// In a real-world scenario, replace these with actual partner logo URLs
const partnerLogos = Array(20)
  .fill(null)
  .map(
    (_, index) =>
      `/placeholder.svg?height=100&width=200&text=Partner${index + 1}`
  );
const partnerLogos1 = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/13.png",
  "/logos/14.png",
  "/logos/15.png",
  "/logos/16.png",
  "/logos/17.png",
  "/logos/18.png",
  "/logos/19.png",
  "/logos/20.png",
  "/logos/21.png",
  "/logos/22.png",
  "/logos/23.png",
  "/logos/24.png",
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

export default function PartnerLogoCarousel() {
  let sliderRef: Slider | null = null;
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="flex flex-col gap-10 pb-10 items-center w-full">
      <div className="w-full ">
        <h1 className="w-full text-start px-3 text-3xl font-raleway font-regular">Our Partners</h1>
      </div>
      <div className="relative w-full flex flex-row justify-center items-center min-h-[180px] mb-8">
        <Slider ref={(ref) => (sliderRef = ref)} {...settings} className="w-full">
          {partnerLogos1.map((logo, index) => (
            <div key={index}>
              <div className="flex flex-col items-center justify-center px-2">
                <div className="w-[180px] h-[180px] flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    width={180}
                    height={180}
                    className="object-contain w-full h-full"
                  />
                </div>
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
