"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import RequestQuoteButton from "@/components/RequestQuoteButton" 
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import OverviewServicesTabs from "@/components/overview-services";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

    return (
        <>
            {renderOverview()}
            {renderServices()}
        </>
    );
}
