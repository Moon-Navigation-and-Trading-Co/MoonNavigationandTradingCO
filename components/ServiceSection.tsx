"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

type ServiceItem = {
  title: string
  image: string
  description?: string
  learnLink: string
  quoteLink?: string
}

// Mapping of learn more page routes to their hero images
const heroImageMap: Record<string, string> = {
  // Main service category pages
  '/learn-more/container': '/container-banner-out.jpg',
  '/learn-more/ship-agency': '/shipagencytitleimage.jpg',
  '/learn-more/ocean-freight': '/icons/ocean freight/Ocean Freight.jpg',
  '/learn-more/transportation-freight': '/cargoShip.jpeg',
  '/learn-more/vessel-support-maintenance': '/docking-1.jpg',
  '/learn-more/other-logistics-services': '/Custom 1.jpg',
  '/learn-more/inland-freight': '/f-inland-4.jpg',
  '/learn-more/air-freight': '/Air Freight.jpeg',
  '/learn-more/services': '/cargoShip.jpeg',
  '/learn/air-freight': '/Air Freight.jpeg',
  
  // Individual service cards from services page
  '/learn/pda': '/pda-1.jpg',
  '/learn/crew': '/crew-1.jpg',
  '/learn/suez-canal-transit-passage': '/suez-1.jpg',
  '/learn/spare-parts': '/spare-1.jpg',
  '/learn/bunkering/learn-more-bunkering': '/bunkering-1.jpg',
  '/learn/bunkering': '/bunkering-1.jpg',
  '/learn/ship-management': '/sm-1.jpg',
  '/learn/dockingandmaintenance': '/docking-1.jpg',
  '/learn/international-trading': '/international-1.jpg',
  '/learn/customs-clearance': '/Custom 1.jpg',
  '/learn/handling-stevedoring-storage/learn-more': '/H,S (7).jpg',
  '/learn/special': '/special-1.jpg',
  
  // Additional learn pages from other service sections
  '/learn/Less-Than-Container-Load': '/lcl-banner.jpg',
  '/learn/full': '/container-banner.jpg',
  '/learn/oversized': '/ov-1.jpg',
  '/learn/out-gauge': '/out-gauge-banner.jpg',
  '/learn/inland-container': '/inland-container-banner.jpg',
  '/learn/stevedoring-container': '/hss-1.jpg',
  '/learn/vessel': '/vessel rentals and purchases 1.jpg',
  '/learn/container-purchases': '/Container purchases and rentals 1.jpg',
  
  // Form pages (use same images as their corresponding learn pages)
  '/special-services-forms': '/special-1.jpg',
  '/buy-rent-vessels-forms': '/vessel rentals and purchases 1.jpg',
  '/buy-rent-container-forms': '/Container purchases and rentals 1.jpg',
  '/international-trading-forms': '/international-1.jpg',
  '/invest': '/icons/invest/invest.jpeg',
  '/ship-agency-forms': '/shipagencytitleimage.jpg',
  '/ocean-freight-forms': '/icons/ocean freight/Ocean Freight.jpg',
  '/container-services-forms': '/container-banner-out.jpg',
  '/inland-freight-forms': '/f-inland-4.jpg',
  '/air-freight-forms': '/Air Freight.jpeg',
  '/vessel-support-maintenance-forms': '/docking-1.jpg',
  '/other-logistics-forms': '/hss-1.jpg',
}

type ServiceSectionProps = {
  id: string
  badgeLabel: string
  description?: string
  items: ServiceItem[]
  gridColsClass?: string // optional override for grid columns (e.g., 'lg:grid-cols-2')
}

function ServiceCard({ title, image, description, learnLink, quoteLink }: ServiceItem) {
  const router = useRouter();

  const handleNavigate = () => {
    if (learnLink) router.push(learnLink);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavigate();
    }
  };

  // Use hero image from mapping if available, otherwise fall back to provided image
  const displayImage = heroImageMap[learnLink] || image;

  return (
    <Card
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`Open ${title}`}
      className="h-full min-h-[380px] md:min-h-[420px] flex flex-col bg-white/95 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
    >
      <CardHeader className="pb-3">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
          <Image 
            src={displayImage} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>
        <CardTitle className="text-lg mt-5 font-raleway font-light tracking-tight">{title}</CardTitle>
        {description && (
          <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-3">
          {quoteLink && (
            <Link href={quoteLink} onClick={(e)=>e.stopPropagation()} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-2 border-blue-600 hover:border-blue-700 h-9 px-4 md:h-10 md:px-5 font-raleway font-light text-xs md:text-sm flex items-center justify-center">
              Get a Quote
            </Link>
          )}
          <Link href={learnLink} onClick={(e)=>e.stopPropagation()} className="bg-white text-gray-900 hover:bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-gray-300 h-9 px-4 md:h-10 md:px-5 font-raleway font-light text-xs md:text-sm flex items-center justify-center">
            Learn more
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServiceSection({ id, badgeLabel, description, items, gridColsClass }: ServiceSectionProps) {
  const gridBase = "grid gap-6 auto-rows-[1fr]"
  return (
    <section id={id} className="w-full max-w-7xl mx-auto px-4 scroll-mt-28">
      <div className="rounded-[2rem] md:rounded-[2.5rem] border border-gray-200/70 bg-white/70 backdrop-blur-sm p-6 md:p-10 space-y-6 shadow-md">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs md:text-sm w-fit">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          {badgeLabel}
        </div>
        <h2 className="text-2xl md:text-3xl font-raleway font-light text-gray-900">
          {badgeLabel}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-3xl font-raleway font-light">{description}</p>
        )}
        <div className={`${gridBase} grid-cols-1 md:grid-cols-2 ${gridColsClass ?? 'lg:grid-cols-2'}`}>
          {items.map((item, idx) => (
            <ServiceCard key={`${id}-card-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}


