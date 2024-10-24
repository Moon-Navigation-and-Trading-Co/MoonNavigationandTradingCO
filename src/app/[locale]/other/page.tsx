import { Button } from "@/components/ui/button"
import Image from "next/image"
import ServicesComponent from "@/components/service-types-component"

export default function FreightServices() {
    const services = [
        {
            title: "International Trading",
            description: "Our international trading services facilitate the global exchange of goods. With expertise in import/export regulations and trade compliance, we help businesses navigate the complexities of cross-border commerce. Our team provides support in sourcing products, managing logistics, and ensuring regulatory compliance. We also offer financial services like letters of credit to secure your international transactions.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/international-trading-forms"
        },
        {
            title: "Docking and Maintenance",
            description: "We offer docking and maintenance services to ensure your vessel remains in optimal condition. Our facilities are equipped to handle routine maintenance, repairs, and overhauls for vessels of all sizes. We provide expert service in hull cleaning, engine maintenance, painting, and more. Our team works efficiently to minimize downtime and get your vessel back in operation as quickly as possible.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/international-trading-forms"

        },
        {
            title: "Ship Management",
            description: "Our ship management services provide end-to-end solutions for vessel owners. From crew management and technical maintenance to regulatory compliance and financial reporting, we handle all aspects of vessel operations. Our experienced team ensures that your vessel runs efficiently, safely, and profitably. We offer flexible management solutions tailored to meet the specific needs of your fleet.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
            link: "/ship-management"
        },
    ]

    return (
        <ServicesComponent services={services} />
    )
}