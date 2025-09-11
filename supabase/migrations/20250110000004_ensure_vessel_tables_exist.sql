-- Ensure vessel tables exist with correct structure
-- This is a safer approach that won't drop existing data

-- Create buy_vessel table if it doesn't exist
CREATE TABLE IF NOT EXISTS buy_vessel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vessel_type TEXT NOT NULL,
    vessel_condition TEXT NOT NULL,
    vessel_number NUMERIC NOT NULL,
    delivery_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    detailed_location TEXT,
    required_specifications TEXT,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Create rent_vessel table if it doesn't exist
CREATE TABLE IF NOT EXISTS rent_vessel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vessel_type TEXT NOT NULL,
    vessel_condition TEXT NOT NULL,
    vessel_number NUMERIC NOT NULL,
    rental_duration NUMERIC NOT NULL,
    duration_unit TEXT,
    delivery_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT,
    detailed_location TEXT,
    trading_area TEXT,
    required_specifications TEXT,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Add missing columns to existing tables if they don't exist
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS vessel_type TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS vessel_condition TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS vessel_number NUMERIC;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS delivery_date DATE;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS pick_up_location TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS detailed_location TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS required_specifications TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS budget NUMERIC;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS additional_information TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS company_name TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS contact_person_name TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS country_of_origin TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS company_email TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS additional_email TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS phone_number TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS additional_phone_number TEXT;
ALTER TABLE buy_vessel ADD COLUMN IF NOT EXISTS quotation_number TEXT;

ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS vessel_type TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS vessel_condition TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS vessel_number NUMERIC;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS rental_duration NUMERIC;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS duration_unit TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS delivery_date DATE;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS pick_up_location TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS drop_off_location TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS detailed_location TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS trading_area TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS required_specifications TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS budget NUMERIC;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS additional_information TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS company_name TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS contact_person_name TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS country_of_origin TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS company_email TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS additional_email TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS phone_number TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS additional_phone_number TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS quotation_number TEXT;

-- Make optional fields nullable
ALTER TABLE buy_vessel ALTER COLUMN detailed_location DROP NOT NULL;
ALTER TABLE buy_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN detailed_location DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN drop_off_location DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN trading_area DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN duration_unit DROP NOT NULL;

-- Add constraints
ALTER TABLE rent_vessel ADD CONSTRAINT IF NOT EXISTS check_duration_unit 
    CHECK (duration_unit IS NULL OR duration_unit IN ('days', 'weeks', 'months'));

-- Enable RLS
ALTER TABLE buy_vessel ENABLE ROW LEVEL SECURITY;
ALTER TABLE rent_vessel ENABLE ROW LEVEL SECURITY;
