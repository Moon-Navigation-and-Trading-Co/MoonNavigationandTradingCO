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

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
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
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", () => setOpenDesktopDropdown(null));

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", () => setOpenDesktopDropdown(null));
        };
    }, []);

    // Example services object used in desktop and mobile
    const services = {
        transportation: {
            title: "Transportation Services",
            description: "Comprehensive solutions for moving goods across sea and air",
            items: [
                {
                    name: "Ocean Freight (Ship Chartering)",
                    href: "/learn-more/ocean-freight",
                },
                { name: "Containers Services", href: "/learn-more/container" },
                { name: "Inland Freight", href: "/learn/inland-freight" },
                { name: "Air Freight", href: "/learn/air-freight" },
            ],
        },
        shipAgency: {
            title: "Ship Agency and Operational Services",
            description: "Efficient management and support for vessels at port and at sea ensuring smooth operations at all Egyptian ports",
            items: [
                { name: "Request for a PDA", href: "/learn/pda" },
                { name: "Sign On/Off Crew Members", href: "/learn/crew" },
                { name: "Transit Spare Parts", href: "/services/spare-parts" },
                //
                {
                    name: "Bunkering | Oil Supply | Ship Chandlery",
                    href: "/services/bunkering",
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
                { name: "International Trading", href: "/learn/international-trading" },
                { name: "Ship Management", href: "/learn/ship-management" },
                { name: "Docking and Maintenance", href: "/learn/docking" },
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
                    href: "/buy-rent-vessels-forms",
                },
                //
                {
                    name: "Container Rentals and Purchases",
                    href: "/buy-rent-container-forms",
                },
            ],
        },
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
                { name: "FAQ", href: "#careers" },
                {name: "Forms", href: "/learn/forms"}
            ],
        },
    ];

    // Toggles the overall mobile menu
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Desktop hover
    const handleDesktopHover = (itemName: string) => {
        setOpenDesktopDropdown(itemName);
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
                                                                    <Link key={idx} href={service.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                                        {service.name}
                                                                    </Link>
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
                        <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-2 font-medium text-sm transition-colors">
                            <Link href={"/sign-in"}>SIGN IN</Link>
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
                                                                    <Link key={idx} href={service.href} className="block text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMobileMenu}>
                                                                        {service.name}
                                                                    </Link>
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
