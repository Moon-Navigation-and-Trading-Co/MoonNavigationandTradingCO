"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import SignOutButton from "./sign-out-button";
import { Separator } from "./ui/separator";
import { EllipsisVertical } from "lucide-react";

interface NavbarProps {
    user: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Services dropdown state

    const t = useTranslations("HomePage");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const subServices = [
        { name: "Freight", href: "/services/service1" },
        { name: "Ship Agency", href: "/services/service2" },
        { name: "Container", href: "/services/service3" },
        { name: "Other", href: "/services/service4" },
    ];

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services", hasDropdown: true },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="w-full flex justify-center md:px-2 text-foreground md:top-4 max-w-7xl h-16 fixed border-0 top-0 z-[999]">
            <div className="w-full flex justify-between rounded-b-2xl md:rounded-2xl drop-shadow-xl md:shadow-md shadow-gray-900 items-center py-3 px-4 sm:px-5 text-sm bg-secondary">
                <div className="flex gap-5 items-center font-semibold text-foreground text-lg">
                    <Link href={"/"}>MoonNavigation</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden sm:flex items-center font-normal">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.hasDropdown ? (
                                <div className="relative inline-block text-left mr-5">
                                    <button
                                        onClick={toggleServicesMenu}
                                        className="hover:text-gray-300 focus:outline-none"
                                    >
                                        {item.name}
                                    </button>

                                    {isServicesOpen && (
                                        <div className="absolute left-0 mt-8 border w-48 rounded-md shadow-lg bg-secondary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                                            <div
                                                className="py-1 "
                                                role="menu"
                                                aria-orientation="vertical"
                                            >
                                                {subServices.map((service, index) => (
                                                    <div className="flex flex-col items-center">
                                                        <Link
                                                            key={index}
                                                            href={service.href}
                                                            className="block w-full text-start px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                                                            role="menuitem"
                                                        >
                                                            {service.name}
                                                        </Link>
                                                        {index !== 3 && <Separator className="w-2/3 " />
                                                        }
                                                    </div>


                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link href={item.href} className="mr-5">
                                    {item.name}
                                </Link>
                            )}
                            {/* Add separator if not the last item */}
                            {index < navItems.length - 1 && (
                                <span className="mr-5">|</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <div className="hidden sm:flex gap-5 items-center">
                    {!user && <Link href={"/sign-in"}>Sign In</Link>}
                    {!user && (
                        <Button className="dark:text-foreground">
                            <Link className="font-" href={"/sign-up"}>
                                Sign Up
                            </Link>
                        </Button>
                    )}
                    {user && <SignOutButton />}
                </div>

                {/* Hamburger Menu */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                        <EllipsisVertical strokeWidth="1" className="text-foreground" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed z-[999] px-2 mt-2 flex justify-end top-16 right-0 w-[280px] bg-transparent transform transition-[max-height, opacity] duration-300 ease-in-out ${isOpen
                    ? "max-h-screen opacity-100 translate-y-0"
                    : "max-h-0 pointer-events-none opacity-0 -translate-y-10"
                    } `}
            >
                <div className="flex flex-col w-full gap-2 rounded-3xl bg-secondary px-5 py-4 max-w-[280px]  shadow-xl shadow-[#000000] text-sm font-normal">
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.hasDropdown ? (
                                <div>
                                    <Link href={item.href} onClick={toggleMenu}>
                                        {item.name}
                                    </Link>
                                    {/* Sub-services under Services */}
                                    <div className="ml-4 mt-1 flex gap-2 pt-3 pb-1">
                                        <Separator className="w-[2px] h-[100px] rounded-full bg-primary" />
                                        <div className="flex flex-col gap-2">
                                            {subServices.map((service, index) => (
                                                <Link
                                                    className="hover:text-primary"
                                                    key={index}
                                                    href={service.href}
                                                    onClick={toggleMenu}
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            ) : (
                                <Link className="hover:text-primary" href={item.href} onClick={toggleMenu}>
                                    {item.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                    {!user && (
                        <Link className="text-primary font-semibold hover:text-muted-foreground" href={"/sign-up"}>Sign In/Up</Link>
                    )}
                    {user && (
                        <Link href={"/"} onClick={toggleMenu}>
                            Profile
                        </Link>
                    )}
                    {user && <SignOutButton />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
