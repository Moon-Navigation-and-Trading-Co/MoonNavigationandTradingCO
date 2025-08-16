"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import FormTabs from "@/components/form-tabs";

// Dynamic imports for better performance
const ContainerHandlingPage = dynamic(() => import("./handling/page"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

const StevedoringPage = dynamic(() => import("./stevedoring/page"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

const ContainerStoragePage = dynamic(() => import("./storage/page"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>,
  ssr: false
});

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
                        <Image
                            src="/hss-2.jpg"
                            alt="Container handling operations"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full max-w-md h-64"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-20" style={{ fontFamily: "Raleway, sans-serif" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Image */}
                    <div className="w-full flex justify-center items-center">
                        <Image
                            src="/hss-3.jpg"
                            alt="Stevedoring operations"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full max-w-md h-64"
                        />
                    </div>
                    {/* Right: Text Content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                            Stevedoring
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base mb-4">
                            Our stevedoring services ensure efficient and safe loading and unloading of vessels.
                        </p>
                        <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6">
                            <li>
                                <span className="">Vessel Loading and Unloading</span> – Expert handling of containers during ship operations.
                            </li>
                            <li>
                                <span className="">Cargo Stowage Planning</span> – Optimal space utilization and weight distribution.
                            </li>
                            <li>
                                <span className="">Safety and Compliance</span> – Adherence to international maritime safety standards.
                            </li>
                            <li>
                                <span className="">24/7 Port Operations</span> – Round-the-clock service to minimize vessel delays.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl  mb-2 text-foreground">
                            Container Storage
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base mb-4">
                            Secure and flexible storage solutions for containers at strategic locations.
                        </p>
                        <ul className="list-none text-sm md:text-base text-foreground space-y-2 pl-0 mb-6">
                            <li>
                                <span className="">Short-term and Long-term Storage</span> – Flexible storage periods to meet your needs.
                            </li>
                            <li>
                                <span className="">24/7 Security Monitoring</span> – Continuous surveillance and access control.
                            </li>
                            <li>
                                <span className="">Inventory Management</span> – Real-time tracking and status updates.
                            </li>
                            <li>
                                <span className="">Weather Protection</span> – Covered storage areas to protect cargo from elements.
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
                        <Image
                            src="/hss-4.jpg"
                            alt="Warehouse interior with racking and containers"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover w-full max-w-md h-64"
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
                            icon: <Image src="/icons/container/129.png" alt="Expertise & Efficiency Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Expertise & Efficiency",
                            description: "With years of experience, we ensure seamless container handling, precise stevedoring, and secure storage solutions.",
                        },
                        {
                            icon: <Image src="/icons/container/130.png" alt="Advanced Equipment Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Advanced Equipment",
                            description: "We utilize state-of-the-art cranes, forklifts, and stacking systems for safe and efficient cargo operations.",
                        },
                        {
                            icon: <Image src="/icons/container/131.png" alt="Seamless Port Operations Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Seamless Port Operations",
                            description: "Our services are integrated with major ports and terminals, ensuring smooth logistics and fast container turnaround.",
                        },
                        {
                            icon: <Image src="/icons/container/132.png" alt="Secure & Reliable Storage Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
                            title: "Secure & Reliable Storage",
                            description: "Short-term and long-term container storage with 24/7 monitoring and protection from environmental factors.",
                        },
                        {
                            icon: <Image src="/icons/container/133.png" alt="Comprehensive Service Icon" width={80} height={80} className="mb-8 h-20 w-20 object-contain"/>,
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
          <Image
            src="/hss-1.jpg"
            alt="Moon Navigation and Trading Co. Container Handling, Stevedoring and Storage"
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
            loading="lazy"
            layout="fill"
          />
        </div>
      </div>
      <FormTabs tabData={tabData} />
    </div>
  );
}
