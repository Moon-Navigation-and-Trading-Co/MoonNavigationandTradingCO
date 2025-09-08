"use client";
import { sign_in_action } from "@/src/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  
  // Convert URLSearchParams to Message format
  const searchMessage: Message = {
    success: searchParams?.get('success') || '',
    error: searchParams?.get('error') || '',
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Sign In Form Section */}
    <div className="w-full flex items-center justify-start px-4 pl-8 min-h-screen">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left Side - Welcome */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Account Access</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
              Sign In to Your Account
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome back to your Moon Navigation and Trading Co. account.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Secure Login</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">24/7 Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form className="w-full flex flex-col gap-6" action={sign_in_action}>
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
              
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between items-center mb-2 w-full">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <Link 
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" 
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative w-full">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </button>
                </div>
              </div>

              <SubmitButton 
                pendingText="Signing In..." 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg h-12 text-base w-full mt-4 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
              >
                Sign In
              </SubmitButton>
              
              <FormMessage message={searchMessage} />
            </form>

            <div className="w-full flex justify-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link 
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors" 
                  href="/sign-up"
                >
                  Sign Up
                </Link>{' '}
                to get started with our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}