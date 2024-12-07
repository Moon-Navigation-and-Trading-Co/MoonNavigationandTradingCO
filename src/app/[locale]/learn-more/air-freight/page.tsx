import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'
import CarouselAnimation from '@/components/carousel-animation-component'
import { useTranslations } from 'next-intl'

export default function AirFreightPage() {
    const t = useTranslations('HomePage')
    const tt = useTranslations('Buttons')
    const freightTypes = [
        {
            title: t("servicesCard1Title"),
            description: t("servicesCard1Description"),
            image: "/cargoAir.jpeg",
            link: "/air-freight-forms",
            quote: "/air-freight-forms"
        },
        {
            title: t("servicesCard2Title"),
            description: t("servicesCard2Description"),
            image: "/airCargo.jpg",
            link: "/learn-more/ocean-freight",
            quote: "/ocean-freight-forms"
        },
        {
            title: t("servicesCard3Title"),
            description: t("servicesCard3Description"),
            image: "/land-cargo-2.jpeg",
            link: "/learn-more/inland-freight",
            quote: "/inland-services-forms"
        },
    ]

    return (
        <>
            <CarouselAnimation title={t('ocean')} freightTypes={freightTypes} />
        </>
    )
}