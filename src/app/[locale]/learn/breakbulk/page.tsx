import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Metadata } from "next"
import Head from "next/head"
import RequestQuoteButton from "@/components/RequestQuoteButton"
import FAQSearch from "@/components/faq"

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
                            background: "foreground"
                        }}
                    >
                        <h2
                            className="text-primary md:text-[15px] font-bold mb-4"
                            style={{
                                fontFamily: 'Raleway, sans-serif',
                                letterSpacing: "0.01em"
                            }}
                        >
                            Key Characteristics of Breakbulk Cargo At Moon Navigation and Trading Co.
                        </h2>
                        <ul className="space-y-2 text-[11px] md:text-[13px] text-primary pl-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold text-primary">Large but Manageable Weight &amp; Size:</span> Our breakbulk cargo typically eclipses basic pallet and truck limits in both size and weight, allowing us to handle substantial sections with precision and care.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold text-primary">Loaded &amp; Unloaded Piece by Piece:</span> Each item is loaded and unloaded piece by piece using external cranes, forklifts, or vessel lifting equipment, ensuring the utmost support from ground arrival to on-board stowage.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold text-primary">Transported on Breakbulk &amp; Multi-Purpose Vessels (MPVs):</span> Our solutions utilize ships designed for specific cargo handling and flexible stowage configurations, accommodating various module and piece sizes.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold text-primary">Ideal for Cargo That Can't Fit into Containers:</span> Our breakbulk shipments are secured individually for reliable, efficient loading and lashing, making them the best choice for items that defy unitization.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#222] mr-2" style={{ fontWeight: 600, fontSize: "13px" }}>✔</span>
                                <span>
                                    <span className="font-semibold text-primary">Essential for Construction, Manufacturing, &amp; Infrastructure Projects:</span> Our breakbulk cargo plays a vital role in supporting industries that require large-scale imports and transshipment of machinery, steel structures, pre-fabricated units, and more.
                                </span>
                            </li>
                        </ul>

                    </div>
                    <p className="text-[11px] text-[#888] mt-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation &amp; Trading Co., we are committed to providing tailored breakbulk transportation solutions that meet the unique demands of every project, ensuring safety, efficiency, and reliability at every milestone.
                        </p>
                </section>
                
                <section className="w-full max-w-[1600px] mx-auto mt-20 mb-10 px-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <h2 className="text-4xl md:text-5xl font-light text-[#3a4fcf] mb-16 text-left md:text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Our Breakbulk Cargo Services -At Moon Navigation and Trading Co.
                    </h2>
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left: 1. Specialized Vessel Chartering */}
                        <div className="flex-1 min-w-[340px]">
                            <h3 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                1. Specialized Vessel Chartering
                            </h3>
                            <p className="text-lg mb-4">Breakbulk cargo requires specific vessel types to accommodate large, irregularly shaped, and heavy loads. We provide access to:</p>
                            <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
                                <li><span className="font-medium">Breakbulk Vessels</span> – Designed to carry non-containerized cargo, allowing individual loading and securing.</li>
                                <li><span className="font-medium">Multi-Purpose Vessels (MPVs)</span> – Used for both containerized and breakbulk shipments, offering flexibility.</li>
                                <li><span className="font-medium">Heavy Lift Vessels</span> – Equipped with onboard cranes to handle oversized and heavy cargo without relying on port cranes.</li>
                            </ul>
                            <p className="text-lg mt-4">Our chartering solutions ensure cost-effective and secure transport, whether for single shipments or long-term contracts.</p>
                        </div>
                        {/* Right: Images */}
                        <div className="flex-1 flex flex-row gap-4 justify-center items-start">
                            <img src="/breakbulk-cargo-windmill.jpg" alt="Breakbulk Windmill Cargo" className="rounded-[70px] w-[600px] h-[400px] object-cover" style={{ objectPosition: 'center' }} loading="lazy" />
                        
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center mt-16">
                        {/* Left: Image for 2. Custom Handling & Stowage */}
                        <div className="flex-1 flex justify-center">
                            <img src="/breakbulk-handling-stowage.jpg" alt="Breakbulk Handling and Stowage" className="rounded-[60px] w-[600px] h-[400px] object-cover" style={{ objectPosition: 'center' }} loading="lazy" />
                        </div>
                        {/* Right: Text for 2. Custom Handling & Stowage */}
                        <div className="flex-1 min-w-[340px]">
                            <h3 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                2. Custom Handling & Stowage
                            </h3>
                            <p className="text-lg mb-4">Breakbulk cargo handling requires careful planning to prevent damage and ensure stability. We provide:</p>
                            <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
                                <li><span className="font-medium">Custom Lashing & Securing</span> – Using steel chains, wooden bracing, and straps for stability.</li>
                                <li><span className="font-medium">Cargo Protection Measures</span> – Weatherproofing and shock-absorbing techniques.</li>
                                <li><span className="font-medium">Load Balancing & Stowage Optimization</span> – Preventing shifting and maintaining vessel stability.</li>
                            </ul>
                            <p className="text-lg mt-4">We ensure that your cargo is fully secured and protected throughout the voyage.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center mt-16">
                        {/* Left: Text for 3. Crane & Port Handling */}
                        <div className="flex-1 min-w-[340px]">
                            <h3 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                3. Crane & Port Handling
                            </h3>
                            <p className="text-lg mb-4">Efficient loading and unloading is critical for breakbulk cargo due to its size and complexity. We coordinate:</p>
                            <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
                                <li><span className="font-medium">High-Capacity Port Cranes</span> – Utilizing gantry cranes, mobile cranes, and floating cranes for seamless lifting.</li>
                                <li><span className="font-medium">Reach Stackers & Forklifts</span> – For efficient handling of medium-weight breakbulk shipments.</li>
                                <li><span className="font-medium">Expert Stevedoring Services</span> – Ensuring smooth port-to-vessel cargo transfer.</li>
                            </ul>
                            <p className="text-lg mt-4">With our expert handling operations, we reduce risks and minimize delays during cargo transfer.</p>
                        </div>
                        {/* Right: Image for 3. Crane & Port Handling */}
                        <div className="flex-1 flex justify-center">
                            <img src="/breakbulk-inland-delivery.jpg" alt="Breakbulk Inland Delivery" className="rounded-[60px] w-[600px] h-[400px] object-cover" style={{ objectPosition: 'center' }} loading="lazy" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center mt-16">
                        {/* Left: Image for 4. Customs Clearance & Documentation */}
                        <div className="flex-1 flex justify-center order-2 md:order-1">
                            <img src="/breakbulk-customs-docs.jpg" alt="Breakbulk Customs Clearance" className="rounded-[60px] w-[600px] h-[400px] object-cover" style={{ objectPosition: 'center' }} loading="lazy" />
                        </div>
                        {/* Right: Text for 4. Customs Clearance & Documentation */}
                        <div className="flex-1 min-w-[340px] order-1 md:order-2">
                            <h3 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                4. Customs Clearance & Documentation
                            </h3>
                            <p className="text-lg mb-4">Navigating customs regulations for breakbulk cargo can be complex due to varying international standards. We provide:</p>
                            <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
                                <li><span className="font-medium">Import & Export Compliance</span> – Ensuring cargo adheres to maritime and port regulations worldwide.</li>
                                <li><span className="font-medium">Cargo Documentation & Permits</span> – Managing bills of lading, packing lists, cargo manifests, and customs declarations.</li>
                                <li><span className="font-medium">Tax & Duty Management</span> – Handling tariff classifications, duty exemptions, and payment processing for smooth clearance.</li>
                            </ul>
                            <p className="text-lg mt-4">Our customs experts ensure that your cargo moves swiftly through regulatory processes, preventing unnecessary delays.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center mt-16">
                        {/* Left: Text for 5. Inland Transport & Final Delivery */}
                        <div className="flex-1 min-w-[340px]">
                            <h3 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                5. Inland Transport & Final Delivery
                            </h3>
                            <p className="text-lg mb-4">We ensure seamless cargo transport from ports to final destinations, offering:</p>
                            <ul className="list-disc pl-6 text-lg mb-4 space-y-2">
                                <li><span className="font-medium">Port-to-Site Delivery</span> – Seamless movement from ports to project locations.</li>
                                <li><span className="font-medium">Specialized Trucks & Trailers</span> – Including low-bed trailers, modular hydraulic transporters, and extendable trailers.</li>
                                <li><span className="font-medium">Escort Vehicles & Road Permits</span> – Managing police escorts and special transport permits for oversized loads.</li>
                            </ul>
                            <p className="text-lg mt-4">We ensure a smooth, end-to-end logistics process, from port arrival to final delivery at project sites.</p>
                        </div>
                        {/* Right: Image for 5. Inland Transport & Final Delivery */}
                        <div className="flex-1 flex justify-center">
                            <img src="/breakbulk-project-cargo.jpg" alt="Breakbulk Project Cargo" className="rounded-[60px] w-[600px] h-[400px] object-cover" style={{ objectPosition: 'center' }} loading="lazy" />
                        </div>
                    </div>
                </section>
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
                <FAQSearch category="breakbulk-cargo" />        
            </div>
        </>
    )
}
