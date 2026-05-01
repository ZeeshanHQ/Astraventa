-- Create demo_requests table
CREATE TABLE demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT NOT NULL,
  case_study_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed'))
);

-- Enable RLS
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert demo requests
CREATE POLICY "Anyone can insert demo requests" 
ON demo_requests FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to read demo requests
CREATE POLICY "Authenticated can read demo requests" 
ON demo_requests FOR SELECT 
TO authenticated 
USING (true);

-- Create indexes for faster queries
CREATE INDEX idx_demo_requests_email ON demo_requests(email);
CREATE INDEX idx_demo_requests_status ON demo_requests(status);
CREATE INDEX idx_demo_requests_created_at ON demo_requests(created_at DESC);
