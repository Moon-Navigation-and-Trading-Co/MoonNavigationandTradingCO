-- Setup Quotation Number System for Moon Navigation and Trading Co.
-- Run this script in your Supabase SQL editor or database management tool

-- 1. Create quotation_numbers table to track quotation number generation
CREATE TABLE IF NOT EXISTS quotation_numbers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_type TEXT NOT NULL UNIQUE,
    current_count INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_quotation_numbers_form_type ON quotation_numbers(form_type);

-- 3. Insert initial entries for all form types
INSERT INTO quotation_numbers (form_type, current_count) VALUES
('ocean_freight', 0),
('air_freight', 0),
('inland_freight', 0),
('international_trading', 0),
('ship_agency', 0),
('suez_canal_transit', 0),
('handling_stevedoring_storage', 0),
('customs_clearance', 0),
('container_services', 0),
('roll_on_off', 0),
('special_services', 0),
('ship_management', 0),
('docking_maintenance', 0),
('buy_rent_containers', 0),
('buy_rent_vessels', 0),
('out_gauge', 0),
('livestock_transportation', 0),
('tankers_quotation', 0),
('ocean_freight_quotation', 0),
('investor_form', 0),
('schedule_meeting', 0),
('contact_form', 0)
ON CONFLICT (form_type) DO NOTHING;

-- 4. Add quotation_number field to all form tables
ALTER TABLE air_freight_services ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE local_inland_services ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE international_inland_services ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE container_inland_services ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE "ContactRequests" ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE suez_canal_transit ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE ocean_freight_quotations ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE livestock_transportation ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE tankers_quotation ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE special_services ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE out_of_gauge ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE buy_container_form ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE buy_vessel_form ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE sell_container_form ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE sell_vessel_form ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE ocean_freight_forms ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE ship_agency ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE ship_maintenance ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE ship_management ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE international_trading ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE investor_form ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE bunkering_oil_supply ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE customs_clearance ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE handling_stevedoring_storage ADD COLUMN IF NOT EXISTS quotation_number TEXT;
ALTER TABLE notes ADD COLUMN IF NOT EXISTS quotation_number TEXT;

-- 5. Create indexes for quotation_number fields for faster lookups
CREATE INDEX IF NOT EXISTS idx_air_freight_services_quotation_number ON air_freight_services(quotation_number);
CREATE INDEX IF NOT EXISTS idx_local_inland_services_quotation_number ON local_inland_services(quotation_number);
CREATE INDEX IF NOT EXISTS idx_international_inland_services_quotation_number ON international_inland_services(quotation_number);
CREATE INDEX IF NOT EXISTS idx_container_inland_services_quotation_number ON container_inland_services(quotation_number);
CREATE INDEX IF NOT EXISTS idx_contact_requests_quotation_number ON "ContactRequests"(quotation_number);
CREATE INDEX IF NOT EXISTS idx_suez_canal_transit_quotation_number ON suez_canal_transit(quotation_number);
CREATE INDEX IF NOT EXISTS idx_ocean_freight_quotations_quotation_number ON ocean_freight_quotations(quotation_number);
CREATE INDEX IF NOT EXISTS idx_livestock_transportation_quotation_number ON livestock_transportation(quotation_number);
CREATE INDEX IF NOT EXISTS idx_tankers_quotation_quotation_number ON tankers_quotation(quotation_number);
CREATE INDEX IF NOT EXISTS idx_special_services_quotation_number ON special_services(quotation_number);
CREATE INDEX IF NOT EXISTS idx_out_of_gauge_quotation_number ON out_of_gauge(quotation_number);
CREATE INDEX IF NOT EXISTS idx_buy_container_form_quotation_number ON buy_container_form(quotation_number);
CREATE INDEX IF NOT EXISTS idx_buy_vessel_form_quotation_number ON buy_vessel_form(quotation_number);
CREATE INDEX IF NOT EXISTS idx_sell_container_form_quotation_number ON sell_container_form(quotation_number);
CREATE INDEX IF NOT EXISTS idx_sell_vessel_form_quotation_number ON sell_vessel_form(quotation_number);
CREATE INDEX IF NOT EXISTS idx_ocean_freight_forms_quotation_number ON ocean_freight_forms(quotation_number);
CREATE INDEX IF NOT EXISTS idx_ship_agency_quotation_number ON ship_agency(quotation_number);
CREATE INDEX IF NOT EXISTS idx_ship_maintenance_quotation_number ON ship_maintenance(quotation_number);
CREATE INDEX IF NOT EXISTS idx_ship_management_quotation_number ON ship_management(quotation_number);
CREATE INDEX IF NOT EXISTS idx_international_trading_quotation_number ON international_trading(quotation_number);
CREATE INDEX IF NOT EXISTS idx_investor_form_quotation_number ON investor_form(quotation_number);
CREATE INDEX IF NOT EXISTS idx_bunkering_oil_supply_quotation_number ON bunkering_oil_supply(quotation_number);
CREATE INDEX IF NOT EXISTS idx_customs_clearance_quotation_number ON customs_clearance(quotation_number);
CREATE INDEX IF NOT EXISTS idx_handling_stevedoring_storage_quotation_number ON handling_stevedoring_storage(quotation_number);
CREATE INDEX IF NOT EXISTS idx_notes_quotation_number ON notes(quotation_number);

-- 6. Verify the setup
SELECT 'Quotation system setup completed successfully!' as status;
SELECT form_type, current_count FROM quotation_numbers ORDER BY form_type;
