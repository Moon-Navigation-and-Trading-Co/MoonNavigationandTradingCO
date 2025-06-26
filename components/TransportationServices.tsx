import type React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Point {
  name: string;
  link: string;
}

interface Card {
  title: string;
  points: Point[];
  image: string;
  link: string;
  quote: string;
}

const TransportationServices: React.FC = () => {
  const t = useTranslations("Services-2");

  const cards: Card[] = [
    {
      title: t("container"),
      points: [
        { name: t("container-s-1"), link: "/container-service-1" },
        { name: t("container-s-2"), link: "/container-service-2" },
        { name: t("container-s-3"), link: "/container-service-3" },
        { name: t("container-s-4"), link: "/container-service-4" },
        { name: t("container-s-5"), link: "/container-service-5" },
      ],
      image: "/container-1.jpg",
      link: "/learn-more/container",
      quote: "/container-services-forms",
    },
    {
      title: t("ship"),
      points: [
        { name: t("ship-s-1"), link: "/ship-service-1" },
        { name: t("ship-s-2"), link: "/ship-service-2" },
        { name: t("ship-s-3"), link: "/ship-service-3" },
      ],
      image: "/ship-agency.jpeg",
      link: "/learn-more/ship-agency",
      quote: "/ship-agency-forms",
    },
    {
      title: t("special"),
      points: [
        { name: t("special-s-1"), link: "/special-services-forms" },
        { name: t("special-s-2"), link: "/special-services-forms" },
        { name: t("special-s-3"), link: "/special-services-forms" },
        { name: t("special-s-4"), link: "/special-services-forms" },
      ],
      image: "/ship-agency.jpeg",
      link: "/learn/special",
      quote: "/special-services-forms",
    },
    {
      title: t("buy/sell"),
      points: [
        { name: t("ship-s-1"), link: "/buy-sell-service-1" },
        { name: t("ship-s-2"), link: "/buy-sell-service-2" },
        { name: t("ship-s-3"), link: "/buy-sell-service-3" },
      ],
      image: "/ship-agency.jpeg",
      link: "/learn/buy-rent-containers",
      quote: "/buy-rent-container-forms",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 text-sm lg:text-base">
      {cards.map((card: Card, index) => (
        <div
          key={index}
          className="shadow-lg shadow-black relative rounded-2xl h-[300px] overflow-hidden bg-black group hover:scale-[1.02] transition-transform duration-300"
        >
          <Image
            className="object-cover w-full h-full"
            src={card.image || "/placeholder.svg"}
            fill
            alt={`${card.title} Services Image`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black-overlay group-hover:bg-black/30 transition-all duration-300"></div>
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <h1 className="text-primary-foreground font-semibold text-2xl transition-colors">
              {card.title}
            </h1>

            <div className="flex justify-between items-end">
              <div className="text-gray-300 flex flex-col gap-3">
                {card.points.map((point, index) => (
                  <Link
                    key={index}
                    href={point.link}
                    className="hover:text-sky-800 transition-colors z-10"
                  >
                    {point.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-end justify-end gap-2">
                <Link
                  className="py-2 px-3 font-semibold bg-white rounded-md hover:bg-primary hover:text-white transition-colors z-10"
                  href={card.quote}
                >
                  Get Quote
                </Link>
                <div className="justify-center flex items-center text-white group-hover:text-sky-800 w-full text-xs font-normal pt-1 transition-colors">
                  <span>Learn More</span>
                  <ChevronRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
          <Link href={card.link} className="absolute inset-0 z-0">
            <span className="sr-only">Learn more about {card.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TransportationServices;
