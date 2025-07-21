import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Subcategory {
    image: string
    subcategory: string
    description: string
    link: string
}

interface LearnMoreFormProps {
    title: string
    description: string
    subcategories: Subcategory[]
    link: string
    icon?: React.ReactNode
}

function SubcategoryCard({ subcategory, description, link, image }: Subcategory & { link: string }) {
    return (
        <Card className="flex flex-col h-full min-w-[260px] max-w-xs flex-shrink-0 mx-2">
            <CardHeader className="relative p-0">
                <Image
                    src={image}
                    alt=""
                    width={1500}
                    height={1000}
                    className="w-full h-32 object-cover"
                />
            </CardHeader>
            <CardContent className="flex-grow pt-4 pb-2 px-4">
                <CardTitle className="text-lg font-semibold text-primary mb-1">{subcategory}</CardTitle>
                <p className="text-sm text-muted-foreground leading-snug">{description}</p>
            </CardContent>
            <CardFooter className="px-4 pb-4 pt-2">
                <Link href={link} className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Get Quote
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default function LearnMoreForm({ title, description, subcategories, link, icon = <Plane /> }: LearnMoreFormProps) {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto mt-16 py-12">
                <h1 className="text-4xl font-bold text-center mb-4 text-foreground">{title}</h1>
                <p className='mb-12 text-center'>{description}</p>
                {/* Responsive horizontal scroll on mobile */}
                <div className="md:grid md:grid-cols-1 space-y-8 md:space-y-16">
                    <div className="flex md:block overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-2 md:mx-0 pb-4 md:pb-0">
                        {subcategories.map((subcategory, index) => (
                            <div key={index} className="snap-start">
                                <SubcategoryCard {...subcategory} link={link} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}