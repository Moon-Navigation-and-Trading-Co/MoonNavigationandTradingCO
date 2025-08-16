"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";

import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import VesselCarousel from "@/components/vessel-carousel";
import OverviewServicesTabs from "@/components/overview-services";
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";

const ReeferPage = () => {
  const router = useRouter();

  // Cargo types data for the carousel
  const cargoTypes = [
    {
      img: "/reefer-fresh-produce.jpg",
      title: "Fresh Produce and Perishable Foods",
      subtitle: "Salads, vegetables, fruit, seafood, dairy"
    },
    {
      img: "/reefer-pharma.jpg",
      title: "Pharmaceuticals and Medical Supplies",
      subtitle: "Vaccines, biologics and temperature-sensitive drugs"
    },
    {
      img: "/reefer-chemicals.jpg",
      title: "Chemical Products",
      subtitle: "Industrial chemicals, specialty liquids"
    },
    {
      img: "/reefer-flowers.jpg",
      title: "Floral Products",
      subtitle: "Flowers, plants, horticultural cargo"
    },
    {
      img: "/reefer-frozen.jpg",
      title: "Frozen Goods and Ice Cream",
      subtitle: "Frozen foods, desserts, ready meals"
    },
    {
      img: "/reefer-beverages.jpg",
      title: "Beverages and Dairy Products",
      subtitle: "Milk, juices, soft drinks, yogurt"
    }
  ];

  function renderOverview() {
    return (
      <>
        {/* Top image and company name removed to prevent duplication */}
        {/* Main content (heading/description only) */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Title and CTA */}
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-5xl font-regular font-sans mb-12 text-primary mt-12">
              Reefer Containers (Refrigerated Shipping Solutions)
            </h1>
            <Link href="/container-services-forms">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          {/* Right: Description */}
          <div className="w-full max-w-2xl">
            <h2 className="text-lg text-primary mb-2 font-regular">
              What are Reefer Containers?
            </h2>
            <p className="text-light text-foreground leading-relaxed font-light">
              When it comes to transporting temperature-sensitive cargo, precision and reliability are critical. Our Reefer
              Containers (refrigerated containers) provide the ideal solution for maintaining product integrity throughout the
              shipping process. Whether you are moving perishable food, pharmaceuticals, chemicals, or other temperature-
              controlled goods, we ensure optimal conditions from origin to destination.<br /><br />
              At Moon Navigation and Trading Co., we offer state-of-the-art reefer containers equipped with advanced
              temperature monitoring and control systems. Our team is experienced in handling cold chain logistics, ensuring
              compliance with international standards, and delivering your cargo in perfect condition.
            </p>
          </div>
        </div>
      </>
    );
  }

  const tabData = [
    {
      id: "overview",
      title: "Reefer Containers",
      content: renderOverview(),
    },
    {
      id: "our-solutions",
      title: "Our Solutions",
      content: <LearnMore />,
    },
  ];

  function renderServices() {
    return (
      <>
        <div className="w-full mt-16 mb-8">
          <h2 className="text-xl md:text-2xl  mb-2 text-[#3B4B8C] dark:text-blue-400">
            Cargo Types We Handle
          </h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            Our reefer solutions are tailored for a wide range of industries, including:
          </p>
          <VesselCarousel vessels={cargoTypes} />
        </div>
        <div>
        <div className="w-full flex flex-col md:flex-row items-center gap-8 mt-20">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[400px]">
            <img
              src="/reefer-temp-control.jpg"
              alt="Advanced temperature control in reefer container"
              className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 flex flex-col justify-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h2 className="text-2xl mb-2 text-[#23294d] dark:text-blue-400">Advanced Temperature Control</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-xl">
              Our refrigerated containers are equipped with precise climate control systems to maintain internal temperatures ranging from -30°C to +30°C, with adjustable humidity levels where required. This ensures product stability and quality during transit.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1">
              <li>Multi-temperature zone containers available</li>
              <li>Humidity control and ventilation systems</li>
              <li>Continuous temperature monitoring and data logging</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-8 mt-20">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center order-2 md:order-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h2 className="text-2xl mb-2 text-[#23294d] dark:text-blue-400">24/7 Monitoring and Technical Support</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-xl">
              We offer around-the-clock monitoring to ensure your cargo remains within the required temperature thresholds. Our technical support team is available 24/7 to address any operational issues promptly, minimizing any risk to your cargo.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] order-1 md:order-2">
            <img
              src="/reefer-worker.jpg"
              alt="24/7 monitoring and technical support for reefer containers"
              className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-8 mt-20">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[400px]">
            <img
              src="/reefer-coldchain-workers.jpg"
              alt="Inspectors reviewing cold chain compliance at container"
              className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 flex flex-col justify-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h2 className="text-2xl mb-2 text-[#23294d] dark:text-blue-400">Cold Chain Compliance and Documentation</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-xl">
              Maintaining a consistent cold chain is critical in reefer logistics. Our team ensures:
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1">
              <li>Full compliance with international cold chain standards</li>
              <li>Accurate documentation and temperature logs</li>
              <li>Customs and regulatory support for specialized cargo</li>
              <li>Pre-trip inspections (PTI) to verify container readiness</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-8 mt-20">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center order-2 md:order-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h2 className="text-2xl mb-2 text-[#23294d] dark:text-blue-400">Global Reach.<br />Reliable Transit</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-xl">
              Whether it is a short-haul or long-haul shipment, our global network allows us to offer fast, secure, and reliable reefer transport solutions. With strong partnerships across key ports and shipping lines, we ensure timely deliveries and end-to-end coordination.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] order-1 md:order-2">
            <img
              src="/reefer-global-ship.jpg"
              alt="Container ship at port at sunset, representing global reach and reliable transit"
              className="rounded-2xl w-full h-[280px] object-cover object-center shadow-md"
              loading="lazy"
            />
          </div>
        </div>
        </div>
        <div className="overflow-x-auto mt-12 w-full max-w-7xl">
          <h2 className="text-2xl mb-6 text-gray-900 dark:text-white">Comparison: Reefer Containers vs. Standard Containers</h2>
          <table className="min-w-full border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800">
            <thead>
              <tr className="">
                <th className="px-4 py-3 text-left border-b border-gray-300 dark:border-gray-600 border-r text-gray-900 dark:text-white">Feature</th>
                <th className="px-4 py-3 text-left border-b border-gray-300 dark:border-gray-600 border-r text-gray-900 dark:text-white">Reefer Containers (Refrigerated)</th>
                <th className="px-4 py-3 text-left border-b border-gray-300 dark:border-gray-600 border-r text-gray-900 dark:text-white">Standard Containers</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Purpose</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Temperature-sensitive cargo transport</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">General cargo transport</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Temperature Control</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Adjustable temperature control (typically -30°C to +30°C)</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">No temperature control</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Cargo Types</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Perishable food, pharmaceuticals, chemicals, etc.</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Dry goods, machinery, textiles, packaged goods</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Ventilation and Humidity Control</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Equipped with air circulation and humidity regulation</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Not available</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Insulation</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Insulated walls, floor, and ceiling</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Not insulated</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Container Cost</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Higher cost due to refrigeration equipment</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Lower cost</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Power Supply</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Requires power source during transit and storage</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Not required</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Monitoring Options</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Cargo condition monitored throughout transportation</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Basic handling only</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Common Sizes</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">20ft / 40ft reefer and high cube</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">20ft / 40ft standard and high cube</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Applications</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Cold chain logistics, food supply, medical shipments</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-gray-600 border-r text-gray-900 dark:text-white">Industrial, commercial, and general cargo</td>
              </tr>
            </tbody>
          </table>
          <br />

          <RequestQuoteButton>
            <Link href="/learn/full/reefer/learn-more">
              Learn more about our Reefer Container shipment Solutions
            </Link>
          </RequestQuoteButton>
        </div>
        <div className="mt-16 mb-12 max-w-5xl mx-auto px-4">
          <ReasonsGridUniversal
            title="Reasons to Choose Moon Navigation and Trading Co. for Your Reefer Container Shipments"
            layout="3-2"
            reasons={[
              {
                icon: <img src="/icons/container/37.png" className="mb-8 h-20 w-20 object-contain"/>,
                title: "Expertise in cold chain logistics",
                description: "",
              },
              {
                icon: <img src="/icons/container/26.png" className="mb-8 h-20 w-20 object-contain"/>,
                title: "Custom solutions tailored to your cargo's needs",
                description: "",
              },
              {
                icon: <img src="/icons/container/39.png" className="mb-8 h-20 w-20 object-contain"/>,
                title: "Modern reefer container fleet with advanced technology",
                description: "",
              },
              {
                icon: <img src="/icons/container/40.png" className="mb-8 h-20 w-20 object-contain"/>,
                title: "Transparent communication and timely shipment updates",
                description: "",
              },
              {
                icon: <img src="/icons/container/41.png" className="mb-8 h-20 w-20 object-contain"/>,
                title: "Competitive rates and efficient routing",
                description: "",
              },
            ]}
          />
        </div>
        <GetQuoteComponent topic="Reefer Container" link="/container-services-forms" />
        <FAQSearch category="reefer-container" />
      </>
    );
  }

  return (
    <div className="w-full">
      <FormTabs tabData={tabData} />
      {/* --- RESTORED CONTENT BELOW TAB SWITCHER --- */}
      {renderServices()}
    </div>
  );
};

export default ReeferPage;
