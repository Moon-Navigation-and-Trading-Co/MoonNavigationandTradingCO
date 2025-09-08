"use client";
import FAQSearch from "@/components/faq";
import ReasonsGridUniversal from "@/components/ReasonsGridUniversal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Users, Globe, Award, CheckCircle, DollarSign, Building2, Zap } from "lucide-react";

export default function InvestPage() {
  const investorBenefits = [
    {
      icon: <Image src="/icons/invest/6.png" alt="High-Resilience Industry" width={48} height={48} className="w-12 h-12" />,
      title: "Access to a High-Growth, High-Resilience Industry",
      description: "Tap into one of the most dynamic and essential sectors in global trade."
    },
    {
      icon: <Image src="/icons/invest/9.png" alt="Full Transparency" width={48} height={48} className="w-12 h-12" />,
      title: "Full Transparency and Financial Reporting",
      description: "Benefit from structured performance updates, detailed disclosures, and clear communication at every stage."
    },
    {
      icon: <Image src="/icons/invest/7.png" alt="Attractive Return" width={48} height={48} className="w-12 h-12" />,
      title: "Attractive Return on Investment with Asset-Backed Security",
      description: "We pride ourselves on on-time deliveries, supported by strict airline schedules that minimize the risk of delays."
    },
    {
      icon: <Image src="/icons/invest/8.png" alt="Strategic Partnership" width={48} height={48} className="w-12 h-12" />,
      title: "Strategic Partnership in a Scaling Global Brand",
      description: "Join a forward-moving company with ambitious expansion plans across key international markets."
    },
    {
      icon: <Image src="/icons/invest/10.png" alt="Active Role" width={48} height={48} className="w-12 h-12" />,
      title: "Active Role in Shaping the Future of Maritime Logistics",
      description: "As an investor, you gain a voice in strategic decisions and development plans—not just a return, but a real seat at the table."
    }
  ];

  return (
    <main className="flex-1 flex flex-col gap-12 sm:gap-20 md:gap-28 lg:gap-36" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] mt-4 md:mt-8 lg:mt-12">
        <div className="relative flex items-center rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-center bg-cover w-full h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] shadow-xl md:shadow-2xl shadow-black/20 md:shadow-black/30 overflow-hidden">
          {/* Enhanced Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-[2rem] md:rounded-[3rem] z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 flex md:px-20 px-8 flex-col justify-center gap-8 max-w-6xl w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-white rounded-full w-fit">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-900 text-sm font-medium">Investment Opportunities</span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-6">
              <h1 className="text-white w-full font-raleway font-light text-3xl md:text-4xl lg:text-5xl leading-[0.7] tracking-tight max-w-6xl" style={{ lineHeight: '1.05' }}>
                Invest With Us
              </h1>
              <h2 className="font-light text-white text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                Empowering Growth in Maritime Trade & Logistics
              </h2>
            </div>

            {/* Classic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="#start-conversation">
                <button className="group relative bg-white text-gray-900 hover:bg-gray-50 px-10 py-4 rounded-lg font-raleway font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 transform hover:-translate-y-1 active:translate-y-0">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Submit your interest
                  </span>
                </button>
              </Link>
              <Link href="#investment-opportunities">
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

          {/* Hero Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/icons/invest/invest.jpeg"
              alt="Invest With Us Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button 
              onClick={() => {
                const investmentSection = document.querySelector('#investment-opportunities');
                if (investmentSection) {
                  investmentSection.scrollIntoView({ behavior: 'smooth' });
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

      {/* Description Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-1 md:py-2 lg:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-3">
              <p className="text-base text-gray-600 leading-relaxed">
                At Moon Navigation and Trading Co., we are opening the door to investment partners who believe in the power of maritime trade, logistics infrastructure, and regional growth.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                As a trusted name in shipping, logistics, and vessel operations since 2010, We are now offering tailored investment opportunities designed to generate returns and create impact.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Whether you are an individual investor, strategic partner, or venture capitalist, this is your opportunity to be part of something truly transformative.
              </p>
            </div>
            
            {/* Right: Empty space (no image) */}
            <div className="hidden lg:block">
              {/* Empty right column to maintain layout */}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Investment Opportunities */}
      <section id="investment-opportunities" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Investment Models</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Types of Investment Opportunities
          </h2>
          
          <h3 className="text-lg lg:text-xl font-light text-gray-600 mb-4">
            Flexible Models Designed to Match Your Goals
          </h3>
          
          <p className="text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We offer a variety of structured investment models that allow you to contribute to our growth — while choosing the level of engagement and return that fits your strategy.
          </p>
        </div>

        {/* Investment Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* 1. Joint Venture Partnerships */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">Joint Venture Partnerships</h4>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Co-own or co-develop a service line, region, or project with us.
            </p>
            <ul className="space-y-3">
              {['Shared capital & operational input', 'Flexible partnership structure', 'Profit distribution as per agreement'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Asset-Based Investment */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">Asset-Based Investment</h4>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Invest directly in vessels, containers, transport vehicles, or equipment—managed by us.
            </p>
            <ul className="space-y-3">
              {['Earn through leasing/rental revenue', 'Fixed income or profit-sharing returns', 'Clear asset ownership with flexible exit plans', 'Resale options available'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Project-Based Financing */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">Project-Based Financing</h4>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Fund specific infrastructure or service development initiatives.
            </p>
            <ul className="space-y-3">
              {['Logistics hubs, warehouses, or fleet modernization', 'Fixed project terms with defined ROI', 'Minimal operational involvement'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Revenue-Sharing Agreements */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">Revenue-Sharing Agreements</h4>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Invest in a particular revenue stream (e.g., vessel rentals, container leasing).
            </p>
            <ul className="space-y-3">
              {['Receive regular income from operations', 'Low-risk, high-transparency model', 'Great for passive investors'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Convertible Notes / Debt Investment */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">Convertible Notes / Debt Investment</h4>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Provide structured capital with fixed interest returns and the option to convert to equity later.
            </p>
            <ul className="space-y-3">
              {['Low-risk entry', 'Predictable income', 'Future equity participation, if desired'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Equity Investment */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-blue-100/80 rounded-xl flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-300">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg md:text-xl font-medium text-gray-900">Equity Investment</h4>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Gain long-term ownership and participate in the company&apos;s overall growth and profitability.
            </p>
            <ul className="space-y-3">
              {['Company shares with capital appreciation', 'Annual dividends based on financial performance', 'Strategic participation and advisory involvement (for major shareholders)'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What You Gain as an Investor */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-xs md:text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Investor Benefits</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6">
              What You Gain as an Investor
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partnering with Moon Navigation and Trading Co. means more than just financial returns — it means becoming part of a bold vision shaping the future of maritime logistics.
            </p>
          </div>

          {/* Benefits Grid - First Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/invest/7.png" alt="Strong Financial Returns" width={48} height={48} className="w-8 md:w-12 h-8 md:h-12" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 md:mb-4">
                Strong Financial Returns
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Competitive returns backed by our proven track record in maritime logistics.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/invest/9.png" alt="Risk Management" width={48} height={48} className="w-8 md:w-12 h-8 md:h-12" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 md:mb-4">
                Risk Management
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Diversified portfolio approach with transparent risk assessment and mitigation strategies.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/invest/8.png" alt="Strategic Partnership" width={48} height={48} className="w-8 md:w-12 h-8 md:h-12" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 md:mb-4">
                Strategic Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Active involvement in decision-making and strategic planning for major investments.
              </p>
            </div>
          </div>

          {/* Second Row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/invest/6.png" alt="Market Growth Exposure" width={48} height={48} className="w-8 md:w-12 h-8 md:h-12" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 md:mb-4">
                Market Growth Exposure
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Access to growing maritime trade markets and regional logistics expansion opportunities.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image src="/icons/invest/10.png" alt="Industry Expertise" width={48} height={48} className="w-8 md:w-12 h-8 md:h-12" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 md:mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Benefit from our 14+ years of experience and established relationships in maritime logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Conversation Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span role="img" aria-label="handshake">🤝</span>
            <span>Partnership</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
            A Partnership Built on Trust
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We value long-term relationships, shared growth, and full transparency. From personalized proposals to detailed business plans and regular reporting—we treat every investor as a true partner in progress.
          </p>
        </div>

        {/* Conversation Card */}
        <div id="start-conversation" className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-xl md:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
          <div className="absolute top-0 right-0 w-60 md:w-80 h-60 md:h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-indigo-100/50 rounded-full blur-3xl"></div>
          
          <div className="relative p-6 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                Let&apos;s Start the Conversation
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                If you are interested in investing, simply submit your interest, and our team will get in touch to arrange a dedicated meeting with you.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 mb-6 md:mb-8 border border-gray-100">
                <h4 className="text-lg md:text-xl font-medium text-gray-900 mb-4 md:mb-6">During this meeting, we will:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {[
                    'Understand your investment goals',
                    'Present suitable opportunities and models',
                    'Share expected returns and timelines',
                    'Discuss your preferred level of involvement',
                    'Organize a clear roadmap for collaboration'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-7 md:w-8 h-7 md:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-medium text-xs md:text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                From the first conversation to structured planning and onboarding, we will guide you through every step — with full transparency, professionalism, and mutual commitment.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/investor-form">
                  <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-5 md:px-6 py-2.5 md:py-3 font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    Submit your interest
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="group bg-white text-blue-600 border-2 border-blue-600 rounded-lg px-5 md:px-6 py-2.5 md:py-3 font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    Contact Us
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>

              <p className="text-xs md:text-sm text-blue-600 mt-6 md:mt-8 text-center font-medium">
                All information shared will be kept confidential and used only for investment discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSearch category="investment-opportunities" />
    </main>
  );
}
