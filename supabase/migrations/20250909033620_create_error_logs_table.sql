-- Create error_logs table
CREATE TABLE IF NOT EXISTS error_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  error_details TEXT,
  error_stack TEXT,
  user_id UUID REFERENCES auth.users(id),
  page_url TEXT,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved BOOLEAN DEFAULT FALSE,
  severity TEXT DEFAULT 'error' CHECK (severity IN ('error', 'warning', 'info'))
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON error_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_error_logs_severity ON error_logs(severity);
CREATE INDEX IF NOT EXISTS idx_error_logs_resolved ON error_logs(resolved);

-- Enable RLS (Row Level Security)
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to read error logs
CREATE POLICY "Allow authenticated users to read error logs" ON error_logs
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow service role to insert error logs
CREATE POLICY "Allow service role to insert error logs" ON error_logs
  FOR INSERT WITH CHECK (true);

-- Create policy to allow service role to update error logs
CREATE POLICY "Allow service role to update error logs" ON error_logs
  FOR UPDATE USING (true);
