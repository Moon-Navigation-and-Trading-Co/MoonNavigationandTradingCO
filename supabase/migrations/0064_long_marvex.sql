DROP TABLE "dangerous_cargo_services";--> statement-breakpoint
ALTER TABLE "heavy_lift" ALTER COLUMN "service_contract" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "additional_phone_number" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "created_at" timestamp with time zone DEFAULT now();--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "full_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "company_name" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "position_title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "nationality" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "additional_email" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "phone_number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "additional_phone_number" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "city_country_residence" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "investor_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "investor_type_other" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "investment_range" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "average_check_size" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "preferred_investment_type" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "preferred_investment_type_other" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "areas_of_interest" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "areas_of_interest_other" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "interest_rate_type" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "fixed_interest_rate" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "background_linkedin" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "investment_interest_reason" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "require_nda" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "additional_notes" text;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "created_at" timestamp with time zone DEFAULT now();--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "additional_information" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "investor_form" ADD CONSTRAINT "investor_form_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
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
ALTER TABLE "livestock_transportation" DROP COLUMN IF EXISTS "cargo_lifting_points";--> statement-breakpoint
ALTER TABLE "livestock_transportation" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "livestock_transportation" DROP COLUMN IF EXISTS "service_contract";--> statement-breakpoint
ALTER TABLE "livestock_transportation" DROP COLUMN IF EXISTS "transport_modes";