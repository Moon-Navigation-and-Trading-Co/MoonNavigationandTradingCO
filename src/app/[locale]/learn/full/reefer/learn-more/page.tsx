import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function LearnMore() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="w-full max-w-7xl mx-auto mt-20 mb-12 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl  mb-4 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Our Solutions
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif' }}>
          At Moon Navigation and Trading Co., we offer a comprehensive range of refrigerated shipping solutions tailored to protect the integrity of your temperature-sensitive cargo throughout every stage of the logistics process. Our services are designed to meet industry-specific demands, enhance operational efficiency, and ensure quality delivery from pickup to final destination.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[340px]">
            <img
              src="/reefer-truck-road.jpg"
              alt="Reefer truck on highway"
              className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
              loading="lazy"
            />
          </div>
          {/* Right: Solution Details */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
              1. Door-to-Door Reefer Transport Solutions
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
              We provide end-to-end and widespread operations, ensuring your cargo is collected from your facility and delivered directly to its destination under controlled temperature conditions. Our door-to-door services eliminate multiple handoffs, reduce handling risks, and minimize compliance risks with industry quality standards.
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
              <li>Seamless coordination from origin to destination</li>
              <li>One point of contact for the full journey</li>
              <li>Cold chain integrity preserved throughout</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <img
            src="/reefer-custom-routing.jpg"
            alt="Custom routing for perishable cargo"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
        {/* Right: Solution Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
            2. Custom Routing for Perishable Cargo
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            We understand that timing and routing are crucial for perishable goods. Our team offers customized transport planning to choose the most efficient routes and shortest transit times, minimizing spoilage risk and maximizing product shelf life.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>Optimized scheduling based on cargo type</li>
            <li>Strategic selection of transit routes and carriers</li>
            <li>Shipment status updates and progress tracking through every stage of transport</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Solution Details */}
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
            3. Integrated Warehousing &amp; Cold Storage Services
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            In addition to transport, we offer cold storage solutions at key logistics hubs, allowing safe interim storage of temperature-sensitive goods. Our facilities are equipped with modern cooling systems to maintain ideal temperature and humidity levels.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>Temperature-controlled warehousing at origin or destination</li>
            <li>Ideal for cargo consolidation or distribution</li>
            <li>Scalable storage solutions for short or long-term needs</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px] order-1 md:order-2">
          <img
            src="/reefer-cold-storage.jpg"
            alt="Modern cold storage warehouse exterior"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <img
            src="/reefer-multimodal.jpg"
            alt="Multimodal transport options: sea, air, and inland"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
        {/* Right: Solution Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
            4. Multimodal Transport Options (Sea, Air, Inland)
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            We provide flexible multimodal transportation options, combining sea, air, and inland logistics to optimize your supply chain and distribution. Whether it's single or hybrid (e.g. conventional, break-bulk, or reefer) shipments, maintain temperature control across all transport modes.</p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>Seamless cross-modal transfers without temperature disruption</li>
            <li>Efficient coordination between sea, air, and land carriers</li>
            <li>Greater reach and delivery flexibility</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Solution Details */}
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
            5. Risk Management &amp; Cargo Insurance Solutions
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Protecting your high-value and perishable cargo is our priority. We offer tailored risk mitigation strategies and insurance coverage to safeguard your goods from unforeseen events such as equipment failure, delays, or spoilage.</p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>Reefer cargo-specific insurance options</li>
            <li>Risk analysis and contingency planning</li>
            <li>Claims support and loss prevention advisory</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px] order-1 md:order-2">
          <img
            src="/reefer-insurance.jpg"
            alt="Cargo insurance and risk management for reefer shipping"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px]">
          <img
            src="/reefer-tracking-monitoring.jpg"
            alt="Cargo tracking and temperature monitoring systems"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
        {/* Right: Solution Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
            6. Cargo Tracking &amp; Temperature Monitoring Systems
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            We ensure effective cargo oversight through advanced monitoring protocols and temperature control measures throughout the transportation process. Our operations team routinely supervises shipments and keeps clients informed at every stage of the journey.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>Real-time updates on shipment status during key transit points</li>
            <li>Temperature performance checks and automated notifications/alerts</li>
            <li>Detailed logs for auditing and regulatory compliance</li>
            <li>Proactive communication from our operations team to keep you informed</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-start mt-12">
        {/* Left: Solution Details */}
        <div className="flex-1 order-2 md:order-1">
          <h3 className="text-lg md:text-xl  mb-2 text-[#23294d]" style={{ fontFamily: 'Raleway, sans-serif' }}>
            7. Special Handling for Hazardous Temperature-Sensitive Cargo
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Certain hazardous goods also require controlled temperatures, such as temperature-sensitive chemicals or pharmaceutical compounds. Our team is trained and certified to handle such shipments with special protocols to ensure safety and compliance.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <li>Expertise in IMDG/IMO-classified reefer cargo</li>
            <li>Specialized packaging, labeling, and documentation</li>
            <li>Compliance with safety regulations and cold chain integrity</li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0 w-full md:w-[340px] order-1 md:order-2">
          <img
            src="/reefer-hazardous-handling.jpg"
            alt="Special handling for hazardous temperature-sensitive cargo"
            className="rounded-2xl w-full h-[200px] object-cover object-center shadow-md"
            loading="lazy"
          />
        </div>
      </div>
      <GetQuoteComponent topic="Reefer Container" link="/container-services-forms" />
      <FAQSearch category="reefer-container" />
    </div>
  );
}