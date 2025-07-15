'use client';

import Image from 'next/image';

import PartnerLogoCarousel from "@/components/partners-carousel";
import GetQuoteComponent from '@/components/getQuoteComponent';
import FAQSearch from '@/components/faq';
import ReasonsGrid from "@/components/ReasonsGrid";

export default function AboutUs() {
  return (
    <main className='w-full max-w-7xl place-self-center' style={{ fontFamily: 'Raleway, sans-serif' }}>
      <div
        className="flex flex-col items-center w-full"
        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}
      >
        {/* Top banner image */}
        <div className="w-full max-w-7xl mt-6 rounded-[32px] overflow-hidden">
          <Image
            src="/a-1.jpg"
            alt="Global logistics and shipping"
            width={1200}
            height={340}
            className="w-full h-[220px] md:h-[340px] object-cover"
            priority
          />
        </div>

        {/* Main content section: Who are we? */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 mt-12 px-4 md:px-0 items-center">
          {/* Left: Image of workers */}
          <div className="w-full md:w-[600px] flex-shrink-0 mb-0 md:mb-0">
            <Image
              src="/a-2.jpg"
              alt="Moon Navigation and Trading Co. team"
              width={600}
              height={320}
              className="w-full h-[220px] md:h-[320px] object-cover rounded-2xl"
            />
          </div>
          {/* Right: Who are we? */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <h2 className="text-lg md:text-xl mb-3 text-primary" style={{ fontWeight: 400 }}>
              Who are we?
            </h2>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              We are Moon Navigation and Trading Co., headquartered in Egypt, and we stand as a distinguished leader in maritime services, logistics, and global trade. Backed by extensive industry experience and a network of connections, Moon Navigation and Trading Co. delivers a full spectrum of shipping, logistics, port call, management, maintenance and other supply chain services, with an emphasis on reliability, compliance, and customer-focused solutions.
            </p>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              Our unwavering commitment to quality management, environmental responsibility, and customer satisfaction drives our business at every level. Established to meet the complex demands of today's dynamic trade environment, our solutions are rooted in practical knowledge and a flexible mindset, enabling us to turn transportation and vessel needs into success by delivering innovative, reliable, and efficient solutions.
            </p>
          </div>
        </div>
        {/* Our Foundation – 2010 section, unified layout */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 mt-12 px-4 md:px-0 items-center">
          {/* Left: Foundation text */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <h3 className="text-base md:text-lg text-primary" style={{ fontWeight: 500 }}>
              Our Foundation – 2010
            </h3>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              Moon Navigation and Trading Co. was established in September 2010. Operating from the heart of Egypt, we leverage our nation's strategic position as a crossroads of global trade and a gateway to the Suez Canal, one of the world's most vital maritime routes.
            </p>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              Our prime location grants us unmatched access to the Suez Canal and global seaports, solidifying our role as a pivotal player in international commerce. Partner with us for unparalleled expertise in navigation, logistics, and trade solutions.
            </p>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              We believe that true success stems from creativity and a profound understanding of our clients' needs.
            </p>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              From the very beginning, we have embraced the role of the "unconventional partner," consistently innovating to tackle challenges with expertise. Our commitment to excellence ensures that we provide tailored solutions that go beyond ordinary, setting us apart in the industry. Partner with us and experience the difference that a dedicated and imaginative approach can make for your business.
            </p>
          </div>
          {/* Right: Suez Canal image */}
          <div className="w-full md:w-[600px] flex-shrink-0 mb-0 md:mb-0">
            <Image
              src="/a-3.jpg"
              alt="Suez Canal - Egypt"
              width={600}
              height={320}
              className="w-full h-[220px] md:h-[320px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div> {/* <-- This closes the main flex container after the two main sections */}

      {/* The rest of the page (colored background sections) follows here */}
      <div
        className="w-full flex justify-center items-center my-20"
        style={{
          minHeight: 650,
          background: "linear-gradient(90deg, #1a2a3a 0%, #2d4666 100%)",
          position: "relative",
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
      >
        {/* Background image with overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.85,
            filter: "brightness(0.85)",
          }}
        >

          <img
            src="/a-4.jpg"
            alt="Mission background"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          />
        </div>

        {/* Mission Card */}
        <div
          className="relative z-10 flex flex-col items-center justify-center bg-card"
          style={{
            borderRadius: "1rem",
            boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
            padding: "2.5rem 2.5rem 2.5rem 2.5rem",
            minWidth: 440,
            maxWidth: 520,
            margin: "2rem",
            textAlign: "center",
          }}
        >
          <h2
            className="mb-4 text-primary"
            style={{
              fontSize: "2rem",
              fontWeight: 400,
              fontFamily: "Raleway, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Our Mission
          </h2>
          <p
            className="text-foreground"
            style={{
              fontSize: "0.98rem",
              fontWeight: 400,
              lineHeight: 1.6,
              fontFamily: "Raleway, sans-serif",
              opacity: 0.85,
            }}
          >
            To deliver world-class solutions that connect businesses and markets, enabling seamless trade and transport across the globe while maintaining the highest standards of professionalism, safety, and environmental responsibility.
          </p>
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center my-20"
        style={{
          minHeight: 650,
          background: "linear-gradient(90deg, #1a2a3a 0%, #2d4666 100%)",
          position: "relative",
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
      >
        {/* Background image with overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.85,
            filter: "brightness(0.85)",
          }}
        >

          <img
            src="/a-5.jpg"
            alt="Mission background"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          />
        </div>

        {/* Mission Card */}
        <div
          className="relative z-10 flex flex-col items-center justify-center bg-card"
          style={{
            borderRadius: "1rem",
            boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
            padding: "2.5rem 2.5rem 2.5rem 2.5rem",
            minWidth: 440,
            maxWidth: 520,
            margin: "2rem",
            textAlign: "center",
          }}
        >
          <h2
            className="mb-4 text-primary"
            style={{
              fontSize: "2rem",
              fontWeight: 400,
              fontFamily: "Raleway, sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            Our Vision
          </h2>
          <p
            className="text-foreground"
            style={{
              fontSize: "0.98rem",
              fontWeight: 400,
              lineHeight: 1.6,
              fontFamily: "Raleway, sans-serif",
              opacity: 0.85,
            }}
          >
            To be the premiere global partner in maritime logistics and global trade, known for our unwavering commitment to excellence, innovation, and customer satisfaction.
          </p>
        </div>
      </div>
      {/* Our Services Section */}
      <section className="w-full max-w-7xl mx-auto mt-20 px-4">
        <div className="border-b border-border pb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Our Services
          </h2>
          <p className="text-foreground text-base md:text-lg mb-8" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
            Moon Navigation and Trading Co. provides integrated solutions across transportation, vessel operations, logistics, and trade—supporting efficient and compliant performance on a global scale.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
              Transportation & Freight Solutions
            </button>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
              Ship Agency & Marine Services
            </button>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
              Global Trade Solutions
            </button>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
              Vessel Support & Maintenance
            </button>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
              Other Logistic Services
            </button>
          </div>
        </div>

        {/* Efficient Transportation & Freight Solutions Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mt-16 border-b border-border pb-12">
          {/* Left: Text */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Efficient Transportation & Freight Solutions
            </h3>
            <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
              We pride ourselves on providing comprehensive transportation and freight solutions designed to meet diverse logistical needs.
            </p>
            <p className="text-foreground text-base md:text-lg mb-8" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
              From local transport to freight services, we ensure that your goods arrive safely and punctually. Our ocean freight capabilities accommodate a wide range of cargo types, including project cargo, dangerous goods, heavy lift, break bulk, and containers in both standard and nonstandard sizes, along with inland container transport and storage solutions, establishing ourselves as a versatile choice for effectively transporting any shipment without compromising quality or timeliness, whether across borders or overseas. Our integrated sea-air solutions further enhance our logistics offerings, allowing for efficient and timely delivery of your shipments in today's dynamic market.
            </p>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
              Explore Freight & Cargo Solutions
            </button>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[480px] rounded-2xl overflow-hidden">
            <img
              src="/a-6.jpg"
              alt="Freight and Cargo"
              className="w-full h-[260px] md:h-[320px] object-cover"
              style={{ borderRadius: '1.5rem' }}
            />
          </div>
        </div>
      </section>
   <div className="flex flex-col md:flex-row items-center gap-10 mt-16 border-b border-border pb-12">
     {/* Left: Image */}
     <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden mb-6 md:mb-0">
       <img
         src="/a-7.jpg"
         alt="Ship agency workers at port"
         className="w-full h-[240px] md:h-[260px] object-cover"
         style={{ borderRadius: '1.5rem' }}
       />
     </div>
     {/* Right: Text */}
     <div className="flex-1">
       <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
         Ship Agency and Marine Services
       </h3>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         At Moon Navigation and Trading Co., we take pride in being a foremost ship agent dedicated to ensuring seamless vessel operations across all Egyptian sea ports and the Suez Canal Transit. We deliver top-tier efficiency, compliance, and reliability, with minimized delays and optimized port turnaround times, providing essential support to shipowners, operators, and charterers.
       </p>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         Our port call management services cover piloting, berthing, bunkage, and disbursement accounting, ensuring smooth short and long port calls with highly synchronized coordination across cargo cargo discharging, crew handling, husbandry, and shipyard services. As a full-service ship agency, we handle vessel clearances, documentation, and port authority requirements, while our 24/7 operations desk ensures we are fully involved with every vessel's requirements before, during, and after port calls. We proactively manage schedules, resolve any issues, and keep all stakeholders well informed, ensuring that vessel owners and operators experience a seamless and transparent voyage at any time, including out-of-hours and weekend or in-distress transits or situations.
       </p>
       <p className="text-foreground text-base md:text-lg mb-8" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         Additionally, our experienced team ensures smooth and efficient Suez Canal passage, handling all aspects from documentation to coordination with authorities, minimizing delays and ensuring regulatory compliance.
       </p>
       <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
         Explore Ship Agency and Marine Services
       </button>
     </div>
   </div>
   <div className="flex flex-col md:flex-row items-center gap-10 mt-16 border-b border-border pb-12">
     {/* Left: Text */}
     <div className="flex-1 mb-6 md:mb-0">
       <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
         Steamlined Global Trade Solutions
       </h3>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         Moon Navigation and Trading Co. enhances global trade by streamlining import and export processes, efficiently connecting markets across different continents seamlessly. Our expertise in customs clearance facilitates the challenges posed by complex regulations, ensuring that shipments progress swiftly while remaining compliant with legal requirements.
       </p>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         We foster an efficient trading environment for businesses to expand their global reach, offering a knowledgeable service from routine accuracy or compliance matters to full-service handling that includes meticulous documentation, thorough inspections, and timely deliveries.
       </p>
       <p className="text-foreground text-base md:text-lg mb-8" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         You can rely on our commitment to excellence as we support and guide you toward success at every stage of the process.
       </p>
       <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
         Explore Trade Services
       </button>
     </div>
     {/* Right: Image */}
     <div className="flex-shrink-0 w-full md:w-[340px] rounded-2xl overflow-hidden">
       <img
         src="/a-8.jpg"
         alt="Global trade connections"
         className="w-full h-[220px] md:h-[240px] object-cover"
         style={{ borderRadius: '1.5rem' }}
       />
     </div>
   </div>
   <div className="flex flex-col md:flex-row items-center gap-10 mt-16 border-b border-border pb-12">
     {/* Left: Image */}
     <div className="flex-shrink-0 w-full md:w-[440px] rounded-2xl overflow-hidden mb-6 md:mb-0">
       <img
         src="/a-9.jpg"
         alt="Vessel in dry dock for maintenance"
         className="w-full h-[240px] md:h-[260px] object-cover"
         style={{ borderRadius: '1.5rem' }}
       />
     </div>
     {/* Right: Text */}
     <div className="flex-1">
       <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
         Integrated Vessel Support and Maintenance
       </h3>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         At Moon Navigation and Trading Co., our vessel support and maintenance services provide shipowners and operators with complete peace of mind.
       </p>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         We offer comprehensive ship management solutions, including technical oversight, crew management, budget control, regulatory compliance, and performance monitoring—all tailored to ensure your fleet operates safely, efficiently, and cost effectively.
       </p>
       <p className="text-foreground text-base md:text-lg mb-8" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         In parallel, our docking and maintenance services cover every aspect of vessel upkeep, from dry docking and afloat repairs to hull cleaning, mechanical, coating, electrical systems maintenance and safety equipment checks. Whether your vessel requires scheduled maintenance or urgent repairs, our experienced teams work around the clock to keep your operations uninterrupted and your ships in top seaworthy condition.
       </p>
       <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
         Explore Integrated Vessel Support and Maintenance
       </button>
     </div>
   </div>
   <div className="flex flex-col md:flex-row items-center gap-10 mt-16">
     {/* Left: Text */}
     <div className="flex-1 mb-6 md:mb-0">
       <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
         Other Logistic Services
       </h3>
       <p className="text-foreground text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         At Moon Navigation and Trading Co., we ensure complete operational harmony across all logistics and cargo services. From port arrival to final delivery, our team synchronizes every step of the process, assisting you in risk and inventory optimization.
       </p>
       <p className="text-foreground text-base md:text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         <span className="font-semibold">Customs Clearance Solutions:</span> Our in-house experts swiftly and accurately manage all customs formalities. We handle import/export documentation, tariff classifications, duty calculations, and time clearance to keep your cargo moving without delays, all while ensuring full compliance with national and international regulations.
       </p>
       <p className="text-foreground text-base md:text-lg mb-6" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
         <span className="font-semibold">Handling, Warehousing, and Storage Services:</span> Whether you are dealing with bulk, breakbulk, containerized, or project cargo, we provide professional warehousing, efficient cargo handling, and access to short- or long-term storage solutions. Our skilled ground teams and modern equipment ensure safety, speed, and accuracy at every point of cargo movement.
       </p>
       <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium shadow-md hover:bg-primary/90 transition">
         Explore Other Logistic Services
       </button>
     </div>
     {/* Right: Image */}
     <div className="flex-shrink-0 w-full md:w-[340px] rounded-2xl overflow-hidden">
       <img
         src="/a-10.jpg"
         alt="Logistics worker inspecting containers at port"
         className="w-full h-[220px] md:h-[240px] object-cover"
         style={{ borderRadius: '1.5rem' }}
       />
     </div>
   </div>
   <div className="w-full max-w-7xl mx-auto mt-24 mb-20">
     <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
       Our Core Values: The Foundation of Excellence
     </h2>
     <p className="text-foreground text-base md:text-lg mb-8 max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif', opacity: 0.85 }}>
       Guided by integrity, innovation, and responsibility, we strive to deliver unmatched service while fostering long-term relationships and a sustainable future.
     </p>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       {/* Integrity & Transparency */}
       <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
         <img
           src="/a-11.jpg"
           alt="Integrity & Transparency handshake"
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           style={{ borderRadius: '1.5rem' }}
         />
         <div className="relative z-10 p-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
           <h3 className="text-xl font-bold mb-2">Integrity and Transparency</h3>
           <p className="text-base opacity-90">
             We build trust through honest, transparent dealings and ethical business practices—always putting our clients' interests first.
           </p>
         </div>
       </div>
       {/* Customer-Centric Excellence */}
       <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
         <img
           src="/a-12.jpg"
           alt="Customer-Centric Excellence"
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           style={{ borderRadius: '1.5rem' }}
         />
         <div className="relative z-10 p-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
           <h3 className="text-xl font-bold mb-2">Customer-Centric Excellence</h3>
           <p className="text-base opacity-90">
             Our clients are at the heart of everything we do. We anticipate needs, deliver tailored solutions, and go the extra mile to exceed expectations.
           </p>
         </div>
       </div>
       {/* Forward-Thinking & Innovation */}
       <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
         <img
           src="/a-13.jpg"
           alt="Forward-Thinking & Innovation"
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           style={{ borderRadius: '1.5rem' }}
         />
         <div className="relative z-10 p-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
           <h3 className="text-xl font-bold mb-2">Forward-Thinking and Innovation</h3>
           <p className="text-base opacity-90">
             We embrace new technologies and creative solutions, driving progress and efficiency for our clients and the industry.
           </p>
         </div>
       </div>
       {/* Safety & Responsibility */}
       <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
         <img
           src="/a-14.jpg"
           alt="Safety and Responsibility"
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           style={{ borderRadius: '1.5rem' }}
         />
         <div className="relative z-10 p-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
           <h3 className="text-xl font-bold mb-2">Safety and Responsibility</h3>
           <p className="text-base opacity-90">
             We prioritize the safety of our people, partners, and cargo, and are committed to sustainable, responsible operations in every aspect of our business.
           </p>
         </div>
       </div>
       {/* Collaboration */}
       <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
         <img
           src="/a-15.jpg"
           alt="Collaboration"
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           style={{ borderRadius: '1.5rem' }}
         />
         <div className="relative z-10 p-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
           <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
             <span className="inline-block">
               <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </span>
             Collaboration
           </h3>
           <p className="text-base opacity-90">
             Our team and all our key partners—whether on the vessel or at company HQ—work in close cooperation with you, from first consultation to after your cargo arrives.
           </p>
         </div>
       </div>
       {/* Sustainability */}
       <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
         <img
           src="/a-16.jpg"
           alt="Sustainability"
           className="absolute inset-0 w-full h-full object-cover opacity-80"
           style={{ borderRadius: '1.5rem' }}
         />
         <div className="relative z-10 p-6 text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
           <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
             <span className="inline-block">
               <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C12 2 7 7 7 12c0 3.866 3.134 7 7 7s7-3.134 7-7c0-5-5-10-5-10z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </span>
             Sustainability
           </h3>
           <p className="text-base opacity-90">
             We practice environmental stewardship and strive to manage our operations responsibly today, for a better tomorrow.
           </p>
         </div>
       </div>
     </div>
   </div>
  <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 mt-24 mb-20 px-4">
    {/* Left: ISO Images */}
    <div className="flex flex-col items-center md:items-start gap-8 min-w-[160px] md:min-w-[200px]">
      <img src="/a-20.jpg" alt="ISO 9001:2008" className="w-32 md:w-40 h-auto" style={{ fontFamily: 'Raleway, sans-serif' }} />
      <img src="/a-21.jpg" alt="ISO 14001" className="w-32 md:w-40 h-auto" style={{ fontFamily: 'Raleway, sans-serif' }} />
    </div>
    {/* Right: Text Content */}
    <div className="flex-1 flex flex-col gap-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-normal text-left mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
          Our Commitment to Excellence
        </h2>
        <p className="text-lg md:text-xl text-left mb-8" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          We are proud to be ISO 9001 and ISO 14001 certified, showcasing our dedication to:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ISO 9001 */}
        <div>
          <h3 className="text-xl md:text-2xl text-primary mb-1" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>ISO 9001</h3>
          <p className="text-base md:text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Quality Management</p>
          <p className="text-base md:text-lg text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            We are committed to Quality Management in accordance with ISO 9001 standards. We strive to consistently deliver operational excellence and services that meet or exceed relevant best benchmarks. Our dedication to quality ensures that we demonstrate strong ethics, transparency, and reliability in every interaction.
          </p>
        </div>
        {/* ISO 14001 */}
        <div>
          <h3 className="text-xl md:text-2xl text-primary mb-1" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>ISO 14001</h3>
          <p className="text-base md:text-lg mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Environmental Responsibility</p>
          <p className="text-base md:text-lg text-muted-foreground" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            We are committed to environmental responsibility through our ISO 14001 certification and sustainable practices. Our team is focused on ensuring waste reduction, pollution prevention, and compliance with global environmental standards. We are proactive in regularly reviewing and improving our processes to minimize our environmental footprint, helping to set a positive example for sustainability practices worldwide in our industry.
          </p>
        </div>
      </div>
    </div>
  </div>
  
   <div className="w-full max-w-7xl mx-auto px-4 my-20 flex flex-col items-start">
     <p className="text-xs text-muted-foreground mb-2">
       Certifications and Memberships
     </p>
     <p className="text-xs text-muted-foreground mb-4">
       BIMCO | ISO 9001:2008 | ISO 14001 | IAF | JAS-ANZ | Vesseltracker | Maritime Transport Sector | AFCS
     </p>
     <div className="flex flex-row flex-wrap items-center gap-6 justify-start">
       <img
         src="/a-19.jpg"
         alt="BIMCO"
         className="h-16 w-auto"
         style={{  }}
       />
       <img
         src="/a-20.jpg"
         alt="ISO 9001:2008"
         className="h-16 w-auto"
         style={{ }}
       />
       <img
         src="/a-21.jpg"
         alt="ISO 14001"
         className="h-16 w-auto"
         style={{  }}
       />
       <img
         src="/a-22.jpg"
         alt="IAF"
         className="h-16 w-auto"
         style={{  }}
       />
       <img
         src="/a-23.jpg"
         alt="JAS-ANZ"
         className="h-16 w-auto"
         style={{  }}
       />
       <img
         src="/a-24.jpg"
         alt="JAS-ANZ G"
         className="h-16 w-auto"
         style={{  }}
       />
       <img
         src="/a-25.jpg"
         alt="Vesseltracker"
         className="h-16 w-auto"
         style={{  }}
       />
       <img
         src="/a-26.jpg"
         alt="Maritime Transport Sector"
         className="h-16 w-auto"
         style={{  }}
       />
     </div>
   </div>
   <div className="relative max-w-7xl mx-auto overflow-hidden min-h-[520px] my-20">
     {/* Background image */}
     <img
       src="/a-28.jpg"
       alt="Two logistics professionals in safety vests and helmets at port"
       className="w-full h-auto object-cover object-center"
       style={{ minHeight: 520, maxHeight: 700 }}
     />
     {/* Overlayed text box - bottom right card */}
     <div className="hidden md:block absolute bottom-8 right-8 w-[480px] max-w-full">
       <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-10 text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
         <h2 className="text-2xl md:text-3xl font-normal text-primary mb-6" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
           The Partner Who Understands and Delivers
         </h2>
         <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           We understand that your needs are unique, and your challenges are complex. That is why we specialize in providing practical, forward-thinking solutions that set us apart from the rest.
         </p>
         <ul className="list-disc pl-6 text-base md:text-lg mb-4 space-y-1" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           <li>We solve problems, not just tick boxes.</li>
           <li>We execute actions where it counts.</li>
           <li>We deliver results with balance and reliability.</li>
         </ul>
         <p className="text-base md:text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           As your steadfast and innovative partner, we are committed to ensuring your business thrives by addressing your priorities and removing obstacles before they arise.
         </p>
         <p className="text-base md:text-lg" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           When you seek real trust, innovation, and excellence, think Moon Navigation and Trading Co. — your partner in success.
         </p>
         <div className="text-xs text-right text-muted-foreground mt-4 italic" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           &mdash; Wherever and whenever you need to trust.
         </div>
       </div>
     </div>
     {/* Mobile: stack overlay below image */}
     <div className="block md:hidden w-full mt-4 px-2">
       <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
         <h2 className="text-xl font-normal text-primary mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
           The Partner Who Understands and Delivers
         </h2>
         <p className="text-base mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           We understand that your needs are unique, and your challenges are complex. That is why we specialize in providing practical, forward-thinking solutions that set us apart from the rest.
         </p>
         <ul className="list-disc pl-6 text-base mb-3 space-y-1" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           <li>We solve problems, not just tick boxes.</li>
           <li>We execute actions where it counts.</li>
           <li>We deliver results with balance and reliability.</li>
         </ul>
         <p className="text-base mb-3" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           As your steadfast and innovative partner, we are committed to ensuring your business thrives by addressing your priorities and removing obstacles before they arise.
         </p>
         <p className="text-base" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           When you seek real trust, innovation, and excellence, think Moon Navigation and Trading Co. — your partner in success.
         </p>
         <div className="text-xs text-right text-muted-foreground mt-4 italic" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
           &mdash; Wherever and whenever you need to trust.
         </div>
       </div>
     </div>
   </div>
   <ReasonsGrid
  title="Industry Expertise | Strategic Location | End-to-End Solutions"
  subheading="We combine our industry expertise with a strategic location to deliver reliable, tailored services. Our commitment to sustainability and end-to-end solutions ensures global reach, operational excellence, and trusted partnerships you can rely on."
  reasons={[
    {
      icon: <img src="/icons/industry-expertise.png" alt="Industry Expertise" className="mb-6 h-16 w-16 object-contain" />, // Replace with your actual icon path
      title: "Industry Expertise",
      description: "Experience in navigating the intricacies of maritime and logistics operations for reliable results.",
    },
    {
      icon: <img src="/icons/strategic-location.png" alt="Strategic Location" className="mb-6 h-16 w-16 object-contain" />, // Replace with your actual icon path
      title: "Strategic Location",
      description: "Based in Egypt, with unparalleled access to the Suez Canal and regional seaports, making us a hub for global trade.",
    },
    {
      icon: <img src="/icons/end-to-end.png" alt="End-to-End Solutions" className="mb-6 h-16 w-16 object-contain" />, // Replace with your actual icon path
      title: "End-to-End Solutions",
      description: "From cargo handling to vessel management, we provide a full spectrum of services under one roof.",
    },
    {
      icon: <img src="/icons/global-reach.png" alt="Global Reach" className="mb-6 h-16 w-16 object-contain" />, // Replace with your actual icon path
      title: "Global Reach",
      description: "Established networks with international partners ensure smooth cross-border operations.",
    },
    {
      icon: <img src="/icons/tailored-services.png" alt="Tailored Services" className="mb-6 h-16 w-16 object-contain" />, // Replace with your actual icon path
      title: "Tailored Services",
      description: "Our solutions are designed around your specific business needs, offering flexibility and efficiency.",
    },
    {
      icon: <img src="/icons/sustainability.png" alt="Sustainability Commitment" className="mb-6 h-16 w-16 object-contain" />, // Replace with your actual icon path
      title: "Sustainability Commitment",
      description: "We prioritize environmentally responsible practices in all operations.",
    },
  ]}
/>
<PartnerLogoCarousel />   
<GetQuoteComponent topic=" " />
<FAQSearch category="about-us" />
   </main>
        );
}