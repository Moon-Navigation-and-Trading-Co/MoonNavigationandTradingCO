"use client"
import FAQSearch from "@/components/faq";
import GetQuoteComponent from "@/components/getQuoteComponent";
import OverviewServicesTabs from "@/components/overview-services";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import ReasonsGrid from "@/components/ReasonsGrid";
import FormTabs from "@/components/form-tabs";
import CrewLearnMorePage from "./learn-more/page";


function overview(){
  return (
    <>
      {/* Hero image removed to prevent duplication */}
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
    </>
  )
}

function services(){
  return(
    <>
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
    <div className="w-full rounded-[2rem] overflow-hidden shadow-lg flex justify-center">
      <Image
        src="/crew-2.jpg"
        alt="Ship agent assisting crew member with onboarding paperwork"
        width={600}
        height={320}
        className="w-full h-[220px] md:h-[320px] object-cover"
        style={{ display: "block" }}
      />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
    {/* Left: Image */}
    <div className="w-full rounded-[2rem] overflow-hidden shadow-lg flex justify-center">
      <Image
        src="/crew-3.jpg"
        alt="Crew member disembarking from vessel"
        width={600}
        height={320}
        className="w-full h-[220px] md:h-[320px] object-cover"
        style={{ display: "block" }}
      />
    </div>
    {/* Right: Text Content */}
    <div className="order-2 md:order-2">
      <h2 className="text-xl md:text-2xl text-[#2a6db0] dark:text-blue-400 mb-4">
        We facilitate the review of crew members&apos; documents to ensure compliance with exit formalities. (Signing off)
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
    <ReasonsGrid
      title="Reasons to Choose Moon Navigation and Trading Co. For Your Crew Management"
      subheading="We provide comprehensive crew management services with 24/7 support, strict compliance standards, and cost-effective solutions to ensure smooth crew changes and operational continuity."
      reasons={[
        {
          icon: <Image src="/icons/ship agency/36.png" alt="24/7 Crew Change Support" width={56} height={56} className="mb-4 h-14 w-14 object-contain mx-auto" />,
          title: "24/7 Crew Change Support",
          description: "Available around the clock for emergency crew changes.",
        },
        {
          icon: <Image src="/icons/ship agency/34.png" alt="Strict Compliance and Safety Standards" width={56} height={56} className="mb-4 h-14 w-14 object-contain mx-auto" />,
          title: "Strict Compliance and Safety Standards",
          description: "Ensuring all procedures meet international maritime regulations.",
        },
        {
          icon: <Image src="/icons/ship agency/35.png" alt="Cost-Effective and Efficient Solutions" width={56} height={56} className="mb-4 h-14 w-14 object-contain mx-auto" />,
          title: "Cost-Effective and Efficient Solutions",
          description: "Optimizing crew change processes to minimize costs and delays.",
        },
        {
          icon: <Image src="/icons/ship agency/37.png" alt="Emergency Crew Change Capability" width={56} height={56} className="mb-4 h-14 w-14 object-contain mx-auto" />,
          title: "Emergency Crew Change Capability",
          description: "Rapid response for urgent crew replacement needs.",
        },
      ]}
    />
  </div>
  <GetQuoteComponent topic = "Crew Management" link = "/ship-agency-forms"/> 
  <FAQSearch category="crew-management" />
    </>
  )
}

function OverviewTab() {
  return (
    <>
      {overview()}
      {services()}
      <GetQuoteComponent topic="Crew Management" link="/ship-agency-forms" />
      <FAQSearch category="crew-management" />
    </>
  );
}

export default function CrewTabs() {
  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <OverviewTab />,
    },
    {
      id: "services",
      title: "Services",
      content: <CrewLearnMorePage />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full mt-10 mb-16">
      {/* Hero image at the top */}
      <div className="w-full rounded-[2rem] overflow-hidden mb-10 mt-6 shadow-lg">
        <Image
          src="/crew-1.jpg"
          alt="Crew management services"
          width={1200}
          height={350}
          className="w-full h-[220px] md:h-[350px] object-cover"
          style={{ display: "block" }}
        />
      </div>
      <FormTabs tabData={tabData} />
    </div>
  );
}
