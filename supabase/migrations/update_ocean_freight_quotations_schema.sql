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

-- Policy for users to insert their own quotations
CREATE POLICY "Users can insert their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Policy for users to view their own quotations
CREATE POLICY "Users can view their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

-- Policy for users to update their own quotations
CREATE POLICY "Users can update their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

-- Policy for users to delete their own quotations
CREATE POLICY "Users can delete their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR DELETE USING (auth.uid() = user_id OR user_id IS NULL);

-- Add index for quotation_number
CREATE INDEX IF NOT EXISTS idx_ocean_freight_quotations_quotation_number ON ocean_freight_quotations(quotation_number);

-- Update ocean_freight_quotations table to match the form data structure
ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "form_type" TO "entry_mode";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "cargo_mode" TO "entry_mode";

-- Drop the old cargo_mode column since we're renaming form_type to entry_mode
ALTER TABLE "ocean_freight_quotations" 
  DROP COLUMN "cargo_mode";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "itemized_cargo" TO "itemized_data";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "consolidated_cargo" TO "consolidated_data";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "contact_person" TO "contact_person_name";

-- Add country_of_origin column (combining city and country)
ALTER TABLE "ocean_freight_quotations" 
  ADD COLUMN "country_of_origin" text;

-- Update country_of_origin with existing country data
UPDATE "ocean_freight_quotations" 
  SET "country_of_origin" = "country";

-- Make country_of_origin NOT NULL after updating
ALTER TABLE "ocean_freight_quotations" 
  ALTER COLUMN "country_of_origin" SET NOT NULL;

-- Drop the old city and country columns
ALTER TABLE "ocean_freight_quotations" 
  DROP COLUMN "city",
  DROP COLUMN "country";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "email" TO "company_email";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "phone" TO "phone_number";

ALTER TABLE "ocean_freight_quotations" 
  RENAME COLUMN "additional_phone" TO "additional_phone_number";

-- Add quotation_number column if it doesn't exist
ALTER TABLE "ocean_freight_quotations" 
  ADD COLUMN IF NOT EXISTS "quotation_number" text; 