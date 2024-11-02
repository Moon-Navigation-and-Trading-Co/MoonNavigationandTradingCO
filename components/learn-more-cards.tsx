import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plane } from "lucide-react"

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
        <div className="container mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 text-primary">{title}</h1>
                <p className="text-xl text-muted-foreground">{description}</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {subcategories.map((subcategory, index) => (
                    <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 text-primary" })}
                                {subcategory.subcategory}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{subcategory.description}</CardDescription>
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