ALTER TABLE "ContactRequests" ADD COLUMN "number" text NOT NULL;--> statement-breakpoint
ALTER TABLE "ContactRequests" DROP COLUMN IF EXISTS "phone";