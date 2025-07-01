import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function LearnMoreBunkeringPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      <div className="w-full flex justify-center items-center mb-12">
        <div className="relative w-full max-w-2xl aspect-[2/1] rounded-[2rem] overflow-hidden shadow-lg">
          <Image
            src="/images/bunkering-hero.jpg"
            alt="Person overlooking the sea with a port in the distance"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-2xl p-6 m-4 shadow-md max-w-xl text-center">
              <p className="text-[#222] text-sm md:text-base">
                With Moon Navigation and Trading Co., you can count on reliable, timely and cost-effective bunkering solutions and support, and fully customizable solutions to your vessel’s needs, ensuring uninterrupted service and operational efficiency.<br /><br />
                Wherever and whenever you need to fuel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl  mb-2">
          Bunkering Services (Marine Fuel Supply) – At Moon Navigation and Trading Co.
        </h1>
        <p className="text-[#444] text-sm md:text-base mb-8">
          We offer reliable, high-quality marine fuel supply at key ports worldwide, ensuring top vessels receive the right fuel at the right time.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-lg  mb-2">1. Types of Marine Fuels We Provide:</h2>
            <ul className="list-disc pl-6 text-[#222] text-sm md:text-base mb-4">
              <li>Very Low Sulfur Fuel Oil (VLSFO) – IMO 2020 compliant fuel</li>
              <li>Marine Gas Oil (MGO) &amp; Marine Diesel Oil (MDO) – Cleaner-burning alternatives</li>
              <li>Heavy Fuel Oil (HFO) – For specific vessel requirements</li>
              <li>HFO &amp; Alternate Fuels – Sustainable, eco-friendly options</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/bunkering-ship-dock.jpg"
                alt="Bunkering Ship at Dock"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
            <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/bunkering-truck-ship.jpg"
                alt="Bunkering Truck and Ship"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg  mb-2">2. Bunkering Methods:</h2>
            <ul className="list-disc pl-6 text-[#222] text-sm md:text-base">
              <li>
                <span className="font-medium">Ship-to-Ship (STS) Transfer</span> – Direct fueling via anchorage or offshore.
              </li>
              <li>
                <span className="font-medium">Truck-to-Ship (TTS) Delivery</span> – Transfer fuel by truck at port.
              </li>
              <li>
                <span className="font-medium">Pipeline Bunkering</span> – Ideal for vessels berthing at specialized terminals.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GetQuoteComponent topic="Bunkering"  link="/ship-agency-forms"/>
    </div>
  );
}
