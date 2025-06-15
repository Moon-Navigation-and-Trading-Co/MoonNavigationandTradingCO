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
import { useTranslations } from "next-intl";
import CarouselAnimation from "@/components/carousel-animation-component";

export default function OceanFreightPage() {
  const t = useTranslations("container");

  const Data = [
    {
      title: t("less"),
      description: t("less-p"),
      image: "/airCargo.jpg",
      link: "/learn/less",
      quote: "/container-services-forms",
    },
    {
      title: t("standard"),
      description: t("standard-p"),
      image: "/airCargo.jpg",
      link: "/learn/standard",
      quote: "/container-services-forms",
    },
    {
      title: t("oversized"),
      description: t("oversized-p"),
      image: "/airCargo.jpg",
      link: "/learn/oversized",
      quote: "/container-services-forms",
    },
    {
      title: t("out-gauge"),
      description: t("out-gauge-p"),
      image: "/airCargo.jpg",
      link: "/learn/out-gauge",
      quote: "/container-services-forms",
    },
    {
      title: t("inland-container-transport"),
      description: t("out-gauge-p"),
      image: "/airCargo.jpg",
      link: "/learn/inland-container",
      quote: "/container-services-forms",
    },
    {
      title: t("Container-Stevedoring-and-Storage"),
      description: t("out-gauge-p"),
      image: "/airCargo.jpg",
      link: "/learn/stevedoring-container",
      quote: "/container-services-forms",
    },
  ];

  return (
    <>
      <CarouselAnimation title={t("container")} freightTypes={Data} />
    </>
  );
}
