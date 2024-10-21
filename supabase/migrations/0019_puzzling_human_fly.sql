ALTER TABLE "sign_crew_members" ADD COLUMN "hotel_sign_on" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "hotel_special_req_sign_on" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "transport_sign_on" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "transport_special_req_sign_on" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "crew_nationalities_sign_off" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "hotel_sign_off" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "transport_off" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "transport_special_req_off" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "hotel";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "hotel_special_req";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_special_req";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "crew_nationalities";