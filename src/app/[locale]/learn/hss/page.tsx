"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import OverviewServicesTabs from "@/components/overview-services";
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import VesselCarousel from "@/components/vessel-carousel";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function HSS() {
    const t = useTranslations("learn-hss")

    return (
        <OverviewServicesTabs
            renderOverview={() => (
            <main className="flex flex-col items-center w-full" style={{ fontFamily: "Raleway, sans-serif" }}>
                {/* Hero Section */}
                <section className="w-full ">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="w-full h-[350px] relative rounded-[60px] overflow-hidden mb-10">
                            <img
                                src="/hss-hero.jpg"
                                alt="Container cranes handling cargo at port during sunset"
                                className="object-cover w-full h-[350px] rounded-[60px]"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h1 className="text-3xl md:text-4xl mb-6 text-foreground">
                                    Handling, Stevedoring and Storage Services
                                </h1>
                                <Link href="/ship-maintenance-forms">
                                    <Button variant="default" className="mt-2">
                                        Request a Quote
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <h2 className="text-xl text-primary mb-2">
                                    What is Handling, Stevedoring and Storage Services?
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    Handling, stevedoring, and storage are critical components in port logistics. Handling involves the movement and coordination of cargo from ship to unloading, and between transport environments. Stevedoring is the specialized labor of loading and offloading cargo from ships using skilled professionals, with strict equipment, teamwork and safety. Storage refers to short- and longer-term warehousing of cargo until it’s ready for further shipment.
                                </p>
                                <p className="text-muted-foreground">
                                    At Moon Navigation and Trading Co., we ensure these essential activities involve seamless planning, skilled teams, and advanced equipment for safe, reliable results. We handle vessel and terminal operations, warehouse management, and all related logistics with maximum safety and efficiency—minimizing downtime and maximizing peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            )}
            renderServices={() => (
            <main className="flex flex-col items-center w-full" style={{ fontFamily: "Raleway, sans-serif" }}>
                {/* Section Tabs */}
                <div className="w-full max-w-7xl mx-auto flex flex-row justify-center gap-16 py-12">
                    <a href="#cargo-handling" className="bg-[#d3e3f1] text-foreground font-raleway font-regular text-lg rounded-lg px-10 py-4 min-w-[240px] shadow-none text-center">Cargo Handling</a>
                    <a href="#stevedoring-services" className="bg-[#d3e3f1] text-foreground font-raleway font-regular text-lg rounded-lg px-10 py-4 min-w-[240px] shadow-none text-center">Stevedoring Services</a>
                    <a href="#storage-warehousing" className="bg-[#d3e3f1] text-foreground font-raleway font-regular text-lg rounded-lg px-10 py-4 min-w-[240px] shadow-none text-center">Secure Storage & Warehousing</a>
                </div>
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-raleway font-regular text-start mb-12 text-[#377393]">
                    Our Cargo Handling, Stevedoring, and Storage Services
                </h2>
                {/* Main Content */}
                <div id="cargo-handling" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-24">
                    {/* Left: Image */}
                    <div className="flex justify-center items-center">
                        <div className="rounded-[30px] overflow-hidden ">
                            <img
                                src="/hss-cargo-handling.jpg"
                                alt="Cargo cranes and ships at port"
                                className="object-cover w-full h-[280px] md:h-[340px] mt-20"
                                style={{ minWidth: 500, minHeight: 200 }}
                            />
                        </div>
                    </div>
                    {/* Right: Text Content */}
                    <div>
                        <h3 className="text-xl md:text-2xl  mb-2 text-foreground">
                            1. Cargo Handling Services
                        </h3>
                        <p className="text-primary font-medium mb-2">
                            Precision handling for every cargo type
                        </p>
                        <p className="text-muted-foreground font-raleway font-light mb-4">
                            Our cargo handling division ensures smooth and safe transfer of all types of cargo using industry-leading standards, modern equipment, and expert teams. We coordinate loading, unloading, and storage to minimize downtime and safeguard cargo—handling a combination of mechanization and proven skill and teamwork.
                        </p>
                        <div>
                            <h4 className=" mb-1 text-foreground">Core Handling Capabilities:</h4>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                                <li>Vessel loading and discharging (containerized, breakbulk, and heavy cargo)</li>
                                <li>Efficient cargo sorting and segregation</li>
                                <li>Manual and mechanized cargo movement</li>
                                <li>Project, oversized, and heavy-lift cargo transfer</li>
                                <li>General, reefer, and hazardous materials handled safely</li>
                                <li>Customs clearance and port coordination</li>
                                <li>Accurate cargo tallying and electronic records</li>
                            </ul>
                        </div>
                        <p className="text-muted-foreground font-raleway font-light mt-4">
                            We maintain continuous coordination with terminal operators, customs officials, and inland transporters to minimize bottlenecks and accelerate cargo throughput.
                        </p>
                    </div>
                </div>
            {/* Stevedoring Services Section */}
            <div id="stevedoring-services" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-24">
                {/* Left: Text Content */}
                <div>
                    <h3 className="text-xl md:text-2xl  mb-2 text-foreground">
                        2. Professional Stevedoring Services
                    </h3>
                    <p className="text-primary font-medium mb-2">
                        Expert manpower. Advanced techniques. Flawless execution.
                    </p>
                    <p className="text-muted-foreground font-raleway font-light mb-4">
                        Our experienced stevedoring teams specialize in safely executing loading and unloading operations for all types of vessels, including general cargo ships, bulk carriers, Ro-ro vessels, container ships, and project cargo vessels.
                        <br />
                        We ensure optimal vessel turnaround, minimum downtime at sea/berth, and cargo safety throughout each operation.
                    </p>
                    <div>
                        <h4 className=" mb-1 text-foreground">Scope of Stevedoring Services:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                            <li>Cargo discharging and loading (breakbulk, bulk, heavy lift, OOG, roro)</li>
                            <li>Lashing, securing, and unlashing of cargo</li>
                            <li>Project cargo lifting plans and execution</li>
                            <li>Onboard stowage planning & regulatory compliance</li>
                            <li>Stevedore labor management and safety compliance</li>
                            <li>Shift-based operations for continuous vessel handling</li>
                            <li>Documentation support (cargo manifests, transfer points, tally sheets)</li>
                        </ul>
                    </div>
                    <p className="text-muted-foreground font-raleway font-light mt-4 text-xs">
                        We operate in full compliance with IMO, ISPS Code, port authority regulations, and international cargo handling standards.
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex justify-center items-center">
                    <div className="rounded-[30px] overflow-hidden mt-10 p-2">
                        <img
                            src="/hss-stevedoring.jpg"
                            alt="Stevedoring operations: cranes loading containers onto a ship"
                            className="object-cover w-full h-[240px] md:h-[300px] rounded-[20px]"
                            style={{ minWidth: 350, minHeight: 180 }}
                        />
                    </div>
                </div>
            </div>
            {/* Storage & Warehousing Solutions Section */}
            <div id="storage-warehousing" className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-24">
                {/* Left: Image */}
                <div className="flex justify-center items-center">
                    <div className="rounded-[30px] overflow-hidden mt-10 p-2 ">
                        <img
                            src="/hss-warehousing.jpg"
                            alt="Storage yard with stacked shipping containers under warehouse lighting"
                            className="object-cover w-full h-[240px] md:h-[300px] rounded-[20px]"
                            style={{ minWidth: 350, minHeight: 180 }}
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div>
                    <h3 className="text-xl md:text-2xl mb-2 text-foreground">
                        3. Storage &amp; Warehousing Solutions
                    </h3>
                    <p className="text-primary font-medium mb-2">
                        Secure, flexible, and strategically located storage facilities.
                    </p>
                    <p className="text-muted-foreground font-raleway font-light mb-4 text-sm">
                        We provide onsite, short-term and long-term storage solutions in proximity to key ports and logistics corridors. Our warehousing network spans air, sea, and land, designed to accommodate a wide range of cargo types—from general merchandise and heavy equipment to delicate items requiring protective handling.
                    </p>
                    <div>
                        <h4 className="mb-1 text-foreground">Our Storage Infrastructure Includes:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                            <li>Covered warehouses for general goods</li>
                            <li>Open yards for breakbulk, steel products, and oversized units</li>
                            <li>Bonded warehouse &amp; custom inspection support</li>
                            <li>Climate-controlled storage and mini-warehouse zones</li>
                            <li>Heavy lift equipment handling areas</li>
                            <li>Cargo segregation, sorting, and consolidation zones</li>
                            <li>Fire safety, security, and cargo traceability systems</li>
                            <li>On-site inspection &amp; cargo repackaging support</li>
                        </ul>
                    </div>
                    <p className="text-muted-foreground font-raleway font-light mt-4 text-xs">
                        Our facilities are operated with 24/7 surveillance, access control, and fire protection systems, ensuring the highest standards of cargo safety and integrity.
                    </p>
                </div>
            </div>
            
            <VesselCarousel
                vessels={[
                    { img: "/cargo-sectors/maritime-shipping.jpg", title: "Maritime & Shipping Lines" },
                    { img: "/cargo-sectors/construction-machinery.jpg", title: "Construction & Heavy Machinery" },
                    { img: "/cargo-sectors/energy-oil-gas.jpg", title: "Energy, Oil & Gas" },
                    { img: "/cargo-sectors/steel-metal.jpg", title: "Steel & Metal Products" },
                    { img: "/cargo-sectors/industrial-manufacturing.jpg", title: "Industrial Manufacturing" },
                    { img: "/cargo-sectors/automotive-roro.jpg", title: "Automotive & Ro-Ro" },
                    { img: "/cargo-sectors/agricultural-food.jpg", title: "Agricultural & Food Commodities" },
                ]}
            />
            <ReasonsGridUniversal
                title={<span className="font-raleway font-regular">Reasons to Choose Moon Navigation and Trading Co. for Your Handling, Stevedoring and Storage Needs</span>}
                layout="3-2"
                reasons={[
                    {
                        icon: <img src="/icons/other services/61.png" className="mb-8 h-20 w-20 object-contain"/>,
                        title: <span className="font-raleway font-regular">Specialized Expertise</span>,
                        description: <span className="font-raleway font-light">A highly experienced team delivering efficient, safe, and precise cargo handling and stevedoring operations across all vessel types.</span>,
                    },
                    {
                        icon: <img src="/icons/other services/62.png" className="mb-8 h-20 w-20 object-contain"/>,
                        title: <span className="font-raleway font-regular">Advanced Equipment & Technology</span>,
                        description: <span className="font-raleway font-light">State-of-the-art cranes, forklifts, and lifting gear ensure smooth operations, reduced turnaround times, and maximum cargo safety.</span>,
                    },
                    {
                        icon: <img src="/icons/other services/63.png" className="mb-8 h-20 w-20 object-contain"/>,
                        title: <span className="font-raleway font-regular">Customized, Scalable Solutions</span>,
                        description: <span className="font-raleway font-light">Flexible service packages tailored to cargo type, volume, and operational requirements — from routine shipments to complex project cargo.</span>,
                    },
                    {
                        icon: <img src="/icons/other services/64.png" className="mb-8 h-20 w-20 object-contain"/>,
                        title: <span className="font-raleway font-regular">Secure & Strategic Storage Facilities</span>,
                        description: <span className="font-raleway font-light">Well-equipped warehouses and open storage yards near key ports, offering safe and accessible space for all cargo types.</span>,
                    },
                    {
                        icon: <img src="/icons/other services/65.png" className="mb-8 h-20 w-20 object-contain"/>,
                        title: <span className="font-raleway font-regular">Reliable Coordination & Transparent Service</span>,
                        description: <span className="font-raleway font-light">Seamless communication, professional supervision, and proactive support from start to finish — ensuring smooth port operations every time.</span>,
                    }
                ]}
            />
            <GetQuoteComponent topic="Container Handling, Stevedoring and Storage" link="/ship-maintenance-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" />  
            </main>
            )}
        />
    )
}
