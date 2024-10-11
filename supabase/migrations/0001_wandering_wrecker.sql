CREATE TABLE IF NOT EXISTS "international_inland_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"date" date NOT NULL,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"inland_container" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "container_inland_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"date" date NOT NULL,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"file" text,
	"additional_information" text,
	"inland_container" boolean DEFAULT false,
	"container" text,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone_number" text NOT NULL,
	"container_type" text NOT NULL,
	"container_number" numeric NOT NULL,
	"container_weight" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "local_inland_services" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"from" text NOT NULL,
	"to" text NOT NULL,
	"date" date NOT NULL,
	"temperature" boolean DEFAULT false,
	"dangerous" boolean DEFAULT false,
	"oversized" boolean DEFAULT false,
	"length" numeric NOT NULL,
	"width" numeric NOT NULL,
	"height" numeric NOT NULL,
	"weight" numeric NOT NULL,
	"file" text,
	"additional_information" text,
	"inland_container" boolean DEFAULT false,
	"company_name" text NOT NULL,
	"contact_person_name" text NOT NULL,
	"title" text NOT NULL,
	"country_of_origin" text NOT NULL,
	"company_email" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
-- DROP TABLE "auth"."users";--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "created_at" timestamp with time zone DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "international_inland_services" ADD CONSTRAINT "international_inland_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "container_inland_services" ADD CONSTRAINT "container_inland_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "local_inland_services" ADD CONSTRAINT "local_inland_services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
-- DROP SCHEMA "auth";
