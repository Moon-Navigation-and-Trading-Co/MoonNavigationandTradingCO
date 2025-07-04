"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export default function PartnerLogoCarousel() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="w-full ">
        <h1 className="w-full text-start px-3 text-3xl font-semibold">
          Our Partners
        </h1>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
          slidesToScroll: 3,
          dragFree: true,
        }}
        className="w-full relative h-full  py-10 px-1 gap-0"
      >
        <CarouselContent className="basis-[150px] snap-none">
          {partnerLogos1.map((logo, index) => (
            <CarouselItem key={index} className="basis-[180px] snap-none">
              <div className="rounded-xl pointer-events-none w-full h-full">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={1200}
                  height={1100}
                  className="object-contain rounded-xl pointer-events-none size-[180px] "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex justify-end px-4 gap-1 absolute  left-0 top-[100%]">
          <CarouselPrevious className="static border-0" />
          <CarouselNext className="static border-0" />
        </div>
      </Carousel>
    </div>
  );
}
