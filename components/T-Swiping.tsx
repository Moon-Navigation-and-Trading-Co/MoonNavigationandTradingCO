"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AlignCenter, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FreightType {
  title: string;
  description: string;
  image: string;
  link: string;
  quote: string;
}

interface CarouselAnimationProps {
  freightTypes: FreightType[];
  title: string;
}

export default function TSwiping({
  freightTypes,
  title,
}: CarouselAnimationProps) {
  const t = useTranslations("HomePage");
  const tt = useTranslations("Buttons");
  const router = useRouter();
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    autoplay: false
  };

  return (
    <div className="flex flex-col lg:flex-row h-[400px] lg:h-[400px] w-full my-16 px-2 place-items-center">
      {/* Title/Image Section */}
      <div className="w-full lg:w-[160px] relative shadow-md overflow-hidden shadow-black h-[180px] lg:h-full rounded-2xl flex items-center">
        <div className="bg-black/35 z-[104] absolute w-full h-full"></div>
        <Image
          src={"/container-top-v.jpeg"}
          className="object-cover hidden lg:flex"
          fill
          alt="Transportation Services Background"
        />
        <Image
          src={"/container-top-h.jpeg"}
          className="object-cover flex lg:hidden"
          fill
          alt="Transportation Services Background"
        />
        <h1 className="!text-center z-[105] text-3xl lg:text-xl font-semibold text-[#E2F1E7] w-full" >
          {title}
        </h1>
        

      </div>
      <Separator className=" w-[2px] rounded-[100px] lg:my-24" />
      {/* Carousel Section */}
      <div className="relative w-full flex items-center justify-center h-[400px] max-w-xl">
        <Slider ref={sliderRef} {...settings} className="w-full h-full">
          {freightTypes.map((freight) => (
            <div key={freight.title} className="flex items-center justify-center h-[400px]">
              <Card
                className="h-full w-full border-0 cursor-pointer bg-black shadow-xl overflow-hidden rounded-2xl"
                onClick={() => router.push(freight.link)}
              >
                <CardContent className="relative w-full h-full p-0">
                  <Image
                    src={freight.image}
                    alt={freight.title}
                    fill
                    className="h-full w-full object-cover overflow-hidden rounded-[18px]"
                  />
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/100 to-black/50" />
                  <div className="absolute w-full h-full bottom-0 left-0 px-2 py-4 text-white flex flex-col justify-end gap-4">
                    <div>
                      <h2 className="text-xl w-full font-semibold">
                        {freight.title}
                      </h2>
                      <p className="mb-4 mt-2 text-base text-gray-300 font-light max-w-[500px]">
                        {freight.description}
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-end">
                      <Button className="bg-white text-black p-0 hover:bg-gray-200">
                        <Link
                          className="w-full h-full flex items-center px-3"
                          href={freight.quote}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {tt("getQuote")}
                        </Link>
                      </Button>
                      <button
                        className="flex bg-transparent text-gray-300 px-2 items-end text-xs hover:text-gray-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(freight.link);
                        }}
                      >
                        {tt("learnmore")} <ChevronRight height={15} width={15} />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

// Custom arrow components for slick
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 0, zIndex: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 0, zIndex: 10 }}
      onClick={onClick}
    />
  );
}
