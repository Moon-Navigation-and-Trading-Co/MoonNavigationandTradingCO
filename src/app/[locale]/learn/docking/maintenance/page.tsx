"use client";

import Image from "next/image";
import Link from "next/link";

export default function MaintenancePage() {
    return (
        <main className="flex flex-col items-center w-full px-4 py-12 bg-background">
            {/* Our Maintenance Services Header */}
            <section className="w-full max-w-7xl mb-12">
                <h1 className="text-2xl md:text-3xl font-semibold text-[#3b5c8c] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Our Maintenance Services
                </h1>
                <p className="text-muted-foreground max-w-7xl text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    At Moon Navigation and Trading Co., we deliver dependable vessel maintenance services to ensure ships operate at peak performance while maintaining full compliance with international safety and environmental standards. From preventive care to urgent repairs, our expert teams provide comprehensive support tailored to your vessel’s operational requirements.<br /><br />
                    We combine technical expertise with efficient service execution to minimize downtime and enhance vessel reliability.
                </p>
            </section>

            {/* Hull & Structural Maintenance Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 max-w-7xl">
                        <Image
                            src="/images/hull-maintenance.jpg"
                            alt="Hull maintenance on vessel"
                            width={320}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        1. Hull &amp; Structural Maintenance
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        We ensure the integrity and seaworthiness of your vessel through professional hull care and structural upkeep. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Hull surface cleaning, blasting, and coating (anti-corrosion, anti-fouling)</li>
                        <li>Structural steel renewal and welding</li>
                        <li>Tank maintenance and recoating (ballast tanks, fuel tanks, sewage tanks)</li>
                        <li>Deck distortion rectification and hatch cover repairs</li>
                        <li>Superstructure touch-ups and weather deck coating</li>
                    </ul>
                </div>
            </section>
            {/* Engine & Mechanical Repairs Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col gap-2 order-2 md:order-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        2. Engine &amp; Mechanical Repairs
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Our skilled engineers perform thorough diagnostics and repairs for a wide range of engine and mechanical systems. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Main and auxiliary engine maintenance</li>
                        <li>Overhaul of pumps, compressors, and valves</li>
                        <li>Propulsion system repairs and shaft work</li>
                        <li>Fuel injection system and lubrication checks</li>
                        <li>Alignment, stabilization, and vibration monitoring</li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 max-w-7xl">
                        <Image
                            src="/images/engine-repair.jpg"
                            alt="Engine and mechanical repairs"
                            width={320}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Electrical & Automation Services Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 max-w-7xl">
                        <Image
                            src="/images/electrical-automation.jpg"
                            alt="Electrical and automation services"
                            width={320}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        3. Electrical &amp; Automation Services
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        We maintain and troubleshoot your vessel’s electrical and automation infrastructure for safe and efficient operation. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Generator and distribution board servicing</li>
                        <li>Navigation light systems wiring</li>
                        <li>Automation (PLC, ICS, systems, and sensors)</li>
                        <li>Alarm and monitoring systems</li>
                        <li>Electrical cable repairs and system testing</li>
                    </ul>
                </div>
            </section>
            {/* Bunkering & Fuel System Maintenance Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col gap-2 order-2 md:order-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        4. Bunkering &amp; Fuel System Maintenance
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Proper fuel system maintenance is key to vessel efficiency and compliance. We ensure fuel delivery systems are operating smoothly.<br />
                        <span className="font-medium">Our services include:</span>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Fuel line inspection and cleaning</li>
                        <li>Filters and separator maintenance</li>
                        <li>Piping and manifold maintenance</li>
                        <li>Tank air conditioning and testing</li>
                        <li>Leak detection and preventive maintenance</li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 max-w-7xl">
                        <Image
                            src="/images/bunkering-fuel.jpg"
                            alt="Bunkering and fuel system maintenance"
                            width={320}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Waste Management & Environmental Compliance Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center md:justify-start">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 max-w-7xl">
                        <Image
                            src="/images/waste-management.jpg"
                            alt="Waste management and environmental compliance"
                            width={320}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        5. Waste Management &amp; Environmental Compliance
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        We help you meet international marine pollution (MARPOL) standards with effective waste handling solutions.<br />
                        <span className="font-medium">Our services include:</span>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>On-site waste reception services</li>
                        <li>Sludge and bilge water disposal</li>
                        <li>Garbage and sewage management</li>
                        <li>Environmental waste reporting</li>
                        <li>Support for port state control inspections</li>
                    </ul>
                </div>
            </section>
            {/* Safety Equipment Servicing Section */}
            <section className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 mt-16">
                {/* Left: Text Content */}
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        6. Safety Equipment Servicing
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Your crew’s safety is non-negotiable—we ensure all life-saving appliances and firefighting equipment are fully operational.
                        <br />
                        <span className="font-medium">Our services include:</span>
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm md:text-base">
                        <li>Lifeboat and life raft inspection &amp; maintenance</li>
                        <li>Fire extinguisher refilling and servicing</li>
                        <li>Fire detection and suppression systems testing</li>
                        <li>Personal protective equipment (PPE) inventory checks</li>
                        <li>Certification support and compliance records</li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-white p-2 max-w-7xl">
                        <Image
                            src="/images/safety-equipment-servicing.jpg"
                            alt="Safety equipment servicing on vessel"
                            width={320}
                            height={200}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Get your Quote with Us
                    </h2>
                    <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Docking and Maintenance quotation process is designed for your convenience. At
                        Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
                        Quotation by Request system. Simply fill out our short form to initiate your request. Once
                        submitted, our team promptly reviews the information and selects the best consolidation
                        options. You will receive a customized quotation directly in your email, ensuring accurate
                        pricing
                    </p>
                    <Link href="/docking-forms" className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors inline-block">
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
        </main>
    );
}
