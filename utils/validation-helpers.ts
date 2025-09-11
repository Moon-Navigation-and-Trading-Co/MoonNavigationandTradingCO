import { z } from 'zod';

/**
 * Helper to convert form inputs to numbers safely
 */
const parseNumber = (val: unknown) => {
  if (typeof val === "string") {
    const num = Number(val);
    return isNaN(num) ? undefined : num;
  }
  return val;
};

/**
 * Helper to convert form inputs to dates safely
 */
const parseDate = (val: unknown) => {
  if (typeof val === "string" && val.trim() !== "") {
    const date = new Date(val);
    return isNaN(date.getTime()) ? undefined : date;
  }
  return val;
};

export const createValidationSchema = (t: (key: string) => string) => ({
  // Basic field validations
  requiredString: (key: string) => z.string().min(1, { message: t(key) }),
  
  optionalString: () => z.string().optional(),
  
  // Email validations
  email: () => z.string().email({ message: t("CompanyEmail") }),
  
  optionalEmail: () => z.string().email().optional().or(z.literal('')),
  
  // Number validations
  requiredNumber: (key: string, min?: number, max?: number) =>
    z.preprocess(
      parseNumber,
      z.number({ required_error: t(key) })
        .min(min ?? 0, { message: t(key) })
        .max(max ?? Infinity, { message: t(key) })
    ),
  
  optionalNumber: () => z.preprocess(parseNumber, z.number().optional()),
  
  // Phone validations
  phone: () => z.string().min(10, { message: t("CompanyPhone") }),
  
  optionalPhone: () => z.string().min(10).optional().or(z.literal('')),
  
  // Date validations
  requiredDate: (key: string) =>
    z.preprocess(
      parseDate,
      z.date({ required_error: t(key) })
    ),
  
  optionalDate: () => z.preprocess(parseDate, z.date().optional()),
  
  // File validations
  requiredFile: (key: string) => z.instanceof(File, { message: t(key) }),
  
  optionalFile: () => z.instanceof(File).optional(),
  
  // Array validations
  requiredArray: (key: string, minLength = 1) => 
    z.array(z.string()).min(minLength, { message: t(key) }),
  
  optionalArray: () => z.array(z.string()).optional(),
  
  // Custom validations
  custom: (validator: z.ZodTypeAny, key: string) => 
    validator.refine((val) => val, { message: t(key) })
});

// Common validation patterns
export const commonValidations = {
  name: (t: (key: string) => string) => 
    z.string().min(1, { message: t("CompanyName") }),
  
  email: (t: (key: string) => string) => 
    z.string().email({ message: t("CompanyEmail") }),
  
  phone: (t: (key: string) => string) => 
    z.string().min(10, { message: t("CompanyPhone") }),
  
  message: (t: (key: string) => string) => 
    z.string().min(1, { message: t("CompanyMessage") }),
  
  company: (t: (key: string) => string) => 
    z.string().min(2, { message: t("CompanyName") }),
  
  address: (t: (key: string) => string) => 
    z.string().min(5, { message: t("CompanyAddress") }),
  
  city: (t: (key: string) => string) => 
    z.string().min(2, { message: t("CompanyCity") }),
  
  country: (t: (key: string) => string) => 
    z.string().min(1, { message: t("CompanyCountry") }),
  
  zipCode: (t: (key: string) => string) => 
    z.string().min(3, { message: t("CompanyZipCode") }),
  
  website: (t: (key: string) => string) => 
    z.string().url({ message: t("CompanyWebsite") }).optional().or(z.literal('')),
  
  cargoType: (t: (key: string) => string) => 
    z.string().min(1, { message: t("CargoType") }),
  
  weight: (t: (key: string) => string) => 
    z.number().min(0.1, { message: t("CargoWeight") }),
  
  dimensions: (t: (key: string) => string) => 
    z.string().min(1, { message: t("CargoDimensions") }),
  
  origin: (t: (key: string) => string) => 
    z.string().min(1, { message: t("Origin") }),
  
  destination: (t: (key: string) => string) => 
    z.string().min(1, { message: t("Destination") }),
  
  serviceType: (t: (key: string) => string) => 
    z.string().min(1, { message: t("ServiceType") }),
  
  urgency: (t: (key: string) => string) => 
    z.string().min(1, { message: t("Urgency") }),
  
  budget: (t: (key: string) => string) => 
    z.number().min(0, { message: t("Budget") }),
  
  timeline: (t: (key: string) => string) => 
    z.string().min(1, { message: t("Timeline") }),
  
  specialRequirements: (t: (key: string) => string) => 
    z.string().optional(),
  
  termsAccepted: (t: (key: string) => string) => 
    z.boolean().refine((val) => val === true, { message: t("TermsAccepted") }),
  
  privacyAccepted: (t: (key: string) => string) => 
    z.boolean().refine((val) => val === true, { message: t("PrivacyAccepted") })
}; 