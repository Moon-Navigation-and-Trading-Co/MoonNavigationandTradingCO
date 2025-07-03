import GetQuoteComponent from "@/components/getQuoteComponent";
import Image from "next/image";
import FAQSearch from "@/components/faq";

export default function PDAProcessPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4" style={{ fontFamily: "Raleway, sans-serif" }}>
      <h1 className="text-2xl md:text-3xl  text-[#2a4365] mb-4">
        Our PDA Process at Moon Navigation and Trading Co.
      </h1>
      <p className="text-[#444] mb-10 max-w-2xl">
        We follow a structured approach to prepare, adjust, and finalize the PDA, ensuring total accuracy and operational efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
        <div>
          <h2 className="text-lg  text-[#2a4365] mb-2">Step 1: Pre-Arrival Cost Estimation</h2>
          <p className="text-[#444] mb-4">
            We conduct thorough evaluation of vessel types, cargo specifications, and voyage profiles to create a detailed shipping estimate. Our team consults with port authorities as soon as your schedule is known to obtain the most accurate and up-to-date Official Port Disbursement Assessment (PDA) based on current tariffs, surcharges, and requirements for the projected port call.
          </p>
          <p className="text-[#444]">
            With this detailed and accurate estimate, our customers receive transparent, itemized cost breakdowns and can manage their shipping budgets effectively.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/p-pda-1.jpg"
            alt="Laptop showing shipping analytics with ship in background"
            width={350}
            height={200}
            className="rounded-xl shadow-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/p-pda-2.jpg"
            alt="Tablet with analytics in meeting room"
            width={350}
            height={200}
            className="rounded-xl shadow-md object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-lg  text-[#2a4365] mb-2">Step 2: Real-Time Adjustments & Updates</h2>
          <p className="text-[#444] mb-4">
            We prioritize transparency and communication in managing port operations for our clients. Our team closely monitors vessel movements and port activity for any changes in costs, surcharges, or requirements, and we provide real-time updates to your PDA as new information arises.
          </p>
          <p className="text-[#444]">
            This ensures you always receive the most fluid, accurate Port Disbursement Assessment—enabling you to make informed decisions and maintain full financial control throughout your vessel’s stay.
          </p>
          <p className="text-[#444] mt-2">
            By staying in constant communication with both the port and our clients, we empower businesses to manage their shipping operations efficiently and confidently.
          </p>
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-12">
      <div>
        <h2 className="text-lg  text-[#2a4365] mb-2">
          Step 3: Final Disbursement Account (FDA) Submission
        </h2>
        <p className="text-[#444] mb-4">
          We ensure a thorough and accurate financial process for the completion of each port call.
        </p>
        <p className="text-[#444] mb-2">
          Our team prepares the <span className="">Final Disbursement Account</span> meticulously by verifying invoices and reconciling actual costs with the Port Disbursement Assessment.
        </p>
        <p className="text-[#444] mb-2">
          We provide our clients with a fully documented financial statement for the call, ensuring clarity and transparency in every transaction.
        </p>
        <p className="text-[#444]">
          With our commitment to financial accuracy and transparency, we empower businesses to confidently manage their shipping and maintain trust in their financial dealings.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/p-pda-3.jpg"
          alt="Businesswoman reviewing financial documents at port"
          width={350}
          height={200}
          className="rounded-xl shadow-md object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
    <GetQuoteComponent topic = "PDA" link = "/ship-agency-forms"/> 
    <FAQSearch category="ship-agency-services" />
    </div>
  );
}
