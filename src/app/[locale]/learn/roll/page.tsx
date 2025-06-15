import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

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
    </>
  );
}