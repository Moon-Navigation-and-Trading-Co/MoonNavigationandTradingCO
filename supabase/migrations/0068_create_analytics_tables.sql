-- Create analytics page views table
CREATE TABLE IF NOT EXISTS analytics_page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    page TEXT NOT NULL,
    user_agent TEXT,
    referrer TEXT,
    screen_resolution TEXT,
    timezone TEXT,
    language TEXT,
    country TEXT,
    city TEXT,
    ip_address TEXT,
    device_type TEXT,
    traffic_source TEXT,
    event_type TEXT DEFAULT 'page_view',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create analytics sessions table
CREATE TABLE IF NOT EXISTS analytics_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    timestamp TIMESTAMPTZ NOT NULL,
    session_duration INTEGER,
    last_activity INTEGER,
    page TEXT,
    country TEXT,
    city TEXT,
    device_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_session_id ON analytics_page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_timestamp ON analytics_page_views(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_page ON analytics_page_views(page);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_country ON analytics_page_views(country);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_device_type ON analytics_page_views(device_type);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_traffic_source ON analytics_page_views(traffic_source);

CREATE INDEX IF NOT EXISTS idx_analytics_sessions_session_id ON analytics_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_timestamp ON analytics_sessions(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_event_type ON analytics_sessions(event_type);

-- Enable Row Level Security
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for analytics tables
-- Allow admins to view all analytics data
CREATE POLICY "Admins can view all analytics page views" ON analytics_page_views
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can insert analytics page views" ON analytics_page_views
    FOR INSERT WITH CHECK (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can view all analytics sessions" ON analytics_sessions
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

CREATE POLICY "Admins can insert analytics sessions" ON analytics_sessions
    FOR INSERT WITH CHECK (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

-- Allow anonymous inserts for tracking (no authentication required for tracking)
CREATE POLICY "Allow anonymous analytics tracking" ON analytics_page_views
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous session tracking" ON analytics_sessions
    FOR INSERT WITH CHECK (true);

-- Create a function to clean old analytics data (older than 90 days)
CREATE OR REPLACE FUNCTION clean_old_analytics_data()
RETURNS void AS $$
BEGIN
    DELETE FROM analytics_page_views 
    WHERE timestamp < NOW() - INTERVAL '90 days';
    
    DELETE FROM analytics_sessions 
    WHERE timestamp < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql;

-- Create a scheduled job to clean old data (runs daily)
-- Note: This requires pg_cron extension to be enabled
-- SELECT cron.schedule('clean-analytics', '0 2 * * *', 'SELECT clean_old_analytics_data();'); 