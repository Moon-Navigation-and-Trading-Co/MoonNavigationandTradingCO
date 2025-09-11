-- Update international_inland_services table to match form structure
ALTER TABLE international_inland_services 
ADD COLUMN IF NOT EXISTS entry_mode TEXT,
ADD COLUMN IF NOT EXISTS itemized_data JSONB,
ADD COLUMN IF NOT EXISTS consolidated_data JSONB,
ADD COLUMN IF NOT EXISTS supporting_files JSONB,
ADD COLUMN IF NOT EXISTS additional_details TEXT,
ADD COLUMN IF NOT EXISTS commercial_terms TEXT,
ADD COLUMN IF NOT EXISTS additional_services JSONB;

-- Update the commodities column to be more flexible
-- (it can now contain either the old commodities array or the new cargo data)
-- No need to change the column type as JSONB is already flexible

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_international_inland_services_entry_mode ON international_inland_services(entry_mode);
CREATE INDEX IF NOT EXISTS idx_international_inland_services_itemized_data ON international_inland_services USING GIN (itemized_data);
CREATE INDEX IF NOT EXISTS idx_international_inland_services_consolidated_data ON international_inland_services USING GIN (consolidated_data); 