"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const ReeferPage = () => {
  const router = useRouter();

  return (
    <div className="w-full max-w-7xl min-h-screen bg-white flex flex-col items-center py-8 px-2 md:px-0">
      {/* Top image and company name */}
      <div className="w-full max-w-7xl rounded-t-3xl overflow-hidden mb-8">
        <div className="relative w-full h-[400px]">
          <Image
            src="/reefer-header.jpg"
            alt="Reefer containers"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-3xl"
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
          <button
            className="w-fit px-4 py-2 bg-[#3B4B8C] text-white rounded-md font-medium shadow hover:bg-[#2a3566] transition"
            onClick={() => router.push("/container-services-forms")}
          >
            Request a Quote
          </button>
        </div>
        {/* Right: Description */}
        <div className="flex-[2] text-gray-700 text-sm md:text-base flex flex-col gap-4">
          <p>
            When it comes to refrigerated logistics, we understand cargo assurance and reliability are critical. Our Reefer
            Containers represent premium service, built to keep your temperature-sensitive products safe throughout the
            shipping process. With proven performance handling valued pharmaceuticals, chemicals, or other temperature-controlled goods, we ensure optimal conditions from origin to destination.
          </p>
          <p>
            At Moon Navigation and Trading Co., we offer state-of-the-art reefer container equipment with advanced
            temperature monitoring and control systems. Our team is experienced in handling cold-chain logistics, ensuring
            compliance with international standards, and delivering your cargo in perfect condition.
          </p>
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
            className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
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
            className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
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
            className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
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
            className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
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
            className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
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
            className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
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
              Our refrigerated containers are equipped with precise climate control systems to maintain relevant temperature ranges from -30°C up to +30°C, as per the commodity’s need. This technology helps to ensure product stability and quality during transit.
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
            <li>Accurate documentation and inspection records</li>
            <li>Seals and regulations used to support safe cargo</li>
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
            Whether it’s a short-haul or long-haul movement, our global network allows us to offer fast, secure, and reliable reefer transport solutions. With strong partnerships with key ports and shipping lines, we ensure timely deliveries and end-to-end coordination.
          </p>
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
  <table className="min-w-full border border-gray-300 rounded-lg bg-white">
    <thead>
      <tr className="bg-gray-100">
        <th className="px-4 py-3 text-left font-semibold border-b border-gray-300">Feature</th>
        <th className="px-4 py-3 text-left font-semibold border-b border-gray-300">Reefer Containers (Refrigerated)</th>
        <th className="px-4 py-3 text-left font-semibold border-b border-gray-300">Standard Containers</th>
      </tr>
    </thead>
    <tbody className="text-sm">
      <tr>
        <td className="px-4 py-2 font-medium border-b border-gray-200">Purpose</td>
        <td className="px-4 py-2 border-b border-gray-200">Temperature-sensitive cargo transport</td>
        <td className="px-4 py-2 border-b border-gray-200">General cargo transport</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-4 py-2 font-medium border-b border-gray-200">Temperature Control</td>
        <td className="px-4 py-2 border-b border-gray-200">Adjustable temperature control (typically -30°C to +30°C)</td>
        <td className="px-4 py-2 border-b border-gray-200">No temperature control</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-medium border-b border-gray-200">Cargo Types</td>
        <td className="px-4 py-2 border-b border-gray-200">Perishable food, pharmaceuticals, chemicals, etc.</td>
        <td className="px-4 py-2 border-b border-gray-200">Dry goods, machinery, textiles, packaged goods</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-4 py-2 font-medium border-b border-gray-200">Ventilation &amp; Humidity Control</td>
        <td className="px-4 py-2 border-b border-gray-200">Equipped with air circulation and humidity regulation</td>
        <td className="px-4 py-2 border-b border-gray-200">Not available</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-medium border-b border-gray-200">Insulation</td>
        <td className="px-4 py-2 border-b border-gray-200">Insulated walls, floor, and ceiling</td>
        <td className="px-4 py-2 border-b border-gray-200">Not insulated</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-4 py-2 font-medium border-b border-gray-200">Container Cost</td>
        <td className="px-4 py-2 border-b border-gray-200">Higher cost due to refrigeration equipment</td>
        <td className="px-4 py-2 border-b border-gray-200">Lower cost</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-medium border-b border-gray-200">Power Supply</td>
        <td className="px-4 py-2 border-b border-gray-200">Requires power source during transit and storage</td>
        <td className="px-4 py-2 border-b border-gray-200">Not required</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-4 py-2 font-medium border-b border-gray-200">Monitoring Options</td>
        <td className="px-4 py-2 border-b border-gray-200">Cargo condition monitored throughout transportation</td>
        <td className="px-4 py-2 border-b border-gray-200">Basic handling only</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-medium border-b border-gray-200">Common Sizes</td>
        <td className="px-4 py-2 border-b border-gray-200">20ft / 40ft reefer and high cube</td>
        <td className="px-4 py-2 border-b border-gray-200">20ft / 40ft standard and high cube</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-4 py-2 font-medium border-b border-gray-200">Applications</td>
        <td className="px-4 py-2 border-b border-gray-200">Cold chain logistics, food supply, medical shipments</td>
        <td className="px-4 py-2 border-b border-gray-200">Industrial, commercial, and general cargo</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default ReeferPage;
