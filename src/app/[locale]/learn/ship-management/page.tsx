"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import RequestQuoteButton from "@/components/RequestQuoteButton"; 
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import OverviewServicesTabs from "@/components/overview-services";
import ReasonsGrid from "@/components/ReasonsGrid";

function overview() {
  return (
    <>
      <div className="w-full rounded-[60px] overflow-hidden">
        <Image
          src="/sm-1.jpg"
          alt="Ship management at port"
          width={1200}
          height={350}
          className="w-full h-[350px] object-cover"
          priority
        />
      </div>
      <div className="pt-8 pb-4 px-2 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Title and CTA */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl  text-[#377393]">Ship Management</h1>
            <Link href="/ship-management-forms">
              <RequestQuoteButton>
                Request a Quote
              </RequestQuoteButton>
            </Link>
          </div>
          {/* Right: What is Ship Management */}
          <div className="flex-1">
            <h2 className="text-lg font-medium text-[#377393] mb-2 flex items-center gap-2">
              What is Ship Management <span className="text-base">?</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ship management is the comprehensive process of overseeing the operation, maintenance, and administration of vessels, ensuring their maximum efficiency, safety, and compliance with international maritime regulations. At Moon Navigation, we excel in providing professional ship management services tailored to the needs of shipping companies, charterers, and owners. Our dedicated team is committed to upholding the highest standards in safety and regulatory compliance, allowing our clients to concentrate on their core business objectives while we manage all aspects of their vessel operations with precision and expertise.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function AnchorNav() {
  const buttons = [
    { label: "Technical Management", id: "technical-management" },
    { label: "Crew Management", id: "crew-management" },
    { label: "Operational Management", id: "operational-management" },
    { label: "Procurement & Supply Chain Support", id: "procurement-supply-chain" },
    { label: "Maintenance Planning & Condition Monitoring", id: "maintenance-planning" },
    { label: "Safety & Quality Management", id: "safety-quality" },
    { label: "Fuel & Provision Management", id: "fuel-provision" },
    { label: "Regulatory Compliance & Certification", id: "regulatory-compliance" },
    { label: "Financial Management & Budget Control", id: "financial-management" },
    { label: "Insurance & Claims Handling", id: "insurance-claims" },
    { label: "Dry Docking & Project Management", id: "dry-docking" },
    { label: "Performance Monitoring & Reporting", id: "performance-monitoring" },
    { label: "Customized Ship Management Solutions", id: "customized-solutions" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
      <h2 className="text-3xl md:text-4xl font-raleway font-regular text-[#377393] mb-2">Our Ship Management Services</h2>
      <p className="mb-8 text-base md:text-lg text-[#444] font-raleway font-light max-w-3xl">At Moon Navigation and Trading Co., our ship management services ensure vessels remain operational, compliant, and efficient. Our comprehensive solutions include:</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {buttons.map(btn => (
          <a key={btn.id} href={`#${btn.id}`} className="bg-[#273c75] text-white rounded-full px-6 py-3 font-raleway font-regular text-base shadow hover:bg-[#1d2b4f] transition-colors">{btn.label}</a>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="#crisis-emergency" className="bg-[#a32424] text-white rounded-xl px-8 py-4 font-raleway font-regular text-base shadow hover:bg-[#7a1818] transition-colors">Crisis & Emergency Response Management</Link>
      </div>
    </section>
  );
}

function services() {
  return (
    <>
      <AnchorNav />
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="technical-management">
        {/* Technical Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-2.jpg"
              alt="Technical management team reviewing ship operations"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Technical Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">1. Technical Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We provide full technical management services, ensuring vessels are maintained and operated to the highest standards.</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Planned Maintenance:</span> Regular monitoring and planned maintenance for vessel machinery and systems.</li>
            <li><span className="text-foreground">Repairs and Troubleshooting:</span> Fast response for technical problems onboard.</li>
            <li><span className="text-foreground">Dry Docking Supervision:</span> Planning and execution of dry dock repairs and upgrades.</li>
            <li><span className="text-foreground">Spare Parts Management:</span> Timely sourcing and delivery of critical spares and technical equipment.</li>
            <li><span className="text-foreground">Condition Monitoring:</span> Ongoing performance tracking of onboard machinery and systems.</li>
            <li><span className="text-foreground">Regulatory Compliance:</span> Ensuring full compliance of vessel with class requirements and international regulations (ISM, MARPOL, SOLAS, etc).</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="crew-management">
        {/* Crew Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">2. Crew Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We provide experienced, trained, and qualified crew to operate your vessel smoothly.</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Recruitment and Selection:</span> Careful screening and hiring of competent officers and ratings.</li>
            <li><span className="text-foreground">Training and Certification:</span> Ensuring all crew members are certified and trained to international standards (STCW, MLC 2006).</li>
            <li><span className="text-foreground">Crew Scheduling and Rotation:</span> Managing schedules, rotations, and relief planning for smooth operations.</li>
            <li><span className="text-foreground">Medical and Welfare Support:</span> Health checks, insurances, and ongoing crew welfare services.</li>
            <li><span className="text-foreground">Travel and Documentation:</span> Handling visas, tickets, and all necessary seafarer paperwork.</li>
            <li><span className="text-foreground">Payroll and Administration:</span> Salary management and crew documentation support.</li>
          </ul>
        </div>
        {/* Crew Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-3.jpg"
              alt="Two crew members in uniform smiling on deck"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover object-[80%_20%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="operational-management">
        {/* Operational Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-4.jpg"
              alt="Ship operational management team at port"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Operational Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">3. Operational Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We handle daily operations to ensure smooth, compliant, and efficient voyages:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Voyage Planning:</span> Optimized routing and scheduling for cost and time efficiency.</li>
            <li><span className="text-foreground">Port Call Coordination:</span> Handling port clearances, agents, and berthing arrangements.</li>
            <li><span className="text-foreground">Cargo Operations Support:</span> Ensuring safe and efficient cargo handling and documentation.</li>
            <li><span className="text-foreground">Charter Party Compliance Monitoring:</span> Adherence to contractual obligations.</li>
            <li><span className="text-foreground">Reporting and Communication:</span> Real-time updates and operational reporting to owners.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="procurement-supply-chain">
        {/* Procurement & Supply Chain Support Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">4. Procurement and Supply Chain Support</h2>
          <p className="text-sm text-muted-foreground mb-2">We manage timely and cost-effective procurement to keep your vessel fully stocked:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Provisions and Stores:</span> Sourcing food, safety gear, tools, and consumables.</li>
            <li><span className="text-foreground">Spare Parts Sourcing:</span> Coordinating with trusted suppliers and OEMs.</li>
            <li><span className="text-foreground">Inventory Control:</span> Stock level tracking to avoid shortages or overstocking.</li>
            <li><span className="text-foreground">Vendor Management:</span> Evaluating suppliers to ensure quality and cost-efficiency.</li>
            <li><span className="text-foreground">Logistics Coordination:</span> Global sourcing with end-to-end delivery management.</li>
          </ul>
        </div>
        {/* Procurement & Supply Chain Support Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-5.jpg"
              alt="Warehouse worker in high-visibility vest standing in aisle of stocked shelves"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="maintenance-planning">
        {/* Maintenance Planning & Condition Monitoring Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-6.jpg"
              alt="Engineers monitoring vessel maintenance and condition data on digital screens"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Maintenance Planning & Condition Monitoring Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">5. Maintenance Planning and Condition Monitoring</h2>
          <p className="text-sm text-muted-foreground mb-2">We ensure vessel reliability through structured maintenance programs and continual equipment monitoring:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Planned Maintenance:</span> Schedules based on manufacturer guidelines and vessel operating hours.</li>
            <li><span className="text-foreground">Condition-Based Monitoring:</span> Ongoing assessment of machinery performance to detect early signs of issues.</li>
            <li><span className="text-foreground">Fault Diagnostics:</span> Predictive tools used to identify faults and reduce potential downtime.</li>
            <li><span className="text-foreground">Maintenance Optimization:</span> Efficient planning to minimize costs and improve operational reliability.</li>
            <li><span className="text-foreground">System Audit Routine:</span> Checks to ensure compliance with industry and manufacturer standards.</li>
            <li><span className="text-foreground">Maintenance Records:</span> Detailed documentation for performance tracking and regulatory transparency.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="safety-quality">
        {/* Safety & Quality Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-7.jpg"
              alt="Engineer in safety gear inspecting control panels for quality management"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Safety & Quality Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">6. Safety and Quality Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We promote a strong safety culture onboard and ashore:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Safety Management System (SMS):</span> Full implementation of ISM Codes and safety protocols.</li>
            <li><span className="text-foreground">Incident Reporting and Investigation:</span> Proper analysis and follow-up to prevent recurrence, with risk assessments, reporting procedures, and continuous improvement.</li>
            <li><span className="text-foreground">Emergency Preparedness:</span> Conducting drills and training for all onboard scenarios.</li>
            <li><span className="text-foreground">Audits and Inspections:</span> Internal audits and port state inspection readiness.</li>
            <li><span className="text-foreground">Environmental Compliance:</span> Monitoring pollution control measures and MARPOL adherence.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="fuel-provision">
        {/* Fuel & Provision Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">7. Fuel and Provision Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We manage your vessel’s fuel and supply needs with precision and reliability:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Bunker Procurement:</span> Sourcing quality fuel at competitive rates from trusted suppliers.</li>
            <li><span className="text-foreground">Fuel Monitoring:</span> Tracking consumption to optimize efficiency and reduce costs.</li>
            <li><span className="text-foreground">Provisions and Stores Supply:</span> Timely delivery of food, consumables, and technical stores.</li>
            <li><span className="text-foreground">Inventory Management:</span> Monitoring onboard stock levels and usage trends.</li>
            <li><span className="text-foreground">Regulatory Compliance:</span> Adhering to fuel quality standards and IMO environmental rules.</li>
          </ul>
        </div>
        {/* Fuel & Provision Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-8.jpg"
              alt="Engineer in safety gear managing fuel and provisions on a ship"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="regulatory-compliance">
        {/* Regulatory Compliance & Certification Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/ship-management-crew.jpg"
              alt="Ship management professionals reviewing compliance documents"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Regulatory Compliance & Certification Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">8. Regulatory Compliance and Certification</h2>
          <p className="text-sm text-muted-foreground mb-2">We ensure your vessel complies with all international and local regulations:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Flag State Certification:</span> Managing due renewals and approvals.</li>
            <li><span className="text-foreground">Class Surveys and Insurance:</span> Scheduling inspections with class societies.</li>
            <li><span className="text-foreground">ISM and ISPS/MLC Management:</span> Certification control of all required certificates and audits.</li>
            <li><span className="text-foreground">Maritime Law Advisory:</span> Supporting owners in regulatory and legal matters.</li>
            <li><span className="text-foreground">SIRE and MARPOL Compliance:</span> SIRE implementation and monitoring.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="financial-management">
        {/* Financial Management & Budget Control Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">9. Financial Management and Budget Control</h2>
          <p className="text-sm text-muted-foreground mb-2">We help owners maintain financial transparency and control:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Operating Budget Planning:</span> Estimates costs for routine vessel operation.</li>
            <li><span className="text-foreground">Monthly Reporting:</span> Detailed breakdown of expenditures, income, and cost.</li>
            <li><span className="text-foreground">Cost Control Monitoring:</span> Usage and efficiency improvement assessment.</li>
            <li><span className="text-foreground">Owner Reports:</span> Clear monthly updates on vessel financial performance.</li>
            <li><span className="text-foreground">Forecasting Strategy:</span> Informed planning for future operations.</li>
            <li><span className="text-foreground">Audit Support:</span> Assistance in internal and external financial audits.</li>
          </ul>
        </div>
        {/* Financial Management & Budget Control Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-10.jpg"
              alt="Ship management financial expert reviewing budget documents"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="insurance-claims">
        {/* Insurance & Claims Handling Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-11.jpg"
              alt="Insurance and claims handling meeting"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Insurance & Claims Handling Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">10. Insurance and Claims Handling</h2>
          <p className="text-sm text-muted-foreground mb-2">We assist in arranging the right insurance cover and managing claims on your behalf:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Insurance Arrangement:</span> Hull and Machinery, PandI, War Risk, and more.</li>
            <li><span className="text-foreground">Claims Handling:</span> Full support in claim documentation and follow-up.</li>
            <li><span className="text-foreground">Incident Documentation:</span> Preparing accurate and timely reports for insurers.</li>
            <li><span className="text-foreground">Risk Assessment:</span> Proactive evaluation to minimize operational risks.</li>
            <li><span className="text-foreground">Certificate Management:</span> Keeping all insurance and compliance documents up to date.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="dry-docking">
        {/* Dry Docking & Project Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">11. Dry Docking and Project Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We manage your vessel’s repairs and upgrades from start to finish:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Pre-Docking Planning:</span> Scope of work, budgeting, and yard selection.</li>
            <li><span className="text-foreground">Onsite Supervision:</span> Close monitoring of dock work to ensure timeline and quality.</li>
            <li><span className="text-foreground">Post-Docking Reports:</span> Full documentation and cost review for owners.</li>
            <li><span className="text-foreground">Project Execution:</span> Support for major retrofits or new system installations.</li>
            <li><span className="text-foreground">Budget and Timeline Control:</span> Managing projects with known time and cost.</li>
            <li><span className="text-foreground">Quality Assurance:</span> Final testing and inspection before vessel delivery.</li>
          </ul>
        </div>
        {/* Dry Docking & Project Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-12.jpg"
              alt="Shipyard team planning dry docking project"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="performance-monitoring">
        {/* Performance Monitoring & Reporting Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-13.jpg"
              alt="Team analyzing ship performance data on screens"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Performance Monitoring & Reporting Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">12. Performance Monitoring and Reporting</h2>
          <p className="text-sm text-muted-foreground mb-2">We provide clear data and insights to help you optimize operations:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Fuel and Energy Efficiency Monitoring:</span> Consumption and bunkering assessments.</li>
            <li><span className="text-foreground">Voyage Reports:</span> Operational data and benchmarking.</li>
            <li><span className="text-foreground">KPI Analysis:</span> Speed, fuel deviation, emissions, and other key metrics.</li>
            <li><span className="text-foreground">Preventive Actions:</span> Identifying patterns and reducing risks early.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="customized-solutions">
        {/* Customized Ship Management Solutions Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl text-[#377393] mb-2">13. Customized Ship Management Solutions</h2>
          <p className="text-sm text-muted-foreground mb-2">Every ship and owner has unique needs. We offer tailored management services to suit individual requirements.</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className="text-foreground">Full or Partial Management Options:</span> Depending on your needs.</li>
            <li><span className="text-foreground">Customized Service Packages:</span> Select service modules or go full-scope.</li>
            <li><span className="text-foreground">Owner Support and Consulting:</span> Operations, technical, and compliance guidance.</li>
          </ul>
        </div>
        {/* Customized Ship Management Solutions Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md bg-white flex items-center justify-center">
            <Image
              src="/sm-14.jpg"
              alt="Business meeting for customized ship management solutions with ships in background"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* Crisis & Emergency Response Management */}
      <div className="flex flex-col md:flex-row gap-10 py-24 items-center" id="crisis-emergency">
        {/* Crisis & Emergency Response Management Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl rounded-[40px] overflow-hidden shadow-md">
            <Image
              src="/sm-15.jpg"
              alt="Crisis and emergency response control room"
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        {/* Crisis & Emergency Response Management Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl  text-[#377393] mb-2">Crisis and Emergency Response Management</h2>
          <p className="text-sm text-muted-foreground mb-2">We implement comprehensive emergency preparedness solutions to ensure quick, effective action during critical situations:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
            <li><span className=" text-foreground">Emergency Response Planning:</span> Detailed procedures for fires, collision, grounding, flooding, or pollution incidents.</li>
            <li><span className=" text-foreground">24/7 Support and External Coordination:</span> Rapid communication with owners, authorities, and all critical stakeholders.</li>
            <li><span className=" text-foreground">On-site and Remote Mitigation:</span> Virtual or on-site intervention to assist in emergency resolution.</li>
            <li><span className=" text-foreground">Contingency Management:</span> Action plans for operational disruptions and high-risk incidents.</li>
            <li><span className=" text-foreground">Crisis Incident Assistance:</span> Technical and operational support to mitigate impact and restore safety.</li>
            <li><span className=" text-foreground">Post-Incident Reporting:</span> Full documentation and analysis for regulatory and insurance compliance.</li>
          </ul>
        </div>
      </div>
      {/* ReasonsGrid replaces the old reasons section */}
      <ReasonsGrid
        title="Reasons to Choose Moon Navigation and Trading Co. for Your Ship Management Needs:"
        subheading=""
        reasons={[
          { icon: <Image src="/icons/other services/25.png" alt="360° ship management under one roof" width={64} height={64} className="mb-4 h-16 w-16 object-contain" />, title: "360° ship management under one roof", description: "Comprehensive management services under a single roof." },
          { icon: <Image src="/icons/other services/26.png" alt="Transparent communication and owner-first approach" width={64} height={64} className="mb-4 h-16 w-16 object-contain" />, title: "Transparent communication and owner-first approach", description: "Clear communication with an owner-first approach to service." },
          { icon: <Image src="/icons/other services/27.png" alt="Strict adherence to international maritime standards" width={64} height={64} className="mb-4 h-16 w-16 object-contain" />, title: "Strict adherence to international maritime standards", description: "Compliance with all international maritime standards and regulations." },
          { icon: <Image src="/icons/other services/28.png" alt="Proactive problem-solving and risk mitigation" width={64} height={64} className="mb-4 h-16 w-16 object-contain" />, title: "Proactive problem-solving and risk mitigation", description: "Anticipating and addressing potential issues before they become problems." },
          { icon: <Image src="/icons/other services/29.png" alt="Scalable services for both small and large fleets" width={64} height={64} className="mb-4 h-16 w-16 object-contain" />, title: "Scalable services for both small and large fleets", description: "Flexible services that scale with your fleet size and requirements." },
          { icon: <Image src="/icons/other services/30.png" alt="Competitive pricing with uncompromised service quality" width={64} height={64} className="mb-4 h-16 w-16 object-contain" />, title: "Competitive pricing with uncompromised service quality", description: "High-quality services at competitive market rates." },
        ]}
      />
      <GetQuoteComponent topic="Ship Management" link="/ship-management-forms" />
      <FAQSearch category="ship-management" />    
    </>
  );
}

export default function ShipManagement() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}
