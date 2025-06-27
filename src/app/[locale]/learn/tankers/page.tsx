import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tankers | Moon Navigation and Trading Co. - Ocean Freight & Transportation",
    description:
        "Learn about tanker ocean freight and transportation services by Moon Navigation and Trading Co. Discover our specialized tanker types, safety features, global logistics, and reasons to choose us for your liquid cargo needs.",
    keywords: [
        "tankers",
        "ocean freight",
        "tanker transportation",
        "crude oil tankers",
        "chemical tankers",
        "liquefied gas tankers",
        "product tankers",
        "Moon Navigation and Trading Co.",
        "liquid cargo shipping",
        "maritime logistics",
        "global shipping",
        "tanker fleet",
        "tanker safety",
        "environmental protection",
        "customized tanker solutions",
        "tanker quote"
    ],
    openGraph: {
        title: "Tankers | Moon Navigation and Trading Co. - Ocean Freight & Transportation",
        description:
            "Moon Navigation and Trading Co. offers comprehensive tanker ocean freight services, including crude oil, chemical, product, and liquefied gas tankers. Explore our advanced fleet, safety standards, and global logistics network.",
        images: [
            {
                url: "/tankers-header.jpg",
                width: 1024,
                height: 350,
                alt: "Tankers at sea"
            }
        ],
        type: "website"
    },
    alternates: {
        canonical: "/learn/tankers"
    }
};

export default function TankersPage() {
    return (
        <main className="w-full flex flex-col items-center pt-8 pb-16 min-h-screen">
            {/* Top Image */}
            <div className="w-full h-[400px]  overflow-hidden mb-">
                <Image
                    src="/tankers-header.jpg"
                    alt="Tankers at sea"
                    width={1024}
                    height={350}
                    className="object-cover w-full h-[220px] sm:h-[320px] rounded-3xl"
                    priority
                />
            </div>

            {/* Main Content */}
            <article className="w-full max-w-7xl flex flex-col md:flex-row gap-10 px-4 md:px-0">
                {/* Left: Title and CTA */}
                <header className="flex-1 flex flex-col items-start">
                    <h1 className="text-3xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Tankers
                    </h1>
                    <button className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors mb-4">
                        Request a Quote
                    </button>
                </header>
                {/* Right: Description */}
                <section className="flex-1 flex flex-col items-start">
                    <h2 className="text-lg font-semibold text-primary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        What is Tankers?
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Tankers in ocean freight and transportation are specialized vessels designed for the bulk transport of liquids, including crude oil, refined petroleum products, chemicals, and liquefied gases. Engineered with advanced safety features and adhering to stringent industry regulations, these ships ensure the secure and efficient handling of hazardous cargo.
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        At Moon Navigation and Trading Co., we specialize in comprehensive tanker transportation services. Our state-of-the-art fleet and experienced team provide scalable, reliable, and efficient solutions to support your liquid cargo needs. We prioritize safety, compliance, and environmental sustainability, ensuring every project meets the highest industry standards while delivering cost-effective and timely transportation across major global trade routes.
                    </p>
                </section>
            </article>
            <section className="w-full max-w-7xl mt-16">
                <h2 className="text-2xl md:text-3xl font-normal mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Our Specialized Tanker Types
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            className="rounded-full object-cover mb-4 w-[180px] h-[110px]"
                        />
                        <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Crude Oil Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            className="rounded-full object-cover mb-4 w-[180px] h-[110px]"
                        />
                        <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Liquefied Gas Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            className="rounded-full object-cover mb-4 w-[180px] h-[110px]"
                        />
                        <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Product Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                            className="rounded-full object-cover mb-4 w-[180px] h-[110px]"
                        />
                        <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Chemical Tankers
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Engineered to carry hazardous chemicals, these tankers feature stainless steel tanks, advanced coatings, and specialized safety systems for secure handling.
                        </p>
                    </div>
                </div>
            </section>
            {/* Industries We Serve */}
            <section className="mt-20 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Industries We Serve
                </h2>
                <p className="text-center text-sm md:text-base text-muted-foreground mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Our tanker ocean freight services cater to a diverse range of industries, including:
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-6">
                    {/* Oil & Gas */}
                    <div className="flex flex-col items-center text-center flex-1">
                        <Image
                            src="/industries-oil-gas.jpg"
                            alt="Oil & Gas"
                            width={320}
                            height={200}
                            className="rounded-full object-cover mb-4 w-[200px] h-[130px] md:w-[240px] md:h-[150px]"
                        />
                        <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Oil & Gas
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Transportation of crude, refined petroleum, and natural gas with precision and safety.
                        </p>
                    </div>
                    {/* Chemical Manufacturing */}
                    <div className="flex flex-col items-center text-center flex-1">
                        <Image
                            src="/industries-chemical.jpg"
                            alt="Chemical Manufacturing"
                            width={320}
                            height={200}
                            className="rounded-full object-cover mb-4 w-[200px] h-[130px] md:w-[240px] md:h-[150px]"
                        />
                        <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Chemical Manufacturing
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Providing safe and reliable transport for bulk chemicals and hazardous chemicals.
                        </p>
                    </div>
                    {/* Agriculture & Food Industry */}
                    <div className="flex flex-col items-center text-center flex-1">
                        <Image
                            src="/industries-agriculture.jpg"
                            alt="Agriculture & Food Industry"
                            width={320}
                            height={200}
                            className="rounded-full object-cover mb-4 w-[200px] h-[130px] md:w-[240px] md:h-[150px]"
                        />
                        <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Agriculture & Food Industry
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Bulk liquid transportation solutions for edible and agricultural oils.
                        </p>
                    </div>
                    {/* Industrial & Energy Sectors */}
                    <div className="flex flex-col items-center text-center flex-1">
                        <Image
                            src="/industries-industrial.jpg"
                            alt="Industrial & Energy Sectors"
                            width={320}
                            height={200}
                            className="rounded-full object-cover mb-4 w-[200px] h-[130px] md:w-[240px] md:h-[150px]"
                        />
                        <h3 className="text-base font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Industrial & Energy Sectors
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Supplying essential fuels and raw materials to support operational needs.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-14 md:gap-20">
                {/* Left: Key Features Text */}
                <div className="flex-[1.3] md:pr-10">
                    <h2 className="text-2xl md:text-3xl font-normal mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Key Features of Our Tankers Transportation
                    </h2>
                    <h3 className="text-lg font-semibold mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Specialized Tanker Fleet
                    </h3>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                        height={260}
                        className="rounded-2xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        priority={false}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-14 md:gap-20">
                {/* Left: Safety Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-safety.jpg"
                        alt="Tanker Safety Compliance"
                        width={420}
                        height={260}
                        className="rounded-2xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        priority={false}
                    />
                </div>
                {/* Right: Advanced Safety & Compliance */}
                <div className="flex-[1.3] md:pl-10">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Advanced Safety &amp; Compliance
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        At Moon Navigation and Trading Co., our tankers are engineered to meet the highest safety standards in the maritime industry.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
            <section className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Global Logistics Network with Moon Navigation and Trading Co.
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        At Moon Navigation and Trading Co., we specialize in a comprehensive global logistics network, ensuring timely, dependable tankers that reach every major oil, chemical, and gas port worldwide.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                        className="rounded-2xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        priority={false}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-cargo-handling.jpg"
                        alt="Advanced cargo handling and storage at Moon Navigation and Trading Co."
                        width={420}
                        height={260}
                        className="rounded-2xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        priority={false}
                    />
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Advanced Cargo Handling &amp; Storage
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        At Moon Navigation and Trading Co., our tankers are equipped with cutting-edge technology to ensure safe and efficient cargo transfers:
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
            <section className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Risk Management &amp; Environmental Protection
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        At Moon Navigation and Trading Co., we prioritize safety, sustainability, and environmental responsibility in every aspect of our operations.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Assurance &amp; Mitigation:</span> We use audit programs, crew training, and robust vessel maintenance to identify hazards and mitigate all shipping risks, ensuring safe and secure tanker transportation through industry-leading protocols and emergency response drills.
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
                        className="rounded-2xl object-cover w-full max-w-7xl h-[220px] sm:h-[260px]"
                        priority={false}
                    />
                </div>
            </section>
            <section className="w-full max-w-7xl mt-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/tankers-flexibility.jpg"
                        alt="Businessmen shaking hands for flexible tanker solutions"
                        width={420}
                        height={420}
                        className="rounded-2xl w-full max-w-7xl "
                        priority={false}
                    />
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Flexibility &amp; Customized Solutions
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        At Moon Navigation and Trading Co., we recognize that each cargo type has unique transportation needs, which is why we offer flexible and tailored tanker transportation solutions.
                    </p>
                    <ul className="list-disc pl-6 text-sm md:text-base text-muted-foreground space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <li>
                            <span className="font-semibold">Spot &amp; Long-Term Contracts:</span> We provide both spot shipments for one-off transport and long-term contract options for recurring needs. This flexible approach helps maximize flexibility to meet your requirements.
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
            <section className="w-full max-w-7xl mt-20">
                <h2 className="text-2xl md:text-3xl font-normal mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Reasons To Choose Us for Tanker Ocean Freight
                </h2>
                {/* First row: 3 items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                    {/* Tanker Expertise */}
                    <div className="flex flex-col items-center text-center px-4">
                        <h3 className="font-semibold mb-2 text-foreground">Tanker Expertise</h3>
                        <p className="text-muted-foreground text-sm">
                            Extensive experience in liquid cargo transport, ensuring safe and efficient shipping solutions.
                        </p>
                    </div>
                    {/* Advanced Fleet */}
                    <div className="flex flex-col items-center text-center px-4">
                        <h3 className="font-semibold mb-2 text-foreground">Advanced Fleet</h3>
                        <p className="text-muted-foreground text-sm">
                            Modern, high-performance tankers built to meet strict industry and safety standards.
                        </p>
                    </div>
                    {/* Global Reach */}
                    <div className="flex flex-col items-center text-center px-4">
                        <h3 className="font-semibold mb-2 text-foreground">Global Reach</h3>
                        <p className="text-muted-foreground text-sm">
                            Seamless logistics coordination for timely deliveries across international markets.
                        </p>
                    </div>
                </div>
                {/* Second row: 2 items, centered */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-y-12 gap-x-8 mt-12">
                    {/* Sustainability Focus */}
                    <div className="flex flex-col items-center text-center px-4">
                        <h3 className="font-semibold mb-2 text-foreground">Sustainability Focus</h3>
                        <p className="text-muted-foreground text-sm">
                            Committed to eco-friendly operations, reducing environmental impact.
                        </p>
                    </div>
                    {/* Dedicated Support */}
                    <div className="flex flex-col items-center text-center px-4">
                        <h3 className="font-semibold mb-2 text-foreground">Dedicated Support</h3>
                        <p className="text-muted-foreground text-sm">
                            24/7 customer assistance and expert guidance throughout the shipping process.
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
                        Our steamlined tanker freight quotation process is designed for speed and convenience. At Moon
                        Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by
                        Request system. Simply fill out our short form to initiate your request. Once submitted, our team
                        will review the details and determine the best vessel type, routing, and compliance measures for
                        your cargo. You will receive a customized quotation directly in your email, ensuring accurate
                        pricing and seamless delivery.
                    </p>
                    <button className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium text-sm hover:bg-primary/90 transition-colors">
                        Request a Quote
                    </button>
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
        </main>
    );
}
