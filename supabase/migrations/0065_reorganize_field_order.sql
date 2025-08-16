-- Add missing fields to match form structure
-- This is a simpler approach that doesn't recreate tables

-- Add missing fields to buy_container if they don't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'buy_container' AND column_name = 'container_type') THEN
        ALTER TABLE "buy_container" ADD COLUMN "container_type" text;
    END IF;
END $$;

-- Add missing fields to buy_vessel if they don't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'buy_vessel' AND column_name = 'additional_email') THEN
        ALTER TABLE "buy_vessel" ADD COLUMN "additional_email" text;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'buy_vessel' AND column_name = 'additional_phone_number') THEN
        ALTER TABLE "buy_vessel" ADD COLUMN "additional_phone_number" text;
    END IF;
END $$;

-- Add missing fields to other tables as needed
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rent_container' AND column_name = 'additional_email') THEN
        ALTER TABLE "rent_container" ADD COLUMN "additional_email" text;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rent_container' AND column_name = 'additional_phone_number') THEN
        ALTER TABLE "rent_container" ADD COLUMN "additional_phone_number" text;
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rent_vessel' AND column_name = 'additional_email') THEN
        ALTER TABLE "rent_vessel" ADD COLUMN "additional_email" text;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rent_vessel' AND column_name = 'additional_phone_number') THEN
        ALTER TABLE "rent_vessel" ADD COLUMN "additional_phone_number" text;
    END IF;
END $$; 