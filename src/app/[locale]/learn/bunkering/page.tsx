"use client"
import Image from "next/image";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";

function overview(){
  return(
    <>
    <div className="w-full mt-8 mb-0 px-4">
        <div className="w-full flex flex-row gap-0 rounded-[2rem] overflow-hidden mb-8">
          <div className="w-full h-[180px] md:h-[220px] relative">
            <Image
              src="/bunkering-1.jpg"
              alt="Bunkering Truck"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-8">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl mb-2 leading-tight text-gray-900 dark:text-white">
              Bunkering | Oil Supply |<br />Ship Chandlery
            </h1>
            <div className="mt-6">
              <Link href="/ship-agency-forms">
                <RequestQuoteButton>
                  Request a Quote
                </RequestQuoteButton>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-start">
            <p className="text-[#222] dark:text-white text-sm md:text-base mt-1 md:mt-0">
              At Moon Navigation and Trading Co., we provide essential services to ensure vessels operate efficiently and without interruption. Our bunkering, oil supply, and ship chandlery solutions are designed to meet the demands of modern maritime operations with precision, reliability, and speed.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function services(){
  return(
    <>
          
          <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-[2rem] p-6 md:p-12 mt-8 mb-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start z-10">
        <h2 className="text-xl md:text-2xl mb-2 text-gray-900 dark:text-white" style={{ fontFamily: "Raleway, sans-serif" }}>
          Bunkering Services (Marine Fuel Supply)
        </h2>
        <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          We offer comprehensive bunkering services designed to ensure a seamless fueling process for your maritime operations. We place importance on efficiency, providing solutions that minimize downtime while adhering to international regulations.
        </p>
        <p className="text-[#222] dark:text-white text-sm md:text-base mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
          Our expert team manages everything from fuel delivery to compliance with environmental and safety standards, allowing you to concentrate on your core business. We specialize in supplying high-quality marine fuels, including Heavy Fuel Oil (HFO), Marine Gas Oil (MGO), and Lubricants from top UAE, KSA, and global suppliers, with assurance of full documentation. Options and offers are tailored to guarantee your vessel has the fuel they need to operate efficiently.
        </p>
        <Link href="/learn/bunkering/learn-more-bunkering">
                <RequestQuoteButton>
                  Learn more on our bunkering services
                </RequestQuoteButton>
              </Link>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/bunkering-2.jpg"
            alt="Bunkering Tank"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-[2rem] p-0 md:p-4 shadow-none mb-12">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/bunkering-3.jpg"
            alt="Oil & Lubricants Supply"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-0 md:px-8 mt-8 md:mt-0 z-10">
        <div className="rounded-xl p-6 max-w-lg">
          <h2 className="text-xl md:text-2xl mb-2 text-gray-900 dark:text-white" style={{ fontFamily: "Raleway, sans-serif" }}>
            Oil and Lubricants Supply
          </h2>
          <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            We are dedicated to providing critical oil supply services that enhance the performance and longevity of vessels. Specializing in premium-grade marine oils and lubricants, we ensure reliable operation of your fleet with our comprehensive offerings, which include engine oil, lubricants, and related products tailored to meet the unique needs of each vessel.
          </p>
          <p className="text-[#222] dark:text-white text-sm md:text-base mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
            Our experienced team supplies and delivers high-quality oils to anywhere along your voyage. You can trust our services to be in compliance with environmental and safety standards. Leveraging our extensive network and expertise, we are committed to delivering the right oil and lubricants, on time, ensuring your vessels operate efficiently and reliably at all times.
          </p>
          <Link href="/learn/bunkering/learn-more-oil">
            <RequestQuoteButton>
              Learn more or get Oil and Lubricants supply information
            </RequestQuoteButton>
          </Link>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-[2rem] p-0 md:p-4 shadow-none mb-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-0 md:px-8 mt-8 md:mt-0 z-10">
        <div className="rounded-xl p-6  max-w-lg">
          <h2 className="text-xl md:text-2xl mb-2 text-gray-900 dark:text-white" style={{ fontFamily: "Raleway, sans-serif" }}>
            Ship Chandlery
          </h2>
          <p className="text-[#222] dark:text-white text-sm md:text-base mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
            We offer extensive ship chandlery services dedicated to serving your vessel's every requirement with onboard supplies and equipment for smooth operations. Our global network enables seamless sourcing of top-tier products, including fresh provisions, deck and engine consumables, cleaning agents, and safety equipment.
          </p>
          <p className="text-[#222] dark:text-white text-sm md:text-base mb-6" style={{ fontFamily: "Raleway, sans-serif" }}>
            We take pride in providing high-quality food and beverages, technical stores, safety equipment, bonded items, and cleaning materials, all tailored to your specific needs. Our experienced team understands the unique challenges of the maritime industry, so you can trust that your supplies will always be delivered efficiently and in compliance with the highest standards. Our service is available globally, ensuring your vessel receives the right products wherever you operate.
          </p>
          <Link href="/learn/bunkering/learn-more-chandlery">
            <RequestQuoteButton>
              Learn more or view all Chandlery services
            </RequestQuoteButton>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/bunkering-4.jpg"
            alt="Ship Chandlery"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
    <div className="w-full max-w-6xl mx-auto mb-24">
      <h2 className="text-xl md:text-2xl text-[#2a4365] dark:text-blue-400 mb-12 text-center" style={{ fontFamily: "Raleway, sans-serif" }}>
        Reasons to Choose Moon Navigation and Trading Co. For Your Bunkering | Oil Supply | Ship Chandlery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">24/7 Service Availability</h3>
          <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
            Supporting vessels at all times.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">Cost-Effective and Transparent Pricing</h3>
          <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
            No hidden fees.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-base text-[#2a4365] dark:text-blue-400 mb-2">Compliance with International Standards</h3>
          <p className="text-[#444] dark:text-gray-300 text-sm max-w-xs">
            Ensuring regulatory adherence.
          </p>
        </div>
      </div>
    </div>
    <GetQuoteComponent topic="Bunkering, Oil Supply, Ship Chandlery"  link="/ship-agency-forms"/>
    <FAQSearch category="bunkering" />
    </>
  )
}

export default function BunkeringPage() {
  return (
    <div
      className="w-full max-w-7xl min-h-screen flex flex-col items-center place-self-center"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
<OverviewServicesTabs renderOverview={overview} renderServices={services}/>
    </div>
  );
}
