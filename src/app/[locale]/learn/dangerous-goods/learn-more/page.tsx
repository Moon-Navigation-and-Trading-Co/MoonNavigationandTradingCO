import GetQuoteComponent from "@/components/getQuoteComponent";
import React from "react";
import FAQSearch from "@/components/faq";

const sections = [
  {
    title: "1. Cargo Classification & Advisory",
    text: (
      <>
        We assist clients in correctly identifying and classifying hazardous materials based on the IMDG Code, ensuring proper labeling, documentation, and compliance from the start.
      </>
    ),
    img: "/a-1.jpg",
    imgAlt: "Cargo Classification Advisory",
    imgFirst: false,
  },
  {
    title: "2. Certified Packaging & Labeling Support",
    text: (
      <>
        Our experts guide you in selecting approved packaging materials and ensuring that all cargo is labeled and marked in accordance with international standards to prevent accidents or delays during handling and transit.
      </>
    ),
    img: "/a-2.jpg",
    imgAlt: "Certified Packaging Labeling",
    imgFirst: true,
  },
  {
    title: "3. Dangerous Goods Documentation Handling",
    text: (
      <>
        We prepare and verify all essential documentation for your shipment, including:
        <ul className="list-disc pl-6 mt-2">
          <li>Dangerous Goods Declaration (DGD)</li>
          <li>Material Safety Data Sheets (MSDS)</li>
          <li>Container Packing Certificate (CPC)</li>
          <li>Cargo Transport Units Checklist (CTU)</li>
          <li>Regulatory permits, when applicable</li>
        </ul>
      </>
    ),
    img: "/a-3.jpg",
    imgAlt: "Documentation Handling",
    imgFirst: false,
  },
  {
    title: "4. Specialized Container Equipment",
    text: (
      <>
        We offer a fleet of containers suitable for hazardous materials, including:
        <ul className="list-disc pl-6 mt-2">
          <li>Standard Dry Containers (20ft / 40ft)</li>
          <li>Reefer Containers for temperature-controlled hazardous cargo</li>
          <li>Ventilated or modified containers for specific cargo types</li>
          <li>Each container is inspected and maintained to meet safety standards and cargo segregation requirements.</li>
        </ul>
      </>
    ),
    img: "/a-4.jpg",
    imgAlt: "Specialized Container Equipment",
    imgFirst: true,
  },
  {
    title: "5. Port Handling & Carrier Coordination",
    text: (
      <>
        We manage the entire port handling process, ensuring smooth cargo acceptance, correct stowage planning, and coordination with shipping lines, terminals, and port authorities for compliant cargo movement.
      </>
    ),
    img: "/a-5.jpg",
    imgAlt: "Port Handling Coordination",
    imgFirst: false,
  },
  {
    title: "6. Route Planning & Risk Mitigation",
    text: (
      <>
        Our team evaluates shipment routes to ensure safe and efficient delivery. We conduct risk assessments, develop contingency plans, and select carriers based on cargo class and route sensitivity.
      </>
    ),
    img: "/a-6.jpg",
    imgAlt: "Route Planning Risk Mitigation",
    imgFirst: true,
  },
  {
    title: "7. Customs Clearance for Hazardous Cargo",
    text: (
      <>
        We provide full customs support for both export and import of dangerous goods, ensuring all documentation aligns with customs regulations and port requirements, avoiding any unnecessary delays.
      </>
    ),
    img: "/a-7.jpg",
    imgAlt: "Customs Clearance",
    imgFirst: false,
  },
  {
    title: "8. Dedicated Dangerous Goods Handling Team",
    text: (
      <>
        Our experienced team is trained and certified in hazardous materials handling. From initial planning to final delivery, we provide personalized service and direct communication at every stage.
      </>
    ),
    img: "/a-8.jpg",
    imgAlt: "Dedicated Handling Team",
    imgFirst: true,
  },
  {
    title: "9. Safety and Compliance Assurance",
    text: (
      <>
        We follow strict safety protocols and remain up-to-date with evolving international standards. Your cargo is handled with precision, ensuring full compliance with:
        <ul className="list-disc pl-6 mt-2">
          <li>IMDG Code</li>
          <li>ADR & RID regulations</li>
          <li>IATA for air transits (if multimodal is required)</li>
        </ul>
      </>
    ),
    img: "/a-9.jpg",
    imgAlt: "Safety Compliance Assurance",
    imgFirst: false,
  },
];

export default function DangerousGoodsLearnMore() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground mt-10 flex flex-col items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-5xl font-regular raleway-normal text-primary mb-6" style={{ lineHeight: 1.15 }}>
          Our Dangerous Goods Container Shipment Solutions
        </h1>
        <p className="text-lg md:text-xl font-light raleway-light text-foreground mb-16 max-w-3xl">
          At Moon Navigation and Trading Co., we provide specialized, fully compliant solutions for the safe and efficient transportation of hazardous cargo across international routes. Our goal is to minimize risk and ensure every shipment meets the highest standards of safety, precision, and reliability.
        </p>
        <div className="flex flex-col gap-24">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className={`flex flex-col ${section.imgFirst ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
            >
              <div className="flex-1 w-full max-w-xl">
                <h2 className="text-2xl md:text-3xl font-regular raleway-normal text-primary mb-4" style={{ lineHeight: 1.2 }}>
                  {section.title}
                </h2>
                <div className="text-base md:text-lg font-light raleway-light text-foreground">
                  {section.text}
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center">
                <img
                  src={section.img}
                  alt={section.imgAlt}
                  className="rounded-3xl object-cover shadow-md"
                  style={{ width: '420px', height: '260px', minWidth: 260, maxWidth: 420, minHeight: 180, maxHeight: 260 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <GetQuoteComponent topic="Dangerous Goods Transport" link="container-services-forms"/>
      <FAQSearch category="dangerous-goods"/> 
    </div>
  );
}
