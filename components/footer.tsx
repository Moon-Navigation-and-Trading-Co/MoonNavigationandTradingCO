import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, MessageCircle, Youtube, Twitter } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-raleway font-medium text-gray-900 mb-4">
                Moon Navigation and Trading Co.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-md">
                Your Strategic Premier Partner for Exceptional and Innovative
                Maritime, Logistics, and Trading Solutions.
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <p className="text-sm font-raleway font-medium">
                  Whenever, Wherever You Need to Trust.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#services"
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/partners"
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium"
                    >
                      Our Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/schedule-meeting"
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium"
                    >
                      Schedule a Meeting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/invest"
                      className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 font-raleway font-medium"
                    >
                      Invest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600 text-sm font-raleway font-medium text-center">
              ©2025 Moon Navigation and Trading Co. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
