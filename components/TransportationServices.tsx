import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface card {
  title: string;
  points: string[];
  image: string;
  link: string;
  quote: string;
}

const TransportationServices: React.FC = () => {
  const t = useTranslations("Services-2");

  const cards = [
    {
      title: t("container"),
      points: [
        t("container-s-1"),
        t("container-s-2"),
        t("container-s-3"),
        t("container-s-4"),
      ],
      image: "/container-1.jpg",
      link: "/learn-more/container",
      quote: "/container-services-form",
    },
    {
      title: t("ship"),
      points: [t("ship-s-1"), t("ship-s-2"), t("ship-s-3")],
      image: "/ship-agency.jpeg",
      link: "/learn-more/ship-agency",
      quote: "/ship-agency-forms",
    },
    {
      title: t("special"),
      points: [t("special-s-1"), t("special-s-2"), t("special-s-3")],
      image: "/ship-agency.jpeg",
      link: "/learn/special",
      quote: "/special-services-forms",
    },
    {
      title: t("buy/sell"),
      points: [t("ship-s-1"), t("ship-s-2"), t("ship-s-3")],
      image: "/ship-agency.jpeg",
      link: "/learn/buy-sell-containers",
      quote: "/buy-sell-containers-forms",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 text-sm lg:text-base">
      {cards.map((card: card, index) => (
        <div
          key={index}
          className="shadow-lg shadow-black relative rounded-2xl max-h-[250px] overflow-hidden bg-black"
        >
          <div className="absolute bg-black-overlay w-full h-full"></div>
          <Image
            className="aspect-video"
            src={card.image}
            width={1000}
            height={1000}
            alt="Container Services Image"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5">
            <h1 className="text-primary-foreground font-semibold text-2xl">
              {card.title}
            </h1>

            <div className="flex justify-between">
              <div className=" text-gray-300 font-normal md:font-semibold flex flex-col gap-2">
                {card.points.map((point, index) => (
                  <p key={index}>{point}</p>
                ))}
              </div>
              <div className="flex flex-col items-end justify-end gap-2">
                <Link
                  className="py-2 px-3 font-semibold bg-white rounded-md hover:opacity-90"
                  href={card.quote}
                >
                  Get Quote
                </Link>
                <button className="justify-center flex items-center text-white hover:text-primary w-full text-xs font-normal pt-1">
                  <Link href={card.link}>Learn More</Link>
                  <ChevronRight width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransportationServices;
