ALTER TABLE "oversized_container" ADD COLUMN "container_weight" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "weight_per_container";