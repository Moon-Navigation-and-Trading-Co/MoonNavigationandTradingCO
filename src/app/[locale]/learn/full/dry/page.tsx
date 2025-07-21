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
        {/* Hero Section */}
        <div className="w-full rounded-[60px] overflow-hidden mb-8">
          <div className="relative w-full h-[350px]">
            <Image
              src="/container-standard-s.jpg"
              alt="Standard Dry Container"
              fill
              className="object-cover rounded-[60px]"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
        </div>
        {/* Main Content Section (Heading and Description only) */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mb-16">
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

  function renderServices() {
    return (
      <>
        {/* Key Industries Section */}
        <div className="w-full max-w-7xl mb-20">
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


        {/* End-to-End Cargo Handling Section */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-24 px-2 md:px-0">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center">
            <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#3B4B8C] flex items-center justify-center">
              <div className="absolute inset-0 z-0 bg-[#3B4B8C]" />
              <Image
                src="/dry-1.jpg"
                alt="End-to-End Cargo Handling"
                fill
                className="object-cover rounded-2xl z-10"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl  mb-3 text-[#23294d] dark:text-[#bfc8f8]">
              End-to-End Cargo Handling
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
              We manage the entire logistics chain—right from cargo pickup at the origin location to final delivery at the consignee’s doorstep. Our team ensures:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 space-y-1">
              <li>Careful coordination of inland transportation (trucking or rail)</li>
              <li>Efficient scheduling with minimal downtime</li>
              <li>Door-to-door or port-to-port service depending on client needs</li>
              <li>Continuous monitoring of every shipping stage to maintain efficiency and minimize disruptions</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-24 px-2 md:px-0">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl  mb-3 text-[#23294d] dark:text-[#bfc8f8]">
              Container Stuffing and Cargo Securing
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
              Proper container loading is critical for safe transit. We provide:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 space-y-1">
              <li>Professional stuffing operations supervised by trained personnel</li>
              <li>Strategic cargo arrangement and weight distribution to optimize space and reduce movement</li>
              <li>Application of lashing, blocking, bracing, and dunnage materials to prevent cargo shifting</li>
              <li>Specialized stuffing for fragile or irregular-shaped goods</li>
              <li>Compliance with international cargo securing standards to ensure cargo integrity during long-haul transportation</li>
            </ul>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center">
            <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#3B4B8C] flex items-center justify-center">
              <div className="absolute inset-0 z-0 bg-[#3B4B8C]" />
              <Image
                src="/dry-2.jpg"
                alt="Container Stuffing & Cargo Securing"
                fill
                className="object-cover rounded-2xl z-10"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-24 px-2 md:px-0">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center mb-6 md:mb-0">
            <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#23316d] flex items-center justify-center">
              <div className="absolute inset-0 z-0 bg-[#23316d]" />
              <Image
                src="/dry-3.jpg"
                alt="Customs Documentation & Clearance"
                fill
                className="object-cover rounded-2xl z-10"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl  mb-3 text-[#23294d] dark:text-[#bfc8f8]">
              Customs Documentation and Clearance
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
              Our experienced team simplifies the complex world of import/export formalities. We offer:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 space-y-1">
              <li>Complete preparation and verification of commercial documents: invoice, packing list, bill of lading, certificate of origin, etc.</li>
              <li>Assistance with customs clearance procedures at both origin and destination</li>
              <li>In-house staff (with close stakeholder and account duty assignment)</li>
              <li>Compliance with all relevant government regulations and trade agreements</li>
              <li>Close coordination with customs authorities to prevent shipment delays</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-24 px-2 md:px-0">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl  mb-3 text-[#23294d] dark:text-[#bfc8f8]">
              Port and Inland Transport Coordination
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
              We ensure smooth cargo flow by coordinating:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 space-y-1">
              <li> Inland transport from the depot or warehouse to the container stuffing yard or port terminal</li>
              <li> Timely delivery of containers for vessel loading</li>
              <li> Fast handling arrangements including terminal entry, container staging, and loading onto the vessel</li>
              <li> Port arrival tracking and fast delivery to the receiver’s location</li>
              <li> Flexibility to work with multimodal transport routes: road, rail, barge</li>
            </ul>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center">
            <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#3B4B8C] flex items-center justify-center">
              <div className="absolute inset-0 z-0 bg-[#3B4B8C]" />
              <Image
                src="/dry-4.jpg"
                alt="Port & Inland Transport Coordination"
                fill
                className="object-cover rounded-2xl z-10"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-24 px-2 md:px-0">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center">
            <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#3B4B8C] flex items-center justify-center">
              <div className="absolute inset-0 z-0 bg-[#3B4B8C]" />
              <Image
                src="/dry-5.jpg"
                alt="Cargo Inspection & Container Condition Checks"
                fill
                className="object-cover rounded-2xl z-10"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl  mb-3 text-[#23294d] dark:text-[#bfc8f8]">
              Cargo Inspection and Container Condition Checks
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
              To safeguard cargo and comply with quality standards, we implement:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 space-y-1">
              <li>Thorough pre-shipment inspection of cargo condition and packaging</li>
              <li>Container integrity checks before loading (including floor, walls, seals, and doors)</li>
              <li>Monitoring for potential hazards like moisture, odor, or contamination</li>
              <li>Verifying proper distribution, surface seal, and placement</li>
              <li>Options for third-party inspection and certification upon request</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 my-24 px-2 md:px-0">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl  mb-3 text-[#23294d] dark:text-[#bfc8f8]">
              Additional Value-Added Solutions
            </h2>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 space-y-1 mb-6">
              <li>Cargo insurance assistance for impactful transit risks</li>
              <li>Real-time, in-transit updates and tracking services</li>
              <li>Flexible storage and warehousing options before or after shipment</li>
              <li>Easy coordination for re-packing/labelling and customs requirements</li>
              <li>24/7 customer support to keep you informed at every stage</li>
            </ul>
            <Link href="/learn/full/dry/learn-more">
              <RequestQuoteButton>
                Learn more about our Standard Dry Container shipment solutions
              </RequestQuoteButton> 
            </Link>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center">
            <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg bg-[#3B4B8C] flex items-center justify-center">
              <div className="absolute inset-0 z-0 bg-[#3B4B8C]" />
              <Image
                src="/dry-6.jpg"
                alt="Value Added Solutions Team"
                fill
                className="object-cover rounded-2xl z-10"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
        {/* Reasons Section */}
        <div className="">
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
