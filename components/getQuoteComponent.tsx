import Link from "next/link";
import Image from "next/image";
import RequestQuoteButton from "./RequestQuoteButton";
import { ArrowRight, Clock, CheckCircle, Mail } from "lucide-react";

interface GetQuoteComponentProps {
  topic: string;
  link?: string;
}

export default function GetQuoteComponent({ topic, link = "/ocean-freight-forms" }: GetQuoteComponentProps) {
  return (
    <section className="max-w-7xl mx-auto mt-16 mb-12 px-4 sm:px-6 lg:px-8">
      {/* Main Quote Section */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 border border-blue-100/50 shadow-xl">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl"></div>
        
        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Quick Quote Request</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>
                  Get Your <span className="font-light text-blue-600" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}>{topic}</span> Quote
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl">
                  Experience our streamlined quotation process designed for efficiency and precision.
                </p>
              </div>
              
              {/* Process Steps */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Fill Form</h4>
                    <p className="text-sm text-gray-600">Quick and simple request form</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Assessment</h4>
                    <p className="text-sm text-gray-600">Expert team analyzes requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>Receive Quote</h4>
                    <p className="text-sm text-gray-600">Customized pricing in your email</p>
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Accurate pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Quick response</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Email delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Hassle-free process</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={link} title={`Request a ${topic} Quote`} className="group">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl px-6 py-3 font-medium text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group-hover:scale-105" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>
                    Request Your Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Right: Illustration */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-[2rem] blur-2xl"></div>
                
                {/* Main illustration container */}
                <div className="relative bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 border border-white/50 shadow-lg">
                  <Image
                    src="/quote-illustration.png"
                    alt={`Get your ${topic} quote illustration`}
                    width={500}
                    height={400}
                    className="object-contain w-full h-auto"
                    priority
                  />
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-200/50">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-200/50">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-6 md:p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}>
              Need a Reliable {topic} Solution?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              <Link href="/?scroll=contact" className="text-blue-600 hover:text-blue-700 font-medium underline decoration-2 underline-offset-2 transition-colors">
                Contact us
              </Link>{" "}
              today for a customized {topic} plan that ensures safe, efficient, and cost-effective shipment transportation and navigation.
            </p>
          </div>
          <div className="text-gray-500 italic text-sm lg:text-base lg:text-right">
            &ldquo;Whenever and wherever you need to trust.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
