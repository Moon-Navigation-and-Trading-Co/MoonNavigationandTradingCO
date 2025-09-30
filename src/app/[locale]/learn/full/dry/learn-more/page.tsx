import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";

export default function LearnMore() {
  return (
    <main className="flex-1 flex flex-col gap-12 sm:gap-16 md:gap-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Solutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Dry Standard Container Shipping Solutions
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At Moon Navigation and Trading Co., we offer more than just container bookings—we provide comprehensive, end-to-end solutions to ensure your standard dry container shipments are transported efficiently, securely, and in full compliance with international logistics standards. Our services are tailored to simplify your supply chain, reduce transit risks, and ensure smooth cargo movement from origin to destination.
            </p>
          </div>
        </div>
      </section>
      {/* Solution 1: Cargo Classification and Planning */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Planning & Assessment</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Cargo Classification and Planning
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Before shipment, our experts assess your cargo's nature, dimensions, and packaging to determine the most efficient container configuration. We help you plan the right load capacity to reduce wasted space and ensure safe transit—whether it's palletized goods, cartons, or oversized units.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-1.jpg" alt="Cargo Classification and Planning" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solution 2: Space Optimization */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-2.jpg" alt="Space Optimization and Container Stuffing Guidance" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Space Optimization</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Container Stuffing Guidance
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Proper space utilization is key to cost savings and cargo safety. We provide detailed stuffing plans, cargo securing methods, and weight distribution strategies to prevent shifting or damage during transit. Our team ensures that your goods are packed logically and securely to maximize efficiency and minimize risks.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solution 3: Container Booking and Routing */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Booking & Routing</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Customized Container Booking and Routing
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                We offer flexible and reliable container booking options based on your cargo type, destination, transit time, and budget goals. Our global partner network allows us to coordinate the best shipping schedules and routing solutions, ensuring timely departures and arrivals at your desired ports.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-3.jpg" alt="Customized Container Booking and Routing" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solution 4: Documentation and Customs */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-4.jpg" alt="Full Documentation and Customs Clearance Support" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Documentation & Customs</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Full Documentation and Customs Clearance Support
              </h3>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Shipping success depends on accurate paperwork. We handle all required export/import documentation, including:
                </p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Commercial invoices</span> and packing lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Bills of Lading</span> and certificates of origin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Cargo manifest submissions</span> and customs declarations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><span className="font-medium">Full compliance</span> with international trade regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solution 5: Inland Transportation */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Transportation</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Inland Transportation Coordination
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Beyond sea freight, we manage the first-mile and last-mile delivery of your containers. Whether it's trucking from your factory to the port or delivery to your consignee's warehouse, we ensure smooth and timely inland movement of your cargo using our network of reliable local transport partners.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-5.jpg" alt="Inland Transportation Coordination" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solution 6: Cargo Supervision */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-6.jpg" alt="Cargo Supervision and Secure Container Sealing" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Cargo Security</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Cargo Supervision and Secure Container Sealing
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                We oversee the loading process to ensure cargo is handled properly and secured inside the container. Once packed, containers are sealed with tamper-proof seals to ensure cargo integrity throughout the journey. Our team follows standard sealing protocols for both FCL and LCL shipments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Solution 7: Loading/Unloading Assistance */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Port Operations</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Loading/Unloading Assistance
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed">
                To support your operations end-to-end, we also arrange for on-site loading/unloading teams at port terminals or final destinations. Whether it's forklifts, cranes, or labor assistance, we ensure safe cargo handling, especially for bulky or heavy goods.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-7.jpg" alt="Loading/Unloading Assistance at Port or Final Destination" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Supporting Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-dry-8.jpg" alt="Supporting Your Supply Chain" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>End-to-End Support</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Supporting Your Supply Chain, Every Step of the Way
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                From origin pickup to final delivery, Moon Navigation and Trading Co. is committed to offering a seamless, transparent, and professional container shipping experience. Our standard container solutions are designed to reduce complexity, save time, and empower your business to scale efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Dry Container" link="/container-services-forms" />
      <FAQSearch category="standard-dry-container" />
    </main>
  );
}