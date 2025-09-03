CREATE TABLE IF NOT EXISTS "bunkering_oil_supply" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"vessel_name" text NOT NULL,
	"vessel_imo" text NOT NULL,
	"port_name" text NOT NULL,
	"flag" text NOT NULL,
	"eta" text NOT NULL,
	"etd" text NOT NULL,
	"location" text NOT NULL,
	"expected_delivery_date" text NOT NULL,
	"bunkering_services" text NOT NULL,
	"lubricant_oil_services" text NOT NULL,
	"ship_chandlery_services" text NOT NULL,
	"additional_information" text,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"additional_email" text,
	"phone_number" text NOT NULL,
	"additional_phone_number" text
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" text DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "is_active" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "permissions" jsonb;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bunkering_oil_supply" ADD CONSTRAINT "bunkering_oil_supply_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
