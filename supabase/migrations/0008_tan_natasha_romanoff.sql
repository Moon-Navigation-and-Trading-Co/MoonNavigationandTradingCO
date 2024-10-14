ALTER TABLE "less_than_container_load" ALTER COLUMN "from" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ALTER COLUMN "to" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ADD COLUMN "location_information" text;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ADD COLUMN "type_of_commodity" text NOT NULL;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ADD COLUMN "validity" text NOT NULL;--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "local_information";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "oversized";