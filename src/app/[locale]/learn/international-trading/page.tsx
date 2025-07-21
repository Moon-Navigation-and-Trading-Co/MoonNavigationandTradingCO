"use client"

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function InternationalTrading() {
    const t = useTranslations("learn-international-trading");

    return (
        <>
            {renderOverview()}
            {renderServices()}
        </>
    );
}
