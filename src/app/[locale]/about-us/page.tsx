'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="p-6 md:p-16 bg-white text-gray-800">
      {/* Hero Image */}
      <section className="relative w-full h-[60vh] mb-12 rounded-2xl overflow-hidden">
        <Image
          src="/aboutUsPage.png"
          alt="Container ships passing through the Suez Canal"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Who Are We */}
      <section className="flex flex-col lg:flex-row gap-10 mb-20 items-center">
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-8">
          <Image
            src="/teamAtPort.jpg"
            alt="Moon Navigation team working at the port"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Who Are We?</h1>
          <p className="mb-4 leading-relaxed">
            We are Moon Navigation and Trading Co., headquartered in Egypt and recognized as a leading provider
            of maritime services, logistics, and global trade solutions. With deep industry experience, we deliver
            ship agency, ocean freight, inland transport, air freight, ship management, transit cargo handling, and
            international trading support.
          </p>
          <p className="leading-relaxed">
            Our commitment to quality, sustainability, and client satisfaction drives us to innovate and exceed
            expectations. We tailor solutions to modern business needs, setting ourselves apart as trusted partners
            across the shipping and logistics sectors.
          </p>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="flex flex-col lg:flex-row justify-between gap-10 mb-20">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Foundation – 2010</h2>
          <p className="mb-4 leading-relaxed">
            Moon Navigation and Trading Co. was founded in September 2010. Based in Egypt, we use our strategic
            location to serve the Suez Canal, a key global shipping route.
          </p>
          <p className="mb-4 leading-relaxed">
            This location provides unmatched access to international trade, placing us at the core of global logistics.
            We provide reliable navigation, freight, and trade solutions that meet today's demanding business needs.
          </p>
          <p className="leading-relaxed">
            Our strength lies in our creative approach and deep client understanding. As the "unconventional partner,"
            we meet challenges with innovation, delivering solutions that go beyond the expected.
          </p>
        </div>
        <div className="relative w-full lg:w-[600px] h-[300px] rounded-xl overflow-hidden">
          <Image
            src="/suez-canal.jpeg"
            alt="Aerial view of Suez Canal with cargo ships"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative w-full h-[40rem] mb-20">
        {/* Background Image */}
        <Image
          src="/ourMission.png"
          alt="Moon Navigation's global mission visual"
          fill
          className="object-cover rounded-xl"
        />

        {/* Overlay Mission Text */}
        <div className="absolute top-1/2 left-1/2  max-w-7xl -translate-x-1/2 -translate-y-1/2 bg-white  p-10  shadow-xl flex flex-col items-center text-center z-10">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To deliver world-class solutions that connect businesses and markets, enabling seamless trade and transport
            across the globe while maintaining the highest standards of professionalism, safety, and environmental
            responsibility.
          </p>
        </div>
      </section>
      {/* Our Vision Section */}
      <section className='relative w-full h-[40rem] mb-20'>
        {/* Background Image */}
          <Image
          src="/ourVision.png"
          alt="Moon Navigation team looking at stats"
          fill
          className="object-cover rounded-xl"
        />
        {/* Overlay vision text */}
         <div className="absolute top-1/2 left-1/2  max-w-7xl -translate-x-1/2 -translate-y-1/2 bg-white  p-10  shadow-xl flex flex-col items-center text-center z-10">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be the premier global partner in maritime, logisitcs,
            and international trade, known for our unwavering commitment
            to quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>
    </main>
  );
}