import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ShipManagement() {

    return (
    <div className="w-full mt-10 mb-20 max-w-5xl mx-auto p-0 sm:p-5">
      <div className="w-full rounded-t-3xl overflow-hidden">
        <img
          src="/ship-management-hero.jpg"
          alt="Ship management at port"
          className="w-full h-[200px] md:h-[300px] object-cover"
          style={{ borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }}
        />
      </div>
      <div className="pt-8 pb-4 px-2 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Title and CTA */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#377393]">Ship Management</h1>
            <Link href="/ship-management-forms" className="w-fit">
              <Button className="bg-[#253A5C] text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#1a2942]">
                Request a Quote
              </Button>
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
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Technical Management */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="w-full rounded-2xl overflow-hidden mb-2">
          <img
            src="/ship-management-technical.jpg"
            alt="Technical management team"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">1. Technical Management</h2>
        <p className="text-sm text-muted-foreground mb-2">
          We provide full technical management services, ensuring vessels are maintained and operated to the highest standards.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Preventive Maintenance:</span> Regular inspections and planned maintenance to avoid breakdowns.
          </li>
          <li>
            <span className="font-semibold text-foreground">Repairs & Troubleshooting:</span> Fast response to any technical problems onboard.
          </li>
          <li>
            <span className="font-semibold text-foreground">Dry Docking & Spare Parts:</span> Arrangement and supervision of dry dock repairs and spares.
          </li>
          <li>
            <span className="font-semibold text-foreground">Safety/Flag Management:</span> Ensuring compliance with all relevant safety and flag state regulations.
          </li>
          <li>
            <span className="font-semibold text-foreground">Cost Control:</span> Monitoring budgets and optimizing finances of technical management activities.
          </li>
          <li>
            <span className="font-semibold text-foreground">Regulatory Compliance:</span> Ensuring full compliance of vessels with class requirements and international regulations (ISM, MARPOL, SOLAS, etc).
          </li>
        </ul>
      </div>
      {/* Right: Crew Management */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">2. Crew Management</h2>
        <p className="text-sm text-muted-foreground mb-2">
          We provide experienced, trained, and qualified crew to operate your vessel smoothly.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Recruitment & Selection:</span> Careful sourcing and hiring of competent officers and ratings.
          </li>
          <li>
            <span className="font-semibold text-foreground">Training & Certification:</span> Ensuring IMO-compliant crew certification and tailored international standards (STCW, MLC).
          </li>
          <li>
            <span className="font-semibold text-foreground">Crew Scheduling & Rotation:</span> Reliable crew planning, rotation, and relief management.
          </li>
          <li>
            <span className="font-semibold text-foreground">Welfare & Payroll:</span> Seafarer support, payroll administration, and medical assistance.
          </li>
          <li>
            <span className="font-semibold text-foreground">Travel & Documentation:</span> Handling visas, travel, and all necessary paperwork.
          </li>
          <li>
            <span className="font-semibold text-foreground">Reports & Administration:</span> Safety management and crew documentation support.
          </li>
        </ul>
        <div className="w-full rounded-2xl overflow-hidden mt-2">
          <img
            src="/ship-management-crew.jpg"
            alt="Crew management team"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    {/* Operational Management & Procurement Section */}
    <div className="flex flex-col md:flex-row gap-10 mt-12">
      {/* Left: Operational Management */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="w-full rounded-2xl overflow-hidden mb-2">
          <img
            src="/ship-management-operations.jpg"
            alt="Operational management team at port"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">3. Operational Management</h2>
        <p className="text-sm text-muted-foreground mb-2">
          We handle daily operations to ensure smooth, compliant, and efficient voyages.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Voyage Planning:</span> Optimized routing and scheduling for cost and time efficiency.
          </li>
          <li>
            <span className="font-semibold text-foreground">Port Call Coordination:</span> Managing port clearances, agents, and berthing arrangements.
          </li>
          <li>
            <span className="font-semibold text-foreground">Cargo Operations:</span> Support for loading, safe and efficient cargo handling, and discharge.
          </li>
          <li>
            <span className="font-semibold text-foreground">Charter Party Compliance:</span> Meticulous adherence to contractual obligations.
          </li>
          <li>
            <span className="font-semibold text-foreground">Reporting & Communication:</span> Real-time updates and coordinated communication between vessel, owners, and stakeholders.
          </li>
        </ul>
      </div>
      {/* Right: Procurement & Supply Chain Support */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">4. Procurement & Supply Chain Support</h2>
        <p className="text-sm text-muted-foreground mb-2">
          We manage timely and cost-effective procurement to keep your vessel fully stocked.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Provisions & Stores:</span> Supplying food, safety gear, tools, and consumables.
          </li>
          <li>
            <span className="font-semibold text-foreground">Spare Parts Sourcing:</span> Coordinating with trusted suppliers and OEMs.
          </li>
          <li>
            <span className="font-semibold text-foreground">Inventory Control:</span> Detailed tracking to avoid shortages or overstocking.
          </li>
          <li>
            <span className="font-semibold text-foreground">Vendor Management:</span> Evaluating suppliers to ensure quality and value.
          </li>
          <li>
            <span className="font-semibold text-foreground">Logistics Coordination:</span> Global sourcing with end-to-end delivery management.
          </li>
        </ul>
        <div className="w-full rounded-2xl overflow-hidden mt-2">
          <img
            src="/ship-management-procurement.jpg"
            alt="Procurement and supply chain warehouse"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Maintenance Planning Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-maintenance.jpg"
            alt="Maintenance planning and condition monitoring"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* Right: Maintenance Planning & Condition Monitoring */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          5. Maintenance Planning &amp; Condition Monitoring
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We ensure vessel reliability through structured maintenance programs and continuous equipment monitoring.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Planned Maintenance:</span> Schedules based on manufacturer guidelines and vessel operating hours.
          </li>
          <li>
            <span className="font-semibold text-foreground">Condition-Based Monitoring:</span> Ongoing assessment of machinery performance to detect early signs of issues.
          </li>
          <li>
            <span className="font-semibold text-foreground">Fault Diagnostics:</span> Proactive issue root-cause analysis to identify, fix, and reduce potential downtime.
          </li>
          <li>
            <span className="font-semibold text-foreground">Maintenance Optimization:</span> Efficient planning to minimize costs and improve operational reliability.
          </li>
          <li>
            <span className="font-semibold text-foreground">System Audits:</span> Routine checks to ensure compliance with industry and classification standards.
          </li>
          <li>
            <span className="font-semibold text-foreground">Maintenance Records:</span> Detailed documentation for performance tracking and reporting transparency.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Safety & Quality Management */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          6. Safety &amp; Quality Management
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We promote a strong safety culture, compliance, and balance.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Safety Management System (SMS):</span> Full implementation of ISM Code and safety protocols.
          </li>
          <li>
            <span className="font-semibold text-foreground">Incident Reporting &amp; Investigation:</span> Proper analysis and follow-up to prevent re-occurrence.
          </li>
          <li>
            <span className="font-semibold text-foreground">Crew Training &amp; Procedures:</span> Onboarding, drills, and training for all onboard personnel.
          </li>
          <li>
            <span className="font-semibold text-foreground">Audits &amp; Inspections:</span> Routine audits and port state inspections to enforce compliance.
          </li>
          <li>
            <span className="font-semibold text-foreground">Regulatory Compliance:</span> Meet the most up-to-date maritime regulations and MARPOL adherence.
          </li>
        </ul>
      </div>
      {/* Right: Safety & Quality Management Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-safety.jpg"
            alt="Ship safety and quality management"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Fuel & Provision Management Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-fuel.jpg"
            alt="Fuel and provision management"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* Right: Fuel & Provision Management */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          7. Fuel &amp; Provision Management
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We enhance your vessel's fuel and supply needs with precision and reliability.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Bunker Procurement:</span> Sourcing quality fuel at competitive rates from trusted suppliers.
          </li>
          <li>
            <span className="font-semibold text-foreground">Fuel Monitoring:</span> Tracking consumption to optimize efficiency and reduce costs.
          </li>
          <li>
            <span className="font-semibold text-foreground">Provisions &amp; Stores Supply:</span> Timely delivery of fresh consumables and necessities.
          </li>
          <li>
            <span className="font-semibold text-foreground">Inventory Management:</span> Monitoring onboard stock levels and usage trends.
          </li>
          <li>
            <span className="font-semibold text-foreground">Regulatory Compliance:</span> Adhering to fuel quality standards and IMO environmental rules.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Regulatory Compliance & Certification */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          8. Regulatory Compliance &amp; Certification
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We ensure your vessel complies with all international and local regulations.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Flag State Coordination:</span> Managing documentation and approvals.
          </li>
          <li>
            <span className="font-semibold text-foreground">Class Surveys &amp; Renewals:</span> Scheduling inspections and class certificates.
          </li>
          <li>
            <span className="font-semibold text-foreground">Crew Certification Management:</span> Overseeing crew's valid and approved certification.
          </li>
          <li>
            <span className="font-semibold text-foreground">ISM, ISPS, and MLC Audits:</span> Supporting owners in regulatory and legal matters.
          </li>
          <li>
            <span className="font-semibold text-foreground">ISO and MARPOL Compliance:</span> Onboard implementation and monitoring.
          </li>
        </ul>
      </div>
      {/* Right: Regulatory Compliance & Certification Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-compliance.jpg"
            alt="Regulatory compliance and certification"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Financial Management & Budget Control Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-financial.jpg"
            alt="Financial management and budget control"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* Right: Financial Management & Budget Control */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          9. Financial Management &amp; Budget Control
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We help you maintain financial transparency and control.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Operating Budget Planning:</span> Estimating costs for annual vessel operation.
          </li>
          <li>
            <span className="font-semibold text-foreground">Monthly Reporting:</span> Detailed statements of expenditures and variances.
          </li>
          <li>
            <span className="font-semibold text-foreground">Cost Control:</span> Ongoing review and optimization of management expenses.
          </li>
          <li>
            <span className="font-semibold text-foreground">Forecasting:</span> Strategic financial planning for future needs.
          </li>
          <li>
            <span className="font-semibold text-foreground">Audit Support:</span> Assistance in internal and external reviews, audits.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Insurance & Claims Handling Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-insurance.jpg"
            alt="Insurance and claims handling"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* Right: Insurance & Claims Handling */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          10. Insurance &amp; Claims Handling
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We assist in arranging the right insurance cover and managing claims:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Insurance Arrangements:</span> Hull &amp; Machinery, P&amp;I, War Risk, and more.
          </li>
          <li>
            <span className="font-semibold text-foreground">Claims Handling:</span> Rapid help in claims documentation and follow-up.
          </li>
          <li>
            <span className="font-semibold text-foreground">Loss Prevention:</span> Proactive monitoring and safety advice for the vessel.
          </li>
          <li>
            <span className="font-semibold text-foreground">Risk Assessment:</span> Proactive evaluations to minimize claim possibilities.
          </li>
          <li>
            <span className="font-semibold text-foreground">Deductible Management:</span> Keeping all relevant and complete documents up to date.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Dry Docking & Project Management */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          11. Dry Docking &amp; Project Management
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We manage your vessel's repairs and upgrades from start to finish.
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Pre-Docking Planning:</span> Scope of work, budgeting, and yard selection.
          </li>
          <li>
            <span className="font-semibold text-foreground">Onsite Supervision:</span> Close monitoring of dry dock work progress and quality.
          </li>
          <li>
            <span className="font-semibold text-foreground">Post-Docking Reports:</span> Full documentation of all work performed.
          </li>
          <li>
            <span className="font-semibold text-foreground">Project Execution Support:</span> For newbuildings or major modifications.
          </li>
          <li>
            <span className="font-semibold text-foreground">Budget &amp; Timeline Control:</span> Keeping repairs within agreed costs and schedules.
          </li>
          <li>
            <span className="font-semibold text-foreground">Quality Assurance:</span> Finish testing and inspection before vessel delivery.
          </li>
        </ul>
      </div>
      {/* Right: Dry Docking & Project Management Image */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src="/ship-management-drydocking.jpg"
            alt="Dry docking and project management"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    {/* Performance Monitoring and Reporting & Customized Ship Management Solutions */}
    <div className="flex flex-col md:flex-row gap-10 mt-8">
      {/* Left: Performance Monitoring and Reporting */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="w-full rounded-2xl overflow-hidden mb-2">
          <img
            src="/ship-management-performance.jpg"
            alt="Performance monitoring meeting"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          12. Performance Monitoring and Reporting
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We provide clear data and insights to help you optimize operations:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Fuel &amp; Energy Efficiency Monitoring:</span> Consumption and outcome analysis.
          </li>
          <li>
            <span className="font-semibold text-foreground">Voyage Reports:</span> Operational data and troubleshooting.
          </li>
          <li>
            <span className="font-semibold text-foreground">KPI Analysis:</span> Speed, fuel, emissions, conditions, and other key metrics.
          </li>
          <li>
            <span className="font-semibold text-foreground">Preventive Action:</span> Identifying patterns and reducing deficiency.
          </li>
        </ul>
      </div>
      {/* Right: Customized Ship Management Solutions */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#253A5C] mb-2">
          13. Customized Ship Management Solutions
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          Every ship and client has unique needs. We offer tailored management services to suit individual requirements:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Full or Partial Management Options:</span> Depending on your needs.
          </li>
          <li>
            <span className="font-semibold text-foreground">Customized Service Packages:</span> Select specific services or go all-in.
          </li>
          <li>
            <span className="font-semibold text-foreground">Owner Support &amp; Consulting:</span> Operational, technical, and compliance guidance.
          </li>
        </ul>
        <div className="w-full rounded-2xl overflow-hidden mt-2">
          <img
            src="/ship-management-customized.jpg"
            alt="Customized ship management meeting"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-10 mt-12 items-center">
      {/* Crisis & Emergency Response Management Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-md">
          <img
            src="/crisis-emergency-response.jpg"
            alt="Crisis and emergency response control room"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
      {/* Crisis & Emergency Response Management Content */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-[#377393] mb-2">
          Crisis &amp; Emergency Response Management
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          We implement comprehensive emergency preparedness solutions to ensure quick, effective action during critical situations:
        </p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>
            <span className="font-semibold text-foreground">Emergency Response Planning:</span> Detailed procedures for fires, collision, grounding, flooding, or pollution incidents.
          </li>
          <li>
            <span className="font-semibold text-foreground">24/7 Support &amp; External Coordination:</span> Rapid communication with owners, authorities, and all critical stakeholders.
          </li>
          <li>
            <span className="font-semibold text-foreground">On-site &amp; Remote Mitigation:</span> Virtual or on-site intervention to assist in emergency resolution.
          </li>
          <li>
            <span className="font-semibold text-foreground">Contingency Management:</span> Action plans for operational disruptions and high-risk incidents.
          </li>
          <li>
            <span className="font-semibold text-foreground">Crisis Incident Assistance:</span> Technical and operational support to mitigate impact and restore safety.
          </li>
          <li>
            <span className="font-semibold text-foreground">Post-Incident Reporting:</span> Full documentation and analysis for regulatory and insurance compliance.
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-[#253A5C] mb-8 text-center">
        Reasons to Choose Moon Navigation and Trading Co. for Your Ship Management Needs:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-medium text-base">360° ship management under one roof.</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-medium text-base">Transparent communication and owner-first approach.</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-medium text-base">Strict adherence to international maritime standards.</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-medium text-base">Proactive problem-solving and risk mitigation.</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-medium text-base">Scalable service for both small and large fleets.</span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <span className="font-medium text-base">Competitive pricing with uncompromised service quality.</span>
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
            submitted, our team will assess your shipment's volume, weight, and consolidation options to
            find the most efficient and cost-effective transport solution. You will receive a customized
            quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
            cargo movement.
          </p>
          <Link href="/ship-management-forms" className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors inline-block">
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
        
    )
}
