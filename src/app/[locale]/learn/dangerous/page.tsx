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

    return (
        <OverviewServicesTabs
            renderOverview={() => (
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
                    <div>
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
                                <h1 className="mb-10 text-4xl font-light text-left md:text-left w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>Dangerous<br />Cargo</h1>
                                <Link href="/ocean-freight-forms">
                                    <Link href="/ocean-freight-forms">
                                        <RequestQuoteButton>Request a Quote</RequestQuoteButton>
                                    </Link>
                                </Link>
                            </div>
                            {/* Right column: heading and description */}
                            <div className="flex-1  rounded-2xl  p-6">
                                <h2 className="text-lg font-semibold mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
                    </div>
                </>
            )}
            renderServices={() => (
                <div>
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
                                                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                                        selectedClass === idx
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
                            <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Special Equipment Use</h3><p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
                            <h3 className="text-2xl font-medium mb-12" style={{ fontFamily: 'Raleway, sans-serif' }}>Safety and Emergency Protocols</h3>
                            <p className="mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Safety is a top priority when transporting dangerous goods. We ensure that all staff are thoroughly trained in hazmat handling and that our drivers and operators are well-versed in emergency response procedures.
                            </p>
                            <p style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Additionally, we equip our teams with emergency response kits containing containment materials, fire extinguishers, and first aid equipment, ensuring preparedness in any situation.
                            </p>
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
                <section className="w-full max-w-7xl mx-auto mb-20">
                    <h2 className="text-2xl md:text-3xl font-normal mb-8 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Elevate Your Business with Our Expert Dangerous Cargo Services
                    </h2>
                    <p className="mb-10 text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Transporting dangerous cargo demands expertise, precision, and a steadfast commitment to safety. At Moon Navigation and Trading Co., we recognize the complexities involved in handling hazardous materials. Here's how partnering with us can benefit your business:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Premium Service, Premium Returns
                            </h3>
                            <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Elevate business results with specialized handling, skill, and care. Our tailored solutions help you secure higher-value shipments while upholding top-level service every mile—maximizing your returns.
                            </p>
                            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Trust Built on Compliance
                            </h3>
                            <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                As certified experts in IMDG Code compliance, we manage all regulatory requirements on your behalf. This reliability ensures smooth operations and upholds your reputation in the industry.
                            </p>
                            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                End-to-End Expertise
                            </h3>
                            <p className="text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                From documentation and vessel selection to emergency response plans, Moon Navigation and Trading Co. provides comprehensive support, ensuring your dangerous cargo is handled with utmost professionalism and care.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Unlock New Opportunities
                            </h3>
                            <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Expand what you ship with this elevated service. Risk thresholds, money, and effort are minimized as Moon Navigation and Trading Co. unlocks new commercial opportunities—allowing dangerous cargo to confidently enter viable, specialized trades.
                            </p>
                            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Tailored Safety and Handling
                            </h3>
                            <p className="text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Every shipment and packaging need is unique. Rely on solutions not available off the shelf or designed for broad categories. Our solutions are designed to mitigate risks while maintaining the integrity of your cargo.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-7xl mx-auto mb-20">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Mastering the Challenges of Dangerous Goods Transportation
                    </h2>
                    <p className="mb-12 text-muted-foreground text-sm md:text-base max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Transporting dangerous goods presents substantial business opportunities but requires a deep understanding of its complexities. At Moon Navigation and Trading Co., we specialize in offering comprehensive solutions to navigate the intricacies of this critical industry.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                {/* Icon: Elevated Costs */}
                            </div>
                            <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Elevated Costs
                            </h3>
                            <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Specialized training, packaging, and insurance come with a premium. However, these investments are essential to ensure the safety and compliance of your shipments.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                {/* Icon: Intricate Regulations */}
                            </div>
                            <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Intricate Regulations
                            </h3>
                            <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Dangerous cargo is governed by stringent regulations and route restrictions. Our firm's expertise guarantees that these challenges are navigated efficiently and effectively.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                {/* Icon: Risk Management and Liability */}
                            </div>
                            <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Risk Management and Liability
                            </h3>
                            <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                The transportation of hazardous materials carries inherent risks. We proactively address these concerns through robust management systems and comprehensive training for our staff, ensuring your shipments are handled with the utmost care.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full max-w-7xl mx-auto mb-20">
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
                <section className="w-full max-w-7xl mx-auto my-20">
                <h2 className="text-2xl md:text-3xl font-normal mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Reasons to Choose Moon Navigation and Trading Co. For Your International Trade
                </h2>
                <div className="mb-12" style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.5rem', fontWeight: 400 }}>
                    {/* Subtitle if needed */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center">
                        {/* Replace with your own SVG or Image */}
                        <h3 className="font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Expert Trade Knowledge</h3>
                        <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our deep expertise in global commerce, logistics, and customs regulations.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Strong Global Network</h3>
                        <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our strong partnerships with airlines, shipping lines, and regulatory bodies worldwide.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Custom-Tailored Trade Solutions</h3>
                        <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our personalized strategies for importers, exporters, and traders.
                        </p>
                    </div>
                    {/* Feature 4 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Reliable Compliance & Risk Management</h3>
                        <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our full compliance with international trade laws.
                        </p>
                    </div>
                </div>
            </section>
                <GetQuoteComponent topic="Dangerous Cargo" link="/ocean-freight-forms" />
                <FAQSearch category="dangerous-cargo-transport" />
            </div>
            )}
        />
    )
}
