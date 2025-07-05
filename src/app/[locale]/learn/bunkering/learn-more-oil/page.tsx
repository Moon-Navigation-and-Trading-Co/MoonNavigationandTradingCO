import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function LearnMoreOilPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl mb-8 text-gray-900 dark:text-white">
          Oil and Lubricants Supply - At Moon Navigation and Trading Co.
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="flex-1">
            <h2 className="text-lg mb-2 text-gray-900 dark:text-white">Types of Marine Lubricants We Provide:</h2>
            <ul className="list-none pl-0 text-[#222] dark:text-white text-sm md:text-base space-y-2">
              <li>
                <span className="mr-2" aria-hidden="true">✔️</span>
                <span className="font-medium">Main Engine and Auxiliary Engine Oils</span> – Reduce friction and enhance engine performance
              </li>
              <li>
                <span className="mr-2" aria-hidden="true">✔️</span>
                <span className="font-medium">Hydraulic and Gear Oils</span> – Essential for winches, steering gears, and hydraulic systems
              </li>
              <li>
                <span className="mr-2" aria-hidden="true">✔️</span>
                <span className="font-medium">Turbine and Compressor Lubricants</span> – Prevent overheating and maintain efficiency
              </li>
              <li>
                <span className="mr-2" aria-hidden="true">✔️</span>
                <span className="font-medium">Cylinder Lubricants</span> – Specifically designed for two-stroke and four-stroke engines
              </li>
              <li>
                <span className="mr-2" aria-hidden="true">✔️</span>
                <span className="font-medium">Greases and Specialty Fluids</span> – For deck machinery, bearings, and delicate components
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/lm-oil-1.jpg"
                alt="Oil & Lubricants Shelf"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
        
        <GetQuoteComponent topic="Oil & Lubricants Supply" link="/ship-agency-forms" />
        <FAQSearch category="bunkering" />
      </div>
    </div>
  );
}
