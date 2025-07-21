"use client"
import OverviewServicesTabs from "@/components/overview-services";
import Image from "next/image";
import dynamic from "next/dynamic";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import FAQSearch from "@/components/faq";

const VesselCarousel = dynamic(() => import("@/components/vessel-carousel"), { ssr: false });

const vessels = [
  { img: "/vc-1.jpg", title: "General Cargo Vessels" },
  { img: "/vc-2.jpg", title: "Bulk Carriers" },
  { img: "/vc-3.jpg", title: "Tankers" },
  { img: "/vc-4.jpg", title: "Container Ships" },
  { img: "/vc-5.jpg", title: "Offshore Support Vessels (OSVs)" },
  { img: "/vc-6.jpg", title: "Tugboats and Barges" },
  { img: "/vc-7.jpg", title: "Landing Craft & Ro-Ro Vessels" },
  { img: "/vc-8.jpg", title: "Crew Boats & Utility Boats" },
];
const industries=[
    {img:"/iv-1.jpg",title:"International Shipping and Freight"},
    {img:"/iv-2.jpg",title:"Offshore Oil and Gas Operations"},
    {img:"/iv-3.jpg",title:"Marine Consttuction Projects"},
    {img:"/iv-4.jpg",title:"Dredging and Port Development"},
    {img:"/iv-5.jpg",title:"Energy and Infrastructure Projects"},
    {img:"/iv-6.jpg",title:"Ship Suply and Crew Change Operations"},
]

function overview() {
  return (
    <>
      <div className="mt-10 mb-8">
        <Image src="/ve-1.jpg" alt="Vessel Hero" width={1280} height={350} className="rounded-[60px]" />
      </div>
      <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16">
        <div className="md:w-1/2 w-full flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-light text-[#256094] mb-6">
            Vessel Purchases<br />and Rentals
          </h2>
          <RequestQuoteButton>
            <Link href="/buy-rent-vessels-forms">
              Get Quote
            </Link>
          </RequestQuoteButton>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-start">
          <p className="text-gray-700 text-sm md:text-base mb-2 font-medium">
            Looking to buy or rent a vessel?
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We recognize the diverse needs of businesses and individuals in shipping and transport solutions. That is why we offer a comprehensive selection of high-quality vessels for sale and rental, tailored to meet your specific requirements. Our services ensure a seamless experience, whether you are seeking to acquire a vessel or finalize perfect charters. Trust us to provide exceptional options and expert guidance to fulfill your maritime needs efficiently at Moon Marine and Sea Trading Company.
          </p>
        </div>
      </div>
    </>
  );
}

function services() {
  return (
    <>
      <h2 className="text-4xl font-normal text-[#232B50] text-center mt-16 mb-8" style={{fontFamily: 'Raleway, sans-serif'}}>Types of Vessels Available for Sale:</h2>
      <div className="relative w-full max-w-7xl mx-auto">
      </div>
    <div className="relative w-full aspect-[16/9] mt-12 mb-8 rounded-[60px]">
      <Image
          src="/ve-2.jpg"
        alt="Vessel Solutions"
        fill
        className="object-cover rounded-[60px]"
        style={{ zIndex: 0 }}
        priority
      />
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-end"
        style={{ zIndex: 1 }}
      >
        <div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-xl w-full mr-0 md:mr-12"
          style={{ opacity: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-[#256094] mb-4">
            Vessel Solutions for Every<br />Need
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-2 font-medium">
            At Moon Marine and Sea Trading Company, we are providing vessels that embody durability and reliability, engineered to withstand harsh weather conditions and ensure the smooth safe delivery of your cargo.
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-2">
            Our offerings include customizable options, catering to a wide array of requirements—from specialized vessels designed for specific cargo types to versatile multipurpose vessels.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            With an extensive selection of vessels and leases, we enable you to select the ideal solution to meet your project’s demands. Furthermore, our cost-effective and scalable services ensure the optimum fit for both economic and rental options, and our expert solutions are accessible to all without compromising on quality.
          </p>
        </div>
      </div>
    </div>
      <VesselCarousel vessels={vessels} />
      <div className="relative w-full aspect-[16/9] mt-12 mb-8 rounded-[60px]">
        <Image
          src="/ve-3.jpg"
          alt="Vessel Rental Background"
          fill
          className="object-cover rounded-[60px]"
          style={{ zIndex: 0 }}
          priority
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center"
          style={{ zIndex: 1 }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto" style={{ opacity: 0.92 }}>
            <div className="flex-1 flex flex-col gap-6">
              <h4 className="text-base md:text-lg font-medium text-gray-700 mb-2">
                We offer the following services to ensure a seamless<br className="hidden md:block" />rental experience.
              </h4>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 3v4M17 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className=" text-gray-800">Rental Terms</div>
                    <div className="text-gray-600 text-sm">
                      Choose from daily, monthly, or long-term rental agreements to suit your needs.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><rect x="3" y="11" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </div>
                  <div>
                    <div className=" text-gray-800">Quick Delivery</div>
                    <div className="text-gray-600 text-sm">
                      Enjoy fast and efficient delivery directly to your location.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><path d="M4 17v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 17v-2m10 2v-2" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </div>
                  <div>
                    <div className=" text-gray-800">Maintenance Included</div>
                    <div className="text-gray-600 text-sm">
                      Rest assured that we handle all repairs and maintenance throughout your rental period.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-2xl md:text-3xl font-light text-[#232B50] mb-2" style={{fontFamily: 'Raleway, sans-serif'}}>
                Renting<br />Vessels
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buying Vessels Section (moved to bottom, smaller box) */}
      <div className="relative w-full aspect-[16/9] mt-12 mb-8 rounded-[60px]">
        <Image
          src="/ve-4.jpg"
          alt="Buying Vessels Background"
          fill
          className="object-cover rounded-[60px]"
          style={{ zIndex: 0 }}
          priority
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center"
          style={{ zIndex: 1 }}
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto" style={{ opacity: 0.92 }}>
            {/* Left column */}
            <div className="flex-1 flex flex-col justify-center items-start md:items-start">
              <div className="text-4xl md:text-5xl font-light text-black mb-4" style={{fontFamily: 'Raleway, sans-serif'}}>
                Buying<br />Vessels
              </div>
              <a href="#" className="text-[#256094] text-base md:text-lg font-normal mt-2 hover:underline">Seeking a permanent solution?</a>
            </div>
            {/* Right column */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-2xl md:text-3xl font-light text-[#256094] mb-6 text-left md:text-left" style={{fontFamily: 'Raleway, sans-serif'}}>
                Our Vessels offer the following benefits:
              </div>
              <div className="flex flex-col gap-7">
                {/* Benefit 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {/* Magnifying glass icon */}
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className=" text-gray-800">Ready for Immediate Use</div>
                    <div className="text-gray-600 text-sm">
                      Each vessel undergoes comprehensive inspections and is certified to meet stringent industry standards, ensuring reliability from day one.
                    </div>
                  </div>
                </div>
                {/* Benefit 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {/* Gears icon */}
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 8.6c.26-.1.54-.1.8 0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6c.1.26.1.54 0 .8a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" stroke="currentColor" strokeWidth="1.5"/></svg>
                  </div>
                  <div>
                    <div className=" text-gray-800">Customizable</div>
                    <div className="text-gray-600 text-sm">
                      Tailor your vessel with specialized equipment or advanced navigation systems to align perfectly with your operational requirements.
                    </div>
                  </div>
                </div>
                {/* Benefit 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {/* Dollar icon */}
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><path d="M12 3v18M17 7H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className=" text-gray-800">Cost-Effective</div>
                    <div className="text-gray-600 text-sm">
                      Our competitive pricing offers affordability while delivering long-term value, ensuring you make a wise investment without compromising on quality.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-700 mt-8 text-center md:text-left">
                Choose us, Moon Navigation and Trading Co. for a dependable and versatile solution that meets your needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="mt-16 w-full flex flex-col items-center">
      <div className=" w-full">
        <h2 className="text-2xl md:text-3xl  text-[#232B50] mb-2 text-center md:text-left">
          Purchase or Charter – What is Best for You?
        </h2>
        <div className="text-gray-700 text-sm mb-6 text-center md:text-left">
          We help you decide the best approach based on your operations, timeline, and budget.
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-[#232B50] text-white">
                <th className="py-3 px-4 text-left  border-r">Criteria</th>
                <th className="py-3 px-4 text-left  border-r">Purchase</th>
                <th className="py-3 px-4 text-left  border-r">Rental / Charter</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm">
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-medium border-r">Duration</td>
                <td className="py-3 px-4 border-r">Long-term operations</td>
                <td className="py-3 px-4 border-r">Short- or medium-term projects</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-medium border-r">Capital investment</td>
                <td className="py-3 px-4 border-r">Higher (asset ownership)</td>
                <td className="py-3 px-4 border-r">Lower operating expense</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-medium border-r">Flexibility</td>
                <td className="py-3 px-4 border-r">Less flexible</td>
                <td className="py-3 px-4 border-r">Highly flexible</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-medium border-r">Maintenance Responsibility</td>
                <td className="py-3 px-4 border-r">Owner’s responsibility</td>
                <td className="py-3 px-4 border-r">Often included in charter terms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* Four alternating info sections at the bottom */}
    <div className="w-full flex flex-col gap-12 mt-16 mb-8">
      {/* Charter Types We Offer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 rounded-[40px]">
        <div className="flex-1 min-w-[320px] md:pr-8">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Charter Types We Offer:</h2>
          <div className="text-gray-700 text-base mb-4">We provide multiple flexible chartering arrangements:</div>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Time Charter – Rent a vessel for a fixed time (crew included)</li>
            <li>Voyage Charter – Rent for a specific voyage or cargo movement</li>
            <li>Bareboat Charter – Rent the vessel only, without crew</li>
            <li>Project Charter – Custom solutions for marine projects</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <Image src="/ve-5.jpg" alt="Charter Types" width={540} height={320} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Our Process – Step by Step */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8  px-6 py-12 rounded-[40px]">
        <div className="flex-1 min-w-[320px] md:pl-8">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Our Process – Step by Step</h2>
          <div className="text-gray-700 text-base mb-4">Whether you are buying or renting, we simplify your experience:</div>
          <ol className="list-decimal pl-6 text-gray-800 text-base space-y-1">
            <li>Requirement Consultation – We understand your operation goals</li>
            <li>Vessel Sourcing – We identify matching vessels from our global network</li>
            <li>Technical Review – Surveys, classification & inspections</li>
            <li>Commercial Negotiation – We handle pricing and terms</li>
            <li>Contract & Documentation – Transparent and compliant paperwork</li>
            <li>Delivery Coordination – Smooth handover or project start</li>
            <li>Ongoing Support – After-sales or rental management</li>
          </ol>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <Image src="/ve-6.jpg" alt="Our Process" width={540} height={320} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Technical Support & Compliance */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8  px-6 py-12 rounded-[40px]">
        <div className="flex-1 min-w-[320px] md:pr-8">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Technical Support & Compliance</h2>
          <div className="text-gray-700 text-base mb-4">All vessels come with verified:</div>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Class Certification</li>
            <li>Flag Registration</li>
            <li>Insurance & Regulatory Compliance</li>
            <li>Pre-delivery inspection reports</li>
            <li>Crew availability (for chartered vessels)</li>
            <li>Maintenance records (for pre-owned units)</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <Image src="/ve-7.jpg" alt="Technical Support" width={540} height={320} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      {/* Customization Options */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8  px-6 py-12 rounded-[40px]">
        <div className="flex-1 min-w-[320px] md:pl-8">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Customization Options</h2>
          <div className="text-gray-700 text-base mb-4">We can arrange vessel modifications or outfitting to match your project:</div>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1">
            <li>Deck strength enhancements</li>
            <li>Cargo gear and crane additions</li>
            <li>Accommodation upgrades</li>
            <li>Communication & navigation systems</li>
            <li>Offshore safety equipment installation</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <Image src="/ve-8.jpg" alt="Customization Options" width={540} height={320} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-col ">
        <h2 className="text-2xl md:text-3xl  text-[#232B50] mb-2 md:text-left">
          Industries We Serve
        </h2>
        <div className="text-gray-700 text-sm mb-6  md:text-left">
          We serve a diverse range of industries, ensuring we provide the right vessel for your needs.
        </div>
        <VesselCarousel vessels={industries} />
    </div>
      {/* Global Delivery & Deployment section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 rounded-[40px] mt-12 mb-8 ">
        <div className="flex-1 min-w-[320px] md:pr-8">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">Global Delivery & Deployment</h2>
          <div className="text-gray-700 text-base mb-2">We support delivery of vessels to major ports and terminals worldwide.<br/>Whether local or international deployment, we coordinate:</div>
          <ul className="list-disc pl-6 text-gray-800 text-base space-y-1 mt-4">
            <li>Delivery voyage planning</li>
            <li>Crew change logistics</li>
            <li>Port handling & clearance</li>
            <li>Transit formalities</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-[540px] h-[320px] rounded-[80px] overflow-hidden bg-gray-200 flex items-center justify-center">
            <Image src="/ve-9.jpg" alt="Global Delivery & Deployment" width={540} height={320} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
      <GetQuoteComponent topic="Vessel Rental/Purchase" link="/buy-rent-vessels-forms" />
      <FAQSearch category="vessel-purchases-rentals"/>
    </>
  );
}

export default function VesselPage() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}
