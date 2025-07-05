'use client';

import Image from 'next/image';

import PartnerLogoCarousel from "@/components/partners-carousel";
import GetQuoteComponent from '@/components/getQuoteComponent';
import FAQSearch from '@/components/faq';

export default function AboutUs() {
  return (
    <main className='w-full max-w-7xl place-self-center' style={{ fontFamily: 'Raleway, sans-serif' }}>
      <div
        className="flex flex-col items-center w-full min-h-screen"
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

        {/* Main content section */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-12 px-4 md:px-0">
          {/* Left: Image of workers */}
          <div className=" w-full md:w-[500px] ">
            <Image
              src="/a-2.jpg"
              alt="Moon Navigation and Trading Co. team"
              width={500}
              height={340}
              className="w-full h-[220px] md:h-[240px] object-cover rounded-2xl"
            />
          </div>
          {/* Right: Who are we? */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-lg md:text-xl mb-3 text-primary" style={{ fontWeight: 400 }}>
              Who are we?
            </h2>
            <p className="text-foreground text-sm md:text-base mb-3" style={{ fontWeight: 400 }}>
              We are Moon Navigation and Trading Co., headquartered in Egypt, and we stand as a distinguished leader in maritime services, logistics, and global trade. Backed by extensive industry experience and a network of connections, Moon Navigation and Trading Co. delivers a full spectrum of shipping, logistics, port call, management, maintenance and other supply chain services, with an emphasis on reliability, compliance, and customer-focused solutions.
            </p>
            <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
              Our unwavering commitment to quality management, environmental responsibility, and customer satisfaction drives our business at every level. Established to meet the complex demands of today's dynamic trade environment, our solutions are rooted in practical knowledge and a flexible mindset, enabling us to turn transportation and vessel needs into success by delivering innovative, reliable, and efficient solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-16 px-4 md:px-0 items-center">
        {/* Left: Foundation text */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-base md:text-lg mb-3 text-primary" style={{ fontWeight: 500 }}>
            Our Foundation – 2010
          </h3>
          <p className="text-foreground text-sm md:text-base mb-3" style={{ fontWeight: 400 }}>
            Moon Navigation and Trading Co. was established in September 2010. Operating from the heart of Egypt, we leverage our nation's strategic position as a crossroads of global trade and a gateway to the Suez Canal, one of the world's most vital maritime routes.
          </p>
          <p className="text-foreground text-sm md:text-base mb-3" style={{ fontWeight: 400 }}>
            Our prime location grants us unmatched access to the Suez Canal and global seaports, solidifying our role as a pivotal player in international commerce. Partner with us for unparalleled expertise in navigation, logistics, and trade solutions.
          </p>
          <p className="text-foreground text-sm md:text-base mb-3" style={{ fontWeight: 400 }}>
            We believe that true success stems from creativity and a profound understanding of our clients' needs.
          </p>
          <p className="text-foreground text-sm md:text-base" style={{ fontWeight: 400 }}>
            From the very beginning, we have embraced the role of the "unconventional partner," consistently innovating to tackle challenges with expertise. Our commitment to excellence ensures that we provide tailored solutions that go beyond ordinary, setting us apart in the industry. Partner with us and experience the difference that a dedicated and imaginative approach can make for your business.
          </p>
        </div>
        {/* Right: Suez Canal image */}
        <div className="flex-shrink-0 w-full md:w-[420px] rounded-2xl overflow-hidden mt-8 md:mt-0">
          <Image
            src="/a-3.jpg"
            alt="Suez Canal - Egypt"
            width={600}
            height={340}
            className="w-full h-[200px] md:h-[240px] object-cover"
          />
        </div>
      </div>

      <div
        className="w-full flex justify-center items-center my-20"
        style={{
          minHeight: 500,
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
            minWidth: 340,
            maxWidth: 420,
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
          minHeight: 500,
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
            minWidth: 340,
            maxWidth: 420,
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
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
     </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
     {/* Collaboration */}
     <div className="relative rounded-[2rem] overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
       <img
         src="/a-15.jpg"
         alt="Collaboration"
         className="absolute inset-0 w-full h-full object-cover opacity-80"
         style={{ borderRadius: '2rem' }}
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
     <div className="relative rounded-[2rem] overflow-hidden shadow-md min-h-[200px] flex items-end bg-muted">
       <img
         src="/a-16.jpg"
         alt="Sustainability"
         className="absolute inset-0 w-full h-full object-cover opacity-80"
         style={{ borderRadius: '2rem' }}
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
   <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 mt-20">
     {/* Left: ISO logos stacked vertically */}
     <div className="flex flex-col items-center gap-10 min-w-[120px]">
       <img
         src="/a-17.jpg"
         alt="ISO 9001 Certification"
         className="w-24 h-auto"
         style={{ maxWidth: '100px' }}
       />
       <img
         src="/a-18.jpg"
         alt="ISO 14001 Certification"
         className="w-24 h-auto"
         style={{ maxWidth: '100px' }}
       />
     </div>
     {/* Right: Commitment to Excellence */}
     <div className="flex-1 max-w-3xl">
       <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-primary" style={{ fontFamily: 'Raleway, sans-serif' }}>
         Our Commitment to Excellence
       </h2>
       <p className="text-base text-muted-foreground mb-6">
         We are proud to be ISO 9001 and ISO 14001 certified, showcasing our dedication to:
       </p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* ISO 9001 */}
         <div>
           <h3 className="text-lg font-bold mb-1 text-primary">ISO 9001</h3>
           <p className="text-sm font-medium mb-2 text-foreground">Quality Management</p>
           <p className="text-sm text-muted-foreground">
             We are committed to Quality Management in accordance with ISO 9001 standards. We strive to consistently deliver operational excellence and services that meet or exceed relevant best benchmarks. Our dedication to quality ensures that we demonstrate strong ethics, transparency, and reliability in every interaction.
           </p>
         </div>
         {/* ISO 14001 */}
         <div>
           <h3 className="text-lg font-bold mb-1 text-primary">ISO 14001</h3>
           <p className="text-sm font-medium mb-2 text-foreground">Environmental Responsibility</p>
           <p className="text-sm text-muted-foreground">
             We are committed to environmental responsibility through our ISO 14001 certification and sustainable practices. Our team is focused on ensuring waste reduction, pollution prevention, and compliance with global environmental standards. We are proactive in regularly reviewing and improving our processes to minimize our environmental footprint, helping to set a positive example for sustainability practices worldwide in our industry.
           </p>
         </div>
       </div>
     </div>
   </div>
   <div className="w-full flex flex-col items-center mt-16">
     <div className="w-full max-w-5xl">
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
           className="h-12 w-auto"
           style={{  }}
         />
         <img
           src="/a-20.jpg"
           alt="ISO 9001:2008"
           className="h-12 w-auto"
           style={{ }}
         />
         <img
           src="/a-21.jpg"
           alt="ISO 14001"
           className="h-12 w-auto"
           style={{  }}
         />
         <img
           src="/a-22.jpg"
           alt="IAF"
           className="h-12 w-auto"
           style={{  }}
         />
         <img
           src="/a-23.jpg"
           alt="JAS-ANZ"
           className="h-12 w-auto"
           style={{  }}
         />
         <img
           src="/a-24.jpg"
           alt="JAS-ANZ G"
           className="h-12 w-auto"
           style={{  }}
         />
         <img
           src="/a-25.jpg"
           alt="Vesseltracker"
           className="h-12 w-auto"
           style={{  }}
         />
         <img
           src="/a-26.jpg"
           alt="Maritime Transport Sector"
           className="h-12 w-auto"
           style={{  }}
         />
       </div>
     </div>
   </div>
   <div className="relative w-full min-h-[420px] flex items-center justify-center mb-16 mt-10">
     {/* Background image */}
     <img
       src="/a-27.jpg"
       alt="Businessman walking on road"
       className="absolute inset-0 w-full h-full object-cover object-center z-0"
       style={{ minHeight: 420, maxHeight: 520, opacity: 0.95 }}
     />
     {/* Blue overlay with opacity */}
     <div
       className="absolute inset-0 bg-primary z-10"
       style={{ opacity: 0.68 }}
     />
     {/* Content */}
     <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 py-12">
       <div className="max-w-2xl mx-auto text-center text-white space-y-8">
         <div className="text-xs md:text-sm font-light tracking-wide mb-2" style={{ letterSpacing: '0.04em' }}>
           At Moon Navigation and Trading Co., our journey is built on a sincere intent to cultivate trust that permeates every aspect of our operations.
         </div>
         <div className="bg-white/10 rounded-lg px-6 py-4 shadow-lg backdrop-blur-sm">
           <h1 className="text-lg md:text-2xl font-normal md:font-light tracking-wide">
             Cultivating Excellence through Trust and Innovation.
           </h1>
         </div>
         <div className="text-xs md:text-sm font-light leading-relaxed mt-2">
           Every day, we strive to create an environment where trust flourishes, allowing us to forge strong partnerships that stand the test of time.<br /><br />
           As we navigate the complexities of the industry, our innovative spirit empowers us to embrace fresh strategies and transformative opportunities for growth.
         </div>
         <div className="text-[11px] md:text-xs font-extralight mt-8 opacity-80">
           Together, we are not just achieving success; we are building a legacy of reliability and excellence where the future awaits.
         </div>
       </div>
     </div>
   </div>
   <div className="relative w-full flex flex-col md:flex-row items-center justify-center my-16">
     {/* Left: Image of two workers */}
     <div className="w-full md:w-1/2 flex justify-center items-center">
       <img
         src="/a-28.jpg"
         alt="Two logistics professionals in safety vests and helmets at port"
         className="rounded-2xl shadow-lg w-full max-w-md object-cover object-center"
         style={{ minHeight: 320, maxHeight: 400 }}
         loading="lazy"
       />
     </div>
     {/* Right: Text content */}
     <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-10 mt-8 md:mt-0">
       <div className=" rounded-xl shadow-md p-6 md:p-10 max-w-lg">
         <h2 className="text-lg md:text-2xl font-semibold text-primary mb-3">
           The Partner Who<br className="hidden md:block" /> Understands and Delivers
         </h2>
         <p className="text-sm md:text-base text-foreground mb-4">
           We understand that your needs are unique, and your challenges are complex. That is why we specialize in providing practical, forward-thinking solutions that set us apart from the rest.
         </p>
         <ul className="list-disc pl-5 text-sm md:text-base text-foreground space-y-1 mb-4">
           <li>We solve problems, not just tick boxes.</li>
           <li>We execute actions where it counts.</li>
           <li>We deliver results with balance and reliability.</li>
         </ul>
         <p className="text-sm md:text-base text-foreground mb-4">
           As your steadfast and innovative partner, we are committed to ensuring your business thrives by addressing your priorities and removing obstacles before they arise.
         </p>
         <p className="text-sm md:text-base text-foreground">
           When you seek real trust, innovation, and excellence, think Moon Navigation and Trading Co. — your partner in success.
         </p>
         <div className="text-xs text-right text-muted-foreground mt-4 italic">
           &mdash; Wherever and whenever you need to trust.
         </div>
       </div>
     </div>
   </div>
   <div className="w-full max-w-6xl mx-auto my-20 px-4">
     <h2 className="text-center text-base md:text-lg font-semibold text-primary mb-2">
       Industry Expertise | Strategic Location | End-to-End Solutions
     </h2>
     <p className="text-center text-xs md:text-sm text-foreground mb-10 max-w-3xl mx-auto">
       We combine our industry expertise with a strategic location to deliver reliable, tailored services. Our commitment to sustainability and end-to-end solutions ensures global reach, operational excellence, and trusted partnerships you can rely on.
     </p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
       <div>
         <h3 className="font-semibold text-sm md:text-base text-primary mb-2">Industry Expertise</h3>
         <p className="text-xs md:text-sm text-muted-foreground">
           Experience in navigating the intricacies of maritime and logistics operations for reliable results.
         </p>
       </div>
       <div>
         <h3 className="font-semibold text-sm md:text-base text-primary mb-2">Strategic Location</h3>
         <p className="text-xs md:text-sm text-muted-foreground">
           Based in Egypt, with unparalleled access to the Suez Canal and regional seaports, making us a high-impact choice.
         </p>
       </div>
       <div>
         <h3 className="font-semibold text-sm md:text-base text-primary mb-2">End-to-End Solutions</h3>
         <p className="text-xs md:text-sm text-muted-foreground">
           From cargo handling to vessel management, we provide a full spectrum of services across the supply chain.
         </p>
       </div>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-10">
       <div>
         <h3 className="font-semibold text-sm md:text-base text-primary mb-2">Global Reach</h3>
         <p className="text-xs md:text-sm text-muted-foreground">
           Established networks with international partners ensure smooth cross-border operations.
         </p>
       </div>
       <div>
         <h3 className="font-semibold text-sm md:text-base text-primary mb-2">Tailored Services</h3>
         <p className="text-xs md:text-sm text-muted-foreground">
           Our solutions are designed across your most important business needs, offering flexibility and efficiency.
         </p>
       </div>
       <div>
         <h3 className="font-semibold text-sm md:text-base text-primary mb-2">Sustainability Commitment</h3>
         <p className="text-xs md:text-sm text-muted-foreground">
           We prioritize environmentally responsible practices in all we execute.
         </p>
       </div>
     </div>
   </div>
<PartnerLogoCarousel />   
<GetQuoteComponent topic=" " />
<FAQSearch category="about-us" />
   </main>
        );
}