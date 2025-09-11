-- Missing Tables Schema for Moon Navigation and Trading Co.
-- Run this script in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Local Inland Services
CREATE TABLE IF NOT EXISTS local_inland_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    commodities JSONB NOT NULL,
    date DATE NOT NULL,
    inland_container BOOLEAN DEFAULT false,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- International Inland Services
CREATE TABLE IF NOT EXISTS international_inland_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    date DATE NOT NULL,
    commodities JSONB NOT NULL,
    inland_container BOOLEAN DEFAULT false,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Container Inland Services
CREATE TABLE IF NOT EXISTS container_inland_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    container_details JSONB NOT NULL DEFAULT '[]',
    supporting_files JSONB DEFAULT '{}',
    additional_information TEXT,
    effective_date DATE,
    expiry_date DATE,
    service_contract TEXT,
    additional_services JSONB DEFAULT '{}',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Contact Requests
CREATE TABLE IF NOT EXISTS contact_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    title TEXT,
    name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    email TEXT NOT NULL,
    number TEXT NOT NULL,
    message TEXT NOT NULL,
    quotation_number TEXT
);

-- Less Than Container Load
CREATE TABLE IF NOT EXISTS less_than_container_load (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    type_of_commodity TEXT NOT NULL,
    gross_volume NUMERIC NOT NULL,
    cargo_weight NUMERIC NOT NULL,
    package_type TEXT NOT NULL,
    validity TEXT NOT NULL,
    import_service BOOLEAN DEFAULT false,
    export_service BOOLEAN DEFAULT false,
    additional_information TEXT,
    vad TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Standard Container
CREATE TABLE IF NOT EXISTS standard_container (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    commodities JSONB NOT NULL,
    file TEXT,
    additional_information TEXT,
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    service_contract TEXT,
    value_added_services TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Oversized Container
CREATE TABLE IF NOT EXISTS oversized_container (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    commodities JSONB NOT NULL,
    shipment_type TEXT NOT NULL,
    file TEXT,
    additional_information TEXT,
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    service_contract TEXT,
    value_added_services TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    quotation_number TEXT
);

-- Handling, Stevedoring & Storage Services
CREATE TABLE IF NOT EXISTS handling_stevedoring_storage (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    import_export TEXT NOT NULL,
    port_airport TEXT NOT NULL,
    location TEXT NOT NULL,
    entry_mode TEXT NOT NULL,
    itemized_data JSONB,
    consolidated_data JSONB,
    handling_stevedoring BOOLEAN DEFAULT false,
    loading_cargo BOOLEAN DEFAULT false,
    discharging_cargo BOOLEAN DEFAULT false,
    lashing_cargo BOOLEAN DEFAULT false,
    unlashing_cargo BOOLEAN DEFAULT false,
    port_handling_stevedoring BOOLEAN DEFAULT false,
    cargo_reception_delivery BOOLEAN DEFAULT false,
    reception_before_shipment BOOLEAN DEFAULT false,
    reception_after_discharge BOOLEAN DEFAULT false,
    storage_warehousing BOOLEAN DEFAULT false,
    temporary_storage BOOLEAN DEFAULT false,
    additional_services JSONB DEFAULT '{}',
    supporting_files JSONB DEFAULT '[]',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Buy Container
CREATE TABLE IF NOT EXISTS buy_container (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    container_type TEXT NOT NULL,
    container_condition TEXT NOT NULL,
    container_number NUMERIC NOT NULL,
    pick_up_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Rent Container
CREATE TABLE IF NOT EXISTS rent_container (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    container_type TEXT NOT NULL,
    container_condition TEXT NOT NULL,
    container_number NUMERIC NOT NULL,
    rental_duration NUMERIC NOT NULL,
    pick_up_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT NOT NULL,
    detailed_location TEXT,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    quotation_number TEXT
);

-- Buy Vessel
CREATE TABLE IF NOT EXISTS buy_vessel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel_type TEXT NOT NULL,
    vessel_condition TEXT NOT NULL,
    vessel_number NUMERIC NOT NULL,
    delivery_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    detailed_location TEXT NOT NULL,
    required_specifications TEXT NOT NULL,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Rent Vessel
CREATE TABLE IF NOT EXISTS rent_vessel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel_type TEXT NOT NULL,
    vessel_condition TEXT NOT NULL,
    vessel_number NUMERIC NOT NULL,
    rental_duration NUMERIC NOT NULL,
    delivery_date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    detailed_location TEXT NOT NULL,
    required_specifications TEXT NOT NULL,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Sign Crew Members
CREATE TABLE IF NOT EXISTS sign_crew_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    port_name TEXT NOT NULL,
    vessel_name TEXT NOT NULL,
    vessel_imo NUMERIC NOT NULL,
    vessel_location TEXT,
    vessel_flag TEXT,
    port_of_crew_change TEXT,
    vessel_eta TEXT,
    vessel_etd TEXT,
    sign_on BOOLEAN DEFAULT false,
    sign_off BOOLEAN DEFAULT false,
    sign_on_members JSONB DEFAULT '[]',
    sign_off_members JSONB DEFAULT '[]',
    special_requests_on TEXT,
    special_requests_off TEXT,
    special_instructions TEXT,
    supporting_files TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Transit Spare Parts
CREATE TABLE IF NOT EXISTS transfer_spare_parts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    port_name TEXT NOT NULL,
    vessel_name TEXT NOT NULL,
    vessel_imo NUMERIC NOT NULL,
    vessel_location TEXT,
    vessel_flag TEXT,
    port_of_crew_change TEXT,
    vessel_eta TEXT,
    vessel_etd TEXT,
    airport_pickup TEXT,
    special_requests TEXT,
    supporting_files TEXT,
    request TEXT NOT NULL,
    spare_parts JSONB DEFAULT '[]',
    quotation_number TEXT
);

-- Special Services
CREATE TABLE IF NOT EXISTS special_services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel_name TEXT NOT NULL,
    vessel_imo TEXT NOT NULL,
    port_name TEXT NOT NULL,
    vessel_flag TEXT NOT NULL,
    vessel_eta TEXT NOT NULL,
    vessel_etd TEXT NOT NULL,
    vessel_location TEXT NOT NULL,
    requested_services TEXT NOT NULL,
    supporting_files JSONB DEFAULT '[]',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Bunkering Oil Supply
CREATE TABLE IF NOT EXISTS bunkering_oil_supply (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel_name TEXT NOT NULL,
    vessel_imo TEXT,
    port_name TEXT NOT NULL,
    vessel_flag TEXT NOT NULL,
    vessel_eta TEXT NOT NULL,
    vessel_etd TEXT NOT NULL,
    vessel_location TEXT NOT NULL,
    expected_delivery_date TEXT NOT NULL,
    services JSONB NOT NULL DEFAULT '{}',
    additional_information TEXT,
    supporting_files JSONB DEFAULT '[]',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- International Trading
CREATE TABLE IF NOT EXISTS international_trading (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    from_location TEXT NOT NULL,
    to_location TEXT NOT NULL,
    incoterm TEXT NOT NULL,
    type TEXT NOT NULL,
    quantity NUMERIC NOT NULL,
    length NUMERIC NOT NULL,
    width NUMERIC NOT NULL,
    height NUMERIC NOT NULL,
    weight NUMERIC NOT NULL,
    file TEXT,
    additional_information TEXT,
    shipping_method TEXT NOT NULL,
    shipping_details TEXT NOT NULL,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Ship Maintenance
CREATE TABLE IF NOT EXISTS ship_maintenance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel JSONB NOT NULL,
    required_services JSONB NOT NULL,
    dry_docking_repairs JSONB NOT NULL,
    mechanical_services JSONB NOT NULL,
    requested_services_details TEXT,
    supporting_files TEXT,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Customs Clearance
CREATE TABLE IF NOT EXISTS customs_clearance (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    clearance_type TEXT NOT NULL,
    port_airport TEXT,
    origin_port TEXT,
    destination_port TEXT,
    expected_date TEXT NOT NULL,
    commodity TEXT NOT NULL,
    is_dangerous BOOLEAN DEFAULT false,
    un_number_class TEXT,
    shipment_mode TEXT NOT NULL,
    container_type TEXT,
    container_size TEXT,
    number_of_containers NUMERIC,
    total_weight NUMERIC NOT NULL,
    weight_unit TEXT DEFAULT 'kg',
    total_volume NUMERIC,
    number_of_trucks NUMERIC,
    country_of_origin TEXT NOT NULL,
    final_destination TEXT NOT NULL,
    additional_services TEXT,
    supporting_files JSONB DEFAULT '[]',
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    title TEXT NOT NULL,
    city_country TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone TEXT,
    quotation_number TEXT
);

-- Roll On/Off
CREATE TABLE IF NOT EXISTS roll_on_off (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    commodities JSONB NOT NULL,
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    service_contract TEXT,
    value_added_service TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Heavy Lift
CREATE TABLE IF NOT EXISTS heavy_lift (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    commodities JSONB NOT NULL,
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    service_contract TEXT,
    value_added_service TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Investor Form
CREATE TABLE IF NOT EXISTS investor_form (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    full_name TEXT NOT NULL,
    company_name TEXT,
    position_title TEXT NOT NULL,
    nationality TEXT NOT NULL,
    email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    city_country_residence TEXT NOT NULL,
    investor_type TEXT NOT NULL,
    investor_type_other TEXT,
    investment_range TEXT NOT NULL,
    average_check_size TEXT,
    preferred_investment_type JSONB NOT NULL,
    preferred_investment_type_other TEXT,
    areas_of_interest JSONB NOT NULL,
    areas_of_interest_other TEXT,
    interest_rate_type TEXT,
    fixed_interest_rate TEXT,
    background_linkedin TEXT,
    investment_interest_reason TEXT,
    require_nda TEXT NOT NULL,
    additional_notes TEXT,
    quotation_number TEXT
);

-- Out of Gauge
CREATE TABLE IF NOT EXISTS out_of_gauge (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    commodities JSONB NOT NULL,
    file TEXT,
    additional_information TEXT,
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    service_contract TEXT,
    value_added_services TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Livestock Transportation
CREATE TABLE IF NOT EXISTS livestock_transportation (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    effective_date TEXT NOT NULL,
    expiry_date TEXT NOT NULL,
    livestock_details JSONB NOT NULL,
    special_handling TEXT,
    supporting_files JSONB,
    insurance JSONB NOT NULL,
    additional_services JSONB NOT NULL,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    city_country TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone TEXT,
    quotation_number TEXT
);

-- Tankers Quotation
CREATE TABLE IF NOT EXISTS tankers_quotation (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    effective_date TEXT NOT NULL,
    expiry_date TEXT NOT NULL,
    cargo_details JSONB NOT NULL,
    vessel_specs JSONB NOT NULL,
    supporting_files JSONB,
    cargo_lifting_points BOOLEAN DEFAULT false,
    additional_information TEXT,
    service_contract TEXT,
    safety_compliance JSONB NOT NULL,
    marine_insurance JSONB NOT NULL,
    additional_services JSONB NOT NULL,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    city_country TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone TEXT,
    quotation_number TEXT
);

-- Suez Canal Transit
CREATE TABLE IF NOT EXISTS suez_canal_transit (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    date TEXT NOT NULL,
    vessel JSONB NOT NULL,
    cargo JSONB NOT NULL,
    unit_carriage JSONB DEFAULT '{}',
    transit JSONB NOT NULL,
    additional_services JSONB DEFAULT '{}',
    additional_notes TEXT,
    supporting_files JSONB DEFAULT '[]',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Ship Management
CREATE TABLE IF NOT EXISTS ship_management (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel JSONB NOT NULL,
    services JSONB NOT NULL,
    vessel_condition JSONB NOT NULL,
    contract_duration JSONB NOT NULL,
    additional_information TEXT,
    supporting_files JSONB DEFAULT '{}',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Sell Container
CREATE TABLE IF NOT EXISTS sell_container (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    container_type TEXT NOT NULL,
    container_number NUMERIC NOT NULL,
    container_condition TEXT NOT NULL,
    date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT NOT NULL,
    detailed_location TEXT,
    rental_duration NUMERIC NOT NULL,
    duration_unit TEXT NOT NULL,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Sell Vessel
CREATE TABLE IF NOT EXISTS sell_vessel (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    vessel_type TEXT NOT NULL,
    date DATE NOT NULL,
    pick_up_location TEXT NOT NULL,
    drop_off_location TEXT NOT NULL,
    detailed_location TEXT,
    trading_area TEXT,
    required_specification TEXT NOT NULL,
    rental_duration NUMERIC NOT NULL,
    duration_unit TEXT NOT NULL,
    budget NUMERIC,
    additional_information TEXT,
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Ocean Freight Quotation
CREATE TABLE IF NOT EXISTS ocean_freight_quotation (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID NOT NULL REFERENCES users(id),
    routing JSONB NOT NULL,
    entry_mode TEXT NOT NULL,
    itemized_data JSONB DEFAULT '[]',
    consolidated_data JSONB DEFAULT '{}',
    supporting_files TEXT,
    additional_information TEXT,
    effective_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    service_contract_number TEXT,
    additional_services JSONB DEFAULT '{}',
    company_name TEXT NOT NULL,
    contact_person_name TEXT NOT NULL,
    title TEXT NOT NULL,
    country_of_origin TEXT NOT NULL,
    company_email TEXT NOT NULL,
    additional_email TEXT,
    phone_number TEXT NOT NULL,
    additional_phone_number TEXT,
    quotation_number TEXT
);

-- Enable RLS on all new tables
ALTER TABLE local_inland_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE international_inland_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE container_inland_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE less_than_container_load ENABLE ROW LEVEL SECURITY;
ALTER TABLE standard_container ENABLE ROW LEVEL SECURITY;
ALTER TABLE oversized_container ENABLE ROW LEVEL SECURITY;
ALTER TABLE handling_stevedoring_storage ENABLE ROW LEVEL SECURITY;
ALTER TABLE buy_container ENABLE ROW LEVEL SECURITY;
ALTER TABLE rent_container ENABLE ROW LEVEL SECURITY;
ALTER TABLE buy_vessel ENABLE ROW LEVEL SECURITY;
ALTER TABLE rent_vessel ENABLE ROW LEVEL SECURITY;
ALTER TABLE sign_crew_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE transfer_spare_parts ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bunkering_oil_supply ENABLE ROW LEVEL SECURITY;
ALTER TABLE international_trading ENABLE ROW LEVEL SECURITY;
ALTER TABLE ship_maintenance ENABLE ROW LEVEL SECURITY;
ALTER TABLE customs_clearance ENABLE ROW LEVEL SECURITY;
ALTER TABLE roll_on_off ENABLE ROW LEVEL SECURITY;
ALTER TABLE heavy_lift ENABLE ROW LEVEL SECURITY;
ALTER TABLE investor_form ENABLE ROW LEVEL SECURITY;
ALTER TABLE out_of_gauge ENABLE ROW LEVEL SECURITY;
ALTER TABLE livestock_transportation ENABLE ROW LEVEL SECURITY;
ALTER TABLE tankers_quotation ENABLE ROW LEVEL SECURITY;
ALTER TABLE suez_canal_transit ENABLE ROW LEVEL SECURITY;
ALTER TABLE ship_management ENABLE ROW LEVEL SECURITY;
ALTER TABLE sell_container ENABLE ROW LEVEL SECURITY;
ALTER TABLE sell_vessel ENABLE ROW LEVEL SECURITY;
ALTER TABLE ocean_freight_quotation ENABLE ROW LEVEL SECURITY;

-- Create policies for all new tables (users can only see their own data)
DO $$
DECLARE
    table_name TEXT;
    tables TEXT[] := ARRAY[
        'local_inland_services', 'international_inland_services', 'container_inland_services',
        'less_than_container_load', 'standard_container', 'oversized_container',
        'handling_stevedoring_storage', 'buy_container', 'rent_container',
        'buy_vessel', 'rent_vessel', 'sign_crew_members', 'transfer_spare_parts',
        'special_services', 'bunkering_oil_supply', 'international_trading',
        'ship_maintenance', 'customs_clearance', 'roll_on_off', 'heavy_lift',
        'investor_form', 'out_of_gauge', 'livestock_transportation', 'tankers_quotation',
        'suez_canal_transit', 'ship_management', 'sell_container', 'sell_vessel',
        'ocean_freight_quotation'
    ];
BEGIN
    FOREACH table_name IN ARRAY tables
    LOOP
        EXECUTE format('
            CREATE POLICY IF NOT EXISTS "Users can view own %I" ON %I
                FOR SELECT USING (auth.uid() = user_id);
        ', table_name, table_name);
        
        EXECUTE format('
            CREATE POLICY IF NOT EXISTS "Users can insert own %I" ON %I
                FOR INSERT WITH CHECK (auth.uid() = user_id);
        ', table_name, table_name);
        
        EXECUTE format('
            CREATE POLICY IF NOT EXISTS "Users can update own %I" ON %I
                FOR UPDATE USING (auth.uid() = user_id);
        ', table_name, table_name);
    END LOOP;
END $$;

-- Special policy for contact_requests (no user_id)
CREATE POLICY IF NOT EXISTS "Anyone can insert contact_requests" ON contact_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Authenticated users can view contact_requests" ON contact_requests
    FOR SELECT USING (auth.role() = 'authenticated');

-- Success message
SELECT 'Missing tables created successfully! All tables are now in place and matching your codebase.' as message;
