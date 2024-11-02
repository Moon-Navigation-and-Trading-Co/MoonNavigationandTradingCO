import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"

export default function AirFreightPage() {
    const airFreightData = {
        title: "Other Services",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "International Trading",
                description: "Rapid delivery for time-sensitive shipments",
                link: "/air-freight-forms"

            },
            {
                subcategory: "Ship Management",
                description: "Cost-effective option for less urgent air shipments",
                link: "/air-freight-forms"

            },
            {
                subcategory: "Docking and Maintenance",
                description: "Dedicated aircraft for special cargo needs",
                link: "/air-freight-forms"

            },
            {
                subcategory: "Container Handling, Stevedoring, and Storage",
                description: "Specialized handling for temperature-sensitive items",
                link: "/air-freight-forms"

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
                    <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plane className="h-6 w-6 text-primary" />
                                {subcategory.subcategory}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{subcategory.description}</CardDescription>
                            <CardFooter className='p-0 mt-4'>
                                <Link href={subcategory.link}>
                                    <Button>
                                        Get a Quote
                                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </CardContent>
                    </Card>
                ))}
            </div>


        </div>
    )
}