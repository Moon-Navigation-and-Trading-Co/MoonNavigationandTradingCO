import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl';



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
        <div className="flex flex-col lg:flex-row h-[500px] w-full gap-3">
            {freightTypes.map((freight, index) => (
                <motion.div
                    key={freight.title}
                    className="relative overflow-hidden rounded-2xl"
                    initial={false}
                    animate={{
                        flex: expandedIndex === index ? 2 : 1,
                    }}
                    transition={{ duration: 1, type: 'spring' }}
                >
                    <Card
                        className="h-full w-full cursor-pointer"
                        onClick={() => setExpandedIndex(index)}
                    >
                        <CardContent className="relative h-full p-0">
                            <img
                                src={freight.image}
                                alt={freight.title}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30" />
                            <div className="absolute bottom-0 left-0 p-4 text-white">
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
            <div className="w-full h-[100px] lg:h-full lg:w-[170px] bg-red-500 rounded-2xl flex items-center justify-start px-5">

                <h1 className="text-center text-white">Transportation Services</h1>
            </div>
        </div>
    )
}