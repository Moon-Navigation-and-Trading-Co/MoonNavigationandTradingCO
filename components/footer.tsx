import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Footer() {
  return (
    <footer className="bg-background pb-12 w-full flex justify-center ">
      <div className=" px-5 w-full max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-muted-foreground dark:border-secondary py-12">
          <div className="flex flex-col gap-2 justify-center text-start col-span-2">
            <h2 className="text-2xl font-bold  text-primary  w-full">
              MoonNavigation
            </h2>
            <p className="text-base text-muted-foreground">
              Your trusted partner for shipping and <br /> logistics services.
            </p>
          </div>
          <div className="flex md:justify-center py-3 col-span-1">
            <ul className="flex flex-col text-[14px] gap-4 text-start w-[100px]">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-teal-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-teal-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-teal-600"
                >
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-teal-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex md:justify-end col-span-2">
            <div className="gap-3 w-[290px] flex flex-col text-start items-start md:items-start col-span-2">
              <h3 className="text-xl font-semibold text-primary">Newsletter</h3>
              <p className="text-sm text-muted-foreground ">
                Stay updated with our latest news <br /> and offers.
              </p>
              <form className="flex justify-start w-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 border border-gray-300 max-w-[280px] rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary max-w-[100px] text-white px-4 py-2 rounded-md hover:bg-teal-800 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-center gap-3 border-t border-muted-foreground dark:border-secondary text-center text-gray-500 text-sm">
          <h1 className="text-center flex justify-center items-center">
            © 2013 - {new Date().getFullYear()} Moon Navigation. All rights
            reserved.
          </h1>
          <div className="flex items-center justify-center">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
