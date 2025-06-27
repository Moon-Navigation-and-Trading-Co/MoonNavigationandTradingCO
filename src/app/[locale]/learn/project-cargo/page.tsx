import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

//seo
export const metadata = {
  title: "Project Cargo Services | Moon Navigation and Trading Co.",
  description:
    "Specialized project cargo logistics for oversized, heavy, and high-value shipments. Learn the key differences between project and standard cargo, and why Moon Navigation and Trading Co. is your trusted partner.",
  keywords: [
    "project cargo",
    "heavy lift",
    "oversized cargo",
    "logistics",
    "ocean freight",
    "Moon Navigation and Trading Co.",
    "specialized shipping",
    "industrial logistics",
    "infrastructure logistics",
    "cargo insurance",
    "shipping solutions",
    "project cargo services",
    "project cargo logistics",
    "project cargo transportation",
    "project cargo quote",
    "project cargo solutions",
    "project cargo company",
    "project cargo management",
    "project cargo shipping",
    "project cargo provider",
    "project cargo expert",
    "project cargo partner",
    "project cargo difference",
    "project cargo vs standard cargo",
    "project cargo industries",
    "project cargo challenges",
    "project cargo risk",
    "project cargo insurance",
    "project cargo cost",
    "project cargo equipment",
    "project cargo team",
    "project cargo compliance",
    "project cargo safety",
    "project cargo security",
    "project cargo global",
    "project cargo local expertise",
    "project cargo marine",
    "project cargo construction",
    "project cargo mining",
    "project cargo aerospace",
    "project cargo energy",
  ],
  openGraph: {
    title: "Project Cargo Services | Moon Navigation and Trading Co.",
    description:
      "Expert project cargo logistics for oversized, heavy, and high-value shipments. Discover the differences between project and standard cargo, and our tailored solutions.",
    // url: "http://localhost:3000/en/learn/project-cargo", // Change to your production domain when live
    type: "website",
    images: [
      {
        // url: "/project-cargo-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Project Cargo Services - Oversized, Heavy Lift, and Specialized Logistics by Moon Navigation and Trading Co.",
      },
    ],
  },
  alternates: {
    // canonical: "http://localhost:3000/en/learn/project-cargo", // Change to your production domain when live
  },
};

export default function ProjectCargoPage() {
  const t = useTranslations("learn-project-cargo");

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="rounded-3xl overflow-hidden shadow-xl mt-8 mx-auto max-w-7xl relative h-[400px]">
        <Image
          src="/project-cargo-hero.jpg"
          alt="Project Cargo - Oversized and Heavy Lift Logistics by Moon Navigation and Trading Co."
          width={1600}
          height={600}
          className="w-full h-80 object-cover"
          priority
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-7xl">
            {t("hero-title")}
          </h1>
          <p className="text-white text-lg mb-6 max-w-7xl">
            {t("hero-description")}
          </p>
          <Button asChild className="w-fit">
            <Link href="/project-cargo-quote" title="Request a Project Cargo Quote">
              {t("hero-cta") || "Request a Quote"}
            </Link>
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Title and Button */}
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Project Cargo<br />Services
            </h2>
            <Button asChild className="w-fit">
              <Link href="/ocean-freight-forms" title="Request a Project Cargo Quote">
                Request a Quote
              </Link>
            </Button>
          </div>
          {/* Right: What is Project Cargo */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              What is Project Cargo?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Project cargo in ocean freight entails the transportation of large, heavy, high-value or
              complex pieces of equipment and materials. At Moon Navigation and Trading Co., we
              specialize in managing these specialized shipments, which are intricately linked to specific
              projects and require meticulous handling, specialized equipment, and precise coordination.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We understand that ensuring the safe and timely delivery of project cargo is vital for the
              successful execution of industrial and infrastructure projects. Our dedicated team is
              committed to providing comprehensive solutions that address the unique challenges of
              project cargo logistics, making this a critical aspect of services in global trade.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">
          Key Industries Leveraging Our Project Cargo Solution
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-start md:justify-between">
          {/* 1 */}
          <div className="flex flex-col items-center w-36">
            <Image
              src="/industry-marine.jpg"
              alt="Marine and Shipbuilding Industry Project Cargo"
              width={140}
              height={90}
              className="rounded-2xl object-cover w-full h-[90px]"
              loading="lazy"
            />
            <span className="mt-2 text-sm text-center">Marine and Shipbuilding</span>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center w-36">
            <Image
              src="/industry-construction.jpg"
              alt="Construction and Infrastructure Industry Project Cargo"
              width={140}
              height={90}
              className="rounded-2xl object-cover w-full h-[90px]"
              loading="lazy"
            />
            <span className="mt-2 text-sm text-center">Construction and Infrastructure</span>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center w-36">
            <Image
              src="/industry-mining.jpg"
              alt="Mining Industry Project Cargo"
              width={140}
              height={90}
              className="rounded-2xl object-cover w-full h-[90px]"
              loading="lazy"
            />
            <span className="mt-2 text-sm text-center">Mining</span>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center w-36">
            <Image
              src="/industry-aerospace.jpg"
              alt="Aerospace Industry Project Cargo"
              width={140}
              height={90}
              className="rounded-2xl object-cover w-full h-[90px]"
              loading="lazy"
            />
            <span className="mt-2 text-sm text-center">Aerospace</span>
          </div>
          {/* 5 */}
          <div className="flex flex-col items-center w-36">
            <Image
              src="/industry-energy.jpg"
              alt="Energy Industry Project Cargo"
              width={140}
              height={90}
              className="rounded-2xl object-cover w-full h-[90px]"
              loading="lazy"
            />
            <span className="mt-2 text-sm text-center">Energy</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Key Differences between Project Cargo and Standard Cargo
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border bg-background text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-2 border-b border-border font-semibold text-left w-48 text-foreground">Feature</th>
                <th className="px-4 py-2 border-b border-border font-semibold text-left w-64 text-foreground">Project Cargo</th>
                <th className="px-4 py-2 border-b border-border font-semibold text-left w-64 text-foreground">Standard Cargo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Size &amp; Weight</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">Oversized, heavy, and irregular-shaped items</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">Standard-sized goods that fit in containers or pallets</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Handling Requirements</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Requires specialized handling (cranes, flat racks, heavy-lift vessels, RoRo, breakbulk)
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Handled using conventional shipping methods (pallets, boxes, containers)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Logistics Complexity</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  High – involves route surveys, permits, customs clearances, and infrastructure adjustments
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Low – follows standard transportation procedures
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Transport Equipment</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Heavy-lift vessels, modular trailers, open-top containers, SPMTs
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Standard containers (20ft, 40ft), trucks, forklifts
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Time Sensitivity</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Often critical for large-scale projects, delays can be costly
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  More flexible in transit schedules
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Industries Served</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Energy, construction, oil &amp; gas, mining, infrastructure
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Retail, electronics, textiles, consumer goods
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Risk &amp; Insurance</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Higher risk due to size and complexity, requires specialized insurance
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Lower risk, covered by standard cargo insurance
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-border align-top text-foreground">Shipping Cost</td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Higher due to special handling, permits, and logistics planning
                </td>
                <td className="px-4 py-2 border-b border-border align-top text-muted-foreground">
                  Lower, based on weight, volume, and standard tariffs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button asChild className="mt-6 float-right">
          <Link href="/project-cargo-solutions" title="Learn More About Our Project Cargo Solutions">
            Learn More About Our Project Cargo Solutions
          </Link>
        </Button>
      </section>

      <section className="max-w-7xl mx-auto bg-secondary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            How are we overcoming challenges in project cargo transportation?
          </h2>
          <p className="mb-4 text-muted-foreground">
            At Moon Navigation and Trading Co., we recognize that project cargo is unique, as each shipment is treated as a one-of-a-kind operation that requires a tailored approach to logistics. The process begins with detailed surveys, where we assess the dimensions, weight, and transport feasibility of your cargo to ensure optimal planning.
          </p>
          <p className="mb-4 text-muted-foreground">
            We prioritize permit management, securing all necessary documentation for oversized loads to ensure compliance with regulations. Additionally, our team excels in coordination with ports, carriers, and local authorities to streamline the transportation process. As a critical segment of ocean freight, project cargo demands specialized expertise in logistics and engineering to ensure the successful delivery of valuable assets.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">Custom Handling & Packaging:</span> Our team employs specialized handling techniques and tailored packaging solutions to guarantee the safety and stability of project cargo.
            </li>
            <li>
              <span className="font-semibold text-foreground">Heavy Lifting Equipment:</span> We utilize advanced cranes, gantries, and hydraulic platforms to accurately lift and position exceptionally heavy items, ensuring secure transport.
            </li>
            <li>
              <span className="font-semibold text-foreground">Intermodal Transport Coordination:</span> We seamlessly integrate sea, road, and rail transport, facilitating smooth coordination across different modes of transportation.
            </li>
            <li>
              <span className="font-semibold text-foreground">Enhanced Safety & Security:</span> Our comprehensive security protocols and monitoring systems are designed to protect valuable and complex cargo throughout the entire transport process.
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
        </div>
      </section>

      <section className="max-w-7xl mx-auto pt-8 pb-16">
        <h2 className="text-xl md:text-2xl font-normal text-center mb-2">
          Reasons to Choose Moon Navigation and Trading Co. for Your Project Cargo Needs
        </h2>
        <p className="mb-8 text-center text-xs md:text-sm text-muted-foreground max-w-7xl mx-auto">
          At Moon Navigation & Trading, we offer comprehensive end-to-end solutions for project cargo transportation, meticulously overseeing every logistical aspect from planning to delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 justify-items-center">
          {/* Dedicated Project Cargo Team */}
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-semibold text-xs text-primary mb-1">Dedicated Project Cargo Team</div>
            <div className="text-xs text-muted-foreground max-w-7xl">
              Our proficient team excels in managing the complexities of project logistics, delivering customized solutions tailored to your specific requirements.
            </div>
          </div>
          {/* Specialized Equipment & Vessels */}
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-semibold text-xs text-primary mb-1">Specialized Equipment & Vessels</div>
            <div className="text-xs text-muted-foreground max-w-7xl">
              From permits and health certificates to customs clearance, we manage all necessary documentation.
            </div>
          </div>
          {/* Global Reach & Local Expertise */}
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-semibold text-xs text-primary mb-1">Global Reach & Local Expertise</div>
            <div className="text-xs text-muted-foreground max-w-7xl">
              With a strong global network, we offer seamless project cargo transport to any destination, supported by local expertise at each stage of the journey.
            </div>
          </div>
          {/* Risk Management & Compliance */}
          <div className="flex flex-col items-center text-center min-h-[180px]">
            <div className="font-semibold text-xs text-primary mb-1">Risk Management & Compliance</div>
            <div className="text-xs text-muted-foreground max-w-7xl">
              We proactively manage any risk factors associated with project cargo, ensuring all international shipping regulations, permits, and insurance requirements are met.
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto mt-12 mb-8">
        <div className="bg-secondary rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">Get your Quote with Us</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-7xl">
              Our steamlined project cargo quotation process is designed for efficiency and precision. At Moon
              Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by
              Request system. Simply fill out our short form to initiate your request. Once submitted, our team
              will assess your shipment's dimensions, weight, handling requirements, and route feasibility to
              select the best transport solution. You will receive a customized quotation directly in your email,
              ensuring accurate pricing and seamless execution for your specialized cargo.
            </p>
            <Button asChild>
              <Link href="/ocean-freight-forms" title="Request a Project Cargo Quote">
                Request a Quote
              </Link>
            </Button>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/quote-illustration.png"
              alt="Get your project cargo quote illustration"
              width={320}
              height={180}
              className="object-contain"
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-8" />
        <div className="text-xs text-muted-foreground mt-2 px-2">
          Need a Reliable Project Cargo Solution? <span className="font-semibold">Contact us</span> today for a customized project cargo plan that ensures the safe, efficient, and cost-effective transport of your oversized, heavy, or complex shipment.<br />
          <span className="float-right">-Whenever and wherever you need to trust.</span>
        </div>
      </section>
    </div>
  );
}