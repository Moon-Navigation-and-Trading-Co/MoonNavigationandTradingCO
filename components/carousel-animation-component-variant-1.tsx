"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface FreightType {
  title: string;
  description: string;
  image: string;
  link: string;
  quote: string;
}

interface CarouselAnimationProps {
  freightTypes: FreightType[];
  title: string;
}

export default function CarouselAnimation({
  freightTypes,
  title,
}: CarouselAnimationProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const t = useTranslations("HomePage");
  const tt = useTranslations("Buttons");
  const router = useRouter();

  const handleCardInteraction = (index: number, link: string) => {
    if (index === expandedIndex) {
      router.push(link);
    } else {
      setExpandedIndex(index === expandedIndex ? null : index);
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row h-[800px] lg:h-[500px] w-full gap-4 my-16 px-2`}
    >
      <div className="w-full relative shadow-md overflow-hidden shadow-black h-[150px] lg:h-full lg:w-[160px] rounded-2xl flex items-center justify-start">
        <div className="bg-black/35 z-[104] absolute w-full h-full"></div>
        <Image
          src={"/container-top-v.jpeg"}
          className="object-cover hidden lg:flex"
          fill
          alt="Transportation Services Background"
        />
        <Image
          src={"/container-top-h.jpeg"}
          className="object-cover flex lg:hidden"
          fill
          alt="Transportation Services Background"
        />
        <h1 className="text-center z-[105] text-3xl lg:text-xl font-semibold text-[#E2F1E7] w-full">
          {title}
        </h1>
      </div>
      <Separator className="bg-[#6b9b90] w-[2px] rounded-[100px] lg:my-24" />
      {freightTypes.map((freight, index) => (
        <motion.div
          key={freight.title}
          className={`relative ${expandedIndex === index ? "shadow-xl" : "shadow-md"} shadow-black bg-black overflow-hidden rounded-2xl`}
          initial={false}
          animate={{
            flex: expandedIndex === index ? 4 : 1.2,
          }}
          transition={{
            duration: 0.9,
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        >
          <Card
            className="h-full w-full border-0 cursor-pointer"
            onClick={() => handleCardInteraction(index, freight.link)}
            onMouseEnter={() =>
              window.innerWidth >= 1024 && setExpandedIndex(index)
            }
            onMouseLeave={() =>
              window.innerWidth >= 1024 && setExpandedIndex(null)
            }
          >
            <CardContent className="relative w-full h-full p-0">
              <Image
                src={freight.image}
                alt={freight.title}
                fill
                className="h-full w-full object-cover overflow-hidden rounded-[18px]"
              />
              <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/100 to-black/50" />
              <div className="absolute w-full h-full bottom-0 left-0 px-2 py-4 text-white">
                {expandedIndex !== index && (
                  <h2 className="text-lg flex text-center justify-start items-end w-full h-full lg:justify-center font-semibold">
                    {freight.title}
                  </h2>
                )}
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, type: "linear" }}
                    className="h-full w-full flex p-2 flex-col justify-end lg:justify-end gap-4"
                  >
                    <div>
                      <h2 className="text-xl w-full font-semibold">
                        {freight.title}
                      </h2>
                      <p className="mb-4  mt-2 text-base text-gray-300 font-light max-w-[500px]">
                        {freight.description}
                      </p>
                    </div>

                    <div className="flex gap-2 justify-start items-end">
                      <Button className="bg-white text-black p-0 hover:bg-gray-200">
                        <Link
                          className="w-full h-full flex items-center px-3"
                          href={freight.quote}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {tt("getQuote")}
                        </Link>
                      </Button>
                      <button
                        className="flex bg-transparent text-gray-300 px-2 items-end text-xs hover:text-teal-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(freight.link);
                        }}
                      >
                        {tt("learnmore")}{" "}
                        <ChevronRight height={15} width={15} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
