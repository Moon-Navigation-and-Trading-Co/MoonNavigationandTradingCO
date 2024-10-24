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
import ServicesWithLogo from "@/components/services-with-logos";
import { useRef } from "react";
import ServicesMiniCard from "@/components/servicesMiniCards";
import ContactForm from "@/components/contact-form";

export default function Index() {
  const t = useTranslations('HomePage');
  const tt = useTranslations('Buttons');
  const ttt = useTranslations('Services-3')
  const tttt = useTranslations('Contact')
  const modalRef = useRef<HTMLDivElement | null>(null);

  const scrollToModal = () => {
    if (modalRef.current) {
      modalRef.current.style.scrollMarginTop = '200px';
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col gap-20">

        {/* Image and slogan */}
        <div className=" w-full h-custom-height">
          <div className="relative  flex items-center justify-center rounded-3xl -mt-8 md:mt-[2rem] bg-home-image bg-center  bg-cover w-full h-full md:h-[90%]  aspect-auto md:aspect-video shadow-black shadow-xl md:shadow-xl md:shadow-black  ">
            <div className="w-full h-full z-[10] top-[1px] bg-black-overlay rounded-3xl absolute"></div>
            <div className="flex flex-col items-center justify-center  gap-10 z-[50]">
              <h1 className="  text-[#E2F1E7]/85 max-w-[500px] w-full text-center font-semibold tracking-wider px-3 text-4xl sm:text-4xl  md:text-5xl">{t("slogan")}</h1>
              {/* <Button variant={"outline"} className="max-w-[300px]">Invest</Button> */}



            </div>
          </div>
        </div>

        <ServicesWithLogo />

        {/* Services Section */}
        <section id="services">

          <div className="flex flex-col gap-8 bg-[#E2F1E7 px-2 py-5 rounded-2xl ">
            {/* Transportation Services */}
            <CarouselAnimation />

          </div>

        </section>

        {/* About us section */}
        <section >

          <div className="grid md:grid-cols-4 my-10 lg:grid-cols-4 gap-10 lg:gap-24 px-4">

            {/* First Set of Boxes || First Column */}
            <div className="grid grid-cols-3 md:grid-cols-2  col-span-2 gap-4">

              <div className="rounded-3xl shadow-md shadow-black bg-[#0b3530] aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-center bg-custom-radial">
                  <Image alt="about us icon" src={'/letter-i.png'} width={70} height={70} />
                </div>
                <button className="absolute w-full h-full" onClick={scrollToModal}></button>
                <h1 className="absolute bottom-3 left-5 text-white text-sm md:text-lg md:font-semibold">{t("aboutImgTitle")}</h1>
              </div>

              <div className="bg-black shadow-md shadow-black rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative">
                <Image alt="about us icon" fill
                  className="object-cover" src={'/cargoShip.jpeg'} />
              </div>

              <div className="bg-black shadow-md col-span-1 md:col-span-2 shadow-black rounded-2xl md:max-h-[200px] min-w-full overflow-hidden aspect-square md:aspect-video flex items-center justify-center relative">
                <Image className="object-cover" alt="about us icon" src={'/land-cargo-1.jpg'} fill />
              </div>

            </div>

            {/* Second Column */}
            <div ref={modalRef} className="col-span-2 w-full h-full flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-semibold pb-16 pt-2 text-foreground">{t("aboutTitle")}</h1>
                <p className="text-muted-foreground text-base pb-10">{t("aboutDescription")}</p>
              </div>
              <Button className="w-[130px]" >{tt("learnmore")}</Button>

            </div>

          </div>

        </section>

        {/* Contact Section */}
        <section id="contact">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-10 pb-36">

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl text-[#316363] font-semibold">{tttt("contactTitle")}</h1>
                <p className="text-muted-foreground pb-5 font-medium mt-10">{tttt("contactDescription")}</p>

              </div>

              <ul className="flex flex-col gap-2 text-[#5F8D8D]">
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2" /><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" /><path d="M2 8v11c0 1.1.9 2 2 2h14" /></svg>
                  Info@logicbase.co.uk
                </li>
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +20 111 555 2552</li>
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                  123 Shipping Lane, Port City, 12345</li>
              </ul>
            </div>

            <div className="">
              <ContactForm />

            </div>



          </div>

        </section>


      </main >
    </>
  );
}
