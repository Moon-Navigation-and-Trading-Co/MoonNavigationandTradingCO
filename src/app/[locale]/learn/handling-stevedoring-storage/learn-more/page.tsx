"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";

export default function HandlingStevedoringStorageLearnMore() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex flex-col items-center w-full" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section with Image */}
      <div className="w-full relative">
        {/* Hero Image */}
        <div className="w-full h-[400px] relative rounded-3xl overflow-hidden mb-16">
          <Image 
            src="/images/port-hero.jpg" 
            alt="Busy port scene with cargo ships and cranes" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left: Title and CTA */}
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                Handling, Stevedoring and Storage Services
              </h1>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/handling-stevedoring-storage-forms">
                  Request a Quote
                </Link>
              </Button>
            </div>
            
            {/* Right: Description */}
            <div className="w-full max-w-2xl">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                What is Handling, Stevedoring and Storage Services?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Handling, stevedoring, and storage are critical components in port logistics. Handling involves the movement and coordination of cargo during loading, unloading, and transfers between transport modes. Stevedoring is the specialized service of loading and discharging cargo from ships, requiring skill, precision, and the right equipment. Storage refers to the safe, short- or long-term warehousing of cargo until it&apos;s ready for further transport.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                At Moon Navigation and Trading Co., we combine these essential services into one seamless solution. With expert crews, efficient equipment, and secure storage facilities across key Egyptian ports, we ensure your cargo is moved, managed, and stored with maximum care and efficiency—minimizing downtime and maximizing peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Our Cargo Handling, Stevedoring, and Storage Services
        </h2>
        
        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="default" 
            className="font-raleway font-medium"
            onClick={() => scrollToSection('cargo-handling')}
          >
            Cargo Handling
          </Button>
          <Button 
            variant="default" 
            className="font-raleway font-medium"
            onClick={() => scrollToSection('stevedoring-services')}
          >
            Stevedoring Services
          </Button>
          <Button 
            variant="default" 
            className="font-raleway font-medium"
            onClick={() => scrollToSection('secure-storage')}
          >
            Secure Storage & Warehousing
          </Button>
        </div>

        {/* 1. Cargo Handling Services */}
        <div id="cargo-handling" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/H1.jpeg"
                alt="Cargo Handling Services - Busy port with cargo ships and cranes"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
                priority
              />
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              1. Cargo Handling Services
            </h3>
            <p className="text-lg text-primary font-medium">
              Precision handling for every cargo type.
            </p>
            <p className="text-muted-foreground">
              Our cargo handling division ensures smooth and safe transfer of all types of cargo during loading, unloading, transshipment, and internal port movements. We handle containerized, bulk, breakbulk, or project cargo using mechanized equipment and skilled manpower.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">➤ Core Handling Capabilities:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Vessel loading and discharging (containerized, breakbulk, and heavy cargo)</li>
                <li>• Terminal and yard operations</li>
                <li>• Inland cargo handling via truck and rail</li>
                <li>• Crane and forklift-assisted cargo movement</li>
                <li>• Unitized, palletized, loose, or bundled cargo transfer</li>
                <li>• Direct delivery or ship-to-warehouse coordination</li>
                <li>• Customs support and inspection coordination</li>
              </ul>
            </div>
            
            <p className="text-muted-foreground">
              We maintain continuous coordination with terminal operators, customs officials, and inland transporters to minimize bottlenecks and accelerate cargo throughput.
            </p>
          </div>
        </div>

        {/* 2. Professional Stevedoring Services */}
        <div id="stevedoring-services" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              2. Professional Stevedoring Services
            </h3>
            <p className="text-lg text-primary font-medium">
              Expert manpower. Advanced techniques. Flawless execution.
            </p>
            <p className="text-muted-foreground">
              Our experienced stevedoring teams specialize in safely executing loading and unloading operations for all types of vessels, including general cargo ships, bulk carriers, Ro-Ro vessels, container ships, and project cargo vessels. We ensure optimal vessel turnaround, maximum crane utilization, and cargo safety throughout each operation.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">➤ Scope of Stevedoring Services:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cargo discharge and loading (breakbulk, bulk, heavy lift, OOG cargo)</li>
                <li>• Lashing, securing, and unlashing of cargo</li>
                <li>• Project cargo lifting plans and execution</li>
                <li>• On-board stowage planning & supervision</li>
                <li>• Stevedore labor management and safety compliance</li>
                <li>• Shift-based operations for continuous vessel servicing</li>
                <li>• Documentation support (cargo manifests, stowage plans, tally sheets)</li>
              </ul>
            </div>
            
            <p className="text-muted-foreground">
              We operate in full compliance with IMO, ISPS Code, port authority regulations, and international cargo handling standards.
            </p>
          </div>
          
          {/* Right: Image */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/H2.png"
                alt="Professional Stevedoring Services - Stevedoring operations with cranes and containers"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* 3. Secure Storage and Warehousing */}
        <div id="secure-storage" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/H3.png"
                alt="Secure Storage and Warehousing - Warehouse with stacked shipping containers"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
                priority
              />
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              3. Secure Storage and Warehousing
            </h3>
            <p className="text-lg text-primary font-medium">
              Safe, secure, and efficient storage solutions.
            </p>
            <p className="text-muted-foreground">
              Our storage facilities provide comprehensive warehousing solutions for all types of cargo, ensuring your goods are protected and easily accessible when needed.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">➤ Storage Solutions:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Container yard storage (FCL, LCL, reefer containers)</li>
                <li>• Bonded warehousing with customs-controlled facilities</li>
                <li>• Temperature-controlled storage for perishable goods</li>
                <li>• Heavy equipment and machinery storage</li>
                <li>• Project cargo storage and staging areas</li>
                <li>• Inventory management and real-time tracking</li>
                <li>• 24/7 security monitoring and access control</li>
              </ul>
            </div>
            
            <p className="text-muted-foreground">
              Our facilities are strategically located near major ports and transportation hubs, providing quick access and efficient logistics coordination.
            </p>
          </div>
        </div>
      </div>

      {/* Cargo Sectors */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
          Serving Diverse Cargo Sectors
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Our services are trusted across multiple industries:
        </p>
        
        <div className="relative">
          {/* Left Arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10 transition-all duration-200 hover:scale-110"
            onClick={() => {
              const container = document.getElementById('cargo-sectors-scroll');
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10 transition-all duration-200 hover:scale-110"
            onClick={() => {
              const container = document.getElementById('cargo-sectors-scroll');
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div id="cargo-sectors-scroll" className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-12">
            {/* Maritime & Shipping Lines */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S.jpg"
                  alt="Maritime & Shipping Lines"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Maritime & Shipping Lines</p>
            </div>
            
            {/* Construction & Heavy Machinery */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S (1).jpg"
                  alt="Construction & Heavy Machinery"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Construction & Heavy Machinery</p>
            </div>
            
            {/* Energy, Oil & Gas */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S (2).jpg"
                  alt="Energy, Oil & Gas"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Energy, Oil & Gas</p>
            </div>
            
            {/* Steel & Metal Products */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S (3).jpg"
                  alt="Steel & Metal Products"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Steel & Metal Products</p>
            </div>
            
            {/* Industrial Manufacturing */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S (4).jpg"
                  alt="Industrial Manufacturing"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Industrial Manufacturing</p>
            </div>
            
            {/* Automotive & Ro-Ro */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S (5).jpg"
                  alt="Automotive & Ro-Ro"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Automotive & Ro-Ro</p>
            </div>
            
            {/* Agricultural & Food Commodities */}
            <div className="flex flex-col items-center justify-center flex-shrink-0 w-64">
              <div className="w-40 h-40 mx-auto mb-3">
                <Image
                  src="/H,S (6).jpg"
                  alt="Agricultural & Food Commodities"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-foreground text-center leading-tight">Agricultural & Food Commodities</p>
            </div>
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Reasons to Choose Moon Navigation and Trading Co. */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <h2 className="text-3xl font-bold text-left mb-12 text-foreground">
          Reasons to Choose Moon Navigation and Trading Co. for Your Handling, Stevedoring and Storage Needs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Specialized Expertise */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/icons/other services/61.png"
                alt="Specialized Expertise"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Specialized Expertise
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A highly experienced team delivering efficient, safe, and precise cargo handling and stevedoring operations across all vessel types.
            </p>
          </div>

          {/* Advanced Equipment & Technology */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/icons/other services/62.png"
                alt="Advanced Equipment & Technology"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Advanced Equipment & Technology
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              State-of-the-art cranes, forklifts, and lifting gear ensure smooth operations, reduced turnaround times, and maximum cargo safety.
            </p>
          </div>

          {/* Customized, Scalable Solutions */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/icons/other services/63.png"
                alt="Customized, Scalable Solutions"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Customized, Scalable Solutions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Flexible service packages tailored to cargo type, volume, and operational requirements — from routine shipments to complex project cargo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Secure & Strategic Storage Facilities */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/icons/other services/64.png"
                alt="Secure & Strategic Storage Facilities"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Secure & Strategic Storage Facilities
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Well-equipped warehouses and open storage yards near key ports, offering safe and accessible space for all cargo types.
            </p>
          </div>

          {/* Reliable Coordination & Transparent Service */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/icons/other services/65.png"
                alt="Reliable Coordination & Transparent Service"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Reliable Coordination & Transparent Service
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seamless communication, professional supervision, and proactive support from start to finish — ensuring smooth port operations every time.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Request Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Request a Quote - Simple, Fast, and Tailored to Your Needs
            </h2>
            <p className="text-muted-foreground mb-4">
              Getting a quote for our Handling, Stevedoring, and Storage Services is fast and simple at Moon Navigation and Trading Co.
            </p>
            <p className="text-muted-foreground mb-6">
              Just fill out our short form – our team will review your request and send you a customized quotation straight to your email, ensuring clear pricing and tailored solutions.
            </p>
            
            <div className="space-y-2 mb-6">
              <p className="font-semibold text-foreground">Key Benefits:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Quick Form</li>
                <li>• Fast Response</li>
                <li>• Customized Pricing</li>
              </ul>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Submit your request today and let us handle the rest.
            </p>
            
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/handling-stevedoring-storage-forms">
                Request a Quote
              </Link>
            </Button>
          </div>
          
          {/* Right: Illustration */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <Image
                src="/images/quote-illustration.jpg"
                alt="Person working on laptop and writing"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <p className="text-muted-foreground mb-4 md:mb-0">
            Need reliable cargo solutions? <Link href="/contact" className="font-semibold underline text-primary">Let&apos;s discuss</Link> a handling, stevedoring, and storage plan that fits your needs.
          </p>
          <p className="text-muted-foreground italic">
            -Whenever and wherever you need to trust.
          </p>
        </div>
      </div>

      {/* Components */}
      <GetQuoteComponent topic="Handling, Stevedoring and Storage Services" link="/handling-stevedoring-storage-forms" />
      <FAQSearch category="handling-stevedoring-storage" />
    </main>
  );
} 