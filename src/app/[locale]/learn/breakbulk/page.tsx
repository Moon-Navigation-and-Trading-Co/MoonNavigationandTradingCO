import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Metadata } from "next"
import Head from "next/head"
import RequestQuoteButton from "@/components/RequestQuoteButton"

export const metadata: Metadata = {
    title: "BreakBulk Cargo Services | Moon Navigation and Trading Co.",
    description: "Learn about BreakBulk cargo, its characteristics, and why Moon Navigation and Trading Co. is your trusted partner for breakbulk shipping, handling, and logistics solutions.",
    keywords: [
        "BreakBulk Cargo",
        "BreakBulk Shipping",
        "BreakBulk Logistics",
        "Non-containerized Cargo",
        "Project Cargo",
        "Heavy Lift",
        "Specialized Vessel Chartering",
        "Custom Handling",
        "Port Handling",
        "Customs Clearance",
        "Inland Transport",
        "Moon Navigation and Trading Co.",
        "Freight Quote",
        "Oversized Cargo",
        "Industrial Shipping",
        "Construction Materials Shipping"
    ],
    openGraph: {
        title: "BreakBulk Cargo Services | Moon Navigation and Trading Co.",
        description: "Discover expert BreakBulk cargo solutions, including vessel chartering, custom handling, port operations, and end-to-end logistics with Moon Navigation and Trading Co.",
        url: "https://www.moonnavigation.com/learn/breakbulk",
        type: "website",
        images: [
            {
                url: "/breakbulk-banner.jpg",
                width: 1200,
                height: 630,
                alt: "BreakBulk Cargo at port"
            }
        ]
    },
    alternates: {
        canonical: "https://www.moonnavigation.com/learn/breakbulk"
    }
}

import GetQuoteComponent from "@/components/getQuoteComponent"

export default function BreakBulkInfo() {
    const t = useTranslations("learn-breakbulk")

    return (
        <>
            <Head>
                <title>BreakBulk Cargo Services | Moon Navigation and Trading Co.</title>
                <meta name="description" content="Learn about BreakBulk cargo, its characteristics, and why Moon Navigation and Trading Co. is your trusted partner for breakbulk shipping, handling, and logistics solutions." />
                <meta name="keywords" content="BreakBulk Cargo, BreakBulk Shipping, BreakBulk Logistics, Non-containerized Cargo, Project Cargo, Heavy Lift, Specialized Vessel Chartering, Custom Handling, Port Handling, Customs Clearance, Inland Transport, Moon Navigation and Trading Co., Freight Quote, Oversized Cargo, Industrial Shipping, Construction Materials Shipping" />
                <meta property="og:title" content="BreakBulk Cargo Services | Moon Navigation and Trading Co." />
                <meta property="og:description" content="Discover expert BreakBulk cargo solutions, including vessel chartering, custom handling, port operations, and end-to-end logistics with Moon Navigation and Trading Co." />
                <meta property="og:image" content="/breakbulk-banner.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.moonnavigation.com/learn/breakbulk" />
                <link rel="canonical" href="https://www.moonnavigation.com/learn/breakbulk" />
            </Head>
            <div className="w-full max-w-7xl mx-auto">
                {/* Top Banner Image */}
                <div className="w-full h-[400px] object-cover object-center mt-10 rounded-3xl overflow-hidden">
                    <img
                        src="/breakbulk-banner.jpg"
                        alt="BreakBulk Cargo at port"
                        className="w-full h-[300px] object-cover object-center mt-10"
                        style={{ borderRadius: "12px" }}
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12">
                    {/* Left: Title & Button */}
                    <div className="flex-1 flex flex-col justify-start">
                        <h1 className="text-2xl md:text-3xl text-center md:text-left  mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            BreakBulk Cargo
                        </h1>
                        <Link href="/ocean-freight-forms">
                            <RequestQuoteButton>
                                Request a Quote
                            </RequestQuoteButton>
                        </Link>
                    </div>
                    {/* Right: Info Card */}
                    <div className="flex-1 rounded-2xl  p-6">
                        <h2 className="text-lg mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            What is BreakBulk Cargo&nbsp;?
                        </h2>
                        <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Breakbulk cargo refers to large, non-containerized shipments that require individual loading and unloading. Too heavy or heavy in large blocks, breakbulk demands careful handling and specialized logistics. Typically managed using durable vessels, breakbulk cargo is comprised of miscellaneous vessels (MPP's) designed for modular cargo capabilities. Common examples of breakbulk cargo include steel, construction materials, and machinery.
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we excel in the transportation of breakbulk cargo, leveraging our expertise to manage the unique challenges associated with each shipment. Dedicated project teams provide safety and efficiency, ensuring every project proceeds smoothly. We deliver tailored logistics solutions that meet the specific needs of our clients, delivering reliable and timely transportation for all breakbulk shipments.
                        </p>
                    </div>
                </div>
                {/* Examples of BreakBulk Cargo Section */}
                <section className="w-full max-w-7xl mx-auto mt-16 mb-8 px-4">
                    <h2 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Examples of BreakBulk Cargo
                    </h2>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Our BreakBulk services handle various types of equipment, including:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center max-w-[200px]">
                            <img
                                src="/breakbulk-steel-beams.jpg"
                                alt="Steel Beams, Pipes & Coils"
                                className="rounded-[50px] w-50 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className=" text-sm mb-1">Steel Beams, Pipes &amp; Coils</h3>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center max-w-[200px]">
                            <img
                                src="/breakbulk-prefab-units.jpg"
                                alt="Pre-Fabricated Housing Units & Industrial Components"
                                className="rounded-[50px] w-50 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className=" text-sm mb-1">Pre-Fabricated Housing Units &amp; Industrial Components</h3>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center max-w-[200px]">
                            <img
                                src="/breakbulk-construction-machinery.jpg"
                                alt="Construction Machinery"
                                className="rounded-[50px] w-50 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className=" text-sm mb-1">Construction Machinery</h3>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center max-w-[200px]">
                            <img
                                src="/breakbulk-railway-equipment.jpg"
                                alt="Railway Equipment & Vehicles"
                                className="rounded-[50px] w-50 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className=" text-sm mb-1">Railway Equipment &amp; Vehicles</h3>
                        </div>
                        {/* Card 5 */}
                        <div className="flex flex-col items-center text-center max-w-[200px]">
                            <img
                                src="/breakbulk-project-cargo.jpg"
                                alt="Project/Out of Gauge Cargo"
                                className="rounded-[50px] w-50 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className=" text-sm mb-1">Project/Out of Gauge Cargo Too Large for Containers</h3>
                        </div>
                    </div>
                </section>
                <section className="w-full justify-center mt-12 mb-8 place-items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <div
                        className="rounded-[22px] border border-[#e5e7eb] shadow-[0_2px_12px_0_rgba(0,0,0,0.03)] px-7 py-6 max-w-5xl w-full"
                        style={{
                            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.03)",
                            borderRadius: "22px",
                            border: "1px solid #e5e7eb",
                            background: "#fff"
                        }}
                    >
                        <h2
                            className="text-[13px] md:text-[15px] font-bold mb-4"
                            style={{
                                color: "#222",
                                fontFamily: 'Raleway, sans-serif',
                                letterSpacing: "0.01em"
                            }}
                        >
                            Key Characteristics of Breakbulk Cargo At Moon Navigation and Trading Co.
                        </h2>
                        <ul className="space-y-2 text-[11px] md:text-[13px] text-[#222] pl-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold" style={{ color: "#222" }}>Large but Manageable Weight &amp; Size:</span> Our breakbulk cargo typically eclipses basic pallet and truck limits in both size and weight, allowing us to handle substantial sections with precision and care.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold" style={{ color: "#222" }}>Loaded &amp; Unloaded Piece by Piece:</span> Each item is loaded and unloaded piece by piece using external cranes, forklifts, or vessel lifting equipment, ensuring the utmost support from ground arrival to on-board stowage.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold" style={{ color: "#222" }}>Transported on Breakbulk &amp; Multi-Purpose Vessels (MPVs):</span> Our solutions utilize ships designed for specific cargo handling and flexible stowage configurations, accommodating various module and piece sizes.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold" style={{ color: "#222" }}>Ideal for Cargo That Can't Fit into Containers:</span> Our breakbulk shipments are secured individually for reliable, efficient loading and lashing, making them the best choice for items that defy unitization.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold" style={{ color: "#222" }}>Essential for Construction, Manufacturing, &amp; Infrastructure Projects:</span> Our breakbulk cargo plays a vital role in supporting industries that require large-scale imports and transshipment of machinery, steel structures, pre-fabricated units, and more.
                                </span>
                            </li>
                        </ul>

                    </div>
                    <p className="text-[11px] text-[#888] mt-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation &amp; Trading Co., we are committed to providing tailored breakbulk transportation solutions that meet the unique demands of every project, ensuring safety, efficiency, and reliability at every milestone.
                        </p>
                </section>
                
                <section className="w-full max-w-7xl mx-auto mt-16 mb-10 px-4">
                    <h2 className="text-xl md:text-2xl mb-8 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Our Breakbulk Cargo Services - At Moon Navigation and Trading Co.
                    </h2>
                    <div className="flex flex-col md:flex-row gap-10 justify-center">
                        {/* Left Column: 1. Specialized Vessel Chartering */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-base md:text-lg mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                1. Specialized Vessel Chartering
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base mb-2">
                                Breakbulk cargo requires specific vessel types to accommodate large, irregularly shaped, and heavy loads with secure access to:
                            </p>
                            <ul className="list-disc pl-5 text-muted-foreground text-sm md:text-base mb-2 space-y-1">
                                <li>
                                    <span className="font-semibold">Breakbulk Vessels</span> – Designed to carry non-containerized cargo, allowing individual sections and heavy equipment to be loaded, stowed, and discharged efficiently.
                                </li>
                                <li>
                                    <span className="font-semibold">Multi-purpose Vessels</span> – Used to boost cargo flow and flexibility for shipments of differing sizes and flexibility.
                                </li>
                                <li>
                                    <span className="font-semibold">Heavy-lift Vessels</span> – Outfitted with onboard cranes and reinforced decks for project cargo and outsized machinery.
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-sm md:text-base mb-3">
                                Our chartering solutions deliver cost-effective and secure transport, whether for single project lifts or long-term contracts.
                            </p>
                        </div>
                        {/* Right Column: 2. Custom Handling & Stowage */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-base md:text-lg mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                2. Custom Handling &amp; Stowage
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base mb-2">
                                Precision in rigging and securing is core, carefully planning to prevent damage and maintain stability. We provide:
                            </p>
                            <ul className="list-disc pl-5 text-muted-foreground text-sm md:text-base mb-2 space-y-1">
                                <li><strong>Custom Lashing &amp; Securing</strong> – Every piece checked, anchored, and lashed using the safest methods.</li>
                                <li><strong>Specialized Stowage Planning</strong> – Optimized for vessel balance, access, and cargo safety.</li>
                                <li><strong>On-site Supervision</strong> – Our experts oversee every stage, ensuring compliance and cargo stability.</li>
                            </ul>
                            <p className="text-muted-foreground text-sm md:text-base mb-3">
                                We ensure that your cargo is safely received and protected throughout the voyage.
                            </p>
                        </div>
                    </div>
                    {/* Images row - placed after both columns */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <div className="flex-1">
                            <img
                                src="/breakbulk-cargo-windmill.jpg"
                                alt="Breakbulk Windmill Cargo"
                                className="rounded-xl object-cover w-full h-60"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1">
                            <img
                                src="/breakbulk-handling-stowage.jpg"
                                alt="Breakbulk Handling and Stowage"
                                className="rounded-xl object-cover w-full h-60"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>
                {/* Section: 3. Crane & Port Handling and 4. Customs Clearance & Documentation */}
                <section className="w-full mt-12 mb-8 px-4 md:px-0 flex flex-col gap-32">
                    {/* 3. Crane & Port Handling */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left: Text */}
                        <div className="flex-1">
                            <h3 className="text-base md:text-lg mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                3. Crane &amp; Port Handling
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base mb-2">
                                Efficient loading and unloading is critical for breakbulk cargo due to its size and complexity. We coordinate:
                            </p>
                            <ul className="list-disc pl-5 text-muted-foreground text-sm md:text-base mb-2 space-y-1">
                                <li>
                                    <span className="font-semibold">High Capacity Port Cranes</span> – Utilizing gantry cranes, mobile cranes, and heavy systems for seamless cargo transfer.
                                </li>
                                <li>
                                    <span className="font-semibold">Rapid Berth-to-Freight</span> – Fast discharge/loading at modern multipurpose terminals or private project berths.
                                </li>
                                <li>
                                    <span className="font-semibold">Expert Stevedore Services</span> – Ensuring professional rigging, mobile equipment operation, and on-site supervision.
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-sm md:text-base">
                                With our expert handling solutions, we reduce risk and minimize delays during cargo transfer.
                            </p>
                        </div>
                        {/* Right: Image */}
                        <div className="flex-shrink-0 w-full md:w-[320px]">
                            <img
                                src="/breakbulk-crane-port.jpg"
                                alt="Breakbulk Crane and Port Handling"
                                className="rounded-2xl w-full h-[140px] md:h-[160px] object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    {/* 4. Customs Clearance & Documentation */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left: Image */}
                        <div className="flex-shrink-0 w-full md:w-[320px] order-1 md:order-none">
                            <img
                                src="/breakbulk-customs-docs.jpg"
                                alt="Breakbulk Customs Clearance"
                                className="rounded-2xl w-full h-[140px] md:h-[160px] object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                        {/* Right: Text */}
                        <div className="flex-1">
                            <h3 className="text-base md:text-lg mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                4. Customs Clearance &amp; Documentation
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base mb-2">
                                Navigating customs regulations for breakbulk cargo can be complex due to varying international standards and project requirements.
                            </p>
                            <ul className="list-disc pl-5 text-muted-foreground text-sm md:text-base mb-2 space-y-1">
                                <li>
                                    <span className="font-semibold">Import &amp; Export Compliance</span> – Ensuring cargo adheres to maritime and port regulations worldwide.
                                </li>
                                <li>
                                    <span className="font-semibold">Cargo Documentation</span> – Proactive handling of manifests, waybills, certificates, and insurance.
                                </li>
                                <li>
                                    <span className="font-semibold">Track &amp; Transparency</span> – Handling all port notifications, customs clearances, and record processing.
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-sm md:text-base">
                                Our dedicated team ensures that your cargo sails through regulatory processes, preventing unnecessary delays.
                            </p>
                        </div>
                    </div>
                </section>
                {/* 5. Inland Transport & Final Delivery */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-32">
                    {/* Left: Text */}
                    <div className="flex-1">
                        <h3 className="text-base md:text-lg mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            5. Inland Transport &amp; Final Delivery
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base mb-2">
                            BNL ensures seamless cargo logistics from port to final destination, offering:
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground text-sm md:text-base mb-2 space-y-1">
                            <li>
                                <span className="font-semibold">Port to Site Delivery</span> – Seamless movement from ports to project locations.
                            </li>
                            <li>
                                <span className="font-semibold">Specialized Trucks &amp; Trailers</span> – Including low-bed trucks, modular hydraulic transporters, and extendable trailers if needed.
                            </li>
                            <li>
                                <span className="font-semibold">Escort Vehicles &amp; Route Permits</span> – Managing police escorts and special transport permits for oversized loads.
                            </li>
                        </ul>
                        <p className="text-muted-foreground text-sm md:text-base">
                            We ensure a smooth, end-to-end logistics process. You get control on the final delivery of project sites.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="flex-shrink-0 w-full md:w-[320px]">
                        <img
                            src="/breakbulk-inland-delivery.jpg"
                            alt="Breakbulk Inland Transport and Final Delivery"
                            className="rounded-2xl w-full h-[140px] md:h-[160px] object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                </div>
                {/* Reasons to Choose Our Breakbulk Services */}
                <section className="w-full mt-20 mb-8 px-4 md:px-0">
                    <h2 className="text-xl md:text-2xl mb-10 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Reasons to Choose Our Breakbulk Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto">
                        {/* Specialized Expertise */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="mb-2 text-foreground">Specialized Expertise</h3>
                            <p className="text-muted-foreground text-sm">
                                Years of experience handling non-containerized, oversized, and irregular cargo with precision.
                            </p>
                        </div>
                        {/* End-to-End Logistics */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="mb-2 text-foreground">End-to-End Logistics</h3>
                            <p className="text-muted-foreground text-sm">
                                From pickup, customs clearance, and final site handling, we orchestrate all shipment solutions.
                            </p>
                        </div>
                        {/* Advanced Handling Solutions */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="mb-2 text-foreground">Advanced Handling Solutions</h3>
                            <p className="text-muted-foreground text-sm">
                                Space-efficient stowage, lifting plans, and securing techniques for safe breakbulk transport.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 max-w-7xl mx-auto mt-10">
                        {/* Global Shipping Network */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="mb-2 text-foreground">Global Shipping Network</h3>
                            <p className="text-muted-foreground text-sm">
                                Strong partnerships with breakbulk carriers, agents, and worldwide project partners for seamless coordination.
                            </p>
                        </div>
                        {/* Regulatory Compliance & Dedicated Support */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="mb-2 text-foreground">Regulatory Compliance &amp; Dedicated Support</h3>
                            <p className="text-muted-foreground text-sm">
                                Ensuring adherence to international shipping regulations with expert guidance at every stage.
                            </p>
                        </div>
                    </div>
                </section>
                <GetQuoteComponent topic="Breakbulk Cargo" link="/ocean-freight-forms" /> 
            </div>
        </>
    )
}
