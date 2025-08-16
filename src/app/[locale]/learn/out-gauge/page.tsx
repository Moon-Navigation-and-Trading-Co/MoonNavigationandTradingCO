"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

function overview() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Out-of-Gauge Cargo Overview</h1>
      <p className="text-lg text-gray-600 mb-4">
        Our out-of-gauge cargo services handle shipments that exceed standard container dimensions, requiring specialized handling and transportation solutions.
      </p>
    </div>
  );
}

function services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Our Out-of-Gauge Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Specialized Handling</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Expert handling of cargo that exceeds standard container dimensions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Custom Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tailored transportation solutions for unique cargo requirements.</p>
          </CardContent>
        </Card>
      </div>
      <GetQuoteComponent topic="Out-of-Gauge Cargo" link="/out-gauge-forms" />
      <FAQSearch category="out-gauge" />
    </div>
  );
}

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-out-gauge");

  return (
    <>
      <OverviewServicesTabs renderOverview={overview} renderServices={services} />
    </>
  );
}
