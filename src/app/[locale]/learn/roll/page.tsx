"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Metadata } from "next";
import FAQSearch from "@/components/faq";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award } from "lucide-react";
import FormTabs from "@/components/form-tabs";
import LearnMore from "./learn-more/page";

// SEO Metadata for Next.js 13+ App Router

function Overview() {
  return (
    <>
      {/* What is Roll on and Roll off (RORO)? Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Roll on Roll off</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Roll on and Roll off (RORO)?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Roll-on Roll-off (RoRo) ships are specialized vessels designed for the efficient transportation of wheeled cargo, allowing vehicles to be driven directly on and off the ship without the need for cranes or heavy lifting equipment. This innovative method of cargo handling is ideal for transporting a variety of vehicles, including cars, trucks, buses, construction machinery, and trailers.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  At Moon Navigation And Trading Co., we pride ourselves on providing reliable and professional shipping solutions tailored to meet your logistics needs. Our expertise in RoRo transportation ensures that your cargo is handled with the utmost care and delivered safely and efficiently to its destination.
                </p>
              </div>
            </div>
            
            {/* Right: Empty space (no image) */}
            <div className="hidden lg:block">
              {/* Empty right column to maintain layout */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return (
    <>


      {/* --- STREAMLINED RORO SOLUTIONS SECTION --- */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>RoRo Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
              Our Streamlined <span className="text-black font-light">RoRo Solutions</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Efficient transportation for wheeled cargo with specialized vessels designed for seamless loading and unloading.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-start">
            {/* Left: Image and Button */}
            <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-6">
                <Image
                  src="/roroheroimage.jpg"
                  alt="RoRo Cargo Handling"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <Link href="/learn/roll/learn-more">
                  <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Learn more about our RORO cargo solutions
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: Text Grid */}
            <div className="order-2 lg:order-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Our Cargo Handling */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black mb-3 font-['Raleway']">Our Cargo Handling</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our RoRo ships are expertly engineered for the seamless loading and unloading of wheeled cargo, allowing vehicles to roll on and off with ease. Using specialized ramps at the port, cargo is efficiently driven or towed onto the vessel and smoothly discharged upon arrival, ensuring a fast and efficient transport process.
                </p>
              </div>

              {/* The Design */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black mb-3 font-['Raleway']">The Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  RoRo vessels feature a unique design with large doors at the bow and stern, along with internal ramps that connect multiple decks. This design allows for efficient loading and unloading of wheeled cargo, maximizing space utilization and reducing handling time compared to traditional container shipping methods.
                </p>
              </div>

              {/* The Process */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black mb-3 font-['Raleway']">The Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  The RoRo process begins with cargo being driven or towed onto the vessel through specialized ramps. Once loaded, the cargo is secured in place for the journey. Upon arrival at the destination port, the process is reversed, with cargo being driven off the vessel, ensuring a smooth and efficient unloading process.
                </p>
              </div>

              {/* The Benefits */}
              <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black mb-3 font-['Raleway']">The Benefits</h3>
                <p className="text-gray-600 leading-relaxed">
                  RoRo shipping offers numerous advantages, including faster loading and unloading times, reduced handling costs, and minimized risk of damage to cargo. This method is particularly beneficial for wheeled vehicles and machinery, providing a cost-effective and efficient transportation solution for various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MaximizingEfficiency() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Efficiency & Reliability</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 leading-tight">
                Maximizing Efficiency in Our <span className="text-black font-light">RoRo Shipping</span>
              </h2>
              <h3 className="text-xl font-medium text-gray-700 mb-8">
                Delivering Speed, Cost-Effectiveness, and Reliability for Your Cargo Needs
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                We leverage the numerous benefits of RoRo shipping to optimize your logistics experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our operations significantly reduce cargo handling time compared to traditional crane methods, ensuring swift and efficient transport. By eliminating the need for heavy-lifting equipment, we provide a cost-effective solution for transporting vehicles and similar cargo. Additionally, our approach minimizes handling, reducing the risk of damage, and ensuring your cargo arrives in excellent condition.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We frequently utilize our RoRo vessels for automobile transportation, facilitating seamless shipping from manufacturing plants to global markets.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our services are also ideal for project cargo, adeptly handling large and self-propelled machinery or equipment. Furthermore, our RoRo vessels are strategically deployed on essential trade routes, ensuring quick loading and unloading.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Trust us to deliver unparalleled efficiency and reliability for all your RoRo shipping needs.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/roroCargoImage.jpg"
                alt="Moon Navigation employee checking RoRo cargo"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransportProcess() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-1 lg:order-1 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/roroCarsImage.jpg"
                alt="Cars getting off a Moon Navigation RoRo ship"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-2 lg:order-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Transport Process</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                Our <span className="text-black font-light">RoRo Shipping Process</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                At Moon Navigation And Trading Co., our RoRo shipping process is designed to ensure the safe and efficient transport of your cargo. Loading begins with vehicles or cargo being driven onto the RoRo ship via strategically positioned ramps at the front or rear of the vessel. Once on board, we secure the cargo on the decks using straps, chocks, and other reliable securing methods to guarantee stability during transit. As the ship makes its journey to the destination port, you can rest assured that your cargo is safely secured. Upon arrival, the unloading process is equally seamless, as vehicles and equipment are driven off the ship using the same ramps, ensuring a smooth transition from ship to shore.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                With our attention to detail and commitment to excellence, we provide a comprehensive RoRo shipping experience that prioritizes the safety and reliability of cargo. Whenever and wherever you need to trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonsToChoose() {
  return (
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>RORO Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6">
              Reasons to Choose Us for Your RORO Cargo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fast, secure, and dependable shipping services for wheeled cargo with expert handling and global connectivity.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/23.png" alt="Efficiency & Reliability" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">
                Efficiency & Reliability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fast, secure, and dependable shipping services for wheeled cargo.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/22.png" alt="Expert Handling" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">
                Expert Handling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Smooth roll-on/roll-off loading and unloading, minimizing handling risks and transit time.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/24.png" alt="Secure & Cost-Effective Transport" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">
                Secure & Cost-Effective Transport
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized solutions ensuring safe stowage, reduced costs, and fast transit times.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/25.png" alt="Global Connectivity" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">
                Global Connectivity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Strong partnerships with major RORO carriers and ports worldwide for reliable shipping routes.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/26.png" alt="Expert Compliance & Support" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">
                Expert Compliance & Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated assistance in customs clearance, documentation, and regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}



function RoRoOverviewTab() {
  return (
    <>
      <Overview />
      <Services />
      <MaximizingEfficiency />
      <TransportProcess />
      <ReasonsToChoose />
      <GetQuoteComponent topic="RORO" link="/ocean-freight-forms" />
    </>
  );
}

export default function RollOnOffHero() {
  const locale = useLocale();
  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <RoRoOverviewTab />,
    },
    {
      id: "our-solutions",
      title: "Our Solutions",
      content: <LearnMore />,
    },
  ];

  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* --- NEW HERO DESIGN --- */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px]">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Enhanced Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Hero Image - Using the same image as before */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/rorotitleimage.jpg"
              alt="RoRo Cargo Handling"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Wheeled Cargo Transport</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Roll on/roll off<br />
                <span className="text-blue-300">(RORO)</span>
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Specialized vessels for efficient transportation of wheeled cargo, allowing vehicles to be driven directly on and off without cranes or heavy lifting equipment
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/ocean-freight-forms">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Request a Quote
                  </span>
                </button>
              </Link>
              <Link href="#services">
                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Learn More
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
      <FormTabs tabData={tabData} />
    </main>
  );
}