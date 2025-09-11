-- Create error_logs table
CREATE TABLE IF NOT EXISTS error_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  error_details TEXT,
  error_stack TEXT,
  user_id UUID REFERENCES auth.users(id),
  page_url TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON error_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_error_logs_user_id ON error_logs(user_id);

-- Enable Row Level Security
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow authenticated users to insert error logs
CREATE POLICY "Allow authenticated users to insert error logs" ON error_logs
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow service role to insert error logs (for server-side errors)
CREATE POLICY "Allow service role to insert error logs" ON error_logs
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

-- Create policy to allow users to view their own error logs
CREATE POLICY "Users can view their own error logs" ON error_logs
  FOR SELECT USING (auth.uid() = user_id);

-- Create policy to allow admins to view all error logs
CREATE POLICY "Admins can view all error logs" ON error_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );
