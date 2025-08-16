-- Enable Row Level Security on final remaining tables
ALTER TABLE "transfer_spare_parts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "out_of_gauge" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "standard_container" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "livestock_transportation" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for transfer_spare_parts table
CREATE POLICY "Users can view their own transfer spare parts requests" ON "transfer_spare_parts"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own transfer spare parts requests" ON "transfer_spare_parts"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own transfer spare parts requests" ON "transfer_spare_parts"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for out_of_gauge table
CREATE POLICY "Users can view their own out of gauge requests" ON "out_of_gauge"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own out of gauge requests" ON "out_of_gauge"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own out of gauge requests" ON "out_of_gauge"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for standard_container table
CREATE POLICY "Users can view their own standard container requests" ON "standard_container"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own standard container requests" ON "standard_container"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own standard container requests" ON "standard_container"
    FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for livestock_transportation table
CREATE POLICY "Users can view their own livestock transportation requests" ON "livestock_transportation"
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own livestock transportation requests" ON "livestock_transportation"
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own livestock transportation requests" ON "livestock_transportation"
    FOR UPDATE USING (auth.uid() = user_id); 