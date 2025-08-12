CREATE TABLE IF NOT EXISTS "tankers_quotation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"routing" jsonb NOT NULL,
	"effective_date" text NOT NULL,
	"expiry_date" text NOT NULL,
	"cargo_details" jsonb NOT NULL,
	"vessel_specs" jsonb NOT NULL,
	"supporting_files" jsonb,
	"cargo_lifting_points" boolean DEFAULT false,
	"additional_information" text,
	"service_contract" text,
	"safety_compliance" jsonb NOT NULL,
	"marine_insurance" jsonb NOT NULL,
	"additional_services" jsonb NOT NULL,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"city_country" text NOT NULL,
	"company_email" text NOT NULL,
	"additional_email" text,
	"phone_number" text NOT NULL,
	"additional_phone" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tankers_quotation" ADD CONSTRAINT "tankers_quotation_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
