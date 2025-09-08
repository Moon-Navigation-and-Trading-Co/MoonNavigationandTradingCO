"use client"
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import FAQPage from "../../faq/page";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award, Settings, DollarSign, Calendar, Truck, Wrench, Package, Shield } from "lucide-react";

const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), { ssr: false });

const serve=[
    {img:"/cc-1.jpg",title:"Shipping and Freight Forwarders"},
    {img:"/cc-2.jpg",title:"Construction and Engineering Firms"},
    {img:"/cc-3.jpg",title:"Oil and Gas Companies"},
    {img:"/cc-4.jpg",title:"Manufacturing and Industrial Companies"},
    {img:"/cc-5.jpg",title:"Retail and Storage Businesses"},
]

const containers = [
    {img:"/Container purchases and rentals 5.png",title:"Standard Dry Containers (20ft and 40ft)"},
    {img:"/Container purchases and rentals 10.png",title:"High Cube Containers"},
    {img:"/Container purchases and rentals 8.png",title:"Open Top Containers"},
    {img:"/Container purchases and rentals 11.png",title:"Flat Rack Containers"},
    {img:"/Container purchases and rentals 14.png",title:"Refrigerated Containers (Reefers)"},
    {img:"/Container purchases and rentals 6.png",title:"Tank Containers"},
    {img:"/Container purchases and rentals 13.png",title:"Special Purpose and Modified Containers"}
]

const containerBenefits = [
    {
        icon: <Image src="/icons/container/10.png" alt="Ready for Immediate Use" width={48} height={48} className="w-12 h-12" />,
        title: "Ready for Immediate Use",
        description: "Our containers is fully inspected and certified to meet industry standards, ensuring safety and reliability."
    },
    {
        icon: <Image src="/icons/container/11.png" alt="Customizable" width={48} height={48} className="w-12 h-12" />,
        title: "Customizable",
        description: "We can tailor your container to meet your specific needs, with options for shelving, lighting, ventilation, and other features."
    },
    {
        icon: <Image src="/icons/container/12.png" alt="Cost-Effective" width={48} height={48} className="w-12 h-12" />,
        title: "Cost-Effective",
        description: "We offer competitive pricing that delivers long-term value; our containers are a smart investment for your storage and shipping requirements."
    }
];

const rentalServices = [
    {
        icon: <Image src="/icons/container/13.png" alt="Rental Terms" width={48} height={48} className="w-12 h-12" />,
        title: "Rental Terms",
        description: "Choose from daily, monthly, or long-term rental agreements to suit your needs."
    },
    {
        icon: <Image src="/icons/container/14.png" alt="Quick Delivery" width={48} height={48} className="w-12 h-12" />,
        title: "Quick Delivery",
        description: "Enjoy fast and efficient delivery directly to your location."
    },
    {
        icon: <Image src="/icons/container/15.png" alt="Maintenance Included" width={48} height={48} className="w-12 h-12" />,
        title: "Maintenance Included",
        description: "Rest assured that we handle all repairs and maintenance throughout your rental period."
    }
];

export default function ContainerPurchases() {
    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
                            src="/Container purchases and rentals 1.jpg"
                            alt="Container Purchases Hero"
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
                            <span className="text-white/90 text-sm font-medium">Container Solutions</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Container Purchases and<br />Rentals
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Extensive selection of containers for sale and rental, delivering reliable solutions for your logistics and storage needs
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/buy-rent-container-forms">
                                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Get Quote
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

            {/* Content Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
                    <div className="md:w-1/2 w-full flex flex-col items-start">
                        <p className="text-primary text-base font-semibold mb-2">
                            Looking to buy or rent a container?
                        </p>
                        <p className="text-foreground text-sm md:text-base leading-relaxed">
                            We have the unique shipping and storage needs of businesses and individuals alike. To meet these diverse requirements, we offer an extensive selection of containers for sale and rental, including solutions to suit your specific needs. Whether you are looking for a temporary storage solution, a long-term investment, or customized new and/or pre-owned container containers tailored to your project, trust us to deliver reliable solutions that match your logistics and storage capabilities, guiding you every step of the way at Moon Navigation and Trading Co.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between rounded-[40px] p-8 md:p-16">
                    <div className="w-full md:w-[500px] flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
                        <Image
                            src="/Container purchases and rentals 2.jpg"
                            alt="Container Solutions"
                            width={620}
                            height={420}
                            className="rounded-[60px] object-cover w-[620px] h-[420px]"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-start md:pl-12">
                        <h2 className="text-2xl md:text-3xl font-normal text-primary mb-10" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Container Solutions for Every<br />Need
                        </h2>
                        <p className="text-foreground text-sm md:text-base mb-2 font-medium">
                            At Moon Navigation and Trading Co., we pride ourselves on providing durable and reliable container solutions. Our containers are expertly designed to withstand harsh weather conditions, ensuring the safety of your cargo.
                        </p>
                        <p className="text-foreground text-sm md:text-base mb-2">
                            With a wide variety of customization options, including standard dry containers and specialized units in different sizes and types as customers, we&apos;re ready to meet the diverse needs of our clients. We offer flexible sizes from 8 ft to 40 ft (and custom) and materials and leases to specifications.
                        </p>
                        <p className="text-foreground text-sm md:text-base">
                            Committed to affordability, we provide pricing for both purchase and rental options, delivering cost-effective solutions that fit your budget. Trust us to be your partner in shipping and storage needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Container Types Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <VesselCarousel />
            </section>

            {/* Rental Services Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="relative w-full min-h-[700px]">
                    <Image
                        src="/Container purchases and rentals 3.jpg"
                        alt="Renting Containers Background"
                        fill
                        className="object-cover w-full h-full absolute inset-0"
                        style={{ zIndex: 0 }}
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] bg-white rounded-[48px] shadow-lg flex flex-col md:flex-row items-stretch p-8 md:p-16" style={{ zIndex: 1, opacity: 0.98 }}>
                        {/* Left column: services */}
                        <div className="flex-1 flex flex-col justify-center gap-8">
                            <h3 className="text-xl md:text-2xl font-light text-[#256094] mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                We offer the following services to ensure a seamless rental experience:
                            </h3>
                        </div>
                        {/* Right column: Renting Containers */}
                        <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-16">
                            <div className="text-[#256094] text-5xl md:text-6xl font-light leading-tight mb-4 text-center md:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Renting<br />Containers
                            </div>
                            <div className="text-foreground text-base md:text-lg mb-8 text-center md:text-left max-w-md">
                                Renting a container is an excellent solution for short-term or temporary storage requirements.
                            </div>
                            <div className="w-full h-1 border-b-2 border-[#256094] mt-2" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Rental Services Grid */}
            <ReasonsGridUniversal
                title=""
                reasons={rentalServices}
                layout="default"
            />

            {/* Buying Containers Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="relative w-full min-h-[700px]">
                    <Image
                        src="/Container purchases and rentals 4.jpg"
                        alt="Buying Containers Background"
                        fill
                        className="object-cover w-full h-full absolute inset-0"
                        style={{ zIndex: 0 }}
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] bg-white rounded-[48px] shadow-lg flex flex-col md:flex-row items-stretch p-8 md:p-16" style={{ zIndex: 1, opacity: 0.98 }}>
                        {/* Left column: title and subtitle */}
                        <div className="flex-1 flex flex-col justify-center gap-8 pr-0 md:pr-12">
                            <div className="text-[#256094] text-5xl md:text-6xl font-light leading-tight mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Buying<br />Containers
                            </div>
                            <Link href="#" className="text-[#256094] text-lg font-normal mt-2 hover:underline">Seeking a permanent solution?</Link>
                            <div className="w-full h-1 border-b-2 border-[#256094] mt-8" />
                        </div>
                        {/* Right column: benefits */}
                        <div className="flex-1 flex flex-col justify-center gap-8">
                            <div className="text-[#256094] text-2xl md:text-3xl font-light mb-6 text-center md:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Our containers offer the following benefits:
                            </div>
                            <div className="text-xs text-[#256094] mt-8 text-center md:text-left">
                                Choose us, Moon Navigation and Trading Co. for a dependable and versatile solution that meets your needs.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Container Benefits Grid */}
            <ReasonsGridUniversal
                title=""
                reasons={containerBenefits}
                layout="default"
            />

            {/* Flexible Purchase & Rental Plans */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center rounded-[60px] p-8 md:p-16">
                    <div className="flex-1 flex flex-col items-start md:pr-12">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Flexible Purchase & Rental Plans
                        </h2>
                        <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we understand that different projects demand different timelines. That&apos;s why we offer:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li>Short-Term & Long-Term Rentals</li>
                            <li>Affordable Daily, Weekly, and Monthly Rates</li>
                            <li>Purchase Options with Competitive Market Prices</li>
                            <li>Bulk Supply for Businesses & Projects</li>
                        </ul>
                        <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our team helps you choose the most cost-effective solution for your requirements.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <Image src="/pc-5.jpg" alt="Flexible Purchase & Rental Plans" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
                    </div>
                </div>
            </section>

            {/* Container Conditions */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row-reverse items-center rounded-[60px] p-8 md:p-16">
                    <div className="flex-1 flex flex-col items-start md:pl-12">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Container Conditions — You Choose What Suits You
                        </h2>
                        <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We offer containers in a variety of conditions to fit your budget and usage:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li><b>New (One-Trip)</b> – Like new, perfect for long-term use</li>
                            <li><b>Cargo-Worthy (CW)</b> – Certified for international shipping</li>
                            <li><b>Wind & Watertight (WWT)</b> – Ideal for secure storage</li>
                            <li><b>As-Is</b> – Economical units for non-critical use</li>
                        </ul>
                        <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We ensure complete transparency in container condition and specifications.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <Image src="/pc-6.jpg" alt="Container Conditions" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
                    </div>
                </div>
            </section>

            {/* Seamless Delivery & Logistics Support */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center rounded-[60px] p-8 md:p-16">
                    <div className="flex-1 flex flex-col items-start md:pr-12">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Seamless Delivery & Logistics Support
                        </h2>
                        <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            From quotation to delivery, we manage it all. Our logistics support includes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li>Fast delivery across cities, ports, and project sites</li>
                            <li>Transport coordination via truck, trailer, or crane</li>
                            <li>Placement and offloading services upon request</li>
                            <li>Cross-border delivery and coordination (if needed)</li>
                        </ul>
                        <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We make sure your container reaches you securely and on time.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <Image src="/pc-7.jpg" alt="Seamless Delivery & Logistics Support" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
                    </div>
                </div>
            </section>

            {/* Customization Options Available */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row-reverse items-center rounded-[60px] p-8 md:p-16">
                    <div className="flex-1 flex flex-col items-start md:pl-12">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Customization Options Available
                        </h2>
                        <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Need a container modified for a specific purpose? We offer:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li>Branding & exterior painting</li>
                            <li>Electrical wiring and lighting</li>
                            <li>Ventilation, windows, and doors</li>
                            <li>Insulation and flooring upgrades</li>
                            <li>Interior shelving or partitions</li>
                        </ul>
                        <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Tell us your needs—we will build the right solution.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <Image src="/pc-8.jpg" alt="Customization Options Available" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
                    </div>
                </div>
            </section>

            {/* Trade-In & Buy-Back Programs */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center rounded-[60px] p-8 md:p-16">
                    <div className="flex-1 flex flex-col items-start md:pr-12">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Trade-In & Buy-Back Programs
                        </h2>
                        <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we help customers manage their assets efficiently:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li>Trade-in options when upgrading containers</li>
                            <li>Buy-back plans for returned rental units</li>
                            <li>Responsible container recycling and disposal</li>
                        </ul>
                        <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We help you reduce long-term costs and maximize asset value.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <Image src="/pc-9.jpg" alt="Trade-In & Buy-Back Programs" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <VesselCarousel />
                <p className="text-xs text-muted-foreground mt-2 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    All containers are thoroughly inspected, certified, and compliant with <Link href="#" className="underline hover:text-primary">international safety and quality standards (CSC / ISO Certified)</Link>.
                </p>
            </section>

            {/* Expert Guidance & Customer Support */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row-reverse items-center rounded-[60px] p-8 md:p-16">
                    <div className="flex-1 flex flex-col items-start md:pl-12">
                        <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Expert Guidance & Customer Support
                        </h2>
                        <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            With years of hands-on experience, our team offers:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li>Expert consultations</li>
                            <li>On-demand technical support</li>
                            <li>Assistance with container selection and documentation</li>
                            <li>Fast response and dedicated account managers</li>
                        </ul>
                        <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our goal is to simplify the container process for you—start to finish.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
                        <Image src="/pc-10.jpg" alt="Expert Guidance & Customer Support" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
                    </div>
                </div>
            </section>

            <GetQuoteComponent topic="Container Rentals/Purchases" link="/buy-rent-container-forms"/>
            <FAQSearch category="container-purchases-rentals"/>
        </main>
    );
}