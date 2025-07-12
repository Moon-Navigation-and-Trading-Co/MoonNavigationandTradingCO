"use client";
import FAQSearch from "@/components/faq";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import OverviewServicesTabs from "@/components/overview-services";

function overview() {
  return (
    <>
      {/* Top full-width image */}
      <div className="w-full mb-10">
        <img
          src="/spare-1.jpg"
          alt="Spare parts on dock ready for vessel transit"
          className="w-full h-[220px] md:h-[320px] object-cover rounded-[40px] md:rounded-[48px] mt-2"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      {/* Main content grid */}
      <div className="max-w-6xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Title and Button */}
        <div className="flex flex-col items-start">
          <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-[#222] dark:text-white mb-4 leading-tight">
            Transit Spare Parts
          </h1>
          <RequestQuoteButton>
            <Link href="/ship-agency-forms">
              Request a Quote
            </Link>
          </RequestQuoteButton>
        </div>
        {/* Right: Description */}
        <div>
          <h2 className="text-base md:text-lg text-[#2a3a8c] dark:text-blue-400 mb-2">
            What is Transit spare parts ?
          </h2>
          <p className="text-[#444] dark:text-gray-300 text-sm mb-4 leading-relaxed">
            Transit spare parts involve the translocation of critical replacement components for vessels or machinery, dispatched while transiting to ports or enroute to unanticipated maintenance locations.
          </p>
          <p className="text-[#444] dark:text-gray-300 text-sm leading-relaxed">
            These parts are essential for repairs, upgrades, or replacement of malfunctioning components. Whether during a planned visit or while afloat, at Moon Navigation Trading Company, we understand the critical importance of fast service in the maritime industry, and help ensure that spare parts can be minimizing downtime and preventing operational delays. We coordinate the clearance, logistics, and documentation structures that transit parts are in absolute compliance with local governmental mandates and overall port requirements. We provide regulatory management and traceability to streamline the process, ensuring that the necessary parts are available when needed.
          </p>
        </div>
      </div>
    </>
  );
}

function services() {
  return (
    <>
      {/* ...rest of the original file's content after the overview... */}
      <div className="w-full bg-[#3b478b] dark:bg-blue-900 rounded-[32px] px-4 md:px-12 py-10 mt-16 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-lg md:text-xl mb-6">
            Our Transit Spare Parts Process – At Moon Navigation and Trading Co.
          </h2>
          <h3 className="text-base md:text-lg mb-2">
            1. Spare Parts Reception
          </h3>
          <p className="text-sm md:text-base mb-4">
            We coordinate with airports, ports, courier services, or local suppliers to receive the spare parts upon arrival.
          </p>
          <ul className="list-disc ml-6 text-sm md:text-base space-y-1 mb-2">
            <li>We handle air imports, ports, or designated warehouses.</li>
            <li>We coordinate with airlines, shipping lines and freight forwarders.</li>
            <li>Real-time tracking for inbound shipments.</li>
          </ul>
          <p className="text-xs mt-3">
            <span className="">Benefit:</span> We minimize delays by ensuring efficient collection.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/spare-2.jpg"
            alt="Spare parts reception at port with agent and delivery vehicle"
            className="rounded-xl shadow-md object-cover w-[320px] h-[180px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      {/* Customs Clearance & Direct Delivery Section */}
      <div className="w-full bg-[#3b478b] dark:bg-blue-900 rounded-[32px] px-4 md:px-12 py-10 mt-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src="/spare-3.jpg"
            alt="Customs officer inspecting documents for spare parts at port"
            className="rounded-xl shadow-md object-cover w-[320px] h-[180px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        {/* Right: Customs Clearance Content */}
        <div className="flex-1 text-white">
          <h3 className="text-base md:text-lg mb-2">
            2. Customs Clearance
          </h3>
          <p className="text-sm md:text-base mb-2">
            For shipments requiring customs clearance, we manage the process to ensure fast and hassle-free processing.
          </p>
          <ul className="list-disc ml-6 text-sm md:text-base space-y-1 mb-2">
            <li>
              <span className="">Custom documentation verification</span>
            </li>
            <li>
              <span className="">Duty waivers and formalities</span> as required for ship spares-in-transit
            </li>
            <li>
              <span className="">Liaison with port and airport authorities</span> for smooth release
            </li>
          </ul>
          <p className="text-xs mt-3">
            <span className="">Benefit:</span> No unnecessary hold-ups, ensuring fast delivery to the vessel.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#3b478b] dark:bg-blue-900 rounded-[32px] px-4 md:px-12 py-10 mt-10 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Direct Delivery Content */}
        <div className="flex-1 text-white order-2 md:order-1">
          <h3 className="text-base md:text-lg mb-2">
            3. Direct Delivery to Ship
          </h3>
          <p className="text-sm md:text-base mb-2">
            Once cleared, we transport the spare parts directly to the vessel, whether at port or offshore.
          </p>
          <ul className="list-disc ml-6 text-sm md:text-base space-y-1 mb-2">
            <li>On-time portside delivery</li>
            <li>Ship-to-ship or offshore transfer if required</li>
            <li>Secure handling and damage prevention measures</li>
          </ul>
          <p className="text-xs mt-3">
            <span className="">Benefit:</span> Ensures spare parts reach the ship without detour or delay.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <img
            src="/spare-4.jpg"
            alt="Spare parts being delivered directly to ship at port"
            className="rounded-xl shadow-md object-cover w-[320px] h-[180px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-20 mb-10 px-4">
        <h2 className="text-xl md:text-2xl text-[#2a4365] dark:text-blue-400 mb-8 text-center">
          Reasons to Choose Moon Navigation and Trading Co.<br />
          For Your Transit Spare Parts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-2 text-gray-900 dark:text-white">Fast and Reliable Service</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm">
              No delays in spare parts delivery.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-2 text-gray-900 dark:text-white">Customs Clearance Expertise</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm">
              Smooth handling of all regulatory procedures.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-2 text-gray-900 dark:text-white">24/7 Support</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm">
              Available for urgent and emergency deliveries.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-2 text-gray-900 dark:text-white">End-to-End Coordination</h3>
            <p className="text-[#444] dark:text-gray-300 text-sm">
              From reception to final ship delivery.
            </p>
          </div>
        </div>
      </div>
      <GetQuoteComponent topic = "Transit Spare Parts" link = "/ship-agency-forms"/> 
      <FAQSearch category="spare-parts" />
    </>
  );
}

export default function SparePartsPage() {
  return (
    <OverviewServicesTabs renderOverview={overview} renderServices={services} />
  );
}
