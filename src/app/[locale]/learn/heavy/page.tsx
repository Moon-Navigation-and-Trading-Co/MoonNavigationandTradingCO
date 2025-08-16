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

function overview() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Heavy Lift Cargo Overview</h1>
            <p className="text-lg text-gray-600 mb-4">
                Our heavy lift cargo services are designed to handle oversized and overweight shipments that require specialized equipment and expertise.
            </p>
        </div>
    );
}

function services() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Our Heavy Lift Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Specialized Equipment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Access to heavy-duty cranes and specialized lifting equipment for handling oversized cargo.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Expert Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Comprehensive planning and risk assessment for complex heavy lift operations.</p>
                    </CardContent>
                </Card>
            </div>
            <GetQuoteComponent topic="Heavy Lift Cargo" link="/container-services-forms" />
            <FAQSearch category="heavy-lift" />
        </div>
    );
}

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

    return (
        <>
            <OverviewServicesTabs renderOverview={overview} renderServices={services} />
        </>
    );
}
