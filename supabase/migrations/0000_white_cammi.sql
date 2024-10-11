--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "air_freight_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"service_mode" text NOT NULL,
	"service_from" text NOT NULL,
	"service_to" text NOT NULL,
	"transportation_method" text NOT NULL,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"import_service" boolean DEFAULT false,
	"export_service" boolean DEFAULT false,
	"value_added_service" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth"."users" (
	"id" uuid PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"name" text NOT NULL,
	"phone" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "air_freight_services" ADD CONSTRAINT "air_freight_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
