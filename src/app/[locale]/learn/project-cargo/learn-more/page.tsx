import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function ProjectCargoLearnMore() {
  return (
    <div className="w-full px-4 md:px-16 py-10 max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl mb-24 text-[#3846a5] font-raleway font-normal" style={{ fontWeight: 400 }}>
        Our Project Cargo Solutions-At Moon Navigation and Trading Co.
      </h1>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-24 mb-32">
        <div className="flex-1">
          <ol className="list-decimal pl-4">
            <li>
              <span className="text-[#222] text-2xl font-raleway font-normal" style={{ fontWeight: 400 }}>
                Heavy Lift & Oversized Cargo Solutions
              </span>
              <div className="mt-4 text-[#3846a5] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
                We specialize in transporting cargo that exceeds standard shipping dimensions and weight limits, ensuring safe and efficient handling through tailored solutions:
              </div>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[#222] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
                <li>
                  <b>Specialized Vessel Chartering</b> – Secure transport using breakbulk, heavy lift, and semi-submersible vessels.
                </li>
                <li>
                  <b>Crane & Lifting Equipment</b> – High-capacity cranes for safe and precise loading/unloading.
                </li>
                <li>
                  <b>Engineering & Load Planning</b> – Custom lifting and securing strategies for optimal safety.
                </li>
                <li>
                  <b>Permit & Regulatory Compliance</b> – Expert management of transport permissions and clearances.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex-shrink-0 w-full md:w-[600px]">
          <Image
            src="/project-cargo-heavy-lift.jpg"
            alt="Heavy lift cargo vessel at port"
            width={600}
            height={340}
            className="rounded-2xl w-full h-[340px] object-cover object-center"
            style={{ maxWidth: 600 }}
            priority={false}
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center gap-24 mb-32">
        <div className="flex-shrink-0 w-full md:w-[600px] order-2 md:order-1">
          <Image
            src="/project-cargo-multimodal.jpg"
            alt="Multimodal transport of project cargo"
            width={600}
            height={340}
            className="rounded-2xl w-full h-[340px] object-cover object-center"
            style={{ maxWidth: 600 }}
            priority={false}
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <ol start={2} className="list-decimal pl-4">
            <li>
              <span className="text-[#222] text-2xl font-raleway font-normal" style={{ fontWeight: 400 }}>
                Multimodal Transport and Route Planning
              </span>
              <div className="mt-4 text-[#3846a5] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
                Project cargo often demands a strategic blend of transport modes to ensure safe and efficient delivery.
              </div>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[#222] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
                <li>
                  <b>Multimodal Logistics</b> – Seamless coordination across sea, air, rail, and land transport.
                </li>
                <li>
                  <b>Port-to-Site Delivery</b> – Reliable inland transport from ports to final project locations.
                </li>
                <li>
                  <b>Specialized Equipment</b> – Integrated modular trailers, low-bed trailers, and SPMTs for heavy and oversized cargo.
                </li>
                <li>
                  <b>Route Planning and Feasibility</b> – In-depth surveys to identify the safest and most efficient routes.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center gap-24 mb-32">
        <div className="flex-1">
          <ol start={3} className="list-decimal pl-4">
            <li>
              <span className="text-[#222] text-2xl font-raleway font-normal" style={{ fontWeight: 400 }}>
                Industry-Specific Solutions
              </span>
              <div className="mt-4 text-[#3846a5] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
                Our project cargo services cater to diverse industries, ensuring the safe and efficient transport of specialized equipment:
              </div>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[#222] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
                <li>
                  <b>Oil and Gas</b> – Pipelines, drilling rigs, and refinery components.
                </li>
                <li>
                  <b>Construction and Infrastructure</b> – Steel structures, bridge sections, and segmental concrete.
                </li>
                <li>
                  <b>Renewable Energy</b> – Wind turbines, solar panels, and hydropower components.
                </li>
                <li>
                  <b>Mining and Heavy Machinery</b> – Excavators, crushers, and industrial plant equipment.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="flex-shrink-0 w-full md:w-[600px]">
          <Image
            src="/project-cargo-industries.jpg"
            alt="Project cargo for energy, construction, mining, and renewables"
            width={600}
            height={340}
            className="rounded-2xl w-full h-[340px] object-cover object-center"
            style={{ maxWidth: 600 }}
            priority={false}
          />
        </div>
      </div>
      {/* Section 4 */}
      <div className="flex flex-col md:flex-row items-center gap-24 mb-32">
        <div className="flex-shrink-0 w-full md:w-[600px]">
          <Image
            src="/customs-clearance-compliance.jpg"
            alt="Customs officer checking documents at shipping containers"
            width={600}
            height={340}
            className="rounded-2xl w-full h-[340px] object-cover object-center"
            style={{ maxWidth: 600 }}
            priority={false}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl mb-2 text-[#222] font-raleway font-normal" style={{ fontWeight: 400 }}>
            4. Customs Clearance and Compliance
          </h3>
          <div className="text-[#3846a5] text-lg font-raleway font-light mb-3" style={{ fontWeight: 300 }}>
            We handle all regulatory requirements to ensure smooth cross-border transport.
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#222] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
            <li>
              <b>Customs Documentation</b> – Managing permits, duties, and tax clearances.
            </li>
            <li>
              <b>Import/Export Compliance</b> – Ensuring adherence to international shipping regulations.
            </li>
            <li>
              <b>Cargo Insurance and Risk Management</b> – Protecting high-value shipments.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 5 */}
      <div className="flex flex-col md:flex-row items-center gap-24 mb-32">
        <div className="flex-1">
          <h3 className="text-2xl mb-2 text-[#222] font-raleway font-normal" style={{ fontWeight: 400 }}>
            5. Turnkey Project Logistics
          </h3>
          <div className="text-[#3846a5] text-lg font-raleway font-light mb-3" style={{ fontWeight: 300 }}>
            <span className="text-primary">From initial planning to final delivery,</span> we manage every aspect of complex cargo movements.
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-[#222] text-lg font-raleway font-light" style={{ fontWeight: 300 }}>
            <li>
              <b>End-to-end coordination</b> – Single point of contact for all logistics operations.
            </li>
            <li>
              <b>Site Surveys and Risk Assessments</b> – Identifying and mitigating potential challenges.
            </li>
            <li>
              <b>On-Site Supervision</b> – Assuring safe and efficient handling at every stage.
            </li>
            <li>
              <b>Time-sensitive Solutions</b> – Meeting strict project deadlines.
            </li>
          </ul>
        </div>
        <div className="flex-shrink-0 w-full md:w-[600px]">
          <Image
            src="/turnkey-project-logistics.jpg"
            alt="Project logistics team supervising heavy cargo at a port"
            width={600}
            height={340}
            className="rounded-2xl w-full h-[340px] object-cover object-center"
            style={{ maxWidth: 600 }}
            priority={false}
          />
        </div>
      </div>
      <GetQuoteComponent topic="Project Cargo" link="/ocean-freight-forms" />
      <FAQSearch category="project-cargo" />
    </div>
  );
}
