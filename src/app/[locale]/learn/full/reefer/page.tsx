"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";

import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import dynamic from "next/dynamic";

const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), { ssr: false });
import OverviewServicesTabs from "@/components/overview-services";
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";

const ReeferPage = () => {
  const router = useRouter();

  // Cargo types data for the carousel
  const cargoTypes = [
    {
      img: "/reefer-fresh-produce.jpg",
      title: "Fresh Produce and Perishable Foods",
      subtitle: "Salads, vegetables, fruit, seafood, dairy"
    },
    {
      img: "/reefer-pharma.jpg",
      title: "Pharmaceuticals and Medical Supplies",
      subtitle: "Vaccines, biologics and temperature-sensitive drugs"
    },
    {
      img: "/reefer-chemicals.jpg",
      title: "Chemical Products",
      subtitle: "Industrial chemicals, specialty liquids"
    },
    {
      img: "/reefer-flowers.jpg",
      title: "Floral Products",
      subtitle: "Flowers, plants, horticultural cargo"
    },
    {
      img: "/reefer-frozen.jpg",
      title: "Frozen Goods and Ice Cream",
      subtitle: "Frozen foods, desserts, ready meals"
    },
    {
      img: "/reefer-beverages.jpg",
      title: "Beverages and Dairy Products",
      subtitle: "Milk, juices, soft drinks, yogurt"
    }
  ];

  function renderOverview() {
    return (
      <>
        {/* Top image and company name removed to prevent duplication */}
        {/* Main content (heading/description only) */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Title and CTA */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-5xl font-regular font-sans mb-12 text-primary mt-12">
              Reefer Containers (Refrigerated Shipping Solutions)
            </h1>
            <Link href="/container-services-forms">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          {/* Right: Description */}
          <div className="w-full max-w-2xl">
            <h2 className="text-lg text-primary mb-2 font-regular">
              What are Reefer Containers?
            </h2>
            <p className="text-light text-foreground leading-relaxed font-light">
              When it comes to transporting temperature-sensitive cargo, precision and reliability are critical. Our Reefer
              Containers (refrigerated containers) provide the ideal solution for maintaining product integrity throughout the
              shipping process. Whether you are moving perishable food, pharmaceuticals, chemicals, or other temperature-
              controlled goods, we ensure optimal conditions from origin to destination.<br /><br />
              At Moon Navigation and Trading Co., we offer state-of-the-art reefer containers equipped with advanced
              temperature monitoring and control systems. Our team is experienced in handling cold chain logistics, ensuring
              compliance with international standards, and delivering your cargo in perfect condition.
            </p>
          </div>
        </div>
        <div className="relative px-2">
          <VesselCarousel />
        </div>
      </>
    );
  }

  const tabData = [
    {
      id: "overview",
      title: "Reefer Containers",
      content: renderOverview(),
    },
    {
      id: "our-solutions",
      title: "Our Solutions",
      content: <LearnMore />,
    },
  ];

  function renderServices() {
    return (
      <>
      </>
    );
  }

  return (
    <div className="w-full">
      <FormTabs tabData={tabData} />
      {/* --- RESTORED CONTENT BELOW TAB SWITCHER --- */}
      {renderServices()}
    </div>
  );
};

export default ReeferPage;
