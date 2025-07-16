"use client";
import FAQSearch from "@/components/faq";
import ReasonsGrid from "@/components/ReasonsGrid";
import Image from "next/image";
import Link from "next/link";

export default function InvestPage() {
  return (
    <main className="flex flex-col items-center w-full mt-10" style={{ fontFamily: 'Raleway, sans-serif' }}>
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-0 items-center mt-12 px-4 md:px-8">
        <div className="w-full rounded-[3rem] overflow-hidden mb-12 shadow-lg">
          <div className="relative w-full h-[340px]">
            <Image
              src="/icons/invest/invest.jpeg"
              alt="Invest With Us Hero"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
        <div className="w-full max-w-6xl px-0 pt-0 pb-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400, color: '#3B4B8C' }}>Invest With Us</h1>
            <h2 className="text-2xl md:text-2xl mb-8" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400, color: '#3B4B8C' }}>Empowering Growth in Maritime<br />Trade & Logistics</h2>
            <Link href="#start-conversation">
              <button className="bg-[#3B4B8C] text-white rounded-md px-6 py-2 font-medium text-base shadow hover:bg-[#2d3a6d] mt-2">Submit your interest</button>
            </Link>
          </div>
          <div className="text-gray-700 text-base space-y-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            <p>At Moon Navigation and Trading Co., we are opening the door to investment partners who believe in the power of maritime trade, logistics infrastructure, and regional growth.</p>
            <p>As a trusted name in shipping, logistics, and vessel operations since 2010, we are now offering tailored investment opportunities designed to generate returns and create impact.</p>
            <p>Whether you are an individual investor, strategic partner, or venture capitalist, this is your opportunity to be part of something truly transformative.</p>
          </div>
        </div>
      </div>

      {/* Types of Investment Opportunities - Numbered Paragraphs, No Cards */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-9 py-20">
        <div className="max-w-7xl w-full rounded-2xl shadow-xl bg-[#2B3A89] px-6 md:px-16 py-14 flex flex-col items-center">
          <div className="w-full text-white mb-10">
            <h2 className="text-1xl md:text-3xl mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
              Types of Investment Opportunities
            </h2>
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
              Flexible Models Designed to Match Your Goals
            </h3>
            <p className="mb-6 text-base font-light text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
              We offer a variety of structured investment models that allow you to contribute to our growth — while choosing the level of engagement and return that fits your strategy.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {/* 1 */}
            <div>
              <h4 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}><span className="mr-1">1.</span>Joint Venture Partnerships</h4>
              <p className="mb-2 text-base text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Co-own or co-develop a service line, region, or project with us.
              </p>
              <ul className="list-disc ml-6 text-base space-y-1 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                <li>Shared capital & operational input</li>
                <li>Flexible partnership structure</li>
                <li>Profit distribution as per agreement</li>
              </ul>
            </div>
            {/* 2 */}
            <div>
              <h4 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}><span className="mr-1">2.</span>Asset-Based Investment</h4>
              <p className="mb-2 text-base text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Invest directly in vessels, containers, transport vehicles, or equipment—managed by us.
              </p>
              <ul className="list-disc ml-6 text-base space-y-1 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                <li>Earn through leasing/rental revenue</li>
                <li>Fixed income or profit-sharing returns</li>
                <li>Clear asset ownership with flexible exit plans</li>
                <li>Resale options available</li>
              </ul>
            </div>
            {/* 3 */}
            <div>
              <h4 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}><span className="mr-1">3.</span>Project-Based Financing</h4>
              <p className="mb-2 text-base text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Fund specific infrastructure or service development initiatives.
              </p>
              <ul className="list-disc ml-6 text-base space-y-1 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                <li>Logistics hubs, warehouses, or fleet modernization</li>
                <li>Fixed project terms with defined ROI</li>
                <li>Minimal operational involvement</li>
              </ul>
            </div>
            {/* 4 */}
            <div>
              <h4 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}><span className="mr-1">4.</span>Revenue-Sharing Agreements</h4>
              <p className="mb-2 text-base text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Invest in a particular revenue stream (e.g., vessel rentals, container leasing).
              </p>
              <ul className="list-disc ml-6 text-base space-y-1 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                <li>Receive regular income from operations</li>
                <li>Low-risk, high-transparency model</li>
                <li>Great for passive investors</li>
              </ul>
            </div>
            {/* 5 */}
            <div>
              <h4 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}><span className="mr-1">5.</span>Convertible Notes / Debt Investment</h4>
              <p className="mb-2 text-base text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Provide structured capital with fixed interest returns and the option to convert to equity later.
              </p>
              <ul className="list-disc ml-6 text-base space-y-1 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                <li>Low-risk entry</li>
                <li>Predictable income</li>
                <li>Future equity participation, if desired</li>
              </ul>
            </div>
            {/* 6 */}
            <div>
              <h4 className="text-2xl mb-2 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}><span className="mr-1">6.</span>Equity Investment</h4>
              <p className="mb-2 text-base text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                Gain long-term ownership and participate in the company's overall growth and profitability.
              </p>
              <ul className="list-disc ml-6 text-base space-y-1 text-white" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                <li>Company shares with capital appreciation</li>
                <li>Annual dividends based on financial performance</li>
                <li>Strategic participation and advisory involvement (for major shareholders)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Conversation Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col gap-12 items-center py-20 px-4 md:px-8">
        <div className="max-w-6xl w-full mb-6">
          <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
            <span role="img" aria-label="handshake">🤝</span> A Partnership Built on Trust
          </h3>
          <p className="text-gray-700 text-base text-left max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            We value long-term relationships, shared growth, and full transparency. From personalized proposals to detailed business plans and regular reporting—we treat every investor as a true partner in progress.
          </p>
        </div>
        <div id="start-conversation" className="max-w-6xl w-full bg-blue-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Let's Start the Conversation</h3>
          <p className="text-gray-700 text-base mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>If you are interested in investing, simply submit your interest, and our team will get in touch to arrange a dedicated meeting with you.<br />During this meeting, we will:</p>
          <ul className="list-disc ml-6 text-base text-gray-700 mb-4 space-y-1" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
            <li>Understand your investment goals</li>
            <li>Present suitable opportunities and models</li>
            <li>Share expected returns and timelines</li>
            <li>Discuss your preferred level of involvement</li>
            <li>Organize a clear roadmap for collaboration</li>
          </ul>
          <p className="text-gray-700 text-base mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>From the first conversation to structured planning and onboarding, we will guide you through every step — with full transparency, professionalism, and mutual commitment.</p>
          <div className="flex gap-4 mt-2">
            <Link href="/?scroll=contact">
              <button className="bg-[#3B4B8C] text-white rounded-md px-6 py-2 font-medium text-base shadow hover:bg-[#2d3a6d]">Contact Us</button>
            </Link>
            <Link href="/schedule-meeting">
              <button className="bg-[#3B4B8C] text-white rounded-md px-6 py-2 font-medium text-base shadow hover:bg-[#2d3a6d]">Schedule a Meeting</button>
            </Link>
          </div>
          <p className="text-xs text-blue-700 mt-4" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>All information shared will be kept confidential and used only for investment discussions.</p>
        </div>
      </section>

      {/* What You Gain as an Investor - Custom 3-2 horizontal layout, exact order and spacing */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-20">
        <h2 className="text-3xl md:text-4xl mb-2 text-[#3B4B8C] text-left" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>What You Gain as an Investor</h2>
        <p className="mb-16 text-left text-base md:text-lg text-[#444] max-w-3xl" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
          Partnering with Moon Navigation and Trading Co. means more than just financial returns — it means becoming part of a bold vision shaping the future of maritime logistics.
        </p>
        {/* Custom 3-2 grid, with correct order and centering */}
        <div className="w-full flex flex-col gap-20">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 justify-items-center">
            <div className="flex flex-col items-center text-center min-h-[180px] max-w-xs">
              <Image src="/icons/invest/6.png" alt="High-Resilience Industry" width={64} height={64} className="mb-6" />
              <div className="font-raleway font-semibold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Access to a High-Growth, High-Resilience Industry</div>
              <div className="text-base text-[#444]" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>Tap into one of the most dynamic and essential sectors in global trade.</div>
            </div>
            <div className="flex flex-col items-center text-center min-h-[180px] max-w-xs">
              <Image src="/icons/invest/9.png" alt="Full Transparency" width={64} height={64} className="mb-6" />
              <div className="font-raleway font-semibold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Full Transparency and Financial Reporting</div>
              <div className="text-base text-[#444]" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>Benefit from structured performance updates, detailed disclosures, and clear communication at every stage.</div>
            </div>
            <div className="flex flex-col items-center text-center min-h-[180px] max-w-xs">
              <Image src="/icons/invest/7.png" alt="Attractive Return" width={64} height={64} className="mb-6" />
              <div className="font-raleway font-semibold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Attractive Return on Investment with Asset-Backed Security</div>
              <div className="text-base text-[#444]" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>We pride ourselves on on-time deliveries, supported by strict airline schedules that minimize the risk of delays.</div>
            </div>
          </div>
          {/* Second row: 2 items centered */}
          <div className="flex justify-center gap-x-32 gap-y-12 flex-wrap">
            <div className="flex flex-col items-center text-center min-h-[180px] max-w-xs">
              <Image src="/icons/invest/8.png" alt="Strategic Partnership" width={64} height={64} className="mb-6" />
              <div className="font-raleway font-semibold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Strategic Partnership in a Scaling Global Brand</div>
              <div className="text-base text-[#444]" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>Join a forward-moving company with ambitious expansion plans across key international markets.</div>
            </div>
            <div className="flex flex-col items-center text-center min-h-[180px] max-w-xs">
              <Image src="/icons/invest/10.png" alt="Active Role" width={64} height={64} className="mb-6" />
              <div className="font-raleway font-semibold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>Active Role in Shaping the Future of Maritime Logistics</div>
              <div className="text-base text-[#444]" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>As an investor, you gain a voice in strategic decisions and development plans—not just a return, but a real seat at the table.</div>
            </div>
          </div>
        </div>
      </section>
      <FAQSearch category="investment-opportunities" />
    </main>
  );
}
