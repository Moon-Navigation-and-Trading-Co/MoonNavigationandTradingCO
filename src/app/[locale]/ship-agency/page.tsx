import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FreightServices() {
    const services = [
        {
            title: "Request for PDA",
            description: "We offer efficient Port Disbursement Account (PDA) request services to ensure your port call runs smoothly. Our team handles all necessary communication and documentation with port authorities, coordinating services such as berth allocation, pilotage, and tug assistance. With transparent cost structures and real-time updates, we help you manage expenses and ensure smooth port operations, allowing you to focus on the critical aspects of your voyage.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
        },
        {
            title: "Sign-On/Off Crew Members",
            description: "Our comprehensive crew sign-on and sign-off services ensure smooth transitions for your vessel's crew. We handle all logistical arrangements, including transport, visa arrangements, and accommodation. Our team works closely with local authorities to ensure compliance with maritime regulations and provides support throughout the process to minimize delays and disruptions. Whether it's a short-term rotation or a complete crew change, we streamline the procedure for seamless operations.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
        },
        {
            title: "Transit Spare Parts",
            description: "We specialize in the expedited transit of spare parts to ensure your vessel remains operational at all times. Our global network ensures that parts are sourced, transported, and delivered efficiently, reducing downtime. Whether it's a routine maintenance item or an urgent repair part, we provide full logistics support, including customs clearance and same-day delivery options in major ports worldwide.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
        },
        {
            title: "Special Services",
            description: "Our special services cater to unique maritime needs, offering tailored solutions for projects that require extra attention and expertise. Whether it's handling oversized cargo, managing offshore logistics, or providing marine consultancy services, our experienced team is here to assist. We also provide specialized equipment and personnel to ensure safety and efficiency for every operation. No matter the challenge, we are equipped to deliver innovative and reliable services.",
            image: "/land-cargo-2.jpeg", // Placeholder image, replace with actual image
        },
    ]

    return (
        <div className=" min-h-screen">
            <div className="container mx-auto mt-16 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Freight Services</h1>
                <div className="space-y-16">
                    {services.map((service, index) => (
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
                                        <Button className="bg-primary hover:bg-[#275e63] text-white font-semibold py-2 px-4 rounded">
                                            Get Quote
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}