"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import OverviewServicesTabs from "@/components/overview-services";
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import VesselCarousel from "@/components/vessel-carousel";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function HSS() {
    const t = useTranslations("learn-hss")

    return (
        <>
            {renderOverview()}
            {renderServices()}
        </>
    )
}
