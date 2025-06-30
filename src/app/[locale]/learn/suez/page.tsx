import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import Image from "next/image";
import Link from "next/link";

export default function SuezPage() {
  return (
    <div
      className="w-full max-w-7xl place-self-center"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      {/* Top full-width image */}
      <div className="w-full">
        <Image
          src="/images/suez-canal-hero.jpg"
          alt="Container ship transiting Suez Canal"
          width={1920}
          height={600}
          className="w-full h-[220px] md:h-[320px] object-cover rounded-[40px] md:rounded-[48px] mt-2"
          priority
        />
      </div>
      {/* Content below image */}
      <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Title and Button */}
        <div className="flex flex-col items-start mt-2">
          <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-[#222] mb-4 leading-tight">
            Suez Canal Transit &amp;<br />
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
          <h2 className="text-base md:text-lg font-semibold text-[#222] mb-2">
            Efficient, Safe, and Reliable Transit Through the Suez Canal
          </h2>
          <p className="text-[#444] text-sm mb-4 leading-relaxed">At Moon Navigation and Trading Co., we specialize in providing expert Suez Canal passage services
that ensure your vessel moves swiftly, safely, and cost-effectively through one of the most strategic
maritime corridors in the world. The Suez Canal is one of the busiest and most strategic shipping
routes in the world, and navigating it efficiently requires expert knowledge, precise coordination, and
strict adherence to regulations.
          </p>
          <p className="text-[#444] text-sm leading-relaxed">From initial coordination with the Suez Canal Authority (SCA) to post-passage clearance, our
experienced team manages every aspect of the process. We handle all the logistics and paperwork,
ensuring your vessel’s journey is seamless and free of delays or complications. With our 24/7
operational support, we guarantee smooth, timely transit, allowing you to focus on your business
while we ensure a hassle-free canal passage.
          </p>
        </div>
      </div>
    <div className="max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2a6db0] mb-8">
        Our comprehensive Suez Canal transit and passage services include:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Service Details */}
        <div>
          <h3 className="text-lg font-bold text-[#222] mb-3">Pre-Transit Coordination</h3>
          <ul className="list-disc ml-6 text-[#444] text-sm space-y-3">
            <li>
              <span className="font-semibold">Booking &amp; Scheduling:</span> We coordinate directly with the Suez Canal Authority to secure the soonest, most cost-effective transit passage.
            </li>
            <li>
              <span className="font-semibold">Documentation Completion:</span> Handling all necessary paperwork including permits, transit documentation, and customs clearance, ensuring compliance with local laws and international regulations.
            </li>
            <li>
              <span className="font-semibold">Full Cost Estimates:</span> We provide an accurate breakdown of Suez Canal tolls and assist in processing payments to avoid delays.
            </li>
          </ul>
        </div>
        {/* Right: Image */}
        <div className="flex justify-center">
          <Image
            src="/images/suez-pretransit.jpg"
            alt="Ship agent preparing Suez Canal paperwork"
            width={350}
            height={200}
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
          src="/images/suez-ontransit.jpg"
          alt="Ship transiting Suez Canal at sunrise with agent observing"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      {/* Right: On-Transit Services */}
      <div className="order-1 md:order-2">
        <h3 className="text-lg font-bold text-[#222] mb-3">On-Transit Services</h3>
        <ul className="list-disc ml-6 text-[#444] text-sm space-y-3">
          <li>
            <span className="font-semibold">Pilotage &amp; Navigation Support:</span> Boarding and coordinating with certified Suez Canal pilots to ensure safe and efficient navigation through the canal.
          </li>
          <li>
            <span className="font-semibold">Monitoring &amp; Assistance:</span> We monitor your vessel’s passage continuously, offering assistance with any operational or technical needs that arise.
          </li>
          <li>
            <span className="font-semibold">Emergency Support On-Route:</span> Always ready to respond to any urgent needs during the passage, from mechanical issues to navigation concerns.
          </li>
        </ul>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      {/* Left: Post-Passage Clearance Text */}
      <div className="order-1 md:order-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-[#222] mb-3">Post-Passage Clearance</h3>
        <ul className="list-disc ml-6 text-[#444] text-sm space-y-3">
          <li>
            <span className="font-semibold">Disbursement &amp; Account Facilitation:</span> We ensure smooth settlement of disbursement accounts and follow up with port authorities for the clearance of any pending charges.
          </li>
          <li>
            <span className="font-semibold">Next Port Coordination:</span> Our team ensures your vessel is properly cleared for the next stage of its journey, coordinating with port authorities and ensuring all logistics are in place for onward transit.
          </li>
        </ul>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center order-2 md:order-2">
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#2a3a8c] rounded-xl -z-10" />
          <Image
            src="/images/suez-postpassage.jpg"
            alt="Port agent with clipboard at dock after Suez Canal transit"
            width={350}
            height={200}
            className="rounded-xl shadow-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-[#2a4365] mb-3">
          Exclusive Agency Services to Support Your Transit:
        </h2>
        <p className="text-[#444] text-sm mb-4 max-w-xl">
          In addition to managing your Suez Canal passage, Moon Navigation and Trading Co. offers a suite of comprehensive agency services. We further streamline your vessel’s journey, whether before, during, or after transit, to provide tailored solutions for all your legal, logistical, and documentation needs.
        </p>
        <h3 className="text-base font-bold text-[#2a4365] mb-2">Our Agency Services Include:</h3>
        <ul className="list-disc ml-6 text-[#444] text-sm mb-4 space-y-2">
          <li>
            <span className="font-semibold">FDA (Port Disbursement Account):</span> Efficient handling of all port documentation and accounts to ensure smooth clearance at Egyptian ports.
          </li>
          <li>
            <span className="font-semibold">Crew Sign On/Off:</span> Hassle-free coordination of crew member sign-on and sign-off, including immigration and port formalities.
          </li>
          <li>
            <span className="font-semibold">Transit Spare Parts Delivery:</span> Reliable delivery of spare parts directly to your vessel, supporting ongoing operations and minimizing delays.
          </li>
          <li>
            <span className="font-semibold">Bunkering / First Supply / Ship Chandlery:</span> Comprehensive fuel, oil, supply, and ship chandlery services to meet every vessel need before and after Suez Canal transit.
          </li>
          <li>
            <span className="font-semibold">Specialized Services (Ad-Hoc/By-Case):</span> Custom solutions for unique vessel requirements, including crew changes, international medical support, or other onshore services tailored to your needs.
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
          src="/images/suez-agency-services.jpg"
          alt="Ship agents at Suez Canal port"
          width={350}
          height={220}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <div className="w-full max-w-6xl mx-auto mt-20 mb-10 px-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2a4365] mb-8 text-center">
        Reasons to Choose Moon Navigation and Trading Co.<br />
        for Your Suez Canal Passage Needs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">Industry Expertise</h3>
          <p className="text-[#444] text-sm">
            With years of experience and local insight, we are your trusted partner for navigating the Suez Canal efficiently and compliantly.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">All-Inclusive Service</h3>
          <p className="text-[#444] text-sm">
            From Suez Canal passage coordination to full agency services, we manage all aspects of your vessel’s journey to ensure a seamless and efficient experience.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">Cost-Effective Solutions</h3>
          <p className="text-[#444] text-sm">
            We optimize every part of the process, minimizing costs and avoiding unnecessary delays.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">24/7 Support</h3>
          <p className="text-[#444] text-sm">
            Our dedicated team is available round-the-clock, providing real-time solutions and proactive attention to ensure smooth sailing.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">Emergency Assistance & Contingency Handling</h3>
          <p className="text-[#444] text-sm">
            When the unexpected happens, we deliver rapid hands-on emergency solutions to keep your vessel on course.
          </p>
        </div>
      </div>
    </div>
    <GetQuoteComponent topic = "Suez Canal Transit" link = "/suez-canal-form"/> 
    </div>
  );
}

