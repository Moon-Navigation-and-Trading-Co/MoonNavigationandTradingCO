-- Fix ContactRequests table schema to match contact form fields
-- This migration ensures the table schema matches the contact form exactly

-- First, check if the table exists and create it if it doesn't
CREATE TABLE IF NOT EXISTS "ContactRequests" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "created_at" timestamp with time zone DEFAULT now()
);

-- Drop old columns if they exist
ALTER TABLE "ContactRequests" DROP COLUMN IF EXISTS "name";
ALTER TABLE "ContactRequests" DROP COLUMN IF EXISTS "number";

-- Add/Update columns to match the contact form schema exactly
DO $$ 
BEGIN
    -- Add first_name column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'first_name') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "first_name" text NOT NULL DEFAULT '';
    END IF;
    
    -- Add last_name column  
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'last_name') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "last_name" text NOT NULL DEFAULT '';
    END IF;
    
    -- Add title column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'title') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "title" text;
    END IF;
    
    -- Add company_name column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'company_name') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "company_name" text;
    END IF;
    
    -- Add email column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'email') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "email" text NOT NULL DEFAULT '';
    END IF;
    
    -- Add phone column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'phone') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "phone" text NOT NULL DEFAULT '';
    END IF;
    
    -- Add country_of_origin column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'country_of_origin') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "country_of_origin" text;
    END IF;
    
    -- Add message column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'message') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "message" text NOT NULL DEFAULT '';
    END IF;
    
    -- Add quotation_number column (optional)
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'ContactRequests' AND column_name = 'quotation_number') THEN
        ALTER TABLE "ContactRequests" ADD COLUMN "quotation_number" text;
    END IF;
END $$;

-- Update any existing records that might have NULL values for required fields
UPDATE "ContactRequests" 
SET 
    "first_name" = COALESCE("first_name", ''),
    "last_name" = COALESCE("last_name", ''),
    "email" = COALESCE("email", ''),
    "phone" = COALESCE("phone", ''),
    "message" = COALESCE("message", '')
WHERE 
    "first_name" IS NULL OR 
    "last_name" IS NULL OR 
    "email" IS NULL OR 
    "phone" IS NULL OR 
    "message" IS NULL;

-- Add constraints to ensure required fields are not NULL
ALTER TABLE "ContactRequests" ALTER COLUMN "first_name" SET NOT NULL;
ALTER TABLE "ContactRequests" ALTER COLUMN "last_name" SET NOT NULL;
ALTER TABLE "ContactRequests" ALTER COLUMN "email" SET NOT NULL;
ALTER TABLE "ContactRequests" ALTER COLUMN "phone" SET NOT NULL;
ALTER TABLE "ContactRequests" ALTER COLUMN "message" SET NOT NULL;

-- Remove default values now that we have proper constraints
ALTER TABLE "ContactRequests" ALTER COLUMN "first_name" DROP DEFAULT;
ALTER TABLE "ContactRequests" ALTER COLUMN "last_name" DROP DEFAULT;
ALTER TABLE "ContactRequests" ALTER COLUMN "email" DROP DEFAULT;
ALTER TABLE "ContactRequests" ALTER COLUMN "phone" DROP DEFAULT;
ALTER TABLE "ContactRequests" ALTER COLUMN "message" DROP DEFAULT;
