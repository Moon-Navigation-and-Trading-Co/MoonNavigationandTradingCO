"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"
import RequestQuoteButton from "@/components/RequestQuoteButton" 
import GetQuoteComponent from "@/components/getQuoteComponent"
import FAQSearch from "@/components/faq"
import Image from "next/image";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

    return (
        <>
            {/* Hero Section */}
            <div className="w-full flex justify-center mb-8 mt-10">
                <div className="w-full max-w-7xl">
                    <Image
                        src="/heavy-lift-cargo-banner.jpg"
                        alt="Heavy Lift Cargo Banner"
                        width={1200}
                        height={350}
                        className="rounded-[60px] object-cover w-full h-[220px] sm:h-[350px]"
                        priority
                    />
                </div>
            </div>

            {/* Introduction Section */}
            <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 mb-12 max-w-7xl mx-auto">
                {/* Left column: title and button */}
                <div className="flex-1 flex flex-col items-center md:items-start w-full">
                    <h1 className="mb-10 text-4xl font-light text-left md:text-left w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>Heavy Lift<br />Cargo</h1>
                    <Link href="/container-services-forms">
                        <RequestQuoteButton>Request a Quote</RequestQuoteButton>
                    </Link>
                </div>
                {/* Right column: heading and description */}
                <div className="flex-1 rounded-2xl p-6">
                    <h2 className="text-lg mb-3 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        What is Heavy Lift Cargo?
                    </h2>
                    <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        Heavy cargo consists of ultra-heavy and oversized items that often exceed 100 metric tons per unit. These loads require specialized lifting equipment, such as hydraulic cranes or floating cranes, to ensure safe and efficient handling. Heavy lift cargo is typically transported on heavy lift vessels (HLVs) designed specifically for this purpose. Common examples of heavy lift cargo include oil rigs, wind turbines, large machinery, and power transformers.
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                        At Moon Navigation and Trading Co., we specialize in the transportation of heavy lift cargo, leveraging our extensive expertise and cutting-edge equipment to manage the complexities involved. Our dedicated team is committed to providing tailored solutions that prioritize safety, efficiency, and compliance with industry regulations, ensuring that your heavy cargo is delivered on time and in optimal condition. Trust us to be your reliable partner for all heavy lift transportation needs.
                    </p>
                </div>
            </div>

            {/* Common Features Section */}
            <div className="w-full max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Common Features of Heavy Lift Cargo
                </h2>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Left: Image */}
                    <div className="flex-1">
                        <Image
                            src="/heavy-lift-cargo-features.jpg"
                            alt="Common Features of Heavy Lift Cargo"
                            width={800}
                            height={400}
                            className="rounded-3xl object-cover w-full h-[400px]"
                            priority
                        />
                    </div>
                    {/* Right: Features */}
                    <div className="flex-1 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Weight</h3>
                            <p className="text-gray-700">
                                We specialize in the transportation of heavy lift cargo, managing items that typically weigh several tons, including industrial machinery, transformers, turbines, and construction equipment.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dimensions</h3>
                            <p className="text-gray-700">
                                Our expertise encompasses handling oversized cargo that often exceeds standard container dimensions, utilizing flat racks, open-top containers, and breakbulk methods.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Handling</h3>
                            <p className="text-gray-700">
                                Our operations involve the use of cranes, lifting frames, and other heavy-duty machinery to ensure safe, precise, and efficient loading and unloading of cargo.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Routing</h3>
                            <p className="text-gray-700">
                                We develop tailored routing solutions that account for the ship&apos;s capacity and port infrastructure, ensuring seamless transport of heavy lift cargo.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Compliance</h3>
                            <p className="text-gray-700">
                                The transportation of heavy lift cargo mandates strict adherence to safety and regulatory guidelines to ensure the security of the cargo and personnel involved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Examples Section */}
            <div className="w-full max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                    Examples of Heavy Lift Cargo
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Our HeavyLift services handle various types of equipment, including
                </p>
                
                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        onClick={() => {
                            const container = document.getElementById('examples-carousel');
                            if (container) {
                                container.scrollBy({ left: -300, behavior: 'smooth' });
                            }
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        onClick={() => {
                            const container = document.getElementById('examples-carousel');
                            if (container) {
                                container.scrollBy({ left: 300, behavior: 'smooth' });
                            }
                        }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel */}
                    <div 
                        id="examples-carousel"
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="flex-shrink-0 w-64">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                            <Image
                                        src="/heavy-wind-turbine.jpg"
                                alt="Wind turbines and blades"
                                        width={256}
                                        height={192}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Wind turbines and blades</h3>
                                    <p className="text-gray-600 text-xs">Specialized transportation for renewable energy infrastructure components.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-64">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                            <Image
                                        src="/heavy-industrial-press.jpg"
                                alt="Industrial presses"
                                        width={256}
                                        height={192}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Industrial presses</h3>
                                    <p className="text-gray-600 text-xs">Heavy machinery and manufacturing equipment transportation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-64">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                            <Image
                                        src="/heavy-power-plant.jpg"
                                alt="Power plant components"
                                        width={256}
                                        height={192}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Power plant components</h3>
                                    <p className="text-gray-600 text-xs">Critical infrastructure components for energy generation facilities.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-64">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                            <Image
                                        src="/heavy-oil-gas.jpg"
                                alt="Oil and gas equipment"
                                        width={256}
                                        height={192}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Oil and gas equipment</h3>
                                    <p className="text-gray-600 text-xs">Specialized equipment for petroleum and natural gas operations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-64">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                            <Image
                                        src="/heavy-yacht.jpg"
                                alt="Large yachts/ Vessels"
                                        width={256}
                                        height={192}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">Large yachts/ Vessels</h3>
                                    <p className="text-gray-600 text-xs">Luxury vessels and maritime transportation solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom scrollbar styles */}
                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </div>

            {/* Key Features Section */}
            <div className="w-full max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Key Features of Our Heavy Lift Cargo at Moon Navigation and Trading Co.
                </h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ultra-Heavy & Oversized</h3>
                            <p className="text-gray-700">
                                Heavy lift cargo consists of units that are too heavy or large for conventional shipping methods, requiring specialized solutions and equipment.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialized Lifting Equipment Required</h3>
                            <p className="text-gray-700">
                                The handling of heavy lift cargo necessitates the use of cranes with extreme load capacities and hydraulic lifting systems for efficient and safe operations.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Transported on Heavy Lift Vessels (HLVs)</h3>
                            <p className="text-gray-700">
                                Heavy lift vessels are equipped with integrated cranes capable of lifting hundreds to thousands of tons, ensuring safe and secure transport of oversized cargo.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Complex Loading & Unloading Operations</h3>
                            <p className="text-gray-700">
                                Heavy lift operations employ precise lifting techniques, often using floating, rolling, or modular transporters for seamless loading and unloading processes.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="text-green-600 text-xl">✓</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Used in Large-Scale Industrial Projects</h3>
                            <p className="text-gray-700">
                                Heavy lift cargo is commonly used in sectors such as oil and gas, energy, mining, and infrastructure, where Moon Navigation&apos;s expertise provides optimal logistics solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 text-center">
                        At Moon Navigation and Trading Co., we are dedicated to providing tailored heavy lift transportation solutions that meet the unique demands of each project, ensuring safety, efficiency, and reliability in every shipment.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="w-full max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Our Heavy Lift Cargo Services—At Moon Navigation and Trading Co.
                </h2>
                
                {/* Service 1 */}
                <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">1. Heavy Lift Vessel Chartering</h3>
                        <p className="text-gray-700 mb-4">
                            Heavy lift cargo requires specialized vessels designed to handle oversized and overweight shipments. We provide access to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Semi-Submersible Vessels:</strong> For extremely heavy and voluminous cargo such as oil rigs and large industrial components.</li>
                            <li><strong>Heavy Lift Vessels:</strong> Equipped with onboard cranes capable of lifting hundreds to thousands of metric tons.</li>
                            <li><strong>Deck Barges & Ro-Ro Ships:</strong> For heavy industrial equipment, machinery, and vehicles.</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Our vessel chartering solutions are tailored to your cargo weight, dimensions, and destination requirements.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/heavy-lift-vessel-chartering.jpg"
                            alt="Heavy Lift Vessel Chartering"
                            width={600}
                            height={300}
                            className="rounded-3xl object-cover w-full h-[300px]"
                        />
                    </div>
                </div>

                {/* Service 2 */}
                <div className="flex flex-col md:flex-row-reverse gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">2. Engineering & Load Planning</h3>
                        <p className="text-gray-700 mb-4">
                            Precise engineering is crucial in heavy lift cargo transport to prevent damage and ensure safety. Our services include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Load Distribution Analysis:</strong> Ensuring even weight distribution across the vessel deck.</li>
                            <li><strong>Cargo Lifting Plans:</strong> Customized rigging and lifting procedures for each shipment.</li>
                            <li><strong>Risk Assessments & Feasibility Studies:</strong> Identifying potential hazards, restrictions, and limitations.</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Our engineering team ensures maximum safety and efficiency for every heavy lift shipment.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/heavy-lift-engineer.jpg"
                            alt="Engineering and Load Planning"
                            width={600}
                            height={300}
                            className="rounded-3xl object-cover w-full h-[300px]"
                        />
                    </div>
                </div>

                {/* Service 3 */}
                <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">3. High-Capacity Cranes & Lifting Equipment</h3>
                        <p className="text-gray-700 mb-4">
                            We provide access to specialized lifting solutions for heavy lift cargo:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Gantry Cranes & Tower Cranes:</strong> For precise positioning and lifting of heavy components.</li>
                            <li><strong>Hydraulic Jacking Systems:</strong> For controlled lifting and lowering of massive loads.</li>
                            <li><strong>SPMTs (Self-Propelled Modular Transporters):</strong> For transporting oversized cargo on land.</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Our equipment ensures safe and efficient handling of the most challenging heavy lift cargo.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/heavy-lift-cranes.jpg"
                            alt="High-Capacity Cranes and Lifting Equipment"
                            width={600}
                            height={300}
                            className="rounded-3xl object-cover w-full h-[300px]"
                        />
                    </div>
                </div>

                {/* Service 4 */}
                <div className="flex flex-col md:flex-row-reverse gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">4. Regulatory Compliance & Safety</h3>
                        <p className="text-gray-700 mb-4">
                            We ensure full compliance with international regulations and safety standards:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Oversized Cargo Permits & Authorizations:</strong> Securing all necessary permits and clearances.</li>
                            <li><strong>Safety Inspections & Certifications:</strong> Regular inspections and certifications of equipment and procedures.</li>
                            <li><strong>Insurance & Risk Management:</strong> Comprehensive coverage and risk mitigation strategies.</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Our compliance expertise ensures smooth operations and regulatory adherence.
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/heavy-lift-compliance.jpg"
                            alt="Regulatory Compliance and Safety"
                            width={600}
                            height={300}
                            className="rounded-3xl object-cover w-full h-[300px]"
                        />
                    </div>
                </div>

                {/* Service 5 */}
                <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">5. Route Surveys & Feasibility Studies</h3>
                        <p className="text-gray-700 mb-4">
                            Heavy lift shipments often require careful route planning to avoid transport obstacles:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Pre-Route Infrastructure Assessments:</strong> Checking bridge capacities, tunnel clearances, and road strength.</li>
                            <li><strong>Port Facilities & Equipment Availability:</strong> Ensuring safe cargo transfer at destination ports.</li>
                            <li><strong>Alternative Transport Solutions:</strong> Identifying cost-effective transport routes.</li>
                        </ul>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <p className="text-gray-700 text-center">
                                Heavy lift cargo requires precision, expertise, and advanced equipment—trust us for seamless ocean freight transport.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/heavy-lift-route-survey.jpg"
                            alt="Route Surveys and Feasibility Studies"
                            width={600}
                            height={300}
                            className="rounded-3xl object-cover w-full h-[300px]"
                        />
                    </div>
                </div>
            </div>

            {/* Reasons to Choose Section */}
            <div className="w-full max-w-7xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Reasons to Choose Our Heavy Lift Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                            <Image src="/icons/ocean freight/85.png" alt="Proven Expertise" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                        <p className="text-gray-700">Years of experience handling oversized and heavy cargo with precision and reliability.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                            <Image src="/icons/ocean freight/86.png" alt="End-to-End Solutions" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Solutions</h3>
                        <p className="text-gray-700">From route planning and compliance to emergency support, we ensure seamless logistics.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                            <Image src="/icons/ocean freight/87.png" alt="Global Reach" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
                        <p className="text-gray-700">Strong partnerships grant access to specialized vessels, ports, and equipment worldwide.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                            <Image src="/icons/ocean freight/88.png" alt="Regulatory Compliance" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Compliance & 24/7 Support</h3>
                        <p className="text-gray-700">Ensuring strict adherence to international safety regulations and expert assistance at every stage.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                            <Image src="/icons/ocean freight/89.png" alt="Advanced Equipment" width={64} height={64} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Equipment</h3>
                        <p className="text-gray-700">State-of-the-art cranes, heavy lift vessels, and custom lifting gear for secure transport.</p>
                    </div>
                </div>
            </div>

            <GetQuoteComponent topic="Heavy Lift Cargo" link="/container-services-forms" />
            <FAQSearch category="heavy-lift" />
        </>
    );
}
