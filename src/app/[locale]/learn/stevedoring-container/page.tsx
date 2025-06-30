"use client";

import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 

export default function StevedoringContainerPage() {
    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0">
            {/* Top Banner */}
            <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
                <div className="relative w-full h-[180px] md:h-[260px]">
                    <img
                        src="/stevedoring-container-banner.jpg"
                        alt="Moon Navigation and Trading Co. Container Handling, Stevedoring and Storage"
                        className="object-cover w-full h-full"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: Title and CTA */}
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                        Container Handling, Stevedoring and Storage
                    </h1>
                        <Link href="/container-services-forms">
                        <RequestQuoteButton>
                            Request a Quote
                        </RequestQuoteButton>
                    </Link>
                </div>

                {/* Right: Description */}
                <div>
                    <h2 className="text-lg font-semibold text-primary mb-2">
                        What is Container handling, stevedoring and storage?
                    </h2>
                    <p className="text-base text-foreground leading-relaxed mb-4">
                        Container handling, stevedoring, and storage are essential logistics services that ensure the efficient movement, loading, and safe storage of containers at ports and terminals. Container handling refers to the transfer of containers between different transport modes, such as ships, trucks, and trains, using specialized equipment like marine cranes and straddle carriers. Stevedoring is the loading and unloading of containers from vessels, carried out by skilled professionals who ensure optimal space utilization and cargo integrity. Container storage involves placing containers in secure yards or warehouses, allowing for inventory management, flexible supply chain planning, monitoring, and protection against loss or damage.
                    </p>
                    <p className="text-base text-foreground leading-relaxed">
                        At Moon Navigation and Trading Co., we specialize in delivering seamless container logistics, supporting supply chains with reliable handling, expert stevedoring, and secure storage solutions.
                    </p>
                </div>
            </div>
            {/* Our Container Handling Services */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-8">
                    Our Container Handling Services
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-7xl mx-auto">
                    Efficient container handling is critical at port and beyond their operations. Our services include:
                </p>
                
                {/* 1. Loading & Unloading Operations - Text Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
                    {/* Left: Text Content */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            1. Loading &amp; Unloading Operations
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                            <li>
                                <span className="font-semibold">Ship-to-Shore &amp; Shore-to-Ship Handling</span>—Fast, secure loading and unloading of containers.
                            </li>
                            <li>
                                <span className="font-semibold">Rail &amp; Truck Transfers</span>—Seamless movement between vessel, port, rail, and inland transport.
                            </li>
                            <li>
                                <span className="font-semibold">Rapid Transshipment</span>—Quick transfer of containers between vessels at critical storage depots.
                            </li>
                        </ul>
                    </div>
                    {/* Right: Image */}
                    <div className="w-full rounded-xl overflow-hidden shadow">
                        <img
                            src="/container-handling-loading.jpg"
                            alt="Container loading and unloading operations"
                            className="object-cover w-full h-40 md:h-56"
                        />
                    </div>
                </div>

                {/* 2. Specialized Container Handling - Image Left, Text Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: Image */}
                    <div className="w-full rounded-xl overflow-hidden shadow">
                        <img
                            src="/container-handling-specialized.jpg"
                            alt="Specialized container handling with crane"
                            className="object-cover w-full h-40 md:h-56"
                        />
                    </div>
                    {/* Right: Text Content */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            2. Specialized Container Handling
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                            <li>
                                <span className="font-semibold">Reefer Containers (Refrigerated Cargo)</span>—Temperature-controlled handling with 24/7 monitoring.
                            </li>
                            <li>
                                <span className="font-semibold">Oversized &amp; Out-of-Gauge Cargo</span>—Expert lifting solutions for heavy machinery, project cargo, and special shipments.
                            </li>
                            <li>
                                <span className="font-semibold">Dangerous Goods Containers (IMO Cargo)</span>—Safe and regulation-compliant handling for hazardous materials.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 3. Secure Lashing & Cargo Protection */}
            <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-8 mt-8">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                        3. Secure Lashing &amp; Cargo Protection
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                        <li>
                            <span className="font-semibold">Lashing &amp; Securing</span> – Proper execution of restraints to prevent movement during transit.
                        </li>
                        <li>
                            <span className="font-semibold">Container Inspection &amp; Damage Assessment</span> – Routine checks to ensure cargo integrity.
                        </li>
                        <li>
                            <span className="font-semibold">Weighing &amp; Compliance Checks</span> – VGM (Verified Gross Mass) certification for SOLAS compliance.
                        </li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/container-lashing-cargo-protection.jpg"
                        alt="Workers securing cargo inside a shipping container"
                        className="rounded-xl shadow object-cover w-full max-w-7xl md:max-w-7xl h-40 md:h-44"
                    />
                </div>
            </div>
            {/* Stevedoring Services Overview */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-4">
                    Our Stevedoring Services
                </h2>
                <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-7xl mx-auto">
                    Our stevedoring operations ensure the safe and efficient handling of cargo, whether containerized, bulk, or breakbulk.
                </p>
                
                {/* 1. Cargo Handling & Vessel Operations - Text Left, Image Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
                    {/* Left: Text Content */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            1. Cargo Handling &amp; Vessel Operations
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                            <li>
                                <span className="font-semibold">Containerized Cargo Handling</span> – Efficient lifting, stacking, and stowage of containers.
                            </li>
                            <li>
                                <span className="font-semibold">Heavy Lift &amp; Project Cargo Handling</span> – Custom solutions for oversized shipments, using high-capacity cranes and specialized lifting equipment.
                            </li>
                            <li>
                                <span className="font-semibold">Bulk &amp; General Cargo Operations</span> – Handling of raw materials, grain, cement, and breakbulk goods.
                            </li>
                        </ul>
                    </div>
                    {/* Right: Image */}
                    <div className="w-full rounded-xl overflow-hidden shadow">
                        <img
                            src="/stevedoring-cargo-vessel.jpg"
                            alt="Stevedores operating cranes to load cargo onto a vessel"
                            className="object-cover w-full h-40 md:h-44"
                        />
                    </div>
                </div>

                {/* 2. Equipment & Technology - Image Left, Text Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: Image */}
                    <div className="w-full rounded-xl overflow-hidden shadow">
                        <img
                            src="/stevedoring-equipment-technology.jpg"
                            alt="Modern container handling equipment at port"
                            className="object-cover w-full h-40 md:h-44"
                        />
                    </div>
                    {/* Right: Text Content */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                            2. Equipment &amp; Technology
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                            <li>
                                <span className="font-semibold">Advanced Port Cranes &amp; Spreaders</span> – High-speed operations with minimal turnaround time.
                            </li>
                            <li>
                                <span className="font-semibold">Forklifts, Reach Stackers &amp; Terminal Tractors</span> – Efficient movement of containers and cargo within terminals.
                            </li>
                            <li>
                                <span className="font-semibold">Cargo Identification &amp; Monitoring</span> – Effective tracking and documentation for operational efficiency.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 3. Safety & Compliance */}
            <div className="flex flex-col md:flex-row gap-8 items-start mt-8">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                        3. Safety &amp; Compliance
                    </h3>
                    <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0">
                        <li>
                            <span className="font-semibold">Trained Stevedoring Crews</span>: Experienced professionals for safe cargo handling.
                        </li>
                        <li>
                            <span className="font-semibold">IMO &amp; Port Authority Regulation Compliance</span>: Full adherence to international and local safety standards.
                        </li>
                        <li>
                            <span className="font-semibold">Risk Assessment &amp; Emergency Response</span>: Proactive measures to prevent operations hazards.
                        </li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-end items-start">
                    <img
                        src="/stevedoring-safety-compliance.jpg"
                        alt="Stevedore in safety gear inspecting containers"
                        className="rounded-xl shadow w-full max-w-7xl object-cover"
                    />
                </div>
            </div>
            {/* Storage & Warehousing Services Section */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2 text-center">
                    Our Secure Storage &amp; Warehousing Services
                </h2>
                <p className="text-muted-foreground text-center mb-8 text-sm md:text-base max-w-7xl mx-auto">
                    We provide short-term and long-term storage solutions to meet diverse cargo requirements, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* 1. Container Yard & Open Storage */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                            1. Container Yard &amp; Open Storage
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                            <li>
                                <span className="font-semibold">Port &amp; Empty Container Storage</span> – Secure area for both import/export cargo.
                            </li>
                            <li>
                                <span className="font-semibold">Bonded Warehousing</span> – Duty-free storage for transshipment and customs-cleared locations.
                            </li>
                            <li>
                                <span className="font-semibold">Reefer Plug-in Points</span> – Temperature storage for perishable goods with constant temperature monitoring.
                            </li>
                        </ul>
                        <div className="w-full rounded-xl overflow-hidden shadow mb-2">
                            <img
                                src="/stevedoring-container-yard.jpg"
                                alt="Container yard with reach stacker and containers"
                                className="object-cover w-full h-40 md:h-44"
                            />
                        </div>
                    </div>
                    {/* 2. Specialized Warehousing Solutions */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                            2. Specialized Warehousing Solutions
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                            <li>
                                <span className="font-semibold">Temperature-Controlled Warehouses</span> – Ideal for pharmaceuticals, perishables, and sensitive goods.
                            </li>
                            <li>
                                <span className="font-semibold">Hazardous Goods Storage</span> – Secure and compliant storage for flammables and dangerous materials.
                            </li>
                            <li>
                                <span className="font-semibold">Breakbulk &amp; Heavy Lift Cargo Storage</span> – Custom storage areas for oversized shipments.
                            </li>
                        </ul>
                        <div className="w-full rounded-xl overflow-hidden shadow">
                            <img
                                src="/stevedoring-warehouse-interior.jpg"
                                alt="Warehouse interior with racking and worker"
                                className="object-cover w-full h-40 md:h-44"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3. Inventory & Cargo Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
                {/* Left: Description */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                        3. Inventory &amp; Cargo Management
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                        <li>
                            <span className="font-semibold">Systematic Inventory Tracking</span> – Efficient cargo handling and stock management.
                        </li>
                        <li>
                            <span className="font-semibold">Packing &amp; Consolidation Services</span> – Repacking, cutting, and cargo preparation for final shipment.
                        </li>
                        <li>
                            <span className="font-semibold">Customized Storage Plans</span> – Flexible solutions tailored to client needs.
                        </li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div>
                    <div className="w-full rounded-xl overflow-hidden shadow">
                        <img
                            src="/stevedoring-inventory-management.jpg"
                            alt="Warehouse inventory management with worker and racking"
                            className="object-cover w-full h-40 md:h-44"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-8">
                    Reasons to Choose Moon Navigation and Trading Co.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mb-20">
                    {/* Comprehensive Freight Solutions */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                            Comprehensive Freight Solutions
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            We handle a wide range of freight including FCL, LCL, breakbulk, heavy machinery, and over-dimension goods, ensuring tailored solutions for every shipment.
                        </p>
                    </div>
                    {/* Expertise in Complex Shipments */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                            Expertise in Complex Shipments
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Our experienced team manages heavy lift and out-of-gauge shipments, offering end-to-end solutions with meticulous cargo regulation and the highest safety standards.
                        </p>
                    </div>
                    {/* Optimized Routes & Cost-Efficient Shipping */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                            Optimized Routes &amp; Cost-Efficient Shipping
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Through our strategic vessel selection and route optimization, we reduce transit times while providing competitive pricing for global ocean freight.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                    {/* Extensive Global Network */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                            Extensive Global Network
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            With an active partnership with major shipping lines and agents across key regions, we offer secure connections, international trade aid, and cargo movement worldwide.
                        </p>
                    </div>
                    {/* Customs Expertise & Secure Handling */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                            Customs Expertise &amp; Secure Handling
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Our team ensures smooth customs clearance, project documentation, and safe cargo handling, guaranteeing safe and hassle-free cargo movement.
                        </p>
                    </div>
                    {/* Customer-Focused Service */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
                            Customer-Focused Service
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            We offer personalized support, real-time tracking, and clear communication, keeping you informed every step of the way.
                        </p>
                    </div>
                </div>
            </div>
            <section className="w-full bg-muted/50 rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative border">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get your Quote with Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our streamlined HSS freight quotation process is designed for speed and convenience. At
            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
            Quotation by Request system. Simply fill out our short form to initiate your request. Once
            submitted, our team will assess your shipment's volume, weight, and consolidation options to
            find the most efficient and cost-effective transport solution. You will receive a customized
            quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
            cargo movement.
          </p>
          <Link href="/container-services-forms">
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
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
    );
}
