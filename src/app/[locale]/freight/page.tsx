"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function FreightServices() {
    const pathname = usePathname();

    useEffect(() => {
        // Add a slight delay to ensure the page is fully loaded
        const handleScroll = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const absoluteElementTop = elementRect.top + window.scrollY;
                    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

                    window.scrollTo({
                        top: middle,
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Run on mount and when pathname changes
        window.addEventListener('load', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('load', handleScroll);
        };
    }, [pathname]);


    const services = [
        {
            id: "air",
            title: "Air Freight",
            description: "When speed is of the essence, our air freight services deliver. We offer fast and secure transportation for time-sensitive or high-value shipments worldwide. Our global network of airline partners and airport facilities ensures your cargo gets priority handling and the quickest possible transit times. We provide door-to-door solutions, including customs clearance, security screening, and special handling for perishables or dangerous goods. With options for next-flight-out and charter services, we can meet even the most demanding deadlines, keeping your supply chain running smoothly.",
            image: "/cargoAir.jpeg",
        },
        {
            id: "ocean",
            title: "Ocean Freight",
            description: "Our ocean freight services offer a cost-effective solution for transporting large volumes of goods across international waters. With access to major shipping lines and ports worldwide, we ensure your cargo reaches its destination safely and on time. Our experienced team manages all aspects of sea freight logistics, including container loading, customs clearance, and last-mile delivery. Whether you need full container loads (FCL) or less than container loads (LCL), we tailor our services to meet your specific requirements, providing tracking and visibility throughout the journey.",
            image: "/cargoShip.jpeg"
        },
        {
            id: "inland",
            title: "Inland Freight",
            description: "Our inland freight services provide reliable and flexible transportation solutions for moving goods within domestic borders. We offer a comprehensive network of trucks, trains, and barges to ensure your shipments reach their destination efficiently. Our team coordinates seamless intermodal transitions, optimizing routes and reducing transit times. We handle everything from single pallets to full truckloads, offering services such as expedited shipping, temperature-controlled transport, and specialized equipment for oversized cargo. With real-time tracking and dedicated customer support, we keep you informed every step of the way.",
            image: "/cargotruck.jpg",
        },

    ]

    return (
        <div className=" min-h-screen">
            <div className="container mx-auto mt-16 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Freight Services</h1>
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <section key={service.id} id={service.id}>
                            <div key={index} className="bg-background rounded-lg shadow-lg shadow-gray-900 overflow-hidden">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="h-48 w-full object-cover md:h-full md:w-[250px]"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
                                        <p className="mt-2 text-muted-foreground leading-relaxed">{service.description}</p>
                                        <div className="mt-6">
                                            <Button className="bg-primary hover:bg-[#275e63] text-white font-semibold  rounded">
                                                <Link href={"/inland-services-forms"} className="w-full flex items-center h-full">
                                                    Get Quote
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    ))}
                </div>
            </div>
        </div>
    )
}