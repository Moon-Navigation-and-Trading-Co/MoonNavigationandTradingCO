"use client";
import { signInAction } from "@/src/app/actions";
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
<div className="min-h-screen w-full flex items-center justify-center font-sans px-4">
<div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
{/* Left Side - Welcome */}
<div className="w-full md:w-1/2 flex flex-col items-start justify-center md:h-[420px] md:pr-8 md:-mt-12">
<h1 className="text-[1.5rem] font-extrabold uppercase leading-tight tracking-tight text-black text-left">WELCOME</h1>
<p className="text-[1rem] font-normal text-black leading-tight mt-0 text-left">Welcome back to your Moon Navigation and Trading Co. account.</p>
</div>
{/* Right Side - Form */}
<div className="w-full md:w-1/2 flex flex-col items-start justify-center md:h-[420px] md:pl-8">
<form className="w-full max-w-md flex flex-col gap-6 items-start" action={signInAction}>
<div className="flex flex-col gap-1 w-full">
<Label htmlFor="email" className="text-xs font-bold tracking-wide text-[#23233C] mb-1 uppercase">LOGIN OR EMAIL</Label>
<Input name="email" id="email" placeholder="" required className="rounded-lg h-12 text-base" />
</div>
<div className="flex flex-col gap-1 w-full">
<div className="flex justify-between items-center mb-1 w-full">
<Label htmlFor="password" className="text-xs font-bold tracking-wide text-[#23233C] uppercase">PASSWORD</Label>
<Link className="text-xs font-semibold text-[#23233C] underline hover:text-primary" href="/forgot-password">
FORGOT PASSWORD?
</Link>
</div>
              <div className="relative w-full">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder=""
                  required
                  className="rounded-lg h-12 text-base pr-10"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#23233C] hover:text-primary focus:outline-none"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </button>
              </div>
</div>
<SubmitButton pendingText="Signing In..." className="bg-[#232B50] text-white font-bold rounded-lg h-12 text-base w-full mt-2 mb-1">
Sign In
</SubmitButton>
<FormMessage message={searchMessage} />
</form>
<div className="w-full flex justify-start mt-6">
<p className="text-left text-sm text-[#23233C]">
If you don&apos;t have an account, you can{' '}
<Link className="font-bold text-primary underline hover:text-primary/80" href="/sign-up">
Sign Up
</Link>{' '}to get started with our services.
</p>
</div>
</div>
</div>
</div>
);
}