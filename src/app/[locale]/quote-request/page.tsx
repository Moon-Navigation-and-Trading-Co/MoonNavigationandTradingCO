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
import { ArrowRight, FileText, Clock, CheckCircle, Phone, Mail } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>24h Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>100% Customized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex justify-center items-center min-h-[60vh]">
          {/* Form */}
          <div className="w-full max-w-2xl">
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5">
                <Image
                  src="/container-1.jpg"
                  alt="Background pattern"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                  <FileText className="w-4 h-4" />
                  Quick Quote Request
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-raleway font-light text-gray-900 mb-4 leading-tight">
                  Get Your 
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-medium"> Customized Quote</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
                  Select your service below and we will provide you with a detailed, customized quotation within 24 hours.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Service Category
                  </label>
                  <Select
                    onValueChange={setSelectedService}
                    value={selectedService}
                  >
                    <SelectTrigger className="w-full bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-400 focus:border-blue-500 rounded-xl h-14 text-base font-medium shadow-sm hover:shadow-md transition-all duration-200">
                      <SelectValue placeholder="Choose the service you need a quote for" />
                    </SelectTrigger>
                    <SelectContent className="max-h-80 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-2xl">
                      {allServices.map((item, index) => {
                        if ('category' in item) {
                          const isExpanded = expandedCategories.has(item.category);
                          return (
                            <div key={item.category} className="border-b border-gray-100 last:border-b-0">
                              <button
                                type="button"
                                onClick={() => toggleCategory(item.category)}
                                className="w-full px-4 py-3 text-sm font-semibold bg-gray-50 text-gray-900 hover:bg-gray-100 flex items-center justify-between transition-all duration-200"
                              >
                                <span className="text-left flex items-center">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                  {item.category}
                                </span>
                                <svg
                                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              {isExpanded && (
                                <div className="border-l-2 border-blue-200 ml-4 bg-blue-50/50">
                                  {item.services.map((service, serviceIndex) => (
                                    <SelectItem 
                                      key={service.value} 
                                      value={service.value} 
                                      className="ml-4 py-3 hover:bg-blue-100 transition-colors duration-150"
                                    >
                                      <span className="flex items-center">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                                        {service.name}
                                      </span>
                                    </SelectItem>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        } else {
                          return (
                            <SelectItem 
                              key={item.value} 
                              value={item.value} 
                              className="py-3 hover:bg-gray-50 transition-colors duration-150"
                            >
                              <span className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                {item.name}
                              </span>
                            </SelectItem>
                          );
                        }
                      })}
                    </SelectContent>
                  </Select>
                </div>

                {/* Proceed Button */}
                <Button
                  onClick={handleProceed}
                  disabled={!selectedService}
                  className={`w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 ${
                    selectedService
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {selectedService ? (
                      <>
                        Proceed to Quote Form
                        <ArrowRight className="w-5 h-5" />
                      </>
                    ) : (
                      "Select a service to continue"
                    )}
                  </span>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Need immediate assistance?
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Contact Us
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-raleway font-medium text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you get accurate, customized quotes quickly and efficiently
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-raleway font-medium text-gray-900 mb-3">Select Your Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Choose from our comprehensive range of maritime and logistics services
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-raleway font-medium text-gray-900 mb-3">Fill Detailed Form</h3>
            <p className="text-gray-600 leading-relaxed">
              Provide specific requirements and project details for accurate pricing
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-raleway font-medium text-gray-900 mb-3">Receive Custom Quote</h3>
            <p className="text-gray-600 leading-relaxed">
              Get your detailed, customized quotation delivered to your email within 24 hours
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 