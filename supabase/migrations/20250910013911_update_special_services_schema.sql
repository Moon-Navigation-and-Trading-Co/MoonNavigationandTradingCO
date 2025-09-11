-- Update special_services table to match form data structure

-- Add missing vessel fields
ALTER TABLE special_services 
ADD COLUMN IF NOT EXISTS vessel_location TEXT,
ADD COLUMN IF NOT EXISTS vessel_flag TEXT,
ADD COLUMN IF NOT EXISTS vessel_eta TEXT,
ADD COLUMN IF NOT EXISTS vessel_etd TEXT,
ADD COLUMN IF NOT EXISTS port_of_crew_change TEXT,
ADD COLUMN IF NOT EXISTS airport_pickup TEXT,
ADD COLUMN IF NOT EXISTS special_requests TEXT,
ADD COLUMN IF NOT EXISTS supporting_files JSONB DEFAULT '[]'::jsonb;

-- Add spare parts table
CREATE TABLE IF NOT EXISTS special_services_spare_parts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    special_service_id UUID NOT NULL REFERENCES special_services(id) ON DELETE CASCADE,
    
    -- Spare part details
    type TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    total_weight DECIMAL NOT NULL,
    dimension_unit TEXT NOT NULL DEFAULT 'cm',
    length DECIMAL,
    width DECIMAL,
    height DECIMAL,
    total_cbm DECIMAL NOT NULL,
    input_method TEXT NOT NULL DEFAULT 'dimensions',
    packing_type TEXT NOT NULL,
    packing_type_other TEXT,
    urgency TEXT NOT NULL DEFAULT 'normal'
);

-- Create index for foreign key
CREATE INDEX IF NOT EXISTS idx_special_services_spare_parts_service_id 
ON special_services_spare_parts(special_service_id);

-- Enable RLS for spare parts table
ALTER TABLE special_services_spare_parts ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for spare parts table
CREATE POLICY "Users can view spare parts for their special services" 
ON special_services_spare_parts
FOR SELECT USING (
    special_service_id IN (
        SELECT id FROM special_services WHERE user_id = auth.uid()
    )
);

CREATE POLICY "Users can insert spare parts for their special services" 
ON special_services_spare_parts
FOR INSERT WITH CHECK (
    special_service_id IN (
        SELECT id FROM special_services WHERE user_id = auth.uid()
    )
);

CREATE POLICY "Users can update spare parts for their special services" 
ON special_services_spare_parts
FOR UPDATE USING (
    special_service_id IN (
        SELECT id FROM special_services WHERE user_id = auth.uid()
    )
);

CREATE POLICY "Users can delete spare parts for their special services" 
ON special_services_spare_parts
FOR DELETE USING (
    special_service_id IN (
        SELECT id FROM special_services WHERE user_id = auth.uid()
    )
);
