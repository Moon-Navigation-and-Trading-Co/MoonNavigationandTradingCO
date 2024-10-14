ALTER TABLE "less_than_container_load" ADD COLUMN "vad" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "less_than_container_load" DROP COLUMN IF EXISTS "inland_container";