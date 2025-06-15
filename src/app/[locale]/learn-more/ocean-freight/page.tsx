import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'
import { useTranslations } from 'next-intl'
import CarouselAnimation from '@/components/carousel-animation-component'

export default function OceanFreightPage() {
    const t = useTranslations("ocean-freight")

    const Data =
        // title: "Ocean Freight",
        // description: "Fast and efficient air transportation solutions",
        [
            {
                title: "Project Cargo Services",
                description: t('project-p'),
                image: "/airCargo.jpg",
                link: "/learn/project-cargo",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Roll On/Off (RoRo)",
                description: t('roll-p'),
                image: "/airCargo.jpg",
                link: "/learn/roll",
                quote: "/ocean-freight-forms"


            },
            {
                title: "Dangerous Cargo",
                description: t('dangerous-p'),
                image: "/airCargo.jpg",
                link: "/learn/dangerous",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Heavy Lift",
                description: t('heavy-p'),
                image: "/airCargo.jpg",
                link: "/learn/heavy",
                quote: "/ocean-freight-forms"


            },
            {
                title: "Break Bulk",
                description: t('breakbulk-p'),
                image: "/airCargo.jpg",
                link: "/learn/breakbulk",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Livestock",
                description: t('livestock-p'),
                image: "/airCargo.jpg", //change for image accordingly 
                link: "/learn/livestock",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Tankers",
                description: t('tankers-p'),
                image: "/airCargo.jpg", //change for image accordingly 
                link: "/learn/tankers",
                quote: "/ocean-freight-forms"

            }
            
        ]


    return (
        <>
            {/* <LearnMoreForm
                title={Data.title}
                description={Data.description}
                subcategories={Data.subcategories}
                link={Data.link}
                icon={<Plane />}
            /> */}
            <CarouselAnimation title={t('ocean')} freightTypes={Data} />
        </>
    )
}