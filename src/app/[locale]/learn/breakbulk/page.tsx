import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Metadata } from "next"
import Head from "next/head"

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
            <div className="w-full">
                {/* Top Banner Image */}
                <div className="w-full overflow-hidden mb-8">
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
                        <h1 className="text-2xl md:text-3xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            BreakBulk Cargo
                        </h1>
                        <Link href="/ocean-freight-forms" passHref legacyBehavior>
                            <a className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors w-max">
                                Request a Quote
                            </a>
                        </Link>
                    </div>
                    {/* Right: Info Card */}
                    <div className="flex-1 rounded-2xl  p-6">
                        <h2 className="text-lg font-semibold mb-3 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            What is BreakBulk Cargo&nbsp;?
                        </h2>
                        <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Breakbulk cargo refers to large, non-containerized shipments that require individual loading and unloading. Too heavy or heavy in large blocks, breakbulk demands careful handling and specialized logistics. Typically managed using durable vessels, breakbulk cargo is comprised of miscellaneous vessels (MPP's) designed for modular cargo capabilities. Common examples of breakbulk cargo include steel, construction materials, and machinery.
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            At Moon Navigation and Trading Co., we excel in the transportation of breakbulk cargo, leveraging our expertise to manage the unique challenges associated with each shipment. Dedicated project teams provide safety and efficiency, ensuring every project proceeds smoothly. We deliver tailored logistics solutions that meet the specific needs of our clients, delivering reliable and timely transportation for all breakbulk shipments.
                        </p>
                    </div>
                </div>
                {/* Examples of BreakBulk Cargo Section */}
                <section className="w-full mt-16 mb-8 px-4 md:px-0">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Examples of BreakBulk Cargo
                    </h2>
                    <p className="text-muted-foreground mb-8 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Our BreakBulk services handle various types of equipment, including:
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center px-4 max-w-[180px]">
                            <img
                                src="/breakbulk-steel-beams.jpg"
                                alt="Steel Beams, Pipes & Coils"
                                className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className="font-medium text-sm mb-1">Steel Beams, Pipes &amp; Coils</h3>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center px-4 max-w-[180px]">
                            <img
                                src="/breakbulk-prefab-units.jpg"
                                alt="Pre-Fabricated Housing Units & Industrial Components"
                                className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className="font-medium text-sm mb-1">Pre-Fabricated Housing Units &amp; Industrial Components</h3>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center px-4 max-w-[180px]">
                            <img
                                src="/breakbulk-construction-machinery.jpg"
                                alt="Construction Machinery"
                                className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className="font-medium text-sm mb-1">Construction Machinery</h3>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center px-4 max-w-[180px]">
                            <img
                                src="/breakbulk-railway-equipment.jpg"
                                alt="Railway Equipment & Vehicles"
                                className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className="font-medium text-sm mb-1">Railway Equipment &amp; Vehicles</h3>
                        </div>
                        {/* Card 5 */}
                        <div className="flex flex-col items-center text-center px-4 max-w-[180px]">
                            <img
                                src="/breakbulk-project-cargo.jpg"
                                alt="Project/Out of Gauge Cargo"
                                className="rounded-full w-28 h-28 object-cover mb-4 border border-gray-200"
                                loading="lazy"
                            />
                            <h3 className="font-medium text-sm mb-1">Project/Out of Gauge Cargo Too Large for Containers</h3>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center mt-12 mb-8">
                    <div className="bg-background rounded-2xl shadow border border-border px-6 py-7 max-w-7xl w-full">
                        <h2 className="text-base md:text-lg font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Key Characteristics of Breakbulk Cargo At Moon Navigation and Trading Co.
                        </h2>
                        <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                            <li>
                                <span className="font-semibold">• Large and Manageable Weight &amp; Size:</span> Our breakbulk cargo typically exceeds pallet and truck limits in size, allowing us to handle outsized loads with custom project solutions.
                            </li>
                            <li>
                                <span className="font-semibold">• Loaded or Unloaded Piece by Piece:</span> Each item is loaded and unloaded piece by piece using external cranes, forklifts, or vessel lifting devices to accommodate unique requirements throughout the entire journey.
                            </li>
                            <li>
                                <span className="font-semibold">• Transported on Trailers &amp; Multi-Purpose Vessels:</span> Often not containerized, these shipments are delivered via trailers, breakbulk vessels, and heavy-lift ships, allowing for transportation of massive individual components.
                            </li>
                            <li>
                                <span className="font-semibold">• Ideal for Cargo That Can't Be Unitized:</span> For oversized equipment or materials that cannot be palletized, we offer resulting loading and lashing for flexible, security-first delivery.
                            </li>
                            <li>
                                <span className="font-semibold">• Essential for Construction, Manufacturing &amp; Infrastructure Projects:</span> Our Breakbulk cargo plays a pivotal role in supporting industries that require the import or transshipment services involving machinery, steel structures, pre-fabricated units, and more.
                            </li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-5">
                            At Moon Navigation &amp; Trading Co., we are dedicated to providing tailored breakbulk transportation solutions that meet the unique demands of each project, ensuring safety, efficiency, and reliability at every milestone.
                        </p>
                    </div>
                </section>
                <section className="w-full max-w-7xl mx-auto mt-16 mb-10 px-4">
                    <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Our Breakbulk Cargo Services - At Moon Navigation and Trading Co.
                    </h2>
                    <div className="flex flex-col md:flex-row gap-10 justify-center">
                        {/* Left Column: 1. Specialized Vessel Chartering */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-base md:text-lg font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            <div className="flex flex-row gap-3 mt-2">
                                <img
                                    src="/breakbulk-cargo-windmill.jpg"
                                    alt="Breakbulk Windmill Cargo"
                                    className="rounded-xl object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Right Column: 2. Custom Handling & Stowage */}
                        <div className="flex-1 flex flex-col">
                            <h3 className="text-base md:text-lg font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            <div className="w-full flex justify-center mt-2">
                                <img
                                    src="/breakbulk-handling-stowage.jpg"
                                    alt="Breakbulk Handling and Stowage"
                                    className="rounded-xl object-cover mt-6"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: 3. Crane & Port Handling and 4. Customs Clearance & Documentation */}
                <section className="w-full mt-12 mb-8 px-4 md:px-0 flex flex-col gap-32">
                    {/* 3. Crane & Port Handling */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left: Text */}
                        <div className="flex-1">
                            <h3 className="text-base md:text-lg font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            <h3 className="text-base md:text-lg font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                        <h3 className="text-base md:text-lg font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                    <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Reasons to Choose Our Breakbulk Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-7xl mx-auto">
                        {/* Specialized Expertise */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="font-semibold mb-2 text-foreground">Specialized Expertise</h3>
                            <p className="text-muted-foreground text-sm">
                                Years of experience handling non-containerized, oversized, and irregular cargo with precision.
                            </p>
                        </div>
                        {/* End-to-End Logistics */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="font-semibold mb-2 text-foreground">End-to-End Logistics</h3>
                            <p className="text-muted-foreground text-sm">
                                From pickup, customs clearance, and final site handling, we orchestrate all shipment solutions.
                            </p>
                        </div>
                        {/* Advanced Handling Solutions */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="font-semibold mb-2 text-foreground">Advanced Handling Solutions</h3>
                            <p className="text-muted-foreground text-sm">
                                Space-efficient stowage, lifting plans, and securing techniques for safe breakbulk transport.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 max-w-7xl mx-auto mt-10">
                        {/* Global Shipping Network */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="font-semibold mb-2 text-foreground">Global Shipping Network</h3>
                            <p className="text-muted-foreground text-sm">
                                Strong partnerships with breakbulk carriers, agents, and worldwide project partners for seamless coordination.
                            </p>
                        </div>
                        {/* Regulatory Compliance & Dedicated Support */}
                        <div className="flex flex-col items-center text-center px-4">
                            <h3 className="font-semibold mb-2 text-foreground">Regulatory Compliance &amp; Dedicated Support</h3>
                            <p className="text-muted-foreground text-sm">
                                Ensuring adherence to international shipping regulations with expert guidance at every stage.
                            </p>
                        </div>
                    </div>
                </section>
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
                        />
                    </div>
                </section>
            </div>
        </>
    )
}
