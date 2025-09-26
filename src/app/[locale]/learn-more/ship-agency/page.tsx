import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Plane } from "lucide-react";
import LearnMoreForm from "@/components/learn-more-cards";
import ServiceSection from "@/components/ServiceSection";
import GetQuoteComponent from "@/components/getQuoteComponent";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function OceanFreightPage() {
  const t = useTranslations("ship-agency");

  const Data = [
    {
      title: t("pda"),
      description: t("pda-p"),
      image: "/airCargo.jpg",
      link: "/learn/pda",
      quote: "/ship-agency-forms",
    },
    {
      title: t("crew"),
      description: t("crew-p"),
      image: "/airCargo.jpg",
      link: "/learn/crew",
      quote: "/ship-agency-forms",
    },
    {
      title: "Suez Canal Transit Passage",
      description: "End-to-end management of Suez Canal transits including documentation, slot booking, and coordination.",
      image: "/suez-1.jpg",
      link: "/learn/suez-canal-transit-passage",
      quote: "/ship-agency-forms",
    },
    {
      title: t("transit"),
      description: t("transit-p"),
      image: "/airCargo.jpg",
      link: "/learn/spare-parts",
      quote: "/ship-agency-forms",
    },
    {
      title: t("bunkering"),
      description: t("bunkering-p"),
      image: "/airCargo.jpg",
      link: "/learn/bunkering",
      quote: "/ship-agency-forms",
    },
    {
      title: t("special"),
      description: t("special-p"),
      image: "/airCargo.jpg",
      link: "/learn/special",
      quote: "/ship-agency-forms",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0 z-10">
            <Image src="/shipagencytitleimage.jpg" alt="Ship Agency & Operational Services" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1200px" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 rounded-[2rem] md:rounded-[3rem]"></div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Ship Agency & Operational Services</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                {t("ship-agency")}
              </h1>
              <h2 className="font-light text-white/80 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Efficient management and support for vessels at port and at sea across Egypt.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <ServiceSection
        id="ship-agency-services"
        badgeLabel="Ship Agency and Operational Services"
        description="Efficient management and support for vessels at port and at sea across Egypt."
        items={Data.map(d => ({
          title: d.title,
          description: d.description,
          image: d.image,
          learnLink: d.link,
          quoteLink: d.quote,
        }))}
      />
      <GetQuoteComponent topic="Ship Agency" link="/ship-agency-forms" />
    </>
  );
}
