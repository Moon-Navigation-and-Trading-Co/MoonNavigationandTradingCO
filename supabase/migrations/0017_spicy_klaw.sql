-- First drop the column and recreate it with the correct type
ALTER TABLE "request_for_pda" DROP COLUMN IF EXISTS "vessel_length";
ALTER TABLE "request_for_pda" ADD COLUMN "vessel_length" numeric;
--> statement-breakpoint
-- Only alter crew_nationalities if it exists
DO $$ 
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'sign_crew_members' AND column_name = 'crew_nationalities') THEN
        ALTER TABLE sign_crew_members ALTER COLUMN crew_nationalities TYPE jsonb;
    END IF;
END $$;
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "crew_number"; 