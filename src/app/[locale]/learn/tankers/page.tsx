"use client";
import Image from "next/image";
import { Metadata } from "next";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import TankersIndustryCarousel from "@/components/tankers-industry-carousel";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";


function overview() {
    return (
        <>
            {/* Top Image */}
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-0 items-center mt-12">
                <div className="w-full rounded-[3rem] overflow-hidden mb-12 shadow-lg">
                    <div className="relative w-full h-[340px]">
                        <Image
                            src="/tankers-header.jpg"
                            alt="Tankers at sea"
                            fill
                            className="object-cover rounded-[3rem]"
                            priority
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <article className="w-full max-w-7xl flex flex-col md:flex-row gap-10 px-4 md:px-0">
                {/* Left: Title and CTA */}
                <header className="flex-1 flex flex-col items-start">
                    <h1 className="text-5xl font-normal font-sans mb-12 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Tankers
                    </h1>
                    <Link href="/ocean-freight-forms">
                        <RequestQuoteButton>
                            Request a Quote
                        </RequestQuoteButton>
                    </Link>
                </header>
                {/* Right: Description */}
                <section className="flex-1 flex flex-col items-start">
                    <h2 className="text-lg font-semibold text-primary mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        What is Tankers?
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Tankers in ocean freight and transportation are specialized vessels designed for the bulk transport of liquids, including crude oil, refined petroleum products, chemicals, and liquefied gases. Engineered with advanced safety features and adhering to stringent industry regulations, these ships ensure the secure and efficient handling of hazardous cargo.
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., we specialize in comprehensive tanker transportation services. Our state-of-the-art fleet and experienced team provide scalable, reliable, and efficient solutions to support your liquid cargo needs. We prioritize safety, compliance, and environmental sustainability, ensuring every project meets the highest industry standards while delivering cost-effective and timely transportation across major global trade routes.
                    </p>
                </section>
            </article>
        </>
    );
}

function services() {
    return (
        <>
            <section className="w-full max-w-7xl mt-16">
                <h2 className="text-2xl md:text-3xl font-normal mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Our Specialized Tanker Types
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    At Moon Navigation and Trading Co., we specialize in all types of tankers, ensuring safe and efficient transportation solutions tailored to meet diverse industry needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Crude Oil Tankers */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/tankers-crude-oil.jpg"
                            alt="Crude Oil Tanker"
                            width={320}
                            height={180}
                            className="rounded-[100px] object-cover mb-4 w-[380px] h-[210px]"
                        />
                        <h3 className="text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Crude Oil Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            These are designed for transporting crude oil in bulk with large capacity and robust safety features, ensuring secure delivery from extraction sites to refineries.
                        </p>
                    </div>
                    {/* Liquefied Gas Tankers */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/tankers-liquefied-gas.jpg"
                            alt="Liquefied Gas Tanker"
                            width={320}
                            height={180}
                            className="rounded-[100px] object-cover mb-4 w-[380px] h-[210px]"
                        />
                        <h3 className="text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Liquefied Gas Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            These vessels transport LNG and LPG under high pressure and low temperature, equipped with advanced containment systems for maximum safety.
                        </p>
                    </div>
                    {/* Product Tankers */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/tankers-product.jpg"
                            alt="Product Tanker"
                            width={320}
                            height={180}
                            className="rounded-[100px] object-cover mb-4 w-[380px] h-[210px]"
                        />
                        <h3 className="text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Product Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Specialized for refined petroleum products like gasoline, diesel, and jet fuel, these tankers offer compartmentalized storage for safe, contamination-free transport.
                        </p>
                    </div>
                    {/* Chemical Tankers */}
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/tankers-chemical.jpg"
                            alt="Chemical Tanker"
                            width={320}
                            height={180}
                            className="rounded-[100px] object-cover mb-4 w-[380px] h-[210px]"
                        />
                        <h3 className="text-lg mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Chemical Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Engineered to carry hazardous chemicals, these tankers feature stainless steel tanks, advanced coatings, and specialized safety systems for secure handling.
                        </p>
                    </div>
                </div>
            </section>
            {/* Industries We Serve - Carousel */}
            <section className="mt-20 mb-10 w-full flex flex-col items-center justify-center font-raleway">
                <h2 className="text-2xl md:text-3xl font-regular mb-2 w-full text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
                    Industries We Serve
                </h2>
                <p className="w-full text-left text-sm md:text-base text-muted-foreground mb-10 font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                    Our tanker ocean freight services cater to a diverse range of industries, including:
                </p>
                <div className="relative w-full max-w-7xl mx-auto pt-2">
                    <TankersIndustryCarousel />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-32 flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
                <div className="flex-[1.3] md:pr-10">
                    <h2 className="text-2xl md:text-3xl font-normal mb-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Key Features of Our Tankers Transportation
                    </h2>
                    <h3 className="text-2xl md:text-3xl mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Specialized Tanker Fleet
                    </h3>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Crude Oil Tankers:</span> Designed for the large-scale transportation of unrefined crude oil. These tankers feature high-capacity, double-hull designs for added safety, ensuring the secure shipment across global trade routes.
                        </li>
                        <li>
                            <span className="font-semibold">Product Tankers:</span> Our product tankers are specifically engineered for the transport of refined petroleum products such as gasoline, diesel, and jet fuel. Multiple segregated compartments allow for the safe and efficient delivery of various cargoes in a single voyage.
                        </li>
                        <li>
                            <span className="font-semibold">Chemical Tankers:</span> Built to meet the stringent requirements of chemical cargoes, our chemical tankers are outfitted with specialized corrosion-resistant materials, multiple tanks, and advanced safety systems to guarantee the secure conveyance of hazardous chemicals, including acids, flammables, and solvents.
                        </li>
                        <li>
                            <span className="font-semibold">Liquefied Gas Carriers:</span> Our LNG (Liquefied Natural Gas) and LPG (Liquefied Petroleum Gas) carriers utilize cutting-edge cryogenic technology to maintain the transport of liquefied gases under atmospheric and controlled temperatures throughout the journey.
                        </li>
                    </ul>
                </div>
                {/* Right: Tankers Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-features.jpg"
                        alt="Specialized Tanker Fleet"
                        width={420}
                        height={450}
                        className="rounded-2xl object-cover w-full h-[400px]"
                        priority={false}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-32 flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
                {/* Left: Safety Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-safety.jpg"
                        alt="Tanker Safety Compliance"
                        width={420}
                        height={260}
                        className="rounded-2xl object-cover w-full h-[400px]"
                        priority={false}
                    />
                </div>
                {/* Right: Advanced Safety & Compliance */}
                <div className="flex-[1.3] md:pl-10">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Advanced Safety and Compliance
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., our tankers are engineered to meet the highest safety standards in the maritime industry.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Regulatory Compliance:</span> We strictly adhere to international regulations, including IMO, SOLAS, MARPOL, and ISGOTT, ensuring the safe handling and transportation of hazardous goods.
                        </li>
                        <li>
                            <span className="font-semibold">Double Hull:</span> Our tankers feature a double-hull construction that adds enhanced protection against leaks, spills, and environmental hazards, significantly reducing the risk of accidental damage.
                        </li>
                        <li>
                            <span className="font-semibold">Cargo Integrity Monitoring:</span> Utilizing advanced sensor technologies, we monitor all shipments in real-time for continuous tracking of cargo conditions and temperature control at sea.
                        </li>
                        <li>
                            <span className="font-semibold">Emergency Response Protocols:</span> Our vessels are equipped with state-of-the-art fire suppression systems, emergency shutdown mechanisms, and trained response teams, enabling immediate action in any emergency situation involving hazardous cargo.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-full max-w-7xl mt-32 flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Global Logistics Network with Moon Navigation and Trading Co.
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., we specialize in a comprehensive global logistics network, ensuring timely, dependable tankers that reach every major oil, chemical, and gas port worldwide.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Global Trade Routes:</span> Our extensive shipping routes and partnerships ensure your liquid cargo is routed via the safest, fastest international maritime lanes with streamlined coordination across the globe.
                        </li>
                        <li>
                            <span className="font-semibold">Optimized Scheduling & Routing:</span> We utilize advanced vessel scheduling and real-time optimization to minimize transit times, reduce costs, and maximize reliability.
                        </li>
                        <li>
                            <span className="font-semibold">Port Access & Integration:</span> Direct relationships with global ports allow seamless entry and exit, expedited customs clearance, and integrated logistics for efficient cargo handling and delivery.
                        </li>
                        <li>
                            <span className="font-semibold">Door-to-Door Logistics:</span> We provide end-to-end solutions, including inland and last-mile support, integrating tanker ocean freight with multimodal transport to deliver comprehensive and reliable service for every tanker cargo.
                        </li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-global-network.jpg"
                        alt="Moon Navigation and Trading Co. global logistics network"
                        width={420}
                        height={260}
                        className="rounded-2xl object-cover w-full h-[400px]"
                        priority={false}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-32 flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-cargo-handling.jpg"
                        alt="Advanced cargo handling and storage at Moon Navigation and Trading Co."
                        width={420}
                        height={260}
                        className="rounded-2xl object-cover w-full h-[400px]"
                        priority={false}
                    />
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Advanced Cargo Handling and Storage
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., our tankers are equipped with cutting-edge technology to ensure safe and efficient cargo transfers:
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Temperature Controlled Cargo Holds:</span> Our tankers are equipped with advanced temperature regulation systems, allowing for the transport of sensitive cargoes like chemicals, edible oils, and liquefied gases while maintaining full required temperature control throughout the journey.
                        </li>
                        <li>
                            <span className="font-semibold">Segregated Cargo Tanks:</span> For multi-cargo shipments, we employ strategically divided tanks segregated by robust barriers to prevent cross-contamination, ensuring the integrity of each cargo.
                        </li>
                        <li>
                            <span className="font-semibold">Automated Loading & Unloading:</span> Our automation technology and safety systems maximize fuel efficiency, minimize emissions, and support safe, quick, labor-optimized port access.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-full max-w-7xl mt-32 flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Risk Management and Environmental Protection
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., we prioritize safety, sustainability, and environmental responsibility in every aspect of our operations.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Assurance and Mitigation:</span> We use audit programs, crew training, and robust vessel maintenance to identify hazards and mitigate all shipping risks, ensuring safe and secure tanker transportation through industry-leading protocols and emergency response drills.
                        </li>
                        <li>
                            <span className="font-semibold">Ballast Water Management:</span> Our tankers are equipped with advanced ballast water treatment systems that comply with international standards, helping to protect marine biodiversity while preventing invasive species transfer.
                        </li>
                        <li>
                            <span className="font-semibold">Low-Emission Fuel Usage:</span> We utilize modern and eco-friendly fuels to minimize the environmental impact of our fleet, actively reducing CO<sub>2</sub> and sulfur emissions.
                        </li>
                        <li>
                            <span className="font-semibold">Sustainability Initiatives:</span> As part of our commitment to sustainability, we support technical solutions, efficient passage, and green operations to continually reduce our carbon footprint and enhance compliance.
                        </li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-environmental-protection.jpg"
                        alt="Tanker ship with environmental protection and dolphins"
                        width={420}
                        height={260}
                        className="rounded-2xl object-cover w-full h-[400px]"
                        priority={false}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-32 flex flex-col md:flex-row items-start gap-16 md:gap-32 mb-20">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-flexibility.jpg"
                        alt="Businessmen shaking hands for flexible tanker solutions"
                        width={420}
                        height={420}
                        className="rounded-2xl object-cover w-full h-[400px]"
                        priority={false}
                    />
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Flexibility and Customized Solutions
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., we recognize that each cargo type has unique transportation needs, which is why we offer flexible and tailored tanker transportation solutions.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Spot and Long-Term Contracts:</span> We provide both spot shipments for one-off transport and long-term contract options for recurring needs. This flexible approach helps maximize flexibility to meet your requirements.
                        </li>
                        <li>
                            <span className="font-semibold">Specialized Services:</span> Our team can cater to specific requirements, including temperature-controlled cargo, chemical segregation, or sensitive on-time deliveries, ensuring you stay competitive in global markets.
                        </li>
                        <li>
                            <span className="font-semibold">Dedicated Account Management:</span> Clients benefit from a dedicated account manager who delivers personalized service, seamless support, and timely updates throughout the shipment process.
                        </li>
                    </ul>
                </div>
            </section>
            {/* Reasons To Choose Us for Tanker Ocean Freight */}
            <div className="mt-20 mb-32">
                <ReasonsGridUniversal
                    title="Reasons To Choose Us for Tanker Ocean Freight"
                    subheading=""
                    reasons={[
                        {
                            icon: <img src="/icons/71.png" alt="Tanker Expertise" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Tanker Expertise",
                            description: "Extensive experience in liquid cargo transport, ensuring safe and efficient shipping solutions.",
                        },
                        {
                            icon: <img src="/icons/72.png" alt="Advanced Fleet" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Advanced Fleet",
                            description: "Modern, high-performance tankers built to meet strict industry and safety standards.",
                        },
                        {
                            icon: <img src="/icons/73.png" alt="Global Reach" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Global Reach",
                            description: "Seamless logistics coordination for timely deliveries across international markets.",
                        },
                        {
                            icon: <img src="/icons/74.png" alt="Sustainability Focus" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Sustainability Focus",
                            description: "Committed to eco-friendly operations, reducing environmental impact.",
                        },
                        {
                            icon: <img src="/icons/75.png" alt="Dedicated Support" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Dedicated Support",
                            description: "24/7 customer assistance and expert guidance throughout the shipping process.",
                        },
                    ]}
                    layout="3-2"
                />
            </div>
            <GetQuoteComponent topic="Tankers" link="/ocean-freight-forms" />
            <FAQSearch category="tankers-in-ocean-freight" />
        </>
    );
}

export default function TankersPage() {
    return (
        <OverviewServicesTabs renderOverview={overview} renderServices={services} />
    );
}
