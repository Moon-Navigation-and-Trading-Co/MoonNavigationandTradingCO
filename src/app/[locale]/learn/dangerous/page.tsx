"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"
import RequestQuoteButton from "@/components/RequestQuoteButton"
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Award, ShieldCheck, Briefcase, TrendingUp, PackageCheck, AlertTriangle, Globe, FileText, Shield } from "lucide-react";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function DangerousCargoInfo() {
    const t = useTranslations("learn-dangerous-cargo")
    const [selectedClass, setSelectedClass] = useState(0)

    // Create an array of dangerous cargo classes for the accordion
    const dangerousClasses = [
        {
            id: "class-1",
            title: t('list-1-title-1'),
            description: t('list-1-description-1')
        },
        {
            id: "class-2",
            title: t('list-1-title-2'),
            description: t('list-1-description-2')
        },
        {
            id: "class-3",
            title: t('list-1-title-3'),
            description: t('list-1-description-3')
        },
        {
            id: "class-4",
            title: t('list-1-title-4'),
            description: t('list-1-description-4')
        },
        {
            id: "class-5",
            title: t('list-1-title-5'),
            description: t('list-1-description-5')
        },
        {
            id: "class-6",
            title: t('list-1-title-6'),
            description: t('list-1-description-6')
        },
        {
            id: "class-7",
            title: t('list-1-title-7'),
            description: t('list-1-description-7')
        },
        {
            id: "class-8",
            title: t('list-1-title-8'),
            description: t('list-1-description-8')
        },
        {
            id: "class-9",
            title: t('list-1-title-9'),
            description: t('list-1-description-9')
        }
    ]

    const businessBenefits = [
        {
            icon: <Image src="/icons/other services/34.png" alt="Premium Service, Premium Returns" width={48} height={48} className="w-12 h-12" />,
            title: "Premium Service, Premium Returns",
            description: "Elevate business results with specialized handling, skill, and care. Our tailored solutions help you secure higher-value shipments while upholding top-level service every mile—maximizing your returns."
        },
        {
            icon: <Image src="/icons/other services/35.png" alt="Trust Built on Compliance" width={48} height={48} className="w-12 h-12" />,
            title: "Trust Built on Compliance",
            description: "As certified experts in IMDG Code compliance, we manage all regulatory requirements on your behalf. This reliability ensures smooth operations and upholds your reputation in the industry."
        },
        {
            icon: <Image src="/icons/other services/36.png" alt="End-to-End Expertise" width={48} height={48} className="w-12 h-12" />,
            title: "End-to-End Expertise",
            description: "From documentation and vessel selection to emergency response plans, Moon Navigation and Trading Co. provides comprehensive support, ensuring your dangerous cargo is handled with the utmost professionalism and care."
        },
        {
            icon: <Image src="/icons/other services/37.png" alt="Unlock New Opportunities" width={48} height={48} className="w-12 h-12" />,
            title: "Unlock New Opportunities",
            description: "Expand what you ship with this elevated service. Risk thresholds, money, and effort are minimized as Moon Navigation and Trading Co. unlocks new commercial opportunities—allowing dangerous cargo to confidently enter viable, specialized trades."
        },
        {
            icon: <Image src="/icons/other services/38.png" alt="Tailored Safety and Handling" width={48} height={48} className="w-12 h-12" />,
            title: "Tailored Safety and Handling",
            description: "Every shipment and packaging need is unique. Rely on solutions not available off the shelf or designed for broad categories. Our solutions are designed to mitigate risks while maintaining the integrity of your cargo."
        }
    ];

    const challengesAndSolutions = [
        {
            icon: <Image src="/icons/other services/39.png" alt="Elevated Costs" width={48} height={48} className="w-12 h-12" />,
            title: "Elevated Costs",
            description: "Specialized handling, packaging, and insurance come with a premium. However, these investments are essential to ensure the safety and compliance of your shipments."
        },
        {
            icon: <Image src="/icons/other services/40.png" alt="Intricate Regulations" width={48} height={48} className="w-12 h-12" />,
            title: "Intricate Regulations",
            description: "Dangerous cargo is governed by stringent regulations and route restrictions. Our team's expertise guarantees that these challenges are navigated efficiently and effectively."
        },
        {
            icon: <Image src="/icons/other services/41.png" alt="Risk Management and Liability" width={48} height={48} className="w-12 h-12" />,
            title: "Risk Management and Liability",
            description: "The transportation of hazardous materials carries inherent risks. We proactively address these concerns through robust management systems and comprehensive training for our staff, ensuring your shipments are handled with the utmost care."
        }
    ];

    const internationalTradeBenefits = [
        {
            icon: <Image src="/icons/other services/42.png" alt="Expert Trade Knowledge" width={48} height={48} className="w-12 h-12" />,
            title: "Expert Trade Knowledge",
            description: "Our deep expertise in global commerce, logistics, and customs regulations."
        },
        {
            icon: <Image src="/icons/other services/43.png" alt="Strong Global Network" width={48} height={48} className="w-12 h-12" />,
            title: "Strong Global Network",
            description: "Our strong partnerships with airlines, shipping lines, and regulatory bodies worldwide."
        },
        {
            icon: <Image src="/icons/other services/44.png" alt="Custom-Tailored Trade Solutions" width={48} height={48} className="w-12 h-12" />,
            title: "Custom-Tailored Trade Solutions",
            description: "Our personalized strategies for importers, exporters, and traders."
        },
        {
            icon: <Image src="/icons/other services/45.png" alt="Reliable Compliance & Risk Management" width={48} height={48} className="w-12 h-12" />,
            title: "Reliable Compliance & Risk Management",
            description: "Our full compliance with international trade laws."
        }
    ];

    return (
        <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <Head>
                <title>Dangerous Cargo Shipping and Handling | Moon Navigation and Trading Co.</title>
                <meta
                    name="description"
                    content="Learn about dangerous cargo shipping, IMDG Code, IATA DGR, ADR, and how Moon Navigation and Trading Co. ensures safe, compliant transport of hazardous materials worldwide."
                />
                <meta
                    name="keywords"
                    content="dangerous cargo, hazardous materials, IMDG Code, IATA DGR, ADR, shipping, transport, Moon Navigation and Trading Co., packaging, labeling, risk assessment, special equipment, safety protocols"
                />
                <meta property="og:title" content="Dangerous Cargo Shipping and Handling | Moon Navigation and Trading Co." />
                <meta property="og:description" content="Expert handling and transport of dangerous cargo and hazardous materials. Learn about our process, compliance, and safety standards." />
                <meta property="og:image" content="/dangerous-cargo-banner.jpg" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.moonnavigation.com/learn/dangerous" />
            </Head>
            
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
                            src="/dangerous-cargo-banner.jpg"
                            alt="Dangerous Cargo Hero"
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
                            <span className="text-white/90 text-sm font-medium">Dangerous Cargo Services</span>
                        </div>

                        {/* Enhanced Heading */}
                        <div className="space-y-6">
                            <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                                Dangerous Cargo Shipping
                            </h1>
                            <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                                Expert handling and transport of dangerous cargo and hazardous materials with full compliance and safety standards
                            </h2>
                        </div>

                        {/* Classic Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 mt-12">
                            <Link href="/ocean-freight-forms">
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

            {/* Content Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Right column: heading and description */}
                    <div className="flex-1 rounded-2xl p-6">
                        <h2 className="text-lg mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            What is Dangerous Cargo ?
                        </h2>
                        <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Dangerous cargo includes materials that pose significant risks to health, safety, property, and the environment due to their hazardous nature. These materials, ranging from flammable and explosive substances to toxic, radioactive, and corrosive chemicals, require meticulous handling and adherence to strict international safety regulations such as the IMDG Code, IATA DGR, and ADR. Ensuring proper classification, packaging, labeling, and documentation is essential to prevent accidents and ensure seamless transportation.
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we specialize in the safe, secure, and fully compliant transportation of hazardous materials. With extensive industry expertise, we provide tailored solutions that guarantee the highest safety standards, regulatory compliance, and efficient logistics management. Trust us to handle your most challenging cargo needs with professionalism and precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMO class strip image above the card */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <CardTitle className="text-3xl mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Types of Dangerous Cargo We Handle: </CardTitle>
            <div className="w-full flex justify-center items-center h-[60px] mt-10">
                <Image src="/dangerous-imo-strip.png" alt="IMO Class Hazard Labels" width={800} height={200} className="max-w-2xl w-full" />
            </div>
            
            {/* Accordion/classes section below */}
                <Card className="w-full mt-10 p-0 sm:p-5">
                <CardHeader>
                    <CardContent className="p-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    </CardContent>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row gap-8 p-0">
                    {/* Sidebar: List of classes */}
                    <aside className="w-full md:w-1/3 mb-8 md:mb-0">
                        <nav>
                            <ul className="space-y-2">
                                {dangerousClasses.map((dangerousClass, idx) => (
                                    <li key={dangerousClass.id}>
                                        <button
                                            type="button"
                                            className={`w-full text-left px-4 py-2 transition-colors ${selectedClass === idx
                                                ? "bg-blue-100 text-primary"
                                                : "hover:bg-muted"
                                                }`}
                                            onClick={() => setSelectedClass(idx)}
                                            aria-current={selectedClass === idx ? "page" : undefined}
                                            style={{ fontFamily: 'Raleway, sans-serif' }}
                                        >
                                            {dangerousClass.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                    {/* Main content: Class details */}
                    <section className="flex-1 min-w-0">
                        <h2 className="text-xl mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {dangerousClasses[selectedClass]?.title}
                        </h2>
                        <div className="text-base leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {dangerousClasses[selectedClass]?.description}
                        </div>
                    </section>
                </CardContent>
            </Card>
            </section>

            {/* Process Section */}
            <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2
                    className="text-3xl sm:text-4xl mb-16"
                    style={{
                        fontFamily: 'Raleway, sans-serif',
                        color: '#1e3a8a' // Tailwind's blue-800
                    }}
                >
                    Our Dangerous Cargo Handling and Transport Process
                </h2>
                {/* First row */}
                <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Risk Assessment and Planning</h3>
                        <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            The initial phase in transporting hazardous cargo involves a thorough risk assessment to identify potential hazards and risks associated with the materials.
                        </p>
                        <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we meticulously evaluate the nature of the cargo, determine the most appropriate transport route, and identify any risks to the public, the environment, and the transport crew.
                        </p>
                        <p style={{ fontFamily: 'Raleway, sans-serif' }}>
                            This proactive approach ensures that all safety measures are in place before transportation begins.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/risk-assessment.jpg"
                            alt="Risk Assessment"
                            width={600}
                            height={400}
                            className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        />
                    </div>
                </div>
                {/* Second row */}
                <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Packaging and Labeling</h3>
                        <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Proper packaging and labeling are critical for the secure transport of dangerous goods.
                        </p>
                        <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our dedicated team at Moon Navigation and Trading Co. ensures that each item is packed in accordance with its hazard classification, with all necessary markings, labels, and documentation meticulously prepared.
                        </p>
                        <p style={{ fontFamily: 'Raleway, sans-serif' }}>
                            This includes UN numbers, hazardous labels, and warning signs, ensuring compliance with all regulations and the safety of all involved in the transport process.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/packaging-labeling.jpg"
                            alt="Packaging and Labeling"
                            width={600}
                            height={400}
                            className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Special Equipment Use */}
                <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Special Equipment Use</h3>
                        <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we employ specialized equipment designed specifically for the transport of dangerous cargo, including:
                        </p>
                        <ul className="mb-4 list-disc pl-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li><b>Explosion-Proof Vehicles and Containers:</b> Engineered for the safe transport of flammable goods, ensuring maximum protection.</li>
                            <li><b>Cryogenic Tanks:</b> Utilized for the secure transport of liquefied gases, maintaining optimal conditions throughout transit.</li>
                            <li><b>Double-Walled:</b> Designed for corrosive materials, providing enhanced safety and containment during transport.</li>
                            <li><b>Radiation Shield:</b> Implemented for the secure transport of radioactive cargo, people, and the environment.</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/special-equipment.jpg"
                            alt="Special Equipment"
                            width={600}
                            height={400}
                            className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        />
                    </div>
                </div>
                {/* Safety and Emergency Protocols */}
                <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Safety and Emergency Protocols</h3>
                        <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Safety is a top priority when transporting dangerous goods. We ensure that all staff are thoroughly trained in hazmat handling and that our drivers and operators are well-versed in emergency response procedures.
                        </p>
                        <p style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Additionally, we equip our teams with emergency response kits containing containment materials, fire extinguishers, and first aid equipment, ensuring preparedness in any situation.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/safety-protocols.jpg"
                            alt="Safety and Emergency Protocols"
                            width={600}
                            height={400}
                            className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        />
                    </div>
                </div>
            </section>

            {/* Business Benefits Section */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-normal mb-8 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Elevate Your Business with Our Expert Dangerous Cargo Services
                </h2>
                <p className="mb-10 text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Transporting dangerous cargo demands expertise, precision, and a steadfast commitment to safety. At Moon Navigation and Trading Co., we recognize the complexities involved in handling hazardous materials. Here&apos;s how partnering with us can benefit your business:
                </p>
            </section>

            <ReasonsGridUniversal
                title=""
                reasons={businessBenefits}
                layout="default"
            />

            {/* Challenges and Solutions Section */}
            <ReasonsGridUniversal
                title="Mastering the Challenges of Dangerous Goods Transportation"
                subheading="Transporting dangerous goods presents substantial business opportunities but requires a deep understanding of its complexities. At Moon Navigation and Trading Co., we specialize in offering comprehensive solutions to navigate the intricacies of this critical industry."
                reasons={challengesAndSolutions}
                layout="default"
            />

            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Text Content */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md p-6 md:p-10 flex flex-col justify-center h-full">
                        <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we transform challenges into opportunities. Our unwavering commitment to safety and efficiency guarantees that your dangerous cargo arrives securely and on time.
                        </p>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Partnering with us means you benefit from a team that prioritizes safety and environmental responsibility, adhering to the highest standards to protect both your cargo and the environment.
                        </p>
                        <p className="text-muted-foreground mb-4 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We provide expert guidance every step of the way, navigating the complexities of hazardous transport to ensure a seamless experience.
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Additionally, we deliver reliable, tailored solutions designed to meet your unique needs, ensuring optimal outcomes for your business—whenever and wherever you need to trust.
                        </p>
                    </div>
                    {/* Right: Image and Call to Action */}
                    <div className="flex flex-col items-center">
                        <div className="w-full rounded-3xl overflow-hidden shadow-md mb-4">
                            <Image
                                src="/dangerous-cargo-team.jpg"
                                alt="Moon Navigation and Trading Co. hazardous cargo team"
                                width={600}
                                height={350}
                                className="object-cover w-full h-[220px] md:h-[350px]"
                                priority={false}
                            />
                        </div>
                        <p className="text-muted-foreground text-center text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Let us elevate your hazardous goods transport experience. <Link href="/contact" className="text-primary underline">Contact us</Link> today to discuss your requirements and discover how we can support your success!
                        </p>
                    </div>
                </div>
            </section>

            {/* International Trade Benefits Section */}
            <ReasonsGridUniversal
                title="Reasons to Choose Moon Navigation and Trading Co. For Your International Trade"
                subheading="Expert trade knowledge with strong global networks and custom-tailored solutions for international commerce."
                reasons={internationalTradeBenefits}
                layout="default"
            />

            <GetQuoteComponent topic="Dangerous Cargo" link="/ocean-freight-forms" />
            <FAQSearch category="dangerous-cargo-transport" />
        </main>
    )
}
