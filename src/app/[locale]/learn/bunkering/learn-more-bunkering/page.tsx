import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Fuel, Ship, Truck, Zap } from "lucide-react";

export default function LearnMoreBunkeringPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>


      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Fuel className="w-4 h-4" />
            <span>Marine Fuel Supply</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Bunkering Services (Marine Fuel Supply)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We are dedicated to providing critical bunkering services that enhance the performance and efficiency of vessels. Our comprehensive range of high-quality marine fuels ensures reliable operation of your fleet.
          </p>
        </div>

        {/* Types of Marine Fuels Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <Fuel className="w-4 h-4" />
                  <span>Marine Fuel Types</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Types of Marine Fuels We Provide
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-1">Very Low Sulfur Fuel Oil (VLSFO)</h3>
                      <p className="text-gray-600">IMO 2020 compliant fuel for environmental regulations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-1">Marine Gas Oil (MGO) and Marine Diesel Oil (MDO)</h3>
                      <p className="text-gray-600">Cleaner-burning alternatives for enhanced efficiency</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-1">Heavy Fuel Oil (HFO)</h3>
                      <p className="text-gray-600">For specific vessel requirements and operational needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-1">HFO and Alternate Fuels</h3>
                      <p className="text-gray-600">Sustainable, eco-friendly options for modern vessels</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">IMO 2020 Compliant</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Environmental Standards</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Quality Assured</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Full Documentation</span>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/lm-bunkering-2.jpg" alt="Bunkering Ship at Dock" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bunkering Methods Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/lm-bunkering-3.jpg" alt="Bunkering Truck and Ship" fill className="object-cover" />
                </div>
              </div>

              <div className="order-2 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Bunkering Methods</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Bunkering Methods
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Ship className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Ship-to-Ship (STS) Transfer</h3>
                      <p className="text-gray-600 leading-relaxed">Direct fueling via anchorage or offshore locations, providing maximum flexibility for vessels that cannot berth at traditional bunkering facilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Truck-to-Ship (TTS) Delivery</h3>
                      <p className="text-gray-600 leading-relaxed">Transfer fuel by truck at port, ideal for vessels with limited bunkering infrastructure or requiring smaller fuel quantities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Fuel className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Pipeline Bunkering</h3>
                      <p className="text-gray-600 leading-relaxed">Ideal for vessels berthing at specialized terminals, offering high-volume fuel transfer with maximum efficiency and safety.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Flexible Solutions</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Safety First</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Efficient Transfer</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Global Coverage</span>
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
                Your Trusted Bunkering Partner
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We ensure your vessels receive the highest quality marine fuels with complete documentation, regulatory compliance, and round-the-clock support for all your bunkering needs.
              </p>
            </div>
          </div>
        </section>
      </div>

      <GetQuoteComponent topic="Bunkering" link="/ship-agency-forms"/>
      <FAQSearch category="bunkering" />
    </div>
  );
}
