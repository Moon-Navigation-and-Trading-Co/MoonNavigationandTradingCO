-- Fix vessel table field names to match form field names

-- Update buy_vessel table
ALTER TABLE buy_vessel RENAME COLUMN vessel_type TO container_type;
ALTER TABLE buy_vessel RENAME COLUMN vessel_number TO container_number;
ALTER TABLE buy_vessel RENAME COLUMN vessel_condition TO container_condition;
ALTER TABLE buy_vessel RENAME COLUMN delivery_date TO pick_up_date;

-- Make optional fields nullable
ALTER TABLE buy_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE buy_vessel ALTER COLUMN detailed_location DROP NOT NULL;

-- Update rent_vessel table
ALTER TABLE rent_vessel RENAME COLUMN vessel_type TO container_type;
ALTER TABLE rent_vessel RENAME COLUMN vessel_number TO container_number;
ALTER TABLE rent_vessel RENAME COLUMN vessel_condition TO container_condition;
ALTER TABLE rent_vessel RENAME COLUMN delivery_date TO pick_up_date;

-- Make optional fields nullable
ALTER TABLE rent_vessel ALTER COLUMN required_specifications DROP NOT NULL;
ALTER TABLE rent_vessel ALTER COLUMN detailed_location DROP NOT NULL;
