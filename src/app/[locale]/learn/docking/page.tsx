import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import RequestQuoteButton from "@/components/RequestQuoteButton";   
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function DockingAndMaintenance() {
    return (
        <main className="flex flex-col items-center w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {/* Hero Section */}
            <div className="w-full py-10 bg-background rounded-b-3xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Hero Image */}
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden mb-10">
                        <img
                            src="/docking-1.jpg"
                            alt="Docking and Maintenance - Ship at dock with workers"
                            className="object-cover w-full h-full"
                            style={{ objectPosition: "center" }}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl  mb-6 text-foreground">
                                Docking and Maintenance
                            </h1>
                            <Link href="/ship-maintenance-forms">
                                <RequestQuoteButton>
                                    Request a Quote
                                </RequestQuoteButton>
                            </Link>
                        </div>
                        <div>
                            <h2 className="text-xl  text-primary mb-2">
                                What is Docking and Maintenance?
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                Docking is the process of bringing a ship into a dock for inspection, repairs, or maintenance. This includes dry docking, where the vessel is removed from the water to examine hulls and undertake repairs that would be hard to access in normal shipping and port operations.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                While maintenance involves the regular upkeep and repair of vessels to guarantee safety, efficiency, and compliance with maritime regulations. This encompasses scheduled work such as engine and hull inspections, painting, cleaning, and replacement or repair of worn-out components. All of which are crucial to maintaining safe operations and compliance.
                            </p>
                            <p className="text-muted-foreground">
                                At Moon Navigation and Trading Co., we uphold the highest safety standards throughout our docking and maintenance services. Our experienced team ensures that every vessel receives the best possible attention for effective results. We prevent accidents, extend the operating period of the fleet through our dedication to superior service and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Vessel Types Section */}
            <div className="w-full py-10 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-lg md:text-xl  text-primary mb-4">
                        We serve a wide range of vessels, including:
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Cargo Ships &amp; Container Vessels</li>
                        <li>Bulk Carriers &amp; Tankers</li>
                        <li>Offshore Support Vessels (OSVs)</li>
                        <li>Fishing Vessels &amp; Research Ships</li>
                        <li>Passenger &amp; Cruise Ships</li>
                        <li>Tugboats &amp; Barges</li>
                    </ul>
                </div>
            </div>
            {/* Docking Services Section */}
            <div className="w-full py-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-2xl  mb-4 text-foreground">
                            Our Docking Services
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            At Moon Navigation and Trading Co., we specialize in delivering secure, efficient, and well-coordinated docking services at major ports. Our docking solutions include:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                            <li>Berth Reservation &amp; Port Entry</li>
                            <li>Dry Docking (Technical Repairs &amp; Overhauls)</li>
                            <li>Wet Docking (Afloat Repairs &amp; Onboard Servicing)</li>
                            <li>Anchorage Services (Offshore Support &amp; Bunkers)</li>
                            <li>Emergency Docking &amp; Salvage Operations</li>
                        </ol>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ background: "#2D3A7B", padding: "24px" }}>
                            <div className="relative w-[340px] h-[200px] md:w-[400px] md:h-[240px] rounded-xl overflow-hidden bg-background">
                                <img
                                    src="/docking-2.jpg" 
                                    alt="Docked ship with cranes and workers"
                                    className="object-cover w-full h-full"
                                    style={{ borderRadius: "12px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Docking Solutions Section */}
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ background: "#3B4B8A", padding: "18px" }}>
                            <div className="relative w-[320px] h-[180px] md:w-[400px] md:h-[220px] rounded-xl overflow-hidden bg-background">
                                <img
                                    src="/docking-3.jpg"
                                    alt="Docked ship with cranes and workers"
                                    className="object-cover w-full h-full"
                                    style={{ borderRadius: "12px" }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Text Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl  mb-4 text-primary">
                            Our Docking Solutions
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            We provide expert docking services to ensure vessel integrity, performance, and regulatory compliance during scheduled and emergency docking operations.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
                            <li>
                                <span className=" text-foreground">Dry Docking Planning:</span> Technical inspection, budgeting, and detailed pre-docking documentation for every vessel.
                            </li>
                            <li>
                                <span className=" text-foreground">Dockyard Coordination:</span> Liaison with trusted worldwide shipyards to ensure smooth &amp; efficient dockyard operations.
                            </li>
                            <li>
                                <span className=" text-foreground">Repair &amp; Maintenance Oversight:</span> Supervision of hull cleaning, painting, steel renewal, and equipment upgrades.
                            </li>
                            <li>
                                <span className=" text-foreground">Regulatory Compliance:</span> Coordination for safety status, statutory inspections, and compliance with class &amp; flag state regulations.
                            </li>
                            <li>
                                <span className=" text-foreground">Project Management:</span> End-to-end planning to ensure deadlines, quality, costs, and safety standards are met.
                            </li>
                            <li>
                                <span className=" text-foreground">Wet Docking (Afloat Repairs):</span> Onsite maintenance of essential work, inspections, and testing during port berths/anchorage.
                            </li>
                            <li>
                                <span className=" text-foreground">Floating Docking Services:</span> Docking solutions for specific vessel needs or operational needs at select international ports.
                            </li>
                            <li>
                                <span className=" text-foreground">Emergency Docking Support:</span> Rapid mobilization and support for unscheduled dockings to limit downtime such as grounding, collision, or system failure.
                            </li>
                        </ul>
                        <div className="mt-6">
                            <Link href="/learn/docking/docking">
                                <RequestQuoteButton>
                                Learn more
                            </RequestQuoteButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl  mb-4 text-primary">
                            Our Maintenance Services
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            At Moon Navigation and Trading Co., our vessel maintenance services ensure ships remain operational, compliant, and efficient. Our maintenance solutions include:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
                            <li>
                                <span className=" text-foreground">Hull &amp; Structure Maintenance</span>
                            </li>
                            <li>
                                <span className=" text-foreground">Engine and Mechanical Repairs</span>
                            </li>
                            <li>
                                <span className=" text-foreground">Structural &amp; Automation Services</span>
                            </li>
                            <li>
                                <span className=" text-foreground">Plumbing &amp; Fuel System Maintenance</span>
                            </li>
                            <li>
                                <span className=" text-foreground">Waste Management &amp; Environmental Compliance</span>
                            </li>
                            <li>
                                <span className=" text-foreground">Safety Equipment Servicing</span>
                            </li>
                        </ol>
                    </div>
                    {/* Image Content */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-full max-w-7xl">
                            <div className="absolute top-4 left-0 w-full h-full bg-primary rounded-lg -z-10" style={{ height: "90%", width: "90%" }}></div>
                            <img
                                src="/docking-4.jpg"
                                alt="Maintenance crew working on vessel"
                                className="rounded-lg w-full object-cover"
                                style={{ minHeight: "250px", maxHeight: "340px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl  mb-4 text-primary">
                            Our Maintenance Solutions
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            We deliver comprehensive maintenance solutions to ensure vessels operate at peak performance, reduce downtime, and extend asset life.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm md:text-base">
                            <li>
                                <span className=" text-foreground">Preventive Maintenance:</span> Scheduled upkeep of machinery, systems, and onboard equipment to avoid breakdowns and optimize reliability.
                            </li>
                            <li>
                                <span className=" text-foreground">Corrective Maintenance:</span> Rapid response to technical faults or malfunctions, minimizing operational disruption.
                            </li>
                            <li>
                                <span className=" text-foreground">Condition-Based Monitoring:</span> Use of diagnostic tools and performance trackers to identify early signs of wear or system deterioration.
                            </li>
                            <li>
                                <span className=" text-foreground">Machinery Overhauls:</span> Full servicing and overhaul of engines, pumps, generators, and other critical systems.
                            </li>
                            <li>
                                <span className=" text-foreground">Hull &amp; Structural Maintenance:</span> Regular inspections; coating renewal; and corrosion control for structural reliability.
                            </li>
                            <li>
                                <span className=" text-foreground">Electrical &amp; Automation Solutions:</span> Maintenance and calibration of power systems, navigation aids, and onboard electronics.
                            </li>
                            <li>
                                <span className=" text-foreground">Maintenance Records &amp; Reporting:</span> Detailed logs and documentation of maintenance activities to support audits, compliance, and long-term planning.
                            </li>
                            <li>
                                <span className=" text-foreground">Spare Parts Inventory Support:</span> Coordination for timely sourcing and supply of spare parts and consumables.
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link href="/learn/docking/maintenance">
                                <RequestQuoteButton>
                                Learn more
                            </RequestQuoteButton>
                            </Link>
                        </div>
                    </div>
                    {/* Image Content */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-full max-w-7xl">
                            <div className="absolute top-4 left-0 w-full h-full bg-primary rounded-lg -z-10" style={{ height: "90%", width: "90%" }}></div>
                            <img
                                    src="/docking-5.jpg"
                                alt="Two maintenance workers discussing with a tablet"
                                className="rounded-lg w-full object-cover"
                                style={{ minHeight: "250px", maxHeight: "340px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <GetQuoteComponent topic="Docking and Maintenance" link="/ship-maintenance-forms" />
            <FAQSearch category="docking-maintenance" />    
        </main>
    )
}
