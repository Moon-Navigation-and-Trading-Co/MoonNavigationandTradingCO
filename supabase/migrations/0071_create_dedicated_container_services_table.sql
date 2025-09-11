-- Drop existing container_services table if it exists
DROP TABLE IF EXISTS container_services;

-- Create dedicated container_services table for Container Service Quotation Form
CREATE TABLE container_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    
    -- Routing details (array of routing objects)
    routing JSONB NOT NULL,
    
    -- Cargo specifications (array of cargo specification objects)
    cargo_specifications JSONB NOT NULL DEFAULT '[]',
    
    -- Commodities (array of commodity objects)
    commodities JSONB NOT NULL DEFAULT '[]',
    
    -- Dates
    effective_date DATE,
    expiry_date DATE,
    
    -- Service contract
    service_contract TEXT,
    
    -- Additional services (object with boolean flags and text fields)
    additional_services JSONB DEFAULT '{}',
    
    -- Supporting files (object with boolean flags and file arrays)
    supporting_files JSONB DEFAULT '{}',
    
    -- VAD (Value Added Details) - object with inland container info
    vad JSONB DEFAULT '{}',
    
    -- Company details (flattened for easier querying)
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    
    -- Quotation number
    quotation_number TEXT
);
