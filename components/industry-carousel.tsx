"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Industries = [
  { img: "/container-1.jpg", title: "Chemicals" },
  { img: "/container-1.jpg", title: "Pharma and Healthcare" },
  { img: "/container-1.jpg", title: "FMCG" },
  { img: "/container-1.jpg", title: "Automotive and machinery" },
  { img: "/container-1.jpg", title: "Dangerous materials" },
  { img: "/container-1.jpg", title: "Aerospace and Aviation" },
  { img: "/container-1.jpg", title: "Retail" },
  { img: "/container-1.jpg", title: "Fashion and Lifestyles" },
  { img: "/container-1.jpg", title: "Technology and Electronics" },
  { img: "/container-1.jpg", title: "Energy and Utilities" },
  { img: "/container-1.jpg", title: "Construction and Building materials" },
  { img: "/container-1.jpg", title: "Perishables and Fresh products" },
];

export default function IndustryCarousel() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <div className="w-full ">
        <h1 className="w-full text-start px-3 text-3xl font-semibold">
          Industry Sectors
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
        <CarouselContent className=" snap-none">
          {Industries.map((item, index) => (
            <CarouselItem key={index} className="basis-[280px]  snap-none">
              <div className="rounded-xl items-center justify-center flex flex-col w-full pointer-events-none">
                <Image
                  src={item.img}
                  alt={`Partner logo ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover rounded- pointer-events-none s-[150px] rounded-[60px]"
                />
                <p className="text-center px-1 mt-2 text-sm text-gray-600">
                  {item.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex justify-end px-4 gap-1 absolute  left-0 top-[100%]">
          {/* <CarouselPrevious className="static border-0" /> */}
          <CarouselNext className="static border-0" />
        </div>
      </Carousel>
    </div>
  );
}
