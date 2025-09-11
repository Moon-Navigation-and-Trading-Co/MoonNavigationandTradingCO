-- Fix RLS policies for quotation_numbers table
-- Enable RLS on quotation_numbers table
ALTER TABLE quotation_numbers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Authenticated users can read quotation numbers" ON quotation_numbers;
DROP POLICY IF EXISTS "Authenticated users can insert quotation numbers" ON quotation_numbers;
DROP POLICY IF EXISTS "Authenticated users can update quotation numbers" ON quotation_numbers;
DROP POLICY IF EXISTS "Service role can access all quotation numbers" ON quotation_numbers;
DROP POLICY IF EXISTS "Anonymous users can read quotation numbers" ON quotation_numbers;
DROP POLICY IF EXISTS "Anonymous users can insert quotation numbers" ON quotation_numbers;
DROP POLICY IF EXISTS "Anonymous users can update quotation numbers" ON quotation_numbers;

-- Policy for authenticated users to read quotation numbers
CREATE POLICY "Authenticated users can read quotation numbers" ON quotation_numbers
    FOR SELECT
    TO authenticated
    USING (true);

-- Policy for authenticated users to insert quotation numbers
CREATE POLICY "Authenticated users can insert quotation numbers" ON quotation_numbers
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Policy for authenticated users to update quotation numbers
CREATE POLICY "Authenticated users can update quotation numbers" ON quotation_numbers
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Policy for service role to access all quotation numbers (for admin operations)
CREATE POLICY "Service role can access all quotation numbers" ON quotation_numbers
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Policy for anon users to read quotation numbers (for public form submissions)
CREATE POLICY "Anonymous users can read quotation numbers" ON quotation_numbers
    FOR SELECT
    TO anon
    USING (true);

-- Policy for anon users to insert quotation numbers (for public form submissions)
CREATE POLICY "Anonymous users can insert quotation numbers" ON quotation_numbers
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Policy for anon users to update quotation numbers (for public form submissions)
CREATE POLICY "Anonymous users can update quotation numbers" ON quotation_numbers
    FOR UPDATE
    TO anon
    USING (true)
    WITH CHECK (true);

-- Insert initial entries for all form types used in ocean-freight-forms
INSERT INTO quotation_numbers (form_type, current_count) VALUES
('ocean_freight_quotation', 0),
('project_cargo_quotation', 0),
('roll_on_off_quotation', 0),
('heavy_lift_quotation', 0),
('dangerous_cargo_quotation', 0),
('break_bulk_quotation', 0),
('livestock_transportation', 0),
('tankers_quotation', 0)
ON CONFLICT (form_type) DO NOTHING;
