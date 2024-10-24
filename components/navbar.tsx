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
        <nav className="w-full flex justify-center md:px-2 text-foreground  md:top-4 max-w-7xl h-16 fixed border-0 top-0 z-[999] ">
            <div className="w-full  flex justify-between rounded-b-2xl md:rounded-2xl drop-shadow-xl md:shadow-md shadow-gray-900 items-center py-3 px-4 sm:px-5 text-sm bg-secondary dark:bg-[#1A1A1A]">
                <div className="flex gap-5 items-center font-semibold text-foreground text-lg">
                    <Link href={"/"}>MoonNavigation</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-5 font-normal ">
                    <Link className='' href={"#about"}>About</Link>
                    <Link className='' href={"#services"}>Services</Link>
                    <Link className='' href={"#contact"}>Contact</Link>
                </div>

                <div className="hidden sm:flex gap-5 items-center">
                    {!user && <Link href={"/sign-in"}>Sign In</Link>}
                    {!user && <Button className='dark:text-foreground'><Link className="font-" href={"/sign-up"}>Sign Up</Link></Button>}
                    {user && <SignOutButton />}
                </div>

                {/* Hamburger Menu */}
                <div className="sm:hidden">
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B877F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`fixed z-[999] px-2 mt-2  top-16 left-0 w-full bg-transparent  transform transition-[max-height, opacity] duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 pointer-events-none opacity-0 -translate-y-10'
                    } `}
            >
                <div className="flex flex-col gap-5 rounded-3xl bg-secondary dark:bg-[#1A1A1A] p-6 pb-4 shadow-xl shadow-[#000000] text-md font-light">
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
