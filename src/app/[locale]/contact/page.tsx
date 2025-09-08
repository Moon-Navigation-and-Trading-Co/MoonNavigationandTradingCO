import ContactForm from '@/components/contact-form';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 font-raleway">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-8 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-light text-gray-900 mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are here to provide expert assistance for all your logistics and trading needs. Get in touch with our team for any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column: Information & Meeting */}
          <div className="order-2 lg:order-1 space-y-12">
            {/* Meeting Scheduling */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-raleway font-medium">Schedule a Meeting</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-8">
                Use our online meeting scheduling tool to easily book your preferred time for either a virtual meeting or an in-person meeting with a member of our team. Whether you are looking to discuss partnership opportunities or explore how we can best serve your logistics needs, we are here to help.
              </p>
              <Link href="/schedule-meeting">
                <button className="group relative overflow-hidden bg-white text-blue-600 px-6 py-3 rounded-xl font-raleway font-medium text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center gap-2">
                    Schedule a meeting
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                </button>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-raleway font-medium text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">Port Tawfiq 16a | El-Sawahel St,<br/>Suez Governorate, Egypt</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-raleway font-medium text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600 leading-relaxed">Round-the-clock assistance for all your maritime and logistics needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-raleway font-medium text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 leading-relaxed">Experienced maritime professionals committed to delivering exceptional logistics solutions worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-raleway font-medium text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 