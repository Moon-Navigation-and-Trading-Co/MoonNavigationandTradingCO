"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Package } from "lucide-react";
import ServiceSection from "@/components/ServiceSection";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function ExpandFleetCapacityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Hero Image */}
          <div className="absolute inset-0 z-10">
            <Image src="/buy-rent-vessel.jpg" alt="Expand Your Fleet and Capacity" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1200px" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 rounded-[2rem] md:rounded-[3rem]"></div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Fleet Expansion Services</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Expand Your Fleet and Capacity
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Flexible options to support and scale your operations with vessel and container solutions.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/quote-request">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Request a Quote
                  </span>
                </button>
              </Link>
              <Link href="#overview">
                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Learn More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-raleway font-medium text-gray-900 mb-4">Fleet Expansion Expertise</h2>
            <p className="text-gray-600 leading-relaxed">
              From vessel acquisitions to container leasing, we provide flexible solutions to scale your operations. Our expertise ensures you get the right equipment at the right price with full support.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow">
            <Image src="/buy-rent-vessel.jpg" alt="Fleet Expansion" fill className="object-cover" />
          </div>
        </div>
      </section>

      <ServiceSection
        id="fleet-expansion-cards"
        badgeLabel="Fleet Expansion Solutions"
        description="Vessel and container solutions to scale your operations."
        items={[
          { title: 'Vessel Rentals and Purchases', image: '/buy-rent-vessel.jpg', description: 'Curated vessel charters and acquisitions aligned to trade requirements and budget.', learnLink: '/learn/vessel', quoteLink: '/buy-rent-vessels-forms' },
          { title: 'Container Rentals and Purchases', image: '/container-rentals.jpg', description: 'Flexible container leasing and purchase options with rapid deployment.', learnLink: '/learn/container-purchases', quoteLink: '/buy-rent-container-forms' },
        ]}
      />

      <GetQuoteComponent topic="Fleet Expansion" link="/quote-request" />
    </main>
  );
}
