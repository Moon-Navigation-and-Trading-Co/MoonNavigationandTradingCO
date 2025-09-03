"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
    Ship, 
    Plane, 
    Truck, 
    Package, 
    Shield, 
    Zap, 
    Globe, 
    Clock,
    MapPin,
    Users,
    Award,
    CheckCircle
} from "lucide-react"

export default function EfficientTransportationPage() {
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

    const heroFeatures = [
        { icon: Globe, text: "Global Network Coverage" },
        { icon: Clock, text: "24/7 Operations" },
        { icon: Shield, text: "Secure & Reliable" },
        { icon: Zap, text: "Fast & Efficient" }
    ];

    const services = [
        {
            id: "ocean-freight",
            title: "Ocean Freight Services",
            description: "Comprehensive ocean freight solutions including ship chartering and specialized cargo handling. We provide end-to-end maritime transportation for all types of cargo across global waters.",
            image: "/cargoShip.jpeg",
            subcategories: [
                {
                    name: "Ship Chartering",
                    description: "Complete vessel chartering services for bulk and specialized cargo"
                },
                {
                    name: "Project Cargo",
                    description: "Specialized handling for oversized and complex project shipments"
                },
                {
                    name: "Roll On Roll Off (RORO)",
                    description: "Vehicle and machinery transport via specialized RORO vessels"
                },
                {
                    name: "Breakbulk Cargo",
                    description: "Individual piece cargo handling and transport solutions"
                },
                {
                    name: "Dangerous Cargo",
                    description: "IMDG compliant transport of hazardous materials by sea"
                },
                {
                    name: "Heavy Lift Cargo",
                    description: "Engineering solutions for extremely heavy and oversized cargo"
                },
                {
                    name: "Livestock Transportation",
                    description: "Specialized vessels and handling for live animal transport"
                },
                {
                    name: "Tankers",
                    description: "Liquid cargo transportation including oil, chemicals, and gases"
                }
            ],
            quoteLink: "/ocean-freight-forms"
        },
        {
            id: "container-services",
            title: "Container Services",
            description: "Comprehensive container solutions from standard FCL/LCL to specialized oversized and out-of-gauge cargo handling with inland container services.",
            image: "/container-1.jpg",
            subcategories: [
                {
                    name: "Less Than Container Load (LCL)",
                    description: "Shared container space for smaller shipments and consolidation"
                },
                {
                    name: "Full Container Load (FCL)",
                    description: "Complete container shipments for large volume cargo"
                },
                {
                    name: "Oversized Containers",
                    description: "Non-standard container sizes for specialized cargo needs"
                },
                {
                    name: "Out of Gauge Cargo",
                    description: "Cargo that exceeds standard container dimensions"
                },
                {
                    name: "Inland Container Transportation",
                    description: "Domestic container movement, positioning, and transportation services"
                },
                {
                    name: "Container HSS Services",
                    description: "Container handling, stevedoring and storage services"
                }
            ],
            quoteLink: "/container-services-forms"
        },
        {
            id: "inland-freight",
            title: "Inland Freight Services",
            description: "Reliable inland transportation network connecting ports to final destinations with seamless intermodal solutions.",
            image: "/cargotruck.jpg",
            subcategories: [
                {
                    name: "Truck Transportation",
                    description: "Full truckload and less-than-truckload services"
                },
                {
                    name: "Rail Freight",
                    description: "Cost-effective rail transportation solutions"
                },
                {
                    name: "Barge Services",
                    description: "Waterway transportation for bulk cargo"
                },
                {
                    name: "Intermodal Solutions",
                    description: "Seamless transitions between transport modes"
                },
                {
                    name: "Last-Mile Delivery",
                    description: "Final delivery to customer destinations"
                },
                {
                    name: "Real-time Tracking",
                    description: "Complete visibility throughout the journey"
                }
            ],
            quoteLink: "/inland-services-forms"
        },
        {
            id: "air-freight",
            title: "Air Freight Services",
            description: "When speed is of the essence, our air freight services deliver. Fast and secure transportation for time-sensitive or high-value shipments worldwide.",
            image: "/cargoAir.jpeg",
            subcategories: [
                {
                    name: "Express Air Freight",
                    description: "Next-flight-out and same-day delivery options"
                },
                {
                    name: "Standard Air Freight",
                    description: "Reliable air transportation with competitive rates"
                },
                {
                    name: "Charter Services",
                    description: "Dedicated aircraft for specialized shipments"
                },
                {
                    name: "Perishable Cargo",
                    description: "Temperature-controlled air transport"
                },
                {
                    name: "Dangerous Goods by Air",
                    description: "IATA compliant hazardous materials transport"
                },
                {
                    name: "Door-to-Door Solutions",
                    description: "Complete logistics from pickup to delivery"
                }
            ],
            quoteLink: "/air-freight-forms"
        }
    ];

    const capabilities = [
        {
            title: "Global Network",
            description: "Extensive network covering major ports and trade routes worldwide",
            icon: Globe
        },
        {
            title: "Expert Team",
            description: "Experienced professionals with deep industry knowledge",
            icon: Users
        },
        {
            title: "Quality Assurance",
            description: "Rigorous quality control and safety standards",
            icon: Award
        },
        {
            title: "Technology Driven",
            description: "Advanced tracking and management systems",
            icon: Zap
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold mb-6">
                            Efficient Transportation & Freight Solutions
                        </h1>
                        <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            We pride ourselves on providing comprehensive transportation and freight solutions designed to meet diverse logistical needs. 
                            From local transport to freight services, we ensure that your goods arrive safely and punctually.
                        </p>
                    </div>
                    
                    {/* Hero Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {heroFeatures.map((feature, index) => (
                            <div key={index} className="text-center">
                                <feature.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                                <p className="text-sm text-blue-100">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Overview Section */}
                <section className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Comprehensive Logistics Excellence
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our comprehensive transportation and freight solutions cover ocean freight, container services, inland freight, and air freight. 
                            We excel in ship chartering, project cargo, RORO, breakbulk, dangerous cargo, heavy lift, livestock transportation, and tanker services, 
                            while providing complete container solutions including FCL, LCL, oversized containers, out-of-gauge cargo, inland container transportation, 
                            and container handling, stevedoring and storage services.
                        </p>
                    </div>

                    {/* Capabilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {capabilities.map((capability, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <capability.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{capability.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Services Section */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Services</h2>
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <section key={service.id} id={service.id}>
                                <div className={`bg-background rounded-lg shadow-lg overflow-hidden ${
                                    index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'
                                }`}>
                                    <div className="md:flex-shrink-0">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={600}
                                            height={400}
                                            className="h-48 w-full object-cover md:h-full md:w-[400px]"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                                        
                                        {/* Subcategories */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            {service.subcategories.map((subcategory, subcategoryIndex) => (
                                                <div key={subcategoryIndex} className="bg-gray-50 rounded-lg p-3">
                                                    <div className="flex items-start gap-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h4 className="text-sm font-medium text-foreground">{subcategory.name}</h4>
                                                            <p className="text-xs text-muted-foreground mt-1">{subcategory.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded">
                                                <Link href={service.quoteLink} className="w-full flex items-center h-full">
                                                    Get Quote
                                                </Link>
                                            </Button>
                                            <Button variant="outline" className="font-semibold rounded">
                                                <Link href="/learn-more" className="w-full flex items-center h-full">
                                                    Learn More
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Ready to Optimize Your Logistics?
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        From ocean freight and container services to inland freight and air freight, our comprehensive transportation solutions 
                        ensure your cargo reaches its destination safely and efficiently, regardless of size, type, or complexity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded">
                            <Link href="/contact" className="w-full flex items-center h-full">
                                Contact Us Today
                            </Link>
                        </Button>
                        <Button variant="outline" className="font-semibold rounded">
                            <Link href="/schedule-meeting" className="w-full flex items-center h-full">
                                Schedule Consultation
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    )
} 