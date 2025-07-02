import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-out-gauge");

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Top Banner */}
      <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
        <div className="relative w-full h-[180px] md:h-[260px]">
          <img
            src="/oog-1.jpg"
            alt="Out gauge cargo secured on flat rack"
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Title and CTA */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl md:text-3xl  text-foreground mb-2">
            Out Gauge
          </h1>
          <Link href="/container-services-forms">
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </Link> 
        </div>

        {/* Right: Description */}
        <div>
          <h2 className="text-lg  text-primary mb-2">
            What is Out Gauge?
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            Out of Gauge (OOG) refers to shipments that exceed the standard dimensions of a shipping container, making them unsuitable for transport in enclosed containers. These shipments are typically large, unusually shaped, or require special securing, equipment, and transport solutions to ensure safe and efficient delivery.
            <br /><br />
            At Moon Navigation and Trading Co., we provide tailored OOG container solutions, ensuring that even the largest, most complex cargo is handled efficiently, meeting compliance and safety requirements. Our expertise in securing, moving, and transporting out-of-gauge shipments ensures maximum protection and reliable results while maintaining compliance with international shipping regulations.
          </p>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl  text-primary mb-2 text-center">
          What We Transport
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-7xl mx-auto">
          Our OOG cargo services are designed to accommodate a wide variety of oversized shipments, including but not limited to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Industrial Machinery */}
          <div className="flex flex-col items-center">
            <div className="w-50 h-40 rounded-[3rem] overflow-hidden mb-3 shadow">
              <img
                src="/oog-2.jpg"
                alt="Industrial machinery"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-foreground">Industrial Machinery</span>
            <span className="text-xs text-muted-foreground text-center">
              Generators, turbines, transformers, pumps
            </span>
          </div>
          {/* Construction Equipment */}
          <div className="flex flex-col items-center">
            <div className="w-50 h-40 rounded-[3rem] overflow-hidden mb-3 shadow">
              <img
                src="/oog-3.jpg"
                alt="Construction equipment"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-foreground">Construction Equipment</span>
            <span className="text-xs text-muted-foreground text-center">
              Excavators, cranes, drilling rigs
            </span>
          </div>
          {/* Project Cargo */}
          <div className="flex flex-col items-center">
            <div className="w-50 h-40 rounded-[3rem] overflow-hidden mb-3 shadow">
              <img
                src="/oog-4.jpg"
                alt="Project cargo"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-foreground">Project Cargo</span>
            <span className="text-xs text-muted-foreground text-center">
              Oil & gas modules, wind energy equipment, industrial units
            </span>
          </div>
          {/* Military and Aerospace Equipment */}
          <div className="flex flex-col items-center">
            <div className="w-50 h-40 rounded-[3rem] overflow-hidden mb-3 shadow">
              <img
                src="/oog-5.jpg"
                alt="Military and aerospace equipment"
                className="object-cover w-full h-full"
              />
            </div>
            <span className=" text-center text-foreground">Military and Aerospace Equipment</span>
            <span className="text-xs text-muted-foreground text-center">
              Vehicles, aircraft components, installations
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Description */}
          <div className="bg-card rounded-3xl shadow p-6 md:p-8 border">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Handling Out-of-gauge cargo is a complex task that requires specialized equipment, custom handling techniques, and precise logistics management. Our team is highly experienced in coordinating the transportation of heavy, oversized, and project cargo, from industrial machinery to large-scale infrastructure components.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <div className="w-full h-40 md:h-56 rounded-[2rem] overflow-hidden shadow-lg flex items-center justify-center relative">
              <img
                src="/oog-6.jpg"
                alt="Out-of-gauge cargo experts"
                className="object-cover w-full h-full"
              />
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-white text-base md:text-lg  drop-shadow-lg">
                OOG Experts
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl  text-center text-primary mb-8">
          Our Specialized Equipment for OOG Transportation
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border bg-card shadow">
            <thead>
              <tr className="">
                <th className="px-4 py-3 text-left text-foreground border-b border-border border-r">
                  Equipment Type
                </th>
                <th className="px-4 py-3 text-left text-foreground border-b border-border border-r">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground align-top border-r">
                  Flat Rack Containers
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top border-r">
                  Ideal for wide and heavy cargo that exceeds standard width limits, providing open sides for easy loading and unloading.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground align-top border-r">
                  Open-Top Containers
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top border-r">
                  Suitable for cargo that is too tall for a standard container, allowing top-loading with cranes.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground align-top border-r">
                  Heavy-Lift Cranes &amp; Lifting Gear
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top border-r">
                  Used for safe loading and unloading of massive structures, ensuring stability and security.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-medium text-foreground align-top border-r">
                  Modular &amp; Hydraulic Trailers
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top border-r">
                  Designed for transporting extremely heavy and oversized loads over land, offering flexibility in weight distribution.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-foreground align-top border-r">
                  Roll-On/Roll-Off (RORO) Solutions
                </td>
                <td className="px-4 py-3 text-muted-foreground align-top border-r">
                  Best for self-propelled cargo such as heavy machinery, trucks, and large vehicles, ensuring efficient loading and unloading.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl  text-primary mb-10">
          What Sets Us Apart:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left: Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/oog-7.jpg"
                alt="Out Gauge Shipping Expert"
                className="object-cover w-full h-56 md:h-64"
              />
            </div>
          </div>
          {/* Right: Features */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className=" text-foreground mb-1 text-base md:text-lg">
                Customized Solutions for Every Shipment
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We recognize that every OOG cargo shipment is unique. Whether it's an oversized transformer or a large construction vehicle, our team personalizes transport solutions using the best equipment and methods to suit your cargo's industry.
              </p>
            </div>
            <div>
              <h3 className=" text-foreground mb-1 text-base md:text-lg">
                Access to Specialized Equipment
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Our fleet includes a wide range of flat racks, open-top containers, and platform solutions for out-gauge loads. We accommodate even the most advanced oversized container dimensions.
              </p>
            </div>
            <div>
              <h3 className=" text-foreground mb-1 text-base md:text-lg">
                Expert Handling and Securing
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We employ a team of skilled professionals who use the latest lashing and securing technology to ensure your OOG cargo is safe at every stage. From heavy-lift cranes to other flat-rack-specific equipment, our team delivers the highest level of technical excellence for complex handling needs.
              </p>
            </div>
            <div>
              <h3 className=" text-foreground mb-1 text-base md:text-lg">
                Global Logistics Network
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                We offer comprehensive worldwide reach and last-mile shipping options, so your shipment is handled with precision and efficiency, no matter where in the world it is headed.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className=" text-foreground mb-1 text-base md:text-lg">
                Route Planning and Compliance
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Our logistics experts conduct route analysis and obtain all necessary permits to mitigate risk, avoid any shipment restrictions, ensuring your shipment moves smoothly without delays.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl  text-primary mb-3">
            End-to-End OOG Cargo Logistics Services
          </h2>
          <p className="text-muted-foreground mb-5 text-base md:text-lg">
            We provide complete logistics solutions to handle OOG cargo from start to finish.
          </p>
          <ul className="list-disc list-inside space-y-3 text-base text-foreground pl-2">
            <li>
              <span className="">Port Handling &amp; Stevedoring</span> – Safe loading, unloading, and storage at ports.
            </li>
            <li>
              <span className="">Customs Clearance &amp; Documentation</span> – We handle all approvals, ensuring smooth cross-border transport.
            </li>
            <li>
              <span className="">Inland Transportation</span> – Seamless delivery using heavy-duty trucks, modular trailers, and rail transport.
            </li>
            <li>
              <span className="">Final Delivery &amp; Project Logistics</span> – We manage delivery to construction sites, industrial zones, and remote project locations.
            </li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-x-0 top-6 h-4 bg-primary rounded-lg z-0"></div>
            <img
              src="/oog-8.jpg"
              alt="OOG cargo being loaded by crane"
              className="relative z-10 object-cover w-full h-56 md:h-64 rounded-2xl"
            />
            <div className="absolute inset-x-0 bottom-6 h-4 bg-primary rounded-lg z-0"></div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-24">
        <h2 className="text-xl md:text-2xl  text-primary mb-10 text-center">
          Reasons to Choose Moon Navigation and Trading Co. For Your Out-Of-Gauge Transportation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Expert Route Planning */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Expert Route Planning
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Our team conducts detailed route surveys and develops risk assessments to find the most efficient transport path for your out-of-gauge shipments.
            </p>
          </div>
          {/* Specialized Handling & Equipment */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Specialized Handling &amp; Equipment
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We utilize flat racks and open-top containers, heavy-lift cranes, and modular trailers for accommodation. Available 24/7 for project accuracy.
            </p>
          </div>
          {/* Customs & Regulatory Compliance */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Customs &amp; Regulatory Compliance
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              We handle all necessary permits, authorizations, and documentation to ensure a smooth shipping process.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Global Network & Reliable Partnerships */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Global Network &amp; Reliable Partnerships
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Strong connections with ports, carriers, and logistics providers enable seamless international and inland transportation.
            </p>
          </div>
          {/* Tailored Logistics Solutions */}
          <div className="flex flex-col items-center text-center">
            <h3 className=" text-foreground mb-2 text-base md:text-lg">
              Tailored Logistics Solutions
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Every shipment is unique, and we provide customized transport plans for the size, weight, and special requirements of your cargo.
            </p>
          </div>
        </div>
      </div>
      <GetQuoteComponent topic="Out Gauge" link="/container-services-forms" />
    </div>
  );
}
