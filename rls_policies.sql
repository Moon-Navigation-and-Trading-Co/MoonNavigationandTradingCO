-- RLS Policies for request_for_pda table

-- Enable RLS on the table (if not already enabled)
ALTER TABLE request_for_pda ENABLE ROW LEVEL SECURITY;

-- Policy for authenticated users to insert their own data
CREATE POLICY "Users can insert their own PDA requests" ON request_for_pda
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

-- Policy for users to view their own data
CREATE POLICY "Users can view their own PDA requests" ON request_for_pda
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

-- Policy for users to update their own data
CREATE POLICY "Users can update their own PDA requests" ON request_for_pda
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Policy for users to delete their own data
CREATE POLICY "Users can delete their own PDA requests" ON request_for_pda
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);

-- Policy for service role to access all data (for admin operations)
CREATE POLICY "Service role can access all PDA requests" ON request_for_pda
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Policy for anon users to insert data (for public form submissions)
CREATE POLICY "Anonymous users can insert PDA requests" ON request_for_pda
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Optional: Policy for authenticated users to view all data (if you want users to see all submissions)
-- Uncomment the following if you want users to see all PDA requests:
-- CREATE POLICY "Authenticated users can view all PDA requests" ON request_for_pda
--     FOR SELECT
--     TO authenticated
--     USING (true);
