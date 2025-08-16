-- Enable Row Level Security on all public tables
ALTER TABLE "users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "air_freight_services" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "buy_container" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "buy_vessel" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "rent_container" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "rent_vessel" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "request_for_pda" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "sign_crew_members" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "suez_canal_transit" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ocean_freight_quotations" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "tankers_quotation" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "handling_stevedoring_storage" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "international_inland_services" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "container_inland_services" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "local_inland_services" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "dangerous_cargo_services" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "roll_on_off" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for users table
CREATE POLICY "Users can view their own data" ON "users"
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert their own data" ON "users"
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON "users"
    FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for all service tables
CREATE POLICY "Users can view their own service requests" ON "air_freight_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own service requests" ON "air_freight_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own service requests" ON "air_freight_services"
    FOR UPDATE USING (auth.uid() = user_id);

-- Apply similar policies to other tables
CREATE POLICY "Users can view their own requests" ON "buy_container"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "buy_container"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "buy_container"
    FOR UPDATE USING (auth.uid() = user_id);

-- Continue for other tables...
CREATE POLICY "Users can view their own requests" ON "buy_vessel"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "buy_vessel"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "buy_vessel"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "rent_container"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "rent_container"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "rent_container"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "rent_vessel"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "rent_vessel"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "rent_vessel"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "request_for_pda"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "request_for_pda"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "request_for_pda"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "sign_crew_members"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "sign_crew_members"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "sign_crew_members"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "suez_canal_transit"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "suez_canal_transit"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "suez_canal_transit"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "ocean_freight_quotations"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "ocean_freight_quotations"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "ocean_freight_quotations"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "tankers_quotation"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "tankers_quotation"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "tankers_quotation"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "handling_stevedoring_storage"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "handling_stevedoring_storage"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "handling_stevedoring_storage"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "international_inland_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "international_inland_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "international_inland_services"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "container_inland_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "container_inland_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "container_inland_services"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "local_inland_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "local_inland_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "local_inland_services"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "dangerous_cargo_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "dangerous_cargo_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "dangerous_cargo_services"
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own requests" ON "roll_on_off"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own requests" ON "roll_on_off"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON "roll_on_off"
    FOR UPDATE USING (auth.uid() = user_id); 