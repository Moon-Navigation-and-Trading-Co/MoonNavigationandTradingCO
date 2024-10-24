import { Button } from "@/components/ui/button"
import Image from "next/image"
import ServicesComponent from "@/components/service-types-component"

export default function FreightServices() {
    const services = [
        {
            title: "Buy/Sell Container",
            description: "We offer a comprehensive marketplace for buying and selling containers. Whether you're looking for new or used containers, our global network ensures access to a wide range of options. We handle all aspects of the transaction, from sourcing and inspection to delivery. Our team also assists with customs documentation and compliance to make the process seamless and hassle-free.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/"
        },
        {
            title: "Buy/Sell Vessel",
            description: "Our buy and sell vessel services help shipowners and operators navigate the complex process of acquiring or selling vessels. We provide market insights, valuation services, and negotiation support to ensure you get the best deal. Whether you're looking for a cargo ship, tanker, or specialized vessel, we help you find the right option. Our team also assists with legal documentation, flag registration, and post-purchase inspections.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/"

        },
        {
            title: "Less than Container Load (LCL)",
            description: "Our LCL services offer an economical solution for shipping smaller cargo volumes. By consolidating your shipment with others, we ensure you only pay for the space you need. This is ideal for businesses that don’t require a full container but still want reliable, efficient sea freight services. We provide door-to-door service, including packing, consolidation, customs clearance, and delivery at the destination, with full tracking along the way.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/container-services-forms"

        },
        {
            title: "Standard Container",
            description: "We offer a range of standard containers for transporting your goods. These containers are suitable for general cargo that doesn’t require special handling or temperature control. Available in 20-foot and 40-foot sizes, our standard containers meet international standards for secure, efficient shipping. Whether you need to ship domestically or internationally, we ensure your cargo is safe and arrives on time.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/container-services-forms"

        },
        {
            title: "Oversized Container",
            description: "For cargo that exceeds the dimensions of a standard container, our oversized container services are the solution. We provide specialized equipment and handling for transporting heavy and oversized cargo, ensuring safe delivery. Our team manages the entire process, from loading and securing the cargo to navigating regulatory requirements and providing on-time delivery to your destination.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/container-services-forms"

        },
        {
            title: "Container Handling and Storage",
            description: "Our container handling and storage services ensure your goods are stored securely at our facilities. We offer both short-term and long-term storage solutions, with easy access to your containers when needed. Our team ensures that containers are safely handled during loading, unloading, and stacking, reducing the risk of damage. Additionally, we provide inventory management and tracking to keep you informed of your container status at all times.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/container-services-forms"
        },
    ]

    return (
        <ServicesComponent services={services} />
    )
}