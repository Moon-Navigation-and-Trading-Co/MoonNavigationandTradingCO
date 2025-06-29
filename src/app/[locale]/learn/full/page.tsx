"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FullContainerLoadPage() {
    return (
        <div className="w-full max-w-7xl min-h-screen flex flex-col items-center py-8 px-2 md:px-0">
            {/* Top Banner */}
            <div className="w-full rounded-[2rem] overflow-hidden mb-8 shadow-lg">
                <div className="relative w-full h-[180px] md:h-[260px]">
                    <Image
                        src="/container-banner.jpg"
                        alt="Moon Navigation and Trading Co. Full Container"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 900px"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="text-white text-xl md:text-3xl font-semibold text-center drop-shadow-lg">
                            Moon Navigation and<br />Trading Co.
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Title and CTA */}
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                        Full Container Load
                    </h1>
                    <p className="text-muted-foreground text-lg mb-4">
                        (Standard, Reefer, and Dangerous)
                    </p>
                    <Button asChild className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90">
                        <a href="/container-services-forms">Request a Quote</a>
                    </Button>
                </div>

                {/* Right: Description */}
                <div>
                    <h2 className="text-lg font-semibold text-primary mb-2">
                        What is Full Container Load?
                    </h2>
                    <p className="text-base text-foreground leading-relaxed">
                        Full Container Load (FCL) is a shipping method designed for businesses that require the
                        exclusive use of an entire shipping container. This service ensures maximum security, faster
                        transit times, and reduced handling risks, making it the ideal choice for bulk shipments. With
                        FCL, your cargo remains sealed from origin to destination, minimizing the chances of damage,
                        loss, or delays.<br /><br />
                        At Moon Navigation and Trading Co., we specialize in providing efficient and cost-effective FCL
                        shipping solutions tailored to meet your logistics needs. With years of industry experience, our
                        dedicated team ensures seamless container management, proper documentation, and global
                        coordination for smooth and hassle-free transportation. Trust us to handle your shipments with
                        expertise, reliability, and precision, ensuring timely and secure deliveries that support your
                        business growth.</p>
                </div>
            </div>
            <div className="w-full max-w-7xl mt-12">
                <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                    What is the difference between FCL and LCL?
                </h2>
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full border border-gray-300 bg-background text-sm md:text-base text-center">
                        <thead>
                            <tr className="table-auto">
                                <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold border-r border-gray-200 text-center">Feature</th>
                                <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold border-r border-gray-200 text-center">FCL (Full Container Load)</th>
                                <th className="px-4 py-3 border-b border-gray-300 text-left font-semibold border-r border-gray-200 text-center">LCL (Less than Container Load)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Cost</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Higher (per FCL shipment)</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Lower (for small cargo)</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Volume</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Large shipments</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Small to medium shipments</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Transit Time</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Faster (direct shipping)</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Slightly slower (consolidation)</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Flexibility</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Requires full container utilization</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">More frequent departures</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Security</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Higher security (individual container)</td>
                                <td className="px-4 py-3 border-b border-gray-200 border-r border-gray-200">Handled with other freight and shipments</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-10">
                {/* Left: Text Content */}
                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        When to use FCL?
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        FCL shipping is the best choice when you have enough cargo to fill an entire or close to 20- or 40-foot container. This method ensures that your goods remain secure and untouched throughout the journey, reducing handling risks and transit time.
                    </p>
                    <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        FCL is particularly beneficial for businesses shipping large volumes, high-value cargo, or goods that require strict control over loading and unloading. It is also the preferred option for industries dealing with bulk commodities, machinery, and time-sensitive shipments, as it minimizes delays and provides a more predictable transit schedule. By choosing FCL, you can optimize your supply chain, streamline operations, and ensure cost efficiency for your large-scale shipping needs.
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/fcl-when-to-use.jpg"
                        alt="FCL container being lifted"
                        className="rounded-2xl object-cover w-full max-w-xs md:max-w-sm shadow-lg"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-16">
                <h2 className="text-2xl font-semibold text-primary mb-2 text-center">
                    Our Container Types for FCL
                </h2>
                <p className="text-muted-foreground text-center mb-8 text-sm md:text-base max-w-7xl mx-auto">
                    We offer a wide range of container types to suit different cargo requirements, ensuring your shipment is transported safely, efficiently, and in full compliance with global standards.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Standard Containers */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-50 h-32 rounded-[40px] overflow-hidden shadow-lg mb-4">
                            <img
                                src="/container-standard.jpg"
                                alt="Standard Containers"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-foreground">Standard Containers</div>
                            <div className="text-xs text-muted-foreground mt-1">– General Cargo</div>
                        </div>
                    </div>
                    {/* Reefer Containers */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-50 h-32 rounded-[40px] overflow-hidden shadow-lg mb-4">
                            <img
                                src="/container-banner.jpg"
                                alt="Reefer Containers"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-foreground">Reefer Containers</div>
                            <div className="text-xs text-muted-foreground mt-1">– Temperature-Sensitive Cargo</div>
                        </div>
                    </div>
                    {/* Dangerous Goods Containers */}
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-[175px] h-32 rounded-[40px] overflow-hidden shadow-lg mb-4">
                            <img
                                src="/container-dangerous.jpg"
                                alt="Dangerous Goods Containers"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="text-center">
                            <div className="font-semibold text-foreground">Dangerous Goods Containers</div>
                            <div className="text-xs text-muted-foreground mt-1">– Hazardous Cargo</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-10 mb-12 px-4">
                <h3 className="text-2xl md:text-2xl font-semibold text-foreground mb-4 text-center">
                    Our Comprehensive Container Solutions includes Reefer<br className="hidden md:inline" /> &amp; Dangerous Cargo Expertise
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-2 text-center">
                    At Moon Navigation and Trading Co., we specialize in providing comprehensive container transportation solutions, ensuring the safe and efficient handling of a wide range of cargo, including refrigerated reefer and dangerous goods.
                </p>
                <p className="text-muted-foreground text-sm md:text-base mb-2 text-center">
                    Our expertise spans areas managing and transporting temperature-sensitive shipments, ensuring the integrity of perishable goods through reliable reefer container services. We also specialize in the safety of hazardous materials, offering strict adherence to regulations, essential containerization, and proper packaging to meet global compliance standards.
                </p>
                <p className="text-muted-foreground text-sm md:text-base text-center">
                    With a focus on precision, reliability, and risk management, we provide end-to-end solutions for shipping containers, delivering your cargo securely and efficiently to its destination.
                </p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 px-4">
                {/* Standard Cargo (Dry Containers) */}
                <div className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Standard Cargo (Dry Containers)</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                        Our standard dry containers are ideal for transporting a wide range of general cargo that does
not require temperature control. These containers offer a secure and cost-effective solution for
your everyday shipping needs, such as:</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm mb-3 space-y-1">
                            <li>Industrial Equipment &amp; Heavy machinery, spare parts, and mechanical tools.</li>
                            <li>Consumer Goods –  Electronics, appliances, textiles, and packaged products.</li>
                            <li>Raw Materials &amp; Construction Supplies – Palletized goods, paper products, packaging
                            materials, and more.</li>
                        </ul>
                        <p className="text-muted-foreground text-sm">
                        We ensure that your general cargo is handled with care, properly secured, and delivered safely
                        from origin to destination, using high-quality containers and efficient logistics solutions.</p>
                    </div>
                    <div className="mt-4">
                        <a href="/learn/full/dry" className="inline-block">
                            <button className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">Learn more</button>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src="/container-stack.jpg"
                        alt="Standard Cargo Containers"
                        className="rounded-xl shadow-lg object-cover w-full"
                        style={{ height: '400px' }}
                    />
                </div>
                {/* Reefer Cargo (Temperature-Sensitive Shipments) */}
                <div className="flex items-center justify-center order-3 md:order-2 ">
                    <img
                        src="/container-banner.jpg"
                        alt="Reefer Cargo Container"
                        className="rounded-xl shadow-lg object-cover w-full"
                        style={{ height: '400px' }}
                    />
                </div>
                <div className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 order-4 md:order-3">
                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Reefer Cargo (Temperature-Sensitive Shipments)</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                        Our reefer (refrigerated) containers are perfect for transporting goods that require temperature
                        control during transit, such as:</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm mb-3 space-y-1">
                            <li>Perishable Food Items – Fresh produce, dairy, and frozen foods.</li>
                            <li>Pharma &amp; Chemicals – medicines and vaccines that need strict temperature control.</li>
                            <li>Floral &amp; Horticultural Products – Goods that require constant climate monitoring.

</li>
                        </ul>
                        <p className="text-muted-foreground text-sm">
                        We ensure that your reefer cargo is transported at the right temperature, with real-time
                        monitoring and 24/7 temperature control to maintain product quality and prevent spoilage.</p>
                    </div>
                    <div className="mt-4">
                        <a href="/learn/full/reefer" className="inline-block">
                            <button className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">Learn more</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Dangerous Goods (Hazardous Cargo) */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Dangerous Goods in FCL</h4>
                        <p className="text-muted-foreground text-sm mb-3">
                        When it comes to shipping dangerous goods (DG), such as chemicals, flammable items, or toxic
substances, we ensure full compliance with international safety standards like IMO (International
Maritime Organization) and ADR (European Agreement on Dangerous Goods).

Our services for dangerous goods include</p>
                        <ul className="list-disc list-inside text-muted-foreground text-sm mb-3 space-y-1">
                            <li>
                                <span className="font-medium">Proper Classification &amp; Labeling</span> – Correct packaging, labeling, and documentation for
                                hazardous materials.</li>
                            <li>
                                <span className="font-medium">Specialized Equipment</span> – Containers and equipment designed for safe transport of dangerous
                                goods.</li>
                            <li>
                                <span className="font-medium">Risk Management &amp; Emergency Response</span> –  Adhering to protocols to manage risks and
                                ensure quick action in case of emergencies.</li>
                            <li>
                                <span className="font-medium">Regulatory Compliance</span> –  Ensuring full compliance with international shipping regulations to
                                avoid delays and ensure safe delivery.</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <a href="/learn/dangerous" className="inline-block">
                            <button className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition">Learn more</button>
                        </a>
                    </div>
                </div>
                {/* Right: Image */}
                <div className="flex items-center justify-center flex-1">
                    <img
                        src="/container-dangerous.jpg"
                        alt="Dangerous Goods Container"
                        className="rounded-xl shadow-lg object-cover w-full"
                        style={{ height: '400px' }}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center py-12">
                <h2 className="text-2xl md:text-3xl font-normal text-[#3B4B8C] mb-8 mt-8 text-center">
                    Standard, Reefer & Dangerous Goods Containers vs. Special Equipment Containers
                </h2>
                <div className="overflow-x-auto w-full max-w-7xl">
                    <table className="min-w-full border border-gray-300 text-center">
                        <thead>
                            <tr className="">
                                <th className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Feature</th>
                                <th className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Standard Containers</th>
                                <th className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Reefer Containers</th>
                                <th className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Dangerous Goods Containers</th>
                                <th className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Open Top Containers</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Best For</td>
                                <td className="border border-gray-300 px-4 py-2">Dry cargo, consumer goods, machinery</td>
                                <td className="border border-gray-300 px-4 py-2">Perishable goods, pharmaceuticals</td>
                                <td className="border border-gray-300 px-4 py-2">Hazardous and regulated cargo (IMDG compliant)</td>
                                <td className="border border-gray-300 px-4 py-2">Tall cargo, oversized equipment</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Weatherproof</td>
                                <td className="border border-gray-300 px-4 py-2">Yes</td>
                                <td className="border border-gray-300 px-4 py-2">Yes</td>
                                <td className="border border-gray-300 px-4 py-2">Yes (DG-certified)</td>
                                <td className="border border-gray-300 px-4 py-2">No (requires tarpaulin cover)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Temperature Control</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">Yes (-30°C to +30°C)</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Top Loading</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">Yes</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-medium text-[#3B4B8C]">Side Loading</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                                <td className="border border-gray-300 px-4 py-2">No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl font-semibold text-[#3B4B8C] mb-10 text-center">
                    Reasons to Choose Moon Navigation and Trading Co. for Your FCL Shipments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Complex Shipment Management</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                        We handle every stage of your FCL shipment—
from booking and documentation to delivery—
ensuring a smooth and hassle-free process.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Global Carrier Partnerships</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                        Our strong relationships with leading carriers
guarantee competitive rates, priority space, and
wide geographic coverage.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Secure & Timely Deliveries</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                        Reasons to Choose Moon Navigation and Trading Co. for Your FCL Shipments

With proper cargo handling, sealed containers,
and optimized transit times, your goods reach
their destination safely and on schedule.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 text-center">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Flexible Routing Solutions</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                        We offer tailored routing and scheduling options to
meet your cargo requirements and delivery
timelines.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">Expert Support & Compliance Handling</h3>
                        <p className="text-muted-foreground text-sm md:text-base">
                        Our team provides timely updates, manages
documentation, and ensures full customs and
regulatory compliance throughout the journey.</p>
                    </div>
                </div>
            </div>
            <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Get your Quote with Us
                    </h2>
                    <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Our streamlined LCL freight quotation process is designed for speed and convenience. At
                        Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
                        Quotation by Request system. Simply fill out our short form to initiate your request. Once
                        submitted, our team will assess your shipment’s volume, weight, and consolidation options to
                        find the most efficient and cost-effective transport solution. You will receive a customized
                        quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
                        cargo movement.
                    </p>
                    <Link href="/container-services-forms" className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors inline-block">
                        Request a Quote
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
