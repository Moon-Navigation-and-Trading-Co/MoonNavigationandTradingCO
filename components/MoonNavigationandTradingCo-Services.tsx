import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const servicesData = {
  "Ship Agency and Operational Services": [
    {
      title: "Request for a PDA",
      description: "Set up Proforma Disbursement Accounts",
      image: "/pda-1.jpg",
      learnMore: "/learn/pda",
      getQuote: "/ship-agency-forms#pda",
    },
    {
      title: "Sign On/Off Crew Members",
      description: "Managed crew logistics",
      image: "/crew-1.jpg",
      learnMore: "/learn/crew",
      getQuote: "/ship-agency-forms#crew",
    },
    {
      title: "Suez Canal Transit Passage",
      description: "Transit facilitation through Suez Canal",
      image: "/suez-1.jpg",
      learnMore: "/learn/suez-canal-transit-passage",
      getQuote: "/suez-canal-form",
    },
    {
      title: "Transit Spare Parts",
      description: "Port coordination for vessel spares",
      image: "/spare-1.jpg",
      learnMore: "/learn/spare-parts",
      getQuote: "/ship-agency-forms#spare-parts",
    },
    {
      title: "Bunkering | Oil Supply | Ship Chandlery",
      description: "Fuel and supplies delivery",
      image: "/bunkering-1.jpg",
      learnMore: "/learn/bunkering",
      getQuote: "/bunkering-oil-supply-form",
    },
    {
      title: "Special Services by Case",
      description: "Custom operational handling",
      image: "/special-1.jpg",
      learnMore: "/learn/special",
      getQuote: "/special-services-forms",
    },
  ],
  "Transportation Services": [
    {
      title: "Ocean Freight (Ship Chartering)",
      description: "Global chartering for ocean cargo",
      image: "/cargoAir.jpeg",
      learnMore: "/learn-more/ocean-freight",
      getQuote: "/ocean-freight-forms#chartering",
    },
    {
      title: "Containers Services",
      description: "Full and shared container logistics",
      image: "/container-1.jpg",
      learnMore: "/learn-more/container",
      getQuote: "/container-services-forms#containers",
    },
    {
      title: "Inland Freight",
      description: "Cross-country ground transport",
      image: "/land-cargo-2.jpeg",
      learnMore: "/learn/inland-freight",
      getQuote: "/inland-services-forms#inland",
    },
    {
      title: "Air Freight",
      description: "High-speed international cargo service",
      image: "/airCargo.jpg",
      learnMore: "/learn-more/air-freight",
      getQuote: "/air-freight-forms#air-freight",
    },
  ],
  "Vessel Support and Maintenance": [
    {
      title: "Docking and Maintenance",
      description: "Scheduled and emergency maintenance",
      image: "/docking-1.jpg",
      learnMore: "/learn/docking",
      getQuote: "/ship-maintenance-forms#docking",
    },
    {
      title: "Ship Management",
      description: "Technical and commercial vessel operations",
      image: "/sm-1.jpg",
      learnMore: "/learn/ship-management",
      getQuote: "/ship-management-forms#management",
    },
  ],
  "Trade Solutions": [
    {
      title: "International Trading",
      description: "Cross-border trade support",
      image: "/international-1.jpg",
      learnMore: "/learn/international-trading",
      getQuote: "/international-trading-forms#trading",
    },
  ],
  "Expand Your Fleet and Capacity": [
    {
      title: "Vessel Rentals and Purchases",
      description: "Rent or buy vessels to grow operations",
      image: "/vrp-1.jpg",
      learnMore: "/learn/vessel",
      getQuote: "/buy-rent-vessels-forms#vessels",
    },
    {
      title: "Container Rentals and Purchases",
      description: "Flexible options for container acquisition",
      image: "/crp-1.jpg",
      learnMore: "/learn/container-purchases",
      getQuote: "/buy-rent-container-forms#containers",
    },
  ],
  "Other Logistics Services": [
    {
      title: "Customs Clearance Solutions",
      description: "Fast-track import/export compliance",
      image: "/c-1.jpg",
      learnMore: "/learn/customs-clearance",
      getQuote: "/customs-clearance-forms#clearance",
    },
    {
      title: "Handling, Stevedoring & Storage",
      description: "Port operations and warehousing",
      image: "/hss-1.jpg",
      learnMore: "/learn/stevedoring-container",
      getQuote: "/hss-form#stevedoring",
    },
  ],
  "Investment": [
    {
      title: "Investment",
      description: "Opportunities to partner and grow",
      image: "/invest/invest-hero.jpeg",
      learnMore: "/invest",
      getQuote: "/investor-form#investment",
    },
  ],
};

const MoonNavigationandTradingCoServices = () => {
  const tabs = Object.keys(servicesData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full font-raleway">
      {/* Container matches hero section's width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-raleway font-regular text-center pt-2 pb-4">
            Logistics Services & Maritime Solutions
          </h2>
          <p className="text-sm text-muted-foreground text-center font-light mb-12 max-w-3xl">
            At Moon Navigation and Trading Co., we specialize in ship agency, vessel maintenance, global ocean freight, and international trade support. Our tailored logistics solutions ensure smooth port operations, reliable cargo movement, and seamless connections between markets—locally and globally.
          </p>
        </div>
        <div className="relative mb-8">
          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <span className="text-sm font-medium text-gray-900">{activeTab}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isMobileDropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMobileDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-100 last:border-b-0",
                      "focus:outline-none",
                      activeTab === tab
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Horizontal Tabs */}
          <div className="hidden md:block">
          <div className="overflow-x-auto pb-8 -mb-4 no-scrollbar text-center">
            <div className="inline-flex justify-center border-b border-gray-200 whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors",
                    "focus:outline-none",
                    activeTab === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {tab}
                </button>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-x-auto pb-8 -mb-4 no-scrollbar" ref={scrollContainerRef}>
            <div className="flex gap-6">
              {servicesData[activeTab as keyof typeof servicesData].map(
                (service) => (
                  <div
                    key={service.title}
                    className="flex-shrink-0 w-[360px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col cursor-pointer"
                    onClick={() => window.location.href = service.learnMore}
                  >
                    <div className="w-full h-56 relative rounded-t-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} image`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col items-start text-left flex-grow">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex gap-2 mt-auto">
                        <Button 
                          variant="outline" 
                          className="text-xs px-3 py-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = service.learnMore;
                          }}
                        >
                          Learn More
                        </Button>
                        <Button 
                          className="text-xs px-3 py-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = service.getQuote;
                          }}
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoonNavigationandTradingCoServices;

// Helper styles for hiding scrollbar
if (typeof window !== "undefined" && typeof document !== "undefined") {
const style = document.createElement("style");
style.innerHTML = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
  document.head.appendChild(style);
} 