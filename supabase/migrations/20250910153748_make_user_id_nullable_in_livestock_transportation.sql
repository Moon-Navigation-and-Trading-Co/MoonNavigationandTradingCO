-- Make user_id nullable in livestock_transportation table to allow anonymous submissions
ALTER TABLE livestock_transportation ALTER COLUMN user_id DROP NOT NULL;

-- Update the constraint to allow null values
-- (The existing foreign key constraint will still work with null values)
