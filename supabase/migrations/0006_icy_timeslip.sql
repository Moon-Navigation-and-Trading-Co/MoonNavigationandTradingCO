ALTER TABLE "roll_on_off" ADD COLUMN "dangerous" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "roll_on_off" DROP COLUMN IF EXISTS "type";