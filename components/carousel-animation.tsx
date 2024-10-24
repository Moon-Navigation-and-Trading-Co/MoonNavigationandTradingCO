import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";


export default function CarouselAnimation() {
    const [expandedIndex, setExpandedIndex] = useState(0)
    const t = useTranslations('HomePage');
    const tt = useTranslations('Buttons');

    const freightTypes = [
        {
            title: t("servicesCard1Title"),
            description: t("servicesCard1Description"),
            image: "/cargoAir.jpeg",
            link: "/air-freight-forms"
        },
        {
            title: t("servicesCard2Title"),
            description: t("servicesCard2Description"),
            image: "/airCargo.jpg",
            link: "/ocean-freight-forms"
        },
        {
            title: t("servicesCard3Title"),
            description: t("servicesCard3Description"),
            image: "/land-cargo-2.jpeg",
            link: "/inland-services-forms"
        },
        {
            title: t("servicesCard4Title"),
            description: t("servicesCard4Description"),
            image: "/ship-agency.jpeg",
            link: "/inland-services-forms"
        },
    ]

    return (
        <div className="flex flex-col lg:flex-row h-[800px]  lg:h-[500px] w-full gap-5">
            <div className="w-full relative shadow-md overflow-hidden shadow-black h-[150px] lg:h-full lg:w-[160px]  rounded-2xl flex items-center justify-start">
                <div className="bg-black/35 z-[104] absolute w-full h-full"></div>
                <Image src={'/container-top-v.jpeg'} className="object-cover hidden lg:flex" fill alt="Transportation Services Background" />
                <Image src={'/container-top-h.jpeg'} className="object-cover flex lg:hidden" fill alt="Transportation Services Background" />
                <h1 className="text-center z-[105] text-3xl font-semibold text-[#E2F1E7] w-full">{t("servicesTitle")}</h1>
            </div>
            <Separator className="bg-[#9696a7] w-[2px] rounded-[100px] lg:my-24" />
            {freightTypes.map((freight, index) => (
                <motion.div
                    key={freight.title}
                    className={`relative ${expandedIndex === index ? 'shadow-xl' : 'shadow-md'} shadow-black bg-black overflow-hidden rounded-2xl`}
                    initial={false}
                    animate={{
                        flex: expandedIndex === index ? 4 : 1,
                    }}
                    transition={{ duration: 0.9, type: 'spring' }}
                >
                    <Card
                        className="h-full w-full border-0 cursor-pointer"
                        onClick={() => setExpandedIndex(index)}
                    >
                        <CardContent className="relative w-full h-full p-0">
                            <Image
                                src={freight.image}
                                alt={freight.title}
                                fill
                                className="h-full w-full object-cover overflow-hidden rounded-[18px]"
                            />
                            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30" />
                            <div className="absolute bottom-0 left-0 p-4 text-white ">
                                <h2 className="text-xl w-full font-semibold">{freight.title}</h2>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <p className="mb-4 mt-2 text-base font-light max-w-[500px]">{freight.description}</p>
                                        <Button variant="outline" className="bg-white text-black p-0 hover:bg-gray-200 hover:text-gray-600">
                                            <Link className="h-10 flex font-semibold items-center px-2 " href={freight.link}>
                                                {tt("learnmore")}
                                            </Link>
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