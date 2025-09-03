"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import OverviewServicesTabs from "@/components/overview-services";
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import dynamic from "next/dynamic";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import RequestQuoteButton from "@/components/RequestQuoteButton";

const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), { ssr: false });

export default function HSS() {
    const t = useTranslations("learn-hss")

    function renderOverview() {
        return (
            <>
                {/* Main Content (Overview) - Heading/Description only */}
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Title and CTA */}
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-5xl font-regular font-sans mb-12 text-primary mt-12">
                            {t("title")}
                        </h1>
                        <Link href="/container-services-forms">
                            <RequestQuoteButton>
                                {t("button")}
                            </RequestQuoteButton>
                        </Link>
                    </div>
                    {/* Right: Description */}
                    <div className="w-full max-w-2xl">
                        <p className="text-light text-foreground leading-relaxed font-light">
                            {t("sub-t-6")}
                        </p>
                        <p className="text-light text-foreground leading-relaxed font-light mt-4">
                            {t("description-6")}
                        </p>
                    </div>
                </div>
            </>
        );
    }

    function renderServices() {
        return (
            <>
                {/* Cargo Handling Services */}
                <div className="w-full mt-16 mb-8">
                    <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
                        {t("sub-t-1")}
                    </h2>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base">
                        {t("sub-t-1-description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("docking-wet.activities.item-1")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("docking-wet.activities.item-1-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("docking-wet.activities.item-2")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("docking-wet.activities.item-2-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("docking-wet.activities.item-3")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("docking-wet.activities.item-3-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("docking-wet.activities.item-4")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("docking-wet.activities.item-4-p")}
                        </p>
                    </div>
                </div>

                {/* Stevedoring Services */}
                <div className="w-full mt-16 mb-8">
                    <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
                        {t("sub-t-2")}
                    </h2>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base">
                        {t("sub-t-2-description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("maintenance-routine.activities.item-1")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("maintenance-routine.activities.item-1-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("maintenance-routine.activities.item-2")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("maintenance-routine.activities.item-2-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("maintenance-routine.activities.item-3")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("maintenance-routine.activities.item-3-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("maintenance-routine.activities.item-4")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("maintenance-routine.activities.item-4-p")}
                        </p>
                    </div>
                </div>

                {/* Storage Solutions */}
                <div className="w-full mt-16 mb-8">
                    <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
                        {t("sub-t-3")}
                    </h2>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base">
                        {t("description-3")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("storage.activities.item-1")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("storage.activities.item-1-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("storage.activities.item-2")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("storage.activities.item-2-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("storage.activities.item-3")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("storage.activities.item-3-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("storage.activities.item-4")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("storage.activities.item-4-p")}
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="w-full mt-16 mb-8">
                    <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
                        {t("sub-t-4")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("solutions.item-1")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("solutions.item-1-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("solutions.item-2")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("solutions.item-2-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("solutions.item-3")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("solutions.item-3-p")}
                        </p>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="w-full mt-16 mb-8">
                    <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
                        {t("sub-t-5")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {t("reasons.item-1.title")}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {t("reasons.item-1.description")}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {t("reasons.item-2.title")}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {t("reasons.item-2.description")}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {t("reasons.item-3.title")}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {t("reasons.item-3.description-1")}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-primary mb-3">
                                {t("reasons.item-4.title")}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                {t("reasons.item-4.description")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services Include Section */}
                <div className="w-full mt-16 mb-8">
                    <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
                        {t("services-t")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("services.item-1")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("services.item-1-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("services.item-2")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("services.item-2-p")}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                        <h3 className="text-lg font-semibold text-primary mb-3">
                            {t("services.item-3")}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {t("services.item-3-p")}
                        </p>
                    </div>
                </div>

                {/* Quote Request Section */}
                <div className="w-full mt-16 mb-8 text-center">
                    <Link href="/container-services-forms">
                        <RequestQuoteButton>
                            {t("button")}
                        </RequestQuoteButton>
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            {renderOverview()}
            {renderServices()}
        </>
    )
}
