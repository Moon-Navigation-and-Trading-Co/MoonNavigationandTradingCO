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
import { useRef } from "react";
import ServicesMiniCard from "@/components/servicesMiniCards";

export default function Index() {
  const t = useTranslations('HomePage');
  const tt = useTranslations('Buttons');
  const modalRef = useRef<HTMLDivElement | null>(null);

  const scrollToModal = () => {
    if (modalRef.current) {
      modalRef.current.style.scrollMarginTop = '200px';
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col gap-2 md:gap-10">

        {/* Image and slogan */}
        <div className="relative w-full h-full rounded-2xl shadow-black shadow-md md:shadow-xl md:shadow-black ">
          <div className="w-full h-full rounded-2xl bg-black-overlay absolute"></div>
          <Image className="rounded-2xl  w-full " src={'/cargotruck.jpg'} alt="Hero Image" width={2560} height={1600} />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[#E2F1E7]/85 w-full text-center font-semibold tracking-wider text-2xl sm:text-4xl  md:text-5xl">{t("slogan")}</h1>
        </div>

        {/* About us section */}

        {/* Box Box | Box | box */}
        {/* Booooox |  o  |  o  */}

        <section >

          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-10">

            {/* First Set of Boxes || First Column */}
            <div className="grid grid-cols-3 md:grid-cols-2  col-span-2 gap-2">

              <div className="shadow-md shadow-black bg-custom-radial rounded-2xl aspect-square flex items-center justify-center relative">
                <button className="absolute w-full h-full" onClick={scrollToModal}></button>
                <Image alt="about us icon" src={'/letter-i.png'} width={70} height={70} />
                <h1 className="absolute bottom-3 left-5 text-white text-lg font-semibold">{t("aboutImgTitle")}</h1>
              </div>

              <div className="shadow-md shadow-black rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative">
                <Image alt="about us icon" src={'/cargoShip.png'} fill />
              </div>

              <div className="shadow-md col-span-1 md:col-span-2 shadow-black rounded-2xl md:max-h-[200px] min-w-full overflow-hidden aspect-square md:aspect-video flex items-center justify-center relative">
                <Image alt="about us icon" src={'/cargoAir.png'} width={1000} height={500} />
              </div>

            </div>

            {/* Second Column */}
            <div ref={modalRef} className="col-span-2 w-full h-full flex flex-col justify-between">
              <h1 className="text-3xl font-semibold pt-2 ">{t("aboutTitle")}</h1>
              <p className="text-gray-600 text-base py-10">{t("aboutDescription")}</p>
              <Button className="w-[130px]" >{tt("learnmore")}</Button>
            </div>


            {/* Third Column */}
            <div className="shadow-md shadow-black flex rounded-2xl items-center justify-center h-full overflow-hidden">
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

          <div className="flex flex-col gap-8 bg-[#E2F1E7] px-2 py-5 rounded-2xl ">
            {/* Transportation Services */}
            <CarouselAnimation />

            {/* Ship/Container Services */}
            <TransportationServices />

            {/* Other Services */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4">
              <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
              }} />
              <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
              }} />
              <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
              }} />
              <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
              }} />
              <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
              }} />
              <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
              }} />

            </div>
          </div>

        </section>

        <section id="contact">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 pb-20">

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl text-[#3A5F5F] font-semibold">{t("contactTitle")}</h1>
              <p className="text-[#003D25] pb-5 font-medium">{t("contactDescription")}</p>

              <ul className="flex flex-col gap-2 text-[#5F8D8D]">
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2" /><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" /><path d="M2 8v11c0 1.1.9 2 2 2h14" /></svg>
                  Info@logicbase.co.uk
                </li>
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +20 111 555 2552</li>
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                  123 Shipping Lane, Port City, 12345</li>
              </ul>
            </div>

            <div className="">
              <Button className="w-[130px]" >{tt("contact")}</Button>

            </div>



          </div>

        </section>

        {/* <section id="otherServices">

          <div>
            <ServicesMiniCard icon="/letter-i.png" description="Lorem Ipsum is so overrated let me write my own overrated let me write my own overrated let me write my own overrated let me write my own!" buttonText="Learn More" title={"Shipping Services"} onButtonClick={function (): void {
            }} />
          </div>


        </section> */}

      </main >
    </>
  );
}
