import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import CarouselAnimation from '@/components/carousel-animation-component-variant-2'
import { useTranslations } from 'next-intl'

export default function AirFreightPage() {
    const t = useTranslations("other-s")

    const Data =
        [
            {
                title: t("title-1"),
                description: t("description-1"),
                link: "/learn/international-trading",
                image: "/airCargo.jpg",
                quote: "/international-trading-forms",
            },
            {
                title: t("title-2"),
                description: t("description-2"),
                link: "/learn/ship-management",
                image: "/airCargo.jpg",
                quote: "/ship-management-forms",
            },
            {
                title: t("title-3"),
                description: t("description-3"),
                link: "/learn/docking",
                image: "/airCargo.jpg",
                quote: "/ship-maintenance-forms",

            },
            {
                title: t("title-4"),
                description: t("description-4"),
                link: "/learn/buy-rent-container",
                image: "/airCargo.jpg",
                quote: "/buy-rent-container-forms",
            },
            {
                title: t("title-5"),
                description: t("description-5"),
                link: "/learn/buy-rent-vessels",
                image: "/airCargo.jpg",
                quote: "/buy-rent-vessels-forms",
            },
            {
                title: t("title-6"),
                description: t("description-6"),
                link: "/learn/container-hss",
                image: "/airCargo.jpg",
                quote: "/container-services-forms",
            },
            {
                title: t("title-9"),
                description: t("description-9"),
                link: "/learn/out-gauge",
                image: "/airCargo.jpg",
                quote: "/out-gauge-forms",
            },
            {
                title: t("title-7"),
                description: t("description-7"),
                link: "/learn/hss",
                image: "/airCargo.jpg",
                quote: "/air-freight-forms",
            },
            {
                title: t("title-8"),
                description: t("description-8"),
                link: "/learn/customs-clearance",
                image: "/airCargo.jpg",
                quote: "/custom-clearance-forms",
            },
            {
                title: t("title-10"),
                description: t("description-10"),
                link: "/learn/special-services",
                image: "/airCargo.jpg",
                quote: "/special-services-forms",
            }
        ]


    return (
        <div className='flex justify-center'>
            <CarouselAnimation title={t('title')} freightTypes={Data} />
        </div>
    )
}