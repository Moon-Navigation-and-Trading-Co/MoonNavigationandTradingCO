import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function ProjectCargoLearnMore() {
  return (
    <div className="w-full px-4 md:px-16 py-10 max-w-7xl mx-auto mt-10">
      <h1 className="text-2xl md:text-3xl  mb-8 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
        Our Project Cargo Solutions - At Moon Navigation and Trading Co.
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left: Text Content */}
        <div className="flex-1">
          <ol className="list-decimal pl-4">
            <li>
              <span className=" text-foreground text-lg md:text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Heavy Lift &amp; Oversized Cargo Solutions
              </span>
              <div className="mt-2 text-muted-foreground text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                We specialize in transporting cargo that exceeds standard shipping dimensions and weight limits, ensuring safe and efficient handling through tailored solutions.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <b>Specialized Vessel Chartering:</b> Secure transport using breakbulk, heavy lift, and semi-submersible vessels.
                  </li>
                  <li>
                    <b>Custom Lifting Strategies:</b> High-capacity cranes for safe and innovative loading/unloading.
                  </li>
                  <li>
                    <b>Engineering &amp; Load Planning:</b> Custom lifting and securing strategies for optimal safety.
                  </li>
                  <li>
                    <b>Permit &amp; Regulatory Compliance:</b> Expert management of transport permissions and clearances.
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <Image
            src="/project-cargo-heavy-lift.jpg"
            alt="Heavy lift cargo vessel at port"
            width={400}
            height={220}
            className="rounded-2xl w-full h-[220px] object-cover object-center"
            style={{ maxWidth: 400 }}
            priority={false}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <Image
            src="/project-cargo-multimodal.jpg"
            alt="Multimodal transport of project cargo"
            width={400}
            height={220}
            className="rounded-2xl w-full h-[220px] object-cover object-center"
            style={{ maxWidth: 400 }}
            priority={false}
          />
        </div>
        {/* Left: Text Content */}
        <div className="flex-1">
          <ol start={2} className="list-decimal pl-4">
            <li>
              <span className=" text-foreground text-lg md:text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Multimodal Transport &amp; Route Planning
              </span>
              <div className="mt-2 text-muted-foreground text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Project cargo often demands a strategic blend of transport modes to ensure safe and efficient delivery.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    <b>Multimodal Logistics:</b> Seamless coordination across sea, air, rail, and land transport.
                  </li>
                  <li>
                    <b>Port-to-Site Delivery:</b> Reliable inland transport from ports to final project locations.
                  </li>
                  <li>
                    <b>Specialized Equipment:</b> Integrated modular trailers, low-bed trailers, and SPMTs for heavy and oversized cargo.
                  </li>
                  <li>
                    <b>Route Planning &amp; Feasibility:</b> In-depth surveys to identify the safest and most efficient routes.
                  </li>
                </ul>
              </div>
            </li>
          </ol>
        </div>
      </div>
    <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
      {/* Left: Text Content */}
      <div className="flex-1">
        <ol start={3} className="list-decimal pl-4">
          <li>
            <span className=" text-foreground text-lg md:text-xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Industry-Specific Solutions
            </span>
            <div className="mt-2 text-muted-foreground text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Our project cargo services cater to diverse industries, ensuring the safe and efficient transport of specialized equipment:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <b>Oil &amp; Gas:</b> Pipelines, drilling rigs, and refinery components.
                </li>
                <li>
                  <b>Construction &amp; Infrastructure:</b> Steel structures, bridge sections, and segmental concrete.
                </li>
                <li>
                  <b>Renewable Energy:</b> Wind turbines, solar panels, and hydropower components.
                </li>
                <li>
                  <b>Mining &amp; Heavy Machinery:</b> Excavators, crushers, and industrial plant equipment.
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
      {/* Right: Image */}
      <div className="flex-shrink-0 w-full md:w-[340px]">
        <Image
          src="/project-cargo-industries.jpg"
          alt="Project cargo for energy, construction, mining, and renewables"
          width={400}
          height={220}
          className="rounded-2xl w-full h-[220px] object-cover object-center"
          style={{ maxWidth: 400 }}
          priority={false}
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-full md:w-[340px]">
        <Image
          src="/customs-clearance-compliance.jpg"
          alt="Customs officer checking documents at shipping containers"
          width={400}
          height={220}
          className="rounded-2xl w-full h-[220px] object-cover object-center"
          style={{ maxWidth: 400 }}
          priority={false}
        />
      </div>
      {/* Right: Text Content */}
      <div className="flex-1">
          <h3 className="text-lg md:text-xl  mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
          4. Customs Clearance &amp; Compliance
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
          We handle all regulatory requirements to ensure smooth cross-border transport.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <li>
            <b>Customs Documentation:</b> Managing permits, duties, and tax clearances.
          </li>
          <li>
            <b>Import/Export Compliance:</b> Ensuring adherence to international shipping regulations.
          </li>
          <li>
            <b>Cargo Insurance &amp; Risk Management:</b> Protecting high-value shipments.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
      {/* Left: Text Content */}
      <div className="flex-1">
        <h3 className="text-lg md:text-xl  mb-1 text-foreground" style={{ fontFamily: 'Raleway, sans-serif' }}>
          5. Turnkey Project Logistics
        </h3>
        <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <span className="text-primary">
            From initial planning to final delivery,
          </span>{" "}
          we manage every aspect of complex cargo movements.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <li>
            <b>End-to-end coordination:</b> Single point of contact for all logistics operations.
          </li>
          <li>
            <b>Site Surveys &amp; Risk Assessments:</b> Identifying and mitigating potential challenges.
          </li>
          <li>
            <b>On-Site Supervision:</b> Assuring safe and efficient handling at every stage.
          </li>
          <li>
            <b>Time-sensitive Solutions:</b> Meeting strict project deadlines.
          </li>
        </ul>
      </div>
      {/* Right: Image */}
      <div className="flex-shrink-0 w-full md:w-[340px]">
        <Image
          src="/turnkey-project-logistics.jpg"
          alt="Project logistics team supervising heavy cargo at a port"
          width={400}
          height={220}
          className="rounded-2xl w-full h-[220px] object-cover object-center"
          style={{ maxWidth: 400 }}
          priority={false}
        />
      </div>
    </div>
    <GetQuoteComponent topic="Project Cargo" link="/ocean-freight-forms" />
    <FAQSearch category="project-cargo" />
    </div>
  );
}
