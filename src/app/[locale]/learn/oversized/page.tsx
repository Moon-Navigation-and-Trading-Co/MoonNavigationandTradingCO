import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-oversized");

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-2 md:px-0">
      {/* Top Banner */}
      <div className="w-full max-w-7xl rounded-[2rem] overflow-hidden mb-12 shadow-lg">
        <div className="relative w-full h-[180px] md:h-[260px]">
          <img
            src="/oversized-container-banner.jpg"
            alt="Oversized containers at port"
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-xl md:text-3xl font-semibold text-center drop-shadow-lg">
              Oversized Container
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Title and CTA */}
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
            Oversized Container
          </h1>
          <Button asChild className="bg-primary text-primary-foreground px-6 py-2 rounded-lg shadow hover:bg-primary/90 mb-6">
            <a href="/container-services-forms">Request a Quote</a>
          </Button>
        </div>

        {/* Right: Description */}
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            What is Oversized Container?
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            An oversized container is cargo that exceeds the standard dimensions of a conventional shipping container, requiring specialized handling solutions. These shipments are either too long, wide, heavy, or tall to be loaded and fitted in a standard container, and must be transported using flat racks, open-top containers, or platform containers.
            <br /><br />
            At Moon Navigation and Trading Co., we specialize in handling oversized container shipments, offering expert cargo securing, routing planning, and compliance management to ensure safe and efficient transport. Whether you need to move project cargo, shipping modules, or specialized equipment, we provide tailored solutions for industries requiring the movement of large, heavy, or irregularly shaped cargo.
          </p>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-foreground mb-2 text-center">
          Our Common Cargo for Oversized Containers
        </h2>
        <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-7xl mx-auto">
          Our oversized container services are designed to handle a wide range of large and irregularly shaped shipments, including but not limited to:
        </p>
        <div className="flex flex-col gap-8">
          {/* First row: 3 items */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-4">
            {/* Heavy machinery */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
                <img
                  src="/oversized-cargo-heavy-machinery.jpg"
                  alt="Heavy machinery"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold text-center text-foreground">Heavy machinery</span>
              <span className="text-xs text-muted-foreground text-center">e.g. bulldozers, loaders</span>
            </div>
            {/* Large industrial equipment */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
                <img
                  src="/oversized-cargo-industrial-equipment.jpg"
                  alt="Large industrial equipment"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold text-center text-foreground">Large industrial equipment</span>
            </div>
            {/* Prefabricated construction materials */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
                <img
                  src="/oversized-cargo-prefab-materials.jpg"
                  alt="Prefabricated construction materials"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold text-center text-foreground">Prefabricated construction materials</span>
            </div>
          </div>
          {/* Second row: 2 items */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Wind turbine blades */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
                <img
                  src="/oversized-cargo-wind-turbine.jpg"
                  alt="Wind turbine blades"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold text-center text-foreground">Wind turbine blades</span>
              <span className="text-xs text-muted-foreground text-center">if within container dimensions</span>
            </div>
            {/* Large pipes and metal structures */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden mb-3 shadow">
                <img
                  src="/oversized-cargo-pipes.jpg"
                  alt="Large pipes and metal structures"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-semibold text-center text-foreground">Large pipes and metal structures</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-8">
          Our Oversized Containers Solutions—At Moon Navigation and Trading Co.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Engineered for Heavy & Large Cargo */}
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
              Engineered for Heavy & Large Cargo
            </h3>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              At Moon Navigation and Trading Co., our oversized containers are designed to transport goods that exceed standard container dimensions or weight limits. These containers feature reinforced structures and enhanced loading capabilities, making them suitable for industrial, mining, and energy-sector cargo.
            </p>
            <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
              <img
                src="/oversized-cargo-crane.jpg"
                alt="Crane loading oversized cargo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Versatile Loading Options */}
          <div className="flex flex-col">
            <div className="w-full rounded-xl overflow-hidden shadow mb-4 h-64 md:h-72">
              <img
                src="/oversized-cargo-side-loader.jpg"
                alt="Side loader handling container"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
              Versatile Loading Options
            </h3>
            <p className="text-muted-foreground mb-3 text-sm md:text-base">
              Unlike standard containers, oversized containers allow for multiple loading configurations, including:
            </p>
            <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
              <li>
                <span className="font-semibold">Top Loading</span>: Ideal for gantry cranes to lift or vertically deposit heavy cargo.
              </li>
              <li>
                <span className="font-semibold">Side Loading</span>: Suitable for specialized lifting equipment or side entry, for easy, low-clearance access.
              </li>
              <li>
                <span className="font-semibold">End Loading</span>: Most effective for stacked materials such as trucks, excavators, and over-size sections.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Weather Protection & Secure Lashing */}
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
            Weather Protection &amp; Secure Lashing
          </h3>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            At Moon Navigation and Trading Co., we secure open-top containers with durable, weatherproof tarpaulin covers, safeguarding cargo from rain, wind, and environmental elements. Our flat racks and platforms are designed with custom tie-down points, steel lashing rails, and locking mechanisms, ensuring maximum stability and security throughout transportation.
          </p>
          <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
            <img
              src="/oversized-cargo-tarp.jpg"
              alt="Workers securing tarp over oversized cargo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Right: Fully Customizable for Unique Cargo */}
        <div className="flex flex-col">
          <div className="w-full rounded-xl overflow-hidden shadow mb-4 h-64 md:h-72">
            <img
              src="/oversized-cargo-workers.jpg"
              alt="Workers planning oversized cargo loading"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
            Fully Customizable for Unique Cargo
          </h3>
          <p className="text-muted-foreground mb-2 text-sm md:text-base">
            Our Oversized containers can be modified with specialized reinforcements, including:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
            <li>Heavy-duty lashing slots for outsize cargo</li>
            <li>Additional support beams for enhanced structural stability</li>
            <li>Custom fittings for sensitive or irregular equipment</li>
            <li>Shock-absorbing materials to minimize vibration during transport</li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Seamless Multimodal Transport Compatibility */}
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
            Seamless Multimodal Transport Compatibility
          </h3>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            We design our oversized containers to integrate with multiple transport modes, including:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2 mb-4">
            <li>
              <span className="font-semibold">Ocean Freight</span>: Secure and custom-adapted stowage onto specialized flatbeds and breakbulk vessels.
            </li>
            <li>
              <span className="font-semibold">Rail Transport</span>: Flat-rack and flatbed solutions for high-clearance rail-based transportation.
            </li>
            <li>
              <span className="font-semibold">Trucking &amp; Special Flatbeds</span>: Compatible with highway trailers, extendable flatbeds, and modular transporters for oversized road transport.
            </li>
          </ul>
          <div className="w-full rounded-xl overflow-hidden shadow h-64 md:h-72">
            <img
              src="/oversized-multimodal.jpg"
              alt="Workers loading oversized cargo onto a truck with a container crane"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Right: Reduced Handling Risks & Compliance Ready */}
        <div className="flex flex-col">
          <div className="w-full rounded-xl overflow-hidden shadow mb-4 h-64 md:h-72">
            <img
              src="/oversized-handling.jpg"
              alt="Warehouse workers moving oversized cargo with pallet jack"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
            Reduced Handling Risks &amp; Compliance Ready
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            With our built-in safety features, standardized lifting points, and reinforced structures, oversized containers minimize handling risks while ensuring compliance with IMO, SOLAS, and international shipping regulations.
          </p>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
          Oversized Containers vs. Standard Containers
        </h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border border-border bg-background text-sm md:text-base">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Feature</th>
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Oversized Containers</th>
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Standard Containers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground">Cargo Type</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Heavy, irregular, and overlength goods</td>
                <td className="px-4 py-3 border-b border-border text-foreground">General dry cargo</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 border-b border-border text-foreground">Loading Method</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Open side or top loading</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Front loading only</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground">Enclosure</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Open type or open-sided</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Fully enclosed</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 border-b border-border text-foreground">Weight Capacity</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Up to 45+ tons (varies)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Up to 30+ tons (varies)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground">Stackability</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Limited stacking</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Fully stackable</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 text-foreground">Common Use</td>
                <td className="px-4 py-3 text-foreground">Machinery, construction, and project cargo</td>
                <td className="px-4 py-3 text-foreground">Retail, consumer goods, general freight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* --- LIMITS TABLE SECTION --- */}
      <div className="w-full max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-8">
          Limits for Our Oversized Cargo & Specialized Containers
        </h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border border-border bg-background text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Container Type</th>
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Max Length</th>
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Max Width</th>
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Max Height</th>
                <th className="px-4 py-3 border-b border-border text-left font-semibold text-foreground">Max Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground">Flat Rack (20')</td>
                <td className="px-4 py-3 border-b border-border text-foreground">5.94m (19.5 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">2.40m (7.9 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed height</td>
                <td className="px-4 py-3 border-b border-border text-foreground">~45,000 kg</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 border-b border-border text-foreground">Flat Rack (40')</td>
                <td className="px-4 py-3 border-b border-border text-foreground">12.05m (39.5 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">2.40m (7.9 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed height</td>
                <td className="px-4 py-3 border-b border-border text-foreground">~45,000 kg</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground">Open Top (20')</td>
                <td className="px-4 py-3 border-b border-border text-foreground">5.9m (19.4 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">2.35m (7.7 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Up to 2.70m (8.9 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">~28,000 kg</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 border-b border-border text-foreground">Open Top (40')</td>
                <td className="px-4 py-3 border-b border-border text-foreground">12.03m (39.4 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">2.35m (7.7 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Up to 2.95m (9.7 ft)</td>
                <td className="px-4 py-3 border-b border-border text-foreground">~26,000 kg</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-border text-foreground">Platform (20')</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed limit</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed limit</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed limit</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Up to 50,000 kg</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 border-b border-border text-foreground">Platform (40')</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed limit</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed limit</td>
                <td className="px-4 py-3 border-b border-border text-foreground">No fixed limit</td>
                <td className="px-4 py-3 border-b border-border text-foreground">Up to 50,000 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-xs md:text-sm text-muted-foreground mt-2">
          Cargo exceeding these limits will require breakbulk shipping, modular transport, or specialized heavy-lift solutions.<br />
          <span className="font-semibold"><a href="/contact" className="underline text-primary hover:text-primary/80">Let us know</a></span> if you need a tailored explanation for a specific cargo type!
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="/oversized-container-services-workers.jpg"
            alt="Workers discussing oversized container logistics"
            className="rounded-3xl object-cover w-[320px] h-[180px] md:w-[380px] md:h-[210px] shadow"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* Right: Text Content */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
            Enhance Your Oversized Container Shipment<br className="hidden md:block" /> with Our Additional Services
          </h2>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            At Moon Navigation and Trading Co., we understand the challenges of transporting oversized cargo. When booking your oversized container shipment with us, you gain access to specialized logistics services designed to streamline your supply chain.
          </p>
          <p className="text-muted-foreground mb-4 text-sm md:text-base">
            Our door-to-door delivery services address everything from pickup to final destination, with expert coordination to manage route planning, permits, and secure transport. Our customs clearance specialists ensure regulatory compliance, enabling smooth cross-border movement and alignment with global trade requirements.
          </p>
          <p className="text-muted-foreground text-sm md:text-base">
            For all your oversized loading and portside shipping solutions, enjoy real-time transit tracking, risk-free maneuverability, and efficiency. Our team elevates service by providing continuous monitoring, direct routing, and end-to-end logistics support to keep your oversized cargo moving without delays.
          </p>
        </div>
      </div>
      <section className="w-full bg-muted/30 rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 mt-20 mb-2 relative">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-foreground">
            Get your Quote with Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Our streamlined LCL freight quotation process is designed for speed and convenience. At
            Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our
            Quotation by Request system. Simply fill out our short form to initiate your request. Once
            submitted, our team will assess your shipment's volume, weight, and consolidation options to
            find the most efficient and cost-effective transport solution. You will receive a customized
            quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
            cargo movement.
          </p>
          <Link href="/container-services-forms" className="bg-primary text-primary-foreground rounded-full px-6 py-2 font-medium text-sm hover:bg-primary/90 transition-colors inline-block">
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
