import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function LearnMore() {
    return (
        <>
        <section className="w-full py-20 px-4 md:px-0">
        <h2 className="text-4xl mb-32 text-[#3846a5] font-raleway font-normal" style={{ fontWeight: 400 }}>
          Our RORO Solutions—At Moon Navigation and Trading Co.
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mb-32">
          {/* Left: Text Content */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-2xl font-raleway font-normal mb-4" style={{ fontWeight: 400 }}>
              1. RoRo Vessel Operations
            </h3>
            <p className="text-[#3846a5] text-lg font-raleway font-light mb-4" style={{ fontWeight: 300 }}>
              We offer state-of-the-art RoRo vessels equipped with specialized ramps and cargo decks to accommodate a wide range of rolling cargo.
            </p>
            <ul className="text-[#222] text-lg font-raleway font-light space-y-2" style={{ fontWeight: 300 }}>
              <li>
                <b>Cargo Loading & Unloading—</b>
                Seamless roll-on and roll-off operations for quick turnaround.
              </li>
              <li>
                <b>Dedicated RoRo Vessels—</b>
                Modern vessels designed specifically for wheeled cargo.
              </li>
              <li>
                <b>Safety & Securing—</b>
                Cargo tied down and secured to ensure safe transport.
              </li>
              <li>
                <b>Port-to-Port & Door-to-Door Solutions—</b>
                Tailored solutions for your specific needs.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <img
              src="/roro-vessel-operations.jpg"
              alt="RoRo vessel operations"
              className="rounded-2xl object-cover w-full h-[340px]"
              style={{ maxWidth: 600 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* --- Heavy & Oversized Cargo Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mb-32">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <img
              src="/roroBulldozer.jpg"
              alt="Heavy and oversized cargo"
              className="rounded-2xl object-cover w-full h-[340px]"
              style={{ maxWidth: 600 }}
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-2xl font-raleway font-normal mb-4" style={{ fontWeight: 400 }}>
              2. Heavy & Oversized Cargo
            </h3>
            <p className="text-[#3846a5] text-lg font-raleway font-light mb-4" style={{ fontWeight: 300 }}>
              For heavy or oversized equipment, our RoRo services provide a cost-effective and flexible shipping solution.
            </p>
            <ul className="text-[#222] text-lg font-raleway font-light space-y-2" style={{ fontWeight: 300 }}>
              <li>
                <b>Machinery & Equipment—</b>
                Transporting construction machinery, mining equipment, and large vehicles.
              </li>
              <li>
                <b>Specialized Transport—</b>
                Handling oversized and over-dimensional cargo with precision.
              </li>
              <li>
                <b>Loading/Unloading Assistance—</b>
                On-site equipment to safely load and unload heavy items.
              </li>
              <li>
                <b>Custom Solutions—</b>
                Tailored handling for every type of heavy cargo.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Vehicle Transport Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mb-32">
          {/* Left: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-2xl font-raleway font-normal mb-4" style={{ fontWeight: 400 }}>
              3. Vehicle Transport
            </h3>
            <p className="text-[#3846a5] text-lg font-raleway font-light mb-4" style={{ fontWeight: 300 }}>
              RoRo services are widely used for transporting vehicles like cars, trucks, motorcycles, and buses between ports.
            </p>
            <ul className="text-[#222] text-lg font-raleway font-light space-y-2" style={{ fontWeight: 300 }}>
              <li>
                <b>Global Vehicle Shipping—</b>
                Efficient transport of new and used vehicles worldwide.
              </li>
              <li>
                <b>Vehicle Storage & Delivery—</b>
                Temporary storage solutions and timely delivery to the destination.
              </li>
              <li>
                <b>Vehicle Inspection & Condition Reporting—</b>
                Ensuring vehicles are in optimal condition before transport.
              </li>
              <li>
                <b>Logistics Coordination—</b>
                Managing pickup, delivery, and customs clearance.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <img
              src="/roroVehicleTransport.jpg"
              alt="Vehicle transport"
              className="rounded-2xl object-cover w-full h-[340px]"
              style={{ maxWidth: 600 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* --- Fast & Flexible Turnaround Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mb-32">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <img
              src="/roroTurnaround.jpg"
              alt="Fast and flexible turnaround"
              className="rounded-2xl object-cover w-full h-[340px]"
              style={{ maxWidth: 600 }}
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-2xl font-raleway font-normal mb-4" style={{ fontWeight: 400 }}>
              4. Fast & Flexible Turnaround
            </h3>
            <p className="text-[#3846a5] text-lg font-raleway font-light mb-4" style={{ fontWeight: 300 }}>
              We understand the importance of quick turnaround times, and our RoRo services are designed for maximum efficiency.
            </p>
            <ul className="text-[#222] text-lg font-raleway font-light space-y-2" style={{ fontWeight: 300 }}>
              <li>
                <b>Frequent Sailings—</b>
                Regular vessel departures to meet tight schedules.
              </li>
              <li>
                <b>Flexible Scheduling—</b>
                Quick adaptations to meet time-sensitive transport needs.
              </li>
              <li>
                <b>Minimal Port Time—</b>
                Efficient loading and unloading minimize delays.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Worldwide Coverage Section --- */}
      <section className="w-full py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24 mb-32">
          {/* Left: Text */}
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-2xl font-raleway font-normal mb-4" style={{ fontWeight: 400 }}>
              5. Worldwide Coverage
            </h3>
            <p className="text-[#3846a5] text-lg font-raleway font-light mb-4" style={{ fontWeight: 300 }}>
              Our RoRo services cover major global ports, offering flexibility and accessibility for your shipments.
            </p>
            <ul className="text-[#222] text-lg font-raleway font-light space-y-2" style={{ fontWeight: 300 }}>
              <li>
                <b>Global Reach—</b>
                Connecting key international ports to ensure worldwide service.
              </li>
              <li>
                <b>Customs Clearance Assistance—</b>
                Handling paperwork for smooth border transit.
              </li>
              <li>
                <b>Cross-Continental Routes—</b>
                Offering intercontinental RoRo shipping.
              </li>
            </ul>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <img
              src="/roroWorldMap.jpg"
              alt="Worldwide RoRo coverage"
              className="rounded-2xl object-cover w-full h-[340px]"
              style={{ maxWidth: 600 }}
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

