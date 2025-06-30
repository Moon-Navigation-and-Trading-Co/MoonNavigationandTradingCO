import GetQuoteComponent from "@/components/getQuoteComponent";

export default function StevedoringPage() {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
        style={{ fontFamily: "Raleway, sans-serif" }}>
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
            <GetQuoteComponent topic="Stevedoring" link="/container-services-forms" />
        </div>
    )
}