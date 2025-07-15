"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import RequestQuoteButton from "@/components/RequestQuoteButton" 
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import OverviewServicesTabs from "@/components/overview-services";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

    return (
        <OverviewServicesTabs
            renderOverview={() => (
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen">
                    {/* Top Banner Image */}
                    <div className="w-full  mb-8 mt-10">
                        <img
                            src="/heavy-lift-cargo-banner.jpg"
                            alt="Heavy Lift Cargo"
                            className="w-[1280px] object-cover h-[350px] rounded-[60px]"
                            style={{}}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12">
                        {/* Left: Title & Button */}
                        <div className="flex-1 flex flex-col justify-start">
                            <h1 className="text-5xl font-normal font-sans mb-12 text-primary" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
                                Heavy Lift Cargo
                            </h1>
                            <Link href="/ocean-freight-forms">
                                <RequestQuoteButton>
                                    Request a Quote
                                </RequestQuoteButton>
                            </Link>
                        </div>
                        {/* Right: Info Card */}
                        <div className="flex-1 rounded-2xl p-6">
                            <h2 className="text-lg font-semibold mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
                                What is Heavy Lift Cargo?
                            </h2>
                            <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                Heavy cargo consists of ultra-heavy and oversized items that often exceed size and/or form limits set out. This includes large-scale engineering equipment, massive industrial machines or infrastructure, as well as other significant loads. Heavy lifting is a specialized transport field, requiring unique skills, design strategies, and safety measures. Common examples of heavy lift cargo include turbines, ship engines, transformers, and large construction machinery.
                            </p>
                            <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                At Moon Navigation and Trading Co., we specialize in the transportation of heavy lift cargo, leveraging our technical expertise and cutting-edge equipment to manage the complexities involved. Our dedicated team is committed to providing solutions that prioritize safety, efficiency, and compliance with industry regulations, ensuring your heavy lift cargo is delivered on time and in optimal condition. Trust us as your reliable partner for all heavy transport requirements.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            renderServices={() => (
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center min-h-screen">
                    {/* Common Features Section */}
                    <section className="w-full mt-16 mb-8 px-4 md:px-0">
                        <h2 className="text-2xl md:text-3xl font-normal mb-16" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
                            Common Features of Heavy Lift Cargo
                        </h2>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Left: Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src="/heavy-lift-cargo-features.jpg"
                                    alt="Heavy lift cargo at port"
                                    className="rounded-3xl w-[420px] h-[420px] object-cover object-center"
                                    loading="lazy"
                                />
                            </div>
                            {/* Right: Features Grid */}
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 w-full items-center">
                                {/* Weight */}
                                <div className="flex flex-col justify-center h-full text-left">
                                    <h3 className="font-normal mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Weight</h3>
                                    <p className="text-muted-foreground text-sm md:text-base font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                        We specialize in the movement of heavy lift cargo, handling single pieces weighing several tons, including massive machinery, turbines, boilers, and industrial equipment.
                                    </p>
                                </div>
                                {/* Dimensions */}
                                <div className="flex flex-col justify-center h-full text-left">
                                    <h3 className="font-normal mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Dimensions</h3>
                                    <p className="text-muted-foreground text-sm md:text-base font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                        Our solutions accommodate both long and tall cargo that often exceeds standard container and vessel limitations, requiring custom solutions and specialized vehicles.
                                    </p>
                                </div>
                                {/* Special Handling */}
                                <div className="flex flex-col justify-center h-full text-left">
                                    <h3 className="font-normal mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Special Handling</h3>
                                    <p className="text-muted-foreground text-sm md:text-base font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                        Our operations include the use of cranes, lifters, heavy-duty trailers, and other advanced tools to ensure safe and efficient movement of heavy loads.
                                    </p>
                                </div>
                                {/* Custom Routing */}
                                <div className="flex flex-col justify-center h-full text-left">
                                    <h3 className="font-normal mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Custom Routing</h3>
                                    <p className="text-muted-foreground text-sm md:text-base font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                        We develop tailored routing solutions that account for the unique logistical challenges of heavy lift cargo, ensuring safe and timely transport.
                                    </p>
                                </div>
                                {/* Safety Compliance */}
                                <div className="flex flex-col justify-center h-full text-left md:col-span-2">
                                    <h3 className="font-normal mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Safety Compliance</h3>
                                    <p className="text-muted-foreground text-sm md:text-base font-light" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                                        The transportation of heavy lift cargo requires strict adherence to industry and regulatory guidelines to ensure the security of the cargo and personnel involved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-16 mb-8 w-full">
                        <h2 className="text-2xl md:text-3xl font-normal mb-2 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Examples of Heavy Lift Cargo
                        </h2>
                        <p className="text-muted-foreground text-sm mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our Heavy Lift services handle various types of equipment, including:
                        </p>
                        <div className="relative w-full max-w-7xl mx-auto pt-2">
                          <Slider
                            {...{
                              dots: false,
                              infinite: true,
                              speed: 600,
                              slidesToShow: 4,
                              slidesToScroll: 1,
                              arrows: false,
                              cssEase: 'linear',
                              swipeToSlide: true,
                              centerMode: false,
                              responsive: [
                                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                                { breakpoint: 640, settings: { slidesToShow: 1 } },
                              ],
                            }}
                            ref={slider => (window.heavyLiftSlider = slider)}
                          >
                            {[
                              {
                                img: "/heavy-wind-turbine.jpg",
                                title: "Wind turbines and blades",
                              },
                              {
                                img: "/heavy-industrial-press.jpg",
                                title: "Industrial presses",
                              },
                              {
                                img: "/heavy-power-plant.jpg",
                                title: "Power plant components",
                              },
                              {
                                img: "/heavy-oil-gas.jpg",
                                title: "Oil and gas equipment",
                              },
                              {
                                img: "/heavy-yacht.jpg",
                                title: "Large yachts / Vessels",
                              },
                            ].map((item, idx) => (
                              <div key={idx} className="px-2">
                                <div className="overflow-hidden rounded-[2rem] w-full aspect-[4/3] bg-[#f7f7fa] relative">
                                  <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                  />
                            </div>
                                <div className="mt-4 text-center">
                                  <span className="block text-base font-raleway font-light text-[#011f4b]">{item.title}</span>
                            </div>
                            </div>
                            ))}
                          </Slider>
                          {/* Navigation arrows */}
                          <div className="absolute flex flex-row gap-2 right-0 -bottom-10 pr-4 z-20">
                            <button
                              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-100 transition"
                              onClick={() => window.heavyLiftSlider?.slickPrev()}
                              aria-label="Previous"
                              type="button"
                            >
                              &#8592;
                            </button>
                            <button
                              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-400 hover:bg-gray-100 transition"
                              onClick={() => window.heavyLiftSlider?.slickNext()}
                              aria-label="Next"
                              type="button"
                            >
                              &#8594;
                            </button>
                            </div>
                        </div>
                    </section>
                    <section className="w-full mt-12 mb-8 px-4 md:px-0">
                        <h2 className="text-xl md:text-2xl mb-20 text-foreground " style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Key Features of Our Heavy Lift Cargo at Moon Navigation and Trading Co.
                        </h2>
                        <div className="border border-border rounded-2xl p-6 md:p-8 max-w-7xl mx-auto shadow-sm">
                            <ul className="space-y-5 text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                <li>
                                    <span className="text-blue-600 font-bold mr-2" aria-hidden="true">✔</span>
                                    <span className="text-foreground font-semibold">Ultra-Heavy and Oversized:</span> Our heavy lift cargo consists of units that are either too heavy or too large for conventional shipping methods, requiring specialized solutions.
                                </li>
                                <li>
                                    <span className="text-blue-600 font-bold mr-2" aria-hidden="true">✔</span>
                                    <span className="text-foreground font-semibold">Specialized Lifting Equipment Required:</span> We utilize cranes with extreme load capacities, hydraulic lifting systems, and cranes to efficiently handle these challenging loads.
                                </li>
                                <li>
                                    <span className="text-blue-600 font-bold mr-2" aria-hidden="true">✔</span>
                                    <span className="text-foreground font-semibold">Transported on Heavy Lift Vessels (HLVs):</span> Our heavy lift vessels are equipped with integrated cranes capable of lifting hundreds to thousands of tons, ensuring safe and fast transport.
                                </li>
                                <li>
                                    <span className="text-blue-600 font-bold mr-2" aria-hidden="true">✔</span>
                                    <span className="text-foreground font-semibold">Complex Loading and Unloading Operations:</span> We employ precise lifting techniques for loading and unloading, often using floating, rolling, or modular transporters to ensure seamless operations.
                                </li>
                                <li>
                                    <span className="text-blue-600 font-bold mr-2" aria-hidden="true">✔</span>
                                    <span className="text-foreground font-semibold">Used in Large-Scale Industrial Projects:</span> Heavy lift cargo is commonly used with large-scale industrial projects in sectors such as oil and gas, energy, mining, and infrastructure, where our expertise ensures optimal logistics solutions.
                                </li>
                            </ul>
                        </div>
                        <p className="mt-6 text-xs text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            At Moon Navigation and Trading Co., we are dedicated to providing tailored heavy lift transportation solutions that meet the unique demands of each project, ensuring safety, efficiency, and reliability in every shipment.
                        </p>
                    </section>
                    <section className="w-full mt-16 mb-12 px-4 md:px-0">
                        <h2 className="text-xl md:text-2xl mb-8 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our Heavy Lift Cargo Services—At Moon Navigation and Trading Co.
                        </h2>
                        <div className="flex flex-col gap-8">
                            {/* Service 1: Text + Image */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* 1. Heavy Lift Vessel Chartering */}
                                <div className="flex-1">
                                    <h3 className="text-lg mb-2 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        1. Heavy Lift Vessel Chartering
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Moon Navigation supplies specialized vessels with high weight capacity and lifting capability for oversized loads, including:
                                    </p>
                                    <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        <li>
                                            <span className="font-semibold">Semi-Submersible Vessels</span> – Made for transporting extremely heavy and awkward industrial equipment or marine structures.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Heavy Lift Ships</span> – Purpose-built or converted vessels capable of lifting outsized machinery and modules.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Deck Barges, Flo-Flo Ships</span> – Used for shipping massive industrial modules, construction machinery, and more.
                                        </li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Our vessels' chartering solutions are tailored to cargo weight, dimensions, and destination requirements.
                                    </p>
                                </div>
                                {/* Image for 1 */}
                                <div className="w-full md:w-1/2 mb-12">
                                    <img
                                        src="/heavy-lift-vessel-chartering.jpg"
                                        alt="Heavy lift vessel chartering"
                                        className="rounded-2xl w-full h-[300px] object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Service 2: Image + Text */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Image for 2 */}
                                <div className="w-full md:w-1/2 mb-12"> 
                                    <img
                                        src="/heavy-lift-engineer.jpg"
                                        alt="Heavy lift cargo engineer"
                                        className="rounded-2xl w-full h-[300px] object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                                {/* 2. Engineering & Load Planning */}
                                <div className="flex-1">
                                    <h3 className="text-lg mb-2 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        2. Engineering and Load Planning
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Transporting heavy lift cargo requires precise engineering to prevent structural damage and ensure the safety of all involved:
                                    </p>
                                    <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        <li>
                                            <span className="font-semibold">Load and Stability Analysis</span> – Ensuring stability is expertly determined across the transport vehicle or vessel for each cargo.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Custom Lifting and Rigging Plans</span> – Developing detailed lifting protocols to safely relocate critical equipment.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Route Optimization</span> – Every shipment is carefully planned and executed to avoid sensitive routes and obstacles.
                                        </li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Our engineering team ensures that every shipment is expertly planned and executed with maximum safety and precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section: High-Capacity Cranes & Lifting Equipment and Regulatory Compliance & Safety */}
                    <section className="w-full mt-16 mb-8 px-4 md:px-0">
                        <div className="flex flex-col md:flex-row gap-12">
                            {/* Left Column: Text for 3, Image for 4 */}
                            <div className="flex flex-col gap-8 flex-1">
                                {/* 3. High-Capacity Cranes & Lifting Equipment */}
                                <div>
                                    <h3 className="text-lg mb-2 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        3. High-Capacity Cranes and Lifting Equipment
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Heavy lift projects require specialized lifting solutions at both port and project sites. We offer:
                                    </p>
                                    <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        <li>
                                            <span className="font-semibold">Gantry Cranes and Tower Cranes</span> – Lifting hundreds of tons at critical locations worldwide.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Hydraulic Jacking Systems</span> – Enabling controlled cargo positioning.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Self-Propelled Modular Transporters</span> – For short-distance movement of massive loads.
                                        </li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Our new state-of-the-art lifting equipment ensures safe and damage-free transport of your heaviest shipments.
                                    </p>
                                </div>
                                {/* Image for 3 */}
                                <div className="w-full mb-12">
                                    <img
                                        src="/heavy-lift-cranes.jpg"
                                        alt="High-capacity cranes lifting heavy cargo"
                                        className="rounded-2xl w-full h-[300px] object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Right Column: Image for 4, Text for 4 */}
                            <div className="flex flex-col gap-8 flex-1">
                                {/* Image for 4 */}
                                <div className="w-full mb-12">
                                    <img
                                        src="/heavy-lift-compliance.jpg"
                                        alt="Heavy lift cargo compliance and safety inspector"
                                        className="rounded-2xl w-full h-[300px] object-cover object-center"
                                        loading="lazy"
                                    />
                                </div>
                                {/* 4. Regulatory Compliance & Safety */}
                                <div>
                                    <h3 className="text-lg mb-2 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        4. Regulatory Compliance and Safety
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        Transporting heavy lift cargo requires compliance with strict international transport laws and regulations. Our services include:
                                    </p>
                                    <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        <li>
                                            <span className="font-semibold">Oversized Cargo Permits and Authorizations</span> – Managing all legal requirements.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Certified Inspections and Documentation</span> – Ensuring cargo and equipment safety before, during, and after transit.
                                        </li>
                                        <li>
                                            <span className="font-semibold">HSSE (Health, Safety, Security and Environment)</span> – Prioritizing job-site compliance and risk mitigation.
                                        </li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                        With our compliance expertise, we ensure your cargo meets all legal and safety requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* 5. Route Surveys & Feasibility Studies */}
                    <section className="w-full mt-12 mb-8 px-4 md:px-0">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Left: Text Content */}
                            <div className="flex-1 min-w-[260px]">
                                <h3 className="text-lg mb-2 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    5. Route Surveys and Feasibility Studies
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    From initial inspection of the cargo route to safe planning for transit, our services include:
                                </p>
                                <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    <li>
                                        <span className="font-semibold">Pre-Shipment Infrastructure Assessment</span> – Checking bridge capacities, clearances, road and port access.
                                    </li>
                                    <li>
                                        <span className="font-semibold">Full Feasibility and Risk/Permit Analysis</span> – Ensuring safe cargo transfer and distribution with professional transport solutions, including multi-modal and complex logistics support.
                                    </li>
                                </ul>
                                <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
                                    Heavy lift cargo requires meticulous, complete, and individualized support for loaded and delivered with full oversight.
                                </p>
                            </div>
                            {/* Right: Image */}
                            <div className="flex-1 flex justify-center items-end mt-8 md:mt-0">
                                <img
                                    src="/heavy-lift-route-survey.jpg"
                                    alt="Engineer conducting route survey for heavy lift cargo at port"
                                    className="w-full h-[300px] object-cover object-center rounded-2xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </section>
                    <div className="mt-24">
                      <ReasonsGridUniversal
                        title="Reasons to Choose Our Heavy Lift Services"
                        layout="3-2"
                        alignLeftHeading={true}
                        className="mt-24"
                        reasons={[
                          {
                            icon: <img src="/icons/71.png" alt="Proven Expertise" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Proven Expertise",
                            description: "Years of experience handling oversized and heavy cargo with precision and reliability.",
                          },
                          {
                            icon: <img src="/icons/72.png" alt="End-to-End Solutions" className="mb-6 h-16 w-16 object-contain" />,
                            title: "End-to-End Solutions",
                            description: "From route planning and compliance to emergency support, we ensure seamless logistics.",
                          },
                          {
                            icon: <img src="/icons/73.png" alt="Global Reach" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Global Reach",
                            description: "Strong partnerships grant access to specialized vessels, ports, and equipment worldwide.",
                          },
                          {
                            icon: <img src="/icons/74.png" alt="Regulatory Compliance & 24/7 Support" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Regulatory Compliance & 24/7 Support",
                            description: "Ensuring strict adherence to international safety regulations and expert assistance at every stage.",
                          },
                          {
                            icon: <img src="/icons/75.png" alt="Advanced Equipment" className="mb-6 h-16 w-16 object-contain" />,
                            title: "Advanced Equipment",
                            description: "State-of-the-art cranes, heavy lift vessels, and custom lifting gear for secure transport.",
                          },
                        ]}
                      />
                        </div>
                    <GetQuoteComponent topic="Heavy Lift Cargo" link="/ocean-freight-forms" />
                    <FAQSearch category="heavy-lift-cargo" />
                </div>
            )}
        />
    )
}
