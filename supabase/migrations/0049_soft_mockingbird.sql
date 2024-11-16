CREATE TABLE IF NOT EXISTS "out_of_gauge" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"routing" jsonb NOT NULL,
	"commodities" jsonb NOT NULL,
	"file" text,
	"additional_information" text,
	"effective_date" date NOT NULL,
	"expiry_date" date NOT NULL,
	"service_contract" text,
	"value_added_services" text,
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
DO $$ BEGIN
 ALTER TABLE "out_of_gauge" ADD CONSTRAINT "out_of_gauge_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
