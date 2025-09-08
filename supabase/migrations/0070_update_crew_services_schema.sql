-- Migration to update crew services schemas to match current form structures

-- 1. Update Sign On/Off Crew Members table
-- Drop existing table and recreate with proper structure
DROP TABLE IF EXISTS sign_crew_members CASCADE;

CREATE TABLE sign_crew_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Port details
    port_name TEXT NOT NULL,
    
    -- Vessel details
    vessel_name TEXT NOT NULL,
    vessel_imo NUMERIC NOT NULL,
    vessel_location TEXT, -- 'at_anchor', 'at_berth', 'suez_canal_passage'
    vessel_flag TEXT,
    port_of_crew_change TEXT,
    vessel_eta TEXT,
    vessel_etd TEXT,
    
    -- Sign On/Off flags
    sign_on BOOLEAN DEFAULT FALSE,
    sign_off BOOLEAN DEFAULT FALSE,
    
    -- Sign On crew members (JSON array)
    sign_on_members JSONB DEFAULT '[]'::jsonb,
    
    -- Sign Off crew members (JSON array)  
    sign_off_members JSONB DEFAULT '[]'::jsonb,
    
    -- Special requests and instructions
    special_requests_on TEXT,
    special_requests_off TEXT,
    special_instructions TEXT,
    supporting_files TEXT,
    
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

-- 2. Update Transit Spare Parts table
DROP TABLE IF EXISTS transfer_spare_parts CASCADE;

CREATE TABLE transfer_spare_parts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Port details
    port_name TEXT NOT NULL,
    
    -- Vessel details
    vessel_name TEXT NOT NULL,
    vessel_imo NUMERIC NOT NULL,
    vessel_location TEXT, -- 'at_anchor', 'at_berth', 'suez_canal_passage'
    vessel_flag TEXT,
    port_of_crew_change TEXT,
    vessel_eta TEXT,
    vessel_etd TEXT,
    airport_pickup TEXT,
    special_requests TEXT,
    supporting_files TEXT,
    request TEXT NOT NULL,
    
    -- Spare parts array (JSON)
    spare_parts JSONB DEFAULT '[]'::jsonb,
    
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

-- 3. Update Special Services table
DROP TABLE IF EXISTS special_services CASCADE;

CREATE TABLE special_services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Vessel details
    vessel_name TEXT NOT NULL,
    vessel_imo TEXT NOT NULL,
    port_name TEXT NOT NULL,
    vessel_flag TEXT NOT NULL,
    vessel_eta TEXT NOT NULL,
    vessel_etd TEXT NOT NULL,
    vessel_location TEXT NOT NULL,
    
    -- Service details
    requested_services TEXT NOT NULL,
    supporting_files JSONB DEFAULT '[]'::jsonb,
    
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

-- 4. Update Bunkering Oil Supply table
DROP TABLE IF EXISTS bunkering_oil_supply CASCADE;

CREATE TABLE bunkering_oil_supply (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Vessel details
    vessel_name TEXT NOT NULL,
    vessel_imo TEXT,
    port_name TEXT NOT NULL,
    vessel_flag TEXT NOT NULL,
    vessel_eta TEXT NOT NULL,
    vessel_etd TEXT NOT NULL,
    vessel_location TEXT NOT NULL,
    expected_delivery_date TEXT NOT NULL,
    
    -- Services (JSON structure)
    services JSONB NOT NULL DEFAULT '{}'::jsonb,
    
    -- Additional information
    additional_information TEXT,
    supporting_files JSONB DEFAULT '[]'::jsonb,
    
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

-- 5. Update Suez Canal Transit table (if it exists, otherwise create)
DROP TABLE IF EXISTS suez_canal_transit CASCADE;

CREATE TABLE suez_canal_transit (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Date
    date TEXT NOT NULL,
    
    -- Vessel details (JSON)
    vessel JSONB NOT NULL,
    
    -- Cargo details (JSON)
    cargo JSONB NOT NULL,
    
    -- Unit carriage details (JSON)
    unit_carriage JSONB NOT NULL,
    
    -- Transit details (JSON)
    transit JSONB NOT NULL,
    
    -- Additional services (JSON)
    additional_services JSONB NOT NULL,
    
    -- Additional notes
    additional_notes TEXT,
    supporting_files TEXT,
    
    -- Company details (JSON)
    company_details JSONB NOT NULL,
    quotation_number TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_sign_crew_members_user_id ON sign_crew_members(user_id);
CREATE INDEX idx_sign_crew_members_created_at ON sign_crew_members(created_at);

CREATE INDEX idx_transfer_spare_parts_user_id ON transfer_spare_parts(user_id);
CREATE INDEX idx_transfer_spare_parts_created_at ON transfer_spare_parts(created_at);

CREATE INDEX idx_special_services_user_id ON special_services(user_id);
CREATE INDEX idx_special_services_created_at ON special_services(created_at);

CREATE INDEX idx_bunkering_oil_supply_user_id ON bunkering_oil_supply(user_id);
CREATE INDEX idx_bunkering_oil_supply_created_at ON bunkering_oil_supply(created_at);

CREATE INDEX idx_suez_canal_transit_user_id ON suez_canal_transit(user_id);
CREATE INDEX idx_suez_canal_transit_created_at ON suez_canal_transit(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE sign_crew_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE transfer_spare_parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bunkering_oil_supply ENABLE ROW LEVEL SECURITY;
ALTER TABLE suez_canal_transit ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own crew members" ON sign_crew_members
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own crew members" ON sign_crew_members
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own crew members" ON sign_crew_members
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own crew members" ON sign_crew_members
    FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own spare parts" ON transfer_spare_parts
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own spare parts" ON transfer_spare_parts
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own spare parts" ON transfer_spare_parts
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own spare parts" ON transfer_spare_parts
    FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own special services" ON special_services
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own special services" ON special_services
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own special services" ON special_services
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own special services" ON special_services
    FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own bunkering" ON bunkering_oil_supply
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own bunkering" ON bunkering_oil_supply
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bunkering" ON bunkering_oil_supply
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bunkering" ON bunkering_oil_supply
    FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own suez canal transit" ON suez_canal_transit
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own suez canal transit" ON suez_canal_transit
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own suez canal transit" ON suez_canal_transit
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own suez canal transit" ON suez_canal_transit
    FOR DELETE USING (auth.uid() = user_id);
