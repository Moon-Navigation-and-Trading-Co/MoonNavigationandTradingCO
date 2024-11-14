ALTER TABLE "international_inland_services" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "date" date NOT NULL;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "additional_information" text;