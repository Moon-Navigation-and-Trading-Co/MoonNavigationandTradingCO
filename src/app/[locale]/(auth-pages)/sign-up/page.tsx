'use client'

import { useState } from 'react'
import { signUpAction } from "@/src/app/actions"
import { FormMessage, Message } from "@/components/form-message"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SmtpMessage } from "../smtp-message"
import { Eye, EyeOff } from 'lucide-react'
import { PhoneInput } from '@/components/phone-input'

export default function Signup({ searchParams }: { searchParams: Message }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [phone, setPhone] = useState("")

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    )
  }

  return (
    <div className="w-full bg-background h-auto min-h-[90svh] flex items-center justify-center">
      <form className="flex-col min-w-96 py-10 max-w-96 mx-auto flex items-center justify-center">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>

        <div className="flex flex-col w-full [&>input]:mb- mt-8 gap-3">
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label htmlFor="firstname">First Name</Label>
              <Input name="firstname" placeholder="First name" required />
            </div>
            <div>
              <Label htmlFor="lastname">Name</Label>
              <Input name="lastname" placeholder="Last name" required />
            </div>

          </div>


          <Label htmlFor="phone">Phone</Label>
          <PhoneInput name='phone' value={phone} onChange={setPhone} defaultCountry="EG" placeholder='1234567890' />
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" placeholder="you@example.com" required />

          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your password"
              minLength={6}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
            </Button>
          </div>

          <Label htmlFor="passwordReconfirm">Reconfirm Password</Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="passwordReconfirm"
              placeholder="Reconfirm your password"
              minLength={6}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
            </Button>
          </div>

          <SubmitButton className='mt-2' formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
      {/* <SmtpMessage /> */}
    </div>
  )
}