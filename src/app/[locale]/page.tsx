"use client";
import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { Button } from "@/components/ui/button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Section, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CarouselAnimation from "@/components/carousel-animation-component-variant-1";
import TransportationServices from "@/components/TransportationServices";
import { Separator } from "@/components/ui/separator";
import ServicesWithLogo from "@/components/services-with-logos";
import { useRef } from "react";
import ServicesMiniCard from "@/components/servicesMiniCards";
import ContactForm from "@/components/contact-form";
import OtherServices from "@/components/other-services-home";
import PartnerLogoCarousel from "@/components/partners-carousel";
import { QuoteDialog } from "@/components/dialog-services";
import IndustryCarousel from "@/components/industry-carousel";

export default function Index() {
  const t = useTranslations("HomePage");
  const tt = useTranslations("Buttons");
  const tttt = useTranslations("Contact");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const freightTypes = [
    {
      title: t("servicesCard2Title"),
      description: t("servicesCard2Description"),
      image: "/airCargo.jpg",
      link: "/learn-more/ocean-freight",
      quote: "/ocean-freight-forms",
    },
    {
      title: t("servicesCard4Title"),
      description: t("servicesCard4Description"),
      image: "/container-1.jpg",
      link: "/learn-more/ocean-freight",
      quote: "/ocean-freight-forms",
    },
    {
      title: t("servicesCard3Title"),
      description: t("servicesCard3Description"),
      image: "/land-cargo-2.jpeg",
      link: "/learn-more/inland-freight",
      quote: "/inland-services-forms",
    },
    {
      title: t("servicesCard1Title"),
      description: t("servicesCard1Description"),
      image: "/cargoAir.jpeg",
      link: "/learn/air-freight",
      quote: "/air-freight-forms",
    },
  ];

  const scrollToModal = () => {
    if (modalRef.current) {
      modalRef.current.style.scrollMarginTop = "200px";
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col gap-32">
        {/* Image and slogan */}
        <div className=" w-full h-[calc(100svh-164px)]">
          <div className="relative  flex items-center justify-center md:rounded-3xl -mt-8 md:mt-[2rem] bg-home-image bg-center rounded-b-xl bg-cover w-full h-full md:h-[90%]   aspect-auto md:aspect-video shadow-black shadow-xl md:shadow-xl md:shadow-black  ">
            <div className="w-full h-full z-[10] top-[1px] bg-black-overlay md:rounded-3xl rounded-b-xl absolute"></div>
            <div className="flex md:px-12 px-3 flex-col items-center justify-center z-[50]">
              <h1 className="  text-[#e4e4e4]  w-full text-center font-semibold text-4xl sm:text-4xl  md:text-5xl">
                {t("slogan")}
              </h1>
            </div>
            <div className="absolute z-10 bottom-6 right-6 items-end flex flex-col gap-4">
              <h1 className=" font-light text-white  text-end w-[200px] md:w-full md:right-12 text-lg">
                — Whenever, Wherever You Need to Trust.
              </h1>
              <Button className="w-fit hover:bg-primary/90">
                <a href="#services">{tt("getQuote")}</a>
              </Button>
            </div>
          </div>
        </div>

        <ServicesWithLogo />

        <section id="about" className="scroll-mt-[80px]">
          <div className="w-full grid md:grid-cols-4 my-10 lg:grid-cols-4 gap-10 lg:gap-24 px-4">
            {/* First Set of Boxes || First Column */}
            <div className="grid grid-cols-3 md:grid-cols-2  col-span-2 gap-4">
              <div className="rounded-3xl shadow-md shadow-black bg-[#0b3530] aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-center bg-custom-radial">
                  <Image
                    alt="about us icon"
                    src={"/letter-i.png"}
                    width={70}
                    height={70}
                  />
                </div>
                <button
                  className="absolute w-full h-full"
                  onClick={scrollToModal}
                ></button>
                <h2 className="absolute bottom-3 left-5 text-white text-sm md:text-lg md:font-semibold">
                  {t("aboutImgTitle")}
                </h2>
              </div>

              <div className="bg-black shadow-md shadow-black rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative">
                <Image
                  alt="about us icon"
                  fill
                  className="object-cover"
                  src={"/cargoShip.jpeg"}
                />
              </div>

              <div className="bg-black shadow-md col-span-1 md:col-span-2 shadow-black rounded-2xl md:max-h-[200px] min-w-full overflow-hidden aspect-square md:aspect-video flex items-center justify-center relative">
                <Image
                  className="object-cover"
                  alt="about us icon"
                  src={"/land-cargo-1.jpg"}
                  fill
                />
              </div>
            </div>

            {/* Second Column */}
            <div
              ref={modalRef}
              className="col-span-2 w-full h-full flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl font-semibold pb-16 pt-2 text-foreground">
                  {t("aboutTitle")}
                </h2>
                <p className="text-muted-foreground text-base pb-10">
                  {t("aboutDescription")}
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Button className="w-[130px]">{tt("learnmore")}</Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="GetQuote"
          className="px-4 scroll-mt-[80px] flex flex-col gap-4"
        >
          <h2 className="capitalize text-3xl text-primary">
            Get your customized quote today
          </h2>
          <h2 className="capitalize text-3xl text-primary">
            Effortless Quotation Process
          </h2>

          <div className="flex max-w-[800px]">
            <p className="py-8">
              Our streamlined quotation process is designed with your
              convenience in mind. At Moon Navigation and Trading Co., obtaining
              service quotes has never been easier or faster than with our
              Quotation by Request system. By simply filling out a short form
              that captures your specific service requirements, you can easily
              initiate your request. Once you have submitted your information,
              our system ensures it is sent directly to us for prompt attention.
              You will receive a customized quotation delivered straight to your
              email in a timely manner. This effortlessness ensures you can
              focus on what truly matters while receiving accurate pricing
              without unnecessary delays.
            </p>
            <Image
              src="/quotation.png"
              alt="quotation"
              width={250}
              height={250}
              className="object-contain hidden md:block"
            />
          </div>

          <QuoteDialog />
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="flex flex-col gap-8 bg-[#E2F1E7 px-2 py-5 rounded-2xl ">
            {/* Transportation Services */}
            <CarouselAnimation
              title={t("TransportationServices")}
              freightTypes={freightTypes}
            />

            <TransportationServices />

            <OtherServices />
          </div>
        </section>

        {/* Industry Carousel */}
        <IndustryCarousel />

        {/* Our Partners section */}
        <PartnerLogoCarousel />

        {/* Contact Section */}
        <section id="contact">
          <div className="grid grid-cols-1 relative md:grid-cols-2 gap-10 px-4 py-10 pb-36">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl text-foreground font-semibold">
                  {tttt("contactTitle")}
                </h2>
                <p className="text-muted-foreground pb-5 font-medium mt-10">
                  {tttt("contactDescription")}
                </p>
              </div>

              <ul className="flex flex-col gap-2 text-primary/70">
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mails"
                  >
                    <rect width="16" height="13" x="6" y="4" rx="2" />
                    <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
                    <path d="M2 8v11c0 1.1.9 2 2 2h24" />
                  </svg>
                  Info@logicbase.co.uk
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +20 111 555 2552
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  123 Shipping Lane, Port City, 12345
                </li>
              </ul>
            </div>

            <div className="">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
