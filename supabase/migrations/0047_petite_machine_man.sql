ALTER TABLE "handling_stevedoring_storage" ALTER COLUMN "location" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "commodities" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "detailed";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "oversized";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "container_type";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "container_number";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "container_weight";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "weight";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "file";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "handling";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "loading";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "discharging";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "lashing";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "unlashing";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "safekeeping_before";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "safekeeping_after";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "temporary_storage";