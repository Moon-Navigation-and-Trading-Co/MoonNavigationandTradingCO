ALTER TABLE "handling_stevedoring_storage" DROP CONSTRAINT "handling_stevedoring_storage_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "oversized_container" ALTER COLUMN "length" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "oversized_container" ALTER COLUMN "width" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "oversized_container" ALTER COLUMN "height" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "oversized_container" ALTER COLUMN "weight" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "detailed" text NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "container_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "container_number" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "container_weight" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "own_container" boolean;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "import_return_or_triangulation" boolean;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "file" text;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "cargo_type";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "number_of_containers";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "weight_per_container";