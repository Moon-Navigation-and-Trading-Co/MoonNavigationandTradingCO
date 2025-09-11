-- Fix critical database schema mismatches for vessel forms
-- Execute this script directly on the remote Supabase database

-- 1. Fix buy_vessel table field names and add missing fields
ALTER TABLE buy_vessel RENAME COLUMN vessel_type TO container_type;
ALTER TABLE buy_vessel RENAME COLUMN vessel_number TO container_number;
ALTER TABLE buy_vessel RENAME COLUMN vessel_condition TO container_condition;
ALTER TABLE buy_vessel RENAME COLUMN delivery_date TO pick_up_date;

-- Make optional fields nullable in buy_vessel
ALTER TABLE buy_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE buy_vessel ALTER COLUMN detailed_location DROP NOT NULL;

-- 2. Fix rent_vessel table field names and add missing fields
ALTER TABLE rent_vessel RENAME COLUMN vessel_type TO container_type;
ALTER TABLE rent_vessel RENAME COLUMN vessel_number TO container_number;
ALTER TABLE rent_vessel RENAME COLUMN vessel_condition TO container_condition;
ALTER TABLE rent_vessel RENAME COLUMN delivery_date TO pick_up_date;

-- Add missing fields to rent_vessel table
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS drop_off_location TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS duration_unit TEXT;
ALTER TABLE rent_vessel ADD COLUMN IF NOT EXISTS trading_area TEXT;

-- Make optional fields nullable in rent_vessel
ALTER TABLE rent_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN detailed_location DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN drop_off_location DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN trading_area DROP NOT NULL;

-- 3. Add constraints for the new fields
ALTER TABLE rent_vessel ADD CONSTRAINT check_duration_unit 
    CHECK (duration_unit IS NULL OR duration_unit IN ('days', 'weeks', 'months'));

-- 4. Add comments for documentation
COMMENT ON COLUMN rent_vessel.drop_off_location IS 'Drop-off location for vessel rental';
COMMENT ON COLUMN rent_vessel.duration_unit IS 'Unit for rental duration (days, weeks, months)';
COMMENT ON COLUMN rent_vessel.trading_area IS 'Trading area for vessel operations during rental';
COMMENT ON COLUMN buy_vessel.container_type IS 'Type of vessel/container';
COMMENT ON COLUMN buy_vessel.container_number IS 'Number of vessels/containers';
COMMENT ON COLUMN buy_vessel.container_condition IS 'Condition of vessel/container (new, used)';
COMMENT ON COLUMN buy_vessel.pick_up_date IS 'Date for vessel pickup/delivery';
COMMENT ON COLUMN rent_vessel.container_type IS 'Type of vessel/container';
COMMENT ON COLUMN rent_vessel.container_number IS 'Number of vessels/containers';
COMMENT ON COLUMN rent_vessel.container_condition IS 'Condition of vessel/container (new, used)';
COMMENT ON COLUMN rent_vessel.pick_up_date IS 'Date for vessel pickup/delivery';
