-- Update PDA schema to match current form structure

-- Rename flag column to vessel_flag
ALTER TABLE request_for_pda RENAME COLUMN flag TO vessel_flag;

-- Add missing vessel fields
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS call_for_other BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_purpose_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS discharged_cargo_type TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS discharged_dangerous_cargo BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS total_days_needed_for_discharging INTEGER;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS loaded_cargo_type TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS loaded_dangerous_cargo BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS total_days_needed_for_loading INTEGER;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS eta_expected_date DATE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS total_expected_berthing_days INTEGER;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS total_expected_anchor_days INTEGER;

-- Add service fields for bunkering
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_mgo BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_mgo_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_hfo BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_hfo_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_lsfo BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_lsfo_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_other BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS bunkering_other_details TEXT;

-- Add service fields for chandlery
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS chandlery_fresh_dry_provisions BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS chandlery_fresh_dry_provisions_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS chandlery_technical_supplies BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS chandlery_technical_supplies_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS chandlery_other BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS chandlery_other_details TEXT;

-- Add service fields for crew services
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS crew_services_crew_changes BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS crew_services_crew_changes_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS crew_services_medical_services BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS crew_services_medical_services_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS crew_services_other BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS crew_services_other_details TEXT;

-- Add service fields for cargo handling
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS cargo_handling_stevedoring BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS cargo_handling_stevedoring_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS cargo_handling_storage BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS cargo_handling_storage_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS cargo_handling_other BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS cargo_handling_other_details TEXT;

-- Add service fields for other services
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_customs_clearance BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_customs_clearance_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_immigration BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_immigration_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_port_clearance BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_port_clearance_details TEXT;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_other BOOLEAN DEFAULT FALSE;
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS other_services_other_details TEXT;

-- Add quotation number field
ALTER TABLE request_for_pda ADD COLUMN IF NOT EXISTS quotation_number TEXT;
