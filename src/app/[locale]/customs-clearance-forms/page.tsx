"use client";

import React from 'react';
import CustomsClearanceForm from '@/components/customs-clearance-form';
import { useTranslations } from 'next-intl';

export default function CustomsClearanceFormsPage() {
  const t = useTranslations('customs-clearance');

  const handleSubmit = (formData: any) => {
    // Handle form submission
    console.log('Customs Clearance Form submitted:', formData);
    // You can add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customs Clearance Quotation Request
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Streamline your import/export operations with our comprehensive customs clearance services. 
            We handle all documentation, compliance, and regulatory requirements to ensure smooth cargo movement.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <CustomsClearanceForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
} 