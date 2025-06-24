import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import LocaleSwitcher from "./LocaleSwitcher";
import { Redirect } from "next";

export default function Footer() {
  return (
    <footer className="bg-background pb-12 w-full flex justify-center ">
      <div className=" px-5 w-full max-w-[1300px]">
        <div className="flex flex-col md:flex-row justify-between gap-8 border-t border-gray-300 dark:border-secondary py-12">
          <div className="flex flex-col gap-2 justify-center text-start col-span-2 md:max-w-[380px]">
            <h2 className="text-xl font-bold  text-primary  w-full">
              Moon Navigation and Trading Co.
            </h2>
            <p className="text-sm text-muted-foreground md:max-w-[400px]">
              Your Strategic Premier Partner for Exceptional and Innovative
              Maritime, Logistics, and Trading Solutions.
            </p>
            <p className="mt-4 text-muted-foreground text-end">
              — Whenever, Wherever You Need to Trust.
            </p>
          </div>
          <div className="flex w-full justify-between md:justify-around">
            <div className="flex md:justify-center py-3 col-span-1">
              <ul className="flex flex-col text-base gap-4 text-start w-[100px]">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex md:justify-center py-3 col-span-1">
              <ul className="flex flex-col text-base gap-4 text-start w-[150px]">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Schedule a meeting
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Invest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-3 sm:justify-center items-center text-gray-600 text-sm md:text-xs">
          <Link href="https://www.google.com">LinkedIn</Link>{" "}
          <Link href="https://www.google.com">Facebook</Link>{" "}
          <Link href="https://www.google.com">Instagram</Link>{" "}
          <Link href="https://www.google.com">Telegram</Link>{" "}
          <Link href="https://www.google.com">Youtube</Link>{" "}
          <Link href="https://www.google.com">Twitter</Link>{" "}
        </div>
        <div className="mt-8 pt-8 flex flex-col sm:flex-row justify-center gap-3 border-t border-gray-300 dark:border-secondary text-center text-gray-500 text-sm">
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
