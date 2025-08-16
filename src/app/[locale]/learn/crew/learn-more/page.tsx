import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function CrewLearnMorePage() {
  return (
    <div
      className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[80vh] py-10 px-4"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-14">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl text-[#2a6db0] dark:text-blue-400 mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
            1. Crew Sign-On (Onboarding New Crew)
          </h2>
          <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            We manage all pre-boarding formalities to ensure that seafarers join their assigned vessels efficiently.
          </p>
          <div className="mb-2">
            <span className="text-[#222] dark:text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Service Includes:</span>
            <ul className="list-disc ml-6 text-[#444] dark:text-gray-300 text-sm md:text-base space-y-1 mt-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              <li>Visa processing and immigration formalities</li>
              <li>Medical fitness certification and COVID-19 compliance</li>
              <li>Flight and transportation arrangements</li>
              <li>Port clearance and vessel access coordination</li>
              <li>Contact validation and compliance checks</li>
            </ul>
          </div>
          <p className="text-xs text-[#444] dark:text-gray-300 mt-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            Benefit: We minimize the delay by ensuring that crew members are fully prepared before departure.
          </p>
        </div>
        {/* Right: Image */}
        <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-md flex justify-center">
          <Image
            src="/lm-crew-2.jpg"
            alt="Female ship crew member in safety gear at port"
            width={400}
            height={275}
            className="w-full h-[260px] md:h-[340px] object-cover"
            style={{ aspectRatio: '16/11' }}
          />
        </div>
      </div>
    {/* Crew Sign-Off (Disembarkation & Repatriation) Section */}
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
      {/* Left: Image */}
      <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-xs md:max-w-sm flex justify-center order-1 md:order-1">
        <Image
          src="/lm-crew-3.jpg"
          alt="Ship agent assisting crew member with sign-off procedures"
          width={400}
          height={275}
          className="w-full h-[260px] md:h-[340px] object-cover"
          style={{ aspectRatio: '16/11' }}
        />
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 order-2 md:order-2">
        <h2 className="text-lg md:text-xl text-[#2a6db0] dark:text-blue-400 mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
          2. Crew Sign-Off (Disembarkation and Repatriation)
        </h2>
        <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          For crew members concluding their contracts, we facilitate safe disembarkation and return travel to home countries.
        </p>
        <div className="mb-2">
          <span className="text-[#222] dark:text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Service Includes:</span>
          <ul className="list-disc ml-6 text-[#444] dark:text-gray-300 text-sm md:text-base space-y-1 mt-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            <li>Exit visa and customs clearance</li>
            <li>Medical check-out fitness assessment</li>
            <li>Travel and accommodation arrangements</li>
            <li>Final payroll settlement and documentation</li>
            <li>Emergency repatriation and medical assistance</li>
          </ul>
        </div>
        <p className="text-xs text-[#444] dark:text-gray-300 mt-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          Benefit: We ensure an efficient and hassle-free transition for outgoing crew members.
        </p>
      </div>
    </div>
    {/* Emergency Crew Change & Replacement Section */}
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
      {/* Left: Text Content */}
      <div className="flex-1 order-1 md:order-1">
        <h2 className="text-lg md:text-xl text-[#2a6db0] dark:text-blue-400 mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
          3. Emergency Crew Change and Replacement
        </h2>
        <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          We offer rapid crew change solutions for urgent situations such as:
        </p>
        <ul className="list-disc ml-6 text-[#444] dark:text-gray-300 text-sm md:text-base space-y-1 mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          <li>Medical evacuations requiring crew evacuation</li>
          <li>Immediate crew replacement due to illness or injury</li>
          <li>Arrival at destination while prepositioning a new crew</li>
          <li>Unforeseen travel restrictions requiring rerouting</li>
        </ul>
        <p className="text-xs text-[#444] dark:text-gray-300 mt-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          Benefit: We minimize the operational risks by ensuring vessels remain fully staffed at all times.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-xs md:max-w-sm flex justify-center order-2 md:order-2">
        <Image
          src="/lm-crew-4.jpg"
          alt="Emergency crew change operations"
          width={400}
          height={275}
          className="w-full h-[260px] md:h-[340px] object-cover"
          style={{ aspectRatio: '16/11' }}
        />
      </div>
    </div>
    <GetQuoteComponent topic = "Crew Management" link = "/ship-agency-forms"/> 
    <FAQSearch category="crew-management" />
    </div>
  );
}
