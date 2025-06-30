import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function ContainerHandlingPage() {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
        style={{ fontFamily: "Raleway, sans-serif" }}>
            
            {/* Our Container Handling Services */}
           <div className="w-full max-w-7xl mx-auto mt-20">
           <h2 className="text-2xl md:text-3xl  text-center text-primary mb-8">
               Our Container Handling Services
           </h2>
           <p className="text-muted-foreground text-center mb-10 text-sm md:text-base max-w-7xl mx-auto">
               Efficient container handling is critical at port and beyond their operations. Our services include:
           </p>
           
           {/* 1. Loading & Unloading Operations - Text Left, Image Right */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
               {/* Left: Text Content */}
               <div>
                   <h3 className="text-lg md:text-xl  mb-2">
                       1. Loading &amp; Unloading Operations
                   </h3>
                   <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                       <li>
                           <span className="">Ship-to-Shore &amp; Shore-to-Ship Handling</span>—Fast, secure loading and unloading of containers.
                       </li>
                       <li>
                           <span className="">Rail &amp; Truck Transfers</span>—Seamless movement between vessel, port, rail, and inland transport.
                       </li>
                       <li>
                           <span className="">Rapid Transshipment</span>—Quick transfer of containers between vessels at critical storage depots.
                       </li>
                   </ul>
               </div>
               {/* Right: Image */}
               <div className="w-full rounded-xl overflow-hidden shadow">
                   <img
                       src="/container-handling-loading.jpg"
                       alt="Container loading and unloading operations"
                       className="object-cover w-full h-40 md:h-56"
                   />
               </div>
           </div>

           {/* 2. Specialized Container Handling - Image Left, Text Right */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
               {/* Left: Image */}
               <div className="w-full rounded-xl overflow-hidden shadow">
                   <img
                       src="/container-handling-specialized.jpg"
                       alt="Specialized container handling with crane"
                       className="object-cover w-full h-40 md:h-56"
                   />
               </div>
               {/* Right: Text Content */}
               <div>
                   <h3 className="text-lg md:text-xl  mb-2">
                       2. Specialized Container Handling
                   </h3>
                   <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                       <li>
                           <span className="">Reefer Containers (Refrigerated Cargo)</span>—Temperature-controlled handling with 24/7 monitoring.
                       </li>
                       <li>
                           <span className="">Oversized &amp; Out-of-Gauge Cargo</span>—Expert lifting solutions for heavy machinery, project cargo, and special shipments.
                       </li>
                       <li>
                           <span className="">Dangerous Goods Containers (IMO Cargo)</span>—Safe and regulation-compliant handling for hazardous materials.
                       </li>
                   </ul>
               </div>
           </div>
       </div>
       {/* 3. Secure Lashing & Cargo Protection */}
       <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-8 mt-8">
           {/* Left: Text Content */}
           <div className="flex-1">
               <h3 className="text-lg md:text-xl  mb-2">
                   3. Secure Lashing &amp; Cargo Protection
               </h3>
               <ul className="list-disc list-inside text-sm md:text-base text-foreground space-y-1 pl-2">
                   <li>
                       <span className="">Lashing &amp; Securing</span> – Proper execution of restraints to prevent movement during transit.
                   </li>
                   <li>
                       <span className="">Container Inspection &amp; Damage Assessment</span> – Routine checks to ensure cargo integrity.
                   </li>
                   <li>
                       <span className="">Weighing &amp; Compliance Checks</span> – VGM (Verified Gross Mass) certification for SOLAS compliance.
                   </li>
               </ul>
           </div>
           {/* Right: Image */}
           <div className="flex-1 flex justify-center">
               <img
                   src="/container-lashing-cargo-protection.jpg"
                   alt="Workers securing cargo inside a shipping container"
                   className="rounded-xl shadow object-cover w-full max-w-7xl md:max-w-7xl h-40 md:h-44"
               />
           </div>
       </div>
       <GetQuoteComponent topic="Container Handling" link="/container-services-forms" />
       </div>
    )
}