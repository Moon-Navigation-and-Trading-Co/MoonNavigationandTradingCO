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

// Zod schema for validation
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z.string().min(1, { message: "Number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const t = useTranslations("Contact");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
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
      setError("Failed to submit the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full ">
      {submitted ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-center text-primary py-10 font-semibold">
            Submission Successful, thank you!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5">
            <div>
              <Input
                className="border-primary/70 bg-secondary border-2 rounded-xl"
                placeholder={t("contactFormName")}
                id="name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs px-4 pt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className="border-primary/70 border-2 bg-secondary rounded-xl"
                placeholder={t("contactFormCompany")}
                id="companyName"
                {...register("companyName")}
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs px-4 pt-2">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className="border-primary/70 border-2 bg-secondary rounded-xl"
                placeholder={t("contactFormEmail")}
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs px-4 pt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Input
                className="border-primary/70 border-2 bg-secondary rounded-xl"
                placeholder={t("contactFormNumber")}
                type="number"
                id="number"
                {...register("number")}
              />
              {errors.number && (
                <p className="text-red-500 text-xs px-4 pt-2">
                  {errors.number.message}
                </p>
              )}
            </div>
            <div>
              <Textarea
                className="border-primary/70 border-2 bg-secondary rounded-xl"
                placeholder={t("contactFormMessage")}
                id="message"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-xs px-4 pt-2">
                  {errors.message.message}
                </p>
              )}
            </div>
            <Button
              className="bg-primary text-white font-normal"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ContactForm;
