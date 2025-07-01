"use client";

import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function CustomsClearanceLearnMore() {
  return (
    <main className="flex flex-col items-center w-full bg-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-10 mb-20">
        <h1 className="text-xl md:text-2xl font-medium text-[#253A5C] mb-10">
          Our Customs &amp; Clearance Services-At Moon Navigation and Trading Co.
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
              Import &amp; Export Customs Clearance
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              We excel in processing customs clearances while ensuring compliance with laws to facilitate seamless import and export operations.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Our experienced team handles import duties, tariffs, and fee exemptions, providing cost-effective clearance solutions tailored to each of our clients’ needs. We also facilitate customs approvals for restricted or regulated goods, ensuring that all paperwork adheres to the necessary regulations.
            </p>
            <p className="text-sm text-muted-foreground">
              With our commitment to delivering fast and compliant import/export processing for all types of cargo, we empower businesses to navigate the complexities of international trade with confidence and efficiency.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
              <Image
                src="/images/customs-clearance-worker.jpg"
                alt="Customs clearance worker with shipping containers"
                width={350}
                height={200}
                className="object-cover w-full h-[180px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
            <Image
              src="/images/duty-tax-optimization.jpg"
              alt="Business person analyzing duty and tax documents"
              width={350}
              height={200}
              className="object-cover w-full h-[180px]"
              priority
            />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Duty &amp; Tax Optimization
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            We specialize in identifying duty exemptions and preferential tariff programs to help clients maximize their savings.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Our team leverages Free Trade Agreements (FTAs) to minimize import and export levies by customizing them to the most favorable trade scenarios available. Additionally, we provide Customs Valuations to ensure accurate tax assessments, helping to avoid unnecessary expenses and complications.
          </p>
          <p className="text-sm text-muted-foreground">
            Whether you're minimizing customs costs or enhancing profit margins, we empower businesses to navigate the complexities of international trade while optimizing their financial outcomes.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Special Cargo &amp; Regulatory Compliance
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            We provide customs clearance services tailored for temperature, perishable, and high-value cargo.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Our expertise includes obtaining special permits for restricted goods, such as pharmaceuticals, chemicals, and food products, ensuring compliance with necessary regulations. We provide assistance in international trade barrier matters, including SPS, TBT, and WTO regulations, to guarantee secure and speedy clearance of sensitive cargo.
          </p>
          <p className="text-sm text-muted-foreground">
            With our commitment to delivering efficient and reliable customs solutions, we empower our clients in the completion of international trade with confidence and peace of mind.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
            <Image
              src="/images/special-cargo-compliance.jpg"
              alt="Customs officer inspecting special cargo at port"
              width={350}
              height={200}
              className="object-cover w-full h-[180px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
            <Image
              src="/images/trade-documentation-brokerage.jpg"
              alt="Customs broker preparing shipping documents at a desk with a port view"
              width={350}
              height={200}
              className="object-cover w-full h-[180px]"
              priority
            />
          </div>
        </div>
        {/* Right: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Trade Documentation &amp; Customs Brokerage
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            We specialize in the meticulous preparation of key shipping documents essential for seamless trade operations.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Our services include the creation of Bill of Lading (B/L), Commercial Invoices, Packing Lists, and Certificates of Origin, ensuring that all documentation is accurate and compliant with regulations. We also offer Electronic Customs Filing for faster clearance, streamlining the process to minimize delays. Additionally, our team is experienced in handling Letters of Credit (L/C) and other trade finance documents, providing comprehensive support for your transactions.
          </p>
          <p className="text-sm text-muted-foreground">
            With our focus on accurate documentation, we ensure smooth trade operations for our clients, enabling them to navigate the complexities of international shipping with confidence.
          </p>
        </div>
      </div>
    </div>
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Bonded Warehousing &amp; Free Zones
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            We offer secure storage solutions for cargo awaiting customs clearance, ensuring peace of mind during the import process.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Our services include access to Duty-Free Zones and Bonded Warehousing solutions, specifically for re-export, allowing businesses to optimize their logistics operations. We also provide Deferred Tax and Duty Payment options, which can significantly reduce cash flow risk for our clients.
          </p>
          <p className="text-sm text-muted-foreground">
            With our focus on delivering storage and tax-efficient trade solutions, we empower businesses to navigate the complexities of international trade while maximizing their operational efficiency.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
            <Image
              src="/images/bonded-warehousing-containers.jpg"
              alt="Bonded warehousing with customs officer and shipping containers"
              width={350}
              height={200}
              className="object-cover w-full h-[180px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    <GetQuoteComponent topic="Customs Clearance" link="/ship-agency-forms"/>
    </main>
  );
}
