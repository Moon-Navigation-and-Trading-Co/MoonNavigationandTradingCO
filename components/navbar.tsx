"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import SignOutButton from "./sign-out-button";
import SignOutButtonVariant from "./sign-out-button-variant-1";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "./LocaleSwitcher";
import { Separator } from "./ui/separator";
import { ChevronDown, Menu, Ship } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsRTL, getRTLTextAlign, getRTLFlexDirection, getRTLJustifyContent } from "@/utils/rtl-utils";

// 1. Import Accordion, AccordionItem, AccordionTrigger, AccordionContent
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

interface NavbarProps {
    user: boolean;
}

interface ServiceItem {
    name: string;
    href: string;
    isDropdown?: boolean;
    dropdownItems?: { name: string; href: string; }[];
}

const serviceColumns = [
  // Column 1
  {
    sections: [
      {
        title: "Transportation Services",
        description: "Comprehensive solutions for moving goods across land, sea, and air.",
        items: [
          { 
            name: "Ocean Freight (Ship Chartering)", 
            href: "/learn-more/ocean-freight", 
            isDropdown: true,
            dropdownItems: [
                { name: "Project Cargo", href: "/learn/project-cargo" },
                { name: "Roll On Roll Off (RORO)", href: "/learn/roll" },
                { name: "Breakbulk Cargo", href: "/learn/breakbulk" },
                { name: "Dangerous Cargo", href: "/learn/dangerous" },
                { name: "Heavy Lift Cargo", href: "/learn/heavy" },
                { name: "Livestock Transportation", href: "/learn/livestock" },
                { name: "Tankers", href: "/learn/tankers" },
            ]
          },
          { 
            name: "Containers Services", 
            href: "/learn-more/container", 
            isDropdown: true,
            dropdownItems: [
                { name: "Less Than Container Load (LCL)", href: "/learn/Less-Than-Container-Load" },
                { name: "Full Container Load (FCL)", href: "/learn/full" },
                { name: "Oversized Containers", href: "/learn/oversized" },
                { name: "Out of Gauge Cargo", href: "/learn/out-gauge" },
                { name: "Inland Container", href: "/learn/inland-container" },
                { name: "Container HSS Services", href: "/learn/stevedoring-container" },
            ]
          },
          { 
            name: "Inland Freight", 
            href: "/learn-more/inland-freight", 
            isDropdown: false
          },
          { name: "Air Freight", href: "/learn/air-freight", isDropdown: false },
        ],
      },
      {
        title: "Expand Your Fleet and Capacity",
        description: "Flexible options to support and scale your operations.",
        items: [
          { name: "Vessel Rentals and Purchases", href: "/learn/vessel" },
          { name: "Container Rentals and Purchases", href: "/learn/container-purchases" },
        ],
      },
    ],
  },
  // Column 2
  {
    sections: [
      {
        title: "Ship Agency and Operational Services",
        description: "Efficient management and support for vessels at port and at sea ensuring smooth operations in all Egyptian ports.",
        items: [
          { name: "Request for a PDA", href: "/learn/pda" },
          { name: "Sign On/Off Crew Members", href: "/learn/crew" },
          { name: "Suez Canal Transit Passage", href: "/learn/suez-canal-transit-passage" },
          { name: "Transit Spare Parts", href: "/learn/spare-parts" },
          { name: "Bunkering | Oil Supply | Ship Chandlery", href: "/learn/bunkering" },
          { name: "Special Services by Case", href: "/learn/special" },
        ],
      },
      {
        title: "Trade Solutions",
        description: "Streamlined solutions for efficient international trade execution.",
        items: [
          { name: "International Trading", href: "/learn/international-trading" },
        ],
      },
    ],
  },
  // Column 3
  {
    sections: [
      {
        title: "Vessel Support and Maintenance",
        description: "Reliable services to optimize vessel performance and technical operations.",
        items: [
          { name: "Ship Management", href: "/learn/ship-management" },
          { name: "Docking and Maintenance", href: "/learn/dockingandmaintenance" },
        ],
      },
      {
        title: "Other Logistics Services",
        description: "Seamless coordination for custom clearance and handling.",
        items: [
          { name: "Customs Clearance Solutions", href: "/learn/customs-clearance" },
          { name: "Handling, Stevedoring & Storage Services", href: "/learn/handling-stevedoring-storage/learn-more" },
        ],
      },
      {
        title: "Investment",
        description: "",
        items: [{ name: "Invest with us", href: "/invest" }],
      },
    ],
  },
];

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
    const [openServiceDropdown, setOpenServiceDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownMobileRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDesktopDropdown(null);
            }
            if (dropdownMobileRef.current && !dropdownMobileRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setOpenDesktopDropdown(null);
            setOpenServiceDropdown(null);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        {
            name: "Contact",
            href: "/contact",
            dropdownItems: [
                { name: "Contact Us", href: "/contact" },
                { name: "Schedule a meeting", href: "/schedule-meeting" },
            ],
        },
        {
            name: "Services",
            href: "#services",
        },
        {
            name: "Company",
            href: "#about",
            dropdownItems: [
                { name: "About Us", href: "/about-us" },
                { name: "Our Partners", href: "/partners" },
                { name: "FAQ", href: "/faq" },
                { name: "Forms", href: "/learn/forms" }
            ],
        },
    ];

    const isRTL = useIsRTL();
    const textAlignClass = getRTLTextAlign('left');
    const flexDirectionClass = getRTLFlexDirection('row');
    const justifyClass = getRTLJustifyContent('between');

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleDesktopHover = (itemName: string) => setOpenDesktopDropdown(itemName);
    const handleServiceDropdownToggle = (serviceName: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenServiceDropdown(openServiceDropdown === serviceName ? null : serviceName);
    };

    return (
        <nav className="w-full flex justify-center px-4 sm:px-6 lg:px-8 text-foreground fixed top-0 z-[999] bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="w-full max-w-7xl h-16 flex items-center justify-between">
                {/* Logo/Brand */}
                <div className="flex items-center">
                    <Link href="/" className="group">
                        <span className="text-lg font-raleway font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            Moon Navigation and Trading Co.
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative" onMouseEnter={() => handleDesktopHover(item.name)} onMouseLeave={() => setOpenDesktopDropdown(null)}>
                            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium group">
                                {item.name}
                                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                            </button>
                            <AnimatePresence>
                                {openDesktopDropdown === item.name && (
                                    <motion.div 
                                        className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 border border-gray-200 rounded-2xl shadow-xl bg-white/95 backdrop-blur-sm ${item.name === "Services" ? "w-[90vw] xl:w-[900px] -left-[calc(45vw-2rem)] xl:-left-[450px]" : "w-64"}`} 
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }} 
                                        animate={{ opacity: 1, y: 0, scale: 1 }} 
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }} 
                                        transition={{ duration: 0.2 }} 
                                        ref={dropdownRef}
                                    >
                                        {item.name === "Services" ? (
                                            <div className="grid grid-cols-3 gap-x-8 p-8">
                                                {serviceColumns.map((column, colIdx) => (
                                                    <div key={colIdx} className="flex flex-col space-y-8">
                                                        {column.sections.map((section) => (
                                                            <div key={section.title}>
                                                                <h3 className="font-raleway font-semibold text-sm text-gray-900 mb-3">{section.title}</h3>
                                                                {section.description && (
                                                                    <p className="font-raleway font-light text-xs leading-relaxed text-gray-600 mb-4">{section.description}</p>
                                                                )}
                                                                <div className="space-y-3">
                                                                    {section.items.map((service, idx) => (
                                                                        <ServiceLink 
                                                                            key={idx} 
                                                                            service={service} 
                                                                            isOpen={openServiceDropdown === service.name}
                                                                            onToggle={(e) => handleServiceDropdownToggle(service.name, e)}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="py-2">
                                                {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                    <div key={dropdownIndex}>
                                                        <Link
                                                            href={dropdownItem.href}
                                                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 font-raleway font-medium"
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                        {dropdownIndex !== item.dropdownItems.length - 1 && <Separator className="mx-4" />}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="hidden md:flex">
                        <LocaleSwitcher />
                    </div>
                    
                    {/* Invest Button */}
                    <Button className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl font-raleway font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <Link href="/investor-form" className="flex items-center gap-2">
                            <span>Invest</span>
                        </Link>
                    </Button>
                    
                    {/* Sign In Button */}
                    {!user && (
                        <Button className="hidden md:flex bg-[#011f4b] text-white border border-[#011f4b] hover:bg-[#022c6a] hover:border-[#022c6a] rounded-xl px-3 py-1.5 font-raleway font-semibold transition-all duration-200 shadow-sm hover:shadow-md text-sm">
                            <Link href="/sign-in" className="flex items-center">
                                SIGN IN
                            </Link>
                        </Button>
                    )}
                    {user && <SignOutButton />}
                    
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200" onClick={toggleMobileMenu}>
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        ref={dropdownMobileRef} 
                        className="fixed z-[999] top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl" 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -20 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <Accordion type="single" collapsible className="w-full">
                                {navItems.map((item, index) => (
                                    <AccordionItem key={index} value={item.name} className="border-b border-gray-100">
                                        <AccordionTrigger className="flex items-center justify-between w-full text-gray-900 font-raleway font-medium py-4 hover:text-blue-600 transition-colors text-sm">
                                            {item.name}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4">
                                            {item.name === "Services" ? (
                                                <Accordion type="single" collapsible className="w-full">
                                                    {serviceColumns.flatMap(c => c.sections).map((section, sectionIdx) => (
                                                        <AccordionItem key={sectionIdx} value={section.title} className="border-none">
                                                            <AccordionTrigger className="text-sm font-raleway font-medium text-gray-700 py-2">
                                                                {section.title}
                                                            </AccordionTrigger>
                                                            <AccordionContent className="ml-4">
                                                                {section.items.map((service, serviceIdx) => (
                                                                    <div key={serviceIdx} className="py-1">
                                                                        {'isDropdown' in service && service.isDropdown && service.dropdownItems ? (
                                                                            <Accordion type="single" collapsible className="w-full">
                                                                                <AccordionItem value={service.name} className="border-none">
                                                                                    <AccordionTrigger className="text-sm font-raleway font-medium text-gray-600 py-1">
                                                                                        {service.name}
                                                                                    </AccordionTrigger>
                                                                                    <AccordionContent className="ml-4 space-y-2 pt-2">
                                                                                        {service.dropdownItems.map((subItem: { name: string; href: string }, subIdx: number) => (
                                                                                            <Link 
                                                                                                key={subIdx} 
                                                                                                href={subItem.href} 
                                                                                                className="block text-sm text-gray-500 hover:text-blue-600 transition-colors py-1" 
                                                                                                onClick={toggleMobileMenu}
                                                                                            >
                                                                                                {subItem.name}
                                                                                            </Link>
                                                                                        ))}
                                                                                    </AccordionContent>
                                                                                </AccordionItem>
                                                                            </Accordion>
                                                                        ) : (
                                                                            <Link 
                                                                                href={service.href} 
                                                                                className="block text-sm text-gray-500 hover:text-blue-600 transition-colors py-1" 
                                                                                onClick={toggleMobileMenu}
                                                                            >
                                                                                {service.name}
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            ) : (
                                                <div className="flex flex-col space-y-2">
                                                    {item.dropdownItems?.map((dropdownItem, idx) => (
                                                        <Link 
                                                            key={idx} 
                                                            href={dropdownItem.href} 
                                                            className="block text-sm text-gray-500 hover:text-blue-600 transition-colors py-2" 
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            
                            {/* Mobile Actions */}
                            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-100">
                                <Link 
                                    href="/investor-form" 
                                    className="font-raleway font-semibold text-blue-600 hover:text-blue-700 transition-colors py-2" 
                                    onClick={toggleMobileMenu}
                                >
                                    Invest
                                </Link>
                                {!user && (
                                    <Link 
                                        className="bg-[#011f4b] text-white hover:bg-[#022c6a] rounded-xl px-3 py-2 font-raleway font-semibold text-center transition-colors text-sm" 
                                        href="/sign-in" 
                                        onClick={toggleMobileMenu}
                                    >
                                        SIGN IN
                                    </Link>
                                )}
                                {user && <SignOutButtonVariant />}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

function ServiceLink({ service, isOpen, onToggle }: { service: ServiceItem; isOpen: boolean; onToggle: (event: React.MouseEvent) => void; }) {
  const linkClasses = "flex items-center text-sm font-raleway font-medium transition-colors hover:text-blue-600";
  
  if (!service.isDropdown) {
    return (
      <Link href={service.href} className={linkClasses}>
        {service.name}
      </Link>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
          <Link href={service.href} className={linkClasses}>
              {service.name}
          </Link>
          <button onClick={onToggle} className="ml-2 text-gray-400 hover:text-blue-600 transition-colors">
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
      </div>
      <AnimatePresence>
        {isOpen && service.dropdownItems && (
          <motion.div 
            className="pl-4 mt-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-2 border-l-2 border-blue-200 pl-4">
              {service.dropdownItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="text-sm font-raleway font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
