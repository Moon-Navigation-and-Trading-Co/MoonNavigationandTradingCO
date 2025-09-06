'use client'

import { useState } from 'react'
import { signUpAction } from "@/src/app/actions"
import { FormMessage, Message } from "@/components/form-message"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { PhoneInput } from '@/components/phone-input'
import { useSearchParams } from "next/navigation"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [phone, setPhone] = useState("")
  const searchParams = useSearchParams();
  
  // Parse message from URL parameters
  let message: Message | undefined;
  const success = searchParams.get('success');
  const error = searchParams.get('error');
  const messageText = searchParams.get('message');
  
  if (success) {
    message = { success };
  } else if (error) {
    message = { error };
  } else if (messageText) {
    message = { message: messageText };
  }

  if (message && "success" in message) {
    return (
      <div className="w-full flex-1 font-semibold flex items-center h-full min-h-[500px]  justify-center gap-2 p-4">
        <FormMessage message={message} />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Sign Up Form Section */}
      <div className="w-full flex items-center justify-end px-4 pr-8 min-h-screen">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side - Welcome */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>New Account</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
                Create Your Account
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join Moon Navigation and Trading Co. to access our comprehensive logistics solutions. Create your account to manage shipments, track cargo, and explore our services.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Quick Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Secure Account</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Full Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <form className="w-full flex flex-col gap-6" action={signUpAction}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col">
                    <Label htmlFor="firstname" className="text-sm font-raleway font-medium text-gray-700 mb-2">First Name</Label>
                    <Input name="firstname" id="firstname" placeholder="Enter your first name" required className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="lastname" className="text-sm font-raleway font-medium text-gray-700 mb-2">Last Name</Label>
                    <Input name="lastname" id="lastname" placeholder="Enter your last name" required className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="title" className="text-sm font-raleway font-medium text-gray-700 mb-2">Title</Label>
                    <Input name="title" id="title" placeholder="Enter your job title" className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="company" className="text-sm font-raleway font-medium text-gray-700 mb-2">Company Name</Label>
                    <Input name="company" id="company" placeholder="Enter your company name" className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="email" className="text-sm font-raleway font-medium text-gray-700 mb-2">Email Address</Label>
                    <Input name="email" id="email" type="email" placeholder="Enter your email address" required className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="phone" className="text-sm font-raleway font-medium text-gray-700 mb-2">Phone Number</Label>
                    <PhoneInput
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={setPhone}
                      defaultCountry="EG"
                      className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <Label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2">Password</Label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        minLength={6}
                        required
                        className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                        tabIndex={-1}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <Label htmlFor="passwordReconfirm" className="text-sm font-semibold text-gray-700 mb-2">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        name="passwordReconfirm"
                        id="passwordReconfirm"
                        placeholder="Confirm your password"
                        minLength={6}
                        required
                        className="rounded-lg h-12 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                        tabIndex={-1}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <SubmitButton
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg h-12 text-base w-full mt-4 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                  formAction={signUpAction}
                  pendingText="Creating account..."
                >
                  Create Account
                </SubmitButton>
                
                {message && ("error" in message || "success" in message) && (
                  <div className="w-full flex-1 font-normal flex items-center h-auto justify-start mt-2">
                    {"error" in message && <p className="text-red-500 text-xs">Error occurred: {message.error}</p>}
                  </div>
                )}
                {message && <FormMessage message={message} />}
              </form>

              <div className="w-full flex justify-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
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
  )
}