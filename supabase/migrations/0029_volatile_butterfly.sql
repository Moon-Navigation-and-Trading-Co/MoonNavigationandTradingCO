ALTER TABLE "dangerous_cargo_services" ADD COLUMN "value_added_service" text;--> statement-breakpoint
ALTER TABLE "heavy_lift" ADD COLUMN "value_added_service" text;--> statement-breakpoint
ALTER TABLE "roll_on_off" ADD COLUMN "value_added_service" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "vad";--> statement-breakpoint
ALTER TABLE "heavy_lift" DROP COLUMN IF EXISTS "vad";--> statement-breakpoint
ALTER TABLE "roll_on_off" DROP COLUMN IF EXISTS "vad";