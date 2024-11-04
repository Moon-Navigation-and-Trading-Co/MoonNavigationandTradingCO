ALTER TABLE "dangerous_cargo_services" ALTER COLUMN "dangerous" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ALTER COLUMN "vad" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ALTER COLUMN "vad" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "heavy_lift" ALTER COLUMN "dangerous" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "heavy_lift" ALTER COLUMN "vad" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "heavy_lift" ALTER COLUMN "vad" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ALTER COLUMN "dangerous" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ALTER COLUMN "vad" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ALTER COLUMN "vad" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "roll_on_off" ALTER COLUMN "dangerous" SET DEFAULT true;--> statement-breakpoint
ALTER TABLE "roll_on_off" ALTER COLUMN "vad" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "roll_on_off" ALTER COLUMN "vad" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "commodity_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "commoditiy_details" text NOT NULL;--> statement-breakpoint
ALTER TABLE "heavy_lift" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "heavy_lift" ADD COLUMN "commodity_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "heavy_lift" ADD COLUMN "commoditiy_details" text NOT NULL;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "commodity_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "commoditiy_details" text NOT NULL;--> statement-breakpoint
ALTER TABLE "roll_on_off" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "roll_on_off" ADD COLUMN "commodity_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "roll_on_off" ADD COLUMN "commoditiy_details" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "heavy_lift" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "heavy_lift" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "roll_on_off" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "roll_on_off" DROP COLUMN IF EXISTS "to";