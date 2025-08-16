"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import CustomsClearanceForm from '@/components/customs-clearance-form';

export default function CustomsClearanceFormsPage() {
  const t = useTranslations('forms');

  const handleSubmit = (formData: any) => {
    console.log("Customs Clearance Form Submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='mt-20 flex flex-col gap-5 px-4'>
        <h1 className='text-3xl font-bold'>Customs Clearance</h1>
        <p className=''>Professional customs clearance services for your import/export needs</p>
      </div>
      
      <div className="w-full mt-16 mx-auto flex flex-col my-10">
        <div className="pb-10 px-4">
          <h1 className="text-3xl font-semibold mb-8 text-center">Customs Clearance Service</h1>
          <h1 className="text-center">Professional customs clearance and documentation services</h1>
        </div>

        <div className="relative bg-secondary rounded-t-3xl overflow-hidden">
          <div className="flex relative z-10">
            <button className="flex-1 px-1 py-3 text-xs sm:text-sm rounded-t-xl font-medium transition-colors focus:outline-none text-primary rounded-tl-2xl rounded-tr-2xl">
              Customs Clearance
            </button>
          </div>
          <div className="absolute top-0 h-full bg-blue-100 dark:bg-accent rounded-t-2xl w-full"></div>
        </div>
        
        <div className="p-1 rounded-3xl rounded-t-sm bg-blue-100 dark:bg-accent">
          <div className="bg-background dark:bg-secondary rounded-3xl py-6 px-4 sm:px-6 shadow-sm">
            <h3 className="text-3xl font-semibold mb-10 text-center">
              Customs Clearance Quotation Form
            </h3>
            <CustomsClearanceForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
} 