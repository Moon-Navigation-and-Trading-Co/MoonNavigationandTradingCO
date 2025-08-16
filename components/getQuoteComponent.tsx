import Link from "next/link";
import Image from "next/image";
import RequestQuoteButton from "./RequestQuoteButton";

interface GetQuoteComponentProps {
  topic: string;
  link?: string;
}

export default function GetQuoteComponent({ topic, link = "/ocean-freight-forms" }: GetQuoteComponentProps) {
  return (
    <section className="max-w-7xl mx-auto mt-12 mb-8">
      <div className="bg-[#d3e3f1] rounded-[40px] flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-raleway font-regular mb-4 text-black">Get your Quote with Us</h2>
          <p className="text-base font-raleway font-light text-[#222] mb-6 max-w-2xl">
            Our streamlined {topic} quotation process is designed for efficiency and precision. At Moon Navigation and Trading Co., obtaining a quote is quick and hassle-free with our Quotation by Request system. Simply fill out our short form to initiate your request. Once submitted, our team will assess your shipment&apos;s dimensions, weight, handling requirements, and route feasibility to select the best transport solution. You will receive a customized quotation directly in your email, ensuring accurate pricing and seamless execution for your specialized cargo.
          </p>
          
          <Link href={link} title={`Request a ${topic} Quote`}>
            <RequestQuoteButton>
              Request a Quote
            </RequestQuoteButton>
          </Link>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/quote-illustration.png"
            alt={`Get your ${topic} quote illustration`}
            width={400}
            height={240}
            className="object-contain w-full max-w-md h-[200px] md:h-[240px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 px-2 text-base font-sans">
        <span className="font-raleway font-light">
          Need a Reliable {topic} Solution? <Link href="/?scroll=contact" className="font-raleway font-regular underline">Contact us</Link> today for a customized {topic} plan that ensures the safe, efficient, and cost-effective shipment transportation and navigation!
        </span>
        <span className="md:text-right w-full md:w-auto font-raleway font-light">-Whenever and wherever you need to trust.</span>
      </div>
    </section>
  );
}
