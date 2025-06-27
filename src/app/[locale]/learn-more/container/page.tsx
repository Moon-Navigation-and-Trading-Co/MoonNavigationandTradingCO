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
      title: "Full Container Load (FCL)",
      description: "Full Container Load (FCL) is a shipping service that allows you to ship your cargo in a container that is filled to the brim. This is the most common type of shipping service and is ideal for large shipments.",
      image: "/airCargo.jpg",
      link: "/learn/full",
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
      description: "Inland container transport services connect ports to inland destinations, ensuring seamless cargo movement between shipping and road networks. Our specialized fleet and experienced team handle container handling, storage, and distribution to and from ports.",
      image: "/airCargo.jpg",
      link: "/learn/inland-container",
      quote: "/container-services-forms",
    },
    {
      title: "Container Stevedoring and Storage",
      description: "Our container stevedoring and storage services ensure your cargo is safely stored and handled during transit. We offer secure, climate-controlled facilities with state-of-the-art equipment to protect your goods during storage and handling.",
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
