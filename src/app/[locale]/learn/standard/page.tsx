import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function DangerousCargoInfo() {
  const t = useTranslations("learn-standard");

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
        {/* Top: Container Image */}
        <div className="w-full flex justify-center rounded-3xl overflow-hidden mb-6" style={{ background: "#e6ecf5" }}>
          <img
            src="/container-blue.png"
            alt="Moon Navigation and Trading Co. Container"
            className="w-full h-[320px] object-cover"
            style={{ marginTop: 0, marginBottom: 0 }}
          />
        </div>
        {/* Main Content */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start gap-8 px-4 md:px-0">
          {/* Left: Title and Subtitle */}
          <div className="flex-1 min-w-[260px]">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#23294d' }}>
              Standard Dry Container Shipment
            </h1>
            <p className="text-base text-[#3b4cc0] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Efficient, Secure, and Cost-Effective Shipping Solutions
            </p>
            <Link href="/container-services-forms">
              <Button className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors">
                Request a Quote
              </Button>
            </Link>
          </div>
          {/* Right: Description */}
          <div className="flex-[2] text-[#23294d] text-sm md:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <p className="mb-4">
              A Standard Dry Container is the widely utilized, versatile physical container, customarily used for transporting a wide variety of cargo. It offers a strong protection from external elements and is the most widely used container type in global trade.
            </p>
            <p>
              At Moon Navigation and Trading Co., we offer reliable Standard Dry Container (SDC) services tailored to meet your cargo needs. Ideal for transporting general goods that do not require temperature control, our dry container solution ensures safe, secure, and seamless delivery for international shipments.
            </p>
          </div>
        </div>
      </section>





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
            submitted, our team will assess your shipment’s volume, weight, and consolidation options to
            find the most efficient and cost-effective transport solution. You will receive a customized
            quotation directly in your email, ensuring accurate pricing, reliable scheduling, and seamless
            cargo movement.
          </p>
          <Link href="/container-services-forms" className="bg-[#23294d] text-white rounded-full px-6 py-2 font-medium text-sm hover:bg-[#3b4cc0] transition-colors inline-block">
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
    </>
  );
}
