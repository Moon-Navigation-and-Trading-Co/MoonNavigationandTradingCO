ALTER TABLE "dangerous_cargo_services" ADD COLUMN "commodities" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "commodity_type";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "commoditiy_details";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "weight";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "file";