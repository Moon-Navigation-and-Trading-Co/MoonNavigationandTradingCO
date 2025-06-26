import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-out-gauge");

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0">
      {/* Top Banner */}
      <div className="w-full max-w-5xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
        <div className="relative w-full h-[180px] md:h-[260px]">
          <img
            src="/out-gauge-banner.jpg"
            alt="Out gauge cargo secured on flat rack"
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Title and CTA */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Out Gauge
          </h1>
          <Button asChild className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primary/90 mt-2">
            <a href="/container-services-forms">Request a Quote</a>
          </Button>
        </div>

        {/* Right: Description */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            What is Out Gauge?
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            Out of Gauge (OOG) refers to shipments that exceed the standard dimensions of a shipping container, making them unsuitable for transport in enclosed containers. These shipments are typically large, unusually shaped, or require special securing, equipment, and transport solutions to ensure safe and efficient delivery.
            <br /><br />
            At Moon Navigation and Trading Co., we provide tailored OOG container solutions, ensuring that even the largest, most complex cargo is handled efficiently, meeting compliance and safety requirements. Our expertise in securing, moving, and transporting out-of-gauge shipments ensures maximum protection and reliable results while maintaining compliance with international shipping regulations.
          </p>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-primary mb-2 text-center">
          What We Transport
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-2xl mx-auto">
          Our OOG cargo services are designed to accommodate a wide variety of oversized shipments, including but not limited to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Industrial Machinery */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/oog-industrial-machinery.jpg"
                alt="Industrial machinery"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-semibold text-center">Industrial Machinery</span>
            <span className="text-xs text-muted-foreground text-center">
              Generators, turbines, transformers, pumps
            </span>
          </div>
          {/* Construction Equipment */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/oog-construction-equipment.jpg"
                alt="Construction equipment"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-semibold text-center">Construction Equipment</span>
            <span className="text-xs text-muted-foreground text-center">
              Excavators, cranes, drilling rigs
            </span>
          </div>
          {/* Project Cargo */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/oog-project-cargo.jpg"
                alt="Project cargo"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-semibold text-center">Project Cargo</span>
            <span className="text-xs text-muted-foreground text-center">
              Oil & gas modules, wind energy equipment, industrial units
            </span>
          </div>
          {/* Military and Aerospace Equipment */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
              <img
                src="/oog-military-aerospace.jpg"
                alt="Military and aerospace equipment"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-semibold text-center">Military and Aerospace Equipment</span>
            <span className="text-xs text-muted-foreground text-center">
              Vehicles, aircraft components, installations
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Description */}
          <div className="bg-white rounded-3xl shadow p-6 md:p-8">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Handling Out-of-gauge cargo is a complex task that requires specialized equipment, custom handling techniques, and precise logistics management. Our team is highly experienced in coordinating the transportation of heavy, oversized, and project cargo, from industrial machinery to large-scale infrastructure components.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <div className="w-full h-40 md:h-56 rounded-[2rem] overflow-hidden shadow-lg flex items-center justify-center relative">
              <img
                src="/oog-expert-team.jpg"
                alt="Out-of-gauge cargo experts"
                className="object-cover w-full h-full"
              />
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-white text-base md:text-lg font-semibold drop-shadow-lg">
                OOG Experts
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-8">
          Our Specialized Equipment for OOG Transportation
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-muted rounded-xl bg-white shadow">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-muted">
                  Equipment Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-muted">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-muted">
                <td className="px-4 py-3 font-medium text-foreground align-top">
                  Flat Rack Containers
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top">
                  Ideal for wide and heavy cargo that exceeds standard width limits, providing open sides for easy loading and unloading.
                </td>
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-3 font-medium text-foreground align-top">
                  Open-Top Containers
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top">
                  Suitable for cargo that is too tall for a standard container, allowing top-loading with cranes.
                </td>
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-3 font-medium text-foreground align-top">
                  Heavy-Lift Cranes &amp; Lifting Gear
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top">
                  Used for safe loading and unloading of massive structures, ensuring stability and security.
                </td>
              </tr>
              <tr className="border-b border-muted">
                <td className="px-4 py-3 font-medium text-foreground align-top">
                  Modular &amp; Hydraulic Trailers
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top">
                  Designed for transporting extremely heavy and oversized loads over land, offering flexibility in weight distribution.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground align-top">
                  Roll-On/Roll-Off (RORO) Solutions
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top">
                  Best for self-propelled cargo such as heavy machinery, trucks, and large vehicles, ensuring efficient loading and unloading.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-10">
          What Sets Us Apart:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left: Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/outgauge-expert.jpg"
                alt="Out Gauge Shipping Expert"
                className="object-cover w-full h-56 md:h-64"
              />
            </div>
          </div>
          {/* Right: Features */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-base md:text-lg">
                Customized Solutions for Every Shipment
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We recognize that every OOG cargo shipment is unique. Whether it’s an oversized transformer or a large construction vehicle, our team personalizes transport solutions using the best equipment and methods to suit your cargo’s industry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-base md:text-lg">
                Access to Specialized Equipment
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Our fleet includes a wide range of flat racks, open-top containers, and platform solutions for out-gauge loads. We accommodate even the most advanced oversized container dimensions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-base md:text-lg">
                Expert Handling and Securing
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We employ a team of skilled professionals who use the latest lashing and securing technology to ensure your OOG cargo is safe at every stage. From heavy-lift cranes to other flat-rack-specific equipment, our team delivers the highest level of technical excellence for complex handling needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-base md:text-lg">
                Global Logistics Network
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We offer comprehensive worldwide reach and last-mile shipping options, so your shipment is handled with precision and efficiency, no matter where in the world it is headed.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold text-foreground mb-1 text-base md:text-lg">
                Route Planning and Compliance
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Our logistics experts conduct route analysis and obtain all necessary permits to mitigate risk, avoid any shipment restrictions, ensuring your shipment moves smoothly without delays.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
            End-to-End OOG Cargo Logistics Services
          </h2>
          <p className="text-muted-foreground mb-5 text-base md:text-lg">
            We provide complete logistics solutions to handle OOG cargo from start to finish.
          </p>
          <ul className="list-disc list-inside space-y-3 text-base text-foreground pl-2">
            <li>
              <span className="font-semibold">Port Handling &amp; Stevedoring</span> – Safe loading, unloading, and storage at ports.
            </li>
            <li>
              <span className="font-semibold">Customs Clearance &amp; Documentation</span> – We handle all approvals, ensuring smooth cross-border transport.
            </li>
            <li>
              <span className="font-semibold">Inland Transportation</span> – Seamless delivery using heavy-duty trucks, modular trailers, and rail transport.
            </li>
            <li>
              <span className="font-semibold">Final Delivery &amp; Project Logistics</span> – We manage delivery to construction sites, industrial zones, and remote project locations.
            </li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-x-0 top-6 h-4 bg-primary rounded-lg z-0"></div>
            <img
              src="/oog-cargo-crane.jpg"
              alt="OOG cargo being loaded by crane"
              className="relative z-10 object-cover w-full h-56 md:h-64 rounded-2xl"
            />
            <div className="absolute inset-x-0 bottom-6 h-4 bg-primary rounded-lg z-0"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-24">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-10 text-center">
          Reasons to Choose Moon Navigation and Trading Co. For Your Out-Of-Gauge Transportation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Expert Route Planning */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
              Expert Route Planning
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Our team conducts detailed route surveys and develops risk assessments to find the most efficient transport path for your out-of-gauge shipments.
            </p>
          </div>
          {/* Specialized Handling & Equipment */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
              Specialized Handling &amp; Equipment
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We utilize flat racks and open-top containers, heavy-lift cranes, and modular trailers for accommodation. Available 24/7 for project accuracy.
            </p>
          </div>
          {/* Customs & Regulatory Compliance */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
              Customs &amp; Regulatory Compliance
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We handle all necessary permits, authorizations, and documentation to ensure a smooth shipping process.
            </p>
          </div>
          {/* Global Network & Reliable Partnerships */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
              Global Network &amp; Reliable Partnerships
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Strong connections with ports, carriers, and logistics providers enable seamless international and inland transportation.
            </p>
          </div>
          {/* Tailored Logistics Solutions */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-foreground mb-2 text-base md:text-lg">
              Tailored Logistics Solutions
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Every shipment is unique, and we provide customized transport plans for the size, weight, and special requirements of your cargo.
            </p>
          </div>
        </div>
      </div>
      <section className="w-full bg-[#d3e3f4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Get your Quote with Us
          </h2>
          <p className="text-sm md:text-base text-[#23294d] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our streamlined LCL freight quotation process is designed for speed and convenience. At
            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
            Quotation by Request system. Simply fill out our short form to initiate your request. Once
            submitted, our team will assess your shipment’s volume, weight, and consolidation options to
            find the most efficient and cost-effective transport solution. You will receive a customized
            quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
            cargo movement.
          </p>
          <Link href="/container-services-forms" className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors inline-block">
            Request a Quote
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
