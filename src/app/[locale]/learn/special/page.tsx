"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";

function overview() {
  const t = useTranslations("learn-special");
  return (
    <>
      <div className="w-full mb-12">
        <div className="w-full rounded-[2rem] overflow-hidden mb-10">
          <img
            src="/special-1.jpg"
            alt="Special Services Crew"
            className="w-full h-[260px] md:h-[320px] object-cover"
            style={{ display: "block" }}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-start">
            <h2 className="text-lg md:text-xl font-medium text-[#222] dark:text-white mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
              Special Services by Case
            </h2>
            <Link href="/ship-agency-forms">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          <div className="flex-1">
            <h3 className="text-base md:text-lg text-[#2a4365] dark:text-blue-400 mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
              Special Requirements Tailored to Your Needs
            </h3>
            <p className="text-[#444] dark:text-gray-300 text-sm md:text-base mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
              Special Services by Case are custom, value-tailored solutions designed to meet the unique needs of our clients. At Moon Navigation and Trading Co., we recognize that no two clients are the same—whether you require unusual handling, logistics, or managing a schedule. That's why we offer flexible solutions and industry-leading support that provide bespoke, customer-focused services to solve the unique needs of each individual case.
            </p>
            <p className="text-[#444] dark:text-gray-300 text-sm md:text-base" style={{ fontFamily: "Raleway, sans-serif" }}>
              Our team of experienced professionals collaborates with you to understand your special requirements, providing customized support and services to ensure your vessel's safe, secure, and on-time efficiency. With a commitment to excellence, we tackle the details and provide the fastest turnaround for the most critical or complex shipping scenarios.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function services() {
  const t = useTranslations("learn-special");
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-[2rem] p-6 md:p-12 mb-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl mb-4 text-gray-900 dark:text-white" style={{ fontFamily: "Raleway, sans-serif" }}>
            Our Tailored Shipping Solutions<br className="hidden md:block" /> for Every Unique Shipment
          </h2>
          <p className="text-[#444] dark:text-gray-300 text-sm md:text-base mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
            We fully understand that each shipment is distinct, necessitating customized solutions to address specific needs. Our special services offer a comprehensive menu of flexible and expert shipping and logistics solutions for all requirements, whether they involve unique handling, dry, or specialized packaging.
          </p>
          <p className="text-[#444] dark:text-gray-300 text-sm md:text-base" style={{ fontFamily: "Raleway, sans-serif" }}>
            In these cases our special solutions are meticulously crafted to address a diverse range of cargo types, locations, service environments, operational requirements, and specific client needs. From across-the-seas breakbulk to sensitive reefer shipments, and specialized shipping solutions for time-sensitive shipments, and customized packaging for strength or temperature/medical integrity, bespoke or consolidated transport, or hazardous cargo handling.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/special-2.jpg"
              alt="Tailored Shipping Solutions"
              className="object-cover w-full h-full"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-[2rem] p-6 md:p-12 mb-12 shadow">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/special-3.jpg"
              alt="Business Handshake in Field"
              className="object-cover w-full h-full"
              style={{ display: "block" }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-0 md:px-8">
          <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            We are equipped to tackle unique logistical challenges.
          </p>
          <p className="text-[#444] dark:text-gray-300 text-sm md:text-base mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Understanding the importance of tailored solutions for long-term partnerships in logistics, our team is dedicated to customizing delivery and logistics to your customer agreements that align with your operational objectives. We offer a range of value-added services, including specialized shipment support solutions, dedicated account managers, and transparent support in the logistics process. Our team excels in fostering strong, collaborative relationships, enabling us to deliver exactly as planned, no matter how evolving needs arise.
          </p>
          <p className="text-[#444] dark:text-gray-300 text-xs md:text-sm mt-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Trust Moon Navigation and Trading Company to be your reliable partner in navigating the complexities of logistics, ensuring a seamless and efficient specification for your business—whenever and wherever you need us most.
          </p>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mb-24">
        <h2 className="text-xl md:text-2xl text-[#2a4365] dark:text-blue-400 mb-12 text-center" style={{ fontFamily: "Raleway, sans-serif" }}>
          Reasons to Choose Moon Navigation and Trading Co. For Your Special Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">24/7 Support</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
              Available anytime, anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">Industry Experts</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
              Highly skilled team with extensive expertise.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">End-to-End Solutions</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
              One-stop service for all vessel & cargo needs.
            </p>
          </div>
          <div className="col-span-full flex flex-col md:flex-row items-center justify-center gap-12 mt-4">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">Regulatory Compliance</h3>
              <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
                Meeting IMO, SOLAS, MARPOL, and port regulations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">Cost-Effective & Transparent Pricing</h3>
              <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
                No hidden fees, optimized budgeting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <GetQuoteComponent topic="Special Services" link="/ship-agency-forms" />
      <FAQSearch category="special-services" />
    </>
  );
}

export default function ShippingMethodsInfo() {
  return (
    <OverviewServicesTabs renderOverview={overview} renderServices={services} />
  );
}
