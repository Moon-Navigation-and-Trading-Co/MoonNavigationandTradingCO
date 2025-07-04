import FAQSearch from "@/components/faq";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-crew");

  return (
  <div
    className="w-full max-w-7xl place-self-center"
    style={{ fontFamily: "Raleway, sans-serif" }}
  >
    {/* Top full-width image */}
    <div className="w-full">
      <img
        src="/crew-1.jpg"
        alt="Ship agent assisting crew member with paperwork"
        className="w-full h-[220px] md:h-[320px] object-cover rounded-[40px] md:rounded-[48px] mt-2"
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
    {/* Content below image */}
    <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Left: Title and Button */}
      <div className="flex flex-col items-start mt-2">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-[#222] dark:text-white mb-4 leading-tight">
          Crew Management:<br />
          Sign on/off
        </h1>
          <RequestQuoteButton>
          <Link href="/ship-agency-forms">
            Request a Quote
          </Link>  
        </RequestQuoteButton>
      </div>
      {/* Right: Description */}
      <div>
        <h2 className="text-base md:text-lg text-[#2a3a8c] dark:text-blue-400 mb-2">
          What is Crew Management ?
        </h2>
        <p className="text-[#444] dark:text-gray-300 text-sm mb-4 leading-relaxed">
        Crew management in ship agency involves the comprehensive oversight and coordination of
maritime personnel to ensure smooth operations. This process includes recruiting crew
members, providing necessary training, and managing their deployment and schedule. Effective
crew management is essential for maintaining compliance with maritime regulations and
fostering a cohesive working environment. Ultimately, it contributes to the overall efficiency and
success of shipping operations. 
        </p>
        <p className="text-[#444] dark:text-gray-300 text-sm leading-relaxed">
        At Moon Navigation and Trading Co., we provide comprehensive management services,
facilitating both the onboarding (sign-on) and disembarkation (sign-off) of crew members in
compliance with maritime regulations and local port requirements. 
        </p>
      </div>
    </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
    {/* Left: Text Content */}
    <div>
      <h2 className="text-xl md:text-2xl text-[#2a6db0] dark:text-blue-400 mb-4">
        Our sign-on onboarding authorities to secure necessary port entry passes:
      </h2>
      <div className="mb-6">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Travel Arrangements</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm mb-3">
          We coordinate flights, transfers, and accommodation, securing a seamless travel experience. Additionally, we liaise with port authorities to secure vital entry passes, facilitating smooth access for your crew.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Port and Immigration Formalities</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm mb-3">
          We ensure the submission of all required documentation for immigration and customs authorities, working with relevant bodies to provide official IDs or clearances.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Transportation to Vessel</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm">
          Reliable transportation is organized from the airport or hotel directly to the vessel, assuring a smooth transition for crew members.
        </p>
      </div>
      <RequestQuoteButton>
        <Link href="/learn/crew/learn-more">
          Learn more on our crew change services
        </Link>
      </RequestQuoteButton>
    </div>
    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src="/crew-2.jpg"
        alt="Ship agent assisting crew member with onboarding paperwork"
        className="rounded-2xl shadow-md object-cover w-[350px] h-[220px]"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
    {/* Left: Image */}
    <div className="flex justify-center order-1 md:order-1">
      <img
        src="/crew-3.jpg"
        alt="Ship agent reviewing crew member documents for sign-off"
        className="rounded-2xl shadow-md object-cover w-[350px] h-[220px]"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
    {/* Right: Text Content */}
    <div className="order-2 md:order-2">
      <h2 className="text-xl md:text-2xl text-[#2a6db0] dark:text-blue-400 mb-4">
        We facilitate the review of crew members' documents to ensure compliance with exit formalities. (Signing off)
      </h2>
      <div className="mb-6">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Customs and Immigration Clearance</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm mb-3">
          Our team assists in submitting necessary documentation to customs and immigration authorities, ensuring a hassle-free clearance process.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Travel Arrangements</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm mb-3">
          We coordinate return flights, transfers, and accommodation for crew members departing home or to work.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Transportation from Vessel</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm mb-3">
          We organize transfers from the vessel to the airport (including accommodation, if required), ensuring a comfortable transition.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-[#222] dark:text-white mb-1 text-base">Medical Assistance (if necessary)</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm">
          Coordinating medical care for crew members needing urgent attention or health clearance before travel.
        </p>
      </div>
      <RequestQuoteButton>
        <Link href="/learn/crew/learn-more">
          Learn more on our crew change services
        </Link>
      </RequestQuoteButton>
    </div>
  </div>
  <div className="w-full max-w-6xl mx-auto mt-20 mb-10 px-4">
    <h2 className="text-xl md:text-2xl text-[#2a4365] dark:text-blue-400 mb-8 text-center">
      Reasons to Choose Moon Navigation and Trading Co.<br />
      For Your Crew Management
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-2 text-gray-900 dark:text-white">24/7 Crew Change Support</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm">
          Anytime, anywhere: meet your crew change needs.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-2 text-gray-900 dark:text-white">Strict Compliance &amp; Safety Standards</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm">
          We adhere to IMO, MLC, ISPS, and all flag state regulations.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-2 text-gray-900 dark:text-white">Cost-Effective &amp; Efficient Solutions</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm">
          Our strategies are designed to minimize vessel downtime and optimize crew.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-2 text-gray-900 dark:text-white">Emergency Crew Change Capability</h3>
        <p className="text-[#444] dark:text-gray-300 text-sm">
          Ready for urgent crew replacement needs, ensuring operational continuity.
        </p>
      </div>
    </div>
  </div>
  <GetQuoteComponent topic = "Crew Management" link = "/ship-agency-forms"/> 
  <FAQSearch category="crew-management" />
  </div>
  );
}
