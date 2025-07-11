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
import OverviewServicesTabs from "@/components/overview-services";

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

    function renderOverview() {
        return (
            <>
                {/* Image banner at the top */}
                <div className="w-full flex justify-center mb-8 mt-10">
                    <div className="w-full max-w-7xl">
                        <Image
                            src="/dangerous-cargo-banner.jpg"
                            alt="Dangerous Cargo Banner"
                            width={1200}
                            height={350}
                            className="rounded-[60px] object-cover w-full h-[220px] sm:h-[350px]"
                            priority
                        />
                    </div>
                </div>
                {/* Two-column content below the image */}
                <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 mb-12 max-w-7xl mx-auto">
                    {/* Left column: title and button */}
                    <div className="flex-1 flex flex-col items-center md:items-start w-full">
                        <h1 className="mb-10 text-4xl font-light text-left md:text-left w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>Dangerous Goods<br />Container Shipments</h1>
                        <Link href="/ocean-freight-forms">
                            <RequestQuoteButton>Request a Quote</RequestQuoteButton>
                        </Link>
                    </div>
                    {/* Right column: heading and description */}
                    <div className="flex-1  rounded-2xl  p-6 font-light">
                        <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Dangerous Goods is the substances that pose a risk to health, safety, property, or the environment during transport.
                            These are classified under international regulatory frameworks such as: <br />

                            IMDG Code (International Maritime Dangerous Goods)<br />

                            ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road)<br />

                            IATA (International Air Transport Association – for air shipments)</p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Shipping hazardous materials demands precision, strict adherence to international regulations, and specialized
                            logistics capabilities. At Moon Navigation and Trading Co., we offer expert handling of Dangerous Goods (DG)
                            container shipments, ensuring your cargo is transported securely, compliantly, and efficiently across global routes.</p>
                    </div>
                </div>
            </>
        );
    }

    function renderServices() {
        return (
            <>
                {/* Everything after the overview section */}
                {/* Accordion/classes section below */}
                <Card className="w-full mt-10 mb-20 max-w-7xl mx-auto p-0 sm:p-5">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>{t('title')}</CardTitle>
                        <CardContent className="p-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {t('description')}
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
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedClass === idx
                                                    ? "bg-primary/10 text-primary font-semibold"
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
                            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                {dangerousClasses[selectedClass]?.title}
                            </h2>
                            <div className="text-base leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                {dangerousClasses[selectedClass]?.description}
                            </div>
                        </section>
                    </CardContent>
                </Card>
                <div className="w-full max-w-7xl mx-auto mt-20 mb-20">
                    <h2
                        className="text-3xl sm:text-4xl  mb-16"
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
                            <h3 className="text-2xl font-regular mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Specialized Container
                                Options</h3>
                            <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                We offer a variety of container types tailored to suit the specific
                                requirements of hazardous cargo:
                                <br />
                                <br />

                            <li>Standard FCL Containers (20ft / 40ft)</li>
                                

                            <li>Reefer Containers for Temperature-Controlled Dangerous Goods</li>    

                            <li>Ventilated Containers for volatile materials</li>    

                            <li>Custom-packaged containers for specific classes</li>  
                            <br />  


                                All containers used are certified and prepared in compliance with cargo
                                segregation rules, container cleaning protocols, and dangerous goods loading
                                plans.</p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/risk-assessment.jpg"
                                alt="Risk Assessment"
                                className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    {/* Second row */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-regular mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Safety and Compliance
                            Procedures</h3>
                            <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>At Moon Navigation and Trading Co., safety is at the core of every DG
                            shipment we handle. Our services include:

                            <li>Pre-shipment cargo classification and verification</li>
                            <li>Correct UN number assignment and DG labeling/marking</li>
                            <li>Proper packaging using certified materials</li>
                            <li>Preparation of Dangerous Goods Declaration (DGD) and Material Safety Data
                            Sheets (MSDS)</li>
                            <li>Segregation plans in line with IMDG Code</li>
                            <li>Safety checklists and container inspections before dispatch</li>
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/packaging-labeling.jpg"
                                alt="Packaging and Labeling"
                                className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-7xl mx-auto mt-20 mb-20">
                    {/* Special Equipment Use */}
                    <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Documentation and
                            Regulatory Support</h3><p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We ensure your dangerous goods cargo complies with all legal and port
                            authority requirements through:</p>
                            <ul className="mb-4 list-disc pl-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                <li>Export/import permits (as required)</li>
                                <li>Verified DGD and supporting documents</li>
                                <li>MSDS documentation assistance</li>
                                <li>Port handling and customs compliance</li>
                                <li>Coordination with shipping lines for DG acceptance and stowage planning</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/special-equipment.jpg"
                                alt="Special Equipment"
                                className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    {/* Safety and Emergency Protocols */}
                    <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Route Planning and Risk
                            Assessment</h3>
                            <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Transporting hazardous materials demands detailed journey planning and
                            hazard mitigation. We offer:</p>
                            <p style={{ fontFamily: 'Raleway, sans-serif' }}>
                                <li>Route analysis for safe transit corridors</li>
                                <li>Transit time optimization to reduce handling exposure</li>
                                <li>Coordination with carriers, terminals, and authorities</li>
                                <li>Emergency procedures and contingency planning</li>
                                </p>
                                <br />
                                <RequestQuoteButton> <Link href={"/learn/dangerous-goods/learn-more"}>Learn more about our dangerous container shipment solutions</Link></RequestQuoteButton>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/safety-protocols.jpg"
                                alt="Safety and Emergency Protocols"
                                className="rounded-3xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <section className="w-full max-w-7xl mx-auto my-20">
                    <h2 className="text-2xl md:text-3xl font-normal mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Reasons to Choose Moon Navigation and Trading Co. For Your International Trade
                    </h2>
                    <div className="mb-12" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.5rem', fontWeight: 400 }}>
                        {/* Subtitle if needed */}
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 w-full mt-8">
                            {/* Feature 1 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <img src="/icons/certified-team.svg" alt="Certified Team" className="mb-4 w-12 h-12" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Certified team with deep expertise<br />
                                    in hazardous cargo handling.
                                </span>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <img src="/icons/compliance.svg" alt="Compliance" className="mb-4 w-12 h-12" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Full compliance with IMDG, ADR,<br />
                                    and IATA standards.
                                </span>
                            </div>
                            {/* Feature 3 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <img src="/icons/container-options.svg" alt="Container Options" className="mb-4 w-12 h-12" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Wide range of DG container options<br />
                                    and equipment.
                                </span>
                            </div>
                            {/* Feature 4 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <img src="/icons/operational-support.svg" alt="Operational Support" className="mb-4 w-12 h-12" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    End-to-end operational support<br />
                                    and coordination.
                                </span>
                            </div>
                            {/* Feature 5 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <img src="/icons/safety.svg" alt="Safety" className="mb-4 w-12 h-12" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Commitment to safety, reliability,<br />
                                    and regulatory excellence.
                                </span>
                            </div>
                            {/* Feature 6 */}
                            <div className="flex flex-col items-center text-center px-4">
                                <img src="/icons/documentation.svg" alt="Documentation" className="mb-4 w-12 h-12" />
                                <span className="text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Transparent documentation,<br />
                                    routing, and pricing process
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <GetQuoteComponent topic="Dangerous Goods Transport" link="/container-services-forms" />
                <FAQSearch category="dangerous-goods" />
            </>
        );
    }

    return (
        <>
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
            <OverviewServicesTabs
                renderOverview={renderOverview}
                renderServices={renderServices}
            />
        </>
    );
}
