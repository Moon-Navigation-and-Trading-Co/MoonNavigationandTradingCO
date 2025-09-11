-- Add missing fields to special_services table for transit spare parts form

-- Add missing vessel fields
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS port_of_crew_change TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS airport_pickup TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS expected_arrival_date TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS special_requests TEXT;

-- Add spare parts data as JSONB array
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS spare_parts JSONB DEFAULT '[]'::jsonb;

-- Remove port_name field since it was removed from the form
ALTER TABLE special_services DROP COLUMN IF EXISTS port_name;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_special_services_expected_arrival_date ON special_services(expected_arrival_date);
CREATE INDEX IF NOT EXISTS idx_special_services_airport_pickup ON special_services(airport_pickup);
