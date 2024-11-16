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
        { name: "Air Freight", href: "/air-freight-forms" },
        {
            name: "Ocean Freight", subCategory: [
                { name: "Project Cargo", link: "/learn-more/ocean-freight" },
                { name: "Roll On/Off (RoRo)", link: "/learn-more/ocean-freight" },
                { name: "Heavy Lift", link: "/learn-more/ocean-freight" },
                { name: "Dangerous Cargo", link: "/learn-more/ocean-freight" },
            ], href: "/services/service1"
        },
        {
            name: "Inland Freight", subCategory: [
                { name: "International Inland", link: "/learn-more/inland-freight" },
                { name: "Local Inland", link: "/learn-more/inland-freight" },
                { name: "Inland Container", link: "/learn-more/inland-freight" },
            ], href: "/services/service1"
        },
        {
            name: "Ship Agency", subCategory: [
                { name: "Request for PDA", link: "/learn-more/ship-agency" },
                { name: "Sign On/Off Crew", link: "/learn-more/ship-agency" },
                { name: "Transit Spare Parts", link: "/learn-more/ship-agency" },
                { name: "Special Services", link: "/learn-more/ship-agency" },
            ], href: "/services/service1"
        },
        {
            name: "Container", subCategory: [
                { name: "Less than Container Load", link: "/learn-more/container" },
                { name: "Standard Container", link: "/learn-more/container" },
                { name: "Oversized Container", link: "/learn-more/container" },
                { name: "Inland Transportation", link: "/learn-more/container" },
                { name: "Stevedoring and Storage", link: "/learn-more/container" },
            ], href: "/services/service1"
        },
        { name: "International Trading", href: "/learn-more/other" },
        { name: "Ship Management", href: "/learn-more/other" },
        { name: "Docking And Maintenance ", href: "/learn-more/other" },
        { name: "Container Handling, Stevedoring and Storage", href: "/learn-more/other" },
        { name: "Handling, Stevedoring and Storage", href: "/learn-more/other" },
        { name: "Customs Clearance Services", href: "/learn-more/other" },
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
                                                                {service.subCategory ?
                                                                    <>
                                                                        {service.name}
                                                                        <ChevronRight width={15} />
                                                                    </>
                                                                    :
                                                                    <Link href={service.href} onClick={toggleServicesMenu} className="w-full h-full">
                                                                        {service.name}
                                                                    </Link>}

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

                                                                            <button onClick={
                                                                                () => { toggleServicesMenu() }
                                                                            }>
                                                                                <Link
                                                                                    key={subIndex}
                                                                                    href={subItem.link}
                                                                                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                                                                                >
                                                                                    {subItem.name}
                                                                                </Link>
                                                                            </button>
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
                        <Button className="text-white p-0 ml-2 h-[32px]  bg-clip-text bg-gradient-to-r text-transparent from-violet-600 to-indigo-600 hover:text-black dark:hover:text-purple-200">
                            <Link className="font-semibold flex items-center w-full h-full" href={"/investor-form"}>
                                Invest
                            </Link>

                        </Button>
                    </div>
                    {!user && (
                        <Button className="text-foreground  bg-transparent p-0 h-auto hover:underline hover:bg-transparent">
                            <Link className="font-semibold" href={"/sign-up"}>
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
                                                                {service.subCategory ?
                                                                    <>
                                                                        {service.name}
                                                                        <ChevronRight width={15} />
                                                                    </>
                                                                    :
                                                                    <Link href={service.href} className="w-full h-full">
                                                                        {service.name}
                                                                    </Link>}
                                                            </button>
                                                            <AnimatePresence>
                                                                {selectedSubCategory === service.name && service.subCategory && (
                                                                    <motion.div className="ml-4 mt-1 flex gap-2 pt-1 pb-1 text-start" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
                                                                        <Separator className="w-[2px] h-[full] rounded-full bg-muted-foreground" />
                                                                        <div className="flex flex-col w-full">
                                                                            {service.subCategory.map((subItem, subIndex) => (
                                                                                <button className="flex items-start" onClick={() => { toggleMenu() }}>
                                                                                    <Link key={subIndex} href={subItem.link} className="hover:text-primary  text-sm w-[full] h-full" onClick={toggleMenu}>
                                                                                        {subItem.name}
                                                                                    </Link>
                                                                                </button>

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
                    <Link href={"/investor-form"} className="font-semibold bg-clip-text bg-gradient-to-r text-transparent from-violet-600 to-indigo-600 hover:text-foreground">
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
