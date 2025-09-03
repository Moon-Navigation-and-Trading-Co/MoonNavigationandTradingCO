"use client"
import OverviewServicesTabs from "@/components/overview-services";
import Image from "next/image";
import dynamic from "next/dynamic";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import { Award, Ship, Settings, DollarSign, Calendar, Truck, Shield, Wrench } from "lucide-react";

const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), { ssr: false });

const vessels = [
  { img: "/vc-1.jpg", title: "General Cargo Vessels" },
  { img: "/vc-2.jpg", title: "Bulk Carriers" },
  { img: "/vc-3.jpg", title: "Tankers" },
  { img: "/vc-4.jpg", title: "Container Ships" },
  { img: "/vc-5.jpg", title: "Offshore Support Vessels (OSVs)" },
  { img: "/vc-6.jpg", title: "Tugboats and Barges" },
  { img: "/vc-7.jpg", title: "Landing Craft & Ro-Ro Vessels" },
  { img: "/vc-8.jpg", title: "Crew Boats & Utility Boats" },
];

const industries=[
    {img:"/iv-1.jpg",title:"International Shipping and Freight"},
    {img:"/iv-2.jpg",title:"Offshore Oil and Gas Operations"},
    {img:"/iv-3.jpg",title:"Marine Consttuction Projects"},
    {img:"/iv-4.jpg",title:"Dredging and Port Development"},
    {img:"/iv-5.jpg",title:"Energy and Infrastructure Projects"},
    {img:"/iv-6.jpg",title:"Ship Suply and Crew Change Operations"},
]

const vesselBenefits = [
    {
        icon: <Image src="/icons/other services/51.png" alt="Ready for Immediate Use" width={48} height={48} className="w-12 h-12" />,
        title: "Ready for Immediate Use",
        description: "Each vessel undergoes comprehensive inspections and is certified to meet stringent industry standards, ensuring reliability from day one."
    },
    {
        icon: <Image src="/icons/other services/52.png" alt="Customizable" width={48} height={48} className="w-12 h-12" />,
        title: "Customizable",
        description: "Tailor your vessel with specialized equipment or advanced navigation systems to align perfectly with your operational requirements."
    },
    {
        icon: <Image src="/icons/other services/53.png" alt="Cost-Effective" width={48} height={48} className="w-12 h-12" />,
        title: "Cost-Effective",
        description: "Our competitive pricing offers affordability while delivering long-term value, ensuring you make a wise investment without compromising on quality."
    }
];

const rentalServices = [
    {
        icon: <Image src="/icons/other services/54.png" alt="Rental Terms" width={48} height={48} className="w-12 h-12" />,
        title: "Rental Terms",
        description: "Choose from daily, monthly, or long-term rental agreements to suit your needs."
    },
    {
        icon: <Image src="/icons/other services/55.png" alt="Quick Delivery" width={48} height={48} className="w-12 h-12" />,
        title: "Quick Delivery",
        description: "Enjoy fast and efficient delivery directly to your location."
    },
    {
        icon: <Image src="/icons/other services/56.png" alt="Maintenance Included" width={48} height={48} className="w-12 h-12" />,
        title: "Maintenance Included",
        description: "Rest assured that we handle all repairs and maintenance throughout your rental period."
    }
];

export default function VesselPage() {
  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Enhanced Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Hero Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/vessel rentals and purchases 1.jpg"
              alt="Vessel Purchases and Rentals Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Maritime Solutions</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Vessel Purchases<br />and Rentals
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Comprehensive selection of high-quality vessels for sale and rental, tailored to meet your specific maritime requirements
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/buy-rent-vessels-forms">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Get Quote
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

      {/* Content Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
          <div className="md:w-1/2 w-full flex flex-col items-start mb-8 md:mb-0">
            <p className="text-gray-700 text-sm md:text-base mb-2 font-medium">
              Looking to buy or rent a vessel?
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We recognize the diverse needs of businesses and individuals in shipping and transport solutions. That is why we offer a comprehensive selection of high-quality vessels for sale and rental, tailored to meet your specific requirements. Our services ensure a seamless experience, whether you are seeking to acquire a vessel or finalize perfect charters. Trust us to provide exceptional options and expert guidance to fulfill your maritime needs efficiently at Moon Marine and Sea Trading Company.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[16/9] mb-8 rounded-[60px]">
          <Image
              src="/vessel rentals and purchases 2.jpg"
            alt="Vessel Solutions"
            fill
            className="object-cover rounded-[60px]"
            style={{ zIndex: 0 }}
            priority
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-end"
            style={{ zIndex: 1 }}
          >
            <div
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-xl w-full mr-0 md:mr-12"
              style={{ opacity: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-light text-[#256094] mb-4">
                Vessel Solutions for Every<br />Need
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-2 font-medium">
                At Moon Marine and Sea Trading Company, we are providing vessels that embody durability and reliability, engineered to withstand harsh weather conditions and ensure the smooth safe delivery of your cargo.
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                Our offerings include customizable options, catering to a wide array of requirements—from specialized vessels designed for specific cargo types to versatile multipurpose vessels.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                With an extensive selection of vessels and leases, we enable you to select the ideal solution to meet your project&apos;s demands. Furthermore, our cost-effective and scalable services ensure the optimum fit for both economic and rental options, and our expert solutions are accessible to all without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vessel Benefits Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[16/9] mb-8 rounded-[60px]">
          <Image
            src="/vessel rentals and purchases 3.jpg"
            alt="Vessel Rental and Purchase Background"
            fill
            className="object-cover rounded-[60px]"
            style={{ zIndex: 0 }}
            priority
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center p-4 md:p-0"
            style={{ zIndex: 1 }}
          >
            <div className="bg-white rounded-2xl p-4 md:p-8 lg:p-12 shadow-lg flex flex-col gap-6 md:gap-8 w-full max-w-6xl mx-auto overflow-y-auto max-h-[90vh] md:max-h-none" style={{ opacity: 0.92 }}>
              {/* Title Section */}
              <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
                <div className="text-xl md:text-2xl lg:text-3xl font-light text-[#232B50] mb-2 text-center" style={{fontFamily: 'Raleway, sans-serif'}}>
                  Vessel Purchases and Rentals
                </div>
              </div>
              
              {/* Buying Vessels Section */}
              <div className="flex flex-col justify-center">
                <div className="text-lg md:text-2xl lg:text-3xl font-light text-[#256094] mb-4 md:mb-6 text-center" style={{fontFamily: 'Raleway, sans-serif'}}>
                  Our Vessels offer the following benefits:
                </div>
              </div>
              
              <div className="text-xs text-gray-700 mt-6 md:mt-8 text-center">
                Choose us, Moon Navigation and Trading Co. for a dependable and versatile solution that meets your needs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vessel Benefits Grid */}
      <ReasonsGridUniversal
        title=""
        reasons={vesselBenefits}
        layout="default"
      />

      {/* Rental Services Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h4 className="text-sm md:text-base lg:text-lg font-medium text-gray-700 mb-8 text-center">
          We offer the following services to ensure a seamless rental experience.
        </h4>
      </section>

      <ReasonsGridUniversal
        title=""
        reasons={rentalServices}
        layout="default"
      />

      {/* Vessel Types Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-normal text-[#232B50] text-center mb-8" style={{fontFamily: 'Raleway, sans-serif'}}>Types of Vessels Available for Sale:</h2>
        <VesselCarousel />
      </section>

      {/* Purchase vs Charter Comparison */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl text-[#232B50] mb-2 text-center md:text-left">
              Purchase or Charter – What is Best for You?
            </h2>
            <div className="text-gray-700 text-sm mb-6 text-center md:text-left">
              We help you decide the best approach based on your operations, timeline, and budget.
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-[#232B50] text-white">
                    <th className="py-3 px-4 text-left border-r">Criteria</th>
                    <th className="py-3 px-4 text-left border-r">Purchase</th>
                    <th className="py-3 px-4 text-left border-r">Rental / Charter</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-sm">
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 font-medium border-r">Duration</td>
                    <td className="py-3 px-4 border-r">Long-term operations</td>
                    <td className="py-3 px-4 border-r">Short- or medium-term projects</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 font-medium border-r">Capital investment</td>
                    <td className="py-3 px-4 border-r">Higher (asset ownership)</td>
                    <td className="py-3 px-4 border-r">Lower operating expense</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 font-medium border-r">Flexibility</td>
                    <td className="py-3 px-4 border-r">Less flexible</td>
                    <td className="py-3 px-4 border-r">Highly flexible</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 font-medium border-r">Maintenance Responsibility</td>
                    <td className="py-3 px-4 border-r">Owner's responsibility</td>
                    <td className="py-3 px-4 border-r">Often included in charter terms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Types Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 rounded-[40px]">
          <div className="flex-1 min-w-[320px] md:pr-8">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Charter Types We Offer:</h2>
            <div className="text-gray-700 text-base mb-4">We provide multiple flexible chartering arrangements:</div>
            <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
              <li>Time Charter – Rent a vessel for a fixed time (crew included)</li>
              <li>Voyage Charter – Rent for a specific voyage or cargo movement</li>
              <li>Bareboat Charter – Rent the vessel only, without crew</li>
              <li>Project Charter – Custom solutions for marine projects</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image src="/ve-5.jpg" alt="Charter Types" width={540} height={320} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-6 py-12 rounded-[40px]">
          <div className="flex-1 min-w-[320px] md:pl-8">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Our Process – Step by Step</h2>
            <div className="text-gray-700 text-base mb-4">Whether you are buying or renting, we simplify your experience:</div>
            <ol className="list-decimal pl-6 text-gray-800 text-base space-y-1">
              <li>Requirement Consultation – We understand your operation goals</li>
              <li>Vessel Sourcing – We identify matching vessels from our global network</li>
              <li>Technical Review – Surveys, classification & inspections</li>
              <li>Commercial Negotiation – We handle pricing and terms</li>
              <li>Contract & Documentation – Transparent and compliant paperwork</li>
              <li>Delivery Coordination – Smooth handover or project start</li>
              <li>Ongoing Support – After-sales or rental management</li>
            </ol>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image src="/ve-6.jpg" alt="Our Process" width={540} height={320} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 rounded-[40px]">
          <div className="flex-1 min-w-[320px] md:pr-8">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Technical Support & Compliance</h2>
            <div className="text-gray-700 text-base mb-4">All vessels come with verified:</div>
            <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
              <li>Class Certification</li>
              <li>Flag Registration</li>
              <li>Insurance & Regulatory Compliance</li>
              <li>Pre-delivery inspection reports</li>
              <li>Crew availability (for chartered vessels)</li>
              <li>Maintenance records (for pre-owned units)</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image src="/ve-7.jpg" alt="Technical Support" width={540} height={320} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 px-6 py-12 rounded-[40px]">
          <div className="flex-1 min-w-[320px] md:pl-8">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Customization Options</h2>
            <div className="text-gray-700 text-base mb-4">We can arrange vessel modifications or outfitting to match your project:</div>
            <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
              <li>Deck strength enhancements</li>
              <li>Cargo gear and crane additions</li>
              <li>Accommodation upgrades</li>
              <li>Communication & navigation systems</li>
              <li>Offshore safety equipment installation</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image src="/ve-8.jpg" alt="Customization Options" width={540} height={320} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full flex flex-col">
          <h2 className="text-2xl md:text-3xl text-[#232B50] mb-2 md:text-left">
            Industries We Serve
          </h2>
          <div className="text-gray-700 text-sm mb-6 md:text-left">
            We serve a diverse range of industries, ensuring we provide the right vessel for your needs.
          </div>
          <VesselCarousel />
        </div>
      </section>

      {/* Global Delivery Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 rounded-[40px]">
          <div className="flex-1 min-w-[320px] md:pr-8">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Global Delivery & Deployment</h2>
            <div className="text-gray-700 text-base mb-2">We support delivery of vessels to major ports and terminals worldwide.<br/>Whether local or international deployment, we coordinate:</div>
            <ul className="list-disc pl-6 text-gray-800 text-base space-y-1 mt-4">
              <li>Delivery voyage planning</li>
              <li>Crew change logistics</li>
              <li>Port handling & clearance</li>
              <li>Transit formalities</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image src="/ve-9.jpg" alt="Global Delivery & Deployment" width={540} height={320} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Vessel Rental/Purchase" link="/buy-rent-vessels-forms" />
      <FAQSearch category="vessel-purchases-rentals"/>
    </main>
  );
}
