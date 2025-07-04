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
import { useRef, useEffect } from "react";
import ServicesMiniCard from "@/components/servicesMiniCards";
import ContactForm from "@/components/contact-form";
import OtherServices from "@/components/other-services-home";
import PartnerLogoCarousel from "@/components/partners-carousel";
import { QuoteDialog } from "@/components/dialog-services";
import IndustryCarousel from "@/components/industry-carousel";
import { useSearchParams } from "next/navigation";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
 
export default function Index() {
    const t = useTranslations("HomePage");
    const tt = useTranslations("Buttons");
    const tttt = useTranslations("Contact");
    const modalRef = useRef<HTMLDivElement | null>(null);
    const searchParams = useSearchParams();

    const freightTypes = [
        {
            title: t("servicesCard2Title"),
            description: t("servicesCard2Description"),
            image: "/airCargo.jpg",
            link: "/learn-more/ocean-freight", //modify here to change linking
            quote: "/ocean-freight-forms",
        },
        {
            title: t("servicesCard4Title"),
            description: t("servicesCard4Description"),
            image: "/container-1.jpg",
            link: "/learn-more/container",
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

    useEffect(() => {
        if (searchParams.get("scroll") === "contact") {
            const el = document.getElementById("contact");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else if (searchParams.get("scroll") === "faq") {
            const el = document.getElementById("faq");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [searchParams]);

    return (
        <>
            <main className="flex-1 flex flex-col gap-20">
                {/* Image and slogan */}
                <div className="relative w-full h-[400px] mt-12">
                    <div className="relative flex items-center rounded-3xl bg-home-image bg-center bg-cover w-full h-full aspect-auto md:aspect-video shadow-black shadow-xl">
                        <div className="w-full h-full z-[10] top-[1px] bg-black-overlay rounded-3xl absolute"></div>
                        <div className="flex md:px-12 px-6 flex-col justify-center z-[50] gap-4">
                            <h1 className="text-[#e4e4e4] w-full text-left font-semibold text-0.5xl sm:text-1xl md:text-2xl max-w-[650px]">{t("slogan")}</h1>
                            <h1 className="font-light text-white text-start w-[200px] md:w-full text-sm">{t("tagline")}</h1>
                        </div>
                    </div>
                    <div className="absolute right-6 mt-8">
                        <Link href="#services">
                            <RequestQuoteButton>
                                {tt("getQuote")}
                            </RequestQuoteButton>
                        </Link> 
                    </div>
                </div>

                <ServicesWithLogo />

                <section id="about" className="scroll-mt-[80px]">
                    <div className="w-full grid md:grid-cols-4 my-10 lg:grid-cols-4 gap-10 lg:gap-24 px-4">
                        {/* First Set of Boxes || First Column */}
                        <div className="grid grid-cols-3 md:grid-cols-2  col-span-2 gap-4">
                            <div className="rounded-3xl shadow-md shadow-black bg-primary dark:bg-green-900 aspect-square flex items-center justify-center relative overflow-hidden">
                                <div className="absolute w-full h-full flex items-center justify-center bg-custom-radial">
                                    <Image alt="about us icon" src={"/letter-i.png"} width={70} height={70} />
                                </div>
                                <button className="absolute w-full h-full" onClick={scrollToModal}></button>
                                <h2 className="absolute bottom-3 left-5 text-white text-sm md:text-lg md:font-semibold">{t("aboutImgTitle")}</h2>
                            </div>

                            <div className="bg-black shadow-md shadow-black rounded-3xl overflow-hidden aspect-square flex items-center justify-center relative">
                                <Image alt="about us icon" fill className="object-cover" src={"/cargoShip.jpeg"} sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>

                            <div className="bg-black shadow-md col-span-1 md:col-span-2 shadow-black rounded-2xl md:max-h-[200px] min-w-full overflow-hidden aspect-square md:aspect-video flex items-center justify-center relative">
                                <Image className="object-cover" alt="about us icon" src={"/land-cargo-1.jpg"} fill sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                        </div>

                        {/* Second Column */}
                        <div ref={modalRef} className="col-span-2 w-full h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-semibold pb-16 pt-2 text-foreground">{t("aboutTitle")}</h2>
                                <p className="text-muted-foreground text-base pb-10">{t("aboutDescription")}</p>
                            </div>
                            <div className="w-full flex justify-end">
                                    <RequestQuoteButton>
                                        {tt("learnmore")}
                                    </RequestQuoteButton>
                                
                            </div>
                        </div>
                    </div>
                </section>

                {/* Get Your Customized Quote Section */}
                <section id="GetQuote" className="w-full flex flex-col items-center justify-center py-24 px-4 font-raleway">
                  <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12 mx-auto">
                    {/* Left: Text */}
                    <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
                      <h2 className="text-[2.5rem] leading-tight font-extrabold text-primary mb-2" style={{fontFamily: 'Raleway, sans-serif'}}>Get Your Customized Quote Today</h2>
                      <h3 className="text-xl font-normal text-muted-foreground mb-8" style={{fontFamily: 'Raleway, sans-serif'}}>Effortless Quotation Process—Now Simpler Than Ever!</h3>
                      <p className="text-base text-muted-foreground mb-4" style={{fontFamily: 'Raleway, sans-serif'}}>
                        Our streamlined quotation process is designed with your convenience in mind. At Moon Navigation and Trading Co., obtaining service quotes has never been easier or faster than with our Quotation by Request system.
                      </p>
                      <p className="text-base text-muted-foreground mb-4" style={{fontFamily: 'Raleway, sans-serif'}}>
                        By simply filling out a short form that captures your specific service requirements, you can easily initiate your request. Once you have submitted your information, our system ensures it is sent directly to us for prompt attention.
                      </p>
                      <p className="text-base text-muted-foreground mb-8" style={{fontFamily: 'Raleway, sans-serif'}}>
                        You will receive a customized quotation delivered straight to your email in a timely manner. This effortlessness ensures you can focus on what truly matters while receiving accurate pricing without unnecessary delays.
                      </p>
                      <RequestQuoteButton className="rounded-full px-8 py-3 text-base font-raleway font-medium mt-2" type="button">
                        Request a Quote
                      </RequestQuoteButton>
                    </div>
                    {/* Right: Image Placeholder */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-[450px] h-[450px] rounded-[48px] bg-muted flex items-center justify-center overflow-hidden">
                        {/* Place your image here. Example: <img src="/your-image.jpg" alt="Quote" className="w-full h-full object-cover rounded-[48px]" /> */}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Services Section */}
                <section id="services">
                    <div className="flex flex-col gap-8 bg-muted/50 px-2 py-5 rounded-2xl">
                        {/* Transportation Services */}
                        <CarouselAnimation title={t("TransportationServices")} freightTypes={freightTypes} />
                        <TransportationServices />

                        <OtherServices />
                    </div>
                </section>

                {/* Industry Carousel */}
                <IndustryCarousel />

                {/* Benefits Section - Overlapping Cards Reference Layout */}
                <section className="w-full flex flex-col items-center justify-center py-16 px-4 font-raleway relative">
                  <h2 className="text-4xl font-normal text-primary text-center mb-2" style={{fontFamily: 'Raleway, sans-serif'}}>Your Benefits with Moon Navigation and Trading Co.</h2>
                  <h3 className="text-2xl font-light text-primary text-center mb-12" style={{fontFamily: 'Raleway, sans-serif'}}>Simplified Solutions and Seamless Support</h3>
                  <div className="w-full max-w-7xl mx-auto min-h-[700px] relative" style={{height: '700px'}}>
                    {/* Top Row */}
                    {/* Card 1: Integrated Maritime Expertise */}
                    <div className="absolute left-0 top-0 w-[28%] h-[46%] bg-card rounded-[32px] border border-border shadow-sm p-8 flex flex-col justify-between z-10">
                      <h4 className="text-lg font-semibold text-primary mb-3">Integrated Maritime Expertise</h4>
                      <p className="text-muted-foreground text-base">At Moon Navigation and Trading Co., we do not just provide services—we offer complete maritime solutions tailored to your needs. From vessel chartering and container logistics to inland and air freight, our expertise ensures every aspect of your operation is covered. Trust us to deliver reliable, end-to-end support for all your shipping and trading challenges.</p>
                    </div>
                    {/* Card 2: Customized Solutions for Long-Term Partners (with image) */}
                    <div className="absolute left-[25%] top-[-3%] w-[28%] h-[46%] bg-card rounded-[32px] border border-border shadow-sm flex flex-col justify-start z-20 overflow-hidden">
                      <div className="w-full h-[44%] bg-muted flex items-center justify-center">
                        {/* Replace src with your image link */}
                        <img src="/placeholder1.jpg" alt="Custom Solutions" className="w-full h-full object-cover rounded-t-[32px]" />
                      </div>
                      <div className="p-8 pt-4">
                        <h4 className="text-lg font-semibold text-primary mb-3">Customized Solutions for Long-Term Partners</h4>
                        <p className="text-muted-foreground text-base">We value partnerships over transactions. That is why we work closely with our clients to understand their unique requirements. With loyalty incentives, bespoke service packages, and strategic planning, we ensure that your business benefits from cost savings and operational efficiency at every step.</p>
                      </div>
                    </div>
                    {/* Card 3: Fast, Reliable, and Accurate Quotations */}
                    <div className="absolute left-[50%] top-0 w-[25%] h-[46%] bg-card rounded-[32px] border border-border shadow-sm p-8 flex flex-col justify-between z-10">
                      <h4 className="text-lg font-semibold text-primary mb-3">Fast, Reliable, and Accurate Quotations</h4>
                      <p className="text-muted-foreground text-base">Moon Navigation and Trading Co. is committed to delivering clarity and precision in every transaction. With a straightforward quotation process, we provide detailed, accurate, and competitive pricing tailored to your specific needs. Whether you are planning long-term investments or seeking immediate shipping solutions, we have got you covered—anytime, day or night, with our 24/7 availability to assist you.</p>
                    </div>
                    {/* Card 4: Operational Excellence for Your Fleet (with image) */}
                    <div className="absolute left-[73%] top-[-3%] w-[27%] h-[46%] bg-card rounded-[32px] border border-border shadow-sm flex flex-col justify-start z-20 overflow-hidden">
                      <div className="w-full h-[44%] bg-muted flex items-center justify-center">
                        {/* Replace src with your image link */}
                        <img src="/placeholder2.jpg" alt="Fleet Excellence" className="w-full h-full object-cover rounded-t-[32px]" />
                      </div>
                      <div className="p-8 pt-4">
                        <h4 className="text-lg font-semibold text-primary mb-3">Operational Excellence for Your Fleet</h4>
                        <p className="text-muted-foreground text-base">Our team specializes in seamless ship agency and operational management. From crew onboarding/offboarding and transit spare parts to bunkering and ship chandlery, we provide efficient services to keep your fleet running smoothly. With expertise across Egyptian ports and beyond, we guarantee reliability and on-time delivery.</p>
                      </div>
                    </div>
                    {/* Bottom Row */}
                    {/* Card 5: Global Logistics Made Simple */}
                    <div className="absolute left-0 top-[50%] w-[38%] h-[38%] bg-card rounded-[32px] border border-border shadow-sm p-8 flex flex-col justify-between z-10">
                      <h4 className="text-lg font-semibold text-primary mb-3">Global Logistics Made Simple</h4>
                      <p className="text-muted-foreground text-base">Handling global trade requires a partner you can trust. We offer comprehensive support for international trading, ship management, customs clearance, and cargo handling. With Moon Navigation and Trading Co., you will experience streamlined logistics, reduced downtime, and personalized attention to every shipment.</p>
                    </div>
                    {/* Card 6: Partner with Us Today (with image) */}
                    <div className="absolute left-[38%] top-[60%] w-[38%] h-[38%] bg-card rounded-[32px] border border-border shadow-sm flex flex-col justify-start z-20 overflow-hidden">
                      <div className="w-full h-[44%] bg-muted flex items-center justify-center">
                        {/* Replace src with your image link */}
                        <img src="/placeholder3.jpg" alt="Team" className="w-full h-full object-cover rounded-t-[32px]" />
                      </div>
                      <div className="p-8 pt-4">
                        <h4 className="text-lg font-semibold text-primary mb-3">Partner with Us Today</h4>
                        <p className="text-muted-foreground text-base">At Moon Navigation and Trading Co., we believe in building relationships that last. Let's work together to create solutions that meet your needs and exceed your expectations. <a href="#" className="text-primary underline">Schedule a meeting</a> with us today to see how we can help you navigate your maritime operations more efficiently.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Partners section */}
                <section id="partners" className="scroll-mt-[100px]">
                    <PartnerLogoCarousel />
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-[100px] font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-10 pb-36">
                        {/* Left Column: Heading, Description, Address, Meeting Info */}
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-4xl font-extrabold text-primary mb-2">Contact Us</h2>
                                <p className="text-base text-foreground mb-6 max-w-md">We are here to provide expert assistance for all your logistics and trading needs. Get in touch with our team for any inquiries.</p>
                                <div className="flex items-center gap-2 mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                    <span className="text-foreground text-sm">Port Tawfiq 16a | El-Sawahel St, Suez<br/>Governorate, Egypt</span>
                                </div>
                            </div>
                            <div className="mt-12">
                                <p className="text-foreground text-base mb-6 max-w-md">Alternatively, you can use our online meeting scheduling tool to easily book your preferred time for either a virtual meeting or an in-person meeting with a member of our team. Whether you are looking to discuss partnership opportunities or explore how we can best serve your logistics needs, we are here to help.</p>
                                <RequestQuoteButton className="w-[220px]" type="button">
                                  <Link href="/schedule-meeting">
                                    Schedule a meeting
                                  </Link>
                                  </RequestQuoteButton>
                            </div>
                        </div>
                        {/* Right Column: Contact Form */}
                        <div className="w-full">
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
