ALTER TABLE "sign_crew_members" ADD COLUMN "transport_sign_off" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_off";