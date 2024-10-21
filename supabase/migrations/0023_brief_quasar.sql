ALTER TABLE "international_trading" ADD COLUMN "dangerous" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "international_trading" ADD COLUMN "temperature" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "international_trading" ADD COLUMN "oversized" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "type";--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "quantity";