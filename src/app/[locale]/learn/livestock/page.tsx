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
  </div>
)
}