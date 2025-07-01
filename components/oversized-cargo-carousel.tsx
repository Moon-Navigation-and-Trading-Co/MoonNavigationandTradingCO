import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const cargoItems = [
  {
    img: "/oversized-cargo-heavy-machinery.jpg",
    title: "Heavy machinery",
    subtitle: "(e.g. bulldozers, forklifts)",
  },
  {
    img: "/oversized-cargo-industrial-equipment.jpg",
    title: "Large industrial equipment",
    subtitle: "",
  },
  {
    img: "/oversized-cargo-prefab-materials.jpg",
    title: "Prefabricated construction materials",
    subtitle: "",
  },
  {
    img: "/oversized-cargo-wind-turbine.jpg",
    title: "Wind turbine blades",
    subtitle: "(if within the container's dimensions)",
  },
  {
    img: "/oversized-cargo-pipes.jpg",
    title: "Large pipes and metal structures",
    subtitle: "",
  },
];

export default function OversizedCargoCarousel() {
  return (
    <div className="w-full flex flex-col items-center" style={{ fontFamily: "Raleway, sans-serif" }}>
      <div className="relative w-full max-w-6xl mx-auto">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {cargoItems.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="px-2 sm:basis-1/1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="overflow-hidden rounded-[2rem] w-full aspect-[4/3] bg-[#f7f7fa] relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="block font-semibold text-lg md:text-xl text-[#23294d] mb-1">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="block text-xs md:text-sm text-[#888] font-normal">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows */}
          <div className="flex justify-end items-center gap-2 mt-6 pr-8 w-full">
            <CarouselPrevious className="!static !border-0 !bg-white !shadow-md !text-[#3B4B8C] !w-12 !h-12 !rounded-full !flex !items-center !justify-center hover:!bg-[#f0f4ff]" />
            <CarouselNext className="!static !border-0 !bg-white !shadow-md !text-[#3B4B8C] !w-12 !h-12 !rounded-full !flex !items-center !justify-center hover:!bg-[#f0f4ff]" />
          </div>
        </Carousel>

        {/* Dot indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {cargoItems.map((_, idx) => (
            <span
              key={idx}
              className="inline-block w-4 h-2 rounded-full bg-[#e0e4f0]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
