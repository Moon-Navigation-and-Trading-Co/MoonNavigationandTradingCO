"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { useState } from "react"

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
        <>
            <Head>
                <title>Dangerous Cargo Shipping &amp; Handling | Moon Navigation and Trading Co.</title>
                <meta
                    name="description"
                    content="Learn about dangerous cargo shipping, IMDG Code, IATA DGR, ADR, and how Moon Navigation and Trading Co. ensures safe, compliant transport of hazardous materials worldwide."
                />
                <meta
                    name="keywords"
                    content="dangerous cargo, hazardous materials, IMDG Code, IATA DGR, ADR, shipping, transport, Moon Navigation and Trading Co., packaging, labeling, risk assessment, special equipment, safety protocols"
                />
                <meta property="og:title" content="Dangerous Cargo Shipping &amp; Handling | Moon Navigation and Trading Co." />
                <meta property="og:description" content="Expert handling and transport of dangerous cargo and hazardous materials. Learn about our process, compliance, and safety standards." />
                <meta property="og:image" content="/dangerous-cargo-banner.jpg" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.moonnavigation.com/learn/dangerous" />
            </Head>
            <div>
                {/* Image banner at the top */}
                <div className="w-full flex justify-center mb-8 mt-8">
                    <div className="w-full max-w-7xl">
                        <Image
                            src="/dangerous-cargo-banner.jpg"
                            alt="Dangerous Cargo Banner"
                            width={1200}
                            height={350}
                            className="rounded-3xl object-cover w-full h-[220px] sm:h-[350px]"
                            priority
                        />
                    </div>
                </div>
                {/* Two-column content below the image */}
                <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 mb-12 max-w-7xl mx-auto">
                    {/* Left column: title and button */}
                    <div className="flex-1 flex flex-col items-center md:items-start w-full">
                        <h1 className="mb-10 text-4xl font-light text-left md:text-left w-full">Dangerous<br />Cargo</h1>
                        <Link href="/ocean-freight-forms">
                            <Link href="/ocean-freight-forms">
                                <Button className="px-8 py-2 rounded-full text-base font-semibold">Request a Quote</Button>
                            </Link>
                        </Link>
                    </div>
                    {/* Right column: heading and description */}
                    <div className="flex-1  rounded-2xl  p-6">
                        <h2 className="text-lg font-semibold mb-3 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            What is Dangerous Cargo ?
                        </h2>
                        <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Dangerous cargo includes materials that pose significant risks to health, safety, property, and the environment due to their hazardous nature. These materials, ranging from flammable and explosive substances to toxic, radioactive, and corrosive chemicals, require meticulous handling and adherence to strict international safety regulations such as the IMDG Code, IATA DGR, and ADR. Ensuring proper classification, packaging, labeling, and documentation is essential to prevent accidents and ensure seamless transportation.
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            At Moon Navigation and Trading Co., we specialize in the safe, secure, and fully compliant transportation of hazardous materials. With extensive industry expertise, we provide tailored solutions that guarantee the highest safety standards, regulatory compliance, and efficient logistics management. Trust us to handle your most challenging cargo needs with professionalism and precision.
                        </p>
                    </div>
                </div>
                {/* Accordion/classes section below */}
                <Card className="w-full mt-10 mb-20 max-w-7xl mx-auto p-0 sm:p-5">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold mb-2">{t('title')}</CardTitle>
                        <CardContent className="p-0">
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
                            <h2 className="text-xl font-semibold mb-4">
                                {dangerousClasses[selectedClass]?.title}
                            </h2>
                            <div className="text-base leading-relaxed whitespace-pre-line">
                                {dangerousClasses[selectedClass]?.description}
                            </div>
                        </section>
                    </CardContent>
                </Card>
                <div className="w-full max-w-7xl mx-auto mt-20 mb-20">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-16">
                        Our Dangerous Cargo Handling and Transport Process
                    </h2>
                    {/* First row */}
                    <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                        <div className="flex-1">
                            <h3 className="text-2xl font-medium mb-4">Risk Assessment and Planning</h3>
                            <p className="mb-4">
                                The initial phase in transporting hazardous cargo involves a thorough risk assessment to identify potential hazards and risks associated with the materials.
                            </p>
                            <p className="mb-4">
                                At Moon Navigation and Trading Co., we meticulously evaluate the nature of the cargo, determine the most appropriate transport route, and identify any risks to the public, the environment, and the transport crew.
                            </p>
                            <p>
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
                            <h3 className="text-2xl font-medium mb-4">Packaging and Labeling</h3>
                            <p className="mb-4">
                                Proper packaging and labeling are critical for the secure transport of dangerous goods.
                            </p>
                            <p className="mb-4">
                                Our dedicated team at Moon Navigation and Trading Co. ensures that each item is packed in accordance with its hazard classification, with all necessary markings, labels, and documentation meticulously prepared.
                            </p>
                            <p>
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
                            <h3 className="text-3xl sm:text-4xl font-semibold text-primary mb-16">Special Equipment Use</h3>
                            <p className="mb-4">
                                At Moon Navigation and Trading Co., we employ specialized equipment designed specifically for the transport of dangerous cargo, including:
                            </p>
                            <ul className="mb-4 list-disc pl-6">
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
                            <h3 className="text-2xl font-medium mb-4">Safety and Emergency Protocols</h3>
                            <p className="mb-4">
                                Safety is a top priority when transporting dangerous goods. We ensure that all staff are thoroughly trained in hazmat handling and that our drivers and operators are well-versed in emergency response procedures.
                            </p>
                            <p>
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
                <section className="w-full bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
                    {/* Left: Text Content */}
                    <div className="flex-1 min-w-[260px]">
                        <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Get your Quote with Us
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our steamlined breakbulk cargo quotation process is designed for speed and accuracy. At Moon
                            Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by
                            Request system. Simply fill out our short form to initiate your request. Once submitted, our team
                            will assess your cargo's size, weight, handling requirements, and route feasibility to determine
                            the best transport solution. You will receive a customized quotation directly in your email,
                            ensuring accurate pricing, safe handling, and seamless delivery of your cargo.
                        </p>
                        <Link href="/ocean-freight-forms" passHref legacyBehavior>
                            <a className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium text-sm hover:bg-primary/90 transition-colors">
                                Request a Quote
                            </a>
                        </Link>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
                        <img
                            src="/quote-illustration.png"
                            alt="Quotation illustration"
                            className="w-[320px] h-auto object-contain"
                            style={{ maxWidth: 380 }}
                            loading="lazy"
                        />
                    </div>
                </section>
            </div>
        </>
    )
}
