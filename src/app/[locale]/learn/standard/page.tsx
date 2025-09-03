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
import Image from "next/image";
import OverviewServicesTabs from "@/components/overview-services";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function DangerousCargoInfo() {
  const t = useTranslations("learn-standard");

  function renderOverview() {
    return (
      <>
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
          <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
            {/* Enhanced Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Image */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/standard-container-banner.jpg"
                alt="Standard Container Services Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">Standard Container Services</span>
              </div>

              {/* Enhanced Heading */}
              <div className="space-y-6">
                <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                  {t("title")}
                </h1>
                <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                  {t("description")}
                </h2>
              </div>

              {/* Classic Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Link href="/container-services-forms">
                  <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t("button")}
                    </span>
                  </button>
                </Link>
                <Link href="#services">
                  <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Learn More
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <button 
                onClick={() => {
                  const servicesSection = document.querySelector('#services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
              >
                <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">Scroll to explore</span>
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </section>
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

        <GetQuoteComponent topic="Standard Container Services" link="/container-services-forms" />
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
