import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function LearnMore() {
    return (
        <>
        <section className="w-full py-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-16 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Our RORO Solutions—At Moon Navigation and Trading Co.
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              1. RoRo Vessel Operations
            </h3>
            <p className="text-primary text-sm md:text-base mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              We offer state-of-the-art RoRo vessels equipped with specialized ramps and cargo decks to accommodate a wide range of rolling cargo.
            </p>
            <ul className="text-foreground text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
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
              2. Heavy and Oversized Cargo
            </h3>
            <a
              className="text-primary text-sm md:text-base mb-4 block "
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              For heavy or oversized equipment, our RoRo services provide a cost-effective and flexible shipping solution.
            </a>
            <ul className="text-foreground text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Machinery and Equipment—</span>
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              3. Vehicle Transport
            </h3>
            <a
              className="text-primary text-sm md:text-base mb-4 block"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              RoRo services are widely used for transporting vehicles like cars, trucks, motorcycles, and buses between ports.
            </a>
            <ul className="text-foreground text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Global Vehicle Shipping—</span>
                Efficient transport of new and used vehicles worldwide.
              </li>
              <li>
                <span className="font-semibold">Vehicle Storage and Delivery—</span>
                Temporary storage solutions and timely delivery to the destination.
              </li>
              <li>
                <span className="font-semibold">Vehicle Inspection and Condition Reporting—</span>
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
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
              4. Fast and Flexible Turnaround
            </h3>
            <a
              href="#"
              className="text-primary text-sm md:text-base mb-4 block hover:underline"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              We understand the importance of quick turnaround times, and our RoRo services are designed for maximum efficiency.
            </a>
            <ul className="text-foreground text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              5. Worldwide Coverage
            </h3>
            <a
              href="#"
              className="text-primary text-sm md:text-base mb-4 block hover:underline"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our RoRo services cover major global ports, offering flexibility and accessibility for your shipments.
            </a>
            <ul className="text-foreground text-sm md:text-base space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
      <GetQuoteComponent topic="RORO" link="/ocean-freight-forms" /> 
      <FAQSearch category="ro-ro-shipping" />
         </>
    )
}

