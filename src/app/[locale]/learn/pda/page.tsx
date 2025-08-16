"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGrid from "@/components/ReasonsGrid";

export default function ShippingMethodsInfo() {
    const t = useTranslations("learn-pda");

    return (
        <div className="min-h-screen flex flex-col items-center py-8 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Hero Section */}
            <div className="w-full max-w-7xl place-self-center">
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
                        <h3 className="text-2xl mb-4 text-primary dark:text-blue-400">
                            Request For a PDA
                        </h3>
                        <div>
                            <RequestQuoteButton>
                                <Link href="/ship-agency-forms">
                                    Request a Quote
                                </Link>
                            </RequestQuoteButton>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h4 className="text-lg mb-2 text-primary dark:text-blue-400">
                            What Is Requesting for a PDA?
                        </h4>
                        <p className="text-base text-foreground mb-2">
                            A ProForma Disbursement Account (PDA) serves as a comprehensive estimate of all anticipated costs associated with a vessel's port call. It is issued to the vessel's operator, master, or their appointed financial representative, enabling stakeholders to prepare adequately for a vessel's arrival.
                        </p>
                        <p className="text-base text-foreground">
                            By providing a clear overview of expected expenses, a PDA helps ensure a smooth and efficient operation, minimizes unforeseen costs, and facilitates transparent financial planning. The information and estimates detailed PDAs help empower our clients to make informed decisions and optimize their logistics strategies.
                        </p>
                    </div>
                </div>
            </div>

            {/* Key Components Section */}
            <div className="w-full max-w-7xl mx-auto mt-16 mb-10 px-4">
                <h2 className="text-2xl mb-2 text-primary dark:text-blue-400">
                    Key Components of Our PDA
                </h2>
                <p className="text-base text-foreground mb-8">
                    Our PDA provides full visibility into all expected port costs, allowing for better financial planning.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                    <Link href="/learn/pda/breakdown#port-terminal-charges">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Port & Terminal Charges
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#pilotage-towage-fees">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Pilotage & Towage Fees
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#customs-immigration-fees">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Customs & Immigration Fees
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#cargo-handling-stevedoring">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Cargo Handling & Stevedoring
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#bunker-fresh-water">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Bunker & Fresh Water Supply
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#waste-disposal-environmental">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Waste Disposal & Environmental Fees
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#security-emergency">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Security & Emergency Services
                        </span>
                    </Link>
                    <Link href="/learn/pda/breakdown#agency-fees">
                        <span className="bg-[#e6eef7] text-[#2a4365] px-6 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-[#d1e7f0] transition-colors cursor-pointer">
                            Agency Fees
                        </span>
                    </Link>
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

            {/* What We Provide Section */}
            <div className="w-full max-w-6xl mx-auto mb-24">
                <h2 className="text-2xl text-primary dark:text-blue-400 mb-3 text-left">
                    What We Provide
                </h2>
                <p className="text-foreground text-sm mb-6 text-left">
                    At Moon Navigation and TradePro, we specialize in the preparation and settlement of Port Disbursement Accounts (PDAs), streamlining financial transactions between vessel owners and port authorities. Our services include:
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    {/* Left: Image */}
                    <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-xs md:max-w-sm">
                        <img
                            src="/pda-3.jpg"
                            alt="Professional at port with laptop"
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: '16/11', minHeight: '260px', maxHeight: '400px' }}
                        />
                    </div>
                    {/* Right: Content */}
                    <div className="flex-1 max-w-xl">
                        <ul className="space-y-4 text-sm text-primary dark:text-blue-400">
                            <li>
                                <span className="">• Detailed Cost Estimates</span>
                                <span className="block text-foreground font-normal ml-4">
                                    Comprehensive coverage of port dues, pilotage, towage, stevedoring, customs, and agency fees.
                                </span>
                            </li>
                            <li>
                                <span className="">• Fast Turnaround</span>
                                <span className="block text-foreground font-normal ml-4">
                                    Prompt delivery of PDAs to align with your operational timeline.
                                </span>
                            </li>
                            <li>
                                <span className="">• Transparency and Accuracy</span>
                                <span className="block text-foreground font-normal ml-4">
                                    Clear and precise itemizing of all charges, ensuring no hidden costs.
                                </span>
                            </li>
                            <li>
                                <span className="">• Expert Cost Management</span>
                                <span className="block text-foreground font-normal ml-4">
                                    Customized advice to optimize your port call expenses effectively.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Reasons Section */}
            <div className="w-full max-w-6xl mx-auto mb-24">
                <ReasonsGrid
                    title="Reasons to Choose Moon Navigation and Trading Co. For Your PDA"
                    subheading=""
                    reasons={[
                        {
                            icon: <img src="/icons/ship agency/7.png" alt="Cost Estimate Icon" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Accurate & Transparent Cost Estimates",
                            description: "We ensure realistic pricing with no hidden fees; our PDAs are based on official port tariffs and real-time market conditions.",
                        },
                        {
                            icon: <img src="/icons/ship agency/8.png" alt="Port Authority Icon" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Strong Relationships with Port Authorities",
                            description: "We work closely with port operators, customs officials, and maritime regulators as we negotiate the best possible rates for port services.",
                        },
                        {
                            icon: <img src="/icons/ship agency/9.png" alt="Ship Agency Icon" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Expert Ship Agency Services",
                            description: "With years of experience managing vessel disbursements, we are specialized in handling bulk carriers, tankers, container ships, RORO vessels, and project cargo.",
                        },
                        {
                            icon: <img src="/icons/ship agency/10.png" alt="Support Icon" className="mb-6 h-16 w-16 object-contain" />,
                            title: "24/7 Support",
                            description: "Our dedicated operations team is available 24/7 for inquiries and assistance.",
                        },
                    ]}
                />
            </div>

            <GetQuoteComponent topic="PDA" link="/ship-agency-forms" />
            <FAQSearch category="ship-agency-services" />
        </div>
    );
}