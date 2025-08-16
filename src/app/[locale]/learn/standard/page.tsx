"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import OverviewServicesTabs from "@/components/overview-services";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function DangerousCargoInfo() {
  const t = useTranslations("learn-standard");

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
              {t("description")}
            </p>
          </div>
        </div>
      </>
    );
  }

  function renderServices() {
    return (
      <>
        {/* Container Dimensions */}
        <div className="w-full mt-16 mb-8">
          <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
            Container Dimensions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-1-t-1")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-1-p-1")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-1-t-2")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-1-p-2")}
            </p>
          </div>
        </div>

        {/* Types of Standard Containers */}
        <div className="w-full mt-16 mb-8">
          <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
            {t("p-1")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-1-t-3")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-1-p-3")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-1-t-4")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-1-p-4")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-1-t-5")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-1-p-5")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-1-t-6")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-1-p-6")}
            </p>
          </div>
        </div>

        {/* In Gauge Section */}
        <div className="w-full mt-16 mb-8">
          <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
            {t("sub-t-2")}
          </h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            {t("sub-p-2")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-2-t-1")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-2-p-1")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-2-t-2")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-2-p-2")}
            </p>
          </div>
        </div>

        <div className="w-full mb-12">
          <p className="text-muted-foreground text-sm">
            {t("p-2")}
          </p>
        </div>

        {/* Break Bulk Section */}
        <div className="w-full mt-16 mb-8">
          <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
            {t("sub-t-3")}
          </h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            {t("sub-p-3")}
          </p>
        </div>

        <div className="w-full mb-8">
          <h3 className="text-lg font-semibold text-primary mb-4">
            {t("sub-t-3-1")}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-3-t-1")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-3-p-1")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-3-t-2")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-3-p-2")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-3-t-3")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-3-p-3")}
            </p>
          </div>
        </div>

        {/* Break Bulk Types */}
        <div className="w-full mt-16 mb-8">
          <h2 className="text-xl md:text-2xl mb-2 text-[#3B4B8C] dark:text-blue-400">
            {t("sub-t-3-2")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-3-t-4")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-3-p-4")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-3-t-5")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-3-p-5")}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary mb-3">
              {t("list-3-t-6")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("list-3-p-6")}
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
  );
}
