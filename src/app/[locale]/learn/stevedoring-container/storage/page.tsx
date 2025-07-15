import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function ContainerStoragePage() {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
        style={{ fontFamily: "Raleway, sans-serif" }}>
            {/* Storage & Warehousing Services Section */}
            <div className="w-full max-w-7xl mx-auto mt-20">
                <h2 className="text-2xl md:text-3xl text-primary mb-2 text-left md:text-left">
                    Our Secure Storage and Warehousing Services
                </h2>
                <p className="text-muted-foreground text-left mb-8 text-sm md:text-base max-w-7xl mx-auto">
                    We provide short-term and long-term storage solutions to meet diverse cargo requirements, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* 1. Container Yard & Open Storage (Text left, image right) */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg md:text-xl mb-3">
                            1. Container Yard and Open Storage
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                            <li>
                                <span className="">Port and Empty Container Storage</span> – Secure area for both import/export cargo.
                            </li>
                            <li>
                                <span className="">Bonded Warehousing</span> – Duty-free storage for transshipment and customs-cleared locations.
                            </li>
                            <li>
                                <span className="">Reefer Plug-in Points</span> – Temperature storage for perishable goods with constant temperature monitoring.
                            </li>
                        </ul>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden shadow flex items-center">
                        <img
                            src="/w-hss-1.jpg"
                            alt="Container yard with reach stacker and containers"
                            className="object-cover w-full h-40 md:h-56"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-20">
                    {/* 2. Specialized Warehousing Solutions (Image left, text right) */}
                    <div className="w-full rounded-xl overflow-hidden shadow flex items-center order-2 md:order-1">
                        <img
                            src="/w-hss-2.jpg"
                            alt="Warehouse interior with racking and worker"
                            className="object-cover w-full h-40 md:h-56"
                        />
                    </div>
                    <div className="flex flex-col justify-center order-1 md:order-2">
                        <h3 className="text-lg md:text-xl mb-3">
                            2. Specialized Warehousing Solutions
                        </h3>
                        <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                            <li>
                                <span className="">Temperature-Controlled Warehouses</span> – Ideal for pharmaceuticals, perishables, and sensitive goods.
                            </li>
                            <li>
                                <span className="">Hazardous Goods Storage</span> – Secure and compliant storage for flammables and dangerous materials.
                            </li>
                            <li>
                                <span className="">Breakbulk and Heavy Lift Cargo Storage</span> – Custom storage areas for oversized shipments.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 3. Inventory & Cargo Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-20">
                {/* Left: Description */}
                <div>
                    <h3 className="text-lg md:text-xl  mb-3">
                        3. Inventory and Cargo Management
                    </h3>
                    <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-2 pl-2 mb-4">
                        <li>
                            <span className="">Systematic Inventory Tracking</span> – Efficient cargo handling and stock management.
                        </li>
                        <li>
                            <span className="">Packing and Consolidation Services</span> – Repacking, cutting, and cargo preparation for final shipment.
                        </li>
                        <li>
                            <span className="">Customized Storage Plans</span> – Flexible solutions tailored to client needs.
                        </li>
                    </ul>
                </div>
                {/* Right: Image */}
                <div>
                    <div className="w-full rounded-xl overflow-hidden shadow">
                        <img
                            src="/w-hss-3.jpg"
                            alt="Warehouse inventory management with worker and racking"
                            className="object-cover w-full h-40 md:h-56"
                        />
                    </div>
                </div>
            </div>
            <GetQuoteComponent topic="Container Storage" link="/container-services-forms" />
            <FAQSearch category="container-handling-stevedoring-storage" /> 
        </div>
    )
}