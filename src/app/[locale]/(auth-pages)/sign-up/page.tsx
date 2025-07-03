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

export default function Signup({ searchParams }: { searchParams: Message }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [phone, setPhone] = useState("")

  if ("success" in searchParams) {
    return (
      <div className="w-full flex-1 font-semibold flex items-center h-full min-h-[500px]  justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-background">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 px-2 md:px-8 py-12">
        {/* Left Side: Title and Description */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-10 md:mb-0 md:pr-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight uppercase">Sign Up</h1>
          <p className="text-sm text-muted-foreground font-normal">
            Create an account with Moon Navigation and Trading Co.
          </p>
        </div>
        {/* Right Side: Form */}
        <form className="w-full md:w-1/2 max-w-xl bg-white dark:bg-background rounded-none flex flex-col gap-0" action={signUpAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            <div className="flex flex-col">
              <Label htmlFor="firstname" className="uppercase text-xs font-bold mb-1 tracking-wide">First Name</Label>
              <Input name="firstname" id="firstname" placeholder="" required className="rounded-none border border-gray-200 h-9 text-xs" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="lastname" className="uppercase text-xs font-bold mb-1 tracking-wide">Last Name</Label>
              <Input name="lastname" id="lastname" placeholder="" required className="rounded-none border border-gray-200 h-9 text-xs" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="title" className="uppercase text-xs font-bold mb-1 tracking-wide">Title</Label>
              <Input name="title" id="title" placeholder="" className="rounded-none border border-gray-200 h-9 text-xs" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="company" className="uppercase text-xs font-bold mb-1 tracking-wide">Company Name</Label>
              <Input name="company" id="company" placeholder="" className="rounded-none border border-gray-200 h-9 text-xs" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="email" className="uppercase text-xs font-bold mb-1 tracking-wide">Email Address</Label>
              <Input name="email" id="email" type="email" placeholder="" required className="rounded-none border border-gray-200 h-9 text-xs" />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="phone" className="uppercase text-xs font-bold mb-1 tracking-wide">Phone Number</Label>
              <PhoneInput
                name="phone"
                id="phone"
                value={phone}
                onChange={setPhone}
                defaultCountry="EG"
                className="rounded-none border border-gray-200 h-9 text-xs"
                placeholder="1234567890"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <Label htmlFor="password" className="uppercase text-xs font-bold mb-1 tracking-wide">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
                minLength={6}
                required
                className="rounded-none border border-gray-200 h-9 text-xs pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                tabIndex={-1}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <Label htmlFor="passwordReconfirm" className="uppercase text-xs font-bold mb-1 tracking-wide">Reconfirm Password</Label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="passwordReconfirm"
                id="passwordReconfirm"
                placeholder=""
                minLength={6}
                required
                className="rounded-none border border-gray-200 h-9 text-xs pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                tabIndex={-1}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
              </Button>
            </div>
          </div>
          <div className="mt-8">
            <SubmitButton
              className="w-full bg-[#181C32] hover:bg-[#23273e] text-white font-semibold rounded-[5px] h-10 text-sm tracking-wide"
              formAction={signUpAction}
              pendingText="Creating account..."
            >
              Create account
            </SubmitButton>
          </div>
          {searchParams && ("error" in searchParams || "success" in searchParams) && (
            <div className="w-full flex-1 font-normal flex items-center h-auto justify-start mt-2">
              {"error" in searchParams && <p className="text-red-500 text-xs">Error occurred: {searchParams.error}</p>}
            </div>
          )}
          <FormMessage message={searchParams} />
          <div className="w-full flex justify-center mt-4">
            <Link href="/sign-in" className="text-xs text-muted-foreground hover:underline">
              Back to Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}