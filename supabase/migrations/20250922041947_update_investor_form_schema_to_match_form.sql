-- Update investor_form table schema to match form field names

-- Drop existing columns that don't match form
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "full_name";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "company_name";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "position_title";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "nationality";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "city_country_residence";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "investor_type";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "investor_type_other";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "investment_range";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "preferred_investment_type";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "preferred_investment_type_other";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "areas_of_interest";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "areas_of_interest_other";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "interest_rate_type";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "fixed_interest_rate";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "background_linkedin";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "investment_interest_reason";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "require_nda";
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "additional_notes";

-- Add new columns that match form field names
ALTER TABLE "investor_form" ADD COLUMN "first_name" text NOT NULL;
ALTER TABLE "investor_form" ADD COLUMN "last_name" text NOT NULL;
ALTER TABLE "investor_form" ADD COLUMN "title" text NOT NULL;
ALTER TABLE "investor_form" ADD COLUMN "organization_name" text;
ALTER TABLE "investor_form" ADD COLUMN "accredited" text;
ALTER TABLE "investor_form" ADD COLUMN "qualified" text;
ALTER TABLE "investor_form" ADD COLUMN "check_size" text;
