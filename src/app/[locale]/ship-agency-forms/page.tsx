"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import FormTabs from "@/components/form-tabs-variant-1";
import ProjectCargoServicesForm from "@/components/project-cargo-services-form";
import SignCrewMembersForm from "@/components/sign-crew-members-form";
import TransitSparePartsForm from "@/components/transit-spare-parts-form";
import RequestForPdaForm from "@/components/request-for-pda-form";
import BunkeringOilSupplyForm from "@/components/bunkering-oil-supply-form";
import SpecialServicesForm from "@/components/special-services-form";
import SuezCanalTransitForm from "@/components/suez-canal-transit-form";
import { createClient } from "@/utils/supabase/client"; // Make sure this is a client-side import
import { useToast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Spinner from "@/components/spinner";
import { sendFormEmail } from '@/utils/email-helper';

const Page: React.FC = () => {
  const t = useTranslations("forms");
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [user, setUser] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to hold the user
  const { toast } = useToast();
  const router = useRouter();

  // Fetch the authenticated user on component mount
      useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                setUser(user); // User is logged in, set the state
            }
            setIsLoading(false); // Stop loading after checking user
        };

        fetchUser();
    }, [supabase.auth]); // Include supabase.auth in dependency array

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center rounded-3xl">
        <Spinner />
      </div>
    ); // Display loading state while checking
  }

  const submitForm = async (formData: any, formType: any) => {
    setIsSubmitting(true);
    
    try {
      console.log("=== SUBMIT FORM START ===");
      console.log("Form type:", formType);
      console.log("Form data received:", formData);

      // Use the API endpoint instead of direct Supabase calls
      const response = await fetch('/api/supabase-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData: formData,
          formType: formType
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        // Success feedback with reference number
        toast({
          title: "✅ Success!",
          description: `Request submitted successfully! Your reference number is ${result.referenceNumber}`,
          variant: "default",
        });
        
        // Show alert with reference number for immediate visibility
        alert(`✅ Request submitted! Your reference number is ${result.referenceNumber}`);
        
        console.log("Form submitted successfully with reference:", result.referenceNumber);
        
      } else {
        // Error feedback
        const errorMsg = result.error || "Unknown error occurred";
        toast({
          title: "❌ Submission Failed",
          description: errorMsg,
          variant: "destructive",
        });
        
        alert(`❌ Failed: ${errorMsg}`);
        console.error("Form submission failed:", errorMsg);
      }
      
    } catch (error) {
      console.error("Form submit error:", error);
      
      // Network or other error feedback
      const errorMessage = error instanceof Error ? error.message : "Network error occurred";
      toast({
        title: "❌ Network Error",
        description: "Could not submit form. Please check your connection and try again.",
        variant: "destructive",
      });
      
      alert(`❌ Could not submit. ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
      console.log("=== SUBMIT FORM END ===");
    }
  };

  const tabData = [
    {
      id: "pda",
      title: "Request For PDA",
      description: "Request for Port Disbursement Account",
      content: (
        <>
          <RequestForPdaForm isSubmitting={isSubmitting}
            onSubmit={(formData: any) =>
              submitForm(formData, "request_for_pda")
            }
          />
        </>
      ),
    },
    {
      id: "crew",
      title: "Sign On/Off Crew Members",
      description: "Sign on/off crew members",
      content: (
        <>
          <SignCrewMembersForm isSubmitting={isSubmitting}
            onSubmit={(formData: any) =>
              submitForm(formData, "sign_crew_members")
            }
          />
        </>
      ),
    },
    {
      id: "suez-canal",
      title: "Suez Canal Transit",
      description: "Suez Canal transit services",
      content: (
        <>
          <SuezCanalTransitForm isSubmitting={isSubmitting}
            onSubmit={(formData: any) =>
              submitForm(formData, "suez_canal_transit")
            }
          />
        </>
      ),
    },
    {
      id: "transit",
      title: "Transit Spare Parts",
      description: "Transit spare parts",
      content: (
        <>
          <TransitSparePartsForm isSubmitting={isSubmitting}
            onSubmit={(formData: any) =>
              submitForm(formData, "transfer_spare_parts")
            }
          />
        </>
      ),
    },
    {
      id: "bunkering",
      title: "Bunkering | Oil Supply | Ship Chandlery",
      description: "Bunkering, oil supply, and ship chandlery services",
      content: (
        <>
          <BunkeringOilSupplyForm isSubmitting={isSubmitting}
            onSubmit={(formData: any) =>
              submitForm(formData, "bunkering_oil_supply")
            }
          />
        </>
      ),
    },
    {
      id: "special",
      title: "Special Services",
      description: "Special services and custom requests",
      content: (
        <>
          <SpecialServicesForm isSubmitting={isSubmitting}
            onSubmit={(formData: any) =>
              submitForm(formData, "special_services")
            }
          />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="mt-20 flex flex-col gap-5 px-4">
        <h1 className="text-3xl font-raleway font-medium">Ship Agency Services</h1>
        <p className="text-muted-foreground">
          All our ship agency services are exclusively available at all Egyptian ports.*
        </p>
      </div>
                  <FormTabs tabData={tabData} />
    </div>
  );
};

export default Page;
