"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import SignOutButton from "./sign-out-button";
import SignOutButtonVariant from "./sign-out-button-variant-1";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "./LocaleSwitcher";
import { Separator } from "./ui/separator";
import { ChevronDown, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

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
                { name: "Less Than Container Load (LCL)", href: "/learn/less" },
                { name: "Full Container Load (FCL)", href: "/learn/full" },
                { name: "Oversized Containers", href: "/learn/oversized" },
                { name: "Out of Gauge Cargo", href: "/learn/out-gauge" },
                { name: "Inland Container", href: "/learn/inland-container" },
                { name: "Container HSS Services", href: "/learn/stevedoring-container" }
            ]
          },
          { 
            name: "Inland Freight", 
            href: "/learn-more/inland-freight", 
            isDropdown: true,
            dropdownItems: [
                { name: "Standard Cargo", href: "/learn/standard" },
                { name: "Special Cargo", href: "/learn/special" },
            ]
          },
          { name: "Air Freight", href: "/learn-more/air-freight", isDropdown: false },
        ],
      },
      {
        title: "Expand Your Fleet and Capacity",
        description: "Flexible options to support and scale your operations.",
        items: [
          { name: "Vessel Rentals and Purchases", href: "/buy-rent-vessels-forms" },
          { name: "Container Rentals and Purchases", href: "/buy-rent-container-forms" },
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
          { name: "Request for a PDA", href: "/ship-agency-forms" },
          { name: "Sign On/Off Crew Members", href: "/learn/crew" },
          { name: "Transit Spare Parts", href: "/learn/spare-parts" },
          { name: "Bunkering | Oil Supply | Ship Chandlery", href: "/learn/bunkering" },
          { name: "Special Services by Case", href: "/special-services-forms" },
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
          { name: "Docking and Maintenance", href: "/learn/docking" },
        ],
      },
      {
        title: "Other Logistics Services",
        description: "Seamless coordination for custom clearance and handling.",
        items: [
          { name: "Customs Clearance Solutions", href: "/learn/customs-clearance" },
          { name: "Handling, Stevedoring & Storage Services", href: "/learn/stevedoring-container" },
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

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const handleDesktopHover = (itemName: string) => setOpenDesktopDropdown(itemName);
    const handleServiceDropdownToggle = (serviceName: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenServiceDropdown(openServiceDropdown === serviceName ? null : serviceName);
    };

    return (
        <nav className="w-full flex justify-center md:px-2 text-foreground md:top-4 max-w-7xl h-16 fixed border-0 top-0 z-[999]">
            <div className="w-full md:border-t-2 border-b flex justify-between rounded-b-2xl md:rounded-2xl md:shadow-lg shadow-current items-center py-3 px-4 sm:px-5 text-sm bg-secondary">
                <div className="flex w-fit gap-5 items-center leading-5 text-foreground text-base">
                    <Link href={"/"}>Moon Navigation and Trading Co.</Link>
                </div>

                <div className="hidden h-12 md:flex items-center font-[500]">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="relative text-left" onMouseEnter={() => handleDesktopHover(item.name)} onMouseLeave={() => setOpenDesktopDropdown(null)}>
                                <button className={`hover:text-muted-foreground gap-2 focus:outline-none flex items-center text-foreground`}>
                                    {item.name}
                                    <ChevronDown width={15} />
                                </button>
                                <AnimatePresence>
                                    {openDesktopDropdown === item.name && (
                                        <motion.div 
                                            className={`absolute left-0 mt-6 border rounded-md shadow-lg bg-background border-border ${item.name === "Services" ? "w-[90vw] xl:w-[900px] -left-[calc(45vw-0.9rem)] xl:-left-[450px]" : "w-56"}`} 
                                            initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} 
                                            ref={dropdownRef}
                                        >
                                            {item.name === "Services" ? (
                                                <div className="grid grid-cols-3 gap-x-10 p-6">
                                                    {serviceColumns.map((column, colIdx) => (
                                                        <div key={colIdx} className="flex flex-col space-y-6">
                                                            {column.sections.map((section) => (
                                                                <div key={section.title}>
                                                                    <h3 className="font-raleway font-medium text-xs text-foreground mb-2">{section.title}</h3>
                                                                    {section.description && (
                                                                        <p className="font-raleway font-light text-[11px] leading-snug text-muted-foreground mb-3">{section.description}</p>
                                                                    )}
                                                                    <div className="space-y-2.5">
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
                                                <div className="py-1">
                                                    {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                        <div key={dropdownIndex} className="relative">
                                                            <Link
                                                                href={dropdownItem.href}
                                                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                            >
                                                                {dropdownItem.name}
                                                            </Link>
                                                            {dropdownIndex !== item.dropdownItems.length - 1 && <Separator className="w-3/4 mx-auto" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {index < navItems.length - 1 && <span className="px-3 text-muted-foreground">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <LocaleSwitcher />
                        <Button className="p-0 ml-2 h-[32px] bg-transparent hover:bg-transparent text-primary hover:text-primary/80 transition-colors">
                            <Link className="font-light flex items-center w-full h-full" href={"/investor-form"}>
                                Invest
                            </Link>
                        </Button>
                    </div>
                    {!user && (
                        <Button
                            className="bg-[#F3F5F9] text-[#23294d] border border-[#E0E3EB] hover:bg-[#e0e3eb] hover:border-[#c5c9d6] rounded-full px-4 py-1.5 font-bold text-sm shadow-none transition-colors"
                            style={{ boxShadow: "none", minWidth: 0, height: "34px" }}
                        >
                            <Link href={"/sign-in"} className="w-full h-full flex items-center justify-center" style={{ fontWeight: 700, letterSpacing: 0.5 }}>
                                SIGN IN
                            </Link>
                        </Button>
                    )}
                    {user && <SignOutButton />}
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <div className="flex items-center">
                        <LocaleSwitcher />
                    </div>
                    <button className={`px-2 py-1 ${isMobileMenuOpen ? "pointer-events-none" : "pointer-events-auto"}`} onClick={toggleMobileMenu}>
                        <Menu strokeWidth="1" className="text-foreground" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div ref={dropdownMobileRef} className="fixed z-[999] px-2 mt-2 flex justify-end top-16 right-0 w-[280px] bg-transparent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <div className="flex flex-col w-full gap-2 rounded-3xl bg-background border border-border px-5 py-4 max-w-[280px] shadow-xl text-sm font-normal">
                            <Accordion type="single" collapsible className="w-full">
                                {navItems.map((item, index) => (
                                    <AccordionItem key={index} value={item.name}>
                                        <AccordionTrigger className="flex items-center justify-between w-full text-foreground">{item.name}</AccordionTrigger>
                                        <AccordionContent className="flex">
                                            <Separator orientation="vertical" className="h-auto w-0.5 rounded-full bg-primary mt-2" />
                                            {item.name === "Services" ? (
                                                <Accordion type="single" collapsible className="w-full pl-2">
                                                    {serviceColumns.flatMap(c => c.sections).map((section, sectionIdx) => (
                                                        <AccordionItem key={sectionIdx} value={section.title}>
                                                            <AccordionTrigger className="text-sm font-raleway font-medium">{section.title}</AccordionTrigger>
                                                            <AccordionContent className="ml-4">
                                                                {section.items.map((service, serviceIdx) => (
                                                                    <div key={serviceIdx} className="py-1">
                                                                        {'isDropdown' in service && service.isDropdown && service.dropdownItems ? (
                                                                            <Accordion type="single" collapsible className="w-full">
                                                                                <AccordionItem value={service.name}>
                                                                                    <AccordionTrigger className="text-sm font-raleway font-medium">{service.name}</AccordionTrigger>
                                                                                    <AccordionContent className="ml-4 space-y-2 pt-2">
                                                                                        {service.dropdownItems.map((subItem: { name: string; href: string }, subIdx: number) => (
                                                                                            <Link key={subIdx} href={subItem.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMobileMenu}>
                                                                                                {subItem.name}
                                                                                            </Link>
                                                                                        ))}
                                                                                    </AccordionContent>
                                                                                </AccordionItem>
                                                                            </Accordion>
                                                                        ) : (
                                                                            <Link href={service.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMobileMenu}>
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
                                                <div className="flex flex-col ml-2 mt-2 space-y-2">
                                                    {item.dropdownItems?.map((dropdownItem, idx) => (
                                                        <Link key={idx} href={dropdownItem.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMobileMenu}>
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            <Link href={"/investor-form"} className="font-semibold text-primary hover:text-primary/80 transition-colors" onClick={toggleMobileMenu}>
                                Invest
                            </Link>
                            {!user && (
                                <Link className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-2 font-medium text-sm text-center transition-colors" href={"/sign-up"} onClick={toggleMobileMenu}>
                                    SIGN IN
                                </Link>
                            )}
                            {user && <SignOutButtonVariant />}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

function ServiceLink({ service, isOpen, onToggle }: { service: ServiceItem; isOpen: boolean; onToggle: (event: React.MouseEvent) => void; }) {
  const linkClasses = "flex items-center text-xs font-raleway font-regular transition-colors hover:text-foreground/80";
  
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
          <button onClick={onToggle} className="ml-1.5 text-muted-foreground hover:text-foreground">
              <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
      </div>
      <AnimatePresence>
        {isOpen && service.dropdownItems && (
          <motion.div 
            className="pl-4 mt-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-2 border-l border-muted-foreground/20 pl-3">
              {service.dropdownItems.map((item, index) => (
                <Link key={index} href={item.href} className="text-xs font-raleway font-light text-muted-foreground hover:text-foreground transition-colors">
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
