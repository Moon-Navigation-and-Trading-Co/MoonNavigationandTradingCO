import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Image from "next/image";

const reeferSolutions = [
  {
    title: "Door-to-Door Reefer Transport Solutions",
    badge: "End-to-End Transport",
    description: "We provide end-to-end and widespread operations, ensuring your cargo is collected from your facility and delivered directly to its destination under controlled temperature conditions. Our door-to-door services eliminate multiple handoffs, reduce handling risks, and minimize compliance risks with industry quality standards.",
    features: [
      "Seamless coordination from origin to destination",
      "One point of contact for the full journey", 
      "Cold chain integrity preserved throughout"
    ],
    image: "/reefer-truck-road.jpg",
    imageAlt: "Reefer truck on highway",
    imageFirst: false
  },
  {
    title: "Custom Routing for Perishable Cargo",
    badge: "Route Optimization",
    description: "We understand that timing and routing are crucial for perishable goods. Our team offers customized transport planning to choose the most efficient routes and shortest transit times, minimizing spoilage risk and maximizing product shelf life.",
    features: [
      "Optimized scheduling based on cargo type",
      "Strategic selection of transit routes and carriers",
      "Shipment status updates and progress tracking through every stage of transport"
    ],
    image: "/reefer-custom-routing.jpg",
    imageAlt: "Custom routing for perishable cargo",
    imageFirst: true
  },
  {
    title: "Integrated Warehousing and Cold Storage Services",
    badge: "Cold Storage",
    description: "In addition to transport, we offer cold storage solutions at key logistics hubs, allowing safe interim storage of temperature-sensitive goods. Our facilities are equipped with modern cooling systems to maintain ideal temperature and humidity levels.",
    features: [
      "Temperature-controlled warehousing at origin or destination",
      "Ideal for cargo consolidation or distribution",
      "Scalable storage solutions for short or long-term needs"
    ],
    image: "/reefer-cold-storage.jpg",
    imageAlt: "Modern cold storage warehouse exterior",
    imageFirst: false
  },
  {
    title: "Multimodal Transport Options",
    badge: "Multimodal Solutions",
    description: "We provide flexible multimodal transportation options, combining sea, air, and inland logistics to optimize your supply chain and distribution. Whether it's single or hybrid shipments, maintain temperature control across all transport modes.",
    features: [
      "Seamless cross-modal transfers without temperature disruption",
      "Efficient coordination between sea, air, and land carriers",
      "Greater reach and delivery flexibility"
    ],
    image: "/reefer-multimodal.jpg",
    imageAlt: "Multimodal transport options: sea, air, and inland",
    imageFirst: true
  },
  {
    title: "Risk Management and Cargo Insurance Solutions",
    badge: "Risk Management",
    description: "Protecting your high-value and perishable cargo is our priority. We offer tailored risk mitigation strategies and insurance coverage to safeguard your goods from unforeseen events such as equipment failure, delays, or spoilage.",
    features: [
      "Reefer cargo-specific insurance options",
      "Risk analysis and contingency planning",
      "Claims support and loss prevention advisory"
    ],
    image: "/reefer-insurance.jpg",
    imageAlt: "Cargo insurance and risk management for reefer shipping",
    imageFirst: false
  },
  {
    title: "Cargo Tracking and Temperature Monitoring Systems",
    badge: "Real-time Monitoring",
    description: "We ensure effective cargo oversight through advanced monitoring protocols and temperature control measures throughout the transportation process. Our operations team routinely supervises shipments and keeps clients informed at every stage of the journey.",
    features: [
      "Real-time updates on shipment status during key transit points",
      "Temperature performance checks and automated notifications/alerts",
      "Detailed logs for auditing and regulatory compliance",
      "Proactive communication from our operations team to keep you informed"
    ],
    image: "/reefer-tracking-monitoring.jpg",
    imageAlt: "Cargo tracking and temperature monitoring systems",
    imageFirst: true
  },
  {
    title: "Special Handling for Hazardous Temperature-Sensitive Cargo",
    badge: "Hazmat Expertise",
    description: "Certain hazardous goods also require controlled temperatures, such as temperature-sensitive chemicals or pharmaceutical compounds. Our team is trained and certified to handle such shipments with special protocols to ensure safety and compliance.",
    features: [
      "Expertise in IMDG/IMO-classified reefer cargo",
      "Specialized packaging, labeling, and documentation",
      "Compliance with safety regulations and cold chain integrity"
    ],
    image: "/reefer-hazardous-handling.jpg",
    imageAlt: "Special handling for hazardous temperature-sensitive cargo",
    imageFirst: false
  }
];

export default function LearnMore() {
  return (
    <main className="flex-1 flex flex-col gap-12 sm:gap-16 md:gap-20" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Reefer Solutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Refrigerated Container Shipping Solutions
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At Moon Navigation and Trading Co., we offer a comprehensive range of refrigerated shipping solutions tailored to protect the integrity of your temperature-sensitive cargo throughout every stage of the logistics process. Our services are designed to meet industry-specific demands, enhance operational efficiency, and ensure quality delivery from pickup to final destination.
            </p>
          </div>
        </div>
      </section>

      {reeferSolutions.map((solution, idx) => (
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
                      <ul className="space-y-2 text-base text-gray-600">
                        {solution.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
                      <ul className="space-y-2 text-base text-gray-600">
                        {solution.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
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
      
      <GetQuoteComponent topic="Refrigerated Container" link="/container-services-forms" />
      <FAQSearch category="reefer-container" />
    </main>
  );
}