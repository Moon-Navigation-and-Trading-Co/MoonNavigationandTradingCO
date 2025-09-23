-- Update contact_requests table schema to match contact form fields

-- Drop existing columns that don't match form
ALTER TABLE "contact_requests" DROP COLUMN IF EXISTS "name";
ALTER TABLE "contact_requests" DROP COLUMN IF EXISTS "number";

-- Add new columns that match form field names
ALTER TABLE "contact_requests" ADD COLUMN "first_name" text NOT NULL;
ALTER TABLE "contact_requests" ADD COLUMN "last_name" text NOT NULL;
ALTER TABLE "contact_requests" ADD COLUMN "phone" text NOT NULL;
ALTER TABLE "contact_requests" ADD COLUMN "country_of_origin" text;
