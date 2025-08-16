"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import OverviewServicesTabs from "@/components/overview-services";
import VesselCarousel from "@/components/vessel-carousel";
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";
 
export default function DryContainerPage() {
  // Industry data for the carousel
  const industries = [
    {
      img: "/industry-retail.jpg",
      title: "Retail & Consumer Goods",
      subtitle: ""
    },
    {
      img: "/industry-industrial.jpg",
      title: "Industrial & Manufacturing",
      subtitle: ""
    },
    {
      img: "/industry-furniture.jpg",
      title: "Furniture & Home Appliances",
      subtitle: ""
    },
    {
      img: "/industry-textiles.jpg",
      title: "Textiles & Garments",
      subtitle: ""
    },
    {
      img: "/industry-automotive.jpg",
      title: "Automotive & Spare Parts",
      subtitle: ""
    },
    {
      img: "/industry-construction.jpg",
      title: "Construction & Building Materials",
      subtitle: ""
    },
    {
      img: "/industry-food.jpg",
      title: "Food & Beverage (Non-Perishable)",
      subtitle: ""
    },
    {
      img: "/industry-office.jpg",
      title: "Office Supplies & Stationery",
      subtitle: ""
    }
  ];

  function renderOverview() {
    return (
      <>
        {/* Main Content Section (Heading and Description only) */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 mb-16">
          {/* Left: Title and Button */}
          <div className="flex-1 flex flex-col gap-6 justify-start">
            <h1 className="text-3xl md:text-4xl font-regular text-[#3B4B8C] dark:text-[#bfc8f8] leading-tight">
              Standard Dry Container Shipment
            </h1>
            <span className="text-base text-gray-500 dark:text-gray-300 font-light">
              Efficient, Secure, and Cost-Effective Shipping Solutions
            </span>
            <Link href="/container-services-forms">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          {/* Right: Description */}
          <div className="flex-[2] text-gray-700 dark:text-gray-200 text-base flex flex-col gap-6 font-light">
            <p>
              A Standard Dry Container is a fully enclosed, weatherproof container commonly used for transporting a wide variety of cargo. It offers strong protection from external elements and is the most widely used container type in global trade.
            </p>
            <p>
              At Moon Navigation and Trading Co., we offer reliable Standard Dry Container (FCL) services tailored to meet your cargo needs. Ideal for transporting general goods that do not require temperature control, our dry container solutions ensure safe, secure, and seamless delivery from origin to destination.
            </p>
          </div>
        </div>
      </>
    );
  }

  const tabData = [
    {
      id: "overview",
      title: "Standard Containers",
      content: renderOverview(),
    },
    {
      id: "our-solutions",
      title: "Our Solutions",
      content: <LearnMore />,
    },
  ];

  return (
    <div className="w-full">
      <FormTabs tabData={tabData} />
      {/* --- RESTORED CONTENT BELOW TAB SWITCHER --- */}
      {/* Key Industries Section */}
      <div className="w-full max-w-7xl mb-20 mt-20">
        <h2 className="text-2xl md:text-3xl  text-[#3B4B8C] dark:text-[#bfc8f8] mb-2 px-2">
          Key Industries We Serve:
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-10 px-2">
          Our Standard Dry Shipment solutions are tailored for a wide range of industries, including:
        </p>
        <div className="relative px-2">
          <VesselCarousel
            vessels={industries}
            className="w-full"
          />
        </div>
      </div>
      {/* Comparison Table Section */}
      <div className="w-full max-w-7xl mb-20">
        <h2 className="text-2xl md:text-3xl  text-[#3B4B8C] dark:text-[#bfc8f8] mb-8 px-2">
          Standard Dry Containers vs. Specialized Container Types
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border dark:border-[#23294d] rounded-2xl bg-white dark:bg-[#181c2a]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left  border-b border-r dark:border-[#23294d]">Feature / Specification</th>
                <th className="px-4 py-3 text-left  border-b border-r dark:border-[#23294d]">Standard Dry Container</th>
                <th className="px-4 py-3 text-left  border-b border-r dark:border-[#23294d]">Reefer Container</th>
                <th className="px-4 py-3 text-left  border-b border-r dark:border-[#23294d]">Open Top Container</th>
                <th className="px-4 py-3 text-left  border-b border-r dark:border-[#23294d]">Flat Rack Container</th>
                <th className="px-4 py-3 text-left  border-b dark:border-[#23294d]">Tank Container</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="px-4 py-2 font-medium border-b border-r dark:border-[#23294d]">Purpose</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">General cargo transport</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Temperature-controlled cargo</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Oversized or tall cargo</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Heavy or irregular cargo</td>
                <td className="px-4 py-2 border-b dark:border-[#23294d]">Liquid and chemical cargo</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-r dark:border-[#23294d]">Cargo Suitability</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Dry goods, cartons, pallets</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Food, pharmaceuticals, perishables</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Machinery, equipment, pipes</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Vehicles, machinery, boats</td>
                <td className="px-4 py-2 border-b dark:border-[#23294d]">Liquids, gases, chemicals</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-r dark:border-[#23294d]">Temperature Control</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">No</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Adjustable -20°C to +25°C</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">No</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">No</td>
                <td className="px-4 py-2 border-b dark:border-[#23294d]">No</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-r dark:border-[#23294d]">Size Availability</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b dark:border-[#23294d]">Usually 20ft</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-r dark:border-[#23294d]">Special Features</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Fully enclosed, <b>weatherproof</b></td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Insulated walls, cooling unit</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Open roof, top-loading access</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">No side walls, collapsible ends</td>
                <td className="px-4 py-2 border-b dark:border-[#23294d]">Stainless steel tank, pressurized, insulated</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-r dark:border-[#23294d]">Typical Use Cases</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Consumer goods, textiles, electronics</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Frozen goods, dairy, medicines</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Construction cargo, large machines</td>
                <td className="px-4 py-2 border-b border-r dark:border-[#23294d]">Construction, boats, oversized loads</td>
                <td className="px-4 py-2 border-b dark:border-[#23294d]">Fuel, food-grade liquids, chemicals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Reasons Section */}
      <div className="w-full max-w-7xl mx-auto mt-20">
        <ReasonsGridUniversal
          title="Reasons to Choose Moon Navigation and Trading Co. for Your Dry Standard Container Shipments"
          layout="3-2"
          reasons={[
            {
              icon: <img src="/icons/container/75.png" className="mb-8 h-20 w-20 object-contain"/>,
              title: "Decades of freight forwarding expertise",
              description: "",
            },
            {
              icon: <img src="/icons/container/110.png" className="mb-8 h-20 w-20 object-contain"/>,
              title: "Personalized logistics planning and container management",
              description: "",
            },
            {
              icon: <img src="/icons/container/107.png" className="mb-8 h-20 w-20 object-contain"/>,
              title: "Competitive pricing and flexible schedules",
              description: "",
            },
            {
              icon: <img src="/icons/container/108.png" className="mb-8 h-20 w-20 object-contain"/>,
              title: "Global partner network and port coverage",
              description: "",
            },
            {
              icon: <img src="/icons/container/109.png" className="mb-8 h-20 w-20 object-contain"/>,
              title: "Reliable service, responsive support, and professional handling",
              description: "",
            },
          ]}
        />
      </div>
      <GetQuoteComponent topic="Dry Container" link="/container-services-forms" />
      <FAQSearch category="standard-dry-container" />
    </div>
  );
}
