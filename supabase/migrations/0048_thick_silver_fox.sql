ALTER TABLE "international_trading" ADD COLUMN "type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "international_trading" ADD COLUMN "quantity" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "international_trading" ADD COLUMN "shipping_details" text NOT NULL;--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "temperature";--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "oversized";