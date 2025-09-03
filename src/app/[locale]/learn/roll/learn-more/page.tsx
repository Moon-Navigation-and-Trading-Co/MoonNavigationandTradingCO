import Link from "next/link";
import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function LearnMore() {
    return (
        <>
        {/* Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>RoRo Solutions</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-6 leading-tight">
                Our <span className="text-black font-light">RORO Solutions</span>
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At Moon Navigation and Trading Co., we provide comprehensive RoRo shipping solutions designed for efficiency, reliability, and global reach.
              </p>
            </div>
          </div>
        </section>

        {/* RoRo Vessel Operations Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="order-2 lg:order-1 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Vessel Operations</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                    1. <span className="text-black font-light">RoRo Vessel Operations</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We offer state-of-the-art RoRo vessels equipped with specialized ramps and cargo decks to accommodate a wide range of rolling cargo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Cargo Loading & Unloading—</span>
                      <span className="text-gray-600">Seamless roll-on and roll-off operations for quick turnaround.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Dedicated RoRo Vessels—</span>
                      <span className="text-gray-600">Modern vessels designed specifically for wheeled cargo.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Safety & Securing—</span>
                      <span className="text-gray-600">Cargo tied down and secured to ensure safe transport.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Port-to-Port & Door-to-Door Solutions—</span>
                      <span className="text-gray-600">Tailored solutions for your specific needs.</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/roro-vessel-operations.jpg"
                    alt="RoRo vessel operations"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Heavy & Oversized Cargo Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/roroBulldozer.jpg"
                    alt="Heavy and oversized cargo"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Right: Text */}
              <div className="order-2 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Heavy Cargo</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                    2. <span className="text-black font-light">Heavy & Oversized Cargo</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For heavy or oversized equipment, our RoRo services provide a cost-effective and flexible shipping solution.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Machinery & Equipment—</span>
                      <span className="text-gray-600">Transporting construction machinery, mining equipment, and large vehicles.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Specialized Transport—</span>
                      <span className="text-gray-600">Handling oversized and over-dimensional cargo with precision.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Loading/Unloading Assistance—</span>
                      <span className="text-gray-600">On-site equipment to safely load and unload heavy items.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Custom Solutions—</span>
                      <span className="text-gray-600">Tailored handling for every type of heavy cargo.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Transport Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="order-2 lg:order-1 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Vehicle Transport</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                    3. <span className="text-black font-light">Vehicle Transport</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  RoRo services are widely used for transporting vehicles like cars, trucks, motorcycles, and buses between ports.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Global Vehicle Shipping—</span>
                      <span className="text-gray-600">Efficient transport of new and used vehicles worldwide.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Vehicle Storage & Delivery—</span>
                      <span className="text-gray-600">Temporary storage solutions and timely delivery to the destination.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Vehicle Inspection & Condition Reporting—</span>
                      <span className="text-gray-600">Ensuring vehicles are in optimal condition before transport.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Logistics Coordination—</span>
                      <span className="text-gray-600">Managing pickup, delivery, and customs clearance.</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/roro-vehicle-transport.jpg"
                    alt="Vehicle transport"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Fast & Flexible Turnaround Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="order-1 lg:order-1 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/roro-project-cargo.jpg"
                    alt="Project cargo"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Right: Text */}
              <div className="order-2 lg:order-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Fast Turnaround</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                    4. <span className="text-black font-light">Fast & Flexible Turnaround</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand the importance of quick turnaround times, and our RoRo services are designed for maximum efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Frequent Sailings—</span>
                      <span className="text-gray-600">Regular vessel departures to meet tight schedules.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Flexible Scheduling—</span>
                      <span className="text-gray-600">Quick adaptations to meet time-sensitive transport needs.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Minimal Port Time—</span>
                      <span className="text-gray-600">Efficient loading and unloading minimize delays.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Worldwide Coverage Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="order-2 lg:order-1 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Global Coverage</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                    5. <span className="text-black font-light">Worldwide Coverage</span>
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our RoRo services cover major global ports, offering flexibility and accessibility for your shipments.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Global Reach—</span>
                      <span className="text-gray-600">Connecting key international ports to ensure worldwide service.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Customs Clearance Assistance—</span>
                      <span className="text-gray-600">Handling paperwork for smooth border transit.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-black">Cross-Continental Routes—</span>
                      <span className="text-gray-600">Offering intercontinental RoRo shipping.</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right: Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/roro-global-network.jpg"
                    alt="Global network"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      <FAQSearch category="ro-ro-shipping" />
         </>
    )
}

