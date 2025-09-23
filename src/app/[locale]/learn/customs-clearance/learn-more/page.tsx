"use client";

import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function CustomsClearanceLearnMore() {
  return (
    <>
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Customs Clearance</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-6 leading-tight">
              Our <span className="text-black font-light">Customs and Clearance Services</span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Moon Navigation and Trading Co., we excel in processing customs clearances while ensuring compliance with laws to facilitate seamless import and export operations.
            </p>
          </div>
        </div>
      </section>

      {/* Import and Export Customs Clearance Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Import & Export</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                  1. <span className="text-black font-light">Import and Export Customs Clearance</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We excel in processing customs clearances while ensuring compliance with laws to facilitate seamless import and export operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Import Duties & Tariffs—</span>
                    <span className="text-gray-600">Handling import duties, tariffs, and fee exemptions with expertise.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Cost-Effective Solutions—</span>
                    <span className="text-gray-600">Providing tailored clearance solutions for each client&apos;s needs.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Regulatory Compliance—</span>
                    <span className="text-gray-600">Ensuring all paperwork adheres to necessary regulations.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Fast Processing—</span>
                    <span className="text-gray-600">Delivering fast and compliant import/export processing for all cargo types.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/lc-1.jpg"
                  alt="Customs clearance worker with shipping containers"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duty and Tax Optimization Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/lc-2.jpg"
                  alt="Business person analyzing duty and tax documents"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Right: Text Content */}
            <div className="order-2 lg:order-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Tax Optimization</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                  2. <span className="text-black font-light">Duty and Tax Optimization</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in identifying duty exemptions and preferential tariff programs to help clients maximize their savings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Free Trade Agreements—</span>
                    <span className="text-gray-600">Leveraging FTAs to minimize import and export levies.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Customs Valuations—</span>
                    <span className="text-gray-600">Ensuring accurate tax assessments to avoid unnecessary expenses.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Preferential Tariffs—</span>
                    <span className="text-gray-600">Customizing to the most favorable trade scenarios available.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Financial Optimization—</span>
                    <span className="text-gray-600">Enhancing profit margins while navigating international trade complexities.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Cargo and Regulatory Compliance Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Special Cargo</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                  3. <span className="text-black font-light">Special Cargo and Regulatory Compliance</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide customs clearance services tailored for temperature, perishable, and high-value cargo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Special Permits—</span>
                    <span className="text-gray-600">Obtaining permits for restricted goods like pharmaceuticals and chemicals.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">International Trade Barriers—</span>
                    <span className="text-gray-600">Assistance with SPS, TBT, and WTO regulations.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Sensitive Cargo—</span>
                    <span className="text-gray-600">Guaranteeing secure and speedy clearance of sensitive cargo.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Compliance Expertise—</span>
                    <span className="text-gray-600">Ensuring compliance with necessary regulations for all cargo types.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/lc-3.jpg"
                  alt="Customs officer inspecting special cargo at port"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Documentation and Customs Brokerage Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/lc-4.jpg"
                  alt="Customs broker preparing shipping documents at a desk with a port view"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Right: Text Content */}
            <div className="order-2 lg:order-2 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Documentation</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                  4. <span className="text-black font-light">Trade Documentation and Customs Brokerage</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in the meticulous preparation of key shipping documents essential for seamless trade operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Shipping Documents—</span>
                    <span className="text-gray-600">Creating Bill of Lading, Commercial Invoices, and Packing Lists.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Electronic Filing—</span>
                    <span className="text-gray-600">Electronic Customs Filing for faster clearance and minimal delays.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Trade Finance—</span>
                    <span className="text-gray-600">Handling Letters of Credit and other trade finance documents.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Accurate Documentation—</span>
                    <span className="text-gray-600">Ensuring all documentation is accurate and compliant with regulations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonded Warehousing and Free Zones Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Warehousing</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-black mb-4 leading-tight">
                  5. <span className="text-black font-light">Bonded Warehousing and Free Zones</span>
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer secure storage solutions for cargo awaiting customs clearance, ensuring peace of mind during the import process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Duty-Free Zones—</span>
                    <span className="text-gray-600">Access to Duty-Free Zones and Bonded Warehousing solutions.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Re-Export Solutions—</span>
                    <span className="text-gray-600">Specifically designed for re-export operations.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Deferred Payments—</span>
                    <span className="text-gray-600">Deferred Tax and Duty Payment options to reduce cash flow risk.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <span className="font-medium text-black">Operational Efficiency—</span>
                    <span className="text-gray-600">Maximizing operational efficiency while navigating international trade.</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/lc-5.jpg"
                  alt="Bonded warehousing with customs officer and shipping containers"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Customs Clearance" link="/other-logistics-services-forms"/>
      <FAQSearch category="customs-clearance" />
    </>
  );
}
