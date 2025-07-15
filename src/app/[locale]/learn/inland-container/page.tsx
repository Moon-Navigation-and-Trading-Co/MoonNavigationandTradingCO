"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";  
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import VesselCarousel from "@/components/vessel-carousel";

export default function InlandContainerPage() {

  return (
    <OverviewServicesTabs
      renderOverview={() => (
        <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
          {/* Top Banner */}
          <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
            <div className="relative w-full h-[350px] md:h-[350px]">
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
              <h1 className="text-2xl md:text-3xl  text-foreground mb-2 font-regular">
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
              <h2 className="text-lg  text-primary mb-2 font-regular">
                What is inland container transportation?
              </h2>
              <p className="text-base text-foreground leading-relaxed font-light">
                Inland container transportation is the movement of shipping containers from ports to inland destinations using trucks, trains, or barges. This service is crucial for ensuring smooth cargo flow between seaports, connecting businesses to warehouses, distribution centers, and final delivery points. It adds value to supply chains by reducing delays, optimizing costs, and improving cargo integrity.
                <br /><br />
                At Moon Navigation and Trading Co., we specialize in efficient and secure inland container solutions, leveraging a fleet of specialized vehicles, rail connections, and logistics hubs. Our tailored solutions ensure timely delivery, cargo visibility, and compliance with the strictest standards from the first destination, providing businesses with a reliable and cost-effective transportation service.
              </p>
            </div>
          </div>
        </div>
      )}
      renderServices={() => (
        <div className="min-h-screen flex flex-col items-center  px-2 md:px-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <div className="w-full max-w-7xl mx-auto ">
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
                    <span className="">FCL (Full Container Load) and LCL (Less than Container Load) Trucking:</span> Dedicated or consolidated container haulage, including white-glove handling and cargo security.
                  </li>
                  <li>
                    <span className="">Special Container Transport:</span> Movement of reefer, hazardous, and high-value/sensitive materials with strict temperature and safety controls.
                  </li>
                  <li>
                    <span className="">Heavy and Out-of-Gauge Haulage:</span> Specialized equipment and routing for large and weight-restricted cargo, including flat racks, open-top containers, and project cargo.
                  </li>
                  <li>
                    <span className="">Customs-Cleared Delivery:</span> Transport to/from free-trade zones, bonded areas, and sites requiring compliance with customs and regulatory requirements.
                  </li>
                  <li>
                    <span className="">Intercity and Cross-Border Trucking:</span> Reliable connections for domestic and international routes.
                  </li>
                  <li>
                    <span className="">Container Storage and Last-Mile Delivery:</span> Short-distance container transfers between ports, rail yards, and warehouses; efficient distribution solutions for door-to-door cargo delivery.
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
                  3. Multimodal and Transshipment Services
                </h3>
                <p className="text-base text-foreground mb-4">
                  For complex cargo routes, we offer multimodal solutions that combine road, rail, and sea transport to ensure efficient and cost-effective logistics.
                </p>
                <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                  <li>
                    <span className="">Seamless Port-to-Door and Door-to-Port Transport:</span>
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
            <VesselCarousel vessels={[
              {
                img: "/inland-5.jpg",
                title: "Standard and High Cube Containers",
                subtitle: "20ft, 40ft, and self-container transport.",
              },
              {
                img: "/inland-6.jpg",
                title: "Reefer and Temperature-Sensitive Cargo",
                subtitle: "Ensuring protected temperature for foods throughout the journey.",
              },
              {
                img: "/inland-7.jpg",
                title: "Dangerous Goods/DG Containers",
                subtitle: "Safe requirements with strict safety protocols.",
              },
              {
                img: "/inland-8.jpg",
                title: "Flat Rack and Open-Top Containers",
                subtitle: "For out-of-gauge, heavy, OOG, and industrial project cargo.",
              },
            ]} />
          </div>
          <div className="w-full max-w-7xl mx-auto mt-20">
            <ReasonsGridUniversal
              title="Reasons to Choose Moon Navigation and Trading Co. For Your Inland Transportation"
              layout="3-2"
              reasons={[
                {
                  icon: <img src="/icons/container/119.png" className="mb-8 h-20 w-20 object-contain"/>,
                  title: "Seamless Port-to-Door Delivery",
                  description: "We ensure smooth and efficient transport from ports to warehouses, factories, and final destinations.",
                },
                {
                  icon: <img src="/icons/container/120.png" className="mb-8 h-20 w-20 object-contain"/>,
                  title: "Diverse Transport Options",
                  description: "Our fleet includes specialized trucks, rail solutions, and inland waterways, offering flexibility for every cargo type.",
                },
                {
                  icon: <img src="/icons/container/121.png" className="mb-8 h-20 w-20 object-contain"/>,
                  title: "Timely and Reliable Service",
                  description: "We prioritize on-time deliveries with optimized routing and continuous coordination.",
                },
                {
                  icon: <img src="/icons/container/122.png" className="mb-8 h-20 w-20 object-contain"/>,
                  title: "Compliance and Security",
                  description: "Strict adherence to local and international regulations, ensuring cargo safety and smooth customs clearance.",
                },
                {
                  icon: <img src="/icons/container/123.png" className="mb-8 h-20 w-20 object-contain"/>,
                  title: "Customized Logistics Solutions",
                  description: "Tailored transport plans to meet the specific needs of your cargo, including wide-gauge and specialized shipments.",
                },
              ]}
            />
          </div>
          <GetQuoteComponent topic="Inland Container" link="/container-services-forms" />
          <FAQSearch category="inland-container-transportation" />
        </div>
      )}
    />
  );
}
