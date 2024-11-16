ALTER TABLE "investor_form" ALTER COLUMN "accredited" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "investor_form" ALTER COLUMN "accredited" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "investor_form" ALTER COLUMN "accredited" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ALTER COLUMN "qualified" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "investor_form" ALTER COLUMN "qualified" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "investor_form" ALTER COLUMN "qualified" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "additional_email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "additional_phone_number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "investor_form" ADD COLUMN "average_check_size" numeric NOT NULL;