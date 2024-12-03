import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'

export default function AirFreightPage() {
    const airFreightData = {
        title: "Air Freight",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "Express Air Freight",
                description: "Rapid delivery for time-sensitive shipments",
                image: "/airCargo.jpg",
                link: "/learn/air-freight",
            },
        ],
        link: "/air-freight-forms"
    }

    return (
        <>
            <LearnMoreForm
                title={airFreightData.title}
                description={airFreightData.description}
                subcategories={airFreightData.subcategories}
                link={airFreightData.link}
                icon={<Plane />}
            />
        </>
    )
}