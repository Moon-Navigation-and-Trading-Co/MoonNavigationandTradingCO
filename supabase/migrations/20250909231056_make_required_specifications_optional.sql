-- Make required_specifications optional in buy_vessel table
ALTER TABLE buy_vessel ALTER COLUMN required_specifications DROP NOT NULL;

-- Make required_specifications optional in rent_vessel table  
ALTER TABLE rent_vessel ALTER COLUMN required_specifications DROP NOT NULL;

-- Make detailed_location optional in buy_vessel table (it was made NOT NULL in migration 0054)
ALTER TABLE buy_vessel ALTER COLUMN detailed_location DROP NOT NULL;

-- Make detailed_location optional in rent_vessel table
ALTER TABLE rent_vessel ALTER COLUMN detailed_location DROP NOT NULL;
