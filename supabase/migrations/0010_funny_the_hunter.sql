ALTER TABLE "oversized_container" ADD COLUMN "container_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "shipment_type";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "oversized";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "weight";