ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "container_inland_services" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "heavy_lift" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "additional_information";