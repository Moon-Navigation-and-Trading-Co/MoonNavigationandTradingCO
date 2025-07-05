import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function PDABreakdownPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      <h1 className="text-2xl md:text-3xl  text-[#2a4365] mb-2">
        Breakdown of our PDA – What It Includes
      </h1>
      <p className="text-[#444] mb-8 max-w-2xl text-sm">
        Our Proforma Disbursement Account covers all critical cost components related to port operations, ensuring clarity in financial planning. Below is a detailed breakdown of what is included.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-lg  text-[#2a4365] mb-2">1. Port & Terminal Charges</h2>
          <p className="text-[#444] mb-4">
            We provide comprehensive insight into the various associated with port operations, ensuring your costs remain as streamlined and accurate as possible.
          </p>
          <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
            <li>
              <span className="">Port Funds & Berthing Fees:</span> Charges for utilizing port infrastructure and anchorage, inclusive of quay & berthage costs. Fees associated with vessels keeping at designated port zones.
            </li>
            <li>
              <span className="">Harbor & Customs Duties:</span> Costs for compliance with local customs regulations and official port dues.
            </li>
            <li>
              <span className="">Mooring & Unmooring Fees:</span> Charges for securing and releasing the vessel at/from the port.
            </li>
          </ul>
          <p className="text-[#444] text-sm">
            With our commitment to transparency and accuracy, we guide business owners through the complexities of port fees, empowering them to make informed disbursement choices while managing their shipping efficiently.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/b-pda-1.jpg"
            alt="Port terminal with ship and worker"
            width={350}
            height={200}
            className="rounded-xl shadow-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div className="flex justify-center order-2 md:order-1">
        <Image
          src="/b-pda-2.jpg"
          alt="Harbor pilot observing ship arrival"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-lg  text-[#2a4365] mb-2">2. Pilotage and Towage Fees</h2>
        <p className="text-[#444] mb-4">
          We recognize the importance of pilotage and towage services in ensuring safe and efficient maritime operations.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Pilotage Charges:</span> Paid to highly trained local pilots who navigate vessels safely into the port.
          </li>
          <li>
            <span className="">Towage Services:</span> Cover assistance from tugboats that assist in berthing, maneuvering, and unberthing vessels.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          These services are crucial, as they guarantee that vessels can safely and efficiently enter and exit the port under expert supervision. Our commitment to managing these essential services enhances the overall cost-effectiveness of maritime activities for our clients.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div>
        <h2 className="text-lg  text-[#2a4365] mb-2">3. Customs and Immigration Clearance Fees</h2>
        <p className="text-[#444] mb-4">
          We understand the critical role that customs processing and related fees play in facilitating smooth maritime operations.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Customs Processing Fees:</span> Charges for cargo and vessel clearance through all customs authorities and for routine formal inspections.
          </li>
          <li>
            <span className="">Crew Immigration Fees:</span> Costs associated with processing crew members’ entry and exit at the port, ensuring compliance with immigration regulations.
          </li>
          <li>
            <span className="">Health and Sanitary Inspection Charges:</span> Fees required for compliance with port health regulations, safety, and public health and safety.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          By addressing these fees and requirements, we help prevent delays, penalties, and regulatory issues, ensuring that all customs and crew obligations are met efficiently.
        </p>
      </div>
      <div className="flex justify-center order-2 md:order-2">
        <Image
          src="/b-pda-3.jpg"
          alt="Customs officer inspecting shipping documents at port"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div className="flex justify-center order-1 md:order-1">
        <Image
          src="/b-pda-4.jpg"
          alt="Container being loaded and unloaded at port"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="order-2 md:order-2">
        <h2 className="text-lg  text-[#2a4365] mb-2">4. Cargo Handling and Stevedoring</h2>
        <p className="text-[#444] mb-4">
          We are dedicated to facilitating efficient cargo handling at port through our management of essential services.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Loading and Unloading Fees:</span> Cover labor and the necessary equipment to load and unload, ensuring smooth transition during the ship’s presence.
          </li>
          <li>
            <span className="">Stevedore Services:</span> Which incorporates labor charges for skilled cargo handling, guaranteeing that your goods are managed with care and expertise.
          </li>
          <li>
            <span className="">Equipment Rental Fees:</span> For essential cranes, forklifts, and other necessary port equipment to support cargo operations.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          By efficiently managing these expenses, we ensure all cargo is handled and unloaded efficiently and safely, minimizing delays and supporting your supply chain’s reliability.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div className="order-1 md:order-1">
        <h2 className="text-lg  text-[#2a4365] mb-2">5. Bunker, Fresh Water and Provisions Supply</h2>
        <p className="text-[#444] mb-4">
          We recognize the importance of essential services that keep vessels operational and compliant with safety regulations.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Bunkering Fees:</span> Costs associated with refueling the vessel, ensuring it has energy for its next journey.
          </li>
          <li>
            <span className="">Fresh Water Supply Charges:</span> For delivering potable water to the vessel, essential for crew health and safety.
          </li>
          <li>
            <span className="">Provisions and Stores Delivery:</span> Costs for food, beverages, and other essentials for the crew, maintaining comfort and efficiency onboard.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          By efficiently coordinating these services, we ensure that vessels are fully operational and meet all necessary compliance standards, allowing for seamless and safe operations.
        </p>
      </div>
      <div className="flex justify-center order-2 md:order-2">
        <Image
          src="/b-pda-5.jpg"
          alt="Truck delivering fresh water and crane loading provisions onto ship"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div className="flex justify-center order-1 md:order-1">
        <Image
          src="/b-pda-6.jpg"
          alt="Port worker managing waste disposal on ship"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="order-2 md:order-2">
        <h2 className="text-lg  text-[#2a4365] mb-2">6. Waste Disposal and Environmental Fees</h2>
        <p className="text-[#444] mb-4">
          We prioritize environmental responsibility in maritime operations by managing essential waste disposal and compliance costs.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Garbage Collection and Disposal Fees:</span> Charges for removing waste from the vessel, ensuring compliance with environmental standards.
          </li>
          <li>
            <span className="">Sludge and Bilge Water Disposal:</span> Costs associated with handling oil-contaminated waste in accordance with local waste management.
          </li>
          <li>
            <span className="">Ballast Water Treatment Fees:</span> Fees for ensuring compliance with global environmental regulations on ballast water management.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          By effectively managing these services, we help our clients meet both environmental and sustainability standards set by international organizations (IMO) and authorities, promoting responsible shipping worldwide.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div className="order-1 md:order-1">
        <h2 className="text-lg  text-[#2a4365] mb-2">7. Security and Emergency Services</h2>
        <p className="text-[#444] mb-4">
          We prioritize the safety and security of maritime operations.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Port Security Charges:</span> Cost associated with compliance with the International Ship and Port Facility Security (ISPS) Code, including necessary security patrols and surveillance at the port.
          </li>
          <li>
            <span className="">Firefighting and Emergency Response Fees:</span> Charges for emergency support at the port, ensuring vessels’ safety in critical situations.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          By effectively coordinating these services, we ensure that our clients’ vessels comply with maritime security and emergency protocols. Trusting us reduces overall risk to all maritime activities.
        </p>
      </div>
      <div className="flex justify-center order-2 md:order-2">
        <Image
          src="/b-pda-7.jpg"
          alt="Port security officers monitoring ship arrivals"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div className="flex justify-center order-2 md:order-1">
        <Image
          src="/b-pda-8.jpg"
          alt="Ship agent at desk with port in background"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-lg  text-[#2a4365] mb-2">8. Agency Fees and Documentation</h2>
        <p className="text-[#444] mb-4">
          We offer comprehensive financial and administrative support to ensure smooth operations during a vessel’s port stay.
        </p>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="">Our Ship Agency Fees:</span> Cover the charges for our professionals’ ship agency services, providing expert guidance and management throughout the process.
          </li>
          <li>
            <span className="">Administrative Costs:</span> which include fees for managing paperwork, permits, and legal formalities, ensuring compliance with regulatory requirements.
          </li>
          <li>
            <span className="">Final Disbursement Account (FDA):</span> Ensuring that actual expenses match initial estimates, providing clarity and transparency in financial management.
          </li>
        </ul>
        <p className="text-[#444] text-sm">
          By effectively coordinating these services, we provide our clients with the peace of mind that comes from knowing their financial and administrative needs are expertly managed during their time in port.
        </p>
      </div>
    </div>
    <GetQuoteComponent topic = "PDA" link = "/ship-agency-forms"/> 
    <FAQSearch category="ship-agency-services" />
    </div>
  );
}
