"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Metadata } from "next";
import FAQSearch from "@/components/faq";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

// SEO Metadata for Next.js 13+ App Router


function overview() {
  const locale = useLocale();
  return (
    <>
      {/* --- HERO IMAGE --- */}
      <img
        src="/rorotitleimage.jpg"
        alt="RoRo Cargo Handling"
        className="w-full h-[400px] object-cover rounded-[60px] mt-4"
        style={{ maxHeight: 420 }}
      />
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto mt-20 mb-24 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left: Title, Subtitle, Button */}
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl font-normal text-[#222] dark:text-white font-sans mb-2 leading-tight">
              Roll on/roll off
            </h1>
            <div className="text-[#3846a5] dark:text-blue-400 text-lg mb-8 font-normal font-sans">
              (RORO)
            </div>
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </div>
          {/* Right: Heading and Description */}
          <div className="flex-1">
            <h2 className="text-xl font-normal mb-4 text-[#3846a5] dark:text-blue-400 font-sans">
              What is Roll on and Roll off (RORO)?
            </h2>
            <p className="text-sm leading-relaxed text-[#444] dark:text-gray-300 font-sans mb-4">
              Roll-on Roll-off (RoRo) ships are specialized vessels designed for the efficient transportation of wheeled cargo, allowing vehicles to be driven directly on and off the ship without the need for cranes or heavy lifting equipment. This innovative method of cargo handling is ideal for transporting a variety of vehicles, including cars, trucks, buses, construction machinery, and trailers.
            </p>
            <p className="text-sm leading-relaxed text-[#444] dark:text-gray-300 font-sans">
              At Moon Navigation And Trading Co., we pride ourselves on providing reliable and professional shipping solutions tailored to meet your logistics needs. Our expertise in RoRo transportation ensures that your cargo is handled with the utmost care and delivered safely and efficiently to its destination.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function services() {
  return (
    <>
      {/* --- SPACE BETWEEN SECTIONS --- */}
      <div className="h-12" />

      {/* --- STREAMLINED RORO SOLUTIONS SECTION --- */}
      <section className="max-w-7xl mx-auto mb-16 px-4 md:px-0">
        <h2 className="text-3xl font-normal mb-12 text-left text-[#222] dark:text-white font-sans">
          Our Streamlined RoRo Solutions: Efficient Transportation for Wheeled Cargo
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Image and Button */}
          <div className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-[420px]">
            <Image
              src="/roroheroimage.jpg"
              alt="RoRo Cargo Handling"
              width={420}
              height={350}
              className="rounded-[48px] object-cover w-full h-[440px] mb-6"
              loading="lazy"
            />
            <div className="w-full flex justify-center md:justify-start">
              <RequestQuoteButton >
                <Link href="/learn/roll/learn-more">
                  Learn more about our RORO cargo solutions
                </Link>
              </RequestQuoteButton>
            </div>
            </div>
          {/* Right: Text Grid */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Our Cargo Handling */}
              <div>
                <h3 className="text-base font-bold mb-2 text-[#222] dark:text-white font-sans">
                  Our Cargo Handling
                </h3>
                <p className="text-sm leading-relaxed text-[#444] dark:text-gray-300 font-sans">
                  Our RoRo ships are expertly engineered for the seamless loading and unloading of wheeled cargo, allowing vehicles to roll on and off with ease. Using specialized ramps at the port, cargo is efficiently driven or towed onto the vessel and smoothly discharged upon arrival, ensuring a fast and efficient transport process.
                </p>
              </div>
              {/* The Design */}
              <div>
                <h3 className="text-base font-bold mb-2 text-[#222] dark:text-white font-sans">
                  The Design
                </h3>
                <p className="text-sm leading-relaxed text-[#444] dark:text-gray-300 font-sans">
                  Our RoRo ships, featuring expansive flat decks or multiple levels, are specifically designed to transport a wide range of wheeled vehicles. With strategically placed ramps at both the bow and stern, they enable seamless, efficient loading and unloading, ensuring swift and secure cargo movement.
                </p>
              </div>
            </div>
            {/* Cargo Types - spans both columns */}
            <div className="mt-2">
              <h3 className="text-base font-bold mb-2 text-[#222] dark:text-white font-sans">
                Cargo Types
              </h3>
              <p className="text-sm leading-relaxed text-[#444] dark:text-gray-300 font-sans mb-2">
                Our RoRo vessels are engineered for the seamless transportation of a wide range of vehicles, including cars, trucks, and heavy machinery. Designed for efficiency and safety, they ensure smooth loading, secure transit, and timely delivery.
              </p>
              <p className="text-sm leading-relaxed text-[#444] dark:text-gray-300 font-sans">
                Beyond standard automobiles, our fleet accommodates oversized equipment, construction vehicles, and specialized rolling stock such as trains, railway cars, trailers, and buses. With select vessels tailored for diverse wheeled cargo, we provide a reliable and comprehensive RoRo shipping solution to meet your unique logistics needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Maximizing Efficiency in Our RoRo Shipping Section */}
      <section className="max-w-[1600px] mx-auto mb-16 px-4 md:px-0 flex flex-col md:flex-row items-center gap-8 md:gap-0 relative min-h-[700px]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center md:pr-12 z-10">
          <h2 className="text-3xl font-normal mb-2 text-[#222] dark:text-white text-left font-sans">
            Maximizing Efficiency in Our RoRo Shipping
          </h2>
          <h3 className="text-lg font-bold mb-8 text-[#3846a5] dark:text-blue-400 text-left font-sans">
            Delivering Speed, Cost-Effectiveness, and Reliability for Your Cargo Needs
          </h3>
          <div className="space-y-6 text-base leading-relaxed text-[#444] dark:text-gray-300 font-sans">
            <p>We leverage the numerous benefits of RoRo shipping to optimize your logistics experience. </p>
            <p>Our operations significantly reduce cargo handling time compared to traditional crane methods, ensuring swift and efficient transport. By eliminating the need for heavy-lifting equipment, we provide a cost-effective solution for transporting vehicles and similar cargo. Additionally, our approach minimizes handling, reducing the risk of damage, and ensuring your cargo arrives in excellent condition.</p>
            <p>We frequently utilize our RoRo vessels for automobile transportation, facilitating seamless shipping from manufacturing plants to global markets. </p>
            <p>Our services are also ideal for project cargo, adeptly handling large and self-propelled machinery or equipment. Furthermore, our RoRo vessels are strategically deployed on essential trade routes, ensuring quick loading and unloading.</p>
            <p>Trust us to deliver unparalleled efficiency and reliability for all your RoRo shipping needs.</p>
          </div>
        </div>
        {/* Right: Image with Geometric Accent */}
        <div className="flex-1 flex justify-center items-center relative min-h-[350px] md:min-h-[420px]">
          {/* Geometric Accent */}
          {/* Main Image */}
          <div className="relative z-10 w-full max-w-[500px]">
            <Image
              src="/roroCargoImage.jpg"
              alt="Moon Navigation employee checking RoRo cargo"
              width={420}
              height={350}
              className="object-cover w-full h-[520px] shadow-lg object-[30%_70%] rounded-[60px]"
              loading="lazy"
            />
            {/* Bottom Accent */}
            
        </div>
        </div>
      </section>

      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-[520px] flex justify-center md:justify-start items-center">
            <img
              src="/roroCarsImage.jpg"
              alt="Cars getting off a Moon Navigation RoRo ship"
              width={520}
              height={340}
              className="rounded-[48px] object-cover w-[420px] h-[320px] md:w-[520px] md:h-[340px] shadow-lg"
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 min-w-[260px] font-sans">
            <p className="text-base leading-relaxed text-[#444] dark:text-gray-300 mb-6">
              At Moon Navigation And Trading Co., our RoRo shipping process is designed to ensure the safe and efficient transport of your cargo. Loading begins with vehicles or cargo being driven onto the RoRo ship via strategically positioned ramps at the front or rear of the vessel. Once on board, we secure the cargo on the decks using straps, chocks, and other reliable securing methods to guarantee stability during transit. As the ship makes its journey to the destination port, you can rest assured that your cargo is safely secured. Upon arrival, the unloading process is equally seamless, as vehicles and equipment are driven off the ship using the same ramps, ensuring a smooth transition from ship to shore.
            </p>
            <p className="text-base leading-relaxed text-[#444] dark:text-gray-300 font-sans">
              With our attention to detail and commitment to excellence, we provide a comprehensive RoRo shipping experience that prioritizes the safety and reliability of cargo. -Whenever and wherever you need to trust
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-2xl md:text-4xl font-normal text-center mb-16 text-[#222] dark:text-white font-sans">
          Reasons to Choose Us for Your RORO Cargo
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">
          <div className="w-full flex flex-col md:flex-row justify-center gap-12">
            {/* First row: 3 reasons */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs">
              <img src="/icons/23.png" alt="Efficiency & Reliability" className="mb-8 h-20 w-20 object-contain" />
              <div className="font-bold text-base text-[#222] dark:text-white font-sans mb-2">Efficiency & Reliability</div>
              <div className="text-base text-[#444] dark:text-gray-300 font-sans">Fast, secure, and dependable shipping services for wheeled cargo.</div>
            </div>
            <div className="flex-1 flex flex-col items-center text-center max-w-xs">
              <img src="/icons/22.png" alt="Expert Handling" className="mb-8 h-20 w-20 object-contain" />
              <div className="font-bold text-base text-[#222] dark:text-white font-sans mb-2">Expert Handling</div>
              <div className="text-base text-[#444] dark:text-gray-300 font-sans">Smooth roll-on/roll-off loading and unloading, minimizing handling risks and transit time.</div>
            </div>
            <div className="flex-1 flex flex-col items-center text-center max-w-xs">
              <img src="/icons/24.png" alt="Secure & Cost-Effective Transport" className="mb-8 h-20 w-20 object-contain" />
              <div className="font-bold text-base text-[#222] dark:text-white font-sans mb-2">Secure & Cost-Effective Transport</div>
              <div className="text-base text-[#444] dark:text-gray-300 font-sans">Optimized solutions ensuring safe stowage, reduced costs, and fast transit times.</div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-12">
            {/* Second row: 2 reasons */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs">
              <img src="/icons/25.png" alt="Global Connectivity" className="mb-8 h-20 w-20 object-contain" />
              <div className="font-bold text-base text-[#222] dark:text-white font-sans mb-2">Global Connectivity</div>
              <div className="text-base text-[#444] dark:text-gray-300 font-sans">Strong partnerships with major RORO carriers and ports worldwide for reliable shipping routes.</div>
            </div>
            <div className="flex-1 flex flex-col items-center text-center max-w-xs">
              <img src="/icons/26.png" alt="Expert Compliance & Support" className="mb-8 h-20 w-20 object-contain" />
              <div className="font-bold text-base text-[#222] dark:text-white font-sans mb-2">Expert Compliance & Support</div>
              <div className="text-base text-[#444] dark:text-gray-300 font-sans">Dedicated assistance in customs clearance, documentation, and regulatory requirements.</div>
            </div>
          </div>
        </div>
      </section>
      <GetQuoteComponent topic="RORO" link="/ocean-freight-forms" />
      <FAQSearch category="ro-ro-shipping" />
    </>
  );
}

export default function RollOnOffHero() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}