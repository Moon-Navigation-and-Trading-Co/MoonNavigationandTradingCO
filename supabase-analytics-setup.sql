-- =====================================================
-- MOON NAVIGATION & TRADING CO - ANALYTICS SETUP
-- =====================================================
-- Run this script in your Supabase SQL Editor
-- Project: kwmsymzdzzhowlpuxddc
-- =====================================================

-- Step 1: Create analytics page views table
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

-- Step 2: Create analytics sessions table
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

-- Step 3: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_session_id ON analytics_page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_timestamp ON analytics_page_views(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_page ON analytics_page_views(page);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_country ON analytics_page_views(country);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_device_type ON analytics_page_views(device_type);
CREATE INDEX IF NOT EXISTS idx_analytics_page_views_traffic_source ON analytics_page_views(traffic_source);

CREATE INDEX IF NOT EXISTS idx_analytics_sessions_session_id ON analytics_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_timestamp ON analytics_sessions(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_event_type ON analytics_sessions(event_type);

-- Step 4: Enable Row Level Security
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;

-- Step 5: Create RLS policies for analytics tables
-- Allow anonymous inserts for tracking (no authentication required for tracking)
CREATE POLICY "Allow anonymous analytics tracking" ON analytics_page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous session tracking" ON analytics_sessions FOR INSERT WITH CHECK (true);

-- Allow admins to view all analytics data
CREATE POLICY "Admins can view all analytics page views" ON analytics_page_views FOR SELECT USING (true);
CREATE POLICY "Admins can view all analytics sessions" ON analytics_sessions FOR SELECT USING (true);

-- Step 6: Insert sample data for testing
INSERT INTO analytics_page_views (session_id, timestamp, page, user_agent, referrer, screen_resolution, timezone, language, country, city, ip_address, device_type, traffic_source) VALUES
('session_001', NOW() - INTERVAL '1 hour', '/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'https://google.com', '1920x1080', 'America/New_York', 'en-US', 'United States', 'New York', '192.168.1.1', 'desktop', 'organic_search'),
('session_002', NOW() - INTERVAL '30 minutes', '/services', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)', '', '375x667', 'Europe/London', 'en-GB', 'United Kingdom', 'London', '192.168.1.2', 'mobile', 'direct'),
('session_003', NOW() - INTERVAL '15 minutes', '/contact', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'https://facebook.com', '1440x900', 'Europe/Berlin', 'de-DE', 'Germany', 'Berlin', '192.168.1.3', 'desktop', 'social_media'),
('session_004', NOW() - INTERVAL '5 minutes', '/about', 'Mozilla/5.0 (iPad; CPU OS 14_7_1 like Mac OS X)', 'https://linkedin.com', '1024x768', 'America/Toronto', 'en-CA', 'Canada', 'Toronto', '192.168.1.4', 'tablet', 'referral'),
('session_005', NOW() - INTERVAL '2 minutes', '/quote', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'https://bing.com', '1366x768', 'Australia/Sydney', 'en-AU', 'Australia', 'Sydney', '192.168.1.5', 'desktop', 'organic_search'),
('session_006', NOW() - INTERVAL '45 minutes', '/ocean-freight', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'https://yahoo.com', '1600x900', 'Asia/Dubai', 'en-AE', 'United Arab Emirates', 'Dubai', '192.168.1.6', 'desktop', 'organic_search'),
('session_007', NOW() - INTERVAL '20 minutes', '/air-freight', 'Mozilla/5.0 (Android 11; Mobile)', 'https://twitter.com', '360x640', 'Asia/Tokyo', 'ja-JP', 'Japan', 'Tokyo', '192.168.1.7', 'mobile', 'social_media'),
('session_008', NOW() - INTERVAL '10 minutes', '/container-services', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'https://linkedin.com', '1440x900', 'Europe/Paris', 'fr-FR', 'France', 'Paris', '192.168.1.8', 'desktop', 'referral'),
('session_009', NOW() - INTERVAL '8 minutes', '/ship-agency', 'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X)', 'https://google.com', '1024x768', 'America/Mexico_City', 'es-MX', 'Mexico', 'Mexico City', '192.168.1.9', 'tablet', 'organic_search'),
('session_010', NOW() - INTERVAL '1 minute', '/invest', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'https://bing.com', '1920x1080', 'Europe/Rome', 'it-IT', 'Italy', 'Rome', '192.168.1.10', 'desktop', 'organic_search');

-- Step 7: Insert sample sessions data
INSERT INTO analytics_sessions (session_id, event_type, timestamp, session_duration, last_activity, page, country, city, device_type) VALUES
('session_001', 'session_start', NOW() - INTERVAL '1 hour', 3600000, 1800000, '/', 'United States', 'New York', 'desktop'),
('session_002', 'session_start', NOW() - INTERVAL '30 minutes', 1800000, 900000, '/services', 'United Kingdom', 'London', 'mobile'),
('session_003', 'session_start', NOW() - INTERVAL '15 minutes', 900000, 450000, '/contact', 'Germany', 'Berlin', 'desktop'),
('session_004', 'session_start', NOW() - INTERVAL '5 minutes', 300000, 150000, '/about', 'Canada', 'Toronto', 'tablet'),
('session_005', 'session_start', NOW() - INTERVAL '2 minutes', 120000, 60000, '/quote', 'Australia', 'Sydney', 'desktop'),
('session_006', 'session_start', NOW() - INTERVAL '45 minutes', 2700000, 1350000, '/ocean-freight', 'United Arab Emirates', 'Dubai', 'desktop'),
('session_007', 'session_start', NOW() - INTERVAL '20 minutes', 1200000, 600000, '/air-freight', 'Japan', 'Tokyo', 'mobile'),
('session_008', 'session_start', NOW() - INTERVAL '10 minutes', 600000, 300000, '/container-services', 'France', 'Paris', 'desktop'),
('session_009', 'session_start', NOW() - INTERVAL '8 minutes', 480000, 240000, '/ship-agency', 'Mexico', 'Mexico City', 'tablet'),
('session_010', 'session_start', NOW() - INTERVAL '1 minute', 60000, 30000, '/invest', 'Italy', 'Rome', 'desktop');

-- Step 8: Verify the setup
SELECT 
    'analytics_page_views' as table_name,
    COUNT(*) as record_count
FROM analytics_page_views
UNION ALL
SELECT 
    'analytics_sessions' as table_name,
    COUNT(*) as record_count
FROM analytics_sessions;

-- =====================================================
-- SETUP COMPLETE! 
-- =====================================================
-- Your analytics tables are now ready for real data!
-- Visit: http://localhost:3000/en/admin/analytics
-- ===================================================== 