CREATE TABLE IF NOT EXISTS "buy_container" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"container_condition" text NOT NULL,
	"pick_up_date" date NOT NULL,
	"pick_up_location" text NOT NULL,
	"budget" numeric,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "buy_vessel" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"vessel_type" text NOT NULL,
	"vessel_size" text NOT NULL,
	"number_of_vessels" numeric NOT NULL,
	"new" boolean DEFAULT false,
	"one_trip" boolean DEFAULT false,
	"used" boolean DEFAULT false,
	"delivery_date" date NOT NULL,
	"container_condition" text NOT NULL,
	"pick_up_date" date NOT NULL,
	"pick_up_location" text NOT NULL,
	"detailed_location" text,
	"required_specifications" text NOT NULL,
	"budget" numeric,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL,
	"additional_services" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "dangerous_cargo_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"type" text NOT NULL,
	"dangerous" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"effective_date" date NOT NULL,
	"expiry_date" date NOT NULL,
	"service_contract" numeric,
	"vad" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "heavy_lift" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"type" text NOT NULL,
	"dangerous" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"effective_date" date NOT NULL,
	"expiry_date" date NOT NULL,
	"service_contract" numeric,
	"vad" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "handling_stevedoring_storage" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"location" text NOT NULL,
	"cargo_type" text NOT NULL,
	"number_of_containers" numeric NOT NULL,
	"weight_per_container" numeric,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"handling" boolean DEFAULT false,
	"loading" boolean DEFAULT false,
	"discharging" boolean DEFAULT false,
	"lashing" boolean DEFAULT false,
	"unlashing" boolean DEFAULT false,
	"safekeeping_before" boolean DEFAULT false,
	"safekeeping_after" boolean DEFAULT false,
	"temporary_storage" boolean DEFAULT false,
	"additional_information" text,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "international_trading" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"incoterm" text NOT NULL,
	"type" text NOT NULL,
	"quantity" numeric NOT NULL,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"sea" boolean DEFAULT false,
	"land" boolean DEFAULT false,
	"air" boolean DEFAULT false,
	"more_decleration" text NOT NULL,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "investor_form" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"title" text NOT NULL,
	"email" text NOT NULL,
	"organization_name" text NOT NULL,
	"phone_number" text NOT NULL,
	"check_size" text NOT NULL,
	"accredited" boolean DEFAULT false,
	"qualified" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "less_than_container_load" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text,
	"to" text,
	"pick_up" boolean DEFAULT false,
	"delivery" boolean DEFAULT false,
	"local_information" text,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"gross_volume" numeric NOT NULL,
	"cargo_weight" numeric NOT NULL,
	"package_type" text NOT NULL,
	"import_service" boolean DEFAULT false,
	"export_service" boolean DEFAULT false,
	"additional_information" text,
	"inland_container" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "oversized_container" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"service_mode" text NOT NULL,
	"service_from" text NOT NULL,
	"service_to" text NOT NULL,
	"shipment_type" text NOT NULL,
	"dangerous" boolean DEFAULT false,
	"container_number" numeric NOT NULL,
	"weight_per_container" numeric NOT NULL,
	"own_container" boolean,
	"import_return_or_triangulation" boolean,
	"length" numeric,
	"width" numeric,
	"height" numeric,
	"weight" numeric,
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
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project_cargo_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"effective_date" date NOT NULL,
	"expiry_date" date NOT NULL,
	"service_contract" numeric,
	"vad" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rent_container" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"container_type" text NOT NULL,
	"container_size" text NOT NULL,
	"number_of_containers" numeric NOT NULL,
	"rental_duration" text NOT NULL,
	"container_condition" text NOT NULL,
	"pick_up_date" date NOT NULL,
	"pick_up_location" text NOT NULL,
	"detailed_location" text,
	"budget" numeric,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rent_vessel" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"vessel_type" text NOT NULL,
	"vessel_size" text NOT NULL,
	"number_of_vessels" numeric NOT NULL,
	"rental_duration" text NOT NULL,
	"container_condition" text NOT NULL,
	"delivery_date" date NOT NULL,
	"pick_up_date" date NOT NULL,
	"pick_up_location" text NOT NULL,
	"detailed_location" text,
	"required_specifications" text NOT NULL,
	"budget" numeric,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL,
	"additional_services" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "request_for_pda" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"port_name" text NOT NULL,
	"vessel_name" text NOT NULL,
	"vessel_imo" numeric NOT NULL,
	"vessel_type" text NOT NULL,
	"flag" text,
	"vessel_length" text NOT NULL,
	"eta" text NOT NULL,
	"ship_gross_tonnage" text NOT NULL,
	"ship_net_tonnage" text NOT NULL,
	"ship_dead_weight" text NOT NULL,
	"ship_draft" text NOT NULL,
	"call_for_commercial" boolean DEFAULT false,
	"call_for_maintenance" boolean DEFAULT false,
	"total_discharged_cargo" numeric NOT NULL,
	"total_expected_berthing_days" numeric NOT NULL,
	"total_waiting_anchor" numeric NOT NULL,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "roll_on_off" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"type" text NOT NULL,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"effective_date" date NOT NULL,
	"expiry_date" date NOT NULL,
	"service_contract" numeric,
	"vad" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ship_maintenance" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"request" text NOT NULL,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ship_management" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"request" text NOT NULL,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sign_crew_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"vessel_name" text NOT NULL,
	"vessel_imo" numeric NOT NULL,
	"port_name" text NOT NULL,
	"at_anchor" boolean DEFAULT false,
	"at_berth" boolean DEFAULT false,
	"sign_on" boolean DEFAULT false,
	"sign_off" boolean DEFAULT false,
	"crew_number" numeric NOT NULL,
	"hotel" boolean DEFAULT false,
	"hotel_special_req" text,
	"transport" boolean DEFAULT false,
	"transport_special_req" text,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "special_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"vessel_name" text NOT NULL,
	"vessel_imo" numeric NOT NULL,
	"port_name" text NOT NULL,
	"at_anchor" boolean DEFAULT false,
	"at_berth" boolean DEFAULT false,
	"special_request" text,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "standard_container" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"service_mode" text NOT NULL,
	"service_from" text NOT NULL,
	"service_to" text NOT NULL,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"container_type" text NOT NULL,
	"container_number" numeric NOT NULL,
	"container_weight" numeric NOT NULL,
	"own_container" boolean,
	"import_return_or_triangulation" boolean,
	"length" numeric,
	"width" numeric,
	"height" numeric,
	"weight" numeric,
	"import_service" boolean DEFAULT false,
	"export_service" boolean DEFAULT false,
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
	"phone_number" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transfer_spare_parts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"vessel_name" text NOT NULL,
	"vessel_imo" numeric NOT NULL,
	"port_name" text NOT NULL,
	"at_anchor" boolean DEFAULT false,
	"at_berth" boolean DEFAULT false,
	"special_request" text,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_container" ADD CONSTRAINT "buy_container_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_vessel" ADD CONSTRAINT "buy_vessel_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dangerous_cargo_services" ADD CONSTRAINT "dangerous_cargo_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "heavy_lift" ADD CONSTRAINT "heavy_lift_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "handling_stevedoring_storage" ADD CONSTRAINT "handling_stevedoring_storage_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "international_trading" ADD CONSTRAINT "international_trading_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "investor_form" ADD CONSTRAINT "investor_form_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "less_than_container_load" ADD CONSTRAINT "less_than_container_load_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "oversized_container" ADD CONSTRAINT "oversized_container_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_cargo_services" ADD CONSTRAINT "project_cargo_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rent_container" ADD CONSTRAINT "rent_container_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "rent_vessel" ADD CONSTRAINT "rent_vessel_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "request_for_pda" ADD CONSTRAINT "request_for_pda_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "roll_on_off" ADD CONSTRAINT "roll_on_off_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ship_maintenance" ADD CONSTRAINT "ship_maintenance_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ship_management" ADD CONSTRAINT "ship_management_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sign_crew_members" ADD CONSTRAINT "sign_crew_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "special_services" ADD CONSTRAINT "special_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "standard_container" ADD CONSTRAINT "standard_container_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transfer_spare_parts" ADD CONSTRAINT "transfer_spare_parts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
