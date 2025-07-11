"use client";

import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function StevedoringContainerPage() {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center mt-10"
        style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Top Banner */}
            <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
                <div className="relative w-full h-[180px] md:h-[260px]">
                    <img
                        src="/hss-1.jpg"
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
                    <h1 className="text-2xl md:text-3xl  text-foreground mb-2">
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
                    <h2 className="text-lg  text-primary mb-2">
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
        <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: "Raleway, sans-serif" }}>
            <h2 className="text-2xl md:text-3xl  text-center text-foreground mb-12">
                Our Container Handling, Stevedoring, and Storage Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                        Container Handling
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                        We offer efficient container handling services at major ports and terminals, ensuring smooth cargo movement.
                    </p>
                    <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6">
                        <li>
                            <span className="">Loading and Unloading</span> – Fast and secure transfer of containers from vessels, trucks, and rail.
                        </li>
                        <li>
                            <span className="">Custom Handling Solutions</span> – Expertise in handling standard, reefer, oversized, and hazardous cargo containers.
                        </li>
                        <li>
                            <span className="">Secure Lashing and Securing</span> – Ensuring cargo stability and safety in every transit.
                        </li>
                        <li>
                            <span className="">Container Inspection and Damage Assessment</span> – Quality checks to maintain cargo integrity.
                        </li>
                    </ul>
                    <Link href="/learn/stevedoring-container/handling">
                        <RequestQuoteButton>
                            Learn More
                        </RequestQuoteButton>
                    </Link>
                </div>
                {/* Right: Image */}
                <div className="w-full flex justify-center items-center">
                    <img
                        src="/hss-2.jpg"
                        alt="Container handling operations at port"
                        className="object-cover w-full max-w-md h-48 md:h-56 rounded-xl shadow"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                    />
                </div>
            </div>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: "Raleway, sans-serif" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Image */}
                <div className="w-full flex justify-center items-center">
                    <img
                        src="/hss-3.jpg"
                        alt="Stevedores operating cranes to load cargo onto a vessel"
                        className="object-cover w-full max-w-md h-48 md:h-56 rounded-xl shadow"
                    />
                </div>
                {/* Right: Text Content */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                        Stevedoring Services
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                        Our professional stevedoring services ensure safe and efficient loading/unloading of ships, regardless of cargo type.
                    </p>
                    <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6">
                        <li>
                            <span className="">Heavy Lift and Breakbulk Handling</span> – Specialized equipment for oversized and project cargo.
                        </li>
                        <li>
                            <span className="">Bulk and General Cargo Operations</span> – Efficient management of diverse cargo types from containers to raw materials.
                        </li>
                        <li>
                            <span className="">Specialized Equipment and Cranes</span> – High-capacity cranes, forklifts, and spreaders for seamless port operations.
                        </li>
                        <li>
                            <span className="">Port-to-Warehouse Delivery</span> – End-to-end logistics solutions for cargo movement beyond the port.
                        </li>
                    </ul>
                    <Link href="/learn/stevedoring-container/stevedoring">
                        <RequestQuoteButton>
                            Learn More
                        </RequestQuoteButton>
                    </Link>
                </div>
            </div>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: "Raleway, sans-serif" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Text Content */}
                <div>
                    <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                        Secure Storage and Warehousing
                    </h3>
                    <ul className="list-none text-sm md:text-base text-muted-foreground space-y-1 pl-0 mb-4">
                        <li>
                            <span className="">Container Yard Storage</span> – We secure open storage for FCL, LCL, and reefer containers.
                        </li>
                        <li>
                            <span className="">Bonded Warehousing</span> – Duty-free storage with customs-controlled facilities.
                        </li>
                        <li>
                            <span className="">Temperature-Controlled Storage</span> – Climate-controlled solutions for perishable goods.
                        </li>
                        <li>
                            <span className="">Inventory Management and Tracking</span> – Real-time monitoring for efficient cargo handling.
                        </li>
                    </ul>
                    <Link href="/learn/stevedoring-container/storage">
                        <RequestQuoteButton>
                            Learn More
                        </RequestQuoteButton>
                    </Link>
                </div>
                {/* Right: Image */}
                <div className="w-full flex justify-center items-center">
                    <img
                        src="/hss-4.jpg"
                        alt="Warehouse interior with racking and containers"
                        className="object-cover w-full max-w-md h-48 md:h-56 rounded-xl shadow"
                    />
                </div>
            </div>
        </div>
            
        {/* {Reasonsssss} */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl  text-center text-primary mb-8">
                    Reasons to Choose Moon Navigation and Trading Co.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mb-20">
                    {/* Comprehensive Freight Solutions */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className=" text-foreground mb-2 text-base md:text-lg">
                            Comprehensive Freight Solutions
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            We handle a wide range of freight including FCL, LCL, breakbulk, heavy machinery, and over-dimension goods, ensuring tailored solutions for every shipment.
                        </p>
                    </div>
                    {/* Expertise in Complex Shipments */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className=" text-foreground mb-2 text-base md:text-lg">
                            Expertise in Complex Shipments
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Our experienced team manages heavy lift and out-of-gauge shipments, offering end-to-end solutions with meticulous cargo regulation and the highest safety standards.
                        </p>
                    </div>
                    {/* Optimized Routes & Cost-Efficient Shipping */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className=" text-foreground mb-2 text-base md:text-lg">
                            Optimized Routes and Cost-Efficient Shipping
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Through our strategic vessel selection and route optimization, we reduce transit times while providing competitive pricing for global ocean freight.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                    {/* Extensive Global Network */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className=" text-foreground mb-2 text-base md:text-lg">
                            Extensive Global Network
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            With an active partnership with major shipping lines and agents across key regions, we offer secure connections, international trade aid, and cargo movement worldwide.
                        </p>
                    </div>
                    {/* Customs Expertise & Secure Handling */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className=" text-foreground mb-2 text-base md:text-lg">
                            Customs Expertise and Secure Handling
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            Our team ensures smooth customs clearance, project documentation, and safe cargo handling, guaranteeing safe and hassle-free cargo movement.
                        </p>
                    </div>
                    {/* Customer-Focused Service */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className=" text-foreground mb-2 text-base md:text-lg">
                            Customer-Focused Service
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                            We offer personalized support, real-time tracking, and clear communication, keeping you informed every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        <GetQuoteComponent topic="Container Handling, Stevedoring and Storage" link="/container-services-forms" />
        <FAQSearch category="container-handling-stevedoring-storage" /> 
        </div>
    );
}
