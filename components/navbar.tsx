"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import SignOutButton from './sign-out-button';

interface NavbarProps {
    user: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const t = useTranslations('HomePage');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full flex justify-center  h-16 fixed top-0 z-[999] bg-white">
            <div className="w-full max-w-[1400px] flex justify-between items-center py-3 px-4 sm:px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold text-lg">
                    <Link href={"/"}>Logicbase</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-5 font-semibold">
                    <Link href={"#about"}>About</Link>
                    <Link href={"#services"}>Services</Link>
                    <Link href={"#contact"}>Contact</Link>
                </div>

                <div className="hidden sm:flex gap-5 items-center font-semibold">
                    {!user && <Link href={"/sign-in"}>Sign In</Link>}
                    {!user && <Button><Link className="font-semibold" href={"/sign-up"}>Sign Up</Link></Button>}
                    {user && <SignOutButton />}
                </div>

                {/* Hamburger Menu */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed rounded-b-2xl border-b-2  shadow-gray-900 top-16 left-0 w-full bg-white shadow-xl transform transition-[max-height, opacity] duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'
                    } overflow-hidden`}
            >
                <div className="flex flex-col gap-5 p-4 font-semibold">
                    <Link href={"#About"} onClick={toggleMenu}>About</Link>
                    <Link href={"#services"} onClick={toggleMenu}>Services</Link>
                    <Link href={"#Contact"} onClick={toggleMenu}>Contact</Link>
                    {!user && <Link href={"/sign-in"} onClick={toggleMenu}>Sign In</Link>}
                    {!user &&
                        <Button onClick={toggleMenu}>
                            <Link href={"/sign-up"}>Sign Up</Link>
                        </Button>}
                    {user && <Link href={"/"} onClick={toggleMenu}>Profile</Link>}
                    {user && <SignOutButton />}

                </div>
            </div>

        </nav>
    );
};

export default Navbar;
