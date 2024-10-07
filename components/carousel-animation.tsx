import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Separator } from "@radix-ui/react-dropdown-menu";


export default function CarouselAnimation() {
    const [expandedIndex, setExpandedIndex] = useState(0)
    const t = useTranslations('HomePage');
    const tt = useTranslations('Buttons');

    const freightTypes = [
        {
            title: t("servicesCard1Title"),
            description: t("servicesCard1Description"),
            image: "/cargoAir.png",
        },
        {
            title: t("servicesCard2Title"),
            description: t("servicesCard2Description"),
            image: "/cargoAir.png",
        },
        {
            title: t("servicesCard3Title"),
            description: t("servicesCard3Description"),
            image: "/cargoAir.png",
        },
    ]

    return (
        <div className="flex flex-col lg:flex-row h-[800px]  lg:h-[500px] w-full gap-5">
            <div className="w-full  shadow-md shadow-black h-[100px] lg:h-full lg:w-[160px] bg-[#6A908D] rounded-2xl flex items-center justify-start px-2">
                <h1 className="text-center text-xl font-semibold text-white">Transportation Services</h1>
            </div>
            <Separator className="bg-[#243642] w-[2px] lg:my-24" />
            {freightTypes.map((freight, index) => (
                <motion.div
                    key={freight.title}
                    className={`relative ${expandedIndex === index ? 'shadow-xl' : 'shadow-md'} shadow-black bg-black overflow-hidden rounded-2xl`}
                    initial={false}
                    animate={{
                        flex: expandedIndex === index ? 3 : 1,
                    }}
                    transition={{ duration: 0.9, type: 'spring' }}
                >
                    <Card
                        className="h-full w-full border-0 cursor-pointer"
                        onClick={() => setExpandedIndex(index)}
                    >
                        <CardContent className="relative h-full p-0">
                            <Image
                                src={freight.image}
                                alt={freight.title}
                                width={1000}
                                height={1000}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30" />
                            <div className="absolute bottom-0 left-0 p-4 text-white ">
                                <h2 className="text-2xl font-bold">{freight.title}</h2>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <p className="mb-4 mt-2">{freight.description}</p>
                                        <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                                            {tt("getQuote")}
                                        </Button>
                                    </motion.div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}

        </div>
    )
}