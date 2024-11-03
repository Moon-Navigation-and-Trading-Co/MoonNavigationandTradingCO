import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Plane } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Subcategory {
    image: string
    subcategory: string
    description: string
}

interface LearnMoreFormProps {
    title: string
    description: string
    subcategories: Subcategory[]
    link: string
    icon?: React.ReactNode
}

function SubcategoryCard({ subcategory, description, link }: Subcategory & { link: string }) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="relative p-0">
                <Image
                    src="/cargotruck.jpg"
                    alt=""
                    width={1500}
                    height={1000}
                    className="w-full h-48 object-cover"
                />
            </CardHeader>
            <CardContent className="flex-grow pt-6">
                <CardTitle className="text-xl font-semibold text-primary mb-2">{subcategory}</CardTitle>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
            <CardFooter>
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
                <div className="space-y-16">
                    {subcategories.map((subcategory, index) => (
                        <div key={index} className="bg-background rounded-lg shadow-lg shadow-gray-900 overflow-hidden">
                            <div className="md:flex">
                                <div className=" overflow-hidden relative md:flex-shrink-0">
                                    <Image
                                        src={subcategory.image}
                                        alt={subcategory.subcategory}
                                        width={600}
                                        height={400}
                                        className="h-48 w-full object-cover md:h-full md:w-[250px]"
                                    />
                                    <div className='w-full h-[200%] bg-black-overlay absolute top-0 left-0' />
                                </div>
                                <div className="p-8">
                                    <h2 className="text-2xl font-semibold text-primary mb-4">{subcategory.subcategory}</h2>
                                    <p className="mt-2 text-muted-foreground leading-relaxed">{subcategory.description}</p>
                                    <div className="mt-6">
                                        <Link href={link}>
                                            <Button className="bg-primary hover:bg-[#275e63] text-white font-semibold py-2 px-4 rounded">
                                                Get Quote
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}