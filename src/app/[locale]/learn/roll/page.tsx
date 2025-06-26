import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { Metadata } from "next";
import React from "react";

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

export default function RollOnOffHero() {
  const locale = useLocale();

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="max-w-6xl mx-auto mt-10 mb-24 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left: Title, Subtitle, Button */}
          <div className="flex-1 flex flex-col items-start">
            <h1
              className="text-[2rem] md:text-[2.5rem] font-light text-[#23294d] mb-1 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Roll on/roll off
            </h1>
            <div
              className="text-[#3b4cc0] text-lg mb-8 font-normal"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              (RORO)
            </div>
            <Button
              asChild
              className="rounded-full px-6 py-2 text-sm font-semibold bg-[#23294d] text-white hover:bg-[#3b4cc0] transition-colors mb-0"
            >
              <Link href={`/${locale}/ocean-freight-forms`}>Request a Quote</Link>
            </Button>
          </div>
          {/* Right: Heading and Description */}
          <div className="flex-1">
            <h2
              className="text-[1.15rem] font-semibold text-[#23294d] mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              What is Roll on and Roll off (RORO)?
            </h2>
            <p
              className="text-xs text-[#23294d] mb-2 leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Roll-on Roll-off (RoRo) ships are specialized vessels designed for the efficient transportation
              of wheeled cargo, allowing vehicles to be driven directly on and off the ship without the need
              for cranes or heavy lifting equipment. This innovative method of cargo handling is ideal for
              transporting a variety of vehicles, including cars, trucks, buses, construction machinery, and
              trailers.
            </p>
            <p
              className="text-xs text-[#23294d] leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              At Moon Navigation And Trading Co., we pride ourselves on providing reliable and
              professional shipping solutions tailored to meet your logistics needs. Our expertise in RoRo
              transportation ensures that your cargo is handled with the utmost care and delivered safely
              and efficiently to its destination.
            </p>
          </div>
        </div>
      </section>

      {/* --- SPACE BETWEEN SECTIONS --- */}
      <div className="h-12" />

      {/* --- STREAMLINED RORO SOLUTIONS SECTION --- */}
      <section className="max-w-6xl mx-auto mb-16 px-4 md:px-0">
        <h2
          className="text-xl md:text-2xl font-semibold text-[#23294d] mb-8 text-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Our Streamlined RoRo Solutions: Efficient Transportation for Wheeled Cargo
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[340px]">
            <Image
              src="/roroheroimage.jpg"
              alt="RoRo Cargo Handling"
              width={340}
              height={220}
              className="rounded-2xl object-cover w-full h-[220px]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              loading="lazy"  
            />
            <Button
              asChild
              className="rounded-full px-6 py-2 text-sm font-semibold bg-[#23294d] text-white hover:bg-[#3b4cc0] transition-colors mt-6"
            >
              <Link href={`/${locale}/ocean-freight-forms`}>
                Learn More About Our RORO Cargo Solutions
              </Link>
            </Button>
          </div>
          {/* Right: Three Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Column 1 */}
            <div>
              <h3
                className="text-base font-semibold mb-2 text-[#23294d]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our Cargo Handling
              </h3>
              <p
                className="text-xs text-[#23294d] leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our RoRo ships are expertly engineered for the
                seamless loading and unloading of wheeled cargo,
                allowing vehicles to roll on and off with ease. Using
                specialized ramps at the port, cargo is efficiently driven
                or towed onto the vessel and smoothly discharged
                upon arrival, ensuring a fast and efficient transport
                process.
              </p>
            </div>
            {/* Column 2 */}
            <div>
              <h3
                className="text-base font-semibold mb-2 text-[#23294d]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                The Design
              </h3>
              <p
                className="text-xs text-[#23294d] leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our RoRo ships, featuring expansive flat decks or
                multiple levels, are specifically designed to transport a
                wide range of wheeled vehicles. With strategically
                placed ramps at both the bow and stern, they enable
                seamless, efficient loading and unloading, ensuring
                swift and secure cargo movement.
              </p>
            </div>
            {/* Column 3 */}
            <div>
              <h3
                className="text-base font-semibold mb-2 text-[#23294d]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Cargo Types
              </h3>
              <p
                className="text-xs text-[#23294d] leading-relaxed mb-2"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Our RoRo vessels are engineered for the seamless transportation of a wide range of vehicles, including cars,
                trucks, and heavy machinery. Designed for efficiency and safety, they ensure smooth loading, secure transit,
                and timely delivery.
              </p>
              <p
                className="text-xs text-[#23294d] leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Beyond standard automobiles, our fleet accommodates oversized equipment, construction vehicles, and
                specialized rolling stock such as trains, railway cars, trailers, and buses. With select vessels tailored for diverse
                wheeled cargo, we provide a reliable and comprehensive RoRo shipping solution to meet your unique logistics
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Maximizing Efficiency in Our RoRo Shipping Section */}
      <section className="max-w-[1400px] mx-auto mb-16 px-4 md:px-0 flex flex-col md:flex-row items-center gap-8 md:gap-0 relative min-h-[500px]">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center md:pr-12 z-10">
          <h2 className="text-3xl md:text-4xl font-semibold  mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Maximizing Efficiency in Our RoRo Shipping
          </h2>
          <h3 className="text-base md:text-lg font-semibold  mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Delivering Speed, Cost-Effectiveness, and Reliability for Your Cargo Needs
          </h3>
          <div className="space-y-5 text-[#23294d] text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p>We leverage the numerous benefits of RoRo shipping to optimize your logistics experience.</p>
            <p>Our operations significantly reduce cargo handling time compared to traditional crane methods, ensuring swift and efficient transport. By eliminating the need for heavy-lifting equipment, we provide a cost-effective solution for transporting vehicles and similar cargo. Additionally, our approach minimizes handling, reducing the risk of damage, and ensuring your cargo arrives in excellent condition.</p>
            <p>We frequently utilize our RoRo vessels for automobile transportation, facilitating seamless shipping from manufacturing plants to global markets.</p>
            <p>Our services are also ideal for project cargo, adeptly handling large and self-propelled machinery or equipment. Furthermore, our RoRo vessels are strategically deployed on essential trade routes, ensuring quick loading and unloading.</p>
            <p>Trust us to deliver unparalleled efficiency and reliability for all your RoRo shipping needs.</p>
          </div>
        </div>
        {/* Right: Image with Geometric Accent */}
        <div className="flex-1 flex justify-center items-center relative min-h-[350px] md:min-h-[420px]">
          {/* Geometric Accent */}
          <div className="hidden md:block absolute -top-10 right-0 w-[340px] h-[80px] bg-[#23294d] z-0 rotate-3" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }} />
          {/* Main Image */}
          <div className="relative z-10 w-full max-w-[420px]">
            <Image
              src="/roroCargoImage.jpg"
              alt="Moon Navigation employee checking RoRo cargo"
              width={420}
              height={320}
              className="rounded-2xl object-cover w-full h-[320px] shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              loading="lazy"
            />
            {/* Bottom Accent */}
            <div className="hidden md:block absolute -bottom-8 left-8 w-[320px] h-[40px] bg-[#23294d] z-0 -rotate-2" style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }} />
          </div>
        </div>
      </section>

      <section className="flex">
        <div className="relative z-10 w-full max-w-[420px] mr-40 ">
          <Image
            src="/roroCargoImage.jpg"
            alt="Cars getting off a Moon Navigation RoRo ship"
            width={420}
            height={320}
            className="rounded-2xl object-cover w-full h-[320px] shadow-lg"
            style={{ fontFamily: 'Montserrat, sans-serif', marginRight: '50px' }}
            loading="lazy"
          />
        </div>
        <div>
          <p>
            At Moon Navigation And Trading Co., our RoRo shipping process is designed to
            ensure the safe and efficient transport of your cargo. Loading begins with vehicles or
            cargo being driven onto the RoRo ship via strategically positioned ramps at the front
            or rear of the vessel Once on board, we secure the cargo on the decks using straps
            chocks, and other reliable securing methods to guarantee stability during transit. As
            the ship makes its journey to the destination port, you can rest assured that your
            cargo is safely secured. Upon arrival, the unloading process is equally seamless, as
            vehicles and equipment are driven off the ship using the same ramps, ensuring a
            smooth transition from ship to shore.
          </p>
          <br />
          <p>
            With our attention to detail and commitment to excellence, we provide a
            comprehensive RoRo shipping experience that prioritizes the safety and reliability of
            cargo.-Whenever and wherever you need to trust
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Reasons to Choose Us for Your RORO Cargo
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 px-4 md:px-0">
          {/* Row 1 */}
          <div className="flex flex-col items-center text-center">
            {/* Icon */}
            <svg width="48" height="48" fill="none" stroke="#3b4cc0" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" /><path d="M8 13l3 3 5-5" /></svg>
            <h3 className="font-semibold mt-6 mb-2 text-base">Efficiency & Reliability</h3>
            <p className="text-sm text-gray-600">Fast, secure, and dependable shipping services for wheeled cargo.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg width="48" height="48" fill="none" stroke="#3b4cc0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            <h3 className="font-semibold mt-6 mb-2 text-base">Expert Handling</h3>
            <p className="text-sm text-gray-600">Smooth roll-on/roll-off loading and unloading, minimizing handling risks and transit time.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg width="48" height="48" fill="none" stroke="#3b4cc0" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16v2m0 8v2m-4-4h2m8 0h2" /></svg>
            <h3 className="font-semibold mt-6 mb-2 text-base">Secure & Cost-Effective Transport</h3>
            <p className="text-sm text-gray-600">Optimized solutions ensuring safe stowage, reduced costs, and fast transit times.</p>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col items-center text-center md:col-start-2">
            <svg width="48" height="48" fill="none" stroke="#3b4cc0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2v20" /></svg>
            <h3 className="font-semibold mt-6 mb-2 text-base">Global Connectivity</h3>
            <p className="text-sm text-gray-600">Strong partnerships with major RORO carriers and ports worldwide for reliable shipping routes.</p>
          </div>
          <div className="flex flex-col items-center text-center md:col-start-3">
            <svg width="48" height="48" fill="none" stroke="#3b4cc0" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="4" /></svg>
            <h3 className="font-semibold mt-6 mb-2 text-base">Expert Compliance & Support</h3>
            <p className="text-sm text-gray-600">Dedicated assistance in customs clearance, documentation, and regulatory requirements.</p>
          </div>
        </div>
      </section>




      <section className="w-full py-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#3b4cc0] mb-16 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Our RORO Solutions—At Moon Navigation and Trading Co.
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              1. RoRo Vessel Operations
            </h3>
            <p className="text-[#3b4cc0] text-sm md:text-base mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We offer state-of-the-art RoRo vessels equipped with specialized ramps and cargo decks to accommodate a wide range of rolling cargo.
            </p>
            <ul className="text-[#23294d] text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Cargo Loading & Unloading—</span>
                Seamless roll-on and roll-off operations for quick turnaround.
              </li>
              <li>
                <span className="font-semibold">Dedicated RoRo Vessels—</span>
                modern vessels designed specifically for wheeled cargo.
              </li>
              <li>
                <span className="font-semibold">Safety & Securing—</span>
                Cargo tied down and secured to ensure safe transport.
              </li>
              <li>
                <span className="font-semibold">Port-to-Port & Door-to-Door Solutions—</span>
                Tailored solutions for your specific needs.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-end items-start">
            <img
              src="/roro-vessel-operations.jpg"
              alt="RoRo vessel operations"
              className="rounded-2xl object-cover w-[420px] h-[220px] md:w-[480px] md:h-[240px] shadow-lg"
              style={{ maxWidth: 480 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* --- Heavy & Oversized Cargo Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/roroBulldozer.jpg"
              alt="Heavy and oversized cargo"
              className="rounded-2xl object-cover w-[420px] h-[220px] md:w-[480px] md:h-[240px] shadow-lg"
              style={{ maxWidth: 480 }}
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              2. Heavy &amp; Oversized Cargo
            </h3>
            <a
              className="text-[#3b4cc0] text-sm md:text-base mb-4 block "
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              For heavy or oversized equipment, our RoRo services provide a cost-effective and flexible shipping solution.
            </a>
            <ul className="text-[#23294d] text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Machinery &amp; Equipment—</span>
                Transporting construction machinery, mining equipment, and large vehicles.
              </li>
              <li>
                <span className="font-semibold">Specialized Transport—</span>
                Handling oversized and over-dimensional cargo with precision.
              </li>
              <li>
                <span className="font-semibold">Loading/Unloading Assistance—</span>
                On-site equipment to safely load and unload heavy items.
              </li>
              <li>
                <span className="font-semibold">Custom Solutions—</span>
                Tailored handling for every type of heavy cargo.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Vehicle Transport Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              3. Vehicle Transport
            </h3>
            <a
              className="text-[#3b4cc0] text-sm md:text-base mb-4 block"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              RoRo services are widely used for transporting vehicles like cars, trucks, motorcycles, and buses between ports.
            </a>
            <ul className="text-[#23294d] text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Global Vehicle Shipping—</span>
                Efficient transport of new and used vehicles worldwide.
              </li>
              <li>
                <span className="font-semibold">Vehicle Storage &amp; Delivery—</span>
                Temporary storage solutions and timely delivery to the destination.
              </li>
              <li>
                <span className="font-semibold">Vehicle Inspection &amp; Condition Reporting—</span>
                Ensuring vehicles are in optimal condition before transport.
              </li>
              <li>
                <span className="font-semibold">Logistics Coordination—</span>
                Managing pickup, delivery, and customs clearance.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/roroVehicleTransport.jpg"
              alt="Vehicle transport"
              className="rounded-2xl object-cover w-[420px] h-[220px] md:w-[480px] md:h-[240px] shadow-lg"
              style={{ maxWidth: 480 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* --- Fast & Flexible Turnaround Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/roroTurnaround.jpg"
              alt="Fast and flexible turnaround"
              className="rounded-2xl object-cover w-[420px] h-[220px] md:w-[480px] md:h-[180px] shadow-lg"
              style={{ maxWidth: 480 }}
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              4. Fast &amp; Flexible Turnaround
            </h3>
            <a
              href="#"
              className="text-[#3b4cc0] text-sm md:text-base mb-4 block hover:underline"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              We understand the importance of quick turnaround times, and our RoRo services are designed for maximum efficiency.
            </a>
            <ul className="text-[#23294d] text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Frequent Sailings—</span>
                Regular vessel departures to meet tight schedules.
              </li>
              <li>
                <span className="font-semibold">Flexible Scheduling—</span>
                Quick adaptations to meet time-sensitive transport needs.
              </li>
              <li>
                <span className="font-semibold">Minimal Port Time—</span>
                Efficient loading and unloading minimize delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Worldwide Coverage Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              5. Worldwide Coverage
            </h3>
            <a
              href="#"
              className="text-[#3b4cc0] text-sm md:text-base mb-4 block hover:underline"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our RoRo services cover major global ports, offering flexibility and accessibility for your shipments.
            </a>
            <ul className="text-[#23294d] text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Global Reach—</span>
                Connecting key international ports to ensure worldwide service.
              </li>
              <li>
                <span className="font-semibold">Customs Clearance Assistance—</span>
                Handling paperwork for smooth border transit.
              </li>
              <li>
                <span className="font-semibold">Cross-Continental Routes—</span>
                Offering intercontinental RoRo shipping.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/roroWorldMap.jpg"
              alt="Worldwide RoRo coverage"
              className="rounded-2xl object-cover w-[420px] h-[220px] md:w-[480px] md:h-[180px] shadow-lg"
              style={{ maxWidth: 480 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section>
        <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
          {/* Left: Text Content */}
          <div className="flex-1 min-w-[260px]">
            <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Get your Quote with Us
            </h2>
            <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our streamlined RoRo freight quotation process is designed for speed and convenience. At Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by Request system. Simply fill out our short form to initiate your request. Once submitted, our team will evaluate the cargo type, dimensions, and route requirements to determine the best shipping solution. You will receive a customized quotation directly in your email, ensuring accurate pricing and seamless transport of vehicles, machinery, and oversized rolling cargo.
            </p>
            <Link href="/ocean-freight-forms" passHref legacyBehavior>
              <a className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors">
                Request a Quote
              </a>
            </Link>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
            <img
              src="/quote-illustration.png"
              alt="Quotation illustration"
              className="w-[320px] h-auto object-contain"
              style={{ maxWidth: 380 }}
              loading="lazy"
            />
          </div>
        </section>
        <div className="text-xs text-gray-700 mt-2 px-2">
          Need a Reliable RoRo Shipping Solution? <span className="font-semibold underline cursor-pointer">Contact us</span> today for a customized Roll-On/Roll-Off (RoRo) transport plan that ensures the safe, secure, and efficient movement of your wheeled and heavy cargo!
          <br />
          <span className="float-right">-Whenever and wherever you need to trust.</span>
        </div>
      </section>
    </>
  );

}