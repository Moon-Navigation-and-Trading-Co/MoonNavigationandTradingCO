-- Fix rent_vessel table - Run this in Supabase SQL Editor
-- This script ensures the rent_vessel table exists with the correct schema

-- Drop and recreate the table to ensure clean state
DROP TABLE IF EXISTS rent_vessel CASCADE;

-- Create rent_vessel table
CREATE TABLE rent_vessel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Vessel details
    vessel_type TEXT NOT NULL,
    vessel_condition TEXT NOT NULL,
    vessel_number NUMERIC NOT NULL,
    rental_duration NUMERIC NOT NULL,
    duration_unit TEXT,
    
    -- Delivery details
    delivery_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT,
    detailed_location TEXT,
    
    -- Trading and specifications
    trading_area TEXT,
    required_specifications TEXT,
    
    -- Budget
    budget NUMERIC,
    
    -- Additional information
    additional_information TEXT,
    
    -- Company details
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

-- Add constraints
ALTER TABLE rent_vessel ADD CONSTRAINT check_duration_unit 
    CHECK (duration_unit IS NULL OR duration_unit IN ('days', 'weeks', 'months'));

-- Enable RLS
ALTER TABLE rent_vessel ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can insert their own vessel data" ON rent_vessel
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own vessel data" ON rent_vessel
    FOR SELECT USING (auth.uid() = user_id);

-- Add comments
COMMENT ON TABLE rent_vessel IS 'Vessel rental requests';
COMMENT ON COLUMN rent_vessel.duration_unit IS 'Unit for rental duration (days, weeks, months)';
COMMENT ON COLUMN rent_vessel.drop_off_location IS 'Drop-off location for vessel rental';
COMMENT ON COLUMN rent_vessel.trading_area IS 'Trading area for vessel operations during rental';
