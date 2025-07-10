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

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
    const [openServiceDropdown, setOpenServiceDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dropdownMobileRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        // Close dropdown if clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDesktopDropdown(null);
            }
            if (dropdownMobileRef.current && !dropdownMobileRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
            // Close service dropdowns when clicking outside
            setOpenServiceDropdown(null);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", () => {
            setOpenDesktopDropdown(null);
            setOpenServiceDropdown(null);
        });

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", () => {
                setOpenDesktopDropdown(null);
                setOpenServiceDropdown(null);
            });
        };
    }, []);

    // Example services object used in desktop and mobile
    const services: Record<string, { title: string; description: string; items: ServiceItem[] }> = {
        transportation: {
            title: "Transportation Services",
            description: "Comprehensive solutions for moving goods across sea and air",
            items: [
                {
                    name: "Ocean Freight (Ship Chartering)",
                    href: "/learn-more/ocean-freight",
                    isDropdown: true,
                    dropdownItems: [
                        { name: "Project Cargo", href: "/learn/project-cargo" },
                        { name: "Roll On Roll Off (RORO)", href: "/learn/roll" },
                        { name: "Breakbulk Cargo", href: "/learn/breakbulk" },
                        { name: "Dangerous Goods", href: "/learn/dangerous" },
                        { name: "Heavy Lift Cargo", href: "/learn/heavy" },
                        { name: "Livestock Transportation", href: "/learn/livestock" },
                        { name: "Tankers", href: "/learn/tankers" },
                    ],
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
                    ],
                },
                { name: "Inland Freight", href: "/learn/inland-freight" },
                { name: "Air Freight", href: "/learn/air-freight" },
            ],
        },
        shipAgency: {
            title: "Ship Agency and Operational Services",
            description: "Efficient management and support for vessels at port and at sea ensuring smooth operations at all Egyptian ports",
            items: [
                { name: "Request for a PDA", href: "/learn/pda" },
                {
                    name: "Suez Canal Transit & Passage Services",
                    href: "/learn/suez"
                },
                { name: "Sign On/Off Crew Members", href: "/learn/crew" },
                { name: "Transit Spare Parts", href: "/learn/spare-parts" },
                //
                {
                    name: "Bunkering | Oil Supply | Ship Chandlery",
                    href: "/learn/bunkering",
                },
                {
                    name: "Special Services by Case",
                    href: "/learn/special",
                },
            ],
        },
        
        logistics: {
            title: "Logistics and Support Services",
            description: "End-to-end services to facilitate smooth operations and cargo handling",
            items: [
                { name: "Ship Management", href: "/learn/ship-management" },
                { name: "Docking and Maintenance", href: "/learn/docking" },

            ],
        },
        OtherServices:{
            title: "Other Logistics Services",
            description: "Seamless coordination for custom clearance and handling",
            items: [
                {
                    name: "Handling, Stevedoring, and Storage Services",
                    href: "/learn/stevedoring-container",
                },
                { name: "Customs Clearance Services", href: "/learn/customs-clearance" },
            ],
        },
        
        fleet: {
            title: "Expand Your Fleet and Capacity",
            description: "Flexible options to support and scale your operations",
            items: [
                //
                {
                    name: "Vessel Rentals and Purchases",
                    href: "/learn/vessel",
                },
                //
                {
                    name: "Container Rentals and Purchases",
                    href: "/learn/container-purchases",
                },
            ],
        },
        TradeSolutions:{
            title: "Trade Solutions",
            description: "Streamlined solutions for efficient international trade execution",
            items: [
                { name: "International Trading", href: "/learn/international-trading" }
            ],
        },

        investment:{
            title: "Investment",
            description:"",
            items:[
                {name:"Invest with us", href:"/invest"},
            ]
        }
    };

    // Example navItems used in desktop and mobile
    const navItems = [
        {
            name: "Contact",
            href: "/#contact",
            dropdownItems: [
                { name: "Contact Us", href: "/#contact" },
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
                { name: "Our Partners", href: "/#partners" },
                { name: "FAQ", href: "/faq" },
                { name: "Forms", href: "/learn/forms" }
            ],
        },
    ];

    // Toggles the overall mobile menu
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Desktop hover
    const handleDesktopHover = (itemName: string) => {
        setOpenDesktopDropdown(itemName);
    };

    // Handle service dropdown toggle
    const handleServiceDropdownToggle = (serviceName: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenServiceDropdown(openServiceDropdown === serviceName ? null : serviceName);
    };

    return (
        <nav className="w-full flex justify-center md:px-2 text-foreground md:top-4 max-w-7xl h-16 fixed border-0 top-0 z-[999]">
            <div className="w-full md:border-t-2 border-b flex justify-between rounded-b-2xl md:rounded-2xl md:shadow-lg shadow-current items-center py-3 px-4 sm:px-5 text-sm bg-secondary">
                {/* Left side logo or brand */}
                <div className="flex w-fit gap-5 items-center leading-5 text-foreground text-base">
                    <Link href={"/"}>Moon Navigation and Trading Co.</Link>
                </div>

                {/* Desktop Links */}
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
                                        <motion.div className={`absolute left-0 mt-6 border rounded-md shadow-lg bg-background border-border ${item.name === "Services" ? "w-[90vw] xl:w-[900px] -left-[calc(45vw-0.9rem)] xl:-left-[450px]" : "w-56"}`} initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} ref={dropdownRef}>
                                            {item.name === "Services" ? (
                                                <div className="grid grid-cols-3 gap-6 p-6">
                                                    {Object.entries(services).map(([key, section]) => (
                                                        <div key={key} className="font-normal">
                                                            <h3 className="font-medium mb-2 text-foreground">{section.title}</h3>
                                                            <p className="text-xs text-muted-foreground mb-4">{section.description}</p>
                                                            <div className="space-y-2">
                                                                {section.items.map((service, idx) => (
                                                                    <div key={idx} className="relative group">
                                                                        {service.isDropdown ? (
                                                                            <React.Fragment>
                                                                                <div className="flex items-center gap-2">
                                                                                    <Link href={service.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                                                        {service.name}
                                                                                    </Link>
                                                                                    <button
                                                                                        onClick={(e) => handleServiceDropdownToggle(service.name, e)}
                                                                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                                                                    >
                                                                                        <ChevronDown width={12} className={`transition-transform duration-200 ${openServiceDropdown === service.name ? 'rotate-180' : ''}`} />
                                                                                    </button>
                                                                                </div>
                                                                                <AnimatePresence>
                                                                                    {openServiceDropdown === service.name && (
                                                                                        <motion.div 
                                                                                            className="absolute left-0 top-full mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-10"
                                                                                            initial={{ opacity: 0, y: -10 }}
                                                                                            animate={{ opacity: 1, y: 0 }}
                                                                                            exit={{ opacity: 0, y: -10 }}
                                                                                            transition={{ duration: 0.2 }}
                                                                                        >
                                                                                            <div className="py-2">
                                                                                                {service.dropdownItems?.map((subItem, subIdx) => (
                                                                                                    <Link 
                                                                                                        key={subIdx} 
                                                                                                        href={subItem.href} 
                                                                                                        className="block px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                                                                                    >
                                                                                                        {subItem.name}
                                                                                                    </Link>
                                                                                                ))}
                                                                                            </div>
                                                                                        </motion.div>
                                                                                    )}
                                                                                </AnimatePresence>
                                                                            </React.Fragment>
                                                                        ) : (
                                                                            <Link href={service.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                                                {service.name}
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="py-1">
                                                    {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                        <div key={dropdownIndex} className="relative">
                                                            <Link
                                                                href={dropdownItem.href === "/#contact" ? "/?scroll=contact" : dropdownItem.href}
                                                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                                onClick={(e) => {
                                                                    if (dropdownItem.href === "/#contact") {
                                                                        e.preventDefault();
                                                                        if (window.location.pathname === "/") {
                                                                            const element = document.getElementById("contact");
                                                                            if (element) {
                                                                                element.scrollIntoView({ behavior: "smooth", block: "start" });
                                                                            }
                                                                        } else {
                                                                            router.push("/?scroll=contact");
                                                                        }
                                                                    } else if (dropdownItem.href === "#faq") {
                                                                        e.preventDefault();
                                                                        const element = document.getElementById("faq");
                                                                        if (element) {
                                                                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                                                                        }
                                                                    }
                                                                }}
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

                {/* Desktop buttons (locale switcher, sign in/out, etc.) */}
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
                            <Link
                                href={"/sign-in"}
                                className="w-full h-full flex items-center justify-center"
                                style={{ fontWeight: 700, letterSpacing: 0.5 }}
                            >
                                SIGN IN
                            </Link>
                        </Button>
                    )}
                    {user && <SignOutButton />}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <div className="flex items-center">
                        <LocaleSwitcher />
                    </div>
                    <button className={`px-2 py-1 ${isMobileMenuOpen ? "pointer-events-none" : "pointer-events-auto"}`} onClick={toggleMobileMenu}>
                        <Menu strokeWidth="1" className="text-foreground" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Shadcn UI Accordion */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div ref={dropdownMobileRef} className="fixed z-[999] px-2 mt-2 flex justify-end top-16 right-0 w-[280px] bg-transparent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                        <div className="flex flex-col w-full gap-2 rounded-3xl bg-background border border-border px-5 py-4 max-w-[280px] shadow-xl text-sm font-normal">
                            {/* Accordion for mobile nav items */}
                            <Accordion type="single" collapsible className="w-full">
                                {navItems.map((item, index) => (
                                    <AccordionItem key={index} value={item.name}>
                                        <AccordionTrigger className="flex items-center justify-between w-full text-foreground">{item.name}</AccordionTrigger>

                                        <AccordionContent className="flex">
                                            <Separator orientation="vertical" className="h-auto w-0.5 rounded-full bg-primary mt-2" />

                                            {item.name === "Services" ? (
                                                // Nested Accordion if you want each service group collapsible
                                                <Accordion type="single" collapsible className="ml-2 mt-2">
                                                    {Object.entries(services).map(([key, section]) => (
                                                        <AccordionItem key={key} value={section.title}>
                                                            <AccordionTrigger className="flex pr-2 items-center justify-between text-start text-sm text-foreground">{section.title}</AccordionTrigger>
                                                            <AccordionContent className="ml-3 space-y-2">
                                                                {section.items.map((service, idx) => (
                                                                    <div key={idx}>
                                                                        {service.isDropdown ? (
                                                                            <Accordion type="single" collapsible className="w-full">
                                                                                <AccordionItem value={service.name}>
                                                                                    <AccordionTrigger className="flex pr-2 items-center justify-between text-start text-sm text-foreground">
                                                                                        {service.name}
                                                                                    </AccordionTrigger>
                                                                                    <AccordionContent className="ml-3 space-y-2">
                                                                                        {service.dropdownItems?.map((subItem, subIdx) => (
                                                                                            <Link 
                                                                                                key={subIdx} 
                                                                                                href={subItem.href} 
                                                                                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors" 
                                                                                                onClick={toggleMobileMenu}
                                                                                            >
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
                                                // Render normal dropdown items if they exist
                                                <div className="flex flex-col">
                                                    {item.dropdownItems?.map((dropdownItem, idx) => (
                                                        <Link key={idx} href={dropdownItem.href} className="block ml-2 mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMobileMenu}>
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            {/* Other mobile links/buttons below the Accordion */}
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

export default Navbar;
