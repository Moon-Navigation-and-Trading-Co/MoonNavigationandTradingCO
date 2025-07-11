import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function LearnMore() {
  return (
    <div>
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
              <img src="/lm-dry-1.jpg" alt="Cargo Classification and Planning" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
          {/* Solution 2 */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/lm-dry-2.jpg" alt="Space Optimization and Container Stuffing Guidance" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
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
              <img src="/lm-dry-3.jpg" alt="Customized Container Booking and Routing" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
          {/* Solution 4 */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/lm-dry-4.jpg" alt="Full Documentation and Customs Clearance Support" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
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
              <img src="/lm-dry-5.jpg" alt="Inland Transportation Coordination" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
            </div>
          </div>
          {/* Solution 6 */}
          <div>
            <div className="w-full rounded-2xl overflow-hidden mb-4">
              <img src="/lm-dry-6.jpg" alt="Cargo Supervision and Secure Container Sealing" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
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
              <img src="/lm-dry-7.jpg" alt="Loading/Unloading Assistance at Port or Final Destination" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
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
            <img src="/lm-dry-8.jpg" alt="Supporting Your Supply Chain" className="object-cover w-full h-48 md:h-56 rounded-2xl" />
          </div>
        </div>
      </div>
      </div>

      <GetQuoteComponent topic="Dry Container" link="/container-services-forms" />
      <FAQSearch category="standard-dry-container" />
    </div>
  );
}