"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";

import GetQuoteComponent from "@/components/getQuoteComponent"

const ReeferPage = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl min-h-screen flex flex-col items-center py-8 px-2 md:px-0 place-self-center">
      {/* Top image and company name */}
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden mb-8">
        <div className="relative w-full h-[400px]">
          <Image
            src="/reefer-header.jpg"
            alt="Reefer containers"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left: Title and button */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-xl md:text-2xl font-semibold">
            Reefer Containers <br />
            <span className="font-normal text-lg">
              (Refrigerated Shipping Solutions)
            </span>
          </h1>
          <Link href="/container-services-forms">
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </Link>
        </div>
        {/* Right: Description */}
        <div className="flex-[2] text-gray-700 text-sm md:text-base flex flex-col gap-4">
          <p>
            When it comes to transporting temperature-sensitive cargo, precision and reliability are critical. Our Reefer
            Containers (refrigerated containers) provide the ideal solution for maintaining product integrity throughout the
            shipping process. Whether you are moving perishable food, pharmaceuticals, chemicals, or other temperature-
            controlled goods, we ensure optimal conditions from origin to destination.</p>
          <p>
            At Moon Navigation and Trading Co., we offer state-of-the-art reefer containers equipped with advanced
            temperature monitoring and control systems. Our team is experienced in handling cold chain logistics, ensuring
            compliance with international standards, and delivering your cargo in perfect condition.</p>
        </div>
      </div>
      <div className="w-full max-w-5xl mt-16 mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#3B4B8C]">
          Cargo Types We Handle
        </h2>
        <p className="text-muted-foreground mb-8 text-sm md:text-base">
          Our reefer solutions are tailored for a wide range of industries, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6">
          {/* Top Row */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/reefer-fresh-produce.jpg"
              alt="Fresh Produce & Perishable Foods"
              className="rounded-2xl w-40 h-28 object-cover mb-4 border border-gray-200"
              loading="lazy"
            />
            <h3 className="font-medium text-sm mb-1">Fresh Produce &amp; Perishable Foods</h3>
            <p className="text-xs text-muted-foreground">
              Salads, vegetables, fruit, seafood, dairy
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/reefer-pharma.jpg"
              alt="Pharmaceuticals & Medical Supplies"
              className="rounded-2xl w-40 h-28 object-cover mb-4 border border-gray-200"
              loading="lazy"
            />
            <h3 className="font-medium text-sm mb-1">Pharmaceuticals &amp; Medical Supplies</h3>
            <p className="text-xs text-muted-foreground">
              Vaccines, biologics &amp; temperature-sensitive drugs
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/reefer-chemicals.jpg"
              alt="Chemical Products"
              className="rounded-2xl w-40 h-28 object-cover mb-4 border border-gray-200"
              loading="lazy"
            />
            <h3 className="font-medium text-sm mb-1">Chemical Products</h3>
            <p className="text-xs text-muted-foreground">
              Industrial chemicals, specialty liquids
            </p>
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/reefer-flowers.jpg"
              alt="Floral Products"
              className="rounded-2xl w-40 h-28 object-cover mb-4 border border-gray-200"
              loading="lazy"
            />
            <h3 className="font-medium text-sm mb-1">Floral Products</h3>
            <p className="text-xs text-muted-foreground">
              Flowers, plants, horticultural cargo
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/reefer-frozen.jpg"
              alt="Frozen Goods & Ice Cream"
              className="rounded-2xl w-40 h-28 object-cover mb-4 border border-gray-200"
              loading="lazy"
            />
            <h3 className="font-medium text-sm mb-1">Frozen Goods &amp; Ice Cream</h3>
            <p className="text-xs text-muted-foreground">
              Frozen foods, desserts, ready meals
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/reefer-beverages.jpg"
              alt="Beverages & Dairy Products"
              className="rounded-2xl w-40 h-28 object-cover mb-4 border border-gray-200"
              loading="lazy"
            />
            <h3 className="font-medium text-sm mb-1">Beverages &amp; Dairy Products</h3>
            <p className="text-xs text-muted-foreground">
              Milk, juices, soft drinks, yogurt
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20 mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Top Image + 24/7 Monitoring & Technical Support */}
          <div className="flex flex-col gap-8">
            {/* Top Image */}
            <div className="flex justify-center">
              <img
                src="/reefer-temp-control.jpg"
                alt="Reefer Temperature Control"
                className="rounded-2xl shadow-lg object-cover w-full max-w-[420px] md:max-w-[520px] border-4 border-[#3B4B8C] mr-32 mb-32"
                style={{ background: "#3B4B8C", height: "320px" }}
              />
            </div>
            {/* 24/7 Monitoring & Technical Support */}
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                24/7 Monitoring &amp;<br />Technical Support
              </h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-md">
                We offer round-the-clock monitoring to ensure your cargo remains within the required temperature thresholds. Our technical support team is available 24/7 to address any operational issues promptly, minimizing any risk to your cargo.
              </p>
            </div>
          </div>
          {/* Right Side: Advanced Temperature Control + Worker Image */}
          <div className="flex flex-col gap-8">
            {/* Advanced Temperature Control */}
            <div className="flex flex-col justify-center h-full mb-32">
              <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Advanced<br />Temperature Control
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-3 max-w-md">
                Our refrigerated containers are equipped with precise climate control systems to maintain relevant temperature ranges from -30°C up to +30°C, as per the commodity's need. This technology helps to ensure product stability and quality during transit.
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                <li>Multi temperature zone container available</li>
                <li>Humidity control and air circulation solutions</li>
                <li>Consistent temperature monitoring and data logging</li>
              </ul>
            </div>
            {/* Worker Image */}
            <div className="flex justify-center">
              <img
                src="/reefer-worker.jpg"
                alt="Reefer Container Worker"
                className="rounded-2xl shadow-lg object-cover w-full max-w-[420px] md:max-w-[520px] border-4 border-[#3B4B8C] mr-32"
                style={{ background: "#3B4B8C", height: "320px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Top Left: Image */}
          <div className="flex flex-col justify-start">
            <div className="w-full flex justify-start">
              <div className="bg-[#23294d] h-2 w-24 rounded-t-md mb-[-12px] ml-4 md:ml-8 z-10" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[420px] md:max-w-[480px] ml-4 md:ml-8">
              <img
                src="/reefer-coldchain-workers.jpg"
                alt="Cold Chain Compliance Workers"
                className="object-cover w-full h-[180px] md:h-[220px]"
                style={{ background: "#3B4B8C" }}
              />
            </div>
          </div>
          {/* Top Right: Title + Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Cold Chain Compliance &amp; Documentation
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-2">
              Maintaining a consistent cold chain is critical in reefer logistics. Our team ensures:
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
              <li>Full compliance with international cold chain standards</li>
              <li>Accurate documentation and temperature logs</li>
              <li>Customs and regulatory support for specialized cargo</li>
              <li>Pre-trip inspections (PTI) to verify container readiness</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Bottom Left: Title + Description */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Global Reach,<br className="hidden md:inline" /> Reliable Transit
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Whether it is a short-haul or long-haul shipment, our global network allows
              us to offer fast, secure, and reliable reefer transport solutions. With strong
              partnerships across key ports and shipping lines, we ensure timely
              deliveries and end-to-end coordination.</p>
          </div>
          {/* Bottom Right: Image */}
          <div className="flex flex-col items-end order-1 md:order-2">
            <div className="w-full flex justify-end">
              <div className="bg-[#23294d] h-2 w-24 rounded-t-md mb-[-12px] mr-4 md:mr-8 z-10" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[420px] md:max-w-[480px] mr-4 md:mr-8">
              <img
                src="/reefer-global-ship.jpg"
                alt="Global Reefer Shipping"
                className="object-cover w-full h-[180px] md:h-[220px]"
                style={{ background: "#3B4B8C" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-12 w-full max-w-7xl">
        <h2 className="text-2xl font-semibold mb-6">Comparison: Reefer Containers vs. Standard Containers</h2>
        <table className="min-w-full border border-gray-300 dark:border-[#23294d] rounded-2xl bg-white dark:bg-[#181c2a]">
          <thead>
            <tr className="">
              <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Feature</th>
              <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Reefer Containers (Refrigerated)</th>
              <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Standard Containers</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Purpose</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Temperature-sensitive cargo transport</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">General cargo transport</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200 ">Temperature Control</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Adjustable temperature control (typically -30°C to +30°C)</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">No temperature control</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d border-r border-gray-200]">Cargo Types</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Perishable food, pharmaceuticals, chemicals, etc.</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Dry goods, machinery, textiles, packaged goods</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d border-r border-gray-200]">Ventilation &amp; Humidity Control</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Equipped with air circulation and humidity regulation</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Not available</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d border-r border-gray-200]">Insulation</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Insulated walls, floor, and ceiling</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Not insulated</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Container Cost</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Higher cost due to refrigeration equipment</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Lower cost</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Power Supply</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Requires power source during transit and storage</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Not required</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Monitoring Options</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Cargo condition monitored throughout transportation</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Basic handling only</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Common Sizes</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">20ft / 40ft reefer and high cube</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">20ft / 40ft standard and high cube</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Applications</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Cold chain logistics, food supply, medical shipments</td>
              <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d] border-r border-gray-200">Industrial, commercial, and general cargo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-16 mb-12 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-left md:text-left mb-16 text-[#3B4B8C] dark:text-[#bfc8f8]">
          Reasons to Choose Moon Navigation and Trading Co. for Your Reefer Container Shipments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8 md:gap-x-16 lg:gap-x-32 justify-items-center">
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
              Expertise in cold chain logistics
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
              Custom solutions tailored to your cargo's needs
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
              Modern reefer container fleet with advanced technology
            </span>
          </div>
          <div className="md:col-span-1"></div>
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
              Transparent communication and timely shipment updates
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
              Competitive rates and efficient routing
            </span>
          </div>
        </div>
      </div>




      <section className="w-full max-w-7xl mx-auto mt-20 mb-12 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Our Solutions
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          At Moon Navigation and Trading Co., we offer a comprehensive range of refrigerated shipping solutions tailored to protect the integrity of your temperature-sensitive cargo throughout every stage of the logistics process. Our services are designed to meet industry-specific demands, enhance operational efficiency, and ensure quality delivery from pickup to final destination.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[340px]">
            <img
              src="/reefer-truck-road.jpg"
              alt="Reefer truck on highway"
              className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
              loading="lazy"
            />
          </div>
          {/* Right: Solution Details */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              1. Door-to-Door Reefer Transport Solutions
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We provide end-to-end and widespread operations, ensuring your cargo is collected from your facility and delivered directly to its destination under controlled temperature conditions. Our door-to-door services eliminate multiple handoffs, reduce handling risks, and minimize compliance risks with industry quality standards.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>Seamless coordination from origin to destination</li>
              <li>One point of contact for the full journey</li>
              <li>Cold chain integrity preserved throughout</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <img
            src="/reefer-custom-routing.jpg"
            alt="Custom routing for perishable cargo"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
        {/* Right: Solution Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            2. Custom Routing for Perishable Cargo
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We understand that timing and routing are crucial for perishable goods. Our team offers customized transport planning to choose the most efficient routes and shortest transit times, minimizing spoilage risk and maximizing product shelf life.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>Optimized scheduling based on cargo type</li>
            <li>Strategic selection of transit routes and carriers</li>
            <li>Shipment status updates and progress tracking through every stage of transport</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Solution Details */}
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            3. Integrated Warehousing &amp; Cold Storage Services
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            In addition to transport, we offer cold storage solutions at key logistics hubs, allowing safe interim storage of temperature-sensitive goods. Our facilities are equipped with modern cooling systems to maintain ideal temperature and humidity levels.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>Temperature-controlled warehousing at origin or destination</li>
            <li>Ideal for cargo consolidation or distribution</li>
            <li>Scalable storage solutions for short or long-term needs</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px] order-1 md:order-2">
          <img
            src="/reefer-cold-storage.jpg"
            alt="Modern cold storage warehouse exterior"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <img
            src="/reefer-multimodal.jpg"
            alt="Multimodal transport options: sea, air, and inland"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
        {/* Right: Solution Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            4. Multimodal Transport Options (Sea, Air, Inland)
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We provide flexible multimodal transportation options, combining sea, air, and inland logistics to optimize your supply chain and distribution. Whether it's single or hybrid (e.g. conventional, break-bulk, or reefer) shipments, maintain temperature control across all transport modes.</p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>Seamless cross-modal transfers without temperature disruption</li>
            <li>Efficient coordination between sea, air, and land carriers</li>
            <li>Greater reach and delivery flexibility</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Solution Details */}
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            5. Risk Management &amp; Cargo Insurance Solutions
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Protecting your high-value and perishable cargo is our priority. We offer tailored risk mitigation strategies and insurance coverage to safeguard your goods from unforeseen events such as equipment failure, delays, or spoilage.</p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>Reefer cargo-specific insurance options</li>
            <li>Risk analysis and contingency planning</li>
            <li>Claims support and loss prevention advisory</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px] order-1 md:order-2">
          <img
            src="/reefer-insurance.jpg"
            alt="Cargo insurance and risk management for reefer shipping"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <img
            src="/reefer-tracking-monitoring.jpg"
            alt="Cargo tracking and temperature monitoring systems"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
        {/* Right: Solution Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            6. Cargo Tracking &amp; Temperature Monitoring Systems
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            We ensure effective cargo oversight through advanced monitoring protocols and temperature control measures throughout the transportation process. Our operations team routinely supervises shipments and keeps clients informed at every stage of the journey.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>Real-time updates on shipment status during key transit points</li>
            <li>Temperature performance checks and automated notifications/alerts</li>
            <li>Detailed logs for auditing and regulatory compliance</li>
            <li>Proactive communication from our operations team to keep you informed</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Solution Details */}
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#23294d]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            7. Special Handling for Hazardous Temperature-Sensitive Cargo
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Certain hazardous goods also require controlled temperatures, such as temperature-sensitive chemicals or pharmaceutical compounds. Our team is trained and certified to handle such shipments with special protocols to ensure safety and compliance.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>Expertise in IMDG/IMO-classified reefer cargo</li>
            <li>Specialized packaging, labeling, and documentation</li>
            <li>Compliance with safety regulations and cold chain integrity</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px] order-1 md:order-2">
          <img
            src="/reefer-hazardous-handling.jpg"
            alt="Special handling for hazardous temperature-sensitive cargo"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
      </div>
      <GetQuoteComponent topic="Reefer Container" link="/container-services-forms" />
    </div>
  );
};

export default ReeferPage;
