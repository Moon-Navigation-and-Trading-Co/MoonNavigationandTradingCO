"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award, Calculator, Building2, Ship, HeadphonesIcon } from "lucide-react";

export default function ShippingMethodsInfo() {
    const t = useTranslations("learn-pda");

    const reasonsToChoose = [
        {
            icon: <Image src="/icons/other services/57.png" alt="Accurate & Transparent Cost Estimates" width={48} height={48} className="w-12 h-12" />,
            title: "Accurate & Transparent Cost Estimates",
            description: "We ensure realistic pricing with no hidden fees; our PDAs are based on official port tariffs and real-time market conditions."
        },
        {
            icon: <Image src="/icons/other services/58.png" alt="Strong Relationships with Port Authorities" width={48} height={48} className="w-12 h-12" />,
            title: "Strong Relationships with Port Authorities",
            description: "We work closely with port operators, customs officials, and maritime regulators as we negotiate the best possible rates for port services."
        },
        {
            icon: <Image src="/icons/other services/59.png" alt="Expert Ship Agency Services" width={48} height={48} className="w-12 h-12" />,
            title: "Expert Ship Agency Services",
            description: "With years of experience managing vessel disbursements, we are specialized in handling bulk carriers, tankers, container ships, RORO vessels, and project cargo."
        },
        {
            icon: <Image src="/icons/other services/60.png" alt="24/7 Support" width={48} height={48} className="w-12 h-12" />,
            title: "24/7 Support",
            description: "Our dedicated operations team is available 24/7 for inquiries and assistance."
        }
    ];

    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
                <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
                    {/* Enhanced Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
                    
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 z-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                    </div>

                    {/* Hero Image */}
                    <div className="absolute inset-0 z-10">
                        <Image
                            src="/pda-1.jpg"
                            alt="ProForma Disbursement Account Hero"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-white/90 text-sm font-medium">Financial Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Request For<br />a PDA
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Comprehensive cost estimates for vessel port calls enabling transparent financial planning and informed decision-making
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/ship-agency-forms">
                                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Request a Quote
                                    </span>
                                </button>
                            </Link>
                            <Link href="#services">
                                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Learn More
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                        <button 
                            onClick={() => {
                                const servicesSection = document.querySelector('#services');
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
                        >
                            <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">Scroll to explore</span>
                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* What is PDA Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Financial Planning</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What Is Requesting for a PDA?
                            </h2>
                            
                            <div className="space-y-4">
                                <p className="text-base text-gray-600 leading-relaxed">
                                    A ProForma Disbursement Account (PDA) serves as a comprehensive estimate of all anticipated costs associated with a vessel&apos;s port call. It is issued to the vessel&apos;s operator, master, or their appointed financial representative, enabling stakeholders to prepare adequately for a vessel&apos;s arrival.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    By providing a clear overview of expected expenses, a PDA helps ensure a smooth and efficient operation, minimizes unforeseen costs, and facilitates transparent financial planning. The information and estimates detailed PDAs help empower our clients to make informed decisions and optimize their logistics strategies.
                                </p>
                            </div>
                        </div>
                        
                        {/* Right: Empty space (no image) */}
                        <div className="hidden lg:block">
                            {/* Empty right column to maintain layout */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Components Section */}
            <section id="services" className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>PDA Components</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Key Components of Our PDA
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our PDA provides full visibility into all expected port costs, allowing for better financial planning.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 justify-center mb-12">
                        <Link href="/learn/pda/breakdown#port-terminal-charges">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Port & Terminal Charges
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#pilotage-towage-fees">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Pilotage & Towage Fees
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#customs-immigration-fees">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Customs & Immigration Fees
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#cargo-handling-stevedoring">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Cargo Handling & Stevedoring
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#bunker-fresh-water">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Bunker & Fresh Water Supply
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#waste-disposal-environmental">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Waste Disposal & Environmental Fees
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#security-emergency">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Security & Emergency Services
                            </span>
                        </Link>
                        <Link href="/learn/pda/breakdown#agency-fees">
                            <span className="bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:bg-blue-100 transition-colors cursor-pointer border border-blue-200">
                                Agency Fees
                            </span>
                        </Link>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/learn/pda/process">
                            <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Our Process
                                </span>
                            </button>
                        </Link>
                        <Link href="/learn/pda/breakdown">
                            <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Breakdown of our PDA
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Request a PDA Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Why Request a PDA?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Accurate Budgeting
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Efficiently plan and allocate funds for port operations, ensuring financial resources are utilized effectively.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Cost Transparency
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Benefit from an itemized breakdown of all charges, eliminating hidden fees and fostering trust in financial dealings.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Expense Control
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Gain the ability to approve costs in advance, ensuring that all expenditures align with your budgetary constraints.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Provide Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1 lg:order-1 relative">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image src="/pda-3.jpg" alt="Professional at port with laptop" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="order-2 lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                <span>Our Services</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                                What We Provide
                            </h2>
                            
                            <p className="text-base text-gray-600 leading-relaxed">
                                At Moon Navigation and Trading Co., we specialize in the preparation and settlement of Port Disbursement Accounts (PDAs), streamlining financial transactions between vessel owners and port authorities. Our services include:
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900 mb-1">Detailed Cost Estimates</h3>
                                        <p className="text-gray-600">Comprehensive coverage of port dues, pilotage, towage, stevedoring, customs, and agency fees.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900 mb-1">Fast Turnaround</h3>
                                        <p className="text-gray-600">Prompt delivery of PDAs to align with your operational timeline.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900 mb-1">Transparency and Accuracy</h3>
                                        <p className="text-gray-600">Clear and precise itemizing of all charges, ensuring no hidden costs.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="text-base font-medium text-gray-900 mb-1">Expert Cost Management</h3>
                                        <p className="text-gray-600">Customized advice to optimize your port call expenses effectively.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reasons to Choose Section */}
            <section className="px-4 sm:px-6 lg:px-8 mt-20 mb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>PDA Benefits</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                            Reasons to Choose Moon Navigation and Trading Co. For Your PDA
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Accurate port disbursement accounts with transparent pricing and expert ship agency services.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ship agency/7.png" alt="Accurate & Transparent Cost Estimates" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Accurate & Transparent Cost Estimates
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We ensure realistic pricing with no hidden fees; our PDAs are based on official port tariffs and real-time market conditions.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ship agency/8.png" alt="Strong Relationships with Port Authorities" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Strong Relationships with Port Authorities
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We work closely with port operators, customs officials, and maritime regulators as we negotiate the best possible rates for port services.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ship agency/9.png" alt="Expert Ship Agency Services" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                Expert Ship Agency Services
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                With years of experience managing vessel disbursements, we are specialized in handling bulk carriers, tankers, container ships, RORO vessels, and project cargo.
                            </p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                <Image src="/icons/ship agency/10.png" alt="24/7 Support" width={48} height={48} className="w-12 h-12" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                24/7 Support
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our dedicated operations team is available 24/7 for inquiries and assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="PDA" link="/ship-agency-forms" />
            <FAQSearch category="ship-agency-services" />
        </main>
    );
}