-- Test script to check if rent_vessel table exists and is accessible
-- Run this in Supabase SQL Editor

-- Check if table exists
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public' 
   AND table_name = 'rent_vessel'
);

-- Check table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public' 
AND table_name = 'rent_vessel'
ORDER BY ordinal_position;

-- Test insert (this will fail if table doesn't exist or has wrong structure)
INSERT INTO rent_vessel (
    user_id,
    vessel_type,
    vessel_condition,
    vessel_number,
    rental_duration,
    duration_unit,
    delivery_date,
    pick_up_location,
    drop_off_location,
    detailed_location,
    trading_area,
    required_specifications,
    budget,
    additional_information,
    company_name,
    contact_person_name,
    title,
    country_of_origin,
    company_email,
    additional_email,
    phone_number,
    additional_phone_number,
    quotation_number
) VALUES (
    '00000000-0000-0000-0000-000000000000', -- Test UUID
    'Test Vessel',
    'new',
    1,
    30,
    'days',
    '2024-01-01',
    'Test Pickup',
    'Test Dropoff',
    'Test Detailed',
    'Test Trading Area',
    'Test Specifications',
    1000,
    'Test Additional Info',
    'Test Company',
    'Test Contact',
    'Test Title',
    'Test Country',
    'test@example.com',
    'test2@example.com',
    '1234567890',
    '0987654321',
    'TEST-001'
);

-- If the above insert succeeds, clean up the test data
DELETE FROM rent_vessel WHERE company_name = 'Test Company';
