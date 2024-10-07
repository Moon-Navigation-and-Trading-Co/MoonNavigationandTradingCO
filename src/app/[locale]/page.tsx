"use client"
import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Section } from "lucide-react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import CarouselAnimation from "@/components/carousel-animation";
import TransportationServices from "@/components/TransportationServices";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  const t = useTranslations('HomePage');
  const tt = useTranslations('Buttons');

  return (
    <>
      <main className="flex-1 flex flex-col gap-2 md:gap-6">

        {/* Image and slogan */}
        <div className="relative w-full h-full rounded-2xl">
          <div className="w-full h-full rounded-2xl bg-black-overlay absolute"></div>
          <Image className="rounded-2xl" src={'/cargotruck.jpg'} alt="Hero Image" width={2560} height={1600} />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[#E2F1E7]/85 w-full text-center font-semibold tracking-wider text-2xl sm:text-4xl  md:text-5xl">{t("slogan")}</h1>
        </div>

        {/* About us section */}

        {/* Box Box | Box | box */}
        {/* Booooox |  o  |  o  */}

        <section id="about">

          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4">

            {/* First Set of Boxes || First Column */}
            <div className="grid grid-cols-2 gap-2 col-span-2">

              <div className="bg-custom-radial rounded-2xl aspect-square flex items-center justify-center relative">
                <Image alt="about us icon" src={'/letter-i.png'} width={70} height={70} />
                <h1 className="absolute bottom-3 left-5 text-white text-lg font-semibold">{t("aboutImgTitle")}</h1>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative">
                <Image alt="about us icon" src={'/cargoShip.png'} fill />
              </div>

              <div className="rounded-2xl  min-w-full max-h-[200px] col-span-2 overflow-hidden aspect-video flex items-center justify-center relative">
                <Image alt="about us icon" src={'/cargoAir.png'} width={1000} height={500} />
              </div>

            </div>

            {/* Second Column */}
            <div className="flex flex-col justify-between col-span-2">
              <h1 className="text-3xl font-semibold pt-2">{t("aboutTitle")}</h1>
              <p className="text-gray-600 text-base ">{t("aboutDescription")}</p>
              <Button className="w-[130px]" >{tt("learnmore")}</Button>
            </div>

            {/* Third Column */}
            <div className="flex rounded-2xl items-center justify-center h-full overflow-hidden">
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src={'/cargoLand.jpg'}
                  alt="Cargo Truck Image"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className="min-h-full min-w-full"
                />
              </div>
            </div>

          </div>

        </section>

        <section id="services">

          <div className="flex flex-col gap-4 bg-[#E2F1E7] p-2 rounded-2xl ">
            {/* Transportation Services */}
            <CarouselAnimation />

            {/* Ship/Container Services */}
            <TransportationServices />
          </div>

        </section>

      </main>
    </>
  );
}
