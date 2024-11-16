import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AirFreightPage() {
    const airFreightData = {
        title: "Other Services",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "International Trading",
                description: "Rapid delivery for time-sensitive shipments",
                link: "/international-trading-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Ship Management",
                description: "Cost-effective option for less urgent air shipments",
                link: "/ship-management-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Docking and Maintenance",
                description: "Dedicated aircraft for special cargo needs",
                link: "/ship-maintenance-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Buy/Rent Containers",
                description: "Buy or Rent containers securely and efficiently",
                link: "/buy-rent-container-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Buy/Rent Vessels",
                description: "Buy or Rent vessels securely and efficiently",
                link: "/buy-rent-vessels-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Container Handling, Stevedoring, and Storage",
                description: "Specialized handling for temperature-sensitive items",
                link: "/container-services-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Out Gauge",
                description: "Specialized handling for temperature-sensitive items",
                link: "/out-gauge-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Handling, Stevedoring, and Storage",
                description: "Specialized handling for temperature-sensitive items",
                link: "/air-freight-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Custom Clearance Services",
                description: "Specialized handling for temperature-sensitive items",
                link: "/air-freight-forms",
                image: "/airCargo.jpg"
            },
            {
                subcategory: "Special Services",
                description: "Specialized handling for temperature-sensitive items",
                link: "/special-services-forms",
                image: "/airCargo.jpg"
            }
        ],
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto mt-16 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-foreground">{airFreightData.title}</h1>
                <div className="space-y-16">
                    {airFreightData.subcategories.map((subcategory, index) => (
                        <div key={index} className="bg-background rounded-lg shadow-lg shadow-gray-900 overflow-hidden">
                            <div className="md:flex">
                                <div className=" overflow-hidden relative md:flex-shrink-0">
                                    <Image
                                        src={subcategory.image}
                                        alt={subcategory.subcategory}
                                        width={600}
                                        height={400}
                                        className="h-48 w-full object-cover md:h-full md:w-[250px]"
                                    />
                                    <div className='w-full h-[200%] bg-black-overlay absolute top-0 left-0' />
                                </div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-semibold text-primary mb-4">{subcategory.subcategory}</h2>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">{subcategory.description}</p>
                                    <div className="mt-6">
                                        <Link href={subcategory.link}>
                                            <Button className="bg-primary hover:bg-[#275e63] text-white font-semibold py-2 px-4 rounded">
                                                Get Quote
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
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