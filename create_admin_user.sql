-- Create admin user directly (if they don't exist)
-- Run this in your Supabase SQL editor

-- First, create the auth user (you'll need the UUID from Supabase Auth)
-- This is typically done through the signup process, but you can also do it manually

-- Insert into users table with admin role
INSERT INTO users (
    id,  -- This should be the UUID from auth.users
    name,
    phone,
    email,
    role,
    is_active,
    permissions,
    created_at
) VALUES (
    'your-auth-user-uuid-here',  -- Replace with actual UUID from auth.users
    'Mariiam Hamdy',
    '+1234567890',  -- Replace with actual phone number
    'mariiamhamdyy1@gmail.com',
    'super_admin',
    true,
    '{"all": true, "users": true, "submissions": true, "analytics": true, "settings": true}',
    NOW()
) ON CONFLICT (email) DO UPDATE SET
    role = 'super_admin',
    is_active = true,
    permissions = '{"all": true, "users": true, "submissions": true, "analytics": true, "settings": true}';

-- Verify the admin user
SELECT id, email, name, role, is_active, permissions
FROM users 
WHERE email = 'mariiamhamdyy1@gmail.com'; 