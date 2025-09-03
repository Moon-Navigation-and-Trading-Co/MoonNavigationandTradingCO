"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const t = useTranslations("HomePage");
  const tt = useTranslations("Buttons");
  const router = useRouter();

  const handleCardInteraction = (index: number, link: string) => {
    // On desktop, a click navigates. The hover is separate.
    if (window.innerWidth >= 1024) {
      router.push(link);
      return;
    }
    // On mobile, a tap toggles the card expansion.
    // Navigation is handled by the buttons inside the card.
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div
        className={`flex flex-row h-[500px] lg:h-[550px] w-full gap-6 my-8 px-4 overflow-x-auto lg:overflow-x-visible flex-nowrap snap-x snap-mandatory scroll-smooth`}
      >
        {/* Enhanced Category Card */}
        <div className="relative shadow-2xl overflow-hidden h-full w-[140px] lg:w-[180px] rounded-3xl flex items-center justify-center flex-shrink-0 snap-start group hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-10"></div>
          <Image
            src={"/container-top-v.jpeg"}
            className="object-cover hidden lg:flex group-hover:scale-110 transition-transform duration-700"
            fill
            alt="Transportation Services Background"
          />
          <Image
            src={"/container-top-h.jpeg"}
            className="object-cover flex lg:hidden group-hover:scale-110 transition-transform duration-700"
            fill
            alt="Transportation Services Background"
          />
          <div className="relative z-20 text-center px-4">
            <h1 className="text-2xl lg:text-2xl font-bold text-white mb-2 leading-tight">
              {title}
            </h1>
            <div className="w-12 h-0.5 bg-white/60 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <Separator className="bg-gradient-to-b from-primary/60 to-primary/30 w-[3px] rounded-full lg:my-24 hidden lg:block" />
        
        {/* Enhanced Service Cards */}
        {freightTypes.map((freight, index) => (
          <motion.div
            key={freight.title}
            className={`relative ${
              expandedIndex === index ? "shadow-2xl" : "shadow-lg"
            } shadow-black/20 bg-black overflow-hidden rounded-3xl min-w-[280px] max-w-[90vw] flex-shrink-0 snap-start h-full group hover:shadow-2xl transition-all duration-500`}
            initial={false}
            animate={{
              flexGrow: expandedIndex === index ? 1.6 : 1,
              flexBasis: expandedIndex === index ? '380px' : '280px',
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          >
            <Card
              className="h-full border-0 cursor-pointer bg-transparent"
              onClick={() => handleCardInteraction(index, freight.link)}
              onMouseEnter={() =>
                window.innerWidth >= 1024 && setExpandedIndex(index)
              }
              onMouseLeave={() =>
                window.innerWidth >= 1024 && setExpandedIndex(null)
              }
            >
              <CardContent className="relative h-full p-0">
                <Image
                  src={freight.image}
                  alt={freight.title}
                  fill
                  className="h-full w-full object-cover overflow-hidden rounded-[24px] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500" />
                
                {/* Content Container */}
                <div className="absolute w-full h-full bottom-0 left-0 px-6 py-6 text-white">
                  {expandedIndex !== index && (
                    <div className="h-full flex flex-col justify-end">
                      <div className="mb-4">
                        <h2 className="text-xl lg:text-2xl font-bold mb-2 leading-tight">
                          {freight.title}
                        </h2>
                        <div className="w-16 h-1 bg-white/60 rounded-full mb-3"></div>
                        <p className="text-sm text-white/80 font-light line-clamp-2">
                          {freight.description.substring(0, 120)}...
                        </p>
                      </div>
                      
                      {/* Hover Indicator */}
                      <div className="flex items-center text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  )}
                  
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="h-full w-full flex flex-col justify-end gap-6"
                    >
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                          {freight.title}
                        </h2>
                        <div className="w-20 h-1 bg-white/60 rounded-full mb-4"></div>
                        <p className="text-base lg:text-lg text-white/90 font-light leading-relaxed max-w-[500px] mb-6">
                          {freight.description}
                        </p>
                      </div>

                      <div className="flex gap-3 justify-start items-center">
                        <Button className="bg-white text-black font-semibold px-6 py-3 hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
                          <Link
                            className="w-full h-full flex items-center"
                            href={freight.quote}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {tt("getQuote")}
                          </Link>
                        </Button>
                        <button
                          className="flex items-center text-white/80 hover:text-white font-medium transition-colors duration-300 group"
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(freight.link);
                          }}
                        >
                          <span>{tt("learnmore")}</span>
                          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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
    </div>
  );
}
