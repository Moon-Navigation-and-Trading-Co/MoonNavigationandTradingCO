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
import { useSearchParams } from "next/navigation";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import MaerskServices from "@/components/MoonNavigationandTradingCo-Services";
import TSwiping from "@/components/T-Swiping";
import IndustrySectorsNew from "@/components/industry-sectors-new";
import { useIsRTL, getRTLTextAlign, getRTLFlexDirection, getRTLJustifyContent } from "@/utils/rtl-utils";
 
export default function Index() {
    const t = useTranslations("HomePage");
    const tt = useTranslations("Buttons");
    const tttt = useTranslations("Contact");
    const modalRef = useRef<HTMLDivElement | null>(null);
    const searchParams = useSearchParams();
    const isRTL = useIsRTL();
    const textAlignClass = getRTLTextAlign('left');
    const flexDirectionClass = getRTLFlexDirection('row');
    const justifyClass = getRTLJustifyContent('start');

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
        link: "/learn/dockingandmaintenance",
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
        link: "/learn/handling-stevedoring-storage/learn-more",
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
            <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36">
                {/* Enhanced Hero Section */}
                <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
                    <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-home-image bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
                        {/* Enhanced Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 rounded-[2rem] md:rounded-[3rem] z-10"></div>
                        
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 z-5">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                        </div>

                        {/* Main Content */}
                        <div className={`relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full ${textAlignClass}`}>
                            {/* Badge */}
                            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit ${textAlignClass}`}>
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-white/90 text-sm font-medium">Exceptional Partner</span>
                            </div>

                            {/* Enhanced Heading */}
                            <div className="space-y-6">
                                <h1 className={`text-muted-foreground w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl ${textAlignClass}`} style={{ lineHeight: '1.05' }}>
                                    {t("slogan")}
                                </h1>
                                <h2 className={`font-light text-muted-foreground text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed ${textAlignClass}`}>
                                    {t("tagline")}
                                </h2>
                            </div>

                            {/* Classic Buttons */}
                            <div className={`flex flex-col sm:flex-row gap-6 mt-12 ${textAlignClass}`}>
                                <Link href="#services">
                                    <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Our Services
                                        </span>
                                    </button>
                                </Link>
                            <Link href="#services">
                                    <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            Get Quote
                                        </span>
                                    </button>
                            </Link>
                            </div>


                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                            <button 
                                onClick={() => {
                                    const servicesSection = document.querySelector('#services');
                                    if (servicesSection) {
                                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
                            >
                                <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">Scroll to explore</span>
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="px-4 sm:px-6 lg:px-8">
                    <ServicesWithLogo />
                </section>

                {/* Enhanced About Section */}
                <section id="about" className="scroll-mt-[80px] py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Enhanced Image Grid */}
                            <div className="space-y-6">
                                {/* Main About Card */}
                                <div className="relative group cursor-pointer" onClick={scrollToModal}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-blue-800/90 z-10"></div>
                                        <div className="absolute inset-0 bg-custom-radial opacity-80 z-10"></div>
                                        <div className="relative z-20 p-8 flex items-center justify-center h-64">
                                            <div className="text-center">
                                                <Image 
                                                    alt="about us icon" 
                                                    src={"/letter-i.png"} 
                                                    width={80} 
                                                    height={80}
                                                    className="mx-auto mb-4 filter brightness-0 invert"
                                                />
                                                <h2 className="text-white text-2xl font-bold">{t("aboutImgTitle")}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Image Grid */}
                                <div className="grid grid-cols-2 gap-6 -ml-4">
                                    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                                        <Image 
                                            alt="Cargo ship" 
                                            src={"/cargoShip.jpeg"} 
                                            width={300} 
                                            height={200}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                                    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                                        <Image 
                                            alt="Land cargo" 
                                            src={"/land-cargo-1.jpg"} 
                                            width={300} 
                                            height={200}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                </div>
                            </div>

                            {/* Right: Enhanced Content */}
                            <div ref={modalRef} className="space-y-8">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    Since 2010
                                </div>

                                {/* Enhanced Title */}
                                <div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-6 leading-tight">
                                        Welcome to 
                                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Moon Navigation and Trading Co.</span>
                                    </h2>
                                </div>

                                {/* Enhanced Description */}
                                <div className="space-y-6">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We are a distinguished leader in maritime, logistics, and services since 2010. With a commitment to excellence, we have become trusted partner for clients across various industries, delivering tailor-made solutions that seamlessly integrate efficiency, reliability, and innovation.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Operating from the heart of Egypt, we serve as a cornerstone of global commerce, providing unparalleled expertise in shipping, planning, and international trade. Our comprehensive services are designed to meet the complex demands of today&apos;s dynamic business landscape.
                                    </p>
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-2 gap-6 py-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-raleway font-medium text-blue-600">13+</div>
                                        <div className="text-sm text-gray-500">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-raleway font-medium text-blue-600">24/7</div>
                                        <div className="text-sm text-gray-500">Support Available</div>
                                    </div>
                                </div>

                                {/* Enhanced CTA */}
                                <div className="pt-6">
                                    <Link href="/about-us">
                                        <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                            <span className="relative z-10 flex items-center gap-3">
                                            {tt("learnmore")}
                                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                                        </button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <MaerskServices />

                    {/* Professional Quote Section - Complete Redesign */}
                    <section id="GetQuote" className="w-full py-24 bg-white">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Header Section */}
                        <div className="text-center mb-16">
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            Quick & Easy
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-6 leading-tight">
                            Get Your 
                            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-medium"> Custom Quote</span>
                          </h2>
                          
                          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Experience our streamlined quotation process designed for enterprise efficiency and precision
                          </p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-3 gap-8 mb-16">
                          {/* Process Step 1 */}
                          <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:bg-gray-50 transition-all duration-500 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                              <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <div className="mt-8 text-center flex flex-col items-center justify-center">
                              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <h3 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Submit Requirements</h3>
                              <p className="text-gray-600 leading-relaxed text-center">
                                Fill out our comprehensive form with your specific service requirements and project details
                              </p>
                            </div>
                          </div>

                          {/* Process Step 2 */}
                          <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:bg-gray-50 transition-all duration-500 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                              <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <div className="mt-8 text-center flex flex-col items-center justify-center">
                              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                              </div>
                              <h3 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Expert Analysis</h3>
                              <p className="text-gray-600 leading-relaxed text-center">
                                Our specialists analyze your requirements and create a tailored solution with competitive pricing
                              </p>
                            </div>
                          </div>

                          {/* Process Step 3 */}
                          <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:bg-gray-50 transition-all duration-500 shadow-lg hover:shadow-xl">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                              <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <div className="mt-8 text-center flex flex-col items-center justify-center">
                              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <h3 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Receive Quote</h3>
                              <p className="text-gray-600 leading-relaxed text-center">
                                Get your detailed, customized quote delivered directly to your email within 24 hours
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* CTA Section */}
                        <div className="text-center">
                          <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="text-left">
                                <div className="text-2xl font-raleway font-medium text-gray-900">24h</div>
                                <div className="text-sm text-gray-500">Response Time</div>
                              </div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="text-left">
                                <div className="text-2xl font-raleway font-medium text-gray-900">100%</div>
                                <div className="text-sm text-gray-500">Customized</div>
                              </div>
                            </div>
                          </div>

                          <Link href="/quote-request">
                            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-raleway font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                              <span className="relative z-10 flex items-center gap-3">
                                <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Request Your Quote Now
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </section>

                    <section className="px-4 sm:px-6 lg:px-8">
                        <IndustrySectorsNew />
                    </section>

                    {/* Benefits Section - Enhanced Modern Design */}
                    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-20 lg:py-32 px-4 sm:px-6 lg:px-8 font-raleway">
                      <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16 lg:mb-20">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Why Choose Us
                          </div>
                          <h2 className="text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-4 leading-tight">
                            Your Benefits with Moon Navigation and Trading Co.
                          </h2>
                          <p className="text-lg lg:text-xl font-raleway font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Simplified Solutions and Seamless Support
                          </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                          {/* Column 1 */}
                          <div className="space-y-8">
                            {/* Card 1 */}
                            <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Integrated Maritime Expertise</h4>
                                <p className="text-gray-600 leading-relaxed text-base">We do not just provide services—we offer complete maritime solutions tailored to your needs. From vessel chartering and container logistics to inland and air freight, our expertise ensures every aspect of your operation is covered. Trust us to deliver reliable, end-to-end support for all your shipping and trading challenges.</p>
                              </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Global Logistics Made Simple</h4>
                                <p className="text-gray-600 leading-relaxed text-base">Handling global trade requires a partner you can trust. We offer comprehensive support for international trading, ship management, customs clearance, and cargo handling. With us, you will experience streamlined logistics, reduced downtime, and personalized attention to every shipment.</p>
                              </div>
                            </div>

                            {/* Image Card 1 */}
                            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                              <Image src="/p3.jpg" alt="Team Excellence" width={400} height={300} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-6 left-6 text-white">
                                <h5 className="text-lg font-raleway font-semibold mb-2">Team Excellence</h5>
                                <p className="text-sm opacity-90">Dedicated professionals committed to your success</p>
                              </div>
                            </div>
                          </div>

                          {/* Column 2 */}
                          <div className="space-y-8">
                            {/* Card 1 */}
                            <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Customized Solutions for Long-Term Partners</h4>
                                <p className="text-gray-600 leading-relaxed text-base">We value partnerships over transactions. That is why we work closely with our clients to understand their unique requirements. With loyalty incentives, bespoke service packages, and strategic planning, we ensure that your business benefits from cost savings and operational efficiency at every step.</p>
                              </div>
                            </div>

                            {/* Image Card 2 */}
                            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                              <Image src="/p1.jpg" alt="Custom Solutions" width={400} height={300} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-6 left-6 text-white">
                                <h5 className="text-lg font-raleway font-semibold mb-2">Custom Solutions</h5>
                                <p className="text-sm opacity-90">Tailored approaches for unique challenges</p>
                              </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Partner with Us Today</h4>
                                <p className="text-gray-600 leading-relaxed text-base">We believe in building relationships that last. Let&apos;s work together to create solutions that meet your needs and exceed your expectations. <Link href="/schedule-meeting" className="text-blue-600 hover:text-blue-700 font-medium underline">Schedule a meeting</Link> with us today to see how we can help you navigate your maritime operations more efficiently.</p>
                              </div>
                            </div>
                          </div>

                          {/* Column 3 */}
                          <div className="space-y-8">
                            {/* Card 1 */}
                            <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Fast, Reliable, and Accurate Quotations</h4>
                                <p className="text-gray-600 leading-relaxed text-base">We are committed to delivering clarity and precision in every transaction. With a straightforward quotation process, we provide detailed, accurate, and competitive pricing tailored to your specific needs. Whether you are planning long-term investments or seeking immediate shipping solutions, we have got you covered—anytime, day or night, with our 24/7 availability to assist you.</p>
                              </div>
                            </div>

                            {/* Image Card 3 */}
                            <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                              <Image src="/p2.jpg" alt="Fleet Excellence" width={400} height={300} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                              <div className="absolute bottom-6 left-6 text-white">
                                <h5 className="text-lg font-raleway font-semibold mb-2">Fleet Excellence</h5>
                                <p className="text-sm opacity-90">Operational mastery for your vessels</p>
                          </div>
                        </div>

                            {/* Card 2 */}
                            <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-raleway font-medium text-gray-900 mb-4 text-center">Operational Excellence for Your Fleet</h4>
                                <p className="text-gray-600 leading-relaxed text-base">Our team specializes in seamless ship agency and operational management. From crew onboarding/offboarding and transit spare parts to bunkering and ship chandlery, we provide efficient services to keep your fleet running smoothly. With expertise across Egyptian ports and beyond, we guarantee reliability and on-time delivery.</p>
                          </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Our Partners section */}
                    <section id="partners" className="scroll-mt-[100px] px-4 sm:px-6 lg:px-8">
                        <PartnerLogoCarousel />
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="scroll-mt-[100px] font-raleway bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-7xl mx-auto">
                            {/* Professional Header */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-8 shadow-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-semibold">Get In Touch</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-6 leading-tight">
                                    Contact Us
                                </h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    We are here to provide expert assistance for all your logistics and trading needs. Get in touch with our team for any inquiries.
                                </p>
                            </div>

                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                                {/* Left Column: Information & Meeting */}
                                <div className="order-2 lg:order-1 space-y-12">
                                    {/* Meeting Scheduling */}
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-raleway font-medium">Schedule a Meeting</h3>
                                        </div>
                                        <p className="text-blue-100 leading-relaxed mb-8">
                                            Use our online meeting scheduling tool to easily book your preferred time for either a virtual meeting or an in-person meeting with a member of our team. Whether you are looking to discuss partnership opportunities or explore how we can best serve your logistics needs, we are here to help.
                                        </p>
                                        <Link href="/schedule-meeting">
                                            <button className="group relative overflow-hidden bg-white text-blue-600 px-6 py-3 rounded-xl font-raleway font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                                <span className="relative z-10 flex items-center gap-2">
                                                    Schedule a meeting
                                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                                            </button>
                                        </Link>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                                        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-lg md:text-xl font-raleway font-medium text-gray-900 mb-1 md:mb-2">Our Location</h3>
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Port Tawfiq 16a | El-Sawahel St,<br/>Suez Governorate, Egypt</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-lg md:text-xl font-raleway font-medium text-gray-900 mb-1 md:mb-2">24/7 Support</h3>
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Round-the-clock assistance for all your maritime and logistics needs</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 md:gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-lg md:text-xl font-raleway font-medium text-gray-900 mb-1 md:mb-2">Expert Team</h3>
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Experienced maritime professionals committed to delivering exceptional logistics solutions worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Contact Form */}
                                <div className="order-1 lg:order-2">
                                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-raleway font-medium text-gray-900 mb-2">Send us a Message</h3>
                                            <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                                        </div>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </main>
        </>
    );
}
