"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

// Dynamic import for heavy carousel component
const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

function overview() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0 w-full max-w-7xl mx-auto">
      {/* Top Banner - Wide Image with Large Rounded Corners */}
      <div className="w-full max-w-[1600px] rounded-[3rem] overflow-hidden mb-12" style={{ marginTop: 0 }}>
        <Image
          src="/ov-1.jpg"
          alt="Oversized containers at port"
          width={1600}
          height={420}
          className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px]"
          style={{ borderRadius: '3rem', objectFit: 'cover' }}
          priority
        />
      </div>
      {/* Main Content - Two Column Layout */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16 px-2 md:px-0">
        {/* Left: Title and CTA */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-[2.5rem] md:text-[2.8rem] font-regular mb-8 text-primary" style={{fontFamily: 'Raleway, Montserrat, sans-serif', lineHeight: 1.1 }}>
            Oversized Container
          </h1>
          <Link href="/container-services-forms">
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </Link>
        </div>
        {/* Right: Description */}
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-xl md:text-2xl font-regular mb-4 text-primary" style={{ fontFamily: 'Raleway, Montserrat, sans-serif' }}>
            What is Oversized Container?
          </h2>
          <p className="text-base md:text-lg text-foreground mb-2 font-light" style={{ fontFamily: 'Raleway, Montserrat, sans-serif', lineHeight: 1.6 }}>
            An oversized container is cargo that exceeds the standard dimensions of a conventional shipping container, requiring specialized transport solutions. These shipments are often too tall, wide, or heavy to fit within standard 20-foot or 40-foot containers and must be transported using flat racks, open-top containers, or platform containers.
          </p>
          <p className="text-base md:text-lg text-foreground font-light" style={{ fontFamily: 'Raleway, Montserrat, sans-serif', lineHeight: 1.6 }}>
            At Moon Navigation and Trading Co., we specialize in handling oversized container shipments, offering expert cargo securing, route planning, and compliance management to ensure safe and efficient transport. With access to global shipping routes and specialized equipment, we provide tailored solutions for industries requiring the movement of large, heavy, or irregularly shaped cargo.
          </p>
        </div>
      </div>
    </div>
  );
}

function services() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0 w-full max-w-7xl mx-auto">
      {/* --- OVERSIZED CARGO CAROUSEL SECTION --- */}
      <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <h2 className="text-[2.2rem] md:text-[2.5rem] font-normal mb-2 text-center" style={{ color: '#3B4B8C', fontFamily: 'Raleway, sans-serif', letterSpacing: 0 }}>
          Our Common Cargo for Oversized Containers
        </h2>
        <p className="text-[#888] mb-10 text-base md:text-lg max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Our oversized container services are designed to handle a wide range of large and irregularly shaped shipments, including but not limited to:
        </p>
        <VesselCarousel />
      </div>
      {/* Features Section */}
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Engineered for Heavy & Large Cargo - Image Left */}
        <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
          <Image
            src="/ov-2.jpg"
            alt="Crane loading oversized cargo"
            width={600}
            height={400}
            className="rounded-[60px] object-cover w-full h-full"
          />
        </div>
        {/* Text Right */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Engineered for Heavy & Large Cargo
          </h3>
          <p className="text-base text-foreground mb-4 font-light" style={{ fontFamily: 'Raleway, sans-serif', lineHeight: 1.6 }}>
            Our oversized container solutions are specifically designed to handle cargo that exceeds standard container dimensions. We utilize specialized equipment and containers including:
          </p>
          <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>
              <span className="font-medium">Flat Rack Containers</span> – Open-sided containers for wide or tall cargo
            </li>
            <li>
              <span className="font-medium">Open Top Containers</span> – Removable roof for top-loading access
            </li>
            <li>
              <span className="font-medium">Platform Containers</span> – Flat platforms for extremely heavy loads
            </li>
            <li>
              <span className="font-medium">Specialized Securing Equipment</span> – Custom lashing and bracing solutions
            </li>
          </ul>
        </div>
      </div>

      {/* Route Planning & Compliance - Text Left, Image Right */}
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Route Planning & Compliance Management
          </h3>
          <p className="text-base text-foreground mb-4 font-light" style={{ fontFamily: 'Raleway, sans-serif', lineHeight: 1.6 }}>
            Transporting oversized cargo requires meticulous planning and strict compliance with international regulations. Our expertise includes:
          </p>
          <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>
              <span className="font-medium">Route Analysis</span> – Identifying safe transit corridors and clearance requirements
            </li>
            <li>
              <span className="font-medium">Permit Coordination</span> – Managing all necessary transport and port permits
            </li>
            <li>
              <span className="font-medium">Regulatory Compliance</span> – Ensuring adherence to IMO, SOLAS, and local regulations
            </li>
            <li>
              <span className="font-medium">Insurance & Documentation</span> – Comprehensive coverage and proper documentation
            </li>
          </ul>
        </div>
        {/* Image Right */}
        <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
          <Image
            src="/ov-3.jpg"
            alt="Route planning for oversized cargo transport"
            width={600}
            height={400}
            className="rounded-[60px] object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Global Network & Port Access - Image Left, Text Right */}
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
          <Image
            src="/ov-4.jpg"
            alt="Global port network for oversized cargo"
            width={600}
            height={400}
            className="rounded-[60px] object-cover w-full h-full"
          />
        </div>
        {/* Text Right */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Global Network & Port Access
          </h3>
          <p className="text-base text-foreground mb-4 font-light" style={{ fontFamily: 'Raleway, sans-serif', lineHeight: 1.6 }}>
            Our extensive global network provides access to major ports and terminals equipped to handle oversized cargo. We offer:
          </p>
          <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>
              <span className="font-medium">Major Port Access</span> – Connections to ports with heavy-lift capabilities
            </li>
            <li>
              <span className="font-medium">Specialized Terminals</span> – Access to terminals equipped for oversized cargo
            </li>
            <li>
              <span className="font-medium">Equipment Availability</span> – Guaranteed access to necessary handling equipment
            </li>
            <li>
              <span className="font-medium">Local Expertise</span> – Knowledge of local regulations and procedures
            </li>
          </ul>
        </div>
      </div>

      {/* Cargo Securing & Safety - Text Left, Image Right */}
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Cargo Securing & Safety Protocols
          </h3>
          <p className="text-base text-foreground mb-4 font-light" style={{ fontFamily: 'Raleway, sans-serif', lineHeight: 1.6 }}>
            The safety of oversized cargo during transport is our top priority. We implement comprehensive securing and safety measures:
          </p>
          <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>
              <span className="font-medium">Custom Securing Solutions</span> – Tailored lashing and bracing for each cargo type
            </li>
            <li>
              <span className="font-medium">Safety Inspections</span> – Regular checks throughout the transport journey
            </li>
            <li>
              <span className="font-medium">Weather Protection</span> – Appropriate covering and protection measures
            </li>
            <li>
              <span className="font-medium">Emergency Procedures</span> – Contingency plans for unexpected situations
            </li>
          </ul>
        </div>
        {/* Image Right */}
        <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
          <Image
            src="/ov-5.jpg"
            alt="Cargo securing and safety protocols"
            width={600}
            height={400}
            className="rounded-[60px] object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Cost-Effective Solutions - Image Left, Text Right */}
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
          <Image
            src="/ov-6.jpg"
            alt="Cost-effective oversized cargo solutions"
            width={600}
            height={400}
            className="rounded-[60px] object-cover w-full h-full"
          />
        </div>
        {/* Text Right */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Cost-Effective Solutions
          </h3>
          <p className="text-base text-foreground mb-4 font-light" style={{ fontFamily: 'Raleway, sans-serif', lineHeight: 1.6 }}>
            We understand that oversized cargo transport can be expensive. Our solutions are designed to optimize costs while maintaining quality:
          </p>
          <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>
              <span className="font-medium">Optimized Routing</span> – Efficient routes to minimize transport costs
            </li>
            <li>
              <span className="font-medium">Equipment Optimization</span> – Right-sizing equipment for cost efficiency
            </li>
            <li>
              <span className="font-medium">Consolidation Opportunities</span> – Combining shipments when possible
            </li>
            <li>
              <span className="font-medium">Transparent Pricing</span> – Clear breakdown of all costs involved
            </li>
          </ul>
        </div>
      </div>

      {/* Project Cargo Expertise - Text Left, Image Right */}
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Project Cargo Expertise
          </h3>
          <p className="text-base text-foreground mb-4 font-light" style={{ fontFamily: 'Raleway, sans-serif', lineHeight: 1.6 }}>
            Our experience extends to complex project cargo requirements, including industrial and construction projects:
          </p>
          <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>
              <span className="font-medium">Industrial Equipment</span> – Machinery, turbines, and manufacturing equipment
            </li>
            <li>
              <span className="font-medium">Construction Materials</span> – Prefabricated structures and building components
            </li>
            <li>
              <span className="font-medium">Energy Sector</span> – Wind turbines, solar panels, and power generation equipment
            </li>
            <li>
              <span className="font-medium">Mining & Infrastructure</span> – Heavy equipment for mining and construction projects
            </li>
          </ul>
        </div>
        {/* Image Right */}
        <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
          <Image
            src="/ov-7.jpg"
            alt="Project cargo expertise for oversized shipments"
            width={600}
            height={400}
            className="rounded-[60px] object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Comparison Table Section */}
      <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <h2 className="text-2xl mb-6 text-left text-primary">
          Oversized Containers vs. Standard Containers
        </h2>
        <div className="overflow-x-auto  shadow">
          <table className="min-w-full border border-border bg-background text-sm md:text-base">
            <thead>
              <tr className="">
                <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center ">Feature</th>
                <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center">Oversized Containers</th>
                <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center">Standard Containers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground text-center border-r">Size</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">Exceeds standard 20ft/40ft</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">20ft/40ft</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground text-center border-r">Cargo Type</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">Heavy, large, irregular</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">General, dry, palletized</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground text-center border-r">Loading Options</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">Top, side, end</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">End only</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground text-center border-r">Weather Protection</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">Custom tarps, reinforced</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">Standard roof, sealed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground text-center border-r">Compliance</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">IMO, SOLAS, custom</td>
                <td className="px-4 py-3 border-b border-border text-muted-foreground text-center border-r">Standard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Reasons Grid Section */}
      <div className="w-full max-w-7xl mx-auto mt-20">
        <ReasonsGridUniversal
          title="Reasons to Choose Moon Navigation and Trading Co. for Your Oversized Container Needs"
          layout="3-2"
          reasons={[
            {
              icon: <Image src="/icons/container/129.png" alt="Specialized Expertise Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
              title: "Specialized Expertise",
              description: "A highly experienced team delivering efficient, safe, and precise cargo handling, securing, and transport for oversized shipments.",
            },
            {
              icon: <Image src="/icons/container/130.png" alt="Advanced Equipment Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
              title: "Advanced Equipment",
              description: "We utilize state-of-the-art cranes, forklifts, and lashing gear for safe and efficient operations.",
            },
            {
              icon: <Image src="/icons/container/131.png" alt="Seamless Port Operations Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
              title: "Seamless Port Operations",
              description: "Integrated with major ports and terminals for smooth logistics and fast turnaround.",
            },
            {
              icon: <Image src="/icons/container/132.png" alt="Secure Storage Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
              title: "Secure & Reliable Storage",
              description: "Short- and long-term storage with 24/7 monitoring and protection from environmental factors.",
            },
            {
              icon: <Image src="/icons/container/133.png" alt="Comprehensive Service Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
              title: "Comprehensive Service",
              description: "From vessel unloading to final transport, we provide end-to-end solutions tailored to your logistics needs.",
            },
          ]}
        />
      </div>
      <GetQuoteComponent topic="Oversized Container" link="/container-services-forms" />
      <FAQSearch category="oversized-container" />
    </div>
  );
}

export default function ShippingMethodsInfo() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}
