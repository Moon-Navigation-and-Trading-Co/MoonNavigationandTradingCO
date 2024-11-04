ALTER TABLE "project_cargo_services" ADD COLUMN "value_added_service" text;--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "vad";