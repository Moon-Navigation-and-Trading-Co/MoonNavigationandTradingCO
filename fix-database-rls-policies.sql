-- Comprehensive RLS Policy Fix for Moon Navigation Database
-- This script fixes common RLS policy issues and ensures proper access control

-- 1. Fix error_logs table policies
DROP POLICY IF EXISTS "Allow authenticated users to read error logs" ON error_logs;
DROP POLICY IF EXISTS "Allow service role to insert error logs" ON error_logs;
DROP POLICY IF EXISTS "Allow service role to update error logs" ON error_logs;
DROP POLICY IF EXISTS "Allow anyone to view error logs" ON error_logs;
DROP POLICY IF EXISTS "Users can view their own error logs" ON error_logs;
DROP POLICY IF EXISTS "Admins can view all error logs" ON error_logs;

-- Create comprehensive error_logs policies
CREATE POLICY "Service role can manage all error logs" ON error_logs
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert error logs" ON error_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read error logs" ON error_logs
  FOR SELECT
  TO authenticated
  USING (true);

-- 2. Fix common form tables RLS policies
-- This will be applied to all form submission tables

-- Function to create standard RLS policies for form tables
CREATE OR REPLACE FUNCTION create_form_table_policies(table_name text)
RETURNS void AS $$
BEGIN
  -- Drop existing policies
  EXECUTE format('DROP POLICY IF EXISTS "Service role can manage all %I" ON %I', table_name, table_name);
  EXECUTE format('DROP POLICY IF EXISTS "Anonymous users can insert %I" ON %I', table_name, table_name);
  EXECUTE format('DROP POLICY IF EXISTS "Authenticated users can insert %I" ON %I', table_name, table_name);
  EXECUTE format('DROP POLICY IF EXISTS "Users can view their own %I" ON %I', table_name, table_name);
  EXECUTE format('DROP POLICY IF EXISTS "Admins can view all %I" ON %I', table_name, table_name);

  -- Create new policies
  EXECUTE format('CREATE POLICY "Service role can manage all %I" ON %I FOR ALL TO service_role USING (true) WITH CHECK (true)', table_name, table_name);
  EXECUTE format('CREATE POLICY "Anonymous users can insert %I" ON %I FOR INSERT TO anon WITH CHECK (true)', table_name, table_name);
  EXECUTE format('CREATE POLICY "Authenticated users can insert %I" ON %I FOR INSERT TO authenticated WITH CHECK (true)', table_name, table_name);
  EXECUTE format('CREATE POLICY "Users can view their own %I" ON %I FOR SELECT TO authenticated USING (auth.uid() = user_id)', table_name, table_name);
  EXECUTE format('CREATE POLICY "Admins can view all %I" ON %I FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role IN (''admin'', ''super_admin'')))', table_name, table_name);
END;
$$ LANGUAGE plpgsql;

-- Apply policies to all form tables
SELECT create_form_table_policies('air_freight_forms');
SELECT create_form_table_policies('buy_rent_container_forms');
SELECT create_form_table_policies('buy_rent_vessels_forms');
SELECT create_form_table_policies('container_services_forms');
SELECT create_form_table_policies('customs_clearance_forms');
SELECT create_form_table_policies('handling_stevedoring_storage_forms');
SELECT create_form_table_policies('inland_services_forms');
SELECT create_form_table_policies('international_trading_forms');
SELECT create_form_table_policies('ocean_freight_forms');
SELECT create_form_table_policies('out_gauge_forms');
SELECT create_form_table_policies('ship_agency_forms');
SELECT create_form_table_policies('ship_maintenance_forms');
SELECT create_form_table_policies('ship_management_forms');
SELECT create_form_table_policies('special_services_forms');
SELECT create_form_table_policies('suez_canal_forms');
SELECT create_form_table_policies('request_for_pda');

-- Apply policies to inland services tables specifically
SELECT create_form_table_policies('international_inland_services');
SELECT create_form_table_policies('local_inland_services');
SELECT create_form_table_policies('container_inland_services');

-- Make user_id nullable for anonymous submissions
ALTER TABLE international_inland_services ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE local_inland_services ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE container_inland_services ALTER COLUMN user_id DROP NOT NULL;

-- 3. Fix profiles table policies
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Service role can manage all profiles" ON profiles;

CREATE POLICY "Service role can manage all profiles" ON profiles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 4. Fix users table policies
DROP POLICY IF EXISTS "Service role can manage all users" ON users;
DROP POLICY IF EXISTS "Users can view their own user record" ON users;

CREATE POLICY "Service role can manage all users" ON users
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can view their own user record" ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- 5. Create a function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = user_id 
    AND profiles.role IN ('admin', 'super_admin')
    AND profiles.is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Create a function to get user role
CREATE OR REPLACE FUNCTION get_user_role(user_id uuid)
RETURNS text AS $$
BEGIN
  RETURN (
    SELECT role FROM profiles 
    WHERE profiles.id = user_id 
    AND profiles.is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO service_role;

-- 8. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_is_active ON profiles(is_active);
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON error_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_error_logs_user_id ON error_logs(user_id);

-- 9. Enable RLS on all tables if not already enabled
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Apply to all form tables
DO $$
DECLARE
    table_name text;
    form_tables text[] := ARRAY[
        'air_freight_forms',
        'buy_rent_container_forms', 
        'buy_rent_vessels_forms',
        'container_services_forms',
        'customs_clearance_forms',
        'handling_stevedoring_storage_forms',
        'inland_services_forms',
        'international_trading_forms',
        'ocean_freight_forms',
        'out_gauge_forms',
        'ship_agency_forms',
        'ship_maintenance_forms',
        'ship_management_forms',
        'special_services_forms',
        'suez_canal_forms',
        'request_for_pda',
        'international_inland_services',
        'local_inland_services',
        'container_inland_services'
    ];
BEGIN
    FOREACH table_name IN ARRAY form_tables
    LOOP
        EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', table_name);
    END LOOP;
END $$;

-- 10. Create a test function to verify RLS policies
CREATE OR REPLACE FUNCTION test_rls_policies()
RETURNS TABLE(table_name text, policy_count bigint) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        schemaname||'.'||tablename as table_name,
        count(*) as policy_count
    FROM pg_policies 
    WHERE schemaname = 'public'
    GROUP BY schemaname, tablename
    ORDER BY tablename;
END;
$$ LANGUAGE plpgsql;

-- 11. Add helpful comments
COMMENT ON FUNCTION create_form_table_policies(text) IS 'Creates standard RLS policies for form submission tables';
COMMENT ON FUNCTION is_admin(uuid) IS 'Checks if a user has admin privileges';
COMMENT ON FUNCTION get_user_role(uuid) IS 'Gets the role of a user';
COMMENT ON FUNCTION test_rls_policies() IS 'Tests RLS policy configuration';

-- 12. Create a view for admin dashboard to see all form submissions
CREATE OR REPLACE VIEW admin_form_submissions AS
SELECT 
    'air_freight_forms' as form_type,
    id,
    created_at,
    company_details->>'company_name' as company_name,
    company_details->>'company_email' as email
FROM air_freight_forms
UNION ALL
SELECT 
    'buy_rent_container_forms' as form_type,
    id,
    created_at,
    company_details->>'company_name' as company_name,
    company_details->>'company_email' as email
FROM buy_rent_container_forms
UNION ALL
SELECT 
    'buy_rent_vessels_forms' as form_type,
    id,
    created_at,
    company_details->>'company_name' as company_name,
    company_details->>'company_email' as email
FROM buy_rent_vessels_forms
-- Add more unions as needed
ORDER BY created_at DESC;

-- Grant access to the view
GRANT SELECT ON admin_form_submissions TO authenticated;

-- Create RLS policy for the view
CREATE POLICY "Admins can view form submissions" ON admin_form_submissions
  FOR SELECT
  TO authenticated
  USING (is_admin(auth.uid()));

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

