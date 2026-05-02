-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  confirmation_token TEXT UNIQUE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  preferences JSONB DEFAULT '{}',
  last_newsletter_sent_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for newsletter signup)
CREATE POLICY "Anyone can insert newsletter subscribers" 
ON newsletter_subscribers FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to read and update
CREATE POLICY "Authenticated can manage newsletter subscribers" 
ON newsletter_subscribers FOR ALL 
TO authenticated 
USING (true)
WITH CHECK (true);

-- Create indexes for faster queries
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_status ON newsletter_subscribers(status);
CREATE INDEX idx_newsletter_subscribers_confirmation_token ON newsletter_subscribers(confirmation_token);
CREATE INDEX idx_newsletter_subscribers_created_at ON newsletter_subscribers(created_at DESC);
