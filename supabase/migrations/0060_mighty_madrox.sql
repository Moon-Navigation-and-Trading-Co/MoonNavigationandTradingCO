CREATE TABLE IF NOT EXISTS "livestock_transportation" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"routing" jsonb NOT NULL,
	"effective_date" text NOT NULL,
	"expiry_date" text NOT NULL,
	"livestock_details" jsonb NOT NULL,
	"special_handling" text,
	"supporting_files" jsonb,
	"cargo_lifting_points" boolean DEFAULT false,
	"additional_information" text,
	"service_contract" text,
	"transport_modes" jsonb NOT NULL,
	"additional_services" jsonb NOT NULL,
	"insurance" jsonb NOT NULL,
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
CREATE TABLE IF NOT EXISTS "ocean_freight_quotations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"form_type" text NOT NULL,
	"routing" jsonb NOT NULL,
	"cargo_mode" text NOT NULL,
	"itemized_cargo" jsonb,
	"consolidated_cargo" jsonb,
	"supporting_files" text,
	"additional_information" text,
	"effective_date" date NOT NULL,
	"expiry_date" date NOT NULL,
	"service_contract_number" text,
	"additional_services" jsonb NOT NULL,
	"company_name" text NOT NULL,
	"contact_person" text NOT NULL,
	"title" text NOT NULL,
	"city" text NOT NULL,
	"country" text NOT NULL,
	"email" text NOT NULL,
	"additional_email" text,
	"phone" text NOT NULL,
	"additional_phone" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "suez_canal_transit" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"date" text NOT NULL,
	"vessel" jsonb NOT NULL,
	"cargo" jsonb NOT NULL,
	"unit_carriage" jsonb NOT NULL,
	"transit" jsonb NOT NULL,
	"additional_services" jsonb NOT NULL,
	"additional_notes" text,
	"company_details" jsonb NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "livestock_transportation" ADD CONSTRAINT "livestock_transportation_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ocean_freight_quotations" ADD CONSTRAINT "ocean_freight_quotations_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "suez_canal_transit" ADD CONSTRAINT "suez_canal_transit_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
