import Image from "next/image";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Link from "next/link";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import { Award, Ship, Truck, Building2, Shield, Clock } from "lucide-react";

export default function ProjectCargoLearnMore() {
  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36 font-raleway">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Project Cargo Solutions</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-6 leading-tight">
            Our Project Cargo Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            At Moon Navigation and Trading Co., we specialize in transporting cargo that exceeds standard shipping dimensions and weight limits, ensuring safe and efficient handling through tailored solutions.
          </p>
        </div>
      </section>

      {/* Section 1 - Heavy Lift & Oversized Cargo Solutions */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
                          <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Ship className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-primary">
                  Heavy Lift & Oversized Cargo Solutions
                </h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                We specialize in transporting cargo that exceeds standard shipping dimensions and weight limits, ensuring safe and efficient handling through tailored solutions:
              </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Specialized Vessel Chartering</h4>
                  <p className="text-gray-600 font-light text-sm">Secure transport using breakbulk, heavy lift, and semi-submersible vessels.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Crane & Lifting Equipment</h4>
                  <p className="text-gray-600 font-light text-sm">High-capacity cranes for safe and precise loading/unloading.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Engineering & Load Planning</h4>
                  <p className="text-gray-600 font-light text-sm">Custom lifting and securing strategies for optimal safety.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Permit & Regulatory Compliance</h4>
                  <p className="text-gray-600 font-light text-sm">Expert management of transport permissions and clearances.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/project-cargo-heavy-lift.jpg"
              alt="Heavy lift cargo vessel at port"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-500 h-[300px] md:h-[500px]"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Multimodal Transport and Route Planning */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group order-1 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/project-cargo-multimodal.jpg"
              alt="Multimodal transport of project cargo"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-500 h-[300px] md:h-[500px]"
              priority={false}
            />
          </div>
          <div className="space-y-8 order-2 lg:order-2">
                          <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-primary">
                  Multimodal Transport and Route Planning
                </h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Project cargo often demands a strategic blend of transport modes to ensure safe and efficient delivery.
              </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Multimodal Logistics</h4>
                  <p className="text-gray-600 font-light text-sm">Seamless coordination across sea, air, rail, and land transport.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Port-to-Site Delivery</h4>
                  <p className="text-gray-600 font-light text-sm">Reliable inland transport from ports to final project locations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Specialized Equipment</h4>
                  <p className="text-gray-600 font-light text-sm">Integrated modular trailers, low-bed trailers, and SPMTs for heavy and oversized cargo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Route Planning and Feasibility</h4>
                  <p className="text-gray-600 font-light text-sm">In-depth surveys to identify the safest and most efficient routes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Industry-Specific Solutions */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
                          <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-primary">
                  Industry-Specific Solutions
                </h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Our project cargo services cater to diverse industries, ensuring the safe and efficient transport of specialized equipment:
              </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Oil and Gas</h4>
                  <p className="text-gray-600 font-light text-sm">Pipelines, drilling rigs, and refinery components.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Construction and Infrastructure</h4>
                  <p className="text-gray-600 font-light text-sm">Steel structures, bridge sections, and segmental concrete.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Renewable Energy</h4>
                  <p className="text-gray-600 font-light text-sm">Wind turbines, solar panels, and hydropower components.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Mining and Heavy Machinery</h4>
                  <p className="text-gray-600 font-light text-sm">Excavators, crushers, and industrial plant equipment.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/project-cargo-industries.jpg"
              alt="Project cargo for energy, construction, mining, and renewables"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-500 h-[300px] md:h-[500px]"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Customs Clearance and Compliance */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group order-1 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/customs-clearance-compliance.jpg"
              alt="Customs officer checking documents at shipping containers"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-500 h-[300px] md:h-[500px]"
              priority={false}
            />
          </div>
          <div className="space-y-8 order-2 lg:order-2">
                          <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-primary">
                  Customs Clearance and Compliance
                </h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                We handle all regulatory requirements to ensure smooth cross-border transport.
              </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Customs Documentation</h4>
                  <p className="text-gray-600 font-light text-sm">Managing permits, duties, and tax clearances.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Import/Export Compliance</h4>
                  <p className="text-gray-600 font-light text-sm">Ensuring adherence to international shipping regulations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Cargo Insurance and Risk Management</h4>
                  <p className="text-gray-600 font-light text-sm">Protecting high-value shipments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Turnkey Project Logistics */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
                          <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-primary">
                  Turnkey Project Logistics
                </h2>
              </div>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                <span className="text-primary font-light">From initial planning to final delivery,</span> we manage every aspect of complex cargo movements.
              </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">End-to-end coordination</h4>
                  <p className="text-gray-600 font-light text-sm">Single point of contact for all logistics operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Site Surveys and Risk Assessments</h4>
                  <p className="text-gray-600 font-light text-sm">Identifying and mitigating potential challenges.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">On-Site Supervision</h4>
                  <p className="text-gray-600 font-light text-sm">Assuring safe and efficient handling at every stage.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-light text-gray-900 mb-1 text-sm">Time-sensitive Solutions</h4>
                  <p className="text-gray-600 font-light text-sm">Meeting strict project deadlines.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/turnkey-project-logistics.jpg"
              alt="Project logistics team supervising heavy cargo at a port"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-500 h-[300px] md:h-[500px]"
              priority={false}
            />
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Project Cargo" link="/ocean-freight-forms" />
      <FAQSearch category="project-cargo" />
    </main>
  );
}
