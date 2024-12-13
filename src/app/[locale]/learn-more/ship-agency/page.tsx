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
import { useTranslations } from "next-intl";
import CarouselAnimation from "@/components/carousel-animation-component";

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
      title: t("transit"),
      description: t("transit-p"),
      image: "/airCargo.jpg",
      link: "/learn/transit",
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
      <CarouselAnimation title={t("ship-agency")} freightTypes={Data} />
    </>
  );
}
