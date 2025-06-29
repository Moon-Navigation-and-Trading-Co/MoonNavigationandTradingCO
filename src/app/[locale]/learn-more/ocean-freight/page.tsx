import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import LearnMoreForm from '@/components/learn-more-cards'
import { useTranslations } from 'next-intl'
import CarouselAnimation from '@/components/carousel-animation-component'
import Image from 'next/image'

export default function OceanFreightPage() {
    const t = useTranslations("ocean-freight")

    const Data =
        // title: "Ocean Freight",
        // description: "Fast and efficient air transportation solutions",
        [
            {
                title: "Project Cargo Services",
                description: t('project-p'),
                image: "/project-cargo-hero.jpg",
                link: "/learn/project-cargo",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Roll On/Off (RoRo)",
                description: t('roll-p'),
                image: "/rorotitleimage.jpg",
                link: "/learn/roll",
                quote: "/ocean-freight-forms"


            },
            {
                title: "Dangerous Cargo",
                description: t('dangerous-p'),
                image: "/dangerous-cargo-banner.jpg",
                link: "/learn/dangerous",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Heavy Lift",
                description: t('heavy-p'),
                image: "/heavy-lift-cargo-banner.jpg",
                link: "/learn/heavy",
                quote: "/ocean-freight-forms"


            },
            {
                title: "Break Bulk",
                description: t('breakbulk-p'),
                image: "/breakbulk-banner.jpg",
                link: "/learn/breakbulk",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Livestock",
                description: "Specialized livestock transportation services ensuring the safe and humane transport of animals across international waters. Our experienced team provides climate-controlled environments, veterinary care coordination, and compliance with international animal welfare regulations.",
                image: "/livestock-banner.jpg", //change for image accordingly 
                link: "/learn/livestock",
                quote: "/ocean-freight-forms"

            },
            {
                title: "Tankers",
                description: "Specialized tanker shipping services for liquid cargo including oil, chemicals, and liquefied gases. Our fleet of modern tankers ensures safe, efficient, and environmentally compliant transportation of liquid commodities across global trade routes.",
                image: "/tankers-header.jpg", //change for image accordingly 
                link: "/learn/tankers",
                quote: "/ocean-freight-forms"

            }
            
        ]


    return (
        <>
            {/* Ocean Freight Hero Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-0 items-center mt-12">
                <div className="w-full rounded-[3rem] overflow-hidden mb-12 shadow-lg">
                    <div className="relative w-full h-[340px]">
                        <Image
                            src="/ocean-freight-hero.jpg"
                            alt="Moon Navigation and Trading Co. Ocean Freight"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                    </div>
                </div>
                <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-2 md:px-0">
                    {/* Left: Title and CTA */}
                    <div className="flex flex-col items-start justify-start pt-2 md:pt-12">
                        <h1 className="text-4xl font-light text-foreground mb-12" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: 0 }}>
                            Ocean Freight
                        </h1>
                        <Button asChild className="bg-[#3846a5] text-white px-6 py-2 rounded-full font-semibold text-base shadow hover:bg-[#2c357d] mt-8 md:mt-0" style={{ minWidth: 170 }}>
                            <a href="/ocean-freight-forms">Request a Quote</a>
                        </Button>
                    </div>
                    {/* Right: Description */}
                    <div className="flex flex-col gap-2 pt-2 md:pt-8">
                        <h2 className="text-2xl font-normal mb-2" style={{ color: '#3846a5', fontFamily: 'Montserrat, sans-serif', letterSpacing: 0 }}>
                            What is Ocean Freight ?
                        </h2>
                        <p className="text-base text-foreground leading-relaxed mb-4" style={{ maxWidth: 600 }}>
                            Ocean freight is a vital link in global trade, providing businesses with a cost-effective and dependable way to transport goods across the world. At Moon Navigation and Trading Co., we specialize in creating smart, customized ocean freight solutions that meet the unique needs of every shipment—including oversized, heavy-lift, livestock, hazardous cargo, and tankers. With access to global shipping routes, we ensure the smooth, secure, and efficient movement of goods from origin to destination.
                        </p>
                        <p className="text-base text-foreground leading-relaxed" style={{ maxWidth: 600 }}>
                            Trust us to deliver logistics strategies built around your cargo—prioritizing performance, safety, and full compliance with international standards.
                        </p>
                    </div>
                </div>
            </div>
            {/* Carousel Section */}
            <CarouselAnimation title={t('ocean')} freightTypes={Data} />
        </>
    )
}