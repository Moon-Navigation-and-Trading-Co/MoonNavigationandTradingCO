import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import GetQuoteComponent from "@/components/getQuoteComponent";

//seo
export const metadata = {
  title: "Project Cargo Services | Moon Navigation and Trading Co.",
  description:
    "Specialized project cargo logistics for oversized, heavy, and high-value shipments. Learn the key differences between project and standard cargo, and why Moon Navigation and Trading Co. is your trusted partner.",
  keywords: [
    "project cargo",
    "heavy lift",
    "oversized cargo",
    "logistics",
    "ocean freight",
    "Moon Navigation and Trading Co.",
    "specialized shipping",
    "industrial logistics",
    "infrastructure logistics",
    "cargo insurance",
    "shipping solutions",
    "project cargo services",
    "project cargo logistics",
    "project cargo transportation",
    "project cargo quote",
    "project cargo solutions",
    "project cargo company",
    "project cargo management",
    "project cargo shipping",
    "project cargo provider",
    "project cargo expert",
    "project cargo partner",
    "project cargo difference",
    "project cargo vs standard cargo",
    "project cargo industries",
    "project cargo challenges",
    "project cargo risk",
    "project cargo insurance",
    "project cargo cost",
    "project cargo equipment",
    "project cargo team",
    "project cargo compliance",
    "project cargo safety",
    "project cargo security",
    "project cargo global",
    "project cargo local expertise",
    "project cargo marine",
    "project cargo construction",
    "project cargo mining",
    "project cargo aerospace",
    "project cargo energy",
  ],
  openGraph: {
    title: "Project Cargo Services | Moon Navigation and Trading Co.",
    description:
      "Expert project cargo logistics for oversized, heavy, and high-value shipments. Discover the differences between project and standard cargo, and our tailored solutions.",
    // url: "http://localhost:3000/en/learn/project-cargo", // Change to your production domain when live
    type: "website",
    images: [
      {
        // url: "/project-cargo-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Project Cargo Services - Oversized, Heavy Lift, and Specialized Logistics by Moon Navigation and Trading Co.",
      },
    ],
  },
  alternates: {
    // canonical: "http://localhost:3000/en/learn/project-cargo", // Change to your production domain when live
  },
};

export default function ProjectCargoPage() {
  const t = useTranslations("learn-project-cargo");

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto w-full mt-8">
        <div className="rounded-[56px] overflow-hidden w-full h-[400px] mb-12">
          <Image
            src="/project-cargo-hero.jpg"
            alt="Project Cargo - Oversized and Heavy Lift Logistics by Moon Navigation and Trading Co."
            width={1600}
            height={600}
            className="object-cover object-center w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full bg-white">
          {/* Left: Title and Button */}
          <div className="flex-1 flex flex-col items-start justify-center pl-8">
            <h1 className="text-5xl font-normal font-sans mb-12 text-[#222]">Project Cargo<br />Services</h1>
            <Link href="/ocean-freight-forms" title="Request a Project Cargo Quote">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          {/* Right: What is Project Cargo */}
          <div className="flex-1 flex flex-col justify-center pr-8">
            <h2 className="text-2xl font-normal mb-4 text-[#3846a5] font-sans">What is Project Cargo?</h2>
            <p className="text-base leading-relaxed text-[#444] mb-4 font-sans">
              Project cargo in ocean freight entails the transportation of large, heavy, high-value or complex pieces of equipment and materials. At Moon Navigation and Trading Co., we specialize in managing these specialized shipments, which are intricately linked to specific projects and require meticulous handling, specialized equipment, and precise coordination.
            </p>
            <p className="text-base leading-relaxed text-[#444] font-sans">
              We understand that ensuring the safe and timely delivery of project cargo is vital for the successful execution of industrial and infrastructure projects. Our dedicated team is committed to providing comprehensive solutions that address the unique challenges of project cargo logistics, making this a critical aspect of services in global trade.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto w-full">
        <hr className="mb-10 border-t border-gray-200" />
        <h2 className="text-4xl font-normal text-center mb-12 font-sans">Key Industries Leveraging Our Project Cargo Solution</h2>
        <div className="flex flex-row justify-center gap-8 mb-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <img src="/industry-marine.jpg" alt="Marine and Shipbuilding" className="w-56 h-40 object-cover rounded-[48px] mb-4" />
            <span className="text-base text-center">Marine and Shipbuilding</span>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <img src="/industry-construction.jpg" alt="Construction and Infrastructure" className="w-56 h-40 object-cover rounded-[48px] mb-4" />
            <span className="text-base text-center">Construction and Infrastructure</span>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <img src="/industry-mining.jpg" alt="Mining" className="w-56 h-40 object-cover rounded-[48px] mb-4" />
            <span className="text-base text-center">Mining</span>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col items-center">
            <img src="/industry-aerospace.jpg" alt="Aerospace" className="w-56 h-40 object-cover rounded-[48px] mb-4" />
            <span className="text-base text-center">Aerospace</span>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col items-center">
            <img src="/industry-energy.jpg" alt="Energy" className="w-56 h-40 object-cover rounded-[48px] mb-4" />
            <span className="text-base text-center">Energy</span>
          </div>
        </div>
        {/* Carousel Dots and Arrows */}
        <div className="flex flex-row items-center justify-center gap-4 mt-2">
          <span className="w-6 h-2 bg-[#222] rounded-full inline-block"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
          <span className="w-10"></span>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xl text-gray-400 mr-2">&#8592;</button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xl text-gray-400">&#8594;</button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center font-sans">
          Key Differences between Project Cargo and Standard Cargo
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-[#3846a5] rounded-xl text-base font-sans">
            <thead>
              <tr className="bg-[#f5f8ff] border-b border-[#3846a5]">
                <th className="px-4 py-3 border-r border-[#3846a5] font-bold text-left text-black">Feature</th>
                <th className="px-4 py-3 border-r border-[#3846a5] font-bold text-left text-black">Project Cargo</th>
                <th className="px-4 py-3 font-bold text-left text-black">Standard Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Size &amp; Weight</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Oversized, heavy, and irregular-shaped items</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Standard-sized goods that fit in containers or pallets</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Handling Requirements</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Requires specialized handling (cranes, flat racks, heavy-lift vessels, RoRo, breakbulk)</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Handled using conventional shipping methods (pallets, boxes, containers)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Logistics Complexity</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">High – involves route surveys, permits, customs clearances, and infrastructure adjustments</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Low – follows standard transportation procedures</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Transport Equipment</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Heavy-lift vessels, modular trailers, open-top containers, SPMTs</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Standard containers (20ft, 40ft), trucks, forklifts</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Time Sensitivity</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Often critical for large-scale projects, delays can be costly</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">More flexible in transit schedules</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Industries Served</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Energy, construction, oil &amp; gas, mining, infrastructure</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Retail, electronics, textiles, consumer goods</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Risk &amp; Insurance</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Higher risk due to size and complexity, requires specialized insurance</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Lower risk, covered by standard cargo insurance</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Shipping Cost</td>
                <td className="px-4 py-3 border-t border-[#3846a5] border-r align-top">Higher due to special handling, permits, and logistics planning</td>
                <td className="px-4 py-3 border-t border-[#3846a5] align-top">Lower, based on weight, volume, and standard tariffs</td>
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
        <h2 className="text-2xl font-normal mb-8 text-[#3846a5] font-sans">Why is project cargo unique?</h2>
        <div className="relative">
          <div className="bg-white border border-gray-200 rounded-[48px] p-8 pt-8 pl-8 pr-8 max-w-3xl font-sans text-[16px] text-[#222] shadow-sm" style={{minHeight:'180px'}}>
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

      <section className="max-w-7xl mx-auto bg-[#d3e3f1] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-stretch mt-12 mb-12">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-normal mb-6 font-sans">How are we overcoming challenges in project cargo transportation?</h2>
          <p className="mb-6 font-sans text-base text-[#222]">
            At Moon Navigation and Trading Co., we recognize that project cargo is unique, as each shipment is treated as a one-of-a-kind operation that requires a tailored approach to logistics. The process begins with detailed surveys, where we assess the dimensions, weight, and transport feasibility of your cargo to ensure optimal planning.
          </p>
          <p className="mb-6 font-sans text-base text-[#222]">
            We prioritize permit management, securing all necessary documentation for oversized loads to ensure compliance with regulations. Additionally, our team excels in coordination with ports, carriers, and local authorities to streamline the transportation process. As a critical segment of ocean freight, project cargo demands specialized expertise in logistics and engineering to ensure the successful delivery of valuable assets.
          </p>
          <ul className="list-disc pl-6 space-y-4 font-sans text-base text-[#222]">
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
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-8 pb-16">
        <h2 className="text-3xl font-normal text-center mb-4 font-sans">
          Reasons to Choose Moon Navigation and Trading Co. for Your Project Cargo Needs
        </h2>
        <p className="mb-12 text-center text-base text-[#444] max-w-3xl mx-auto font-sans">
          At Moon Navigation & Trading, we offer comprehensive end-to-end solutions for project cargo transportation, meticulously overseeing every logistical aspect from planning to delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 justify-items-center">
          {/* Row 1 */}
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-bold text-lg mb-2">Dedicated Project Cargo Team</div>
            <div className="text-base text-[#444] max-w-xs">
              Our proficient team excels in managing the complexities of project logistics, delivering customized solutions tailored to your specific requirements.
            </div>
          </div>
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-bold text-lg mb-2">Specialized Equipment & Vessels</div>
            <div className="text-base text-[#444] max-w-xs">
              From permits and health certificates to customs clearance, we manage all necessary documentation.
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-bold text-lg mb-2">Global Reach & Local Expertise</div>
            <div className="text-base text-[#444] max-w-xs">
              With a strong global network, we offer seamless project cargo transport to any destination, supported by local expertise at each stage of the journey.
            </div>
          </div>
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-bold text-lg mb-2">Risk Management & Compliance</div>
            <div className="text-base text-[#444] max-w-xs">
              We proactively manage any risk factors associated with project cargo, ensuring all international shipping regulations, permits, and insurance requirements are met.
            </div>
          </div>
        </div>
      </section>
      <GetQuoteComponent topic="Project Cargo" link="/ocean-freight-forms" />
    </div>
  );
}