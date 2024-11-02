"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import SignOutButton from "./sign-out-button";
import SignOutButtonVariant from "./sign-out-button-variant-1";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeSwitcher } from "./theme-switcher";
import { Separator } from "./ui/separator";
import { ChevronDown, Menu, ChevronRight } from "lucide-react";

interface NavbarProps {
    user: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null); // New state for subcategory

    const t = useTranslations("HomePage");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleCategory = (categoryName: string) => {
        setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
        setSelectedSubCategory(null);
    };

    const toggleSubCategory = (subCategoryName: string) => {
        setSelectedSubCategory(selectedSubCategory === subCategoryName ? null : subCategoryName);
    };

    const category = [
        { name: "Air Freight", href: "/services/service4" },
        {
            name: "Ocean Freight", subCategory: [
                { name: "Project Cargo", link: "/ocean-freight" },
                { name: "Roll On/Off (RoRo)", link: "/ocean-freight" },
                { name: "Heavy Lift", link: "/ocean-freight" },
                { name: "Dangerous Cargo", link: "/ocean-freight" },
            ], href: "/services/service1"
        },
        {
            name: "Inland Freight", subCategory: [
                { name: "International Inland", link: "/ocean-freight" },
                { name: "Local Inland", link: "/ocean-freight" },
                { name: "Inland Container", link: "/ocean-freight" },
            ], href: "/services/service1"
        },
        {
            name: "Ship Agency", subCategory: [
                { name: "Request for PDA", link: "/ocean-freight" },
                { name: "Sign On/Off Crew", link: "/ocean-freight" },
                { name: "Transit Spare Parts", link: "/ocean-freight" },
                { name: "Special Services", link: "/ocean-freight" },
            ], href: "/services/service1"
        },
        {
            name: "Container", subCategory: [
                { name: "Less than Container Load", link: "/ocean-freight" },
                { name: "Standard Container", link: "/ocean-freight" },
                { name: "Oversized Container", link: "/ocean-freight" },
                { name: "Inland Transportation", link: "/ocean-freight" },
                { name: "Stevedoring and Storage", link: "/ocean-freight" },
            ], href: "/services/service1"
        },
        { name: "International Trading", href: "/services/service4" },
        { name: "Ship Management", href: "/services/service4" },
        { name: "Docking And Maintenance ", href: "/services/service4" },
        { name: "Container Handling, Stevedoring and Storage", href: "/services/service4" },
        { name: "Handling, Stevedoring and Storage", href: "/services/service4" },
        { name: "Customs Clearance Services", href: "/services/service4" },
    ];

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services", hasDropdown: true },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="w-full flex justify-center md:px-2 text-foreground
         md:top-4 max-w-7xl h-16 fixed border-0 top-0 z-[999]">
            <div className="w-full md:border-t-2 border-b flex justify-between rounded-b-2xl md:rounded-2xl 
             md:shadow-lg shadow-current items-center py-3 px-4 sm:px-5
             text-sm bg-secondary">
                <div className="flex w-[220px] gap-5 items-center font-semibold text-foreground text-lg">
                    <Link href={"/"}>MoonNavigation</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden h-12 md:flex items-center font-[500]">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.hasDropdown ? (
                                <div className="relative text-left">
                                    <button
                                        onClick={toggleServicesMenu}
                                        className="hover:text-gray-400 gap-2 focus:outline-none flex items-center"
                                    >
                                        {item.name}
                                        <ChevronDown width={15} />
                                    </button>
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                className="absolute left-0 mt-8 border w-56 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                                                initial={{ opacity: 0, y: -15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -15 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="py-1" role="menu" aria-orientation="vertical">
                                                    {category.map((service, index) => (
                                                        <div key={index} className="relative">
                                                            <button
                                                                className="w-full text-start px-4 py-2 text-sm text-muted-foreground hover:text-foreground flex justify-between items-center"
                                                                onClick={() => toggleCategory(service.name)}
                                                            >
                                                                {service.name}
                                                                {service.subCategory && <ChevronRight width={15} />}
                                                            </button>
                                                            {index !== category.length - 1 && <Separator className="w-3/4 mx-auto" />}
                                                            {service.subCategory && selectedCategory === service.name && (
                                                                <motion.div
                                                                    className="ml-2 absolute left-full top-0 mt-0 border w-48 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5"
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    exit={{ opacity: 0, x: -10 }}
                                                                    transition={{ duration: 0.2 }}
                                                                >
                                                                    {service.subCategory.map((subItem, subIndex) => (
                                                                        <>
                                                                            <Link
                                                                                key={subIndex}
                                                                                href={subItem.link}
                                                                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                                                                            >
                                                                                {subItem.name}
                                                                            </Link>
                                                                            {subIndex !== service.subCategory.length - 1 && <Separator className="w-3/4 mx-auto" />}
                                                                        </>

                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link href={item.href} className="hover:text-gray-400">
                                    {item.name}
                                </Link>
                            )}
                            {index < navItems.length - 1 && <span className="px-3">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <div className="flex items-center">
                        <ThemeSwitcher />
                        <LocaleSwitcher />
                        <Button className="text-white p-2 ml-2 h-auto bg-clip-text bg-gradient-to-r text-transparent from-violet-600 to-indigo-600 hover:text-black">
                            Invest
                        </Button>
                    </div>
                    {!user && (
                        <Button className="text-white p-2 h-auto hover:text-gray-300">
                            <Link className="font-normal" href={"/sign-up"}>
                                Sign In/Up
                            </Link>
                        </Button>
                    )}
                    {user && <SignOutButton />}
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden flex items-center gap-2">
                    <div className="flex items-center">
                        <ThemeSwitcher />
                        <LocaleSwitcher />
                    </div>
                    <button className="px-2 py-1" onClick={toggleMenu}>
                        <Menu strokeWidth="1" className="text-foreground" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed z-[999] px-2 mt-2 flex justify-end top-16 right-0 w-[280px] bg-transparent transform transition-[max-height, opacity] duration-500 ease-in-out ${isOpen
                    ? "max-h-screen opacity-100 translate-y-0"
                    : "max-h-screen pointer-events-none opacity-0 -translate-y-3"
                    }`}
            >
                <div className="flex flex-col w-full gap-2 rounded-3xl bg-secondary px-5 py-4 max-w-[280px] shadow-xl shadow-[#000000] text-sm font-normal">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.hasDropdown ? (
                                <div>
                                    <button onClick={() => toggleCategory(item.name)} className="flex items-center justify-between w-full">
                                        {item.name}
                                        <ChevronDown width={15} />
                                    </button>
                                    <AnimatePresence>
                                        {selectedCategory === item.name && (
                                            <motion.div className="ml-4 mt-1 flex gap-2 pt-3 pb-1" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                                                <Separator className="w-[2px] h-[full] rounded-full bg-primary" />
                                                <div className="flex flex-col gap-2">
                                                    {category.map((service, serviceIndex) => (
                                                        <div key={serviceIndex}>
                                                            <button className="hover:text-primary flex items-center text-start justify-between w-full" onClick={() => toggleSubCategory(service.name)}>
                                                                {service.name}
                                                                {service.subCategory && <ChevronRight width={15} className="rotate-90" />}
                                                            </button>
                                                            <AnimatePresence>
                                                                {selectedSubCategory === service.name && service.subCategory && (
                                                                    <motion.div className="ml-4 mt-1 flex gap-2 pt-1 pb-1" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                                                                        <Separator className="w-[2px] h-[full] rounded-full bg-muted-foreground" />
                                                                        <div className="flex flex-col gap-1">
                                                                            {service.subCategory.map((subItem, subIndex) => (
                                                                                <Link key={subIndex} href={subItem.link} className="hover:text-primary text-sm" onClick={toggleMenu}>
                                                                                    {subItem.name}
                                                                                </Link>
                                                                            ))}
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link className="hover:text-primary" href={item.href} onClick={toggleMenu}>
                                    {item.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                    <Link href={'/'} className="font-semibold bg-clip-text bg-gradient-to-r text-transparent from-violet-600 to-indigo-600 hover:text-black">
                        Invest
                    </Link>
                    {!user && (
                        <Link className="text-primary font-semibold hover:text-muted-foreground" href={"/sign-up"}>
                            Sign In/Up
                        </Link>
                    )}

                    {user && <SignOutButtonVariant />}
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
