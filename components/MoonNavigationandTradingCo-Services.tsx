import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Ship, Anchor, Globe, Wrench, Truck, Plane, Container, DollarSign, Building2, Package, Zap, ChevronRight, ChevronDown, Star, Clock, Shield, Users, CheckCircle, TrendingUp, Award, ChevronLeft } from "lucide-react";

const servicesData = {
  "Ship Agency and Operational Services": [
    {
      title: "Request for a PDA",
      description: "Set up Proforma Disbursement Accounts",
      image: "/pda-1.jpg",
      learnMore: "/learn/pda",
      getQuote: "/ship-agency-forms#pda",
      icon: Anchor,
      category: "Port Operations",
      features: ["24/7 Support", "Expert Guidance"]
    },
    {
      title: "Sign On/Off Crew Members",
      description: "Managed crew logistics",
      image: "/crew-1.jpg",
      learnMore: "/learn/crew",
      getQuote: "/ship-agency-forms#crew",
      icon: Users,
      category: "Crew Management",
      features: ["Compliance Ready", "Fast Processing", "Documentation Support"]
    },
    {
      title: "Suez Canal Transit Passage",
      description: "Transit facilitation through Suez Canal",
      image: "/suez-1.jpg",
      learnMore: "/learn/suez-canal-transit-passage",
      getQuote: "/suez-canal-form",
      icon: Ship,
      category: "Canal Transit",
      features: ["Priority Clearance", "Cost Optimization", "Time Efficiency"]
    },
    {
      title: "Transit Spare Parts",
      description: "Port coordination for vessel spares",
      image: "/spare-1.jpg",
      learnMore: "/learn/spare-parts",
      getQuote: "/ship-agency-forms#spare-parts",
      icon: Wrench,
      category: "Maintenance",
      features: ["Quick Delivery", "Quality Assurance", "Inventory Management"]
    },
    {
      title: "Bunkering | Oil Supply | Ship Chandlery",
      description: "Fuel and supplies delivery",
      image: "/bunkering-1.jpg",
      learnMore: "/learn/bunkering",
      getQuote: "/bunkering-oil-supply-form",
      icon: Wrench,
      category: "Fuel & Supplies",
      features: ["Quality Fuel", "Competitive Pricing", "On-time Delivery"]
    },
    {
      title: "Special Services by Case",
      description: "Custom operational handling",
      image: "/special-1.jpg",
      learnMore: "/learn/special",
      getQuote: "/special-services-forms",
      icon: Zap,
      category: "Special Services",
      features: ["Custom Solutions", "Expert Team", "Flexible Approach"]
    },
  ],
  "Transportation Services": [
    {
      title: "Ocean Freight (Ship Chartering)",
      description: "Global chartering for ocean cargo",
      image: "/cargoAir.jpeg",
      learnMore: "/learn-more/ocean-freight",
      getQuote: "/ocean-freight-forms#chartering",
      icon: Ship,
      category: "Ocean Transport",
      features: ["Global Network", "Cost Effective", "Reliable Service"]
    },
    {
      title: "Containers Services",
      description: "Full and shared container logistics",
      image: "/container-1.jpg",
      learnMore: "/learn-more/container",
      getQuote: "/container-services-forms#containers",
      icon: Container,
      category: "Container Solutions",
      features: ["FCL & LCL", "Door-to-Door"]
    },
    {
      title: "Inland Freight",
      description: "Cross-country ground transport",
      image: "/land-cargo-2.jpeg",
      learnMore: "/learn/inland-freight",
      getQuote: "/inland-services-forms#inland",
      icon: Truck,
      category: "Ground Transport",
      features: ["Nationwide Coverage", "Secure Transport"]
    },
    {
      title: "Air Freight",
      description: "High-speed international cargo service",
      image: "/airCargo.jpg",
      learnMore: "/learn-more/air-freight",
      getQuote: "/air-freight-forms#air-freight",
      icon: Plane,
      category: "Air Transport",
      features: ["Express Delivery", "Global Reach", "Priority Handling"]
    },
  ],
  "Vessel Support and Maintenance": [
    {
      title: "Docking and Maintenance",
      description: "Scheduled and emergency maintenance",
      image: "/docking-1.jpg",
      learnMore: "/learn/docking",
      getQuote: "/ship-maintenance-forms#docking",
      icon: Wrench,
      category: "Vessel Care",
      features: ["Scheduled Maintenance", "Emergency Repairs", "Quality Assurance"]
    },
    {
      title: "Ship Management",
      description: "Technical and commercial vessel operations",
      image: "/sm-1.jpg",
      learnMore: "/learn/ship-management",
      getQuote: "/ship-management-forms#management",
      icon: Building2,
      category: "Operations",
      features: ["Technical Management", "Commercial Operations", "Performance Monitoring"]
    },
  ],
  "Trade Solutions": [
    {
      title: "International Trading",
      description: "Cross-border trade support",
      image: "/international-1.jpg",
      learnMore: "/learn/international-trading",
      getQuote: "/international-trading-forms#trading",
      icon: Globe,
      category: "Global Trade",
      features: ["Market Access", "Compliance Support", "Risk Management"]
    },
  ],
  "Expand Your Fleet and Capacity": [
    {
      title: "Vessel Rentals and Purchases",
      description: "Rent or buy vessels to grow operations",
      image: "/vrp-1.jpg",
      learnMore: "/learn/vessel",
      getQuote: "/buy-rent-vessels-forms#vessels",
      icon: Ship,
      category: "Fleet Expansion",
      features: ["Wide Selection", "Expert Consultation", "Legal Support"]
    },
    {
      title: "Container Rentals and Purchases",
      description: "Flexible options for container acquisition",
      image: "/crp-1.jpg",
      learnMore: "/learn/container-purchases",
      getQuote: "/buy-rent-container-forms#containers",
      icon: Container,
      category: "Equipment",
      features: ["Quality Containers", "Flexible Terms", "Maintenance Support"]
    },
  ],
  "Other Logistics Services": [
    {
      title: "Customs Clearance Solutions",
      description: "Fast-track import/export compliance",
      image: "/c-1.jpg",
      learnMore: "/learn/customs-clearance",
      getQuote: "/customs-clearance-forms#clearance",
      icon: Package,
      category: "Compliance",
      features: ["Fast Clearance", "Documentation", "Regulatory Compliance"]
    },
    {
      title: "Handling, Stevedoring & Storage",
      description: "Port operations and warehousing",
      image: "/hss-1.jpg",
      learnMore: "/learn/stevedoring-container",
      getQuote: "/hss-form#stevedoring",
      icon: Building2,
      category: "Port Operations",
      features: ["Efficient Handling", "Secure Storage", "24/7 Operations"]
    },
  ],
  "Investment": [
    {
      title: "Investment",
      description: "Opportunities to partner and grow",
      image: "/invest/invest-hero.jpeg",
      learnMore: "/invest",
      getQuote: "/investor-form#investment",
      icon: DollarSign,
      category: "Partnership",
      features: ["Expert Guidance", "Market Analysis", "Risk Assessment"]
    },
  ],
};

const tabs = Object.keys(servicesData);

const MoonNavigationandTradingCoServices = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Helper styles for hiding scrollbar
  useEffect(() => {
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
  }, []);

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
    <section className="w-full font-raleway bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-900 py-32 lg:py-40 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-indigo-300 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header Section */}
        <div className="text-center mb-24">
          {/* Modern Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs font-medium mb-8 tracking-wider uppercase">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Premium Solutions</span>
          </div>
          
          {/* Modern Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="text-gray-900 font-light">Maritime Solutions & </span>
            <span className="text-blue-600 font-medium">Logistics Services</span>
            </h2>
          
          {/* Modern Subtitle */}
          <p className="text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our tailored solutions ensure smooth port operations, reliable cargo movement, and seamless connections between markets—locally and globally.
          </p>
        </div>

        {/* Modern Tab Navigation */}
        <div className="relative mb-24">
          {/* Enhanced Mobile Dropdown */}
          <div className="md:hidden">
            <div className="bg-white border border-blue-300 rounded-lg shadow-md overflow-hidden">
              {/* Selected Category Header */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between p-3 bg-white border-b border-gray-100 text-gray-900 transition-all duration-200 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center">
                    {(() => {
                      switch (activeTab) {
                        case "Ship Agency and Operational Services":
                          return <Anchor className="w-3 h-3 text-blue-600" />;
                        case "Transportation Services":
                          return (
                            <div className="relative w-3 h-3 flex items-center justify-center">
                              <div className="relative">
                                <Ship className="w-2.5 h-2.5 text-blue-600" />
                                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Plane className="w-1 h-1 text-blue-600" />
                                </div>
                                <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Truck className="w-1 h-1 text-blue-600" />
                                </div>
                              </div>
                            </div>
                          );
                        case "Vessel Support and Maintenance":
                          return <Wrench className="w-3 h-3 text-blue-600" />;
                        case "Trade Solutions":
                          return <Globe className="w-3 h-3 text-blue-600" />;
                        case "Expand Your Fleet and Capacity":
                          return <Ship className="w-3 h-3 text-blue-600" />;
                        case "Other Logistics Services":
                          return <Package className="w-3 h-3 text-blue-600" />;
                        case "Investment":
                          return <DollarSign className="w-3 h-3 text-blue-600" />;
                        default:
                          return <Ship className="w-3 h-3 text-blue-600" />;
                      }
                    })()}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{activeTab}</span>
                </div>
                <div className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              
              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="bg-white">
                  {tabs.map((tab) => {
                    // Define icons for each category
                    const getIcon = (category: string) => {
                      switch (category) {
                        case "Ship Agency and Operational Services":
                          return <Anchor className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                        case "Transportation Services":
                          return (
                            <div className="relative w-3 h-3 flex items-center justify-center">
                              <div className="relative">
                                <Ship className={`w-2.5 h-2.5 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />
                                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Plane className={`w-1 h-1 ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'}`} />
                                </div>
                                <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-blue-100 rounded-full flex items-center justify-center">
                                  <Truck className={`w-1 h-1 ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'}`} />
                                </div>
                              </div>
                            </div>
                          );
                        case "Vessel Support and Maintenance":
                          return <Wrench className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                        case "Trade Solutions":
                          return <Globe className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                        case "Expand Your Fleet and Capacity":
                          return <Ship className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                        case "Other Logistics Services":
                          return <Package className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                        case "Investment":
                          return <DollarSign className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                        default:
                          return <Ship className={`w-3 h-3 ${activeTab === tab ? 'text-white' : 'text-gray-600'}`} />;
                      }
                    };

                    return (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 p-3 text-left transition-all duration-150 hover:bg-gray-50 ${
                          activeTab === tab ? 'bg-blue-50 border-l-3 border-blue-500' : ''
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                          activeTab === tab 
                            ? 'bg-blue-500' 
                            : 'bg-gray-100'
                        }`}>
                          {getIcon(tab)}
                        </div>
                        <span className={`text-xs font-medium ${
                          activeTab === tab ? 'text-blue-600' : 'text-gray-700'
                        }`}>
                          {tab}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Modern Desktop Tabs */}
          <div className="hidden md:block">
            <div className="flex justify-center">
              <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200/50 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl whitespace-nowrap flex-shrink-0",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                      activeTab === tab
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg transform scale-105"
                        : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scrollable Service Cards */}
        <div className="relative">
          {/* Modern Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-1/2 bottom-4 transform -translate-x-1/2 z-10 w-10 h-10 bg-transparent border border-transparent rounded-full transition-all duration-300 items-center justify-center hover:scale-110 text-gray-400 hover:text-blue-600 group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[-2px]" />
          </button>

          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-1/2 bottom-4 transform translate-x-1/2 z-10 w-10 h-10 bg-transparent border border-transparent rounded-full transition-all duration-300 items-center justify-center hover:scale-110 text-gray-400 hover:text-blue-600 group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-[2px]" />
          </button>

          {/* Modern Mobile Grid */}
          <div className="md:hidden">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-6 w-max">
            {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
              <div
                key={service.title}
                    className="group relative h-96 w-80 flex-shrink-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200/50 bg-white/90 backdrop-blur-sm"
                onClick={() => window.location.href = service.learnMore}
              >
                {/* Background Image */}
                  <Image
                    src={service.image}
                    alt={`${service.title} image`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                  
                {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-raleway font-light text-gray-700 rounded-full shadow-sm">
                      {service.category}
                    </span>
                </div>
                
                {/* Modern Content Section with Glass Box */}
                <div className="absolute top-1/2 left-0 right-0 p-6 transform -translate-y-1/2">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                    <h3 className="text-xl font-raleway font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                    {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 text-sm font-medium border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 py-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = service.learnMore;
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                    <Button 
                        className="flex-1 text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg py-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = service.getQuote;
                      }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Mobile Pagination Dots and Navigation */}
          <div className="md:hidden flex justify-center items-center mt-6 space-x-4">
            {/* Left Arrow */}
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(servicesData[activeTab as keyof typeof servicesData].length / 2) }, (_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={scrollRight}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

          {/* Modern Desktop Layout */}
          <div className="hidden md:block">
            <div className="overflow-x-auto pb-8 -mb-4 no-scrollbar" ref={scrollContainerRef}>
            <div className="flex gap-8">
              {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
                <div
                  key={service.title}
                    className="flex-shrink-0 w-[420px] group cursor-pointer"
                  onClick={() => window.location.href = service.learnMore}
                >
                    <div className="relative h-96 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-200/50 bg-white/90 backdrop-blur-sm">
                      {/* Background Image */}
                      <Image
                        src={service.image}
                        alt={`${service.title} image`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 blur-sm"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-raleway font-light text-gray-700 rounded-full shadow-sm">
                          {service.category}
                        </span>
                      </div>
                      
                      {/* Modern Content Section with Glass Box */}
                      <div className="absolute top-1/2 left-0 right-0 p-6 transform -translate-y-1/2">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                          <h3 className="text-lg font-raleway font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                          {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                            <CheckCircle className="w-3 h-3 text-blue-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                          {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1 text-xs font-medium border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 px-3 py-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = service.learnMore;
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Learn More
                        </Button>
                        <Button 
                              className="flex-1 text-xs font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg px-3 py-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = service.getQuote;
                          }}
                        >
                          <ArrowRight className="w-3 h-3 mr-1" />
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Pagination Dots and Navigation */}
            <div className="hidden md:flex justify-center items-center mt-6 space-x-4">
              {/* Left Arrow */}
              <button 
                onClick={scrollLeft}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[-1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(servicesData[activeTab as keyof typeof servicesData].length / 3) }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTo({ left: index * 1200, behavior: 'smooth' });
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={scrollRight}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Modern CTA Section */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group hover:shadow-2xl">
            <span className="font-raleway font-medium text-lg">Explore All Services</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoonNavigationandTradingCoServices;