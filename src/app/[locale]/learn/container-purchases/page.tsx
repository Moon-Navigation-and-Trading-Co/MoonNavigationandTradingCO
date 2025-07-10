import GetQuoteComponent from "@/components/getQuoteComponent";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import VesselCarousel from "@/components/vessel-carousel";
import Link from "next/link";

const serve=[
    {img:"/cc-1.jpg",title:"Shipping and Freight Forwarders"},
    {img:"/cc-2.jpg",title:"Construction and Engineering Firms"},
    {img:"/cc-3.jpg",title:"Oil and Gas Companies"},
    {img:"/cc-4.jpg",title:"Manufacturing and Industrial Companies"},
    {img:"/cc-5.jpg",title:"Retail and Storage Businesses"},
]
const containers = [
    {img:"/ccs-1.jpg",title:"Standard Dry Containers (20ft and 40ft)"},
    {img:"/ccs-2.jpg",title:"High Cube Containers"},
    {img:"/ccs-3.jpg",title:"Open Top Containers"},
    {img:"/ccs-4.jpg",title:"Flat Rack Containers"},
    {img:"/ccs-5.jpg",title:"Refrigerated Containers (Reefers)"},
    {img:"/ccs-6.jpg",title:"Tank Containers"},
    {img:"/ccs-7.jpg",title:"Special Purpose and Modified Containers"}
]

export default function ContainerPurchases() {
    return (
        <div className="w-full max-w-7xl mx-auto" style={{fontFamily: 'Raleway'}}>
            <div className="mt-10 mb-8">
            <img src="/images/container-purchases.jpg" alt="Container Purchases" width={1280} height={350} className="rounded-[60px]" />
            </div>
        <div className="flex flex-col md:flex-row items-center rounded-[40px] p-8 md:p-16 mb-12">
            <div className="md:w-1/2 w-full flex flex-col items-start mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-light text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Container Purchases and<br />Rentals
                </h2>
                <a href="/buy-rent-container-forms">
                    <RequestQuoteButton >
                        <Link href="/buy-rent-container-forms">
                            Get Quote
                        </Link>
                    </RequestQuoteButton>
                </a>
            </div>
            <div className="md:w-1/2 w-full flex flex-col items-start">
                <p className="text-primary text-base font-semibold mb-2">
                    Looking to buy or rent a container?
                </p>
                <p className="text-foreground text-sm md:text-base leading-relaxed">
                    We have the unique shipping and storage needs of businesses and individuals alike. To meet these diverse requirements, we offer an extensive selection of containers for sale and rental, including solutions to suit your specific needs. Whether you are looking for a temporary storage solution, a long-term investment, or customized new and/or pre-owned container containers tailored to your project, trust us to deliver reliable solutions that match your logistics and storage capabilities, guiding you every step of the way at Moon Navigation and Trading Co.
                </p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between rounded-[40px] p-8 md:p-16 mb-12">
            <div className="w-full md:w-[500px] flex-shrink-0 flex items-center justify-center mb-8 md:mb-0">
                <img
                    src="/images/container-man.jpg"
                    alt="Container Solutions"
                    className="rounded-[60px] object-cover w-[620px] h-[420px]"
                    style={{ background: "#e5e7eb" }}
                />
            </div>
            <div className="flex-1 flex flex-col items-start md:pl-12">
                <h2 className="text-2xl md:text-3xl font-normal text-primary mb-10" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Container Solutions for Every<br />Need
                </h2>
                <p className="text-foreground text-sm md:text-base mb-2 font-medium">
                    At Moon Navigation and Trading Co., we pride ourselves on providing durable and reliable container solutions. Our containers are expertly designed to withstand harsh weather conditions, ensuring the safety of your cargo.
                </p>
                <p className="text-foreground text-sm md:text-base mb-2">
                    With a wide variety of customization options, including standard dry containers and specialized units in different sizes and types as customers, we’re ready to meet the diverse needs of our clients. We offer flexible sizes from 8 ft to 40 ft (and custom) and materials and leases to specifications.
                </p>
                <p className="text-foreground text-sm md:text-base">
                    Committed to affordability, we provide pricing for both purchase and rental options, delivering cost-effective solutions that fit your budget. Trust us to be your partner in shipping and storage needs.
                </p>
            </div>
        </div>
            <VesselCarousel vessels={serve} />

            {/* Renting Containers Section (matches provided image) */}
            <div className="relative w-full min-h-[700px] mt-16 mb-8">
                <img
                    src="/images/container-rental-bg.jpg"
                    alt="Renting Containers Background"
                    className="object-cover w-full h-full absolute inset-0"
                    style={{ zIndex: 0 }}
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] bg-white rounded-[48px] shadow-lg flex flex-col md:flex-row items-stretch p-8 md:p-16" style={{ zIndex: 1, opacity: 0.98 }}>
                    {/* Left column: services */}
                    <div className="flex-1 flex flex-col justify-center gap-8">
                        <h3 className="text-xl md:text-2xl font-light text-[#256094] mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            We offer the following services to ensure a seamless rental experience:
                        </h3>
                        <div className="flex flex-col gap-8 mt-4">
                            {/* Rental Terms */}
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    {/* Calendar/List Icon */}
                                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 3v4M17 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor"/><circle cx="7.5" cy="14.5" r="1" fill="currentColor"/><rect x="10.5" y="10" width="6" height="1.5" rx="0.75" fill="currentColor" opacity=".2"/><rect x="10.5" y="14" width="6" height="1.5" rx="0.75" fill="currentColor" opacity=".2"/></svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-black mb-1">Rental Terms</div>
                                    <div className="text-foreground text-sm md:text-base">
                                        Choose from daily, monthly, or long-term rental agreements to suit your needs.
                                    </div>
                                </div>
                            </div>
                            {/* Quick Delivery */}
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    {/* Truck Icon */}
                                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 9h2.5a1 1 0 0 1 .95.684l1.5 4.5A1 1 0 0 1 20 16h-1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="7.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="17.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 10h4M7 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-black mb-1">Quick Delivery</div>
                                    <div className="text-foreground text-sm md:text-base">
                                        Enjoy fast and efficient delivery directly to your location.
                                    </div>
                                </div>
                            </div>
                            {/* Maintenance Included */}
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    {/* Gear Icon */}
                                    <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="text-[#256094]"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6c.26-.1.54-.1.8 0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6c.1.26.1.54 0 .8a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" stroke="currentColor" strokeWidth="1.5"/></svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-black mb-1">Maintenance Included</div>
                                    <div className="text-foreground text-sm md:text-base">
                                        Rest assured that we handle all repairs and maintenance throughout your rental period.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right column: Renting Containers */}
                    <div className="flex-1 flex flex-col justify-center items-center md:items-start pl-0 md:pl-16">
                        <div className="text-[#256094] text-5xl md:text-6xl font-light leading-tight mb-4 text-center md:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Renting<br />Containers
                        </div>
                        <div className="text-foreground text-base md:text-lg mb-8 text-center md:text-left max-w-md">
                            Renting a container is an excellent solution for short-term or temporary storage requirements.
                        </div>
                        <div className="w-full h-1 border-b-2 border-[#256094] mt-2" />
                    </div>
                </div>
            </div>
            {/* Buying Containers Section (matches provided image) */}
                        <div className="relative w-full min-h-[700px] mb-16">
                <img
                    src="/images/container-buy-bg.jpg"
                    alt="Buying Containers Background"
                    className="object-cover w-full h-full absolute inset-0"
                    style={{ zIndex: 0 }}
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] bg-white rounded-[48px] shadow-lg flex flex-col md:flex-row items-stretch p-8 md:p-16" style={{ zIndex: 1, opacity: 0.98 }}>
                    {/* Left column: title and subtitle */}
                    <div className="flex-1 flex flex-col justify-center gap-8 pr-0 md:pr-12">
                        <div className="text-[#256094] text-5xl md:text-6xl font-light leading-tight mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Buying<br />Containers
                        </div>
                        <a href="#" className="text-[#256094] text-lg font-normal mt-2 hover:underline">Seeking a permanent solution?</a>
                        <div className="w-full h-1 border-b-2 border-[#256094] mt-8" />
                    </div>
                    {/* Right column: benefits */}
                    <div className="flex-1 flex flex-col justify-center gap-8">
                        <div className="text-[#256094] text-2xl md:text-3xl font-light mb-6 text-center md:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            Our containers offer the following benefits:
                        </div>
                        <div className="flex flex-col gap-8">
                            {/* Ready for Immediate Use */}
                            <div className="flex items-start gap-6">
                                <div>
                                    <div className="font-semibold text-black mb-1">Ready for Immediate Use</div>
                                    <div className="text-foreground text-sm md:text-base">
                                        Our containers is fully inspected and certified to meet industry standards, ensuring safety and reliability.
                                    </div>
                                </div>
                            </div>
                            {/* Customizable */}
                            <div className="flex items-start gap-6">
                                <div>
                                    <div className="font-semibold text-black mb-1">Customizable</div>
                                    <div className="text-foreground text-sm md:text-base">
                                        We can tailor your container to meet your specific needs, with options for shelving, lighting, ventilation, and other features.
                                    </div>
                                </div>
                            </div>
                            {/* Cost-Effective */}
                            <div className="flex items-start gap-6">
                                <div>
                                    <div className="font-semibold text-black mb-1">Cost-Effective</div>
                                    <div className="text-foreground text-sm md:text-base">
                                        We offer competitive pricing that delivers long-term value; our containers are a smart investment for your storage and shipping requirements.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs text-[#256094] mt-8 text-center md:text-left">
                            Choose us, Moon Navigation and Trading Co. for a dependable and versatile solution that meets your needs.
                        </div>
                    </div>
                </div>
            </div>

        {/* --- Start: Informational Blocks Section --- */}
        <div className="flex flex-col gap-16 w-full max-w-7xl mx-auto mb-24">
          {/* Block 1: Flexible Purchase & Rental Plans */}
          <div className="flex flex-col md:flex-row items-center  rounded-[60px] p-8 md:p-16 ">
            <div className="flex-1 flex flex-col items-start md:pr-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Flexible Purchase & Rental Plans
              </h2>
              <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                At Moon Navigation and Trading Co., we understand that different projects demand different timelines. That’s why we offer:
              </p>
              <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>Short-Term & Long-Term Rentals</li>
                <li>Affordable Daily, Weekly, and Monthly Rates</li>
                <li>Purchase Options with Competitive Market Prices</li>
                <li>Bulk Supply for Businesses & Projects</li>
              </ul>
              <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Our team helps you choose the most cost-effective solution for your requirements.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/images/container-purchase-1.jpg" alt="Flexible Purchase & Rental Plans" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
            </div>
          </div>

          {/* Block 2: Container Conditions */}
          <div className="flex flex-col md:flex-row-reverse items-center rounded-[60px] p-8 md:p-16 ">
            <div className="flex-1 flex flex-col items-start md:pl-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Container Conditions — You Choose What Suits You
              </h2>
              <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                We offer containers in a variety of conditions to fit your budget and usage:
              </p>
              <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li><b>New (One-Trip)</b> – Like new, perfect for long-term use</li>
                <li><b>Cargo-Worthy (CW)</b> – Certified for international shipping</li>
                <li><b>Wind & Watertight (WWT)</b> – Ideal for secure storage</li>
                <li><b>As-Is</b> – Economical units for non-critical use</li>
              </ul>
              <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                We ensure complete transparency in container condition and specifications.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/images/container-purchase-2.jpg" alt="Container Conditions" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
            </div>
          </div>

          {/* Block 3: Seamless Delivery & Logistics Support */}
          <div className="flex flex-col md:flex-row items-center rounded-[60px] p-8 md:p-16">
            <div className="flex-1 flex flex-col items-start md:pr-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Seamless Delivery & Logistics Support
              </h2>
              <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                From quotation to delivery, we manage it all. Our logistics support includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>Fast delivery across cities, ports, and project sites</li>
                <li>Transport coordination via truck, trailer, or crane</li>
                <li>Placement and offloading services upon request</li>
                <li>Cross-border delivery and coordination (if needed)</li>
              </ul>
              <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                We make sure your container reaches you securely and on time.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/images/container-purchase-3.jpg" alt="Seamless Delivery & Logistics Support" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
            </div>
          </div>

          {/* Block 4: Customization Options Available */}
          <div className="flex flex-col md:flex-row-reverse items-center rounded-[60px] p-8 md:p-16">
            <div className="flex-1 flex flex-col items-start md:pl-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Customization Options Available
              </h2>
              <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Need a container modified for a specific purpose? We offer:
              </p>
              <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>Branding & exterior painting</li>
                <li>Electrical wiring and lighting</li>
                <li>Ventilation, windows, and doors</li>
                <li>Insulation and flooring upgrades</li>
                <li>Interior shelving or partitions</li>
              </ul>
              <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Tell us your needs—we will build the right solution.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/images/container-purchase-4.jpg" alt="Customization Options Available" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
            </div>
          </div>

          {/* Block 5: Trade-In & Buy-Back Programs */}
          <div className="flex flex-col md:flex-row items-center  rounded-[60px] p-8 md:p-16">
            <div className="flex-1 flex flex-col items-start md:pr-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Trade-In & Buy-Back Programs
              </h2>
              <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                At Moon Navigation and Trading Co., we help customers manage their assets efficiently:
              </p>
              <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>Trade-in options when upgrading containers</li>
                <li>Buy-back plans for returned rental units</li>
                <li>Responsible container recycling and disposal</li>
              </ul>
              <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                We help you reduce long-term costs and maximize asset value.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/images/container-purchase-5.jpg" alt="Trade-In & Buy-Back Programs" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
            </div>
          </div>
        </div>
        <VesselCarousel vessels={containers}/>
        {/* Block 4: Customization Options Available */}
        <div className="flex flex-col md:flex-row-reverse items-center rounded-[60px] p-8 md:p-16">
            <div className="flex-1 flex flex-col items-start md:pl-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Expert Guidance & Customer Support
              </h2>
              <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              With years of hands-on experience, our team offers:
              </p>
              <ul className="list-disc pl-6 mb-4 text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>Expert consultations</li>
                <li>On-demand technical support</li>
                <li>Assistance with container selection and documentation</li>
                <li>Fast response and dedicated account managers</li>
              </ul>
              <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Our goal is to simplify the container process for you—start to finish.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img src="/container-purchases-image.jpg" alt="Customization Options Available" width={600} height={320} className="rounded-[60px] object-cover w-[600px] h-[320px]" />
            </div>
          </div>
          <GetQuoteComponent topic="Container Rentals/Purchases" link="/buy-rent-container-forms"/>
        </div>
    )
}