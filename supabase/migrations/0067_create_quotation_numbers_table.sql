-- Create quotation_numbers table to track quotation number generation
CREATE TABLE IF NOT EXISTS quotation_numbers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_type TEXT NOT NULL UNIQUE,
    current_count INTEGER NOT NULL DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_quotation_numbers_form_type ON quotation_numbers(form_type);

-- Insert initial entries for all form types
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
