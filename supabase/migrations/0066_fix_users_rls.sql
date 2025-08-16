-- Fix RLS policies for users table
-- The users table is an extension of auth.users, so it needs different policies

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own data" ON "users";
DROP POLICY IF EXISTS "Users can insert their own data" ON "users";
DROP POLICY IF EXISTS "Users can update their own data" ON "users";

-- Create better policies for users table
-- Users can view their own profile data
CREATE POLICY "Users can view own profile" ON "users"
    FOR SELECT USING (auth.uid() = id);

-- Users can insert their own profile data (when they first sign up)
CREATE POLICY "Users can insert own profile" ON "users"
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Users can update their own profile data
CREATE POLICY "Users can update own profile" ON "users"
    FOR UPDATE USING (auth.uid() = id);

-- Users can delete their own profile data
CREATE POLICY "Users can delete own profile" ON "users"
    FOR DELETE USING (auth.uid() = id); 