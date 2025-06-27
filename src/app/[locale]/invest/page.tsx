"use client";
import Image from "next/image";
import Link from "next/link";

export default function InvestPage() {
  return (
    <main className="flex flex-col items-center w-full bg-white">
      {/* Hero Section */}
      <section className="w-full rounded-t-3xl overflow-hidden mb-0">
        <div className="relative h-[340px] md:h-[360px] rounded-t-3xl overflow-hidden">
          <Image src="/images/invest-hero.jpg" alt="Invest handshake" fill className="object-cover" priority />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#3B4B8C] mb-4">Invest With Us</h1>
            <h2 className="text-2xl md:text-2xl font-normal text-[#3B4B8C] mb-8">Empowering Growth in Maritime<br />Trade & Logistics</h2>
            <Link href="#start-conversation">
              <button className="bg-[#3B4B8C] text-white rounded-full px-6 py-2 font-medium text-base shadow hover:bg-[#2d3a6d] mt-2">Submit your interest</button>
            </Link>
          </div>
          <div className="text-gray-700 text-base space-y-4">
            <p>At Moon Navigation and Trading Co., we are opening the door to investment partners who believe in the power of maritime trade, logistics infrastructure, and regional growth.</p>
            <p>As a trusted name in shipping, logistics, and vessel operations since 2010, we are now offering tailored investment opportunities designed to generate returns and create impact.</p>
            <p>Whether you are an individual investor, strategic partner, or venture capitalist, this is your opportunity to be part of something truly transformative.</p>
          </div>
        </div>
      </section>

      {/* Types of Investment Opportunities - Redesigned */}
      <section className="w-full flex justify-center py-20 bg-[#4856a2] px-2 md:px-0">
        <div className="max-w-7xl w-full grid grid-cols-1 gap-12">
          <div className="text-white mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">Types of Investment Opportunities</h2>
            <h3 className="text-xl font-normal mb-4">Flexible Models Designed to Match Your Goals</h3>
            <p className="mb-8 text-base font-light">We offer a variety of structured investment models that allow you to contribute to our growth — while choosing the level of engagement and return that fits your strategy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col h-full shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-2 text-white">Joint Venture Partnerships</h4>
              <p className="mb-2 text-base font-light text-white/90">Co-own or co-develop a service line, region, or project with us.</p>
              <ul className="list-disc ml-5 text-white/80 text-sm space-y-1">
                <li>Shared capital & operational input</li>
                <li>Flexible partnership structure</li>
                <li>Profit distribution as per agreement</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col h-full shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-2 text-white">Asset-Based Investment</h4>
              <p className="mb-2 text-base font-light text-white/90">Invest directly in vessels, containers, transport vehicles, or equipment—managed by us.</p>
              <ul className="list-disc ml-5 text-white/80 text-sm space-y-1">
                <li>Earn through leasing/rental revenue</li>
                <li>Fixed income or profit-sharing returns</li>
                <li>Clear asset ownership with flexible exit plans</li>
                <li>Resale options available</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col h-full shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-2 text-white">Project-Based Financing</h4>
              <p className="mb-2 text-base font-light text-white/90">Fund specific infrastructure or service development initiatives.</p>
              <ul className="list-disc ml-5 text-white/80 text-sm space-y-1">
                <li>Logistics hubs, warehouses, or fleet modernization</li>
                <li>Fixed project terms with defined ROI</li>
                <li>Minimal operational involvement</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Card 4 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col h-full shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-2 text-white">Revenue-Sharing Agreements</h4>
              <p className="mb-2 text-base font-light text-white/90">Invest in a particular revenue stream (e.g., vessel rentals, container leasing).</p>
              <ul className="list-disc ml-5 text-white/80 text-sm space-y-1">
                <li>Receive regular income from operations</li>
                <li>Low-risk, high-transparency model</li>
                <li>Great for passive investors</li>
              </ul>
            </div>
            {/* Card 5 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col h-full shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-2 text-white">Convertible Notes / Debt Investment</h4>
              <p className="mb-2 text-base font-light text-white/90">Provide structured capital with fixed interest returns and the option to convert to equity later.</p>
              <ul className="list-disc ml-5 text-white/80 text-sm space-y-1">
                <li>Low-risk entry</li>
                <li>Predictable income</li>
                <li>Future equity participation, if desired</li>
              </ul>
            </div>
            {/* Card 6 */}
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col h-full shadow-lg border border-white/20">
              <h4 className="text-lg font-semibold mb-2 text-white">Equity Investment</h4>
              <p className="mb-2 text-base font-light text-white/90">Gain long-term ownership and participate in the company's overall growth and profitability.</p>
              <ul className="list-disc ml-5 text-white/80 text-sm space-y-1">
                <li>Company shares with capital appreciation</li>
                <li>Annual dividends based on financial performance</li>
                <li>Strategic participation and advisory involvement (for major shareholders)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Conversation Section */}
      <section className="w-full flex flex-col gap-12 items-center py-20">
        <div className="max-w-7xl w-full bg-blue-100 rounded-2xl p-8 mb-2">
          <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <span role="img" aria-label="handshake">🤝</span> A Partnership Built on Trust
          </h3>
          <p className="text-gray-700 text-base">We value long-term relationships, shared growth, and full transparency. From personalized proposals to detailed business plans and regular reporting—we treat every investor as a true partner in progress.</p>
        </div>
        <div id="start-conversation" className="max-w-7xl w-full bg-blue-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-2">Let's Start the Conversation</h3>
          <p className="text-gray-700 text-base mb-4">If you are interested in investing, simply submit your interest, and our team will get in touch to arrange a dedicated meeting with you.<br />During this meeting, we will:</p>
          <ul className="list-disc ml-6 text-base text-gray-700 mb-4 space-y-1">
            <li>Understand your investment goals</li>
            <li>Present suitable opportunities and models</li>
            <li>Share expected returns and timelines</li>
            <li>Discuss your preferred level of involvement</li>
            <li>Organize a clear roadmap for collaboration</li>
          </ul>
          <p className="text-gray-700 text-base mb-4">From the first conversation to structured planning and onboarding, we will guide you through every step — with full transparency, professionalism, and mutual commitment.</p>
          <div className="flex gap-4 mt-2">
            <Link href="#">
              <button className="bg-[#3B4B8C] text-white rounded-full px-6 py-2 font-medium text-base shadow hover:bg-[#2d3a6d]">Submit your interest</button>
            </Link>
            <Link href="/contact">
              <button className="bg-[#3B4B8C] text-white rounded-full px-6 py-2 font-medium text-base shadow hover:bg-[#2d3a6d]">Contact Us</button>
            </Link>
          </div>
          <p className="text-xs text-blue-700 mt-4">All information shared will be kept confidential and used only for investment discussions.</p>
        </div>
      </section>

      {/* What You Gain as an Investor - Evenly spaced, horizontally aligned */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#3B4B8C] mb-6">What You Gain as an Investor</h2>
          <p className="text-gray-700 text-base mb-12">Partnering with Moon Navigation and Trading Co. means more than just financial returns — it means becoming part of a bold vision shaping the future of maritime logistics.</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/icons/speed-icon.svg" alt="High-Resilience Industry" width={56} height={56} />
              <h4 className="font-semibold mb-1">Access to a High-Growth, High-Resilience Industry</h4>
              <p className="text-gray-600 text-sm">Tap into one of the most dynamic and essential sectors in global trade.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/icons/returns-icon.svg" alt="Attractive Return" width={56} height={56} />
              <h4 className="font-semibold mb-1">Attractive Return on Investment with Asset-Backed Security</h4>
              <p className="text-gray-600 text-sm">We pride ourselves on on-time deliveries, supported by strict airline schedules that minimize the risk of delays.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/icons/partnership-icon.svg" alt="Strategic Partnership" width={56} height={56} />
              <h4 className="font-semibold mb-1">Strategic Partnership in a Scaling Global Brand</h4>
              <p className="text-gray-600 text-sm">Join a forward-moving company with ambitious expansion plans across key international markets.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/icons/transparency-icon.svg" alt="Transparency" width={56} height={56} />
              <h4 className="font-semibold mb-1">Full Transparency and Financial Reporting</h4>
              <p className="text-gray-600 text-sm">Benefit from structured performance updates, detailed disclosures, and clear communication at every stage.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/icons/active-role-icon.svg" alt="Active Role" width={56} height={56} />
              <h4 className="font-semibold mb-1">Active Role in Shaping the Future of Maritime Logistics</h4>
              <p className="text-gray-600 text-sm">As an investor, you gain a voice in strategic decisions and development plans—not just a return, but a real seat at the table.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
