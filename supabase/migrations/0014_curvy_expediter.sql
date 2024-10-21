ALTER TABLE "request_for_pda" ADD COLUMN "total_loaded_cargo" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "own_container";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "import_return_or_triangulation";