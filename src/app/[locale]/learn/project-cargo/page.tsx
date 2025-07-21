"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ProjectCargoCarousel from "@/components/project-cargo-carousel";
import ReasonsGrid from "@/components/ReasonsGrid";

//seo

function overview() {
  const t = useTranslations("learn-project-cargo");
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full mt-10 mb-16">
        <div className="rounded-[60px] overflow-hidden w-full h-[400px] mb-12">
          <Image
            src="/project-cargo-hero.jpg"
            alt="Project Cargo - Oversized and Heavy Lift Logistics by Moon Navigation and Trading Co."
            width={1600}
            height={600}
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full ">
          {/* Left: Title and Button */}
          <div className="flex-1 flex flex-col items-start justify-center pl-8">
            <h1 className="text-5xl font-normal mb-12 text-[#222] dark:text-white text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Project Cargo<br />Services</h1>
            <Link href="/ocean-freight-forms" title="Request a Project Cargo Quote">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          {/* Right: What is Project Cargo */}
          <div className="flex-1 flex flex-col justify-center pr-8">
            <h2 className="text-2xl font-normal mb-4 text-[#3846a5] dark:text-blue-400 text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>What is Project Cargo?</h2>
            <p className="text-base leading-relaxed text-[#444] dark:text-gray-300 mb-4 text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              Project cargo in ocean freight entails the transportation of large, heavy, high-value or complex pieces of equipment and materials. At Moon Navigation and Trading Co., we specialize in managing these specialized shipments, which are intricately linked to specific projects and require meticulous handling, specialized equipment, and precise coordination.
            </p>
            <p className="text-base leading-relaxed text-[#444] dark:text-gray-300 text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              We understand that ensuring the safe and timely delivery of project cargo is vital for the successful execution of industrial and infrastructure projects. Our dedicated team is committed to providing comprehensive solutions that address the unique challenges of project cargo logistics, making this a critical aspect of services in global trade.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function services() {
  const t = useTranslations("learn-project-cargo");
  return (
    <div className="space-y-32">
      {/* Project Cargo Carousel */}
      <ProjectCargoCarousel />

      <section className="max-w-7xl mx-auto w-full mt-10 mb-16">
        <h2 className="text-3xl font-normal mb-10 text-left font-sans text-gray-900 dark:text-white mb-10" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
          Key Differences between Project Cargo and Standard Cargo
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#3846a5] dark:border-blue-400 rounded-xl text-base bg-white dark:bg-gray-800" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            <thead>
              <tr className="bg-[#f5f8ff] dark:bg-blue-900/20 border-b border-[#3846a5] dark:border-blue-400">
                <th className="px-4 py-3 border-r border-[#3846a5] dark:border-blue-400 font-bold text-left text-black dark:text-white">Feature</th>
                <th className="px-4 py-3 border-r border-[#3846a5] dark:border-blue-400 font-bold text-left text-black dark:text-white">Project Cargo</th>
                <th className="px-4 py-3 font-bold text-left text-black dark:text-white">Standard Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Size and Weight</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Oversized, heavy, and irregular-shaped items</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Standard-sized goods that fit in containers or pallets</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Handling Requirements</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Requires specialized handling (cranes, flat racks, heavy-lift vessels, RoRo, breakbulk)</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Handled using conventional shipping methods (pallets, boxes, containers)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Logistics Complexity</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">High – involves route surveys, permits, customs clearances, and infrastructure adjustments</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Low – follows standard transportation procedures</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Transport Equipment</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Heavy-lift vessels, modular trailers, open-top containers, SPMTs</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Standard containers (20ft, 40ft), trucks, forklifts</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Time Sensitivity</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Often critical for large-scale projects, delays can be costly</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">More flexible in transit schedules</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Industries Served</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Energy, construction, oil and gas, mining, infrastructure</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Retail, electronics, textiles, consumer goods</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Risk and Insurance</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Higher risk due to size and complexity, requires specialized insurance</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Lower risk, covered by standard cargo insurance</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Shipping Cost</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 border-r align-top text-gray-900 dark:text-white">Higher due to special handling, permits, and logistics planning</td>
                <td className="px-4 py-3 border-t border-[#3846a5] dark:border-blue-400 align-top text-gray-900 dark:text-white">Lower, based on weight, volume, and standard tariffs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-8">
          <Link href="/learn/project-cargo/learn-more"> 
            <RequestQuoteButton>
              Learn More About Our Project Cargo Solutions 
            </RequestQuoteButton>
          </Link> 
        </div>
      </section>

      {/* Why is project cargo unique? Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-0 mt-16 mb-16">
        <h2 className="text-2xl font-normal mb-8 text-[#3846a5] dark:text-blue-400 text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Why is project cargo unique?</h2>
        <div className="relative">
          <div className="border border-gray-200 dark:border-gray-700 rounded-[48px] p-8 pt-8 pl-8 pr-8 max-w-3xl text-[16px] text-[#222] dark:text-white shadow-sm bg-white dark:bg-gray-800 text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300, minHeight: '180px' }}>
            Each shipment is treated as a one-of-a-kind operation, requiring:
            <br /><br />
            <b>Detailed Surveys</b>: Assessing dimensions, weight, and transport feasibility.<br />
            <b>Permit Management</b>: Securing necessary documentation for oversized loads.<br />
            <b>Coordination</b>: Between ports, carriers, and local authorities.<br />
            <br />
            It is a critical segment of ocean freight that demands expertise in logistics and engineering to ensure the successful delivery of valuable assets.
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto bg-[#d3e3f1] dark:bg-blue-900/20 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-stretch mt-12 mb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-normal mb-6 text-gray-900 dark:text-white text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>How are we overcoming challenges in project cargo transportation?</h2>
          <p className="mb-6 text-base text-[#222] dark:text-white text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            At Moon Navigation and Trading Co., we recognize that project cargo is unique, as each shipment is treated as a one-of-a-kind operation that requires a tailored approach to logistics. The process begins with detailed surveys, where we assess the dimensions, weight, and transport feasibility of your cargo to ensure optimal planning.
          </p>
          <p className="mb-6 text-base text-[#222] dark:text-white text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            We prioritize permit management, securing all necessary documentation for oversized loads to ensure compliance with regulations. Additionally, our team excels in coordination with ports, carriers, and local authorities to streamline the transportation process. As a critical segment of ocean freight, project cargo demands specialized expertise in logistics and engineering to ensure the successful delivery of valuable assets.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-base text-[#222] dark:text-white text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            <li><b>Custom Handling & Packaging:</b> Our team employs specialized handling techniques and tailored packaging solutions to guarantee the safety and stability of project cargo.</li>
            <li><b>Heavy Lifting Equipment:</b> We utilize advanced cranes, gantries, and hydraulic platforms to accurately lift and position exceptionally heavy items, ensuring secure transport.</li>
            <li><b>Intermodal Transport Coordination:</b> We seamlessly integrate sea, road, and rail transport, facilitating smooth coordination across different modes of transportation.</li>
            <li><b>Enhanced Safety & Security:</b> Our comprehensive security protocols and monitoring systems are designed to protect valuable and complex cargo throughout the entire transport process.</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/project-cargo-challenge.jpg"
            alt="Project cargo heavy lift operation"
            className="rounded-[40px] object-cover w-full h-[350px]"
            style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}
          />
        </div>
      </section>

      {/* Reasons Grid Section */}
      <ReasonsGrid
        title="Reasons to Choose Moon Navigation and Trading Co. for Your Project Cargo Needs"
        subheading="At Moon Navigation & Trading, we offer comprehensive end-to-end solutions for project cargo transportation, meticulously overseeing every logistical aspect from planning to delivery."
        reasons={[
          {
            icon: (
              <img
                src="/icons/9.png"
                alt="Dedicated Project Cargo Team"
                className="mb-8 h-24 w-24 object-contain"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              />
            ),
            title: "Dedicated Project Cargo Team",
            description: "Our proficient team excels in managing the complexities of project logistics, delivering customized solutions tailored to your specific requirements.",
          },
          {
            icon: (
              <img
                src="/icons/10.png"
                alt="Specialized Equipment & Vessels"
                className= "mb-8 h-24 w-24 object-contain"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              />
            ),
            title: "Specialized Equipment & Vessels",
            description: "From permits and health certificates to customs clearance, we manage all necessary documentation.",
          },
          {
            icon: (
              <img
                src="/icons/11.png"
                alt="Global Reach & Local Expertise"
                className= "mb-8 h-24 w-24 object-contain"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              />
            ),
            title: "Global Reach & Local Expertise",
            description: "With a strong global network, we offer seamless project cargo transport to any destination, supported by local expertise at each stage of the journey.",
          },
          {
            icon: (
              <img
                src="/icons/8.png"
                alt="Risk Management & Compliance"
                className="mb-8 h-24 w-24 object-contain"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              />
            ),
            title: "Risk Management & Compliance",
            description: "We proactively manage any risk factors associated with project cargo, ensuring all international shipping regulations, permits, and insurance requirements are met.",
          },
        ]}
      />
      <GetQuoteComponent topic="Project Cargo" link="/ocean-freight-forms" />
      <FAQSearch category="project-cargo" />

      {/* Key Industries Section - Improved Layout */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8 mt-16">
        <h2 className="text-3xl font-normal text-left text-gray-900 dark:text-white mb-16" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
          Key Industries Leveraging Our Project Cargo Solution
        </h2>
        <div className="flex flex-row gap-8">
          {/* Example carousel/grid images - ensure equal spacing */}
          <div className="flex flex-col items-center">
            <img src="/path/to/image1.jpg" alt="Marine and Shipbuilding" className="rounded-2xl mb-2" style={{ width: '220px', height: '180px', objectFit: 'cover' }} />
            <span className="text-base mt-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              Marine and Shipbuilding
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/image2.jpg" alt="Construction and Infrastructure" className="rounded-2xl mb-2" style={{ width: '220px', height: '180px', objectFit: 'cover' }} />
            <span className="text-base mt-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              Construction and Infrastructure
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/image3.jpg" alt="Mining" className="rounded-2xl mb-2" style={{ width: '220px', height: '180px', objectFit: 'cover' }} />
            <span className="text-base mt-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              Mining
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/path/to/image4.jpg" alt="Aerospace" className="rounded-2xl mb-2" style={{ width: '220px', height: '180px', objectFit: 'cover' }} />
            <span className="text-base mt-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              Aerospace
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProjectCargoPage() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}