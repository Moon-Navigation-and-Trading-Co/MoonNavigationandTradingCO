-- Drop the existing table and recreate with correct schema
DROP TABLE IF EXISTS "ocean_freight_quotations";

-- Create ocean_freight_quotations table with correct schema matching the form
CREATE TABLE "ocean_freight_quotations" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "created_at" timestamp with time zone DEFAULT now() NOT NULL,
    "user_id" uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Routing details
    "routing" jsonb NOT NULL, -- Array of from/to country and port combinations
    
    -- Entry mode
    "entry_mode" text NOT NULL, -- itemized or consolidated
    
    -- Itemized data (if entry_mode is itemized)
    "itemized_data" jsonb DEFAULT '[]', -- Array of commodity details
    
    -- Consolidated data (if entry_mode is consolidated)
    "consolidated_data" jsonb DEFAULT '{}', -- Consolidated commodity information
    
    -- Supporting files
    "supporting_files" text,
    
    -- Additional information
    "additional_information" text,
    
    -- Dates
    "effective_date" date NOT NULL,
    "expiry_date" date NOT NULL,
    
    -- Service contract
    "service_contract_number" text,
    
    -- Additional services
    "additional_services" jsonb DEFAULT '{}', -- Contains all service checkboxes and other_details
    
    -- Company details
    "company_name" text NOT NULL,
    "contact_person_name" text NOT NULL,
    "title" text NOT NULL,
    "country_of_origin" text NOT NULL,
    "company_email" text NOT NULL,
    "additional_email" text,
    "phone_number" text NOT NULL,
    "additional_phone_number" text,
    "quotation_number" text
);

-- Add RLS policies
ALTER TABLE "ocean_freight_quotations" ENABLE ROW LEVEL SECURITY;

-- Fix ocean_freight_quotations table schema to match form data

-- Add missing quotation_number column
ALTER TABLE "ocean_freight_quotations" 
ADD COLUMN IF NOT EXISTS "quotation_number" text;

-- Make user_id nullable to allow anonymous submissions
ALTER TABLE "ocean_freight_quotations" 
ALTER COLUMN "user_id" DROP NOT NULL;

-- Update RLS policies to allow anonymous submissions
DROP POLICY IF EXISTS "Users can insert their own ocean freight quotations" ON "ocean_freight_quotations";
DROP POLICY IF EXISTS "Users can view their own ocean freight quotations" ON "ocean_freight_quotations";
DROP POLICY IF EXISTS "Users can update their own ocean freight quotations" ON "ocean_freight_quotations";
DROP POLICY IF EXISTS "Users can delete their own ocean freight quotations" ON "ocean_freight_quotations";

-- Create new policies that allow both authenticated and anonymous users
CREATE POLICY "Allow insert ocean freight quotations" ON "ocean_freight_quotations"
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow view ocean freight quotations" ON "ocean_freight_quotations"
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow update ocean freight quotations" ON "ocean_freight_quotations"
    FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow delete ocean freight quotations" ON "ocean_freight_quotations"
    FOR DELETE USING (auth.uid() = user_id OR user_id IS NULL);

-- Add index for quotation_number
CREATE INDEX IF NOT EXISTS idx_ocean_freight_quotations_quotation_number 
ON ocean_freight_quotations(quotation_number); 