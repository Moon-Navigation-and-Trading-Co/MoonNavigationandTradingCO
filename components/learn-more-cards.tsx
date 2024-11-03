import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"
import Image from 'next/image'

interface Subcategory {
    subcategory: string;
    description: string;
}

interface LearnMoreFormProps {
    title: string;
    description: string;
    subcategories: Subcategory[];
    link: string;
    icon?: React.ReactNode;
}

export default function LearnMoreForm({ title, description, subcategories, link, icon = <Plane /> }: LearnMoreFormProps) {
    return (
        <div className="container mx-auto px-4 py-20">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-primary">{title}</h1>
                <p className="text-xl text-muted-foreground">{description}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {subcategories.map((subcategory, index) => (
                    <Card key={index} className="relative overflow-hidden h-[200px] transition-all duration-300 hover:shadow-lg">
                        <CardHeader>
                            <Image className='absolute bg-black-overlay top-0 left-0' src={'/cargotruck.jpg'} alt={"title"} width={1500} height={1000} />
                            <div className='w-full h-[120%] absolute -top-5 left-0 bg-black-overlay' />
                            <CardTitle className="flex h-[140px] flex-col text-white justify-end gap-2 z-[5]">
                                {subcategory.subcategory}
                                <CardDescription className='z-[15] text-gray-300 font-normal'>{subcategory.description}</CardDescription>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Link href={link}>
                    <Button size="lg" className="group">
                        Get a Quote
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}