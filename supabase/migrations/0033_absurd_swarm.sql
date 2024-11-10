ALTER TABLE "international_inland_services" ADD COLUMN "additional_email" text;--> statement-breakpoint
ALTER TABLE "international_inland_services" ADD COLUMN "phone_number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "international_inland_services" ADD COLUMN "additional_phone_number" text;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "commodities" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "additional_email" text;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "phone_number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "additional_phone_number" text;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "additional_email" text;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "phone_number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "additional_phone_number" text;--> statement-breakpoint
ALTER TABLE "international_inland_services" DROP COLUMN IF EXISTS "phone";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "service_mode";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "service_from";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "service_to";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "weight";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "file";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "air_freight_services" DROP COLUMN IF EXISTS "phone";--> statement-breakpoint
ALTER TABLE "local_inland_services" DROP COLUMN IF EXISTS "phone";