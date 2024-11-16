ALTER TABLE "rent_container" ADD COLUMN "container_number" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_container" ADD COLUMN "drop_off_location" text NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_container" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "container_size";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "number_of_containers";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "rental_duration";