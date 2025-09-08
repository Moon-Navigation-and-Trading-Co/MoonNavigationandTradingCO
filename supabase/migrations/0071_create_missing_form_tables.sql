-- Migration to create missing form tables that don't exist in the database

-- 1. Create Ship Management table
CREATE TABLE IF NOT EXISTS ship_management (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Vessel details (JSON)
    vessel JSONB NOT NULL,
    
    -- Services (JSON)
    services JSONB NOT NULL,
    
    -- Vessel condition (JSON)
    vessel_condition JSONB NOT NULL,
    
    -- Contract duration (JSON)
    contract_duration JSONB NOT NULL,
    
    -- Additional information
    additional_information TEXT,
    supporting_files JSONB DEFAULT '{}',
    
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

-- 2. Create Sell Container table
CREATE TABLE IF NOT EXISTS sell_container (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Container details
    container_type TEXT NOT NULL,
    container_number NUMERIC NOT NULL,
    container_condition TEXT NOT NULL, -- new, one-trip, used
    
    -- Date and location
    date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT NOT NULL,
    detailed_location TEXT,
    
    -- Rental details
    rental_duration NUMERIC NOT NULL,
    duration_unit TEXT NOT NULL, -- days, weeks, months
    
    -- Budget and additional info
    budget NUMERIC,
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

-- 3. Create Sell Vessel table
CREATE TABLE IF NOT EXISTS sell_vessel (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Vessel details
    vessel_type TEXT NOT NULL,
    
    -- Date and location
    date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT NOT NULL,
    detailed_location TEXT,
    
    -- Trading and specifications
    trading_area TEXT,
    required_specification TEXT NOT NULL,
    
    -- Rental details
    rental_duration NUMERIC NOT NULL,
    duration_unit TEXT NOT NULL, -- days, weeks, months
    
    -- Budget and additional info
    budget NUMERIC,
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

-- 4. Create Ocean Freight Quotation table
CREATE TABLE IF NOT EXISTS ocean_freight_quotation (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Routing details (JSON)
    routing JSONB NOT NULL,
    
    -- Entry mode
    entry_mode TEXT NOT NULL, -- itemized or consolidated
    
    -- Itemized data (if entry_mode is itemized)
    itemized_data JSONB DEFAULT '[]',
    
    -- Consolidated data (if entry_mode is consolidated)
    consolidated_data JSONB DEFAULT '{}',
    
    -- Supporting files
    supporting_files TEXT,
    
    -- Additional information
    additional_information TEXT,
    
    -- Dates
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    
    -- Service contract
    service_contract_number TEXT,
    
    -- Additional services (JSON)
    additional_services JSONB DEFAULT '{}',
    
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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ship_management_user_id ON ship_management(user_id);
CREATE INDEX IF NOT EXISTS idx_ship_management_created_at ON ship_management(created_at);

CREATE INDEX IF NOT EXISTS idx_sell_container_user_id ON sell_container(user_id);
CREATE INDEX IF NOT EXISTS idx_sell_container_created_at ON sell_container(created_at);

CREATE INDEX IF NOT EXISTS idx_sell_vessel_user_id ON sell_vessel(user_id);
CREATE INDEX IF NOT EXISTS idx_sell_vessel_created_at ON sell_vessel(created_at);

CREATE INDEX IF NOT EXISTS idx_ocean_freight_quotation_user_id ON ocean_freight_quotation(user_id);
CREATE INDEX IF NOT EXISTS idx_ocean_freight_quotation_created_at ON ocean_freight_quotation(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE ship_management ENABLE ROW LEVEL SECURITY;
ALTER TABLE sell_container ENABLE ROW LEVEL SECURITY;
ALTER TABLE sell_vessel ENABLE ROW LEVEL SECURITY;
ALTER TABLE ocean_freight_quotation ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for Ship Management
CREATE POLICY "Users can view their own ship management" ON ship_management
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own ship management" ON ship_management
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ship management" ON ship_management
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own ship management" ON ship_management
    FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for Sell Container
CREATE POLICY "Users can view their own sell container" ON sell_container
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own sell container" ON sell_container
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sell container" ON sell_container
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sell container" ON sell_container
    FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for Sell Vessel
CREATE POLICY "Users can view their own sell vessel" ON sell_vessel
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own sell vessel" ON sell_vessel
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sell vessel" ON sell_vessel
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sell vessel" ON sell_vessel
    FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for Ocean Freight Quotation
CREATE POLICY "Users can view their own ocean freight quotation" ON ocean_freight_quotation
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own ocean freight quotation" ON ocean_freight_quotation
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ocean freight quotation" ON ocean_freight_quotation
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own ocean freight quotation" ON ocean_freight_quotation
    FOR DELETE USING (auth.uid() = user_id);

-- Add quotation numbers to quotation_numbers table
INSERT INTO quotation_numbers (table_name, last_number) VALUES
    ('ship_management', 0),
    ('sell_container', 0),
    ('sell_vessel', 0),
    ('ocean_freight_quotation', 0)
ON CONFLICT (table_name) DO NOTHING; 