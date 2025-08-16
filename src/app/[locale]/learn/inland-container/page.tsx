"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";  
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import VesselCarousel from "@/components/vessel-carousel";

function overview() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Inland Container Services Overview</h1>
      <p className="text-lg text-gray-600 mb-4">
        Our inland container services provide comprehensive transportation solutions for moving containers from ports to inland destinations.
      </p>
    </div>
  );
}

function services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Our Inland Container Services</h2>
      <p className="text-gray-600 mb-6">
        We offer reliable and efficient inland container transportation services to connect your cargo with final destinations.
      </p>
      <GetQuoteComponent topic="Inland Container Services" link="/inland-services-forms" />
      <FAQSearch category="inland-container" />
    </div>
  );
}

export default function InlandContainerPage() {

  return (
    <>
      <OverviewServicesTabs renderOverview={overview} renderServices={services} />
    </>
  );
}
