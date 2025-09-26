"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceSection from '@/components/ServiceSection'
import GetQuoteComponent from '@/components/getQuoteComponent'

export default function ServicesPage() {

  return (
    <main className="w-full flex flex-col gap-16 sm:gap-20 md:gap-24" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/cargoShip.jpeg"
              alt="Our Logistics & Maritime Services"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-raleway font-light">Our Services</span>
            </div>
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Comprehensive Maritime, Logistics & Trading Services
              </h1>
              <h2 className="font-raleway font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Explore our portfolio spanning ocean, air, inland freight, container logistics, ship agency, and specialized support.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-10">
              <Link href="#services">
                <button className="bg-white text-gray-900 hover:bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-gray-300 h-10 px-5 md:h-12 md:px-6 font-raleway font-light text-xs md:text-sm">
                  Explore Services
                </button>
              </Link>
              <Link href="/quote-request">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-2 border-blue-600 hover:border-blue-700 h-10 px-5 md:h-12 md:px-6 font-raleway font-light text-xs md:text-sm">
                  Request Your Quote Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Quick In-Page Navigation */}
      <nav aria-label="Services navigation" className="w-full max-w-7xl mx-auto px-4 -mt-6">
        <div className="w-full overflow-x-auto">
          <ul className="flex gap-3 md:gap-4 py-3 md:py-4 min-w-max">
            {[
              { href: '#ship-agency', label: 'Ship Agency' },
              { href: '#transportation', label: 'Transportation' },
              { href: '#vessel-support', label: 'Vessel Support' },
              { href: '#other-logistics', label: 'Other Logistics' },
              { href: '#expand-fleet', label: 'Expand Fleet' },
              { href: '#trade', label: 'Trade' },
              { href: '#investment', label: 'Investment' },
            ].map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 h-9 md:h-10 px-4 md:px-5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-xs md:text-sm text-gray-800 hover:bg-white hover:border-gray-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Anchor for old Explore Services button */}
      <div id="services" />
      <ServiceSection
        id="ship-agency"
        badgeLabel="Ship Agency and Operational Services"
        description="Efficient management and support for vessels at port and at sea ensuring smooth operations in all Egyptian ports."
        items={[
          { title: 'Request for a PDA', image: '/shipagencytitleimage.jpg', description: 'Accurate port disbursement estimates based on current tariffs and local regulations across Egyptian ports.', learnLink: '/learn/pda', quoteLink: '/ship-agency-forms' },
          { title: 'Sign On/Off Crew Members', image: '/airCargo.jpg', description: 'Compliant crew changes coordinated end to end, including immigration formalities and logistics.', learnLink: '/learn/crew', quoteLink: '/ship-agency-forms' },
          { title: 'Suez Canal Transit Passage', image: '/suez.jpg', description: 'End-to-end management of Suez Canal transits including documentation, slot booking, and coordination.', learnLink: '/learn/suez-canal-transit-passage', quoteLink: '/ship-agency-forms' },
          { title: 'Transit Spare Parts', image: '/spare-parts.jpg', description: 'Expedited customs clearance, secure handling, and on-board delivery of urgent spare parts.', learnLink: '/learn/spare-parts', quoteLink: '/special-services-forms' },
          { title: 'Bunkering | Oil Supply | Ship Chandlery', image: '/bunkering-hero.jpg', description: 'Quality-controlled fuel, lubricants, provisions, and technical stores with documented delivery.', learnLink: '/learn/bunkering', quoteLink: '/special-services-forms' },
          { title: 'Special Services by Case', image: '/special-services.jpg', description: 'Custom agency solutions for non-standard operations and time-critical requirements.', learnLink: '/special-services-forms', quoteLink: '/special-services-forms' },
        ]}
      />

      <ServiceSection
        id="transportation"
        badgeLabel="Transportation Services"
        description="Comprehensive solutions for moving goods across land, sea, and air."
        items={[
          { title: 'Ocean Freight (Ship Chartering)', image: '/icons/ocean freight/Ocean Freight.jpg', description: 'Chartering solutions for bulk, breakbulk, and project cargo backed by market insight and disciplined execution.', learnLink: '/learn-more/ocean-freight', quoteLink: '/ocean-freight-forms' },
          { title: 'Containers Services', image: '/container-banner-out.jpg', description: 'End-to-end container logistics with space assurance, efficient stuffing, tracking, and dependable delivery.', learnLink: '/learn-more/container', quoteLink: '/container-services-forms' },
          { title: 'Inland Freight', image: '/inland-2.jpg', description: 'Nationwide road and rail transport with defined SLAs and secure handling.', learnLink: '/learn-more/inland-freight', quoteLink: '/inland-freight-forms' },
          { title: 'Air Freight', image: '/Air Freight.jpeg', description: 'Priority air services for time-critical and high-value cargo with customs support.', learnLink: '/learn/air-freight', quoteLink: '/air-freight-forms' },
        ]}
      />

      <ServiceSection
        id="vessel-support"
        badgeLabel="Vessel Support and Maintenance"
        description="Reliable services to optimize vessel performance and technical operations."
        items={[
          { title: 'Ship Management', image: '/ship-management.jpg', description: 'Technical management, crewing, and compliance focused on safety, reliability, and cost control.', learnLink: '/learn/ship-management', quoteLink: '/vessel-support-maintenance-forms' },
          { title: 'Docking and Maintenance', image: '/docking-1.jpg', description: 'Planned and emergency repairs with vetted yards, defined scopes, and firm timelines.', learnLink: '/learn/dockingandmaintenance', quoteLink: '/vessel-support-maintenance-forms' },
        ]}
      />

      <ServiceSection
        id="other-logistics"
        badgeLabel="Other Logistics Services"
        description="Seamless coordination for custom clearance and handling."
        items={[
          { title: 'Customs Clearance Solutions', image: '/customs-clearance.jpg', description: 'Efficient import and export clearance with accurate documentation and tariff guidance.', learnLink: '/learn/customs-clearance', quoteLink: '/other-logistics-forms' },
          { title: 'Handling, Stevedoring & Storage Services', image: '/hss-1.jpg', description: 'Safe cargo handling, stevedoring, warehousing, and port-side storage with clear processes.', learnLink: '/learn/handling-stevedoring-storage/learn-more', quoteLink: '/other-logistics-forms' },
        ]}
      />

      <ServiceSection
        id="expand-fleet"
        badgeLabel="Expand Your Fleet and Capacity"
        description="Flexible options to support and scale your operations."
        items={[
          { title: 'Vessel Rentals and Purchases', image: '/buy-rent-vessel.jpg', description: 'Curated vessel charters and acquisitions aligned to trade requirements and budget.', learnLink: '/learn/vessel', quoteLink: '/buy-rent-vessels-forms' },
          { title: 'Container Rentals and Purchases', image: '/container-rentals.jpg', description: 'Flexible container leasing and purchase options with rapid deployment.', learnLink: '/learn/container-purchases', quoteLink: '/buy-rent-container-forms' },
        ]}
      />

      <ServiceSection
        id="trade"
        badgeLabel="Trade Solutions"
        items={[
          { title: 'International Trading', image: '/trading-1.jpg', description: 'Integrated sourcing, procurement, and trade facilitation supported by proven logistics execution.', learnLink: '/learn/international-trading', quoteLink: '/international-trading-forms' },
        ]}
      />

      <ServiceSection
        id="investment"
        badgeLabel="Investment"
        items={[
          { title: 'Invest with us', image: '/invest-1.jpg', description: 'Partnership opportunities across maritime, logistics, and trade with disciplined governance and aligned incentives.', learnLink: '/invest', quoteLink: '/invest' },
        ]}
      />
      <GetQuoteComponent topic="All Services" link="/quote-request" />
    </main>
  )
}


