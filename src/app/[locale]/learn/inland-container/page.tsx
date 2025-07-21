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

export default function InlandContainerPage() {

  return (
    <>
      {renderOverview()}
      {renderServices()}
    </>
  );
}
