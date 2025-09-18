-- Allow anonymous submissions to ocean_freight_quotation table
-- Make user_id nullable to allow anonymous submissions
ALTER TABLE ocean_freight_quotation 
ALTER COLUMN user_id DROP NOT NULL;

-- Update RLS policies to allow anonymous insertions
DROP POLICY IF EXISTS "Users can insert own ocean_freight_quotation" ON ocean_freight_quotation;
DROP POLICY IF EXISTS "Users can view own ocean_freight_quotation" ON ocean_freight_quotation;
DROP POLICY IF EXISTS "Users can update own ocean_freight_quotation" ON ocean_freight_quotation;

-- Create new policies that allow anonymous insertions
CREATE POLICY "Anyone can insert ocean_freight_quotation" ON ocean_freight_quotation
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own ocean_freight_quotation" ON ocean_freight_quotation
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own ocean_freight_quotation" ON ocean_freight_quotation
    FOR UPDATE USING (auth.uid() = user_id);

-- Allow admin users to view all submissions
CREATE POLICY "Admins can view all ocean_freight_quotation" ON ocean_freight_quotation
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );
