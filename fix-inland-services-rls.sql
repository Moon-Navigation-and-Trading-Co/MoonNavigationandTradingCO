-- Fix RLS policies for inland services tables to allow anonymous submissions

-- Make user_id nullable for anonymous submissions
ALTER TABLE international_inland_services ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE local_inland_services ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE container_inland_services ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing policies for international_inland_services
DROP POLICY IF EXISTS "Users can insert own international_inland_services" ON international_inland_services;
DROP POLICY IF EXISTS "Users can view own international_inland_services" ON international_inland_services;
DROP POLICY IF EXISTS "Users can update own international_inland_services" ON international_inland_services;

-- Create new policies for international_inland_services
CREATE POLICY "Anyone can insert international_inland_services" ON international_inland_services
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own international_inland_services" ON international_inland_services
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own international_inland_services" ON international_inland_services
    FOR UPDATE USING (auth.uid() = user_id);

-- Drop existing policies for local_inland_services
DROP POLICY IF EXISTS "Users can insert own local_inland_services" ON local_inland_services;
DROP POLICY IF EXISTS "Users can view own local_inland_services" ON local_inland_services;
DROP POLICY IF EXISTS "Users can update own local_inland_services" ON local_inland_services;

-- Create new policies for local_inland_services
CREATE POLICY "Anyone can insert local_inland_services" ON local_inland_services
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own local_inland_services" ON local_inland_services
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own local_inland_services" ON local_inland_services
    FOR UPDATE USING (auth.uid() = user_id);

-- Drop existing policies for container_inland_services
DROP POLICY IF EXISTS "Users can insert own container_inland_services" ON container_inland_services;
DROP POLICY IF EXISTS "Users can view own container_inland_services" ON container_inland_services;
DROP POLICY IF EXISTS "Users can update own container_inland_services" ON container_inland_services;

-- Create new policies for container_inland_services
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