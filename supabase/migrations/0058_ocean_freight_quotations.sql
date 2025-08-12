-- Create ocean_freight_quotations table
CREATE TABLE IF NOT EXISTS "ocean_freight_quotations" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "created_at" timestamp with time zone DEFAULT now() NOT NULL,
    "user_id" uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    "form_type" text NOT NULL,
    "routing" jsonb NOT NULL,
    "cargo_mode" text NOT NULL,
    "itemized_cargo" jsonb,
    "consolidated_cargo" jsonb,
    "supporting_files" text,
    "additional_information" text,
    "effective_date" date NOT NULL,
    "expiry_date" date NOT NULL,
    "service_contract_number" text,
    "additional_services" jsonb NOT NULL,
    "company_name" text NOT NULL,
    "contact_person" text NOT NULL,
    "title" text NOT NULL,
    "city" text NOT NULL,
    "country" text NOT NULL,
    "email" text NOT NULL,
    "additional_email" text,
    "phone" text NOT NULL,
    "additional_phone" text
);

-- Add RLS policies
ALTER TABLE "ocean_freight_quotations" ENABLE ROW LEVEL SECURITY;

-- Policy for users to insert their own quotations
CREATE POLICY "Users can insert their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for users to view their own quotations
CREATE POLICY "Users can view their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR SELECT USING (auth.uid() = user_id);

-- Policy for users to update their own quotations
CREATE POLICY "Users can update their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR UPDATE USING (auth.uid() = user_id);

-- Policy for users to delete their own quotations
CREATE POLICY "Users can delete their own ocean freight quotations" ON "ocean_freight_quotations"
    FOR DELETE USING (auth.uid() = user_id); 