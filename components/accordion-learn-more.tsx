import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './ui/button'
interface Subcategory {
    subcategory: string
    description: string
}

interface AccordionLearnMoreProps {
    title: string
    description: string
    subcategories: Subcategory[]
    link: string
}

export default function AccordionLearnMore({
    title,
    description,
    subcategories,
    link
}: AccordionLearnMoreProps) {
    return (
        <div className="w-full max-w- mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-base text-muted-foreground">{description}</p>

            <Accordion type="single" collapsible className="w-full bg-background dark:bg-transparent rounded-2xl ">
                {subcategories.map((sub, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                            <h3 className="text-lg font-semibold no-underline">{sub.subcategory}</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className=" text-muted-foreground">{sub.description}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <Button className='p-0 text-white hover:text-gray-300'>
                <Link
                    href={link}
                    className="inline-flex items-center w-full h-full pl-3 pr-2 font-normal"
                >
                    Get Quote
                    <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
            </Button>

        </div>
    )
}