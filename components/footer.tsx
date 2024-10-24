import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import LocaleSwitcher from './LocaleSwitcher'

export default function Footer() {
    return (
        <footer className="bg-background max-w-7xl pb-12 w-full  ">
            <div className=" px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-muted-foreground dark:border-secondary py-12">

                    <div className="flex flex-col gap-2 justify-center text-start">
                        <h2 className="text-2xl font-bold  text-primary  w-full">MoonNavigation</h2>
                        <p className=" text-muted-foreground">
                            Your trusted partner for shipping and <br /> logistics services.
                        </p>
                    </div>
                    <div className="flex md:justify-center py-3">
                        <ul className="flex flex-col gap-4 text-start w-[100px]">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-teal-600">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-teal-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-teal-600">
                                    Track Shipment
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-teal-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="gap-4 flex flex-col items-start md:justify-center">
                        <h3 className="text-lg font-semibold text-teal-700">Newsletter</h3>
                        <p className="text-muted-foreground">Stay updated with our latest news and offers.</p>
                        <form className="flex flex-col justify-start md:justify-center sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-3 py-2 max-w-[200px] border border-gray-300 rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-teal-800 transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-8 pt-8 flex justify-center gap-2 border-t border-muted-foreground dark:border-secondary text-center text-gray-500 text-sm">
                    <h1 className='flex items-center'>
                        © 2013 - {new Date().getFullYear()} Moon Navigation. All rights reserved.
                    </h1>
                    <ThemeSwitcher />
                    <LocaleSwitcher />
                </div>
            </div>
        </footer>
    )
}