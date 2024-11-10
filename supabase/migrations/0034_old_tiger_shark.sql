ALTER TABLE "air_freight_services" ALTER COLUMN "value_added_service" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "air_freight_services" ALTER COLUMN "value_added_service" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "ready_to_load" date NOT NULL;