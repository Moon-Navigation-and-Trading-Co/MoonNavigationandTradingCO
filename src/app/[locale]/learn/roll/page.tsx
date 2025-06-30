import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Metadata } from "next";

// SEO Metadata for Next.js 13+ App Router
export const metadata: Metadata = {
  title: "Roll-on/Roll-off (RORO) Shipping | Moon Navigation and Trading Co.",
  description:
    "Discover efficient, secure, and cost-effective Roll-on/Roll-off (RORO) shipping solutions for vehicles, heavy machinery, and wheeled cargo. Learn about our global RoRo services, streamlined cargo handling, and get a fast quote today.",
  keywords: [
    "RoRo shipping",
    "roll-on roll-off",
    "RORO cargo",
    "vehicle shipping",
    "heavy machinery transport",
    "wheeled cargo",
    "ocean freight",
    "Moon Navigation and Trading Co.",
    "global shipping",
    "freight quote",
    "oversized cargo",
    "project cargo",
    "international shipping",
    "secure transport",
    "cost-effective shipping"
  ],
  openGraph: {
    title: "Roll-on/Roll-off (RORO) Shipping | Moon Navigation and Trading Co.",
    description:
      "Efficient, secure, and cost-effective RoRo shipping for vehicles, machinery, and wheeled cargo. Get a quote for global RoRo transport solutions.",
    url: "https://www.moonnavigation.com/learn/roll",
    type: "website",
    images: [
      {
        url: "/roroheroimage.jpg",
        width: 1200,
        height: 630,
        alt: "RoRo Cargo Handling"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Roll-on/Roll-off (RORO) Shipping | Moon Navigation and Trading Co.",
    description:
      "Efficient, secure, and cost-effective RoRo shipping for vehicles, machinery, and wheeled cargo. Get a quote for global RoRo transport solutions.",
    images: ["/roroheroimage.jpg"]
  },
  alternates: {
    canonical: "/learn/roll"
  }
};

import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
export default function RollOnOffHero() {
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
            <h1 className="text-5xl font-normal text-[#222] font-sans mb-2 leading-tight">
              Roll on/roll off
            </h1>
            <div className="text-[#3846a5] text-xl mb-8 font-normal font-sans">
              (RORO)
            </div>
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </div>
          {/* Right: Heading and Description */}
          <div className="flex-1">
            <h2 className="text-2xl font-normal mb-4 text-[#3846a5] font-sans">
              What is Roll on and Roll off (RORO)?
            </h2>
            <p className="text-base leading-relaxed text-[#444] font-sans mb-4">
              Roll-on Roll-off (RoRo) ships are specialized vessels designed for the efficient transportation of wheeled cargo, allowing vehicles to be driven directly on and off the ship without the need for cranes or heavy lifting equipment. This innovative method of cargo handling is ideal for transporting a variety of vehicles, including cars, trucks, buses, construction machinery, and trailers.
            </p>
            <p className="text-base leading-relaxed text-[#444] font-sans">
              At Moon Navigation And Trading Co., we pride ourselves on providing reliable and professional shipping solutions tailored to meet your logistics needs. Our expertise in RoRo transportation ensures that your cargo is handled with the utmost care and delivered safely and efficiently to its destination.
            </p>
          </div>
        </div>
      </section>

      {/* --- SPACE BETWEEN SECTIONS --- */}
      <div className="h-12" />

      {/* --- STREAMLINED RORO SOLUTIONS SECTION --- */}
      <section className="max-w-7xl mx-auto mb-16 px-4 md:px-0">
        <h2 className="text-4xl font-normal mb-12 text-left text-[#222] font-sans">
          Our Streamlined RoRo Solutions: Efficient Transportation for Wheeled Cargo
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Image and Button */}
          <div className="flex flex-col items-center md:items-start flex-shrink-0 w-full md:w-[420px]">
            <Image
              src="/roroheroimage.jpg"
              alt="RoRo Cargo Handling"
              width={420}
              height={320}
              className="rounded-[48px] object-cover w-full h-[340px] mb-6"
              loading="lazy"
            />
            <div className="w-full flex justify-center md:justify-start">
              <RequestQuoteButton>
                Learn More About Our RORO Cargo Solutions
              </RequestQuoteButton>
            </div>
          </div>
          {/* Right: Text Grid */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Our Cargo Handling */}
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#222] font-sans">
                  Our Cargo Handling
                </h3>
                <p className="text-base leading-relaxed text-[#444] font-sans">
                  Our RoRo ships are expertly engineered for the seamless loading and unloading of wheeled cargo, allowing vehicles to roll on and off with ease. Using specialized ramps at the port, cargo is efficiently driven or towed onto the vessel and smoothly discharged upon arrival, ensuring a fast and efficient transport process.
                </p>
              </div>
              {/* The Design */}
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#222] font-sans">
                  The Design
                </h3>
                <p className="text-base leading-relaxed text-[#444] font-sans">
                  Our RoRo ships, featuring expansive flat decks or multiple levels, are specifically designed to transport a wide range of wheeled vehicles. With strategically placed ramps at both the bow and stern, they enable seamless, efficient loading and unloading, ensuring swift and secure cargo movement.
                </p>
              </div>
            </div>
            {/* Cargo Types - spans both columns */}
            <div className="mt-2">
              <h3 className="text-lg font-bold mb-2 text-[#222] font-sans">
                Cargo Types
              </h3>
              <p className="text-base leading-relaxed text-[#444] font-sans mb-2">
                Our RoRo vessels are engineered for the seamless transportation of a wide range of vehicles, including cars, trucks, and heavy machinery. Designed for efficiency and safety, they ensure smooth loading, secure transit, and timely delivery.
              </p>
              <p className="text-base leading-relaxed text-[#444] font-sans">
                Beyond standard automobiles, our fleet accommodates oversized equipment, construction vehicles, and specialized rolling stock such as trains, railway cars, trailers, and buses. With select vessels tailored for diverse wheeled cargo, we provide a reliable and comprehensive RoRo shipping solution to meet your unique logistics needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Maximizing Efficiency in Our RoRo Shipping Section */}
      <section className="max-w-[1400px] mx-auto mb-16 px-4 md:px-0 flex flex-col md:flex-row items-center gap-8 md:gap-0 relative min-h-[500px]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center md:pr-12 z-10">
          <h2 className="text-4xl font-normal mb-2 text-[#222] text-left font-sans">
            Maximizing Efficiency in Our RoRo Shipping
          </h2>
          <h3 className="text-lg font-bold mb-8 text-[#3846a5] text-left font-sans">
            Delivering Speed, Cost-Effectiveness, and Reliability for Your Cargo Needs
          </h3>
          <div className="space-y-6 text-base leading-relaxed text-[#444] font-sans">
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
          <div className="hidden md:block absolute -top-10 right-0 w-[340px] h-[80px] bg-[#2d3973] z-0 rotate-3" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }} />
          {/* Main Image */}
          <div className="relative z-10 w-full max-w-[420px]">
            <Image
              src="/roroCargoImage.jpg"
              alt="Moon Navigation employee checking RoRo cargo"
              width={420}
              height={320}
              className="rounded-2xl object-cover w-full h-[320px] shadow-lg"
              loading="lazy"
            />
            {/* Bottom Accent */}
            <div className="hidden md:block absolute -bottom-8 left-8 w-[320px] h-[40px] bg-[#2d3973] z-0 -rotate-2" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }} />
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
            <p className="text-base leading-relaxed text-[#444] mb-6">
              At Moon Navigation And Trading Co., our RoRo shipping process is designed to ensure the safe and efficient transport of your cargo. Loading begins with vehicles or cargo being driven onto the RoRo ship via strategically positioned ramps at the front or rear of the vessel. Once on board, we secure the cargo on the decks using straps, chocks, and other reliable securing methods to guarantee stability during transit. As the ship makes its journey to the destination port, you can rest assured that your cargo is safely secured. Upon arrival, the unloading process is equally seamless, as vehicles and equipment are driven off the ship using the same ramps, ensuring a smooth transition from ship to shore.
            </p>
            <p className="text-base leading-relaxed text-[#444] font-sans">
              With our attention to detail and commitment to excellence, we provide a comprehensive RoRo shipping experience that prioritizes the safety and reliability of cargo. -Whenever and wherever you need to trust
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-2xl md:text-4xl font-normal text-center mb-16 text-[#222] font-sans">
          Reasons to Choose Us for Your RORO Cargo
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8 px-4 md:px-0">
          {/* Row 1 */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-base text-[#222] font-sans mb-2">Efficiency & Reliability</h3>
            <p className="text-base text-[#444] font-sans">Fast, secure, and dependable shipping services for wheeled cargo.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-base text-[#222] font-sans mb-2">Expert Handling</h3>
            <p className="text-base text-[#444] font-sans">Smooth roll-on/roll-off loading and unloading, minimizing handling risks and transit time.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-base text-[#222] font-sans mb-2">Secure & Cost-Effective Transport</h3>
            <p className="text-base text-[#444] font-sans">Optimized solutions ensuring safe stowage, reduced costs, and fast transit times.</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-8 mt-20 px-4 md:px-0">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-base text-[#222] font-sans mb-2">Global Connectivity</h3>
            <p className="text-base text-[#444] font-sans">Strong partnerships with major RORO carriers and ports worldwide for reliable shipping routes.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-base text-[#222] font-sans mb-2">Expert Compliance & Support</h3>
            <p className="text-base text-[#444] font-sans">Dedicated assistance in customs clearance, documentation, and regulatory requirements.</p>
          </div>
        </div>
      </section>
      <GetQuoteComponent topic="RORO" link="/ocean-freight-forms" />
    </>
  );
}