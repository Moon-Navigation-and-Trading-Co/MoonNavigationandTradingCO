-- Safely convert rental_duration to numeric
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "rental_duration";
ALTER TABLE "rent_vessel" ADD COLUMN "rental_duration" numeric;
ALTER TABLE "rent_vessel" ALTER COLUMN "detailed_location" SET NOT NULL;
ALTER TABLE "rent_vessel" ADD COLUMN "container_type" text NOT NULL;
ALTER TABLE "rent_vessel" ADD COLUMN "container_number" numeric NOT NULL;
ALTER TABLE "rent_vessel" ADD COLUMN "additional_information" text;
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "vessel_type";
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "vessel_size";
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "number_of_vessels";
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "delivery_date";
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "additional_services"; 