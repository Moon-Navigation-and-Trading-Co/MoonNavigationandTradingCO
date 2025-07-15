"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

export default function DockingAndMaintenance() {
    return (
        <OverviewServicesTabs
            renderOverview={() => (
                <main className="flex flex-col items-center w-full" style={{ fontFamily: "Raleway, sans-serif" }}>
                    {/* Hero Section */}
                    <section className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <div className="w-full h-[350px] relative rounded-[60px] overflow-hidden mb-10">
                                <img
                                    src="/docking-1.jpg"
                                    alt="Docking and Maintenance - Ship at dock with workers"
                                    className="object-cover w-full h-[400px] rounded-[70px]"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h1 className="text-3xl md:text-4xl mb-6 text-foreground">
                                        Docking and Maintenance
                                    </h1>
                                    <Link href="/ship-maintenance-forms">
                                        <RequestQuoteButton>Request a Quote</RequestQuoteButton>
                                    </Link>
                                </div>
                                <div>
                                    <h2 className="text-xl text-primary mb-2">What is Docking and Maintenance ?</h2>
                                    <p className="text-muted-foreground mb-4">
                                        Docking is the process of bringing a ship into a dock for inspection, repairs, or maintenance. This includes dry docking, where the vessel is removed from the water for essential tasks such as hull cleaning, painting, and structural repairs to ensure its integrity and performance.
                                    </p>
                                    <p className="text-muted-foreground mb-4">
                                        While Maintenance involves the regular upkeep and repair of a vessel to guarantee safety, efficiency, and compliance with maritime regulations. This encompasses activities such as engine servicing, hull inspections, electrical system checks, and the replacement of worn-out components, all of which are critical to maintaining optimal operational standards.
                                    </p>
                                    <p className="text-muted-foreground">
                                        At Moon Navigation and Trading Co., we uphold the highest safety standards through our comprehensive docking and maintenance practices. Our unwavering commitment to the reliability of our fleet instills confidence in our clients, ensuring that each vessel is meticulously maintained to meet the rigorous demands of the maritime industry. We prioritize operational excellence, providing peace of mind through our dedication to superior service and reliability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                </main>
            )}
            renderServices={() => (
                <main className="flex flex-col items-center w-full" style={{ fontFamily: "Raleway, sans-serif" }}>
                    {/* Docking/Maintenance Toggle Buttons */}
                    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-8">
                        <div className="flex justify-center gap-16">
                            <button className="bg-[#273c75] text-white font-raleway font-bold text-lg rounded-full px-14 py-4 shadow hover:bg-[#1d2b4f] transition-colors focus:outline-none">Docking</button>
                            <button className="bg-[#273c75] text-white font-raleway font-bold text-lg rounded-full px-14 py-4 shadow hover:bg-[#1d2b4f] transition-colors focus:outline-none">Maintenance</button>
                        </div>
                    </section>
                    {/* Vessel Types */}
                    <section className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <h2 className="text-lg md:text-xl text-primary mb-4">
                                We serve a wide range of vessels, including:
                            </h2>
                            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                                <li>Cargo Ships and Container Vessels</li>
                                <li>Bulk Carriers and Tankers</li>
                                <li>Offshore Support Vessels (OSVs)</li>
                                <li>Fishing Vessels and Research Ships</li>
                                <li>Passenger and Cruise Ships</li>
                                <li>Tugboats and Barges</li>
                            </ul>
                        </div>
                    </section>

                    {/* Docking Services */}
                    <section className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl mb-4 text-foreground">Our Docking Services</h2>
                                <p className="text-muted-foreground mb-6">
                                    At Moon Navigation and Trading Co., we specialize in delivering...
                                </p>
                                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                                    <li>Berth Reservation and Port Entry</li>
                                    <li>Dry Docking (Technical Repairs and Overhauls)</li>
                                    <li>Wet Docking (Afloat Repairs and Onboard Servicing)</li>
                                    <li>Anchorage Services (Offshore Support and Bunkers)</li>
                                    <li>Emergency Docking and Salvage Operations</li>
                                </ol>
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <img
                                    src="/docking-2.jpg"
                                    alt="Docked ship with cranes and workers"
                                    width={520}
                                    height={320}
                                    className="object-cover rounded-[60px]"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Docking Solutions */}
                    <section className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center md:justify-start">
                                <img
                                    src="/docking-3.jpg"
                                    alt="Docked ship with cranes and workers"
                                    width={520}
                                    height={320}
                                    className="object-cover rounded-[60px]"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl mb-4 text-primary">Our Docking Solutions</h2>
                                <p className="text-muted-foreground mb-4">
                                    We provide expert docking services to ensure vessel integrity...
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-sm md:text-base">
                                    <li className="mb-3">
                                        <span className="text-foreground">Dry Docking Planning:</span> Technical inspection...
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-foreground">Dockyard Coordination:</span> Liaison with shipyards...
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-foreground">Repair and Maintenance Oversight:</span> Hull cleaning...
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-foreground">Regulatory Compliance:</span> Class and flag coordination...
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-foreground">Project Management:</span> Full-cycle planning...
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-foreground">Wet Docking:</span> Afloat inspections and testing...
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-foreground">Floating Docking:</span> Specialized port services...
                                    </li>
                                    <li>
                                        <span className="text-foreground">Emergency Docking Support:</span> Rapid mobilization...
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <Link href="/learn/docking/docking">
                                        <RequestQuoteButton>Learn more</RequestQuoteButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Maintenance Services */}
                    <section className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl mb-4 text-primary">Our Maintenance Services</h2>
                                <p className="text-muted-foreground mb-4">
                                    Our vessel maintenance services ensure ships remain operational...
                                </p>
                                <ol className="list-decimal pl-6 space-y-3 text-muted-foreground text-sm md:text-base">
                                    <li><span className="text-foreground">Hull and Structure Maintenance</span></li>
                                    <li><span className="text-foreground">Engine and Mechanical Repairs</span></li>
                                    <li><span className="text-foreground">Structural and Automation Services</span></li>
                                    <li><span className="text-foreground">Plumbing and Fuel System Maintenance</span></li>
                                    <li><span className="text-foreground">Waste Management and Environmental Compliance</span></li>
                                    <li><span className="text-foreground">Safety Equipment Servicing</span></li>
                                </ol>
                            </div>
                            <div className="flex justify-center items-center">
                                <img
                                    src="/docking-4.jpg"
                                    alt="Maintenance crew working on vessel"
                                    width={520}
                                    height={320}
                                    className="object-cover rounded-[60px]"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Maintenance Solutions */}
                    <section className="w-full py-16">
                        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl mb-4 text-primary">Our Maintenance Solutions</h2>
                                <p className="text-muted-foreground mb-6">
                                    We deliver comprehensive maintenance solutions to ensure vessels...
                                </p>
                                <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-sm md:text-base">
                                    <li><span className="text-foreground">Preventive Maintenance:</span> Scheduled upkeep...</li>
                                    <li><span className="text-foreground">Corrective Maintenance:</span> Rapid fault response...</li>
                                    <li><span className="text-foreground">Condition-Based Monitoring:</span> Early detection...</li>
                                    <li><span className="text-foreground">Machinery Overhauls:</span> Engine and generator servicing...</li>
                                    <li><span className="text-foreground">Hull and Structural Maintenance:</span> Coating and corrosion...</li>
                                    <li><span className="text-foreground">Electrical and Automation:</span> Power and control systems...</li>
                                    <li><span className="text-foreground">Maintenance Records:</span> Full audit logs and tracking...</li>
                                    <li><span className="text-foreground">Spare Parts Inventory:</span> Timely supply chain coordination...</li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="/learn/docking/maintenance">
                                        <RequestQuoteButton>Learn more</RequestQuoteButton>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <img
                                    src="/docking-5.jpg"
                                    alt="Two maintenance workers discussing with a tablet"
                                    width={520}
                                    height={320}
                                    className="object-cover rounded-[60px]"
                                />
                            </div>
                        </div>
                    </section>
                     {/* Reasons to Choose Section */}
                     <ReasonsGridUniversal
                        title="Reasons to Choose Moon Navigation and Trading Co. for Your Docking and Maintenance"
                        layout="3-2"
                        reasons={[
                            {
                                icon: <img src="/icons/10.png" alt="reason icon" className="mb-4 h-12 w-12 object-contain" />, 
                                title: "Expert Technical Team",
                                description: "Our certified engineers and marine technicians deliver high-quality maintenance and repair services aligned with international standards."
                            },
                            {
                                icon: <img src="/icons/10.png" alt="reason icon" className="mb-4 h-12 w-12 object-contain" />, 
                                title: "Tailored Maintenance Solutions",
                                description: "Customized service plans based on vessel condition and voyage schedule to ensure optimal performance and cost-efficiency."
                            },
                            {
                                icon: <img src="/icons/10.png" alt="reason icon" className="mb-4 h-12 w-12 object-contain" />, 
                                title: "Integrated Services",
                                description: "From ship agency support to spare parts logistics, we handle everything needed during your vessel's stay in port."
                            },
                            {
                                icon: <img src="/icons/10.png" alt="reason icon" className="mb-4 h-12 w-12 object-contain" />, 
                                title: "24/7 Availability",
                                description: "We offer around-the-clock support to minimize delays and keep your vessel on schedule."
                            },
                            {
                                icon: <img src="/icons/10.png" alt="reason icon" className="mb-4 h-12 w-12 object-contain" />, 
                                title: "Reliable & Transparent",
                                description: "We prioritize clear communication, accurate timelines, and fair pricing for every client."
                            },
                        ]}
                    />
                    {/* Quote and FAQ */}
                    <section className="w-full py-16">
                        <GetQuoteComponent topic="Docking and Maintenance" link="/ship-maintenance-forms" />
                    </section>
                    <section className="w-full py-16">
                        <FAQSearch category="docking-maintenance" />
                    </section>
                </main>
            )}
        />
    );
}
