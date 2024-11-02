import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'

export default function OceanFreightPage() {
    const Data = {
        title: "Ship Agency Services",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "Less than Container Load",
                description: "Rapid delivery for time-sensitive shipments"
            },
            {
                subcategory: "Standard Container",
                description: "Cost-effective option for less urgent air shipments"
            },
            {
                subcategory: "Oversized Container",
                description: "Dedicated aircraft for special cargo needs"
            },
            {
                subcategory: "Inland Transportation",
                description: "Specialized handling for temperature-sensitive items"
            },
            {
                subcategory: "Stevedoring and Storage",
                description: "Specialized handling for temperature-sensitive items"
            }
        ],
        link: "/air-freight-forms"
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