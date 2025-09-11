-- Create container_services table
CREATE TABLE IF NOT EXISTS container_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    
    -- Routing details
    routing JSONB NOT NULL,
    
    -- Cargo specifications
    cargo_specifications JSONB NOT NULL DEFAULT '[]',
    
    -- Commodities
    commodities JSONB NOT NULL DEFAULT '[]',
    
    -- Dates
    effective_date DATE,
    expiry_date DATE,
    
    -- Service contract
    service_contract TEXT,
    
    -- Additional services
    additional_services JSONB DEFAULT '{}',
    
    -- Supporting files
    supporting_files JSONB DEFAULT '{}',
    
    -- VAD (Value Added Details)
    vad JSONB DEFAULT '{}',
    
    -- Company details
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    additional_email TEXT,
    additional_phone_number TEXT,
    quotation_number TEXT
);
