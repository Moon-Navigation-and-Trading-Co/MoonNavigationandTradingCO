'use client';

import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Globe, 
    Ship, 
    Award, 
    Users, 
    Shield, 
    Zap, 
    Clock, 
    MapPin,
    CheckCircle,
    TrendingUp,
    Target,
    Heart,
    Package,
    Anchor,
    Truck,
    Compass
} from "lucide-react";
import Link from "next/link";

import PartnerLogoCarousel from "@/components/partners-carousel";
import GetQuoteComponent from '@/components/getQuoteComponent';
import FAQSearch from '@/components/faq';
import ReasonsGrid from "@/components/ReasonsGrid";

export default function AboutUs() {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Client Satisfaction", icon: Heart }
  ];

  const achievements = [
    {
      title: "ISO 9001:2008 Certified",
      description: "Quality Management System",
      icon: Award
    },
    {
      title: "ISO 14001 Certified", 
      description: "Environmental Management",
      icon: Shield
    },
    {
      title: "BIMCO Member",
      description: "International Maritime Association",
      icon: Ship
    },
    {
      title: "Strategic Location",
      description: "Suez Canal Gateway",
      icon: MapPin
    }
  ];

  return (
    <main className='w-full max-w-7xl place-self-center flex flex-col gap-16 sm:gap-20 md:gap-24' style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[600px] md:min-h-[700px] mt-8 md:mt-12">
        <div className="relative flex items-center rounded-[2rem] md:rounded-[3rem] bg-center bg-cover w-full h-full min-h-[600px] md:min-h-[700px] shadow-2xl shadow-black/30 overflow-hidden">
          {/* Enhanced Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 rounded-[2rem] md:rounded-[3rem] z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Hero Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/a-1.jpg"
              alt="Global logistics and shipping"
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
              <span className="text-white/90 text-sm font-medium">Established 2010</span>
            </div>
            
            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                About Moon Navigation and Trading Co.
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Your trusted partner in global maritime logistics and trade solutions, 
                connecting businesses across continents with excellence and innovation.
              </h2>
            </div>
            
            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/quote-request">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Get Started Today
                  </span>
                </button>
              </Link>
              <Link href="#ship-agency">
                <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Explore Our Services
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button 
              onClick={() => {
                const statsSection = document.querySelector('.w-full.max-w-6xl.mx-auto.px-4');
                if (statsSection) {
                  statsSection.scrollIntoView({ behavior: 'smooth' });
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


      {/* Statistics Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Achievements</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Company at a Glance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-medium text-gray-900 mb-2 text-center">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600 text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who are we? Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl">
              <Image
                src="/a-2.jpg"
                alt="Moon Navigation and Trading Co. team"
                width={600}
                height={400}
                className="w-full h-[250px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Right: Content */}
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>About Us</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Who are we?
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We are Moon Navigation and Trading Co., headquartered in Egypt, stands as a distinguished leader in maritime, logistics, and trading solutions. With extensive experience in the industry, we specialize in comprehensive shipping, transportation, and freight services, alongside global trade solutions and efficient ship management and maintenance.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Our unwavering commitment to quality management, environmental responsibility, and customer satisfaction drives every aspect of our operations. Tailored to meet the complex demands of today&apos;s dynamic business landscape, our services are not just supported but elevated to new levels of success, establishing us as a trusted partner across various industries by delivering innovative, reliable, and efficient solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation – 2010 Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image - First on mobile, second on desktop */}
            <div className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl order-1 lg:order-2">
              <Image
                src="/a-3.jpg"
                alt="Suez Canal - Egypt"
                width={600}
                height={400}
                className="w-full h-[250px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Content - Second on mobile, first on desktop */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Our Story</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Our Foundation – 2010
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Moon Navigation and Trading Co. was established in September 2010. Operating from the heart of Egypt, we leverage our nation&apos;s strategic position as a crossroads of global trade and a gateway to the Suez Canal, one of the world&apos;s most vital maritime routes.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Our prime location grants us unmatched access to the Suez Canal and global seaports, solidifying our role as a pivotal player in international commerce. Partner with us for unparalleled expertise in navigation, logistics, and trade solutions.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  We believe that true success stems from creativity and a profound understanding of our clients&apos; needs.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  From the very beginning, we have embraced the role of the &quot;unconventional partner,&quot; consistently innovating to tackle challenges with expertise. Our commitment to excellence ensures that we provide tailored solutions that go beyond ordinary, setting us apart in the industry. Partner with us, and experience the difference that a dedicated and imaginative approach can make for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm border border-blue-200/60 text-blue-700 rounded-full text-sm font-medium mb-8 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-raleway font-medium">Our Purpose</span>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto font-raleway">
              Driving the future of global logistics with purpose, innovation, and unwavering commitment to excellence.
            </p>
          </div>
          
          {/* Mission & Vision Cards */}
          <div className="space-y-8 md:space-y-16">
            {/* Mission Card */}
            <div className="group relative w-full max-w-sm md:max-w-5xl mx-auto h-[400px] md:h-[650px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl md:rounded-[2rem]"></div>
              <Image
                src="/a-4.jpg"
                alt="Mission background - Global logistics and trade"
                width={1400}
                height={650}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-10 max-w-xs md:max-w-2xl border border-white/20">
                  <div className="text-center space-y-3 md:space-y-6">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-900 font-raleway leading-tight">Our Mission</h3>
                    <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed font-raleway">
                      To deliver world-class solutions that connect businesses and markets, enabling seamless trade and transport across the globe while maintaining the highest standards of professionalism, safety, and environmental responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative w-full max-w-sm md:max-w-5xl mx-auto h-[400px] md:h-[650px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl md:shadow-2xl hover:shadow-2xl md:hover:shadow-3xl transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-teal-600/10 rounded-2xl md:rounded-[2rem]"></div>
              <Image
                src="/a-5.jpg"
                alt="Vision background - Future of maritime logistics"
                width={1400}
                height={650}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-10 max-w-xs md:max-w-2xl border border-white/20">
                  <div className="text-center space-y-3 md:space-y-6">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-light text-gray-900 font-raleway leading-tight">Our Vision</h3>
                    <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed font-raleway">
                      To be the premier global partner in maritime, logistics, and international trade, known for our unwavering commitment to quality, innovation, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Enhanced Our Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>What We Offer</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Comprehensive Services
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Moon Navigation and Trading Co. provides integrated solutions across transportation, vessel operations, logistics, and trade—supporting efficient and compliant performance on a global scale.
            </p>
          </div>
          
          {/* Service Navigation Buttons (Reordered) */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('ship-agency')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-blue-600 text-white shadow-xl"
            >
              <Anchor className="w-5 h-5 mr-2" />
              Ship Agency & Marine
            </button>
            
            <button 
              onClick={() => document.getElementById('transportation-freight')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              <Ship className="w-5 h-5 mr-2" />
              Transportation & Freight
            </button>
            
            <button 
              onClick={() => document.getElementById('vessel-support')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              Vessel Support
            </button>
            
            <button 
              onClick={() => document.getElementById('other-logistics')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              <Package className="w-5 h-5 mr-2" />
              Other Logistics Services
            </button>
            
            <button 
              onClick={() => document.getElementById('global-trade')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-12 px-6 py-3 font-raleway shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300"
            >
              <Globe className="w-5 h-5 mr-2" />
              Global Trade Solutions
            </button>
          </div>
        </div>

        {/* Enhanced Transportation & Freight Solutions Section (moved below Ship Agency) */}
      </section>

      <section id="ship-agency" className="bg-white rounded-3xl shadow-xl md:bg-transparent md:rounded-none md:shadow-none p-6 md:p-8 mb-8 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left */}
          <div className="order-1 lg:order-1">
            <Image
              src="/a-7.jpg"
              alt="Ship agency workers at port"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Text Content - Right */}
          <div className="order-2 lg:order-2">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-3xl font-light mb-3 md:mb-4 text-primary font-raleway">Ship Agency and Marine Services</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              At Moon Navigation and Trading Co., we take pride in being a licensed ship agent committed to seamless vessel operations across all Egyptian sea ports and the Suez Canal Transit. With a focus on efficiency, compliance, and reliability, we minimize delays and optimize turnaround times, supporting shipowners, operators, and charterers.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Our port call management covers pilotage, berthing, towage, and disbursement accounting for smooth port entry and exit. We handle cargo documentation and crew sign-on/sign-off with welfare support. We also provide bunkering, oil supply, and chandlery services to keep vessels stocked with fuel, provisions, and spare parts. Additionally, we manage transit spare parts delivery and technical support, ensuring timely maintenance and compliance with international standards.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              Our experienced team also ensures efficient Suez Canal transit, handling documentation and coordination with authorities to minimize delays and ensure full compliance.
            </p>
            <Link href="/learn-more/ship-agency">
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Explore Ship Agency Services
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="transportation-freight" className="bg-white rounded-3xl shadow-xl md:bg-transparent md:rounded-none md:shadow-none p-6 md:p-8 mb-8 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left */}
          <div className="order-2 lg:order-1">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-3xl font-light mb-3 md:mb-4 text-primary font-raleway">Efficient Transportation & Freight Solutions</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              We pride ourselves on providing comprehensive transportation and freight solutions designed to meet diverse logistical needs.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              From local transport to freight services, we ensure that your goods arrive safely and punctually. Our ocean freight capabilities accommodate a wide range of cargo types, including project cargo, dangerous goods, heavy lift, break bulk, and containers in both standard and nonstandard sizes, along with inland container transport and storage solutions, establishing ourselves as a versatile choice for effectively transporting any shipment without compromising quality or timeliness, whether across borders or overseas.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              Our integrated sea-air solutions further enhance our logistics offerings, allowing for efficient and timely delivery of your shipments in today's dynamic market.
            </p>
            <Link href="/learn-more/transportation-freight">
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Explore Transportation Services
                </span>
              </button>
            </Link>
          </div>
          
          {/* Image - Right */}
          <div className="order-1 lg:order-2">
            <Image
              src="/ve-9.jpg"
              alt="Transportation and freight solutions"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <section id="global-trade" className="bg-white rounded-3xl shadow-xl md:bg-transparent md:rounded-none md:shadow-none p-6 md:p-8 mb-8 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left */}
          <div className="order-1 lg:order-1">
            <Image
              src="/a-8.jpg"
              alt="Global trade connections"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Text Content - Right */}
          <div className="order-2 lg:order-2">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-3xl font-light mb-3 md:mb-4 text-primary font-raleway">Streamlined Global Trade Solutions</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              Moon Navigation and Trading Co. enhances global trade by streamlining import and export processes, effectively connecting markets across different continents seamlessly. Our expertise in customs clearance facilitates the challenges posed by complex regulations, ensuring that shipments progress swiftly while remaining compliant with legal requirements.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              We foster an efficient trading environment for businesses to expand their global reach, offering comprehensive services from consultancy on compliance matters to full-service handling that includes meticulous documentation, thorough inspections, and timely deliveries.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              You can rely on our commitment to excellence as we support and guide you toward success at every stage of the process.
            </p>
            <Link href="/learn/international-trading">
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Explore Trade Services
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section id="vessel-support" className="bg-white rounded-3xl shadow-xl md:bg-transparent md:rounded-none md:shadow-none p-6 md:p-8 mb-8 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left */}
          <div className="order-2 lg:order-1">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-3xl font-light mb-3 md:mb-4 text-primary font-raleway">Integrated Vessel Support and Maintenance</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              At Moon Navigation and Trading Co., Our vessel support and maintenance services provide shipowners and operators with complete peace of mind.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              We offer comprehensive ship management solutions, including technical oversight, crew management, budget control, regulatory compliance, and performance monitoring — all tailored to ensure your fleet operates safely, efficiently, and cost-effectively.
            </p>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">
              In parallel, our docking and maintenance services cover every aspect of vessel upkeep, from dry docking and afloat repairs to hull cleaning, mechanical servicing, electrical systems maintenance, and safety equipment checks. Whether your vessel requires scheduled maintenance or urgent repairs, our experienced teams work around the clock to keep your operations uninterrupted and your ships in top seaworthy condition.
            </p>
            <Link href="/learn-more/vessel-support-maintenance">
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Explore Vessel Services
                </span>
              </button>
            </Link>
          </div>
          
          {/* Image - Right */}
          <div className="order-1 lg:order-2">
            <Image
              src="/a-9.jpg"
              alt="Vessel in dry dock for maintenance"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <section id="other-logistics" className="bg-white rounded-3xl shadow-xl md:bg-transparent md:rounded-none md:shadow-none p-6 md:p-8 mb-8 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left */}
          <div className="order-1 lg:order-1">
            <Image
              src="/a-10.jpg"
              alt="Logistics worker inspecting containers at port"
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[350px] object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Text Content - Right */}
          <div className="order-2 lg:order-2">
            <div className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-3xl font-light mb-3 md:mb-4 text-primary font-raleway">Other Logistic Services</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              At Moon Navigation and Trading Co., we ensure complete operational harmony across all logistics and cargo services. From port arrival to final delivery, our team synchronizes every step with precision, saving you time and reducing complexity.
            </p>
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div>
                <h4 className="font-medium text-gray-900 font-raleway text-sm md:text-base mb-2">Customs Clearance Solutions:</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Our in-house experts swiftly and accurately manage all customs formalities. We handle import/export documentation, tariff classifications, duty calculations, and on-site clearance to keep your cargo moving without delays, all while ensuring full compliance with national and international regulations.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 font-raleway text-sm md:text-base mb-2">Handling, Stevedoring, and Storage Services:</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-2">Whether you are dealing with bulk, breakbulk, containerized, or project cargo, we provide professional stevedoring, efficient cargo handling, and secure short- or long-term storage solutions.</p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Our skilled ground teams and modern equipment ensure safety, speed, and accuracy at every point of cargo movement.</p>
              </div>
            </div>
            <Link href="/learn-more/other-logistics-services">
              <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 transform hover:-translate-y-1 active:translate-y-0">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Explore Logistic Services
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Our Foundation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6">
            Our Core Values
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Guided by integrity, innovation, and responsibility, we strive to deliver unmatched service while fostering long-term relationships and a sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Integrity & Transparency */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] bg-gradient-to-br from-blue-900 to-blue-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="/a-11.jpg"
              alt="Integrity & Transparency handshake"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="relative z-20 p-8 flex flex-col justify-end h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-3 text-white font-raleway">Integrity & Transparency</h3>
              </div>
              <p className="text-white/95 text-base leading-relaxed">
                We build trust through honest, transparent dealings and ethical business practices—always putting our clients&apos; interests first.
              </p>
            </div>
          </div>

          {/* Customer-Centric Excellence */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] bg-gradient-to-br from-green-900 to-green-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="/a-12.jpg"
              alt="Customer-Centric Excellence"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="relative z-20 p-8 flex flex-col justify-end h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-3 text-white font-raleway">Customer-Centric Excellence</h3>
              </div>
              <p className="text-white/95 text-base leading-relaxed">
                Our clients are at the heart of everything we do. We anticipate needs, deliver tailored solutions, and go the extra mile to exceed expectations.
              </p>
            </div>
          </div>

          {/* Forward-Thinking & Innovation */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] bg-gradient-to-br from-purple-900 to-purple-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="/a-13.jpg"
              alt="Forward-Thinking & Innovation"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="relative z-20 p-8 flex flex-col justify-end h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-3 text-white font-raleway">Innovation & Progress</h3>
              </div>
              <p className="text-white/95 text-base leading-relaxed">
                We embrace new technologies and creative solutions, driving progress and efficiency for our clients and the industry.
              </p>
            </div>
          </div>

          {/* Safety & Responsibility */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] bg-gradient-to-br from-red-900 to-red-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="/a-14.jpg"
              alt="Safety and Responsibility"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="relative z-20 p-8 flex flex-col justify-end h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-3 text-white font-raleway">Safety & Responsibility</h3>
              </div>
              <p className="text-white/95 text-base leading-relaxed">
                We prioritize the safety of our people, partners, and cargo, and are committed to sustainable, responsible operations in every aspect of our business.
              </p>
            </div>
          </div>

          {/* Collaboration */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] bg-gradient-to-br from-orange-900 to-orange-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="/a-15.jpg"
              alt="Collaboration"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="relative z-20 p-8 flex flex-col justify-end h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-3 text-white font-raleway">Collaboration</h3>
              </div>
              <p className="text-white/95 text-base leading-relaxed">
                Our team and all our key partners—whether on the vessel or at company HQ—work in close cooperation with you, from first consultation to after your cargo arrives.
              </p>
            </div>
          </div>

          {/* Sustainability */}
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] bg-gradient-to-br from-teal-900 to-teal-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src="/a-16.jpg"
              alt="Sustainability"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="relative z-20 p-8 flex flex-col justify-end h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-medium mb-3 text-white font-raleway">Sustainability</h3>
              </div>
              <p className="text-white/95 text-base leading-relaxed">
                We practice environmental stewardship and strive to manage our operations responsibly today, for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <PartnerLogoCarousel />

      {/* Our Commitment to Excellence Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Certifications</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Our Commitment to Excellence
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are proud to be ISO 9001 and ISO 14001 certified, showcasing our dedication to quality and environmental responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* ISO 9001 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logos/About Us Page (13) (1).png"
                    alt="ISO 9001 Quality Management Certification"
                    width={200}
                    height={200}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-primary">ISO 9001</CardTitle>
                <CardDescription className="text-base font-medium">Quality Management System</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to Quality Management in accordance with ISO 9001 standards. We strive to consistently deliver operational excellence and services that meet or exceed relevant best benchmarks.
                </p>
              </CardContent>
            </Card>
            
            {/* ISO 14001 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logos/About Us Page (12) (1).png"
                    alt="ISO 14001 Environmental Management Certification"
                    width={200}
                    height={200}
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <CardTitle className="text-xl text-primary">ISO 14001</CardTitle>
                <CardDescription className="text-base font-medium">Environmental Management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to environmental responsibility through our ISO 14001 certification and sustainable practices. Our team is focused on ensuring waste reduction, pollution prevention, and compliance with global environmental standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cultivating Excellence Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/40 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/30 text-blue-700 rounded-full text-sm font-medium shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Philosophy</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Cultivating Excellence through Trust and Innovation
            </h2>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 mx-auto rounded-full shadow-sm"></div>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Main Content */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-xl border border-white/50">
                <div className="space-y-6">
                  <p className="text-base text-gray-600 leading-relaxed">
                    At Moon Navigation and Trading Co., our journey is built on a commitment to excellence that permeates every aspect of our operations.
                  </p>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    Every day, we strive to create an environment where trust flourishes, allowing us to forge strong partnerships that stand the test of time.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right: Innovation & Legacy */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-8 md:p-10 shadow-xl border border-blue-100/50">
                <div className="space-y-6">
                  <p className="text-base text-gray-600 leading-relaxed">
                    As we navigate the complexities of the industry, our innovative spirit empowers us to embrace challenges and transform them into opportunities for growth.
                  </p>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
                  
                  <p className="text-base text-gray-600 leading-relaxed">
                    Together, we are not just achieving success; we are cultivating a legacy of reliability and exceptional service that sets us apart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications and Memberships */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Memberships</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Certifications and Memberships
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              BIMCO | ISO 9001:2008 | ISO 14001 | IAF | JAS-ANZ | Vesseltracker | Maritime Transport Sector | AFCS
            </p>
          </div>
          {/* Scrollable Container */}
          <div className="relative group">
            {/* Left Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('certifications-scroll');
                container?.scrollBy({ left: -150, behavior: 'smooth' });
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => {
                const container = document.getElementById('certifications-scroll');
                container?.scrollBy({ left: 150, behavior: 'smooth' });
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              id="certifications-scroll"
              className="overflow-x-auto scrollbar-hide py-4"
              style={{
                scrollSnapType: 'x mandatory'
              }}
            >
              <div className="flex flex-row items-center gap-6 md:gap-8 lg:gap-10 justify-start px-4 md:px-6">
                <Image src="/a-19.jpg" alt="BIMCO" width={180} height={180} className="h-36 w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/logos/About Us Page (13) (1).png" alt="ISO 9001:2008" width={180} height={180} className="h-36 w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/logos/About Us Page (12) (1).png" alt="ISO 14001" width={180} height={180} className="h-36 w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/a-22.jpg" alt="IAF" width={140} height={140} className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/a-23.jpg" alt="JAS-ANZ" width={140} height={140} className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/a-24.jpg" alt="JAS-ANZ G" width={200} height={140} className="h-28 w-40 md:h-32 md:w-44 lg:h-36 lg:w-52 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/a-25.jpg" alt="Vesseltracker" width={140} height={140} className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
                <Image src="/a-26.jpg" alt="Maritime Transport Sector" width={140} height={140} className="h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 flex-shrink-0 object-contain" style={{ scrollSnapAlign: 'start' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partnership Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Our Commitment</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              The Partner Who Understands and Delivers
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              We understand that your needs are unique, and your challenges are complex. That is why we specialize in providing nontraditional, innovative solutions that set us apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Key Points */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">We solve problems, not just handle tasks.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">We innovate where others hesitate.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">We deliver results with brilliance and reliability.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Commitment Statement */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <div className="space-y-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
                
                <div className="space-y-4 text-center">
                  <p className="text-gray-700 leading-relaxed">
                    As your brilliant and unconventional partner, we are committed to ensuring your business thrives by addressing your problems and delivering tailored solutions, every time.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed font-medium font-raleway">
                    When you need trust, innovation, and excellence, think Moon Navigation and Trading Co.<br/>
                    —your partner in success.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-blue-600 italic font-medium">
                    &ldquo;Whenever and wherever you need to trust&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Company Strengths</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Industry Expertise | Strategic Location | End-to-End Solutions
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine our industry expertise with a strategic location to deliver reliable, tailored services. Our commitment to sustainability and end-to-end solutions ensures global reach, operational excellence, and trusted partnerships you can rely on.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* First Row: 3 items */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/about us/28.png" alt="Industry Expertise" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience in navigating the intricacies of maritime and logistics operations for reliable results.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/about us/29.png" alt="Strategic Location" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Strategic Location
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Based in Egypt, with unparalleled access to the Suez Canal and regional seaports, making us a hub for global trade.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/about us/30.png" alt="End-to-End Solutions" width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                End-to-End Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From cargo handling to vessel management, we provide a full spectrum of services under one roof.
              </p>
            </div>
          </div>

          {/* Second Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/about us/31.png" alt="Global Reach" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Global Reach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Established networks with international partners ensure smooth cross-border operations.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/about us/32.png" alt="Tailored Services" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Tailored Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions are designed around your specific business needs, offering flexibility and efficiency.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/about us/33.png" alt="Sustainability Commitment" width={48} height={48} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Sustainability Commitment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize environmentally responsible practices in all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

            
      <GetQuoteComponent topic="" link="/quote-request" />
      <FAQSearch category="about-us" />
    </main>
  );
}