"use client";

import { forgotPasswordAction } from "@/src/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ForgotPassword() {
  const searchParams = useSearchParams();
  const message: Message = {
    message: searchParams.get("error") || searchParams.get("success") || ""
  };
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
      {/* Reset Password Form Section */}
      <div className="w-full flex items-center justify-start px-4 pl-8">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side - Welcome */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Account Recovery</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
                Forgot Your Password?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Enter your email address below and we'll send you a secure link to reset your password and regain access to your account.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Secure Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Quick Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <form className="w-full flex flex-col gap-6" action={forgotPasswordAction}>
                <div className="flex flex-col gap-1 w-full">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </Label>
                  <Input 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    required 
                    className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  />
                </div>

                <SubmitButton 
                  formAction={forgotPasswordAction}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg h-12 text-base w-full mt-4 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Send Reset Link
                </SubmitButton>
                
                <FormMessage message={message} />
              </form>

              <div className="w-full flex justify-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-center text-sm text-gray-600">
                  Remember your password?{' '}
                  <Link 
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors" 
                    href="/sign-in"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
