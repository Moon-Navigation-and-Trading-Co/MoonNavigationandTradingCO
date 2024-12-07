import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'
import { useTranslations } from 'next-intl'
import CarouselAnimation from '@/components/carousel-animation-component-variant-1'

export default function InlandFreightPage() {
    const t = useTranslations("inland-freight")

    const Data =
        // description: "Fast and efficient air transportation solutions",
        [
            {
                title: t('international'),
                description: t('international-p'),
                image: "/airCargo.jpg",
                link: "/learn/inland-freight",
                quote: "/inland-services-forms"

            },
            {
                title: t('local'),
                description: t('local-p'),
                image: "/airCargo.jpg",
                link: "/learn/inland-freight",
                quote: "/inland-services-forms"


            },
            {
                title: t('container'),
                description: t('container-p'),
                image: "/airCargo.jpg",
                link: "/learn/inland-freight",
                quote: "/inland-services-forms"


            },

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
            <CarouselAnimation
                freightTypes={Data}
                title={t('title')}
            />
        </>
    )
}