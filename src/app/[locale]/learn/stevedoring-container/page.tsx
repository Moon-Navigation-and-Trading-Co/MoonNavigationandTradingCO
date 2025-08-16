"use client";

import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import FormTabs from "@/components/form-tabs";
import ContainerHandlingPage from "./handling/page";
import StevedoringPage from "./stevedoring/page";
import ContainerStoragePage from "./storage/page";

function overview() {
    return (
        <>
            {/* Main Content (hero image removed) */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: Title and CTA */}
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl md:text-3xl  text-foreground mb-2 font-regular">
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
                    <h2 className="text-lg  text-primary mb-2 font-regular">
                        What is Container handling, stevedoring and storage?
                    </h2>
                    <p className="text-base text-foreground leading-relaxed mb-4 font-light">
                        Container handling, stevedoring, and storage are essential logistics services that ensure the efficient movement, loading, and safe storage of containers at ports and terminals. Container handling refers to the transfer of containers between different transport modes, such as ships, trucks, and trains, using specialized equipment like marine cranes and straddle carriers. Stevedoring is the loading and unloading of containers from vessels, carried out by skilled professionals who ensure optimal space utilization and cargo integrity. Container storage involves placing containers in secure yards or warehouses, allowing for inventory management, flexible supply chain planning, monitoring, and protection against loss or damage.
                    </p>
                    <p className="text-base text-foreground leading-relaxed font-light">
                        At Moon Navigation and Trading Co., we specialize in delivering seamless container logistics, supporting supply chains with reliable handling, expert stevedoring, and secure storage solutions.
                    </p>
                </div>
            </div>
        </>
    );
}

function services() {
    return (
        <>
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
                            className="object-cover w-full max-w-lg h-64 md:h-80 rounded-xl shadow"
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
                            className="object-cover w-full max-w-lg h-64 md:h-80 rounded-xl shadow"
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
                            className="object-cover w-full max-w-lg h-64 md:h-80 rounded-xl shadow"
                        />
                    </div>
                </div>
            </div>
            
            {/* Reasons Section */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <ReasonsGridUniversal
                    title="Reasons to Choose Moon Navigation and Trading Co."
                    layout="3-2"
                    reasons={[
                        {
                            icon: <img src="/icons/container/129.png" className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Expertise & Efficiency",
                            description: "With years of experience, we ensure seamless container handling, precise stevedoring, and secure storage solutions.",
                        },
                        {
                            icon: <img src="/icons/container/130.png" className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Advanced Equipment",
                            description: "We utilize state-of-the-art cranes, forklifts, and stacking systems for safe and efficient cargo operations.",
                        },
                        {
                            icon: <img src="/icons/container/131.png" className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Seamless Port Operations",
                            description: "Our services are integrated with major ports and terminals, ensuring smooth logistics and fast container turnaround.",
                        },
                        {
                            icon: <img src="/icons/container/132.png" className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Secure & Reliable Storage",
                            description: "Short-term and long-term container storage with 24/7 monitoring and protection from environmental factors.",
                        },
                        {
                            icon: <img src="/icons/container/133.png" className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Comprehensive Service",
                            description: "From vessel unloading to final transport, we provide end-to-end solutions tailored to your logistics needs.",
                        }
                    ]}
                />
            </div>
            <GetQuoteComponent topic="Container Handling, Stevedoring and Storage" link="/container-services-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" /> 
        </>
    );
}

function OverviewTab() {
    return (
        <>
            {overview()}
            {services()}
        </>
    );
}

export default function StevedoringContainerTabs() {
  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <OverviewTab />,
    },
    {
      id: "handling",
      title: "Handling",
      content: <ContainerHandlingPage />,
    },
    {
      id: "stevedoring",
      title: "Stevedoring",
      content: <StevedoringPage />,
    },
    {
      id: "storage",
      title: "Storage",
      content: <ContainerStoragePage />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full mt-10 mb-16">
      {/* Hero image at the top */}
      <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
        <div className="relative w-full h-[350px] md:h-[350px]">
          <img
            src="/hss-1.jpg"
            alt="Moon Navigation and Trading Co. Container Handling, Stevedoring and Storage"
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <FormTabs tabData={tabData} />
    </div>
  );
}
