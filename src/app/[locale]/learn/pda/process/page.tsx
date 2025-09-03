import GetQuoteComponent from "@/components/getQuoteComponent";
import Image from "next/image";
import FAQSearch from "@/components/faq";

export default function PDAProcessPage() {
  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: "Raleway, sans-serif" }}>
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Process</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Our PDA Process at Moon Navigation and Trading Co.
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a structured approach to prepare, adjust, and finalize the PDA, ensuring total accuracy and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Pre-Arrival Cost Estimation */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Step 1</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Pre-Arrival Cost Estimation
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We conduct thorough evaluation of vessel types, cargo specifications, and voyage profiles to create a detailed shipping estimate. Our team consults with port authorities as soon as your schedule is known to obtain the most accurate and up-to-date Official Port Disbursement Assessment (PDA) based on current tariffs, surcharges, and requirements for the projected port call.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  With this detailed and accurate estimate, our customers receive transparent, itemized cost breakdowns and can manage their shipping budgets effectively.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/p-pda-1.jpg" alt="Laptop showing shipping analytics with ship in background" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Real-Time Adjustments & Updates */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/p-pda-2.jpg" alt="Tablet with analytics in meeting room" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Step 2</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Real-Time Adjustments & Updates
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We prioritize transparency and communication in managing port operations for our clients. Our team closely monitors vessel movements and port activity for any changes in costs, surcharges, or requirements, and we provide real-time updates to your PDA as new information arises.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  This ensures you always receive the most fluid, accurate Port Disbursement Assessment—enabling you to make informed decisions and maintain full financial control throughout your vessel's stay.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  By staying in constant communication with both the port and our clients, we empower businesses to manage their shipping operations efficiently and confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Final Disbursement Account (FDA) Submission */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Step 3</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Final Disbursement Account (FDA) Submission
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We ensure a thorough and accurate financial process for the completion of each port call.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Our team prepares the <span className="font-medium text-gray-900">Final Disbursement Account</span> meticulously by verifying invoices and reconciling actual costs with the Port Disbursement Assessment.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  We provide our clients with a fully documented financial statement for the call, ensuring clarity and transparency in every transaction.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  With our commitment to financial accuracy and transparency, we empower businesses to confidently manage their shipping and maintain trust in their financial dealings.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/p-pda-3.jpg" alt="Businesswoman reviewing financial documents at port" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="PDA" link="/ship-agency-forms" />
      <FAQSearch category="ship-agency-services" />
    </main>
  );
}
