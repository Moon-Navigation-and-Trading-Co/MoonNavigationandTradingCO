"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";

export default function OutGaugeCargoInfo() {
  const t = useTranslations("learn-out-gauge");

  return (
    <>
      {/* Hero Section */}
      <div className="w-full flex justify-center mb-8 mt-10">
        <div className="w-full max-w-7xl">
          <Image
            src="/out-gauge-banner.jpg"
            alt="Out-of-Gauge Cargo Banner"
            width={1200}
            height={350}
            className="rounded-[60px] object-cover w-full h-[220px] sm:h-[350px]"
            priority
          />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 mb-12 max-w-7xl mx-auto">
        {/* Left column: title and button */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h1 className="mb-10 text-4xl font-light text-left md:text-left w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>Out Gauge</h1>
          <Link href="/out-gauge-forms">
            <RequestQuoteButton>Request a Quote</RequestQuoteButton>
          </Link>
        </div>
                {/* Right column: heading and description */}
        <div className="flex-1 rounded-2xl p-6">
          <h2 className="text-lg mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
            What is Out Gauge ?
          </h2>
          <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Out-of-Gauge (OOG) cargo is the shipments that exceed the standard dimensions of a shipping container, making them unsuitable for transport in enclosed containers. These oversized or irregularly shaped goods require specialized handling, equipment, and transport solutions to ensure safe and efficient delivery.
          </p>
          <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
            At Moon Navigation and Trading Co., we provide tailored OOG container solutions, utilizing flat racks, open-top containers, and specialized lifting equipment to accommodate large or heavy cargo. Our expertise in securing, routing, and transporting out-of-gauge shipments ensures seamless delivery across global trade routes while maintaining compliance with international shipping regulations.
      </p>
    </div>
      </div>

      {/* What We Transport Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          What We Transport
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Our OOG cargo services are designed to accommodate a wide variety of oversized shipments, including but not limited to:
        </p>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            onClick={() => {
              const container = document.getElementById('transport-carousel');
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            onClick={() => {
              const container = document.getElementById('transport-carousel');
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div 
            id="transport-carousel"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex-shrink-0 w-64">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/oog-2.jpg"
                  alt="Industrial Machinery"
                  width={256}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Industrial Machinery</h3>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-64">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/oog-3.jpg"
                  alt="Construction Equipment"
                  width={256}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Construction Equipment</h3>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-64">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/oog-4.jpg"
                  alt="Project Cargo"
                  width={256}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Cargo</h3>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-64">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/oog-5.jpg"
                  alt="Military and Aerospace Equipment"
                  width={256}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Military and Aerospace Equipment</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Handling Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Handling Out-of-Gauge cargo is a complex task that requires specialized equipment, custom handling techniques, and precise logistics management. Our team is highly experienced in coordinating the transportation of heavy, oversized, and project cargo, from industrial machinery to large-scale infrastructure components.
              </p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1">
            <Image
              src="/oog-6.jpg"
              alt="Handling Out-of-Gauge cargo"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </div>

      {/* Specialized Equipment Table */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Specialized Equipment for OOG Transportation
        </h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Equipment Type</th>
                <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-lg font-medium text-gray-900">Flat Rack Containers</td>
                <td className="px-6 py-4 text-gray-700">Ideal for wide and heavy cargo that exceeds standard width limits, providing open sides for easy loading and unloading.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-lg font-medium text-gray-900">Open-Top Containers</td>
                <td className="px-6 py-4 text-gray-700">Suitable for cargo that is too tall for a standard container, allowing top-loading with cranes.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-lg font-medium text-gray-900">Heavy-Lift Cranes & Lifting Gear</td>
                <td className="px-6 py-4 text-gray-700">Used for safe loading and unloading of massive structures, ensuring stability and security.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-lg font-medium text-gray-900">Modular & Hydraulic Trailers</td>
                <td className="px-6 py-4 text-gray-700">Designed for transporting extremely heavy and oversized loads over land, offering flexibility in weight distribution.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-lg font-medium text-gray-900">Roll-On/Roll-Off (RORO) Solutions</td>
                <td className="px-6 py-4 text-gray-700">Best for self-propelled cargo such as heavy machinery, trucks, and large vehicles, ensuring efficient loading and unloading.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
          What Sets Us Apart:
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Image */}
          <div className="flex-1">
            <Image
              src="/oog-7.jpg"
              alt="What Sets Us Apart"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
          {/* Right: Features */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customized Solutions for Every Shipment</h3>
              <p className="text-gray-700">
                We recognize that every OOG cargo shipment is unique. Whether it is an oversized turbine or a large construction vehicle, we design personalized transport solutions using the best equipment and methods to suit your cargo&apos;s needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Handling and Securing</h3>
              <p className="text-gray-700">
                We employ a team of skilled professionals who use the latest cargo securing techniques to ensure your OOG cargo is safe, stable, and properly loaded/unloaded. Our fleet includes heavy-lift cranes, lifting beams, and other specialized equipment for complex handling needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Access to Specialized Equipment</h3>
              <p className="text-gray-700">
                Our fleet includes a wide range of flat racks, open-top containers, and platform containers, allowing us to accommodate cargo that exceeds standard container dimensions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Route Planning and Compliance</h3>
              <p className="text-gray-700">
                Our logistics experts conduct route surveys and obtain all necessary permits to navigate height, width, and weight restrictions, ensuring your shipment moves smoothly without delays.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Logistics Network</h3>
              <p className="text-gray-700">
                With access to major transshipment hubs and leading shipping lines, we can ensure your cargo reaches its destination efficiently, no matter where in the world it&apos;s headed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End-to-End OOG Cargo Logistics Services Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              End-to-End OOG Cargo Logistics Services
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We provide complete logistics solutions to handle OOG cargo from start to finish:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Port Handling & Stevedoring</strong> - Safe loading, unloading, and storage at ports.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Customs Clearance & Documentation</strong> - We handle all paperwork, ensuring smooth cross-border transport.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Inland Transportation</strong> - Seamless delivery using heavy-duty trucks, modular trailers, and rail transport.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <div>
                  <strong className="text-gray-900">Final Delivery & Project Logistics</strong> - We manage delivery to construction sites, industrial zones, and remote project locations.
                </div>
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1">
            <Image
              src="/oog-8.jpg"
              alt="End-to-End OOG Cargo Logistics Services"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </div>



      {/* Reasons to Choose Section */}
      <div className="w-full max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
          Reasons to Choose Moon Navigation and Trading Co. For Your Out-Of-Gauge Transportation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image src="/icons/container/106.png" alt="Expert Route Planning" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Route Planning</h3>
            <p className="text-gray-700">Our team conducts detailed route surveys and feasibility studies to ensure safe and efficient transport for your out-of-gauge shipments.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image src="/icons/container/107.png" alt="Specialized Handling & Equipment" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Handling & Equipment</h3>
            <p className="text-gray-700">We utilize flat racks, open-top containers, heavy-lift cranes, and modular trailers to accommodate oversized cargo securely.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image src="/icons/container/108.png" alt="Customs & Regulatory Compliance" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customs & Regulatory Compliance</h3>
            <p className="text-gray-700">We handle all necessary permits, clearances, and documentation to ensure a smooth shipping process.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image src="/icons/container/109.png" alt="Global Network & Reliable Partnerships" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network & Reliable Partnerships</h3>
            <p className="text-gray-700">Strong connections with ports, carriers, and logistics providers enable seamless international and inland transportation.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <Image src="/icons/container/110.png" alt="Tailored Logistics Solutions" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailored Logistics Solutions</h3>
            <p className="text-gray-700">Every shipment is unique, and we provide customized transport plans to fit the size, weight, and special requirements of your cargo.</p>
          </div>
        </div>
      </div>

      <GetQuoteComponent topic="Out-of-Gauge Cargo" link="/out-gauge-forms" />
      <FAQSearch category="out-gauge" />
    </>
  );
}
