import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function CrewLearnMorePage() {
  return (
    <div
      className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[80vh] py-10"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <div className="relative w-full max-w-3xl rounded-[40px] overflow-hidden shadow-lg">
        <Image
          src="/lm-crew-1.jpg"
          alt="Ship crew in safety gear at port"
          width={900}
          height={420}
          className="object-cover w-full h-[320px] md:h-[420px]"
          style={{ filter: "brightness(0.65)" }}
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="bg-white/90 rounded-xl shadow-md p-8 max-w-xl w-full mt-8">
            <h1 className="text-lg md:text-2xl font-semibold text-[#2a6db0] mb-4 text-center">
              Our Compliance and Support for Seamless Crew Management
            </h1>
            <ul className="text-[#222] text-sm md:text-base space-y-4">
              <li>
                Our activities are aligned with the International Maritime Organization (IMO) standards, port state regulations, and the Maritime Labour Convention (MLC).
              </li>
              <li>
                We provide continual advisory for crew matters in relation to scheduling and handling all facets of crew changes.
              </li>
              <li>
                We facilitate emergency crew changes in cases of illness, injury, or unforeseen circumstances.
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-2 left-0 w-full px-6">
          <p className="text-xs text-white text-center drop-shadow-sm">
            With our expertise in crew management, we strive to offer efficient solutions and always prioritize the welfare of the seafarers while keeping vessel operations and your crew’s best interests in mind. Whenever and wherever you need us.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-14">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-[#2a6db0] mb-2">
            1. Crew Sign-On (Onboarding New Crew)
          </h2>
          <p className="text-[#222] text-sm md:text-base mb-4">
            We manage all pre-boarding formalities to ensure that seafarers join their assigned vessels efficiently.
          </p>
          <div className="mb-2">
            <span className="font-semibold text-[#222]">Service Includes:</span>
            <ul className="list-disc ml-6 text-[#444] text-sm md:text-base space-y-1 mt-2">
              <li>Visa processing &amp; immigration formalities</li>
              <li>Medical fitness certification &amp; COVID-19 compliance</li>
              <li>Flight &amp; transportation arrangements</li>
              <li>Port clearance &amp; vessel access coordination</li>
              <li>Contact validation &amp; compliance checks</li>
            </ul>
          </div>
          <p className="text-xs text-[#444] mt-3">
            Benefit: We minimize the delay by ensuring that crew members are fully prepared before departure.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/lm-crew-2.jpg"
            alt="Female ship crew member in safety gear at port"
            width={320}
            height={180}
            className="rounded-xl shadow-md object-cover w-[320px] h-[180px]"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    {/* Crew Sign-Off (Disembarkation & Repatriation) Section */}
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-14">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center order-1 md:order-1">
        <Image
          src="/lm-crew-3.jpg"
          alt="Ship agent assisting crew member with sign-off procedures"
          width={320}
          height={180}
          className="rounded-xl shadow-md object-cover w-[320px] h-[180px]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 order-2 md:order-2">
        <h2 className="text-lg md:text-xl font-semibold text-[#2a6db0] mb-2">
          2. Crew Sign-Off (Disembarkation &amp; Repatriation)
        </h2>
        <p className="text-[#222] text-sm md:text-base mb-4">
          For crew members concluding their contracts, we facilitate safe disembarkation and return travel to home countries.
        </p>
        <div className="mb-2">
          <span className="font-semibold text-[#222]">Service Includes:</span>
          <ul className="list-disc ml-6 text-[#444] text-sm md:text-base space-y-1 mt-2">
            <li>Exit visa &amp; customs clearance</li>
            <li>Medical check-out fitness assessment</li>
            <li>Travel &amp; accommodation arrangements</li>
            <li>Final payroll settlement &amp; documentation</li>
            <li>Emergency repatriation &amp; medical assistance</li>
          </ul>
        </div>
        <p className="text-xs text-[#444] mt-3">
          Benefit: We ensure an efficient and hassle-free transition for outgoing crew members.
        </p>
      </div>
    </div>
    {/* Emergency Crew Change & Replacement Section */}
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-14">
      {/* Left: Text Content */}
      <div className="flex-1 order-1 md:order-1">
        <h2 className="text-lg md:text-xl font-semibold text-[#2a6db0] mb-2">
          3. Emergency Crew Change &amp; Replacement
        </h2>
        <p className="text-[#222] text-sm md:text-base mb-4">
          We offer rapid crew change solutions for urgent situations such as:
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm md:text-base space-y-1 mb-2">
          <li>Medical evacuations requiring crew evacuation</li>
          <li>Immediate crew replacement due to illness or injury</li>
          <li>Arrival at destination while prepositioning a new crew</li>
          <li>Unforeseen travel restrictions requiring rerouting</li>
        </ul>
        <p className="text-xs text-[#444] mt-3">
          Benefit: We minimize the operational risks by ensuring vessels remain fully staffed at all times.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center order-2 md:order-2">
        <Image
          src="/lm-crew-4.jpg"
          alt="Emergency crew change with helicopter and ship crew member"
          width={320}
          height={180}
          className="rounded-xl shadow-md object-cover w-[320px] h-[180px]"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <GetQuoteComponent topic = "Crew Management" link = "/ship-agency-forms"/> 
    </div>
  );
}
