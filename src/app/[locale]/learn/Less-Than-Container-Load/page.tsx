"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import FAQSearch from "@/components/faq";
import { Award, Package, Truck, Shield, Clock, Globe } from "lucide-react";
import GetQuoteComponent from "@/components/getQuoteComponent";

export default function ShippingMethodsInfo() {
  const t = useTranslations("learn-less");

  return (
    <main className="flex-1 flex flex-col gap-20 sm:gap-28 md:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Enhanced Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Hero Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/lcl-banner.jpg"
              alt="Less Than Container Load Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">LCL Services</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Less Than Container<br />Load
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Cost-effective shipping for smaller shipments that don&apos;t fill an entire container, enabling businesses to pay only for the space they use
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/container-services-forms">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Request a Quote
                  </span>
                </button>
              </Link>
              <Link href="#services">
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button 
              onClick={() => {
                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">Scroll to explore</span>
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* What is LCL Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Container Shipping</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                What is Less than container load?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Less than Container Load (LCL) is a shipping method specifically designed for businesses with shipments that
                  do not fill an entire shipping container. This service enables multiple shipments from different clients to be
                  consolidated within a single container, enabling businesses to share transportation costs effectively. Our LCL is
                  an ideal solution for smaller shipments, as it allows you to pay only for the space you use. As it provides a
                  cost-effective way to transport goods while maintaining efficient transit times and ensuring secure delivery
                  across global markets.
                </p>
              </div>
            </div>
            
            {/* Right: Empty space (no image) */}
            <div className="hidden lg:block">
              {/* Empty right column to maintain layout */}
            </div>
          </div>
        </div>
      </section>

      {/* When to use LCL Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>When to Use LCL</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                When to use LCL?
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  This method is particularly effective for stackable cargo, ensuring efficient use of space. With Moon
                  Navigation and Trading Co., If you need to ship small boxes or pallets that can fit into 20-foot or 40-foot
                  containers but do not have enough cargo to fill an entire container, our LCL shipping is the ideal solution
                  Additionally, it can accommodate non-stackable items, providing flexibility to meet shipping requirements.
                  With our LCL, you can optimize your logistics while maintaining the security and timely delivery of your
                  goods.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  LCL is especially beneficial for small and medium enterprises (SMEs) that do not have the volume to fill an
                  entire container. It also caters to large and medium enterprises (LMEs) with fluctuating demands or those
                  exploring new market opportunities. By leveraging LCL shipping, these businesses can enhance their supply
                  chain efficiency, reduce inventory costs, and maintain flexibility in adapting to market fluctuations, all while
                  ensuring the reliable and timely delivery of their products.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lcl-when-to-use.jpg" alt="Workers loading Less Than Container Load" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LCL vs FCL Comparison Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Shipping Comparison</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
              What is the difference between LCL and FCL? (LCL Vs FCL)
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 relative group">
            {/* Mobile Swipe Arrows */}
            <div className="hidden md:block">
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100" 
                      onClick={() => {
                        const tableContainer = document.querySelector('.table-scroll-container');
                        if (tableContainer) {
                          tableContainer.scrollLeft -= 300;
                        }
                      }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                      onClick={() => {
                        const tableContainer = document.querySelector('.table-scroll-container');
                        if (tableContainer) {
                          tableContainer.scrollLeft += 300;
                        }
                      }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Mobile Swipe Indicator */}
            <div className="md:hidden flex justify-center items-center gap-2 py-4 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-sm">Swipe to view more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <table className="min-w-full bg-white text-sm md:text-base">
              <thead>
                <tr className="bg-blue-50 text-gray-900">
                  <th className="py-4 px-6 border-b border-gray-200 font-medium text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>Feature</th>
                  <th className="py-4 px-6 border-b border-gray-200 font-medium text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>LCL (Less Than Container Load)</th>
                  <th className="py-4 px-6 border-b border-gray-200 font-medium text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>FCL (Full Container Load)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">Cost</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Lower (pay for used space)</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Higher (pay for full container)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">Volume</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Small to medium shipments</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Larger shipments</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">Transit Time</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Slightly longer (due to consolidation)</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Faster (direct shipping)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-900 font-medium">Flexibility</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">More frequent shipments</td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600">Requires full container allocation</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-gray-900 font-medium">Security</td>
                  <td className="py-4 px-6 text-gray-600">Handled with care (but shared space)</td>
                  <td className="py-4 px-6 text-gray-600">Higher security (dedicated container)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Elevate Your Shipping Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lcl-experience.jpg" alt="Shipping professional with containers" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Shipping Excellence</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Elevate Your Shipping Experience with Our LCL Solutions
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Tailored Freight Consolidation Services for Smooth, Efficient, and Cost-Effective Global Transport.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  At Moon Navigation and Trading Co., we pride ourselves on leveraging an extensive global
                  network and deep expertise in freight consolidation to provide superior Less than Container
                  Load (LCL) shipping solutions. We understand the complexities of international shipping and
                  strive to simplify the process by offering consolidated services that optimize costs without
                  sacrificing quality. As we are committed to ensuring that your goods are transported securely
                  and efficiently, tailored to your unique business needs.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our comprehensive LCL services offer flexible scheduling, reliable transit times, and real-time
                  tracking, empowering you to optimize shipping costs while maintaining the highest standards of
                  speed and safety. With our focus on excellence and customer satisfaction, we strive to be your
                  trusted partner in navigating the complexities of international logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Enhanced Services</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Enhance Your LCL Shipment with Our Additional Services
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  At Moon Navigation and Trading Co., we understand the complexities of global logistics. When booking your Less than Container Load (LCL) shipment globally with us:
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  You can enhance it by adding specialized logistics services designed to streamline your supply chain. Our door-to-door delivery ensures that your cargo is expertly handled from pickup to delivery, while our dedicated customs clearance team facilitates smooth imports and exports worldwide.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  For even smoother shipments, we recommend our air freight services, allowing you to leverage well-informed route analysis and benefit from the skills of our team of professionals to keep your goods moving efficiently. <span className="italic text-gray-500">24/7</span>
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lcl-additional-services.jpg" alt="Workers discussing logistics at port" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculation Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Pricing Structure</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
              How does our LCL shipping Cost is calculated?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              The cost of LCL shipping at Moon Navigation and Trading Co. is determined by several key factors, primarily the volume of space your cargo occupies within the container, its weight, and the chosen shipping route. Volume is measured in cubic meters (CBM), while weight is calculated in kilograms. For our services, the maximum weight for a single package is 3,000 kg, with a volume limit of 29 CBM. Additionally, the overall maximum limit per booking is 20,000 kg and 60 CBM. By accurately assessing these parameters, we ensure competitive pricing tailored to your specific shipping needs, providing transparency and value in the process.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>LCL Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Reasons to Choose Moon Navigation and Trading Co. for Your LCL Shipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Global network with cost-optimized transportation and secure handling for less-than-container load shipments.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/7.png" alt="Global Network" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global Network
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our extensive network provides reliable consolidation services that ensure seamless connections for your cargo worldwide, ensuring timely delivery.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/8.png" alt="Cost-Optimized Transportation" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Cost-Optimized Transportation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on delivering efficient and budget-friendly transportation options for smaller shipments without compromising on quality.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/9.png" alt="Secure Handling" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Secure Handling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team employs meticulous packaging, precise labeling, and advanced tracking to ensure your shipment is always protected, even in shared shipping spaces, ensuring that it arrives in perfect condition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/10.png" alt="End-to-End Logistics" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                End-to-End Logistics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive logistics solutions that guarantee timely and reliable delivery outcomes, from pickup to final destination, allowing you to focus on your business.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/container/11.png" alt="Expert Documentation Management" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Expert Documentation Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With our deep understanding of customs regulations and compliance requirements, we expertly manage all necessary documentation, minimizing delays and ensuring a hassle-free shipping experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Component */}
      <GetQuoteComponent topic="Less Than Container Load (LCL)" link="/container-services-forms" />
      
      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSearch category="lcl" />
        </div>
      </section>
    </main>
  );
}