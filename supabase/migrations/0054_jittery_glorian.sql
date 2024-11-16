ALTER TABLE "buy_vessel" ALTER COLUMN "detailed_location" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "container_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "container_number" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "vessel_type";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "vessel_size";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "number_of_vessels";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "new";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "one_trip";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "used";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "delivery_date";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "additional_services";