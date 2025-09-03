"use client";
import React from "react";
import { useTranslations } from "next-intl";
import FormTabs from "@/components/form-tabs-variant-1";

import LessThanContainerForm from "@/components/less-than-container-form";
import StandardContainerCard from "@/components/standard-container-form";
import ContainerInlandServicesForm from "@/components/container-inland-services-form";
import HSSCard from "@/components/hss-form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { sendFormEmail } from '@/utils/email-helper';
import FAQSearch from "@/components/faq";

const Page: React.FC = () => {
  const t = useTranslations("forms");
  const { toast } = useToast();
  const router = useRouter();

  const submitForm = async (formData: any, formType: any) => {
    try {
      // Send email notification
      await sendFormEmail(formData, formType);
      console.log('Email sent successfully');
      
      toast({
        title: "Success",
        description: "Form submitted successfully",
      });
      
      // Redirect back to the same page to show success
      router.push('/container-services-forms');
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit form, please try again",
        variant: "destructive"
      });
    }
  };

  const tabData = [
    {
      id: "international",
      title: "Less than Container Load",
      description: "Less than Container Load is a shipping method that allows you to ship goods without the need to fill an entire container.",
      content: (
        <>
          <LessThanContainerForm
            onSubmit={(formData: any) => submitForm(formData, "less_than_container_load")}
          />
        </>
      ),
    },
    {
      id: "standard",
      title: "Container Service",
      description: "Container Service handles both standard and oversized containers for shipping goods efficiently.",
      content: (
        <>
          <StandardContainerCard
            onSubmit={(formData: any) => submitForm(formData, "standard_container")}
          />
        </>
      ),
    },
    {
      id: "hss",
      title: "Container H.S.S.",
      description: "Container Handling, Stevedoring & Storage is a shipping method that allows you to handle, stevedore and store goods in a container.",
      content: (
        <>
          <HSSCard
            onSubmit={(formData: any) => submitForm(formData, "handling_stevedoring_storage")}
          />
        </>
      ),
    },
    {
      id: "inland",
      title: "Inland Container Transportation",
      description: "Inland Container Transportation is a shipping method that allows you to transport goods in a container.",
      content: (
        <>
          <ContainerInlandServicesForm
            onSubmit={(formData: any) => submitForm(formData, "container_inland_services")}
          />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <FormTabs tabData={tabData} />
      <FAQSearch category="container" /> 
    </div>
  );
};

export default Page;
