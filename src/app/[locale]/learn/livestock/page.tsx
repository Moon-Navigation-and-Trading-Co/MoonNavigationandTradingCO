import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'

export default function ShippingMethodsInfo() {
  const t = useTranslations("livestock:");
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-8 px-4">
      {/* Banner Image */}
      <div className="w-full max-w-5xl rounded-[60px] overflow-hidden mb-12">
        <img
          src="/livestock-banner.jpg" // Replace with your actual image path
          alt="Livestock Transportation Banner"
          className="w-full h-[320px] object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side: Title and Button */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">Live Stock<br />Transportation</h1>
          <Link href="#request-quote" passHref>
            <Button className="bg-[#3B409F] text-white text-base font-semibold rounded-full px-8 py-3 shadow-md hover:bg-[#2c307a] transition-all">
              Request a Quote
            </Button>
          </Link>
        </div>
        {/* Right Side: Info Card */}
        <div>
          <h2 className="text-xl font-semibold text-[#3B409F] mb-4">What is Livestock Transportation?</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Livestock transportation is the moving of domesticated animals from one location to another, typically for purposes such as breeding, feeding, or market sales. This specialized form of transport requires adherence to strict welfare regulations to ensure the safety and comfort of the animals during transit.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            At Moon Navigation and Trading Co., we specialize in the safe, humane, and efficient shipment of livestock, ensuring their well-being throughout the entire journey. Whether you need to transport cattle, sheep, horses, or other live animals, our state-of-the-art livestock carriers and expert handling services guarantee a stress-free and compliant shipping experience.
          </p>
        </div>
      </div>
      <section className="w-full max-w-6xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Industries We Serve</h2>
        <p className="mb-10 text-gray-600">
          We provide specialized livestock shipping solutions across multiple industries, ensuring each type of animal is transported safely and in compliance with international standards.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/industry-agriculture.jpg"
              alt="Agriculture & Dairy Farming"
              className="rounded-3xl object-cover w-full max-w-xs h-[180px] mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Agriculture & Dairy Farming</h3>
            <p className="text-gray-500 text-center">
              We support global farming operations by transporting cattle, sheep, goats, and other livestock.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/industry-equestrian.jpg"
              alt="Equestrian & Racing"
              className="rounded-3xl object-cover w-full max-w-xs h-[180px] mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Equestrian & Racing</h3>
            <p className="text-gray-500 text-center">
              We securely ship elite horses for global competitions, training, and breeding.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/industry-zoo.jpg"
              alt="Zoos & Wildlife Conservation"
              className="rounded-3xl object-cover w-full max-w-xs h-[180px] mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-center">Zoos & Wildlife Conservation</h3>
            <p className="text-gray-500 text-center">
              Our expertise extends to the careful relocation of exotic and endangered species, supporting conservation programs and global zoo networks.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto mt-20 mb-20">
        <h2 className="text-4xl font-semibold mb-12">Our Livestock Shipping Solutions</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-6">Specialized Livestock Carriers</h3>
            <p className="mb-6">
              Our vessels are specifically designed for the safe and efficient transport of livestock.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
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
              className="rounded-3xl object-cover w-full max-w-xl h-[280px] md:h-[340px]"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto mt-20 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/animal-welfare.jpg"
              alt="Veterinarian with livestock"
              className="rounded-3xl object-cover w-full max-w-xl h-[280px] md:h-[340px]"
            />
          </div>
          {/* Right: Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-6">Animal Welfare & Veterinary Care</h3>
            <p className="mb-6">
              At Moon Navigation and Trading Co., animal welfare is our top priority in every aspect of transportation.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
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
      <section className="w-full max-w-6xl mx-auto mt-20 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-6">Regulatory Compliance &amp; Safety Standards</h3>
            <p className="mb-6">
              We strictly adhere to global livestock transportation regulations to ensure the highest standards of welfare and compliance. This includes the following:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
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
              className="rounded-3xl object-cover w-full max-w-xl h-[280px] md:h-[340px]"
            />
          </div>
        </div>
        {/* Logos Row */}
        <div className="flex flex-row items-center justify-start gap-10 mt-12">
          <img
            src="/logo-woah.png"
            alt="World Organisation for Animal Health"
            className="h-14 w-auto"
          />
          <img
            src="/logo-imo.png"
            alt="International Maritime Organization"
            className="h-14 w-auto"
          />
          {/* Add more logos as needed */}
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
          Reasons to Choose Moon Navigation and Trading Co. for Your Livestock Transportation Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src="/icon-global-network.png" alt="Global Network" className="h-16 mb-4" />
            <h3 className="font-semibold mb-2">Global Network &amp; Port Access</h3>
            <p className="text-gray-500">
              Our extensive shipping routes cover major livestock trade destinations, ensuring timely and efficient deliveries.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src="/icon-biosecurity.png" alt="Biosecurity" className="h-16 mb-4" />
            <h3 className="font-semibold mb-2">Advanced Biosecurity Measures</h3>
            <p className="text-gray-500">
              We implement strict hygiene protocols, quarantine measures, and disease prevention practices.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src="/icon-anchor.png" alt="Custom-Tailored" className="h-16 mb-4" />
            <h3 className="font-semibold mb-2">Custom-Tailored Transport Solutions</h3>
            <p className="text-gray-500">
              Whether you need short-haul regional shipping or long-haul transcontinental transport, we design solutions tailored to your needs.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src="/icon-docs.png" alt="Logistics & Documentation" className="h-16 mb-4" />
            <h3 className="font-semibold mb-2">Seamless Logistics &amp; Documentation Handling</h3>
            <p className="text-gray-500">
              From permits and health certificates to customs clearance, we manage all necessary documentation.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get your Quote with Us
          </h2>
          <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our steamlined livestock transportation quotation process is designed for efficiency and ease. At
            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation
            by Request system. Simply fill out our short form to initiate your request. Once submitted, our
            team will review the details and select the best transportation method, routing, and compliance
            measures for your shipment. You will receive a customized quotation directly in your email,
            ensuring accurate pricing and the highest standards of animal welfare and safety.
          </p>
          <button className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors">
            Request a Quote
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
          <img
            src="/quote-illustration.png"
            alt="Quotation illustration"
            className="w-[320px] h-auto object-contain"
            style={{ maxWidth: 380 }}
          />
        </div>
      </section>
    </div>
  )
}