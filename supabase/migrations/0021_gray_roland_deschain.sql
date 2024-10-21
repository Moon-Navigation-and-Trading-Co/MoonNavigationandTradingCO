ALTER TABLE "sign_crew_members" ADD COLUMN "transport_special_req_sign_off" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_special_req_off";