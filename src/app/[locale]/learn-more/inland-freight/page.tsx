import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'

export default function InlandFreightPage() {
    const Data = {
        title: "Inland Freight",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "International Inland",
                description: "Rapid delivery for time-sensitive shipments",
                image: "/airCargo.jpg",
                link: "/air-cargo",

            },
            {
                subcategory: "Local Inland",
                description: "Cost-effective option for less urgent air shipments",
                image: "/airCargo.jpg",
                link: "/air-cargo",

            },
            {
                subcategory: "Inland Container",
                description: "Dedicated aircraft for special cargo needs",
                image: "/airCargo.jpg",
                link: "/air-cargo",

            },

        ],
        link: "/inland-services-forms"
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