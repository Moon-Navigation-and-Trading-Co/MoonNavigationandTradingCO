import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'

export default function OceanFreightPage() {
    const Data = {
        title: "Ocean Freight",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "Project Cargo Services",
                description: "Rapid delivery for time-sensitive shipments",
                image: "/airCargo.jpg"

            },
            {
                subcategory: "Roll On/Off (RoRo)",
                description: "Cost-effective option for less urgent air shipments",
                image: "/airCargo.jpg"

            },
            {
                subcategory: "Heavy Lift",
                description: "Dedicated aircraft for special cargo needs",
                image: "/airCargo.jpg"

            },
            {
                subcategory: "Dangerous Cargo",
                description: "Specialized handling for temperature-sensitive items",
                image: "/airCargo.jpg"

            }
        ],
        link: "/ocean-freight-forms"
    }

    return (
        <>
            <LearnMoreForm
                title={Data.title}
                description={Data.description}
                subcategories={Data.subcategories}
                link={Data.link}
                icon={<Plane />}
            />
        </>
    )
}