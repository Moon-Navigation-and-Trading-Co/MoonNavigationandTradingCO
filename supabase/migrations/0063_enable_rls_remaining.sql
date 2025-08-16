-- Enable Row Level Security on remaining tables
ALTER TABLE "ContactRequests" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "investor_form" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "heavy_lift" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ship_maintenance" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "international_trading" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "less_than_container_load" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "project_cargo_services" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "oversized_container" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ship_management" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "special_services" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for ContactRequests table (no user_id, allow all authenticated users)
CREATE POLICY "Allow authenticated users to view contact requests" ON "ContactRequests"
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to insert contact requests" ON "ContactRequests"
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update contact requests" ON "ContactRequests"
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create RLS policies for investor_form table
CREATE POLICY "Users can view their own investor forms" ON "investor_form"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own investor forms" ON "investor_form"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own investor forms" ON "investor_form"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for heavy_lift table
CREATE POLICY "Users can view their own heavy lift requests" ON "heavy_lift"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own heavy lift requests" ON "heavy_lift"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own heavy lift requests" ON "heavy_lift"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for ship_maintenance table
CREATE POLICY "Users can view their own ship maintenance requests" ON "ship_maintenance"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own ship maintenance requests" ON "ship_maintenance"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ship maintenance requests" ON "ship_maintenance"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for international_trading table
CREATE POLICY "Users can view their own international trading requests" ON "international_trading"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own international trading requests" ON "international_trading"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own international trading requests" ON "international_trading"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for less_than_container_load table
CREATE POLICY "Users can view their own LCL requests" ON "less_than_container_load"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own LCL requests" ON "less_than_container_load"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own LCL requests" ON "less_than_container_load"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for project_cargo_services table
CREATE POLICY "Users can view their own project cargo requests" ON "project_cargo_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own project cargo requests" ON "project_cargo_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own project cargo requests" ON "project_cargo_services"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for oversized_container table
CREATE POLICY "Users can view their own oversized container requests" ON "oversized_container"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own oversized container requests" ON "oversized_container"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own oversized container requests" ON "oversized_container"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for ship_management table
CREATE POLICY "Users can view their own ship management requests" ON "ship_management"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own ship management requests" ON "ship_management"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ship management requests" ON "ship_management"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for special_services table
CREATE POLICY "Users can view their own special service requests" ON "special_services"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own special service requests" ON "special_services"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own special service requests" ON "special_services"
    FOR UPDATE USING (auth.uid() = user_id); 