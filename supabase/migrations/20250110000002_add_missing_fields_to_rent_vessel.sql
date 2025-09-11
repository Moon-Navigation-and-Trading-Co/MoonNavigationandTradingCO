-- Add missing fields to rent_vessel table
-- Execute this script on your Supabase database

-- Add missing fields to rent_vessel table
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS drop_off_location TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS duration_unit TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS trading_area TEXT;

-- Make optional fields nullable in rent_vessel
ALTER TABLE rent_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN detailed_location DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN drop_off_location DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN trading_area DROP NOT NULL;

-- Add constraints for the new fields
ALTER TABLE rent_vessel ADD CONSTRAINT check_duration_unit 
    CHECK (duration_unit IS NULL OR duration_unit IN ('days', 'weeks', 'months'));

-- Add comments for documentation
COMMENT ON COLUMN rent_vessel.drop_off_location IS 'Drop-off location for vessel rental';
COMMENT ON COLUMN rent_vessel.duration_unit IS 'Unit for rental duration (days, weeks, months)';
COMMENT ON COLUMN rent_vessel.trading_area IS 'Trading area for vessel operations during rental';
