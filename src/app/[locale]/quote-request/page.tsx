"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ServiceItem = {
  name: string;
  value: string;
};

type ServiceCategory = {
  category: string;
  services: ServiceItem[];
};

const allServices: (ServiceCategory | ServiceItem)[] = [
  {
    category: "Transportation Services",
    services: [
      { name: "Ocean Freight (Ship Chartering)", value: "ocean-freight" },
      { name: "Container Services", value: "container-services" },
      { name: "Inland Freight", value: "inland-freight" },
      { name: "Air Freight", value: "air-freight" },
    ]
  },
  {
    category: "Ship Agency and Operational Services",
    services: [
      { name: "Request for PDA", value: "pda-request" },
      { name: "Suez Canal Transit", value: "suez-canal" },
      { name: "Crew Management", value: "crew-management" },
      { name: "Transit Spare Parts", value: "spare-parts" },
      { name: "Bunkering Services", value: "bunkering" },
      { name: "Special Services", value: "special-services" },
    ]
  },
  // Individual services
  { name: "International Trading", value: "international-trading" },
  { name: "Ship Management", value: "ship-management" },
  { name: "Docking and Maintenance", value: "docking-maintenance" },
  { name: "Handling, Stevedoring, and Storage Services", value: "handling-stevedoring" },
  { name: "Customs Clearance Services", value: "customs-clearance" },
  { name: "Vessel Rentals and Purchases", value: "vessel-rentals" },
  { name: "Container Rentals and Purchases", value: "container-rentals" },
];

export default function QuoteRequestPage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const router = useRouter();

  const handleProceed = () => {
    if (selectedService) {
      router.push(`/quotation/${selectedService}`);
    }
  };

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/container-1.jpg"
          alt="Shipping port with containers and cranes at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl w-full shadow-2xl border border-white/20">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-raleway font-normal text-black mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Request a Quote
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-raleway font-light leading-relaxed max-w-lg mx-auto">
              Effortlessly select your service to begin your journey with Moon
              Navigation and Trading Co.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="w-full max-w-xs sm:max-w-sm">
              <Select
                onValueChange={setSelectedService}
                value={selectedService}
              >
                <SelectTrigger className="w-full bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400 focus:border-blue-500 rounded-lg flex items-center justify-between h-10 sm:h-12 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 group">
                  <SelectValue placeholder="Select the service for which you need a quotation" className="text-gray-500 whitespace-nowrap truncate" />
                </SelectTrigger>
                <SelectContent className="max-h-48 sm:max-h-64 overflow-y-auto bg-white/95 dark:bg-[#181c20] backdrop-blur-sm border border-gray-200 rounded-lg shadow-2xl" side="bottom" align="center">
                  {allServices.map((item, index) => {
                    if ('category' in item) {
                      // This is a category with services
                      const isExpanded = expandedCategories.has(item.category);
                      return (
                        <div key={item.category} className="border-b border-gray-100 last:border-b-0">
                          <button
                            type="button"
                            onClick={() => toggleCategory(item.category)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold bg-[#23272b] text-white hover:bg-[#181c20] flex items-center justify-between transition-all duration-200 group"
                          >
                            <span className="text-left flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                              {item.category}
                            </span>
                            <svg
                              className="w-4 h-4 text-gray-200 group-hover:text-blue-400 transition-all duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </button>
                          {isExpanded && (
                            <div className="border-l-2 border-blue-200 ml-3 sm:ml-4 bg-blue-50/30">
                              {item.services.map((service, serviceIndex) => (
                                <SelectItem 
                                  key={service.value} 
                                  value={service.value} 
                                  className="ml-3 sm:ml-4 text-xs sm:text-sm py-2 hover:bg-blue-100/50 transition-colors duration-150 relative"
                                >
                                  <span className="flex items-center">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-70"></span>
                                    {service.name}
                                  </span>
                                </SelectItem>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      // This is an individual service
                      return (
                        <SelectItem 
                          key={item.value} 
                          value={item.value} 
                          className="text-xs sm:text-sm py-2 hover:bg-blue-50 transition-colors duration-150 relative"
                        >
                          <span className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 opacity-70"></span>
                            {item.name}
                          </span>
                        </SelectItem>
                      );
                    }
                  })}
                </SelectContent>
              </Select>
            </div>

            <button
              onClick={handleProceed}
              disabled={!selectedService}
              className={`w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium text-xs transition-all duration-200 shadow-md hover:shadow-lg text-center whitespace-nowrap ${
                selectedService
                  ? "bg-[#011f4b] hover:bg-[#022c6a] text-white cursor-pointer transform hover:scale-105 active:scale-95"
                  : "bg-white text-black border-2 border-gray-300 cursor-not-allowed opacity-60"
              }`}
            >
              Proceed to the quotation form
            </button>
          </div>

          <div className="text-center mt-6 sm:mt-8 lg:mt-12 text-xs sm:text-sm">
            <span className="text-black">Need assistance? </span>
            <Link
              href="/contact"
              className="text-[#011f4b] hover:text-[#022c6a] underline transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 