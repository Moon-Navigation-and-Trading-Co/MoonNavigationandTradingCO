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
import RequestQuoteButton from "@/components/RequestQuoteButton";

export default function OceanFreightPage() {
  const t = useTranslations("container");

  const Data = [
    {
      title: t("less"),
      description: t("less-p"),
      image: "/lcl-banner.jpg",
              link: "/learn/Less-Than-Container-Load",
      quote: "/container-services-forms",
    },
    {
      title: "Full Container Load (FCL)",
      description: "Full Container Load (FCL) is a shipping service that allows you to ship your cargo in a container that is filled to the brim. This is the most common type of shipping service and is ideal for large shipments.",
      image: "/container-banner.jpg",
      link: "/learn/full",
      quote: "/container-services-forms",
    },
    {
      title: t("oversized"),
      description: t("oversized-p"),
      image: "/oversized-container-banner.jpg",
      link: "/learn/oversized",
      quote: "/container-services-forms",
    },
    {
      title: t("out-gauge"),
      description: t("out-gauge-p"),
      image: "/out-gauge-banner.jpg",
      link: "/learn/out-gauge",
      quote: "/container-services-forms",
    },
    {
      title: t("inland-container-transport"),
      description: "Inland container transport services connect ports to inland destinations, ensuring seamless cargo movement between shipping and road networks. Our specialized fleet and experienced team handle container handling, storage, and distribution to and from ports.",
      image: "/inland-container-banner.jpg",
      link: "/learn/inland-container",
      quote: "/container-services-forms",
    },
    {
      title: "Container Stevedoring and Storage",
      description: "Our container stevedoring and storage services ensure your cargo is safely stored and handled during transit. We offer secure, climate-controlled facilities with state-of-the-art equipment to protect your goods during storage and handling.",
      image: "/stevedoring-container-banner.jpg",
      link: "/learn/stevedoring-container",
      quote: "/container-services-forms",
    },
  ];

  return (
    <>
      <div className="w-full max-w-7xl min-h-[320px] flex flex-col items-center mt-10 mb-8 md:px-0 place-self-center" style={{fontFamily: "Raleway"}}>
        {/* Top Banner */}
        <div className="w-full rounded-[60px] overflow-hidden mb-8 shadow-lg">
          <div className="relative w-full h-[350px]">
            <img
              src="/container-banner-out.jpg"
              alt="Moon Navigation and Trading Co. Full Container"
              className="object-cover w-full h-full"
              style={{ objectFit: "cover", borderRadius: "2rem" }}
              loading="eager"
            />
          </div>
        </div>
        {/* Main Content */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Title and CTA */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-12xl  text-foreground mb-4 mt-10"  >
              Containers
            </h1>
            <a href="/container-services-forms">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </a>
          </div>
          {/* Right: Description */}
          <div>
            <h2 className="text-lg  text-primary mb-2" >
              What is Container Services&nbsp;?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base" >
              Container services encompass the efficient and secure transportation of goods using standardized shipping containers. At Moon Navigation and Trading Co., we provide end-to-end containerized shipping solutions, ensuring seamless logistics for businesses across various industries. Our expertise covers a wide range of container types, handling requirements, and different route regulations.<br /><br />
              Trust us to provide tailored solutions that prioritize efficiency, security, and compliance for your shipping needs.
            </p>
          </div>
        </div>
      </div>
      <CarouselAnimation title={t("container")} freightTypes={Data} />
    
      
    </>
  );
}
