import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'
import { useTranslations } from 'next-intl'

export default function OceanFreightPage() {
    const t = useTranslations("ocean-freight")

    const Data = {
        title: "Ocean Freight",
        description: "Fast and efficient air transportation solutions",
        subcategories: [
            {
                subcategory: "Project Cargo Services",
                description: t('project-p'),
                image: "/airCargo.jpg",
                link: "/learn/project-cargo"

            },
            {
                subcategory: "Roll On/Off (RoRo)",
                description: t('roll-p'),
                image: "/airCargo.jpg",
                link: "/learn/roll"

            },
            {
                subcategory: "Dangerous Cargo",
                description: t('dangerous-p'),
                image: "/airCargo.jpg",
                link: "/learn/dangerous"
            },
            {
                subcategory: "Heavy Lift",
                description: t('heavy-p'),
                image: "/airCargo.jpg",
                link: "/learn/heavy"

            },
            {
                subcategory: "Break Bulk",
                description: t('breakbulk-p'),
                image: "/airCargo.jpg",
                link: "/learn/breakbulk"

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