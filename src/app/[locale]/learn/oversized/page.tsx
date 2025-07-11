"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import OversizedCargoCarousel from "@/components/oversized-cargo-carousel";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";

export default function ShippingMethodsInfo() {

  return (
    <OverviewServicesTabs
      renderOverview={() => (
        <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0 w-full max-w-7xl mx-auto">
          {/* Top Banner - Wide Image with Large Rounded Corners */}
          <div className="w-full max-w-[1600px] rounded-[3rem] overflow-hidden mb-12" style={{ marginTop: 0 }}>
            <img
              src="/ov-1.jpg"
              alt="Oversized containers at port"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px]"
              style={{ borderRadius: '3rem', objectFit: 'cover' }}
            />
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16 px-2 md:px-0">
            {/* Left: Title and CTA */}
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-[2.5rem] md:text-[2.8rem] font-normal mb-8 text-primary" style={{fontFamily: 'Raleway, Montserrat, sans-serif', lineHeight: 1.1 }}>
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
              <h2 className="text-xl md:text-2xl font-normal mb-4 text-primary" style={{ fontFamily: 'Raleway, Montserrat, sans-serif' }}>
                What is Oversized Container?
              </h2>
              <p className="text-base md:text-lg text-foreground mb-2" style={{ fontFamily: 'Raleway, Montserrat, sans-serif', lineHeight: 1.6 }}>
                An oversized container is cargo that exceeds the standard dimensions of a conventional shipping container, requiring specialized transport solutions. These shipments are often too tall, wide, or heavy to fit within standard 20-foot or 40-foot containers and must be transported using flat racks, open-top containers, or platform containers.
              </p>
              <p className="text-base md:text-lg text-foreground" style={{ fontFamily: 'Raleway, Montserrat, sans-serif', lineHeight: 1.6 }}>
                At Moon Navigation and Trading Co., we specialize in handling oversized container shipments, offering expert cargo securing, route planning, and compliance management to ensure safe and efficient transport. With access to global shipping routes and specialized equipment, we provide tailored solutions for industries requiring the movement of large, heavy, or irregularly shaped cargo.
              </p>
            </div>
          </div>
        </div>
      )}
      renderServices={() => (
        <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0 w-full max-w-7xl mx-auto">
          {/* --- OVERSIZED CARGO CAROUSEL SECTION --- */}
          <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h2 className="text-[2.2rem] md:text-[2.5rem] font-normal mb-2 text-center" style={{ color: '#3B4B8C', fontFamily: 'Raleway, sans-serif', letterSpacing: 0 }}>
              Our Common Cargo for Oversized Containers
            </h2>
            <p className="text-[#888] mb-10 text-base md:text-lg max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Our oversized container services are designed to handle a wide range of large and irregularly shaped shipments, including but not limited to:
            </p>
            <OversizedCargoCarousel />
          </div>
          <div className="w-full max-w-7xl mx-auto mt-20">
            <h2 className="text-2xl md:text-3xl  text-center text-primary mb-8">
              Our Oversized Containers Solutions—At Moon Navigation and Trading Co.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Engineered for Heavy & Large Cargo - Image Left */}
              <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
                <img
                  src="/ov-2.jpg"
                  alt="Crane loading oversized cargo"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                  Engineered for Heavy & Large Cargo
                </h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">
                  At Moon Navigation and Trading Co., our oversized containers are designed to transport goods that exceed standard container dimensions or weight limits. These containers feature reinforced structures and enhanced loading capabilities, making them suitable for industrial, mining, and energy-sector cargo.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-center">
              {/* Versatile Loading Options - Image Right */}
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                  Versatile Loading Options
                </h3>
                <p className="text-muted-foreground mb-3 text-sm md:text-base">
                  Unlike standard containers, oversized containers allow for multiple loading configurations, including:
                </p>
                <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2 mb-4">
                  <li>
                    <span className="">Top Loading</span>: Ideal for gantry cranes to lift or vertically deposit heavy cargo.
                  </li>
                  <li>
                    <span className="">Side Loading</span>: Suitable for specialized lifting equipment or side entry, for easy, low-clearance access.
                  </li>
                  <li>
                    <span className="">End Loading</span>: Most effective for stacked materials such as trucks, excavators, and over-size sections.
                  </li>
                </ul>
              </div>
              <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
                <img
                  src="/ov-3.jpg"
                  alt="Side loader handling container"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Weather Protection & Secure Lashing - Image Left */}
            <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
              <img
                src="/ov-4.jpg"
                alt="Workers securing tarp over oversized cargo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                Weather Protection and Secure Lashing
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                At Moon Navigation and Trading Co., we secure open-top containers with durable, weatherproof tarpaulin covers, safeguarding cargo from rain, wind, and environmental elements. Our flat racks and platforms are designed with custom tie-down points, steel lashing rails, and locking mechanisms, ensuring maximum stability and security throughout transportation.
              </p>
            </div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Fully Customizable for Unique Cargo - Image Right */}
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                Fully Customizable for Unique Cargo
              </h3>
              <p className="text-muted-foreground mb-2 text-sm md:text-base">
                Our Oversized containers can be modified with specialized reinforcements, including:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2 mb-4">
                <li>Heavy-duty lashing slots for outsize cargo</li>
                <li>Additional support beams for enhanced structural stability</li>
                <li>Custom fittings for sensitive or irregular equipment</li>
                <li>Shock-absorbing materials to minimize vibration during transport</li>
              </ul>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
              <img
                src="/ov-5.jpg"
                alt="Workers planning oversized cargo loading"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Seamless Multimodal Transport Compatibility - Image Left */}
            <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
              <img
                src="/ov-6.jpg"
                alt="Workers loading oversized cargo onto a truck with a container crane"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                Seamless Multimodal Transport Compatibility
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                We design our oversized containers to integrate with multiple transport modes, including:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2 mb-4">
                <li>
                  <span className="">Ocean Freight</span>: Secure and custom-adapted stowage onto specialized flatbeds and breakbulk vessels.
                </li>
                <li>
                  <span className="">Rail Transport</span>: Flat-rack and flatbed solutions for high-clearance rail-based transportation.
                </li>
                <li>
                  <span className="">Trucking and Special Flatbeds</span>: Compatible with highway trailers, extendable flatbeds, and modular transporters for oversized road transport.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Reduced Handling Risks & Compliance Ready - Image Right */}
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                Reduced Handling Risks and Compliance Ready
              </h3>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                With our built-in safety features, standardized lifting points, and reinforced structures, oversized containers minimize handling risks while ensuring compliance with IMO, SOLAS, and international shipping regulations.
              </p>
            </div>
            <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
              <img
                src="/ov-7.jpg"
                alt="Warehouse workers moving oversized cargo with pallet jack"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
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
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Cargo Type</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Heavy, irregular, and overlength goods</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">General dry cargo</td>
                  </tr>
                  <tr className="/50">
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Loading Method</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Open side or top loading</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Front loading only</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Enclosure</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Open type or open-sided</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Fully enclosed</td>
                  </tr>
                  <tr className="/50">
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Weight Capacity</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Up to 45+ tons (varies)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Up to 30+ tons (varies)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Stackability</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Limited stacking</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Fully stackable</td>
                  </tr>
                  <tr className="/50">
                    <td className="px-4 py-3 text-foreground border-r text-center">Common Use</td>
                    <td className="px-4 py-3 text-foreground border-r text-center">Machinery, construction, and project cargo</td>
                    <td className="px-4 py-3 text-foreground border-r text-center">Retail, consumer goods, general freight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* --- LIMITS TABLE SECTION --- */}
          <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <h2 className="text-2xl md:text-2xl  text-left text-primary mb-6">
              Limits for Our Oversized Cargo & Specialized Containers
            </h2>
            <div className="overflow-x-auto shadow">
              <table className="min-w-full border border-border bg-background text-sm">
                <thead>
                  <tr className="">
                    <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center ">Container Type</th>
                    <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center">Max Length</th>
                    <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center">Max Width</th>
                    <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center">Max Height</th>
                    <th className="px-4 py-3 border-b border-border text-left  text-primary border-r text-center">Max Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Flat Rack (20')</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">5.94m (19.5 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">2.40m (7.9 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed height</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">~45,000 kg</td>
                  </tr>
                  <tr className="/50">
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Flat Rack (40')</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">12.05m (39.5 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">2.40m (7.9 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed height</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">~45,000 kg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Open Top (20')</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">5.9m (19.4 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">2.35m (7.7 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Up to 2.70m (8.9 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">~28,000 kg</td>
                  </tr>
                  <tr className="/50">
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Open Top (40')</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">12.03m (39.4 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">2.35m (7.7 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Up to 2.95m (9.7 ft)</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">~26,000 kg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Platform (20')</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed limit</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed limit</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Up to 50,000 kg</td>
                  </tr>
                  <tr className="/50">
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Platform (40')</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed limit</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed limit</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">No fixed limit</td>
                    <td className="px-4 py-3 border-b border-border text-foreground border-r text-center">Up to 50,000 kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-2">
              Cargo exceeding these limits will require breakbulk shipping, modular transport, or specialized heavy-lift solutions.<br />
              <span className=""><a href="/contact" className="underline text-primary hover:text-primary/80">Let us know</a></span> if you need a tailored explanation for a specific cargo type!
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
              <img
                src="/ov-8.jpg"
                alt="Workers discussing oversized container logistics"
                className="rounded-3xl object-cover w-[320px] h-[180px] md:w-[380px] md:h-[210px] shadow"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Right: Text Content */}
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl  text-primary mb-2">
                Enhance Your Oversized Container Shipment<br className="hidden md:block" /> with Our Additional Services
              </h2>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                At Moon Navigation and Trading Co., we understand the challenges of transporting oversized cargo. When booking your oversized container shipment with us, you gain access to specialized logistics services designed to streamline your supply chain.
              </p>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Our door-to-door delivery services address everything from pickup to final destination, with expert coordination to manage route planning, permits, and secure transport. Our customs clearance specialists ensure regulatory compliance, enabling smooth cross-border movement and alignment with global trade requirements.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                For all your oversized loading and portside shipping solutions, enjoy real-time transit tracking, risk-free maneuverability, and efficiency. Our team elevates service by providing continuous monitoring, direct routing, and end-to-end logistics support to keep your oversized cargo moving without delays.
              </p>
            </div>
          </div>
          <GetQuoteComponent topic="oversized-cargo" link="/container-services-forms"/>
          <FAQSearch category="oversized-container-shipping" /> 
        </div>
      )}
    />
  );
}
