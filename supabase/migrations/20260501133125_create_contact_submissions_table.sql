-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service TEXT NOT NULL,
  budget TEXT,
  timeline TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'qualified', 'closed'))
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can insert contact submissions" 
ON contact_submissions FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to read contact submissions
CREATE POLICY "Authenticated can read contact submissions" 
ON contact_submissions FOR SELECT 
TO authenticated 
USING (true);

-- Allow authenticated users to update contact submissions
CREATE POLICY "Authenticated can update contact submissions" 
ON contact_submissions FOR UPDATE 
TO authenticated 
USING (true);

-- Create indexes for faster queries
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_service ON contact_submissions(service);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
