import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Livestock Transportation Services | Moon Navigation and Trading Co.",
  description:
    "Moon Navigation and Trading Co. specializes in safe, humane, and efficient livestock transportation worldwide. Learn about our animal welfare standards, regulatory compliance, and custom shipping solutions for cattle, horses, and more.",
  keywords: [
    "livestock transportation",
    "animal shipping",
    "cattle transport",
    "horse shipping",
    "animal welfare",
    "veterinary care",
    "biosecurity",
    "IMO regulations",
    "WOAH guidelines",
    "custom livestock shipping",
    "Moon Navigation and Trading Co.",
    "international livestock transport",
    "livestock carriers",
    "animal export",
    "animal import",
    "compliance",
    "safe animal transport"
  ],
  openGraph: {
    title: "Livestock Transportation Services | Moon Navigation and Trading Co.",
    description:
      "Discover specialized livestock shipping solutions with Moon Navigation and Trading Co. We ensure animal welfare, regulatory compliance, and seamless logistics for global livestock transport.",
    url: "https://www.moonnavigation.com/learn/livestock",
    type: "website",
    images: [
      {
        url: "/livestock-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Livestock Transportation Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Livestock Transportation Services | Moon Navigation and Trading Co.",
    description:
      "Safe, humane, and efficient livestock shipping worldwide. Learn about our animal welfare standards and custom solutions.",
    images: ["/livestock-banner.jpg"]
  }
}

export default function ShippingMethodsInfo() {
  const t = useTranslations("livestock:");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
      {/* Banner Image */}
      <div className="w-full max-w-7xl rounded-[60px] overflow-hidden mb-12">
        <img
          src="/livestock-banner.jpg"
          alt="Livestock Transportation Banner"
          className="w-full h-[320px] object-cover"
          loading="lazy"
        />
      </div>
      {/* Content Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Title and Button */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">Live Stock<br />Transportation</h1>
          <Link href="/ocean-freight-forms" passHref>
            <Button className="bg-[#3B409F] text-white text-base font-semibold rounded-full px-8 py-3 shadow-md hover:bg-[#2c307a] transition-all">
              Request a Quote
            </Button>
          </Link>
        </div>
        {/* Right Side: Info Card */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">What is Livestock Transportation?</h2>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            Livestock transportation is the moving of domesticated animals from one location to another, typically for purposes such as breeding, feeding, or market sales. This specialized form of transport requires adherence to strict welfare regulations to ensure the safety and comfort of the animals during transit.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            At Moon Navigation and Trading Co., we specialize in the safe, humane, and efficient shipment of livestock, ensuring their well-being throughout the entire journey. Whether you need to transport cattle, sheep, horses, or other live animals, our state-of-the-art livestock carriers and expert handling services guarantee a stress-free and compliant shipping experience.
          </p>
        </div>
      </div>
      <section className="w-full max-w-7xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Industries We Serve</h2>
        <p className="mb-10 text-muted-foreground">
          We provide specialized livestock shipping solutions across multiple industries, ensuring each type of animal is transported safely and in compliance with international standards.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/industry-agriculture.jpg"
              alt="Agriculture & Dairy Farming"
              className="rounded-3xl object-cover w-full max-w-7xl h-[180px] mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Agriculture & Dairy Farming</h3>
            <p className="text-muted-foreground text-center">
              We support global farming operations by transporting cattle, sheep, goats, and other livestock.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/industry-equestrian.jpg"
              alt="Equestrian & Racing"
              className="rounded-3xl object-cover w-full max-w-7xl h-[180px] mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Equestrian & Racing</h3>
            <p className="text-muted-foreground text-center">
              We securely ship elite horses for global competitions, training, and breeding.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/industry-zoo.jpg"
              alt="Zoos & Wildlife Conservation"
              className="rounded-3xl object-cover w-full max-w-7xl h-[180px] mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Zoos & Wildlife Conservation</h3>
            <p className="text-muted-foreground text-center">
              Our expertise extends to the careful relocation of exotic and endangered species, supporting conservation programs and global zoo networks.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto mt-20 mb-20">
        <h2 className="text-4xl font-semibold mb-12">Our Livestock Shipping Solutions</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-6">Specialized Livestock Carriers</h3>
            <p className="mb-6">
              Our vessels are specifically designed for the safe and efficient transport of livestock.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                They feature multi-tiered enclosures with optimal ventilation, ensuring a consistent flow of fresh air.
              </li>
              <li>
                With temperature-controlled environments, we prioritize animal comfort, regardless of external climate conditions.
              </li>
              <li>
                Additionally, our anti-slip flooring and drainage systems promote hygiene and minimize injury risks.
              </li>
              <li>
                Our automated feeding and watering systems guarantee that animals receive proper nourishment throughout their journey.
              </li>
            </ul>
          </div>
          {/* Right: Main Image with Inset */}
          <div className="flex-1 relative flex justify-center">
            <img
              src="/livestock-ship.jpg"
              alt="Livestock Carrier Ship"
              className="rounded-3xl object-cover w-full max-w-7xl h-[280px] md:h-[340px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto mt-20 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/animal-welfare.jpg"
              alt="Veterinarian with livestock"
              className="rounded-3xl object-cover w-full max-w-7xl h-[280px] md:h-[340px]"
              loading="lazy"
            />
          </div>
          {/* Right: Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-6">Animal Welfare & Veterinary Care</h3>
            <p className="mb-6">
              At Moon Navigation and Trading Co., animal welfare is our top priority in every aspect of transportation.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
              <li>
                Our onboard veterinarians and trained handlers provide constant monitoring and are equipped to deliver emergency medical care when necessary.
              </li>
              <li>
                We ensure low-stress loading and unloading through the use of specialized ramps, facilitating a smooth and injury-free transition.
              </li>
              <li>
                Each animal is allocated adequate space to move comfortably, minimizing stress and fatigue.
              </li>
              <li>
                We conduct regular health checks, including pre-departure inspections and ongoing monitoring throughout transit.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto mt-20 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-6">Regulatory Compliance &amp; Safety Standards</h3>
            <p className="mb-6">
              We strictly adhere to global livestock transportation regulations to ensure the highest standards of welfare and compliance. This includes the following:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
              <li>International Maritime Organization (IMO) Animal Transport Regulations</li>
              <li>World Organization for Animal Health (WOAH) Welfare Guidelines</li>
              <li>Local Import/Export Animal Health Requirements</li>
            </ul>
            <p>
              By maintaining compliance with these standards, we ensure a smooth customs clearance process and prevent unnecessary delays at ports.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/compliance-safety.jpg"
              alt="Compliance and Safety at Port"
              className="rounded-3xl object-cover w-full max-w-7xl h-[280px] md:h-[340px]"
              loading="lazy"
            />
          </div>
        </div>
        {/* Logos Row */}
        <div className="flex flex-row items-center justify-start gap-10 mt-12">
          <img
            src="/logo-woah.png"
            alt="World Organisation for Animal Health"
            className="h-14 w-auto"
            loading="lazy"
          />
          <img
            src="/logo-imo.png"
            alt="International Maritime Organization"
            className="h-14 w-auto"
            loading="lazy"
          />
          {/* Add more logos as needed */}
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
          Reasons to Choose Moon Navigation and Trading Co. for Your Livestock Transportation Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold mb-2 text-foreground">Global Network &amp; Port Access</h3>
            <p className="text-muted-foreground">
              Our extensive shipping routes cover major livestock trade destinations, ensuring timely and efficient deliveries.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold mb-2 text-foreground">Advanced Biosecurity Measures</h3>
            <p className="text-muted-foreground">
              We implement strict hygiene protocols, quarantine measures, and disease prevention practices.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold mb-2 text-foreground">Custom-Tailored Transport Solutions</h3>
            <p className="text-muted-foreground">
              Whether you need short-haul regional shipping or long-haul transcontinental transport, we design solutions tailored to your needs.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="font-semibold mb-2 text-foreground">Seamless Logistics &amp; Documentation Handling</h3>
            <p className="text-muted-foreground">
              From permits and health certificates to customs clearance, we manage all necessary documentation.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get your Quote with Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our steamlined livestock transportation quotation process is designed for efficiency and ease. At
            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation
            by Request system. Simply fill out our short form to initiate your request. Once submitted, our
            team will review the details and select the best transportation method, routing, and compliance
            measures for your shipment. You will receive a customized quotation directly in your email,
            ensuring accurate pricing and the highest standards of animal welfare and safety.
          </p>
          <Link href="/ocean-freight-forms" passHref legacyBehavior>
            <a className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium text-sm hover:bg-primary/90 transition-colors">
              Request a Quote
            </a>
          </Link>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
          <img
            src="/quote-illustration.png"
            alt="Quotation illustration"
            className="w-[320px] h-auto object-contain"
            style={{ maxWidth: 380 }}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}