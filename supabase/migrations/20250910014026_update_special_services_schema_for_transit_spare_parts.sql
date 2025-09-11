-- Update special_services table schema to match transit spare parts form
-- Add missing fields and fix field name mismatches

-- Add missing vessel fields
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS vessel_location TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS vessel_flag TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS vessel_eta TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS vessel_etd TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS port_of_crew_change TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS airport_pickup TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS special_requests TEXT;

-- Add spare parts data as JSONB array
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS spare_parts JSONB DEFAULT '[]'::jsonb;

-- Fix field name mismatches
-- Rename special_request to requested_services to match form
ALTER TABLE special_services RENAME COLUMN special_request TO requested_services;

-- Remove old fields that don't match form structure
ALTER TABLE special_services DROP COLUMN IF EXISTS at_anchor;
ALTER TABLE special_services DROP COLUMN IF EXISTS at_berth;

-- Update existing fields to be NOT NULL where appropriate based on form requirements
ALTER TABLE special_services ALTER COLUMN vessel_name SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN vessel_imo SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN port_name SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN requested_services SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN company_name SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN contact_person_name SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN title SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN country_of_origin SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN company_email SET NOT NULL;
ALTER TABLE special_services ALTER COLUMN phone_number SET NOT NULL;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_special_services_vessel_imo ON special_services(vessel_imo);
CREATE INDEX IF NOT EXISTS idx_special_services_vessel_name ON special_services(vessel_name);
CREATE INDEX IF NOT EXISTS idx_special_services_port_name ON special_services(port_name);
CREATE INDEX IF NOT EXISTS idx_special_services_spare_parts ON special_services USING GIN(spare_parts);

-- Add comments for documentation
COMMENT ON COLUMN special_services.vessel_location IS 'Vessel location: at_anchor, at_berth, or suez_canal_passage';
COMMENT ON COLUMN special_services.spare_parts IS 'Array of spare parts with details like type, quantity, weight, dimensions, etc.';
COMMENT ON COLUMN special_services.requested_services IS 'Description of requested services (renamed from special_request)';
COMMENT ON COLUMN special_services.port_of_crew_change IS 'Port where crew change will occur';
COMMENT ON COLUMN special_services.airport_pickup IS 'Airport for pickup if applicable';
COMMENT ON COLUMN special_services.special_requests IS 'Any special requests or additional information';
