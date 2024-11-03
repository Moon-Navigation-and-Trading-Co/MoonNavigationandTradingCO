import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import Image from 'next/image'

export default function AirFreightPage() {
    const airFreightData = {
        title: "Other Services",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "International Trading",
                description: "Rapid delivery for time-sensitive shipments",
                link: "/international-trading-forms"

            },
            {
                subcategory: "Ship Management",
                description: "Cost-effective option for less urgent air shipments",
                link: "/ship-management-forms"

            },
            {
                subcategory: "Docking and Maintenance",
                description: "Dedicated aircraft for special cargo needs",
                link: "/air-freight-forms"

            },
            {
                subcategory: "Container Handling, Stevedoring, and Storage",
                description: "Specialized handling for temperature-sensitive items",
                link: "/container-services-forms"

            },
            {
                subcategory: "Handling, Stevedoring, and Storage",
                description: "Specialized handling for temperature-sensitive items",
                link: "/air-freight-forms"

            },
            {
                subcategory: "Custom Clearance Services",
                description: "Specialized handling for temperature-sensitive items",
                link: "/air-freight-forms"
            }
        ],
    }

    return (
        <div className="container mx-auto px-4 py-14">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-primary">{airFreightData.title}</h1>
                <p className="text-xl text-muted-foreground">{airFreightData.description}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {airFreightData.subcategories.map((subcategory, index) => (
                    <Card key={index} className="overflow-hidden relative h-[250px] transition-all duration-300 hover:shadow-lg">
                        <Image className='absolute top-0 left-0 w-full h-full object-cover' src={'/cargotruck.jpg'} alt={"title"} width={1500} height={1000} />
                        <div className='w-full h-full absolute top-0 left-0 bg-black-overlay z-10' />
                        <div className="relative h-full z-20 flex flex-col justify-between">
                            <CardHeader className='flex flex-col gap-5'>
                                <CardTitle className="gap-2 text-white">
                                    {subcategory.subcategory}
                                </CardTitle>
                                <CardDescription className='text-gray-300'>{subcategory.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <CardFooter className='p-0 mt-4'>
                                    <Link href={subcategory.link}>
                                        <Button>
                                            Get a Quote
                                            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>


        </div>
    )
}