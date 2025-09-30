import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";

const dangerousGoodsSolutions = [
  {
    title: "Cargo Classification & Advisory",
    badge: "Classification",
    description: "We assist clients in correctly identifying and classifying hazardous materials based on the IMDG Code, ensuring proper labeling, documentation, and compliance from the start.",
    image: "/Cargo Classification & Advisory.jpeg",
    imageAlt: "Cargo Classification & Advisory",
    imageFirst: false,
  },
  {
    title: "Certified Packaging & Labeling Support",
    badge: "Packaging & Labeling",
    description: "Our experts guide you in selecting approved packaging materials and ensuring that all cargo is labeled and marked in accordance with international standards to prevent accidents or delays during handling and transit.",
    image: "/Packaging and Labeling-2 (4) (1).png",
    imageAlt: "Certified Packaging & Labeling Support",
    imageFirst: true,
  },
  {
    title: "Dangerous Goods Documentation Handling",
    badge: "Documentation",
    description: "We prepare and verify all essential documentation for your shipment, including:",
    features: [
      "Dangerous Goods Declaration (DGD)",
      "Material Safety Data Sheets (MSDS)",
      "Container Packing Certificate (CPC)",
      "Cargo Transport Units Checklist (CTU)",
      "Regulatory permits, when applicable"
    ],
    image: "/Dangerous Goods Documentation Handling.jpeg",
    imageAlt: "Dangerous Goods Documentation Handling",
    imageFirst: false,
  },
  {
    title: "Specialized Container Equipment",
    badge: "Specialized Equipment",
    description: "We offer a fleet of containers suitable for hazardous materials, including:",
    features: [
      "Standard Dry Containers (20ft / 40ft)",
      "Reefer Containers for temperature-controlled hazardous cargo",
      "Ventilated or modified containers for specific cargo types",
      "Each container is inspected and maintained to meet safety standards and cargo segregation requirements."
    ],
    image: "/Specialized Container Equipment (1).png",
    imageAlt: "Specialized Container Equipment",
    imageFirst: true,
  },
  {
    title: "Port Handling & Carrier Coordination",
    badge: "Port Operations",
    description: "We manage the entire port handling process, ensuring smooth cargo acceptance, correct stowage planning, and coordination with shipping lines, terminals, and port authorities for compliant cargo movement.",
    image: "/Port Handling & Carrier Coordination.png",
    imageAlt: "Port Handling & Carrier Coordination",
    imageFirst: false,
  },
  {
    title: "Route Planning & Risk Mitigation",
    badge: "Route Planning",
    description: "Our team evaluates shipment routes to ensure safe and efficient delivery. We conduct risk assessments, develop contingency plans, and select carriers based on cargo class and route sensitivity.",
    image: "/Route Planning & Risk Assessment.png",
    imageAlt: "Route Planning & Risk Mitigation",
    imageFirst: true,
  },
  {
    title: "Customs Clearance for Hazardous Cargo",
    badge: "Customs Clearance",
    description: "We provide full customs support for both export and import of dangerous goods, ensuring all documentation aligns with customs regulations and port requirements, avoiding any unnecessary delays.",
    image: "/custom clearance (1).jpeg",
    imageAlt: "Customs Clearance for Hazardous Cargo",
    imageFirst: false,
  },
  {
    title: "Dedicated Dangerous Goods Handling Team",
    badge: "Expert Team",
    description: "Our experienced team is trained and certified in hazardous materials handling. From initial planning to final delivery, we provide personalized service and direct communication at every stage.",
    image: "/Dedicated Dangerous Goods Handling Team-2 (1).png",
    imageAlt: "Dedicated Dangerous Goods Handling Team",
    imageFirst: true,
  },
  {
    title: "Safety and Compliance Assurance",
    badge: "Safety & Compliance",
    description: "We follow strict safety protocols and remain up-to-date with evolving international standards. Your cargo is handled with precision, ensuring full compliance with:",
    features: [
      "IMDG Code",
      "ADR & RID regulations",
      "IATA for air transits (if multimodal is required)"
    ],
    image: "/Safety and Compliance Assurance.png",
    imageAlt: "Safety and Compliance Assurance",
    imageFirst: false,
  },
];

export default function DangerousGoodsLearnMore() {
  return (
    <main className="flex-1 flex flex-col gap-12 sm:gap-16 md:gap-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Dangerous Goods Solutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Dangerous Goods Transportation Solutions
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At Moon Navigation and Trading Co., we provide specialized, fully compliant solutions for the safe and efficient transportation of hazardous cargo across international routes. Our goal is to minimize risk and ensure every shipment meets the highest standards of safety, precision, and reliability.
            </p>
          </div>
        </div>
      </section>

      {dangerousGoodsSolutions.map((solution, idx) => (
        <section 
          key={solution.title} 
          className={`px-4 sm:px-6 lg:px-8 py-12 ${idx % 2 === 1 ? 'bg-gradient-to-br from-gray-50 via-white to-blue-50/30' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className={`${solution.imageFirst ? 'order-1 lg:order-1' : 'order-2 lg:order-1 space-y-6'}`}>
                {!solution.imageFirst && (
                  <>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>{solution.badge}</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                      {solution.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-base text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                      {solution.features && (
                        <ul className="space-y-2 text-base text-gray-600">
                          {solution.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                )}
                {solution.imageFirst && (
                  <div className="relative">
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image src={solution.image} alt={solution.imageAlt} fill className="object-cover" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`${solution.imageFirst ? 'order-2 lg:order-2 space-y-6' : 'order-1 lg:order-2 relative'}`}>
                {solution.imageFirst && (
                  <>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>{solution.badge}</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                      {solution.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-base text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                      {solution.features && (
                        <ul className="space-y-2 text-base text-gray-600">
                          {solution.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                )}
                {!solution.imageFirst && (
                  <div className="relative">
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image src={solution.image} alt={solution.imageAlt} fill className="object-cover" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
      
      <GetQuoteComponent topic="Dangerous Goods Transport" link="/container-services-forms"/>
      <FAQSearch category="dangerous-goods"/> 
    </main>
  );
}
