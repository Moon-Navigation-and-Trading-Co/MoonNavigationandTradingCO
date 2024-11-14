ALTER TABLE "standard_container" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "standard_container" ADD COLUMN "commodities" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "service_mode";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "service_from";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "service_to";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "container_type";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "container_number";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "container_weight";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "own_container";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "import_return_or_triangulation";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "import_service";--> statement-breakpoint
ALTER TABLE "standard_container" DROP COLUMN IF EXISTS "export_service";