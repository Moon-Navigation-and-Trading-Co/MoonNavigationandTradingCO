"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";  
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function InlandContainerPage() {

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Top Banner */}
      <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
        <div className="relative w-full h-[180px] md:h-[260px]">
          <img
            src="/inland-1.jpg"
            alt="Moon Navigation and Trading Co. Inland Container Transportation"
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Title and CTA */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl md:text-3xl  text-foreground mb-2">
            Inland Container Transportation
          </h1>
          <Link href="/container-services-forms">
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </Link>
        </div>

        {/* Right: Description */}
        <div>
          <h2 className="text-lg  text-primary mb-2">
            What is inland container transportation?
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            Inland container transportation is the movement of shipping containers from ports to inland destinations using trucks, trains, or barges. This service is crucial for ensuring smooth cargo flow between seaports, connecting businesses to warehouses, distribution centers, and final delivery points. It adds value to supply chains by reducing delays, optimizing costs, and improving cargo integrity.
            <br /><br />
            At Moon Navigation and Trading Co., we specialize in efficient and secure inland container solutions, leveraging a fleet of specialized vehicles, rail connections, and logistics hubs. Our tailored solutions ensure timely delivery, cargo visibility, and compliance with the strictest standards from the first destination, providing businesses with a reliable and cost-effective transportation service.
          </p>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl  text-primary mb-2 text-center">
          Our Inland Container Transport Services
        </h2>
        <p className="text-muted-foreground text-center mb-8 text-sm md:text-base max-w-7xl mx-auto">
          We offer a full range of inland transportation solutions, ensuring your cargo reaches its destination safely, on time, and in optimal condition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Service Details */}
          <div>
            <h3 className="text-lg md:text-xl  mb-4">
              1. Road Transportation
            </h3>
            <p className="text-base text-foreground mb-4">
              Road transport is the most flexible and widely used solution for moving containers over short and long distances. We provide:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
              <li>
                <span className="">FCL (Full Container Load) &amp; LCL (Less than Container Load) Trucking:</span> Dedicated or consolidated container haulage, including white-glove handling and cargo security.
              </li>
              <li>
                <span className="">Special Container Transport:</span> Movement of reefer, hazardous, and high-value/sensitive materials with strict temperature and safety controls.
              </li>
              <li>
                <span className="">Heavy &amp; Out-of-Gauge Haulage:</span> Specialized equipment and routing for large and weight-restricted cargo, including flat racks, open-top containers, and project cargo.
              </li>
              <li>
                <span className="">Customs-Cleared Delivery:</span> Transport to/from free-trade zones, bonded areas, and sites requiring compliance with customs and regulatory requirements.
              </li>
              <li>
                <span className="">Intercity &amp; Cross-Border Trucking:</span> Reliable connections for domestic and international routes.
              </li>
              <li>
                <span className="">Container Storage &amp; Last-Mile Delivery:</span> Short-distance container transfers between ports, rail yards, and warehouses; efficient distribution solutions for door-to-door cargo delivery.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center items-start">
            <img
              src="/inland-2.jpg"
              alt="Truck and logistics worker for inland container transport"
              className="rounded-2xl shadow-lg w-full max-w-7xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Image */}
          <div className="flex justify-center items-start">
            <img
              src="/inland-3.jpg"
              alt="Rail transport with containers"
              className="rounded-2xl shadow-lg w-full max-w-7xl object-cover"
            />
          </div>
          {/* Right: Service Details */}
          <div>
            <h3 className="text-lg md:text-xl  mb-4">
              2. Rail Transportation
            </h3>
            <p className="text-base text-foreground mb-4">
              Rail transport is an economical, environmentally friendly, and efficient option for long-distance container movement. Our rail freight solutions include:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
              <li>
                <span className="">Long-Distance Container Rail Transport:</span> Reliable connections between ports, inland container depots (ICDs), and major industrial hubs—best effective for bulk movement of FCL, LCL, or OOG shipments.
              </li>
              <li>
                <span className="">Flexible Scheduling Capabilities:</span> Enhanced for regular and ad-hoc cycles through efficient slotting, suitable for standard, reefer, and heavy/oversize containers.
              </li>
              <li>
                <span className="">Intermodal Rail Solutions:</span> Seamless integration of rail and surface transport for optimized routing; smooth coordination of cargo from pickup to inland destinations.
              </li>
              <li>
                <span className="">Secure & Controlled Operations:</span> Increased levels of control and damage compared to road transport; regular monitoring and tracking via in-train transport solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Multimodal & Transshipment Services */}
          <div>
            <h3 className="text-lg md:text-xl  mb-4">
              3. Multimodal &amp; Transshipment Services
            </h3>
            <p className="text-base text-foreground mb-4">
              For complex cargo routes, we offer multimodal solutions that combine road, rail, and sea transport to ensure efficient and cost-effective logistics.
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
              <li>
                <span className="">Seamless Port-to-Door &amp; Door-to-Port Transport:</span>
                End-to-end logistics coordination from shipping sites to inland delivery points. Eliminating delays with optimized scheduling and cargo handling.
              </li>
              <li>
                <span className="">Intermediate Transshipment Solutions:</span>
                Flexibility in transport mode selection to optimize cost and efficiency. Reducing transit risks and expenses through smart reloading.
              </li>
              <li>
                <span className="">Cross-Border Inland Transit Transport:</span>
                Container-based transport between countries with full regulatory compliance. Ensuring smooth operations through efficient border clearance processes.
              </li>
            </ul>
          </div>
          {/* Right: Multimodal Transport Image */}
          <div className="flex justify-center items-start">
            <img
              src="/inland-4.jpg"
              alt="Multimodal transport with ship, plane, truck, and containers"
              className="rounded-2xl shadow-lg w-full max-w-7xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-24">
        <h2 className="text-2xl md:text-3xl  text-primary mb-2 text-center">
          Our Specialized Container Transport Solutions
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-7xl mx-auto">
          We handle all types of containers, ensuring proper transportation methods based on cargo requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Standard & High Cube Containers */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-28 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/inland-5.jpg"
                alt="Standard and high cube containers"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-sm md:text-base">Standard &amp; High Cube Containers</span>
            <span className="text-xs text-muted-foreground text-center">
              20ft, 40ft, and self-container transport.
            </span>
          </div>
          {/* Reefer & Temperature-Sensitive Cargo */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-28 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/inland-6.jpg"
                alt="Reefer and temperature-sensitive cargo"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-sm md:text-base">Reefer &amp; Temperature-Sensitive Cargo</span>
            <span className="text-xs text-muted-foreground text-center">
              Ensuring protected temperature for foods throughout the journey.
            </span>
          </div>
          {/* Dangerous Goods/DG Containers */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-28 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/inland-7.jpg"
                alt="Dangerous goods container"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-sm md:text-base">Dangerous Goods/DG Containers</span>
            <span className="text-xs text-muted-foreground text-center">
              Safe requirements with strict safety protocols.
            </span>
          </div>
          {/* Flat Rack & Open-Top Containers */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-28 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/inland-8.jpg"
                alt="Flat rack and open-top containers"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-sm md:text-base">Flat Rack &amp; Open-Top Containers</span>
            <span className="text-xs text-muted-foreground text-center">
              For out-of-gauge, heavy, OOG, and industrial project cargo.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl  text-center text-primary mb-8">
          Reasons to Choose Moon Navigation and Trading Co. For Your Inland Transportation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Seamless Port-to-Door Delivery */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Seamless Port-to-Door Delivery
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We ensure smooth and efficient transport from ports to warehouses, factories, and final destinations.
            </p>
          </div>
          {/* Diverse Transport Options */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Diverse Transport Options
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Our fleet includes specialized trucks, rail solutions, and inland waterways, offering flexibility for every cargo type.
            </p>
          </div>
          {/* Timely & Reliable Service */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Timely &amp; Reliable Service
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We prioritize on-time deliveries with optimized routing and continuous coordination.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compliance & Security */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Compliance &amp; Security
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Strict adherence to local and international regulations, ensuring cargo safety and smooth customs clearance.
            </p>
          </div>
          {/* Customized Logistics Solutions */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Customized Logistics Solutions
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Tailored transport plans to meet the specific needs of your cargo, including wide-gauge and specialized shipments.
            </p>
          </div>
        </div>
      </div>
      <GetQuoteComponent topic="Inland Container" link="/container-services-forms" />
    </div>
  );
}
