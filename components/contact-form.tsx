// ContactForm.tsx
"use client"; // Mark this as a client component

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/utils/supabase/client"; // Ensure client-side import
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { sendFormEmail } from '@/utils/email-helper';
import { toast } from "@/hooks/use-toast";
import RequestQuoteButton from './RequestQuoteButton';
import { Mail, Phone } from 'lucide-react';
import { PhoneInput } from "@/components/phone-input";
import { CountrySelect } from "@/components/country-select";

// Zod schema for validation
const schema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  title: z.string().optional(),
  company_name: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  country_of_origin: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: '',
      last_name: '',
      title: '',
      company_name: '',
      email: '',
      phone: '',
      country_of_origin: '',
      message: '',
    },
  });
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);
  const [submitted, set_submitted] = useState(false);
  const [error, set_error] = useState<string | null>(null);
  const [show_additional_email, set_show_additional_email] = useState(false);
  const [show_additional_phone, set_show_additional_phone] = useState(false);
  const [phone_value, set_phone_value] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    set_error(null);
    try {
      const supabase = createClient(); // Initialize the Supabase client

      console.log(data)

      // Send email notification FIRST
      try {
        await sendFormEmail(data, 'contact_request');
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with form submission even if email fails
      }

      const { data: supabaseData, error } = await supabase
        .from("ContactRequests")  // Your Supabase table
        .insert([data]);  // Insert the data

      if (error) {
        console.log(error)
        toast({
          title: "Error",
          description: "Database insert failed, but email was sent",
          variant: "destructive"
        })
      } else {
        toast({
          title: "Success",
          description: "Message sent successfully",
        })
        reset()
      }
    } catch (err) {
      console.error("Error inserting data:", err);
      set_error("Failed to submit the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full ">
      {submitted ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-center text-primary py-10 font-raleway font-medium">
            Submission Successful, thank you!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full font-raleway">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="font-raleway font-medium text-sm text-gray-700 mb-2">First Name</label>
              <Input
                id="firstName"
                {...register("first_name")}
                className="border border-[#E5EAF1] rounded-lg h-12  text-base focus:ring-2 focus:ring-[#283593]"
              />
              {errors.first_name && <span className="text-red-500 text-xs mt-1">{errors.first_name.message}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-raleway font-medium text-sm text-gray-700 mb-2">Last Name</label>
              <Input
                id="lastName"
                {...register("last_name")}
                className="border border-[#E5EAF1] rounded-lg h-12  text-base focus:ring-2 focus:ring-[#283593]"
              />
              {errors.last_name && <span className="text-red-500 text-xs mt-1">{errors.last_name.message}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="title" className="font-raleway font-medium text-sm text-gray-700 mb-2">Title</label>
              <Input
                id="title"
                {...register("title")}
                className="border border-[#E5EAF1] rounded-lg h-12  text-base focus:ring-2 focus:ring-[#283593]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company_name" className="font-raleway font-medium text-sm text-gray-700 mb-2">Company Name</label>
              <Input
                id="company_name"
                {...register("company_name")}
                placeholder="Enter company name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-raleway font-medium text-sm text-gray-700 mb-2">Company Email Address</label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="border border-[#E5EAF1] rounded-lg h-12  text-base focus:ring-2 focus:ring-[#283593]"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="font-raleway font-medium text-sm text-gray-700 mb-2">Phone Number</label>
              <PhoneInput
                id="phone"
                value={phone_value}
                onChange={(value) => {
                  set_phone_value(value as string);
                  setValue("phone", value as string);
                }}
                className="border border-[#E5EAF1] rounded-lg h-12  text-base focus:ring-2 focus:ring-[#283593]"
                defaultCountry="EG"
                international
                countryCallingCodeEditable={false}
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
            </div>
            <div className="flex items-center gap-4">
              <h3 className="font-raleway font-medium text-sm text-gray-700 whitespace-nowrap">Country of Origin</h3>
              <CountrySelect
                value={watch("country_of_origin")}
                onValueChange={(value) => setValue("country_of_origin", value)}
                className="border border-[#E5EAF1] rounded-lg h-12 text-base focus:ring-2 focus:ring-[#283593] flex-1"
                placeholder="Select your country"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label htmlFor="message" className="font-raleway font-medium text-sm text-gray-700 mb-2">Message</label>
            <Textarea
              id="message"
              {...register("message")}
              className="border border-[#E5EAF1] rounded-lg min-h-[120px]  text-base focus:ring-2 focus:ring-[#283593]"
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message.message}</span>}
          </div>
          <div className="flex justify-end mt-8">
            <RequestQuoteButton
              type="submit"
              className="w-[200px] h-12 text-base font-raleway font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </RequestQuoteButton>
          </div>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ContactForm;
