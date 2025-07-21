"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";   
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function CustomsClearance() {
    const t = useTranslations("customs-clearance");

    return (
        <>
            {renderOverview()}
            {renderServices()}
        </>
    );
}
