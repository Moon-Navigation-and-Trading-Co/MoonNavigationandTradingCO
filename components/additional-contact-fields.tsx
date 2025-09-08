"use client"
import React, { useState } from 'react';
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";
import RequestQuoteButton from './RequestQuoteButton';
import { Mail, Phone } from 'lucide-react';
import { PhoneInput } from '@/components/phone-input';

interface AdditionalContactFieldsProps {
  control: any;
  className?: string;
  fieldPrefix?: string; // Add fieldPrefix prop
}

const AdditionalContactFields: React.FC<AdditionalContactFieldsProps> = ({ 
  control, 
  className = "",
  fieldPrefix = "company_details" // Default to company_details for backward compatibility
}) => {
  const t = useTranslations('Inland-forms');
  const [showAdditionalEmail, setShowAdditionalEmail] = useState(false);
  const [showAdditionalPhone, setShowAdditionalPhone] = useState(false);

  // Build field names based on prefix
  const additionalEmailField = fieldPrefix ? `${fieldPrefix}.additional_email` : 'additional_email';
  const additionalPhoneField = fieldPrefix ? `${fieldPrefix}.additional_phone_number` : 'additional_phone';

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Additional Email Section */}
      <div className="space-y-3">
        {!showAdditionalEmail && (
          <RequestQuoteButton
            variant="outline"
            onClick={() => setShowAdditionalEmail(true)}
            className="w-fit"
          >
            <Mail className="h-4 w-4 mr-2" />
            Add Additional Email
          </RequestQuoteButton>
        )}
        
        {showAdditionalEmail && (
          <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <FormItem>
              <FormLabel>{t('additionalEmail')}</FormLabel>
              <FormControl>
                <Controller
                  control={control}
                  name={additionalEmailField}
                  defaultValue="" // Add default value to prevent uncontrolled to controlled warning
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input 
                        className="max-w-[300px] border-2 rounded-xl" 
                        placeholder="Email" 
                        {...field} 
                      />
                      {error && <p className="text-red-500">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </FormItem>
            
            <RequestQuoteButton
              variant="secondary"
              onClick={() => setShowAdditionalEmail(false)}
              className="w-fit"
            >
              Remove Additional Email
            </RequestQuoteButton>
          </div>
        )}
      </div>

      {/* Additional Phone Section */}
      <div className="space-y-3">
        {!showAdditionalPhone && (
          <RequestQuoteButton
            variant="outline"
            onClick={() => setShowAdditionalPhone(true)}
            className="w-fit"
          >
            <Phone className="h-4 w-4 mr-2" />
            Add Additional Phone
          </RequestQuoteButton>
        )}
        
        {showAdditionalPhone && (
          <div className="space-y-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <FormItem>
              <FormLabel>{t('additionalPhoneNumber')}</FormLabel>
              <FormControl>
                <Controller
                  control={control}
                  name={additionalPhoneField}
                  defaultValue="" // Add default value to prevent uncontrolled to controlled warning
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <PhoneInput
                        value={field.value || ""} // Ensure value is never undefined
                        onChange={(value) => field.onChange(value)}
                        defaultCountry="EG"
                        international
                        countryCallingCodeEditable={false}
                        placeholder="Enter additional phone number"
                        className="max-w-[300px] border-2 rounded-xl"
                      />
                      {error && <p className="text-red-500">{error.message}</p>}
                    </>
                  )}
                />
              </FormControl>
            </FormItem>
            
            <RequestQuoteButton
              variant="secondary"
              onClick={() => setShowAdditionalPhone(false)}
              className="w-fit"
            >
              Remove Additional Phone
            </RequestQuoteButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalContactFields; 