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
import TSwiping from "@/components/T-Swiping";
 
export default function Index() {
    const t = useTranslations("HomePage");
    const tt = useTranslations("Buttons");
    const tttt = useTranslations("Contact");
    const modalRef = useRef<HTMLDivElement | null>(null);
    const searchParams = useSearchParams();

    const ShipAgency = [
      {
        title: "Request for PDA",
        description: "",
        image: "/pda-1.jpg",
        link: "/learn/pda",
        quote: "/ship-agency-forms",
      },
      {
        title: "Suez Canal Transit & Passage Services",
        description: "",
        image: "/suez-1.jpg",
        link: "/learn/suez",
        quote: "/ship-agency-forms",
      },
      {
        title: "Sign On/Off Crew Members",
        description: "",
        image: "/crew-1.jpg",
        link: "/learn/crew",
        quote: "/ship-agency-forms",
      },
      {
        title: "Transit Spare Parts",
        description: "",
        image: "/spare-1.jpg",
        link: "/learn/spare-parts",
        quote: "/ship-agency-forms",
      },
      {
        title: "Bunkering | Oil Supply | Chandlery",
        description: "",
        image: "/bunkering-1.jpg",
        link: "/learn/bunkering",
        quote: "/ship-agency-forms",
      },
      {
        title: "Special Services By Case",
        description: "",
        image: "/special-1.jpg",
        link: "/learn/special",
        quote: "/ship-agency-forms",
      },
    ];

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
    
    const VSM = [
      {
        title: "Docking and Maintenance",
        description: "",
        image: "/docking-1.jpg",
        link: "/learn/docking",
        quote: "/ship-maintenance-forms"
      },
      {
        title: "Ship Management",
        description: "",
        image: "/sm-1.jpg",
        link: "/learn/ship-management",
        quote: "/ship-management-forms"
      }
    ]
    const TS = [
      {
        title: "International Trading",
        description: "",
        image: "/international-1.jpg",
        link: "learn/international-trading",
        quote: "/international-trading-forms"
      }
    ]
    const OL = [
      {
        title: "Handling, Stevedoring and Storage Services",
        description: "",
        image: "/hss-1.jpg",
        link: "/learn/hss",
        quote: "/container-services-forms"

      },
      {
        title: "Customs Clearance Serivices",
        description: "",
        image: "/c-1.jpg",
        link: "/learn/customs",
        quote: "/learn/container-services-forms"
      }
    ]
    const EF = [
      {
        title: "Vessel Rentals and Purchases",
        description: "",
        image: "/vrp-1.jpg",
        link: "/learn/vessel",
        quote: "/buy-rent-vessels-forms"
      },
      {
        title: "Container Rentals and Purchases",
        description: "",
        image: "/crp-1.jpg",
        link: "/learn/container-purchases",
        quote: "/buy-rent-container-forms"
      }
    ]

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
                            <h1 className="text-[#e4e4e4] w-full text-left font-raleway font-regular text-2xl max-w-[800px]">{t("slogan")}</h1>
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
                                <h2 className="text-3xl font-raleway font-regular pb-16 pt-2 text-foreground">{t("aboutTitle")}</h2>
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
                <section id="GetQuote" className="w-full flex flex-col items-start justify-center py-24 px-4 font-raleway">
                  <div className="w-full max-w-9xl flex flex-col md:flex-row items-start justify-between gap-12 mx-auto">
                    {/* Left: Text */}
                    <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
                      <h2 className="text-[2.5rem] leading-tight font-raleway font-regular text-primary mb-2 text-left">Get Your Customized Quote Today</h2>
                      <h3 className="text-xl font-raleway font-regular text-muted-foreground mb-8 text-left">Effortless Quotation Process—Now Simpler Than Ever!</h3>
                      <p className="text-base text-muted-foreground mb-4 text-left font-raleway font-light">
                        Our streamlined quotation process is designed with your convenience in mind. At Moon Navigation and Trading Co., obtaining service quotes has never been easier or faster than with our Quotation by Request system.
                      </p>
                      <p className="text-base text-muted-foreground mb-4 text-left font-raleway font-light">
                        By simply filling out a short form that captures your specific service requirements, you can easily initiate your request. Once you have submitted your information, our system ensures it is sent directly to us for prompt attention.
                      </p>
                      <p className="text-base text-muted-foreground mb-8 text-left font-raleway font-light">
                        You will receive a customized quotation delivered straight to your email in a timely manner. This effortlessness ensures you can focus on what truly matters while receiving accurate pricing without unnecessary delays.
                      </p>
                      <RequestQuoteButton className="rounded-full px-8 py-3 text-base font-raleway font-medium mt-2" type="button">
                        Request a Quote
                      </RequestQuoteButton>
                    </div>
                    {/* Right: Image Placeholder */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-[450px] h-[450px] rounded-[48px] bg-muted flex items-center justify-center overflow-hidden">
                        <img src="/quote-illustration.png" alt="Quote" className="w-full h-full object-cover rounded-[48px]" /> 
                      </div>
                    </div>
                  </div>
                </section>

                {/* Industry Carousel */}
                <div className="place-self-center">
                  <TSwiping freightTypes={ShipAgency} title="Ship Agency"/>
                  <TSwiping freightTypes={freightTypes} title="Transportation Services"/>
                  <TSwiping freightTypes={VSM} title="Vessel Support and Maintenance"/>
                  <TSwiping freightTypes={TS} title="Trade Solutions"/>
                  <TSwiping freightTypes={OL} title="Other Logistics Services"/>
                  <TSwiping freightTypes={EF} title= "Expand Your Fleed"/>
                  <RequestQuoteButton> 
                    <Link href="/investor-form">
                    Invest with Us
                     </Link>
                    
                    </RequestQuoteButton>
                </div>
                
                <IndustryCarousel />

                {/* Benefits Section - Final Corrected Layout */}
                <section className="w-full flex flex-col items-start justify-center py-16 px-4 font-raleway">
                  <h2 className="text-4xl font-raleway font-regular text-primary text-left mb-2">Your Benefits with Moon Navigation and Trading Co.</h2>
                  <h3 className="text-2xl font-raleway font-light text-primary text-left mb-12">Simplified Solutions and Seamless Support</h3>
                  <div className="w-full max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                      <div className="bg-card rounded-[32px] border border-border shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Integrated Maritime Expertise</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">At Moon Navigation and Trading Co., we do not just provide services—we offer complete maritime solutions tailored to your needs. From vessel chartering and container logistics to inland and air freight, our expertise ensures every aspect of your operation is covered. Trust us to deliver reliable, end-to-end support for all your shipping and trading challenges.</p>
                      </div>
                      <div className="bg-card rounded-[32px] border border-border shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Global Logistics Made Simple</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Handling global trade requires a partner you can trust. We offer comprehensive support for international trading, ship management, customs clearance, and cargo handling. With Moon Navigation and Trading Co., you will experience streamlined logistics, reduced downtime, and personalized attention to every shipment.</p>
                      </div>
                      <div className="rounded-[32px] overflow-hidden shadow-sm">
                        <img src="/p3.jpg" alt="Team" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col gap-8">
                      <div className="bg-card rounded-[32px] border border-border shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Customized Solutions for Long-Term Partners</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">We value partnerships over transactions. That is why we work closely with our clients to understand their unique requirements. With loyalty incentives, bespoke service packages, and strategic planning, we ensure that your business benefits from cost savings and operational efficiency at every step.</p>
                      </div>
                      <div className="rounded-[32px] overflow-hidden shadow-sm">
                        <img src="/p1.jpg" alt="Custom Solutions" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-card rounded-[32px] border border-border shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Partner with Us Today</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">At Moon Navigation and Trading Co., we believe in building relationships that last. Let's work together to create solutions that meet your needs and exceed your expectations. <Link href="/schedule-meeting" className="text-primary underline">Schedule a meeting</Link> with us today to see how we can help you navigate your maritime operations more efficiently.</p>
                      </div>
                    </div>
                    {/* Column 3 */}
                    <div className="flex flex-col gap-8">
                      <div className="bg-card rounded-[32px] border border-border shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Fast, Reliable, and Accurate Quotations</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Moon Navigation and Trading Co. is committed to delivering clarity and precision in every transaction. With a straightforward quotation process, we provide detailed, accurate, and competitive pricing tailored to your specific needs. Whether you are planning long-term investments or seeking immediate shipping solutions, we have got you covered—anytime, day or night, with our 24/7 availability to assist you.</p>
                      </div>
                       <div className="rounded-[32px] overflow-hidden shadow-sm">
                        <img src="/p2.jpg" alt="Fleet Excellence" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-card rounded-[32px] border border-border shadow-sm p-6">
                        <h4 className="text-lg font-semibold text-primary mb-3">Operational Excellence for Your Fleet</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Our team specializes in seamless ship agency and operational management. From crew onboarding/offboarding and transit spare parts to bunkering and ship chandlery, we provide efficient services to keep your fleet running smoothly. With expertise across Egyptian ports and beyond, we guarantee reliability and on-time delivery.</p>
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
                                <h2 className="text-4xl font-raleway font-regular text-primary mb-2">Contact Us</h2>
                                <p className="text-base font-raleway font-light text-foreground mb-6 max-w-md">We are here to provide expert assistance for all your logistics and trading needs. Get in touch with our team for any inquiries.</p>
                                <div className="flex items-center gap-2 mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                    <span className="text-foreground text-sm">Port Tawfiq 16a | El-Sawahel St, Suez<br/>Governorate, Egypt</span>
                                </div>
                            </div>
                            <div className="mt-12">
                                <p className="text-foreground text-base font-raleway font-light mb-6 max-w-md">Alternatively, you can use our online meeting scheduling tool to easily book your preferred time for either a virtual meeting or an in-person meeting with a member of our team. Whether you are looking to discuss partnership opportunities or explore how we can best serve your logistics needs, we are here to help.</p>
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
