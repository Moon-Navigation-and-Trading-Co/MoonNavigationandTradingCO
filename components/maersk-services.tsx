import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const servicesData = {
  "Ship Agency and Operational Services": [
    {
      title: "Request for a PDA",
      description: "Set up Proforma Disbursement Accounts",
      image: "/pda-1.jpg",
    },
    {
      title: "Sign On/Off Crew Members",
      description: "Managed crew logistics",
      image: "/crew-1.jpg",
    },
    {
      title: "Transit Spare Parts",
      description: "Port coordination for vessel spares",
      image: "/spare-1.jpg",
    },
    {
      title: "Bunkering | Oil Supply | Ship Chandlery",
      description: "Fuel and supplies delivery",
      image: "/bunkering-1.jpg",
    },
    {
      title: "Special Services by Case",
      description: "Custom operational handling",
      image: "/special-1.jpg",
    },
  ],
  "Transportation Services": [
    {
      title: "Ocean Freight (Ship Chartering)",
      description: "Global chartering for ocean cargo",
      image: "/cargoAir.jpeg",
    },
    {
      title: "Containers Services",
      description: "Full and shared container logistics",
      image: "/container-1.jpg",
    },
    {
      title: "Inland Freight",
      description: "Cross-country ground transport",
      image: "/land-cargo-2.jpeg",
    },
    {
      title: "Air Freight",
      description: "High-speed international cargo service",
      image: "/airCargo.jpg",
    },
  ],
  "Vessel Support and Maintenance": [
    {
      title: "Docking and Maintenance",
      description: "Scheduled and emergency maintenance",
      image: "/docking-1.jpg",
    },
    {
      title: "Ship Management",
      description: "Technical and commercial vessel operations",
      image: "/sm-1.jpg",
    },
  ],
  "Trade Solutions": [
    {
      title: "International Trading",
      description: "Cross-border trade support",
      image: "/international-1.jpg",
    },
    {
      title: "Trade Execution Services",
      description: "Streamlined export/import facilitation",
      image: "/icons/invest/6.png",
    },
  ],
  "Expand Your Fleet and Capacity": [
    {
      title: "Vessel Rentals and Purchases",
      description: "Rent or buy vessels to grow operations",
      image: "/vrp-1.jpg",
    },
    {
      title: "Container Rentals and Purchases",
      description: "Flexible options for container acquisition",
      image: "/crp-1.jpg",
    },
  ],
  "Other Logistics Services": [
    {
      title: "Customs Clearance Solutions",
      description: "Fast-track import/export compliance",
      image: "/c-1.jpg",
    },
    {
      title: "Handling, Stevedoring & Storage",
      description: "Port operations and warehousing",
      image: "/hss-1.jpg",
    },
    {
      title: "Investment",
      description: "Opportunities to partner and grow",
      image: "/invest/invest-hero.jpeg",
    },
  ],
};

const MaerskServices = () => {
  const tabs = Object.keys(servicesData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full font-raleway">
      {/* Container matches hero section's width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-raleway font-regular text-center pt-2 pb-4">
            Logistics services and solutions
          </h2>
          <p className="text-lg text-muted-foreground text-center font-light mb-12 max-w-3xl">
            Regardless of your industry, your commodity, or your key markets, Moon
            Navigation offers global and local logistics solutions that enable
            small and large businesses to grow.
          </p>
        </div>
        <div className="relative mb-8">
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
        <div className="relative">
          <div className="overflow-x-auto pb-8 -mb-4 no-scrollbar">
            <div className="flex gap-6">
              {servicesData[activeTab as keyof typeof servicesData].map(
                (service) => (
                  <div
                    key={service.title}
                    className="flex-shrink-0 w-[360px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col"
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
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
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

export default MaerskServices;

// Helper styles for hiding scrollbar
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
if (typeof window !== "undefined") {
  document.head.appendChild(style);
} 