-- Make user_id nullable in investor_form table to allow anonymous submissions
ALTER TABLE "investor_form" ALTER COLUMN "user_id" DROP NOT NULL;
