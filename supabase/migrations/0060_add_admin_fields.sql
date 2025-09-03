-- Add admin fields to users table
ALTER TABLE "users" 
ADD COLUMN IF NOT EXISTS "role" text DEFAULT 'user' NOT NULL,
ADD COLUMN IF NOT EXISTS "is_active" boolean DEFAULT true NOT NULL,
ADD COLUMN IF NOT EXISTS "permissions" jsonb;

-- Create admin user (replace with actual admin email)
-- INSERT INTO "users" (id, name, phone, email, role, is_active, permissions)
-- VALUES (
--   'admin-uuid-here',
--   'Admin User',
--   '+1234567890',
--   'admin@moonnavigation.com',
--   'super_admin',
--   true,
--   '{"all": true}'
-- );

-- Add RLS policies for admin access
CREATE POLICY "Admins can view all users" ON "users"
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can update all users" ON "users"
    FOR UPDATE USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

-- Add RLS policies for admin access to all form tables
-- Example for air_freight_services
CREATE POLICY "Admins can view all air freight services" ON "air_freight_services"
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can update all air freight services" ON "air_freight_services"
    FOR UPDATE USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    ); 