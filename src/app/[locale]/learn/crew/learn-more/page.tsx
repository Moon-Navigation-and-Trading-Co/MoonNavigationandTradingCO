"use client"

import Image from "next/image";
import GetQuoteComponent from "@/components/getQuoteComponent";
import FAQSearch from "@/components/faq";
import Link from "next/link";
import { Users, Plane, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function CrewLearnMorePage() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Services Overview Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Comprehensive Services</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Our Complete <span className="text-blue-600 font-light">Crew Management Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From onboarding to emergency replacements, we provide end-to-end crew management services for your maritime operations.
            </p>
          </div>
        </div>
      </section>

      {/* Crew Sign-On Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Crew Onboarding</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Crew Sign-On (Onboarding New Crew)
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Our sign-on onboarding authorities work diligently to secure necessary port entry passes and ensure seamless crew integration. We manage all pre-boarding formalities to guarantee that seafarers join their assigned vessels efficiently and in full compliance with international maritime standards.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our comprehensive onboarding process includes visa processing, medical certifications, travel arrangements, and compliance checks. We coordinate with port authorities, immigration services, and maritime regulatory bodies to minimize delays and ensure crew members are fully prepared before departure.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  We coordinate with port authorities to secure necessary entry passes, facilitate smooth access for your crew members, and ensure all documentation meets local and international requirements. Our expertise in maritime regulations ensures a hassle-free onboarding experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Port Entry Passes</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Visa Processing</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Medical Certification</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Travel Coordination</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Regulatory Compliance</span>
              </div>
            </div>

            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-crew-2.jpg" alt="Crew Sign-On Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crew Sign-Off Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-crew-3.jpg" alt="Crew Sign-Off Services" fill className="object-cover" />
              </div>
            </div>

            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Crew Disembarkation</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Crew Sign-Off (Disembarkation and Repatriation)
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We facilitate the comprehensive review of crew members&apos; documents to ensure full compliance with exit formalities and smooth disembarkation processes. Our sign-off procedures are designed to handle all aspects of crew departure with precision and efficiency.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our sign-off process includes exit visa assistance, medical assessments, travel arrangements, and final documentation. We work closely with customs authorities, immigration services, and port officials to ensure an efficient and hassle-free transition for outgoing crew members.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  We provide emergency repatriation support and medical assistance when needed, ensuring the well-being of all crew members. Our expertise in maritime exit procedures guarantees that all regulatory requirements are met and crew members depart safely and legally.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Document Review</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Exit Procedures</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Medical Assessment</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Travel Coordination</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Emergency Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Crew Change Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Emergency Response</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                Emergency Crew Change and Replacement
              </h2>
              
              <div className="space-y-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  We offer rapid crew change solutions for urgent situations that require immediate attention and response. Our emergency services are designed to handle critical situations with speed and precision.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our emergency services cover medical evacuations, illness replacements, destination arrival support, and travel restriction rerouting to ensure vessels remain fully staffed at all times. We maintain a network of qualified crew members ready for immediate deployment.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  We minimize operational risks by providing quick response times and maintaining compliance with all maritime regulations during emergency situations. Our 24/7 support ensures that urgent crew changes are handled efficiently without compromising safety or regulatory compliance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Medical Evacuations</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Rapid Replacement</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">Emergency Support</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">24/7 Availability</span>
              </div>
            </div>

            <div className="order-1 lg:order-1 relative">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/lm-crew-4.jpg" alt="Emergency Crew Change Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetQuoteComponent topic="Crew Management" link="/ship-agency-forms" />
      <FAQSearch category="crew-management" />
    </main>
  );
}
