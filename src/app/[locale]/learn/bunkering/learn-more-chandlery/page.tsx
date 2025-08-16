import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
  
export default function LearnMoreChandleryPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl md:text-3xl mb-8 text-gray-900 dark:text-white">
          Ship Chandlery Services – At Moon Navigation and Trading Co.
        </h1>
        <p className="text-[#444] dark:text-gray-300 text-sm md:text-base mb-10">
          A well-supplied vessel is crucial for smooth maritime operations. Our ship chandlery services ensure vessels are fully supplied with everything they need, from provisions to engine parts.
        </p>
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-lg mb-2 text-gray-900 dark:text-white">1. Deck and Engine Stores</h2>
            <ul className="list-disc pl-6 text-[#222] dark:text-white text-sm md:text-base mb-4 space-y-1">
              <li>Pipes, Mooring Lines and Rigging Equipment – For ship berthing and anchorage</li>
              <li>Paints, Coatings and Corrosion Protection – Ensuring hull durability and rust prevention</li>
              <li>Tools, Cleaning Equipment and Safety Items – For all maintenance and operations needs</li>
              <li>Spare Parts for Engines and Auxiliaries – Ensuring smooth ongoing repairs</li>
              <li>Safety Gear and Firefighting Equipment – Meeting SOLAS and ISM safety regulations</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-sm md:max-w-md flex justify-center">
              <Image
                src="/lm-chandlery-1.jpg"
                alt="Deck & Engine Stores"
                width={400}
                height={275}
                className="w-full h-[260px] md:h-[320px] object-cover"
                style={{ aspectRatio: '16/11' }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
            <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-sm md:max-w-md flex justify-center">
              <Image
                src="/lm-chandlery-2.jpg"
                alt="Provisions & Catering Supplies"
                width={400}
                height={275}
                className="w-full h-[260px] md:h-[320px] object-cover"
                style={{ aspectRatio: '16/11' }}
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-lg mb-2 text-gray-900 dark:text-white">2. Provisions and Catering Supplies</h2>
            <ul className="list-disc pl-6 text-[#222] dark:text-white text-sm md:text-base space-y-1">
              <li>Fresh and Frozen Food – Fruits, vegetables, meat, seafood, dairy, and bakery products</li>
              <li>Dry Goods and Beverages – Coffee, tea, canned goods, and snacks</li>
              <li>Bonded and Hygiene Supplies – Fine wines and spirits, toiletries, and personal care products</li>
              <li>Cooking Utensils and Galley Gear – Essential for creating well-equipped kitchens for crew meals</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="flex-1">
            <h2 className="text-lg mb-2 text-gray-900 dark:text-white">3. Bonded Stores and Duty-Free Items</h2>
            <ul className="list-disc pl-6 text-[#222] dark:text-white text-sm md:text-base space-y-1">
              <li>
                Tobacco and Alcohol – Cigarettes, cans, beer, wine, and spirits
              </li>
              <li>
                Soft Drinks and Snacks – Energy drinks, juices, chips, and confectionery
              </li>
              <li>
                Electronics and Medical Items – TV screens, radios, tablets, and emergency essentials
              </li>
              <li>
                Cleaning Agents and Detergents – Laundry, dishwashing, and industrial cleaning supplies
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md w-full max-w-sm md:max-w-md flex justify-center">
              <Image
                src="/lm-chandlery-3.jpg"
                alt="Bonded Stores & Duty-Free Items"
                width={400}
                height={275}
                className="w-full h-[260px] md:h-[320px] object-cover"
                style={{ aspectRatio: '16/11' }}
              />
            </div>
          </div>
        </div>
        <GetQuoteComponent topic="Ship Chandlery Services" link="/ship-agency-forms" />
        <FAQSearch category="bunkering" />
      </div>
    </div>
  );
}
