import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Package, Utensils, Shield, Wrench, ShoppingCart, CheckCircle } from "lucide-react";
  
export default function LearnMoreChandleryPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto mb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            <span>Complete Ship Supplies</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Ship Chandlery Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            A well-supplied vessel is crucial for smooth maritime operations. Our ship chandlery services ensure vessels are fully supplied with everything they need, from provisions to engine parts, with global coverage and quality assurance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Deck and Engine Stores Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <Wrench className="w-4 h-4" />
                  <span>Technical Equipment</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Deck and Engine Stores
                </h2>
                
                <div className="space-y-4">
                                     <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Pipes, Mooring Lines and Rigging Equipment</h3>
                       <p className="text-gray-600">For ship berthing and anchorage operations</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Paints, Coatings and Corrosion Protection</h3>
                       <p className="text-gray-600">Ensuring hull durability and rust prevention</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Tools, Cleaning Equipment and Safety Items</h3>
                       <p className="text-gray-600">For all maintenance and operations needs</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Spare Parts for Engines and Auxiliaries</h3>
                       <p className="text-gray-600">Ensuring smooth ongoing repairs and maintenance</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Safety Gear and Firefighting Equipment</h3>
                       <p className="text-gray-600">Meeting SOLAS and ISM safety regulations</p>
                     </div>
                   </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Safety Compliant</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Quality Equipment</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Maintenance Ready</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Regulatory Standards</span>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/lm-chandlery-1.jpg" alt="Deck & Engine Stores" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Provisions and Catering Supplies Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/lm-chandlery-2.jpg" alt="Provisions & Catering Supplies" fill className="object-cover" />
                </div>
              </div>

              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <Utensils className="w-4 h-4" />
                  <span>Crew Provisions</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Provisions and Catering Supplies
                </h2>
                
                <div className="space-y-4">
                                     <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Fresh and Frozen Food</h3>
                       <p className="text-gray-600">Fruits, vegetables, meat, seafood, dairy, and bakery products</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Dry Goods and Beverages</h3>
                       <p className="text-gray-600">Coffee, tea, canned goods, and snacks for crew sustenance</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Bonded and Hygiene Supplies</h3>
                       <p className="text-gray-600">Fine wines and spirits, toiletries, and personal care products</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Cooking Utensils and Galley Gear</h3>
                       <p className="text-gray-600">Essential for creating well-equipped kitchens for crew meals</p>
                     </div>
                   </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Fresh Quality</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Crew Welfare</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Complete Kitchens</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Bonded Items</span>
          </div>
        </div>
            </div>
          </div>
        </section>

        {/* Bonded Stores Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Duty-Free Items</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Bonded Stores and Duty-Free Items
                </h2>
                
                <div className="space-y-4">
                                     <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Tobacco and Alcohol</h3>
                       <p className="text-gray-600">Cigarettes, cans, beer, wine, and spirits for crew comfort</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Soft Drinks and Snacks</h3>
                       <p className="text-gray-600">Energy drinks, juices, chips, and confectionery</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Electronics and Medical Items</h3>
                       <p className="text-gray-600">TV screens, radios, tablets, and emergency essentials</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3">
                     <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                     <div>
                       <h3 className="text-base font-medium text-gray-900 mb-1">Cleaning Agents and Detergents</h3>
                       <p className="text-gray-600">Laundry, dishwashing, and industrial cleaning supplies</p>
                     </div>
                   </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Duty-Free</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Crew Comfort</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Emergency Supplies</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Cleaning Products</span>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/lm-chandlery-3.jpg" alt="Bonded Stores & Duty-Free Items" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Trust Statement */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100">
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
                Your Complete Ship Chandlery Partner
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our service is available globally, ensuring your vessel receives the right products wherever you operate, with complete compliance and quality assurance for all your maritime supply needs.
              </p>
            </div>
          </div>
        </section>
        </div>

        <GetQuoteComponent topic="Ship Chandlery Services" link="/ship-agency-forms" />
        <FAQSearch category="bunkering" />
    </div>
  );
}
