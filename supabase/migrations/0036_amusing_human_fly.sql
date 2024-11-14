ALTER TABLE "international_inland_services" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "international_inland_services" ADD COLUMN "commodities" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "commodities" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "date";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "oversized";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "weight";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "file";--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "date";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "oversized";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "weight";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "file";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "additional_information";