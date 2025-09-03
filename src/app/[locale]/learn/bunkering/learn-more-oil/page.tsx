import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Droplets, Settings, Gauge, Wrench, Shield } from "lucide-react";

export default function LearnMoreOilPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto mb-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Droplets className="w-4 h-4" />
            <span>Premium Marine Lubricants</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            Oil and Lubricants Supply
        </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            We are dedicated to providing critical oil supply services that enhance the performance and longevity of vessels. Our comprehensive range of premium-grade marine oils and lubricants ensures reliable operation of your fleet.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Types of Marine Lubricants Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                  <Settings className="w-4 h-4" />
                  <span>Engine Performance</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Types of Marine Lubricants We Provide
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Main Engine and Auxiliary Engine Oils</h3>
                      <p className="text-gray-600 leading-relaxed">Reduce friction and enhance engine performance with our specialized lubricants designed for marine applications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Hydraulic and Gear Oils</h3>
                      <p className="text-gray-600 leading-relaxed">Essential for winches, steering gears, and hydraulic systems, ensuring smooth operation and extended equipment life.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Turbine and Compressor Lubricants</h3>
                      <p className="text-gray-600 leading-relaxed">Prevent overheating and maintain efficiency in critical machinery with our high-performance lubricants.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Cylinder Lubricants</h3>
                      <p className="text-gray-600 leading-relaxed">Specifically designed for two-stroke and four-stroke engines, providing optimal protection and performance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Wrench className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                                             <h3 className="text-base font-medium text-gray-900 mb-2">Greases and Specialty Fluids</h3>
                      <p className="text-gray-600 leading-relaxed">For deck machinery, bearings, and delicate components, ensuring reliable operation in harsh marine environments.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Performance Optimized</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Equipment Protection</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Extended Life</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Quality Assured</span>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/lm-oil-1.jpg" alt="Oil & Lubricants Shelf" fill className="object-cover" />
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
                Your Trusted Oil and Lubricants Partner
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leveraging our extensive network and expertise, we are committed to delivering the right oil and lubricants, on time, ensuring your vessels operate efficiently and reliably at all times.
              </p>
            </div>
          </div>
        </section>
        </div>
        
        <GetQuoteComponent topic="Oil & Lubricants Supply" link="/ship-agency-forms" />
        <FAQSearch category="bunkering" />
    </div>
  );
}
