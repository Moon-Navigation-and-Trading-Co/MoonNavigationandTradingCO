"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function DryContainerPage() {
  return (
    <div className="w-full max-w-7xl min-h-screen flex flex-col items-center py-8 px-2 md:px-0 mx-auto">
      {/* Hero Section */}
      <div className="w-full rounded-2xl overflow-hidden mb-12">
        <div className="relative w-full h-[340px] md:h-[400px]">
          <Image
            src="/container-standard-s.jpg"
            alt="Standard Dry Container"
            fill
            className="object-cover rounded-2xl"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mb-16">
        {/* Left: Title and Button */}
        <div className="flex-1 flex flex-col gap-6 justify-start">
          <h1 className="text-3xl md:text-4xl font-normal text-[#3B4B8C] dark:text-[#bfc8f8] leading-tight">
            Standard Dry Container Shipment
          </h1>
          <span className="text-base text-gray-500 dark:text-gray-300">
            Efficient, Secure, and Cost-Effective Shipping Solutions
          </span>
          <Link href="/container-services-forms">
            <button className="w-fit px-6 py-2 bg-[#3B4B8C] text-white rounded-full font-medium shadow hover:bg-[#2a3566] transition text-base mt-2">
              Request a Quote
            </button>
          </Link>
        </div>
        {/* Right: Description */}
        <div className="flex-[2] text-gray-700 dark:text-gray-200 text-base flex flex-col gap-6">
          <p>
            A Standard Dry Container is a fully enclosed, weatherproof container commonly used for transporting a wide variety of cargo. It offers strong protection from external elements and is the most widely used container type in global trade.
          </p>
          <p>
            At Moon Navigation and Trading Co., we offer reliable Standard Dry Container (FCL) services tailored to meet your cargo needs. Ideal for transporting general goods that do not require temperature control, our dry container solutions ensure safe, secure, and seamless delivery from origin to destination.
          </p>
        </div>
      </div>

      {/* Key Industries Section */}
      <div className="w-full max-w-7xl mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#3B4B8C] dark:text-[#bfc8f8] mb-2 px-2">
          Key Industries We Serve:
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-10 px-2">
          Our Standard Dry Shipment solutions are tailored for a wide range of industries, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 px-2">
          {/* Industry Cards */}
          <div className="flex flex-col items-center">
            <img src="/industry-retail.jpg" alt="Retail & Consumer Goods" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Retail & Consumer Goods</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-industrial.jpg" alt="Industrial & Manufacturing" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Industrial & Manufacturing</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-furniture.jpg" alt="Furniture & Home Appliances" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Furniture & Home Appliances</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-textiles.jpg" alt="Textiles & Garments" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Textiles & Garments</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-automotive.jpg" alt="Automotive & Spare Parts" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Automotive & Spare Parts</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-construction.jpg" alt="Construction & Building Materials" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Construction & Building Materials</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-food.jpg" alt="Food & Beverage (Non-Perishable)" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Food & Beverage (Non-Perishable)</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/industry-office.jpg" alt="Office Supplies & Stationery" className="rounded-2xl w-48 h-32 object-cover mb-3" />
            <span className="font-medium text-sm md:text-base text-center">Office Supplies & Stationery</span>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="w-full max-w-7xl mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#3B4B8C] dark:text-[#bfc8f8] mb-8 px-2">
          Standard Dry Containers vs. Specialized Container Types
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-[#23294d] rounded-2xl bg-white dark:bg-[#181c2a]">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#23294d]">
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Feature / Specification</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Standard Dry Container</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Reefer Container</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Open Top Container</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Flat Rack Container</th>
                <th className="px-4 py-3 text-left font-semibold border-b border-gray-300 dark:border-[#23294d]">Tank Container</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d]">Purpose</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">General cargo transport</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Temperature-controlled cargo</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Oversized or tall cargo</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Heavy or irregular cargo</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Liquid and chemical cargo</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-[#20243a]">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d]">Cargo Suitability</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Dry goods, cartons, pallets</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Food, pharmaceuticals, perishables</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Machinery, equipment, pipes</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Vehicles, machinery, boats</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Liquids, gases, chemicals</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d]">Temperature Control</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">No</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Adjustable -20°C to +25°C</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">No</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">No</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">No</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-[#20243a]">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d]">Size Availability</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">20ft / 40ft</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Usually 20ft</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d]">Special Features</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Fully enclosed, <b>weatherproof</b></td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Insulated walls, cooling unit</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Open roof, top-loading access</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">No side walls, collapsible ends</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Stainless steel tank, pressurized, insulated</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-[#20243a]">
                <td className="px-4 py-2 font-medium border-b border-gray-200 dark:border-[#23294d]">Typical Use Cases</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Consumer goods, textiles, electronics</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Frozen goods, dairy, medicines</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Construction cargo, large machines</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Construction, boats, oversized loads</td>
                <td className="px-4 py-2 border-b border-gray-200 dark:border-[#23294d]">Fuel, food-grade liquids, chemicals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

{/* Reasons Section */}
<div className="mt-16 mb-12 max-w-5xl mx-auto px-4">
  <h2 className="text-2xl md:text-3xl font-semibold text-left mb-16 text-[#3B4B8C] dark:text-[#bfc8f8]">
    Reasons to Choose Moon Navigation and Trading Co. for Your Dry Standard Container Shipments
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8 md:gap-x-16 lg:gap-x-32 justify-items-center">
    <div className="flex flex-col items-center text-center">
      <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
        Decades of freight forwarding expertise
      </span>
    </div>
    <div className="flex flex-col items-center text-center">
      <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
        Personalized logistics planning and container management
      </span>
    </div>
    <div className="flex flex-col items-center text-center">
      <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
        Competitive pricing and flexible schedules
      </span>
    </div>

    {/* Center bottom two items in the last row */}
    <div className="md:col-span-3 flex justify-center gap-x-16 px-4">
      <div className="flex flex-col items-center text-center px-4">
        <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
          Global partner network and port coverage
        </span>
      </div>
      <div className="flex flex-col items-center text-center px-4">
        <span className="font-medium text-base md:text-lg text-[#23294d] dark:text-[#e0e7ff] mb-1">
          Reliable service, responsive support, and professional handling
        </span>
      </div>
    </div>
  </div>
</div>


      {/* Solutions Section */}
      <div className="w-full max-w-7xl mx-auto mt-20 mb-12 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#3B4B8C] dark:text-[#bfc8f8]">
          Our Dry Standard Container Shipping Solutions
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-300 mb-8 max-w-3xl">
          At Moon Navigation and Trading Co., we offer more than just container bookings—we provide comprehensive, end-to-end solutions to ensure your standard dry container shipments are transported efficiently, securely, and in full compliance with international logistics standards. Our services are tailored to simplify your supply chain, reduce transit risks, and ensure smooth cargo movement from origin to destination.
        </p>
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Solution 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">1. Cargo Classification and Planning</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              Before shipment, our experts assess your cargo's nature, dimensions, and packaging to determine the most efficient container configuration. We help you plan the right load capacity to reduce wasted space and ensure safe transit—whether it's palletized goods, cartons, or oversized units.
            </p>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-cargo-planning.jpg" alt="Cargo Classification and Planning" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
          {/* Solution 2 */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-space-optimization.jpg" alt="Space Optimization and Container Stuffing Guidance" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">2. Space Optimization and Container Stuffing Guidance</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              Proper space utilization is key to cost savings and cargo safety. We provide detailed stuffing plans, cargo securing methods, and weight distribution strategies to prevent shifting or damage during transit. Our team ensures that your goods are packed logically and securely to maximize efficiency and minimize risks.
            </p>
          </div>
          {/* Solution 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">3. Customized Container Booking and Routing</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              We offer flexible and reliable container booking options based on your cargo type, destination, transit time, and budget goals. Our global partner network allows us to coordinate the best shipping schedules and routing solutions, ensuring timely departures and arrivals at your desired ports.
            </p>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-booking-routing.jpg" alt="Customized Container Booking and Routing" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
          {/* Solution 4 */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-documentation.jpg" alt="Full Documentation and Customs Clearance Support" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">4. Full Documentation and Customs Clearance Support</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              Shipping success depends on accurate paperwork. We handle all required export/import documentation, including:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-700 dark:text-gray-200 mb-4">
              <li>Commercial invoices</li>
              <li>Packing lists</li>
              <li>Bills of Lading</li>
              <li>Certificates of origin</li>
              <li>Cargo manifest submissions</li>
              <li>Customs declarations</li>
              <li>Our experienced team ensures full compliance with international trade regulations, reducing the risk of customs delays or penalties.</li>
            </ul>
          </div>
          {/* Solution 5 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">5. Inland Transportation Coordination</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              Beyond sea freight, we manage the first-mile and last-mile delivery of your containers. Whether it is trucking from your factory to the port or delivery to your consignee's warehouse, we ensure smooth and timely inland movement of your cargo using our network of reliable local transport partners.
            </p>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-inland-transport.jpg" alt="Inland Transportation Coordination" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
          {/* Solution 6 */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-cargo-sealing.jpg" alt="Cargo Supervision and Secure Container Sealing" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">6. Cargo Supervision and Secure Container Sealing</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              We oversee the loading process to ensure cargo is handled properly and secured inside the container. Once packed, containers are sealed with tamper-proof seals to ensure cargo integrity throughout the journey. Our team follows standard sealing protocols for both FCL and LCL shipments.
            </p>
          </div>
          {/* Solution 7 */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#23294d] dark:text-[#e0e7ff]">7. Loading/Unloading Assistance at Port or Final Destination</h3>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-4">
              To support your operations end-to-end, we also arrange for on-site loading/unloading teams at port terminals or final destinations. Whether its forklifts, cranes, or labor assistance, we ensure safe cargo handling, especially for bulky or heavy goods.
            </p>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/dry-loading-unloading.jpg" alt="Loading/Unloading Assistance at Port or Final Destination" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 mt-20 mb-12 px-2 md:px-0">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#23294d] dark:text-[#bfc8f8] mb-2">
            Supporting Your Supply Chain, Every Step of the Way
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-200">
            From origin pickup to final delivery, Moon Navigation and Trading Co. is committed to offering a seamless, transparent, and professional container shipping experience. Our standard container solutions are designed to reduce complexity, save time, and empower your business to scale efficiently.
          </p>
        </div>
        <div className="flex-1">
          <div className="w-full rounded-2xl overflow-hidden">
            <img src="/dry-supply-chain.jpg" alt="Supporting Your Supply Chain" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
          </div>
        </div>
      </div>
       <section className="w-full bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
                          {/* Left: Text Content */}
                          <div className="flex-1 min-w-[260px]">
                              <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                  Get your Quote with Us
                              </h2>
                              <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                  Our steamlined standard dry container quotation process is designed for speed and accuracy. At Moon
                                  Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by
                                  Request system. Simply fill out our short form to initiate your request. Once submitted, our team
                                  will assess your cargo's size, weight, handling requirements, and route feasibility to determine
                                  the best transport solution. You will receive a customized quotation directly in your email,
                                  ensuring accurate pricing, safe handling, and seamless delivery of your cargo.
                              </p>
                              <Link href="/container-services-forms" passHref legacyBehavior>
                                  <a className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium text-sm hover:bg-primary/90 transition-colors">
                                      Request a Quote
                                  </a>
                              </Link>
                          </div>
                          {/* Right: Image */}
                          <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
                              <img
                                  src="/quote-illustration.png"
                                  alt="Quotation illustration"
                                  className="w-[320px] h-auto object-contain"
                                  style={{ maxWidth: 380 }}
                              />
                          </div>
                      </section>
    </div>
  );
}
