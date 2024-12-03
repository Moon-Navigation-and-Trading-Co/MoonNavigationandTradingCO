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
                subcategory: "Request for PDA",
                description: "Rapid delivery for time-sensitive shipments",
                image: "/airCargo.jpg",
                link: "/learn/request-for-pda",

            },
            {
                subcategory: "Sign On/Off Crew Members",
                description: "Cost-effective option for less urgent air shipments",
                image: "/airCargo.jpg",
                link: "/learn/sign-on-off-crew-members",

            },
            {
                subcategory: "Transit Spare Parts",
                description: "Dedicated aircraft for special cargo needs",
                image: "/airCargo.jpg",
                link: "/learn/transit-spare-parts",

            },
            {
                subcategory: "Special Services",
                description: "Specialized handling for temperature-sensitive items",
                image: "/airCargo.jpg",
                link: "/learn/special-services",

            }
        ],
        link: "/ship-agency-forms"
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