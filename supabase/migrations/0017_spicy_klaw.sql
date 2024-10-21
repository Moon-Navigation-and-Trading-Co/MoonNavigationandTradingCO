ALTER TABLE "request_for_pda" ALTER COLUMN "vessel_length" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE sign_crew_members ALTER COLUMN crew_nationalities TYPE jsonb;
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "crew_number";