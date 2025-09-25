"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Ship, Plane, Truck, Container } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";
import ServiceSection from "@/components/ServiceSection";

export default function TransportationFreightPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          <div className="absolute inset-0 z-10">
            <Image src="/cargoShip.jpeg" alt="Transportation & Freight" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 1200px" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 rounded-[2rem] md:rounded-[3rem]"></div>
          </div>
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Transportation & Freight Services</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Transportation & Freight Services
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                End-to-end freight services across sea, air, and land, tailored to your cargo and timelines.
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

      {/* Overview */}
      <section id="overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-raleway font-medium text-gray-900 mb-4">Comprehensive Freight Network</h2>
            <p className="text-gray-600 leading-relaxed">
              From chartering ships to last-mile delivery, we orchestrate every leg of your shipment with precision, reliability, and transparent communication.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow">
            <Image src="/cargoShip.jpeg" alt="Transportation & Freight" fill className="object-cover" />
          </div>
        </div>
      </section>

      <ServiceSection
        id="transportation-freight-cards"
        badgeLabel="Transportation & Freight"
        description="Ocean chartering, container logistics, inland transport, and air freight."
        gridColsClass="lg:grid-cols-2"
        items={[
          { title: 'Ocean Freight (Ship Chartering)', image: '/icons/ocean freight/Ocean Freight.jpg', description: 'Chartering solutions for bulk, breakbulk, and project cargo backed by market insight and disciplined execution.', learnLink: '/learn-more/ocean-freight', quoteLink: '/ocean-freight-forms' },
          { title: 'Containers Services', image: '/container-banner-out.jpg', description: 'End-to-end container logistics with space assurance, efficient stuffing, tracking, and dependable delivery.', learnLink: '/learn-more/container', quoteLink: '/container-services-forms' },
          { title: 'Inland Freight', image: '/inland-2.jpg', description: 'Nationwide road and rail transport with defined SLAs and secure handling.', learnLink: '/learn-more/inland-freight', quoteLink: '/inland-freight-forms' },
          { title: 'Air Freight', image: '/Air Freight.jpeg', description: 'Priority air services for time-critical and high-value cargo with customs support.', learnLink: '/learn-more/air-freight', quoteLink: '/air-freight-forms' },
        ]}
      />

      <GetQuoteComponent topic="Transportation & Freight" link="/quote-request" />
    </main>
  );
}


