import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'

export default function OceanFreightPage() {
    const Data = {
        title: "Container Services",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "Request for PDA",
                description: "Rapid delivery for time-sensitive shipments"
            },
            {
                subcategory: "Sign On/Off Crew Members",
                description: "Cost-effective option for less urgent air shipments"
            },
            {
                subcategory: "Transit Spare Parts",
                description: "Dedicated aircraft for special cargo needs"
            },
            {
                subcategory: "Special Services",
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