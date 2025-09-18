-- Allow anonymous submissions to inland services tables
-- Make user_id nullable to allow anonymous submissions
ALTER TABLE international_inland_services 
ALTER COLUMN user_id DROP NOT NULL;

ALTER TABLE local_inland_services 
ALTER COLUMN user_id DROP NOT NULL;

ALTER TABLE container_inland_services 
ALTER COLUMN user_id DROP NOT NULL;

-- Update RLS policies to allow anonymous insertions for international_inland_services
DROP POLICY IF EXISTS "Users can insert own international_inland_services" ON international_inland_services;
DROP POLICY IF EXISTS "Users can view own international_inland_services" ON international_inland_services;
DROP POLICY IF EXISTS "Users can update own international_inland_services" ON international_inland_services;

-- Create new policies that allow anonymous insertions
CREATE POLICY "Anyone can insert international_inland_services" ON international_inland_services
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own international_inland_services" ON international_inland_services
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own international_inland_services" ON international_inland_services
    FOR UPDATE USING (auth.uid() = user_id);

-- Update RLS policies to allow anonymous insertions for local_inland_services
DROP POLICY IF EXISTS "Users can insert own local_inland_services" ON local_inland_services;
DROP POLICY IF EXISTS "Users can view own local_inland_services" ON local_inland_services;
DROP POLICY IF EXISTS "Users can update own local_inland_services" ON local_inland_services;

-- Create new policies that allow anonymous insertions
CREATE POLICY "Anyone can insert local_inland_services" ON local_inland_services
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own local_inland_services" ON local_inland_services
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own local_inland_services" ON local_inland_services
    FOR UPDATE USING (auth.uid() = user_id);

-- Update RLS policies to allow anonymous insertions for container_inland_services
DROP POLICY IF EXISTS "Users can insert own container_inland_services" ON container_inland_services;
DROP POLICY IF EXISTS "Users can view own container_inland_services" ON container_inland_services;
DROP POLICY IF EXISTS "Users can update own container_inland_services" ON container_inland_services;

-- Create new policies that allow anonymous insertions
CREATE POLICY "Anyone can insert container_inland_services" ON container_inland_services
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own container_inland_services" ON container_inland_services
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own container_inland_services" ON container_inland_services
    FOR UPDATE USING (auth.uid() = user_id);

-- Allow admin users to view all submissions
CREATE POLICY "Admins can view all international_inland_services" ON international_inland_services
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

CREATE POLICY "Admins can view all local_inland_services" ON local_inland_services
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    );

CREATE POLICY "Admins can view all container_inland_services" ON container_inland_services
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM users 
            WHERE users.id = auth.uid() 
            AND users.role = 'admin'
        )
    ); 