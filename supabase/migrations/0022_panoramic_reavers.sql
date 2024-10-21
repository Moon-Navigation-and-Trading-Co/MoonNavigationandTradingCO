ALTER TABLE "international_trading" ADD COLUMN "shipping_method" text NOT NULL;--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "sea";--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "land";--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "air";--> statement-breakpoint
ALTER TABLE "international_trading" DROP COLUMN IF EXISTS "more_decleration";