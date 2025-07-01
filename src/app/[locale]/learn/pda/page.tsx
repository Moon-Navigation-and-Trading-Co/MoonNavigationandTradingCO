import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-pda");

  return (
    <>
    <div className = "w-full max-w-7xl place-self-center" style={{ fontFamily: "Raleway, sans-serif" }}>
        <div className="w-full rounded-[2rem] overflow-hidden mb-10 mt-6 shadow-lg">
          <img
            src="/pda-1.jpg"
            alt="Financial Report and Disbursement Account"
            className="w-full h-[220px] md:h-[320px] object-cover"
            style={{ display: "block" }}
          />
        </div>
      

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl  mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            Request For a PDA
          </h3>
          <div>
            {/* Replace Button with RequestQuoteButton */}
            <RequestQuoteButton>
              <Link href="/ship-agency-forms">
                Request a Quote
              </Link>
            </RequestQuoteButton>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-lg  mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
            What Is Requesting for a PDA?
          </h4>
          <p className="text-base text-[#333] mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
            A ProForma Disbursement Account (PDA) serves as a comprehensive estimate of all anticipated costs associated with a vessel’s port call. It is issued to the vessel’s operator, master, or their appointed financial representative, enabling stakeholders to prepare adequately for a vessel’s arrival.
          </p>
          <p className="text-base text-[#333]" style={{ fontFamily: "Raleway, sans-serif" }}>
            By providing a clear overview of expected expenses, a PDA helps ensure a smooth and efficient operation, minimizes unforeseen costs, and facilitates transparent financial planning. The information and estimates detailed PDAs help empower our clients to make informed decisions and optimize their logistics strategies.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto mt-16 mb-10 px-4">
      <h2 className="text-2xl  mb-2" style={{ fontFamily: "Raleway, sans-serif" }}>
        Key Components of Our PDA
      </h2>
      <p className="text-base text-[#555] mb-8" style={{ fontFamily: "Raleway, sans-serif" }}>
        Our PDA provides full visibility into all expected port costs, allowing for better financial planning.
      </p>
      <div className="flex flex-wrap gap-4 mb-12">
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Port & Terminal Charges
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Pilotage & Towage Fees
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Customs & Immigration Fees
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Cargo Handling & Stevedoring
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Bunker & Fresh Water Supply
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Waste Disposal & Environmental Fees
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Security & Emergency Services
        </span>
        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm" style={{ fontFamily: "Raleway, sans-serif" }}>
          Agency Fees
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8">
        <Link href="/learn/pda/process">
          <RequestQuoteButton>
            Our Process
          </RequestQuoteButton>
        </Link>
        <Link href="/learn/pda/breakdown">
          <RequestQuoteButton>
            Breakdown of our PDA
          </RequestQuoteButton>
        </Link>
      </div>
    </div>
    <div className="w-1/2 h-[500px] flex justify-center items-center mt-20 mb-24 place-self-center" style={{ background: "#2a5d8f" }}>
      <div className="relative  max-w-3xl flex flex-col items-center md:items-start">
        {/* Large triangle background, bottom left */}
        <div className="absolute left-0 bottom-0" style={{ zIndex: 0 }}>
          <svg width="340px" height="300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,260 340,260 170,0" fill="#b3cbe6" />
          </svg>
        </div>
        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-lg px-8 py-10 w-full max-w-xl z-10" style={{ fontFamily: "Raleway, sans-serif" }}>
          <h3 className="text-xl mb-6 text-[#2a4365] ">Why Request a PDA?</h3>
          <div className="space-y-7">
            <div>
              <div className=" text-sm mb-1 text-[#2a4365]">Accurate Budgeting</div>
              <div className="text-[#444] text-sm">
                Efficiently plan and allocate funds for port operations, ensuring financial resources are utilized effectively.
              </div>
            </div>
            <div>
              <div className=" text-sm mb-1 text-[#2a4365]">Cost Transparency</div>
              <div className="text-[#444] text-sm">
                Benefit from an itemized breakdown of all charges, eliminating hidden fees and fostering trust in financial dealings.
              </div>
            </div>
            <div>
              <div className=" text-sm mb-1 text-[#2a4365]">Expense Control</div>
              <div className="text-[#444] text-sm">
                Gain the ability to approve costs in advance, ensuring that all expenditures align with your budgetary commitments.
              </div>
            </div>
          </div>
        </div>
                {/* Background triangle for visual effect */}
                <div className="absolute -bottom-16 -left-24 z-0 hidden md:block">
          <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,180 220,180 110,0" fill="#b3cbe6" />
          </svg>
        </div>
        {/* Top right illustration (simulated with colored blocks for now) */}
        <div className="absolute top-0 right-0 z-20 hidden md:block" style={{ transform: "translateY(-60%) translateX(20%)" }}>
          <div className="flex flex-row gap-2">
            <div className="w-24 h-16 bg-[#e6eef7] rounded-lg border border-[#b3cbe6] flex flex-col items-center justify-center">
              <div className="w-8 h-2 bg-[#2a4365] mb-1 rounded" />
              <div className="w-10 h-2 bg-[#b3cbe6] mb-1 rounded" />
              <div className="w-6 h-2 bg-[#2a4365] rounded" />
            </div>
            <div className="w-24 h-16 bg-[#b3cbe6] rounded-lg border border-[#e6eef7] flex flex-col items-center justify-center">
              <div className="w-10 h-2 bg-[#2a4365] mb-1 rounded" />
              <div className="w-8 h-2 bg-[#e6eef7] mb-1 rounded" />
              <div className="w-6 h-2 bg-[#2a4365] rounded" />
            </div>
            <div className="w-16 h-16 bg-[#e6eef7] rounded-lg border border-[#b3cbe6] flex items-center justify-center">
              <div className="w-8 h-8 bg-[#2a4365] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mb-24">
      {/* Left: Image */}
      <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-xs md:max-w-sm">
        <img
          src="/pda-3.jpg"
          alt="Professional at port with laptop"
          className="w-full h-auto object-cover"
          style={{ aspectRatio: "4/3" }}
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl  text-[#2a4365] mb-3" style={{ fontFamily: "Raleway, sans-serif" }}>
          What We Provide
        </h2>
        <p className="text-[#444] text-sm mb-6">
          At Moon Navigation and TradePro, we specialize in the preparation and settlement of Port Disbursement Accounts (PDAs), streamlining financial transactions between vessel owners and port authorities. Our services include:
        </p>
        <ul className="space-y-4 text-sm text-[#2a4365]">
          <li>
            <span className="">• Detailed Cost Estimates</span>
            <span className="block text-[#444] font-normal ml-4">
              Comprehensive coverage of port dues, pilotage, towage, stevedoring, customs, and agency fees.
            </span>
          </li>
          <li>
            <span className="">• Fast Turnaround</span>
            <span className="block text-[#444] font-normal ml-4">
              Prompt delivery of PDAs to align with your operational timeline.
            </span>
          </li>
          <li>
            <span className="">• Transparency and Accuracy</span>
            <span className="block text-[#444] font-normal ml-4">
              Clear and precise itemizing of all charges, ensuring no hidden costs.
            </span>
          </li>
          <li>
            <span className="">• Expert Cost Management</span>
            <span className="block text-[#444] font-normal ml-4">
              Customized advice to optimize your port call expenses effectively.
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="w-full max-w-6xl mx-auto mb-24">
      <h2 className="text-xl md:text-2xl  text-[#2a4365] mb-12 text-center" style={{ fontFamily: "Raleway, sans-serif" }}>
        Reasons to Choose Moon Navigation and Trading Co. For Your PDA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base  text-[#2a4365] mb-2">Accurate &amp; Transparent Cost Estimates</h3>
          <p className="text-[#444] text-sm max-w-xs">
            We ensure realistic pricing with no hidden fees; our PDAs are based on official port tariffs and real-time market conditions.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base  text-[#2a4365] mb-2">Strong Relationships with Port Authorities</h3>
          <p className="text-[#444] text-sm max-w-xs">
            We work closely with port operators, customs officials, and maritime regulators as we negotiate the best possible rates for port services.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base  text-[#2a4365] mb-2">Expert Ship Agency Services</h3>
          <p className="text-[#444] text-sm max-w-xs">
            With years of experience managing vessel disbursements, we are specialized in handling bulk carriers, tankers, container ships, RORO vessels, and project cargo.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base  text-[#2a4365] mb-2">24/7 Support</h3>
          <p className="text-[#444] text-sm max-w-xs">
            Our dedicated operations team is available 24/7 for inquiries and assistance.
          </p>
        </div>
      </div>
    </div>
    <GetQuoteComponent topic = "PDA" link = "/ship-agency-forms"/> 
    </>
  );
}
