-- Set up admin user for Moon Navigation and Trading CO
-- Run this in your Supabase SQL editor

-- First, check if the user exists
SELECT id, email, name, role, is_active 
FROM users 
WHERE email = 'mariiamhamdyy1@gmail.com';

-- Update the user to super admin role
UPDATE users 
SET 
    role = 'super_admin',
    is_active = true,
    permissions = '{"all": true, "users": true, "submissions": true, "analytics": true, "settings": true}'
WHERE email = 'mariiamhamdyy1@gmail.com';

-- Verify the update
SELECT id, email, name, role, is_active, permissions
FROM users 
WHERE email = 'mariiamhamdyy1@gmail.com';

-- If the user doesn't exist, you'll need to create them first
-- This assumes they've already signed up through the normal process 