ALTER TABLE "less_than_container_load" ALTER COLUMN "vad" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ALTER COLUMN "vad" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ADD COLUMN "routing" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "from";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "to";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "pick_up";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "delivery";--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "location_information";