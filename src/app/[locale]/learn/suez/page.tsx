"use client";
import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Image from "next/image";
import Link from "next/link";
import FAQSearch from "@/components/faq";
import ReasonsGrid from "@/components/ReasonsGrid";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";

function overview() {
  return (
    <>
      {/* Top full-width image */}
      <div className="w-full">
        <Image
          src="/suez-1.jpg"
          alt="Container ship transiting Suez Canal"
          width={1920}
          height={600}
          className="w-full h-[220px] md:h-[320px] object-cover rounded-[40px] md:rounded-[48px] mt-2"
          priority
        />
      </div>
      {/* Content below image */}
      <div className="w-full max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Title and Button */}
        <div className="flex flex-col items-start mt-2">
          <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-primary mb-4 leading-tight" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
            Suez Canal Transit and<br />
            Passage Services
          </h1>
          <RequestQuoteButton>
            <Link href="/ship-agency-forms">
              Request a Quote
            </Link>
          </RequestQuoteButton>
        </div>
        {/* Right: Description */}
        <div>
          <h2 className="text-base md:text-lg  text-primary mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
            Efficient, Safe, and Reliable Transit Through the Suez Canal
          </h2>
          <p className="text-foreground text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            At Moon Navigation and Trading Co., we specialize in providing expert Suez Canal passage services
that ensure your vessel moves swiftly, safely, and cost-effectively through one of the most strategic
maritime corridors in the world. The Suez Canal is one of the busiest and most strategic shipping
routes in the world, and navigating it efficiently requires expert knowledge, precise coordination, and
strict adherence to regulations.
          </p>
          <p className="text-foreground text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            From initial coordination with the Suez Canal Authority (SCA) to post-passage clearance, our
experienced team manages every aspect of the process. We handle all the logistics and paperwork,
ensuring your vessel’s journey is seamless and free of delays or complications. With our 24/7
operational support, we guarantee smooth, timely transit, allowing you to focus on your business
while we ensure a hassle-free canal passage.
          </p>
        </div>
      </div>
    </>
  );
}

function services() {
  return (
    <>
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-xl md:text-2xl  text-primary mb-8">
        Our comprehensive Suez Canal transit and passage services include:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Service Details */}
        <div>
          <h3 className="text-lg  text-primary mb-3">Pre-Transit Coordination</h3>
          <ul className="list-disc ml-6 text-foreground text-sm space-y-3">
            <li>
              <span className="">Booking and Scheduling:</span> We coordinate directly with the Suez Canal Authority to secure the soonest, most cost-effective transit passage.
            </li>
            <li>
              <span className="">Documentation Completion:</span> Handling all necessary paperwork including permits, transit documentation, and customs clearance, ensuring compliance with local laws and international regulations.
            </li>
            <li>
              <span className="">Full Cost Estimates:</span> We provide an accurate breakdown of Suez Canal tolls and assist in processing payments to avoid delays.
            </li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/suez-2.jpg"
            alt="Ship agent preparing Suez Canal paperwork"
            width={500}
            height={500}
            className="rounded-xl shadow-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      {/* Left: Image */}
      <div className="flex justify-center order-2 md:order-1">
        <Image
          src="/suez-3.jpg"
          alt="Ship transiting Suez Canal at sunrise with agent observing"
          width={500}
          height={500}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      {/* Right: On-Transit Services */}
      <div className="order-1 md:order-2">
        <h3 className="text-lg  text-primary mb-3">On-Transit Services</h3>
        <ul className="list-disc ml-6 text-foreground text-sm space-y-3">
          <li>
            <span className="">Pilotage and Navigation Support:</span> Boarding and coordinating with certified Suez Canal pilots to ensure safe and efficient navigation through the canal.
          </li>
          <li>
            <span className="">Monitoring and Assistance:</span> We monitor your vessel’s passage continuously, offering assistance with any operational or technical needs that arise.
          </li>
          <li>
            <span className="">Emergency Support On-Route:</span> Always ready to respond to any urgent needs during the passage, from mechanical issues to navigation concerns.
          </li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      {/* Left: Post-Passage Clearance Text */}
      <div className="order-1 md:order-1 flex flex-col justify-center">
        <h3 className="text-lg  text-primary mb-3">Post-Passage Clearance</h3>
        <ul className="list-disc ml-6 text-foreground text-sm space-y-3">
          <li>
            <span className="">Disbursement and Account Facilitation:</span> We ensure smooth settlement of disbursement accounts and follow up with port authorities for the clearance of any pending charges.
          </li>
          <li>
            <span className="">Next Port Coordination:</span> Our team ensures your vessel is properly cleared for the next stage of its journey, coordinating with port authorities and ensuring all logistics are in place for onward transit.
          </li>
        </ul>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center order-2 md:order-2">
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#2a3a8c] rounded-xl -z-10" />
          <Image
            src="/suez-4.jpg"
            alt="Port agent with clipboard at dock after Suez Canal transit"
            width={500}
            height={500}
            className="rounded-xl shadow-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-xl md:text-2xl  text-primary mb-3">
          Exclusive Agency Services to Support Your Transit:
        </h2>
        <p className="text-foreground text-sm mb-4 max-w-xl">
          In addition to managing your Suez Canal passage, Moon Navigation and Trading Co. offers a suite of comprehensive agency services. We further streamline your vessel’s journey, whether before, during, or after transit, to provide tailored solutions for all your legal, logistical, and documentation needs.
        </p>
        <h3 className="text-base  text-primary mb-2">Our Agency Services Include:</h3>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li className="text-foreground">
            <span className=" text-foreground">FDA (Port Disbursement Account):</span> Efficient handling of all port documentation and accounts to ensure smooth clearance at Egyptian ports.
          </li>
          <li className="text-foreground">
            <span className="text-foreground">Crew Sign On/Off:</span> Hassle-free coordination of crew member sign-on and sign-off, including immigration and port formalities.
          </li>
          <li className="text-foreground">
            <span className="text-foreground">Transit Spare Parts Delivery:</span> Reliable delivery of spare parts directly to your vessel, supporting ongoing operations and minimizing delays.
          </li>
          <li className="text-foreground">
            <span className="text-foreground">Bunkering / First Supply / Ship Chandlery:</span> Comprehensive fuel, oil, supply, and ship chandlery services to meet every vessel need before and after Suez Canal transit.
          </li>
          <li className="text-foreground">
            <span className="text-foreground">Specialized Services (Ad-Hoc/By-Case):</span> Custom solutions for unique vessel requirements, including crew changes, international medical support, or other onshore services tailored to your needs.
          </li>
        </ul>
        <RequestQuoteButton>
            <Link href="/learn/suez/learn-more">
                Learn More
            </Link>
        </RequestQuoteButton>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center">
        <Image
          src="/suez-5.jpg"
          alt="Ship agents at Suez Canal port"
          width={600}
          height={600}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div className="mt-20" />
    <ReasonsGridUniversal
      title={"Reasons to Choose Moon Navigation and Trading Co.\nfor Your Suez Canal Passage Needs"}
      subheading={""}
      reasons={[
          {
            icon: <Image src="/icons/ship agency/24.png" alt="Industry Expertise" width={64} height={64} className="mb-6 h-16 w-16 object-contain" />,
            title: "Industry Expertise",
            description: "With years of experience and local insight, we are your trusted partner for navigating the Suez Canal efficiently and compliantly.",
          },
          {
            icon: <Image src="/icons/ship agency/25.png" alt="All-Inclusive Service" width={64} height={64} className="mb-6 h-16 w-16 object-contain" />,
            title: "All-Inclusive Service",
            description: "From Suez Canal passage coordination to full agency services, we manage all aspects of your vessel’s journey to ensure a seamless and efficient experience.",
          },
          {
            icon: <Image src="/icons/ship agency/26.png" alt="Cost-Effective Solutions" width={64} height={64} className="mb-6 h-16 w-16 object-contain" />,
            title: "Cost-Effective Solutions",
            description: "We optimize every part of the process, minimizing costs and avoiding unnecessary delays.",
          },
          {
            icon: <Image src="/icons/ship agency/27.png" alt="24/7 Support" width={64} height={64} className="mb-6 h-16 w-16 object-contain" />,
            title: "24/7 Support",
            description: "Our dedicated team is available round-the-clock, providing real-time solutions and proactive attention to ensure smooth sailing.",
          },
          {
            icon: <Image src="/icons/ship agency/28.png" alt="Emergency Assistance & Contingency Handling" width={64} height={64} className="mb-6 h-16 w-16 object-contain" />,
            title: "Emergency Assistance & Contingency Handling",
            description: "When the unexpected happens, we deliver rapid hands-on emergency solutions to keep your vessel on course.",
          },
        ]}
      layout="3-2"
    />
    <GetQuoteComponent topic = "Suez Canal Transit" link = "/suez-canal-form"/> 
    <FAQSearch category="suez-canal" />
    </>
  );
}

export default function SuezPage() {
  return (
    <>
      {overview()}
      {services()}
    </>
  );
}
