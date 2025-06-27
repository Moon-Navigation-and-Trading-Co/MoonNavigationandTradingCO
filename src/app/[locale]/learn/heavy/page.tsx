import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function HeavyLiftCargoInfo() {
    const t = useTranslations("learn-heavy-lift-cargo")

    return (
    <div className="w-full">
      {/* Top Banner Image */}
      <div className="w-full rounded-3xl overflow-hidden mt-12 mb-8">
        <img
          src="/heavy-lift-cargo-banner.jpg"
          alt="Heavy Lift Cargo"
          className="w-full object-cover h-[400px] "
          style={{}}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12">
        {/* Left: Title & Button */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Heavy Lift Cargo
          </h1>
          <Button asChild className="w-fit">
            <Link href="/ocean-freight-forms">
              Request a Quote
            </Link>
          </Button>
        </div>
        {/* Right: Info Card */}
        <div className="flex-1 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-3 text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            What is Heavy Lift Cargo?
          </h2>
          <p className="text-muted-foreground mb-2 text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Heavy cargo consists of ultra-heavy and oversized items that often exceed size and/or form limits set out. This includes large-scale engineering equipment, massive industrial machines or infrastructure, as well as other significant loads. Heavy lifting is a specialized transport field, requiring unique skills, design strategies, and safety measures. Common examples of heavy lift cargo include turbines, ship engines, transformers, and large construction machinery.
          </p>
          <p className="text-muted-foreground text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            At Moon Navigation and Trading Co., we specialize in the transportation of heavy lift cargo, leveraging our technical expertise and cutting-edge equipment to manage the complexities involved. Our dedicated team is committed to providing solutions that prioritize safety, efficiency, and compliance with industry regulations, ensuring your heavy lift cargo is delivered on time and in optimal condition. Trust us as your reliable partner for all heavy transport requirements.
          </p>
        </div>
      </div>
      {/* Common Features Section */}
      <section className="w-full mt-16 mb-8 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-semibold mb-8 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Common Features of Heavy Lift Cargo
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Image */}
          <div className="flex-shrink-0 w-full md:w-[340px]">
            <img
              src="/heavy-lift-cargo-features.jpg"
              alt="Heavy lift cargo at port"
              className="rounded-2xl w-full h-[220px] object-cover object-center"
              loading="lazy"
            />
          </div>
          {/* Right: Features Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Weight */}
            <div>
              <h3 className="font-semibold mb-1 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Weight</h3>
              <p className="text-muted-foreground text-sm">
                We specialize in the movement of heavy lift cargo, handling single pieces weighing several tons, including massive machinery, turbines, boilers, and industrial equipment.
              </p>
            </div>
            {/* Dimensions */}
            <div>
              <h3 className="font-semibold mb-1 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Dimensions</h3>
              <p className="text-muted-foreground text-sm">
                Our solutions accommodate both long and tall cargo that often exceeds standard container and vessel limitations, requiring custom solutions and specialized vehicles.
              </p>
            </div>
            {/* Special Handling */}
            <div>
              <h3 className="font-semibold mb-1 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Special Handling</h3>
              <p className="text-muted-foreground text-sm">
                Our operations include the use of cranes, lifters, heavy-duty trailers, and other advanced tools to ensure safe and efficient movement of heavy loads.
              </p>
            </div>
            {/* Custom Routing */}
            <div>
              <h3 className="font-semibold mb-1 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Custom Routing</h3>
              <p className="text-muted-foreground text-sm">
                We develop tailored routing solutions that account for the unique logistical challenges of heavy lift cargo, ensuring safe and timely transport.
              </p>
            </div>
            {/* Safety Compliance */}
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-1 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>Safety Compliance</h3>
              <p className="text-muted-foreground text-sm">
                The transportation of heavy lift cargo requires strict adherence to industry and regulatory guidelines to ensure the security of the cargo and personnel involved.
              </p>
            </div>
          </div>
        </div>
      </section>
    <section className="mt-16 mb-8">
      <h2 className="text-2xl md:text-3xl font-normal mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Examples of Heavy Lift Cargo
      </h2>
      <p className="text-muted-foreground text-sm mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Our Heavy Lift services handle various types of equipment, including:
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Wind turbines and blades */}
        <div className="flex flex-col items-center w-full md:w-1/5">
          <img
            src="/heavy-wind-turbine.jpg"
            alt="Wind turbines and blades"
            className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-background shadow"
            loading="lazy"
          />
          <span className="text-center text-sm text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Wind turbines and blades
          </span>
        </div>
        {/* Industrial presses */}
        <div className="flex flex-col items-center w-full md:w-1/5">
          <img
            src="/heavy-industrial-press.jpg"
            alt="Industrial presses"
            className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-background shadow"
            loading="lazy"
          />
          <span className="text-center text-sm text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Industrial presses
          </span>
        </div>
        {/* Power plant components */}
        <div className="flex flex-col items-center w-full md:w-1/5">
          <img
            src="/heavy-power-plant.jpg"
            alt="Power plant components"
            className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-background shadow"
            loading="lazy"
          />
          <span className="text-center text-sm text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Power plant components
          </span>
        </div>
        {/* Oil and gas equipment */}
        <div className="flex flex-col items-center w-full md:w-1/5">
          <img
            src="/heavy-oil-gas.jpg"
            alt="Oil and gas equipment"
            className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-background shadow"
            loading="lazy"
          />
          <span className="text-center text-sm text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Oil and gas equipment
          </span>
        </div>
        {/* Large yachts / Vessels */}
        <div className="flex flex-col items-center w-full md:w-1/5">
          <img
            src="/heavy-yacht.jpg"
            alt="Large yachts / Vessels"
            className="rounded-full w-32 h-32 object-cover mb-3 border-4 border-background shadow"
            loading="lazy"
          />
          <span className="text-center text-sm text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Large yachts / Vessels
          </span>
        </div>
      </div>
    </section>
    <section className="w-full mt-12 mb-8 px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Key Features of Our Heavy Lift Cargo at Moon Navigation and Trading Co.
      </h2>
      <div className="bg-secondary border border-border rounded-2xl p-6 md:p-8 max-w-7xl mx-auto shadow-sm">
        <ul className="space-y-4 text-sm md:text-base text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <li>
            <span className="font-semibold text-foreground">Ultra Heavy &amp; Oversized:</span> Our heavy lift cargo consists of ultra-heavy and/or ultra-oversized items, such as large-scale machinery, mining equipment, massive transformers, and industrial modules.
          </li>
          <li>
            <span className="font-semibold text-foreground">Specialized Lifting Techniques Required:</span> Shipments require the use of the latest cranes and hoisting methods, both onshore and offshore, to efficiently handle these extraordinary loads.
          </li>
          <li>
            <span className="font-semibold text-foreground">Transported on Heavy-Lift Vessels/MPVs:</span> For heavily focused safe embarkation and discharge solutions, specialized lifting and handling protocols for ocean transport are implemented.
          </li>
          <li>
            <span className="font-semibold text-foreground">Complex Loading &amp; Unloading Operations:</span> We ensure precise planning for the loading and unloading of heavy lift cargo, including lashing, stowage, and route optimization to ensure seamless operations.
          </li>
          <li>
            <span className="font-semibold text-foreground">Used in Large-Scale Industrial Projects:</span> Heavy lift cargo is commonly used in major industrial, energy, and infrastructure projects such as power plants, oil &amp; gas refineries, mining sites, and manufacturing plants, or wherever other standard shipping solutions are insufficient.
          </li>
        </ul>
        <p className="mt-6 text-xs text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          At Moon Navigation and Trading Co., we are dedicated to providing tailored heavy lift transportation solutions that meet the unique demands of each project, ensuring safety, efficiency, and reliability in every shipment.
        </p>
      </div>
    </section>
    <section className="w-full mt-16 mb-12 px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Our Heavy Lift Cargo Services—At Moon Navigation and Trading Co.
      </h2>
      <div className="flex flex-col gap-8">
        {/* Service 1: Text + Image */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* 1. Heavy Lift Vessel Chartering */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              1. Heavy Lift Vessel Chartering
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Moon Navigation supplies specialized vessels with high weight capacity and lifting capability for oversized loads, including:
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Semi-Submersible Vessels</span> – Made for transporting extremely heavy and awkward industrial equipment or marine structures.
              </li>
              <li>
                <span className="font-semibold">Heavy Lift Ships</span> – Purpose-built or converted vessels capable of lifting outsized machinery and modules.
              </li>
              <li>
                <span className="font-semibold">Deck Barges, Flo-Flo Ships</span> – Used for shipping massive industrial modules, construction machinery, and more.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our vessels' chartering solutions are tailored to cargo weight, dimensions, and destination requirements.
            </p>
          </div>
          {/* Image for 1 */}
          <div className="w-full md:w-1/2">
            <img
              src="/heavy-lift-vessel-chartering.jpg"
              alt="Heavy lift vessel chartering"
              className="rounded-2xl w-full h-[250px] object-cover object-center"
              loading="lazy"
              style={{ maxHeight: 250 }}
            />
          </div>
        </div>
        {/* Service 2: Image + Text */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image for 2 */}
          <div className="w-full md:w-1/2">
            <img
              src="/heavy-lift-engineer.jpg"
              alt="Heavy lift cargo engineer"
              className="rounded-2xl w-full h-[250px] object-cover object-center"
              loading="lazy"
              style={{ maxHeight: 250 }}
            />
          </div>
          {/* 2. Engineering & Load Planning */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              2. Engineering &amp; Load Planning
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Transporting heavy lift cargo requires precise engineering to prevent structural damage and ensure the safety of all involved:
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Load &amp; Stability Analysis</span> – Ensuring stability is expertly determined across the transport vehicle or vessel for each cargo.
              </li>
              <li>
                <span className="font-semibold">Custom Lifting &amp; Rigging Plans</span> – Developing detailed lifting protocols to safely relocate critical equipment.
              </li>
              <li>
                <span className="font-semibold">Route Optimization</span> – Every shipment is carefully planned and executed to avoid sensitive routes and obstacles.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our engineering team ensures that every shipment is expertly planned and executed with maximum safety and precision.
            </p>
          </div>
        </div>
      </div>
      </section>
    {/* Section: High-Capacity Cranes & Lifting Equipment and Regulatory Compliance & Safety */}
    <section className="w-full mt-16 mb-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column: Text for 3, Image for 4 */}
        <div className="flex flex-col gap-8 flex-1">
          {/* 3. High-Capacity Cranes & Lifting Equipment */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              3. High-Capacity Cranes &amp; Lifting Equipment
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Heavy lift projects require specialized lifting solutions at both port and project sites. We offer:
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Gantry Cranes &amp; Tower Cranes</span> – Lifting hundreds of tons at critical locations worldwide.
              </li>
              <li>
                <span className="font-semibold">Hydraulic Jacking Systems</span> – Enabling controlled cargo positioning.
              </li>
              <li>
                <span className="font-semibold">Self-Propelled Modular Transporters</span> – For short-distance movement of massive loads.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our new state-of-the-art lifting equipment ensures safe and damage-free transport of your heaviest shipments.
            </p>
          </div>
          {/* Image for 3 */}
          <div className="w-full">
            <img
              src="/heavy-lift-cranes.jpg"
              alt="High-capacity cranes lifting heavy cargo"
              className="rounded-2xl w-full h-[180px] object-cover object-center"
              loading="lazy"
              style={{ maxHeight: 250 }}
            />
          </div>
        </div>
        {/* Right Column: Image for 4, Text for 4 */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Image for 4 */}
          <div className="w-full">
            <img
              src="/heavy-lift-compliance.jpg"
              alt="Heavy lift cargo compliance and safety inspector"
              className="rounded-2xl w-full h-[180px] object-cover object-center"
              loading="lazy"
              style={{ maxHeight: 250 }}
            />
          </div>
          {/* 4. Regulatory Compliance & Safety */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              4. Regulatory Compliance &amp; Safety
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Transporting heavy lift cargo requires compliance with strict international transport laws and regulations. Our services include:
            </p>
            <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>
                <span className="font-semibold">Oversized Cargo Permits &amp; Authorizations</span> – Managing all legal requirements.
              </li>
              <li>
                <span className="font-semibold">Certified Inspections &amp; Documentation</span> – Ensuring cargo and equipment safety before, during, and after transit.
              </li>
              <li>
                <span className="font-semibold">HSSE (Health, Safety, Security &amp; Environment)</span> – Prioritizing job-site compliance and risk mitigation.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              With our compliance expertise, we ensure your cargo meets all legal and safety requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* 5. Route Surveys & Feasibility Studies */}
    <section className="w-full mt-12 mb-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h3 className="text-lg font-semibold mb-2 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            5. Route Surveys &amp; Feasibility Studies
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            From initial inspection of the cargo route to safe planning for transit, our services include:
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <li>
              <span className="font-semibold">Pre-Shipment Infrastructure Assessment</span> – Checking bridge capacities, clearances, road and port access.
            </li>
            <li>
              <span className="font-semibold">Full Feasibility &amp; Risk/Permit Analysis</span> – Ensuring safe cargo transfer &amp; distribution with professional transport solutions, including multi-modal and complex logistics support.
            </li>
          </ul>
          <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Heavy lift cargo requires meticulous, complete, and individualized support for loaded and delivered with full oversight.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-end mt-8 md:mt-0">
          <img
            src="/heavy-lift-route-survey.jpg"
            alt="Engineer conducting route survey for heavy lift cargo at port"
            className="w-[320px] h-auto object-contain rounded-2xl"
            style={{ maxWidth: 380 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
    {/* Reasons to Choose Our Heavy Lift Services */}
    <section className="w-full mt-16 mb-8 px-4 md:px-0">
      <h2 className="text-xl md:text-2xl font-semibold mb-8 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Reasons to Choose Our Heavy Lift Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Pioneer Expertise */}
        <div className="flex flex-col items-center px-4">
          <img
            src="/icon-expertise.png"
            alt="Pioneer Expertise"
            className="h-14 mb-4"
            loading="lazy"
          />
          <h3 className="font-semibold mb-2 text-foreground">Pioneer Expertise</h3>
          <p className="text-muted-foreground text-sm">
            Years of experience handling oversized and heavy cargo with assurance and reliability.
          </p>
        </div>
        {/* End-to-End Solutions */}
        <div className="flex flex-col items-center px-4">
          <img
            src="/icon-end-to-end.png"
            alt="End-to-End Solutions"
            className="h-14 mb-4"
            loading="lazy"
          />
          <h3 className="font-semibold mb-2 text-foreground">End-to-End Solutions</h3>
          <p className="text-muted-foreground text-sm">
            From route planning and permits to on-the-ground support, we deliver robust heavy logistics.
          </p>
        </div>
        {/* Global Reach */}
        <div className="flex flex-col items-center px-4">
          <img
            src="/icon-global.png"
            alt="Global Reach"
            className="h-14 mb-4"
            loading="lazy"
          />
          <h3 className="font-semibold mb-2 text-foreground">Global Reach</h3>
          <p className="text-muted-foreground text-sm">
            Strong international partnerships for customized service, port, and equipment worldwide.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-center">
        {/* Regulatory Compliance & 24/7 Support */}
        <div className="flex flex-col items-center px-4">
          <img
            src="/icon-compliance.png"
            alt="Regulatory Compliance & 24/7 Support"
            className="h-14 mb-4"
            loading="lazy"
          />
          <h3 className="font-semibold mb-2 text-foreground">Regulatory Compliance &amp; 24/7 Support</h3>
          <p className="text-muted-foreground text-sm">
            Ensuring strict adherence to international safety regulations and expert assistance at every stage.
          </p>
        </div>
        {/* Advanced Equipment */}
        <div className="flex flex-col items-center px-4">
          <img
            src="/icon-equipment.png"
            alt="Advanced Equipment"
            className="h-14 mb-4"
            loading="lazy"
          />
          <h3 className="font-semibold mb-2 text-foreground">Advanced Equipment</h3>
          <p className="text-muted-foreground text-sm">
            State-of-the-art cranes, heavy lift vessels, and specialized rigs for massive transport.
          </p>
        </div>
      </div>
    </section>
    <section className="w-full bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
                {/* Left: Text Content */}
                <div className="flex-1 min-w-[260px]">
                    <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Get your Quote with Us
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Our streamlined heavy lift freight quotation process is designed for speed and convenience. At Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by Request system. Simply fill out our short form to initiate your request. Once submitted, our team will evaluate the cargo type, dimensions, and route requirements to determine the best shipping solution. You will receive a customized quotation directly in your email, ensuring accurate pricing and seamless transport of vehicles, machinery, and oversized rolling cargo.
                    </p>
                    <Button asChild>
                        <Link href="/ocean-freight-forms">
                            Request a Quote
                        </Link>
                    </Button>
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
