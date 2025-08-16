"use client";

import { useTranslations } from "next-intl";
import FAQSearch from "@/components/faq";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function InlandContainerPage() {
  const t = useTranslations("inland-freight");
  const [activeSection, setActiveSection] = useState("road");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="/inland-container-banner.jpg"
          alt="Inland Container Transportation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Moon Navigation and Trading Co.
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Inland Container Transportation
            </h2>
            <RequestQuoteButton />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              What is Inland container transportation?
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Inland container transportation is the movement of shipping containers from ports to inland destinations using trucks, trains, or barges. It plays a crucial role in the logistics chain, connecting seaports with inland destinations and ensuring the efficient movement of goods from origin to destination.
              </p>
              <p>
                Moon Navigation and Trading Co. specializes in efficient and secure inland container transport, offering a comprehensive fleet of specialized trucks, extensive rail networks, and strategic logistics hubs. We are committed to timely deliveries, regulatory compliance, and cost-effective service that optimizes your supply chain.
              </p>
            </div>
          </div>
        </div>

        {/* Service Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          <button 
            onClick={() => scrollToSection("road")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 font-raleway ${
              activeSection === "road" 
                ? "bg-[#011f4b] text-white" 
                : "bg-[#011f4b] text-white hover:bg-[#022c6a]"
            }`}
          >
            Road Transportation
          </button>
          <button 
            onClick={() => scrollToSection("rail")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 font-raleway ${
              activeSection === "rail" 
                ? "bg-[#011f4b] text-white" 
                : "bg-[#011f4b] text-white hover:bg-[#022c6a]"
            }`}
          >
            Rail Transportation
          </button>
          <button 
            onClick={() => scrollToSection("multimodal")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 font-raleway ${
              activeSection === "multimodal" 
                ? "bg-[#011f4b] text-white" 
                : "bg-[#011f4b] text-white hover:bg-[#022c6a]"
            }`}
          >
            Multimodal & Transshipment Services
          </button>
          <button 
            onClick={() => scrollToSection("specialized")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2 font-raleway ${
              activeSection === "specialized" 
                ? "bg-[#011f4b] text-white" 
                : "bg-[#011f4b] text-white hover:bg-[#022c6a]"
            }`}
          >
            Specialized Container Transport Solutions
          </button>
        </div>

        {/* Road Transportation Section */}
        <div id="road" className="grid md:grid-cols-2 gap-12 items-center mb-16 scroll-mt-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Inland Container Transport Services
            </h2>
            <p className="text-gray-700 mb-6">
              We offer a full range of inland transportation solutions, ensuring your cargo reaches its destination safely, on time, and in optimal condition.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Road Transportation
                </h3>
                <p className="text-muted-foreground mb-4">
                  We offer flexible, secure trucking solutions for all cargo types:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">•</span>
                    <div>
                      <strong>FCL & LCL Trucking:</strong> Dedicated or consolidated container transport.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">•</span>
                    <div>
                      <strong>Reefer Transport:</strong> Temperature-controlled trucks for perishable and sensitive goods.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">•</span>
                    <div>
                      <strong>Heavy & Oversized Cargo:</strong> Low-bed and multi-axle trailers for machinery, equipment, and project cargo.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">•</span>
                    <div>
                      <strong>Hazardous Cargo:</strong> Certified dangerous goods transport compliant with IMO, ADR, and local regulations.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">•</span>
                    <div>
                      <strong>Intercity & Cross-Border:</strong> Domestic and international routes with customs clearance support.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-semibold mr-2">•</span>
                    <div>
                      <strong>Container Drayage & Last-Mile:</strong> Port, rail yard, and warehouse transfers with door-to-door delivery.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/inland-2.jpg"
              alt="Road Transportation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Rail Transportation Section */}
        <div id="rail" className="grid md:grid-cols-2 gap-12 items-center mb-16 scroll-mt-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1">
            <Image
              src="/inland-3.jpg"
              alt="Rail Transportation"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              2. Rail Transportation
            </h3>
            <p className="text-gray-700 mb-4">
              Rail transport is an economical, environmentally friendly, and efficient option for long-distance container movement. Our rail freight solutions include:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Long-Distance Container Rail Transport:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Reliable connections between ports, inland container depots (ICDs), and major industrial hubs.</li>
                    <li>• Cost-effective bulk movement of FCL and LCL shipments.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Double-Stacking Capabilities:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Increased capacity and reduced costs through efficient stacking.</li>
                    <li>• Suitable for standard, reefer, and dry cargo containers.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Intermodal Rail Solutions:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Seamless integration of rail and truck transport for optimized routing.</li>
                    <li>• Smooth coordination of cargo from ports to inland destinations.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Secure & Controlled Operations:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Minimized risk of theft and damage compared to road transport.</li>
                    <li>• Regular monitoring and tracking to maintain transport schedules.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Multimodal Services Section */}
        <div id="multimodal" className="grid md:grid-cols-2 gap-12 items-center mb-16 scroll-mt-20">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              3. Multimodal & Transshipment Services
            </h3>
            <p className="text-gray-700 mb-4">
              For complex cargo routes, we offer multimodal solutions that combine road, rail, and sea transport to ensure efficient and cost-effective logistics.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Seamless Port-to-Door & Door-to-Port Transport:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• End-to-end logistics coordination from shipping lines to inland delivery points.</li>
                    <li>• Eliminating delays with optimized scheduling and cargo handling.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Intermodal Transport Solutions:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Flexibility in transport mode selection to optimize cost and efficiency.</li>
                    <li>• Reducing transit time and improving supply chain reliability.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <div>
                  <strong>Cross-Border Inland Transport:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• Customs-cleared transport between countries with full regulatory compliance.</li>
                    <li>• Ensuring smooth operations through efficient border clearance processes.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/f-inland-4.jpg"
              alt="Multimodal Services"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Specialized Container Solutions */}
        <div id="specialized" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Specialized Container Transport Solutions
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            We handle all types of containers, ensuring proper transportation methods based on cargo requirements:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/inland-5.jpg"
                  alt="Standard & High Cube Containers"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Standard & High Cube Containers
              </h3>
              <p className="text-gray-700">
                20ft, 40ft, and 45ft container transport.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/inland-6.jpg"
                  alt="Reefer & Temperature-Sensitive Cargo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reefer & Temperature-Sensitive Cargo
              </h3>
              <p className="text-gray-700">
                Ensuring controlled temperature levels throughout the journey.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/inland-7.jpg"
                  alt="Dangerous Goods (DG) Containers"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dangerous Goods (DG) Containers
              </h3>
              <p className="text-gray-700">
                Secure movement with strict safety compliance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/inland-8.jpg"
                  alt="Flat Rack & Open-Top Containers"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flat Rack & Open-Top Containers
              </h3>
              <p className="text-gray-700">
                For out-of-gauge, heavy-lift, and industrial project cargo.
              </p>
            </div>
          </div>
        </div>

        {/* Reasons to Choose Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Reasons to Choose Moon Navigation and Trading Co. For Your Inland Transportation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/icons/container/119.png"
                  alt="Seamless Port-to-Door Delivery"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Seamless Port-to-Door Delivery
              </h3>
              <p className="text-gray-700">
                We ensure smooth and efficient transport from ports to warehouses, factories, and final destinations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/icons/container/120.png"
                  alt="Diverse Transport Options"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Diverse Transport Options
              </h3>
              <p className="text-gray-700">
                Our fleet includes specialized trucks, rail solutions, and inland waterways, offering flexibility for every cargo type.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/icons/container/121.png"
                  alt="Timely & Reliable Service"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Timely & Reliable Service
              </h3>
              <p className="text-gray-700">
                We prioritize on-time deliveries with optimized routing and continuous coordination.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/icons/container/122.png"
                  alt="Compliance & Security"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compliance & Security
              </h3>
              <p className="text-gray-700">
                Strict adherence to local and international regulations, ensuring cargo safety and smooth customs clearance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/icons/container/123.png"
                  alt="Customized Logistics Solutions"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Customized Logistics Solutions
              </h3>
              <p className="text-gray-700">
                Tailored transport plans to meet the specific needs of your cargo, including out-of-gauge and specialized shipments.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Request Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get your Quote with Us
            </h2>
            <p className="text-gray-700 mb-6">
              Experience our streamlined Inland container transportation quotation process. At Moon Navigation and Trading Co., our Quotation by Request system ensures convenience and accuracy. Simply fill out our short form, and our expert team will review your requirements, select the best routing and handling solutions, and deliver a customized quotation directly to your email with accurate pricing and optimized transit times without delays.
            </p>
            <Link href="/inland-services-forms">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Request a Quote
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-700 mb-4">
            Need a fast and reliable inland container transportation solution? Contact us today for a customized logistics plan that ensures seamless and efficient cargo delivery from port to destination!
          </p>
          <p className="text-gray-600 italic">
            -Whenever and wherever you need to trust.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSearch category="inland-container" />
        </div>
      </div>
    </>
  );
}
