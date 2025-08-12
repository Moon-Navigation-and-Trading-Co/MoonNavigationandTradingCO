--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "suez_canal_transit" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"user_id" uuid NOT NULL,
	"date" text NOT NULL,
	"vessel" jsonb NOT NULL,
	"cargo" jsonb NOT NULL,
	"unit_carriage" jsonb NOT NULL,
	"transit" jsonb NOT NULL,
	"additional_services" jsonb NOT NULL,
	"additional_notes" text,
	"company_details" jsonb NOT NULL,
	CONSTRAINT "suez_canal_transit_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action
); 